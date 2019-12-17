(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-card"],{

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
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

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // tslint:disable-next-line

var paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

var haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

var HaPaperDialog =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(HaPaperDialog, _mixinBehaviors);

  function HaPaperDialog() {
    _classCallCheck(this, HaPaperDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDialog).apply(this, arguments));
  }

  return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass));
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/panels/lovelace/common/get-card-element-tag.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/get-card-element-tag.ts ***!
  \************************************************************/
/*! exports provided: getCardElementTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardElementTag", function() { return getCardElementTag; });
var CUSTOM_TYPE_PREFIX = "custom:";
function getCardElementTag(type) {
  return type.startsWith(CUSTOM_TYPE_PREFIX) ? type.substr(CUSTOM_TYPE_PREFIX.length) : "hui-".concat(type, "-card");
}

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardEditor", function() { return HuiCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: flex;\n      }\n      .wrapper {\n        width: 100%;\n      }\n      .gui-editor,\n      .yaml-editor {\n        padding: 8px 0px;\n      }\n      .error {\n        color: #ef5350;\n      }\n      .warning {\n        color: #ffa726;\n      }\n      .buttons {\n        text-align: right;\n        padding: 8px 0px;\n      }\n      paper-spinner {\n        display: block;\n        margin: auto;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"warning\">\n                ", "\n              </div>\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"error\">\n                ", "\n              </div>\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"yaml-editor\">\n                <ha-code-editor\n                  mode=\"yaml\"\n                  autofocus\n                  .value=", "\n                  .error=", "\n                  .rtl=", "\n                  @value-changed=", "\n                ></ha-code-editor>\n              </div>\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                      <paper-spinner\n                        active\n                        alt=\"Loading\"\n                        class=\"center margin-bot\"\n                      ></paper-spinner>\n                    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"gui-editor\">\n                ", "\n              </div>\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"wrapper\">\n        ", "\n        ", "\n        ", "\n        <div class=\"buttons\">\n          <mwc-button\n            @click=", "\n            ?disabled=", "\n          >\n            ", "\n          </mwc-button>\n        </div>\n      </div>\n    "]);

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






 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line


var HuiCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-editor")], function (_initialize, _LitElement) {
  var HuiCardEditor =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HuiCardEditor, _LitElement2);

    function HuiCardEditor() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HuiCardEditor);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HuiCardEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HuiCardEditor;
  }(_LitElement);

  return {
    F: HuiCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_yaml",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_configElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_configElType",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_GUImode",
      value: function value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_warning",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loading",
      value: function value() {
        return false;
      }
    }, {
      kind: "get",
      key: "yaml",
      value: // Error: Configuration broken - do not save
      // Warning: GUI editor can't handle configuration - ok to save
      function yaml() {
        return this._yaml || "";
      }
    }, {
      kind: "set",
      key: "yaml",
      value: function yaml(_yaml) {
        this._yaml = _yaml;

        try {
          this._config = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(this.yaml);

          this._updateConfigElement();

          this._error = undefined;
        } catch (err) {
          this._error = err.message;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", {
          config: this.value,
          error: this._error
        });
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return this._config;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(config) {
        if (JSON.stringify(config) !== JSON.stringify(this._config || {})) {
          this.yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(config);
        }
      }
    }, {
      kind: "get",
      key: "hasError",
      value: function hasError() {
        return this._error !== undefined;
      }
    }, {
      kind: "get",
      key: "_yamlEditor",
      value: function _yamlEditor() {
        return this.shadowRoot.querySelector("ha-code-editor");
      }
    }, {
      kind: "method",
      key: "toggleMode",
      value: function toggleMode() {
        this._GUImode = !this._GUImode;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "connectedCallback", this).call(this);

        this._refreshYamlEditor();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this._GUImode ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this._loading ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3()) : this._configElement) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.yaml, this._error, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__["computeRTL"])(this.hass), this._handleYAMLChanged), this._error ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this._error) : "", this._warning ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), this._warning) : "", this.toggleMode, this._warning || this._error, this.hass.localize(this._GUImode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor"));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("_GUImode")) {
          if (this._GUImode === false) {
            // Refresh code editor when switching to yaml mode
            this._refreshYamlEditor(true);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "iron-resize");
        }
      }
    }, {
      kind: "method",
      key: "_refreshYamlEditor",
      value: function _refreshYamlEditor() {
        var _this2 = this;

        var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        // wait on render
        setTimeout(function () {
          if (_this2._yamlEditor && _this2._yamlEditor.codemirror) {
            _this2._yamlEditor.codemirror.refresh();

            if (focus) {
              _this2._yamlEditor.codemirror.focus();
            }
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(_this2, "iron-resize");
        }, 1);
      }
    }, {
      kind: "method",
      key: "_handleUIConfigChanged",
      value: function _handleUIConfigChanged(ev) {
        ev.stopPropagation();
        var config = ev.detail.config;
        this.value = config;
      }
    }, {
      kind: "method",
      key: "_handleYAMLChanged",
      value: function _handleYAMLChanged(ev) {
        ev.stopPropagation();
        var newYaml = ev.detail.value;

        if (newYaml !== this.yaml) {
          this.yaml = newYaml;
        }
      }
    }, {
      kind: "method",
      key: "_updateConfigElement",
      value: function _updateConfigElement() {
        var _this3 = this;

        var cardType, configElement, tag, elClass;
        return regeneratorRuntime.async(function _updateConfigElement$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.value) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                cardType = this.value.type;
                configElement = this._configElement;
                _context.prev = 4;
                this._error = undefined;
                this._warning = undefined;

                if (!(this._configElType !== cardType)) {
                  _context.next = 25;
                  break;
                }

                if (this.value.type) {
                  _context.next = 10;
                  break;
                }

                throw new Error("No card type defined");

              case 10:
                tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__["getCardElementTag"])(cardType); // Check if the card type exists

                elClass = customElements.get(tag);

                if (elClass) {
                  _context.next = 14;
                  break;
                }

                throw new Error("Unknown card type encountered: ".concat(cardType, "."));

              case 14:
                this._loading = true; // Check if a GUI editor exists

                if (!(elClass && elClass.getConfigElement)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 18;
                return regeneratorRuntime.awrap(elClass.getConfigElement());

              case 18:
                configElement = _context.sent;
                _context.next = 23;
                break;

              case 21:
                configElement = undefined;
                throw Error("WARNING: No visual editor available for: ".concat(cardType));

              case 23:
                this._configElement = configElement;
                this._configElType = cardType;

              case 25:
                _context.prev = 25;

                this._configElement.setConfig(this.value);

                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t0 = _context["catch"](25);
                throw Error("WARNING: ".concat(_context.t0.message));

              case 32:
                // Perform final setup
                this._configElement.hass = this.hass;

                this._configElement.addEventListener("config-changed", function (ev) {
                  return _this3._handleUIConfigChanged(ev);
                });

                return _context.abrupt("return");

              case 37:
                _context.prev = 37;
                _context.t1 = _context["catch"](4);

                if (_context.t1.message.startsWith("WARNING:")) {
                  this._warning = _context.t1.message.substr(8);
                } else {
                  this._error = _context.t1;
                }

                this._GUImode = false;

              case 41:
                _context.prev = 41;
                this._loading = false;
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "iron-resize");
                return _context.finish(41);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, null, this, [[4, 37, 41, 45], [25, 29]]);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-picker.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPicker", function() { return HuiCardPicker; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        .cards-container {\n          display: flex;\n          flex-wrap: wrap;\n          margin-bottom: 10px;\n        }\n        .cards-container mwc-button {\n          flex: 1 0 25%;\n          margin: 4px;\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .cards-container mwc-button {\n            flex: 1 0 33%;\n          }\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <mwc-button @click=\"", "\" .type=\"", "\">\n              ", "\n            </mwc-button>\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"cards-container\">\n        ", "\n      </div>\n      <div class=\"cards-container\">\n        <mwc-button @click=\"", "\">MANUAL CARD</mwc-button>\n      </div>\n    "]);

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





var cards = ["alarm-panel", "conditional", "entities", "entity-button", "entity-filter", "gauge", "glance", "history-graph", "horizontal-stack", "iframe", "light", "map", "markdown", "media-control", "picture", "picture-elements", "picture-entity", "picture-glance", "plant-status", "sensor", "shopping-list", "thermostat", "vertical-stack", "weather-forecast"];
var HuiCardPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-picker")], function (_initialize, _LitElement) {
  var HuiCardPicker =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HuiCardPicker, _LitElement2);

    function HuiCardPicker() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HuiCardPicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HuiCardPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HuiCardPicker;
  }(_LitElement);

  return {
    F: HuiCardPicker,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      key: "cardPicked",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), cards.map(function (card) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), _this2._cardPicked, card, _this2.hass.localize("ui.panel.lovelace.editor.card.".concat(card, ".name")));
        }), this._manualPicked);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3())];
      }
    }, {
      kind: "method",
      key: "_manualPicked",
      value: function _manualPicked() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: {
            type: ""
          }
        });
      }
    }, {
      kind: "method",
      key: "_cardPicked",
      value: function _cardPicked(ev) {
        var type = ev.currentTarget.type;
        var tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_2__["getCardElementTag"])(type);
        var elClass = customElements.get(tag);
        var config = {
          type: type
        };

        if (elClass && elClass.getStubConfig) {
          var cardConfig = elClass.getStubConfig(this.hass);
          config = Object.assign({}, config, {}, cardConfig);
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "config-changed", {
          config: config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-preview.ts ***!
  \********************************************************************/
/*! exports provided: HuiCardPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPreview", function() { return HuiCardPreview; });
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var HuiCardPreview =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(HuiCardPreview, _HTMLElement);

  function HuiCardPreview() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HuiCardPreview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HuiCardPreview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "_element", void 0);

    return _this;
  }

  _createClass(HuiCardPreview, [{
    key: "_createCard",
    value: function _createCard(configValue) {
      this._cleanup();

      this._element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_2__["createCardElement"])(configValue);

      if (this._hass) {
        this._element.hass = this._hass;
      }

      this.appendChild(this._element);
    }
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      if (!this._element) {
        return;
      }

      this.removeChild(this._element);
      this._element = undefined;
    }
  }, {
    key: "hass",
    set: function set(hass) {
      if (!this._hass || this._hass.language !== hass.language) {
        this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(hass) ? "rtl" : "ltr";
      }

      this._hass = hass;

      if (this._element) {
        this._element.hass = hass;
      }
    }
  }, {
    key: "error",
    set: function set(error) {
      var configValue = Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__["createErrorCardConfig"])("".concat(error.type, ": ").concat(error.message), undefined);

      this._createCard(configValue);
    }
  }, {
    key: "config",
    set: function set(configValue) {
      if (!configValue) {
        this._cleanup();

        return;
      }

      if (!configValue.type) {
        this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__["createErrorCardConfig"])("No card type found", configValue));

        return;
      }

      if (!this._element) {
        this._createCard(configValue);

        return;
      }

      var tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__["getCardElementTag"])(configValue.type);

      if (tag.toUpperCase() === this._element.tagName) {
        try {
          this._element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__["default"])(configValue));
        } catch (err) {
          this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__["createErrorCardConfig"])(err.message, configValue));
        }
      } else {
        this._createCard(configValue);
      }
    }
  }]);

  return HuiCardPreview;
}(_wrapNativeSuper(HTMLElement));
customElements.define("hui-card-preview", HuiCardPreview);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogEditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditCard", function() { return HuiDialogEditCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _hui_card_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hui-card-editor */ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts");
/* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          --code-mirror-max-height: calc(100vh - 176px);\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 850px) {\n          ha-paper-dialog {\n            width: 845px;\n          }\n        }\n\n        ha-paper-dialog {\n          max-width: 845px;\n        }\n\n        .center {\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .content {\n          display: flex;\n          flex-direction: column;\n          margin: 0 -10px;\n        }\n        .content hui-card-preview {\n          margin: 4px auto;\n          max-width: 390px;\n        }\n        .content .element-editor {\n          margin: 0 10px;\n        }\n\n        @media (min-width: 1200px) {\n          ha-paper-dialog {\n            max-width: none;\n            width: 1000px;\n          }\n\n          .content {\n            flex-direction: row;\n          }\n          .content > * {\n            flex-basis: 0;\n            flex-grow: 1;\n            flex-shrink: 1;\n            min-width: 0;\n          }\n          .content hui-card-preview {\n            padding: 8px 0;\n            margin: auto 10px;\n            max-width: 500px;\n          }\n        }\n\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        .hidden {\n          display: none;\n        }\n        .element-editor {\n          margin-bottom: 8px;\n        }\n        .blur {\n          filter: blur(2px) grayscale(100%);\n        }\n        .element-preview {\n          position: relative;\n        }\n        .element-preview paper-spinner {\n          top: 50%;\n          left: 50%;\n          position: absolute;\n          z-index: 10;\n        }\n        hui-card-preview {\n          padding-top: 8px;\n          margin-bottom: 4px;\n          display: block;\n          width: 100%;\n        }\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                        <paper-spinner active alt=\"Saving\"></paper-spinner>\n                      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <mwc-button\n                  ?disabled=\"", "\"\n                  @click=\"", "\"\n                >\n                  ", "\n                </mwc-button>\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                          <paper-spinner\n                            active\n                            alt=\"Can't update card\"\n                          ></paper-spinner>\n                        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"content\">\n                  <div class=\"element-editor\">\n                    <hui-card-editor\n                      .hass=\"", "\"\n                      .value=\"", "\"\n                      @config-changed=\"", "\"\n                    ></hui-card-editor>\n                  </div>\n                  <div class=\"element-preview\">\n                    <hui-card-preview\n                      .hass=\"", "\"\n                      .config=\"", "\"\n                      class=", "\n                    ></hui-card-preview>\n                    ", "\n                  </div>\n                </div>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                <hui-card-picker\n                  .hass=\"", "\"\n                  @config-changed=\"", "\"\n                ></hui-card-picker>\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-paper-dialog with-backdrop opened modal>\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ", "\n        </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          <mwc-button @click=\"", "\">\n            ", "\n          </mwc-button>\n          ", "\n        </div>\n      </ha-paper-dialog>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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


 // tslint:disable-next-line






var HuiDialogEditCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-edit-card")], function (_initialize, _LitElement) {
  var HuiDialogEditCard =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HuiDialogEditCard, _LitElement2);

    function HuiDialogEditCard() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HuiDialogEditCard);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HuiDialogEditCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HuiDialogEditCard;
  }(_LitElement);

  return {
    F: HuiDialogEditCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_viewConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_saving",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: function showDialog(params) {
        var _params$path, view, card;

        return regeneratorRuntime.async(function showDialog$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._params = params;
                _params$path = _slicedToArray(params.path, 2), view = _params$path[0], card = _params$path[1];
                this._viewConfig = params.lovelace.config.views[view];
                this._cardConfig = card !== undefined ? this._viewConfig.cards[card] : undefined;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "get",
      key: "_cardEditorEl",
      value: function _cardEditorEl() {
        return this.shadowRoot.querySelector("hui-card-editor");
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        var heading;

        if (this._cardConfig && this._cardConfig.type) {
          heading = "".concat(this.hass.localize("ui.panel.lovelace.editor.card.".concat(this._cardConfig.type, ".name")), " ").concat(this.hass.localize("ui.panel.lovelace.editor.edit_card.header"));
        } else if (!this._cardConfig) {
          heading = this._viewConfig.title ? this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card_view_title", "name", "\"".concat(this._viewConfig.title, "\"")) : this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card");
        } else {
          heading = this.hass.localize("ui.panel.lovelace.editor.edit_card.header");
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), heading, this._cardConfig === undefined ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this.hass, this._handleCardPicked) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.hass, this._cardConfig, this._handleConfigChanged, this.hass, this._cardConfig, this._error ? "blur" : "", this._error ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5()) : ""), this._close, this.hass.localize("ui.common.cancel"), this._cardConfig !== undefined ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), !this._canSave || this._saving, this._save, this._saving ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7()) : this.hass.localize("ui.common.save")) : "");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_6__["haStyleDialog"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8())];
      }
    }, {
      kind: "method",
      key: "_handleCardPicked",
      value: function _handleCardPicked(ev) {
        this._cardConfig = ev.detail.config;

        if (this._params.entities && this._params.entities.length > 0) {
          if (Object.keys(this._cardConfig).includes("entities")) {
            this._cardConfig.entities = this._params.entities;
          } else if (Object.keys(this._cardConfig).includes("entity")) {
            this._cardConfig.entity = this._params.entities[0];
          }
        }

        this._error = ev.detail.error;
      }
    }, {
      kind: "method",
      key: "_handleConfigChanged",
      value: function _handleConfigChanged(ev) {
        this._cardConfig = ev.detail.config;
        this._error = ev.detail.error;
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
        this._cardConfig = undefined;
        this._error = undefined;
      }
    }, {
      kind: "get",
      key: "_canSave",
      value: function _canSave() {
        if (this._saving) {
          return false;
        }

        if (this._cardConfig === undefined) {
          return false;
        }

        if (this._cardEditorEl && this._cardEditorEl.hasError) {
          return false;
        }

        return true;
      }
    }, {
      kind: "method",
      key: "_save",
      value: function _save() {
        var lovelace;
        return regeneratorRuntime.async(function _save$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lovelace = this._params.lovelace;
                this._saving = true;
                _context2.next = 4;
                return regeneratorRuntime.awrap(lovelace.saveConfig(this._params.path.length === 1 ? Object(_config_util__WEBPACK_IMPORTED_MODULE_4__["addCard"])(lovelace.config, this._params.path, this._cardConfig) : Object(_config_util__WEBPACK_IMPORTED_MODULE_4__["replaceCard"])(lovelace.config, this._params.path, this._cardConfig)));

              case 4:
                this._saving = false;

                this._close();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2dldC1jYXJkLWVsZW1lbnQtdGFnLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktY2FyZC1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWNhcmQtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktZGlhbG9nLWVkaXQtY2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImNvbnN0IENVU1RPTV9UWVBFX1BSRUZJWCA9IFwiY3VzdG9tOlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnRUYWcodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGUuc3RhcnRzV2l0aChDVVNUT01fVFlQRV9QUkVGSVgpXG4gICAgPyB0eXBlLnN1YnN0cihDVVNUT01fVFlQRV9QUkVGSVgubGVuZ3RoKVxuICAgIDogYGh1aS0ke3R5cGV9LWNhcmRgO1xufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IHNhZmVEdW1wLCBzYWZlTG9hZCB9IGZyb20gXCJqcy15YW1sXCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlbnRpdGllcy1jaGFuZ2VkXCI6IHtcbiAgICAgIGVudGl0aWVzOiBFbnRpdHlDb25maWdbXTtcbiAgICB9O1xuICAgIFwiY29uZmlnLWNoYW5nZWRcIjoge1xuICAgICAgY29uZmlnOiBMb3ZlbGFjZUNhcmRDb25maWc7XG4gICAgICBlcnJvcj86IHN0cmluZztcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDb25maWdDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGNvbmZpZzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuICB9O1xufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3lhbWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxlbWVudD86IExvdmVsYWNlQ2FyZEVkaXRvcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxUeXBlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9HVUltb2RlOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gRXJyb3I6IENvbmZpZ3VyYXRpb24gYnJva2VuIC0gZG8gbm90IHNhdmVcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG4gIC8vIFdhcm5pbmc6IEdVSSBlZGl0b3IgY2FuJ3QgaGFuZGxlIGNvbmZpZ3VyYXRpb24gLSBvayB0byBzYXZlXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dhcm5pbmc/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IHlhbWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5feWFtbCB8fCBcIlwiO1xuICB9XG4gIHB1YmxpYyBzZXQgeWFtbChfeWFtbDogc3RyaW5nKSB7XG4gICAgdGhpcy5feWFtbCA9IF95YW1sO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBzYWZlTG9hZCh0aGlzLnlhbWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ29uZmlnRWxlbWVudCgpO1xuICAgICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7XG4gICAgICBjb25maWc6IHRoaXMudmFsdWUhLFxuICAgICAgZXJyb3I6IHRoaXMuX2Vycm9yLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBMb3ZlbGFjZUNhcmRDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgcHVibGljIHNldCB2YWx1ZShjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjb25maWcpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLl9jb25maWcgfHwge30pKSB7XG4gICAgICB0aGlzLnlhbWwgPSBzYWZlRHVtcChjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfeWFtbEVkaXRvcigpOiBIYUNvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJoYS1jb2RlLWVkaXRvclwiKSEgYXMgSGFDb2RlRWRpdG9yO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vZGUoKSB7XG4gICAgdGhpcy5fR1VJbW9kZSA9ICF0aGlzLl9HVUltb2RlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fcmVmcmVzaFlhbWxFZGl0b3IoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgJHt0aGlzLl9HVUltb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpLWVkaXRvclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZW50ZXIgbWFyZ2luLWJvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiB0aGlzLl9jb25maWdFbGVtZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5YW1sLWVkaXRvclwiPlxuICAgICAgICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLnlhbWx9XG4gICAgICAgICAgICAgICAgICAuZXJyb3I9JHt0aGlzLl9lcnJvcn1cbiAgICAgICAgICAgICAgICAgIC5ydGw9JHtjb21wdXRlUlRMKHRoaXMuaGFzcyl9XG4gICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVlBTUxDaGFuZ2VkfVxuICAgICAgICAgICAgICAgID48L2hhLWNvZGUtZWRpdG9yPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fZXJyb3J9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHt0aGlzLl93YXJuaW5nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fd2FybmluZ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLnRvZ2dsZU1vZGV9XG4gICAgICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLl93YXJuaW5nIHx8IHRoaXMuX2Vycm9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgdGhpcy5fR1VJbW9kZVxuICAgICAgICAgICAgICAgID8gXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnNob3dfY29kZV9lZGl0b3JcIlxuICAgICAgICAgICAgICAgIDogXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnNob3dfdmlzdWFsX2VkaXRvclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfR1VJbW9kZVwiKSkge1xuICAgICAgaWYgKHRoaXMuX0dVSW1vZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggY29kZSBlZGl0b3Igd2hlbiBzd2l0Y2hpbmcgdG8geWFtbCBtb2RlXG4gICAgICAgIHRoaXMuX3JlZnJlc2hZYW1sRWRpdG9yKHRydWUpO1xuICAgICAgfVxuICAgICAgZmlyZUV2ZW50KHRoaXMgYXMgSFRNTEVsZW1lbnQsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFlhbWxFZGl0b3IoZm9jdXMgPSBmYWxzZSkge1xuICAgIC8vIHdhaXQgb24gcmVuZGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5feWFtbEVkaXRvciAmJiB0aGlzLl95YW1sRWRpdG9yLmNvZGVtaXJyb3IpIHtcbiAgICAgICAgdGhpcy5feWFtbEVkaXRvci5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5feWFtbEVkaXRvci5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpcmVFdmVudCh0aGlzIGFzIEhUTUxFbGVtZW50LCBcImlyb24tcmVzaXplXCIpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVUlDb25maWdDaGFuZ2VkKGV2OiBVSUNvbmZpZ0NoYW5nZWRFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZztcbiAgfVxuICBwcml2YXRlIF9oYW5kbGVZQU1MQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IG5ld1lhbWwgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1lhbWwgIT09IHRoaXMueWFtbCkge1xuICAgICAgdGhpcy55YW1sID0gbmV3WWFtbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWdFbGVtZW50KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRUeXBlID0gdGhpcy52YWx1ZS50eXBlO1xuICAgIGxldCBjb25maWdFbGVtZW50ID0gdGhpcy5fY29uZmlnRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93YXJuaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnRWxUeXBlICE9PSBjYXJkVHlwZSkge1xuICAgICAgICAvLyBJZiB0aGUgY2FyZCB0eXBlIGhhcyBjaGFuZ2VkLCB3ZSBuZWVkIHRvIGxvYWQgYSBuZXcgR1VJIGVkaXRvclxuICAgICAgICBpZiAoIXRoaXMudmFsdWUudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmQgdHlwZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFnID0gZ2V0Q2FyZEVsZW1lbnRUYWcoY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYXJkIHR5cGUgZXhpc3RzXG4gICAgICAgIGNvbnN0IGVsQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQodGFnKTtcbiAgICAgICAgaWYgKCFlbENsYXNzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhcmQgdHlwZSBlbmNvdW50ZXJlZDogJHtjYXJkVHlwZX0uYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBHVUkgZWRpdG9yIGV4aXN0c1xuICAgICAgICBpZiAoZWxDbGFzcyAmJiBlbENsYXNzLmdldENvbmZpZ0VsZW1lbnQpIHtcbiAgICAgICAgICBjb25maWdFbGVtZW50ID0gYXdhaXQgZWxDbGFzcy5nZXRDb25maWdFbGVtZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uZmlnRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgV0FSTklORzogTm8gdmlzdWFsIGVkaXRvciBhdmFpbGFibGUgZm9yOiAke2NhcmRUeXBlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCA9IGNvbmZpZ0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0VsVHlwZSA9IGNhcmRUeXBlO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBHVUkgZWRpdG9yIGFuZCBjaGVjayB0aGF0IGl0IGNhbiBoYW5kbGUgdGhlIGN1cnJlbnQgY29uZmlnXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9jb25maWdFbGVtZW50IS5zZXRDb25maWcodGhpcy52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFdBUk5JTkc6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBlcmZvcm0gZmluYWwgc2V0dXBcbiAgICAgIHRoaXMuX2NvbmZpZ0VsZW1lbnQhLmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50IS5hZGRFdmVudExpc3RlbmVyKFwiY29uZmlnLWNoYW5nZWRcIiwgKGV2KSA9PlxuICAgICAgICB0aGlzLl9oYW5kbGVVSUNvbmZpZ0NoYW5nZWQoZXYgYXMgVUlDb25maWdDaGFuZ2VkRXZlbnQpXG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2Uuc3RhcnRzV2l0aChcIldBUk5JTkc6XCIpKSB7XG4gICAgICAgIHRoaXMuX3dhcm5pbmcgPSBlcnIubWVzc2FnZS5zdWJzdHIoOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX0dVSW1vZGUgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ndWktZWRpdG9yLFxuICAgICAgLnlhbWwtZWRpdG9yIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiAjZWY1MzUwO1xuICAgICAgfVxuICAgICAgLndhcm5pbmcge1xuICAgICAgICBjb2xvcjogI2ZmYTcyNjtcbiAgICAgIH1cbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1lZGl0b3JcIjogSHVpQ2FyZEVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IENhcmRQaWNrVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmNvbnN0IGNhcmRzOiBzdHJpbmdbXSA9IFtcbiAgXCJhbGFybS1wYW5lbFwiLFxuICBcImNvbmRpdGlvbmFsXCIsXG4gIFwiZW50aXRpZXNcIixcbiAgXCJlbnRpdHktYnV0dG9uXCIsXG4gIFwiZW50aXR5LWZpbHRlclwiLFxuICBcImdhdWdlXCIsXG4gIFwiZ2xhbmNlXCIsXG4gIFwiaGlzdG9yeS1ncmFwaFwiLFxuICBcImhvcml6b250YWwtc3RhY2tcIixcbiAgXCJpZnJhbWVcIixcbiAgXCJsaWdodFwiLFxuICBcIm1hcFwiLFxuICBcIm1hcmtkb3duXCIsXG4gIFwibWVkaWEtY29udHJvbFwiLFxuICBcInBpY3R1cmVcIixcbiAgXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gIFwicGljdHVyZS1lbnRpdHlcIixcbiAgXCJwaWN0dXJlLWdsYW5jZVwiLFxuICBcInBsYW50LXN0YXR1c1wiLFxuICBcInNlbnNvclwiLFxuICBcInNob3BwaW5nLWxpc3RcIixcbiAgXCJ0aGVybW9zdGF0XCIsXG4gIFwidmVydGljYWwtc3RhY2tcIixcbiAgXCJ3ZWF0aGVyLWZvcmVjYXN0XCIsXG5dO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLXBpY2tlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHB1YmxpYyBjYXJkUGlja2VkPzogKGNhcmRDb25mOiBMb3ZlbGFjZUNhcmRDb25maWcpID0+IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxuICAgICAgICAke2NhcmRzLm1hcCgoY2FyZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2NhcmRQaWNrZWR9XCIgLnR5cGU9XCIke2NhcmR9XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBgdWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuJHtjYXJkfS5uYW1lYFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIGA7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fbWFudWFsUGlja2VkfVwiPk1BTlVBTCBDQVJEPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuY2FyZHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkcy1jb250YWluZXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZmxleDogMSAwIDI1JTtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAuY2FyZHMtY29udGFpbmVyIG13Yy1idXR0b24ge1xuICAgICAgICAgICAgZmxleDogMSAwIDMzJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX21hbnVhbFBpY2tlZCgpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7XG4gICAgICBjb25maWc6IHsgdHlwZTogXCJcIiB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFBpY2tlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0eXBlID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIENhcmRQaWNrVGFyZ2V0KS50eXBlO1xuICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKHR5cGUpO1xuXG4gICAgY29uc3QgZWxDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuICAgIGxldCBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyA9IHsgdHlwZSB9O1xuXG4gICAgaWYgKGVsQ2xhc3MgJiYgZWxDbGFzcy5nZXRTdHViQ29uZmlnKSB7XG4gICAgICBjb25zdCBjYXJkQ29uZmlnID0gZWxDbGFzcy5nZXRTdHViQ29uZmlnKHRoaXMuaGFzcyk7XG4gICAgICBjb25maWcgPSB7IC4uLmNvbmZpZywgLi4uY2FyZENvbmZpZyB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1waWNrZXJcIjogSHVpQ2FyZFBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcblxuaW1wb3J0IGRlZXBDbG9uZSBmcm9tIFwiZGVlcC1jbG9uZS1zaW1wbGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NyZWF0ZS1jYXJkLWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0Vycm9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IGNyZWF0ZUVycm9yQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy9odWktZXJyb3ItY2FyZFwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5leHBvcnQgY2xhc3MgSHVpQ2FyZFByZXZpZXcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwcml2YXRlIF9lbGVtZW50PzogTG92ZWxhY2VDYXJkO1xuXG4gIHNldCBoYXNzKGhhc3M6IEhvbWVBc3Npc3RhbnQpIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MgfHwgdGhpcy5faGFzcy5sYW5ndWFnZSAhPT0gaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5zdHlsZS5kaXJlY3Rpb24gPSBjb21wdXRlUlRMKGhhc3MpID8gXCJydGxcIiA6IFwibHRyXCI7XG4gICAgfVxuXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuaGFzcyA9IGhhc3M7XG4gICAgfVxuICB9XG5cbiAgc2V0IGVycm9yKGVycm9yOiBDb25maWdFcnJvcikge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY3JlYXRlRXJyb3JDYXJkQ29uZmlnKFxuICAgICAgYCR7ZXJyb3IudHlwZX06ICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgdW5kZWZpbmVkXG4gICAgKTtcblxuICAgIHRoaXMuX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWUpO1xuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWdWYWx1ZTogTG92ZWxhY2VDYXJkQ29uZmlnKSB7XG4gICAgaWYgKCFjb25maWdWYWx1ZSkge1xuICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnVmFsdWUudHlwZSkge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChcbiAgICAgICAgY3JlYXRlRXJyb3JDYXJkQ29uZmlnKFwiTm8gY2FyZCB0eXBlIGZvdW5kXCIsIGNvbmZpZ1ZhbHVlKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKGNvbmZpZ1ZhbHVlLnR5cGUpO1xuXG4gICAgaWYgKHRhZy50b1VwcGVyQ2FzZSgpID09PSB0aGlzLl9lbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0Q29uZmlnKGRlZXBDbG9uZShjb25maWdWYWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoY3JlYXRlRXJyb3JDYXJkQ29uZmlnKGVyci5tZXNzYWdlLCBjb25maWdWYWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlOiBMb3ZlbGFjZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IGNyZWF0ZUNhcmRFbGVtZW50KGNvbmZpZ1ZhbHVlKTtcblxuICAgIGlmICh0aGlzLl9oYXNzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50IS5oYXNzID0gdGhpcy5faGFzcztcbiAgICB9XG5cbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtcHJldmlld1wiOiBIdWlDYXJkUHJldmlldztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktY2FyZC1wcmV2aWV3XCIsIEh1aUNhcmRQcmV2aWV3KTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIExvdmVsYWNlQ2FyZENvbmZpZyxcbiAgTG92ZWxhY2VWaWV3Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1lZGl0b3JcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSHVpQ2FyZEVkaXRvciB9IGZyb20gXCIuL2h1aS1jYXJkLWVkaXRvclwiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1wcmV2aWV3XCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLXBpY2tlclwiO1xuaW1wb3J0IHsgRWRpdENhcmREaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IGFkZENhcmQsIHJlcGxhY2VDYXJkIH0gZnJvbSBcIi4uL2NvbmZpZy11dGlsXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBmb3IgYWRkIGV2ZW50IGxpc3RlbmVyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudEV2ZW50TWFwIHtcbiAgICBcInJlbG9hZC1sb3ZlbGFjZVwiOiBIQVNTRG9tRXZlbnQ8dW5kZWZpbmVkPjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kaWFsb2ctZWRpdC1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSHVpRGlhbG9nRWRpdENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IEVkaXRDYXJkRGlhbG9nUGFyYW1zO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3ZpZXdDb25maWchOiBMb3ZlbGFjZVZpZXdDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2F2aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogRWRpdENhcmREaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgY29uc3QgW3ZpZXcsIGNhcmRdID0gcGFyYW1zLnBhdGg7XG4gICAgdGhpcy5fdmlld0NvbmZpZyA9IHBhcmFtcy5sb3ZlbGFjZS5jb25maWcudmlld3Nbdmlld107XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9XG4gICAgICBjYXJkICE9PSB1bmRlZmluZWQgPyB0aGlzLl92aWV3Q29uZmlnLmNhcmRzIVtjYXJkXSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9jYXJkRWRpdG9yRWwoKTogSHVpQ2FyZEVkaXRvciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJodWktY2FyZC1lZGl0b3JcIik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRpbmc6IHN0cmluZztcbiAgICBpZiAodGhpcy5fY2FyZENvbmZpZyAmJiB0aGlzLl9jYXJkQ29uZmlnLnR5cGUpIHtcbiAgICAgIGhlYWRpbmcgPSBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBgdWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuJHt0aGlzLl9jYXJkQ29uZmlnLnR5cGV9Lm5hbWVgXG4gICAgICApfSAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmhlYWRlclwiKX1gO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NhcmRDb25maWcpIHtcbiAgICAgIGhlYWRpbmcgPSB0aGlzLl92aWV3Q29uZmlnLnRpdGxlXG4gICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5waWNrX2NhcmRfdmlld190aXRsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBgXCIke3RoaXMuX3ZpZXdDb25maWcudGl0bGV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnBpY2tfY2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZyA9IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5oZWFkZXJcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcCBvcGVuZWQgbW9kYWw+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICAke2hlYWRpbmd9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAke3RoaXMuX2NhcmRDb25maWcgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxodWktY2FyZC1waWNrZXJcbiAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgIEBjb25maWctY2hhbmdlZD1cIiR7dGhpcy5faGFuZGxlQ2FyZFBpY2tlZH1cIlxuICAgICAgICAgICAgICAgID48L2h1aS1jYXJkLXBpY2tlcj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1lZGl0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGh1aS1jYXJkLWVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2NhcmRDb25maWd9XCJcbiAgICAgICAgICAgICAgICAgICAgICBAY29uZmlnLWNoYW5nZWQ9XCIke3RoaXMuX2hhbmRsZUNvbmZpZ0NoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtZWRpdG9yPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxodWktY2FyZC1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2NhcmRDb25maWd9XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke3RoaXMuX2Vycm9yID8gXCJibHVyXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhbid0IHVwZGF0ZSBjYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IGBgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fY2xvc2V9XCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAke3RoaXMuX2NhcmRDb25maWcgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIkeyF0aGlzLl9jYW5TYXZlIHx8IHRoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9zYXZpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlIGFsdD1cIlNhdmluZ1wiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zYXZlXCIpfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc2cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC8qIG92ZXJydWxlIHRoZSBoYS1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgd2lkdGg6IDg0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4NDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgIG1hcmdpbjogNHB4IGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAzOTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCAuZWxlbWVudC1lZGl0b3Ige1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50ID4gKiB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtZWRpdG9yIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJsdXIge1xuICAgICAgICAgIGZpbHRlcjogYmx1cigycHgpIGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1wcmV2aWV3IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtcHJldmlldyBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICB9XG4gICAgICAgIGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDYXJkUGlja2VkKGV2KSB7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgaWYgKHRoaXMuX3BhcmFtcyEuZW50aXRpZXMgJiYgdGhpcy5fcGFyYW1zIS5lbnRpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fY2FyZENvbmZpZyEpLmluY2x1ZGVzKFwiZW50aXRpZXNcIikpIHtcbiAgICAgICAgdGhpcy5fY2FyZENvbmZpZyEuZW50aXRpZXMgPSB0aGlzLl9wYXJhbXMhLmVudGl0aWVzO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLl9jYXJkQ29uZmlnISkuaW5jbHVkZXMoXCJlbnRpdHlcIikpIHtcbiAgICAgICAgdGhpcy5fY2FyZENvbmZpZyEuZW50aXR5ID0gdGhpcy5fcGFyYW1zIS5lbnRpdGllc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXJyb3IgPSBldi5kZXRhaWwuZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDb25maWdDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgdGhpcy5fZXJyb3IgPSBldi5kZXRhaWwuZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9jYW5TYXZlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zYXZpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcmRDb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FyZEVkaXRvckVsICYmIHRoaXMuX2NhcmRFZGl0b3JFbC5oYXNFcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG92ZWxhY2UgPSB0aGlzLl9wYXJhbXMhLmxvdmVsYWNlO1xuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG4gICAgYXdhaXQgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHRoaXMuX3BhcmFtcyEucGF0aC5sZW5ndGggPT09IDFcbiAgICAgICAgPyBhZGRDYXJkKFxuICAgICAgICAgICAgbG92ZWxhY2UuY29uZmlnLFxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoIGFzIFtudW1iZXJdLFxuICAgICAgICAgICAgdGhpcy5fY2FyZENvbmZpZyFcbiAgICAgICAgICApXG4gICAgICAgIDogcmVwbGFjZUNhcmQoXG4gICAgICAgICAgICBsb3ZlbGFjZS5jb25maWcsXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLnBhdGggYXMgW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgICAgIHRoaXMuX2NhcmRDb25maWchXG4gICAgICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIjogSHVpRGlhbG9nRWRpdENhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVVBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBOUJBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBQUE7QUFzREE7QUFDQTtBQUFBO0FBQ0E7QUF4REE7QUFBQTtBQUFBO0FBQUE7QUEyREE7QUF3REE7QUFuSEE7QUFBQTtBQUFBO0FBQUE7QUFzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQS9IQTtBQUFBO0FBQUE7QUFBQTtBQWlJQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTVJQTtBQUFBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBQ0E7QUFDQTtBQWxKQTtBQUFBO0FBQUE7QUFBQTtBQW9KQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXpKQTtBQUFBO0FBQUE7QUFBQTtBQTJKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBeUJBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBNEJBO0FBNUJBO0FBQUE7QUFDQTtBQURBO0FBOEJBO0FBOUJBO0FBQ0E7QUFEQTtBQWtDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFBQTtBQUNBO0FBdUNBO0FBQ0E7QUF6Q0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBNkNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaERBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0RBO0FBQUE7QUE0REE7QUFDQTtBQTdEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZOQTtBQTBCQTtBQXZQQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBUUE7QUFJQTtBQUVBO0FBRUE7QUE0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUdBO0FBT0E7QUFNQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBO0FBbUJBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBK0NBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQWxEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWpFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUFBO0FBQUE7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF4RUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUlBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQUNBO0FBREE7QUFBQTtBQWlGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUE2REE7QUE1R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStHQTtBQWdHQTtBQS9NQTtBQUFBO0FBQUE7QUFBQTtBQWtOQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzTkE7QUFBQTtBQUFBO0FBQUE7QUE4TkE7QUFDQTtBQUNBO0FBaE9BO0FBQUE7QUFBQTtBQUFBO0FBbU9BO0FBQ0E7QUFDQTtBQUNBO0FBdE9BO0FBQUE7QUFBQTtBQUFBO0FBeU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFuUEE7QUFBQTtBQUFBO0FBQUE7QUFxUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJQQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==