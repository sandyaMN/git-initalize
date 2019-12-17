(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-states"],{

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

/***/ "./node_modules/@polymer/iron-pages/iron-pages.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-pages/iron-pages.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,
  is: 'iron-pages',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"], _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronSelectableBehavior"]],
  properties: {
    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {
      type: String,
      value: null
    }
  },
  observers: ['_selectedPageChanged(selected)'],
  _selectedPageChanged: function (selected, old) {
    this.async(this.notifyResize);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./src/cards/ha-badges-card.ts":
/*!*************************************!*\
  !*** ./src/cards/ha-badges-card.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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






let HaBadgesCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-badges-card")], function (_initialize, _LitElement) {
  class HaBadgesCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaBadgesCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "states",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.states) {
          return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.states.map(state => lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <ha-state-label-badge
            .hass=${this.hass}
            .state=${state}
            @click=${this._handleClick}
          ></ha-state-label-badge>
        `)}
    `;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(ev) {
        const entityId = ev.target.state.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/cards/ha-camera-card.js":
/*!*************************************!*\
  !*** ./src/cards/ha-camera-card.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");







const UPDATE_INTERVAL = 10000; // ms

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaCameraCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="paper-material-styles">
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
          cursor: pointer;
          min-height: 48px;
          line-height: 0;
        }
        .camera-feed {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        .caption {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;

          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;

          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          color: white;
        }
      </style>

      <template is="dom-if" if="[[cameraFeedSrc]]">
        <img
          src="[[cameraFeedSrc]]"
          class="camera-feed"
          alt="[[_computeStateName(stateObj)]]"
          on-load="_imageLoaded"
          on-error="_imageError"
        />
      </template>
      <div class="caption">
        [[_computeStateName(stateObj)]]
        <template is="dom-if" if="[[!imageLoaded]]">
          ([[localize('ui.card.camera.not_available')]])
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "updateCameraFeedSrc"
      },
      cameraFeedSrc: {
        type: String,
        value: ""
      },
      imageLoaded: {
        type: Boolean,
        value: true
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", () => this.cardTapped());
  }

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => this.updateCameraFeedSrc(), UPDATE_INTERVAL);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  _imageLoaded() {
    this.imageLoaded = true;
  }

  _imageError() {
    this.imageLoaded = false;
  }

  cardTapped() {
    this.fire("hass-more-info", {
      entityId: this.stateObj.entity_id
    });
  }

  async updateCameraFeedSrc() {
    this.cameraFeedSrc = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.stateObj.entity_id);
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj);
  }

}

customElements.define("ha-camera-card", HaCameraCard);

/***/ }),

/***/ "./src/cards/ha-card-chooser.js":
/*!**************************************!*\
  !*** ./src/cards/ha-card-chooser.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_camera_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-camera-card */ "./src/cards/ha-camera-card.js");
/* harmony import */ var _ha_entities_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-entities-card */ "./src/cards/ha-entities-card.js");
/* harmony import */ var _ha_history_graph_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _ha_media_player_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-media_player-card */ "./src/cards/ha-media_player-card.js");
/* harmony import */ var _ha_persistent_notification_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-persistent_notification-card */ "./src/cards/ha-persistent_notification-card.js");
/* harmony import */ var _ha_plant_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-plant-card */ "./src/cards/ha-plant-card.js");
/* harmony import */ var _ha_weather_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-weather-card */ "./src/cards/ha-weather-card.js");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");










class HaCardChooser extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      cardData: {
        type: Object,
        observer: "cardDataChanged"
      }
    };
  }

  _updateCard(newData) {
    Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "HA-" + newData.cardType.toUpperCase() + "-CARD", newData);
  }

  createObserver() {
    this._updatesAllowed = false;
    this.observer = new IntersectionObserver(entries => {
      if (!entries.length) return;

      if (entries[0].isIntersecting) {
        this.style.height = "";

        if (this._detachedChild) {
          this.appendChild(this._detachedChild);
          this._detachedChild = null;
        }

        this._updateCard(this.cardData); // Don't use 'newData' as it might have changed.


        this._updatesAllowed = true;
      } else {
        // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
        // following cards would trigger the observer at once.
        const offsetHeight = this.offsetHeight;
        this.style.height = `${offsetHeight || 48}px`;

        if (this.lastChild) {
          this._detachedChild = this.lastChild;
          this.removeChild(this.lastChild);
        }

        this._updatesAllowed = false;
      }
    });
    this.observer.observe(this);
  }

  cardDataChanged(newData) {
    if (!newData) return; // ha-entities-card is exempt from observer as it doesn't load heavy resources.
    // and usually doesn't load external resources (except for entity_picture).

    const eligibleToObserver = window.IntersectionObserver && newData.cardType !== "entities";

    if (!eligibleToObserver) {
      if (this.observer) {
        this.observer.unobserve(this);
        this.observer = null;
      }

      this.style.height = "";

      this._updateCard(newData);

      return;
    }

    if (!this.observer) {
      this.createObserver();
    }

    if (this._updatesAllowed) {
      this._updateCard(newData);
    }
  }

}

customElements.define("ha-card-chooser", HaCardChooser);

/***/ }),

/***/ "./src/cards/ha-entities-card.js":
/*!***************************************!*\
  !*** ./src/cards/ha-entities-card.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");













class HaEntitiesCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex"></style>
      <style>
        ha-card {
          padding: 16px;
        }
        .states {
          margin: -4px 0;
        }
        .state {
          padding: 4px 0;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
           compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        ha-entity-toggle {
          margin-left: 16px;
        }
        .more-info {
          cursor: pointer;
        }
      </style>

      <ha-card>
        <template is="dom-if" if="[[title]]">
          <div
            class$="[[computeTitleClass(groupEntity)]]"
            on-click="entityTapped"
          >
            <div class="flex name">[[title]]</div>
            <template is="dom-if" if="[[showGroupToggle(groupEntity, states)]]">
              <ha-entity-toggle
                hass="[[hass]]"
                state-obj="[[groupEntity]]"
              ></ha-entity-toggle>
            </template>
          </div>
        </template>
        <div class="states">
          <template
            is="dom-repeat"
            items="[[states]]"
            on-dom-change="addTapEvents"
          >
            <div class$="[[computeStateClass(item)]]">
              <state-card-content
                hass="[[hass]]"
                class="state-card"
                state-obj="[[item]]"
              ></state-card-content>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      states: Array,
      groupEntity: Object,
      title: {
        type: String,
        computed: "computeTitle(states, groupEntity, localize)"
      }
    };
  }

  constructor() {
    super(); // We need to save a single bound function reference to ensure the event listener
    // can identify it properly.

    this.entityTapped = this.entityTapped.bind(this);
  }

  computeTitle(states, groupEntity, localize) {
    if (groupEntity) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(groupEntity).trim();
    }

    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(states[0]);
    return localize && localize(`domain.${domain}`) || domain.replace(/_/g, " ");
  }

  computeTitleClass(groupEntity) {
    let classes = "header horizontal layout center ";

    if (groupEntity) {
      classes += "more-info";
    }

    return classes;
  }

  computeStateClass(stateObj) {
    return Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__["stateMoreInfoType"])(stateObj) !== "hidden" ? "state more-info" : "state";
  }

  addTapEvents() {
    const cards = this.root.querySelectorAll(".state");
    cards.forEach(card => {
      if (card.classList.contains("more-info")) {
        card.addEventListener("click", this.entityTapped);
      } else {
        card.removeEventListener("click", this.entityTapped);
      }
    });
  }

  entityTapped(ev) {
    const item = this.root.querySelector("dom-repeat").itemForElement(ev.target);
    let entityId;

    if (!item && !this.groupEntity) {
      return;
    }

    ev.stopPropagation();

    if (item) {
      entityId = item.entity_id;
    } else {
      entityId = this.groupEntity.entity_id;
    }

    this.fire("hass-more-info", {
      entityId: entityId
    });
  }

  showGroupToggle(groupEntity, states) {
    if (!groupEntity || !states || groupEntity.attributes.control === "hidden" || groupEntity.state !== "on" && groupEntity.state !== "off") {
      return false;
    } // Only show if we can toggle 2+ entities in group


    let canToggleCount = 0;

    for (let i = 0; i < states.length; i++) {
      if (!Object(_common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__["canToggleState"])(this.hass, states[i])) {
        continue;
      }

      canToggleCount++;

      if (canToggleCount > 1) {
        break;
      }
    }

    return canToggleCount > 1;
  }

}

customElements.define("ha-entities-card", HaEntitiesCard);

/***/ }),

/***/ "./src/cards/ha-persistent_notification-card.js":
/*!******************************************************!*\
  !*** ./src/cards/ha-persistent_notification-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");








/*
 * @appliesMixin LocalizeMixin
 */

class HaPersistentNotificationCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        ha-markdown p:first-child {
          margin-top: 0;
        }
        ha-markdown p:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
        mwc-button {
          margin: 8px;
        }
      </style>

      <ha-card header="[[computeTitle(stateObj)]]">
        <ha-markdown content="[[stateObj.attributes.message]]"></ha-markdown>
        <mwc-button on-click="dismissTap"
          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button
        >
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

  computeTitle(stateObj) {
    return stateObj.attributes.title || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj);
  }

  dismissTap(ev) {
    ev.preventDefault();
    this.hass.callService("persistent_notification", "dismiss", {
      notification_id: Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__["computeObjectId"])(this.stateObj.entity_id)
    });
  }

}

customElements.define("ha-persistent_notification-card", HaPersistentNotificationCard);

/***/ }),

/***/ "./src/cards/ha-plant-card.js":
/*!************************************!*\
  !*** ./src/cards/ha-plant-card.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");







class HaPlantCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .banner {
          display: flex;
          align-items: flex-end;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          padding-top: 12px;
        }
        .has-plant-image .banner {
          padding-top: 30%;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          padding: 8px 16px;
        }
        .has-plant-image .header {
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          padding: 16px;
          color: white;
          width: 100%;
          background: rgba(0, 0, 0, var(--dark-secondary-opacity));
        }
        .content {
          display: flex;
          justify-content: space-between;
          padding: 16px 32px 24px 32px;
        }
        .has-plant-image .content {
          padding-bottom: 16px;
        }
        ha-icon {
          color: var(--paper-item-icon-color);
          margin-bottom: 8px;
        }
        .attributes {
          cursor: pointer;
        }
        .attributes div {
          text-align: center;
        }
        .problem {
          color: var(--google-red-500);
          font-weight: bold;
        }
        .uom {
          color: var(--secondary-text-color);
        }
      </style>

      <ha-card
        class$="[[computeImageClass(stateObj.attributes.entity_picture)]]"
      >
        <div
          class="banner"
          style="background-image:url([[stateObj.attributes.entity_picture]])"
        >
          <div class="header">[[computeTitle(stateObj)]]</div>
        </div>
        <div class="content">
          <template
            is="dom-repeat"
            items="[[computeAttributes(stateObj.attributes)]]"
          >
            <div class="attributes" on-click="attributeClicked">
              <div>
                <ha-icon
                  icon="[[computeIcon(item, stateObj.attributes.battery)]]"
                ></ha-icon>
              </div>
              <div
                class$="[[computeAttributeClass(stateObj.attributes.problem, item)]]"
              >
                [[computeValue(stateObj.attributes, item)]]
              </div>
              <div class="uom">
                [[computeUom(stateObj.attributes.unit_of_measurement_dict,
                item)]]
              </div>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      config: Object
    };
  }

  constructor() {
    super();
    this.sensors = {
      moisture: "hass:water",
      temperature: "hass:thermometer",
      brightness: "hass:white-balance-sunny",
      conductivity: "hass:emoticon-poop",
      battery: "hass:battery"
    };
  }

  computeTitle(stateObj) {
    return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
  }

  computeAttributes(data) {
    return Object.keys(this.sensors).filter(key => key in data);
  }

  computeIcon(attr, batLvl) {
    const icon = this.sensors[attr];

    if (attr === "battery") {
      if (batLvl <= 5) {
        return `${icon}-alert`;
      }

      if (batLvl < 95) {
        return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
      }
    }

    return icon;
  }

  computeValue(attributes, attr) {
    return attributes[attr];
  }

  computeUom(dict, attr) {
    return dict[attr] || "";
  }

  computeAttributeClass(problem, attr) {
    return problem.indexOf(attr) === -1 ? "" : "problem";
  }

  computeImageClass(entityPicture) {
    return entityPicture ? "has-plant-image" : "";
  }

  attributeClicked(ev) {
    this.fire("hass-more-info", {
      entityId: this.stateObj.attributes.sensors[ev.model.item]
    });
  }

}

customElements.define("ha-plant-card", HaPlantCard);

/***/ }),

/***/ "./src/cards/ha-weather-card.js":
/*!**************************************!*\
  !*** ./src/cards/ha-weather-card.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");








/*
 * @appliesMixin LocalizeMixin
 */

class HaWeatherCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          cursor: pointer;
        }

        .content {
          padding: 0 20px 20px;
        }

        ha-icon {
          color: var(--paper-item-icon-color);
        }

        .header {
          font-family: var(--paper-font-headline_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-headline_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-headline_-_font-size);
          font-weight: var(--paper-font-headline_-_font-weight);
          letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height);
          text-rendering: var(
            --paper-font-common-expensive-kerning_-_text-rendering
          );
          opacity: var(--dark-primary-opacity);
          padding: 24px 16px 16px;
          display: flex;
          align-items: baseline;
        }

        .name {
          margin-left: 16px;
          font-size: 16px;
          color: var(--secondary-text-color);
        }

        :host([rtl]) .name {
          margin-left: 0px;
          margin-right: 16px;
        }

        .now {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .main {
          display: flex;
          align-items: center;
          margin-right: 32px;
        }

        :host([rtl]) .main {
          margin-right: 0px;
        }

        .main ha-icon {
          --iron-icon-height: 72px;
          --iron-icon-width: 72px;
          margin-right: 8px;
        }

        :host([rtl]) .main ha-icon {
          margin-right: 0px;
        }

        .main .temp {
          font-size: 52px;
          line-height: 1em;
          position: relative;
        }

        :host([rtl]) .main .temp {
          direction: ltr;
          margin-right: 28px;
        }

        .main .temp span {
          font-size: 24px;
          line-height: 1em;
          position: absolute;
          top: 4px;
        }

        .measurand {
          display: inline-block;
        }

        :host([rtl]) .measurand {
          direction: ltr;
        }

        .forecast {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
        }

        .forecast div {
          flex: 0 0 auto;
          text-align: center;
        }

        .forecast .icon {
          margin: 4px 0;
          text-align: center;
        }

        :host([rtl]) .forecast .temp {
          direction: ltr;
        }

        .weekday {
          font-weight: bold;
        }

        .attributes,
        .templow,
        .precipitation {
          color: var(--secondary-text-color);
        }

        :host([rtl]) .precipitation {
          direction: ltr;
        }
      </style>
      <ha-card>
        <div class="header">
          [[computeState(stateObj.state, localize)]]
          <div class="name">[[computeName(stateObj)]]</div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              <template is="dom-if" if="[[showWeatherIcon(stateObj.state)]]">
                <ha-icon icon="[[getWeatherIcon(stateObj.state)]]"></ha-icon>
              </template>
              <div class="temp">
                [[stateObj.attributes.temperature]]<span
                  >[[getUnit('temperature')]]</span
                >
              </div>
            </div>
            <div class="attributes">
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.pressure)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.air_pressure')]]:
                  <span class="measurand">
                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
                  </span>
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.humidity)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.humidity')]]:
                  <span class="measurand"
                    >[[stateObj.attributes.humidity]] %</span
                  >
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.wind_speed)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.wind_speed')]]:
                  <span class="measurand">
                    [[getWindSpeed(stateObj.attributes.wind_speed)]]
                  </span>
                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]
                </div>
              </template>
            </div>
          </div>
          <template is="dom-if" if="[[forecast]]">
            <div class="forecast">
              <template is="dom-repeat" items="[[forecast]]">
                <div>
                  <div class="weekday">
                    [[computeDate(item.datetime)]]<br />
                    <template is="dom-if" if="[[!_showValue(item.templow)]]">
                      [[computeTime(item.datetime)]]
                    </template>
                  </div>
                  <template is="dom-if" if="[[_showValue(item.condition)]]">
                    <div class="icon">
                      <ha-icon
                        icon="[[getWeatherIcon(item.condition)]]"
                      ></ha-icon>
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.temperature)]]">
                    <div class="temp">
                      [[item.temperature]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.templow)]]">
                    <div class="templow">
                      [[item.templow]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.precipitation)]]">
                    <div class="precipitation">
                      [[item.precipitation]] [[getUnit('precipitation')]]
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      config: Object,
      stateObj: Object,
      forecast: {
        type: Array,
        computed: "computeForecast(stateObj.attributes.forecast)"
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  constructor() {
    super();
    this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      exceptional: "hass:alert-circle-outline",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partly-cloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant"
    };
  }

  ready() {
    this.addEventListener("click", this._onClick);
    super.ready();
  }

  _onClick() {
    this.fire("hass-more-info", {
      entityId: this.stateObj.entity_id
    });
  }

  computeForecast(forecast) {
    return forecast && forecast.slice(0, 5);
  }

  getUnit(measure) {
    const lengthUnit = this.hass.config.unit_system.length || "";

    switch (measure) {
      case "air_pressure":
        return lengthUnit === "km" ? "hPa" : "inHg";

      case "length":
        return lengthUnit;

      case "precipitation":
        return lengthUnit === "km" ? "mm" : "in";

      default:
        return this.hass.config.unit_system[measure] || "";
    }
  }

  computeState(state, localize) {
    return localize(`state.weather.${state}`) || state;
  }

  computeName(stateObj) {
    return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
  }

  showWeatherIcon(condition) {
    return condition in this.weatherIcons;
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  windBearingToText(degree) {
    const degreenum = parseInt(degree);

    if (isFinite(degreenum)) {
      return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
    }

    return degree;
  }

  getWindSpeed(speed) {
    return `${speed} ${this.getUnit("length")}/h`;
  }

  getWindBearing(bearing, localize) {
    if (bearing != null) {
      const cardinalDirection = this.windBearingToText(bearing);
      return `(${localize(`ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`) || cardinalDirection})`;
    }

    return ``;
  }

  _showValue(item) {
    return typeof item !== "undefined" && item !== null;
  }

  computeDate(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, {
      weekday: "short"
    });
  }

  computeTime(data) {
    const date = new Date(data);
    return date.toLocaleTimeString(this.hass.language, {
      hour: "numeric"
    });
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
  }

}

customElements.define("ha-weather-card", HaWeatherCard);

/***/ }),

/***/ "./src/common/config/location_name.ts":
/*!********************************************!*\
  !*** ./src/common/config/location_name.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeLocationName; });
/** Get the location name from a hass object. */
function computeLocationName(hass) {
  return hass && hass.config.location_name;
}

/***/ }),

/***/ "./src/components/ha-cards.js":
/*!************************************!*\
  !*** ./src/components/ha-cards.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_badges_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/ha-badges-card */ "./src/cards/ha-badges-card.ts");
/* harmony import */ var _cards_ha_card_chooser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/ha-card-chooser */ "./src/cards/ha-card-chooser.js");
/* harmony import */ var _ha_demo_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-demo-badge */ "./src/components/ha-demo-badge.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts");
/* harmony import */ var _common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/entity/get_group_entities */ "./src/common/entity/get_group_entities.ts");










 // mapping domain to size of the card.

const DOMAINS_WITH_CARD = {
  camera: 4,
  history_graph: 4,
  media_player: 3,
  persistent_notification: 0,
  plant: 3,
  weather: 4
}; // 4 types:
// badges: 0 .. 10
// before groups < 0
// groups: X
// rest: 100

const PRIORITY = {
  // before groups < 0
  configurator: -20,
  persistent_notification: -15,
  // badges have priority >= 0
  updater: 0,
  sun: 1,
  person: 2,
  device_tracker: 3,
  alarm_control_panel: 4,
  timer: 5,
  sensor: 6,
  binary_sensor: 7,
  mailbox: 8
};

const getPriority = domain => domain in PRIORITY ? PRIORITY[domain] : 100;

const sortPriority = (domainA, domainB) => domainA.priority - domainB.priority;

const entitySortBy = (entityA, entityB) => {
  const nameA = (entityA.attributes.friendly_name || entityA.entity_id).toLowerCase();
  const nameB = (entityB.attributes.friendly_name || entityB.entity_id).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

const iterateDomainSorted = (collection, func) => {
  Object.keys(collection).map(key => collection[key]).sort(sortPriority).forEach(domain => {
    domain.states.sort(entitySortBy);
    func(domain);
  });
};

class HaCards extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex iron-flex-factors"></style>
      <style>
        :host {
          display: block;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
        }

        .badges {
          font-size: 85%;
          text-align: center;
          padding-top: 16px;
        }

        .column {
          max-width: 500px;
          overflow-x: hidden;
        }

        ha-card-chooser {
          display: block;
          margin: 4px 4px 8px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          ha-card-chooser {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>

      <div id="main">
        <template is="dom-if" if="[[cards.badges.length]]">
          <div class="badges">
            <template is="dom-if" if="[[cards.demo]]">
              <ha-demo-badge></ha-demo-badge>
            </template>

            <ha-badges-card
              states="[[cards.badges]]"
              hass="[[hass]]"
            ></ha-badges-card>
          </div>
        </template>

        <div class="horizontal layout center-justified">
          <template is="dom-repeat" items="[[cards.columns]]" as="column">
            <div class="column flex-1">
              <template is="dom-repeat" items="[[column]]" as="card">
                <ha-card-chooser card-data="[[card]]"></ha-card-chooser>
              </template>
            </div>
          </template>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      columns: {
        type: Number,
        value: 2
      },
      states: Object,
      viewVisible: {
        type: Boolean,
        value: false
      },
      orderedGroupEntities: Array,
      cards: Object
    };
  }

  static get observers() {
    return ["updateCards(columns, states, viewVisible, orderedGroupEntities)"];
  }

  updateCards(columns, states, viewVisible, orderedGroupEntities) {
    if (!viewVisible) {
      if (this.$.main.parentNode) {
        this.$.main._parentNode = this.$.main.parentNode;
        this.$.main.parentNode.removeChild(this.$.main);
      }

      return;
    }

    if (!this.$.main.parentNode && this.$.main._parentNode) {
      this.$.main._parentNode.appendChild(this.$.main);
    }

    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(10), () => {
      // Things might have changed since it got scheduled.
      if (this.viewVisible) {
        this.cards = this.computeCards(columns, states, orderedGroupEntities);
      }
    });
  }

  emptyCards() {
    return {
      demo: false,
      badges: [],
      columns: []
    };
  }

  computeCards(columns, states, orderedGroupEntities) {
    const hass = this.hass;
    const cards = this.emptyCards();
    const entityCount = [];

    for (let i = 0; i < columns; i++) {
      cards.columns.push([]);
      entityCount.push(0);
    } // Find column with < 5 entities, else column with lowest count


    function getIndex(size) {
      let minIndex = 0;

      for (let i = 0; i < entityCount.length; i++) {
        if (entityCount[i] < 5) {
          minIndex = i;
          break;
        }

        if (entityCount[i] < entityCount[minIndex]) {
          minIndex = i;
        }
      }

      entityCount[minIndex] += size;
      return minIndex;
    }

    function addEntitiesCard(name, entities, groupEntity) {
      if (entities.length === 0) return;
      const owncard = [];
      const other = [];
      let size = 0;
      entities.forEach(entity => {
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity);

        if (domain in DOMAINS_WITH_CARD && !entity.attributes.custom_ui_state_card) {
          owncard.push(entity);
          size += DOMAINS_WITH_CARD[domain];
        } else {
          other.push(entity);
          size++;
        }
      }); // Add 1 to the size if we're rendering entities card

      size += other.length > 0;
      const curIndex = getIndex(size);

      if (other.length > 0) {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: "entities",
          states: other,
          groupEntity: groupEntity || false
        });
      }

      owncard.forEach(entity => {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity),
          stateObj: entity
        });
      });
    }

    const splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__["splitByGroups"])(states);

    if (orderedGroupEntities) {
      splitted.groups.sort((gr1, gr2) => orderedGroupEntities[gr1.entity_id] - orderedGroupEntities[gr2.entity_id]);
    } else {
      splitted.groups.sort((gr1, gr2) => gr1.attributes.order - gr2.attributes.order);
    }

    const badgesColl = {};
    const beforeGroupColl = {};
    const afterGroupedColl = {};
    Object.keys(splitted.ungrouped).forEach(key => {
      const state = splitted.ungrouped[key];
      const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(state);

      if (domain === "a") {
        cards.demo = true;
        return;
      }

      const priority = getPriority(domain);
      let coll;

      if (priority < 0) {
        coll = beforeGroupColl;
      } else if (priority < 10) {
        coll = badgesColl;
      } else {
        coll = afterGroupedColl;
      }

      if (!(domain in coll)) {
        coll[domain] = {
          domain: domain,
          priority: priority,
          states: []
        };
      }

      coll[domain].states.push(state);
    });

    if (orderedGroupEntities) {
      Object.keys(badgesColl).map(key => badgesColl[key]).forEach(domain => {
        cards.badges.push.apply(cards.badges, domain.states);
      });
      cards.badges.sort((e1, e2) => orderedGroupEntities[e1.entity_id] - orderedGroupEntities[e2.entity_id]);
    } else {
      iterateDomainSorted(badgesColl, domain => {
        cards.badges.push.apply(cards.badges, domain.states);
      });
    }

    iterateDomainSorted(beforeGroupColl, domain => {
      addEntitiesCard(domain.domain, domain.states);
    });
    splitted.groups.forEach(groupState => {
      const entities = Object(_common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__["getGroupEntities"])(states, groupState);
      addEntitiesCard(groupState.entity_id, Object.keys(entities).map(key => entities[key]), groupState);
    });
    iterateDomainSorted(afterGroupedColl, domain => {
      addEntitiesCard(domain.domain, domain.states);
    }); // Remove empty columns

    cards.columns = cards.columns.filter(val => val.length > 0);
    return cards;
  }

}

customElements.define("ha-cards", HaCards);

/***/ }),

/***/ "./src/components/ha-demo-badge.js":
/*!*****************************************!*\
  !*** ./src/components/ha-demo-badge.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-label-badge */ "./src/components/ha-label-badge.ts");




class HaDemoBadge extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          --ha-label-badge-color: #dac90d;
        }
      </style>

      <ha-label-badge
        icon="hass:emoticon"
        label="Demo"
        description=""
      ></ha-label-badge>
    `;
  }

}

customElements.define("ha-demo-badge", HaDemoBadge);

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

/***/ "./src/panels/states/ha-panel-states.js":
/*!**********************************************!*\
  !*** ./src/panels/states/ha-panel-states.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _components_ha_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-cards */ "./src/components/ha-cards.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/entity/extract_views */ "./src/common/entity/extract_views.ts");
/* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_location_name__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/config/location_name */ "./src/common/config/location_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dialogs/voice-command-dialog/show-ha-voice-command-dialog */ "./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");























const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
const ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];
/*
 * @appliesMixin EventsMixin
 * @appliesMixin NavigateMixin
 */

class PartialCards extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_20__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_19__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex iron-positioning ha-style">
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
          background-color: var(--secondary-background-color, #e5e5e5);
        }

        iron-pages {
          height: 100%;
        }

        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        active="{{routeMatch}}"
      ></app-route>
      <ha-app-layout id="layout">
        <app-header effects="waterfall" condenses="" fixed="" slot="header">
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title="">
              [[computeTitle(views, defaultView, locationName)]]
            </div>
            <paper-icon-button
              hidden$="[[!conversation]]"
              aria-label="Start conversation"
              icon="hass:microphone"
              on-click="_showVoiceCommandDialog"
            ></paper-icon-button>
          </app-toolbar>

          <div sticky="" hidden$="[[areTabsHidden(views, showTabs)]]">
            <paper-tabs
              scrollable=""
              selected="[[currentView]]"
              attr-for-selected="data-entity"
              on-iron-activate="handleViewSelected"
            >
              <paper-tab data-entity="" on-click="scrollToTop">
                <template is="dom-if" if="[[!defaultView]]">
                  Home
                </template>
                <template is="dom-if" if="[[defaultView]]">
                  <template is="dom-if" if="[[defaultView.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(defaultView)]]"
                      icon="[[defaultView.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!defaultView.attributes.icon]]">
                    [[_computeStateName(defaultView)]]
                  </template>
                </template>
              </paper-tab>
              <template is="dom-repeat" items="[[views]]">
                <paper-tab
                  data-entity$="[[item.entity_id]]"
                  on-click="scrollToTop"
                >
                  <template is="dom-if" if="[[item.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(item)]]"
                      icon="[[item.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!item.attributes.icon]]">
                    [[_computeStateName(item)]]
                  </template>
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>

        <iron-pages
          attr-for-selected="data-view"
          selected="[[currentView]]"
          selected-attribute="view-visible"
        >
          <ha-cards
            data-view=""
            states="[[viewStates]]"
            columns="[[_columns]]"
            hass="[[hass]]"
            panel-visible="[[panelVisible]]"
            ordered-group-entities="[[orderedGroupEntities]]"
          ></ha-cards>

          <template is="dom-repeat" items="[[views]]">
            <ha-cards
              data-view$="[[item.entity_id]]"
              states="[[viewStates]]"
              columns="[[_columns]]"
              hass="[[hass]]"
              panel-visible="[[panelVisible]]"
              ordered-group-entities="[[orderedGroupEntities]]"
            ></ha-cards>
          </template>
        </iron-pages>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        value: null,
        observer: "hassChanged"
      },
      narrow: {
        type: Boolean,
        value: false
      },
      panelVisible: {
        type: Boolean,
        value: false
      },
      route: Object,
      routeData: Object,
      routeMatch: Boolean,
      _columns: {
        type: Number,
        value: 1
      },
      conversation: {
        type: Boolean,
        computed: "_computeConversation(hass)"
      },
      locationName: {
        type: String,
        value: "",
        computed: "_computeLocationName(hass)"
      },
      currentView: {
        type: String,
        computed: "_computeCurrentView(hass, routeMatch, routeData)"
      },
      views: {
        type: Array
      },
      defaultView: {
        type: Object
      },
      viewStates: {
        type: Object,
        computed: "computeViewStates(currentView, hass, defaultView)"
      },
      orderedGroupEntities: {
        type: Array,
        computed: "computeOrderedGroupEntities(currentView, hass, defaultView)"
      },
      showTabs: {
        type: Boolean,
        value: true
      }
    };
  }

  static get observers() {
    return ["_updateColumns(narrow, hass.dockedSidebar)"];
  }

  ready() {
    this._updateColumns = this._updateColumns.bind(this);
    this.mqls = [300, 600, 900, 1200].map(width => matchMedia(`(min-width: ${width}px)`));
    super.ready();
  }

  connectedCallback() {
    super.connectedCallback();
    this.mqls.forEach(mql => mql.addListener(this._updateColumns));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.mqls.forEach(mql => mql.removeListener(this._updateColumns));
  }

  _updateColumns() {
    const matchColumns = this.mqls.reduce((cols, mql) => cols + mql.matches, 0); // Do -1 column if the menu is docked and open

    this._columns = Math.max(1, matchColumns - (!this.narrow && this.hass.dockedSidebar === "docked"));
  }

  _computeConversation(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_22__["isComponentLoaded"])(hass, "conversation");
  }

  _showVoiceCommandDialog() {
    Object(_dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_21__["showVoiceCommandDialog"])(this);
  }

  areTabsHidden(views, showTabs) {
    return !views || !views.length || !showTabs;
  }
  /**
   * Scroll to a specific y coordinate.
   *
   * Copied from paper-scroll-header-panel.
   *
   * @method scroll
   * @param {number} top The coordinate to scroll to, along the y-axis.
   * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
   */


  scrollToTop() {
    // the scroll event will trigger _updateScrollState directly,
    // However, _updateScrollState relies on the previous `scrollTop` to update the states.
    // Calling _updateScrollState will ensure that the states are synced correctly.
    var top = 0;
    var scroller = this.$.layout.header.scrollTarget;

    var easingFn = function easeOutQuad(t, b, c, d) {
      /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
      t /= d;
      return -c * t * (t - 2) + b;
      /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
    };

    var animationId = Math.random();
    var duration = 200;
    var startTime = Date.now();
    var currentScrollTop = scroller.scrollTop;
    var deltaScrollTop = top - currentScrollTop;
    this._currentAnimationId = animationId;
    (function updateFrame() {
      var now = Date.now();
      var elapsedTime = now - startTime;

      if (elapsedTime > duration) {
        scroller.scrollTop = top;
      } else if (this._currentAnimationId === animationId) {
        scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
        requestAnimationFrame(updateFrame.bind(this));
      }
    }).call(this);
  }

  handleViewSelected(ev) {
    const view = ev.detail.item.getAttribute("data-entity") || null;

    if (view !== this.currentView) {
      let path = "/states";

      if (view) {
        path += "/" + view;
      }

      this.navigate(path);
    }
  }

  _computeCurrentView(hass, routeMatch, routeData) {
    if (!routeMatch) return "";

    if (!hass.states[routeData.view] || !hass.states[routeData.view].attributes.view) {
      return "";
    }

    return routeData.view;
  }

  computeTitle(views, defaultView, locationName) {
    return views && views.length > 0 && !defaultView && locationName === "Home" || !locationName ? "Home Assistant" : locationName;
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(stateObj);
  }

  _computeLocationName(hass) {
    return Object(_common_config_location_name__WEBPACK_IMPORTED_MODULE_18__["default"])(hass);
  }

  hassChanged(hass) {
    if (!hass) return;
    const views = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_14__["extractViews"])(hass.states);
    let defaultView = null; // If default view present, it's in first index.

    if (views.length > 0 && views[0].entity_id === DEFAULT_VIEW_ENTITY_ID) {
      defaultView = views.shift();
    }

    this.setProperties({
      views,
      defaultView
    });
  }

  isView(currentView, defaultView) {
    return (currentView || defaultView) && this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID];
  }

  _defaultViewFilter(hass, entityId) {
    // Filter out hidden
    return !hass.states[entityId].attributes.hidden;
  }

  _computeDefaultViewStates(hass, entityIds) {
    const states = {};
    entityIds.filter(this._defaultViewFilter.bind(null, hass)).forEach(entityId => {
      states[entityId] = hass.states[entityId];
    });
    return states;
  }
  /*
    Compute the states to show for current view.
     Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
  */


  computeViewStates(currentView, hass, defaultView) {
    const entityIds = Object.keys(hass.states); // If we base off all entities, only have to filter out hidden

    if (!this.isView(currentView, defaultView)) {
      return this._computeDefaultViewStates(hass, entityIds);
    }

    let states;

    if (currentView) {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_15__["getViewEntities"])(hass.states, hass.states[currentView]);
    } else {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_15__["getViewEntities"])(hass.states, hass.states[DEFAULT_VIEW_ENTITY_ID]);
    } // Make sure certain domains are always shown.


    entityIds.forEach(entityId => {
      const state = hass.states[entityId];

      if (ALWAYS_SHOW_DOMAIN.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_17__["computeStateDomain"])(state))) {
        states[entityId] = state;
      }
    });
    return states;
  }
  /*
    Compute the ordered list of groups for this view
  */


  computeOrderedGroupEntities(currentView, hass, defaultView) {
    if (!this.isView(currentView, defaultView)) {
      return null;
    }

    var orderedGroupEntities = {};
    var entitiesList = hass.states[currentView || DEFAULT_VIEW_ENTITY_ID].attributes.entity_id;

    for (var i = 0; i < entitiesList.length; i++) {
      orderedGroupEntities[entitiesList[i]] = i;
    }

    return orderedGroupEntities;
  }

}

customElements.define("ha-panel-states", PartialCards);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXNjcm9sbC1lZmZlY3RzL2VmZmVjdHMvd2F0ZXJmYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXBhZ2VzL2lyb24tcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLWJhZGdlcy1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1jYW1lcmEtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtY2FyZC1jaG9vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wbGFudC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS13ZWF0aGVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvbG9jYXRpb25fbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1kZW1vLWJhZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbmF2aWdhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9zdGF0ZXMvaGEtcGFuZWwtc3RhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWZmZWN0fSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuLyoqXG4gKiBUb2dnbGVzIHRoZSBzaGFkb3cgcHJvcGVydHkgaW4gYXBwLWhlYWRlciB3aGVuIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8gY3JlYXRlXG4gKiBhIHNlbnNlIG9mIGRlcHRoIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGguXG4gKi9cbnJlZ2lzdGVyRWZmZWN0KCd3YXRlcmZhbGwnLCB7XG4gIC8qKlxuICAgKiAgQHRoaXMgUG9seW1lci5BcHBMYXlvdXQuRWxlbWVudFdpdGhCYWNrZ3JvdW5kXG4gICAqL1xuICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuaXNPblNjcmVlbigpICYmIHRoaXMuaXNDb250ZW50QmVsb3coKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvblJlc2l6YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYGlyb24tcGFnZXNgIGlzIHVzZWQgdG8gc2VsZWN0IG9uZSBvZiBpdHMgY2hpbGRyZW4gdG8gc2hvdy4gT25lIHVzZSBpcyB0byBjeWNsZVxudGhyb3VnaCBhIGxpc3Qgb2YgY2hpbGRyZW4gXCJwYWdlc1wiLlxuXG5FeGFtcGxlOlxuXG4gICAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8ZGl2Pk9uZTwvZGl2PlxuICAgICAgPGRpdj5Ud288L2Rpdj5cbiAgICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgICA8L2lyb24tcGFnZXM+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tcGFnZXMnKTtcbiAgICAgICAgcGFnZXMuc2VsZWN0TmV4dCgpO1xuICAgICAgfSk7XG4gICAgPC9zY3JpcHQ+XG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKDpub3Qoc2xvdCk6bm90KC5pcm9uLXNlbGVjdGVkKSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLXBhZ2VzJyxcbiAgYmVoYXZpb3JzOiBbSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvLyBhcyB0aGUgc2VsZWN0ZWQgcGFnZSBpcyB0aGUgb25seSBvbmUgdmlzaWJsZSwgYWN0aXZhdGVFdmVudFxuICAgIC8vIGlzIGJvdGggbm9uLXNlbnNpY2FsIGFuZCBwcm9ibGVtYXRpYzsgZS5nLiBpbiBjYXNlcyB3aGVyZSBhIHVzZXJcbiAgICAvLyBoYW5kbGVyIGF0dGVtcHRzIHRvIGNoYW5nZSB0aGUgcGFnZSBhbmQgdGhlIGFjdGl2YXRlRXZlbnRcbiAgICAvLyBoYW5kbGVyIGltbWVkaWF0ZWx5IGNoYW5nZXMgaXQgYmFja1xuICAgIGFjdGl2YXRlRXZlbnQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zZWxlY3RlZFBhZ2VDaGFuZ2VkKHNlbGVjdGVkKSddLFxuXG4gIF9zZWxlY3RlZFBhZ2VDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3RlZCwgb2xkKSB7XG4gICAgdGhpcy5hc3luYyh0aGlzLm5vdGlmeVJlc2l6ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxpcm9uLWljb25zZXQtc3ZnIG5hbWU9XCJwYXBlci1kcm9wZG93bi1tZW51XCIgc2l6ZT1cIjI0XCI+XG48c3ZnPjxkZWZzPlxuPGcgaWQ9XCJhcnJvdy1kcm9wLWRvd25cIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIj48L3BhdGg+PC9nPlxuPC9kZWZzPjwvc3ZnPlxuPC9pcm9uLWljb25zZXQtc3ZnPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIC8qIE5PVEUoY2RhdGEpOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZVxuICAgICAgICAgKiB2YWx1ZSB0byBiZSBcXGB0cmFuc3BhcmVudFxcYC5cbiAgICAgICAgICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDoge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm9pbmtdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGlyb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCwgaHRtbCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWxhYmVsLWJhZGdlXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1iYWRnZXMtY2FyZFwiKVxuY2xhc3MgSGFCYWRnZXNDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlcz86IEhhc3NFbnRpdHlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnN0YXRlcy5tYXAoXG4gICAgICAgIChzdGF0ZSkgPT4gaHRtbGBcbiAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2VcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLnN0YXRlPSR7c3RhdGV9XG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja31cbiAgICAgICAgICA+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgYFxuICAgICAgKX1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2soZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoKGV2LnRhcmdldCBhcyBhbnkpLnN0YXRlIGFzIEhhc3NFbnRpdHkpLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZCxcbiAgICB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtYmFkZ2VzLWNhcmRcIjogSGFCYWRnZXNDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZSB9IGZyb20gXCIuLi9kYXRhL2NhbWVyYVwiO1xuXG5jb25zdCBVUERBVEVfSU5URVJWQUwgPSAxMDAwMDsgLy8gbXNcbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDYW1lcmFDYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYW1lcmEtZmVlZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2FtZXJhRmVlZFNyY11dXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJbW2NhbWVyYUZlZWRTcmNdXVwiXG4gICAgICAgICAgY2xhc3M9XCJjYW1lcmEtZmVlZFwiXG4gICAgICAgICAgYWx0PVwiW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVwiXG4gICAgICAgICAgb24tbG9hZD1cIl9pbWFnZUxvYWRlZFwiXG4gICAgICAgICAgb24tZXJyb3I9XCJfaW1hZ2VFcnJvclwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWltYWdlTG9hZGVkXV1cIj5cbiAgICAgICAgICAoW1tsb2NhbGl6ZSgndWkuY2FyZC5jYW1lcmEubm90X2F2YWlsYWJsZScpXV0pXG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInVwZGF0ZUNhbWVyYUZlZWRTcmNcIixcbiAgICAgIH0sXG4gICAgICBjYW1lcmFGZWVkU3JjOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgaW1hZ2VMb2FkZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2FyZFRhcHBlZCgpKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlQ2FtZXJhRmVlZFNyYygpLCBVUERBVEVfSU5URVJWQUwpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICB9XG5cbiAgX2ltYWdlTG9hZGVkKCkge1xuICAgIHRoaXMuaW1hZ2VMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgX2ltYWdlRXJyb3IoKSB7XG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY2FyZFRhcHBlZCgpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUNhbWVyYUZlZWRTcmMoKSB7XG4gICAgdGhpcy5jYW1lcmFGZWVkU3JjID0gYXdhaXQgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZFxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FtZXJhLWNhcmRcIiwgSGFDYW1lcmFDYXJkKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtY2FtZXJhLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtZW50aXRpZXMtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1oaXN0b3J5X2dyYXBoLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtbWVkaWFfcGxheWVyLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtcGVyc2lzdGVudF9ub3RpZmljYXRpb24tY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1wbGFudC1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXdlYXRoZXItY2FyZFwiO1xuXG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gXCIuLi9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyXCI7XG5cbmNsYXNzIEhhQ2FyZENob29zZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FyZERhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJjYXJkRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF91cGRhdGVDYXJkKG5ld0RhdGEpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgXCJIQS1cIiArIG5ld0RhdGEuY2FyZFR5cGUudG9VcHBlckNhc2UoKSArIFwiLUNBUkRcIixcbiAgICAgIG5ld0RhdGFcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5fdXBkYXRlc0FsbG93ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBpZiAoIWVudHJpZXMubGVuZ3RoKSByZXR1cm47XG4gICAgICBpZiAoZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLl9kZXRhY2hlZENoaWxkKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9kZXRhY2hlZENoaWxkKTtcbiAgICAgICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVDYXJkKHRoaXMuY2FyZERhdGEpOyAvLyBEb24ndCB1c2UgJ25ld0RhdGEnIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZC5cbiAgICAgICAgdGhpcy5fdXBkYXRlc0FsbG93ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0IHRoZSBjYXJkIHRvIGJlIDQ4cHggaGlnaC4gT3RoZXJ3aXNlIGlmIHRoZSBjYXJkIGlzIGtlcHQgYXMgMHB4IGhlaWdodCB0aGVuIGFsbFxuICAgICAgICAvLyBmb2xsb3dpbmcgY2FyZHMgd291bGQgdHJpZ2dlciB0aGUgb2JzZXJ2ZXIgYXQgb25jZS5cbiAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7b2Zmc2V0SGVpZ2h0IHx8IDQ4fXB4YDtcbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZXNBbGxvd2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xuICB9XG5cbiAgY2FyZERhdGFDaGFuZ2VkKG5ld0RhdGEpIHtcbiAgICBpZiAoIW5ld0RhdGEpIHJldHVybjtcbiAgICAvLyBoYS1lbnRpdGllcy1jYXJkIGlzIGV4ZW1wdCBmcm9tIG9ic2VydmVyIGFzIGl0IGRvZXNuJ3QgbG9hZCBoZWF2eSByZXNvdXJjZXMuXG4gICAgLy8gYW5kIHVzdWFsbHkgZG9lc24ndCBsb2FkIGV4dGVybmFsIHJlc291cmNlcyAoZXhjZXB0IGZvciBlbnRpdHlfcGljdHVyZSkuXG4gICAgY29uc3QgZWxpZ2libGVUb09ic2VydmVyID1cbiAgICAgIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBuZXdEYXRhLmNhcmRUeXBlICE9PSBcImVudGl0aWVzXCI7XG4gICAgaWYgKCFlbGlnaWJsZVRvT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgIHRoaXMuX3VwZGF0ZUNhcmQobmV3RGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5jcmVhdGVPYnNlcnZlcigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlc0FsbG93ZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUNhcmQobmV3RGF0YSk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkLWNob29zZXJcIiwgSGFDYXJkQ2hvb3Nlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgc3RhdGVNb3JlSW5mb1R5cGUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZVwiO1xuaW1wb3J0IHsgY2FuVG9nZ2xlU3RhdGUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIEhhRW50aXRpZXNDYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGVzIHtcbiAgICAgICAgICBtYXJnaW46IC00cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgLyogb3ZlcndyaXRpbmcgbGluZS1oZWlnaHQgKzggYmVjYXVzZSBlbnRpdHktdG9nZ2xlIGNhbiBiZSA0MHB4IGhlaWdodCxcbiAgICAgICAgICAgY29tcGVuc2F0aW5nIHRoaXMgd2l0aCByZWR1Y2VkIHBhZGRpbmcgKi9cbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBoYS1lbnRpdHktdG9nZ2xlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAubW9yZS1pbmZvIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdGl0bGVdXVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzJD1cIltbY29tcHV0ZVRpdGxlQ2xhc3MoZ3JvdXBFbnRpdHkpXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJlbnRpdHlUYXBwZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG5hbWVcIj5bW3RpdGxlXV08L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93R3JvdXBUb2dnbGUoZ3JvdXBFbnRpdHksIHN0YXRlcyldXVwiPlxuICAgICAgICAgICAgICA8aGEtZW50aXR5LXRvZ2dsZVxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tncm91cEVudGl0eV1dXCJcbiAgICAgICAgICAgICAgPjwvaGEtZW50aXR5LXRvZ2dsZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVzXV1cIlxuICAgICAgICAgICAgb24tZG9tLWNoYW5nZT1cImFkZFRhcEV2ZW50c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVTdGF0ZUNsYXNzKGl0ZW0pXV1cIj5cbiAgICAgICAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzdGF0ZS1jYXJkXCJcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgID48L3N0YXRlLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlczogQXJyYXksXG4gICAgICBncm91cEVudGl0eTogT2JqZWN0LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlVGl0bGUoc3RhdGVzLCBncm91cEVudGl0eSwgbG9jYWxpemUpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIC8vIFdlIG5lZWQgdG8gc2F2ZSBhIHNpbmdsZSBib3VuZCBmdW5jdGlvbiByZWZlcmVuY2UgdG8gZW5zdXJlIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIC8vIGNhbiBpZGVudGlmeSBpdCBwcm9wZXJseS5cbiAgICB0aGlzLmVudGl0eVRhcHBlZCA9IHRoaXMuZW50aXR5VGFwcGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVzLCBncm91cEVudGl0eSwgbG9jYWxpemUpIHtcbiAgICBpZiAoZ3JvdXBFbnRpdHkpIHtcbiAgICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKGdyb3VwRW50aXR5KS50cmltKCk7XG4gICAgfVxuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZXNbMF0pO1xuICAgIHJldHVybiAoXG4gICAgICAobG9jYWxpemUgJiYgbG9jYWxpemUoYGRvbWFpbi4ke2RvbWFpbn1gKSkgfHwgZG9tYWluLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVUaXRsZUNsYXNzKGdyb3VwRW50aXR5KSB7XG4gICAgbGV0IGNsYXNzZXMgPSBcImhlYWRlciBob3Jpem9udGFsIGxheW91dCBjZW50ZXIgXCI7XG4gICAgaWYgKGdyb3VwRW50aXR5KSB7XG4gICAgICBjbGFzc2VzICs9IFwibW9yZS1pbmZvXCI7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlQ2xhc3Moc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVNb3JlSW5mb1R5cGUoc3RhdGVPYmopICE9PSBcImhpZGRlblwiXG4gICAgICA/IFwic3RhdGUgbW9yZS1pbmZvXCJcbiAgICAgIDogXCJzdGF0ZVwiO1xuICB9XG5cbiAgYWRkVGFwRXZlbnRzKCkge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhdGVcIik7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9yZS1pbmZvXCIpKSB7XG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZW50aXR5VGFwcGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZW50aXR5VGFwcGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVudGl0eVRhcHBlZChldikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnJvb3RcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZG9tLXJlcGVhdFwiKVxuICAgICAgLml0ZW1Gb3JFbGVtZW50KGV2LnRhcmdldCk7XG4gICAgbGV0IGVudGl0eUlkO1xuICAgIGlmICghaXRlbSAmJiAhdGhpcy5ncm91cEVudGl0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBlbnRpdHlJZCA9IGl0ZW0uZW50aXR5X2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRpdHlJZCA9IHRoaXMuZ3JvdXBFbnRpdHkuZW50aXR5X2lkO1xuICAgIH1cbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHNob3dHcm91cFRvZ2dsZShncm91cEVudGl0eSwgc3RhdGVzKSB7XG4gICAgaWYgKFxuICAgICAgIWdyb3VwRW50aXR5IHx8XG4gICAgICAhc3RhdGVzIHx8XG4gICAgICBncm91cEVudGl0eS5hdHRyaWJ1dGVzLmNvbnRyb2wgPT09IFwiaGlkZGVuXCIgfHxcbiAgICAgIChncm91cEVudGl0eS5zdGF0ZSAhPT0gXCJvblwiICYmIGdyb3VwRW50aXR5LnN0YXRlICE9PSBcIm9mZlwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE9ubHkgc2hvdyBpZiB3ZSBjYW4gdG9nZ2xlIDIrIGVudGl0aWVzIGluIGdyb3VwXG4gICAgbGV0IGNhblRvZ2dsZUNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFjYW5Ub2dnbGVTdGF0ZSh0aGlzLmhhc3MsIHN0YXRlc1tpXSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhblRvZ2dsZUNvdW50Kys7XG5cbiAgICAgIGlmIChjYW5Ub2dnbGVDb3VudCA+IDEpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhblRvZ2dsZUNvdW50ID4gMTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXRpZXMtY2FyZFwiLCBIYUVudGl0aWVzQ2FyZCk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQZXJzaXN0ZW50Tm90aWZpY2F0aW9uQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1tjb21wdXRlVGl0bGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGhhLW1hcmtkb3duIGNvbnRlbnQ9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVzc2FnZV1dXCI+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJkaXNtaXNzVGFwXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi5kaXNtaXNzJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGl0bGUgfHwgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBkaXNtaXNzVGFwKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJwZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiLCBcImRpc21pc3NcIiwge1xuICAgICAgbm90aWZpY2F0aW9uX2lkOiBjb21wdXRlT2JqZWN0SWQodGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpLFxuICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtcGVyc2lzdGVudF9ub3RpZmljYXRpb24tY2FyZFwiLFxuICBIYVBlcnNpc3RlbnROb3RpZmljYXRpb25DYXJkXG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5jbGFzcyBIYVBsYW50Q2FyZCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhhcy1wbGFudC1pbWFnZSAuYmFubmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhhcy1wbGFudC1pbWFnZSAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDI0cHggMzJweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFzLXBsYW50LWltYWdlIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1pY29uLWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0ZXMge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRlcyBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucHJvYmxlbSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAudW9tIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVJbWFnZUNsYXNzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJiYW5uZXJcIlxuICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlXV0pXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5bW2NvbXB1dGVUaXRsZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICBpdGVtcz1cIltbY29tcHV0ZUF0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0ZXNcIiBvbi1jbGljaz1cImF0dHJpYnV0ZUNsaWNrZWRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cIltbY29tcHV0ZUljb24oaXRlbSwgc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5KV1dXCJcbiAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzJD1cIltbY29tcHV0ZUF0dHJpYnV0ZUNsYXNzKHN0YXRlT2JqLmF0dHJpYnV0ZXMucHJvYmxlbSwgaXRlbSldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2NvbXB1dGVWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLCBpdGVtKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW9tXCI+XG4gICAgICAgICAgICAgICAgW1tjb21wdXRlVW9tKHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudF9kaWN0LFxuICAgICAgICAgICAgICAgIGl0ZW0pXV1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29uZmlnOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZW5zb3JzID0ge1xuICAgICAgbW9pc3R1cmU6IFwiaGFzczp3YXRlclwiLFxuICAgICAgdGVtcGVyYXR1cmU6IFwiaGFzczp0aGVybW9tZXRlclwiLFxuICAgICAgYnJpZ2h0bmVzczogXCJoYXNzOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgICAgIGNvbmR1Y3Rpdml0eTogXCJoYXNzOmVtb3RpY29uLXBvb3BcIixcbiAgICAgIGJhdHRlcnk6IFwiaGFzczpiYXR0ZXJ5XCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVUaXRsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcubmFtZSkgfHwgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlQXR0cmlidXRlcyhkYXRhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2Vuc29ycykuZmlsdGVyKChrZXkpID0+IGtleSBpbiBkYXRhKTtcbiAgfVxuXG4gIGNvbXB1dGVJY29uKGF0dHIsIGJhdEx2bCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLnNlbnNvcnNbYXR0cl07XG4gICAgaWYgKGF0dHIgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgICBpZiAoYmF0THZsIDw9IDUpIHtcbiAgICAgICAgcmV0dXJuIGAke2ljb259LWFsZXJ0YDtcbiAgICAgIH1cbiAgICAgIGlmIChiYXRMdmwgPCA5NSkge1xuICAgICAgICByZXR1cm4gYCR7aWNvbn0tJHtNYXRoLnJvdW5kKGJhdEx2bCAvIDEwIC0gMC4wMSkgKiAxMH1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWNvbjtcbiAgfVxuXG4gIGNvbXB1dGVWYWx1ZShhdHRyaWJ1dGVzLCBhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNbYXR0cl07XG4gIH1cblxuICBjb21wdXRlVW9tKGRpY3QsIGF0dHIpIHtcbiAgICByZXR1cm4gZGljdFthdHRyXSB8fCBcIlwiO1xuICB9XG5cbiAgY29tcHV0ZUF0dHJpYnV0ZUNsYXNzKHByb2JsZW0sIGF0dHIpIHtcbiAgICByZXR1cm4gcHJvYmxlbS5pbmRleE9mKGF0dHIpID09PSAtMSA/IFwiXCIgOiBcInByb2JsZW1cIjtcbiAgfVxuXG4gIGNvbXB1dGVJbWFnZUNsYXNzKGVudGl0eVBpY3R1cmUpIHtcbiAgICByZXR1cm4gZW50aXR5UGljdHVyZSA/IFwiaGFzLXBsYW50LWltYWdlXCIgOiBcIlwiO1xuICB9XG5cbiAgYXR0cmlidXRlQ2xpY2tlZChldikge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuc2Vuc29yc1tldi5tb2RlbC5pdGVtXSxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wbGFudC1jYXJkXCIsIEhhUGxhbnRDYXJkKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhV2VhdGhlckNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC13ZWlnaHQpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGluZS1oZWlnaHQpO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiB2YXIoXG4gICAgICAgICAgICAtLXBhcGVyLWZvbnQtY29tbW9uLWV4cGVuc2l2ZS1rZXJuaW5nXy1fdGV4dC1yZW5kZXJpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubmFtZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tYWluIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIGhhLWljb24ge1xuICAgICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogNzJweDtcbiAgICAgICAgICAtLWlyb24taWNvbi13aWR0aDogNzJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWFpbiBoYS1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHtcbiAgICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1haW4gLnRlbXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIC50ZW1wIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWFzdXJhbmQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWVhc3VyYW5kIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCBkaXYge1xuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JlY2FzdCAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmZvcmVjYXN0IC50ZW1wIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53ZWVrZGF5IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzLFxuICAgICAgICAudGVtcGxvdyxcbiAgICAgICAgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLnByZWNpcGl0YXRpb24ge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZShzdGF0ZU9iai5zdGF0ZSwgbG9jYWxpemUpXV1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPltbY29tcHV0ZU5hbWUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dXZWF0aGVySWNvbihzdGF0ZU9iai5zdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgIDxoYS1pY29uIGljb249XCJbW2dldFdlYXRoZXJJY29uKHN0YXRlT2JqLnN0YXRlKV1dXCI+PC9oYS1pY29uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dPHNwYW5cbiAgICAgICAgICAgICAgICAgID5bW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXTwvc3BhblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmUnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlXV0gW1tnZXRVbml0KCdhaXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5odW1pZGl0eScpXV06XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmFuZFwiXG4gICAgICAgICAgICAgICAgICAgID5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHldXSAlPC9zcGFuXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLndpbmRfc3BlZWQnKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tnZXRXaW5kU3BlZWQoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBbW2dldFdpbmRCZWFyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9iZWFyaW5nLCBsb2NhbGl6ZSldXVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2ZvcmVjYXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tjb21wdXRlRGF0ZShpdGVtLmRhdGV0aW1lKV1dPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2NvbXB1dGVUaW1lKGl0ZW0uZGF0ZXRpbWUpXV1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5jb25kaXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIltbZ2V0V2VhdGhlckljb24oaXRlbS5jb25kaXRpb24pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0udGVtcGVyYXR1cmUpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGVyYXR1cmVdXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGxvd11dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0ucHJlY2lwaXRhdGlvbildXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlY2lwaXRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS5wcmVjaXBpdGF0aW9uXV0gW1tnZXRVbml0KCdwcmVjaXBpdGF0aW9uJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBjb25maWc6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBmb3JlY2FzdDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZvcmVjYXN0KHN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3QpXCIsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYXJkaW5hbERpcmVjdGlvbnMgPSBbXG4gICAgICBcIk5cIixcbiAgICAgIFwiTk5FXCIsXG4gICAgICBcIk5FXCIsXG4gICAgICBcIkVORVwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcIkVTRVwiLFxuICAgICAgXCJTRVwiLFxuICAgICAgXCJTU0VcIixcbiAgICAgIFwiU1wiLFxuICAgICAgXCJTU1dcIixcbiAgICAgIFwiU1dcIixcbiAgICAgIFwiV1NXXCIsXG4gICAgICBcIldcIixcbiAgICAgIFwiV05XXCIsXG4gICAgICBcIk5XXCIsXG4gICAgICBcIk5OV1wiLFxuICAgICAgXCJOXCIsXG4gICAgXTtcbiAgICB0aGlzLndlYXRoZXJJY29ucyA9IHtcbiAgICAgIFwiY2xlYXItbmlnaHRcIjogXCJoYXNzOndlYXRoZXItbmlnaHRcIixcbiAgICAgIGNsb3VkeTogXCJoYXNzOndlYXRoZXItY2xvdWR5XCIsXG4gICAgICBleGNlcHRpb25hbDogXCJoYXNzOmFsZXJ0LWNpcmNsZS1vdXRsaW5lXCIsXG4gICAgICBmb2c6IFwiaGFzczp3ZWF0aGVyLWZvZ1wiLFxuICAgICAgaGFpbDogXCJoYXNzOndlYXRoZXItaGFpbFwiLFxuICAgICAgbGlnaHRuaW5nOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmdcIixcbiAgICAgIFwibGlnaHRuaW5nLXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZy1yYWlueVwiLFxuICAgICAgcGFydGx5Y2xvdWR5OiBcImhhc3M6d2VhdGhlci1wYXJ0bHktY2xvdWR5XCIsXG4gICAgICBwb3VyaW5nOiBcImhhc3M6d2VhdGhlci1wb3VyaW5nXCIsXG4gICAgICByYWlueTogXCJoYXNzOndlYXRoZXItcmFpbnlcIixcbiAgICAgIHNub3d5OiBcImhhc3M6d2VhdGhlci1zbm93eVwiLFxuICAgICAgXCJzbm93eS1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1zbm93eS1yYWlueVwiLFxuICAgICAgc3Vubnk6IFwiaGFzczp3ZWF0aGVyLXN1bm55XCIsXG4gICAgICB3aW5keTogXCJoYXNzOndlYXRoZXItd2luZHlcIixcbiAgICAgIFwid2luZHktdmFyaWFudFwiOiBcImhhc3M6d2VhdGhlci13aW5keS12YXJpYW50XCIsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX29uQ2xpY2spO1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgfVxuXG4gIGNvbXB1dGVGb3JlY2FzdChmb3JlY2FzdCkge1xuICAgIHJldHVybiBmb3JlY2FzdCAmJiBmb3JlY2FzdC5zbGljZSgwLCA1KTtcbiAgfVxuXG4gIGdldFVuaXQobWVhc3VyZSkge1xuICAgIGNvbnN0IGxlbmd0aFVuaXQgPSB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLmxlbmd0aCB8fCBcIlwiO1xuICAgIHN3aXRjaCAobWVhc3VyZSkge1xuICAgICAgY2FzZSBcImFpcl9wcmVzc3VyZVwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJoUGFcIiA6IFwiaW5IZ1wiO1xuICAgICAgY2FzZSBcImxlbmd0aFwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdDtcbiAgICAgIGNhc2UgXCJwcmVjaXBpdGF0aW9uXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcIm1tXCIgOiBcImluXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbVttZWFzdXJlXSB8fCBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZShzdGF0ZSwgbG9jYWxpemUpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYHN0YXRlLndlYXRoZXIuJHtzdGF0ZX1gKSB8fCBzdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5uYW1lKSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHNob3dXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gY29uZGl0aW9uIGluIHRoaXMud2VhdGhlckljb25zO1xuICB9XG5cbiAgZ2V0V2VhdGhlckljb24oY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMud2VhdGhlckljb25zW2NvbmRpdGlvbl07XG4gIH1cblxuICB3aW5kQmVhcmluZ1RvVGV4dChkZWdyZWUpIHtcbiAgICBjb25zdCBkZWdyZWVudW0gPSBwYXJzZUludChkZWdyZWUpO1xuICAgIGlmIChpc0Zpbml0ZShkZWdyZWVudW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJkaW5hbERpcmVjdGlvbnNbKCgoZGVncmVlbnVtICsgMTEuMjUpIC8gMjIuNSkgfCAwKSAlIDE2XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZ3JlZTtcbiAgfVxuXG4gIGdldFdpbmRTcGVlZChzcGVlZCkge1xuICAgIHJldHVybiBgJHtzcGVlZH0gJHt0aGlzLmdldFVuaXQoXCJsZW5ndGhcIil9L2hgO1xuICB9XG5cbiAgZ2V0V2luZEJlYXJpbmcoYmVhcmluZywgbG9jYWxpemUpIHtcbiAgICBpZiAoYmVhcmluZyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjYXJkaW5hbERpcmVjdGlvbiA9IHRoaXMud2luZEJlYXJpbmdUb1RleHQoYmVhcmluZyk7XG4gICAgICByZXR1cm4gYCgke2xvY2FsaXplKFxuICAgICAgICBgdWkuY2FyZC53ZWF0aGVyLmNhcmRpbmFsX2RpcmVjdGlvbi4ke2NhcmRpbmFsRGlyZWN0aW9uLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgKSB8fCBjYXJkaW5hbERpcmVjdGlvbn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGBgO1xuICB9XG5cbiAgX3Nob3dWYWx1ZShpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZW0gIT09IG51bGw7XG4gIH1cblxuICBjb21wdXRlRGF0ZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHsgd2Vla2RheTogXCJzaG9ydFwiIH0pO1xuICB9XG5cbiAgY29tcHV0ZVRpbWUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7IGhvdXI6IFwibnVtZXJpY1wiIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13ZWF0aGVyLWNhcmRcIiwgSGFXZWF0aGVyQ2FyZCk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBHZXQgdGhlIGxvY2F0aW9uIG5hbWUgZnJvbSBhIGhhc3Mgb2JqZWN0LiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUxvY2F0aW9uTmFtZShoYXNzOiBIb21lQXNzaXN0YW50KTogc3RyaW5nIHtcbiAgcmV0dXJuIGhhc3MgJiYgaGFzcy5jb25maWcubG9jYXRpb25fbmFtZTtcbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NhcmRzL2hhLWJhZGdlcy1jYXJkXCI7XG5pbXBvcnQgXCIuLi9jYXJkcy9oYS1jYXJkLWNob29zZXJcIjtcbmltcG9ydCBcIi4vaGEtZGVtby1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgc3BsaXRCeUdyb3VwcyB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3NwbGl0X2J5X2dyb3Vwc1wiO1xuaW1wb3J0IHsgZ2V0R3JvdXBFbnRpdGllcyB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllc1wiO1xuXG4vLyBtYXBwaW5nIGRvbWFpbiB0byBzaXplIG9mIHRoZSBjYXJkLlxuY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSB7XG4gIGNhbWVyYTogNCxcbiAgaGlzdG9yeV9ncmFwaDogNCxcbiAgbWVkaWFfcGxheWVyOiAzLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogMCxcbiAgcGxhbnQ6IDMsXG4gIHdlYXRoZXI6IDQsXG59O1xuXG4vLyA0IHR5cGVzOlxuLy8gYmFkZ2VzOiAwIC4uIDEwXG4vLyBiZWZvcmUgZ3JvdXBzIDwgMFxuLy8gZ3JvdXBzOiBYXG4vLyByZXN0OiAxMDBcblxuY29uc3QgUFJJT1JJVFkgPSB7XG4gIC8vIGJlZm9yZSBncm91cHMgPCAwXG4gIGNvbmZpZ3VyYXRvcjogLTIwLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogLTE1LFxuXG4gIC8vIGJhZGdlcyBoYXZlIHByaW9yaXR5ID49IDBcbiAgdXBkYXRlcjogMCxcbiAgc3VuOiAxLFxuICBwZXJzb246IDIsXG4gIGRldmljZV90cmFja2VyOiAzLFxuICBhbGFybV9jb250cm9sX3BhbmVsOiA0LFxuICB0aW1lcjogNSxcbiAgc2Vuc29yOiA2LFxuICBiaW5hcnlfc2Vuc29yOiA3LFxuICBtYWlsYm94OiA4LFxufTtcblxuY29uc3QgZ2V0UHJpb3JpdHkgPSAoZG9tYWluKSA9PiAoZG9tYWluIGluIFBSSU9SSVRZID8gUFJJT1JJVFlbZG9tYWluXSA6IDEwMCk7XG5cbmNvbnN0IHNvcnRQcmlvcml0eSA9IChkb21haW5BLCBkb21haW5CKSA9PiBkb21haW5BLnByaW9yaXR5IC0gZG9tYWluQi5wcmlvcml0eTtcblxuY29uc3QgZW50aXR5U29ydEJ5ID0gKGVudGl0eUEsIGVudGl0eUIpID0+IHtcbiAgY29uc3QgbmFtZUEgPSAoXG4gICAgZW50aXR5QS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgZW50aXR5QS5lbnRpdHlfaWRcbiAgKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBuYW1lQiA9IChcbiAgICBlbnRpdHlCLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBlbnRpdHlCLmVudGl0eV9pZFxuICApLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmNvbnN0IGl0ZXJhdGVEb21haW5Tb3J0ZWQgPSAoY29sbGVjdGlvbiwgZnVuYykgPT4ge1xuICBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKVxuICAgIC5tYXAoKGtleSkgPT4gY29sbGVjdGlvbltrZXldKVxuICAgIC5zb3J0KHNvcnRQcmlvcml0eSlcbiAgICAuZm9yRWFjaCgoZG9tYWluKSA9PiB7XG4gICAgICBkb21haW4uc3RhdGVzLnNvcnQoZW50aXR5U29ydEJ5KTtcbiAgICAgIGZ1bmMoZG9tYWluKTtcbiAgICB9KTtcbn07XG5cbmNsYXNzIEhhQ2FyZHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWRnZXMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogODUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZC1jaG9vc2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDRweCA0cHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYS1jYXJkLWNob29zZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhcmRzLmJhZGdlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYXJkcy5kZW1vXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWRlbW8tYmFkZ2U+PC9oYS1kZW1vLWJhZGdlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPGhhLWJhZGdlcy1jYXJkXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbY2FyZHMuYmFkZ2VzXV1cIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgPjwvaGEtYmFkZ2VzLWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwgbGF5b3V0IGNlbnRlci1qdXN0aWZpZWRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2NhcmRzLmNvbHVtbnNdXVwiIGFzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2NvbHVtbl1dXCIgYXM9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhcmQtY2hvb3NlciBjYXJkLWRhdGE9XCJbW2NhcmRdXVwiPjwvaGEtY2FyZC1jaG9vc2VyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMixcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlczogT2JqZWN0LFxuXG4gICAgICB2aWV3VmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBvcmRlcmVkR3JvdXBFbnRpdGllczogQXJyYXksXG5cbiAgICAgIGNhcmRzOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJ1cGRhdGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIHZpZXdWaXNpYmxlLCBvcmRlcmVkR3JvdXBFbnRpdGllcylcIl07XG4gIH1cblxuICB1cGRhdGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIHZpZXdWaXNpYmxlLCBvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgIGlmICghdmlld1Zpc2libGUpIHtcbiAgICAgIGlmICh0aGlzLiQubWFpbi5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuJC5tYWluLl9wYXJlbnROb2RlID0gdGhpcy4kLm1haW4ucGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy4kLm1haW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiQubWFpbik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy4kLm1haW4ucGFyZW50Tm9kZSAmJiB0aGlzLiQubWFpbi5fcGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy4kLm1haW4uX3BhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy4kLm1haW4pO1xuICAgIH1cbiAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICB0aW1lT3V0LmFmdGVyKDEwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gVGhpbmdzIG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBpdCBnb3Qgc2NoZWR1bGVkLlxuICAgICAgICBpZiAodGhpcy52aWV3VmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNvbXB1dGVDYXJkcyhjb2x1bW5zLCBzdGF0ZXMsIG9yZGVyZWRHcm91cEVudGl0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBlbXB0eUNhcmRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZW1vOiBmYWxzZSxcbiAgICAgIGJhZGdlczogW10sXG4gICAgICBjb2x1bW5zOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgb3JkZXJlZEdyb3VwRW50aXRpZXMpIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLmVtcHR5Q2FyZHMoKTtcblxuICAgIGNvbnN0IGVudGl0eUNvdW50ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICAgIGNhcmRzLmNvbHVtbnMucHVzaChbXSk7XG4gICAgICBlbnRpdHlDb3VudC5wdXNoKDApO1xuICAgIH1cblxuICAgIC8vIEZpbmQgY29sdW1uIHdpdGggPCA1IGVudGl0aWVzLCBlbHNlIGNvbHVtbiB3aXRoIGxvd2VzdCBjb3VudFxuICAgIGZ1bmN0aW9uIGdldEluZGV4KHNpemUpIHtcbiAgICAgIGxldCBtaW5JbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0eUNvdW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbnRpdHlDb3VudFtpXSA8IDUpIHtcbiAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudGl0eUNvdW50W2ldIDwgZW50aXR5Q291bnRbbWluSW5kZXhdKSB7XG4gICAgICAgICAgbWluSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNvdW50W21pbkluZGV4XSArPSBzaXplO1xuXG4gICAgICByZXR1cm4gbWluSW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRW50aXRpZXNDYXJkKG5hbWUsIGVudGl0aWVzLCBncm91cEVudGl0eSkge1xuICAgICAgaWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBvd25jYXJkID0gW107XG4gICAgICBjb25zdCBvdGhlciA9IFtdO1xuXG4gICAgICBsZXQgc2l6ZSA9IDA7XG5cbiAgICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZG9tYWluIGluIERPTUFJTlNfV0lUSF9DQVJEICYmXG4gICAgICAgICAgIWVudGl0eS5hdHRyaWJ1dGVzLmN1c3RvbV91aV9zdGF0ZV9jYXJkXG4gICAgICAgICkge1xuICAgICAgICAgIG93bmNhcmQucHVzaChlbnRpdHkpO1xuICAgICAgICAgIHNpemUgKz0gRE9NQUlOU19XSVRIX0NBUkRbZG9tYWluXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdGhlci5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIDEgdG8gdGhlIHNpemUgaWYgd2UncmUgcmVuZGVyaW5nIGVudGl0aWVzIGNhcmRcbiAgICAgIHNpemUgKz0gb3RoZXIubGVuZ3RoID4gMDtcblxuICAgICAgY29uc3QgY3VySW5kZXggPSBnZXRJbmRleChzaXplKTtcblxuICAgICAgaWYgKG90aGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2FyZHMuY29sdW1uc1tjdXJJbmRleF0ucHVzaCh7XG4gICAgICAgICAgaGFzczogaGFzcyxcbiAgICAgICAgICBjYXJkVHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHN0YXRlczogb3RoZXIsXG4gICAgICAgICAgZ3JvdXBFbnRpdHk6IGdyb3VwRW50aXR5IHx8IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb3duY2FyZC5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgY2FyZHMuY29sdW1uc1tjdXJJbmRleF0ucHVzaCh7XG4gICAgICAgICAgaGFzczogaGFzcyxcbiAgICAgICAgICBjYXJkVHlwZTogY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgc3RhdGVPYmo6IGVudGl0eSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpdHRlZCA9IHNwbGl0QnlHcm91cHMoc3RhdGVzKTtcbiAgICBpZiAob3JkZXJlZEdyb3VwRW50aXRpZXMpIHtcbiAgICAgIHNwbGl0dGVkLmdyb3Vwcy5zb3J0KFxuICAgICAgICAoZ3IxLCBncjIpID0+XG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZ3IxLmVudGl0eV9pZF0gLVxuICAgICAgICAgIG9yZGVyZWRHcm91cEVudGl0aWVzW2dyMi5lbnRpdHlfaWRdXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGxpdHRlZC5ncm91cHMuc29ydChcbiAgICAgICAgKGdyMSwgZ3IyKSA9PiBncjEuYXR0cmlidXRlcy5vcmRlciAtIGdyMi5hdHRyaWJ1dGVzLm9yZGVyXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGJhZGdlc0NvbGwgPSB7fTtcbiAgICBjb25zdCBiZWZvcmVHcm91cENvbGwgPSB7fTtcbiAgICBjb25zdCBhZnRlckdyb3VwZWRDb2xsID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhzcGxpdHRlZC51bmdyb3VwZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBzcGxpdHRlZC51bmdyb3VwZWRba2V5XTtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZSk7XG5cbiAgICAgIGlmIChkb21haW4gPT09IFwiYVwiKSB7XG4gICAgICAgIGNhcmRzLmRlbW8gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0UHJpb3JpdHkoZG9tYWluKTtcbiAgICAgIGxldCBjb2xsO1xuXG4gICAgICBpZiAocHJpb3JpdHkgPCAwKSB7XG4gICAgICAgIGNvbGwgPSBiZWZvcmVHcm91cENvbGw7XG4gICAgICB9IGVsc2UgaWYgKHByaW9yaXR5IDwgMTApIHtcbiAgICAgICAgY29sbCA9IGJhZGdlc0NvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsID0gYWZ0ZXJHcm91cGVkQ29sbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZG9tYWluIGluIGNvbGwpKSB7XG4gICAgICAgIGNvbGxbZG9tYWluXSA9IHtcbiAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgc3RhdGVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sbFtkb21haW5dLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB9KTtcblxuICAgIGlmIChvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgICAgT2JqZWN0LmtleXMoYmFkZ2VzQ29sbClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBiYWRnZXNDb2xsW2tleV0pXG4gICAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgICBjYXJkcy5iYWRnZXMucHVzaC5hcHBseShjYXJkcy5iYWRnZXMsIGRvbWFpbi5zdGF0ZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgY2FyZHMuYmFkZ2VzLnNvcnQoXG4gICAgICAgIChlMSwgZTIpID0+XG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZTEuZW50aXR5X2lkXSAtXG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZTIuZW50aXR5X2lkXVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0ZURvbWFpblNvcnRlZChiYWRnZXNDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICAgIGNhcmRzLmJhZGdlcy5wdXNoLmFwcGx5KGNhcmRzLmJhZGdlcywgZG9tYWluLnN0YXRlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVyYXRlRG9tYWluU29ydGVkKGJlZm9yZUdyb3VwQ29sbCwgKGRvbWFpbikgPT4ge1xuICAgICAgYWRkRW50aXRpZXNDYXJkKGRvbWFpbi5kb21haW4sIGRvbWFpbi5zdGF0ZXMpO1xuICAgIH0pO1xuXG4gICAgc3BsaXR0ZWQuZ3JvdXBzLmZvckVhY2goKGdyb3VwU3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhzdGF0ZXMsIGdyb3VwU3RhdGUpO1xuICAgICAgYWRkRW50aXRpZXNDYXJkKFxuICAgICAgICBncm91cFN0YXRlLmVudGl0eV9pZCxcbiAgICAgICAgT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcCgoa2V5KSA9PiBlbnRpdGllc1trZXldKSxcbiAgICAgICAgZ3JvdXBTdGF0ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGl0ZXJhdGVEb21haW5Tb3J0ZWQoYWZ0ZXJHcm91cGVkQ29sbCwgKGRvbWFpbikgPT4ge1xuICAgICAgYWRkRW50aXRpZXNDYXJkKGRvbWFpbi5kb21haW4sIGRvbWFpbi5zdGF0ZXMpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGVtcHR5IGNvbHVtbnNcbiAgICBjYXJkcy5jb2x1bW5zID0gY2FyZHMuY29sdW1ucy5maWx0ZXIoKHZhbCkgPT4gdmFsLmxlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGNhcmRzO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkc1wiLCBIYUNhcmRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtbGFiZWwtYmFkZ2VcIjtcblxuY2xhc3MgSGFEZW1vQmFkZ2UgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiAjZGFjOTBkO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgaWNvbj1cImhhc3M6ZW1vdGljb25cIlxuICAgICAgICBsYWJlbD1cIkRlbW9cIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlwiXG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWRlbW8tYmFkZ2VcIiwgSGFEZW1vQmFkZ2UpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXNjcm9sbC1lZmZlY3RzL2VmZmVjdHMvd2F0ZXJmYWxsXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1wYWdlcy9pcm9uLXBhZ2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZHNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcblxuaW1wb3J0IHsgZXh0cmFjdFZpZXdzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3c1wiO1xuaW1wb3J0IHsgZ2V0Vmlld0VudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZUxvY2F0aW9uTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9sb2NhdGlvbl9uYW1lXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBzaG93Vm9pY2VDb21tYW5kRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvc2hvdy1oYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5cbmNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuY29uc3QgQUxXQVlTX1NIT1dfRE9NQUlOID0gW1wicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJjb25maWd1cmF0b3JcIl07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgUGFydGlhbENhcmRzIGV4dGVuZHMgRXZlbnRzTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tcG9zaXRpb25pbmcgaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1hcHAtbGF5b3V0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjZTVlNWU1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlyb24tcGFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86dmlld1wiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgYWN0aXZlPVwie3tyb3V0ZU1hdGNofX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaWQ9XCJsYXlvdXRcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiIGNvbmRlbnNlcz1cIlwiIGZpeGVkPVwiXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbY29tcHV0ZVRpdGxlKHZpZXdzLCBkZWZhdWx0VmlldywgbG9jYXRpb25OYW1lKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shY29udmVyc2F0aW9uXV1cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU3RhcnQgY29udmVyc2F0aW9uXCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWljcm9waG9uZVwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiX3Nob3dWb2ljZUNvbW1hbmREaWFsb2dcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgICAgIDxkaXYgc3RpY2t5PVwiXCIgaGlkZGVuJD1cIltbYXJlVGFic0hpZGRlbih2aWV3cywgc2hvd1RhYnMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICAgIHNjcm9sbGFibGU9XCJcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1lbnRpdHlcIlxuICAgICAgICAgICAgICBvbi1pcm9uLWFjdGl2YXRlPVwiaGFuZGxlVmlld1NlbGVjdGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXRhYiBkYXRhLWVudGl0eT1cIlwiIG9uLWNsaWNrPVwic2Nyb2xsVG9Ub3BcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRlZmF1bHRWaWV3XV1cIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZWZhdWx0Vmlld11dXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGVmYXVsdFZpZXcuYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiW1tkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiXG4gICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3ZpZXdzXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdGFiXG4gICAgICAgICAgICAgICAgICBkYXRhLWVudGl0eSQ9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJzY3JvbGxUb1RvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaXRlbS5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8aXJvbi1wYWdlc1xuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS12aWV3XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgc2VsZWN0ZWQtYXR0cmlidXRlPVwidmlldy12aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkc1xuICAgICAgICAgICAgZGF0YS12aWV3PVwiXCJcbiAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgIGNvbHVtbnM9XCJbW19jb2x1bW5zXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgIG9yZGVyZWQtZ3JvdXAtZW50aXRpZXM9XCJbW29yZGVyZWRHcm91cEVudGl0aWVzXV1cIlxuICAgICAgICAgID48L2hhLWNhcmRzPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t2aWV3c11dXCI+XG4gICAgICAgICAgICA8aGEtY2FyZHNcbiAgICAgICAgICAgICAgZGF0YS12aWV3JD1cIltbaXRlbS5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgICAgY29sdW1ucz1cIltbX2NvbHVtbnNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgICAgb3JkZXJlZC1ncm91cC1lbnRpdGllcz1cIltbb3JkZXJlZEdyb3VwRW50aXRpZXNdXVwiXG4gICAgICAgICAgICA+PC9oYS1jYXJkcz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2lyb24tcGFnZXM+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHBhbmVsVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICByb3V0ZU1hdGNoOiBCb29sZWFuLFxuXG4gICAgICBfY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcblxuICAgICAgY29udmVyc2F0aW9uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ29udmVyc2F0aW9uKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBsb2NhdGlvbk5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVMb2NhdGlvbk5hbWUoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIGN1cnJlbnRWaWV3OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVDdXJyZW50VmlldyhoYXNzLCByb3V0ZU1hdGNoLCByb3V0ZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICB2aWV3czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgIH0sXG5cbiAgICAgIGRlZmF1bHRWaWV3OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHZpZXdTdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlVmlld1N0YXRlcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpXCIsXG4gICAgICB9LFxuXG4gICAgICBvcmRlcmVkR3JvdXBFbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZU9yZGVyZWRHcm91cEVudGl0aWVzKGN1cnJlbnRWaWV3LCBoYXNzLCBkZWZhdWx0VmlldylcIixcbiAgICAgIH0sXG5cbiAgICAgIHNob3dUYWJzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIl91cGRhdGVDb2x1bW5zKG5hcnJvdywgaGFzcy5kb2NrZWRTaWRlYmFyKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNvbHVtbnMgPSB0aGlzLl91cGRhdGVDb2x1bW5zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tcWxzID0gWzMwMCwgNjAwLCA5MDAsIDEyMDBdLm1hcCgod2lkdGgpID0+XG4gICAgICBtYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofXB4KWApXG4gICAgKTtcbiAgICBzdXBlci5yZWFkeSgpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiBtcWwuYWRkTGlzdGVuZXIodGhpcy5fdXBkYXRlQ29sdW1ucykpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiBtcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5fdXBkYXRlQ29sdW1ucykpO1xuICB9XG5cbiAgX3VwZGF0ZUNvbHVtbnMoKSB7XG4gICAgY29uc3QgbWF0Y2hDb2x1bW5zID0gdGhpcy5tcWxzLnJlZHVjZSgoY29scywgbXFsKSA9PiBjb2xzICsgbXFsLm1hdGNoZXMsIDApO1xuICAgIC8vIERvIC0xIGNvbHVtbiBpZiB0aGUgbWVudSBpcyBkb2NrZWQgYW5kIG9wZW5cbiAgICB0aGlzLl9jb2x1bW5zID0gTWF0aC5tYXgoXG4gICAgICAxLFxuICAgICAgbWF0Y2hDb2x1bW5zIC0gKCF0aGlzLm5hcnJvdyAmJiB0aGlzLmhhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJkb2NrZWRcIilcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVDb252ZXJzYXRpb24oaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcImNvbnZlcnNhdGlvblwiKTtcbiAgfVxuXG4gIF9zaG93Vm9pY2VDb21tYW5kRGlhbG9nKCkge1xuICAgIHNob3dWb2ljZUNvbW1hbmREaWFsb2codGhpcyk7XG4gIH1cblxuICBhcmVUYWJzSGlkZGVuKHZpZXdzLCBzaG93VGFicykge1xuICAgIHJldHVybiAhdmlld3MgfHwgIXZpZXdzLmxlbmd0aCB8fCAhc2hvd1RhYnM7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgeSBjb29yZGluYXRlLlxuICAgKlxuICAgKiBDb3BpZWQgZnJvbSBwYXBlci1zY3JvbGwtaGVhZGVyLXBhbmVsLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSBjb29yZGluYXRlIHRvIHNjcm9sbCB0bywgYWxvbmcgdGhlIHktYXhpcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBzbW9vdGggdHJ1ZSBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIHNob3VsZCBiZSBzbW9vdGhseSBhZGp1c3RlZC5cbiAgICovXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIC8vIHRoZSBzY3JvbGwgZXZlbnQgd2lsbCB0cmlnZ2VyIF91cGRhdGVTY3JvbGxTdGF0ZSBkaXJlY3RseSxcbiAgICAvLyBIb3dldmVyLCBfdXBkYXRlU2Nyb2xsU3RhdGUgcmVsaWVzIG9uIHRoZSBwcmV2aW91cyBgc2Nyb2xsVG9wYCB0byB1cGRhdGUgdGhlIHN0YXRlcy5cbiAgICAvLyBDYWxsaW5nIF91cGRhdGVTY3JvbGxTdGF0ZSB3aWxsIGVuc3VyZSB0aGF0IHRoZSBzdGF0ZXMgYXJlIHN5bmNlZCBjb3JyZWN0bHkuXG4gICAgdmFyIHRvcCA9IDA7XG4gICAgdmFyIHNjcm9sbGVyID0gdGhpcy4kLmxheW91dC5oZWFkZXIuc2Nyb2xsVGFyZ2V0O1xuICAgIHZhciBlYXNpbmdGbiA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBzcGFjZS1pbmZpeC1vcHMsIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgICAgdCAvPSBkO1xuICAgICAgcmV0dXJuIC1jICogdCAqICh0IC0gMikgKyBiO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgc3BhY2UtaW5maXgtb3BzLCBuby1taXhlZC1vcGVyYXRvcnMgKi9cbiAgICB9O1xuICAgIHZhciBhbmltYXRpb25JZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGR1cmF0aW9uID0gMjAwO1xuICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBjdXJyZW50U2Nyb2xsVG9wID0gc2Nyb2xsZXIuc2Nyb2xsVG9wO1xuICAgIHZhciBkZWx0YVNjcm9sbFRvcCA9IHRvcCAtIGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgdGhpcy5fY3VycmVudEFuaW1hdGlvbklkID0gYW5pbWF0aW9uSWQ7XG4gICAgKGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xuICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICB2YXIgZWxhcHNlZFRpbWUgPSBub3cgLSBzdGFydFRpbWU7XG4gICAgICBpZiAoZWxhcHNlZFRpbWUgPiBkdXJhdGlvbikge1xuICAgICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRBbmltYXRpb25JZCA9PT0gYW5pbWF0aW9uSWQpIHtcbiAgICAgICAgc2Nyb2xsZXIuc2Nyb2xsVG9wID0gZWFzaW5nRm4oXG4gICAgICAgICAgZWxhcHNlZFRpbWUsXG4gICAgICAgICAgY3VycmVudFNjcm9sbFRvcCxcbiAgICAgICAgICBkZWx0YVNjcm9sbFRvcCxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlRnJhbWUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfS5jYWxsKHRoaXMpKTtcbiAgfVxuXG4gIGhhbmRsZVZpZXdTZWxlY3RlZChldikge1xuICAgIGNvbnN0IHZpZXcgPSBldi5kZXRhaWwuaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVudGl0eVwiKSB8fCBudWxsO1xuXG4gICAgaWYgKHZpZXcgIT09IHRoaXMuY3VycmVudFZpZXcpIHtcbiAgICAgIGxldCBwYXRoID0gXCIvc3RhdGVzXCI7XG4gICAgICBpZiAodmlldykge1xuICAgICAgICBwYXRoICs9IFwiL1wiICsgdmlldztcbiAgICAgIH1cbiAgICAgIHRoaXMubmF2aWdhdGUocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVDdXJyZW50VmlldyhoYXNzLCByb3V0ZU1hdGNoLCByb3V0ZURhdGEpIHtcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHJldHVybiBcIlwiO1xuICAgIGlmIChcbiAgICAgICFoYXNzLnN0YXRlc1tyb3V0ZURhdGEudmlld10gfHxcbiAgICAgICFoYXNzLnN0YXRlc1tyb3V0ZURhdGEudmlld10uYXR0cmlidXRlcy52aWV3XG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlRGF0YS52aWV3O1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHZpZXdzLCBkZWZhdWx0VmlldywgbG9jYXRpb25OYW1lKSB7XG4gICAgcmV0dXJuICh2aWV3cyAmJlxuICAgICAgdmlld3MubGVuZ3RoID4gMCAmJlxuICAgICAgIWRlZmF1bHRWaWV3ICYmXG4gICAgICBsb2NhdGlvbk5hbWUgPT09IFwiSG9tZVwiKSB8fFxuICAgICAgIWxvY2F0aW9uTmFtZVxuICAgICAgPyBcIkhvbWUgQXNzaXN0YW50XCJcbiAgICAgIDogbG9jYXRpb25OYW1lO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBfY29tcHV0ZUxvY2F0aW9uTmFtZShoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVMb2NhdGlvbk5hbWUoaGFzcyk7XG4gIH1cblxuICBoYXNzQ2hhbmdlZChoYXNzKSB7XG4gICAgaWYgKCFoYXNzKSByZXR1cm47XG4gICAgY29uc3Qgdmlld3MgPSBleHRyYWN0Vmlld3MoaGFzcy5zdGF0ZXMpO1xuICAgIGxldCBkZWZhdWx0VmlldyA9IG51bGw7XG4gICAgLy8gSWYgZGVmYXVsdCB2aWV3IHByZXNlbnQsIGl0J3MgaW4gZmlyc3QgaW5kZXguXG4gICAgaWYgKHZpZXdzLmxlbmd0aCA+IDAgJiYgdmlld3NbMF0uZW50aXR5X2lkID09PSBERUZBVUxUX1ZJRVdfRU5USVRZX0lEKSB7XG4gICAgICBkZWZhdWx0VmlldyA9IHZpZXdzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmlld3MsIGRlZmF1bHRWaWV3IH0pO1xuICB9XG5cbiAgaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0Vmlldykge1xuICAgIHJldHVybiAoXG4gICAgICAoY3VycmVudFZpZXcgfHwgZGVmYXVsdFZpZXcpICYmXG4gICAgICB0aGlzLmhhc3Muc3RhdGVzW2N1cnJlbnRWaWV3IHx8IERFRkFVTFRfVklFV19FTlRJVFlfSURdXG4gICAgKTtcbiAgfVxuXG4gIF9kZWZhdWx0Vmlld0ZpbHRlcihoYXNzLCBlbnRpdHlJZCkge1xuICAgIC8vIEZpbHRlciBvdXQgaGlkZGVuXG4gICAgcmV0dXJuICFoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW47XG4gIH1cblxuICBfY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcykge1xuICAgIGNvbnN0IHN0YXRlcyA9IHt9O1xuICAgIGVudGl0eUlkc1xuICAgICAgLmZpbHRlcih0aGlzLl9kZWZhdWx0Vmlld0ZpbHRlci5iaW5kKG51bGwsIGhhc3MpKVxuICAgICAgLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICAgIHN0YXRlc1tlbnRpdHlJZF0gPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG5cbiAgLypcbiAgICBDb21wdXRlIHRoZSBzdGF0ZXMgdG8gc2hvdyBmb3IgY3VycmVudCB2aWV3LlxuXG4gICAgV2lsbCBtYWtlIHN1cmUgd2UgYWx3YXlzIHNob3cgZW50aXRpZXMgZnJvbSBBTFdBWVNfU0hPV19ET01BSU5TIGRvbWFpbnMuXG4gICovXG4gIGNvbXB1dGVWaWV3U3RhdGVzKGN1cnJlbnRWaWV3LCBoYXNzLCBkZWZhdWx0Vmlldykge1xuICAgIGNvbnN0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgIC8vIElmIHdlIGJhc2Ugb2ZmIGFsbCBlbnRpdGllcywgb25seSBoYXZlIHRvIGZpbHRlciBvdXQgaGlkZGVuXG4gICAgaWYgKCF0aGlzLmlzVmlldyhjdXJyZW50VmlldywgZGVmYXVsdFZpZXcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcyk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlcztcbiAgICBpZiAoY3VycmVudFZpZXcpIHtcbiAgICAgIHN0YXRlcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZ2V0Vmlld0VudGl0aWVzKFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgaGFzcy5zdGF0ZXNbREVGQVVMVF9WSUVXX0VOVElUWV9JRF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGNlcnRhaW4gZG9tYWlucyBhcmUgYWx3YXlzIHNob3duLlxuICAgIGVudGl0eUlkcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG5cbiAgICAgIGlmIChBTFdBWVNfU0hPV19ET01BSU4uaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKSkpIHtcbiAgICAgICAgc3RhdGVzW2VudGl0eUlkXSA9IHN0YXRlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIC8qXG4gICAgQ29tcHV0ZSB0aGUgb3JkZXJlZCBsaXN0IG9mIGdyb3VwcyBmb3IgdGhpcyB2aWV3XG4gICovXG4gIGNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpIHtcbiAgICBpZiAoIXRoaXMuaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0VmlldykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBvcmRlcmVkR3JvdXBFbnRpdGllcyA9IHt9O1xuICAgIHZhciBlbnRpdGllc0xpc3QgPVxuICAgICAgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXcgfHwgREVGQVVMVF9WSUVXX0VOVElUWV9JRF0uYXR0cmlidXRlcy5lbnRpdHlfaWQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZW50aXRpZXNMaXN0W2ldXSA9IGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyZWRHcm91cEVudGl0aWVzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLXN0YXRlc1wiLCBQYXJ0aWFsQ2FyZHMpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTs7Ozs7Ozs7Ozs7O0FBREE7QUFlQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQWhDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUxBO0FBREE7QUFXQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBM0JBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7QUFDQTtBQStHQTs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FQTtBQUNBO0FBbUVBOzs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyS0E7QUFDQTtBQXFLQTs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBekRBO0FBQ0E7QUF5REE7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXpKQTtBQUNBO0FBMEpBOzs7Ozs7Ozs7Ozs7QUNwS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlXQTtBQUNBO0FBOFdBOzs7Ozs7Ozs7Ozs7QUM1WEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQXRTQTtBQUNBO0FBc1NBOzs7Ozs7Ozs7Ozs7QUNyWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBaEJBO0FBQ0E7QUFpQkE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQTVEQTtBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBaQTtBQUNBO0FBcVpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=