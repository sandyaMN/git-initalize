(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-lovelace"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




class RippleBase extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.interactionNode = this;
  }

  connectedCallback() {
    if (this.interactionNode === this) {
      const parent = this.parentNode;

      if (parent instanceof HTMLElement) {
        this.interactionNode = parent;
      }
    }

    super.connectedCallback();
  } // TODO(sorvell) #css: sizing.


  render() {
    const classes = {
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--accent': this.accent
    };
    const {
      disabled,
      unbounded,
      active,
      interactionNode
    } = this;
    const rippleOptions = {
      disabled,
      unbounded,
      interactionNode
    };

    if (active !== undefined) {
      rippleOptions.active = active;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"></div>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * Toggles the shadow property in app-header when content is scrolled to create
 * a sense of depth between the element and the content underneath.
 */

Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["registerEffect"])('waterfall', {
  /**
   *  @this Polymer.AppLayout.ElementWithBackground
   */
  run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  }
});

/***/ }),

/***/ "./node_modules/@thomasloven/round-slider/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@thomasloven/round-slider/src/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


class RoundSlider extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      value: {
        type: Number
      },
      high: {
        type: Number
      },
      low: {
        type: Number
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number
      },
      startAngle: {
        type: Number
      },
      arcLength: {
        type: Number
      },
      handleSize: {
        type: Number
      },
      handleZoom: {
        type: Number
      },
      disabled: {
        type: Boolean
      },
      dragging: {
        type: Boolean,
        reflect: true
      },
      rtl: {
        type: Boolean
      },
      _scale: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.startAngle = 135;
    this.arcLength = 270;
    this.handleSize = 6;
    this.handleZoom = 1.5;
    this.disabled = false;
    this.dragging = false;
    this.rtl = false;
    this._scale = 1;
  }

  get _start() {
    return this.startAngle * Math.PI / 180;
  }

  get _len() {
    // Things get weird if length is more than a complete turn
    return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
  }

  get _end() {
    return this._start + this._len;
  }

  get _enabled() {
    // If handle is disabled
    if (this.disabled) return false;
    if (this.value == null && (this.high == null || this.low == null)) return false;
    if (this.value != null && (this.value > this.max || this.value < this.min)) return false;
    if (this.high != null && (this.high > this.max || this.high < this.min)) return false;
    if (this.low != null && (this.low > this.max || this.low < this.min)) return false;
    return true;
  }

  _angleInside(angle) {
    // Check if an angle is on the arc
    let a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
    return a < this.arcLength / 2 && a > -this.arcLength / 2;
  }

  _angle2xy(angle) {
    if (this.rtl) return {
      x: -Math.cos(angle),
      y: Math.sin(angle)
    };
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  }

  _xy2angle(x, y) {
    if (this.rtl) x = -x;
    return (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
  }

  _value2angle(value) {
    const fraction = (value - this.min) / (this.max - this.min);
    return this._start + fraction * this._len;
  }

  _angle2value(angle) {
    return Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
  }

  get _boundaries() {
    // Get the maximum extents of the bar arc
    const start = this._angle2xy(this._start);

    const end = this._angle2xy(this._end);

    let up = 1;
    if (!this._angleInside(270)) up = Math.max(-start.y, -end.y);
    let down = 1;
    if (!this._angleInside(90)) down = Math.max(start.y, end.y);
    let left = 1;
    if (!this._angleInside(180)) left = Math.max(-start.x, -end.x);
    let right = 1;
    if (!this._angleInside(0)) right = Math.max(start.x, end.x);
    return {
      up,
      down,
      left,
      right,
      height: up + down,
      width: left + right
    };
  }

  dragStart(ev) {
    let handle = ev.target; // Avoid double events mouseDown->focus

    if (this._rotation && this._rotation.type !== "focus") return; // If an invisible handle was clicked, switch to the visible counterpart

    if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
    if (!handle.classList.contains("handle")) return;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this.handleZoom * this._scale);
    const min = handle.id === "high" ? this.low : this.min;
    const max = handle.id === "low" ? this.high : this.max;
    this._rotation = {
      handle,
      min,
      max,
      start: this[handle.id],
      type: ev.type
    };
    this.dragging = true;
  }

  dragEnd(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    handle.setAttribute('stroke-width', 2 * this.handleSize * this._scale);
    this._rotation = false;
    this.dragging = false;
    handle.blur();
    let event = new CustomEvent('value-changed', {
      detail: {
        [handle.id]: this[handle.id]
      }
    });
    this.dispatchEvent(event); // This makes the low handle render over the high handle if they both are
    // close to the top end.  Otherwise if would be unclickable, and the high
    // handle locked by the low.  Calcualtion is done in the dragEnd handler to
    // avoid "z fighting" while dragging.

    if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
  }

  drag(ev) {
    if (!this._rotation) return;
    if (this._rotation.type === "focus") return;
    ev.preventDefault();
    const mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
    const mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const boundaries = this._boundaries;
    const x = mouseX - (rect.left + boundaries.left * rect.width / boundaries.width);
    const y = mouseY - (rect.top + boundaries.up * rect.height / boundaries.height);

    const angle = this._xy2angle(x, y);

    const pos = this._angle2value(angle);

    this._dragpos(pos);
  }

  _dragpos(pos) {
    if (pos < this._rotation.min || pos > this._rotation.max) return;
    const handle = this._rotation.handle;
    this[handle.id] = pos;
    let event = new CustomEvent('value-changing', {
      detail: {
        [handle.id]: pos
      }
    });
    this.dispatchEvent(event);
  }

  _keyStep(ev) {
    if (!this._rotation) return;
    const handle = this._rotation.handle;
    if (ev.key === "ArrowLeft") if (this.rtl) this._dragpos(this[handle.id] + this.step);else this._dragpos(this[handle.id] - this.step);
    if (ev.key === "ArrowRight") if (this.rtl) this._dragpos(this[handle.id] - this.step);else this._dragpos(this[handle.id] + this.step);
  }

  firstUpdated() {
    document.addEventListener('mouseup', this.dragEnd.bind(this));
    document.addEventListener('touchend', this.dragEnd.bind(this), {
      passive: false
    });
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this), {
      passive: false
    });
    document.addEventListener('keydown', this._keyStep.bind(this));
  }

  updated(changedProperties) {
    // Workaround for vector-effect not working in IE and pre-Chromium Edge
    // That's also why the _scale property exists
    if (this.shadowRoot.querySelector("svg") && this.shadowRoot.querySelector("svg").style.vectorEffect !== undefined) return;

    if (changedProperties.has("_scale") && this._scale != 1) {
      this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(e => {
        if (e.getAttribute('stroke-width')) return;
        const orig = parseFloat(getComputedStyle(e).getPropertyValue('stroke-width'));
        e.style.strokeWidth = `${orig * this._scale}px`;
      });
    }

    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const scale = Math.max(rect.width, rect.height);
    this._scale = 2 / scale;
  }

  _renderArc(start, end) {
    const diff = end - start;
    start = this._angle2xy(start);
    end = this._angle2xy(end + 0.001); // Safari doesn't like arcs with no length

    return `
      M ${start.x} ${start.y}
      A 1 1,
        0,
        ${diff > Math.PI ? "1" : "0"} ${this.rtl ? "0" : "1"},
        ${end.x} ${end.y}
    `;
  }

  _renderHandle(id) {
    const theta = this._value2angle(this[id]);

    const pos = this._angle2xy(theta); // Two handles are drawn. One visible, and one invisible that's twice as
    // big. Makes it easier to click.


    return lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
      <g class="${id} handle">
        <path
          id=${id}
          class="overflow"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4 * this.handleSize * this._scale}"
          />
        <path
          id=${id}
          class="handle"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x + 0.001} ${pos.y + 0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2 * this.handleSize * this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          />
        </g>
      `;
  }

  render() {
    const view = this._boundaries;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-view.left} ${-view.up} ${view.width} ${view.height}"
        style="margin: ${this.handleSize * this.handleZoom}px;"
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start, this._end)}
            vector-effect="non-scaling-stroke"
          />
          ${this._enabled ? lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
              <path
                class="bar"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(this.low != null ? this.low : this.min), this._value2angle(this.high != null ? this.high : this.value))}
              />` : ``}
        </g>

        <g class="handles">
        ${this._enabled ? this.low != null ? this._reverseOrder ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("high")} ${this._renderHandle("low")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("low")} ${this._renderHandle("high")}` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("value")}` : ``}
        </g>
      </svg>
    `;
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      .handle:focus {
        outline: unset;
      }
    `;
  }

}

customElements.define('round-slider', RoundSlider);

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

const styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(styleInfo => part => {
  if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
    throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
  }

  const {
    committer
  } = part;
  const {
    style
  } = committer.element; // Handle static styles the first time we see a Part

  if (!styleMapCache.has(part)) {
    style.cssText = committer.strings.join(' ');
  } // Remove old properties that no longer exist in styleInfo


  const oldInfo = styleMapCache.get(part);

  for (const name in oldInfo) {
    if (!(name in styleInfo)) {
      if (name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[name] = null;
      } else {
        style.removeProperty(name);
      }
    }
  } // Add or update properties


  for (const name in styleInfo) {
    if (name.indexOf('-') === -1) {
      // tslint:disable-next-line:no-any
      style[name] = styleInfo[name];
    } else {
      style.setProperty(name, styleInfo[name]);
    }
  }

  styleMapCache.set(part, styleInfo);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRob21hc2xvdmVuL3JvdW5kLXNsaWRlci9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IHtyaXBwbGUsIFJpcHBsZU9wdGlvbnN9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHByaW1hcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY3RpdmU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjY2VudCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHthdHRyaWJ1dGU6IGZhbHNlfSkgcHJvdGVjdGVkIGludGVyYWN0aW9uTm9kZTogSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25Ob2RlID0gcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gVE9ETyhzb3J2ZWxsKSAjY3NzOiBzaXppbmcuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICB9O1xuICAgIGNvbnN0IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZX0gPSB0aGlzO1xuICAgIGNvbnN0IHJpcHBsZU9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlfTtcbiAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWd7LS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcjogMXB4IHNvbGlkICMwMDA7dmlzaWJpbGl0eTpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWc6OmJlZm9yZXtib3JkZXI6dmFyKC0tbWRjLXJpcHBsZS1zdXJmYWNlLXRlc3QtZWRnZS12YXIpfS5tZGMtcmlwcGxlLXN1cmZhY2V7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmU7b3ZlcmZsb3c6aGlkZGVufS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3Jle3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3otaW5kZXg6MX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgMCk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIDApfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWRjLXJpcHBsZS1zdXJmYWNlOmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDEwMCUpO2xlZnQ6Y2FsYyg1MCUgLSAxMDAlKTt3aWR0aDoyMDAlO2hlaWdodDoyMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRde292ZXJmbG93OnZpc2libGV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgY2FsYyg1MCUgLSA1MCUpKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSA1MCUpKTt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjIwMGVlfUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKX19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2fUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7UmlwcGxlQmFzZX0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1yaXBwbGUnKVxuZXhwb3J0IGNsYXNzIFJpcHBsZSBleHRlbmRzIFJpcHBsZUJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi4vYXBwLXNjcm9sbC1lZmZlY3RzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtyZWdpc3RlckVmZmVjdH0gZnJvbSAnLi4vLi4vaGVscGVycy9oZWxwZXJzLmpzJztcbi8qKlxuICogVG9nZ2xlcyB0aGUgc2hhZG93IHByb3BlcnR5IGluIGFwcC1oZWFkZXIgd2hlbiBjb250ZW50IGlzIHNjcm9sbGVkIHRvIGNyZWF0ZVxuICogYSBzZW5zZSBvZiBkZXB0aCBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCB0aGUgY29udGVudCB1bmRlcm5lYXRoLlxuICovXG5yZWdpc3RlckVmZmVjdCgnd2F0ZXJmYWxsJywge1xuICAvKipcbiAgICogIEB0aGlzIFBvbHltZXIuQXBwTGF5b3V0LkVsZW1lbnRXaXRoQmFja2dyb3VuZFxuICAgKi9cbiAgcnVuOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgdGhpcy5zaGFkb3cgPSB0aGlzLmlzT25TY3JlZW4oKSAmJiB0aGlzLmlzQ29udGVudEJlbG93KCk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgY3NzLFxuICBzdmcsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBSb3VuZFNsaWRlciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGlnaDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBsb3c6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWluOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIG1heDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBzdGVwOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0YXJ0QW5nbGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgYXJjTGVuZ3RoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGhhbmRsZVNpemU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGFuZGxlWm9vbToge3R5cGU6IE51bWJlcn0sXG4gICAgICBkaXNhYmxlZDoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgZHJhZ2dpbmc6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfSxcbiAgICAgIHJ0bDoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgX3NjYWxlOiB7dHlwZTogTnVtYmVyfSxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWluID0gMDtcbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IDEzNTtcbiAgICB0aGlzLmFyY0xlbmd0aCA9IDI3MDtcbiAgICB0aGlzLmhhbmRsZVNpemUgPSA2O1xuICAgIHRoaXMuaGFuZGxlWm9vbSA9IDEuNTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMucnRsID0gZmFsc2U7XG4gICAgdGhpcy5fc2NhbGUgPSAxO1xuICB9XG5cbiAgZ2V0IF9zdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydEFuZ2xlKk1hdGguUEkvMTgwO1xuICB9XG4gIGdldCBfbGVuKCkge1xuICAgIC8vIFRoaW5ncyBnZXQgd2VpcmQgaWYgbGVuZ3RoIGlzIG1vcmUgdGhhbiBhIGNvbXBsZXRlIHR1cm5cbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5hcmNMZW5ndGgqTWF0aC5QSS8xODAsIDIqTWF0aC5QSS0wLjAxKTtcbiAgfVxuICBnZXQgX2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyB0aGlzLl9sZW47XG4gIH1cblxuICBnZXQgX2VuYWJsZWQoKSB7XG4gICAgLy8gSWYgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgaWYodGhpcy5kaXNhYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMudmFsdWUgPT0gbnVsbCAmJiAodGhpcy5oaWdoID09IG51bGwgfHwgdGhpcy5sb3cgPT0gbnVsbCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmKHRoaXMudmFsdWUgIT0gbnVsbCAmJiAodGhpcy52YWx1ZSA+IHRoaXMubWF4IHx8IHRoaXMudmFsdWUgPCB0aGlzLm1pbikpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLmhpZ2ggIT0gbnVsbCAmJiAodGhpcy5oaWdoID4gdGhpcy5tYXggfHwgdGhpcy5oaWdoIDwgdGhpcy5taW4pKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy5sb3cgIT0gbnVsbCAmJiAodGhpcy5sb3cgPiB0aGlzLm1heCB8fCB0aGlzLmxvdyA8IHRoaXMubWluKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX2FuZ2xlSW5zaWRlKGFuZ2xlKSB7XG4gICAgLy8gQ2hlY2sgaWYgYW4gYW5nbGUgaXMgb24gdGhlIGFyY1xuICAgIGxldCBhID0gKHRoaXMuc3RhcnRBbmdsZSArIHRoaXMuYXJjTGVuZ3RoLzIgLSBhbmdsZSArIDE4MCArIDM2MCkgJSAzNjAgLSAxODA7XG4gICAgcmV0dXJuIChhIDwgdGhpcy5hcmNMZW5ndGgvMiAmJiBhID4gLXRoaXMuYXJjTGVuZ3RoLzIpO1xuICB9XG4gIF9hbmdsZTJ4eShhbmdsZSkge1xuICAgIGlmKHRoaXMucnRsKVxuICAgICAgcmV0dXJuIHt4OiAtTWF0aC5jb3MoYW5nbGUpLCB5OiBNYXRoLnNpbihhbmdsZSl9XG4gICAgcmV0dXJuIHt4OiBNYXRoLmNvcyhhbmdsZSksIHk6IE1hdGguc2luKGFuZ2xlKX1cbiAgfVxuICBfeHkyYW5nbGUoeCx5KSB7XG4gICAgaWYodGhpcy5ydGwpXG4gICAgICB4ID0gLXg7XG4gICAgcmV0dXJuIChNYXRoLmF0YW4yKHkseCkgLSB0aGlzLl9zdGFydCArIDIqTWF0aC5QSSkgJSAoMipNYXRoLlBJKTtcbiAgfVxuXG4gIF92YWx1ZTJhbmdsZSh2YWx1ZSkge1xuICAgIGNvbnN0IGZyYWN0aW9uID0gKHZhbHVlIC0gdGhpcy5taW4pLyh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyBmcmFjdGlvbiAqIHRoaXMuX2xlbjtcbiAgfVxuICBfYW5nbGUydmFsdWUoYW5nbGUpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoYW5nbGUvdGhpcy5fbGVuKih0aGlzLm1heCAtIHRoaXMubWluKSArIHRoaXMubWluKS90aGlzLnN0ZXApKnRoaXMuc3RlcDtcbiAgfVxuXG5cbiAgZ2V0IF9ib3VuZGFyaWVzKCkge1xuICAgIC8vIEdldCB0aGUgbWF4aW11bSBleHRlbnRzIG9mIHRoZSBiYXIgYXJjXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9hbmdsZTJ4eSh0aGlzLl9zdGFydCk7XG4gICAgY29uc3QgZW5kID0gdGhpcy5fYW5nbGUyeHkodGhpcy5fZW5kKTtcblxuICAgIGxldCB1cCA9IDE7XG4gICAgaWYoIXRoaXMuX2FuZ2xlSW5zaWRlKDI3MCkpXG4gICAgICB1cCA9ICBNYXRoLm1heCgtc3RhcnQueSwgLWVuZC55KTtcblxuICAgIGxldCBkb3duID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoOTApKVxuICAgICAgZG93biA9IE1hdGgubWF4KHN0YXJ0LnksIGVuZC55KTtcblxuICAgIGxldCBsZWZ0ID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMTgwKSlcbiAgICAgIGxlZnQgPSBNYXRoLm1heCgtc3RhcnQueCwgLWVuZC54KTtcblxuICAgIGxldCByaWdodCA9IDE7XG4gICAgaWYoIXRoaXMuX2FuZ2xlSW5zaWRlKDApKVxuICAgICAgcmlnaHQgPSBNYXRoLm1heChzdGFydC54LCBlbmQueCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXAsIGRvd24sIGxlZnQsIHJpZ2h0LFxuICAgICAgaGVpZ2h0OiB1cCtkb3duLFxuICAgICAgd2lkdGg6IGxlZnQrcmlnaHQsXG4gICAgfTtcbiAgfVxuXG4gIGRyYWdTdGFydChldikge1xuICAgIGxldCBoYW5kbGUgPSBldi50YXJnZXQ7XG5cbiAgICAvLyBBdm9pZCBkb3VibGUgZXZlbnRzIG1vdXNlRG93bi0+Zm9jdXNcbiAgICBpZih0aGlzLl9yb3RhdGlvbiAmJiB0aGlzLl9yb3RhdGlvbi50eXBlICE9PSBcImZvY3VzXCIpIHJldHVybjtcblxuICAgIC8vIElmIGFuIGludmlzaWJsZSBoYW5kbGUgd2FzIGNsaWNrZWQsIHN3aXRjaCB0byB0aGUgdmlzaWJsZSBjb3VudGVycGFydFxuICAgIGlmKGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJvdmVyZmxvd1wiKSlcbiAgICAgIGhhbmRsZSA9IGhhbmRsZS5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIGlmKCFoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFuZGxlXCIpKSByZXR1cm47XG4gICAgaGFuZGxlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMip0aGlzLmhhbmRsZVNpemUqdGhpcy5oYW5kbGVab29tKnRoaXMuX3NjYWxlKTtcblxuICAgIGNvbnN0IG1pbiA9IGhhbmRsZS5pZCA9PT0gXCJoaWdoXCIgPyB0aGlzLmxvdyA6IHRoaXMubWluO1xuICAgIGNvbnN0IG1heCA9IGhhbmRsZS5pZCA9PT0gXCJsb3dcIiA/IHRoaXMuaGlnaCA6IHRoaXMubWF4O1xuICAgIHRoaXMuX3JvdGF0aW9uID0geyBoYW5kbGUsIG1pbiwgbWF4LCBzdGFydDogdGhpc1toYW5kbGUuaWRdLCB0eXBlOiBldi50eXBlfTtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdFbmQoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAyKnRoaXMuaGFuZGxlU2l6ZSp0aGlzLl9zY2FsZSk7XG5cbiAgICB0aGlzLl9yb3RhdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGhhbmRsZS5ibHVyKCk7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgW2hhbmRsZS5pZF0gOiB0aGlzW2hhbmRsZS5pZF0sXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgIC8vIFRoaXMgbWFrZXMgdGhlIGxvdyBoYW5kbGUgcmVuZGVyIG92ZXIgdGhlIGhpZ2ggaGFuZGxlIGlmIHRoZXkgYm90aCBhcmVcbiAgICAvLyBjbG9zZSB0byB0aGUgdG9wIGVuZC4gIE90aGVyd2lzZSBpZiB3b3VsZCBiZSB1bmNsaWNrYWJsZSwgYW5kIHRoZSBoaWdoXG4gICAgLy8gaGFuZGxlIGxvY2tlZCBieSB0aGUgbG93LiAgQ2FsY3VhbHRpb24gaXMgZG9uZSBpbiB0aGUgZHJhZ0VuZCBoYW5kbGVyIHRvXG4gICAgLy8gYXZvaWQgXCJ6IGZpZ2h0aW5nXCIgd2hpbGUgZHJhZ2dpbmcuXG4gICAgaWYodGhpcy5sb3cgJiYgdGhpcy5sb3cgPj0gMC45OSp0aGlzLm1heClcbiAgICAgIHRoaXMuX3JldmVyc2VPcmRlciA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgdGhpcy5fcmV2ZXJzZU9yZGVyID0gZmFsc2U7XG4gIH1cblxuICBkcmFnKGV2KSB7XG4gICAgaWYoIXRoaXMuX3JvdGF0aW9uKSByZXR1cm47XG4gICAgaWYodGhpcy5fcm90YXRpb24udHlwZSA9PT0gXCJmb2N1c1wiKSByZXR1cm47XG5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbW91c2VYID0gKGV2LnR5cGUgPT09IFwidG91Y2htb3ZlXCIpID8gZXYudG91Y2hlc1swXS5jbGllbnRYIDogZXYuY2xpZW50WDtcbiAgICBjb25zdCBtb3VzZVkgPSAoZXYudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikgPyBldi50b3VjaGVzWzBdLmNsaWVudFkgOiBldi5jbGllbnRZO1xuXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvdW5kYXJpZXMgPSB0aGlzLl9ib3VuZGFyaWVzO1xuICAgIGNvbnN0IHggPSBtb3VzZVggLSAocmVjdC5sZWZ0ICsgYm91bmRhcmllcy5sZWZ0KnJlY3Qud2lkdGgvYm91bmRhcmllcy53aWR0aCk7XG4gICAgY29uc3QgeSA9IG1vdXNlWSAtIChyZWN0LnRvcCArIGJvdW5kYXJpZXMudXAqcmVjdC5oZWlnaHQvYm91bmRhcmllcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLl94eTJhbmdsZSh4LHkpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2FuZ2xlMnZhbHVlKGFuZ2xlKTtcbiAgICB0aGlzLl9kcmFncG9zKHBvcyk7XG4gIH1cblxuICBfZHJhZ3Bvcyhwb3MpIHtcbiAgICBpZihwb3MgPCB0aGlzLl9yb3RhdGlvbi5taW4gfHwgcG9zID4gdGhpcy5fcm90YXRpb24ubWF4KSByZXR1cm47XG5cbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9yb3RhdGlvbi5oYW5kbGU7XG4gICAgdGhpc1toYW5kbGUuaWRdID0gcG9zO1xuXG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2luZycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBbaGFuZGxlLmlkXSA6IHBvcyxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgX2tleVN0ZXAoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9yb3RhdGlvbi5oYW5kbGU7XG4gICAgaWYoZXYua2V5ID09PSBcIkFycm93TGVmdFwiKVxuICAgICAgaWYodGhpcy5ydGwpXG4gICAgICAgIHRoaXMuX2RyYWdwb3ModGhpc1toYW5kbGUuaWRdICsgdGhpcy5zdGVwKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5fZHJhZ3Bvcyh0aGlzW2hhbmRsZS5pZF0gLSB0aGlzLnN0ZXApO1xuICAgIGlmKGV2LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpXG4gICAgICBpZih0aGlzLnJ0bClcbiAgICAgICAgdGhpcy5fZHJhZ3Bvcyh0aGlzW2hhbmRsZS5pZF0gLSB0aGlzLnN0ZXApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSArIHRoaXMuc3RlcCk7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcyksIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlTdGVwLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgdmVjdG9yLWVmZmVjdCBub3Qgd29ya2luZyBpbiBJRSBhbmQgcHJlLUNocm9taXVtIEVkZ2VcbiAgICAvLyBUaGF0J3MgYWxzbyB3aHkgdGhlIF9zY2FsZSBwcm9wZXJ0eSBleGlzdHNcbiAgICBpZih0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN2Z1wiKVxuICAgICYmIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnN0eWxlLnZlY3RvckVmZmVjdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuO1xuICAgIGlmKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcIl9zY2FsZVwiKSAmJiB0aGlzLl9zY2FsZSAhPSAxKSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5xdWVyeVNlbGVjdG9yQWxsKFwicGF0aFwiKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmKGUuZ2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBvcmlnID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGUpLmdldFByb3BlcnR5VmFsdWUoJ3N0cm9rZS13aWR0aCcpKTtcbiAgICAgICAgZS5zdHlsZS5zdHJva2VXaWR0aCA9IGAke29yaWcqdGhpcy5fc2NhbGV9cHhgO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWF4KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB0aGlzLl9zY2FsZSA9IDIvc2NhbGU7XG4gIH1cblxuXG5cbiAgX3JlbmRlckFyYyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgZGlmZiA9IGVuZC1zdGFydDtcbiAgICBzdGFydCA9IHRoaXMuX2FuZ2xlMnh5KHN0YXJ0KTtcbiAgICBlbmQgPSB0aGlzLl9hbmdsZTJ4eShlbmQrMC4wMDEpOyAvLyBTYWZhcmkgZG9lc24ndCBsaWtlIGFyY3Mgd2l0aCBubyBsZW5ndGhcbiAgICByZXR1cm4gYFxuICAgICAgTSAke3N0YXJ0Lnh9ICR7c3RhcnQueX1cbiAgICAgIEEgMSAxLFxuICAgICAgICAwLFxuICAgICAgICAkeyhkaWZmKSA+IE1hdGguUEkgPyBcIjFcIiA6IFwiMFwifSAke3RoaXMucnRsID8gXCIwXCIgOiBcIjFcIn0sXG4gICAgICAgICR7ZW5kLnh9ICR7ZW5kLnl9XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJIYW5kbGUoaWQpIHtcbiAgICBjb25zdCB0aGV0YSA9IHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXNbaWRdKTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLl9hbmdsZTJ4eSh0aGV0YSk7XG5cbiAgICAvLyBUd28gaGFuZGxlcyBhcmUgZHJhd24uIE9uZSB2aXNpYmxlLCBhbmQgb25lIGludmlzaWJsZSB0aGF0J3MgdHdpY2UgYXNcbiAgICAvLyBiaWcuIE1ha2VzIGl0IGVhc2llciB0byBjbGljay5cbiAgICByZXR1cm4gc3ZnYFxuICAgICAgPGcgY2xhc3M9XCIke2lkfSBoYW5kbGVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD0ke2lkfVxuICAgICAgICAgIGNsYXNzPVwib3ZlcmZsb3dcIlxuICAgICAgICAgIGQ9XCJcbiAgICAgICAgICBNICR7cG9zLnh9ICR7cG9zLnl9XG4gICAgICAgICAgTCAke3Bvcy54KzAuMDAxfSAke3Bvcy55KzAuMDAxfVxuICAgICAgICAgIFwiXG4gICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgc3Ryb2tlPVwicmdiYSgwLDAsMCwwKVwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiJHs0KnRoaXMuaGFuZGxlU2l6ZSp0aGlzLl9zY2FsZX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgaWQ9JHtpZH1cbiAgICAgICAgICBjbGFzcz1cImhhbmRsZVwiXG4gICAgICAgICAgZD1cIlxuICAgICAgICAgIE0gJHtwb3MueH0gJHtwb3MueX1cbiAgICAgICAgICBMICR7cG9zLngrMC4wMDF9ICR7cG9zLnkrMC4wMDF9XG4gICAgICAgICAgXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIkezIqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlfVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBAZm9jdXM9JHt0aGlzLmRyYWdTdGFydH1cbiAgICAgICAgICBAYmx1cj0ke3RoaXMuZHJhZ0VuZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICBgXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9ib3VuZGFyaWVzO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3ZnXG4gICAgICAgIEBtb3VzZWRvd249JHt0aGlzLmRyYWdTdGFydH1cbiAgICAgICAgQHRvdWNoc3RhcnQ9JHt0aGlzLmRyYWdTdGFydH1cbiAgICAgICAgeG1sbj1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgdmlld0JveD1cIiR7LXZpZXcubGVmdH0gJHstdmlldy51cH0gJHt2aWV3LndpZHRofSAke3ZpZXcuaGVpZ2h0fVwiXG4gICAgICAgIHN0eWxlPVwibWFyZ2luOiAke3RoaXMuaGFuZGxlU2l6ZSp0aGlzLmhhbmRsZVpvb219cHg7XCJcbiAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgPlxuICAgICAgICA8ZyBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cInBhdGhcIlxuICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyh0aGlzLl9zdGFydCwgdGhpcy5fZW5kKX1cbiAgICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgJHsgdGhpcy5fZW5hYmxlZFxuICAgICAgICAgICAgPyBzdmdgXG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiYXJcIlxuICAgICAgICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgICAgICAgIGQ9JHt0aGlzLl9yZW5kZXJBcmMoXG4gICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZTJhbmdsZSh0aGlzLmxvdyAhPSBudWxsID8gdGhpcy5sb3cgOiB0aGlzLm1pbiksXG4gICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZTJhbmdsZSh0aGlzLmhpZ2ggIT0gbnVsbCA/IHRoaXMuaGlnaCA6IHRoaXMudmFsdWUpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5gXG4gICAgICAgICAgICA6IGBgXG4gICAgICAgICAgfVxuICAgICAgICA8L2c+XG5cbiAgICAgICAgPGcgY2xhc3M9XCJoYW5kbGVzXCI+XG4gICAgICAgICR7IHRoaXMuX2VuYWJsZWRcbiAgICAgICAgICA/IHRoaXMubG93ICE9IG51bGxcbiAgICAgICAgICAgICAgPyB0aGlzLl9yZXZlcnNlT3JkZXJcbiAgICAgICAgICAgICAgICA/IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJoaWdoXCIpfSAke3RoaXMuX3JlbmRlckhhbmRsZShcImxvd1wiKX1gXG4gICAgICAgICAgICAgICAgOiBodG1sYCR7dGhpcy5fcmVuZGVySGFuZGxlKFwibG93XCIpfSAke3RoaXMuX3JlbmRlckhhbmRsZShcImhpZ2hcIil9YFxuICAgICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJ2YWx1ZVwiKX1gXG4gICAgICAgICAgOiBgYFxuICAgICAgICB9XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgc3ZnIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB9XG4gICAgICAuc2xpZGVyIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1yb3VuZC1zbGlkZXItcGF0aC13aWR0aCwgMyk7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiB2YXIoLS1yb3VuZC1zbGlkZXItbGluZWNhcCwgcm91bmQpO1xuICAgICAgfVxuICAgICAgLnBhdGgge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLWNvbG9yLCBsaWdodGdyYXkpO1xuICAgICAgfVxuICAgICAgLmJhciB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWJhci1jb2xvciwgZGVlcHNreWJsdWUpO1xuICAgICAgfVxuICAgICAgZy5oYW5kbGVzIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1yb3VuZC1zbGlkZXItaGFuZGxlLWNvbG9yLCB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSkpO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICB9XG4gICAgICBnLmxvdy5oYW5kbGUge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1sb3ctaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGcuaGlnaC5oYW5kbGUge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1oaWdoLWhhbmRsZS1jb2xvcik7XG4gICAgICB9XG4gICAgICAuaGFuZGxlOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JvdW5kLXNsaWRlcicsIFJvdW5kU2xpZGVyKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFBhcnQsIFByb3BlcnR5UGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlSW5mbyB7XG4gIHJlYWRvbmx5IFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogU3RvcmVzIHRoZSBTdHlsZUluZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBTdHlsZUluZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IHN0eWxlTWFwQ2FjaGUgPSBuZXcgV2Vha01hcDxBdHRyaWJ1dGVQYXJ0LCBTdHlsZUluZm8+KCk7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhcHBsaWVzIENTUyBwcm9wZXJ0aWVzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogYHN0eWxlTWFwYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seVxuICogZXhwcmVzc2lvbiBpbiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyB0aGUgcHJvcGVydHkgbmFtZXMgaW4gdGhlIGBzdHlsZUluZm9gXG4gKiBvYmplY3QgYW5kIGFkZHMgdGhlIHByb3BlcnR5IHZhbHVlcyBhcyBDU1MgcHJvcGVydGVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvIHtTdHlsZUluZm99XG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZSgoc3R5bGVJbmZvOiBTdHlsZUluZm8pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICghKHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB8fCAocGFydCBpbnN0YW5jZW9mIFByb3BlcnR5UGFydCkgfHxcbiAgICAgIHBhcnQuY29tbWl0dGVyLm5hbWUgIT09ICdzdHlsZScgfHwgcGFydC5jb21taXR0ZXIucGFydHMubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSBgc3R5bGVNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIHN0eWxlIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgfVxuXG4gIGNvbnN0IHtjb21taXR0ZXJ9ID0gcGFydDtcbiAgY29uc3Qge3N0eWxlfSA9IGNvbW1pdHRlci5lbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gIC8vIEhhbmRsZSBzdGF0aWMgc3R5bGVzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBhIFBhcnRcbiAgaWYgKCFzdHlsZU1hcENhY2hlLmhhcyhwYXJ0KSkge1xuICAgIHN0eWxlLmNzc1RleHQgPSBjb21taXR0ZXIuc3RyaW5ncy5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gIGNvbnN0IG9sZEluZm8gPSBzdHlsZU1hcENhY2hlLmdldChwYXJ0KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICBpZiAoIShuYW1lIGluIHN0eWxlSW5mbykpIHtcbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gc3R5bGVJbmZvW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBzdHlsZUluZm9bbmFtZV0pO1xuICAgIH1cbiAgfVxuICBzdHlsZU1hcENhY2hlLnNldChwYXJ0LCBzdHlsZUluZm8pO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQTJCQTtBQUNBO0FBMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTs7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUF4QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTs7OztBQUtBO0FBTEE7Ozs7QUFlQTs7O0FBOUJBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUNBO0FBQ0E7QUE3V0E7QUFDQTtBQThXQTs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFNQTs7Ozs7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=