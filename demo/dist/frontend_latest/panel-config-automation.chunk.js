(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation"],{

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

/***/ "./src/components/device/ha-device-trigger-picker.ts":
/*!***********************************************************!*\
  !*** ./src/components/device/ha-device-trigger-picker.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-device-automation-picker */ "./src/components/device/ha-device-automation-picker.ts");
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






let HaDeviceTriggerPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-trigger-picker")], function (_initialize, _HaDeviceAutomationPi) {
  class HaDeviceTriggerPicker extends _HaDeviceAutomationPi {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationTrigger"], _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["fetchDeviceTriggers"], deviceId => ({
        device_id: deviceId || "",
        platform: "device",
        domain: "",
        entity_id: ""
      }));

      _initialize(this);
    }

  }

  return {
    F: HaDeviceTriggerPicker,
    d: [{
      kind: "field",
      key: "NO_AUTOMATION_TEXT",

      value() {
        return "No triggers";
      }

    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",

      value() {
        return "Unknown trigger";
      }

    }]
  };
}, _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationPicker"]);

/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: deleteAutomation, showAutomationEditor, getAutomationEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAutomationEditor", function() { return showAutomationEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomationEditorInitData", function() { return getAutomationEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const deleteAutomation = (hass, id) => hass.callApi("DELETE", `config/automation/config/${id}`);
let inititialAutomationEditorData;
const showAutomationEditor = (el, data) => {
  inititialAutomationEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/automation/new");
};
const getAutomationEditorInitData = () => {
  const data = inititialAutomationEditorData;
  inititialAutomationEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-editor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
/*! exports provided: HaAutomationEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaAutomationEditor", function() { return HaAutomationEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/automation */ "./src/panels/config/js/automation.tsx");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
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


















function AutomationEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_5__["h"])(_js_automation__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}

let HaAutomationEditor = _decorate(null, function (_initialize, _LitElement) {
  class HaAutomationEditor extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this._configChanged = this._configChanged.bind(this);
    }

  }

  return {
    F: HaAutomationEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automation",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "creatingNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_dirty",
      value: void 0
    }, {
      kind: "field",
      key: "_rendered",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaAutomationEditor.prototype), "disconnectedCallback", this).call(this);

        if (this._rendered) {
          Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
          this._rendered = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${this.automation ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["computeStateName"])(this.automation) : this.hass.localize("ui.panel.config.automation.editor.default_name")}
            </div>
            ${this.creatingNew ? "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-button
                    title="${this.hass.localize("ui.panel.config.automation.picker.delete_automation")}"
                    icon="hass:delete"
                    @click=${this._delete}
                  ></paper-icon-button>
                `}
          </app-toolbar>
        </app-header>

        <div class="content">
          ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="errors">${this._errors}</div>
              ` : ""}
          <div
            id="root"
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
        })}"
          ></div>
        </div>
        <ha-fab
          slot="fab"
          ?is-wide="${this.isWide}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize("ui.panel.config.automation.editor.save")}"
          @click=${this._saveAutomation}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
        })}"
        ></ha-fab>
      </ha-app-layout>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaAutomationEditor.prototype), "updated", this).call(this, changedProps);

        const oldAutomation = changedProps.get("automation");

        if (changedProps.has("automation") && this.automation && this.hass && ( // Only refresh config if we picked a new automation. If same ID, don't fetch it.
        !oldAutomation || oldAutomation.attributes.id !== this.automation.attributes.id)) {
          this.hass.callApi("GET", `config/automation/config/${this.automation.attributes.id}`).then(config => {
            // Normalize data: ensure trigger, action and condition are lists
            // Happens when people copy paste their automations into the config
            for (const key of ["trigger", "condition", "action"]) {
              const value = config[key];

              if (value && !Array.isArray(value)) {
                config[key] = [value];
              }
            }

            this._dirty = false;
            this._config = config;
          }, resp => {
            alert(resp.status_code === 404 ? this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable") : this.hass.localize("ui.panel.config.automation.editor.load_error_unknown", "err_no", resp.status_code));
            history.back();
          });
        }

        if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
          const initData = Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["getAutomationEditorInitData"])();
          this._dirty = initData ? true : false;
          this._config = Object.assign({
            alias: this.hass.localize("ui.panel.config.automation.editor.default_name"),
            description: "",
            trigger: [{
              platform: "state"
            }],
            condition: [],
            action: [{
              service: ""
            }]
          }, initData);
        }

        if (changedProps.has("_config") && this.hass) {
          this._rendered = AutomationEditor(this.shadowRoot.querySelector("#root"), {
            automation: this._config,
            onChange: this._configChanged,
            isWide: this.isWide,
            hass: this.hass,
            localize: this.hass.localize
          }, this._rendered);
        }
      }
    }, {
      kind: "method",
      key: "_configChanged",
      value: function _configChanged(config) {
        // onChange gets called a lot during initial rendering causing recursing calls.
        if (!this._rendered) {
          return;
        }

        this._config = config;
        this._errors = undefined;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty && !confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))) {
          return;
        }

        history.back();
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        if (!confirm(this.hass.localize("ui.panel.config.automation.picker.delete_confirm"))) {
          return;
        }

        await Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["deleteAutomation"])(this.hass, this.automation.attributes.id);
        history.back();
      }
    }, {
      kind: "method",
      key: "_saveAutomation",
      value: function _saveAutomation() {
        const id = this.creatingNew ? "" + Date.now() : this.automation.attributes.id;
        this.hass.callApi("POST", "config/automation/config/" + id, this._config).then(() => {
          this._dirty = false;

          if (this.creatingNew) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"])(this, `/config/automation/edit/${id}`, true);
          }
        }, errors => {
          this._errors = errors.body.message;
          throw errors;
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[dirty] {
          margin-bottom: 0;
        }

        ha-fab.rtl {
          right: auto;
          left: 16px;
        }

        ha-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("ha-automation-editor", HaAutomationEditor);

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _show_dialog_thingtalk__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./show-dialog-thingtalk */ "./src/panels/config/automation/show-dialog-thingtalk.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
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




















let HaAutomationPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-automation-picker")], function (_initialize, _LitElement) {
  class HaAutomationPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaAutomationPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automations",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.automation.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.automation.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/automation/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize("ui.panel.config.automation.picker.pick_automation")}
          >
            ${this.automations.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
                    </p>
                  </div>
                ` : this.automations.map(automation => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

                      <div class='automation'>
                        <ha-entity-toggle
                          .hass=${this.hass}
                          .stateObj=${automation}
                        ></ha-entity-toggle>

                        <paper-item-body two-line>
                          <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["computeStateName"])(automation)}</div>
                          <div secondary>
                            ${this.hass.localize("ui.card.automation.last_triggered")}: ${automation.attributes.last_triggered ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(automation.attributes.last_triggered), this.hass.language) : this.hass.localize("ui.components.relative_time.never")}
                          </div>
                        </paper-item-body>
                        <div class='actions'>
                          <paper-icon-button
                            .automation=${automation}
                            @click=${this._showInfo}
                            icon="hass:information-outline"
                            title="${this.hass.localize("ui.panel.config.automation.picker.show_info_automation")}"
                          ></paper-icon-button>
                          <a
                            href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(automation.attributes.id ? `/config/automation/edit/${automation.attributes.id}` : undefined)}
                          >
                            <paper-icon-button
                              title="${this.hass.localize("ui.panel.config.automation.picker.edit_automation")}"
                              icon="hass:pencil"
                              .disabled=${!automation.attributes.id}
                            ></paper-icon-button>
                            ${!automation.attributes.id ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                    <paper-tooltip position="left">
                                      ${this.hass.localize("ui.panel.config.automation.picker.only_editable")}
                                    </paper-tooltip>
                                  ` : ""}
                          </a>
                        </div>
                      </div>
                    </a>
                  `)}
          </ha-card>
        </ha-config-section>
        <div>
          <ha-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass)}
            @click=${this._createNew}
          ></ha-fab>
        </div>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_showInfo",
      value: function _showInfo(ev) {
        const entityId = ev.currentTarget.automation.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_createNew",
      value: function _createNew() {
        if (!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_17__["isComponentLoaded"])(this.hass, "cloud")) {
          Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["showAutomationEditor"])(this);
          return;
        }

        Object(_show_dialog_thingtalk__WEBPACK_IMPORTED_MODULE_16__["showThingtalkDialog"])(this, {
          callback: config => Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["showAutomationEditor"])(this, config)
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .automation {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .automation a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        .actions {
          display: flex;
        }

        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          cursor: pointer;
        }

        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }

        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/automation/ha-config-automation.js":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts");
/* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");







class HaConfigAutomation extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        ha-automation-picker,
        ha-automation-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:automation"
        data="{{_routeData}}"
        active="{{_edittingAutomation}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-automation-picker
          hass="[[hass]]"
          automations="[[automations]]"
          is-wide="[[isWide]]"
        ></ha-automation-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-automation-editor
          hass="[[hass]]"
          automation="[[automation]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-automation-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object,
      isWide: Boolean,
      _routeData: Object,
      _routeMatches: Boolean,
      _creatingNew: Boolean,
      _edittingAutomation: Boolean,
      automations: {
        type: Array,
        computed: "computeAutomations(hass)"
      },
      automation: {
        type: Object,
        computed: "computeAutomation(automations, _edittingAutomation, _routeData)"
      },
      showEditor: {
        type: Boolean,
        computed: "computeShowEditor(_edittingAutomation, _creatingNew)"
      }
    };
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.route = {
      path: "",
      prefix: ""
    };
  }

  computeAutomation(automations, edittingAddon, routeData) {
    if (!automations || !edittingAddon) {
      return null;
    }

    for (var i = 0; i < automations.length; i++) {
      if (automations[i].attributes.id === routeData.automation) {
        return automations[i];
      }
    }

    return null;
  }

  computeAutomations(hass) {
    var automations = [];
    Object.keys(hass.states).forEach(function (key) {
      var entity = hass.states[key];

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(entity) === "automation") {
        automations.push(entity);
      }
    });
    return automations.sort(function entitySortBy(entityA, entityB) {
      var nameA = (entityA.attributes.alias || entityA.entity_id).toLowerCase();
      var nameB = (entityB.attributes.alias || entityB.entity_id).toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  computeShowEditor(_edittingAutomation, _creatingNew) {
    return _creatingNew || _edittingAutomation;
  }

}

customElements.define("ha-config-automation", HaConfigAutomation);

/***/ }),

/***/ "./src/panels/config/automation/show-dialog-thingtalk.ts":
/*!***************************************************************!*\
  !*** ./src/panels/config/automation/show-dialog-thingtalk.ts ***!
  \***************************************************************/
/*! exports provided: loadThingtalkDialog, showThingtalkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadThingtalkDialog", function() { return loadThingtalkDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showThingtalkDialog", function() { return showThingtalkDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadThingtalkDialog = () => Promise.all(/*! import() | thingtalk-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("thingtalk-dialog")]).then(__webpack_require__.bind(null, /*! ./thingtalk/dialog-thingtalk */ "./src/panels/config/automation/thingtalk/dialog-thingtalk.ts"));
const showThingtalkDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "ha-dialog-thinktalk",
    dialogImport: loadThingtalkDialog,
    dialogParams
  });
};

/***/ }),

/***/ "./src/panels/config/js/automation.tsx":
/*!*********************************************!*\
  !*** ./src/panels/config/js/automation.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Automation; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trigger/index */ "./src/panels/config/js/trigger/index.tsx");
/* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition/index */ "./src/panels/config/js/condition/index.tsx");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.tsx");








class Automation extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.triggerChanged = this.triggerChanged.bind(this);
    this.conditionChanged = this.conditionChanged.bind(this);
    this.actionChanged = this.actionChanged.bind(this);
  }

  onChange(ev) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      [ev.target.name]: ev.target.value
    }));
  }

  triggerChanged(trigger) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      trigger
    }));
  }

  conditionChanged(condition) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      condition
    }));
  }

  actionChanged(action) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      action
    }));
  }

  render({
    automation,
    isWide,
    hass,
    localize
  }) {
    const {
      alias,
      description,
      trigger,
      condition,
      action
    } = automation;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, alias), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, localize("ui.panel.config.automation.editor.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.alias"),
      name: "alias",
      value: alias,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.description.label"),
      placeholder: localize("ui.panel.config.automation.editor.description.placeholder"),
      name: "description",
      value: description,
      "onvalue-changed": this.onChange
    })))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.triggers.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.triggers.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/automation/trigger/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.triggers.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      trigger: trigger,
      onChange: this.triggerChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.conditions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.conditions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/scripts/conditions/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.conditions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      condition: condition || [],
      onChange: this.conditionChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.actions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.actions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/automation/action/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.actions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
      script: action,
      onChange: this.actionChanged,
      hass: hass,
      localize: localize
    })));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/device.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/device.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_trigger_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-trigger-picker */ "./src/components/device/ha-device-trigger-picker.ts");
/* harmony import */ var _components_ha_form_ha_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-form/ha-form */ "./src/components/ha-form/ha-form.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DeviceTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "_origTrigger", void 0);

    this.devicePicked = this.devicePicked.bind(this);
    this.deviceTriggerPicked = this.deviceTriggerPicked.bind(this);
    this._extraFieldsChanged = this._extraFieldsChanged.bind(this);
    this.state = {
      device_id: undefined,
      capabilities: undefined
    };
  }

  devicePicked(ev) {
    this.setState(Object.assign({}, this.state, {
      device_id: ev.target.value
    }));
  }

  deviceTriggerPicked(ev) {
    let trigger = ev.target.value;

    if (this._origTrigger && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origTrigger, trigger)) {
      trigger = this._origTrigger;
    }

    this.props.onChange(this.props.index, trigger);
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass
  }, {
    device_id,
    capabilities
  }) {
    if (device_id === undefined) {
      device_id = trigger.device_id;
    }

    const extraFieldsData = capabilities && capabilities.extra_fields ? capabilities.extra_fields.map(item => {
      return {
        [item.name]: this.props.trigger[item.name]
      };
    }) : undefined;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", {
      value: device_id,
      onChange: this.devicePicked,
      hass: hass,
      label: "Device"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-trigger-picker", {
      value: trigger,
      deviceId: device_id,
      onChange: this.deviceTriggerPicked,
      hass: hass,
      label: "Trigger"
    }), extraFieldsData && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-form", {
      data: Object.assign({}, ...extraFieldsData),
      schema: this.state.capabilities.extra_fields,
      computeLabel: this._extraFieldsComputeLabelCallback(hass.localize),
      "onvalue-changed": this._extraFieldsChanged
    }));
  }

  componentDidMount() {
    if (!this.state.capabilities) {
      this._getCapabilities();
    }

    if (this.props.trigger) {
      this._origTrigger = this.props.trigger;
    }
  }

  componentDidUpdate(prevProps) {
    if (!Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(prevProps.trigger, this.props.trigger)) {
      this._getCapabilities();
    }
  }

  async _getCapabilities() {
    const trigger = this.props.trigger;
    const capabilities = trigger.domain ? await Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceTriggerCapabilities"])(this.props.hass, trigger) : null;
    this.setState(Object.assign({}, this.state, {
      capabilities
    }));
  }

  _extraFieldsChanged(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {}, ev.detail.value));
  }

  _extraFieldsComputeLabelCallback(localize) {
    // Returns a callback for ha-form to calculate labels per schema object
    return schema => localize(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${schema.name}`) || schema.name;
  }

}
DeviceTrigger.defaultConfig = {
  device_id: "",
  domain: "",
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/event.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/event.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class EventTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
    this.eventDataChanged = this.eventDataChanged.bind(this);
  }
  /* eslint-disable camelcase */
  // tslint:disable-next-line: variable-name


  eventDataChanged(event_data) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event_data
    }));
  }

  render({
    trigger,
    localize
  }) {
    const {
      event_type,
      event_data
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.event.event_type"),
      name: "event_type",
      value: event_type,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: localize("ui.panel.config.automation.editor.triggers.type.event.event_data"),
      value: event_data,
      onChange: this.eventDataChanged
    }));
  }

}
EventTrigger.defaultConfig = {
  event_type: "",
  event_data: {}
};

/***/ }),

/***/ "./src/panels/config/js/trigger/geo_location.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class GeolocationTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.zonePicked = this.zonePicked.bind(this);
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  zonePicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      zone: ev.target.value
    }));
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      source,
      zone,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.source"),
      name: "source",
      value: source,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.zone"),
      value: zone,
      onChange: this.zonePicked,
      hass: hass,
      allowCustomEntity: true,
      includeDomains: ["zone"]
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "enter"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "leave"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave"))));
  }

}
GeolocationTrigger.defaultConfig = {
  source: "",
  zone: "",
  event: "enter"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/homeassistant.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HassTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");



class HassTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "start"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "shutdown"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"))));
  }

}
HassTrigger.defaultConfig = {
  event: "start"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/index.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");





class Trigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.addTrigger = this.addTrigger.bind(this);
    this.triggerChanged = this.triggerChanged.bind(this);
  }

  addTrigger() {
    const trigger = this.props.trigger.concat(Object.assign({
      platform: "state"
    }, _state__WEBPACK_IMPORTED_MODULE_4__["default"].defaultConfig));
    this.props.onChange(trigger);
  }

  triggerChanged(index, newValue) {
    const trigger = this.props.trigger.concat();

    if (newValue === null) {
      trigger.splice(index, 1);
    } else {
      trigger[index] = newValue;
    }

    this.props.onChange(trigger);
  }

  render({
    trigger,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "triggers"
    }, trigger.map((trg, idx) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: idx,
      trigger: trg,
      onChange: this.triggerChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-actions add-card"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
      onTap: this.addTrigger
    }, localize("ui.panel.config.automation.editor.triggers.add")))));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/mqtt.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MQTTTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MQTTTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      topic,
      payload
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"),
      name: "topic",
      value: topic,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"),
      name: "payload",
      value: payload,
      "onvalue-changed": this.onChange
    }));
  }

}
MQTTTrigger.defaultConfig = {
  topic: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/numeric_state.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class NumericStateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      value_template,
      entity_id,
      below,
      above
    } = trigger;
    let trgFor = trigger.for;

    if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
      // If the trigger was defined using the yaml dict syntax, convert it to
      // the equivalent string format
      let {
        hours = 0,
        minutes = 0,
        seconds = 0
      } = trgFor;
      hours = hours.toString();
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      trgFor = `${hours}:${minutes}:${seconds}`;
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),
      name: "above",
      value: above,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),
      name: "below",
      value: below,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
      name: "for",
      value: trgFor,
      "onvalue-changed": this.onChange
    }));
  }

}
NumericStateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/state.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/state.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class StateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      entity_id,
      to
    } = trigger;
    const trgFrom = trigger.from;
    let trgFor = trigger.for;

    if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
      // If the trigger was defined using the yaml dict syntax, convert it to
      // the equivalent string format
      let {
        hours = 0,
        minutes = 0,
        seconds = 0
      } = trgFor;
      hours = hours.toString();
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      trgFor = `${hours}:${minutes}:${seconds}`;
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.from"),
      name: "from",
      value: trgFrom,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.to"),
      name: "to",
      value: to,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
      name: "for",
      value: trgFor,
      "onvalue-changed": this.onChange
    }));
  }

}
StateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/sun.tsx":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SunTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      offset,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunrise"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunset"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.sun.offset"),
      name: "offset",
      value: offset,
      "onvalue-changed": this.onChange
    }));
  }

}
SunTrigger.defaultConfig = {
  event: "sunrise"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/template.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/trigger/template.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TemplateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }

  render({
    trigger,
    localize
  }) {
    /* eslint-disable camelcase */
    const {
      value_template
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.triggers.type.template.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }));
  }

}
TemplateTrigger.defaultConfig = {
  value_template: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/time.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TimeTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      at
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time.at"),
      name: "at",
      value: at,
      "onvalue-changed": this.onChange
    }));
  }

}
TimeTrigger.defaultConfig = {
  at: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time_pattern.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePatternTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TimePatternTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      hours,
      minutes,
      seconds
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"),
      name: "hours",
      value: hours,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"),
      name: "minutes",
      value: minutes,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"),
      name: "seconds",
      value: seconds,
      "onvalue-changed": this.onChange
    }));
  }

}
TimePatternTrigger.defaultConfig = {
  hours: "",
  minutes: "",
  seconds: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_edit.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/trigger/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/trigger/event.tsx");
/* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.tsx");
/* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.tsx");
/* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.tsx");
/* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/trigger/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/trigger/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/trigger/time.tsx");
/* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./webhook */ "./src/panels/config/js/trigger/webhook.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/trigger/zone.tsx");

















const TYPES = {
  device: _device__WEBPACK_IMPORTED_MODULE_4__["default"],
  event: _event__WEBPACK_IMPORTED_MODULE_5__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_11__["default"],
  geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_6__["default"],
  homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_7__["default"],
  mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_8__["default"],
  numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_9__["default"],
  sun: _sun__WEBPACK_IMPORTED_MODULE_12__["default"],
  template: _template__WEBPACK_IMPORTED_MODULE_13__["default"],
  time: _time__WEBPACK_IMPORTED_MODULE_14__["default"],
  time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_10__["default"],
  webhook: _webhook__WEBPACK_IMPORTED_MODULE_15__["default"],
  zone: _zone__WEBPACK_IMPORTED_MODULE_16__["default"]
};
const OPTIONS = Object.keys(TYPES).sort();
class TriggerEdit extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.typeChanged = this.typeChanged.bind(this);
  }

  render({
    index,
    trigger,
    onChange,
    hass,
    localize
  }) {
    // tslint:disable-next-line: variable-name
    const Comp = TYPES[trigger.platform];
    const selected = OPTIONS.indexOf(trigger.platform);

    if (!Comp) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, localize("ui.panel.config.automation.editor.triggers.unsupported_platform", "platform", trigger.platform), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(trigger, null, 2)));
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", {
      label: localize("ui.panel.config.automation.editor.triggers.type_select"),
      "no-animations": true
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content",
      selected: selected,
      "oniron-select": this.typeChanged
    }, OPTIONS.map(opt => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      platform: opt
    }, localize(`ui.panel.config.automation.editor.triggers.type.${opt}.label`))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
      index: index,
      trigger: trigger,
      onChange: onChange,
      hass: hass,
      localize: localize
    }));
  }

  typeChanged(ev) {
    const type = ev.target.selectedItem.attributes.platform.value;

    if (type !== this.props.trigger.platform) {
      this.props.onChange(this.props.index, Object.assign({
        platform: type
      }, TYPES[type].defaultConfig));
    }
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_row.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.tsx");







class TriggerRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-menu"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", {
      "no-animations": true,
      "horizontal-align": "right",
      "horizontal-offset": "-5",
      "vertical-offset": "-5"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", {
      icon: "hass:dots-vertical",
      slot: "dropdown-trigger"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      disabled: true
    }, props.localize("ui.panel.config.automation.editor.triggers.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      onTap: this.onDelete
    }, props.localize("ui.panel.config.automation.editor.triggers.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
  }

  onDelete() {
    // eslint-disable-next-line
    if (confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))) {
      this.props.onChange(this.props.index, null);
    }
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/webhook.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebhookTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WebhookTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }

  render({
    trigger,
    localize
  }) {
    const {
      webhook_id: webhookId
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"),
      name: "webhook_id",
      value: webhookId,
      "onvalue-changed": this.onChange
    }));
  }

}
WebhookTrigger.defaultConfig = {
  webhook_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/zone.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");







function zoneAndLocationFilter(stateObj) {
  return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_4__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj) !== "zone";
}

class ZoneTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
    this.entityPicked = this.entityPicked.bind(this);
    this.zonePicked = this.zonePicked.bind(this);
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      entity_id,
      zone,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.zone.entity"),
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true,
      entityFilter: zoneAndLocationFilter
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.zone.zone"),
      value: zone,
      onChange: this.zonePicked,
      hass: hass,
      allowCustomEntity: true,
      includeDomains: ["zone"]
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "enter"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "leave"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.leave"))));
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }

  zonePicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      zone: ev.target.value
    }));
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }

}
ZoneTrigger.defaultConfig = {
  entity_id: "",
  zone: "",
  event: "enter"
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS10cmlnZ2VyLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vaGEtYXV0b21hdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXV0b21hdGlvbi9oYS1hdXRvbWF0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL2hhLWNvbmZpZy1hdXRvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vc2hvdy1kaWFsb2ctdGhpbmd0YWxrLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2F1dG9tYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2dlb19sb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9ob21lYXNzaXN0YW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL21xdHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvbnVtZXJpY19zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGltZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci90aW1lX3BhdHRlcm4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdHJpZ2dlcl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RyaWdnZXJfcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3dlYmhvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvem9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpO1xuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlVHJpZ2dlcixcbiAgZmV0Y2hEZXZpY2VUcmlnZ2VycyxcbiAgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlcixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLXRyaWdnZXItcGlja2VyXCIpXG5jbGFzcyBIYURldmljZVRyaWdnZXJQaWNrZXIgZXh0ZW5kcyBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8RGV2aWNlVHJpZ2dlcj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyB0cmlnZ2Vyc1wiO1xuICBwcm90ZWN0ZWQgVU5LTk9XTl9BVVRPTUFUSU9OX1RFWFQgPSBcIlVua25vd24gdHJpZ2dlclwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFxuICAgICAgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlcixcbiAgICAgIGZldGNoRGV2aWNlVHJpZ2dlcnMsXG4gICAgICAoZGV2aWNlSWQ/OiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQgfHwgXCJcIixcbiAgICAgICAgcGxhdGZvcm06IFwiZGV2aWNlXCIsXG4gICAgICAgIGRvbWFpbjogXCJcIixcbiAgICAgICAgZW50aXR5X2lkOiBcIlwiLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2UtdHJpZ2dlci1waWNrZXJcIjogSGFEZXZpY2VUcmlnZ2VyUGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25FbnRpdHkgZXh0ZW5kcyBIYXNzRW50aXR5QmFzZSB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGxhc3RfdHJpZ2dlcmVkOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b21hdGlvbkNvbmZpZyB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRyaWdnZXI6IGFueVtdO1xuICBjb25kaXRpb24/OiBhbnlbXTtcbiAgYWN0aW9uOiBhbnlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUF1dG9tYXRpb24gPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvYXV0b21hdGlvbi9jb25maWcvJHtpZH1gKTtcblxubGV0IGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhOiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd0F1dG9tYXRpb25FZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8QXV0b21hdGlvbkNvbmZpZz5cbikgPT4ge1xuICBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvYXV0b21hdGlvbi9uZXdcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXV0b21hdGlvbkVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGE7XG4gIGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhID0gdW5kZWZpbmVkO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5cbmltcG9ydCBBdXRvbWF0aW9uIGZyb20gXCIuLi9qcy9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgdW5tb3VudFByZWFjdCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3ByZWFjdC91bm1vdW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQXV0b21hdGlvbkVudGl0eSxcbiAgQXV0b21hdGlvbkNvbmZpZyxcbiAgZGVsZXRlQXV0b21hdGlvbixcbiAgZ2V0QXV0b21hdGlvbkVkaXRvckluaXREYXRhLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuZnVuY3Rpb24gQXV0b21hdGlvbkVkaXRvcihtb3VudEVsLCBwcm9wcywgbWVyZ2VFbCkge1xuICByZXR1cm4gcmVuZGVyKGgoQXV0b21hdGlvbiwgcHJvcHMpLCBtb3VudEVsLCBtZXJnZUVsKTtcbn1cblxuZXhwb3J0IGNsYXNzIEhhQXV0b21hdGlvbkVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvbWF0aW9uITogQXV0b21hdGlvbkVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjcmVhdGluZ05ldz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEF1dG9tYXRpb25Db25maWc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RpcnR5PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcmVuZGVyZWQ/OiB1bmtub3duO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcnM/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25maWdDaGFuZ2VkID0gdGhpcy5fY29uZmlnQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICB1bm1vdW50UHJlYWN0KHRoaXMuX3JlbmRlcmVkKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1hcHAtbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fYmFja1RhcHBlZH1cbiAgICAgICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+XG4gICAgICAgICAgICAgICR7dGhpcy5hdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgPyBjb21wdXRlU3RhdGVOYW1lKHRoaXMuYXV0b21hdGlvbilcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuZGVmYXVsdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7dGhpcy5jcmVhdGluZ05ld1xuICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuZGVsZXRlX2F1dG9tYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZX1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLl9lcnJvcnNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+JHt0aGlzLl9lcnJvcnN9PC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cInJvb3RcIlxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1mYWJcbiAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICA/aXMtd2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICA/ZGlydHk9XCIke3RoaXMuX2RpcnR5fVwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6Y29udGVudC1zYXZlXCJcbiAgICAgICAgICAudGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnNhdmVcIlxuICAgICAgICAgICl9XCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zYXZlQXV0b21hdGlvbn1cbiAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgPC9oYS1hcHAtbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3Qgb2xkQXV0b21hdGlvbiA9IGNoYW5nZWRQcm9wcy5nZXQoXCJhdXRvbWF0aW9uXCIpIGFzIEF1dG9tYXRpb25FbnRpdHk7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcImF1dG9tYXRpb25cIikgJiZcbiAgICAgIHRoaXMuYXV0b21hdGlvbiAmJlxuICAgICAgdGhpcy5oYXNzICYmXG4gICAgICAvLyBPbmx5IHJlZnJlc2ggY29uZmlnIGlmIHdlIHBpY2tlZCBhIG5ldyBhdXRvbWF0aW9uLiBJZiBzYW1lIElELCBkb24ndCBmZXRjaCBpdC5cbiAgICAgICghb2xkQXV0b21hdGlvbiB8fFxuICAgICAgICBvbGRBdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQgIT09IHRoaXMuYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkKVxuICAgICkge1xuICAgICAgdGhpcy5oYXNzXG4gICAgICAgIC5jYWxsQXBpPEF1dG9tYXRpb25Db25maWc+KFxuICAgICAgICAgIFwiR0VUXCIsXG4gICAgICAgICAgYGNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy8ke3RoaXMuYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkfWBcbiAgICAgICAgKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgZGF0YTogZW5zdXJlIHRyaWdnZXIsIGFjdGlvbiBhbmQgY29uZGl0aW9uIGFyZSBsaXN0c1xuICAgICAgICAgICAgLy8gSGFwcGVucyB3aGVuIHBlb3BsZSBjb3B5IHBhc3RlIHRoZWlyIGF1dG9tYXRpb25zIGludG8gdGhlIGNvbmZpZ1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgW1widHJpZ2dlclwiLCBcImNvbmRpdGlvblwiLCBcImFjdGlvblwiXSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSBbdmFsdWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICByZXNwLnN0YXR1c19jb2RlID09PSA0MDRcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IubG9hZF9lcnJvcl9ub3RfZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5sb2FkX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJfbm9cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNyZWF0aW5nTmV3XCIpICYmIHRoaXMuY3JlYXRpbmdOZXcgJiYgdGhpcy5oYXNzKSB7XG4gICAgICBjb25zdCBpbml0RGF0YSA9IGdldEF1dG9tYXRpb25FZGl0b3JJbml0RGF0YSgpO1xuICAgICAgdGhpcy5fZGlydHkgPSBpbml0RGF0YSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgYWxpYXM6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZWZhdWx0X25hbWVcIlxuICAgICAgICApLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgdHJpZ2dlcjogW3sgcGxhdGZvcm06IFwic3RhdGVcIiB9XSxcbiAgICAgICAgY29uZGl0aW9uOiBbXSxcbiAgICAgICAgYWN0aW9uOiBbeyBzZXJ2aWNlOiBcIlwiIH1dLFxuICAgICAgICAuLi5pbml0RGF0YSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfY29uZmlnXCIpICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBBdXRvbWF0aW9uRWRpdG9yKFxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9tYXRpb246IHRoaXMuX2NvbmZpZyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5fY29uZmlnQ2hhbmdlZCxcbiAgICAgICAgICBpc1dpZGU6IHRoaXMuaXNXaWRlLFxuICAgICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgICBsb2NhbGl6ZTogdGhpcy5oYXNzLmxvY2FsaXplLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9yZW5kZXJlZFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWdDaGFuZ2VkKGNvbmZpZzogQXV0b21hdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgIC8vIG9uQ2hhbmdlIGdldHMgY2FsbGVkIGEgbG90IGR1cmluZyBpbml0aWFsIHJlbmRlcmluZyBjYXVzaW5nIHJlY3Vyc2luZyBjYWxscy5cbiAgICBpZiAoIXRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9lcnJvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9kaXJ0eSAmJlxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudW5zYXZlZF9jb25maXJtXCIpXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlKCkge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuZGVsZXRlX2NvbmZpcm1cIilcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgZGVsZXRlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMuYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkISk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlQXV0b21hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3JlYXRpbmdOZXdcbiAgICAgID8gXCJcIiArIERhdGUubm93KClcbiAgICAgIDogdGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdGhpcy5oYXNzIS5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBcImNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy9cIiArIGlkLFxuICAgICAgdGhpcy5fY29uZmlnXG4gICAgKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvYXV0b21hdGlvbi9lZGl0LyR7aWR9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5ydGwgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1ib3R0b20gMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2RpcnR5XSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ucnRsIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF1dG9tYXRpb24tZWRpdG9yXCIsIEhhQXV0b21hdGlvbkVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBBdXRvbWF0aW9uRW50aXR5LFxuICBzaG93QXV0b21hdGlvbkVkaXRvcixcbiAgQXV0b21hdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXV0b21hdGlvblwiO1xuaW1wb3J0IGZvcm1hdF9kYXRlX3RpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBzaG93VGhpbmd0YWxrRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctdGhpbmd0YWxrXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1hdXRvbWF0aW9uLXBpY2tlclwiKVxuY2xhc3MgSGFBdXRvbWF0aW9uUGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvbWF0aW9ucyE6IEF1dG9tYXRpb25FbnRpdHlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmhlYWRlclwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL2RvY3MvYXV0b21hdGlvbi9lZGl0b3IvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgLmhlYWRpbmc9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLnBpY2tfYXV0b21hdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5hdXRvbWF0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLm5vX2F1dG9tYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGhpcy5hdXRvbWF0aW9ucy5tYXAoXG4gICAgICAgICAgICAgICAgICAoYXV0b21hdGlvbikgPT4gaHRtbGBcblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2F1dG9tYXRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktdG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Y29tcHV0ZVN0YXRlTmFtZShhdXRvbWF0aW9uKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLmNhcmQuYXV0b21hdGlvbi5sYXN0X3RyaWdnZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX06ICR7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uYXR0cmlidXRlcy5sYXN0X3RyaWdnZXJlZFxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0X2RhdGVfdGltZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmxhc3RfdHJpZ2dlcmVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXV0b21hdGlvbj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd0luZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aW5mb3JtYXRpb24tb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLnNob3dfaW5mb19hdXRvbWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgL2NvbmZpZy9hdXRvbWF0aW9uL2VkaXQvJHthdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmVkaXRfYXV0b21hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwZW5jaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWF1dG9tYXRpb24uYXR0cmlidXRlcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWF1dG9tYXRpb24uYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIub25seV9lZGl0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGhhLWZhYlxuICAgICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuYWRkX2F1dG9tYXRpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID9ydGw9JHtjb21wdXRlUlRMKHRoaXMuaGFzcyl9XG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jcmVhdGVOZXd9XG4gICAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5hdXRvbWF0aW9uLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTmV3KCkge1xuICAgIGlmICghaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBcImNsb3VkXCIpKSB7XG4gICAgICBzaG93QXV0b21hdGlvbkVkaXRvcih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvd1RoaW5ndGFsa0RpYWxvZyh0aGlzLCB7XG4gICAgICBjYWxsYmFjazogKGNvbmZpZzogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPiB8IHVuZGVmaW5lZCkgPT5cbiAgICAgICAgc2hvd0F1dG9tYXRpb25FZGl0b3IodGhpcywgY29uZmlnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRvbWF0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBob3Jpem9udGFsO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dG9tYXRpb24gYVtocmVmXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1lbnRpdHktdG9nZ2xlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtYXV0b21hdGlvbi1waWNrZXJcIjogSGFBdXRvbWF0aW9uUGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWF1dG9tYXRpb24tZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIEhhQ29uZmlnQXV0b21hdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtYXV0b21hdGlvbi1waWNrZXIsXG4gICAgICAgIGhhLWF1dG9tYXRpb24tZWRpdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9lZGl0LzphdXRvbWF0aW9uXCJcbiAgICAgICAgZGF0YT1cInt7X3JvdXRlRGF0YX19XCJcbiAgICAgICAgYWN0aXZlPVwie3tfZWRpdHRpbmdBdXRvbWF0aW9ufX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvbmV3XCJcbiAgICAgICAgYWN0aXZlPVwie3tfY3JlYXRpbmdOZXd9fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc2hvd0VkaXRvcl1dXCI+XG4gICAgICAgIDxoYS1hdXRvbWF0aW9uLXBpY2tlclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgYXV0b21hdGlvbnM9XCJbW2F1dG9tYXRpb25zXV1cIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgPjwvaGEtYXV0b21hdGlvbi1waWNrZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0VkaXRvcl1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICA8aGEtYXV0b21hdGlvbi1lZGl0b3JcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIGF1dG9tYXRpb249XCJbW2F1dG9tYXRpb25dXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGNyZWF0aW5nLW5ldz1cIltbX2NyZWF0aW5nTmV3XV1cIlxuICAgICAgICA+PC9oYS1hdXRvbWF0aW9uLWVkaXRvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgcm91dGU6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIF9yb3V0ZURhdGE6IE9iamVjdCxcbiAgICAgIF9yb3V0ZU1hdGNoZXM6IEJvb2xlYW4sXG4gICAgICBfY3JlYXRpbmdOZXc6IEJvb2xlYW4sXG4gICAgICBfZWRpdHRpbmdBdXRvbWF0aW9uOiBCb29sZWFuLFxuXG4gICAgICBhdXRvbWF0aW9uczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUF1dG9tYXRpb25zKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBhdXRvbWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJjb21wdXRlQXV0b21hdGlvbihhdXRvbWF0aW9ucywgX2VkaXR0aW5nQXV0b21hdGlvbiwgX3JvdXRlRGF0YSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNob3dFZGl0b3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nQXV0b21hdGlvbiwgX2NyZWF0aW5nTmV3KVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJvdXRlID0geyBwYXRoOiBcIlwiLCBwcmVmaXg6IFwiXCIgfTtcbiAgfVxuXG4gIGNvbXB1dGVBdXRvbWF0aW9uKGF1dG9tYXRpb25zLCBlZGl0dGluZ0FkZG9uLCByb3V0ZURhdGEpIHtcbiAgICBpZiAoIWF1dG9tYXRpb25zIHx8ICFlZGl0dGluZ0FkZG9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdXRvbWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF1dG9tYXRpb25zW2ldLmF0dHJpYnV0ZXMuaWQgPT09IHJvdXRlRGF0YS5hdXRvbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiBhdXRvbWF0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wdXRlQXV0b21hdGlvbnMoaGFzcykge1xuICAgIHZhciBhdXRvbWF0aW9ucyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgZW50aXR5ID0gaGFzcy5zdGF0ZXNba2V5XTtcblxuICAgICAgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpID09PSBcImF1dG9tYXRpb25cIikge1xuICAgICAgICBhdXRvbWF0aW9ucy5wdXNoKGVudGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXV0b21hdGlvbnMuc29ydChmdW5jdGlvbiBlbnRpdHlTb3J0QnkoZW50aXR5QSwgZW50aXR5Qikge1xuICAgICAgdmFyIG5hbWVBID0gKGVudGl0eUEuYXR0cmlidXRlcy5hbGlhcyB8fCBlbnRpdHlBLmVudGl0eV9pZCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBuYW1lQiA9IChlbnRpdHlCLmF0dHJpYnV0ZXMuYWxpYXMgfHwgZW50aXR5Qi5lbnRpdHlfaWQpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlU2hvd0VkaXRvcihfZWRpdHRpbmdBdXRvbWF0aW9uLCBfY3JlYXRpbmdOZXcpIHtcbiAgICByZXR1cm4gX2NyZWF0aW5nTmV3IHx8IF9lZGl0dGluZ0F1dG9tYXRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWF1dG9tYXRpb25cIiwgSGFDb25maWdBdXRvbWF0aW9uKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEF1dG9tYXRpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhpbmd0YWxrRGlhbG9nUGFyYW1zIHtcbiAgY2FsbGJhY2s6IChjb25maWc6IFBhcnRpYWw8QXV0b21hdGlvbkNvbmZpZz4gfCB1bmRlZmluZWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVGhpbmd0YWxrRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidGhpbmd0YWxrLWRpYWxvZ1wiICovIFwiLi90aGluZ3RhbGsvZGlhbG9nLXRoaW5ndGFsa1wiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzaG93VGhpbmd0YWxrRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBUaGluZ3RhbGtEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImhhLWRpYWxvZy10aGlua3RhbGtcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRUaGluZ3RhbGtEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCBUcmlnZ2VyIGZyb20gXCIuL3RyaWdnZXIvaW5kZXhcIjtcbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vY29uZGl0aW9uL2luZGV4XCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuL3NjcmlwdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvbWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkID0gdGhpcy50cmlnZ2VyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZGl0aW9uQ2hhbmdlZCA9IHRoaXMuY29uZGl0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aW9uQ2hhbmdlZCA9IHRoaXMuYWN0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAuLi50aGlzLnByb3BzLmF1dG9tYXRpb24sXG4gICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckNoYW5nZWQodHJpZ2dlcikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLmF1dG9tYXRpb24sIHRyaWdnZXIgfSk7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChjb25kaXRpb24pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLCBjb25kaXRpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uQ2hhbmdlZChhY3Rpb24pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLCBhY3Rpb24gfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYXV0b21hdGlvbiwgaXNXaWRlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhbGlhcywgZGVzY3JpcHRpb24sIHRyaWdnZXIsIGNvbmRpdGlvbiwgYWN0aW9uIH0gPSBhdXRvbWF0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj57YWxpYXN9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWxpYXNcIil9XG4gICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWxpYXN9XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZXNjcmlwdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZXNjcmlwdGlvbi5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9e2lzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9hdXRvbWF0aW9uL3RyaWdnZXIvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmxlYXJuX21vcmVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8VHJpZ2dlclxuICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRyaWdnZXJDaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvY29uZGl0aW9ucy9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb24gfHwgW119XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jb25kaXRpb25DaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL2F1dG9tYXRpb24vYWN0aW9uL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgIHNjcmlwdD17YWN0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXRyaWdnZXItcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZvcm0vaGEtZm9ybVwiO1xuXG5pbXBvcnQge1xuICBmZXRjaERldmljZVRyaWdnZXJDYXBhYmlsaXRpZXMsXG4gIGRldmljZUF1dG9tYXRpb25zRXF1YWwsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcHJpdmF0ZSBfb3JpZ1RyaWdnZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldmljZVBpY2tlZCA9IHRoaXMuZGV2aWNlUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXZpY2VUcmlnZ2VyUGlja2VkID0gdGhpcy5kZXZpY2VUcmlnZ2VyUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkID0gdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGV2aWNlX2lkOiB1bmRlZmluZWQsIGNhcGFiaWxpdGllczogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwdWJsaWMgZGV2aWNlUGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRldmljZV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcHVibGljIGRldmljZVRyaWdnZXJQaWNrZWQoZXYpIHtcbiAgICBsZXQgdHJpZ2dlciA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9vcmlnVHJpZ2dlciAmJlxuICAgICAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCh0aGlzLl9vcmlnVHJpZ2dlciwgdHJpZ2dlcilcbiAgICApIHtcbiAgICAgIHRyaWdnZXIgPSB0aGlzLl9vcmlnVHJpZ2dlcjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB0cmlnZ2VyKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcyB9LCB7IGRldmljZV9pZCwgY2FwYWJpbGl0aWVzIH0pIHtcbiAgICBpZiAoZGV2aWNlX2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRldmljZV9pZCA9IHRyaWdnZXIuZGV2aWNlX2lkO1xuICAgIH1cbiAgICBjb25zdCBleHRyYUZpZWxkc0RhdGEgPVxuICAgICAgY2FwYWJpbGl0aWVzICYmIGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHNcbiAgICAgICAgPyBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2l0ZW0ubmFtZV06IHRoaXMucHJvcHMudHJpZ2dlcltpdGVtLm5hbWVdIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWRldmljZS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZGV2aWNlX2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRldmljZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxhYmVsPVwiRGV2aWNlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWRldmljZS10cmlnZ2VyLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXt0cmlnZ2VyfVxuICAgICAgICAgIGRldmljZUlkPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlVHJpZ2dlclBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxhYmVsPVwiVHJpZ2dlclwiXG4gICAgICAgIC8+XG4gICAgICAgIHtleHRyYUZpZWxkc0RhdGEgJiYgKFxuICAgICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgICBkYXRhPXtPYmplY3QuYXNzaWduKHt9LCAuLi5leHRyYUZpZWxkc0RhdGEpfVxuICAgICAgICAgICAgc2NoZW1hPXt0aGlzLnN0YXRlLmNhcGFiaWxpdGllcy5leHRyYV9maWVsZHN9XG4gICAgICAgICAgICBjb21wdXRlTGFiZWw9e3RoaXMuX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2soaGFzcy5sb2NhbGl6ZSl9XG4gICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlcikge1xuICAgICAgdGhpcy5fb3JpZ1RyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWRldmljZUF1dG9tYXRpb25zRXF1YWwocHJldlByb3BzLnRyaWdnZXIsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldENhcGFiaWxpdGllcygpIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuXG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gdHJpZ2dlci5kb21haW5cbiAgICAgID8gYXdhaXQgZmV0Y2hEZXZpY2VUcmlnZ2VyQ2FwYWJpbGl0aWVzKHRoaXMucHJvcHMuaGFzcywgdHJpZ2dlcilcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2FwYWJpbGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICAuLi5ldi5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9leHRyYUZpZWxkc0NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplKSB7XG4gICAgLy8gUmV0dXJucyBhIGNhbGxiYWNrIGZvciBoYS1mb3JtIHRvIGNhbGN1bGF0ZSBsYWJlbHMgcGVyIHNjaGVtYSBvYmplY3RcbiAgICByZXR1cm4gKHNjaGVtYSkgPT5cbiAgICAgIGxvY2FsaXplKFxuICAgICAgICBgdWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZGV2aWNlLmV4dHJhX2ZpZWxkcy4ke3NjaGVtYS5uYW1lfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cbn1cblxuKERldmljZVRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBkZXZpY2VfaWQ6IFwiXCIsXG4gIGRvbWFpbjogXCJcIixcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBZQU1MVGV4dEFyZWEgZnJvbSBcIi4uL3lhbWxfdGV4dGFyZWFcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZXZlbnREYXRhQ2hhbmdlZCA9IHRoaXMuZXZlbnREYXRhQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwdWJsaWMgZXZlbnREYXRhQ2hhbmdlZChldmVudF9kYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudF9kYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGV2ZW50X3R5cGUsIGV2ZW50X2RhdGEgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZXZlbnQuZXZlbnRfdHlwZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZXZlbnRfdHlwZVwiXG4gICAgICAgICAgdmFsdWU9e2V2ZW50X3R5cGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8WUFNTFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ldmVudC5ldmVudF9kYXRhXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtldmVudF9kYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmV2ZW50RGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihFdmVudFRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBldmVudF90eXBlOiBcIlwiLFxuICBldmVudF9kYXRhOiB7fSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvbG9jYXRpb25UcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB6b25lUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICB6b25lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmFkaW9Hcm91cFBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgZXZlbnQ6IGV2LnRhcmdldC5zZWxlY3RlZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgc291cmNlLCB6b25lLCBldmVudCB9ID0gdHJpZ2dlcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5zb3VyY2VcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInNvdXJjZVwiXG4gICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24uem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBpbmNsdWRlRG9tYWlucz17W1wiem9uZVwiXX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBzZWxlY3RlZD17ZXZlbnR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXZlbnRsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLnJhZGlvR3JvdXBQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJlbnRlclwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5lbnRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxlYXZlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLmxlYXZlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihHZW9sb2NhdGlvblRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBzb3VyY2U6IFwiXCIsXG4gIHpvbmU6IFwiXCIsXG4gIGV2ZW50OiBcImVudGVyXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzc1RyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBldmVudCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuaG9tZWFzc2lzdGFudC5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3RhcnRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LnN0YXJ0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic2h1dGRvd25cIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LnNodXRkb3duXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihIYXNzVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGV2ZW50OiBcInN0YXJ0XCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgVHJpZ2dlclJvdyBmcm9tIFwiLi90cmlnZ2VyX3Jvd1wiO1xuaW1wb3J0IFN0YXRlVHJpZ2dlciBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRUcmlnZ2VyID0gdGhpcy5hZGRUcmlnZ2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCA9IHRoaXMudHJpZ2dlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUcmlnZ2VyKCkge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXIuY29uY2F0KHtcbiAgICAgIHBsYXRmb3JtOiBcInN0YXRlXCIsXG4gICAgICAuLi4oU3RhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyxcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodHJpZ2dlcik7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMucHJvcHMudHJpZ2dlci5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdHJpZ2dlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodHJpZ2dlcik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlcnNcIj5cbiAgICAgICAge3RyaWdnZXIubWFwKCh0cmcsIGlkeCkgPT4gKFxuICAgICAgICAgIDxUcmlnZ2VyUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgdHJpZ2dlcj17dHJnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudHJpZ2dlckNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRUcmlnZ2VyfT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1RVFRUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgdG9waWMsIHBheWxvYWQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubXF0dC50b3BpY1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgIHZhbHVlPXt0b3BpY31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubXF0dC5wYXlsb2FkXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJwYXlsb2FkXCJcbiAgICAgICAgICB2YWx1ZT17cGF5bG9hZH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihNUVRUVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHRvcGljOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNTdGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSwgZW50aXR5X2lkLCBiZWxvdywgYWJvdmUgfSA9IHRyaWdnZXI7XG4gICAgbGV0IHRyZ0ZvciA9IHRyaWdnZXIuZm9yO1xuXG4gICAgaWYgKHRyZ0ZvciAmJiAodHJnRm9yLmhvdXJzIHx8IHRyZ0Zvci5taW51dGVzIHx8IHRyZ0Zvci5zZWNvbmRzKSkge1xuICAgICAgLy8gSWYgdGhlIHRyaWdnZXIgd2FzIGRlZmluZWQgdXNpbmcgdGhlIHlhbWwgZGljdCBzeW50YXgsIGNvbnZlcnQgaXQgdG9cbiAgICAgIC8vIHRoZSBlcXVpdmFsZW50IHN0cmluZyBmb3JtYXRcbiAgICAgIGxldCB7IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwIH0gPSB0cmdGb3I7XG4gICAgICBob3VycyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICB0cmdGb3IgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYWJvdmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFib3ZlXCJcbiAgICAgICAgICB2YWx1ZT17YWJvdmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYmVsb3dcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlbG93XCJcbiAgICAgICAgICB2YWx1ZT17YmVsb3d9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZm9yXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJmb3JcIlxuICAgICAgICAgIHZhbHVlPXt0cmdGb3J9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oTnVtZXJpY1N0YXRlVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBlbnRpdHlfaWQsIHRvIH0gPSB0cmlnZ2VyO1xuICAgIGNvbnN0IHRyZ0Zyb20gPSB0cmlnZ2VyLmZyb207XG4gICAgbGV0IHRyZ0ZvciA9IHRyaWdnZXIuZm9yO1xuXG4gICAgaWYgKHRyZ0ZvciAmJiAodHJnRm9yLmhvdXJzIHx8IHRyZ0Zvci5taW51dGVzIHx8IHRyZ0Zvci5zZWNvbmRzKSkge1xuICAgICAgLy8gSWYgdGhlIHRyaWdnZXIgd2FzIGRlZmluZWQgdXNpbmcgdGhlIHlhbWwgZGljdCBzeW50YXgsIGNvbnZlcnQgaXQgdG9cbiAgICAgIC8vIHRoZSBlcXVpdmFsZW50IHN0cmluZyBmb3JtYXRcbiAgICAgIGxldCB7IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwIH0gPSB0cmdGb3I7XG4gICAgICBob3VycyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICB0cmdGb3IgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN0YXRlLmZyb21cIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZyb21cIlxuICAgICAgICAgIHZhbHVlPXt0cmdGcm9tfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdGF0ZS50b1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidG9cIlxuICAgICAgICAgIHZhbHVlPXt0b31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZm9yXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJmb3JcIlxuICAgICAgICAgIHZhbHVlPXt0cmdGb3J9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oU3RhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5UcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBvZmZzZXQsIGV2ZW50IH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaWQ9XCJldmVudGxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4uZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIHNlbGVjdGVkPXtldmVudH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudGxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMucmFkaW9Hcm91cFBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4uc3VucmlzZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnNldFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5zdW5zZXRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5vZmZzZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIm9mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdW5UcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZXZlbnQ6IFwic3VucmlzZVwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50ZW1wbGF0ZS52YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZV90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFRlbXBsYXRlVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHZhbHVlX3RlbXBsYXRlOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYXQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZS5hdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYXRcIlxuICAgICAgICAgIHZhbHVlPXthdH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihUaW1lVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGF0OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQYXR0ZXJuVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRpbWVfcGF0dGVybi5ob3Vyc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiaG91cnNcIlxuICAgICAgICAgIHZhbHVlPXtob3Vyc31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZV9wYXR0ZXJuLm1pbnV0ZXNcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIm1pbnV0ZXNcIlxuICAgICAgICAgIHZhbHVlPXttaW51dGVzfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50aW1lX3BhdHRlcm4uc2Vjb25kc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwic2Vjb25kc1wiXG4gICAgICAgICAgdmFsdWU9e3NlY29uZHN9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGltZVBhdHRlcm5UcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgaG91cnM6IFwiXCIsXG4gIG1pbnV0ZXM6IFwiXCIsXG4gIHNlY29uZHM6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBEZXZpY2VUcmlnZ2VyIGZyb20gXCIuL2RldmljZVwiO1xuaW1wb3J0IEV2ZW50VHJpZ2dlciBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IEdlb2xvY2F0aW9uVHJpZ2dlciBmcm9tIFwiLi9nZW9fbG9jYXRpb25cIjtcbmltcG9ydCBIYXNzVHJpZ2dlciBmcm9tIFwiLi9ob21lYXNzaXN0YW50XCI7XG5pbXBvcnQgTVFUVFRyaWdnZXIgZnJvbSBcIi4vbXF0dFwiO1xuaW1wb3J0IE51bWVyaWNTdGF0ZVRyaWdnZXIgZnJvbSBcIi4vbnVtZXJpY19zdGF0ZVwiO1xuaW1wb3J0IFRpbWVQYXR0ZXJuVHJpZ2dlciBmcm9tIFwiLi90aW1lX3BhdHRlcm5cIjtcbmltcG9ydCBTdGF0ZVRyaWdnZXIgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBTdW5UcmlnZ2VyIGZyb20gXCIuL3N1blwiO1xuaW1wb3J0IFRlbXBsYXRlVHJpZ2dlciBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IFRpbWVUcmlnZ2VyIGZyb20gXCIuL3RpbWVcIjtcbmltcG9ydCBXZWJob29rVHJpZ2dlciBmcm9tIFwiLi93ZWJob29rXCI7XG5pbXBvcnQgWm9uZVRyaWdnZXIgZnJvbSBcIi4vem9uZVwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgZGV2aWNlOiBEZXZpY2VUcmlnZ2VyLFxuICBldmVudDogRXZlbnRUcmlnZ2VyLFxuICBzdGF0ZTogU3RhdGVUcmlnZ2VyLFxuICBnZW9fbG9jYXRpb246IEdlb2xvY2F0aW9uVHJpZ2dlcixcbiAgaG9tZWFzc2lzdGFudDogSGFzc1RyaWdnZXIsXG4gIG1xdHQ6IE1RVFRUcmlnZ2VyLFxuICBudW1lcmljX3N0YXRlOiBOdW1lcmljU3RhdGVUcmlnZ2VyLFxuICBzdW46IFN1blRyaWdnZXIsXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVRyaWdnZXIsXG4gIHRpbWU6IFRpbWVUcmlnZ2VyLFxuICB0aW1lX3BhdHRlcm46IFRpbWVQYXR0ZXJuVHJpZ2dlcixcbiAgd2ViaG9vazogV2ViaG9va1RyaWdnZXIsXG4gIHpvbmU6IFpvbmVUcmlnZ2VyLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJFZGl0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlQ2hhbmdlZCA9IHRoaXMudHlwZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBpbmRleCwgdHJpZ2dlciwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgICBjb25zdCBDb21wID0gVFlQRVNbdHJpZ2dlci5wbGF0Zm9ybV07XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBPUFRJT05TLmluZGV4T2YodHJpZ2dlci5wbGF0Zm9ybSk7XG5cbiAgICBpZiAoIUNvbXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudW5zdXBwb3J0ZWRfcGxhdGZvcm1cIixcbiAgICAgICAgICAgIFwicGxhdGZvcm1cIixcbiAgICAgICAgICAgIHRyaWdnZXIucGxhdGZvcm1cbiAgICAgICAgICApfVxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRyaWdnZXIsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGVfc2VsZWN0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBvbmlyb24tc2VsZWN0PXt0aGlzLnR5cGVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtPUFRJT05TLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIHBsYXRmb3JtPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS4ke29wdH0ubGFiZWxgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgICAgIDxDb21wXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0eXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLnBsYXRmb3JtLnZhbHVlO1xuXG4gICAgaWYgKHR5cGUgIT09IHRoaXMucHJvcHMudHJpZ2dlci5wbGF0Zm9ybSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAgIHBsYXRmb3JtOiB0eXBlLFxuICAgICAgICAuLi5UWVBFU1t0eXBlXS5kZWZhdWx0Q29uZmlnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IFRyaWdnZXJFZGl0IGZyb20gXCIuL3RyaWdnZXJfZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyUm93IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvblRhcD17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHJpZ2dlckVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViaG9va1RyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS53ZWJob29rLndlYmhvb2tfaWRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIndlYmhvb2tfaWRcIlxuICAgICAgICAgIHZhbHVlPXt3ZWJob29rSWR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oV2ViaG9va1RyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICB3ZWJob29rX2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IGhhc0xvY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvaGFzX2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudGl0eVBpY2tlZCA9IHRoaXMuZW50aXR5UGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b25lUGlja2VkID0gdGhpcy56b25lUGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgem9uZSwgZXZlbnQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmVudGl0eVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZW50aXR5RmlsdGVyPXt6b25lQW5kTG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLnpvbmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e3pvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuem9uZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgaW5jbHVkZURvbWFpbnM9e1tcInpvbmVcIl19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBpZD1cImV2ZW50bGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIHNlbGVjdGVkPXtldmVudH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudGxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMucmFkaW9Hcm91cFBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImVudGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5lbnRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxlYXZlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5sZWF2ZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgem9uZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG59XG5cbihab25lVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgem9uZTogXCJcIixcbiAgZXZlbnQ6IFwiZW50ZXJcIixcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQWhCQTtBQUNBOztBQURBOzs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7QUFGQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBR0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBS0E7OztBQUdBOztBQU1BOztBQUlBOztBQUlBOztBQUVBOzs7OztBQUtBO0FBRUE7QUFGQTs7O0FBT0E7QUFDQTtBQURBOzs7OztBQU9BO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7O0FBbERBO0FBd0RBO0FBbkZBO0FBQUE7QUFBQTtBQUFBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQWhLQTtBQUFBO0FBQUE7QUFBQTtBQW1LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUExS0E7QUFBQTtBQUFBO0FBQUE7QUE2S0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdExBO0FBQUE7QUFBQTtBQUFBO0FBeUxBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbE1BO0FBQUE7QUFBQTtBQUFBO0FBcU1BO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQXpOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNE5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlFQTtBQXJTQTtBQUFBO0FBQUE7QUF3U0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1VBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7O0FBUUE7Ozs7OztBQVFBOztBQUlBOzs7QUFJQTs7O0FBSkE7QUFDQTs7O0FBY0E7QUFDQTs7OztBQUlBOztBQUVBOzs7OztBQWNBO0FBQ0E7O0FBRUE7OztBQUtBOzs7QUFPQTs7QUFJQTs7QUFHQTs7QUFHQTs7QUFIQTs7Ozs7QUFoREE7Ozs7OztBQXFFQTs7QUFFQTtBQUdBO0FBQ0E7Ozs7QUFsSEE7QUF1SEE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyREE7OztBQTNNQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakhBO0FBQ0E7QUFrSEE7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsNllBRUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQWVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQ0E7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBT0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUEvSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBdkdBO0FBeUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBeENBO0FBMENBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFDQTtBQXhFQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUNBO0FBM0NBO0FBNkNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBbkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQWhDQTtBQWtDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQTNFQTtBQTZFQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFuRUE7QUFxRUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUF0REE7QUF3REE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBbkVBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBdERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQS9FQTtBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=