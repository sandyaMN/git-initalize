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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div .ripple=\"", "\"\n          class=\"mdc-ripple-surface ", "\"></div>"]);

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




var RippleBase =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RippleBase, _LitElement);

  function RippleBase() {
    var _this;

    _classCallCheck(this, RippleBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).apply(this, arguments));
    _this.primary = false;
    _this.accent = false;
    _this.unbounded = false;
    _this.disabled = false;
    _this.interactionNode = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(RippleBase, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.interactionNode === this) {
        var parent = this.parentNode;

        if (parent instanceof HTMLElement) {
          this.interactionNode = parent;
        }
      }

      _get(_getPrototypeOf(RippleBase.prototype), "connectedCallback", this).call(this);
    } // TODO(sorvell) #css: sizing.

  }, {
    key: "render",
    value: function render() {
      var classes = {
        'mdc-ripple-surface--primary': this.primary,
        'mdc-ripple-surface--accent': this.accent
      };
      var disabled = this.disabled,
          unbounded = this.unbounded,
          active = this.active,
          interactionNode = this.interactionNode;
      var rippleOptions = {
        disabled: disabled,
        unbounded: unbounded,
        interactionNode: interactionNode
      };

      if (active !== undefined) {
        rippleOptions.active = active;
      }

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes));
    }
  }]);

  return RippleBase;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var style = Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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





var Ripple =
/*#__PURE__*/
function (_RippleBase) {
  _inherits(Ripple, _RippleBase);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ripple).apply(this, arguments));
  }

  return Ripple;
}(_mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"]);

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

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

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






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

Shared styles that you can apply to an element to renders two shadows on top
of each other,that create the effect of a lifted piece of paper.

Example:

    <custom-style>
      <style is="custom-style" include="paper-material-styles"></style>
    </custom-style>

    <div class="paper-material" elevation="1">
      ... content ...
    </div>

@group Paper Elements
@demo demo/index.html
*/



var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: inline-block;\n        width: 100%;\n      }\n      svg {\n        overflow: visible;\n      }\n      .slider {\n        fill: none;\n        stroke-width: var(--round-slider-path-width, 3);\n        stroke-linecap: var(--round-slider-linecap, round);\n      }\n      .path {\n        stroke: var(--round-slider-path-color, lightgray);\n      }\n      .bar {\n        stroke: var(--round-slider-bar-color, deepskyblue);\n      }\n      g.handles {\n        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));\n        stroke-linecap: round;\n      }\n      g.low.handle {\n        stroke: var(--round-slider-low-handle-color);\n      }\n      g.high.handle {\n        stroke: var(--round-slider-high-handle-color);\n      }\n      .handle:focus {\n        outline: unset;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <path\n                class=\"bar\"\n                vector-effect=\"non-scaling-stroke\"\n                d=", "\n              />"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <svg\n        @mousedown=", "\n        @touchstart=", "\n        xmln=\"http://www.w3.org/2000/svg\"\n        viewBox=\"", " ", " ", " ", "\"\n        style=\"margin: ", "px;\"\n        focusable=\"false\"\n      >\n        <g class=\"slider\">\n          <path\n            class=\"path\"\n            d=", "\n            vector-effect=\"non-scaling-stroke\"\n          />\n          ", "\n        </g>\n\n        <g class=\"handles\">\n        ", "\n        </g>\n      </svg>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <g class=\"", " handle\">\n        <path\n          id=", "\n          class=\"overflow\"\n          d=\"\n          M ", " ", "\n          L ", " ", "\n          \"\n          vector-effect=\"non-scaling-stroke\"\n          stroke=\"rgba(0,0,0,0)\"\n          stroke-width=\"", "\"\n          />\n        <path\n          id=", "\n          class=\"handle\"\n          d=\"\n          M ", " ", "\n          L ", " ", "\n          \"\n          vector-effect=\"non-scaling-stroke\"\n          stroke-width=\"", "\"\n          tabindex=\"0\"\n          @focus=", "\n          @blur=", "\n          />\n        </g>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RoundSlider =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RoundSlider, _LitElement);

  _createClass(RoundSlider, null, [{
    key: "properties",
    get: function get() {
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
  }]);

  function RoundSlider() {
    var _this;

    _classCallCheck(this, RoundSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RoundSlider).call(this));
    _this.min = 0;
    _this.max = 100;
    _this.step = 1;
    _this.startAngle = 135;
    _this.arcLength = 270;
    _this.handleSize = 6;
    _this.handleZoom = 1.5;
    _this.disabled = false;
    _this.dragging = false;
    _this.rtl = false;
    _this._scale = 1;
    return _this;
  }

  _createClass(RoundSlider, [{
    key: "_angleInside",
    value: function _angleInside(angle) {
      // Check if an angle is on the arc
      var a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
      return a < this.arcLength / 2 && a > -this.arcLength / 2;
    }
  }, {
    key: "_angle2xy",
    value: function _angle2xy(angle) {
      if (this.rtl) return {
        x: -Math.cos(angle),
        y: Math.sin(angle)
      };
      return {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
    }
  }, {
    key: "_xy2angle",
    value: function _xy2angle(x, y) {
      if (this.rtl) x = -x;
      return (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
    }
  }, {
    key: "_value2angle",
    value: function _value2angle(value) {
      var fraction = (value - this.min) / (this.max - this.min);
      return this._start + fraction * this._len;
    }
  }, {
    key: "_angle2value",
    value: function _angle2value(angle) {
      return Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
    }
  }, {
    key: "dragStart",
    value: function dragStart(ev) {
      var handle = ev.target; // Avoid double events mouseDown->focus

      if (this._rotation && this._rotation.type !== "focus") return; // If an invisible handle was clicked, switch to the visible counterpart

      if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
      if (!handle.classList.contains("handle")) return;
      handle.setAttribute('stroke-width', 2 * this.handleSize * this.handleZoom * this._scale);
      var min = handle.id === "high" ? this.low : this.min;
      var max = handle.id === "low" ? this.high : this.max;
      this._rotation = {
        handle: handle,
        min: min,
        max: max,
        start: this[handle.id],
        type: ev.type
      };
      this.dragging = true;
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(ev) {
      if (!this._rotation) return;
      var handle = this._rotation.handle;
      handle.setAttribute('stroke-width', 2 * this.handleSize * this._scale);
      this._rotation = false;
      this.dragging = false;
      handle.blur();
      var event = new CustomEvent('value-changed', {
        detail: _defineProperty({}, handle.id, this[handle.id])
      });
      this.dispatchEvent(event); // This makes the low handle render over the high handle if they both are
      // close to the top end.  Otherwise if would be unclickable, and the high
      // handle locked by the low.  Calcualtion is done in the dragEnd handler to
      // avoid "z fighting" while dragging.

      if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      if (!this._rotation) return;
      if (this._rotation.type === "focus") return;
      ev.preventDefault();
      var mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
      var mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
      var rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
      var boundaries = this._boundaries;
      var x = mouseX - (rect.left + boundaries.left * rect.width / boundaries.width);
      var y = mouseY - (rect.top + boundaries.up * rect.height / boundaries.height);

      var angle = this._xy2angle(x, y);

      var pos = this._angle2value(angle);

      this._dragpos(pos);
    }
  }, {
    key: "_dragpos",
    value: function _dragpos(pos) {
      if (pos < this._rotation.min || pos > this._rotation.max) return;
      var handle = this._rotation.handle;
      this[handle.id] = pos;
      var event = new CustomEvent('value-changing', {
        detail: _defineProperty({}, handle.id, pos)
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_keyStep",
    value: function _keyStep(ev) {
      if (!this._rotation) return;
      var handle = this._rotation.handle;
      if (ev.key === "ArrowLeft") if (this.rtl) this._dragpos(this[handle.id] + this.step);else this._dragpos(this[handle.id] - this.step);
      if (ev.key === "ArrowRight") if (this.rtl) this._dragpos(this[handle.id] - this.step);else this._dragpos(this[handle.id] + this.step);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
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
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this2 = this;

      // Workaround for vector-effect not working in IE and pre-Chromium Edge
      // That's also why the _scale property exists
      if (this.shadowRoot.querySelector("svg") && this.shadowRoot.querySelector("svg").style.vectorEffect !== undefined) return;

      if (changedProperties.has("_scale") && this._scale != 1) {
        this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(function (e) {
          if (e.getAttribute('stroke-width')) return;
          var orig = parseFloat(getComputedStyle(e).getPropertyValue('stroke-width'));
          e.style.strokeWidth = "".concat(orig * _this2._scale, "px");
        });
      }

      var rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
      var scale = Math.max(rect.width, rect.height);
      this._scale = 2 / scale;
    }
  }, {
    key: "_renderArc",
    value: function _renderArc(start, end) {
      var diff = end - start;
      start = this._angle2xy(start);
      end = this._angle2xy(end + 0.001); // Safari doesn't like arcs with no length

      return "\n      M ".concat(start.x, " ").concat(start.y, "\n      A 1 1,\n        0,\n        ").concat(diff > Math.PI ? "1" : "0", " ").concat(this.rtl ? "0" : "1", ",\n        ").concat(end.x, " ").concat(end.y, "\n    ");
    }
  }, {
    key: "_renderHandle",
    value: function _renderHandle(id) {
      var theta = this._value2angle(this[id]);

      var pos = this._angle2xy(theta); // Two handles are drawn. One visible, and one invisible that's twice as
      // big. Makes it easier to click.


      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject(), id, id, pos.x, pos.y, pos.x + 0.001, pos.y + 0.001, 4 * this.handleSize * this._scale, id, pos.x, pos.y, pos.x + 0.001, pos.y + 0.001, 2 * this.handleSize * this._scale, this.dragStart, this.dragEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var view = this._boundaries;
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.dragStart, this.dragStart, -view.left, -view.up, view.width, view.height, this.handleSize * this.handleZoom, this._renderArc(this._start, this._end), this._enabled ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject3(), this._renderArc(this._value2angle(this.low != null ? this.low : this.min), this._value2angle(this.high != null ? this.high : this.value))) : "", this._enabled ? this.low != null ? this._reverseOrder ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this._renderHandle("high"), this._renderHandle("low")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this._renderHandle("low"), this._renderHandle("high")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), this._renderHandle("value")) : "");
    }
  }, {
    key: "_start",
    get: function get() {
      return this.startAngle * Math.PI / 180;
    }
  }, {
    key: "_len",
    get: function get() {
      // Things get weird if length is more than a complete turn
      return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
    }
  }, {
    key: "_end",
    get: function get() {
      return this._start + this._len;
    }
  }, {
    key: "_enabled",
    get: function get() {
      // If handle is disabled
      if (this.disabled) return false;
      if (this.value == null && (this.high == null || this.low == null)) return false;
      if (this.value != null && (this.value > this.max || this.value < this.min)) return false;
      if (this.high != null && (this.high > this.max || this.high < this.min)) return false;
      if (this.low != null && (this.low > this.max || this.low < this.min)) return false;
      return true;
    }
  }, {
    key: "_boundaries",
    get: function get() {
      // Get the maximum extents of the bar arc
      var start = this._angle2xy(this._start);

      var end = this._angle2xy(this._end);

      var up = 1;
      if (!this._angleInside(270)) up = Math.max(-start.y, -end.y);
      var down = 1;
      if (!this._angleInside(90)) down = Math.max(start.y, end.y);
      var left = 1;
      if (!this._angleInside(180)) left = Math.max(-start.x, -end.x);
      var right = 1;
      if (!this._angleInside(0)) right = Math.max(start.x, end.x);
      return {
        up: up,
        down: down,
        left: left,
        right: right,
        height: up + down,
        width: left + right
      };
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
    }
  }]);

  return RoundSlider;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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

var styleMapCache = new WeakMap();
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

var styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (styleInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var style = committer.element.style; // Handle static styles the first time we see a Part

    if (!styleMapCache.has(part)) {
      style.cssText = committer.strings.join(' ');
    } // Remove old properties that no longer exist in styleInfo


    var oldInfo = styleMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in styleInfo)) {
        if (name.indexOf('-') === -1) {
          // tslint:disable-next-line:no-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    } // Add or update properties


    for (var _name in styleInfo) {
      if (_name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[_name] = styleInfo[_name];
      } else {
        style.setProperty(_name, styleInfo[_name]);
      }
    }

    styleMapCache.set(part, styleInfo);
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGhvbWFzbG92ZW4vcm91bmQtc2xpZGVyL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9zdHlsZS1tYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtodG1sLCBMaXRFbGVtZW50LCBwcm9wZXJ0eX0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHtjbGFzc01hcH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5pbXBvcnQge3JpcHBsZSwgUmlwcGxlT3B0aW9uc30gZnJvbSAnLi9yaXBwbGUtZGlyZWN0aXZlLmpzJztcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjdGl2ZTogYm9vbGVhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgYWNjZW50ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe2F0dHJpYnV0ZTogZmFsc2V9KSBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25Ob2RlOiBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25Ob2RlID09PSB0aGlzKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBUT0RPKHNvcnZlbGwpICNjc3M6IHNpemluZy5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeSc6IHRoaXMucHJpbWFyeSxcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCc6IHRoaXMuYWNjZW50LFxuICAgIH07XG4gICAgY29uc3Qge2Rpc2FibGVkLCB1bmJvdW5kZWQsIGFjdGl2ZSwgaW50ZXJhY3Rpb25Ob2RlfSA9IHRoaXM7XG4gICAgY29uc3QgcmlwcGxlT3B0aW9uczogUmlwcGxlT3B0aW9ucyA9IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBpbnRlcmFjdGlvbk5vZGV9O1xuICAgIGlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlT3B0aW9ucy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiAucmlwcGxlPVwiJHtyaXBwbGUocmlwcGxlT3B0aW9ucyl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1yaXBwbGUtc3VyZmFjZSAke2NsYXNzTWFwKGNsYXNzZXMpfVwiPjwvZGl2PmA7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2BAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWV9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtSaXBwbGVCYXNlfSBmcm9tICcuL213Yy1yaXBwbGUtYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1yaXBwbGUtY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLXJpcHBsZSc6IFJpcHBsZTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLXJpcHBsZScpXG5leHBvcnQgY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmlwcGxlQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWZmZWN0fSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuLyoqXG4gKiBUb2dnbGVzIHRoZSBzaGFkb3cgcHJvcGVydHkgaW4gYXBwLWhlYWRlciB3aGVuIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8gY3JlYXRlXG4gKiBhIHNlbnNlIG9mIGRlcHRoIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGguXG4gKi9cbnJlZ2lzdGVyRWZmZWN0KCd3YXRlcmZhbGwnLCB7XG4gIC8qKlxuICAgKiAgQHRoaXMgUG9seW1lci5BcHBMYXlvdXQuRWxlbWVudFdpdGhCYWNrZ3JvdW5kXG4gICAqL1xuICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuaXNPblNjcmVlbigpICYmIHRoaXMuaXNDb250ZW50QmVsb3coKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cblNoYXJlZCBzdHlsZXMgdGhhdCB5b3UgY2FuIGFwcGx5IHRvIGFuIGVsZW1lbnQgdG8gcmVuZGVycyB0d28gc2hhZG93cyBvbiB0b3Bcbm9mIGVhY2ggb3RoZXIsdGhhdCBjcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxjdXN0b20tc3R5bGU+XG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8L2N1c3RvbS1zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJwYXBlci1tYXRlcmlhbFwiIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvZGl2PlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblxuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi4vc2hhZG93LmpzJztcblxuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCB7XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjFcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiM1wiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjRcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG5cbiAgICAgIC8qIER1cGxpY2F0ZSB0aGUgc3R5bGVzIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MvaXNzdWVzLzE5MyAqL1xuICAgICAgOmhvc3Qge1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsOiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWwpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIHN2Zyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIFJvdW5kU2xpZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoaWdoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGxvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtaW46IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWF4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0ZXA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3RhcnRBbmdsZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBhcmNMZW5ndGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGFuZGxlU2l6ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoYW5kbGVab29tOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGRpc2FibGVkOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBkcmFnZ2luZzoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9LFxuICAgICAgcnRsOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBfc2NhbGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5taW4gPSAwO1xuICAgIHRoaXMubWF4ID0gMTAwO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMTM1O1xuICAgIHRoaXMuYXJjTGVuZ3RoID0gMjcwO1xuICAgIHRoaXMuaGFuZGxlU2l6ZSA9IDY7XG4gICAgdGhpcy5oYW5kbGVab29tID0gMS41O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5ydGwgPSBmYWxzZTtcbiAgICB0aGlzLl9zY2FsZSA9IDE7XG4gIH1cblxuICBnZXQgX3N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0QW5nbGUqTWF0aC5QSS8xODA7XG4gIH1cbiAgZ2V0IF9sZW4oKSB7XG4gICAgLy8gVGhpbmdzIGdldCB3ZWlyZCBpZiBsZW5ndGggaXMgbW9yZSB0aGFuIGEgY29tcGxldGUgdHVyblxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmFyY0xlbmd0aCpNYXRoLlBJLzE4MCwgMipNYXRoLlBJLTAuMDEpO1xuICB9XG4gIGdldCBfZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIHRoaXMuX2xlbjtcbiAgfVxuXG4gIGdldCBfZW5hYmxlZCgpIHtcbiAgICAvLyBJZiBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICBpZih0aGlzLmRpc2FibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgaWYodGhpcy52YWx1ZSA9PSBudWxsICYmICh0aGlzLmhpZ2ggPT0gbnVsbCB8fCB0aGlzLmxvdyA9PSBudWxsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYodGhpcy52YWx1ZSAhPSBudWxsICYmICh0aGlzLnZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy52YWx1ZSA8IHRoaXMubWluKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMuaGlnaCAhPSBudWxsICYmICh0aGlzLmhpZ2ggPiB0aGlzLm1heCB8fCB0aGlzLmhpZ2ggPCB0aGlzLm1pbikpIHJldHVybiBmYWxzZTtcbiAgICBpZih0aGlzLmxvdyAhPSBudWxsICYmICh0aGlzLmxvdyA+IHRoaXMubWF4IHx8IHRoaXMubG93IDwgdGhpcy5taW4pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfYW5nbGVJbnNpZGUoYW5nbGUpIHtcbiAgICAvLyBDaGVjayBpZiBhbiBhbmdsZSBpcyBvbiB0aGUgYXJjXG4gICAgbGV0IGEgPSAodGhpcy5zdGFydEFuZ2xlICsgdGhpcy5hcmNMZW5ndGgvMiAtIGFuZ2xlICsgMTgwICsgMzYwKSAlIDM2MCAtIDE4MDtcbiAgICByZXR1cm4gKGEgPCB0aGlzLmFyY0xlbmd0aC8yICYmIGEgPiAtdGhpcy5hcmNMZW5ndGgvMik7XG4gIH1cbiAgX2FuZ2xlMnh5KGFuZ2xlKSB7XG4gICAgaWYodGhpcy5ydGwpXG4gICAgICByZXR1cm4ge3g6IC1NYXRoLmNvcyhhbmdsZSksIHk6IE1hdGguc2luKGFuZ2xlKX1cbiAgICByZXR1cm4ge3g6IE1hdGguY29zKGFuZ2xlKSwgeTogTWF0aC5zaW4oYW5nbGUpfVxuICB9XG4gIF94eTJhbmdsZSh4LHkpIHtcbiAgICBpZih0aGlzLnJ0bClcbiAgICAgIHggPSAteDtcbiAgICByZXR1cm4gKE1hdGguYXRhbjIoeSx4KSAtIHRoaXMuX3N0YXJ0ICsgMipNYXRoLlBJKSAlICgyKk1hdGguUEkpO1xuICB9XG5cbiAgX3ZhbHVlMmFuZ2xlKHZhbHVlKSB7XG4gICAgY29uc3QgZnJhY3Rpb24gPSAodmFsdWUgLSB0aGlzLm1pbikvKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIGZyYWN0aW9uICogdGhpcy5fbGVuO1xuICB9XG4gIF9hbmdsZTJ2YWx1ZShhbmdsZSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChhbmdsZS90aGlzLl9sZW4qKHRoaXMubWF4IC0gdGhpcy5taW4pICsgdGhpcy5taW4pL3RoaXMuc3RlcCkqdGhpcy5zdGVwO1xuICB9XG5cblxuICBnZXQgX2JvdW5kYXJpZXMoKSB7XG4gICAgLy8gR2V0IHRoZSBtYXhpbXVtIGV4dGVudHMgb2YgdGhlIGJhciBhcmNcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FuZ2xlMnh5KHRoaXMuX3N0YXJ0KTtcbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hbmdsZTJ4eSh0aGlzLl9lbmQpO1xuXG4gICAgbGV0IHVwID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMjcwKSlcbiAgICAgIHVwID0gIE1hdGgubWF4KC1zdGFydC55LCAtZW5kLnkpO1xuXG4gICAgbGV0IGRvd24gPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSg5MCkpXG4gICAgICBkb3duID0gTWF0aC5tYXgoc3RhcnQueSwgZW5kLnkpO1xuXG4gICAgbGV0IGxlZnQgPSAxO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSgxODApKVxuICAgICAgbGVmdCA9IE1hdGgubWF4KC1zdGFydC54LCAtZW5kLngpO1xuXG4gICAgbGV0IHJpZ2h0ID0gMTtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMCkpXG4gICAgICByaWdodCA9IE1hdGgubWF4KHN0YXJ0LngsIGVuZC54KTtcblxuICAgIHJldHVybiB7XG4gICAgICB1cCwgZG93biwgbGVmdCwgcmlnaHQsXG4gICAgICBoZWlnaHQ6IHVwK2Rvd24sXG4gICAgICB3aWR0aDogbGVmdCtyaWdodCxcbiAgICB9O1xuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2KSB7XG4gICAgbGV0IGhhbmRsZSA9IGV2LnRhcmdldDtcblxuICAgIC8vIEF2b2lkIGRvdWJsZSBldmVudHMgbW91c2VEb3duLT5mb2N1c1xuICAgIGlmKHRoaXMuX3JvdGF0aW9uICYmIHRoaXMuX3JvdGF0aW9uLnR5cGUgIT09IFwiZm9jdXNcIikgcmV0dXJuO1xuXG4gICAgLy8gSWYgYW4gaW52aXNpYmxlIGhhbmRsZSB3YXMgY2xpY2tlZCwgc3dpdGNoIHRvIHRoZSB2aXNpYmxlIGNvdW50ZXJwYXJ0XG4gICAgaWYoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJmbG93XCIpKVxuICAgICAgaGFuZGxlID0gaGFuZGxlLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgaWYoIWhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW5kbGVcIikpIHJldHVybjtcbiAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAyKnRoaXMuaGFuZGxlU2l6ZSp0aGlzLmhhbmRsZVpvb20qdGhpcy5fc2NhbGUpO1xuXG4gICAgY29uc3QgbWluID0gaGFuZGxlLmlkID09PSBcImhpZ2hcIiA/IHRoaXMubG93IDogdGhpcy5taW47XG4gICAgY29uc3QgbWF4ID0gaGFuZGxlLmlkID09PSBcImxvd1wiID8gdGhpcy5oaWdoIDogdGhpcy5tYXg7XG4gICAgdGhpcy5fcm90YXRpb24gPSB7IGhhbmRsZSwgbWluLCBtYXgsIHN0YXJ0OiB0aGlzW2hhbmRsZS5pZF0sIHR5cGU6IGV2LnR5cGV9O1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0VuZChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy5fcm90YXRpb24uaGFuZGxlO1xuICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDIqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlKTtcblxuICAgIHRoaXMuX3JvdGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgaGFuZGxlLmJsdXIoKTtcblxuICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndmFsdWUtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBbaGFuZGxlLmlkXSA6IHRoaXNbaGFuZGxlLmlkXSxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gVGhpcyBtYWtlcyB0aGUgbG93IGhhbmRsZSByZW5kZXIgb3ZlciB0aGUgaGlnaCBoYW5kbGUgaWYgdGhleSBib3RoIGFyZVxuICAgIC8vIGNsb3NlIHRvIHRoZSB0b3AgZW5kLiAgT3RoZXJ3aXNlIGlmIHdvdWxkIGJlIHVuY2xpY2thYmxlLCBhbmQgdGhlIGhpZ2hcbiAgICAvLyBoYW5kbGUgbG9ja2VkIGJ5IHRoZSBsb3cuICBDYWxjdWFsdGlvbiBpcyBkb25lIGluIHRoZSBkcmFnRW5kIGhhbmRsZXIgdG9cbiAgICAvLyBhdm9pZCBcInogZmlnaHRpbmdcIiB3aGlsZSBkcmFnZ2luZy5cbiAgICBpZih0aGlzLmxvdyAmJiB0aGlzLmxvdyA+PSAwLjk5KnRoaXMubWF4KVxuICAgICAgdGhpcy5fcmV2ZXJzZU9yZGVyID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9yZXZlcnNlT3JkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcbiAgICBpZih0aGlzLl9yb3RhdGlvbi50eXBlID09PSBcImZvY3VzXCIpIHJldHVybjtcblxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtb3VzZVggPSAoZXYudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikgPyBldi50b3VjaGVzWzBdLmNsaWVudFggOiBldi5jbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWSA9IChldi50eXBlID09PSBcInRvdWNobW92ZVwiKSA/IGV2LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2LmNsaWVudFk7XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMuX2JvdW5kYXJpZXM7XG4gICAgY29uc3QgeCA9IG1vdXNlWCAtIChyZWN0LmxlZnQgKyBib3VuZGFyaWVzLmxlZnQqcmVjdC53aWR0aC9ib3VuZGFyaWVzLndpZHRoKTtcbiAgICBjb25zdCB5ID0gbW91c2VZIC0gKHJlY3QudG9wICsgYm91bmRhcmllcy51cCpyZWN0LmhlaWdodC9ib3VuZGFyaWVzLmhlaWdodCk7XG5cbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuX3h5MmFuZ2xlKHgseSk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fYW5nbGUydmFsdWUoYW5nbGUpO1xuICAgIHRoaXMuX2RyYWdwb3MocG9zKTtcbiAgfVxuXG4gIF9kcmFncG9zKHBvcykge1xuICAgIGlmKHBvcyA8IHRoaXMuX3JvdGF0aW9uLm1pbiB8fCBwb3MgPiB0aGlzLl9yb3RhdGlvbi5tYXgpIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICB0aGlzW2hhbmRsZS5pZF0gPSBwb3M7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5naW5nJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIFtoYW5kbGUuaWRdIDogcG9zLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBfa2V5U3RlcChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICBpZihldi5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpXG4gICAgICBpZih0aGlzLnJ0bClcbiAgICAgICAgdGhpcy5fZHJhZ3Bvcyh0aGlzW2hhbmRsZS5pZF0gKyB0aGlzLnN0ZXApO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgaWYoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIilcbiAgICAgIGlmKHRoaXMucnRsKVxuICAgICAgICB0aGlzLl9kcmFncG9zKHRoaXNbaGFuZGxlLmlkXSAtIHRoaXMuc3RlcCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX2RyYWdwb3ModGhpc1toYW5kbGUuaWRdICsgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnRW5kLmJpbmQodGhpcyksIHtwYXNzaXZlOiBmYWxzZX0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZy5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2tleVN0ZXAuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciB2ZWN0b3ItZWZmZWN0IG5vdCB3b3JraW5nIGluIElFIGFuZCBwcmUtQ2hyb21pdW0gRWRnZVxuICAgIC8vIFRoYXQncyBhbHNvIHdoeSB0aGUgX3NjYWxlIHByb3BlcnR5IGV4aXN0c1xuICAgIGlmKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpXG4gICAgJiYgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuc3R5bGUudmVjdG9yRWZmZWN0ICE9PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiX3NjYWxlXCIpICYmIHRoaXMuX3NjYWxlICE9IDEpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwYXRoXCIpLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG9yaWcgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZSkuZ2V0UHJvcGVydHlWYWx1ZSgnc3Ryb2tlLXdpZHRoJykpO1xuICAgICAgICBlLnN0eWxlLnN0cm9rZVdpZHRoID0gYCR7b3JpZyp0aGlzLl9zY2FsZX1weGA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgIHRoaXMuX3NjYWxlID0gMi9zY2FsZTtcbiAgfVxuXG5cblxuICBfcmVuZGVyQXJjKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBkaWZmID0gZW5kLXN0YXJ0O1xuICAgIHN0YXJ0ID0gdGhpcy5fYW5nbGUyeHkoc3RhcnQpO1xuICAgIGVuZCA9IHRoaXMuX2FuZ2xlMnh5KGVuZCswLjAwMSk7IC8vIFNhZmFyaSBkb2Vzbid0IGxpa2UgYXJjcyB3aXRoIG5vIGxlbmd0aFxuICAgIHJldHVybiBgXG4gICAgICBNICR7c3RhcnQueH0gJHtzdGFydC55fVxuICAgICAgQSAxIDEsXG4gICAgICAgIDAsXG4gICAgICAgICR7KGRpZmYpID4gTWF0aC5QSSA/IFwiMVwiIDogXCIwXCJ9ICR7dGhpcy5ydGwgPyBcIjBcIiA6IFwiMVwifSxcbiAgICAgICAgJHtlbmQueH0gJHtlbmQueX1cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckhhbmRsZShpZCkge1xuICAgIGNvbnN0IHRoZXRhID0gdGhpcy5fdmFsdWUyYW5nbGUodGhpc1tpZF0pO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX2FuZ2xlMnh5KHRoZXRhKTtcblxuICAgIC8vIFR3byBoYW5kbGVzIGFyZSBkcmF3bi4gT25lIHZpc2libGUsIGFuZCBvbmUgaW52aXNpYmxlIHRoYXQncyB0d2ljZSBhc1xuICAgIC8vIGJpZy4gTWFrZXMgaXQgZWFzaWVyIHRvIGNsaWNrLlxuICAgIHJldHVybiBzdmdgXG4gICAgICA8ZyBjbGFzcz1cIiR7aWR9IGhhbmRsZVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPSR7aWR9XG4gICAgICAgICAgY2xhc3M9XCJvdmVyZmxvd1wiXG4gICAgICAgICAgZD1cIlxuICAgICAgICAgIE0gJHtwb3MueH0gJHtwb3MueX1cbiAgICAgICAgICBMICR7cG9zLngrMC4wMDF9ICR7cG9zLnkrMC4wMDF9XG4gICAgICAgICAgXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICBzdHJva2U9XCJyZ2JhKDAsMCwwLDApXCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIkezQqdGhpcy5oYW5kbGVTaXplKnRoaXMuX3NjYWxlfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD0ke2lkfVxuICAgICAgICAgIGNsYXNzPVwiaGFuZGxlXCJcbiAgICAgICAgICBkPVwiXG4gICAgICAgICAgTSAke3Bvcy54fSAke3Bvcy55fVxuICAgICAgICAgIEwgJHtwb3MueCswLjAwMX0gJHtwb3MueSswLjAwMX1cbiAgICAgICAgICBcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIiR7Mip0aGlzLmhhbmRsZVNpemUqdGhpcy5fc2NhbGV9XCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIEBmb2N1cz0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICAgIEBibHVyPSR7dGhpcy5kcmFnRW5kfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIGBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuX2JvdW5kYXJpZXM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdmdcbiAgICAgICAgQG1vdXNlZG93bj0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICBAdG91Y2hzdGFydD0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgICB4bWxuPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiJHstdmlldy5sZWZ0fSAkey12aWV3LnVwfSAke3ZpZXcud2lkdGh9ICR7dmlldy5oZWlnaHR9XCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW46ICR7dGhpcy5oYW5kbGVTaXplKnRoaXMuaGFuZGxlWm9vbX1weDtcIlxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICA+XG4gICAgICAgIDxnIGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzPVwicGF0aFwiXG4gICAgICAgICAgICBkPSR7dGhpcy5fcmVuZGVyQXJjKHRoaXMuX3N0YXJ0LCB0aGlzLl9lbmQpfVxuICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICAkeyB0aGlzLl9lbmFibGVkXG4gICAgICAgICAgICA/IHN2Z2BcbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJhclwiXG4gICAgICAgICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMubG93ICE9IG51bGwgPyB0aGlzLmxvdyA6IHRoaXMubWluKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlMmFuZ2xlKHRoaXMuaGlnaCAhPSBudWxsID8gdGhpcy5oaWdoIDogdGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPmBcbiAgICAgICAgICAgIDogYGBcbiAgICAgICAgICB9XG4gICAgICAgIDwvZz5cblxuICAgICAgICA8ZyBjbGFzcz1cImhhbmRsZXNcIj5cbiAgICAgICAgJHsgdGhpcy5fZW5hYmxlZFxuICAgICAgICAgID8gdGhpcy5sb3cgIT0gbnVsbFxuICAgICAgICAgICAgICA/IHRoaXMuX3JldmVyc2VPcmRlclxuICAgICAgICAgICAgICAgID8gaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcImhpZ2hcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwibG93XCIpfWBcbiAgICAgICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJsb3dcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwiaGlnaFwiKX1gXG4gICAgICAgICAgICAgIDogaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcInZhbHVlXCIpfWBcbiAgICAgICAgICA6IGBgXG4gICAgICAgIH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBzdmcge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIC5zbGlkZXIge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLXdpZHRoLCAzKTtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHZhcigtLXJvdW5kLXNsaWRlci1saW5lY2FwLCByb3VuZCk7XG4gICAgICB9XG4gICAgICAucGF0aCB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLXBhdGgtY29sb3IsIGxpZ2h0Z3JheSk7XG4gICAgICB9XG4gICAgICAuYmFyIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSk7XG4gICAgICB9XG4gICAgICBnLmhhbmRsZXMge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1oYW5kbGUtY29sb3IsIHZhcigtLXJvdW5kLXNsaWRlci1iYXItY29sb3IsIGRlZXBza3libHVlKSk7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIH1cbiAgICAgIGcubG93LmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWxvdy1oYW5kbGUtY29sb3IpO1xuICAgICAgfVxuICAgICAgZy5oaWdoLmhhbmRsZSB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWhpZ2gtaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5oYW5kbGU6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncm91bmQtc2xpZGVyJywgUm91bmRTbGlkZXIpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydCwgUHJvcGVydHlQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVJbmZvIHtcbiAgcmVhZG9ubHkgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIFN0eWxlSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IFN0eWxlSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3Qgc3R5bGVNYXBDYWNoZSA9IG5ldyBXZWFrTWFwPEF0dHJpYnV0ZVBhcnQsIFN0eWxlSW5mbz4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0ZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm8ge1N0eWxlSW5mb31cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKChzdHlsZUluZm86IFN0eWxlSW5mbykgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKCEocGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHx8IChwYXJ0IGluc3RhbmNlb2YgUHJvcGVydHlQYXJ0KSB8fFxuICAgICAgcGFydC5jb21taXR0ZXIubmFtZSAhPT0gJ3N0eWxlJyB8fCBwYXJ0LmNvbW1pdHRlci5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgc3R5bGUgYXR0cmlidXRlICcgK1xuICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICB9XG5cbiAgY29uc3Qge2NvbW1pdHRlcn0gPSBwYXJ0O1xuICBjb25zdCB7c3R5bGV9ID0gY29tbWl0dGVyLmVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgLy8gSGFuZGxlIHN0YXRpYyBzdHlsZXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGEgUGFydFxuICBpZiAoIXN0eWxlTWFwQ2FjaGUuaGFzKHBhcnQpKSB7XG4gICAgc3R5bGUuY3NzVGV4dCA9IGNvbW1pdHRlci5zdHJpbmdzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBvbGQgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdCBpbiBzdHlsZUluZm9cbiAgY29uc3Qgb2xkSW5mbyA9IHN0eWxlTWFwQ2FjaGUuZ2V0KHBhcnQpO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gb2xkSW5mbykge1xuICAgIGlmICghKG5hbWUgaW4gc3R5bGVJbmZvKSkge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBvciB1cGRhdGUgcHJvcGVydGllc1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBzdHlsZUluZm9bbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHN0eWxlSW5mb1tuYW1lXSk7XG4gICAgfVxuICB9XG4gIHN0eWxlTWFwQ2FjaGUuc2V0KHBhcnQsIHN0eWxlSW5mbyk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUFYQTtBQXNDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFyQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFFQTtBQUNBO0FBdUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBZEE7QUFnQkE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWFBO0FBQ0E7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQStCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQTRCQTs7O0FBRUE7QUFDQTtBQUVBO0FBeUNBOzs7QUFwU0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUE2TkE7QUFDQTtBQWlDQTs7OztBQTVXQTtBQUNBO0FBOFdBOzs7Ozs7Ozs7Ozs7QUN0WEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQU1BOzs7OztBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2Q0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==