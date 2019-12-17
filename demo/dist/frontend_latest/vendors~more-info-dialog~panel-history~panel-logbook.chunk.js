(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog~panel-history~panel-logbook"],{

/***/ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/src/vaadin-button.js ***!
  \*****************************************************************/
/*! exports provided: ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class ButtonElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`;
  }

  static get is() {
    return 'vaadin-button';
  }

  static get version() {
    return '2.2.1';
  }

  ready() {
    super.ready(); // Leaving default role in the native button, makes navigation announcement
    // being different when using focus navigation (tab) versus using normal
    // navigation (arrows). The first way announces the label on a button
    // since the focus is moved programmatically, and the second on a group.

    this.setAttribute('role', 'button');
    this.$.button.setAttribute('role', 'presentation');

    this._addActiveListeners();
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback(); // `active` state is preserved when the element is disconnected between keydown and keyup events.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('active')) {
      this.removeAttribute('active');
    }
  }

  _addActiveListeners() {
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'down', () => !this.disabled && this.setAttribute('active', ''));
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'up', () => this.removeAttribute('active'));
    this.addEventListener('keydown', e => !this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && this.setAttribute('active', ''));
    this.addEventListener('keyup', () => this.removeAttribute('active'));
    this.addEventListener('blur', () => this.removeAttribute('active'));
  }
  /**
   * @protected
   */


  get focusElement() {
    return this.$.button;
  }

}

customElements.define(ButtonElement.is, ButtonElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="material-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        padding: 8px;
        min-width: 64px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: baseline;
        justify-content: center;
        border-radius: 4px;
        color: var(--material-primary-text-color);
        font-family: var(--material-font-family);
        text-transform: uppercase;
        font-size: var(--material-button-font-size);
        line-height: 20px;
        font-weight: 500;
        letter-spacing: 0.05em;
        white-space: nowrap;
        overflow: hidden;
        transition: box-shadow 0.2s;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @-moz-document url-prefix() {
        :host {
          vertical-align: -13px;
        }
      }

      :host::before,
      :host::after {
        content: "";
        pointer-events: none;
        position: absolute;
        border-radius: inherit;
        opacity: 0;
        background-color: currentColor;
      }

      :host::before {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: opacity 0.5s;
      }

      :host::after {
        border-radius: 50%;
        width: 320px;
        height: 320px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.9s;
      }

      [part="label"] ::slotted(*) {
        vertical-align: middle;
      }

      :host(:hover)::before,
      :host([focus-ring])::before {
        opacity: 0.08;
        transition-duration: 0.2s;
      }

      :host([active])::before {
        opacity: 0.16;
        transition: opacity 0.4s;
      }

      :host([active])::after {
        transform: translate(-50%, -50%) scale(0.0000001); /* animation works weirdly with scale(0) */
        opacity: 0.1;
        transition: 0s;
      }

      :host(:hover:not([active]))::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--material-disabled-text-color);
      }

      /* Contained and outline variants */
      :host([theme~="contained"]),
      :host([theme~="outlined"]) {
        padding: 8px 16px;
      }

      :host([theme~="outlined"]) {
        box-shadow: inset 0 0 0 1px var(--_material-button-outline-color, rgba(0, 0, 0, 0.2));
      }

      :host([theme~="contained"]:not([disabled])) {
        background-color: var(--material-primary-color);
        color: var(--material-primary-contrast-color);
        box-shadow: var(--material-shadow-elevation-2dp);
      }

      :host([theme~="contained"][disabled]) {
        background-color: var(--material-secondary-background-color);
      }

      :host([theme~="contained"]:hover) {
        box-shadow: var(--material-shadow-elevation-4dp);
      }

      :host([theme~="contained"][active]) {
        box-shadow: var(--material-shadow-elevation-8dp);
      }

      /* Icon alignment */

      [part] ::slotted(iron-icon) {
        display: block;
        width: 18px;
        height: 18px;
      }

      [part="prefix"] ::slotted(iron-icon) {
        margin-right: 8px;
        margin-left: -4px;
      }

      [part="suffix"] ::slotted(iron-icon) {
        margin-left: 8px;
        margin-right: -4px;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-button-styles.js */ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js");
/* harmony import */ var _src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ControlStateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function() { return ControlStateMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 */
const TabIndexMixin = superClass => class VaadinTabIndexMixin extends superClass {
  static get properties() {
    var properties = {
      /**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
        observer: '_tabindexChanged'
      }
    };

    if (window.ShadyDOM) {
      // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
      properties['tabIndex'] = properties.tabindex;
    }

    return properties;
  }

};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


const ControlStateMixin = superClass => class VaadinControlStateMixin extends TabIndexMixin(superClass) {
  static get properties() {
    return {
      /**
       * Specify that this control should have input focus when the page loads.
       */
      autofocus: {
        type: Boolean
      },

      /**
       * Stores the previous value of tabindex attribute of the disabled element
       */
      _previousTabIndex: {
        type: Number
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },
      _isShiftTabbing: {
        type: Boolean
      }
    };
  }

  ready() {
    this.addEventListener('focusin', e => {
      if (e.composedPath()[0] === this) {
        this._focus(e);
      } else if (e.composedPath().indexOf(this.focusElement) !== -1 && !this.disabled) {
        this._setFocused(true);
      }
    });
    this.addEventListener('focusout', e => this._setFocused(false)); // In super.ready() other 'focusin' and 'focusout' listeners might be
    // added, so we call it after our own ones to ensure they execute first.
    // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
    // input field on iOS after “Done” is pressed.

    super.ready(); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
    // where focusout event does not go out of shady DOM because composed property in the event is not true

    const ensureEventComposed = e => {
      if (!e.composed) {
        e.target.dispatchEvent(new CustomEvent(e.type, {
          bubbles: true,
          composed: true,
          cancelable: false
        }));
      }
    };

    this.shadowRoot.addEventListener('focusin', ensureEventComposed);
    this.shadowRoot.addEventListener('focusout', ensureEventComposed);
    this.addEventListener('keydown', e => {
      if (!e.defaultPrevented && e.keyCode === 9) {
        if (e.shiftKey) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);

          this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


          setTimeout(() => this._isShiftTabbing = false, 0);
        } else {
          // Workaround for FF63-65 bug that causes the focus to get lost when
          // blurring a slotted component with focusable shadow root content
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
          // TODO: Remove when safe
          const firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

          if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && this.parentNode && this.nextSibling) {
            const fakeTarget = document.createElement('input');
            fakeTarget.style.position = 'absolute';
            fakeTarget.style.opacity = 0;
            fakeTarget.tabIndex = this.tabIndex;
            this.parentNode.insertBefore(fakeTarget, this.nextSibling);
            fakeTarget.focus();
            fakeTarget.addEventListener('focusout', () => this.parentNode.removeChild(fakeTarget));
          }
        }
      }
    });

    if (this.autofocus && !this.focused && !this.disabled) {
      window.requestAnimationFrame(() => {
        this._focus();

        this._setFocused(true);

        this.setAttribute('focus-ring', '');
      });
    }

    this._boundKeydownListener = this._bodyKeydownListener.bind(this);
    this._boundKeyupListener = this._bodyKeyupListener.bind(this);
  }
  /**
   * @protected
   */


  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener('keydown', this._boundKeydownListener, true);
    document.body.addEventListener('keyup', this._boundKeyupListener, true);
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener('keydown', this._boundKeydownListener, true);
    document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('focused')) {
      this._setFocused(false);
    }
  }

  _setFocused(focused) {
    if (focused) {
      this.setAttribute('focused', '');
    } else {
      this.removeAttribute('focused');
    } // focus-ring is true when the element was focused from the keyboard.
    // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI


    if (focused && this._tabPressed) {
      this.setAttribute('focus-ring', '');
    } else {
      this.removeAttribute('focus-ring');
    }
  }

  _bodyKeydownListener(e) {
    this._tabPressed = e.keyCode === 9;
  }

  _bodyKeyupListener() {
    this._tabPressed = false;
  }
  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the actual focusable element in the component.
   */


  get focusElement() {
    window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
    return this;
  }

  _focus(e) {
    if (this._isShiftTabbing) {
      return;
    }

    this.focusElement.focus();

    this._setFocused(true);
  }
  /**
   * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
   * @private
   */


  focus() {
    if (!this.focusElement || this.disabled) {
      return;
    }

    this.focusElement.focus();

    this._setFocused(true);
  }
  /**
   * Native bluring in the host element does nothing because it does not have the focus.
   * In chrome it works, but not in FF.
   * @private
   */


  blur() {
    this.focusElement.blur();

    this._setFocused(false);
  }

  _disabledChanged(disabled) {
    this.focusElement.disabled = disabled;

    if (disabled) {
      this.blur();
      this._previousTabIndex = this.tabindex;
      this.tabindex = -1;
      this.setAttribute('aria-disabled', 'true');
    } else {
      if (typeof this._previousTabIndex !== 'undefined') {
        this.tabindex = this._previousTabIndex;
      }

      this.removeAttribute('aria-disabled');
    }
  }

  _tabindexChanged(tabindex) {
    if (tabindex !== undefined) {
      this.focusElement.tabIndex = tabindex;
    }

    if (this.disabled && this.tabindex) {
      // If tabindex attribute was changed while checkbox was disabled
      if (this.tabindex !== -1) {
        this._previousTabIndex = this.tabindex;
      }

      this.tabindex = tabindex = undefined;
    }

    if (window.ShadyDOM) {
      this.setProperties({
        tabIndex: tabindex,
        tabindex: tabindex
      });
    }
  }
  /**
   * @protected
   */


  click() {
    if (!this.disabled) {
      super.click();
    }
  }

};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js ***!
  \**********************************************************************************/
/*! exports provided: DatePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerHelper", function() { return DatePickerHelper; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DatePickerHelper = class VaadinDatePickerHelper {
  /**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */
  static _getISOWeekNumber(date) {
    // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
    var dayOfWeek = date.getDay(); // 0 == sunday
    // ISO 8601 use weeks that start on monday so we use
    // mon=1,tue=2,...sun=7;

    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    } // Find nearest thursday (defines the week in ISO 8601). The week number
    // for the nearest thursday is the same as for the target date.


    var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

    var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
    var firstOfJanuary = new Date(0, 0);
    firstOfJanuary.setFullYear(nearestThursday.getFullYear());
    var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
    // when the given date is inside daylight saving time period.

    var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
    return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
  }
  /**
   * Check if two dates are equal.
   *
   * @param {Date} date1
   * @param {Date} date2
   * @return {Boolean} True if the given date objects refer to the same date
   */


  static _dateEquals(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  /**
   * Check if the given date is in the range of allowed dates.
   *
   * @param {Date} date The date to check
   * @param {Date} min Range start
   * @param {Date} max Range end
   * @return {Boolean} True if the date is in the range
   */


  static _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }
  /**
   * Get closest date from array of dates.
   *
   * @param {Date} date The date to compare dates with
   * @param {Array} dates Array of date objects
   * @return {Date} Closest date
   */


  static _getClosestDate(date, dates) {
    return dates.filter(date => date !== undefined).reduce((closestDate, candidate) => {
      if (!candidate) {
        return closestDate;
      }

      if (!closestDate) {
        return candidate;
      }

      var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
      var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
      return candidateDiff < closestDateDiff ? candidate : closestDate;
    });
  }
  /**
   * Extracts the basic component parts of a date (day, month and year)
   * to the expected format.
   */


  static _extractDateParts(date) {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: DatePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMixin", function() { return DatePickerMixin; });
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * @polymerMixin
 */

const DatePickerMixin = subclass => class VaadinDatePickerMixin extends Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass) {
  static get properties() {
    return {
      /**
       * The current selected date.
       */
      _selectedDate: {
        type: Date
      },
      _focusedDate: Date,

      /**
       * The value for this element.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      value: {
        type: String,
        observer: '_valueChanged',
        notify: true,
        value: ''
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       */
      initialPosition: String,

      /**
       * The label for this element.
       */
      label: String,

      /**
       * Set true to open the date selector overlay.
       */
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_openedChanged'
      },

      /**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */
      showWeekNumbers: {
        type: Boolean
      },
      _fullscreen: {
        value: false,
        observer: '_fullscreenChanged'
      },
      _fullscreenMediaQuery: {
        value: '(max-width: 420px), (max-height: 420px)'
      },
      // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
      // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
      _touchPrevented: Array,

      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
           {
            // An array with the full names of months starting
            // with January.
            monthNames: [
              'January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September',
              'October', 'November', 'December'
            ],
             // An array of weekday names starting with Sunday. Used
            // in screen reader announcements.
            weekdays: [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'
            ],
             // An array of short weekday names starting with Sunday.
            // Displayed in the calendar.
            weekdaysShort: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
             // An integer indicating the first day of the week
            // (0 = Sunday, 1 = Monday, etc.).
            firstDayOfWeek: 0,
             // Used in screen reader announcements along with week
            // numbers, if they are displayed.
            week: 'Week',
             // Translation of the Calendar icon button title.
            calendar: 'Calendar',
             // Translation of the Clear icon button title.
            clear: 'Clear',
             // Translation of the Today shortcut button text.
            today: 'Today',
             // Translation of the Cancel button text.
            cancel: 'Cancel',
             // A function to format given `Object` as
            // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            formatDate: d => {
              // returns a string representation of the given
              // object in 'MM/DD/YYYY' -format
            },
             // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            // Must properly parse (at least) text formatted by `formatDate`.
            // Setting the property to null will disable keyboard input feature.
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            parseDate: text => {
              // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
              // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            }
             // A function to format given `monthName` and
            // `fullYear` integer as calendar title string.
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          }
        *
       * @default {English/US}
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            firstDayOfWeek: 0,
            week: 'Week',
            calendar: 'Calendar',
            clear: 'Clear',
            today: 'Today',
            cancel: 'Cancel',
            formatDate: d => {
              const yearStr = String(d.year).replace(/\d+/, y => '0000'.substr(y.length) + y);
              return [d.month + 1, d.day, yearStr].join('/');
            },
            parseDate: text => {
              const parts = text.split('/');
              const today = new Date();
              let date,
                  month = today.getMonth(),
                  year = today.getFullYear();

              if (parts.length === 3) {
                year = parseInt(parts[2]);

                if (parts[2].length < 3 && year >= 0) {
                  year += year < 50 ? 2000 : 1900;
                }

                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 2) {
                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 1) {
                date = parseInt(parts[0]);
              }

              if (date !== undefined) {
                return {
                  day: date,
                  month,
                  year
                };
              }
            },
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          };
        }
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      min: {
        type: String,
        observer: '_minChanged'
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      max: {
        type: String,
        observer: '_maxChanged'
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      _minDate: {
        type: Date,
        // null does not work here because minimizer passes undefined to overlay (#351)
        value: ''
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      _maxDate: {
        type: Date,
        value: ''
      },
      _noInput: {
        type: Boolean,
        computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
      },
      _ios: {
        type: Boolean,
        value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
      },
      _webkitOverflowScroll: {
        type: Boolean,
        value: document.createElement('div').style.webkitOverflowScrolling === ''
      },
      _ignoreAnnounce: {
        value: true
      },
      _focusOverlayOnOpen: Boolean,
      _overlayInitialized: Boolean
    };
  }

  static get observers() {
    return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
  }

  ready() {
    super.ready();
    this._boundOnScroll = this._onScroll.bind(this);
    this._boundFocus = this._focus.bind(this);
    this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', e => {
      // FIXME(platosha): use preventDefault in the text field clear button,
      // then the following composedPath check could be simplified down
      // to `if (!e.defaultPrevented)`.
      // https://github.com/vaadin/vaadin-text-field/issues/352
      const inputIndex = e.composedPath().indexOf(this._inputElement);

      if (e.composedPath().slice(0, inputIndex).filter(el => el.getAttribute && el.getAttribute('part') === 'clear-button').length === 0) {
        this.open();
      }
    });
    this.addEventListener('touchend', this._preventDefault.bind(this));
    this.addEventListener('keydown', this._onKeydown.bind(this));
    this.addEventListener('input', this._onUserInput.bind(this));
    this.addEventListener('focus', e => this._noInput && e.target.blur());
  }

  _initOverlay() {
    this.$.overlay.removeAttribute('disable-upgrade');
    this._overlayInitialized = true;
    this.$.overlay.addEventListener('opened-changed', e => this.opened = e.detail.value);

    this._overlayContent.addEventListener('close', this._close.bind(this));

    this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

    this._overlayContent.addEventListener('focus', () => this.focusElement._setFocused(true));

    this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._overlayInitialized) {
      this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
    }

    this.opened = false;
  }
  /**
   * Opens the dropdown.
   */


  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }

  _close(e) {
    if (e) {
      e.stopPropagation();
    }

    this._focus();

    this.close();
  }
  /**
   * Closes the dropdown.
   */


  close() {
    if (this._overlayInitialized) {
      this.$.overlay.close();
    }
  }

  get _inputElement() {
    return this._input();
  }

  get _nativeInput() {
    if (this._inputElement) {
      // vaadin-text-field's input is focusElement
      // iron-input's input is inputElement
      return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
    }
  }

  _parseDate(str) {
    // Parsing with RegExp to ensure correct format
    var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

    if (!parts) {
      return;
    }

    var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

    date.setFullYear(parseInt(parts[1], 10));
    date.setMonth(parseInt(parts[2], 10) - 1);
    date.setDate(parseInt(parts[3], 10));
    return date;
  }

  _isNoInput(fullscreen, ios, i18n) {
    return !this._inputElement || fullscreen || ios || !i18n.parseDate;
  }

  _formatISO(date) {
    if (!(date instanceof Date)) {
      return '';
    }

    const pad = (num, fmt = '00') => (fmt + num).substr((fmt + num).length - fmt.length);

    let yearSign = '';
    let yearFmt = '0000';
    let yearAbs = date.getFullYear();

    if (yearAbs < 0) {
      yearAbs = -yearAbs;
      yearSign = '-';
      yearFmt = '000000';
    } else if (date.getFullYear() >= 10000) {
      yearSign = '+';
      yearFmt = '000000';
    }

    const year = yearSign + pad(yearAbs, yearFmt);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    return [year, month, day].join('-');
  }

  _openedChanged(opened) {
    if (opened && !this._overlayInitialized) {
      this._initOverlay();
    }

    if (this._overlayInitialized) {
      this.$.overlay.opened = opened;
    }

    if (opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _selectedDateChanged(selectedDate, formatDate) {
    if (selectedDate === undefined || formatDate === undefined) {
      return;
    }

    if (this.__userInputOccurred) {
      this.__dispatchChange = true;
    }

    const inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

    const value = this._formatISO(selectedDate);

    if (value !== this.value) {
      this.validate(inputValue);
      this.value = value;
    }

    this.__userInputOccurred = false;
    this.__dispatchChange = false;
    this._focusedDate = selectedDate;
    this._inputValue = selectedDate ? inputValue : '';
  }

  _focusedDateChanged(focusedDate, formatDate) {
    if (focusedDate === undefined || formatDate === undefined) {
      return;
    }

    this.__userInputOccurred = true;

    if (!this._ignoreFocusedDateChange && !this._noInput) {
      this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
    }
  }

  _updateHasValue(value) {
    if (value) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  __getOverlayTheme(theme, overlayInitialized) {
    if (overlayInitialized) {
      return theme;
    }
  }

  _handleDateChange(property, value, oldValue) {
    if (!value) {
      this[property] = '';
      return;
    }

    var date = this._parseDate(value);

    if (!date) {
      this.value = oldValue;
      return;
    }

    if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(this[property], date)) {
      this[property] = date;
    }
  }

  _valueChanged(value, oldValue) {
    if (this.__dispatchChange) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
    }

    this._handleDateChange('_selectedDate', value, oldValue);
  }

  _minChanged(value, oldValue) {
    this._handleDateChange('_minDate', value, oldValue);
  }

  _maxChanged(value, oldValue) {
    this._handleDateChange('_maxDate', value, oldValue);
  }

  _updateAlignmentAndPosition() {
    if (!this._overlayInitialized) {
      return;
    }

    if (!this._fullscreen) {
      const inputRect = this._inputElement.getBoundingClientRect();

      const bottomAlign = inputRect.top > window.innerHeight / 2;
      const rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

      if (rightAlign) {
        const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        this.$.overlay.setAttribute('right-aligned', '');
        this.$.overlay.style.removeProperty('left');
        this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
      } else {
        this.$.overlay.removeAttribute('right-aligned');
        this.$.overlay.style.removeProperty('right');
        this.$.overlay.style.left = inputRect.left + 'px';
      }

      if (bottomAlign) {
        const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        this.$.overlay.setAttribute('bottom-aligned', '');
        this.$.overlay.style.removeProperty('top');
        this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
      } else {
        this.$.overlay.removeAttribute('bottom-aligned');
        this.$.overlay.style.removeProperty('bottom');
        this.$.overlay.style.top = inputRect.bottom + 'px';
      }
    }

    this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

    this._overlayContent._repositionYearScroller();
  }

  _fullscreenChanged() {
    if (this._overlayInitialized && this.$.overlay.opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _onOverlayOpened() {
    this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

    var parsedInitialPosition = this._parseDate(this.initialPosition);

    var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

    if (parsedInitialPosition || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
      this._overlayContent.initialPosition = initialPosition;
    } else {
      this._overlayContent.initialPosition = _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
    }

    this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


    this._ignoreFocusedDateChange = true;
    this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
    this._ignoreFocusedDateChange = false;
    window.addEventListener('scroll', this._boundOnScroll, true);
    this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._webkitOverflowScroll) {
      this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
    }

    if (this._focusOverlayOnOpen) {
      this._overlayContent.focus();

      this._focusOverlayOnOpen = false;
    } else {
      this._focus();
    }

    if (this._noInput && this.focusElement) {
      this.focusElement.blur();
    }

    this.updateStyles();
    this._ignoreAnnounce = false;
  } // A hack needed for iOS to prevent dropdown from being clipped in an
  // ancestor container with -webkit-overflow-scrolling: touch;


  _preventWebkitOverflowScrollingTouch(element) {
    var result = [];

    while (element) {
      if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
        var oldInlineValue = element.style.webkitOverflowScrolling;
        element.style.webkitOverflowScrolling = 'auto';
        result.push({
          element: element,
          oldInlineValue: oldInlineValue
        });
      }

      element = element.parentElement;
    }

    return result;
  }

  _onOverlayClosed() {
    this._ignoreAnnounce = true;
    window.removeEventListener('scroll', this._boundOnScroll, true);
    this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._touchPrevented) {
      this._touchPrevented.forEach(prevented => prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue);

      this._touchPrevented = [];
    }

    this.updateStyles(); // Select the parsed input or focused date

    this._ignoreFocusedDateChange = true;

    if (this.i18n.parseDate) {
      var inputValue = this._inputValue || '';
      const dateObject = this.i18n.parseDate(inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._selectedDate = parsedDate;
      } else {
        this._selectedDate = null;
        this._inputValue = inputValue;
      }
    } else if (this._focusedDate) {
      this._selectedDate = this._focusedDate;
    }

    this._ignoreFocusedDateChange = false;

    if (this._nativeInput && this._nativeInput.selectionStart) {
      this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
    }

    this.validate();
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @param {string} value Value to validate. Optional, defaults to user's input value.
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate(value) {
    // reset invalid state on the underlying text field
    this.invalid = false;
    value = value !== undefined ? value : this._inputValue;
    return !(this.invalid = !this.checkValidity(value));
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * Override the `checkValidity` method for custom validations.
   *
   * @param {string} value Value to validate. Optional, defaults to the selected date.
   * @return {boolean} True if the value is valid
   */


  checkValidity(value) {
    var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(this._selectedDate));

    var minMaxValid = !this._selectedDate || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

    var inputValidity = true;

    if (this._inputElement) {
      if (this._inputElement.checkValidity) {
        // vaadin native input elements have the checkValidity method
        inputValidity = this._inputElement.checkValidity(value);
      } else if (this._inputElement.validate) {
        // iron-form-elements have the validate API
        inputValidity = this._inputElement.validate(value);
      }
    }

    return inputValid && minMaxValid && inputValidity;
  }

  _onScroll(e) {
    if (e.target === window || !this._overlayContent.contains(e.target)) {
      this._updateAlignmentAndPosition();
    }
  }

  _focus() {
    if (this._noInput) {
      this._overlayInitialized && this._overlayContent.focus();
    } else {
      this._inputElement.focus();
    }
  }

  _focusAndSelect() {
    this._focus();

    this._setSelectionRange(0, this._inputValue.length);
  }

  _setSelectionRange(a, b) {
    if (this._nativeInput && this._nativeInput.setSelectionRange) {
      this._nativeInput.setSelectionRange(a, b);
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'enter', 'esc', 'tab'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _isValidDate(d) {
    return d && !isNaN(d.getTime());
  }

  _onKeydown(e) {
    if (this._noInput) {
      // The input element cannot be readonly as it would conflict with
      // the required attribute. Both are not allowed on an input element.
      // Therefore we prevent default on most keydown events.
      var allowedKeys = [9 // tab
      ];

      if (allowedKeys.indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }

    switch (this._eventKey(e)) {
      case 'down':
      case 'up':
        // prevent scrolling the page with arrows
        e.preventDefault();

        if (this.opened) {
          this._overlayContent.focus();

          this._overlayContent._onKeydown(e);
        } else {
          this._focusOverlayOnOpen = true;
          this.open();
        }

        break;

      case 'enter':
        {
          const dateObject = this.i18n.parseDate(this._inputValue);

          const parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

          if (this._overlayInitialized && this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
            this._selectedDate = this._overlayContent.focusedDate;
          }

          this.close();
          break;
        }

      case 'esc':
        this._focusedDate = this._selectedDate;

        this._close();

        break;

      case 'tab':
        if (this.opened) {
          e.preventDefault(); // Clear the selection range (remains visible on IE)

          this._setSelectionRange(0, 0);

          if (e.shiftKey) {
            this._overlayContent.focusCancel();
          } else {
            this._overlayContent.focus();

            this._overlayContent.revealDate(this._focusedDate);
          }
        }

        break;
    }
  }

  _validateInput(date, min, max) {
    if (date && (min || max)) {
      this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
  }

  _onUserInput(e) {
    if (!this.opened && this._inputElement.value) {
      this.open();
    }

    this._userInputValueChanged();
  }

  _userInputValueChanged(value) {
    if (this.opened && this._inputValue) {
      const dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._ignoreFocusedDateChange = true;

        if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
          this._focusedDate = parsedDate;
        }

        this._ignoreFocusedDateChange = false;
      }
    }
  }

  _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
    if (opened && !_ignoreAnnounce) {
      this._overlayContent.announceFocusedDate();
    }
  }

  get _overlayContent() {
    return this.$.overlay.content.querySelector('#overlay-content');
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-infinite-scroller.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
















/**
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayContentElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker-overlay-content';
  }

  static get properties() {
    return {
      /**
       * The value for this element.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * Date value which is focused using keyboard.
       */
      focusedDate: {
        type: Date,
        notify: true,
        observer: '_focusedDateChanged'
      },
      _focusedMonthDate: Number,

      /**
       * Date which should be visible when there is no value selected.
       */
      initialPosition: {
        type: Date,
        observer: '_initialPositionChanged'
      },
      _originDate: {
        value: new Date()
      },
      _visibleMonthIndex: Number,
      _desktopMode: Boolean,
      _translateX: {
        observer: '_translateXChanged'
      },
      _yearScrollerWidth: {
        value: 50
      },
      i18n: {
        type: Object
      },
      showWeekNumbers: {
        type: Boolean
      },
      _ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: Date,

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: Date,
      _focused: Boolean,

      /**
       * Input label
       */
      label: String
    };
  }

  ready() {
    super.ready();
    this.setAttribute('tabindex', 0);
    this.addEventListener('keydown', this._onKeydown.bind(this));
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["addListener"])(this, 'tap', this._stopPropagation);
    this.addEventListener('focus', this._onOverlayFocus.bind(this));
    this.addEventListener('blur', this._onOverlayBlur.bind(this));
  }
  /**
   * Fired when the scroller reaches the target scrolling position.
   * @event scroll-animation-finished
   * @param {Number} detail.position new position
   * @param {Number} detail.oldPosition old position
   */


  connectedCallback() {
    super.connectedCallback();

    this._closeYearScroller();

    this._toggleAnimateClass(true);

    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
  }

  announceFocusedDate() {
    var focusedDate = this._currentlyFocusedDate();

    var announce = [];

    if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, new Date())) {
      announce.push(this.i18n.today);
    }

    announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

    if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
      announce.push(this.i18n.week);
      announce.push(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getISOWeekNumber(focusedDate));
    }

    this.dispatchEvent(new CustomEvent('iron-announce', {
      bubbles: true,
      composed: true,
      detail: {
        text: announce.join(' ')
      }
    }));
    return;
  }
  /**
   * Focuses the cancel button
   */


  focusCancel() {
    this.$.cancelButton.focus();
  }
  /**
   * Scrolls the list to the given Date.
   */


  scrollToDate(date, animate) {
    this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
  }

  _focusedDateChanged(focusedDate) {
    this.revealDate(focusedDate);
  }

  _isCurrentYear(yearsFromNow) {
    return yearsFromNow === 0;
  }

  _isSelectedYear(yearsFromNow, selectedDate) {
    if (selectedDate) {
      return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
    }
  }
  /**
   * Scrolls the month and year scrollers enough to reveal the given date.
   */


  revealDate(date) {
    if (date) {
      var diff = this._differenceInMonths(date, this._originDate);

      var scrolledAboveViewport = this.$.monthScroller.position > diff;
      var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
      var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

      if (scrolledAboveViewport) {
        this._scrollToPosition(diff, true);
      } else if (scrolledBelowViewport) {
        this._scrollToPosition(diff - visibleItems + 1, true);
      }
    }
  }

  _onOverlayFocus() {
    this._focused = true;
  }

  _onOverlayBlur() {
    this._focused = false;
  }

  _initialPositionChanged(initialPosition) {
    this.scrollToDate(initialPosition);
  }

  _repositionYearScroller() {
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
  }

  _repositionMonthScroller() {
    this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
  }

  _onMonthScroll() {
    this._repositionYearScroller();

    this._doIgnoreTaps();
  }

  _onYearScroll() {
    this._repositionMonthScroller();

    this._doIgnoreTaps();
  }

  _onYearScrollTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);

    this._repositionMonthScroller();
  }

  _onMonthScrollTouchStart() {
    this._repositionYearScroller();
  }

  _doIgnoreTaps() {
    this._ignoreTaps = true;
    this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), () => this._ignoreTaps = false);
  }

  _formatDisplayed(date, formatDate, label) {
    if (date) {
      return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
    } else {
      return label;
    }
  }

  _onTodayTap() {
    var today = new Date();

    if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
      // Select today only if the month scroller is positioned approximately
      // at the beginning of the current month
      this.selectedDate = today;

      this._close();
    } else {
      this._scrollToCurrentMonth();
    }
  }

  _scrollToCurrentMonth() {
    if (this.focusedDate) {
      this.focusedDate = new Date();
    }

    this.scrollToDate(new Date(), true);
  }

  _showClear(selectedDate) {
    return !!selectedDate;
  }

  _onYearTap(e) {
    if (!this._ignoreTaps && !this._notTapping) {
      var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
      var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

      this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
    }
  }

  _scrollToPosition(targetPosition, animate) {
    if (this._targetPosition !== undefined) {
      this._targetPosition = targetPosition;
      return;
    }

    if (!animate) {
      this.$.monthScroller.position = targetPosition;
      this._targetPosition = undefined;

      this._repositionYearScroller();

      return;
    }

    this._targetPosition = targetPosition; // http://gizma.com/easing/

    var easingFunction = (t, b, c, d) => {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var duration = animate ? 300 : 0;
    var start = 0;
    var initialPosition = this.$.monthScroller.position;

    var smoothScroll = timestamp => {
      start = start || timestamp;
      var currentTime = timestamp - start;

      if (currentTime < duration) {
        var currentPos = easingFunction(currentTime, initialPosition, this._targetPosition - initialPosition, duration);
        this.$.monthScroller.position = currentPos;
        window.requestAnimationFrame(smoothScroll);
      } else {
        this.dispatchEvent(new CustomEvent('scroll-animation-finished', {
          bubbles: true,
          composed: true,
          detail: {
            position: this._targetPosition,
            oldPosition: initialPosition
          }
        }));
        this.$.monthScroller.position = this._targetPosition;
        this._targetPosition = undefined;
      }

      setTimeout(this._repositionYearScroller.bind(this), 1);
    }; // Start the animation.


    window.requestAnimationFrame(smoothScroll);
  }

  _limit(value, range) {
    return Math.min(range.max, Math.max(range.min, value));
  }

  _handleTrack(e) {
    // Check if horizontal movement threshold (dx) not exceeded or
    // scrolling fast vertically (ddy).
    if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
      return;
    } // If we're flinging quickly -> start animating already.


    if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
      this._toggleAnimateClass(true);
    }

    var newTranslateX = this._translateX + e.detail.ddx;
    this._translateX = this._limit(newTranslateX, {
      min: 0,
      max: this._yearScrollerWidth
    });
  }

  _track(e) {
    if (this._desktopMode) {
      // No need to track for swipe gestures on desktop.
      return;
    }

    switch (e.detail.state) {
      case 'start':
        this._toggleAnimateClass(false);

        break;

      case 'track':
        this._handleTrack(e);

        break;

      case 'end':
        this._toggleAnimateClass(true);

        if (this._translateX >= this._yearScrollerWidth / 2) {
          this._closeYearScroller();
        } else {
          this._openYearScroller();
        }

        break;
    }
  }

  _toggleAnimateClass(enable) {
    if (enable) {
      this.classList.add('animate');
    } else {
      this.classList.remove('animate');
    }
  }

  _toggleYearScroller() {
    this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
  }

  _openYearScroller() {
    this._translateX = 0;
    this.setAttribute('years-visible', '');
  }

  _closeYearScroller() {
    this.removeAttribute('years-visible');
    this._translateX = this._yearScrollerWidth;
  }

  _isYearScrollerVisible() {
    return this._translateX < this._yearScrollerWidth / 2;
  }

  _translateXChanged(x) {
    if (!this._desktopMode) {
      this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
      this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
    }
  }

  _yearAfterXYears(index) {
    var result = new Date(this._originDate);
    result.setFullYear(parseInt(index) + this._originDate.getFullYear());
    return result.getFullYear();
  }

  _yearAfterXMonths(months) {
    return this._dateAfterXMonths(months).getFullYear();
  }

  _dateAfterXMonths(months) {
    var result = new Date(this._originDate);
    result.setDate(1);
    result.setMonth(parseInt(months) + this._originDate.getMonth());
    return result;
  }

  _differenceInMonths(date1, date2) {
    var months = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months - date2.getMonth() + date1.getMonth();
  }

  _differenceInYears(date1, date2) {
    return this._differenceInMonths(date1, date2) / 12;
  }

  _clear() {
    this.selectedDate = '';
  }

  _close() {
    const overlayContent = this.getRootNode().host;
    const overlay = overlayContent ? overlayContent.getRootNode().host : null;

    if (overlay) {
      overlay.opened = false;
    }

    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

  _cancel() {
    this.focusedDate = this.selectedDate;

    this._close();
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _onKeydown(e) {
    var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
    // previously in the keydown event.


    const isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
    const isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
    const isScroller = !isToday && !isCancel;

    var eventKey = this._eventKey(e);

    if (eventKey === 'tab') {
      // We handle tabs here and don't want to bubble up.
      e.stopPropagation();
      const isFullscreen = this.hasAttribute('fullscreen');
      const isShift = e.shiftKey;

      if (isFullscreen) {
        e.preventDefault();
      } else if (isShift && isScroller || !isShift && isCancel) {
        // Return focus back to the input field
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('focus-input', {
          bubbles: true,
          composed: true
        }));
      } else if (isShift && isToday) {
        // Browser returns focus back to the scrollable area. We need to set
        // the focused flag, and move the scroll to focused date.
        this._focused = true;
        setTimeout(() => this.revealDate(this.focusedDate), 1);
      } else {
        // Browser moves the focus out of the scroller, hence focused flag must
        // set to false.
        this._focused = false;
      }
    } else if (eventKey) {
      e.preventDefault();
      e.stopPropagation();

      switch (eventKey) {
        case 'down':
          this._moveFocusByDays(7);

          this.focus();
          break;

        case 'up':
          this._moveFocusByDays(-7);

          this.focus();
          break;

        case 'right':
          if (isScroller) {
            this._moveFocusByDays(1);
          }

          break;

        case 'left':
          if (isScroller) {
            this._moveFocusByDays(-1);
          }

          break;

        case 'enter':
          if (isScroller || isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          }

          break;

        case 'space':
          if (isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          } else {
            var focusedDate = this.focusedDate;

            if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, this.selectedDate)) {
              this.selectedDate = '';
              this.focusedDate = focusedDate;
            } else {
              this.selectedDate = focusedDate;
            }
          }

          break;

        case 'home':
          this._moveFocusInsideMonth(focus, 'minDate');

          break;

        case 'end':
          this._moveFocusInsideMonth(focus, 'maxDate');

          break;

        case 'pagedown':
          this._moveFocusByMonths(e.shiftKey ? 12 : 1);

          break;

        case 'pageup':
          this._moveFocusByMonths(e.shiftKey ? -12 : -1);

          break;

        case 'esc':
          this._cancel();

          break;
      }
    }
  }

  _currentlyFocusedDate() {
    return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
  }

  _focusDate(dateToFocus) {
    this.focusedDate = dateToFocus;
    this._focusedMonthDate = dateToFocus.getDate();
  }

  _focusClosestDate(focus) {
    this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
  }

  _moveFocusByDays(days) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth());
    dateToFocus.setDate(focus.getDate() + days);

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (days > 0) {
          // down or right
          this._focusDate(this.maxDate);
        } else {
          // up or left
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusByMonths(months) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth() + months);
    var targetMonth = dateToFocus.getMonth();
    dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

    if (dateToFocus.getMonth() !== targetMonth) {
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this.focusedDate = dateToFocus;
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (months > 0) {
          // pagedown
          this._focusDate(this.maxDate);
        } else {
          // pageup
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusInsideMonth(focusedDate, property) {
    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focusedDate.getFullYear());

    if (property === 'minDate') {
      dateToFocus.setMonth(focusedDate.getMonth());
      dateToFocus.setDate(1);
    } else {
      dateToFocus.setMonth(focusedDate.getMonth() + 1);
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
        // Move to minDate or maxDate
        this._focusDate(this[property]);
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focusedDate);
      }
    }
  }

  _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }

  _isTodayAllowed(min, max) {
    var today = new Date();
    var todayMidnight = new Date(0, 0);
    todayMidnight.setFullYear(today.getFullYear());
    todayMidnight.setMonth(today.getMonth());
    todayMidnight.setDate(today.getDate());
    return this._dateAllowed(todayMidnight, min, max);
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

}

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayElement extends Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]) {
  static get is() {
    return 'vaadin-date-picker-overlay';
  }

}

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([right-aligned][dir="rtl"]) {
        align-items: flex-start;
      }

      [part="overlay"] {
        display: flex;
        flex: auto;
      }

      [part~="content"] {
        flex: auto;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js ***!
  \***************************************************************************/
/*! exports provided: DatePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerElement", function() { return DatePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-date-picker-mixin.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/













/**
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class DatePickerElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker';
  }

  static get version() {
    return '4.0.3';
  }

  static get properties() {
    return {
      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: String,

      /**
       * A placeholder string in addition to the label. If this is set, the label will always float.
       */
      placeholder: String,

      /**
       * Set to true to make this element read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * This property is set to true when the control value invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },
      _userInputValue: String
    };
  }

  static get observers() {
    return ['_userInputValueChanged(_userInputValue)', '_setClearButtonLabel(i18n.clear)'];
  }

  ready() {
    super.ready(); // In order to have synchronized invalid property, we need to use the same validate logic.

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, () => this._inputElement.validate = () => {}); // FIXME(platosha): dispatch `input` event on
    // <vaadin-text-field> clear button
    // https://github.com/vaadin/vaadin-text-field/issues/347

    this._inputElement.addEventListener('change', () => {
      if (this._inputElement.value === '') {
        this.__dispatchChange = true;
        this.value = '';
        this.__dispatchChange = false;
      }
    });
  }

  _onVaadinOverlayClose(e) {
    if (this._openedWithFocusRing && this.hasAttribute('focused')) {
      this.focusElement.setAttribute('focus-ring', '');
    } else if (!this.hasAttribute('focused')) {
      this.focusElement.blur();
    }

    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
      e.preventDefault();
    }
  }

  _toggle(e) {
    e.stopPropagation();
    this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
  }

  _input() {
    return this.$.input;
  }

  set _inputValue(value) {
    this._inputElement.value = value;
  }

  get _inputValue() {
    return this._inputElement.value;
  }

  _getAriaExpanded(opened) {
    return Boolean(opened).toString();
  }
  /**
   * Focussable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    return this._input() || this;
  }

  _setClearButtonLabel(i18nClear) {
    // FIXME(platosha): expose i18n API in <vaadin-text-field>
    // https://github.com/vaadin/vaadin-text-field/issues/348
    this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute('aria-label', i18nClear);
  }

}

customElements.define(DatePickerElement.is, DatePickerElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @memberof Vaadin
 * @private
 */

class InfiniteScrollerElement extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-infinite-scroller';
  }

  static get properties() {
    return {
      /**
       * Count of individual items in each buffer.
       * The scroller has 2 buffers altogether so bufferSize of 20
       * will result in 40 buffered DOM items in total.
       * Changing after initialization not supported.
       */
      bufferSize: {
        type: Number,
        value: 20
      },

      /**
       * The amount of initial scroll top. Needed in order for the
       * user to be able to scroll backwards.
       */
      _initialScroll: {
        value: 500000
      },

      /**
       * The index/position mapped at _initialScroll point.
       */
      _initialIndex: {
        value: 0
      },
      _buffers: Array,
      _preventScrollEvent: Boolean,
      _mayHaveMomentum: Boolean,
      _initialized: Boolean,
      active: {
        type: Boolean,
        observer: '_activated'
      }
    };
  }

  ready() {
    super.ready();
    this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
    this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
    var tpl = this.querySelector('template');
    this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
      forwardHostProp: function (prop, value) {
        if (prop !== 'index') {
          this._buffers.forEach(buffer => {
            [].forEach.call(buffer.children, insertionPoint => {
              insertionPoint._itemWrapper.instance[prop] = value;
            });
          });
        }
      }
    }); // Firefox interprets elements with overflow:auto as focusable
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (isFirefox) {
      this.$.scroller.tabIndex = -1;
    }
  }

  _activated(active) {
    if (active && !this._initialized) {
      this._createPool();

      this._initialized = true;
    }
  }

  _finishInit() {
    if (!this._initDone) {
      // Once the first set of items start fading in, stamp the rest
      this._buffers.forEach(buffer => {
        [].forEach.call(buffer.children, insertionPoint => this._ensureStampedInstance(insertionPoint._itemWrapper));
      }, this);

      if (!this._buffers[0].translateY) {
        this._reset();
      }

      this._initDone = true;
    }
  }

  _translateBuffer(up) {
    var index = up ? 1 : 0;
    this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
    this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
    this._buffers[index].updated = false;

    this._buffers.reverse();
  }

  _scroll() {
    if (this._scrollDisabled) {
      return;
    }

    var scrollTop = this.$.scroller.scrollTop;

    if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
      // Scrolled near the end/beginning of the scrollable area -> reset.
      this._initialIndex = ~~this.position;

      this._reset();
    } // Check if we scrolled enough to translate the buffer positions.


    var bufferOffset = this.root.querySelector('.buffer').offsetTop;
    var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
    var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

    if (upperThresholdReached || lowerThresholdReached) {
      this._translateBuffer(lowerThresholdReached);

      this._updateClones();
    }

    if (!this._preventScrollEvent) {
      this.dispatchEvent(new CustomEvent('custom-scroll', {
        bubbles: false,
        composed: true
      }));
      this._mayHaveMomentum = true;
    }

    this._preventScrollEvent = false;
    this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      var scrollerRect = this.$.scroller.getBoundingClientRect();

      if (!this._isVisible(this._buffers[0], scrollerRect) && !this._isVisible(this._buffers[1], scrollerRect)) {
        this.position = this.position;
      }
    });
  }
  /**
   * Current scroller position as index. Can be a fractional number.
   *
   * @type {Number}
   */


  set position(index) {
    this._preventScrollEvent = true;

    if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
      this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
    } else {
      this._initialIndex = ~~index;

      this._reset();

      this._scrollDisabled = true;
      this.$.scroller.scrollTop += index % 1 * this.itemHeight;
      this._scrollDisabled = false;
    }

    if (this._mayHaveMomentum) {
      // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
      this.$.scroller.classList.add('notouchscroll');
      this._mayHaveMomentum = false;
      setTimeout(() => {
        // Restore -webkit-overflow-scrolling: touch; after a small delay.
        this.$.scroller.classList.remove('notouchscroll');
      }, 10);
    }
  }
  /**
   * @private
   */


  get position() {
    return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
  }

  get itemHeight() {
    if (!this._itemHeightVal) {
      if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
        this.updateStyles();
      }

      const itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

      const tmpStyleProp = 'background-position';
      this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
      const itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
      this.$.fullHeight.style.removeProperty(tmpStyleProp);
      this._itemHeightVal = parseFloat(itemHeightPx);
    }

    return this._itemHeightVal;
  }

  get _bufferHeight() {
    return this.itemHeight * this.bufferSize;
  }

  _reset() {
    this._scrollDisabled = true;
    this.$.scroller.scrollTop = this._initialScroll;
    this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
    this._buffers[1].translateY = this._initialScroll;

    this._buffers.forEach(buffer => {
      buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
    });

    this._buffers[0].updated = this._buffers[1].updated = false;

    this._updateClones(true);

    this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones();
    });
    this._scrollDisabled = false;
  }

  _createPool() {
    var container = this.getBoundingClientRect();

    this._buffers.forEach(buffer => {
      for (var i = 0; i < this.bufferSize; i++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.style.height = this.itemHeight + 'px';
        itemWrapper.instance = {};
        const contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
        const slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
        const insertionPoint = document.createElement('slot');
        insertionPoint.setAttribute('name', slotName);
        insertionPoint._itemWrapper = itemWrapper;
        buffer.appendChild(insertionPoint);
        itemWrapper.setAttribute('slot', slotName);
        this.appendChild(itemWrapper); // This is needed by IE

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
        setTimeout(() => {
          // Only stamp the visible instances first
          if (this._isVisible(itemWrapper, container)) {
            this._ensureStampedInstance(itemWrapper);
          }
        }, 1); // Wait for first reset
      }
    }, this);

    setTimeout(() => {
      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, this._finishInit.bind(this));
    }, 1);
  }

  _ensureStampedInstance(itemWrapper) {
    if (itemWrapper.firstElementChild) {
      return;
    }

    var tmpInstance = itemWrapper.instance;
    itemWrapper.instance = new this._TemplateClass({});
    itemWrapper.appendChild(itemWrapper.instance.root);
    Object.keys(tmpInstance).forEach(prop => {
      itemWrapper.instance.set(prop, tmpInstance[prop]);
    });
  }

  _updateClones(viewPortOnly) {
    this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
    var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

    this._buffers.forEach((buffer, bufferIndex) => {
      if (!buffer.updated) {
        var firstIndex = this._firstIndex + this.bufferSize * bufferIndex;
        [].forEach.call(buffer.children, (insertionPoint, index) => {
          const itemWrapper = insertionPoint._itemWrapper;

          if (!viewPortOnly || this._isVisible(itemWrapper, scrollerRect)) {
            itemWrapper.instance.index = firstIndex + index;
          }
        });
        buffer.updated = true;
      }
    }, this);
  }

  _isVisible(element, container) {
    var rect = element.getBoundingClientRect();
    return rect.bottom > container.top && rect.top < container.bottom;
  }

}

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @memberof Vaadin
 * @private
 */

class MonthCalendarElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-month-calendar';
  }

  static get properties() {
    return {
      /**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */
      month: {
        type: Date,
        value: new Date()
      },

      /**
       * A `Date` object for the currently selected date.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * A `Date` object for the currently focused date.
       */
      focusedDate: Date,
      showWeekNumbers: {
        type: Boolean,
        value: false
      },
      i18n: {
        type: Object
      },

      /**
       * Flag stating whether taps on the component should be ignored.
       */
      ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: {
        type: Date,
        value: null
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: {
        type: Date,
        value: null
      },
      _days: {
        type: Array,
        computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
      },
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        computed: '_isDisabled(month, minDate, maxDate)'
      }
    };
  }

  static get observers() {
    return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
  }

  _dateEquals(date1, date2) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
  }

  _dateAllowed(date, min, max) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
  }
  /* Returns true if all the dates in the month are out of the allowed range */


  _isDisabled(month, minDate, maxDate) {
    // First day of the month
    var firstDate = new Date(0, 0);
    firstDate.setFullYear(month.getFullYear());
    firstDate.setMonth(month.getMonth());
    firstDate.setDate(1); // Last day of the month

    var lastDate = new Date(0, 0);
    lastDate.setFullYear(month.getFullYear());
    lastDate.setMonth(month.getMonth() + 1);
    lastDate.setDate(0);

    if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
      return false;
    }

    return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
  }

  _getTitle(month, monthNames) {
    if (month === undefined || monthNames === undefined) {
      return;
    }

    return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
  }

  _onMonthGridTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);
  }

  _dateAdd(date, delta) {
    date.setDate(date.getDate() + delta);
  }

  _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
    if (weekDayNames === undefined || firstDayOfWeek === undefined) {
      return;
    }

    return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
  }

  _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
    if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
      return;
    }

    weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
    weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
    weekDayNames = weekDayNames.map((day, index) => {
      return {
        weekDay: day,
        weekDayShort: weekDayNamesShort[index]
      };
    });
    return weekDayNames;
  }

  _getDate(date) {
    return date ? date.getDate() : '';
  }

  _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
    if (showWeekNumbers && firstDayOfWeek === 1) {
      this.setAttribute('week-numbers', '');
    } else {
      this.removeAttribute('week-numbers');
    }
  }

  _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
    // Currently only supported for locales that start the week on Monday.
    return showWeekNumbers && firstDayOfWeek === 1;
  }

  _isToday(date) {
    return this._dateEquals(new Date(), date);
  }

  _getDays(month, firstDayOfWeek) {
    if (month === undefined || firstDayOfWeek === undefined) {
      return;
    } // First day of the month (at midnight).


    var date = new Date(0, 0);
    date.setFullYear(month.getFullYear());
    date.setMonth(month.getMonth());
    date.setDate(1); // Rewind to first day of the week.

    while (date.getDay() !== firstDayOfWeek) {
      this._dateAdd(date, -1);
    }

    var days = [];
    var startMonth = date.getMonth();
    var targetMonth = month.getMonth();

    while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
      days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

      this._dateAdd(date, 1);
    }

    return days;
  }

  _getWeekNumber(date, days) {
    if (date === undefined || days === undefined) {
      return;
    }

    if (!date) {
      // Get the first non-null date from the days array.
      date = days.reduce((acc, d) => {
        return !acc && d ? d : acc;
      });
    }

    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
  }

  _getWeekNumbers(dates) {
    return dates.map(date => this._getWeekNumber(date, dates)).filter((week, index, arr) => arr.indexOf(week) === index);
  }

  _handleTap(e) {
    if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
      this.selectedDate = e.target.date;
      this.dispatchEvent(new CustomEvent('date-tap', {
        bubbles: true,
        composed: true
      }));
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _getRole(date) {
    return date ? 'button' : 'presentation';
  }

  _getAriaLabel(date) {
    if (!date) {
      return '';
    }

    var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

    if (this._isToday(date)) {
      ariaLabel += ', ' + this.i18n.today;
    }

    return ariaLabel;
  }

  _getAriaDisabled(date, min, max) {
    if (date === undefined || min === undefined || max === undefined) {
      return;
    }

    return this._dateAllowed(date, min, max) ? 'false' : 'true';
  }

}

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_material_styles_shadow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");
/* harmony import */ var _vaadin_vaadin_button_theme_material_vaadin_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/material/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="material-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        font-family: var(--material-font-family);
        font-size: var(--material-body-font-size);
        -webkit-text-size-adjust: 100%;
        line-height: 1.4;

        /* FIXME(platosha): fix the core styles and remove this override. */
        background: transparent;
      }

      :host([fullscreen]) {
        position: absolute;
      }

      /* Fullscreen Toolbar */

      [part="overlay-header"] {
        display: flex;
        align-items: baseline;
        position: relative;
        z-index: 2;
        color: var(--material-body-text-color);
        background: var(--material-secondary-background-color);
        border-bottom: 2px solid var(--material-primary-color);
        padding: 8px;
        box-shadow: var(--material-shadow-elevation-4dp);
      }

      /* FIXME(platosha): fix the core styles and remove this override. */
      [part="overlay-header"]:not([desktop]) {
        padding-bottom: 8px;
      }

      [part="label"] {
        padding: 0 8px;
        flex: auto;
      }

      [part="clear-button"],
      [part="toggle-button"] {
        font-family: 'material-icons';
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        width: 24px;
        height: 24px;
        text-align: center;
      }

      [part="clear-button"],
      [part="toggle-button"],
      [part="years-toggle-button"] {
        padding: 8px;
        color: var(--material-secondary-text-color);
      }

      [part="clear-button"]:hover,
      [part="toggle-button"]:hover,
      [part="years-toggle-button"]:hover {
        color: inherit;
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }

      [part="toggle-button"]::before {
        content: var(--material-icons-calendar);
      }

      [part="years-toggle-button"] {
        position: static;
        padding: 4px 8px;
        font-size: var(--material-body-font-size);
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: var(--material-secondary-text-color);
      }

      [part="years-toggle-button"]::before {
        content: '';
        display: none;
      }

      [part="years-toggle-button"]::after {
        content: var(--material-icons-play);
        display: inline-block;
        width: 24px;
        font-family: 'material-icons';
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        text-align: center;
        transition: transform 100ms cubic-bezier(.4, 0, .2, 1);
      }

      :host([years-visible]) [part="years-toggle-button"]::after {
        transform: rotate(90deg);
      }

      /* Month scroller */

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 320px;
        text-align: center;
      }

      /* Year scroller */

      [part="years"] {
        z-index: 1;
        background: var(--material-secondary-text-color);
        color: var(--material-background-color);
        text-align: center;
      }

      [part="years"]::before {
        z-index: 2;
        border: 0;
        width: 8px;
        height: 8px;
        transform: translateX(-50%) rotate(-45deg);
        background: var(--material-background-color);
      }

      :host([years-visible]) [part="years"]::after {
        top: calc(20px + 16px);
        height: calc(100% - 20px - 16px);
      }

      [part="year-number"] {
        font-size: var(--material-small-font-size);
        line-height: 10px; /* NOTE(platosha): chosen to align years to months */
      }

      [part="year-separator"] {
        background-color: currentColor;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: calc(0.5 * var(--vaadin-infinite-scroller-item-height, 80px) - 0.5 * 10px - 0.5 * 4px) auto;
      }

      /* Bottom Bar */

      [part="toolbar"] {
        display: flex;
        justify-content: flex-end;
        padding: 8px 4px;
        border-top: 1px solid var(--material-divider-color);
      }

      [part="cancel-button"] {
        order: 1;
      }

      [part="today-button"] {
        order: 2;
      }

      [part="today-button"],
      [part="cancel-button"] {
        margin: 0 4px;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_content_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js");
/* harmony import */ var _src_vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");


const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<dom-module id="material-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="material-overlay">
      :host([fullscreen]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: stretch;
      }

      [part="overlay"] {
        overflow: hidden;
        -webkit-overflow-scrolling: auto;
      }

      :host(:not([fullscreen])) [part="overlay"] {
        width: 360px;
        max-height: 500px;
        border-radius: 0 4px 4px;
      }

      :host(:not([fullscreen])[right-aligned]) [part="overlay"] {
        border-radius: 4px 0 4px 4px;
      }

      :host(:not([fullscreen])[bottom-aligned]) [part="overlay"] {
        border-radius: 4px;
      }

      :host(:not([fullscreen])[show-week-numbers]) [part="overlay"] {
        width: 396px;
      }

      [part="content"] {
        padding: 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js");
/* harmony import */ var _src_vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_vaadin_text_field_theme_material_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/material/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");








const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`<dom-module id="material-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="material-field-button">
      :host {
        display: inline-flex;
        -webkit-tap-highlight-color: transparent;
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }

      [part="toggle-button"]::before {
        content: var(--material-icons-calendar);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js");
/* harmony import */ var _src_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="material-date-picker-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        color: var(--material-body-text-color);
        padding: 0 calc(50% / 8 - 0.5em + 8px);
      }

      :host([show-week-numbers]) {
        padding: 0 calc(50% / 9 - 0.5em + 8px);
      }

      [part="month-header"] {
        font-size: var(--material-h6-font-size);
        line-height: 1;
        padding-top: 20px;
        margin-bottom: 8px;
      }

      [part="week-number"],
      [part="weekday"] {
        font-size: var(--material-caption-font-size);
        line-height: 44px;
        height: 40px;
        color: var(--material-secondary-text-color);
      }

      :host([disabled]),
      :host([disabled]) [part="week-number"],
      :host([disabled]) [part="weekday"] {
        color: var(--material-disabled-text-color);
      }

      [part="date"] {
        position: relative;
        font-size: var(--material-body-font-size);
        line-height: 42px;
        height: 40px;
        cursor: default;
      }

      [part="date"]::after {
        content: '';
        position: absolute;
        z-index: -4;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 38px;
        height: 38px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid transparent;
      }

      /* Today */

      [part="date"][today] {
        color: var(--material-primary-text-color);
      }

      /* Hover */

      [part="date"]:not([disabled]):hover::after {
        background-color: var(--material-secondary-background-color);
        border-color: var(--material-secondary-background-color);
        z-index: -3;
      }

      /* Hide for touch devices */
      @media (hover: none) {
        [part="date"]:not([disabled]):hover::after {
          background-color: transparent;
          border-color: transparent;
          z-index: -4;
        }
      }

      /* Selected */

      [part="date"][selected] {
        font-weight: 500;
      }

      [part="date"]:not([disabled])[selected]::after,
      [part="date"][selected]::after {
        background-color: transparent;
        border-color: currentColor;
        z-index: -2;
      }

      /* Focused */

      [part="date"]:not([disabled])[focused],
      [part="date"]:not([disabled]):active {
        color: var(--material-primary-contrast-color);
      }

      [part="date"]:not([disabled])[focused]::after,
      [part="date"]:not([disabled]):active::after {
        opacity: 0.7;
        background-color: var(--material-primary-color);
        border-color: var(--material-primary-color);
        z-index: -1;
      }

      [part="date"][disabled] {
        color: var(--material-disabled-text-color);
      }

      :host([focused]) [part="date"]:not([disabled])[focused]::after {
        opacity: 1;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_month_calendar_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-month-calendar-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js");
/* harmony import */ var _src_vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
  \***************************************************************************************************/
/*! exports provided: runIfDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function() { return runIfDevelopmentMode; });
const DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }

  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }

    if (!isLocalhost()) {
      return false;
    }

    if (FlowClients) {
      return !isFlowProductionMode();
    }

    return !isMinified();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}

function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients).map(key => FlowClients[key]).filter(client => client.productionMode);

    if (productionModeApps.length > 0) {
      return true;
    }
  }

  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
} // A guard against polymer-modulizer removing the window.Vaadin
// initialization above.


window['Vaadin'] = window['Vaadin'] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */

const runIfDevelopmentMode = function (callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
  \***************************************************************************/
/*! exports provided: ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return ElementMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");





if (!window.Vaadin) {
  window['Vaadin'] = {};
}
/**
 * Array of Vaadin custom element classes that have been finalized.
 */


window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
  if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"]) {
    Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"])();
  }
};

let statsJob;
const registered = new Set();
/**
 * @polymerMixin
 */

const ElementMixin = superClass => class VaadinElementMixin extends superClass {
  /** @protected */
  static finalize() {
    super.finalize();
    const {
      is
    } = this; // Registers a class prototype for telemetry purposes.

    if (is && !registered.has(is)) {
      window.Vaadin.registrations.push(this);
      registered.add(is);

      if (window.Vaadin.developmentModeCallback) {
        statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], () => {
          window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
        });
        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
      }
    }
  }

  constructor() {
    super();

    if (document.doctype === null) {
      console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
    }
  }

};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-field-button">
  <template>
    <style>
      /* TODO(platosha): align icon sizes with other elements */
      [part\$="button"] {
        flex: none;
        width: 24px;
        height: 24px;
        padding: 4px;
        color: var(--material-secondary-text-color);
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        text-align: center;
      }

      :host(:not([readonly])) [part\$="button"] {
        cursor: pointer;
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--material-text-color);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--material-disabled-text-color);
      }

      :host([disabled]) [part="clear-button"] {
        display: none;
      }

      [part\$="button"]::before {
        font-family: "material-icons";
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-required-field">
  <template>
    <style>
      [part="label"] {
        display: block;
        position: absolute;
        top: 8px;
        font-size: 1em;
        line-height: 1;
        height: 20px;
        margin-bottom: -4px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        color: var(--material-secondary-text-color);
        transform-origin: 0 75%;
        transform: scale(0.75);
      }

      :host([required]) [part="label"]::after {
        content: " *";
        color: inherit;
      }

      :host([invalid]) [part="label"] {
        color: var(--material-error-text-color);
      }

      [part="error-message"] {
        font-size: .75em;
        line-height: 1;
        color: var(--material-error-text-color);
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before {
        content: "";
        display: block;
        height: 6px;
      }

      :host(:not([invalid])) [part="error-message"] {
        margin-top: 0;
        max-height: 0;
        overflow: hidden;
      }

      :host([invalid]) [part="error-message"] {
        animation: reveal 0.2s;
      }

      @keyframes reveal {
        0% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);
const HOST_PROPS = {
  default: ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

const TextFieldMixin = subclass => class VaadinTextFieldMixin extends Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass) {
  static get properties() {
    return {
      /**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */
      autocomplete: {
        type: String
      },

      /**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */
      autocorrect: {
        type: String
      },

      /**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */
      autocapitalize: {
        type: String
      },

      /**
       * Specify that the value should be automatically selected when the field gains focus.
       */
      autoselect: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Error to show when the input value is invalid.
       */
      errorMessage: {
        type: String,
        value: ''
      },

      /**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            clear: 'Clear'
          };
        }
      },

      /**
       * String used for the label element.
       */
      label: {
        type: String,
        value: '',
        observer: '_labelChanged'
      },

      /**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */
      maxlength: {
        type: Number
      },

      /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */
      minlength: {
        type: Number
      },

      /**
       * The name of the control, which is submitted with the form data.
       */
      name: {
        type: String
      },

      /**
       * A hint to the user of what can be entered in the control.
       */
      placeholder: {
        type: String
      },

      /**
       * This attribute indicates that the user cannot modify the value of the control.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */
      value: {
        type: String,
        value: '',
        observer: '_valueChanged',
        notify: true
      },

      /**
       * This property is set to true when the control value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Specifies that the text field has value.
       */
      hasValue: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */
      preventInvalidInput: {
        type: Boolean
      },

      /**
       * A pattern matched against individual characters the user inputs.
       * When set, the field will prevent:
       * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
       *
       * For example, to enable entering only numbers and minus signs,
       * `_enabledCharPattern = "[\\d-]"`
       */
      _enabledCharPattern: String,
      _labelId: String,
      _errorId: String,
      _inputId: String
    };
  }

  static get observers() {
    return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS.default.join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label)', '__enabledCharPatternChanged(_enabledCharPattern)'];
  }

  get focusElement() {
    if (!this.shadowRoot) {
      return;
    }

    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (slotted) {
      return slotted;
    }

    return this.shadowRoot.querySelector('[part="value"]');
  }
  /**
   * @private
   */


  get inputElement() {
    return this.focusElement;
  }

  get _slottedTagName() {
    return 'input';
  }

  _createConstraintsObserver() {
    // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
    // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
    // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
    // the `inputElement` when this runs.
    this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
  }

  _onInput(e) {
    if (this.__preventInput) {
      e.stopImmediatePropagation();
      this.__preventInput = false;
      return;
    }

    if (this.preventInvalidInput) {
      const input = this.inputElement;

      if (input.value.length > 0 && !this.checkValidity()) {
        input.value = this.value || ''; // add input-prevented attribute for 200ms

        this.setAttribute('input-prevented', '');
        this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), () => {
          this.removeAttribute('input-prevented');
        });
        return;
      }
    }

    if (!e.__fromClearButton) {
      this.__userInput = true;
    }

    this.value = e.target.value;
  } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
  // of the clear button instead of setting display property for it depending on state.


  _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
    if (!disabled && !readonly && clearButtonVisible && hasValue) {
      this.$.clearButton.removeAttribute('hidden');
    } else {
      this.$.clearButton.setAttribute('hidden', true);
    }
  }

  _onChange(e) {
    if (this._valueClearing) {
      return;
    } // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.


    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }

  _valueChanged(newVal, oldVal) {
    // setting initial value to empty string, skip validation
    if (newVal === '' && oldVal === undefined) {
      return;
    }

    if (newVal !== '' && newVal != null) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }

    if (this.__userInput) {
      this.__userInput = false;
      return;
    } else if (newVal !== undefined) {
      this.inputElement.value = newVal;
    } else {
      this.value = this.inputElement.value = '';
    }

    if (this.invalid) {
      this.validate();
    }
  }

  _labelChanged(label) {
    if (label !== '' && label != null) {
      this.setAttribute('has-label', '');
    } else {
      this.removeAttribute('has-label');
    }
  }

  _onSlotChange() {
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (this.value) {
      this.inputElement.value = this.value;
      this.validate();
    }

    if (slotted && !this._slottedInput) {
      this._validateSlottedValue(slotted);

      this._addInputListeners(slotted);

      this._addIEListeners(slotted);

      this._slottedInput = slotted;
    } else if (!slotted && this._slottedInput) {
      this._removeInputListeners(this._slottedInput);

      this._removeIEListeners(this._slottedInput);

      this._slottedInput = undefined;
    }

    Object.keys(PROP_TYPE).map(key => PROP_TYPE[key]).forEach(type => this._propagateHostAttributes(HOST_PROPS[type].map(attr => this[attr]), type));
  }

  _hostPropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
  }

  _hostAccessiblePropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
  }

  _validateSlottedValue(slotted) {
    if (slotted.value !== this.value) {
      console.warn('Please define value on the vaadin-text-field component!');
      slotted.value = '';
    }
  }

  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === 'accessible') {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);

        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index], input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  _setOrToggleAttribute(name, value, node) {
    if (!name || !node) {
      return;
    }

    if (value) {
      node.setAttribute(name, typeof value === 'boolean' ? '' : value);
    } else {
      node.removeAttribute(name);
    }
  }

  _constraintsChanged(required, minlength, maxlength, pattern) {
    if (!this.invalid) {
      return;
    }

    if (!required && !minlength && !maxlength && !pattern) {
      this.invalid = false;
    } else {
      this.validate();
    }
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   * @returns {boolean}
   */


  checkValidity() {
    if (this.required || this.pattern || this.maxlength || this.minlength) {
      return this.inputElement.checkValidity();
    } else {
      return !this.invalid;
    }
  }

  _addInputListeners(node) {
    node.addEventListener('input', this._boundOnInput);
    node.addEventListener('change', this._boundOnChange);
    node.addEventListener('blur', this._boundOnBlur);
    node.addEventListener('focus', this._boundOnFocus);
    node.addEventListener('paste', this._boundOnPaste);
    node.addEventListener('drop', this._boundOnDrop);
    node.addEventListener('beforeinput', this._boundOnBeforeInput);
  }

  _removeInputListeners(node) {
    node.removeEventListener('input', this._boundOnInput);
    node.removeEventListener('change', this._boundOnChange);
    node.removeEventListener('blur', this._boundOnBlur);
    node.removeEventListener('focus', this._boundOnFocus);
    node.removeEventListener('paste', this._boundOnPaste);
    node.removeEventListener('drop', this._boundOnDrop);
    node.removeEventListener('beforeinput', this._boundOnBeforeInput);
  }

  ready() {
    super.ready();

    this._createConstraintsObserver();

    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
    this._boundOnPaste = this._onPaste.bind(this);
    this._boundOnDrop = this._onDrop.bind(this);
    this._boundOnBeforeInput = this._onBeforeInput.bind(this);
    const defaultInput = this.shadowRoot.querySelector('[part="value"]');
    this._slottedInput = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    this._addInputListeners(defaultInput);

    this._addIEListeners(defaultInput);

    if (this._slottedInput) {
      this._addIEListeners(this._slottedInput);

      this._addInputListeners(this._slottedInput);
    }

    this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
      this.updateStyles();
    }

    this.$.clearButton.addEventListener('mousedown', () => this._valueClearing = true);
    this.$.clearButton.addEventListener('mouseleave', () => this._valueClearing = false);
    this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));
    var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
    this._labelId = `${this.constructor.is}-label-${uniqueId}`;
    this._inputId = `${this.constructor.is}-input-${uniqueId}`; // Lumo theme defines a max-height transition for the "error-message"
    // part on invalid state change.

    this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', () => {
      this.__observeOffsetHeight();
    });
  }
  /**
   * Returns true if `value` is valid.
   * `<iron-form>` uses this to check the validity for all its elements.
   *
   * @return {boolean} True if the value is valid.
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }

  clear() {
    this.value = '';
  }

  _onBlur() {
    this.validate();
  }

  _onFocus() {
    if (this.autoselect) {
      this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

      setTimeout(() => {
        try {
          this.inputElement.setSelectionRange(0, 9999);
        } catch (e) {// The workaround may cause errors on different input types.
          // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
        }
      });
    }
  }

  _onClearButtonClick(e) {
    e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

    this.inputElement.focus();
    this.clear();
    this._valueClearing = false;

    if (navigator.userAgent.match(/Trident/)) {
      // Disable IE input" event prevention here, we want the input event from
      // below to propagate normally.
      this.__preventInput = false;
    }

    const inputEvent = new Event('input', {
      bubbles: true,
      composed: true
    });
    inputEvent.__fromClearButton = true;
    const changeEvent = new Event('change', {
      bubbles: !this._slottedInput
    });
    changeEvent.__fromClearButton = true;
    this.inputElement.dispatchEvent(inputEvent);
    this.inputElement.dispatchEvent(changeEvent);
  }

  _onKeyDown(e) {
    if (e.keyCode === 27 && this.clearButtonVisible) {
      const dispatchChange = !!this.value;
      this.clear();
      dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
        bubbles: !this._slottedInput
      }));
    }

    if (this._enabledCharPattern && !this.__shouldAcceptKey(e)) {
      e.preventDefault();
    }
  }

  __shouldAcceptKey(event) {
    return event.metaKey || event.ctrlKey || !event.key // allow typing anything if event.key is not supported
    || event.key.length !== 1 // allow "Backspace", "ArrowLeft" etc.
    || this.__enabledCharRegExp.test(event.key);
  }

  _onPaste(e) {
    if (this._enabledCharPattern) {
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');

      if (!this.__enabledTextRegExp.test(pastedText)) {
        e.preventDefault();
      }
    }
  }

  _onDrop(e) {
    if (this._enabledCharPattern) {
      const draggedText = e.dataTransfer.getData('text');

      if (!this.__enabledTextRegExp.test(draggedText)) {
        e.preventDefault();
      }
    }
  }

  _onBeforeInput(e) {
    // The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
    // but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
    // because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
    if (this._enabledCharPattern && e.data && !this.__enabledTextRegExp.test(e.data)) {
      e.preventDefault();
    }
  }

  __enabledCharPatternChanged(_enabledCharPattern) {
    this.__enabledCharRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '$');
    this.__enabledTextRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '*$');
  }

  _addIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      // IE11 dispatches `input` event in following cases:
      // - focus or blur, when placeholder attribute is set
      // - placeholder attribute value changed
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
      this._shouldPreventInput = () => {
        this.__preventInput = true;
        requestAnimationFrame(() => {
          this.__preventInput = false;
        });
      };

      node.addEventListener('focusin', this._shouldPreventInput);
      node.addEventListener('focusout', this._shouldPreventInput);

      this._createPropertyObserver('placeholder', this._shouldPreventInput);
    }
  }

  _removeIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      node.removeEventListener('focusin', this._shouldPreventInput);
      node.removeEventListener('focusout', this._shouldPreventInput);
    }
  }

  _getActiveErrorId(invalid, errorMessage, errorId) {
    this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.focusElement);
  }

  _getActiveLabelId(label, _labelId, _inputId) {
    let ids = _inputId;

    if (label) {
      ids = `${_labelId} ${_inputId}`;
    }

    this.focusElement.setAttribute('aria-labelledby', ids);
  }

  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!(errorMessage && invalid ? errorId : undefined)).toString();
  }

  _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
    const previousSizePropertyName = '__previous' + sizePropertyName;

    if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
      this.dispatchEvent(new CustomEvent('iron-resize', {
        bubbles: true
      }));
    }

    this[previousSizePropertyName] = value;
  }

  __observeOffsetHeight() {
    this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
  }
  /**
   * @protected
   */


  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

    /* istanbul ignore if */

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
      this.updateStyles();
    } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    /* istanbul ignore if */

    if (isSafari && this.root) {
      const WEBKIT_PROPERTY = '-webkit-backface-visibility';
      this.root.querySelectorAll('*').forEach(el => {
        el.style[WEBKIT_PROPERTY] = 'visible';
        el.style[WEBKIT_PROPERTY] = '';
      });
    }
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */

  /**
   * Fired when the value is changed by the user: on every typing keystroke,
   * and the value is cleared using the clear button.
   *
   * @event input
   */

  /**
   * Fired when the size of the element changes.
   *
   * @event iron-resize
   */


};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
  \*************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class TextFieldElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`;
  }

  static get is() {
    return 'vaadin-text-field';
  }

  static get version() {
    return '2.5.3';
  }

  static get properties() {
    return {
      /**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */
      list: {
        type: String
      },

      /**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */
      pattern: {
        type: String
      },

      /**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       */
      title: {
        type: String
      }
    };
  }

}

customElements.define(TextFieldElement.is, TextFieldElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/required-field.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="material-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="material-required-field material-field-button">
      :host {
        display: inline-flex;
        position: relative;
        padding-top: 8px;
        margin-bottom: 8px;
        outline: none;
        color: var(--material-body-text-color);
        font-size: var(--material-body-font-size);
        line-height: 24px;
        font-family: var(--material-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host::before {
        line-height: 32px;
      }

      /* Strange gymnastics to make fields vertically align nicely in most cases
         (no label, with label, without prefix, with prefix, etc.) */

      :host([has-label]) {
        padding-top: 24px;
      }

      [part="label"]:empty {
        display: none;
      }

      [part="label"]:empty::before {
        content: " ";
        position: absolute;
      }

      [part="input-field"] {
        position: relative;
        top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */
        height: 32px;
        padding-left: 0;
        background-color: transparent;
        margin: 0;
      }

      [part="input-field"]::before,
      [part="input-field"]::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        transform-origin: 50% 0%;
        background-color: var(--_material-text-field-input-line-background-color, #000);
        opacity: var(--_material-text-field-input-line-opacity, 0.42);
      }

      [part="input-field"]::after {
        background-color: var(--material-primary-color);
        opacity: 0;
        height: 2px;
        bottom: 0;
        transform: scaleX(0);
        transition: opacity 0.175s;
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(input),
      :host([disabled]) [part="input-field"] ::slotted(textarea),
      :host([disabled]) [part="input-field"] ::slotted([part="value"]) {
        color: var(--material-disabled-text-color);
        -webkit-text-fill-color: var(--material-disabled-text-color);
      }

      [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(input),
      :host([disabled]) [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        outline: none;
        margin: 0;
        border: 0;
        border-radius: 0;
        padding: 8px 0;
        width: 100%;
        height: 100%;
        font-family: inherit;
        font-size: 1em;
        line-height: inherit;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      /* TODO: the text opacity should be 42%, but the disabled style is 38%.
      Would need to introduce another property for it if we want to be 100% accurate. */
      [part="value"]::-webkit-input-placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.05s;
        opacity: 1;
      }

      [part="value"]:-ms-input-placeholder {
        color: var(--material-disabled-text-color);
      }

      [part="value"]::-moz-placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.05s;
        opacity: 1;
      }

      [part="value"]::placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.1s;
        opacity: 1;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::-moz-placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      /* IE11 doesn’t show the placeholder when the input is focused, so it’s basically useless for this theme */
      :host([has-label]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      [part="label"] {
        width: 133%;
        transition: transform 0.175s, color 0.175s, width 0.175s;
        transition-timing-function: ease, ease, step-end;
      }

      /* TODO: using unsupported selector to fix IE11 (even thought the label element is scaled down,
         the 133% width still takes the same space as an unscaled element */
      ::-ms-backdrop,
      .vaadin-text-field-container {
        overflow: hidden;
      }

      /* Same fix for MS Edge ^^   */
      @supports (-ms-ime-align:auto) {
        .vaadin-text-field-container {
          overflow: hidden;
        }
      }

      :host(:hover:not([readonly]):not([invalid])) [part="input-field"]::before {
        opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);
      }

      :host([focused]:not([invalid])) [part="label"] {
        color: var(--material-primary-text-color);
      }

      :host([focused]) [part="input-field"]::after,
      :host([invalid]) [part="input-field"]::after {
        opacity: 1;
        transform: none;
        transition: transform 0.175s, opacity 0.175s;
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--material-error-color);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--material-error-text-color);
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        color: var(--material-disabled-text-color);
      }

      :host([disabled]) [part="input-field"]::before {
        background-color: transparent;
        background-image: linear-gradient(90deg, var(--_material-text-field-input-line-background-color, #000) 0, var(--_material-text-field-input-line-background-color, #000) 2px, transparent 2px);
        background-size: 4px 1px;
        background-repeat: repeat-x;
      }

      /* Only target the visible floating label */
      :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
        width: 100%;
        /* IE11 doesn’t work with calc inside the translate function, so we need to have a fixed pixel value instead of 50% + 16px */
        transform: scale(1) translateY(24px);
        transition-timing-function: ease, ease, step-start;
        pointer-events: none;
        left: auto;
        transition-delay: 0.1s;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(*:not([part="value"]):not([part\$="-button"]):not(input):not(textarea)) {
        color: var(--material-secondary-text-color);
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field-styles.js */ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js");
/* harmony import */ var _src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js ***!
  \*****************************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return usageStatistics; });
/* harmony import */ var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

/*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/


function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **/
}

const usageStatistics = function () {
  if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
    return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
  }
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
  \*********************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-usage-statistics-collect.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__["usageStatistics"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWhpc3Rvcnl+cGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1idXR0b24vc3JjL3ZhYWRpbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWJ1dHRvbi90aGVtZS9tYXRlcmlhbC92YWFkaW4tYnV0dG9uLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tYnV0dG9uL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1tb250aC1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLW1vbnRoLWNhbGVuZGFyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1lbGVtZW50LW1peGluL3ZhYWRpbi1lbGVtZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9yZXF1aXJlZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9zcmMvdmFhZGluLXRleHQtZmllbGQtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi10ZXh0LWZpZWxkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC90aGVtZS9tYXRlcmlhbC92YWFkaW4tdGV4dC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy1jb2xsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZ2VzdHVyZS1ldmVudC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgRWxlbWVudE1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tZWxlbWVudC1taXhpbi92YWFkaW4tZWxlbWVudC1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG4vKipcbiAqIGA8dmFhZGluLWJ1dHRvbj5gIGlzIGEgV2ViIENvbXBvbmVudCBwcm92aWRpbmcgYW4gYWNjZXNzaWJsZSBhbmQgY3VzdG9taXphYmxlIGJ1dHRvbi5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWJ1dHRvbj5cbiAqIDwvdmFhZGluLWJ1dHRvbj5cbiAqIGBgYFxuICpcbiAqIGBgYGpzXG4gKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2YWFkaW4tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhbGVydCgnSGVsbG8gV29ybGQhJykpO1xuICogYGBgXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGV4cG9zZWQgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLVxuICogYGxhYmVsYCB8IFRoZSBsYWJlbCAodGV4dCkgaW5zaWRlIHRoZSBidXR0b25cbiAqIGBwcmVmaXhgIHwgQSBzbG90IGZvciBlLmcuIGFuIGljb24gYmVmb3JlIHRoZSBsYWJlbFxuICogYHN1ZmZpeGAgfCBBIHNsb3QgZm9yIGUuZy4gYW4gaWNvbiBhZnRlciB0aGUgbGFiZWxcbiAqXG4gKlxuICogVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIGFyZSBleHBvc2VkIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0gfCAtLS0tLS0tLS0tLVxuICogYGFjdGl2ZWAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWQgZG93biwgZWl0aGVyIHdpdGggbW91c2UsIHRvdWNoIG9yIHRoZSBrZXlib2FyZC5cbiAqIGBkaXNhYmxlZGAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICogYGZvY3VzLXJpbmdgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBmb2N1c2VkIHVzaW5nIHRoZSBrZXlib2FyZC5cbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBidXR0b24gaXMgZm9jdXNlZC5cbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLkVsZW1lbnRNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db250cm9sU3RhdGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAbWl4ZXMgUG9seW1lci5HZXN0dXJlRXZlbnRMaXN0ZW5lcnNcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICovXG5jbGFzcyBCdXR0b25FbGVtZW50IGV4dGVuZHNcbiAgRWxlbWVudE1peGluKFxuICAgIENvbnRyb2xTdGF0ZU1peGluKFxuICAgICAgVGhlbWFibGVNaXhpbihcbiAgICAgICAgR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAvKiBFbnN1cmUgdGhlIGJ1dHRvbiBpcyBhbHdheXMgYWxpZ25lZCBvbiB0aGUgYmFzZWxpbmUgKi9cbiAgICAgIC52YWFkaW4tYnV0dG9uLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXFxcMjAwM1wiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAudmFhZGluLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInByZWZpeFwiXSxcbiAgICAgIFtwYXJ0PVwic3VmZml4XCJdIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAjYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3M9XCJ2YWFkaW4tYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBwYXJ0PVwicHJlZml4XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cImxhYmVsXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwic3VmZml4XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tYnV0dG9uJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzIuMi4xJztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBMZWF2aW5nIGRlZmF1bHQgcm9sZSBpbiB0aGUgbmF0aXZlIGJ1dHRvbiwgbWFrZXMgbmF2aWdhdGlvbiBhbm5vdW5jZW1lbnRcbiAgICAvLyBiZWluZyBkaWZmZXJlbnQgd2hlbiB1c2luZyBmb2N1cyBuYXZpZ2F0aW9uICh0YWIpIHZlcnN1cyB1c2luZyBub3JtYWxcbiAgICAvLyBuYXZpZ2F0aW9uIChhcnJvd3MpLiBUaGUgZmlyc3Qgd2F5IGFubm91bmNlcyB0aGUgbGFiZWwgb24gYSBidXR0b25cbiAgICAvLyBzaW5jZSB0aGUgZm9jdXMgaXMgbW92ZWQgcHJvZ3JhbW1hdGljYWxseSwgYW5kIHRoZSBzZWNvbmQgb24gYSBncm91cC5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblxuICAgIHRoaXMuX2FkZEFjdGl2ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyBgYWN0aXZlYCBzdGF0ZSBpcyBwcmVzZXJ2ZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgYmV0d2VlbiBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMuXG4gICAgLy8gcmVwcm9kdWNpYmxlIGluIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgd2hlbiBjbG9zaW5nIG9uIGBDYW5jZWxgIG9yIGBUb2RheWAgY2xpY2suXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRBY3RpdmVMaXN0ZW5lcnMoKSB7XG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ2Rvd24nLCAoKSA9PiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpKTtcbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndXAnLCAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gIXRoaXMuZGlzYWJsZWQgJiYgWzEzLCAzMl0uaW5kZXhPZihlLmtleUNvZGUpID49IDAgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQuYnV0dG9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShCdXR0b25FbGVtZW50LmlzLCBCdXR0b25FbGVtZW50KTtcblxuZXhwb3J0IHsgQnV0dG9uRWxlbWVudCB9O1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvc2hhZG93LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1idXR0b25cIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1hdGVyaWFsLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1idXR0b24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG5cbiAgICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLTEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSxcbiAgICAgIDpob3N0OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdDo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcik6OmJlZm9yZSxcbiAgICAgIDpob3N0KFtmb2N1cy1yaW5nXSk6OmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMDg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFthY3RpdmVdKTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4xNjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXSk6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4wMDAwMDAxKTsgLyogYW5pbWF0aW9uIHdvcmtzIHdlaXJkbHkgd2l0aCBzY2FsZSgwKSAqL1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXI6bm90KFthY3RpdmVdKSk6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLyogQ29udGFpbmVkIGFuZCBvdXRsaW5lIHZhcmlhbnRzICovXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udGFpbmVkXCJdKSxcbiAgICAgIDpob3N0KFt0aGVtZX49XCJvdXRsaW5lZFwiXSkge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cIm91dGxpbmVkXCJdKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS1fbWF0ZXJpYWwtYnV0dG9uLW91dGxpbmUtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJjb250YWluZWRcIl06bm90KFtkaXNhYmxlZF0pKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb250cmFzdC1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tMmRwKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXVtkaXNhYmxlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udGFpbmVkXCJdOmhvdmVyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tNGRwKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXVthY3RpdmVdKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tOGRwKTtcbiAgICAgIH1cblxuICAgICAgLyogSWNvbiBhbGlnbm1lbnQgKi9cblxuICAgICAgW3BhcnRdIDo6c2xvdHRlZChpcm9uLWljb24pIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwicHJlZml4XCJdIDo6c2xvdHRlZChpcm9uLWljb24pIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInN1ZmZpeFwiXSA6OnNsb3R0ZWQoaXJvbi1pY29uKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tYnV0dG9uLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tYnV0dG9uLmpzJztcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbi8qKlxuICogQSBwcml2YXRlIG1peGluIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggZHluYW1pYyBwcm9wZXJ0aWVzIGFuZCBQb2x5bWVyIEFuYWx5emVyLlxuICogTm8gbmVlZCB0byBleHBvc2UgdGhlc2UgcHJvcGVydGllcyBpbiB0aGUgQVBJIGRvY3MuXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmNvbnN0IFRhYkluZGV4TWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpblRhYkluZGV4TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBJbnRlcm5hbCBwcm9wZXJ0eSBuZWVkZWQgdG8gbGlzdGVuIHRvIGB0YWJpbmRleGAgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogRm9yIGNoYW5naW5nIHRoZSB0YWJpbmRleCBvZiB0aGlzIGNvbXBvbmVudCB1c2UgdGhlIG5hdGl2ZSBgdGFiSW5kZXhgIHByb3BlcnR5LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgdGFiaW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ190YWJpbmRleENoYW5nZWQnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgIC8vIFNoYWR5RE9NIGJyb3dzZXJzIG5lZWQgdGhlIGB0YWJJbmRleGAgaW4gb3JkZXIgdG8gbm90aWZ5IHdoZW4gdGhlIHVzZXIgY2hhbmdlcyBpdCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgcHJvcGVydGllc1sndGFiSW5kZXgnXSA9IHByb3BlcnRpZXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cbn07XG5cbi8qKlxuICogUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlIGlzIG5vdCBhIHByb3BlciAyLjAgY2xhc3MsIGFsc28sIGl0cyB0YWJpbmRleFxuICogaW1wbGVtZW50YXRpb24gZmFpbHMgaW4gdGhlIHNoYWRvdyBkb20sIHNvIHdlIGhhdmUgdGhpcyBmb3IgdmFhZGluIGVsZW1lbnRzLlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgQ29udHJvbFN0YXRlTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpbkNvbnRyb2xTdGF0ZU1peGluIGV4dGVuZHMgVGFiSW5kZXhNaXhpbihzdXBlckNsYXNzKSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgdGhpcyBjb250cm9sIHNob3VsZCBoYXZlIGlucHV0IGZvY3VzIHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9mb2N1czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0b3JlcyB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGFiaW5kZXggYXR0cmlidXRlIG9mIHRoZSBkaXNhYmxlZCBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIF9wcmV2aW91c1RhYkluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2lzU2hpZnRUYWJiaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZSA9PiB7XG4gICAgICBpZiAoZS5jb21wb3NlZFBhdGgoKVswXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLl9mb2N1cyhlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuZm9jdXNFbGVtZW50KSAhPT0gLTEgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZSA9PiB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKSk7XG5cbiAgICAvLyBJbiBzdXBlci5yZWFkeSgpIG90aGVyICdmb2N1c2luJyBhbmQgJ2ZvY3Vzb3V0JyBsaXN0ZW5lcnMgbWlnaHQgYmVcbiAgICAvLyBhZGRlZCwgc28gd2UgY2FsbCBpdCBhZnRlciBvdXIgb3duIG9uZXMgdG8gZW5zdXJlIHRoZXkgZXhlY3V0ZSBmaXJzdC5cbiAgICAvLyBJc3N1ZSB0byB3YXRjaCBvdXQ6IHdoZW4gaW5jb3JyZWN0LCA8dmFhZGluLWNvbWJvLWJveD4gcmVmb2N1c2VzIHRoZVxuICAgIC8vIGlucHV0IGZpZWxkIG9uIGlPUyBhZnRlciDigJxEb25l4oCdIGlzIHByZXNzZWQuXG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIFRoaXMgZml4ZXMgdGhlIGJ1ZyBpbiBGaXJlZm94IDYxIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDcyODg3KVxuICAgIC8vIHdoZXJlIGZvY3Vzb3V0IGV2ZW50IGRvZXMgbm90IGdvIG91dCBvZiBzaGFkeSBET00gYmVjYXVzZSBjb21wb3NlZCBwcm9wZXJ0eSBpbiB0aGUgZXZlbnQgaXMgbm90IHRydWVcbiAgICBjb25zdCBlbnN1cmVFdmVudENvbXBvc2VkID0gZSA9PiB7XG4gICAgICBpZiAoIWUuY29tcG9zZWQpIHtcbiAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCAmJiBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBGbGFnIGlzIGNoZWNrZWQgaW4gX2ZvY3VzIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAgdGhpcy5faXNTaGlmdFRhYmJpbmcgPSB0cnVlO1xuICAgICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cy5hcHBseSh0aGlzKTtcbiAgICAgICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgICAgICAvLyBFdmVudCBoYW5kbGluZyBpbiBJRSBpcyBhc3luY2hyb25vdXMgYW5kIHRoZSBmbGFnIGlzIHJlbW92ZWQgYXN5bmNocm9ub3VzbHkgYXMgd2VsbFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5faXNTaGlmdFRhYmJpbmcgPSBmYWxzZSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgRkY2My02NSBidWcgdGhhdCBjYXVzZXMgdGhlIGZvY3VzIHRvIGdldCBsb3N0IHdoZW5cbiAgICAgICAgICAvLyBibHVycmluZyBhIHNsb3R0ZWQgY29tcG9uZW50IHdpdGggZm9jdXNhYmxlIHNoYWRvdyByb290IGNvbnRlbnRcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTI4Njg2XG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHdoZW4gc2FmZVxuICAgICAgICAgIGNvbnN0IGZpcmVmb3ggPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveFxcLyhcXGRcXGRcXC5cXGQpLyk7XG4gICAgICAgICAgaWYgKGZpcmVmb3hcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPj0gNjNcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPCA2NlxuICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnROb2RlXG4gICAgICAgICAgICAmJiB0aGlzLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBmYWtlVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZha2VUYXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGZha2VUYXJnZXQudGFiSW5kZXggPSB0aGlzLnRhYkluZGV4O1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZha2VUYXJnZXQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWtlVGFyZ2V0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciA9IHRoaXMuX2JvZHlLZXlkb3duTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEtleXVwTGlzdGVuZXIgPSB0aGlzLl9ib2R5S2V5dXBMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JvdW5kS2V5dXBMaXN0ZW5lciwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYm91bmRLZXl1cExpc3RlbmVyLCB0cnVlKTtcblxuICAgIC8vIGluIG5vbi1DaHJvbWUgYnJvd3NlcnMsIGJsdXIgZG9lcyBub3QgZmlyZSBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGRpc2Nvbm5lY3RlZC5cbiAgICAvLyByZXByb2R1Y2libGUgaW4gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCB3aGVuIGNsb3Npbmcgb24gYENhbmNlbGAgb3IgYFRvZGF5YCBjbGljay5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9jdXNlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBmb2N1cy1yaW5nIGlzIHRydWUgd2hlbiB0aGUgZWxlbWVudCB3YXMgZm9jdXNlZCBmcm9tIHRoZSBrZXlib2FyZC5cbiAgICAvLyBGb2N1cyBSaW5nIFtBMTF5Y2FzdHNdOiBodHRwczovL3lvdXR1LmJlL2lsajJQNS01Q2pJXG4gICAgaWYgKGZvY3VzZWQgJiYgdGhpcy5fdGFiUHJlc3NlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdmb2N1cy1yaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgX2JvZHlLZXlkb3duTGlzdGVuZXIoZSkge1xuICAgIHRoaXMuX3RhYlByZXNzZWQgPSBlLmtleUNvZGUgPT09IDk7XG4gIH1cblxuICBfYm9keUtleXVwTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fdGFiUHJlc3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFueSBlbGVtZW50IGV4dGVuZGluZyB0aGlzIG1peGluIGlzIHJlcXVpcmVkIHRvIGltcGxlbWVudCB0aGlzIGdldHRlci5cbiAgICogSXQgcmV0dXJucyB0aGUgYWN0dWFsIGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHdpbmRvdy5jb25zb2xlLndhcm4oYFBsZWFzZSBpbXBsZW1lbnQgdGhlICdmb2N1c0VsZW1lbnQnIHByb3BlcnR5IGluIDwke3RoaXMubG9jYWxOYW1lfT5gKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9mb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hpZnRUYWJiaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c0VsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmluZyB0aGUgZm9jdXMgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGNhdXNlcyBmaXJpbmcgb2YgdGhlIGJsdXIgZXZlbnQgd2hhdCBsZWFkcyB0byBwcm9ibGVtcyBpbiBJRS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZvY3VzKCkge1xuICAgIGlmICghdGhpcy5mb2N1c0VsZW1lbnQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXRpdmUgYmx1cmluZyBpbiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90aGluZyBiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgdGhlIGZvY3VzLlxuICAgKiBJbiBjaHJvbWUgaXQgd29ya3MsIGJ1dCBub3QgaW4gRkYuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgfVxuXG4gIF9kaXNhYmxlZENoYW5nZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmZvY3VzRWxlbWVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9wcmV2aW91c1RhYkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gdGhpcy5fcHJldmlvdXNUYWJJbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX3RhYmluZGV4Q2hhbmdlZCh0YWJpbmRleCkge1xuICAgIGlmICh0YWJpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC50YWJJbmRleCA9IHRhYmluZGV4O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMudGFiaW5kZXgpIHtcbiAgICAgIC8vIElmIHRhYmluZGV4IGF0dHJpYnV0ZSB3YXMgY2hhbmdlZCB3aGlsZSBjaGVja2JveCB3YXMgZGlzYWJsZWRcbiAgICAgIGlmICh0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiaW5kZXggPSB0YWJpbmRleCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe3RhYkluZGV4OiB0YWJpbmRleCwgdGFiaW5kZXg6IHRhYmluZGV4fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNsaWNrKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc3VwZXIuY2xpY2soKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5leHBvcnQgY29uc3QgRGF0ZVBpY2tlckhlbHBlciA9IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJIZWxwZXIge1xuICAvKipcbiAgICogR2V0IElTTyA4NjAxIHdlZWsgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBEYXRlIG9iamVjdFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFdlZWsgbnVtYmVyXG4gICAqL1xuICBzdGF0aWMgX2dldElTT1dlZWtOdW1iZXIoZGF0ZSkge1xuICAgIC8vIFBvcnRlZCBmcm9tIFZhYWRpbiBGcmFtZXdvcmsgbWV0aG9kIGNvbS52YWFkaW4uY2xpZW50LkRhdGVUaW1lU2VydmljZS5nZXRJU09XZWVrTnVtYmVyKGRhdGUpXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPT0gc3VuZGF5XG5cbiAgICAvLyBJU08gODYwMSB1c2Ugd2Vla3MgdGhhdCBzdGFydCBvbiBtb25kYXkgc28gd2UgdXNlXG4gICAgLy8gbW9uPTEsdHVlPTIsLi4uc3VuPTc7XG4gICAgaWYgKGRheU9mV2VlayA9PT0gMCkge1xuICAgICAgZGF5T2ZXZWVrID0gNztcbiAgICB9XG4gICAgLy8gRmluZCBuZWFyZXN0IHRodXJzZGF5IChkZWZpbmVzIHRoZSB3ZWVrIGluIElTTyA4NjAxKS4gVGhlIHdlZWsgbnVtYmVyXG4gICAgLy8gZm9yIHRoZSBuZWFyZXN0IHRodXJzZGF5IGlzIHRoZSBzYW1lIGFzIGZvciB0aGUgdGFyZ2V0IGRhdGUuXG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheURpZmYgPSA0IC0gZGF5T2ZXZWVrOyAvLyA0IGlzIHRodXJzZGF5XG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgbmVhcmVzdFRodXJzZGF5RGlmZiAqIDI0ICogMzYwMCAqIDEwMDApO1xuXG4gICAgdmFyIGZpcnN0T2ZKYW51YXJ5ID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZmlyc3RPZkphbnVhcnkuc2V0RnVsbFllYXIobmVhcmVzdFRodXJzZGF5LmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgdmFyIHRpbWVEaWZmID0gbmVhcmVzdFRodXJzZGF5LmdldFRpbWUoKSAtIGZpcnN0T2ZKYW51YXJ5LmdldFRpbWUoKTtcblxuICAgIC8vIFJvdW5kaW5nIHRoZSByZXN1bHQsIGFzIHRoZSBkaXZpc2lvbiBkb2Vzbid0IHJlc3VsdCBpbiBhbiBpbnRlZ2VyXG4gICAgLy8gd2hlbiB0aGUgZ2l2ZW4gZGF0ZSBpcyBpbnNpZGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgcGVyaW9kLlxuICAgIHZhciBkYXlzU2luY2VGaXJzdE9mSmFudWFyeSA9IE1hdGgucm91bmQodGltZURpZmYgLyAoMjQgKiAzNjAwICogMTAwMCkpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGRheXNTaW5jZUZpcnN0T2ZKYW51YXJ5KSAvIDcgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUxXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gZGF0ZSBvYmplY3RzIHJlZmVyIHRvIHRoZSBzYW1lIGRhdGVcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gZGF0ZTEgaW5zdGFuY2VvZiBEYXRlICYmIGRhdGUyIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICBkYXRlMS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGRhdGUgaXMgaW4gdGhlIHJhbmdlIG9mIGFsbG93ZWQgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge0RhdGV9IG1pbiBSYW5nZSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGV9IG1heCBSYW5nZSBlbmRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZGF0ZSBpcyBpbiB0aGUgcmFuZ2VcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKCFtaW4gfHwgZGF0ZSA+PSBtaW4pICYmICghbWF4IHx8IGRhdGUgPD0gbWF4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBkYXRlIGZyb20gYXJyYXkgb2YgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjb21wYXJlIGRhdGVzIHdpdGhcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0ZXMgQXJyYXkgb2YgZGF0ZSBvYmplY3RzXG4gICAqIEByZXR1cm4ge0RhdGV9IENsb3Nlc3QgZGF0ZVxuICAgKi9cbiAgc3RhdGljIF9nZXRDbG9zZXN0RGF0ZShkYXRlLCBkYXRlcykge1xuICAgIHJldHVybiBkYXRlcy5maWx0ZXIoZGF0ZSA9PiBkYXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAucmVkdWNlKChjbG9zZXN0RGF0ZSwgY2FuZGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb3Nlc3REYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbG9zZXN0RGF0ZSkge1xuICAgICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FuZGlkYXRlRGlmZiA9IE1hdGguYWJzKGRhdGUuZ2V0VGltZSgpIC0gY2FuZGlkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHZhciBjbG9zZXN0RGF0ZURpZmYgPSBNYXRoLmFicyhjbG9zZXN0RGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVEaWZmIDwgY2xvc2VzdERhdGVEaWZmID8gY2FuZGlkYXRlIDogY2xvc2VzdERhdGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgYmFzaWMgY29tcG9uZW50IHBhcnRzIG9mIGEgZGF0ZSAoZGF5LCBtb250aCBhbmQgeWVhcilcbiAgICogdG8gdGhlIGV4cGVjdGVkIGZvcm1hdC5cbiAgICovXG4gIHN0YXRpYyBfZXh0cmFjdERhdGVQYXJ0cyhkYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IElyb25BMTF5S2V5c0JlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3MuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXJNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJNaXhpbiBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSwgc3ViY2xhc3Ncbikge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY3VycmVudCBzZWxlY3RlZCBkYXRlLlxuICAgICAgICovXG4gICAgICBfc2VsZWN0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGVcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkRGF0ZTogRGF0ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHdoaWNoIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhlIHNhbWUgZGF0ZSBmb3JtYXRzIGFzIGZvciB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBhcmUgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBpbml0aWFsUG9zaXRpb246IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGFiZWwgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdHJ1ZSB0byBvcGVuIHRoZSBkYXRlIHNlbGVjdG9yIG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRydWUgdG8gZGlzcGxheSBJU08tODYwMSB3ZWVrIG51bWJlcnMgaW4gdGhlIGNhbGVuZGFyLiBOb3RpY2UgdGhhdFxuICAgICAgICogZGlzcGxheWluZyB3ZWVrIG51bWJlcnMgaXMgb25seSBzdXBwb3J0ZWQgd2hlbiBgaTE4bi5maXJzdERheU9mV2Vla2BcbiAgICAgICAqIGlzIDEgKE1vbmRheSkuXG4gICAgICAgKi9cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfZnVsbHNjcmVlbjoge1xuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2Z1bGxzY3JlZW5DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2Z1bGxzY3JlZW5NZWRpYVF1ZXJ5OiB7XG4gICAgICAgIHZhbHVlOiAnKG1heC13aWR0aDogNDIwcHgpLCAobWF4LWhlaWdodDogNDIwcHgpJ1xuICAgICAgfSxcblxuICAgICAgLy8gQW4gYXJyYXkgb2YgYW5jZXN0b3IgZWxlbWVudHMgd2hvc2UgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcgaXMgZm9yY2VkIGZyb20gdmFsdWVcbiAgICAgIC8vICd0b3VjaCcgdG8gdmFsdWUgJ2F1dG8nIGluIG9yZGVyIHRvIHByZXZlbnQgdGhlbSBmcm9tIGNsaXBwaW5nIHRoZSBkcm9wZG93bi4gaU9TIG9ubHkuXG4gICAgICBfdG91Y2hQcmV2ZW50ZWQ6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvYmplY3QgdXNlZCB0byBsb2NhbGl6ZSB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAqIFRvIGNoYW5nZSB0aGUgZGVmYXVsdCBsb2NhbGl6YXRpb24sIHJlcGxhY2UgdGhlIGVudGlyZVxuICAgICAgICogX2kxOG5fIG9iamVjdCBvciBqdXN0IHRoZSBwcm9wZXJ0eSB5b3Ugd2FudCB0byBtb2RpZnkuXG4gICAgICAgKlxuICAgICAgICogVGhlIG9iamVjdCBoYXMgdGhlIGZvbGxvd2luZyBKU09OIHN0cnVjdHVyZSBhbmQgZGVmYXVsdCB2YWx1ZXM6XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSB3aXRoIHRoZSBmdWxsIG5hbWVzIG9mIG1vbnRocyBzdGFydGluZ1xuICAgICAgICAgICAgLy8gd2l0aCBKYW51YXJ5LlxuICAgICAgICAgICAgbW9udGhOYW1lczogW1xuICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLFxuICAgICAgICAgICAgICAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLFxuICAgICAgICAgICAgICAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuIFVzZWRcbiAgICAgICAgICAgIC8vIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cy5cbiAgICAgICAgICAgIHdlZWtkYXlzOiBbXG4gICAgICAgICAgICAgICdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSdcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHNob3J0IHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuXG4gICAgICAgICAgICAvLyBEaXNwbGF5ZWQgaW4gdGhlIGNhbGVuZGFyLlxuICAgICAgICAgICAgd2Vla2RheXNTaG9ydDogW1xuICAgICAgICAgICAgICAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J1xuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8gQW4gaW50ZWdlciBpbmRpY2F0aW5nIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIC8vICgwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuKS5cbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxuXG4gICAgICAgICAgICAvLyBVc2VkIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cyBhbG9uZyB3aXRoIHdlZWtcbiAgICAgICAgICAgIC8vIG51bWJlcnMsIGlmIHRoZXkgYXJlIGRpc3BsYXllZC5cbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbGVuZGFyIGljb24gYnV0dG9uIHRpdGxlLlxuICAgICAgICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcicsXG5cbiAgICAgICAgICAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBDbGVhciBpY29uIGJ1dHRvbiB0aXRsZS5cbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuXG4gICAgICAgICAgICAvLyBUcmFuc2xhdGlvbiBvZiB0aGUgVG9kYXkgc2hvcnRjdXQgYnV0dG9uIHRleHQuXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbmNlbCBidXR0b24gdGV4dC5cbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gZm9ybWF0IGdpdmVuIGBPYmplY3RgIGFzXG4gICAgICAgICAgICAvLyBkYXRlIHN0cmluZy4gT2JqZWN0IGlzIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YFxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFyZ3VtZW50IG1vbnRoIGlzIDAtYmFzZWQuIFRoaXMgbWVhbnMgdGhhdCBKYW51YXJ5ID0gMCBhbmQgRGVjZW1iZXIgPSAxMS5cbiAgICAgICAgICAgIGZvcm1hdERhdGU6IGQgPT4ge1xuICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlblxuICAgICAgICAgICAgICAvLyBvYmplY3QgaW4gJ01NL0REL1lZWVknIC1mb3JtYXRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIGdpdmVuIHRleHQgdG8gYW4gYE9iamVjdGAgaW4gdGhlIGZvcm1hdCBgeyBkYXk6IC4uLiwgbW9udGg6IC4uLiwgeWVhcjogLi4uIH1gLlxuICAgICAgICAgICAgLy8gTXVzdCBwcm9wZXJseSBwYXJzZSAoYXQgbGVhc3QpIHRleHQgZm9ybWF0dGVkIGJ5IGBmb3JtYXREYXRlYC5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIG51bGwgd2lsbCBkaXNhYmxlIGtleWJvYXJkIGlucHV0IGZlYXR1cmUuXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJndW1lbnQgbW9udGggaXMgMC1iYXNlZC4gVGhpcyBtZWFucyB0aGF0IEphbnVhcnkgPSAwIGFuZCBEZWNlbWJlciA9IDExLlxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgLy8gUGFyc2VzIGEgc3RyaW5nIGluICdNTS9ERC9ZWScsICdNTS9ERCcgb3IgJ0REJyAtZm9ybWF0IHRvXG4gICAgICAgICAgICAgIC8vIGFuIGBPYmplY3RgIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBmdW5jdGlvbiB0byBmb3JtYXQgZ2l2ZW4gYG1vbnRoTmFtZWAgYW5kXG4gICAgICAgICAgICAvLyBgZnVsbFllYXJgIGludGVnZXIgYXMgY2FsZW5kYXIgdGl0bGUgc3RyaW5nLlxuICAgICAgICAgICAgZm9ybWF0VGl0bGU6IChtb250aE5hbWUsIGZ1bGxZZWFyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBtb250aE5hbWUgKyAnICcgKyBmdWxsWWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAqXG4gICAgICAgKiBAZGVmYXVsdCB7RW5nbGlzaC9VU31cbiAgICAgICAqL1xuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JyxcbiAgICAgICAgICAgICAgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2Vla2RheXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogMCxcbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcbiAgICAgICAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuICAgICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBmb3JtYXREYXRlOiBkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IFN0cmluZyhkLnllYXIpLnJlcGxhY2UoL1xcZCsvLCB5ID0+ICcwMDAwJy5zdWJzdHIoeS5sZW5ndGgpICsgeSk7XG4gICAgICAgICAgICAgIHJldHVybiBbZC5tb250aCArIDEsIGQuZGF5LCB5ZWFyU3RyXS5qb2luKCcvJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0ZXh0LnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgbGV0IGRhdGUsIG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSwgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHllYXIgPSBwYXJzZUludChwYXJ0c1syXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzWzJdLmxlbmd0aCA8IDMgJiYgeWVhciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICB5ZWFyICs9IHllYXIgPCA1MCA/IDIwMDAgOiAxOTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ZGF5OiBkYXRlLCBtb250aCwgeWVhcn07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXRUaXRsZTogKG1vbnRoTmFtZSwgZnVsbFllYXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoTmFtZSArICcgJyArIGZ1bGxZZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKlxuICAgICAgICogU3VwcG9ydGVkIGRhdGUgZm9ybWF0czpcbiAgICAgICAqIC0gSVNPIDg2MDEgYFwiWVlZWS1NTS1ERFwiYCAoZGVmYXVsdClcbiAgICAgICAqIC0gNi1kaWdpdCBleHRlbmRlZCBJU08gODYwMSBgXCIrWVlZWVlZLU1NLUREXCJgLCBgXCItWVlZWVlZLU1NLUREXCJgXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbWluQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ19tYXhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGVhcmxpZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgLy8gbnVsbCBkb2VzIG5vdCB3b3JrIGhlcmUgYmVjYXVzZSBtaW5pbWl6ZXIgcGFzc2VzIHVuZGVmaW5lZCB0byBvdmVybGF5ICgjMzUxKVxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21heERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICBfbm9JbnB1dDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ19pc05vSW5wdXQoX2Z1bGxzY3JlZW4sIF9pb3MsIGkxOG4sIGkxOG4uKiknXG4gICAgICB9LFxuXG4gICAgICBfaW9zOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKVxuICAgICAgfSxcblxuICAgICAgX3dlYmtpdE92ZXJmbG93U2Nyb2xsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJydcbiAgICAgIH0sXG5cbiAgICAgIF9pZ25vcmVBbm5vdW5jZToge1xuICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzT3ZlcmxheU9uT3BlbjogQm9vbGVhbixcblxuICAgICAgX292ZXJsYXlJbml0aWFsaXplZDogQm9vbGVhblxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ191cGRhdGVIYXNWYWx1ZSh2YWx1ZSknLFxuICAgICAgJ192YWxpZGF0ZUlucHV0KF9zZWxlY3RlZERhdGUsIF9taW5EYXRlLCBfbWF4RGF0ZSknLFxuICAgICAgJ19zZWxlY3RlZERhdGVDaGFuZ2VkKF9zZWxlY3RlZERhdGUsIGkxOG4uZm9ybWF0RGF0ZSknLFxuICAgICAgJ19mb2N1c2VkRGF0ZUNoYW5nZWQoX2ZvY3VzZWREYXRlLCBpMThuLmZvcm1hdERhdGUpJyxcbiAgICAgICdfYW5ub3VuY2VGb2N1c2VkRGF0ZShfZm9jdXNlZERhdGUsIG9wZW5lZCwgX2lnbm9yZUFubm91bmNlKSdcbiAgICBdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9ib3VuZE9uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEZvY3VzID0gdGhpcy5fZm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uID0gdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIGFkZExpc3RlbmVyKHRoaXMsICd0YXAnLCBlID0+IHtcbiAgICAgIC8vIEZJWE1FKHBsYXRvc2hhKTogdXNlIHByZXZlbnREZWZhdWx0IGluIHRoZSB0ZXh0IGZpZWxkIGNsZWFyIGJ1dHRvbixcbiAgICAgIC8vIHRoZW4gdGhlIGZvbGxvd2luZyBjb21wb3NlZFBhdGggY2hlY2sgY291bGQgYmUgc2ltcGxpZmllZCBkb3duXG4gICAgICAvLyB0byBgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpYC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRleHQtZmllbGQvaXNzdWVzLzM1MlxuICAgICAgY29uc3QgaW5wdXRJbmRleCA9IGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgaWYgKFxuICAgICAgICBlLmNvbXBvc2VkUGF0aCgpLnNsaWNlKDAsIGlucHV0SW5kZXgpXG4gICAgICAgICAgLmZpbHRlcihlbCA9PiBlbC5nZXRBdHRyaWJ1dGUgJiYgZWwuZ2V0QXR0cmlidXRlKCdwYXJ0JykgPT09ICdjbGVhci1idXR0b24nKVxuICAgICAgICAgIC5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9wcmV2ZW50RGVmYXVsdC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uVXNlcklucHV0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBlID0+IHRoaXMuX25vSW5wdXQgJiYgZS50YXJnZXQuYmx1cigpKTtcbiAgfVxuXG4gIF9pbml0T3ZlcmxheSgpIHtcbiAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpO1xuICAgIHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdvcGVuZWQtY2hhbmdlZCcsIGUgPT4gdGhpcy5vcGVuZWQgPSBlLmRldGFpbC52YWx1ZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2Nsb3NlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzLWlucHV0JywgdGhpcy5fZm9jdXNBbmRTZWxlY3QuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndmFhZGluLW92ZXJsYXktZXNjYXBlLXByZXNzJywgdGhpcy5fYm91bmRGb2N1cyk7XG5cbiAgICAvLyBLZWVwIGZvY3VzIGF0dHJpYnV0ZSBpbiBmb2N1c0VsZW1lbnQgZm9yIHN0eWxpbmdcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMuZm9jdXNFbGVtZW50Ll9zZXRGb2N1c2VkKHRydWUpKTtcblxuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWNsb3NlJywgdGhpcy5fb25WYWFkaW5PdmVybGF5Q2xvc2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWVzY2FwZS1wcmVzcycsIHRoaXMuX2JvdW5kRm9jdXMpO1xuICAgIH1cblxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfY2xvc2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb2N1cygpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy4kLm92ZXJsYXkuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQoKTtcbiAgfVxuXG4gIGdldCBfbmF0aXZlSW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudCkge1xuICAgICAgLy8gdmFhZGluLXRleHQtZmllbGQncyBpbnB1dCBpcyBmb2N1c0VsZW1lbnRcbiAgICAgIC8vIGlyb24taW5wdXQncyBpbnB1dCBpcyBpbnB1dEVsZW1lbnRcbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnQuZm9jdXNFbGVtZW50ID8gdGhpcy5faW5wdXRFbGVtZW50LmZvY3VzRWxlbWVudCA6XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5pbnB1dEVsZW1lbnQgPyB0aGlzLl9pbnB1dEVsZW1lbnQuaW5wdXRFbGVtZW50IDpcbiAgICAgICAgICB3aW5kb3cudW53cmFwID8gd2luZG93LnVud3JhcCh0aGlzLl9pbnB1dEVsZW1lbnQpIDogdGhpcy5faW5wdXRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIF9wYXJzZURhdGUoc3RyKSB7XG4gICAgLy8gUGFyc2luZyB3aXRoIFJlZ0V4cCB0byBlbnN1cmUgY29ycmVjdCBmb3JtYXRcbiAgICB2YXIgcGFydHMgPSAvXihbLStdXFxkezF9fFxcZHsyLDR9fFstK11cXGR7Nn0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvLmV4ZWMoc3RyKTtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwLCAwKTsgLy8gV3JvbmcgZGF0ZSAoMTkwMC0wMS0wMSksIGJ1dCB3aXRoIG1pZG5pZ2h0IGluIGxvY2FsIHRpbWVcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHBhcnNlSW50KHBhcnRzWzFdLCAxMCkpO1xuICAgIGRhdGUuc2V0TW9udGgocGFyc2VJbnQocGFydHNbMl0sIDEwKSAtIDEpO1xuICAgIGRhdGUuc2V0RGF0ZShwYXJzZUludChwYXJ0c1szXSwgMTApKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIF9pc05vSW5wdXQoZnVsbHNjcmVlbiwgaW9zLCBpMThuKSB7XG4gICAgcmV0dXJuICF0aGlzLl9pbnB1dEVsZW1lbnQgfHwgZnVsbHNjcmVlbiB8fCBpb3MgfHwgIWkxOG4ucGFyc2VEYXRlO1xuICB9XG5cbiAgX2Zvcm1hdElTTyhkYXRlKSB7XG4gICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcGFkID0gKG51bSwgZm10ID0gJzAwJykgPT4gKGZtdCArIG51bSkuc3Vic3RyKChmbXQgKyBudW0pLmxlbmd0aCAtIGZtdC5sZW5ndGgpO1xuXG4gICAgbGV0IHllYXJTaWduID0gJyc7XG4gICAgbGV0IHllYXJGbXQgPSAnMDAwMCc7XG4gICAgbGV0IHllYXJBYnMgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKHllYXJBYnMgPCAwKSB7XG4gICAgICB5ZWFyQWJzID0gLXllYXJBYnM7XG4gICAgICB5ZWFyU2lnbiA9ICctJztcbiAgICAgIHllYXJGbXQgPSAnMDAwMDAwJztcbiAgICB9IGVsc2UgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA+PSAxMDAwMCkge1xuICAgICAgeWVhclNpZ24gPSAnKyc7XG4gICAgICB5ZWFyRm10ID0gJzAwMDAwMCc7XG4gICAgfVxuXG4gICAgY29uc3QgeWVhciA9IHllYXJTaWduICsgcGFkKHllYXJBYnMsIHllYXJGbXQpO1xuICAgIGNvbnN0IG1vbnRoID0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbnN0IGRheSA9IHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChvcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkICYmICF0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2luaXRPdmVybGF5KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0ZWREYXRlQ2hhbmdlZChzZWxlY3RlZERhdGUsIGZvcm1hdERhdGUpIHtcbiAgICBpZiAoc2VsZWN0ZWREYXRlID09PSB1bmRlZmluZWQgfHwgZm9ybWF0RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQpIHtcbiAgICAgIHRoaXMuX19kaXNwYXRjaENoYW5nZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBzZWxlY3RlZERhdGUgJiYgZm9ybWF0RGF0ZShEYXRlUGlja2VySGVscGVyLl9leHRyYWN0RGF0ZVBhcnRzKHNlbGVjdGVkRGF0ZSkpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZm9ybWF0SVNPKHNlbGVjdGVkRGF0ZSk7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKGlucHV0VmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLl9mb2N1c2VkRGF0ZSA9IHNlbGVjdGVkRGF0ZTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gc2VsZWN0ZWREYXRlID8gaW5wdXRWYWx1ZSA6ICcnO1xuICB9XG5cbiAgX2ZvY3VzZWREYXRlQ2hhbmdlZChmb2N1c2VkRGF0ZSwgZm9ybWF0RGF0ZSkge1xuICAgIGlmIChmb2N1c2VkRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGZvcm1hdERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQgPSB0cnVlO1xuICAgIGlmICghdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgJiYgIXRoaXMuX25vSW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWUgPSBmb2N1c2VkRGF0ZSA/IGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhmb2N1c2VkRGF0ZSkpIDogJyc7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGFzLXZhbHVlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaGFzLXZhbHVlJyk7XG4gICAgfVxuICB9XG5cblxuICBfX2dldE92ZXJsYXlUaGVtZSh0aGVtZSwgb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgaWYgKG92ZXJsYXlJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEYXRlQ2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gdGhpcy5fcGFyc2VEYXRlKHZhbHVlKTtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKHRoaXNbcHJvcGVydHldLCBkYXRlKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eV0gPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19kaXNwYXRjaENoYW5nZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuICAgIHRoaXMuX2hhbmRsZURhdGVDaGFuZ2UoJ19zZWxlY3RlZERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21pbkNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21pbkRhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21heENoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21heERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZnVsbHNjcmVlbikge1xuICAgICAgY29uc3QgaW5wdXRSZWN0ID0gdGhpcy5faW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBib3R0b21BbGlnbiA9IGlucHV0UmVjdC50b3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgY29uc3QgcmlnaHRBbGlnbiA9IGlucHV0UmVjdC5sZWZ0ICsgdGhpcy5jbGllbnRXaWR0aCAvIDIgPiB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG5cbiAgICAgIGlmIChyaWdodEFsaWduKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdyaWdodC1hbGlnbmVkJywgJycpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yaWdodCA9ICh2aWV3cG9ydFdpZHRoIC0gaW5wdXRSZWN0LnJpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLmxlZnQgPSBpbnB1dFJlY3QubGVmdCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3R0b21BbGlnbikge1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnYm90dG9tLWFsaWduZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUuYm90dG9tID0gKHZpZXdwb3J0SGVpZ2h0IC0gaW5wdXRSZWN0LnRvcCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdib3R0b20tYWxpZ25lZCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnRvcCA9IGlucHV0UmVjdC5ib3R0b20gKyAncHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnZGlyJyxcbiAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5faW5wdXRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKVxuICAgICk7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9mdWxsc2NyZWVuQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfb25PdmVybGF5T3BlbmVkKCkge1xuICAgIHRoaXMuX29wZW5lZFdpdGhGb2N1c1JpbmcgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXMtcmluZycpIHx8ICh0aGlzLmZvY3VzRWxlbWVudCAmJiB0aGlzLmZvY3VzRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSk7XG5cbiAgICB2YXIgcGFyc2VkSW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fcGFyc2VEYXRlKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcblxuICAgIHZhciBpbml0aWFsUG9zaXRpb24gPSB0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uIHx8XG4gICAgICBwYXJzZWRJbml0aWFsUG9zaXRpb24gfHwgbmV3IERhdGUoKTtcblxuICAgIGlmIChwYXJzZWRJbml0aWFsUG9zaXRpb24gfHxcbiAgICAgIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGluaXRpYWxQb3NpdGlvbiwgdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uID1cbiAgICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZ2V0Q2xvc2VzdERhdGUoaW5pdGlhbFBvc2l0aW9uLCBbdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZV0pO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlDb250ZW50LnNjcm9sbFRvRGF0ZSh0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSB8fCB0aGlzLl9vdmVybGF5Q29udGVudC5pbml0aWFsUG9zaXRpb24pO1xuICAgIC8vIEhhdmUgYSBkZWZhdWx0IGZvY3VzZWQgZGF0ZVxuICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSA9IHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzZWREYXRlIHx8IHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbjtcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kT25TY3JvbGwsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl93ZWJraXRPdmVyZmxvd1Njcm9sbCkge1xuICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSB0aGlzLl9wcmV2ZW50V2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdUb3VjaCh0aGlzLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4pIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbm9JbnB1dCAmJiB0aGlzLmZvY3VzRWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQSBoYWNrIG5lZWRlZCBmb3IgaU9TIHRvIHByZXZlbnQgZHJvcGRvd24gZnJvbSBiZWluZyBjbGlwcGVkIGluIGFuXG4gIC8vIGFuY2VzdG9yIGNvbnRhaW5lciB3aXRoIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgX3ByZXZlbnRXZWJraXRPdmVyZmxvd1Njcm9sbGluZ1RvdWNoKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJ3RvdWNoJykge1xuICAgICAgICB2YXIgb2xkSW5saW5lVmFsdWUgPSBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nO1xuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gJ2F1dG8nO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBvbGRJbmxpbmVWYWx1ZTogb2xkSW5saW5lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX29uT3ZlcmxheUNsb3NlZCgpIHtcbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IHRydWU7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRPblNjcm9sbCwgdHJ1ZSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kVXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24pO1xuXG4gICAgaWYgKHRoaXMuX3RvdWNoUHJldmVudGVkKSB7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZC5mb3JFYWNoKHByZXZlbnRlZCA9PlxuICAgICAgICBwcmV2ZW50ZWQuZWxlbWVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IHByZXZlbnRlZC5vbGRJbmxpbmVWYWx1ZSk7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZCA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICAvLyBTZWxlY3QgdGhlIHBhcnNlZCBpbnB1dCBvciBmb2N1c2VkIGRhdGVcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgaWYgKHRoaXMuaTE4bi5wYXJzZURhdGUpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5faW5wdXRWYWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSB0aGlzLmkxOG4ucGFyc2VEYXRlKGlucHV0VmFsdWUpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGAke2RhdGVPYmplY3QueWVhcn0tJHtkYXRlT2JqZWN0Lm1vbnRoICsgMX0tJHtkYXRlT2JqZWN0LmRheX1gKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHBhcnNlZERhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvY3VzZWREYXRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9mb2N1c2VkRGF0ZTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9uYXRpdmVJbnB1dCAmJiB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgdGhpcy5fbmF0aXZlSW5wdXQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSB0byB2YWxpZGF0ZS4gT3B0aW9uYWwsIGRlZmF1bHRzIHRvIHVzZXIncyBpbnB1dCB2YWx1ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHlcbiAgICovXG4gIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgLy8gcmVzZXQgaW52YWxpZCBzdGF0ZSBvbiB0aGUgdW5kZXJseWluZyB0ZXh0IGZpZWxkXG4gICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLl9pbnB1dFZhbHVlO1xuICAgIHJldHVybiAhKHRoaXMuaW52YWxpZCA9ICF0aGlzLmNoZWNrVmFsaWRpdHkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgc2F0aXNmaWVzIGFsbCBjb25zdHJhaW50cyAoaWYgYW55KVxuICAgKlxuICAgKiBPdmVycmlkZSB0aGUgYGNoZWNrVmFsaWRpdHlgIG1ldGhvZCBmb3IgY3VzdG9tIHZhbGlkYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVmFsdWUgdG8gdmFsaWRhdGUuIE9wdGlvbmFsLCBkZWZhdWx0cyB0byB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWRcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkodmFsdWUpIHtcbiAgICB2YXIgaW5wdXRWYWxpZCA9ICF2YWx1ZSB8fFxuICAgICAgKHRoaXMuX3NlbGVjdGVkRGF0ZSAmJiB2YWx1ZSA9PT0gdGhpcy5pMThuLmZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyh0aGlzLl9zZWxlY3RlZERhdGUpKSk7XG4gICAgdmFyIG1pbk1heFZhbGlkID0gIXRoaXMuX3NlbGVjdGVkRGF0ZSB8fFxuICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUFsbG93ZWQodGhpcy5fc2VsZWN0ZWREYXRlLCB0aGlzLl9taW5EYXRlLCB0aGlzLl9tYXhEYXRlKTtcblxuICAgIHZhciBpbnB1dFZhbGlkaXR5ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgLy8gdmFhZGluIG5hdGl2ZSBpbnB1dCBlbGVtZW50cyBoYXZlIHRoZSBjaGVja1ZhbGlkaXR5IG1ldGhvZFxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgLy8gaXJvbi1mb3JtLWVsZW1lbnRzIGhhdmUgdGhlIHZhbGlkYXRlIEFQSVxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXRWYWxpZCAmJiBtaW5NYXhWYWxpZCAmJiBpbnB1dFZhbGlkaXR5O1xuICB9XG5cbiAgX29uU2Nyb2xsKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdpbmRvdyB8fCAhdGhpcy5fb3ZlcmxheUNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLl91cGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1cygpIHtcbiAgICBpZiAodGhpcy5fbm9JbnB1dCkge1xuICAgICAgdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0FuZFNlbGVjdCgpIHtcbiAgICB0aGlzLl9mb2N1cygpO1xuICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuX2lucHV0VmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIF9zZXRTZWxlY3Rpb25SYW5nZShhLCBiKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUlucHV0ICYmIHRoaXMuX25hdGl2ZUlucHV0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShhLCBiKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBOYXZpZ2F0aW9uXG4gICAqL1xuICBfZXZlbnRLZXkoZSkge1xuICAgIHZhciBrZXlzID0gWydkb3duJywgJ3VwJywgJ2VudGVyJywgJ2VzYycsICd0YWInXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGsgPSBrZXlzW2ldO1xuICAgICAgaWYgKElyb25BMTF5S2V5c0JlaGF2aW9yLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhlLCBrKSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaXNWYWxpZERhdGUoZCkge1xuICAgIHJldHVybiBkICYmICFpc05hTihkLmdldFRpbWUoKSk7XG4gIH1cblxuICBfb25LZXlkb3duKGUpIHtcbiAgICBpZiAodGhpcy5fbm9JbnB1dCkge1xuICAgICAgLy8gVGhlIGlucHV0IGVsZW1lbnQgY2Fubm90IGJlIHJlYWRvbmx5IGFzIGl0IHdvdWxkIGNvbmZsaWN0IHdpdGhcbiAgICAgIC8vIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuIEJvdGggYXJlIG5vdCBhbGxvd2VkIG9uIGFuIGlucHV0IGVsZW1lbnQuXG4gICAgICAvLyBUaGVyZWZvcmUgd2UgcHJldmVudCBkZWZhdWx0IG9uIG1vc3Qga2V5ZG93biBldmVudHMuXG4gICAgICB2YXIgYWxsb3dlZEtleXMgPSBbXG4gICAgICAgIDkgLy8gdGFiXG4gICAgICBdO1xuICAgICAgaWYgKGFsbG93ZWRLZXlzLmluZGV4T2YoZS5rZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fZXZlbnRLZXkoZSkpIHtcbiAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgY2FzZSAndXAnOlxuICAgICAgICAvLyBwcmV2ZW50IHNjcm9sbGluZyB0aGUgcGFnZSB3aXRoIGFycm93c1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXMoKTtcbiAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5fb25LZXlkb3duKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzT3ZlcmxheU9uT3BlbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGVyJzoge1xuICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gdGhpcy5pMThuLnBhcnNlRGF0ZSh0aGlzLl9pbnB1dFZhbHVlKTtcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgICB0aGlzLl9wYXJzZURhdGUoZGF0ZU9iamVjdC55ZWFyICsgJy0nICsgKGRhdGVPYmplY3QubW9udGggKyAxKSArICctJyArIGRhdGVPYmplY3QuZGF5KTtcblxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzZWREYXRlICYmIHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNlZERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgIHRoaXMuX2ZvY3VzZWREYXRlID0gdGhpcy5fc2VsZWN0ZWREYXRlO1xuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhYic6XG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0aW9uIHJhbmdlIChyZW1haW5zIHZpc2libGUgb24gSUUpXG4gICAgICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XG4gICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzQ2FuY2VsKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5yZXZlYWxEYXRlKHRoaXMuX2ZvY3VzZWREYXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBfdmFsaWRhdGVJbnB1dChkYXRlLCBtaW4sIG1heCkge1xuICAgIGlmIChkYXRlICYmIChtaW4gfHwgbWF4KSkge1xuICAgICAgdGhpcy5pbnZhbGlkID0gIURhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KTtcbiAgICB9XG4gIH1cblxuICBfb25Vc2VySW5wdXQoZSkge1xuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgdGhpcy5fdXNlcklucHV0VmFsdWVDaGFuZ2VkKCk7XG4gIH1cblxuICBfdXNlcklucHV0VmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMuX2lucHV0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSB0aGlzLmkxOG4ucGFyc2VEYXRlICYmIHRoaXMuaTE4bi5wYXJzZURhdGUodGhpcy5faW5wdXRWYWx1ZSk7XG4gICAgICBjb25zdCBwYXJzZWREYXRlID0gZGF0ZU9iamVjdCAmJlxuICAgICAgICB0aGlzLl9wYXJzZURhdGUoYCR7ZGF0ZU9iamVjdC55ZWFyfS0ke2RhdGVPYmplY3QubW9udGggKyAxfS0ke2RhdGVPYmplY3QuZGF5fWApO1xuXG4gICAgICBpZiAodGhpcy5faXNWYWxpZERhdGUocGFyc2VkRGF0ZSkpIHtcbiAgICAgICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICBpZiAoIURhdGVQaWNrZXJIZWxwZXIuX2RhdGVFcXVhbHMocGFyc2VkRGF0ZSwgdGhpcy5fZm9jdXNlZERhdGUpKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZERhdGUgPSBwYXJzZWREYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Fubm91bmNlRm9jdXNlZERhdGUoX2ZvY3VzZWREYXRlLCBvcGVuZWQsIF9pZ25vcmVBbm5vdW5jZSkge1xuICAgIGlmIChvcGVuZWQgJiYgIV9pZ25vcmVBbm5vdW5jZSkge1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuYW5ub3VuY2VGb2N1c2VkRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBfb3ZlcmxheUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5vdmVybGF5LmNvbnRlbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXktY29udGVudCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgY29tbWl0cyBhIHZhbHVlIGNoYW5nZS5cbiAgICpcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1tZWRpYS1xdWVyeS9pcm9uLW1lZGlhLXF1ZXJ5LmpzJztcbmltcG9ydCB7IElyb25BMTF5S2V5c0JlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHsgSXJvbkExMXlBbm5vdW5jZXIgfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1idXR0b24vc3JjL3ZhYWRpbi1idXR0b24uanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BlcnR5TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWUtcHJvcGVydHktbWl4aW4uanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1tb250aC1jYWxlbmRhci5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLmpzJztcbmltcG9ydCB7IERhdGVQaWNrZXJIZWxwZXIgfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1oZWxwZXIuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXMuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyLCBzZXRUb3VjaEFjdGlvbiB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlLmpzJztcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG4vKipcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERhdGVQaWNrZXJPdmVybGF5Q29udGVudEVsZW1lbnQgZXh0ZW5kc1xuICBUaGVtYWJsZU1peGluKFxuICAgIFRoZW1lUHJvcGVydHlNaXhpbihcbiAgICAgIEdlc3R1cmVFdmVudExpc3RlbmVycyhQb2x5bWVyRWxlbWVudCkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXktaGVhZGVyXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSkpIFtwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTpub3QoW3Nob3djbGVhcl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdW2Rlc2t0b3BdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbeWVhcnMtdmlzaWJsZV0pKSBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdLFxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJtb250aHNcIl0ge1xuICAgICAgICAtLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWhlaWdodDogMjcwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAjc2Nyb2xsZXJzW2Rlc2t0b3BdIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC8qIENlbnRlciB0aGUgeWVhciBzY3JvbGxlciBwb3NpdGlvbi4gKi9cbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLW9mZnNldDogNTAlO1xuICAgICAgfVxuXG4gICAgICAjc2Nyb2xsZXJzW2Rlc2t0b3BdIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGJvcmRlci13aWR0aDogNnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmFuaW1hdGUpIFtwYXJ0PVwibW9udGhzXCJdLFxuICAgICAgOmhvc3QoLmFuaW1hdGUpIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidG9vbGJhclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cIm92ZXJsYXktaGVhZGVyXCJdOm5vdChbZGVza3RvcF0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInllYXJzLXRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG5cbiAgICAgICNhbm5vdW5jZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICAgICAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImFubm91bmNlclwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuICAgICAgW1tpMThuLmNhbGVuZGFyXV1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgcGFydD1cIm92ZXJsYXktaGVhZGVyXCIgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiBkZXNrdG9wXFwkPVwiW1tfZGVza3RvcE1vZGVdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBwYXJ0PVwibGFiZWxcIj5bW19mb3JtYXREaXNwbGF5ZWQoc2VsZWN0ZWREYXRlLCBpMThuLmZvcm1hdERhdGUsIGxhYmVsKV1dPC9kaXY+XG4gICAgICA8ZGl2IHBhcnQ9XCJjbGVhci1idXR0b25cIiBvbi10YXA9XCJfY2xlYXJcIiBzaG93Y2xlYXJcXCQ9XCJbW19zaG93Q2xlYXIoc2VsZWN0ZWREYXRlKV1dXCI+PC9kaXY+XG4gICAgICA8ZGl2IHBhcnQ9XCJ0b2dnbGUtYnV0dG9uXCIgb24tdGFwPVwiX2NhbmNlbFwiPjwvZGl2PlxuXG4gICAgICA8ZGl2IHBhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCIgZGVza3RvcFxcJD1cIltbX2Rlc2t0b3BNb2RlXV1cIiBvbi10YXA9XCJfdG9nZ2xlWWVhclNjcm9sbGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIFtbX3llYXJBZnRlclhNb250aHMoX3Zpc2libGVNb250aEluZGV4KV1dXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxlcnNcIiBkZXNrdG9wXFwkPVwiW1tfZGVza3RvcE1vZGVdXVwiIG9uLXRyYWNrPVwiX3RyYWNrXCI+XG4gICAgICA8dmFhZGluLWluZmluaXRlLXNjcm9sbGVyIGlkPVwibW9udGhTY3JvbGxlclwiIG9uLWN1c3RvbS1zY3JvbGw9XCJfb25Nb250aFNjcm9sbFwiIG9uLXRvdWNoc3RhcnQ9XCJfb25Nb250aFNjcm9sbFRvdWNoU3RhcnRcIiBidWZmZXItc2l6ZT1cIjNcIiBhY3RpdmU9XCJbW2luaXRpYWxQb3NpdGlvbl1dXCIgcGFydD1cIm1vbnRoc1wiPlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPHZhYWRpbi1tb250aC1jYWxlbmRhciBpMThuPVwiW1tpMThuXV1cIiBtb250aD1cIltbX2RhdGVBZnRlclhNb250aHMoaW5kZXgpXV1cIiBzZWxlY3RlZC1kYXRlPVwie3tzZWxlY3RlZERhdGV9fVwiIGZvY3VzZWQtZGF0ZT1cIltbZm9jdXNlZERhdGVdXVwiIGlnbm9yZS10YXBzPVwiW1tfaWdub3JlVGFwc11dXCIgc2hvdy13ZWVrLW51bWJlcnM9XCJbW3Nob3dXZWVrTnVtYmVyc11dXCIgbWluLWRhdGU9XCJbW21pbkRhdGVdXVwiIG1heC1kYXRlPVwiW1ttYXhEYXRlXV1cIiBmb2N1c2VkXFwkPVwiW1tfZm9jdXNlZF1dXCIgcGFydD1cIm1vbnRoXCIgdGhlbWVcXCQ9XCJbW3RoZW1lXV1cIj5cbiAgICAgICAgICA8L3ZhYWRpbi1tb250aC1jYWxlbmRhcj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWluZmluaXRlLXNjcm9sbGVyPlxuICAgICAgPHZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlciBpZD1cInllYXJTY3JvbGxlclwiIG9uLXRhcD1cIl9vblllYXJUYXBcIiBvbi1jdXN0b20tc2Nyb2xsPVwiX29uWWVhclNjcm9sbFwiIG9uLXRvdWNoc3RhcnQ9XCJfb25ZZWFyU2Nyb2xsVG91Y2hTdGFydFwiIGJ1ZmZlci1zaXplPVwiMTJcIiBhY3RpdmU9XCJbW2luaXRpYWxQb3NpdGlvbl1dXCIgcGFydD1cInllYXJzXCI+XG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2IHBhcnQ9XCJ5ZWFyLW51bWJlclwiIHJvbGU9XCJidXR0b25cIiBjdXJyZW50XFwkPVwiW1tfaXNDdXJyZW50WWVhcihpbmRleCldXVwiIHNlbGVjdGVkXFwkPVwiW1tfaXNTZWxlY3RlZFllYXIoaW5kZXgsIHNlbGVjdGVkRGF0ZSldXVwiPlxuICAgICAgICAgICAgW1tfeWVhckFmdGVyWFllYXJzKGluZGV4KV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBwYXJ0PVwieWVhci1zZXBhcmF0b3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWluZmluaXRlLXNjcm9sbGVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBvbi10b3VjaGVuZD1cIl9wcmV2ZW50RGVmYXVsdFwiIHJvbGU9XCJ0b29sYmFyXCIgcGFydD1cInRvb2xiYXJcIj5cbiAgICAgIDx2YWFkaW4tYnV0dG9uIGlkPVwidG9kYXlCdXR0b25cIiBwYXJ0PVwidG9kYXktYnV0dG9uXCIgZGlzYWJsZWQ9XCJbWyFfaXNUb2RheUFsbG93ZWQobWluRGF0ZSwgbWF4RGF0ZSldXVwiIG9uLXRhcD1cIl9vblRvZGF5VGFwXCI+XG4gICAgICAgIFtbaTE4bi50b2RheV1dXG4gICAgICA8L3ZhYWRpbi1idXR0b24+XG4gICAgICA8dmFhZGluLWJ1dHRvbiBpZD1cImNhbmNlbEJ1dHRvblwiIHBhcnQ9XCJjYW5jZWwtYnV0dG9uXCIgb24tdGFwPVwiX2NhbmNlbFwiPlxuICAgICAgICBbW2kxOG4uY2FuY2VsXV1cbiAgICAgIDwvdmFhZGluLWJ1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxpcm9uLW1lZGlhLXF1ZXJ5IHF1ZXJ5PVwiKG1pbi13aWR0aDogMzc1cHgpXCIgcXVlcnktbWF0Y2hlcz1cInt7X2Rlc2t0b3BNb2RlfX1cIj48L2lyb24tbWVkaWEtcXVlcnk+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSB2YWx1ZSBmb3IgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIERhdGUgdmFsdWUgd2hpY2ggaXMgZm9jdXNlZCB1c2luZyBrZXlib2FyZC5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19mb2N1c2VkRGF0ZUNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfZm9jdXNlZE1vbnRoRGF0ZTogTnVtYmVyLFxuXG4gICAgICAvKipcbiAgICAgICAqIERhdGUgd2hpY2ggc2hvdWxkIGJlIHZpc2libGUgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgaW5pdGlhbFBvc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIG9ic2VydmVyOiAnX2luaXRpYWxQb3NpdGlvbkNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfb3JpZ2luRGF0ZToge1xuICAgICAgICB2YWx1ZTogbmV3IERhdGUoKVxuICAgICAgfSxcblxuICAgICAgX3Zpc2libGVNb250aEluZGV4OiBOdW1iZXIsXG5cbiAgICAgIF9kZXNrdG9wTW9kZTogQm9vbGVhbixcblxuICAgICAgX3RyYW5zbGF0ZVg6IHtcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdHJhbnNsYXRlWENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfeWVhclNjcm9sbGVyV2lkdGg6IHtcbiAgICAgICAgdmFsdWU6IDUwXG4gICAgICB9LFxuXG4gICAgICBpMThuOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgc2hvd1dlZWtOdW1iZXJzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9pZ25vcmVUYXBzOiBCb29sZWFuLFxuXG4gICAgICBfbm90VGFwcGluZzogQm9vbGVhbixcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGVhcmxpZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWluRGF0ZTogRGF0ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGF0ZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBsYXRlciBkYXRlcyB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAgICovXG4gICAgICBtYXhEYXRlOiBEYXRlLFxuXG4gICAgICBfZm9jdXNlZDogQm9vbGVhbixcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnB1dCBsYWJlbFxuICAgICAgICovXG4gICAgICBsYWJlbDogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duLmJpbmQodGhpcykpO1xuICAgIGFkZExpc3RlbmVyKHRoaXMsICd0YXAnLCB0aGlzLl9zdG9wUHJvcGFnYXRpb24pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbk92ZXJsYXlGb2N1cy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbk92ZXJsYXlCbHVyLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHNjcm9sbGVyIHJlYWNoZXMgdGhlIHRhcmdldCBzY3JvbGxpbmcgcG9zaXRpb24uXG4gICAqIEBldmVudCBzY3JvbGwtYW5pbWF0aW9uLWZpbmlzaGVkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZXRhaWwucG9zaXRpb24gbmV3IHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZXRhaWwub2xkUG9zaXRpb24gb2xkIHBvc2l0aW9uXG4gICAqL1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2xvc2VZZWFyU2Nyb2xsZXIoKTtcbiAgICB0aGlzLl90b2dnbGVBbmltYXRlQ2xhc3ModHJ1ZSk7XG4gICAgc2V0VG91Y2hBY3Rpb24odGhpcy4kLnNjcm9sbGVycywgJ3Bhbi15Jyk7XG4gICAgSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuICB9XG5cbiAgYW5ub3VuY2VGb2N1c2VkRGF0ZSgpIHtcbiAgICB2YXIgZm9jdXNlZERhdGUgPSB0aGlzLl9jdXJyZW50bHlGb2N1c2VkRGF0ZSgpO1xuICAgIHZhciBhbm5vdW5jZSA9IFtdO1xuICAgIGlmIChEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKGZvY3VzZWREYXRlLCBuZXcgRGF0ZSgpKSkge1xuICAgICAgYW5ub3VuY2UucHVzaCh0aGlzLmkxOG4udG9kYXkpO1xuICAgIH1cbiAgICBhbm5vdW5jZSA9IGFubm91bmNlLmNvbmNhdChbXG4gICAgICB0aGlzLmkxOG4ud2Vla2RheXNbZm9jdXNlZERhdGUuZ2V0RGF5KCldLFxuICAgICAgZm9jdXNlZERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgdGhpcy5pMThuLm1vbnRoTmFtZXNbZm9jdXNlZERhdGUuZ2V0TW9udGgoKV0sXG4gICAgICBmb2N1c2VkRGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgXSk7XG4gICAgaWYgKHRoaXMuc2hvd1dlZWtOdW1iZXJzICYmIHRoaXMuaTE4bi5maXJzdERheU9mV2VlayA9PT0gMSkge1xuICAgICAgYW5ub3VuY2UucHVzaCh0aGlzLmkxOG4ud2Vlayk7XG4gICAgICBhbm5vdW5jZS5wdXNoKERhdGVQaWNrZXJIZWxwZXIuX2dldElTT1dlZWtOdW1iZXIoZm9jdXNlZERhdGUpKTtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaXJvbi1hbm5vdW5jZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0ZXh0OiBhbm5vdW5jZS5qb2luKCcgJylcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIGNhbmNlbCBidXR0b25cbiAgICovXG4gIGZvY3VzQ2FuY2VsKCkge1xuICAgIHRoaXMuJC5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBsaXN0IHRvIHRoZSBnaXZlbiBEYXRlLlxuICAgKi9cbiAgc2Nyb2xsVG9EYXRlKGRhdGUsIGFuaW1hdGUpIHtcbiAgICB0aGlzLl9zY3JvbGxUb1Bvc2l0aW9uKHRoaXMuX2RpZmZlcmVuY2VJbk1vbnRocyhkYXRlLCB0aGlzLl9vcmlnaW5EYXRlKSwgYW5pbWF0ZSk7XG4gIH1cblxuICBfZm9jdXNlZERhdGVDaGFuZ2VkKGZvY3VzZWREYXRlKSB7XG4gICAgdGhpcy5yZXZlYWxEYXRlKGZvY3VzZWREYXRlKTtcbiAgfVxuXG4gIF9pc0N1cnJlbnRZZWFyKHllYXJzRnJvbU5vdykge1xuICAgIHJldHVybiB5ZWFyc0Zyb21Ob3cgPT09IDA7XG4gIH1cblxuICBfaXNTZWxlY3RlZFllYXIoeWVhcnNGcm9tTm93LCBzZWxlY3RlZERhdGUpIHtcbiAgICBpZiAoc2VsZWN0ZWREYXRlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuX29yaWdpbkRhdGUuZ2V0RnVsbFllYXIoKSArIHllYXJzRnJvbU5vdztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgbW9udGggYW5kIHllYXIgc2Nyb2xsZXJzIGVub3VnaCB0byByZXZlYWwgdGhlIGdpdmVuIGRhdGUuXG4gICAqL1xuICByZXZlYWxEYXRlKGRhdGUpIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdmFyIGRpZmYgPSB0aGlzLl9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZSwgdGhpcy5fb3JpZ2luRGF0ZSk7XG4gICAgICB2YXIgc2Nyb2xsZWRBYm92ZVZpZXdwb3J0ID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPiBkaWZmO1xuXG4gICAgICB2YXIgdmlzaWJsZUl0ZW1zID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC8gdGhpcy4kLm1vbnRoU2Nyb2xsZXIuaXRlbUhlaWdodDtcbiAgICAgIHZhciBzY3JvbGxlZEJlbG93Vmlld3BvcnQgPSB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiArIHZpc2libGVJdGVtcyAtIDEgPCBkaWZmO1xuXG4gICAgICBpZiAoc2Nyb2xsZWRBYm92ZVZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvUG9zaXRpb24oZGlmZiwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbGVkQmVsb3dWaWV3cG9ydCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb1Bvc2l0aW9uKGRpZmYgLSB2aXNpYmxlSXRlbXMgKyAxLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25PdmVybGF5Rm9jdXMoKSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gIH1cblxuICBfb25PdmVybGF5Qmx1cigpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBfaW5pdGlhbFBvc2l0aW9uQ2hhbmdlZChpbml0aWFsUG9zaXRpb24pIHtcbiAgICB0aGlzLnNjcm9sbFRvRGF0ZShpbml0aWFsUG9zaXRpb24pO1xuICB9XG5cbiAgX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5fdmlzaWJsZU1vbnRoSW5kZXggPSBNYXRoLmZsb29yKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uKTtcbiAgICB0aGlzLiQueWVhclNjcm9sbGVyLnBvc2l0aW9uID0gKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uICsgdGhpcy5fb3JpZ2luRGF0ZS5nZXRNb250aCgpKSAvIDEyO1xuICB9XG5cbiAgX3JlcG9zaXRpb25Nb250aFNjcm9sbGVyKCkge1xuICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID0gdGhpcy4kLnllYXJTY3JvbGxlci5wb3NpdGlvbiAqIDEyIC0gdGhpcy5fb3JpZ2luRGF0ZS5nZXRNb250aCgpO1xuICAgIHRoaXMuX3Zpc2libGVNb250aEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbik7XG4gIH1cblxuICBfb25Nb250aFNjcm9sbCgpIHtcbiAgICB0aGlzLl9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCk7XG4gICAgdGhpcy5fZG9JZ25vcmVUYXBzKCk7XG4gIH1cblxuICBfb25ZZWFyU2Nyb2xsKCkge1xuICAgIHRoaXMuX3JlcG9zaXRpb25Nb250aFNjcm9sbGVyKCk7XG4gICAgdGhpcy5fZG9JZ25vcmVUYXBzKCk7XG4gIH1cblxuICBfb25ZZWFyU2Nyb2xsVG91Y2hTdGFydCgpIHtcbiAgICB0aGlzLl9ub3RUYXBwaW5nID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9ub3RUYXBwaW5nID0gdHJ1ZSwgMzAwKTtcblxuICAgIHRoaXMuX3JlcG9zaXRpb25Nb250aFNjcm9sbGVyKCk7XG4gIH1cblxuICBfb25Nb250aFNjcm9sbFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlcigpO1xuICB9XG5cbiAgX2RvSWdub3JlVGFwcygpIHtcbiAgICB0aGlzLl9pZ25vcmVUYXBzID0gdHJ1ZTtcbiAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UodGhpcy5fZGVib3VuY2VyLFxuICAgICAgdGltZU91dC5hZnRlcigzMDApLCAoKSA9PiB0aGlzLl9pZ25vcmVUYXBzID0gZmFsc2UpO1xuICB9XG5cbiAgX2Zvcm1hdERpc3BsYXllZChkYXRlLCBmb3JtYXREYXRlLCBsYWJlbCkge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZShEYXRlUGlja2VySGVscGVyLl9leHRyYWN0RGF0ZVBhcnRzKGRhdGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIF9vblRvZGF5VGFwKCkge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gLSB0aGlzLl9kaWZmZXJlbmNlSW5Nb250aHModG9kYXksIHRoaXMuX29yaWdpbkRhdGUpKSA8IDAuMDAxKSB7XG4gICAgICAvLyBTZWxlY3QgdG9kYXkgb25seSBpZiB0aGUgbW9udGggc2Nyb2xsZXIgaXMgcG9zaXRpb25lZCBhcHByb3hpbWF0ZWx5XG4gICAgICAvLyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IG1vbnRoXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRvZGF5O1xuICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2Nyb2xsVG9DdXJyZW50TW9udGgoKTtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsVG9DdXJyZW50TW9udGgoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZERhdGUpIHtcbiAgICAgIHRoaXMuZm9jdXNlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKG5ldyBEYXRlKCksIHRydWUpO1xuICB9XG5cbiAgX3Nob3dDbGVhcihzZWxlY3RlZERhdGUpIHtcbiAgICByZXR1cm4gISFzZWxlY3RlZERhdGU7XG4gIH1cblxuICBfb25ZZWFyVGFwKGUpIHtcbiAgICBpZiAoIXRoaXMuX2lnbm9yZVRhcHMgJiYgIXRoaXMuX25vdFRhcHBpbmcpIHtcbiAgICAgIHZhciBzY3JvbGxEZWx0YSA9IGUuZGV0YWlsLnkgLSAodGhpcy4kLnllYXJTY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLiQueWVhclNjcm9sbGVyLmNsaWVudEhlaWdodCAvIDIpO1xuICAgICAgdmFyIHllYXJEZWx0YSA9IHNjcm9sbERlbHRhIC8gdGhpcy4kLnllYXJTY3JvbGxlci5pdGVtSGVpZ2h0O1xuICAgICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiArIHllYXJEZWx0YSAqIDEyLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsVG9Qb3NpdGlvbih0YXJnZXRQb3NpdGlvbiwgYW5pbWF0ZSkge1xuICAgIGlmICh0aGlzLl90YXJnZXRQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcbiAgICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG5cbiAgICAvLyBodHRwOi8vZ2l6bWEuY29tL2Vhc2luZy9cbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAodCwgYiwgYywgZCkgPT4ge1xuICAgICAgdCAvPSBkIC8gMjtcbiAgICAgIGlmICh0IDwgMSkge1xuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgICB9XG4gICAgICB0LS07XG4gICAgICByZXR1cm4gLWMgLyAyICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgZHVyYXRpb24gPSBhbmltYXRlID8gMzAwIDogMDtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBpbml0aWFsUG9zaXRpb24gPSB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbjtcblxuICAgIHZhciBzbW9vdGhTY3JvbGwgPSB0aW1lc3RhbXAgPT4ge1xuICAgICAgc3RhcnQgPSBzdGFydCB8fCB0aW1lc3RhbXA7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydDtcblxuICAgICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBlYXNpbmdGdW5jdGlvbihjdXJyZW50VGltZSwgaW5pdGlhbFBvc2l0aW9uLCB0aGlzLl90YXJnZXRQb3NpdGlvbiAtIGluaXRpYWxQb3NpdGlvbiwgZHVyYXRpb24pO1xuICAgICAgICB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA9IGN1cnJlbnRQb3M7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbC1hbmltYXRpb24tZmluaXNoZWQnLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLl90YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIG9sZFBvc2l0aW9uOiBpbml0aWFsUG9zaXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA9IHRoaXMuX3RhcmdldFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCh0aGlzLl9yZXBvc2l0aW9uWWVhclNjcm9sbGVyLmJpbmQodGhpcyksIDEpO1xuICAgIH07XG5cbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uLlxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoU2Nyb2xsKTtcbiAgfVxuXG4gIF9saW1pdCh2YWx1ZSwgcmFuZ2UpIHtcbiAgICByZXR1cm4gTWF0aC5taW4ocmFuZ2UubWF4LCBNYXRoLm1heChyYW5nZS5taW4sIHZhbHVlKSk7XG4gIH1cblxuICBfaGFuZGxlVHJhY2soZSkge1xuICAgIC8vIENoZWNrIGlmIGhvcml6b250YWwgbW92ZW1lbnQgdGhyZXNob2xkIChkeCkgbm90IGV4Y2VlZGVkIG9yXG4gICAgLy8gc2Nyb2xsaW5nIGZhc3QgdmVydGljYWxseSAoZGR5KS5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZXRhaWwuZHgpIDwgMTAgfHwgTWF0aC5hYnMoZS5kZXRhaWwuZGR5KSA+IDEwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgd2UncmUgZmxpbmdpbmcgcXVpY2tseSAtPiBzdGFydCBhbmltYXRpbmcgYWxyZWFkeS5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZXRhaWwuZGR4KSA+IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoIC8gMykge1xuICAgICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBuZXdUcmFuc2xhdGVYID0gdGhpcy5fdHJhbnNsYXRlWCArIGUuZGV0YWlsLmRkeDtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gdGhpcy5fbGltaXQobmV3VHJhbnNsYXRlWCwge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgX3RyYWNrKGUpIHtcbiAgICBpZiAodGhpcy5fZGVza3RvcE1vZGUpIHtcbiAgICAgIC8vIE5vIG5lZWQgdG8gdHJhY2sgZm9yIHN3aXBlIGdlc3R1cmVzIG9uIGRlc2t0b3AuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChlLmRldGFpbC5zdGF0ZSkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICB0aGlzLl90b2dnbGVBbmltYXRlQ2xhc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJhY2snOlxuICAgICAgICB0aGlzLl9oYW5kbGVUcmFjayhlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHRoaXMuX3RvZ2dsZUFuaW1hdGVDbGFzcyh0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zbGF0ZVggPj0gdGhpcy5feWVhclNjcm9sbGVyV2lkdGggLyAyKSB7XG4gICAgICAgICAgdGhpcy5fY2xvc2VZZWFyU2Nyb2xsZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vcGVuWWVhclNjcm9sbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZUFuaW1hdGVDbGFzcyhlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZVllYXJTY3JvbGxlcigpIHtcbiAgICB0aGlzLl9pc1llYXJTY3JvbGxlclZpc2libGUoKSA/IHRoaXMuX2Nsb3NlWWVhclNjcm9sbGVyKCkgOiB0aGlzLl9vcGVuWWVhclNjcm9sbGVyKCk7XG4gIH1cblxuICBfb3BlblllYXJTY3JvbGxlcigpIHtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gMDtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgneWVhcnMtdmlzaWJsZScsICcnKTtcbiAgfVxuXG4gIF9jbG9zZVllYXJTY3JvbGxlcigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgneWVhcnMtdmlzaWJsZScpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aDtcbiAgfVxuXG4gIF9pc1llYXJTY3JvbGxlclZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZVggPCB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCAvIDI7XG4gIH1cblxuICBfdHJhbnNsYXRlWENoYW5nZWQoeCkge1xuICAgIGlmICghdGhpcy5fZGVza3RvcE1vZGUpIHtcbiAgICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoeCAtIHRoaXMuX3llYXJTY3JvbGxlcldpZHRoKSArICdweCknO1xuICAgICAgdGhpcy4kLnllYXJTY3JvbGxlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgeCArICdweCknO1xuICAgIH1cbiAgfVxuXG4gIF95ZWFyQWZ0ZXJYWWVhcnMoaW5kZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUodGhpcy5fb3JpZ2luRGF0ZSk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKHBhcnNlSW50KGluZGV4KSArIHRoaXMuX29yaWdpbkRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgcmV0dXJuIHJlc3VsdC5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgX3llYXJBZnRlclhNb250aHMobW9udGhzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZnRlclhNb250aHMobW9udGhzKS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgX2RhdGVBZnRlclhNb250aHMobW9udGhzKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKHRoaXMuX29yaWdpbkRhdGUpO1xuICAgIHJlc3VsdC5zZXREYXRlKDEpO1xuICAgIHJlc3VsdC5zZXRNb250aChwYXJzZUludChtb250aHMpICsgdGhpcy5fb3JpZ2luRGF0ZS5nZXRNb250aCgpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2RpZmZlcmVuY2VJbk1vbnRocyhkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgbW9udGhzID0gKGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpKSAqIDEyO1xuICAgIHJldHVybiBtb250aHMgLSBkYXRlMi5nZXRNb250aCgpICsgZGF0ZTEuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIF9kaWZmZXJlbmNlSW5ZZWFycyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKGRhdGUxLCBkYXRlMikgLyAxMjtcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9ICcnO1xuICB9XG5cbiAgX2Nsb3NlKCkge1xuICAgIGNvbnN0IG92ZXJsYXlDb250ZW50ID0gdGhpcy5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG92ZXJsYXlDb250ZW50ID8gb3ZlcmxheUNvbnRlbnQuZ2V0Um9vdE5vZGUoKS5ob3N0IDogbnVsbDtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgfVxuXG4gIF9jYW5jZWwoKSB7XG4gICAgdGhpcy5mb2N1c2VkRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBOYXZpZ2F0aW9uXG4gICAqL1xuICBfZXZlbnRLZXkoZSkge1xuICAgIHZhciBrZXlzID0gWydkb3duJywgJ3VwJywgJ3JpZ2h0JywgJ2xlZnQnLCAnZW50ZXInLCAnc3BhY2UnLCAnaG9tZScsICdlbmQnLCAncGFnZXVwJywgJ3BhZ2Vkb3duJywgJ3RhYicsICdlc2MnXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGsgPSBrZXlzW2ldO1xuICAgICAgaWYgKElyb25BMTF5S2V5c0JlaGF2aW9yLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhlLCBrKSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25LZXlkb3duKGUpIHtcbiAgICB2YXIgZm9jdXMgPSB0aGlzLl9jdXJyZW50bHlGb2N1c2VkRGF0ZSgpO1xuXG4gICAgLy8gQ2Fubm90IHVzZSAodG9kYXkvY2FuY2VsKS5mb2N1c2VkIGZsYWcgYmVjYXVzZSB2YWFkaW4tdGV4dC1maWVsZCByZW1vdmVzIGl0XG4gICAgLy8gcHJldmlvdXNseSBpbiB0aGUga2V5ZG93biBldmVudC5cbiAgICBjb25zdCBpc1RvZGF5ID0gZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuJC50b2RheUJ1dHRvbikgPj0gMDtcbiAgICBjb25zdCBpc0NhbmNlbCA9IGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLiQuY2FuY2VsQnV0dG9uKSA+PSAwO1xuICAgIGNvbnN0IGlzU2Nyb2xsZXIgPSAhaXNUb2RheSAmJiAhaXNDYW5jZWw7XG5cbiAgICB2YXIgZXZlbnRLZXkgPSB0aGlzLl9ldmVudEtleShlKTtcbiAgICBpZiAoZXZlbnRLZXkgPT09ICd0YWInKSB7XG4gICAgICAvLyBXZSBoYW5kbGUgdGFicyBoZXJlIGFuZCBkb24ndCB3YW50IHRvIGJ1YmJsZSB1cC5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGlzRnVsbHNjcmVlbiA9IHRoaXMuaGFzQXR0cmlidXRlKCdmdWxsc2NyZWVuJyk7XG4gICAgICBjb25zdCBpc1NoaWZ0ID0gZS5zaGlmdEtleTtcblxuICAgICAgaWYgKGlzRnVsbHNjcmVlbikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2hpZnQgJiYgaXNTY3JvbGxlciB8fCAhaXNTaGlmdCAmJiBpc0NhbmNlbCkge1xuICAgICAgICAvLyBSZXR1cm4gZm9jdXMgYmFjayB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdmb2N1cy1pbnB1dCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTaGlmdCAmJiBpc1RvZGF5KSB7XG4gICAgICAgIC8vIEJyb3dzZXIgcmV0dXJucyBmb2N1cyBiYWNrIHRvIHRoZSBzY3JvbGxhYmxlIGFyZWEuIFdlIG5lZWQgdG8gc2V0XG4gICAgICAgIC8vIHRoZSBmb2N1c2VkIGZsYWcsIGFuZCBtb3ZlIHRoZSBzY3JvbGwgdG8gZm9jdXNlZCBkYXRlLlxuICAgICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJldmVhbERhdGUodGhpcy5mb2N1c2VkRGF0ZSksIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBtb3ZlcyB0aGUgZm9jdXMgb3V0IG9mIHRoZSBzY3JvbGxlciwgaGVuY2UgZm9jdXNlZCBmbGFnIG11c3RcbiAgICAgICAgLy8gc2V0IHRvIGZhbHNlLlxuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudEtleSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHN3aXRjaCAoZXZlbnRLZXkpIHtcbiAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlEYXlzKDcpO1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5RGF5cygtNyk7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgaWYgKGlzU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5RGF5cygxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIGlmIChpc1Njcm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW50ZXInOlxuICAgICAgICAgIGlmIChpc1Njcm9sbGVyIHx8IGlzQ2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNUb2RheSkge1xuICAgICAgICAgICAgdGhpcy5fb25Ub2RheVRhcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgIGlmIChpc0NhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzVG9kYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG9kYXlUYXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWREYXRlID0gdGhpcy5mb2N1c2VkRGF0ZTtcbiAgICAgICAgICAgIGlmIChEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKGZvY3VzZWREYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSAnJztcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGF0ZSA9IGZvY3VzZWREYXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBmb2N1c2VkRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0luc2lkZU1vbnRoKGZvY3VzLCAnbWluRGF0ZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0luc2lkZU1vbnRoKGZvY3VzLCAnbWF4RGF0ZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYWdlZG93bic6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlNb250aHMoZS5zaGlmdEtleSA/IDEyIDogMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhZ2V1cCc6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlNb250aHMoZS5zaGlmdEtleSA/IC0xMiA6IC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgICB0aGlzLl9jYW5jZWwoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY3VycmVudGx5Rm9jdXNlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZERhdGUgfHwgdGhpcy5zZWxlY3RlZERhdGUgfHwgdGhpcy5pbml0aWFsUG9zaXRpb24gfHwgbmV3IERhdGUoKTtcbiAgfVxuXG4gIF9mb2N1c0RhdGUoZGF0ZVRvRm9jdXMpIHtcbiAgICB0aGlzLmZvY3VzZWREYXRlID0gZGF0ZVRvRm9jdXM7XG4gICAgdGhpcy5fZm9jdXNlZE1vbnRoRGF0ZSA9IGRhdGVUb0ZvY3VzLmdldERhdGUoKTtcbiAgfVxuXG4gIF9mb2N1c0Nsb3Nlc3REYXRlKGZvY3VzKSB7XG4gICAgdGhpcy5fZm9jdXNEYXRlKERhdGVQaWNrZXJIZWxwZXIuX2dldENsb3Nlc3REYXRlKGZvY3VzLCBbdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGVdKSk7XG4gIH1cblxuICBfbW92ZUZvY3VzQnlEYXlzKGRheXMpIHtcbiAgICB2YXIgZm9jdXMgPSB0aGlzLl9jdXJyZW50bHlGb2N1c2VkRGF0ZSgpO1xuICAgIHZhciBkYXRlVG9Gb2N1cyA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGVUb0ZvY3VzLnNldEZ1bGxZZWFyKGZvY3VzLmdldEZ1bGxZZWFyKCkpO1xuICAgIGRhdGVUb0ZvY3VzLnNldE1vbnRoKGZvY3VzLmdldE1vbnRoKCkpO1xuICAgIGRhdGVUb0ZvY3VzLnNldERhdGUoZm9jdXMuZ2V0RGF0ZSgpICsgZGF5cyk7XG5cbiAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZVRvRm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgdGhpcy5fZm9jdXNEYXRlKGRhdGVUb0ZvY3VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgICAgLy8gTW92ZSB0byBtaW4gb3IgbWF4IGRhdGVcbiAgICAgICAgaWYgKGRheXMgPiAwKSB7IC8vIGRvd24gb3IgcmlnaHRcbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5tYXhEYXRlKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gdXAgb3IgbGVmdFxuICAgICAgICAgIHRoaXMuX2ZvY3VzRGF0ZSh0aGlzLm1pbkRhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNb3ZlIHRvIGNsb3Nlc3QgYWxsb3dlZCBkYXRlXG4gICAgICAgIHRoaXMuX2ZvY3VzQ2xvc2VzdERhdGUoZm9jdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlRm9jdXNCeU1vbnRocyhtb250aHMpIHtcbiAgICB2YXIgZm9jdXMgPSB0aGlzLl9jdXJyZW50bHlGb2N1c2VkRGF0ZSgpO1xuICAgIHZhciBkYXRlVG9Gb2N1cyA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGVUb0ZvY3VzLnNldEZ1bGxZZWFyKGZvY3VzLmdldEZ1bGxZZWFyKCkpO1xuICAgIGRhdGVUb0ZvY3VzLnNldE1vbnRoKGZvY3VzLmdldE1vbnRoKCkgKyBtb250aHMpO1xuXG4gICAgdmFyIHRhcmdldE1vbnRoID0gZGF0ZVRvRm9jdXMuZ2V0TW9udGgoKTtcblxuICAgIGRhdGVUb0ZvY3VzLnNldERhdGUodGhpcy5fZm9jdXNlZE1vbnRoRGF0ZSB8fCAodGhpcy5fZm9jdXNlZE1vbnRoRGF0ZSA9IGZvY3VzLmdldERhdGUoKSkpO1xuICAgIGlmIChkYXRlVG9Gb2N1cy5nZXRNb250aCgpICE9PSB0YXJnZXRNb250aCkge1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSgwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZVRvRm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGF0ZSA9IGRhdGVUb0ZvY3VzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgICAvLyBNb3ZlIHRvIG1pbiBvciBtYXggZGF0ZVxuICAgICAgICBpZiAobW9udGhzID4gMCkgeyAvLyBwYWdlZG93blxuICAgICAgICAgIHRoaXMuX2ZvY3VzRGF0ZSh0aGlzLm1heERhdGUpO1xuICAgICAgICB9IGVsc2UgeyAvLyBwYWdldXBcbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5taW5EYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW92ZSB0byBjbG9zZXN0IGFsbG93ZWQgZGF0ZVxuICAgICAgICB0aGlzLl9mb2N1c0Nsb3Nlc3REYXRlKGZvY3VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUZvY3VzSW5zaWRlTW9udGgoZm9jdXNlZERhdGUsIHByb3BlcnR5KSB7XG4gICAgdmFyIGRhdGVUb0ZvY3VzID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0RnVsbFllYXIoZm9jdXNlZERhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICBpZiAocHJvcGVydHkgPT09ICdtaW5EYXRlJykge1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0TW9udGgoZm9jdXNlZERhdGUuZ2V0TW9udGgoKSk7XG4gICAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1c2VkRGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKDApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChkYXRlVG9Gb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICB0aGlzLl9mb2N1c0RhdGUoZGF0ZVRvRm9jdXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZm9jdXNlZERhdGUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgICAvLyBNb3ZlIHRvIG1pbkRhdGUgb3IgbWF4RGF0ZVxuICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpc1twcm9wZXJ0eV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW92ZSB0byBjbG9zZXN0IGFsbG93ZWQgZGF0ZVxuICAgICAgICB0aGlzLl9mb2N1c0Nsb3Nlc3REYXRlKGZvY3VzZWREYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKCFtaW4gfHwgZGF0ZSA+PSBtaW4pICYmICghbWF4IHx8IGRhdGUgPD0gbWF4KTtcbiAgfVxuXG4gIF9pc1RvZGF5QWxsb3dlZChtaW4sIG1heCkge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHRvZGF5TWlkbmlnaHQgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICB0b2RheU1pZG5pZ2h0LnNldEZ1bGxZZWFyKHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgIHRvZGF5TWlkbmlnaHQuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSk7XG4gICAgdG9kYXlNaWRuaWdodC5zZXREYXRlKHRvZGF5LmdldERhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBbGxvd2VkKHRvZGF5TWlkbmlnaHQsIG1pbiwgbWF4KTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKERhdGVQaWNrZXJPdmVybGF5Q29udGVudEVsZW1lbnQuaXMsIERhdGVQaWNrZXJPdmVybGF5Q29udGVudEVsZW1lbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgT3ZlcmxheUVsZW1lbnQgfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1vdmVybGF5L3NyYy92YWFkaW4tb3ZlcmxheS5qcyc7XG5cbmltcG9ydCB7IERpc2FibGVVcGdyYWRlTWl4aW4gfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZGlzYWJsZS11cGdyYWRlLW1peGluLmpzJztcbi8qKlxuICogVGhlIG92ZXJsYXkgZWxlbWVudC5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFNlZSBbYDx2YWFkaW4tb3ZlcmxheT5gIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLW92ZXJsYXkvYmxvYi9tYXN0ZXIvc3JjL3ZhYWRpbi1vdmVybGF5Lmh0bWwpXG4gKiBmb3IgYDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheT5gIHBhcnRzLlxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERhdGVQaWNrZXJPdmVybGF5RWxlbWVudCBleHRlbmRzIERpc2FibGVVcGdyYWRlTWl4aW4oT3ZlcmxheUVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5JztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlck92ZXJsYXlFbGVtZW50LmlzLCBEYXRlUGlja2VyT3ZlcmxheUVsZW1lbnQpO1xuIiwiaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9jdXN0b20tc3R5bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2JvdHRvbS1hbGlnbmVkXSkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmlnaHQtYWxpZ25lZF0pIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmlnaHQtYWxpZ25lZF1bZGlyPVwicnRsXCJdKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJjb250ZW50XCJdIHtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZ2VzdHVyZS1ldmVudC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLW1lZGlhLXF1ZXJ5L2lyb24tbWVkaWEtcXVlcnkuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BlcnR5TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWUtcHJvcGVydHktbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluLmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1taXhpbi5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFmdGVyTmV4dFJlbmRlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuLyoqXG4gKlxuICogYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCBpcyBhIGRhdGUgc2VsZWN0aW9uIGZpZWxkIHdoaWNoIGluY2x1ZGVzIGEgc2Nyb2xsYWJsZVxuICogbW9udGggY2FsZW5kYXIgdmlldy5cbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tZGF0ZS1waWNrZXIgbGFiZWw9XCJCaXJ0aGRheVwiPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuICogYGBgXG4gKiBgYGBqc1xuICogZGF0ZVBpY2tlci52YWx1ZSA9ICcyMDE2LTAzLTAyJztcbiAqIGBgYFxuICogV2hlbiB0aGUgc2VsZWN0ZWQgYHZhbHVlYCBpcyBjaGFuZ2VkLCBhIGB2YWx1ZS1jaGFuZ2VkYCBldmVudCBpcyB0cmlnZ2VyZWQuXG4gKlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb24gfCBUaGVtZSBmb3IgRWxlbWVudFxuICogLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS1cbiAqIGB0ZXh0LWZpZWxkYCB8IElucHV0IGVsZW1lbnQgfCB2YWFkaW4tZGF0ZS1waWNrZXJcbiAqIGBjbGVhci1idXR0b25gIHwgQ2xlYXIgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgdG9nZ2xlLWJ1dHRvbmAgfCBUb2dnbGUgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgb3ZlcmxheS1jb250ZW50YCB8IFRoZSBvdmVybGF5IGVsZW1lbnQgfCB2YWFkaW4tZGF0ZS1waWNrZXJcbiAqIGBvdmVybGF5LWhlYWRlcmAgfCBGdWxsc2NyZWVuIG1vZGUgaGVhZGVyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYGxhYmVsYCB8IEZ1bGxzY3JlZW4gbW9kZSB2YWx1ZS9sYWJlbCB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBjbGVhci1idXR0b25gIHwgRnVsbHNjcmVlbiBtb2RlIGNsZWFyIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB0b2dnbGUtYnV0dG9uYCB8IEZ1bGxzY3JlZW4gbW9kZSB0b2dnbGUgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXJzLXRvZ2dsZS1idXR0b25gIHwgRnVsbHNjcmVlbiBtb2RlIHllYXJzIHNjcm9sbGVyIHRvZ2dsZSB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBtb250aHNgIHwgTW9udGhzIHNjcm9sbGVyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXJzYCB8IFllYXJzIHNjcm9sbGVyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHRvb2xiYXJgIHwgRm9vdGVyIGJhciB3aXRoIGJ1dHRvbnMgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgdG9kYXktYnV0dG9uYCB8IFRvZGF5IGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBjYW5jZWwtYnV0dG9uYCB8IENhbmNlbCBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgbW9udGhgIHwgTW9udGggY2FsZW5kYXIgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgeWVhci1udW1iZXJgIHwgWWVhciBudW1iZXIgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgeWVhci1zZXBhcmF0b3JgIHwgWWVhciBzZXBhcmF0b3IgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgbW9udGgtaGVhZGVyYCB8IE1vbnRoIHRpdGxlIHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgd2Vla2RheXNgIHwgV2Vla2RheSBjb250YWluZXIgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGB3ZWVrZGF5YCB8IFdlZWtkYXkgZWxlbWVudCB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWstbnVtYmVyc2AgfCBXZWVrIG51bWJlcnMgY29udGFpbmVyIHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgd2Vlay1udW1iZXJgIHwgV2VlayBudW1iZXIgZWxlbWVudCB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYGRhdGVgIHwgRGF0ZSBlbGVtZW50IHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogVGhlIGZvbGxvd2luZyBzdGF0ZSBhdHRyaWJ1dGVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQXR0cmlidXRlICAgIHwgRGVzY3JpcHRpb24gfCBQYXJ0IG5hbWVcbiAqIC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS1cbiAqIGBpbnZhbGlkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGludmFsaWQgfCA6aG9zdFxuICogYG9wZW5lZGAgfCBTZXQgd2hlbiB0aGUgZGF0ZSBzZWxlY3RvciBvdmVybGF5IGlzIG9wZW5lZCB8IDpob3N0XG4gKiBgcmVhZG9ubHlgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZG9ubHkgfCA6aG9zdFxuICogYGRpc2FibGVkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGRpc2FibGVkIHwgOmhvc3RcbiAqIGB0b2RheWAgfCBTZXQgb24gdGhlIGRhdGUgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCBkYXkgfCBkYXRlXG4gKiBgZm9jdXNlZGAgfCBTZXQgb24gdGhlIGZvY3VzZWQgZGF0ZSB8IGRhdGVcbiAqIGBkaXNhYmxlZGAgfCBTZXQgb24gdGhlIGRhdGUgb3V0IG9mIHRoZSBhbGxvd2VkIHJhbmdlIHwgZGF0ZVxuICogYHNlbGVjdGVkYCB8IFNldCBvbiB0aGUgc2VsZWN0ZWQgZGF0ZSB8IGRhdGVcbiAqXG4gKiBJZiB5b3Ugd2FudCB0byByZXBsYWNlIHRoZSBkZWZhdWx0IGlucHV0IGZpZWxkIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24sIHlvdSBzaG91bGQgdXNlIHRoZVxuICogW2A8dmFhZGluLWRhdGUtcGlja2VyLWxpZ2h0PmBdKCN2YWFkaW4tZGF0ZS1waWNrZXItbGlnaHQpIGVsZW1lbnQuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCBpdHNlbGYsIHRoZSBmb2xsb3dpbmcgaW50ZXJuYWxcbiAqIGNvbXBvbmVudHMgYXJlIHRoZW1hYmxlOlxuICpcbiAqIC0gYDx2YWFkaW4tdGV4dC1maWVsZD5gXG4gKiAtIGA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXk+YFxuICogLSBgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQ+YFxuICogLSBgPHZhYWRpbi1tb250aC1jYWxlbmRhcj5gXG4gKlxuICogTm90ZTogdGhlIGB0aGVtZWAgYXR0cmlidXRlIHZhbHVlIHNldCBvbiBgPHZhYWRpbi1kYXRlLXBpY2tlcj5gIGlzXG4gKiBwcm9wYWdhdGVkIHRvIHRoZSBpbnRlcm5hbCB0aGVtYWJsZSBjb21wb25lbnRzIGxpc3RlZCBhYm92ZS5cbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLkVsZW1lbnRNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db250cm9sU3RhdGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1lUHJvcGVydHlNaXhpblxuICogQG1peGVzIFZhYWRpbi5EYXRlUGlja2VyTWl4aW5cbiAqIEBtaXhlcyBQb2x5bWVyLkdlc3R1cmVFdmVudExpc3RlbmVyc1xuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKi9cbmNsYXNzIERhdGVQaWNrZXJFbGVtZW50IGV4dGVuZHNcbiAgRWxlbWVudE1peGluKFxuICAgIENvbnRyb2xTdGF0ZU1peGluKFxuICAgICAgVGhlbWFibGVNaXhpbihcbiAgICAgICAgVGhlbWVQcm9wZXJ0eU1peGluKFxuICAgICAgICAgIERhdGVQaWNrZXJNaXhpbihcbiAgICAgICAgICAgIEdlc3R1cmVFdmVudExpc3RlbmVycyhQb2x5bWVyRWxlbWVudCkpKSkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW29wZW5lZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidGV4dC1maWVsZFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuXG4gICAgPHZhYWRpbi10ZXh0LWZpZWxkIGlkPVwiaW5wdXRcIiByb2xlPVwiYXBwbGljYXRpb25cIiBhdXRvY29tcGxldGU9XCJvZmZcIiBvbi1mb2N1cz1cIl9mb2N1c1wiIHZhbHVlPVwie3tfdXNlcklucHV0VmFsdWV9fVwiIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiIGxhYmVsPVwiW1tsYWJlbF1dXCIgbmFtZT1cIltbbmFtZV1dXCIgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIiByZXF1aXJlZD1cIltbcmVxdWlyZWRdXVwiIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCIgcmVhZG9ubHk9XCJbW3JlYWRvbmx5XV1cIiBlcnJvci1tZXNzYWdlPVwiW1tlcnJvck1lc3NhZ2VdXVwiIGNsZWFyLWJ1dHRvbi12aXNpYmxlPVwiW1tjbGVhckJ1dHRvblZpc2libGVdXVwiIGFyaWEtbGFiZWxcXCQ9XCJbW2xhYmVsXV1cIiBwYXJ0PVwidGV4dC1maWVsZFwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCI+XG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cbiAgICAgIDxkaXYgcGFydD1cInRvZ2dsZS1idXR0b25cIiBzbG90PVwic3VmZml4XCIgb24tdGFwPVwiX3RvZ2dsZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsXFwkPVwiW1tpMThuLmNhbGVuZGFyXV1cIiBhcmlhLWV4cGFuZGVkXFwkPVwiW1tfZ2V0QXJpYUV4cGFuZGVkKG9wZW5lZCldXVwiPjwvZGl2PlxuICAgIDwvdmFhZGluLXRleHQtZmllbGQ+XG5cbiAgICA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkgaWQ9XCJvdmVybGF5XCIgZnVsbHNjcmVlblxcJD1cIltbX2Z1bGxzY3JlZW5dXVwiIHRoZW1lXFwkPVwiW1tfX2dldE92ZXJsYXlUaGVtZSh0aGVtZSwgX292ZXJsYXlJbml0aWFsaXplZCldXVwiIG9uLXZhYWRpbi1vdmVybGF5LW9wZW49XCJfb25PdmVybGF5T3BlbmVkXCIgb24tdmFhZGluLW92ZXJsYXktY2xvc2U9XCJfb25PdmVybGF5Q2xvc2VkXCIgZGlzYWJsZS11cGdyYWRlPVwiXCI+XG4gICAgICA8dGVtcGxhdGU+XG4gICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50IGlkPVwib3ZlcmxheS1jb250ZW50XCIgaTE4bj1cIltbaTE4bl1dXCIgZnVsbHNjcmVlblxcJD1cIltbX2Z1bGxzY3JlZW5dXVwiIGxhYmVsPVwiW1tsYWJlbF1dXCIgc2VsZWN0ZWQtZGF0ZT1cInt7X3NlbGVjdGVkRGF0ZX19XCIgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBmb2N1c2VkLWRhdGU9XCJ7e19mb2N1c2VkRGF0ZX19XCIgc2hvdy13ZWVrLW51bWJlcnM9XCJbW3Nob3dXZWVrTnVtYmVyc11dXCIgbWluLWRhdGU9XCJbW19taW5EYXRlXV1cIiBtYXgtZGF0ZT1cIltbX21heERhdGVdXVwiIHJvbGU9XCJkaWFsb2dcIiBvbi1kYXRlLXRhcD1cIl9jbG9zZVwiIHBhcnQ9XCJvdmVybGF5LWNvbnRlbnRcIiB0aGVtZVxcJD1cIltbX19nZXRPdmVybGF5VGhlbWUodGhlbWUsIF9vdmVybGF5SW5pdGlhbGl6ZWQpXV1cIj5cbiAgICAgICAgPC92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5PlxuXG4gICAgPGlyb24tbWVkaWEtcXVlcnkgcXVlcnk9XCJbW19mdWxsc2NyZWVuTWVkaWFRdWVyeV1dXCIgcXVlcnktbWF0Y2hlcz1cInt7X2Z1bGxzY3JlZW59fVwiPlxuICAgIDwvaXJvbi1tZWRpYS1xdWVyeT5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWRhdGUtcGlja2VyJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzQuMC4zJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IHRoZSBjbGVhciBpY29uIHdoaWNoIGNsZWFycyB0aGUgaW5wdXQuXG4gICAgICAgKi9cbiAgICAgIGNsZWFyQnV0dG9uVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgZXJyb3JNZXNzYWdlOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwbGFjZWhvbGRlciBzdHJpbmcgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsLiBJZiB0aGlzIGlzIHNldCwgdGhlIGxhYmVsIHdpbGwgYWx3YXlzIGZsb2F0LlxuICAgICAgICovXG4gICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1ha2UgdGhpcyBlbGVtZW50IHJlYWQtb25seS5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgX3VzZXJJbnB1dFZhbHVlOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfdXNlcklucHV0VmFsdWVDaGFuZ2VkKF91c2VySW5wdXRWYWx1ZSknLFxuICAgICAgJ19zZXRDbGVhckJ1dHRvbkxhYmVsKGkxOG4uY2xlYXIpJ1xuICAgIF07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgLy8gSW4gb3JkZXIgdG8gaGF2ZSBzeW5jaHJvbml6ZWQgaW52YWxpZCBwcm9wZXJ0eSwgd2UgbmVlZCB0byB1c2UgdGhlIHNhbWUgdmFsaWRhdGUgbG9naWMuXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsICgpID0+IHRoaXMuX2lucHV0RWxlbWVudC52YWxpZGF0ZSA9ICgpID0+IHt9KTtcblxuICAgIC8vIEZJWE1FKHBsYXRvc2hhKTogZGlzcGF0Y2ggYGlucHV0YCBldmVudCBvblxuICAgIC8vIDx2YWFkaW4tdGV4dC1maWVsZD4gY2xlYXIgYnV0dG9uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9pc3N1ZXMvMzQ3XG4gICAgdGhpcy5faW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuX19kaXNwYXRjaENoYW5nZSA9IHRydWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfb25WYWFkaW5PdmVybGF5Q2xvc2UoZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nICYmIHRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykpIHtcbiAgICAgIHRoaXMuZm9jdXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9jdXMtcmluZycsICcnKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGlmIChlLmRldGFpbC5zb3VyY2VFdmVudCAmJiBlLmRldGFpbC5zb3VyY2VFdmVudC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMpICE9PSAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGUoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpc1sodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkgPyAnY2xvc2UnIDogJ29wZW4nXSgpO1xuICB9XG5cbiAgX2lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gIH1cblxuICBzZXQgX2lucHV0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgX2dldEFyaWFFeHBhbmRlZChvcGVuZWQpIHtcbiAgICByZXR1cm4gQm9vbGVhbihvcGVuZWQpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNzYWJsZSBlbGVtZW50IHVzZWQgYnkgdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW5cbiAgICovXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0KCkgfHwgdGhpcztcbiAgfVxuXG4gIF9zZXRDbGVhckJ1dHRvbkxhYmVsKGkxOG5DbGVhcikge1xuICAgIC8vIEZJWE1FKHBsYXRvc2hhKTogZXhwb3NlIGkxOG4gQVBJIGluIDx2YWFkaW4tdGV4dC1maWVsZD5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL2lzc3Vlcy8zNDhcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cImNsZWFyLWJ1dHRvblwiXScpXG4gICAgICAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgaTE4bkNsZWFyKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlckVsZW1lbnQuaXMsIERhdGVQaWNrZXJFbGVtZW50KTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlckVsZW1lbnQgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgZmx1c2ggfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0aXplIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvdGVtcGxhdGl6ZS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG4vKipcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyLm5vdG91Y2hzY3JvbGwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5idWZmZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLXdpZHRoLCAxMDAlKTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgdG9wOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLW9mZnNldCwgMCk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuMnM7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxlclwiIG9uLXNjcm9sbD1cIl9zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJmdWxsSGVpZ2h0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb3VudCBvZiBpbmRpdmlkdWFsIGl0ZW1zIGluIGVhY2ggYnVmZmVyLlxuICAgICAgICogVGhlIHNjcm9sbGVyIGhhcyAyIGJ1ZmZlcnMgYWx0b2dldGhlciBzbyBidWZmZXJTaXplIG9mIDIwXG4gICAgICAgKiB3aWxsIHJlc3VsdCBpbiA0MCBidWZmZXJlZCBET00gaXRlbXMgaW4gdG90YWwuXG4gICAgICAgKiBDaGFuZ2luZyBhZnRlciBpbml0aWFsaXphdGlvbiBub3Qgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBidWZmZXJTaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDIwXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBhbW91bnQgb2YgaW5pdGlhbCBzY3JvbGwgdG9wLiBOZWVkZWQgaW4gb3JkZXIgZm9yIHRoZVxuICAgICAgICogdXNlciB0byBiZSBhYmxlIHRvIHNjcm9sbCBiYWNrd2FyZHMuXG4gICAgICAgKi9cbiAgICAgIF9pbml0aWFsU2Nyb2xsOiB7XG4gICAgICAgIHZhbHVlOiA1MDAwMDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGluZGV4L3Bvc2l0aW9uIG1hcHBlZCBhdCBfaW5pdGlhbFNjcm9sbCBwb2ludC5cbiAgICAgICAqL1xuICAgICAgX2luaXRpYWxJbmRleDoge1xuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgX2J1ZmZlcnM6IEFycmF5LFxuXG4gICAgICBfcHJldmVudFNjcm9sbEV2ZW50OiBCb29sZWFuLFxuXG4gICAgICBfbWF5SGF2ZU1vbWVudHVtOiBCb29sZWFuLFxuXG4gICAgICBfaW5pdGlhbGl6ZWQ6IEJvb2xlYW4sXG5cbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19hY3RpdmF0ZWQnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICB0aGlzLl9idWZmZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWZmZXInKSk7XG5cbiAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiArICdweCc7XG5cbiAgICB2YXIgdHBsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpO1xuICAgIHRoaXMuX1RlbXBsYXRlQ2xhc3MgPSB0ZW1wbGF0aXplKHRwbCwgdGhpcywge1xuICAgICAgZm9yd2FyZEhvc3RQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvcCAhPT0gJ2luZGV4Jykge1xuICAgICAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJ1ZmZlci5jaGlsZHJlbiwgaW5zZXJ0aW9uUG9pbnQgPT4ge1xuICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXIuaW5zdGFuY2VbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGaXJlZm94IGludGVycHJldHMgZWxlbWVudHMgd2l0aCBvdmVyZmxvdzphdXRvIGFzIGZvY3VzYWJsZVxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwNjk3MzlcbiAgICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZWQoYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvb2woKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfZmluaXNoSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXREb25lKSB7XG4gICAgICAvLyBPbmNlIHRoZSBmaXJzdCBzZXQgb2YgaXRlbXMgc3RhcnQgZmFkaW5nIGluLCBzdGFtcCB0aGUgcmVzdFxuICAgICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChidWZmZXIuY2hpbGRyZW4sXG4gICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPT4gdGhpcy5fZW5zdXJlU3RhbXBlZEluc3RhbmNlKGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlcikpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXREb25lID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfdHJhbnNsYXRlQnVmZmVyKHVwKSB7XG4gICAgdmFyIGluZGV4ID0gdXAgPyAxIDogMDtcbiAgICB0aGlzLl9idWZmZXJzW2luZGV4XS50cmFuc2xhdGVZID0gdGhpcy5fYnVmZmVyc1soaW5kZXggPyAwIDogMSldLnRyYW5zbGF0ZVkgKyB0aGlzLl9idWZmZXJIZWlnaHQgKiAoaW5kZXggPyAtMSA6IDEpO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy5fYnVmZmVyc1tpbmRleF0udHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9idWZmZXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9zY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMuX2J1ZmZlckhlaWdodCB8fCBzY3JvbGxUb3AgPiB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiAtIHRoaXMuX2J1ZmZlckhlaWdodCkge1xuICAgICAgLy8gU2Nyb2xsZWQgbmVhciB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgc2Nyb2xsYWJsZSBhcmVhIC0+IHJlc2V0LlxuICAgICAgdGhpcy5faW5pdGlhbEluZGV4ID0gfn50aGlzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBzY3JvbGxlZCBlbm91Z2ggdG8gdHJhbnNsYXRlIHRoZSBidWZmZXIgcG9zaXRpb25zLlxuICAgIHZhciBidWZmZXJPZmZzZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLmJ1ZmZlcicpLm9mZnNldFRvcDtcbiAgICB2YXIgdXBwZXJUaHJlc2hvbGRSZWFjaGVkID0gc2Nyb2xsVG9wID4gdGhpcy5fYnVmZmVyc1sxXS50cmFuc2xhdGVZICsgdGhpcy5pdGVtSGVpZ2h0ICsgYnVmZmVyT2Zmc2V0O1xuICAgIHZhciBsb3dlclRocmVzaG9sZFJlYWNoZWQgPSBzY3JvbGxUb3AgPCB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgKyB0aGlzLml0ZW1IZWlnaHQgKyBidWZmZXJPZmZzZXQ7XG5cbiAgICBpZiAodXBwZXJUaHJlc2hvbGRSZWFjaGVkIHx8IGxvd2VyVGhyZXNob2xkUmVhY2hlZCkge1xuICAgICAgdGhpcy5fdHJhbnNsYXRlQnVmZmVyKGxvd2VyVGhyZXNob2xkUmVhY2hlZCk7XG4gICAgICB0aGlzLl91cGRhdGVDbG9uZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3ByZXZlbnRTY3JvbGxFdmVudCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLXNjcm9sbCcsIHtidWJibGVzOiBmYWxzZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgICB0aGlzLl9tYXlIYXZlTW9tZW50dW0gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2RlYm91bmNlclNjcm9sbEZpbmlzaCA9IERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXJTY3JvbGxGaW5pc2gsXG4gICAgICB0aW1lT3V0LmFmdGVyKDIwMCksICgpID0+IHtcbiAgICAgICAgdmFyIHNjcm9sbGVyUmVjdCA9IHRoaXMuJC5zY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1Zpc2libGUodGhpcy5fYnVmZmVyc1swXSwgc2Nyb2xsZXJSZWN0KSAmJiAhdGhpcy5faXNWaXNpYmxlKHRoaXMuX2J1ZmZlcnNbMV0sIHNjcm9sbGVyUmVjdCkpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCBzY3JvbGxlciBwb3NpdGlvbiBhcyBpbmRleC4gQ2FuIGJlIGEgZnJhY3Rpb25hbCBudW1iZXIuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBzZXQgcG9zaXRpb24oaW5kZXgpIHtcbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSB0cnVlO1xuICAgIGlmIChpbmRleCA+IHRoaXMuX2ZpcnN0SW5kZXggJiYgaW5kZXggPCB0aGlzLl9maXJzdEluZGV4ICsgdGhpcy5idWZmZXJTaXplICogMikge1xuICAgICAgdGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCA9IHRoaXMuaXRlbUhlaWdodCAqIChpbmRleCAtIHRoaXMuX2ZpcnN0SW5kZXgpICsgdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbml0aWFsSW5kZXggPSB+fmluZGV4O1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3AgKz0gaW5kZXggJSAxICogdGhpcy5pdGVtSGVpZ2h0O1xuICAgICAgdGhpcy5fc2Nyb2xsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF5SGF2ZU1vbWVudHVtKSB7XG4gICAgICAvLyBTdG9wIHRoZSBwb3NzaWJsZSBpT1MgU2FmYXJpIG1vbWVudHVtIHdpdGggLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICB0aGlzLiQuc2Nyb2xsZXIuY2xhc3NMaXN0LmFkZCgnbm90b3VjaHNjcm9sbCcpO1xuICAgICAgdGhpcy5fbWF5SGF2ZU1vbWVudHVtID0gZmFsc2U7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSZXN0b3JlIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgYWZ0ZXIgYSBzbWFsbCBkZWxheS5cbiAgICAgICAgdGhpcy4kLnNjcm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdG91Y2hzY3JvbGwnKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCAtIHRoaXMuX2J1ZmZlcnNbMF0udHJhbnNsYXRlWSkgLyB0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLl9maXJzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGl0ZW1IZWlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pdGVtSGVpZ2h0VmFsKSB7XG4gICAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHdpbmRvdy5TaGFkeUNTU1xuICAgICAgICA/IHdpbmRvdy5TaGFkeUNTUy5nZXRDb21wdXRlZFN0eWxlVmFsdWUodGhpcywgJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0JylcbiAgICAgICAgOiBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0Jyk7XG4gICAgICAvLyBVc2UgYmFja2dyb3VuZC1wb3NpdGlvbiB0ZW1wIGlubGluZSBzdHlsZSBmb3IgdW5pdCBjb252ZXJzaW9uXG4gICAgICBjb25zdCB0bXBTdHlsZVByb3AgPSAnYmFja2dyb3VuZC1wb3NpdGlvbic7XG4gICAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5zZXRQcm9wZXJ0eSh0bXBTdHlsZVByb3AsIGl0ZW1IZWlnaHQpO1xuICAgICAgY29uc3QgaXRlbUhlaWdodFB4ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiQuZnVsbEhlaWdodCkuZ2V0UHJvcGVydHlWYWx1ZSh0bXBTdHlsZVByb3ApO1xuICAgICAgdGhpcy4kLmZ1bGxIZWlnaHQuc3R5bGUucmVtb3ZlUHJvcGVydHkodG1wU3R5bGVQcm9wKTtcbiAgICAgIHRoaXMuX2l0ZW1IZWlnaHRWYWwgPSBwYXJzZUZsb2F0KGl0ZW1IZWlnaHRQeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHRWYWw7XG4gIH1cblxuICBnZXQgX2J1ZmZlckhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtSGVpZ2h0ICogdGhpcy5idWZmZXJTaXplO1xuICB9XG5cbiAgX3Jlc2V0KCkge1xuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiQuc2Nyb2xsZXIuc2Nyb2xsVG9wID0gdGhpcy5faW5pdGlhbFNjcm9sbDtcbiAgICB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgPSB0aGlzLl9pbml0aWFsU2Nyb2xsIC0gdGhpcy5fYnVmZmVySGVpZ2h0O1xuICAgIHRoaXMuX2J1ZmZlcnNbMV0udHJhbnNsYXRlWSA9IHRoaXMuX2luaXRpYWxTY3JvbGw7XG4gICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICBidWZmZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBidWZmZXIudHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIH0pO1xuICAgIHRoaXMuX2J1ZmZlcnNbMF0udXBkYXRlZCA9IHRoaXMuX2J1ZmZlcnNbMV0udXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3VwZGF0ZUNsb25lcyh0cnVlKTtcblxuICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMjAwKSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdLnVwZGF0ZWQgPSB0aGlzLl9idWZmZXJzWzFdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvbmVzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlUG9vbCgpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl9idWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idWZmZXJTaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5pdGVtSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2UgPSB7fTtcblxuICAgICAgICBjb25zdCBjb250ZW50SWQgPSBJbmZpbml0ZVNjcm9sbGVyRWxlbWVudC5fY29udGVudEluZGV4ID0gSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuX2NvbnRlbnRJbmRleCArIDEgfHwgMDtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAndmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0tY29udGVudC0nICsgY29udGVudElkO1xuXG4gICAgICAgIGNvbnN0IGluc2VydGlvblBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpO1xuICAgICAgICBpbnNlcnRpb25Qb2ludC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBzbG90TmFtZSk7XG4gICAgICAgIGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlciA9IGl0ZW1XcmFwcGVyO1xuICAgICAgICBidWZmZXIuYXBwZW5kQ2hpbGQoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgICAgIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnc2xvdCcsIHNsb3ROYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgYnkgSUVcbiAgICAgICAgZmx1c2goKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBPbmx5IHN0YW1wIHRoZSB2aXNpYmxlIGluc3RhbmNlcyBmaXJzdFxuICAgICAgICAgIGlmICh0aGlzLl9pc1Zpc2libGUoaXRlbVdyYXBwZXIsIGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVN0YW1wZWRJbnN0YW5jZShpdGVtV3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxKTsgLy8gV2FpdCBmb3IgZmlyc3QgcmVzZXRcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIHRoaXMuX2ZpbmlzaEluaXQuYmluZCh0aGlzKSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBfZW5zdXJlU3RhbXBlZEluc3RhbmNlKGl0ZW1XcmFwcGVyKSB7XG4gICAgaWYgKGl0ZW1XcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRtcEluc3RhbmNlID0gaXRlbVdyYXBwZXIuaW5zdGFuY2U7XG5cbiAgICBpdGVtV3JhcHBlci5pbnN0YW5jZSA9IG5ldyB0aGlzLl9UZW1wbGF0ZUNsYXNzKHt9KTtcbiAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtV3JhcHBlci5pbnN0YW5jZS5yb290KTtcblxuICAgIE9iamVjdC5rZXlzKHRtcEluc3RhbmNlKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2Uuc2V0KHByb3AsIHRtcEluc3RhbmNlW3Byb3BdKTtcbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVDbG9uZXModmlld1BvcnRPbmx5KSB7XG4gICAgdGhpcy5fZmlyc3RJbmRleCA9IH5+KCh0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgLSB0aGlzLl9pbml0aWFsU2Nyb2xsKSAvIHRoaXMuaXRlbUhlaWdodCkgKyB0aGlzLl9pbml0aWFsSW5kZXg7XG5cbiAgICB2YXIgc2Nyb2xsZXJSZWN0ID0gdmlld1BvcnRPbmx5ID8gdGhpcy4kLnNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaCgoYnVmZmVyLCBidWZmZXJJbmRleCkgPT4ge1xuICAgICAgaWYgKCFidWZmZXIudXBkYXRlZCkge1xuICAgICAgICB2YXIgZmlyc3RJbmRleCA9IHRoaXMuX2ZpcnN0SW5kZXggKyB0aGlzLmJ1ZmZlclNpemUgKiBidWZmZXJJbmRleDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYnVmZmVyLmNoaWxkcmVuLCAoaW5zZXJ0aW9uUG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXI7XG4gICAgICAgICAgaWYgKCF2aWV3UG9ydE9ubHkgfHwgdGhpcy5faXNWaXNpYmxlKGl0ZW1XcmFwcGVyLCBzY3JvbGxlclJlY3QpKSB7XG4gICAgICAgICAgICBpdGVtV3JhcHBlci5pbnN0YW5jZS5pbmRleCA9IGZpcnN0SW5kZXggKyBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXIudXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBfaXNWaXNpYmxlKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC5ib3R0b20gPiBjb250YWluZXIudG9wICYmIHJlY3QudG9wIDwgY29udGFpbmVyLmJvdHRvbTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuaXMsIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQuanMnO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IERhdGVQaWNrZXJIZWxwZXIgfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1oZWxwZXIuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBNb250aENhbGVuZGFyRWxlbWVudCBleHRlbmRzIFRoZW1hYmxlTWl4aW4oR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwid2Vla2RheXNcIl0sXG4gICAgICAjZGF5cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICAjZGF5cy1jb250YWluZXIsXG4gICAgICAjd2Vla2RheXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXVtoaWRkZW5dLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl0sXG4gICAgICBbcGFydD1cImRhdGVcIl0ge1xuICAgICAgICAvKiBXb3VsZCB1c2UgY2FsYygxMDAlIC8gNykgYnV0IGl0IGRvZXNuJ3Qgd29yayBuaWNlIG9uIElFICovXG4gICAgICAgIHdpZHRoOiAxNC4yODU3MTQyODYlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl06ZW1wdHksXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXSB7XG4gICAgICAgIHdpZHRoOiAxMi41JTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgcGFydD1cIm1vbnRoLWhlYWRlclwiIHJvbGU9XCJoZWFkaW5nXCI+W1tfZ2V0VGl0bGUobW9udGgsIGkxOG4ubW9udGhOYW1lcyldXTwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb250aEdyaWRcIiBvbi10YXA9XCJfaGFuZGxlVGFwXCIgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiBvbi10b3VjaHN0YXJ0PVwiX29uTW9udGhHcmlkVG91Y2hTdGFydFwiPlxuICAgICAgPGRpdiBpZD1cIndlZWtkYXlzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIiBwYXJ0PVwid2Vla2RheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHBhcnQ9XCJ3ZWVrZGF5c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2dldFdlZWtEYXlOYW1lcyhpMThuLndlZWtkYXlzLCBpMThuLndlZWtkYXlzU2hvcnQsIHNob3dXZWVrTnVtYmVycywgaTE4bi5maXJzdERheU9mV2VlayldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vla2RheVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1sYWJlbFxcJD1cIltbaXRlbS53ZWVrRGF5XV1cIj5bW2l0ZW0ud2Vla0RheVNob3J0XV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImRheXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgcGFydD1cIndlZWstbnVtYmVyc1wiIGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19nZXRXZWVrTnVtYmVycyhfZGF5cyldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vlay1udW1iZXJcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGFiZWxcXCQ9XCJbW2kxOG4ud2Vla11dIFtbaXRlbV1dXCI+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImRheXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19kYXlzXV1cIj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImRhdGVcIiB0b2RheVxcJD1cIltbX2lzVG9kYXkoaXRlbSldXVwiIHNlbGVjdGVkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBzZWxlY3RlZERhdGUpXV1cIiBmb2N1c2VkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBmb2N1c2VkRGF0ZSldXVwiIGRhdGU9XCJbW2l0ZW1dXVwiIGRpc2FibGVkXFwkPVwiW1shX2RhdGVBbGxvd2VkKGl0ZW0sIG1pbkRhdGUsIG1heERhdGUpXV1cIiByb2xlXFwkPVwiW1tfZ2V0Um9sZShpdGVtKV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbX2dldEFyaWFMYWJlbChpdGVtKV1dXCIgYXJpYS1kaXNhYmxlZFxcJD1cIltbX2dldEFyaWFEaXNhYmxlZChpdGVtLCBtaW5EYXRlLCBtYXhEYXRlKV1dXCI+W1tfZ2V0RGF0ZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLW1vbnRoLWNhbGVuZGFyJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBIGBEYXRlYCBvYmplY3QgZGVmaW5pbmcgdGhlIG1vbnRoIHRvIGJlIGRpc3BsYXllZC4gT25seSB5ZWFyIGFuZFxuICAgICAgICogbW9udGggcHJvcGVydGllcyBhcmUgYWN0dWFsbHkgdXNlZC5cbiAgICAgICAqL1xuICAgICAgbW9udGg6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKClcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IGZvY3VzZWQgZGF0ZS5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZERhdGU6IERhdGUsXG5cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZsYWcgc3RhdGluZyB3aGV0aGVyIHRhcHMgb24gdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICAgICAqL1xuICAgICAgaWdub3JlVGFwczogQm9vbGVhbixcblxuICAgICAgX25vdFRhcHBpbmc6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWF4RGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcblxuICAgICAgX2RheXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnX2dldERheXMobW9udGgsIGkxOG4uZmlyc3REYXlPZldlZWssIG1pbkRhdGUsIG1heERhdGUpJ1xuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogJ19pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfc2hvd1dlZWtOdW1iZXJzQ2hhbmdlZChzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspJ1xuICAgIF07XG4gIH1cblxuICBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpO1xuICB9XG5cbiAgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIGRhdGVzIGluIHRoZSBtb250aCBhcmUgb3V0IG9mIHRoZSBhbGxvd2VkIHJhbmdlICovXG4gIF9pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSB7XG4gICAgLy8gRmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgIHZhciBmaXJzdERhdGUgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBmaXJzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgZmlyc3REYXRlLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkpO1xuICAgIGZpcnN0RGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgLy8gTGFzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgdmFyIGxhc3REYXRlID0gbmV3IERhdGUoMCwgMCk7XG4gICAgbGFzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgbGFzdERhdGUuc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIDEpO1xuICAgIGxhc3REYXRlLnNldERhdGUoMCk7XG5cbiAgICBpZiAoKG1pbkRhdGUgJiYgbWF4RGF0ZSlcbiAgICAgICYmIG1pbkRhdGUuZ2V0TW9udGgoKSA9PT0gbWF4RGF0ZS5nZXRNb250aCgpXG4gICAgICAmJiBtaW5EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoLmdldE1vbnRoKClcbiAgICAgICYmIG1heERhdGUuZ2V0RGF0ZSgpIC0gbWluRGF0ZS5nZXREYXRlKCkgPj0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhdGhpcy5fZGF0ZUFsbG93ZWQoZmlyc3REYXRlLCBtaW5EYXRlLCBtYXhEYXRlKVxuICAgICAgJiYgIXRoaXMuX2RhdGVBbGxvd2VkKGxhc3REYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgfVxuXG4gIF9nZXRUaXRsZShtb250aCwgbW9udGhOYW1lcykge1xuICAgIGlmIChtb250aCA9PT0gdW5kZWZpbmVkIHx8IG1vbnRoTmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdFRpdGxlKG1vbnRoTmFtZXNbbW9udGguZ2V0TW9udGgoKV0sIG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICB9XG5cbiAgX29uTW9udGhHcmlkVG91Y2hTdGFydCgpIHtcbiAgICB0aGlzLl9ub3RUYXBwaW5nID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9ub3RUYXBwaW5nID0gdHJ1ZSwgMzAwKTtcbiAgfVxuXG4gIF9kYXRlQWRkKGRhdGUsIGRlbHRhKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGVsdGEpO1xuICB9XG5cbiAgX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmICh3ZWVrRGF5TmFtZXMgPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtEYXlOYW1lcy5zbGljZShmaXJzdERheU9mV2VlaykuY29uY2F0KHdlZWtEYXlOYW1lcy5zbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuICB9XG5cbiAgX2dldFdlZWtEYXlOYW1lcyh3ZWVrRGF5TmFtZXMsIHdlZWtEYXlOYW1lc1Nob3J0LCBzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKHdlZWtEYXlOYW1lcyA9PT0gdW5kZWZpbmVkIHx8IHdlZWtEYXlOYW1lc1Nob3J0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHNob3dXZWVrTnVtYmVycyA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2Vla0RheU5hbWVzID0gdGhpcy5fYXBwbHlGaXJzdERheU9mV2Vlayh3ZWVrRGF5TmFtZXMsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICB3ZWVrRGF5TmFtZXNTaG9ydCA9IHRoaXMuX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzU2hvcnQsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICB3ZWVrRGF5TmFtZXMgPSB3ZWVrRGF5TmFtZXMubWFwKChkYXksIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrRGF5OiBkYXksXG4gICAgICAgIHdlZWtEYXlTaG9ydDogd2Vla0RheU5hbWVzU2hvcnRbaW5kZXhdXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHdlZWtEYXlOYW1lcztcbiAgfVxuXG4gIF9nZXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA/IGRhdGUuZ2V0RGF0ZSgpIDogJyc7XG4gIH1cblxuICBfc2hvd1dlZWtOdW1iZXJzQ2hhbmdlZChzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKHNob3dXZWVrTnVtYmVycyAmJiBmaXJzdERheU9mV2VlayA9PT0gMSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3dlZWstbnVtYmVycycsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3dlZWstbnVtYmVycycpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgLy8gQ3VycmVudGx5IG9ubHkgc3VwcG9ydGVkIGZvciBsb2NhbGVzIHRoYXQgc3RhcnQgdGhlIHdlZWsgb24gTW9uZGF5LlxuICAgIHJldHVybiBzaG93V2Vla051bWJlcnMgJiYgZmlyc3REYXlPZldlZWsgPT09IDE7XG4gIH1cblxuICBfaXNUb2RheShkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVFcXVhbHMobmV3IERhdGUoKSwgZGF0ZSk7XG4gIH1cblxuICBfZ2V0RGF5cyhtb250aCwgZmlyc3REYXlPZldlZWspIHtcbiAgICBpZiAobW9udGggPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpcnN0IGRheSBvZiB0aGUgbW9udGggKGF0IG1pZG5pZ2h0KS5cbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgZGF0ZS5zZXRNb250aChtb250aC5nZXRNb250aCgpKTtcbiAgICBkYXRlLnNldERhdGUoMSk7XG5cbiAgICAvLyBSZXdpbmQgdG8gZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIHdoaWxlIChkYXRlLmdldERheSgpICE9PSBmaXJzdERheU9mV2Vlaykge1xuICAgICAgdGhpcy5fZGF0ZUFkZChkYXRlLCAtMSk7XG4gICAgfVxuXG4gICAgdmFyIGRheXMgPSBbXTtcbiAgICB2YXIgc3RhcnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB2YXIgdGFyZ2V0TW9udGggPSBtb250aC5nZXRNb250aCgpO1xuICAgIHdoaWxlIChkYXRlLmdldE1vbnRoKCkgPT09IHRhcmdldE1vbnRoIHx8IGRhdGUuZ2V0TW9udGgoKSA9PT0gc3RhcnRNb250aCkge1xuICAgICAgZGF5cy5wdXNoKGRhdGUuZ2V0TW9udGgoKSA9PT0gdGFyZ2V0TW9udGggPyBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSkgOiBudWxsKTtcblxuICAgICAgLy8gQWR2YW5jZSB0byBuZXh0IGRheS5cbiAgICAgIHRoaXMuX2RhdGVBZGQoZGF0ZSwgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgX2dldFdlZWtOdW1iZXIoZGF0ZSwgZGF5cykge1xuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQgfHwgZGF5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpcnN0IG5vbi1udWxsIGRhdGUgZnJvbSB0aGUgZGF5cyBhcnJheS5cbiAgICAgIGRhdGUgPSBkYXlzLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgIHJldHVybiAhYWNjICYmIGQgPyBkIDogYWNjO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2dldElTT1dlZWtOdW1iZXIoZGF0ZSk7XG4gIH1cblxuICBfZ2V0V2Vla051bWJlcnMoZGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZXNcbiAgICAgIC5tYXAoZGF0ZSA9PiB0aGlzLl9nZXRXZWVrTnVtYmVyKGRhdGUsIGRhdGVzKSlcbiAgICAgIC5maWx0ZXIoKHdlZWssIGluZGV4LCBhcnIpID0+IGFyci5pbmRleE9mKHdlZWspID09PSBpbmRleCk7XG4gIH1cblxuICBfaGFuZGxlVGFwKGUpIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlVGFwcyAmJiAhdGhpcy5fbm90VGFwcGluZyAmJiBlLnRhcmdldC5kYXRlICYmICFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZS50YXJnZXQuZGF0ZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2RhdGUtdGFwJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgX2dldFJvbGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlID8gJ2J1dHRvbicgOiAncHJlc2VudGF0aW9uJztcbiAgfVxuXG4gIF9nZXRBcmlhTGFiZWwoZGF0ZSkge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcmlhTGFiZWwgPSB0aGlzLl9nZXREYXRlKGRhdGUpICsgJyAnICtcbiAgICAgIHRoaXMuaTE4bi5tb250aE5hbWVzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgK1xuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICsgJywgJyArXG4gICAgICB0aGlzLmkxOG4ud2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG5cbiAgICBpZiAodGhpcy5faXNUb2RheShkYXRlKSkge1xuICAgICAgYXJpYUxhYmVsICs9ICcsICcgKyB0aGlzLmkxOG4udG9kYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyaWFMYWJlbDtcbiAgfVxuXG4gIF9nZXRBcmlhRGlzYWJsZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG1pbiA9PT0gdW5kZWZpbmVkIHx8IG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCkgPyAnZmFsc2UnIDogJ3RydWUnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShNb250aENhbGVuZGFyRWxlbWVudC5pcywgTW9udGhDYWxlbmRhckVsZW1lbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1pY29ucy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3NoYWRvdy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWJ1dHRvbi90aGVtZS9tYXRlcmlhbC92YWFkaW4tYnV0dG9uLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgICAgIC8qIEZJWE1FKHBsYXRvc2hhKTogZml4IHRoZSBjb3JlIHN0eWxlcyBhbmQgcmVtb3ZlIHRoaXMgb3ZlcnJpZGUuICovXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICAvKiBGdWxsc2NyZWVuIFRvb2xiYXIgKi9cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi00ZHApO1xuICAgICAgfVxuXG4gICAgICAvKiBGSVhNRShwbGF0b3NoYSk6IGZpeCB0aGUgY29yZSBzdHlsZXMgYW5kIHJlbW92ZSB0aGlzIG92ZXJyaWRlLiAqL1xuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXTpub3QoW2Rlc2t0b3BdKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0sXG4gICAgICBbcGFydD1cInRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogJ21hdGVyaWFsLWljb25zJztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTpob3ZlcixcbiAgICAgIFtwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiXTpob3ZlcixcbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtY2xlYXIpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZ2dsZS1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLWNhbGVuZGFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtcGxheSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWljb24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbeWVhcnMtdmlzaWJsZV0pIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXTo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC8qIE1vbnRoIHNjcm9sbGVyICovXG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQ6IDMyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC8qIFllYXIgc2Nyb2xsZXIgKi9cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl06OmJlZm9yZSB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt5ZWFycy12aXNpYmxlXSkgW3BhcnQ9XCJ5ZWFyc1wiXTo6YWZ0ZXIge1xuICAgICAgICB0b3A6IGNhbGMoMjBweCArIDE2cHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHggLSAxNnB4KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyLW51bWJlclwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtc21hbGwtZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7IC8qIE5PVEUocGxhdG9zaGEpOiBjaG9zZW4gdG8gYWxpZ24geWVhcnMgdG8gbW9udGhzICovXG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhci1zZXBhcmF0b3JcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogY2FsYygwLjUgKiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQsIDgwcHgpIC0gMC41ICogMTBweCAtIDAuNSAqIDRweCkgYXV0bztcbiAgICAgIH1cblxuICAgICAgLyogQm90dG9tIEJhciAqL1xuXG4gICAgICBbcGFydD1cInRvb2xiYXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiXSB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZGF5LWJ1dHRvblwiXSB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZGF5LWJ1dHRvblwiXSxcbiAgICAgIFtwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiXSB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyc7XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvb3ZlcmxheS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyLW92ZXJsYXlcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1vdmVybGF5XCI+XG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIHtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogdmFyKC0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tKSAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSkpIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pW3JpZ2h0LWFsaWduZWRdKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCA0cHggNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSlbYm90dG9tLWFsaWduZWRdKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2Z1bGxzY3JlZW5dKVtzaG93LXdlZWstbnVtYmVyc10pIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIHdpZHRoOiAzOTZweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjb250ZW50XCJdIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMnO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LmpzJztcbmltcG9ydCAnLi92YWFkaW4tbW9udGgtY2FsZW5kYXIuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyXCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cIm1hdGVyaWFsLWZpZWxkLWJ1dHRvblwiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLWNsZWFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jYWxlbmRhcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tZGF0ZS1waWNrZXIuanMnO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyLW1vbnRoLWNhbGVuZGFyXCIgdGhlbWUtZm9yPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGMoNTAlIC8gOCAtIDAuNWVtICsgOHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3Nob3ctd2Vlay1udW1iZXJzXSkge1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGMoNTAlIC8gOSAtIDAuNWVtICsgOHB4KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJtb250aC1oZWFkZXJcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWg2LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyXCJdLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1jYXB0aW9uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJ3ZWVrLW51bWJlclwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwid2Vla2RheVwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTQ7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBUb2RheSAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl1bdG9kYXldIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8qIEhvdmVyICovXG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogLTM7XG4gICAgICB9XG5cbiAgICAgIC8qIEhpZGUgZm9yIHRvdWNoIGRldmljZXMgKi9cbiAgICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgei1pbmRleDogLTQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogU2VsZWN0ZWQgKi9cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3NlbGVjdGVkXSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSlbc2VsZWN0ZWRdOjphZnRlcixcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICB6LWluZGV4OiAtMjtcbiAgICAgIH1cblxuICAgICAgLyogRm9jdXNlZCAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl06bm90KFtkaXNhYmxlZF0pW2ZvY3VzZWRdLFxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb250cmFzdC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSlbZm9jdXNlZF06OmFmdGVyLFxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKVtmb2N1c2VkXTo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1tb250aC1jYWxlbmRhci1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzJztcbiIsImNvbnN0IERFVl9NT0RFX0NPREVfUkVHRVhQID1cbiAgL1xcL1xcKlxcKlxccyt2YWFkaW4tZGV2LW1vZGU6c3RhcnQoW1xcc1xcU10qKXZhYWRpbi1kZXYtbW9kZTplbmRcXHMrXFwqXFwqXFwvL2k7XG5cbmNvbnN0IEZsb3dDbGllbnRzID0gd2luZG93LlZhYWRpbiAmJiB3aW5kb3cuVmFhZGluLkZsb3cgJiYgd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHM7XG5cbmZ1bmN0aW9uIGlzTWluaWZpZWQoKSB7XG4gIGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgLyoqIHZhYWRpbi1kZXYtbW9kZTpzdGFydFxuICAgIHJldHVybiBmYWxzZTtcbiAgICB2YWFkaW4tZGV2LW1vZGU6ZW5kICoqL1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiB1bmNvbW1lbnRBbmRSdW4odGVzdCk7XG59XG5cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnRNb2RlKCkge1xuICB0cnkge1xuICAgIGlmIChpc0ZvcmNlZERldmVsb3BtZW50TW9kZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxob3N0KCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoRmxvd0NsaWVudHMpIHtcbiAgICAgIHJldHVybiAhaXNGbG93UHJvZHVjdGlvbk1vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTWluaWZpZWQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFNvbWUgZXJyb3IgaW4gdGhpcyBjb2RlLCBhc3N1bWUgcHJvZHVjdGlvbiBzbyBubyBmdXJ0aGVyIGFjdGlvbnMgd2lsbCBiZSB0YWtlblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0ZvcmNlZERldmVsb3BtZW50TW9kZSgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmFhZGluLmRldmVsb3BtZW50bW9kZS5mb3JjZVwiKTtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbGhvc3QoKSB7XG4gIHJldHVybiAoW1wibG9jYWxob3N0XCIsXCIxMjcuMC4wLjFcIl0uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpID49IDApO1xufVxuXG5mdW5jdGlvbiBpc0Zsb3dQcm9kdWN0aW9uTW9kZSgpIHtcbiAgaWYgKEZsb3dDbGllbnRzKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk1vZGVBcHBzID0gT2JqZWN0LmtleXMoRmxvd0NsaWVudHMpXG4gICAgICAubWFwKGtleSA9PiBGbG93Q2xpZW50c1trZXldKVxuICAgICAgLmZpbHRlcihjbGllbnQgPT4gY2xpZW50LnByb2R1Y3Rpb25Nb2RlKTtcbiAgICBpZiAocHJvZHVjdGlvbk1vZGVBcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSBERVZfTU9ERV9DT0RFX1JFR0VYUC5leGVjKGNhbGxiYWNrLnRvU3RyaW5nKCkpO1xuICBpZiAobWF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVxdWlyZXMgQ1NQOiBzY3JpcHQtc3JjICd1bnNhZmUtZXZhbCdcbiAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKG1hdGNoWzFdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlYXQgdGhlIGV4Y2VwdGlvblxuICAgICAgY29uc29sZS5sb2coJ3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yOiB1bmNvbW1lbnRBbmRSdW4oKSBmYWlsZWQnLCBlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhhcmdzKTtcbn1cblxuLy8gQSBndWFyZCBhZ2FpbnN0IHBvbHltZXItbW9kdWxpemVyIHJlbW92aW5nIHRoZSB3aW5kb3cuVmFhZGluXG4vLyBpbml0aWFsaXphdGlvbiBhYm92ZS5cbndpbmRvd1snVmFhZGluJ10gPSB3aW5kb3dbJ1ZhYWRpbiddIHx8IHt9O1xuXG4vKipcbiAqIEluc3BlY3RzIHRoZSBzb3VyY2UgY29kZSBvZiB0aGUgZ2l2ZW4gYGNhbGxiYWNrYCBmdW5jdGlvbiBmb3JcbiAqIHNwZWNpYWxseS1tYXJrZWQgX2NvbW1lbnRlZF8gY29kZS4gSWYgc3VjaCBjb21tZW50ZWQgY29kZSBpcyBmb3VuZCBpbiB0aGVcbiAqIGNhbGxiYWNrIHNvdXJjZSwgdW5jb21tZW50cyBhbmQgcnVucyB0aGF0IGNvZGUgaW5zdGVhZCBvZiB0aGUgY2FsbGJhY2tcbiAqIGl0c2VsZi4gT3RoZXJ3aXNlIHJ1bnMgdGhlIGNhbGxiYWNrIGFzIGlzLlxuICpcbiAqIFRoZSBvcHRpb25hbCBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbnRvIHRoZSBjYWxsYmFjayAvIHVuY29tbWVudGVkIGNvZGUsXG4gKiB0aGUgcmVzdWx0IGlzIHJldHVybmVkLlxuICpcbiAqIFNlZSB0aGUgYGlzTWluaWZpZWQoKWAgZnVuY3Rpb24gc291cmNlIGNvZGUgaW4gdGhpcyBmaWxlIGZvciBhbiBleGFtcGxlLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHJ1bklmRGV2ZWxvcG1lbnRNb2RlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGFyZ3MpIHtcbiAgaWYgKHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlKSB7XG4gICAgcmV0dXJuIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncyk7XG4gIH1cbn07XG5cbmlmICh3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlID0gaXNEZXZlbG9wbWVudE1vZGUoKTtcbn1cbiIsImltcG9ydCB7IGlkbGVQZXJpb2QgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyBlbnF1ZXVlRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmx1c2guanMnO1xuXG5pbXBvcnQgeyB1c2FnZVN0YXRpc3RpY3MgfSBmcm9tICdAdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLmpzJztcbmlmICghd2luZG93LlZhYWRpbikge1xuICB3aW5kb3dbJ1ZhYWRpbiddID0ge307XG59XG5cbi8qKlxuICogQXJyYXkgb2YgVmFhZGluIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgdGhhdCBoYXZlIGJlZW4gZmluYWxpemVkLlxuICovXG53aW5kb3dbJ1ZhYWRpbiddLnJlZ2lzdHJhdGlvbnMgPSB3aW5kb3cuVmFhZGluLnJlZ2lzdHJhdGlvbnMgfHwgW107XG5cbi8vIFVzZSB0aGUgaGFjayB0byBwcmV2ZW50IHBvbHltZXItbW9kdWxpemVyIGZyb20gY29udmVydGluZyB0byBleHBvcnRzXG53aW5kb3dbJ1ZhYWRpbiddLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrID0gd2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGVDYWxsYmFjayB8fCB7fTtcbndpbmRvd1snVmFhZGluJ10uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2tbJ3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzJ10gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHVzYWdlU3RhdGlzdGljcykge1xuICAgIHVzYWdlU3RhdGlzdGljcygpO1xuICB9XG59O1xuXG5sZXQgc3RhdHNKb2I7XG5cbmNvbnN0IHJlZ2lzdGVyZWQgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudE1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5FbGVtZW50TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIHN1cGVyLmZpbmFsaXplKCk7XG5cbiAgICBjb25zdCB7aXN9ID0gdGhpcztcblxuICAgIC8vIFJlZ2lzdGVycyBhIGNsYXNzIHByb3RvdHlwZSBmb3IgdGVsZW1ldHJ5IHB1cnBvc2VzLlxuICAgIGlmIChpcyAmJiAhcmVnaXN0ZXJlZC5oYXMoaXMpKSB7XG4gICAgICB3aW5kb3cuVmFhZGluLnJlZ2lzdHJhdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgIHJlZ2lzdGVyZWQuYWRkKGlzKTtcblxuICAgICAgaWYgKHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2spIHtcbiAgICAgICAgc3RhdHNKb2IgPSBEZWJvdW5jZXIuZGVib3VuY2Uoc3RhdHNKb2IsXG4gICAgICAgICAgaWRsZVBlcmlvZCwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGVDYWxsYmFja1sndmFhZGluLXVzYWdlLXN0YXRpc3RpY3MnXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZW5xdWV1ZURlYm91bmNlcihzdGF0c0pvYik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3R5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZhYWRpbiBjb21wb25lbnRzIHJlcXVpcmUgdGhlIFwic3RhbmRhcmRzIG1vZGVcIiBkZWNsYXJhdGlvbi4gUGxlYXNlIGFkZCA8IURPQ1RZUEUgaHRtbD4gdG8gdGhlIEhUTUwgZG9jdW1lbnQuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgJy4uL2ZvbnQtaWNvbnMuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtZmllbGQtYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKiBUT0RPKHBsYXRvc2hhKTogYWxpZ24gaWNvbiBzaXplcyB3aXRoIG90aGVyIGVsZW1lbnRzICovXG4gICAgICBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW3JlYWRvbmx5XSkpIFtwYXJ0XFwkPVwiYnV0dG9uXCJdIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtyZWFkb25seV0pKSBbcGFydFxcJD1cImJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnRcXCQ9XCJidXR0b25cIl0sXG4gICAgICA6aG9zdChbcmVhZG9ubHldKSBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydFxcJD1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi4vY29sb3IuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtcmVxdWlyZWQtZmllbGRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNzUlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmVxdWlyZWRdKSBbcGFydD1cImxhYmVsXCJdOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiICpcIjtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLyogTWFyZ2luIHRoYXQgZG9lc27igJl0IHJlc2VydmUgc3BhY2Ugd2hlbiB0aGVyZeKAmXMgbm8gZXJyb3IgbWVzc2FnZSAqL1xuICAgICAgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdOm5vdCg6ZW1wdHkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2ludmFsaWRdKSkgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBbcGFydD1cImVycm9yLW1lc3NhZ2VcIl0ge1xuICAgICAgICBhbmltYXRpb246IHJldmVhbCAwLjJzO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJldmVhbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5cbmltcG9ydCB7IENvbnRyb2xTdGF0ZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi5qcyc7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwidmFhZGluLXRleHQtZmllbGQtc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIwMDNcIjtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLyogU2l6ZSBhbmQgcG9zaXRpb24gdGhpcyBlbGVtZW50IG9uIHRoZSBzYW1lIHZlcnRpY2FsIHBvc2l0aW9uIGFzIHRoZSBpbnB1dC1maWVsZCBlbGVtZW50XG4gICAgICAgICAgIHRvIG1ha2UgdmVydGljYWwgYWxpZ24gZm9yIHRoZSBob3N0IGVsZW1lbnQgd29yayBhcyBleHBlY3RlZCAqL1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC52YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXIsXG4gICAgICAudmFhZGluLXRleHQtYXJlYS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgd2lkdGg6IHZhcigtLXZhYWRpbi10ZXh0LWZpZWxkLWRlZmF1bHQtd2lkdGgsIDEyZW0pO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdOmVtcHR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC52YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXIgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cblxuICAgICAgLyogUmVzZXQgdGhlIG5hdGl2ZSBpbnB1dCBzdHlsZXMgKi9cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLyogRGlzYWJsZSBkZWZhdWx0IGludmFsaWQgc3R5bGUgaW4gRmlyZWZveCAqL1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAvKiBTbG90dGVkIGJ5IHZhYWRpbi1zZWxlY3QtdGV4dC1maWVsZCAqL1xuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06Oi1tcy1jbGVhcixcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KTo6LW1zLWNsZWFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0ge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIuKclVwiO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuXG5jb25zdCBIT1NUX1BST1BTID0ge1xuICBkZWZhdWx0OiBbJ2xpc3QnLCAnYXV0b2ZvY3VzJywgJ3BhdHRlcm4nLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvcnJlY3QnLCAnbWF4bGVuZ3RoJyxcbiAgICAnbWlubGVuZ3RoJywgJ25hbWUnLCAncGxhY2Vob2xkZXInLCAnYXV0b2NvbXBsZXRlJywgJ3RpdGxlJ10sXG4gIGFjY2Vzc2libGU6IFsnZGlzYWJsZWQnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnaW52YWxpZCddXG59O1xuXG5jb25zdCBQUk9QX1RZUEUgPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0JyxcbiAgQUNDRVNTSUJMRTogJ2FjY2Vzc2libGUnXG59O1xuXG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db250cm9sU3RhdGVNaXhpblxuICovXG5leHBvcnQgY29uc3QgVGV4dEZpZWxkTWl4aW4gPSBzdWJjbGFzcyA9PiBjbGFzcyBWYWFkaW5UZXh0RmllbGRNaXhpbiBleHRlbmRzIENvbnRyb2xTdGF0ZU1peGluKHN1YmNsYXNzKSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgYXV0b21hdGljYWxseSBjb21wbGV0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAgICAgKiBMaXN0IG9mIGF2YWlsYWJsZSBvcHRpb25zIGF0OlxuICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItYXV0b2NvbXBsZXRlXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBpcyBhIHByb3BlcnR5IHN1cHBvcnRlZCBieSBTYWZhcmkgdGhhdCBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICAgICAgICogYXV0b2NvcnJlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgd2hlbiB0aGUgdXNlciBpcyBlbnRlcmluZy9lZGl0aW5nIHRoZSB0ZXh0LlxuICAgICAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICAgICAqIG9uOiBFbmFibGUgYXV0b2NvcnJlY3Rpb24uXG4gICAgICAgKiBvZmY6IERpc2FibGUgYXV0b2NvcnJlY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb3JyZWN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIGEgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IFNhZmFyaSBhbmQgQ2hyb21lIHRoYXQgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAgICAgICAqIGF1dG9jYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgZW5hYmxlZCB3aGVuIHRoZSB1c2VyIGlzIGVudGVyaW5nL2VkaXRpbmcgdGhlIHRleHQuXG4gICAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOlxuICAgICAgICogY2hhcmFjdGVyczogQ2hhcmFjdGVycyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIHdvcmRzOiBXb3JkcyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIHNlbnRlbmNlczogU2VudGVuY2VzIGNhcGl0YWxpemF0aW9uLlxuICAgICAgICogbm9uZTogTm8gY2FwaXRhbGl6YXRpb24uXG4gICAgICAgKi9cbiAgICAgIGF1dG9jYXBpdGFsaXplOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHNlbGVjdGVkIHdoZW4gdGhlIGZpZWxkIGdhaW5zIGZvY3VzLlxuICAgICAgICovXG4gICAgICBhdXRvc2VsZWN0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IHRoZSBjbGVhciBpY29uIHdoaWNoIGNsZWFycyB0aGUgaW5wdXQuXG4gICAgICAgKi9cbiAgICAgIGNsZWFyQnV0dG9uVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXJyb3IgdG8gc2hvdyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT2JqZWN0IHdpdGggdHJhbnNsYXRlZCBzdHJpbmdzIHVzZWQgZm9yIGxvY2FsaXphdGlvbi4gSGFzXG4gICAgICAgKiB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZSBhbmQgZGVmYXVsdCB2YWx1ZXM6XG4gICAgICAgKlxuICAgICAgICogYGBgXG4gICAgICAgKiB7XG4gICAgICAgKiAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBjbGVhciBpY29uIGJ1dHRvbiBhY2Nlc3NpYmxlIGxhYmVsXG4gICAgICAgKiAgIGNsZWFyOiAnQ2xlYXInXG4gICAgICAgKiB9XG4gICAgICAgKiBgYGBcbiAgICAgICAqL1xuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdHJpbmcgdXNlZCBmb3IgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBvYnNlcnZlcjogJ19sYWJlbENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtaW5sZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIGhpbnQgdG8gdGhlIHVzZXIgb2Ygd2hhdCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgY29udHJvbC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBtb2RpZnkgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHVzZXIgbXVzdCBmaWxsIGluIGEgdmFsdWUuXG4gICAgICAgKi9cbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICogSXQgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHRleHQgZmllbGQgaGFzIHZhbHVlLlxuICAgICAgICovXG4gICAgICBoYXNWYWx1ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBzZXQgdG8gdHJ1ZSwgdXNlciBpcyBwcmV2ZW50ZWQgZnJvbSB0eXBpbmcgYSB2YWx1ZSB0aGF0XG4gICAgICAgKiBjb25mbGljdHMgd2l0aCB0aGUgZ2l2ZW4gYHBhdHRlcm5gLlxuICAgICAgICovXG4gICAgICBwcmV2ZW50SW52YWxpZElucHV0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwYXR0ZXJuIG1hdGNoZWQgYWdhaW5zdCBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgdGhlIHVzZXIgaW5wdXRzLlxuICAgICAgICogV2hlbiBzZXQsIHRoZSBmaWVsZCB3aWxsIHByZXZlbnQ6XG4gICAgICAgKiAtIGBrZXlEb3duYCBldmVudHMgaWYgdGhlIGVudGVyZWQga2V5IGRvZXNuJ3QgbWF0Y2ggYC9eX2VuYWJsZWRDaGFyUGF0dGVybiQvYFxuICAgICAgICogLSBgcGFzdGVgIGV2ZW50cyBpZiB0aGUgcGFzdGVkIHRleHQgZG9lc24ndCBtYXRjaCBgL15fZW5hYmxlZENoYXJQYXR0ZXJuKiQvYFxuICAgICAgICogLSBgZHJvcGAgZXZlbnRzIGlmIHRoZSBkcm9wcGVkIHRleHQgZG9lc24ndCBtYXRjaCBgL15fZW5hYmxlZENoYXJQYXR0ZXJuKiQvYFxuICAgICAgICpcbiAgICAgICAqIEZvciBleGFtcGxlLCB0byBlbmFibGUgZW50ZXJpbmcgb25seSBudW1iZXJzIGFuZCBtaW51cyBzaWducyxcbiAgICAgICAqIGBfZW5hYmxlZENoYXJQYXR0ZXJuID0gXCJbXFxcXGQtXVwiYFxuICAgICAgICovXG4gICAgICBfZW5hYmxlZENoYXJQYXR0ZXJuOiBTdHJpbmcsXG5cbiAgICAgIF9sYWJlbElkOiBTdHJpbmcsXG5cbiAgICAgIF9lcnJvcklkOiBTdHJpbmcsXG5cbiAgICAgIF9pbnB1dElkOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFsnX3N0YXRlQ2hhbmdlZChkaXNhYmxlZCwgcmVhZG9ubHksIGNsZWFyQnV0dG9uVmlzaWJsZSwgaGFzVmFsdWUpJyxcbiAgICAgICdfaG9zdFByb3BzQ2hhbmdlZCgnICsgSE9TVF9QUk9QUy5kZWZhdWx0LmpvaW4oJywgJykgKyAnKScsXG4gICAgICAnX2hvc3RBY2Nlc3NpYmxlUHJvcHNDaGFuZ2VkKCcgKyBIT1NUX1BST1BTLmFjY2Vzc2libGUuam9pbignLCAnKSArICcpJyxcbiAgICAgICdfZ2V0QWN0aXZlRXJyb3JJZChpbnZhbGlkLCBlcnJvck1lc3NhZ2UsIF9lcnJvcklkKScsXG4gICAgICAnX2dldEFjdGl2ZUxhYmVsSWQobGFiZWwsIF9sYWJlbElkLCBfaW5wdXRJZCknLFxuICAgICAgJ19fb2JzZXJ2ZU9mZnNldEhlaWdodChlcnJvck1lc3NhZ2UsIGludmFsaWQsIGxhYmVsKScsXG4gICAgICAnX19lbmFibGVkQ2hhclBhdHRlcm5DaGFuZ2VkKF9lbmFibGVkQ2hhclBhdHRlcm4pJ1xuICAgIF07XG4gIH1cblxuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNsb3R0ZWQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9W3Nsb3Q9XCIke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVwiXWApO1xuICAgIGlmIChzbG90dGVkKSB7XG4gICAgICByZXR1cm4gc2xvdHRlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cInZhbHVlXCJdJyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBpbnB1dEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNFbGVtZW50O1xuICB9XG5cbiAgZ2V0IF9zbG90dGVkVGFnTmFtZSgpIHtcbiAgICByZXR1cm4gJ2lucHV0JztcbiAgfVxuXG4gIF9jcmVhdGVDb25zdHJhaW50c09ic2VydmVyKCkge1xuICAgIC8vIFRoaXMgY29tcGxleCBvYnNlcnZlciBuZWVkcyB0byBiZSBhZGRlZCBkeW5hbWljYWxseSBoZXJlIChpbnN0ZWFkIG9mIGRlZmluaW5nIGl0IGFib3ZlIGluIHRoZSBgZ2V0IG9ic2VydmVycygpYClcbiAgICAvLyBzbyB0aGF0IGl0IHJ1bnMgYWZ0ZXIgY29tcGxleCBvYnNlcnZlcnMgb2YgaW5oZXJpdGluZyBjbGFzc2VzLiBPdGhlcndpc2UgZS5nLiBgX3N0ZXBPck1pbkNoYW5nZWQoKWAgb2JzZXJ2ZXIgb2ZcbiAgICAvLyB2YWFkaW4tbnVtYmVyLWZpZWxkIHdvdWxkIHJ1biBhZnRlciB0aGlzIGFuZCB0aGUgYG1pbmAgYW5kIGBzdGVwYCBwcm9wZXJ0aWVzIHdvdWxkIG5vdCB5ZXQgYmUgcHJvcGFnYXRlZCB0b1xuICAgIC8vIHRoZSBgaW5wdXRFbGVtZW50YCB3aGVuIHRoaXMgcnVucy5cbiAgICB0aGlzLl9jcmVhdGVNZXRob2RPYnNlcnZlcignX2NvbnN0cmFpbnRzQ2hhbmdlZChyZXF1aXJlZCwgbWlubGVuZ3RoLCBtYXhsZW5ndGgsIHBhdHRlcm4pJyk7XG4gIH1cblxuICBfb25JbnB1dChlKSB7XG4gICAgaWYgKHRoaXMuX19wcmV2ZW50SW5wdXQpIHtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLl9fcHJldmVudElucHV0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJldmVudEludmFsaWRJbnB1dCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudDtcbiAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMudmFsdWUgfHwgJyc7XG4gICAgICAgIC8vIGFkZCBpbnB1dC1wcmV2ZW50ZWQgYXR0cmlidXRlIGZvciAyMDBtc1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaW5wdXQtcHJldmVudGVkJywgJycpO1xuICAgICAgICB0aGlzLl9pbnB1dERlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgICB0aGlzLl9pbnB1dERlYm91bmNlcixcbiAgICAgICAgICB0aW1lT3V0LmFmdGVyKDIwMCksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdpbnB1dC1wcmV2ZW50ZWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZS5fX2Zyb21DbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5fX3VzZXJJbnB1dCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIC8vIE5PVEUoeXVyaXkpOiBXb3JrYXJvdW5kIG5lZWRlZCBmb3IgSUUxMSBhbmQgRWRnZSBmb3IgcHJvcGVyIGRpc3BsYXlpbmdcbiAgLy8gb2YgdGhlIGNsZWFyIGJ1dHRvbiBpbnN0ZWFkIG9mIHNldHRpbmcgZGlzcGxheSBwcm9wZXJ0eSBmb3IgaXQgZGVwZW5kaW5nIG9uIHN0YXRlLlxuICBfc3RhdGVDaGFuZ2VkKGRpc2FibGVkLCByZWFkb25seSwgY2xlYXJCdXR0b25WaXNpYmxlLCBoYXNWYWx1ZSkge1xuICAgIGlmICghZGlzYWJsZWQgJiZcbiAgICAgICAgIXJlYWRvbmx5ICYmXG4gICAgICAgIGNsZWFyQnV0dG9uVmlzaWJsZSAmJlxuICAgICAgICBoYXNWYWx1ZVxuICAgICkge1xuICAgICAgdGhpcy4kLmNsZWFyQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZShlKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlQ2xlYXJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbiB0aGUgU2hhZG93IERPTSwgdGhlIGBjaGFuZ2VgIGV2ZW50IGlzIG5vdCBsZWFrZWQgaW50byB0aGVcbiAgICAvLyBhbmNlc3RvciB0cmVlLCBzbyB3ZSBtdXN0IGRvIHRoaXMgbWFudWFsbHkuXG4gICAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBzb3VyY2VFdmVudDogZVxuICAgICAgfSxcbiAgICAgIGJ1YmJsZXM6IGUuYnViYmxlcyxcbiAgICAgIGNhbmNlbGFibGU6IGUuY2FuY2VsYWJsZSxcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIC8vIHNldHRpbmcgaW5pdGlhbCB2YWx1ZSB0byBlbXB0eSBzdHJpbmcsIHNraXAgdmFsaWRhdGlvblxuICAgIGlmIChuZXdWYWwgPT09ICcnICYmIG9sZFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbCAhPT0gJycgJiYgbmV3VmFsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX191c2VySW5wdXQpIHtcbiAgICAgIHRoaXMuX191c2VySW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IG5ld1ZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9sYWJlbENoYW5nZWQobGFiZWwpIHtcbiAgICBpZiAobGFiZWwgIT09ICcnICYmIGxhYmVsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdoYXMtbGFiZWwnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdoYXMtbGFiZWwnKTtcbiAgICB9XG4gIH1cblxuICBfb25TbG90Q2hhbmdlKCkge1xuICAgIGNvbnN0IHNsb3R0ZWQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9W3Nsb3Q9XCIke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVwiXWApO1xuXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc2xvdHRlZCAmJiAhdGhpcy5fc2xvdHRlZElucHV0KSB7XG4gICAgICB0aGlzLl92YWxpZGF0ZVNsb3R0ZWRWYWx1ZShzbG90dGVkKTtcbiAgICAgIHRoaXMuX2FkZElucHV0TGlzdGVuZXJzKHNsb3R0ZWQpO1xuICAgICAgdGhpcy5fYWRkSUVMaXN0ZW5lcnMoc2xvdHRlZCk7XG4gICAgICB0aGlzLl9zbG90dGVkSW5wdXQgPSBzbG90dGVkO1xuICAgIH0gZWxzZSBpZiAoIXNsb3R0ZWQgJiYgdGhpcy5fc2xvdHRlZElucHV0KSB7XG4gICAgICB0aGlzLl9yZW1vdmVJbnB1dExpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgICAgdGhpcy5fcmVtb3ZlSUVMaXN0ZW5lcnModGhpcy5fc2xvdHRlZElucHV0KTtcbiAgICAgIHRoaXMuX3Nsb3R0ZWRJbnB1dCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhQUk9QX1RZUEUpLm1hcChrZXkgPT4gUFJPUF9UWVBFW2tleV0pLmZvckVhY2godHlwZSA9PlxuICAgICAgdGhpcy5fcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoSE9TVF9QUk9QU1t0eXBlXS5tYXAoYXR0ciA9PiB0aGlzW2F0dHJdKSwgdHlwZSkpO1xuICB9XG5cbiAgX2hvc3RQcm9wc0NoYW5nZWQoLi4uYXR0cmlidXRlc1ZhbHVlcykge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUhvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNWYWx1ZXMsIFBST1BfVFlQRS5ERUZBVUxUKTtcbiAgfVxuXG4gIF9ob3N0QWNjZXNzaWJsZVByb3BzQ2hhbmdlZCguLi5hdHRyaWJ1dGVzVmFsdWVzKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlc1ZhbHVlcywgUFJPUF9UWVBFLkFDQ0VTU0lCTEUpO1xuICB9XG5cbiAgX3ZhbGlkYXRlU2xvdHRlZFZhbHVlKHNsb3R0ZWQpIHtcbiAgICBpZiAoc2xvdHRlZC52YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdQbGVhc2UgZGVmaW5lIHZhbHVlIG9uIHRoZSB2YWFkaW4tdGV4dC1maWVsZCBjb21wb25lbnQhJyk7XG4gICAgICBzbG90dGVkLnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgX3Byb3BhZ2F0ZUhvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNWYWx1ZXMsIHR5cGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gSE9TVF9QUk9QU1t0eXBlXTtcblxuICAgIGlmICh0eXBlID09PSAnYWNjZXNzaWJsZScpIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWVzLmZvckVhY2goKGF0dHIsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX3NldE9yVG9nZ2xlQXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNWYWx1ZXNbaW5kZXhdLCBpbnB1dCk7XG4gICAgICAgIHRoaXMuX3NldE9yVG9nZ2xlQXR0cmlidXRlKGBhcmlhLSR7YXR0cn1gLCBhdHRyaWJ1dGVzVmFsdWVzW2luZGV4XSwgaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWVzLmZvckVhY2goKGF0dHIsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX3NldE9yVG9nZ2xlQXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNWYWx1ZXNbaW5kZXhdLCBpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2V0T3JUb2dnbGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG5vZGUpIHtcbiAgICBpZiAoIW5hbWUgfHwgIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgPyAnJyA6IHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgX2NvbnN0cmFpbnRzQ2hhbmdlZChyZXF1aXJlZCwgbWlubGVuZ3RoLCBtYXhsZW5ndGgsIHBhdHRlcm4pIHtcbiAgICBpZiAoIXRoaXMuaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcmVxdWlyZWQgJiYgIW1pbmxlbmd0aCAmJiAhbWF4bGVuZ3RoICYmICFwYXR0ZXJuKSB7XG4gICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgc2F0aXNmaWVzIGFsbCBjb25zdHJhaW50cyAoaWYgYW55KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgfHwgdGhpcy5wYXR0ZXJuIHx8IHRoaXMubWF4bGVuZ3RoIHx8IHRoaXMubWlubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIXRoaXMuaW52YWxpZDtcbiAgICB9XG4gIH1cblxuICBfYWRkSW5wdXRMaXN0ZW5lcnMobm9kZSkge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uSW5wdXQpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYm91bmRPbkJsdXIpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLl9ib3VuZE9uUGFzdGUpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX2JvdW5kT25Ecm9wKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0JywgdGhpcy5fYm91bmRPbkJlZm9yZUlucHV0KTtcbiAgfVxuXG4gIF9yZW1vdmVJbnB1dExpc3RlbmVycyhub2RlKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25JbnB1dCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1cik7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuX2JvdW5kT25QYXN0ZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fYm91bmRPbkRyb3ApO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5wdXQnLCB0aGlzLl9ib3VuZE9uQmVmb3JlSW5wdXQpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuX2NyZWF0ZUNvbnN0cmFpbnRzT2JzZXJ2ZXIoKTtcblxuICAgIHRoaXMuX2JvdW5kT25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uUGFzdGUgPSB0aGlzLl9vblBhc3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQmVmb3JlSW5wdXQgPSB0aGlzLl9vbkJlZm9yZUlucHV0LmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCBkZWZhdWx0SW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJ2YWx1ZVwiXScpO1xuICAgIHRoaXMuX3Nsb3R0ZWRJbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1bc2xvdD1cIiR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9XCJdYCk7XG4gICAgdGhpcy5fYWRkSW5wdXRMaXN0ZW5lcnMoZGVmYXVsdElucHV0KTtcbiAgICB0aGlzLl9hZGRJRUxpc3RlbmVycyhkZWZhdWx0SW5wdXQpO1xuICAgIGlmICh0aGlzLl9zbG90dGVkSW5wdXQpIHtcbiAgICAgIHRoaXMuX2FkZElFTGlzdGVuZXJzKHRoaXMuX3Nsb3R0ZWRJbnB1dCk7XG4gICAgICB0aGlzLl9hZGRJbnB1dExpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlucHV0XCJdLCBbbmFtZT1cInRleHRhcmVhXCJdJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5fb25TbG90Q2hhbmdlLmJpbmQodGhpcykpO1xuXG4gICAgaWYgKCEod2luZG93LlNoYWR5Q1NTICYmIHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3MpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLl92YWx1ZUNsZWFyaW5nID0gdHJ1ZSk7XG4gICAgdGhpcy4kLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLl92YWx1ZUNsZWFyaW5nID0gZmFsc2UpO1xuICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xlYXJCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG5cbiAgICB2YXIgdW5pcXVlSWQgPSBUZXh0RmllbGRNaXhpbi5fdW5pcXVlSWQgPSAxICsgVGV4dEZpZWxkTWl4aW4uX3VuaXF1ZUlkIHx8IDA7XG4gICAgdGhpcy5fZXJyb3JJZCA9IGAke3RoaXMuY29uc3RydWN0b3IuaXN9LWVycm9yLSR7dW5pcXVlSWR9YDtcbiAgICB0aGlzLl9sYWJlbElkID0gYCR7dGhpcy5jb25zdHJ1Y3Rvci5pc30tbGFiZWwtJHt1bmlxdWVJZH1gO1xuICAgIHRoaXMuX2lucHV0SWQgPSBgJHt0aGlzLmNvbnN0cnVjdG9yLmlzfS1pbnB1dC0ke3VuaXF1ZUlkfWA7XG5cbiAgICAvLyBMdW1vIHRoZW1lIGRlZmluZXMgYSBtYXgtaGVpZ2h0IHRyYW5zaXRpb24gZm9yIHRoZSBcImVycm9yLW1lc3NhZ2VcIlxuICAgIC8vIHBhcnQgb24gaW52YWxpZCBzdGF0ZSBjaGFuZ2UuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwiZXJyb3ItbWVzc2FnZVwiXScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX29ic2VydmVPZmZzZXRIZWlnaHQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgKiBgPGlyb24tZm9ybT5gIHVzZXMgdGhpcyB0byBjaGVjayB0aGUgdmFsaWRpdHkgZm9yIGFsbCBpdHMgZWxlbWVudHMuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHZhbGlkLlxuICAgKi9cbiAgdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuICEodGhpcy5pbnZhbGlkID0gIXRoaXMuY2hlY2tWYWxpZGl0eSgpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgfVxuXG4gIF9vbkJsdXIoKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuYXV0b3NlbGVjdCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAvLyBpT1MgOSB3b3JrYXJvdW5kOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzQzNjU3NFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBUaGUgd29ya2Fyb3VuZCBtYXkgY2F1c2UgZXJyb3JzIG9uIGRpZmZlcmVudCBpbnB1dCB0eXBlcy5cbiAgICAgICAgICAvLyBOZWVkcyB0byBiZSBzdXBwcmVzc2VkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi9mbG93L2lzc3Vlcy82MDcwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNsZWFyQnV0dG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBOT1RFKHl1cml5KTogVGhpcyBsaW5lIHdvbid0IGFmZmVjdCBmb2N1cyBvbiB0aGUgaG9zdC4gQ2Fubm90IGJlIHByb3Blcmx5IHRlc3RlZC5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl92YWx1ZUNsZWFyaW5nID0gZmFsc2U7XG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSkge1xuICAgICAgLy8gRGlzYWJsZSBJRSBpbnB1dFwiIGV2ZW50IHByZXZlbnRpb24gaGVyZSwgd2Ugd2FudCB0aGUgaW5wdXQgZXZlbnQgZnJvbVxuICAgICAgLy8gYmVsb3cgdG8gcHJvcGFnYXRlIG5vcm1hbGx5LlxuICAgICAgdGhpcy5fX3ByZXZlbnRJbnB1dCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pO1xuICAgIGlucHV0RXZlbnQuX19mcm9tQ2xlYXJCdXR0b24gPSB0cnVlO1xuICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnLCB7YnViYmxlczogIXRoaXMuX3Nsb3R0ZWRJbnB1dH0pO1xuICAgIGNoYW5nZUV2ZW50Ll9fZnJvbUNsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGlucHV0RXZlbnQpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuICB9XG5cbiAgX29uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5jbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgIGNvbnN0IGRpc3BhdGNoQ2hhbmdlID0gISF0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgZGlzcGF0Y2hDaGFuZ2UgJiYgdGhpcy5pbnB1dEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiAhdGhpcy5fc2xvdHRlZElucHV0fSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbmFibGVkQ2hhclBhdHRlcm4gJiYgIXRoaXMuX19zaG91bGRBY2NlcHRLZXkoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfX3Nob3VsZEFjY2VwdEtleShldmVudCkge1xuICAgIHJldHVybiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5KVxuICAgICAgfHwgIWV2ZW50LmtleSAvLyBhbGxvdyB0eXBpbmcgYW55dGhpbmcgaWYgZXZlbnQua2V5IGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHx8IGV2ZW50LmtleS5sZW5ndGggIT09IDEgLy8gYWxsb3cgXCJCYWNrc3BhY2VcIiwgXCJBcnJvd0xlZnRcIiBldGMuXG4gICAgICB8fCB0aGlzLl9fZW5hYmxlZENoYXJSZWdFeHAudGVzdChldmVudC5rZXkpO1xuICB9XG5cbiAgX29uUGFzdGUoZSkge1xuICAgIGlmICh0aGlzLl9lbmFibGVkQ2hhclBhdHRlcm4pIHtcbiAgICAgIGNvbnN0IHBhc3RlZFRleHQgPSAoZS5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICBpZiAoIXRoaXMuX19lbmFibGVkVGV4dFJlZ0V4cC50ZXN0KHBhc3RlZFRleHQpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25Ecm9wKGUpIHtcbiAgICBpZiAodGhpcy5fZW5hYmxlZENoYXJQYXR0ZXJuKSB7XG4gICAgICBjb25zdCBkcmFnZ2VkVGV4dCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgIGlmICghdGhpcy5fX2VuYWJsZWRUZXh0UmVnRXhwLnRlc3QoZHJhZ2dlZFRleHQpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25CZWZvcmVJbnB1dChlKSB7XG4gICAgLy8gVGhlIGBiZWZvcmVpbnB1dGAgZXZlbnQgY292ZXJzIGFsbCB0aGUgY2FzZXMgZm9yIGBfZW5hYmxlZENoYXJQYXR0ZXJuYDoga2V5Ym9hcmQsIHBhc3RpbmcgYW5kIGRyb3BwaW5nLFxuICAgIC8vIGJ1dCBpdCBpcyBzdGlsbCBleHBlcmltZW50YWwgdGVjaG5vbG9neSBzbyB3ZSBjYW4ndCByZWx5IG9uIGl0LiBJdCdzIHVzZWQgaGVyZSBqdXN0IGFzIGFuIGFkZGl0aW9uYWwgY2hlY2ssXG4gICAgLy8gYmVjYXVzZSBpdCBzZWVtcyB0byBiZSB0aGUgb25seSB3YXkgdG8gZGV0ZWN0IGFuZCBwcmV2ZW50IHNwZWNpZmljIGtleXMgb24gbW9iaWxlIGRldmljZXMuIFNlZSBpc3N1ZSAjNDI5LlxuICAgIGlmICh0aGlzLl9lbmFibGVkQ2hhclBhdHRlcm4gJiYgZS5kYXRhICYmICF0aGlzLl9fZW5hYmxlZFRleHRSZWdFeHAudGVzdChlLmRhdGEpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX19lbmFibGVkQ2hhclBhdHRlcm5DaGFuZ2VkKF9lbmFibGVkQ2hhclBhdHRlcm4pIHtcbiAgICB0aGlzLl9fZW5hYmxlZENoYXJSZWdFeHAgPSBfZW5hYmxlZENoYXJQYXR0ZXJuICYmIG5ldyBSZWdFeHAoJ14nICsgX2VuYWJsZWRDaGFyUGF0dGVybiArICckJyk7XG4gICAgdGhpcy5fX2VuYWJsZWRUZXh0UmVnRXhwID0gX2VuYWJsZWRDaGFyUGF0dGVybiAmJiBuZXcgUmVnRXhwKCdeJyArIF9lbmFibGVkQ2hhclBhdHRlcm4gKyAnKiQnKTtcbiAgfVxuXG4gIF9hZGRJRUxpc3RlbmVycyhub2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSkge1xuICAgICAgLy8gSUUxMSBkaXNwYXRjaGVzIGBpbnB1dGAgZXZlbnQgaW4gZm9sbG93aW5nIGNhc2VzOlxuICAgICAgLy8gLSBmb2N1cyBvciBibHVyLCB3aGVuIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSBpcyBzZXRcbiAgICAgIC8vIC0gcGxhY2Vob2xkZXIgYXR0cmlidXRlIHZhbHVlIGNoYW5nZWRcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEwMTIyMC9cbiAgICAgIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3ByZXZlbnRJbnB1dCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fX3ByZXZlbnRJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCk7XG4gICAgICB0aGlzLl9jcmVhdGVQcm9wZXJ0eU9ic2VydmVyKCdwbGFjZWhvbGRlcicsIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgX3JlbW92ZUlFTGlzdGVuZXJzKG5vZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC8pKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgX2dldEFjdGl2ZUVycm9ySWQoaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBlcnJvcklkKSB7XG4gICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLFxuICAgICAgKGVycm9yTWVzc2FnZSAmJiBpbnZhbGlkID8gZXJyb3JJZCA6IHVuZGVmaW5lZCksXG4gICAgICB0aGlzLmZvY3VzRWxlbWVudCk7XG4gIH1cblxuICBfZ2V0QWN0aXZlTGFiZWxJZChsYWJlbCwgX2xhYmVsSWQsIF9pbnB1dElkKSB7XG4gICAgbGV0IGlkcyA9IF9pbnB1dElkO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgaWRzID0gYCR7X2xhYmVsSWR9ICR7X2lucHV0SWR9YDtcbiAgICB9XG4gICAgdGhpcy5mb2N1c0VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBpZHMpO1xuICB9XG5cbiAgX2dldEVycm9yTWVzc2FnZUFyaWFIaWRkZW4oaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBlcnJvcklkKSB7XG4gICAgcmV0dXJuICghKGVycm9yTWVzc2FnZSAmJiBpbnZhbGlkID8gZXJyb3JJZCA6IHVuZGVmaW5lZCkpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZGlzcGF0Y2hJcm9uUmVzaXplRXZlbnRJZk5lZWRlZChzaXplUHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHByZXZpb3VzU2l6ZVByb3BlcnR5TmFtZSA9ICdfX3ByZXZpb3VzJyArIHNpemVQcm9wZXJ0eU5hbWU7XG4gICAgaWYgKHRoaXNbcHJldmlvdXNTaXplUHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHRoaXNbcHJldmlvdXNTaXplUHJvcGVydHlOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdpcm9uLXJlc2l6ZScsIHtidWJibGVzOiB0cnVlfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpc1twcmV2aW91c1NpemVQcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gIH1cblxuICBfX29ic2VydmVPZmZzZXRIZWlnaHQoKSB7XG4gICAgdGhpcy5fZGlzcGF0Y2hJcm9uUmVzaXplRXZlbnRJZk5lZWRlZCgnSGVpZ2h0JywgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhwcm9wLCBvbGRWYWwsIG5ld1ZhbCkge1xuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhwcm9wLCBvbGRWYWwsIG5ld1ZhbCk7XG4gICAgLy8gTmVlZGVkIHVudGlsIEVkZ2UgaGFzIENTUyBDdXN0b20gUHJvcGVydGllcyAocHJlc2VudCBpbiBFZGdlIFByZXZpZXcpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCEod2luZG93LlNoYWR5Q1NTICYmIHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3MpICYmXG4gICAgICAvXihmb2N1c2VkfGZvY3VzLXJpbmd8aW52YWxpZHxkaXNhYmxlZHxwbGFjZWhvbGRlcnxoYXMtdmFsdWUpJC8udGVzdChwcm9wKSkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgaGFzIGFuIGlzc3VlIHdpdGggcmVwYWludGluZyBzaGFkb3cgcm9vdCBlbGVtZW50IHN0eWxlcyB3aGVuIGEgaG9zdCBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAvLyBOZWVkIHRoaXMgd29ya2Fyb3VuZCAodG9nZ2xlIGFueSBpbmxpbmUgY3NzIHByb3BlcnR5IG9uIGFuZCBvZmYpIHVudGlsIHRoZSBpc3N1ZSBnZXRzIGZpeGVkLlxuICAgIGNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNTYWZhcmkgJiYgdGhpcy5yb290KSB7XG4gICAgICBjb25zdCBXRUJLSVRfUFJPUEVSVFkgPSAnLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5JztcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlW1dFQktJVF9QUk9QRVJUWV0gPSAndmlzaWJsZSc7XG4gICAgICAgIGVsLnN0eWxlW1dFQktJVF9QUk9QRVJUWV0gPSAnJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGNvbW1pdHMgYSB2YWx1ZSBjaGFuZ2UuXG4gICAqXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQgYnkgdGhlIHVzZXI6IG9uIGV2ZXJ5IHR5cGluZyBrZXlzdHJva2UsXG4gICAqIGFuZCB0aGUgdmFsdWUgaXMgY2xlYXJlZCB1c2luZyB0aGUgY2xlYXIgYnV0dG9uLlxuICAgKlxuICAgKiBAZXZlbnQgaW5wdXRcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgY2hhbmdlcy5cbiAgICpcbiAgICogQGV2ZW50IGlyb24tcmVzaXplXG4gICAqL1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBUZXh0RmllbGRNaXhpbiB9IGZyb20gJy4vdmFhZGluLXRleHQtZmllbGQtbWl4aW4uanMnO1xuaW1wb3J0IHsgRWxlbWVudE1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tZWxlbWVudC1taXhpbi92YWFkaW4tZWxlbWVudC1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG4vKipcbiAqIGA8dmFhZGluLXRleHQtZmllbGQ+YCBpcyBhIFdlYiBDb21wb25lbnQgZm9yIHRleHQgZmllbGQgY29udHJvbCBpbiBmb3Jtcy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLXRleHQtZmllbGQgbGFiZWw9XCJGaXJzdCBOYW1lXCI+XG4gKiA8L3ZhYWRpbi10ZXh0LWZpZWxkPlxuICogYGBgXG4gKlxuICogIyMjIFByZWZpeGVzIGFuZCBzdWZmaXhlc1xuICpcbiAqIFRoZXNlIGFyZSBjaGlsZCBlbGVtZW50cyBvZiBhIGA8dmFhZGluLXRleHQtZmllbGQ+YCB0aGF0IGFyZSBkaXNwbGF5ZWRcbiAqIGlubGluZSB3aXRoIHRoZSBpbnB1dCwgYmVmb3JlIG9yIGFmdGVyLlxuICogSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmUgY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBzbG90XG4gKiBhdHRyaWJ1dGUgc2V0IHRvIGBwcmVmaXhgIChhbmQgc2ltaWxhcmx5IGZvciBgc3VmZml4YCkuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi10ZXh0LWZpZWxkIGxhYmVsPVwiRW1haWwgYWRkcmVzc1wiPlxuICogICA8ZGl2IHNsb3Q9XCJwcmVmaXhcIj5TZW50IHRvOjwvZGl2PlxuICogICA8ZGl2IHNsb3Q9XCJzdWZmaXhcIj5AdmFhZGluLmNvbTwvZGl2PlxuICogPC92YWFkaW4tdGV4dC1hcmVhPlxuICogYGBgXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLVxuICogYC0tdmFhZGluLXRleHQtZmllbGQtZGVmYXVsdC13aWR0aGAgfCBTZXQgdGhlIGRlZmF1bHQgd2lkdGggb2YgdGhlIGlucHV0IGZpZWxkIHwgYDEyZW1gXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLVxuICogYGxhYmVsYCB8IFRoZSBsYWJlbCBlbGVtZW50XG4gKiBgaW5wdXQtZmllbGRgIHwgVGhlIGVsZW1lbnQgdGhhdCB3cmFwcyBwcmVmaXgsIHZhbHVlIGFuZCBzdWZmaXhcbiAqIGB2YWx1ZWAgfCBUaGUgdGV4dCB2YWx1ZSBlbGVtZW50IGluc2lkZSB0aGUgYGlucHV0LWZpZWxkYCBlbGVtZW50XG4gKiBgZXJyb3ItbWVzc2FnZWAgfCBUaGUgZXJyb3IgbWVzc2FnZSBlbGVtZW50XG4gKlxuICogVGhlIGZvbGxvd2luZyBzdGF0ZSBhdHRyaWJ1dGVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQXR0cmlidXRlICAgIHwgRGVzY3JpcHRpb24gfCBQYXJ0IG5hbWVcbiAqIC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS1cbiAqIGBkaXNhYmxlZGAgfCBTZXQgdG8gYSBkaXNhYmxlZCB0ZXh0IGZpZWxkIHwgOmhvc3RcbiAqIGBoYXMtdmFsdWVgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaGFzIGEgdmFsdWUgfCA6aG9zdFxuICogYGhhcy1sYWJlbGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBoYXMgYSBsYWJlbCB8IDpob3N0XG4gKiBgaW52YWxpZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkIHwgOmhvc3RcbiAqIGBpbnB1dC1wcmV2ZW50ZWRgIHwgVGVtcG9yYXJpbHkgc2V0IHdoZW4gaW52YWxpZCBpbnB1dCBpcyBwcmV2ZW50ZWQgfCA6aG9zdFxuICogYGZvY3VzZWRgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZCB8IDpob3N0XG4gKiBgZm9jdXMtcmluZ2AgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBrZXlib2FyZCBmb2N1c2VkIHwgOmhvc3RcbiAqIGByZWFkb25seWAgfCBTZXQgdG8gYSByZWFkb25seSB0ZXh0IGZpZWxkIHwgOmhvc3RcbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLlRleHRGaWVsZE1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICovXG5jbGFzcyBUZXh0RmllbGRFbGVtZW50IGV4dGVuZHMgRWxlbWVudE1peGluKFRleHRGaWVsZE1peGluKFRoZW1hYmxlTWl4aW4oUG9seW1lckVsZW1lbnQpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwidmFhZGluLXRleHQtZmllbGQtc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgLyogcG9seW1lci1jbGkgbGludGVyIGJyZWFrcyB3aXRoIGVtcHR5IGxpbmUgKi9cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cInZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lclwiPlxuXG4gICAgICA8bGFiZWwgcGFydD1cImxhYmVsXCIgb24tY2xpY2s9XCJmb2N1c1wiIGlkPVwiW1tfbGFiZWxJZF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPGRpdiBwYXJ0PVwiaW5wdXQtZmllbGRcIiBpZD1cIltbX2lucHV0SWRdXVwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgPGlucHV0IHBhcnQ9XCJ2YWx1ZVwiPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBwYXJ0PVwiY2xlYXItYnV0dG9uXCIgaWQ9XCJjbGVhckJ1dHRvblwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsXFwkPVwiW1tpMThuLmNsZWFyXV1cIj48L2Rpdj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiPjwvc2xvdD5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgcGFydD1cImVycm9yLW1lc3NhZ2VcIiBpZD1cIltbX2Vycm9ySWRdXVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtaGlkZGVuXFwkPVwiW1tfZ2V0RXJyb3JNZXNzYWdlQXJpYUhpZGRlbihpbnZhbGlkLCBlcnJvck1lc3NhZ2UsIF9lcnJvcklkKV1dXCI+W1tlcnJvck1lc3NhZ2VdXTwvZGl2PlxuXG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi10ZXh0LWZpZWxkJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzIuNS4zJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBJZGVudGlmaWVzIGEgbGlzdCBvZiBwcmUtZGVmaW5lZCBvcHRpb25zIHRvIHN1Z2dlc3QgdG8gdGhlIHVzZXIuXG4gICAgICAgKiBUaGUgdmFsdWUgbXVzdCBiZSB0aGUgaWQgb2YgYSA8ZGF0YWxpc3Q+IGVsZW1lbnQgaW4gdGhlIHNhbWUgZG9jdW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgdGhlIHZhbHVlIGlzIGNoZWNrZWQgYWdhaW5zdC5cbiAgICAgICAqIFRoZSBwYXR0ZXJuIG11c3QgbWF0Y2ggdGhlIGVudGlyZSB2YWx1ZSwgbm90IGp1c3Qgc29tZSBzdWJzZXQuXG4gICAgICAgKi9cbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB0ZXh0IHVzdWFsbHkgZGlzcGxheWVkIGluIGEgdG9vbHRpcCBwb3B1cCB3aGVuIHRoZSBtb3VzZSBpcyBvdmVyIHRoZSBmaWVsZC5cbiAgICAgICAqL1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVGV4dEZpZWxkRWxlbWVudC5pcywgVGV4dEZpZWxkRWxlbWVudCk7XG5cbmV4cG9ydCB7IFRleHRGaWVsZEVsZW1lbnQgfTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL3JlcXVpcmVkLWZpZWxkLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLXRleHQtZmllbGRcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1yZXF1aXJlZC1maWVsZCBtYXRlcmlhbC1maWVsZC1idXR0b25cIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgfVxuXG4gICAgICAvKiBTdHJhbmdlIGd5bW5hc3RpY3MgdG8gbWFrZSBmaWVsZHMgdmVydGljYWxseSBhbGlnbiBuaWNlbHkgaW4gbW9zdCBjYXNlc1xuICAgICAgICAgKG5vIGxhYmVsLCB3aXRoIGxhYmVsLCB3aXRob3V0IHByZWZpeCwgd2l0aCBwcmVmaXgsIGV0Yy4pICovXG5cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdOmVtcHR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXTplbXB0eTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLCoFwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTAuMnB4OyAvKiBOT1RFKHBsYXRvc2hhKTogQWRqdXN0cyBmb3Igd3JvbmcgZmxleCBiYXNlbGluZSBpbiBDaHJvbWUgJiBTYWZhcmkgKi9cbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3IsICMwMDApO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLW9wYWNpdHksIDAuNDIpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE3NXM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwibGFiZWxcIl0sXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC8qIFNsb3R0ZWQgYnkgdmFhZGluLXNlbGVjdC10ZXh0LWZpZWxkICovXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChbcGFydD1cInZhbHVlXCJdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAvKiBEaXNhYmxlIGRlZmF1bHQgaW52YWxpZCBzdHlsZSBpbiBGaXJlZm94ICovXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIFRPRE86IHRoZSB0ZXh0IG9wYWNpdHkgc2hvdWxkIGJlIDQyJSwgYnV0IHRoZSBkaXNhYmxlZCBzdHlsZSBpcyAzOCUuXG4gICAgICBXb3VsZCBuZWVkIHRvIGludHJvZHVjZSBhbm90aGVyIHByb3BlcnR5IGZvciBpdCBpZiB3ZSB3YW50IHRvIGJlIDEwMCUgYWNjdXJhdGUuICovXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTc1cyAwLjA1cztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNzVzIDAuMDVzO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE3NXMgMC4xcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1sYWJlbF06bm90KFtmb2N1c2VkXSk6bm90KFtpbnZhbGlkXSk6bm90KFt0aGVtZT1cImFsd2F5cy1mbG9hdC1sYWJlbFwiXSkpIFtwYXJ0PVwidmFsdWVcIl06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXTpub3QoW2ZvY3VzZWRdKTpub3QoW2ludmFsaWRdKTpub3QoW3RoZW1lPVwiYWx3YXlzLWZsb2F0LWxhYmVsXCJdKSkgW3BhcnQ9XCJ2YWx1ZVwiXTo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdOm5vdChbZm9jdXNlZF0pOm5vdChbaW52YWxpZF0pOm5vdChbdGhlbWU9XCJhbHdheXMtZmxvYXQtbGFiZWxcIl0pKSBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIElFMTEgZG9lc27igJl0IHNob3cgdGhlIHBsYWNlaG9sZGVyIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQsIHNvIGl04oCZcyBiYXNpY2FsbHkgdXNlbGVzcyBmb3IgdGhpcyB0aGVtZSAqL1xuICAgICAgOmhvc3QoW2hhcy1sYWJlbF0pIFtwYXJ0PVwidmFsdWVcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMzMlO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNzVzLCBjb2xvciAwLjE3NXMsIHdpZHRoIDAuMTc1cztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIGVhc2UsIHN0ZXAtZW5kO1xuICAgICAgfVxuXG4gICAgICAvKiBUT0RPOiB1c2luZyB1bnN1cHBvcnRlZCBzZWxlY3RvciB0byBmaXggSUUxMSAoZXZlbiB0aG91Z2h0IHRoZSBsYWJlbCBlbGVtZW50IGlzIHNjYWxlZCBkb3duLFxuICAgICAgICAgdGhlIDEzMyUgd2lkdGggc3RpbGwgdGFrZXMgdGhlIHNhbWUgc3BhY2UgYXMgYW4gdW5zY2FsZWQgZWxlbWVudCAqL1xuICAgICAgOjotbXMtYmFja2Ryb3AsXG4gICAgICAudmFhZGluLXRleHQtZmllbGQtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyogU2FtZSBmaXggZm9yIE1TIEVkZ2UgXl4gICAqL1xuICAgICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgLnZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lciB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXI6bm90KFtyZWFkb25seV0pOm5vdChbaW52YWxpZF0pKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWhvdmVyLW9wYWNpdHksIDAuODcpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF06bm90KFtpbnZhbGlkXSkpIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlcixcbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE3NXMsIG9wYWNpdHkgMC4xNzVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW5wdXQtcHJldmVudGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yLCAjMDAwKSAwLCB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3IsICMwMDApIDJweCwgdHJhbnNwYXJlbnQgMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0cHggMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICB9XG5cbiAgICAgIC8qIE9ubHkgdGFyZ2V0IHRoZSB2aXNpYmxlIGZsb2F0aW5nIGxhYmVsICovXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXTpub3QoW2hhcy12YWx1ZV0pOm5vdChbZm9jdXNlZF0pOm5vdChbaW52YWxpZF0pOm5vdChbdGhlbWV+PVwiYWx3YXlzLWZsb2F0LWxhYmVsXCJdKSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBJRTExIGRvZXNu4oCZdCB3b3JrIHdpdGggY2FsYyBpbnNpZGUgdGhlIHRyYW5zbGF0ZSBmdW5jdGlvbiwgc28gd2UgbmVlZCB0byBoYXZlIGEgZml4ZWQgcGl4ZWwgdmFsdWUgaW5zdGVhZCBvZiA1MCUgKyAxNnB4ICovXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgyNHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIGVhc2UsIHN0ZXAtc3RhcnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgfVxuXG4gICAgICAvKiBTbG90dGVkIGNvbnRlbnQgKi9cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoKjpub3QoW3BhcnQ9XCJ2YWx1ZVwiXSk6bm90KFtwYXJ0XFwkPVwiLWJ1dHRvblwiXSk6bm90KGlucHV0KTpub3QodGV4dGFyZWEpKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jbGVhcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLXRleHQtZmllbGQtc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbiIsIi8qIFRoaXMgZmlsZSBpcyBhdXRvZ2VuZXJhdGVkIGZyb20gc3JjL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLnRwbC5odG1sICovXG4vKlxuXG5UaGlzIHNjcmlwdCBnYXRoZXJzIHVzYWdlIHN0YXRpc3RpY3MgZnJvbSB0aGUgYXBwbGljYXRpb24gcnVubmluZyBpbiBkZXZlbG9wbWVudCBtb2RlLlxuXG5TdGF0aXN0aWNzIGdhdGhlcmluZyBpcyBhdXRvbWF0aWNhbGx5IGRpc2FibGVkIGFuZCBleGNsdWRlZCBmcm9tIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG5Gb3IgZGV0YWlscyBhbmQgdG8gb3B0LW91dCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuXG5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgeyBydW5JZkRldmVsb3BtZW50TW9kZSB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IvdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IuanMnO1xuXG5mdW5jdGlvbiBtYXliZUdhdGhlckFuZFNlbmRTdGF0cygpIHtcbiAgLyoqIHZhYWRpbi1kZXYtbW9kZTpzdGFydFxuICAoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGdldFBvbHltZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0UG9seW1lclZlcnNpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuUG9seW1lciAmJiB3aW5kb3cuUG9seW1lci52ZXJzaW9uO1xufTtcblxudmFyIFN0YXRpc3RpY3NHYXRoZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc0dhdGhlcmVyKGxvZ2dlcikge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NHYXRoZXJlcik7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc0dhdGhlcmVyLCBbe1xuICAgIGtleTogJ2ZyYW1ld29ya1ZlcnNpb25EZXRlY3RvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmFtZXdvcmtWZXJzaW9uRGV0ZWN0b3JzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0Zsb3cnOiBmdW5jdGlvbiBGbG93KCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuVmFhZGluICYmIHdpbmRvdy5WYWFkaW4uRmxvdyAmJiB3aW5kb3cuVmFhZGluLkZsb3cuY2xpZW50cykge1xuICAgICAgICAgICAgdmFyIGZsb3dWZXJzaW9ucyA9IE9iamVjdC5rZXlzKHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjbGllbnQuZ2V0VmVyc2lvbkluZm87XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvKCkuZmxvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZsb3dWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmbG93VmVyc2lvbnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnVmFhZGluIEZyYW1ld29yayc6IGZ1bmN0aW9uIFZhYWRpbkZyYW1ld29yaygpIHtcbiAgICAgICAgICBpZiAod2luZG93LnZhYWRpbiAmJiB3aW5kb3cudmFhZGluLmNsaWVudHMpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXdvcmtWZXJzaW9ucyA9IE9iamVjdC52YWx1ZXMod2luZG93LnZhYWRpbi5jbGllbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRWZXJzaW9uSW5mbygpLnZhYWRpblZlcnNpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChmcmFtZXdvcmtWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmcmFtZXdvcmtWZXJzaW9uc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFySnMnOiBmdW5jdGlvbiBBbmd1bGFySnMoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyICYmIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24gJiYgd2luZG93LmFuZ3VsYXIudmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24uZnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFyJzogZnVuY3Rpb24gQW5ndWxhcigpIHtcbiAgICAgICAgICBpZiAod2luZG93Lm5nKSB7XG4gICAgICAgICAgICB2YXIgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctdmVyc2lvbl1cIik7XG4gICAgICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0YWdzWzBdLmdldEF0dHJpYnV0ZShcIm5nLXZlcnNpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnQmFja2JvbmUuanMnOiBmdW5jdGlvbiBCYWNrYm9uZUpzKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuQmFja2JvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuQmFja2JvbmUuVkVSU0lPTjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdSZWFjdCc6IGZ1bmN0aW9uIFJlYWN0KCkge1xuICAgICAgICAgIHZhciByZWFjdFNlbGVjdG9yID0gJ1tkYXRhLXJlYWN0cm9vdF0sIFtkYXRhLXJlYWN0aWRdJztcbiAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlYWN0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwdWJsaXNoIHRoZSB2ZXJzaW9uIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdFbWJlcic6IGZ1bmN0aW9uIEVtYmVyKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuRW0gJiYgd2luZG93LkVtLlZFUlNJT04pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRW0uVkVSU0lPTjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5FbWJlciAmJiB3aW5kb3cuRW1iZXIuVkVSU0lPTikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5FbWJlci5WRVJTSU9OO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2pRdWVyeSc6IGZ1bmN0aW9uIChfalF1ZXJ5KSB7XG4gICAgICAgICAgZnVuY3Rpb24galF1ZXJ5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9qUXVlcnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqUXVlcnkudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2pRdWVyeS50b1N0cmluZygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4galF1ZXJ5O1xuICAgICAgICB9KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJyAmJiBqUXVlcnkucHJvdG90eXBlLmpxdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LnByb3RvdHlwZS5qcXVlcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgJ1BvbHltZXInOiBmdW5jdGlvbiBQb2x5bWVyKCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnTGl0RWxlbWVudCc6IGZ1bmN0aW9uIExpdEVsZW1lbnQoKSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSB3aW5kb3cubGl0RWxlbWVudFZlcnNpb25zICYmIHdpbmRvdy5saXRFbGVtZW50VmVyc2lvbnNbMF07XG4gICAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ0xpdEh0bWwnOiBmdW5jdGlvbiBMaXRIdG1sKCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gd2luZG93LmxpdEh0bWxWZXJzaW9ucyAmJiB3aW5kb3cubGl0SHRtbFZlcnNpb25zWzBdO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdWdWUuanMnOiBmdW5jdGlvbiBWdWVKcygpIHtcbiAgICAgICAgICBpZiAod2luZG93LlZ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5WdWUudmVyc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlZFZhYWRpbkVsZW1lbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZFZhYWRpbkVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgdmVyc2lvbiA9IGdldFBvbHltZXJWZXJzaW9uKCk7XG4gICAgICB2YXIgZWxlbWVudENsYXNzZXMgPSB2b2lkIDA7XG4gICAgICAvLyBOT1RFOiBJbiBjYXNlIHlvdSBlZGl0IHRoZSBjb2RlIGhlcmUsIFlPVSBNVVNUIFVQREFURSBhbnkgc3RhdGlzdGljcyByZXBvcnRpbmcgY29kZSBpbiBGbG93LlxuICAgICAgLy8gQ2hlY2sgYWxsIGxvY2F0aW9ucyBjYWxsaW5nIHRoZSBtZXRob2QgZ2V0RW50cmllcygpIGluXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL2Zsb3cvYmxvYi9tYXN0ZXIvZmxvdy1zZXJ2ZXIvc3JjL21haW4vamF2YS9jb20vdmFhZGluL2Zsb3cvaW50ZXJuYWwvVXNhZ2VTdGF0aXN0aWNzLmphdmEjTDEwNlxuICAgICAgLy8gQ3VycmVudGx5IGl0IGlzIG9ubHkgdXNlZCBieSBCb290c3RyYXBIYW5kbGVyLlxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgLy8gUG9seW1lciAyOiBjb21wb25lbnRzIGNsYXNzZXMgYXJlIHN0b3JlZCBpbiB3aW5kb3cuVmFhZGluXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gT2JqZWN0LmtleXMod2luZG93LlZhYWRpbikubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5WYWFkaW5bY107XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLmlzO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvbHltZXIgMzogY29tcG9uZW50cyBjbGFzc2VzIGFyZSBzdG9yZWQgaW4gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zIHx8IFtdO1xuICAgICAgfVxuICAgICAgZWxlbWVudENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoa2xhc3MpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBrbGFzcy52ZXJzaW9uID8ga2xhc3MudmVyc2lvbiA6IFwiMC4wLjBcIjtcbiAgICAgICAgZWxlbWVudHNba2xhc3MuaXNdID0geyB2ZXJzaW9uOiB2ZXJzaW9uIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VkVmFhZGluVGhlbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZFZhYWRpblRoZW1lcyh0aGVtZXMpIHtcbiAgICAgIFsnTHVtbycsICdNYXRlcmlhbCddLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lTmFtZSkge1xuICAgICAgICB2YXIgdGhlbWU7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDI6IHRoZW1lcyBhcmUgc3RvcmVkIGluIHdpbmRvdy5WYWFkaW5cbiAgICAgICAgICB0aGVtZSA9IHdpbmRvdy5WYWFkaW5bdGhlbWVOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDM6IHRoZW1lcyBhcmUgc3RvcmVkIGluIGN1c3RvbSBlbGVtZW50IHJlZ2lzdHJ5XG4gICAgICAgICAgdGhlbWUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3ZhYWRpbi0nICsgdGhlbWVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLXN0eWxlcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGVtZSAmJiB0aGVtZS52ZXJzaW9uKSB7XG4gICAgICAgICAgdGhlbWVzW3RoZW1lTmFtZV0gPSB7IHZlcnNpb246IHRoZW1lLnZlcnNpb24gfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RnJhbWV3b3JrcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1ld29ya3MoZnJhbWV3b3Jrcykge1xuICAgICAgdmFyIGRldGVjdG9ycyA9IHRoaXMuZnJhbWV3b3JrVmVyc2lvbkRldGVjdG9ycygpO1xuICAgICAgT2JqZWN0LmtleXMoZGV0ZWN0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZXdvcmspIHtcbiAgICAgICAgdmFyIGRldGVjdG9yID0gZGV0ZWN0b3JzW2ZyYW1ld29ya107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSBkZXRlY3RvcigpO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICBmcmFtZXdvcmtzW2ZyYW1ld29ya10gPSB7IHZlcnNpb246IHZlcnNpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnYXRoZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnYXRoZXIoc3RvcmFnZSkge1xuICAgICAgdmFyIHN0b3JlZFN0YXRzID0gc3RvcmFnZS5yZWFkKCk7XG4gICAgICB2YXIgZ2F0aGVyZWRTdGF0cyA9IHt9O1xuICAgICAgdmFyIHR5cGVzID0gW1wiZWxlbWVudHNcIiwgXCJmcmFtZXdvcmtzXCIsIFwidGhlbWVzXCJdO1xuXG4gICAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGdhdGhlcmVkU3RhdHNbdHlwZV0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yZWRTdGF0c1t0eXBlXSkge1xuICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdID0ge307XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJldmlvdXNTdGF0cyA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZFN0YXRzKTtcblxuICAgICAgdGhpcy5nZXRVc2VkVmFhZGluRWxlbWVudHMoZ2F0aGVyZWRTdGF0cy5lbGVtZW50cyk7XG4gICAgICB0aGlzLmdldEZyYW1ld29ya3MoZ2F0aGVyZWRTdGF0cy5mcmFtZXdvcmtzKTtcbiAgICAgIHRoaXMuZ2V0VXNlZFZhYWRpblRoZW1lcyhnYXRoZXJlZFN0YXRzLnRoZW1lcyk7XG5cbiAgICAgIHZhciBub3cgPSB0aGlzLm5vdztcbiAgICAgIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhnYXRoZXJlZFN0YXRzW3R5cGVdKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRzW3R5cGVdW2tleV0gfHwgX3R5cGVvZihzdG9yZWRTdGF0c1t0eXBlXVtrZXldKSAhPSBfdHlwZW9mKHt9KSkge1xuICAgICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XSA9IHsgZmlyc3RVc2VkOiBub3cgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRGlzY2FyZHMgYW55IHByZXZpb3VzbHkgbG9nZ2VkIHZlcnNpb24gbnVtYmVyXG4gICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XS52ZXJzaW9uID0gZ2F0aGVyZWRTdGF0c1t0eXBlXVtrZXldLnZlcnNpb247XG4gICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XS5sYXN0VXNlZCA9IG5vdztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG5ld1N0YXRzID0gSlNPTi5zdHJpbmdpZnkoc3RvcmVkU3RhdHMpO1xuICAgICAgc3RvcmFnZS53cml0ZShuZXdTdGF0cyk7XG4gICAgICBpZiAobmV3U3RhdHMgIT0gcHJldmlvdXNTdGF0cyAmJiBPYmplY3Qua2V5cyhzdG9yZWRTdGF0cykubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIk5ldyBzdGF0czogXCIgKyBuZXdTdGF0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzR2F0aGVyZXI7XG59KCk7XG5cbnZhciBTdGF0aXN0aWNzU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc1N0b3JhZ2Uoa2V5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGlzdGljc1N0b3JhZ2UpO1xuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGF0aXN0aWNzU3RvcmFnZSwgW3tcbiAgICBrZXk6ICdyZWFkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZCgpIHtcbiAgICAgIHZhciBsb2NhbFN0b3JhZ2VTdGF0c1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVN0YXRzU3RyaW5nID8gbG9jYWxTdG9yYWdlU3RhdHNTdHJpbmcgOiAne30nKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dyaXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGUoZGF0YSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIGRhdGEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNFbXB0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICB2YXIgc3RvcmVkU3RhdHMgPSB0aGlzLnJlYWQoKTtcbiAgICAgIHZhciBlbXB0eSA9IHRydWU7XG4gICAgICBPYmplY3Qua2V5cyhzdG9yZWRTdGF0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzdG9yZWRTdGF0c1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NTdG9yYWdlO1xufSgpO1xuXG52YXIgU3RhdGlzdGljc1NlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc1NlbmRlcih1cmwsIGxvZ2dlcikge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NTZW5kZXIpO1xuXG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGF0aXN0aWNzU2VuZGVyLCBbe1xuICAgIGtleTogJ3NlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGRhdGEsIGVycm9ySGFuZGxlcikge1xuICAgICAgdmFyIGxvZ2dlciA9IHRoaXMubG9nZ2VyO1xuXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiT2ZmbGluZSwgY2FuJ3Qgc2VuZFwiKTtcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZ2dlci5kZWJ1ZyhcIlNlbmRpbmcgZGF0YSB0byBcIiArIHRoaXMudXJsKTtcblxuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdGF0cyBzZW50LCBub3RoaW5nIG1vcmUgdG8gZG9cbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiUmVzcG9uc2U6IFwiICsgcmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJTZW5kIGZhaWxlZFwiKTtcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJTZW5kIGFib3J0ZWRcIik7XG4gICAgICAgIGVycm9ySGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICByZXEub3BlbihcIlBPU1RcIiwgdGhpcy51cmwpO1xuICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgcmVxLnNlbmQoZGF0YSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzU2VuZGVyO1xufSgpO1xuXG52YXIgU3RhdGlzdGljc0xvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc0xvZ2dlcihpZCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NMb2dnZXIpO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc0xvZ2dlciwgW3tcbiAgICBrZXk6ICdfaXNEZWJ1ZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc0RlYnVnKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmFhZGluLlwiICsgdGhpcy5pZCArIFwiLmRlYnVnXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlYnVnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVidWcobXNnKSB7XG4gICAgICBpZiAodGhpcy5faXNEZWJ1ZygpKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh0aGlzLmlkICsgXCI6IFwiICsgbXNnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NMb2dnZXI7XG59KCk7XG5cbnZhciBVc2FnZVN0YXRpc3RpY3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFVzYWdlU3RhdGlzdGljcygpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBVc2FnZVN0YXRpc3RpY3MpO1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZU5vdyA9IHRoaXMubm93LmdldFRpbWUoKTtcbiAgICB0aGlzLmdhdGhlckRlbGF5ID0gMTA7IC8vIERlbGF5IGJldHdlZW4gbG9hZGluZyB0aGlzIGZpbGUgYW5kIGdhdGhlcmluZyBzdGF0c1xuICAgIHRoaXMuaW5pdGlhbERlbGF5ID0gMjQgKiA2MCAqIDYwO1xuXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgU3RhdGlzdGljc0xvZ2dlcihcInN0YXRpc3RpY3NcIik7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0YXRpc3RpY3NTdG9yYWdlKFwidmFhZGluLnN0YXRpc3RpY3MuYmFza2V0XCIpO1xuICAgIHRoaXMuZ2F0aGVyZXIgPSBuZXcgU3RhdGlzdGljc0dhdGhlcmVyKHRoaXMubG9nZ2VyKTtcbiAgICB0aGlzLnNlbmRlciA9IG5ldyBTdGF0aXN0aWNzU2VuZGVyKFwiaHR0cHM6Ly90b29scy52YWFkaW4uY29tL3VzYWdlLXN0YXRzL3N1Ym1pdFwiLCB0aGlzLmxvZ2dlcik7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhVc2FnZVN0YXRpc3RpY3MsIFt7XG4gICAga2V5OiAnbWF5YmVHYXRoZXJBbmRTZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF5YmVHYXRoZXJBbmRTZW5kKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5vcHRPdXRLZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2F0aGVyZXIuZ2F0aGVyKHRoaXMuc3RvcmFnZSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMubWF5YmVTZW5kKCk7XG4gICAgICB9LCB0aGlzLmdhdGhlckRlbGF5ICogMTAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG90dGVyeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvdHRlcnkoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjdXJyZW50TW9udGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjdXJyZW50TW9udGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3cuZ2V0WWVhcigpICogMTIgKyB0aGlzLm5vdy5nZXRNb250aCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21heWJlU2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1heWJlU2VuZCgpIHtcbiAgICAgIHZhciBmaXJzdFVzZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXkpKTtcbiAgICAgIHZhciBtb250aFByb2Nlc3NlZCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXkpKTtcblxuICAgICAgaWYgKCFmaXJzdFVzZSkge1xuICAgICAgICAvLyBVc2UgYSBncmFjZSBwZXJpb2QgdG8gYXZvaWQgaW50ZXJmZXJpbmcgd2l0aCB0ZXN0cywgaW5jb2duaXRvIG1vZGUgZXRjXG4gICAgICAgIGZpcnN0VXNlID0gdGhpcy50aW1lTm93O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXksIGZpcnN0VXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGltZU5vdyA8IGZpcnN0VXNlICsgdGhpcy5pbml0aWFsRGVsYXkgKiAxMDAwKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiTm8gc3RhdGlzdGljcyB3aWxsIGJlIHNlbnQgdW50aWwgdGhlIGluaXRpYWwgZGVsYXkgb2YgXCIgKyB0aGlzLmluaXRpYWxEZWxheSArIFwicyBoYXMgcGFzc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50TW9udGgoKSA8PSBtb250aFByb2Nlc3NlZCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIlRoaXMgbW9udGggaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5tb250aFByb2Nlc3NlZEtleSwgdGhpcy5jdXJyZW50TW9udGgoKSk7XG4gICAgICAvLyBVc2UgcmFuZG9tIHNhbXBsaW5nXG4gICAgICBpZiAodGhpcy5sb3R0ZXJ5KCkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJDb25ncmF0dWxhdGlvbnMsIHdlIGhhdmUgYSB3aW5uZXIhXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJTb3JyeSwgbm8gc3RhdHMgZnJvbSB5b3UgdGhpcyB0aW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdGhlIGxhdGVzdCBkYXRhXG4gICAgICB0aGlzLmdhdGhlcmVyLmdhdGhlcih0aGlzLnN0b3JhZ2UpO1xuXG4gICAgICAvLyBSZWFkLCBzZW5kIGFuZCBjbGVhbiB1cFxuICAgICAgdmFyIGRhdGEgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgZGF0YVtcImZpcnN0VXNlXCJdID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5maXJzdFVzZUtleSkpO1xuICAgICAgZGF0YVtcInVzYWdlU3RhdGlzdGljc1ZlcnNpb25cIl0gPSBVc2FnZVN0YXRpc3RpY3MudmVyc2lvbjtcbiAgICAgIHZhciBpbmZvID0gJ1RoaXMgcmVxdWVzdCBjb250YWlucyB1c2FnZSBzdGF0aXN0aWNzIGdhdGhlcmVkIGZyb20gdGhlIGFwcGxpY2F0aW9uIHJ1bm5pbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZS4gXFxuXFxuU3RhdGlzdGljcyBnYXRoZXJpbmcgaXMgYXV0b21hdGljYWxseSBkaXNhYmxlZCBhbmQgZXhjbHVkZWQgZnJvbSBwcm9kdWN0aW9uIGJ1aWxkcy5cXG5cXG5Gb3IgZGV0YWlscyBhbmQgdG8gb3B0LW91dCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuXFxuXFxuXFxuXFxuJztcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc2VuZGVyLnNlbmQoaW5mbyArIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldmVydCB0aGUgJ21vbnRoIHByb2Nlc3NlZCcgZmxhZ1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXksIHNlbGYuY3VycmVudE1vbnRoKCkgLSAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAndmVyc2lvbicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSgpIHtcbiAgICAgIHJldHVybiAnMi4xLjAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpcnN0VXNlS2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5maXJzdHVzZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9udGhQcm9jZXNzZWRLZXknLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJ3ZhYWRpbi5zdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcHRPdXRLZXknLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJ3ZhYWRpbi5zdGF0aXN0aWNzLm9wdG91dCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBVc2FnZVN0YXRpc3RpY3M7XG59KCk7XG5cbnRyeSB7XG4gIHdpbmRvdy5WYWFkaW4gPSB3aW5kb3cuVmFhZGluIHx8IHt9O1xuICB3aW5kb3cuVmFhZGluLnVzYWdlU3RhdHNDaGVja2VyID0gd2luZG93LlZhYWRpbi51c2FnZVN0YXRzQ2hlY2tlciB8fCBuZXcgVXNhZ2VTdGF0aXN0aWNzKCk7XG4gIHdpbmRvdy5WYWFkaW4udXNhZ2VTdGF0c0NoZWNrZXIubWF5YmVHYXRoZXJBbmRTZW5kKCk7XG59IGNhdGNoIChlKSB7XG4gIC8vIEludGVudGlvbmFsbHkgaWdub3JlZCBhcyB0aGlzIGlzIG5vdCBhIHByb2JsZW0gaW4gdGhlIGFwcCBiZWluZyBkZXZlbG9wZWRcbn1cblxufSgpKTtcblxuICB2YWFkaW4tZGV2LW1vZGU6ZW5kICoqL1xufVxuXG5leHBvcnQgY29uc3QgdXNhZ2VTdGF0aXN0aWNzID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2YgcnVuSWZEZXZlbG9wbWVudE1vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcnVuSWZEZXZlbG9wbWVudE1vZGUobWF5YmVHYXRoZXJBbmRTZW5kU3RhdHMpO1xuICB9XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy1jb2xsZWN0LmpzJztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBeEhBO0FBQ0E7QUF5SEE7Ozs7Ozs7Ozs7Ozs7QUNwTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNElBOzs7Ozs7Ozs7Ozs7QUNqSkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7OztBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBeEJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoUEE7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBSUE7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTlGQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7O0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBNENBO0FBL0NBO0FBQ0E7QUFpREE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBclJBO0FBdVJBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBM0NBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUF0MUJBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUF2RUE7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUF2REE7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMTFCQTtBQUNBO0FBMjFCQTs7Ozs7Ozs7Ozs7O0FDejNCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0NBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUEvQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUExS0E7QUFDQTtBQTJLQTs7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBcENBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFdBO0FBQ0E7QUFpV0E7Ozs7Ozs7Ozs7OztBQ25YQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQTVEQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNVQTtBQUNBO0FBNFVBOzs7Ozs7Ozs7Ozs7QUM3VkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwS0E7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMENBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFIQTs7Ozs7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUE5QkE7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1Q0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0REE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvR0E7QUFFQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQUNBO0FBUUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7QUFFQTtBQXpMQTtBQTJMQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7Ozs7Ozs7QUFPQTs7Ozs7OztBQTVxQkE7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQXBCQTtBQXdCQTtBQUNBO0FBaEVBO0FBQ0E7QUFpRUE7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnT0E7Ozs7Ozs7Ozs7OztBQ3ZPQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZmQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==