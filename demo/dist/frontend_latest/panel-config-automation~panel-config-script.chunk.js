(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation~panel-config-script"],{

/***/ "./src/common/entity/has_location.ts":
/*!*******************************************!*\
  !*** ./src/common/entity/has_location.ts ***!
  \*******************************************/
/*! exports provided: hasLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLocation", function() { return hasLocation; });
const hasLocation = stateObj => {
  return "latitude" in stateObj.attributes && "longitude" in stateObj.attributes;
};

/***/ }),

/***/ "./src/common/preact/event.ts":
/*!************************************!*\
  !*** ./src/common/preact/event.ts ***!
  \************************************/
/*! exports provided: onChangeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeEvent", function() { return onChangeEvent; });
// interface OnChangeComponent {
//   props: {
//     index: number;
//     onChange(index: number, data: object);
//   };
// }
// export function onChangeEvent(this: OnChangeComponent, prop, ev) {
function onChangeEvent(prop, ev) {
  const origData = this.props[prop];

  if (ev.target.value === origData[ev.target.name]) {
    return;
  }

  const data = Object.assign({}, origData);

  if (ev.target.value) {
    data[ev.target.name] = ev.target.value;
  } else {
    delete data[ev.target.name];
  }

  this.props.onChange(this.props.index, data);
}

/***/ }),

/***/ "./src/common/preact/unmount.ts":
/*!**************************************!*\
  !*** ./src/common/preact/unmount.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unmount; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

function unmount(mountEl) {
  Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])( // @ts-ignore
  () => null, mountEl);
}

/***/ }),

/***/ "./src/components/device/ha-device-action-picker.ts":
/*!**********************************************************!*\
  !*** ./src/components/device/ha-device-action-picker.ts ***!
  \**********************************************************/
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






let HaDeviceActionPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-action-picker")], function (_initialize, _HaDeviceAutomationPi) {
  class HaDeviceActionPicker extends _HaDeviceAutomationPi {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationAction"], _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["fetchDeviceActions"], deviceId => ({
        device_id: deviceId || "",
        domain: "",
        entity_id: ""
      }));

      _initialize(this);
    }

  }

  return {
    F: HaDeviceActionPicker,
    d: [{
      kind: "field",
      key: "NO_AUTOMATION_TEXT",

      value() {
        return "No actions";
      }

    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",

      value() {
        return "Unknown action";
      }

    }]
  };
}, _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationPicker"]);

/***/ }),

/***/ "./src/components/device/ha-device-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/components/device/ha-device-automation-picker.ts ***!
  \**************************************************************/
/*! exports provided: HaDeviceAutomationPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDeviceAutomationPicker", function() { return HaDeviceAutomationPicker; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
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









const NO_AUTOMATION_KEY = "NO_AUTOMATION";
const UNKNOWN_AUTOMATION_KEY = "UNKNOWN_AUTOMATION";
let HaDeviceAutomationPicker = _decorate(null, function (_initialize, _LitElement) {
  class HaDeviceAutomationPicker extends _LitElement {
    // Trigger an empty render so we start with a clean DOM.
    // paper-listbox does not like changing things around.
    constructor(localizeDeviceAutomation, fetchDeviceAutomations, createNoAutomation) {
      super();

      _initialize(this);

      this._localizeDeviceAutomation = localizeDeviceAutomation;
      this._fetchDeviceAutomations = fetchDeviceAutomations;
      this._createNoAutomation = createNoAutomation;
    }

  }

  return {
    F: HaDeviceAutomationPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "deviceId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      key: "NO_AUTOMATION_TEXT",

      value() {
        return "No automations";
      }

    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",

      value() {
        return "Unknown automation";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_automations",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_renderEmpty",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_localizeDeviceAutomation",
      value: void 0
    }, {
      kind: "field",
      key: "_fetchDeviceAutomations",
      value: void 0
    }, {
      kind: "field",
      key: "_createNoAutomation",
      value: void 0
    }, {
      kind: "get",
      key: "_key",
      value: function _key() {
        if (!this.value || Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(this._createNoAutomation(this.deviceId), this.value)) {
          return NO_AUTOMATION_KEY;
        }

        const idx = this._automations.findIndex(automation => Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(automation, this.value));

        if (idx === -1) {
          return UNKNOWN_AUTOMATION_KEY;
        }

        return `${this._automations[idx].device_id}_${idx}`;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this._renderEmpty) {
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <ha-paper-dropdown-menu
        .label=${this.label}
        .value=${this.value ? this._localizeDeviceAutomation(this.hass, this.value) : ""}
        ?disabled=${this._automations.length === 0}
      >
        <paper-listbox
          slot="dropdown-content"
          .selected=${this._key}
          attr-for-selected="key"
          @iron-select=${this._automationChanged}
        >
          <paper-item
            key=${NO_AUTOMATION_KEY}
            .automation=${this._createNoAutomation(this.deviceId)}
            hidden
          >
            ${this.NO_AUTOMATION_TEXT}
          </paper-item>
          <paper-item
            key=${UNKNOWN_AUTOMATION_KEY}
            .automation=${this.value}
            hidden
          >
            ${this.UNKNOWN_AUTOMATION_TEXT}
          </paper-item>
          ${this._automations.map((automation, idx) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <paper-item
                key=${`${this.deviceId}_${idx}`}
                .automation=${automation}
              >
                ${this._localizeDeviceAutomation(this.hass, automation)}
              </paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaDeviceAutomationPicker.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("deviceId")) {
          this._updateDeviceInfo();
        } // The value has changed, force the listbox to update


        if (changedProps.has("value") || changedProps.has("_renderEmpty")) {
          const listbox = this.shadowRoot.querySelector("paper-listbox");

          if (listbox) {
            listbox._selectSelected(this._key);
          }
        }
      }
    }, {
      kind: "method",
      key: "_updateDeviceInfo",
      value: async function _updateDeviceInfo() {
        this._automations = this.deviceId ? await this._fetchDeviceAutomations(this.hass, this.deviceId) : // No device, clear the list of automations
        []; // If there is no value, or if we have changed the device ID, reset the value.

        if (!this.value || this.value.device_id !== this.deviceId) {
          this._setValue(this._automations.length ? this._automations[0] : this._createNoAutomation(this.deviceId));
        }

        this._renderEmpty = true;
        await this.updateComplete;
        this._renderEmpty = false;
      }
    }, {
      kind: "method",
      key: "_automationChanged",
      value: function _automationChanged(ev) {
        this._setValue(ev.detail.item.automation);
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(automation) {
        if (this.value && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(automation, this.value)) {
          return;
        }

        this.value = automation;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      ha-paper-dropdown-menu {
        width: 100%;
      }
      paper-listbox {
        min-width: 200px;
      }
      paper-item {
        cursor: pointer;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ }),

/***/ "./src/components/device/ha-device-condition-picker.ts":
/*!*************************************************************!*\
  !*** ./src/components/device/ha-device-condition-picker.ts ***!
  \*************************************************************/
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






let HaDeviceConditionPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-condition-picker")], function (_initialize, _HaDeviceAutomationPi) {
  class HaDeviceConditionPicker extends _HaDeviceAutomationPi {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationCondition"], _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["fetchDeviceConditions"], deviceId => ({
        device_id: deviceId || "",
        condition: "device",
        domain: "",
        entity_id: ""
      }));

      _initialize(this);
    }

  }

  return {
    F: HaDeviceConditionPicker,
    d: [{
      kind: "field",
      key: "NO_AUTOMATION_TEXT",

      value() {
        return "No conditions";
      }

    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",

      value() {
        return "Unknown condition";
      }

    }]
  };
}, _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationPicker"]);

/***/ }),

/***/ "./src/components/ha-combo-box.js":
/*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");








class HaComboBox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
  }

  static get properties() {
    return {
      allowCustomValue: Boolean,
      items: {
        type: Object,
        observer: "_itemsChanged"
      },
      _items: Object,
      itemLabelPath: String,
      itemValuePath: String,
      autofocus: Boolean,
      label: String,
      opened: {
        type: Boolean,
        value: false,
        observer: "_openedChanged"
      },
      value: {
        type: String,
        notify: true
      }
    };
  }

  _openedChanged(newVal) {
    if (!newVal) {
      this._items = this.items;
    }
  }

  _itemsChanged(newVal) {
    if (!this.opened) {
      this._items = newVal;
    }
  }

  _computeToggleIcon(opened) {
    return opened ? "hass:menu-up" : "hass:menu-down";
  }

  _computeItemLabel(item, itemLabelPath) {
    return itemLabelPath ? item[itemLabelPath] : item;
  }

  _fireChanged(ev) {
    ev.stopPropagation();
    this.fire("change");
  }

}

customElements.define("ha-combo-box", HaComboBox);

/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class HaPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/components/ha-service-picker.js":
/*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-combo-box */ "./src/components/ha-combo-box.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class HaServicePicker extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "_hassChanged"
      },
      _services: Array,
      value: {
        type: String,
        notify: true
      }
    };
  }

  _hassChanged(hass, oldHass) {
    if (!hass) {
      this._services = [];
      return;
    }

    if (oldHass && hass.services === oldHass.services) {
      return;
    }

    const result = [];
    Object.keys(hass.services).sort().forEach(domain => {
      const services = Object.keys(hass.services[domain]).sort();

      for (let i = 0; i < services.length; i++) {
        result.push(`${domain}.${services[i]}`);
      }
    });
    this._services = result;
  }

}

customElements.define("ha-service-picker", HaServicePicker);

/***/ }),

/***/ "./src/components/ha-textarea.js":
/*!***************************************!*\
  !*** ./src/components/ha-textarea.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/*
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/




class HaTextarea extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea
        label="[[label]]"
        placeholder="[[placeholder]]"
        value="{{value}}"
      ></paper-textarea>
    `;
  }

  static get properties() {
    return {
      name: String,
      label: String,
      placeholder: String,
      value: {
        type: String,
        notify: true
      }
    };
  }

}

customElements.define("ha-textarea", HaTextarea);

/***/ }),

/***/ "./src/data/device_automation.ts":
/*!***************************************!*\
  !*** ./src/data/device_automation.ts ***!
  \***************************************/
/*! exports provided: fetchDeviceActions, fetchDeviceConditions, fetchDeviceTriggers, fetchDeviceActionCapabilities, fetchDeviceConditionCapabilities, fetchDeviceTriggerCapabilities, deviceAutomationsEqual, localizeDeviceAutomationAction, localizeDeviceAutomationCondition, localizeDeviceAutomationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActions", function() { return fetchDeviceActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditions", function() { return fetchDeviceConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggers", function() { return fetchDeviceTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActionCapabilities", function() { return fetchDeviceActionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditionCapabilities", function() { return fetchDeviceConditionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggerCapabilities", function() { return fetchDeviceTriggerCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceAutomationsEqual", function() { return deviceAutomationsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationAction", function() { return localizeDeviceAutomationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationCondition", function() { return localizeDeviceAutomationCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationTrigger", function() { return localizeDeviceAutomationTrigger; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

const fetchDeviceActions = (hass, deviceId) => hass.callWS({
  type: "device_automation/action/list",
  device_id: deviceId
});
const fetchDeviceConditions = (hass, deviceId) => hass.callWS({
  type: "device_automation/condition/list",
  device_id: deviceId
});
const fetchDeviceTriggers = (hass, deviceId) => hass.callWS({
  type: "device_automation/trigger/list",
  device_id: deviceId
});
const fetchDeviceActionCapabilities = (hass, action) => hass.callWS({
  type: "device_automation/action/capabilities",
  action
});
const fetchDeviceConditionCapabilities = (hass, condition) => hass.callWS({
  type: "device_automation/condition/capabilities",
  condition
});
const fetchDeviceTriggerCapabilities = (hass, trigger) => hass.callWS({
  type: "device_automation/trigger/capabilities",
  trigger
});
const whitelist = ["above", "below", "code", "for"];
const deviceAutomationsEqual = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  for (const property in a) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  for (const property in b) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  return true;
};
const localizeDeviceAutomationAction = (hass, action) => {
  const state = action.entity_id ? hass.states[action.entity_id] : undefined;
  return hass.localize(`component.${action.domain}.device_automation.action_type.${action.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize(`component.${action.domain}.device_automation.action_subtype.${action.subtype}`));
};
const localizeDeviceAutomationCondition = (hass, condition) => {
  const state = condition.entity_id ? hass.states[condition.entity_id] : undefined;
  return hass.localize(`component.${condition.domain}.device_automation.condition_type.${condition.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize(`component.${condition.domain}.device_automation.condition_subtype.${condition.subtype}`));
};
const localizeDeviceAutomationTrigger = (hass, trigger) => {
  const state = trigger.entity_id ? hass.states[trigger.entity_id] : undefined;
  return hass.localize(`component.${trigger.domain}.device_automation.trigger_type.${trigger.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize(`component.${trigger.domain}.device_automation.trigger_subtype.${trigger.subtype}`));
};

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

/***/ "./src/panels/config/js/condition/condition_edit.tsx":
/*!***********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_edit.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/condition/device.tsx");
/* harmony import */ var _logical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logical */ "./src/panels/config/js/condition/logical.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/condition/numeric_state.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/condition/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/condition/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/condition/time.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/condition/zone.tsx");












const TYPES = {
  and: _logical__WEBPACK_IMPORTED_MODULE_5__["default"],
  device: _device__WEBPACK_IMPORTED_MODULE_4__["default"],
  numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_6__["default"],
  or: _logical__WEBPACK_IMPORTED_MODULE_5__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_7__["default"],
  sun: _sun__WEBPACK_IMPORTED_MODULE_8__["default"],
  template: _template__WEBPACK_IMPORTED_MODULE_9__["default"],
  time: _time__WEBPACK_IMPORTED_MODULE_10__["default"],
  zone: _zone__WEBPACK_IMPORTED_MODULE_11__["default"]
};
const OPTIONS = Object.keys(TYPES).sort();
class ConditionEdit extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.typeChanged = this.typeChanged.bind(this);
  }

  typeChanged(ev) {
    const type = ev.target.selectedItem.attributes.condition.value;

    if (type !== this.props.condition.condition) {
      this.props.onChange(this.props.index, Object.assign({
        condition: type
      }, TYPES[type].defaultConfig));
    }
  }

  render({
    index,
    condition,
    onChange,
    hass,
    localize
  }) {
    // tslint:disable-next-line: variable-name
    const Comp = TYPES[condition.condition];
    const selected = OPTIONS.indexOf(condition.condition);

    if (!Comp) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, localize("ui.panel.config.automation.editor.conditions.unsupported_condition", "condition", condition.condition), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(condition, null, 2)));
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", {
      label: localize("ui.panel.config.automation.editor.conditions.type_select"),
      "no-animations": true
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content",
      selected: selected,
      "oniron-select": this.typeChanged
    }, OPTIONS.map(opt => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      condition: opt
    }, localize(`ui.panel.config.automation.editor.conditions.type.${opt}.label`))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
      index: index,
      condition: condition,
      onChange: onChange,
      hass: hass,
      localize: localize
    }));
  }

}

/***/ }),

/***/ "./src/panels/config/js/condition/condition_row.tsx":
/*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");







class ConditionRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // eslint-disable-next-line
    if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
      this.props.onChange(this.props.index, null);
    }
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
    }, props.localize("ui.panel.config.automation.editor.conditions.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      onTap: this.onDelete
    }, props.localize("ui.panel.config.automation.editor.conditions.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
  }

}

/***/ }),

/***/ "./src/panels/config/js/condition/device.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/condition/device.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_condition_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-condition-picker */ "./src/components/device/ha-device-condition-picker.ts");
/* harmony import */ var _components_ha_form_ha_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-form/ha-form */ "./src/components/ha-form/ha-form.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DeviceCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "_origCondition", void 0);

    this.devicePicked = this.devicePicked.bind(this);
    this.deviceConditionPicked = this.deviceConditionPicked.bind(this);
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

  deviceConditionPicked(ev) {
    let condition = ev.target.value;

    if (this._origCondition && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origCondition, condition)) {
      condition = this._origCondition;
    }

    this.props.onChange(this.props.index, condition);
  }
  /* eslint-disable camelcase */


  render({
    condition,
    hass
  }, {
    device_id,
    capabilities
  }) {
    if (device_id === undefined) {
      device_id = condition.device_id;
    }

    const extraFieldsData = capabilities && capabilities.extra_fields ? capabilities.extra_fields.map(item => {
      return {
        [item.name]: this.props.condition[item.name]
      };
    }) : undefined;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", {
      value: device_id,
      onChange: this.devicePicked,
      hass: hass,
      label: "Device"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-condition-picker", {
      value: condition,
      deviceId: device_id,
      onChange: this.deviceConditionPicked,
      hass: hass,
      label: "Condition"
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

    if (this.props.condition) {
      this._origCondition = this.props.condition;
    }
  }

  componentDidUpdate(prevProps) {
    if (!Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(prevProps.condition, this.props.condition)) {
      this._getCapabilities();
    }
  }

  async _getCapabilities() {
    const condition = this.props.condition;
    const capabilities = condition.domain ? await Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceConditionCapabilities"])(this.props.hass, condition) : null;
    this.setState(Object.assign({}, this.state, {
      capabilities
    }));
  }

  _extraFieldsChanged(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {}, ev.detail.value));
  }

  _extraFieldsComputeLabelCallback(localize) {
    // Returns a callback for ha-form to calculate labels per schema object
    return schema => localize(`ui.panel.config.automation.editor.condition.type.device.extra_fields.${schema.name}`) || schema.name;
  }

}
DeviceCondition.defaultConfig = {
  device_id: "",
  domain: "",
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/condition/index.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/condition/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Condition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition_row */ "./src/panels/config/js/condition/condition_row.tsx");




class Condition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.addCondition = this.addCondition.bind(this);
    this.conditionChanged = this.conditionChanged.bind(this);
  }

  addCondition() {
    const condition = this.props.condition.concat({
      condition: "state"
    });
    this.props.onChange(condition);
  }

  conditionChanged(index, newValue) {
    const condition = this.props.condition.concat();

    if (newValue === null) {
      condition.splice(index, 1);
    } else {
      condition[index] = newValue;
    }

    this.props.onChange(condition);
  }

  render({
    condition,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "triggers"
    }, condition.map((cnd, idx) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: idx,
      condition: cnd,
      onChange: this.conditionChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-actions add-card"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
      onTap: this.addCondition
    }, localize("ui.panel.config.automation.editor.conditions.add")))));
  }

}

/***/ }),

/***/ "./src/panels/config/js/condition/logical.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/condition/logical.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogicalCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/panels/config/js/condition/index.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class LogicalCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "_mounted", false);

    this.conditionChanged = this.conditionChanged.bind(this);
  }

  conditionChanged(conditions) {
    if (this._mounted) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
        conditions
      }));
    }
  }

  componentWillMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }
  /* eslint-disable camelcase */


  render({
    condition,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      condition: condition.conditions || [],
      onChange: this.conditionChanged,
      hass: hass,
      localize: localize
    }));
  }

}
LogicalCondition.defaultConfig = {
  conditions: [{
    condition: "state"
  }]
};

/***/ }),

/***/ "./src/panels/config/js/condition/numeric_state.tsx":
/*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/numeric_state.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class NumericStateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "condition");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    condition,
    hass,
    localize
  }) {
    const {
      value_template,
      entity_id,
      below,
      above
    } = condition;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.above"),
      name: "above",
      value: above,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.below"),
      name: "below",
      value: below,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }));
  }

}
NumericStateCondition.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/condition/state.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/condition/state.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class StateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "condition");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    condition,
    hass,
    localize
  }) {
    const {
      entity_id,
      state
    } = condition;
    const cndFor = condition.for;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.state.state"),
      name: "state",
      value: state,
      "onvalue-changed": this.onChange
    }), cndFor && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, "For: ", JSON.stringify(cndFor, null, 2)));
  }

}
StateCondition.defaultConfig = {
  entity_id: "",
  state: ""
};

/***/ }),

/***/ "./src/panels/config/js/condition/sun.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/condition/sun.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SunCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    _defineProperty(this, "afterPicked", void 0);

    _defineProperty(this, "beforePicked", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "condition");
    this.afterPicked = this.radioGroupPicked.bind(this, "after");
    this.beforePicked = this.radioGroupPicked.bind(this, "before");
  }

  radioGroupPicked(key, ev) {
    const condition = Object.assign({}, this.props.condition);

    if (ev.target.selected) {
      condition[key] = ev.target.selected;
    } else {
      delete condition[key];
    }

    this.props.onChange(this.props.index, condition);
  }

  render({
    condition,
    localize
  }) {
    /* eslint-disable camelcase */
    const {
      after,
      after_offset,
      before,
      before_offset
    } = condition;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "beforelabel"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.before")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      "allow-empty-selection": true,
      selected: before,
      "aria-labelledby": "beforelabel",
      "onpaper-radio-group-changed": this.beforePicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunrise"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunset"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.sun.before_offset"),
      name: "before_offset",
      value: before_offset,
      "onvalue-changed": this.onChange,
      disabled: before === undefined
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "afterlabel"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.after")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      "allow-empty-selection": true,
      selected: after,
      "aria-labelledby": "afterlabel",
      "onpaper-radio-group-changed": this.afterPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunrise"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunset"
    }, localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.sun.after_offset"),
      name: "after_offset",
      value: after_offset,
      "onvalue-changed": this.onChange,
      disabled: after === undefined
    }));
  }

}
SunCondition.defaultConfig = {};

/***/ }),

/***/ "./src/panels/config/js/condition/template.tsx":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/condition/template.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TemplateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "condition");
  }

  render({
    condition,
    localize
  }) {
    /* eslint-disable camelcase */
    const {
      value_template
    } = condition;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.conditions.type.template.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }));
  }

}
TemplateCondition.defaultConfig = {
  value_template: ""
};

/***/ }),

/***/ "./src/panels/config/js/condition/time.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/time.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TimeCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "condition");
  }
  /* eslint-disable camelcase */


  render({
    condition,
    localize
  }) {
    const {
      after,
      before
    } = condition;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.time.after"),
      name: "after",
      value: after,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.conditions.type.time.before"),
      name: "before",
      value: before,
      "onvalue-changed": this.onChange
    }));
  }

}
TimeCondition.defaultConfig = {};

/***/ }),

/***/ "./src/panels/config/js/condition/zone.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/zone.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneCondition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");





function zoneAndLocationFilter(stateObj) {
  return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_2__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["computeStateDomain"])(stateObj) !== "zone";
}

class ZoneCondition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.entityPicked = this.entityPicked.bind(this);
    this.zonePicked = this.zonePicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
      entity_id: ev.target.value
    }));
  }

  zonePicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
      zone: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    condition,
    hass,
    localize
  }) {
    const {
      entity_id,
      zone
    } = condition;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.conditions.type.zone.entity"),
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true,
      entityFilter: zoneAndLocationFilter
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.conditions.type.zone.zone"),
      value: zone,
      onChange: this.zonePicked,
      hass: hass,
      allowCustomEntity: true,
      includeDomains: ["zone"]
    }));
  }

}
ZoneCondition.defaultConfig = {
  entity_id: "",
  zone: ""
};

/***/ }),

/***/ "./src/panels/config/js/script/action_edit.tsx":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/script/action_edit.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call_service */ "./src/panels/config/js/script/call_service.tsx");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./condition */ "./src/panels/config/js/script/condition.tsx");
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delay */ "./src/panels/config/js/script/delay.tsx");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/script/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/script/event.tsx");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scene */ "./src/panels/config/js/script/scene.tsx");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wait */ "./src/panels/config/js/script/wait.tsx");











const TYPES = {
  service: _call_service__WEBPACK_IMPORTED_MODULE_4__["default"],
  delay: _delay__WEBPACK_IMPORTED_MODULE_6__["default"],
  wait_template: _wait__WEBPACK_IMPORTED_MODULE_10__["default"],
  condition: _condition__WEBPACK_IMPORTED_MODULE_5__["default"],
  event: _event__WEBPACK_IMPORTED_MODULE_8__["default"],
  device_id: _device__WEBPACK_IMPORTED_MODULE_7__["default"],
  scene: _scene__WEBPACK_IMPORTED_MODULE_9__["default"]
};
const OPTIONS = Object.keys(TYPES).sort();

function getType(action) {
  const keys = Object.keys(TYPES); // tslint:disable-next-line: prefer-for-of

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in action) {
      return keys[i];
    }
  }

  return null;
}

class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.typeChanged = this.typeChanged.bind(this);
  }

  typeChanged(ev) {
    const newType = ev.target.selectedItem.attributes.action.value;
    const oldType = getType(this.props.action);

    if (oldType !== newType) {
      this.props.onChange(this.props.index, TYPES[newType].defaultConfig);
    }
  }

  render({
    index,
    action,
    onChange,
    hass,
    localize
  }) {
    const type = getType(action); // tslint:disable-next-line: variable-name

    const Comp = type && TYPES[type]; // @ts-ignore

    const selected = OPTIONS.indexOf(type);

    if (!Comp) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, localize("ui.panel.config.automation.editor.actions.unsupported_action", "action", type), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(action, null, 2)));
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", {
      label: localize("ui.panel.config.automation.editor.actions.type_select"),
      "no-animations": true
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content",
      selected: selected,
      "oniron-select": this.typeChanged
    }, OPTIONS.map(opt => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      action: opt
    }, localize(`ui.panel.config.automation.editor.actions.type.${opt}.label`))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
      index: index,
      action: action,
      onChange: onChange,
      hass: hass,
      localize: localize
    }));
  }

}

/***/ }),

/***/ "./src/panels/config/js/script/action_row.tsx":
/*!****************************************************!*\
  !*** ./src/panels/config/js/script/action_row.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action_edit */ "./src/panels/config/js/script/action_edit.tsx");







class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // eslint-disable-next-line
    if (confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))) {
      this.props.onChange(this.props.index, null);
    }
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
    }, props.localize("ui.panel.config.automation.editor.actions.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      onTap: this.onDelete
    }, props.localize("ui.panel.config.automation.editor.actions.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_action_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
  }

}

/***/ }),

/***/ "./src/panels/config/js/script/call_service.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/script/call_service.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallServiceAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");



class CallServiceAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.serviceChanged = this.serviceChanged.bind(this);
    this.serviceDataChanged = this.serviceDataChanged.bind(this);
  }

  serviceChanged(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
      service: ev.target.value
    }));
  }

  serviceDataChanged(data) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
      data
    }));
  }

  render({
    action,
    hass,
    localize
  }) {
    const {
      service,
      data
    } = action;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-service-picker", {
      hass: hass,
      value: service,
      onChange: this.serviceChanged
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: localize("ui.panel.config.automation.editor.actions.type.service.service_data"),
      value: data,
      onChange: this.serviceDataChanged
    }));
  }

}
CallServiceAction.defaultConfig = {
  alias: "",
  service: "",
  data: {}
};

/***/ }),

/***/ "./src/panels/config/js/script/condition.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/script/condition.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _condition_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../condition/state */ "./src/panels/config/js/condition/state.tsx");
/* harmony import */ var _condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condition/condition_edit */ "./src/panels/config/js/condition/condition_edit.tsx");



class ConditionAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  // eslint-disable-next-line
  render({
    action,
    index,
    onChange,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__["default"], {
      condition: action,
      onChange: onChange,
      index: index,
      hass: hass,
      localize: localize
    });
  }

}
ConditionAction.defaultConfig = Object.assign({
  condition: "state"
}, _condition_state__WEBPACK_IMPORTED_MODULE_1__["default"].defaultConfig);

/***/ }),

/***/ "./src/panels/config/js/script/delay.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/delay.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DelayAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class DelayAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "action");
  }

  render({
    action,
    localize
  }) {
    const {
      delay
    } = action;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.actions.type.delay.delay"),
      name: "delay",
      value: delay,
      "onvalue-changed": this.onChange
    }));
  }

}
DelayAction.defaultConfig = {
  delay: ""
};

/***/ }),

/***/ "./src/panels/config/js/script/device.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/script/device.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeviceActionEditor; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_action_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-action-picker */ "./src/components/device/ha-device-action-picker.ts");
/* harmony import */ var _components_ha_form_ha_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-form/ha-form */ "./src/components/ha-form/ha-form.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DeviceActionEditor extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "_origAction", void 0);

    this.devicePicked = this.devicePicked.bind(this);
    this.deviceActionPicked = this.deviceActionPicked.bind(this);
    this._extraFieldsChanged = this._extraFieldsChanged.bind(this);
    this.state = {
      device_id: undefined,
      capabilities: undefined
    };
  }

  render() {
    const {
      action,
      hass
    } = this.props;
    const deviceId = this.state.device_id || action.device_id;
    const capabilities = this.state.capabilities;
    const extraFieldsData = capabilities && capabilities.extra_fields ? capabilities.extra_fields.map(item => {
      return {
        [item.name]: this.props.action[item.name]
      };
    }) : undefined;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-picker", {
      value: deviceId,
      onChange: this.devicePicked,
      hass: hass,
      label: "Device"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-device-action-picker", {
      value: action,
      deviceId: deviceId,
      onChange: this.deviceActionPicked,
      hass: hass,
      label: "Action"
    }), extraFieldsData && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-form", {
      data: Object.assign({}, ...extraFieldsData),
      "onvalue-changed": this._extraFieldsChanged,
      schema: this.state.capabilities.extra_fields,
      computeLabel: this._extraFieldsComputeLabelCallback(hass.localize)
    }));
  }

  componentDidMount() {
    if (!this.state.capabilities) {
      this._getCapabilities();
    }

    if (this.props.action) {
      this._origAction = this.props.action;
    }
  }

  componentDidUpdate(prevProps) {
    if (!Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(prevProps.action, this.props.action)) {
      this._getCapabilities();
    }
  }

  devicePicked(ev) {
    this.setState(Object.assign({}, this.state, {
      device_id: ev.target.value
    }));
  }

  deviceActionPicked(ev) {
    let deviceAction = ev.target.value;

    if (this._origAction && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origAction, deviceAction)) {
      deviceAction = this._origAction;
    }

    this.props.onChange(this.props.index, deviceAction);
  }

  async _getCapabilities() {
    const action = this.props.action;
    const capabilities = action.domain ? await Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceActionCapabilities"])(this.props.hass, action) : null;
    this.setState(Object.assign({}, this.state, {
      capabilities
    }));
  }

  _extraFieldsChanged(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {}, ev.detail.value));
  }

  _extraFieldsComputeLabelCallback(localize) {
    // Returns a callback for ha-form to calculate labels per schema object
    return schema => localize(`ui.panel.config.automation.editor.actions.type.device_id.extra_fields.${schema.name}`) || schema.name;
  }

}

_defineProperty(DeviceActionEditor, "defaultConfig", {
  device_id: "",
  domain: "",
  entity_id: ""
});

/***/ }),

/***/ "./src/panels/config/js/script/event.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/event.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventActionForm; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class EventActionForm extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get defaultConfig() {
    return {
      event: "",
      event_data: {}
    };
  }

  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "action");
    this.serviceDataChanged = this.serviceDataChanged.bind(this);
  }

  render() {
    const {
      action: {
        event,
        event_data
      },
      localize
    } = this.props;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.actions.type.event.event"),
      name: "event",
      value: event,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: localize("ui.panel.config.automation.editor.actions.type.event.service_data"),
      value: event_data,
      onChange: this.serviceDataChanged
    }));
  }

  serviceDataChanged(eventData) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
      event_data: eventData
    }));
  }

}

/***/ }),

/***/ "./src/panels/config/js/script/index.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Script; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _action_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action_row */ "./src/panels/config/js/script/action_row.tsx");




class Script extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.addAction = this.addAction.bind(this);
    this.actionChanged = this.actionChanged.bind(this);
  }

  addAction() {
    const script = this.props.script.concat({
      service: ""
    });
    this.props.onChange(script);
  }

  actionChanged(index, newValue) {
    const script = this.props.script.concat();

    if (newValue === null) {
      script.splice(index, 1);
    } else {
      script[index] = newValue;
    }

    this.props.onChange(script);
  }

  render({
    script,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "script"
    }, script.map((act, idx) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_action_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: idx,
      action: act,
      onChange: this.actionChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-actions add-card"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
      onTap: this.addAction
    }, localize("ui.panel.config.automation.editor.actions.add")))));
  }

}

/***/ }),

/***/ "./src/panels/config/js/script/scene.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/script/scene.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");


class SceneAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.sceneChanged = this.sceneChanged.bind(this);
  }

  sceneChanged(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
      scene: ev.target.value
    }));
  }

  render({
    action,
    hass
  }) {
    const {
      scene
    } = action;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: scene,
      onChange: this.sceneChanged,
      hass: hass,
      includeDomains: ["scene"],
      allowCustomEntity: true
    }));
  }

}
SceneAction.defaultConfig = {
  scene: ""
};

/***/ }),

/***/ "./src/panels/config/js/script/wait.tsx":
/*!**********************************************!*\
  !*** ./src/panels/config/js/script/wait.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaitAction; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class WaitAction extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", void 0);

    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "action");
    this.onTemplateChange = this.onTemplateChange.bind(this);
  } // Gets fired on mount. If empty, onChangeEvent removes attribute.
  // Without the attribute this action is no longer matched to this component.


  onTemplateChange(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
      [ev.target.getAttribute("name")]: ev.target.value
    }));
  }

  render({
    action,
    localize
  }) {
    /* eslint-disable camelcase */
    const {
      wait_template,
      timeout
    } = action;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.actions.type.wait_template.wait_template"),
      name: "wait_template",
      value: wait_template,
      "onvalue-changed": this.onTemplateChange,
      dir: "ltr"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.actions.type.wait_template.timeout"),
      name: "timeout",
      value: timeout,
      "onvalue-changed": this.onChange
    }));
  }

}
WaitAction.defaultConfig = {
  wait_template: "",
  timeout: ""
};

/***/ }),

/***/ "./src/panels/config/js/yaml_textarea.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/yaml_textarea.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YAMLTextArea; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");




const isEmpty = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

class YAMLTextArea extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    let value;

    try {
      value = props.value && !isEmpty(props.value) ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(props.value) : undefined;
    } catch (err) {
      alert(`There was an error converting to YAML: ${err}`);
    }

    this.state = {
      isvalid: true,
      value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const value = ev.detail.value;
    let parsed;
    let isValid = true;

    if (value) {
      try {
        parsed = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(value);
        isValid = true;
      } catch (err) {
        // Invalid YAML
        isValid = false;
      }
    } else {
      parsed = {};
    }

    this.setState({
      value,
      isValid
    });

    if (isValid) {
      this.props.onChange(parsed);
    }
  }

  render({
    label
  }, {
    value,
    isValid
  }) {
    const style = {
      minWidth: 300,
      width: "100%"
    };
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, label), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-code-editor", {
      mode: "yaml",
      style: style,
      value: value,
      error: isValid === false,
      "onvalue-changed": this.onChange
    }));
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC91bm1vdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtYWN0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kZXZpY2VfYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9jb25kaXRpb25fZWRpdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL2NvbmRpdGlvbl9yb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9kZXZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL2xvZ2ljYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9udW1lcmljX3N0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9zdW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi90ZW1wbGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3RpbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi96b25lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvYWN0aW9uX2VkaXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9hY3Rpb25fcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvY2FsbF9zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvY29uZGl0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZGVsYXkudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9kZXZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9ldmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvc2NlbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC93YWl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy95YW1sX3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3QgaGFzTG9jYXRpb24gPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgcmV0dXJuIChcbiAgICBcImxhdGl0dWRlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcyAmJiBcImxvbmdpdHVkZVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgKTtcbn07XG4iLCIvLyBpbnRlcmZhY2UgT25DaGFuZ2VDb21wb25lbnQge1xuLy8gICBwcm9wczoge1xuLy8gICAgIGluZGV4OiBudW1iZXI7XG4vLyAgICAgb25DaGFuZ2UoaW5kZXg6IG51bWJlciwgZGF0YTogb2JqZWN0KTtcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ2hhbmdlRXZlbnQodGhpczogT25DaGFuZ2VDb21wb25lbnQsIHByb3AsIGV2KSB7XG5leHBvcnQgZnVuY3Rpb24gb25DaGFuZ2VFdmVudCh0aGlzOiBhbnksIHByb3AsIGV2KSB7XG4gIGNvbnN0IG9yaWdEYXRhID0gdGhpcy5wcm9wc1twcm9wXTtcblxuICBpZiAoZXYudGFyZ2V0LnZhbHVlID09PSBvcmlnRGF0YVtldi50YXJnZXQubmFtZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkYXRhID0geyAuLi5vcmlnRGF0YSB9O1xuXG4gIGlmIChldi50YXJnZXQudmFsdWUpIHtcbiAgICBkYXRhW2V2LnRhcmdldC5uYW1lXSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgZGF0YVtldi50YXJnZXQubmFtZV07XG4gIH1cblxuICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGRhdGEpO1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bm1vdW50KG1vdW50RWwpIHtcbiAgcmVuZGVyKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAoKSA9PiBudWxsLFxuICAgIG1vdW50RWxcbiAgKTtcbn1cbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIERldmljZUFjdGlvbixcbiAgZmV0Y2hEZXZpY2VBY3Rpb25zLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24sXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlciB9IGZyb20gXCIuL2hhLWRldmljZS1hdXRvbWF0aW9uLXBpY2tlclwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1hY3Rpb24tcGlja2VyXCIpXG5jbGFzcyBIYURldmljZUFjdGlvblBpY2tlciBleHRlbmRzIEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxEZXZpY2VBY3Rpb24+IHtcbiAgcHJvdGVjdGVkIE5PX0FVVE9NQVRJT05fVEVYVCA9IFwiTm8gYWN0aW9uc1wiO1xuICBwcm90ZWN0ZWQgVU5LTk9XTl9BVVRPTUFUSU9OX1RFWFQgPSBcIlVua25vd24gYWN0aW9uXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXG4gICAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24sXG4gICAgICBmZXRjaERldmljZUFjdGlvbnMsXG4gICAgICAoZGV2aWNlSWQ/OiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQgfHwgXCJcIixcbiAgICAgICAgZG9tYWluOiBcIlwiLFxuICAgICAgICBlbnRpdHlfaWQ6IFwiXCIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRldmljZS1hY3Rpb24tcGlja2VyXCI6IEhhRGV2aWNlQWN0aW9uUGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIERldmljZUF1dG9tYXRpb24sXG4gIGRldmljZUF1dG9tYXRpb25zRXF1YWwsXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcblxuY29uc3QgTk9fQVVUT01BVElPTl9LRVkgPSBcIk5PX0FVVE9NQVRJT05cIjtcbmNvbnN0IFVOS05PV05fQVVUT01BVElPTl9LRVkgPSBcIlVOS05PV05fQVVUT01BVElPTlwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICBUIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvblxuPiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZUlkPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBUO1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBhdXRvbWF0aW9uc1wiO1xuICBwcm90ZWN0ZWQgVU5LTk9XTl9BVVRPTUFUSU9OX1RFWFQgPSBcIlVua25vd24gYXV0b21hdGlvblwiO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hdXRvbWF0aW9uczogVFtdID0gW107XG5cbiAgLy8gVHJpZ2dlciBhbiBlbXB0eSByZW5kZXIgc28gd2Ugc3RhcnQgd2l0aCBhIGNsZWFuIERPTS5cbiAgLy8gcGFwZXItbGlzdGJveCBkb2VzIG5vdCBsaWtlIGNoYW5naW5nIHRoaW5ncyBhcm91bmQuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3JlbmRlckVtcHR5ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uOiAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBhdXRvbWF0aW9uOiBUXG4gICkgPT4gc3RyaW5nO1xuICBwcml2YXRlIF9mZXRjaERldmljZUF1dG9tYXRpb25zOiAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBkZXZpY2VJZDogc3RyaW5nXG4gICkgPT4gUHJvbWlzZTxUW10+O1xuICBwcml2YXRlIF9jcmVhdGVOb0F1dG9tYXRpb246IChkZXZpY2VJZD86IHN0cmluZykgPT4gVDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb246IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxcbiAgICAgIFRcbiAgICA+W1wiX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvblwiXSxcbiAgICBmZXRjaERldmljZUF1dG9tYXRpb25zOiBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8XG4gICAgICBUXG4gICAgPltcIl9mZXRjaERldmljZUF1dG9tYXRpb25zXCJdLFxuICAgIGNyZWF0ZU5vQXV0b21hdGlvbjogSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFQ+W1wiX2NyZWF0ZU5vQXV0b21hdGlvblwiXVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbiA9IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbjtcbiAgICB0aGlzLl9mZXRjaERldmljZUF1dG9tYXRpb25zID0gZmV0Y2hEZXZpY2VBdXRvbWF0aW9ucztcbiAgICB0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24gPSBjcmVhdGVOb0F1dG9tYXRpb247XG4gIH1cblxuICBwcml2YXRlIGdldCBfa2V5KCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnZhbHVlIHx8XG4gICAgICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKFxuICAgICAgICB0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24odGhpcy5kZXZpY2VJZCksXG4gICAgICAgIHRoaXMudmFsdWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBOT19BVVRPTUFUSU9OX0tFWTtcbiAgICB9XG5cbiAgICBjb25zdCBpZHggPSB0aGlzLl9hdXRvbWF0aW9ucy5maW5kSW5kZXgoKGF1dG9tYXRpb24pID0+XG4gICAgICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKGF1dG9tYXRpb24sIHRoaXMudmFsdWUhKVxuICAgICk7XG5cbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIFVOS05PV05fQVVUT01BVElPTl9LRVk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3RoaXMuX2F1dG9tYXRpb25zW2lkeF0uZGV2aWNlX2lkfV8ke2lkeH1gO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZW5kZXJFbXB0eSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsfVxuICAgICAgICAudmFsdWU9JHt0aGlzLnZhbHVlXG4gICAgICAgICAgPyB0aGlzLl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb24odGhpcy5oYXNzLCB0aGlzLnZhbHVlKVxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5fYXV0b21hdGlvbnMubGVuZ3RoID09PSAwfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9rZXl9XG4gICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJrZXlcIlxuICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX2F1dG9tYXRpb25DaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgIGtleT0ke05PX0FVVE9NQVRJT05fS0VZfVxuICAgICAgICAgICAgLmF1dG9tYXRpb249JHt0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24odGhpcy5kZXZpY2VJZCl9XG4gICAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuTk9fQVVUT01BVElPTl9URVhUfVxuICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAga2V5PSR7VU5LTk9XTl9BVVRPTUFUSU9OX0tFWX1cbiAgICAgICAgICAgIC5hdXRvbWF0aW9uPSR7dGhpcy52YWx1ZX1cbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5VTktOT1dOX0FVVE9NQVRJT05fVEVYVH1cbiAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgJHt0aGlzLl9hdXRvbWF0aW9ucy5tYXAoXG4gICAgICAgICAgICAoYXV0b21hdGlvbiwgaWR4KSA9PiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgIGtleT0ke2Ake3RoaXMuZGV2aWNlSWR9XyR7aWR4fWB9XG4gICAgICAgICAgICAgICAgLmF1dG9tYXRpb249JHthdXRvbWF0aW9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb24odGhpcy5oYXNzLCBhdXRvbWF0aW9uKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJkZXZpY2VJZFwiKSkge1xuICAgICAgdGhpcy5fdXBkYXRlRGV2aWNlSW5mbygpO1xuICAgIH1cblxuICAgIC8vIFRoZSB2YWx1ZSBoYXMgY2hhbmdlZCwgZm9yY2UgdGhlIGxpc3Rib3ggdG8gdXBkYXRlXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJ2YWx1ZVwiKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwiX3JlbmRlckVtcHR5XCIpKSB7XG4gICAgICBjb25zdCBsaXN0Ym94ID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwicGFwZXItbGlzdGJveFwiKSE7XG4gICAgICBpZiAobGlzdGJveCkge1xuICAgICAgICBsaXN0Ym94Ll9zZWxlY3RTZWxlY3RlZCh0aGlzLl9rZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZURldmljZUluZm8oKSB7XG4gICAgdGhpcy5fYXV0b21hdGlvbnMgPSB0aGlzLmRldmljZUlkXG4gICAgICA/IGF3YWl0IHRoaXMuX2ZldGNoRGV2aWNlQXV0b21hdGlvbnModGhpcy5oYXNzLCB0aGlzLmRldmljZUlkKVxuICAgICAgOiAvLyBObyBkZXZpY2UsIGNsZWFyIHRoZSBsaXN0IG9mIGF1dG9tYXRpb25zXG4gICAgICAgIFtdO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gdmFsdWUsIG9yIGlmIHdlIGhhdmUgY2hhbmdlZCB0aGUgZGV2aWNlIElELCByZXNldCB0aGUgdmFsdWUuXG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUuZGV2aWNlX2lkICE9PSB0aGlzLmRldmljZUlkKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShcbiAgICAgICAgdGhpcy5fYXV0b21hdGlvbnMubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLl9hdXRvbWF0aW9uc1swXVxuICAgICAgICAgIDogdGhpcy5fY3JlYXRlTm9BdXRvbWF0aW9uKHRoaXMuZGV2aWNlSWQpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJFbXB0eSA9IHRydWU7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9yZW5kZXJFbXB0eSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXV0b21hdGlvbkNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9zZXRWYWx1ZShldi5kZXRhaWwuaXRlbS5hdXRvbWF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFZhbHVlKGF1dG9tYXRpb246IFQpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAmJiBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKGF1dG9tYXRpb24sIHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBhdXRvbWF0aW9uO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgcGFwZXItbGlzdGJveCB7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIERldmljZUNvbmRpdGlvbixcbiAgZmV0Y2hEZXZpY2VDb25kaXRpb25zLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25Db25kaXRpb24sXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlciB9IGZyb20gXCIuL2hhLWRldmljZS1hdXRvbWF0aW9uLXBpY2tlclwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWRldmljZS1jb25kaXRpb24tcGlja2VyXCIpXG5jbGFzcyBIYURldmljZUNvbmRpdGlvblBpY2tlciBleHRlbmRzIEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxcbiAgRGV2aWNlQ29uZGl0aW9uXG4+IHtcbiAgcHJvdGVjdGVkIE5PX0FVVE9NQVRJT05fVEVYVCA9IFwiTm8gY29uZGl0aW9uc1wiO1xuICBwcm90ZWN0ZWQgVU5LTk9XTl9BVVRPTUFUSU9OX1RFWFQgPSBcIlVua25vd24gY29uZGl0aW9uXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXG4gICAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25Db25kaXRpb24sXG4gICAgICBmZXRjaERldmljZUNvbmRpdGlvbnMsXG4gICAgICAoZGV2aWNlSWQ/OiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGRldmljZV9pZDogZGV2aWNlSWQgfHwgXCJcIixcbiAgICAgICAgY29uZGl0aW9uOiBcImRldmljZVwiLFxuICAgICAgICBkb21haW46IFwiXCIsXG4gICAgICAgIGVudGl0eV9pZDogXCJcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcIjogSGFEZXZpY2VDb25kaXRpb25QaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5jbGFzcyBIYUNvbWJvQm94IGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbXM9XCJbW19pdGVtc11dXCJcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiW1tpdGVtVmFsdWVQYXRoXV1cIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJbW2l0ZW1MYWJlbFBhdGhdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgb3BlbmVkPVwie3tvcGVuZWR9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIltbYWxsb3dDdXN0b21WYWx1ZV1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX2ZpcmVDaGFuZ2VkXCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgYXV0b2ZvY3VzPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiW1t2YWx1ZV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shdmFsdWVdXVwiXG4gICAgICAgICAgICA+Q2xlYXI8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cIltbX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCldXVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1shaXRlbXMubGVuZ3RoXV1cIlxuICAgICAgICAgICAgPlRvZ2dsZTwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtNXB4IC0xMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHBhcGVyLWl0ZW0+W1tfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93Q3VzdG9tVmFsdWU6IEJvb2xlYW4sXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9pdGVtc0NoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBfaXRlbXM6IE9iamVjdCxcbiAgICAgIGl0ZW1MYWJlbFBhdGg6IFN0cmluZyxcbiAgICAgIGl0ZW1WYWx1ZVBhdGg6IFN0cmluZyxcbiAgICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbmVkQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB9XG4gIH1cblxuICBfaXRlbXNDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gbmV3VmFsO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpIHtcbiAgICByZXR1cm4gb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIjtcbiAgfVxuXG4gIF9jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICByZXR1cm4gaXRlbUxhYmVsUGF0aCA/IGl0ZW1baXRlbUxhYmVsUGF0aF0gOiBpdGVtO1xuICB9XG5cbiAgX2ZpcmVDaGFuZ2VkKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbWJvLWJveFwiLCBIYUNvbWJvQm94KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtY29tYm8tYm94XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVNlcnZpY2VQaWNrZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY29tYm8tYm94XG4gICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5zZXJ2aWNlLXBpY2tlci5zZXJ2aWNlJyldXVwiXG4gICAgICAgIGl0ZW1zPVwiW1tfc2VydmljZXNdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgYWxsb3ctY3VzdG9tLXZhbHVlPVwiXCJcbiAgICAgID48L2hhLWNvbWJvLWJveD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2hhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX3NlcnZpY2VzOiBBcnJheSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2hhc3NDaGFuZ2VkKGhhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIWhhc3MpIHtcbiAgICAgIHRoaXMuX3NlcnZpY2VzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvbGRIYXNzICYmIGhhc3Muc2VydmljZXMgPT09IG9sZEhhc3Muc2VydmljZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzKVxuICAgICAgLnNvcnQoKVxuICAgICAgLmZvckVhY2goKGRvbWFpbikgPT4ge1xuICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IE9iamVjdC5rZXlzKGhhc3Muc2VydmljZXNbZG9tYWluXSkuc29ydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQucHVzaChgJHtkb21haW59LiR7c2VydmljZXNbaV19YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fc2VydmljZXMgPSByZXN1bHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2VydmljZS1waWNrZXJcIiwgSGFTZXJ2aWNlUGlja2VyKTtcbiIsIi8qXG5XcmFwcGVyIGZvciBwYXBlci10ZXh0YXJlYS5cblxucGFwZXItdGV4dGFyZWEgY3Jhc2hlcyBvbiBpT1Mgd2hlbiBjcmVhdGVkIHByb2dyYW1tYXRpY2FsbHkuIFRoaXMgb25seSBpbXBhY3RzXG5vdXIgYXV0b21hdGlvbiBhbmQgc2NyaXB0IGVkaXRvcnMgYXMgdGhleSBhcmUgdXNpbmcgUHJlYWN0LiBQb2x5bWVyIGlzIHVzaW5nXG50ZW1wbGF0ZSBlbGVtZW50cyBhbmQgZG9lcyBub3QgaGF2ZSB0aGlzIGlzc3VlLlxuXG5wYXBlci10ZXh0YXJlYSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1pbnB1dC9pc3N1ZXMvNTU2XG5XZWJLaXQgaXNzdWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzQ2MjlcbiovXG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVRleHRhcmVhIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItdGV4dGFyZWFcbiAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgID48L3BhcGVyLXRleHRhcmVhPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdGV4dGFyZWFcIiwgSGFUZXh0YXJlYSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQXV0b21hdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHN1YnR5cGU/OiBzdHJpbmc7XG4gIGV2ZW50Pzogc3RyaW5nO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5LWludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VBY3Rpb24gZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQ29uZGl0aW9uIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvbiB7XG4gIGNvbmRpdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVRyaWdnZXIgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uIHtcbiAgcGxhdGZvcm06IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQWN0aW9ucyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VBY3Rpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vYWN0aW9uL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9ucyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VDb25kaXRpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vY29uZGl0aW9uL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlVHJpZ2dlcnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZGV2aWNlSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQWN0aW9uQ2FwYWJpbGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBhY3Rpb246IERldmljZUFjdGlvblxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VBY3Rpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vYWN0aW9uL2NhcGFiaWxpdGllc1wiLFxuICAgIGFjdGlvbixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZUNvbmRpdGlvbkNhcGFiaWxpdGllcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZGl0aW9uOiBEZXZpY2VDb25kaXRpb25cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlQ29uZGl0aW9uW10+KHtcbiAgICB0eXBlOiBcImRldmljZV9hdXRvbWF0aW9uL2NvbmRpdGlvbi9jYXBhYmlsaXRpZXNcIixcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VUcmlnZ2VyQ2FwYWJpbGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB0cmlnZ2VyOiBEZXZpY2VUcmlnZ2VyXG4pID0+XG4gIGhhc3MuY2FsbFdTPERldmljZVRyaWdnZXJbXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vdHJpZ2dlci9jYXBhYmlsaXRpZXNcIixcbiAgICB0cmlnZ2VyLFxuICB9KTtcblxuY29uc3Qgd2hpdGVsaXN0ID0gW1wiYWJvdmVcIiwgXCJiZWxvd1wiLCBcImNvZGVcIiwgXCJmb3JcIl07XG5cbmV4cG9ydCBjb25zdCBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsID0gKFxuICBhOiBEZXZpY2VBdXRvbWF0aW9uLFxuICBiOiBEZXZpY2VBdXRvbWF0aW9uXG4pID0+IHtcbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gYSkge1xuICAgIGlmICh3aGl0ZWxpc3QuaW5jbHVkZXMocHJvcGVydHkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QuaXMoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGIpIHtcbiAgICBpZiAod2hpdGVsaXN0LmluY2x1ZGVzKHByb3BlcnR5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LmlzKGFbcHJvcGVydHldLCBiW3Byb3BlcnR5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFjdGlvbjogRGV2aWNlQWN0aW9uXG4pID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBhY3Rpb24uZW50aXR5X2lkID8gaGFzcy5zdGF0ZXNbYWN0aW9uLmVudGl0eV9pZF0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgIGBjb21wb25lbnQuJHthY3Rpb24uZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi5hY3Rpb25fdHlwZS4ke2FjdGlvbi50eXBlfWAsXG4gICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBcIjx1bmtub3duPlwiLFxuICAgIFwic3VidHlwZVwiLFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7YWN0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uYWN0aW9uX3N1YnR5cGUuJHthY3Rpb24uc3VidHlwZX1gXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZGl0aW9uOiBEZXZpY2VDb25kaXRpb25cbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGNvbmRpdGlvbi5lbnRpdHlfaWRcbiAgICA/IGhhc3Muc3RhdGVzW2NvbmRpdGlvbi5lbnRpdHlfaWRdXG4gICAgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgIGBjb21wb25lbnQuJHtjb25kaXRpb24uZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi5jb25kaXRpb25fdHlwZS4ke2NvbmRpdGlvbi50eXBlfWAsXG4gICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBcIjx1bmtub3duPlwiLFxuICAgIFwic3VidHlwZVwiLFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7Y29uZGl0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uY29uZGl0aW9uX3N1YnR5cGUuJHtjb25kaXRpb24uc3VidHlwZX1gXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvblRyaWdnZXIgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRyaWdnZXI6IERldmljZVRyaWdnZXJcbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHRyaWdnZXIuZW50aXR5X2lkID8gaGFzcy5zdGF0ZXNbdHJpZ2dlci5lbnRpdHlfaWRdIDogdW5kZWZpbmVkO1xuICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICBgY29tcG9uZW50LiR7dHJpZ2dlci5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLnRyaWdnZXJfdHlwZS4ke3RyaWdnZXIudHlwZX1gLFxuICAgIFwiZW50aXR5X25hbWVcIixcbiAgICBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogXCI8dW5rbm93bj5cIixcbiAgICBcInN1YnR5cGVcIixcbiAgICBoYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke3RyaWdnZXIuZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi50cmlnZ2VyX3N1YnR5cGUuJHt0cmlnZ2VyLnN1YnR5cGV9YFxuICAgIClcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbmltcG9ydCBEZXZpY2VDb25kaXRpb24gZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgTG9naWNhbENvbmRpdGlvbiBmcm9tIFwiLi9sb2dpY2FsXCI7XG5pbXBvcnQgTnVtZXJpY1N0YXRlQ29uZGl0aW9uIGZyb20gXCIuL251bWVyaWNfc3RhdGVcIjtcbmltcG9ydCBTdGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IFN1bkNvbmRpdGlvbiBmcm9tIFwiLi9zdW5cIjtcbmltcG9ydCBUZW1wbGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IFRpbWVDb25kaXRpb24gZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IFpvbmVDb25kaXRpb24gZnJvbSBcIi4vem9uZVwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgYW5kOiBMb2dpY2FsQ29uZGl0aW9uLFxuICBkZXZpY2U6IERldmljZUNvbmRpdGlvbixcbiAgbnVtZXJpY19zdGF0ZTogTnVtZXJpY1N0YXRlQ29uZGl0aW9uLFxuICBvcjogTG9naWNhbENvbmRpdGlvbixcbiAgc3RhdGU6IFN0YXRlQ29uZGl0aW9uLFxuICBzdW46IFN1bkNvbmRpdGlvbixcbiAgdGVtcGxhdGU6IFRlbXBsYXRlQ29uZGl0aW9uLFxuICB0aW1lOiBUaW1lQ29uZGl0aW9uLFxuICB6b25lOiBab25lQ29uZGl0aW9uLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkVkaXQgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGVDaGFuZ2VkID0gdGhpcy50eXBlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHR5cGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdHlwZSA9IGV2LnRhcmdldC5zZWxlY3RlZEl0ZW0uYXR0cmlidXRlcy5jb25kaXRpb24udmFsdWU7XG5cbiAgICBpZiAodHlwZSAhPT0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgICAgY29uZGl0aW9uOiB0eXBlLFxuICAgICAgICAuLi5UWVBFU1t0eXBlXS5kZWZhdWx0Q29uZmlnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGluZGV4LCBjb25kaXRpb24sIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gICAgY29uc3QgQ29tcCA9IFRZUEVTW2NvbmRpdGlvbi5jb25kaXRpb25dO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gT1BUSU9OUy5pbmRleE9mKGNvbmRpdGlvbi5jb25kaXRpb24pO1xuXG4gICAgaWYgKCFDb21wKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudW5zdXBwb3J0ZWRfY29uZGl0aW9uXCIsXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgY29uZGl0aW9uLmNvbmRpdGlvblxuICAgICAgICAgICl9XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gY29uZGl0aW9uPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBDb25kaXRpb25FZGl0IGZyb20gXCIuL2NvbmRpdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvblJvdyBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25EZWxldGUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKFxuICAgICAgY29uZmlybShcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbWVudVwiPlxuICAgICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvblRhcD17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb25kaXRpb25FZGl0IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm1cIjtcblxuaW1wb3J0IHtcbiAgZmV0Y2hEZXZpY2VDb25kaXRpb25DYXBhYmlsaXRpZXMsXG4gIGRldmljZUF1dG9tYXRpb25zRXF1YWwsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcHJpdmF0ZSBfb3JpZ0NvbmRpdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGV2aWNlUGlja2VkID0gdGhpcy5kZXZpY2VQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldmljZUNvbmRpdGlvblBpY2tlZCA9IHRoaXMuZGV2aWNlQ29uZGl0aW9uUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkID0gdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGV2aWNlX2lkOiB1bmRlZmluZWQsIGNhcGFiaWxpdGllczogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwdWJsaWMgZGV2aWNlUGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRldmljZV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcHVibGljIGRldmljZUNvbmRpdGlvblBpY2tlZChldikge1xuICAgIGxldCBjb25kaXRpb24gPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fb3JpZ0NvbmRpdGlvbiAmJlxuICAgICAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCh0aGlzLl9vcmlnQ29uZGl0aW9uLCBjb25kaXRpb24pXG4gICAgKSB7XG4gICAgICBjb25kaXRpb24gPSB0aGlzLl9vcmlnQ29uZGl0aW9uO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGNvbmRpdGlvbik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcyB9LCB7IGRldmljZV9pZCwgY2FwYWJpbGl0aWVzIH0pIHtcbiAgICBpZiAoZGV2aWNlX2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRldmljZV9pZCA9IGNvbmRpdGlvbi5kZXZpY2VfaWQ7XG4gICAgfVxuICAgIGNvbnN0IGV4dHJhRmllbGRzRGF0YSA9XG4gICAgICBjYXBhYmlsaXRpZXMgJiYgY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc1xuICAgICAgICA/IGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbaXRlbS5uYW1lXTogdGhpcy5wcm9wcy5jb25kaXRpb25baXRlbS5uYW1lXSB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkRldmljZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtjb25kaXRpb259XG4gICAgICAgICAgZGV2aWNlSWQ9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VDb25kaXRpb25QaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIHtleHRyYUZpZWxkc0RhdGEgJiYgKFxuICAgICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgICBkYXRhPXtPYmplY3QuYXNzaWduKHt9LCAuLi5leHRyYUZpZWxkc0RhdGEpfVxuICAgICAgICAgICAgc2NoZW1hPXt0aGlzLnN0YXRlLmNhcGFiaWxpdGllcy5leHRyYV9maWVsZHN9XG4gICAgICAgICAgICBjb21wdXRlTGFiZWw9e3RoaXMuX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2soaGFzcy5sb2NhbGl6ZSl9XG4gICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLl9vcmlnQ29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb247XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWRldmljZUF1dG9tYXRpb25zRXF1YWwocHJldlByb3BzLmNvbmRpdGlvbiwgdGhpcy5wcm9wcy5jb25kaXRpb24pKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRDYXBhYmlsaXRpZXMoKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb247XG5cbiAgICBjb25zdCBjYXBhYmlsaXRpZXMgPSBjb25kaXRpb24uZG9tYWluXG4gICAgICA/IGF3YWl0IGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzKHRoaXMucHJvcHMuaGFzcywgY29uZGl0aW9uKVxuICAgICAgOiBudWxsO1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBjYXBhYmlsaXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF9leHRyYUZpZWxkc0NoYW5nZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgLi4uZXYuZGV0YWlsLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhsb2NhbGl6ZSkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3IgaGEtZm9ybSB0byBjYWxjdWxhdGUgbGFiZWxzIHBlciBzY2hlbWEgb2JqZWN0XG4gICAgcmV0dXJuIChzY2hlbWEpID0+XG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb24udHlwZS5kZXZpY2UuZXh0cmFfZmllbGRzLiR7c2NoZW1hLm5hbWV9YFxuICAgICAgKSB8fCBzY2hlbWEubmFtZTtcbiAgfVxufVxuXG4oRGV2aWNlQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZGV2aWNlX2lkOiBcIlwiLFxuICBkb21haW46IFwiXCIsXG4gIGVudGl0eV9pZDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBDb25kaXRpb25Sb3cgZnJvbSBcIi4vY29uZGl0aW9uX3Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFkZENvbmRpdGlvbiA9IHRoaXMuYWRkQ29uZGl0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25kaXRpb25DaGFuZ2VkID0gdGhpcy5jb25kaXRpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ29uZGl0aW9uKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMucHJvcHMuY29uZGl0aW9uLmNvbmNhdCh7XG4gICAgICBjb25kaXRpb246IFwic3RhdGVcIixcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY29uZGl0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25kaXRpb25DaGFuZ2VkKGluZGV4LCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMucHJvcHMuY29uZGl0aW9uLmNvbmNhdCgpO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICBjb25kaXRpb24uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZGl0aW9uW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY29uZGl0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInRyaWdnZXJzXCI+XG4gICAgICAgIHtjb25kaXRpb24ubWFwKChjbmQsIGlkeCkgPT4gKFxuICAgICAgICAgIDxDb25kaXRpb25Sb3dcbiAgICAgICAgICAgIGluZGV4PXtpZHh9XG4gICAgICAgICAgICBjb25kaXRpb249e2NuZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvbmRpdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRDb25kaXRpb259PlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5hZGRcIil9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IENvbmRpdGlvbiBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpY2FsQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHByaXZhdGUgX21vdW50ZWQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbmRpdGlvbkNoYW5nZWQgPSB0aGlzLmNvbmRpdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25kaXRpb25DaGFuZ2VkKGNvbmRpdGlvbnMpIHtcbiAgICBpZiAodGhpcy5fbW91bnRlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgICBjb25kaXRpb25zLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLl9tb3VudGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9tb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29uZGl0aW9uXG4gICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb24uY29uZGl0aW9ucyB8fCBbXX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jb25kaXRpb25DaGFuZ2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oTG9naWNhbENvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGNvbmRpdGlvbnM6IFt7IGNvbmRpdGlvbjogXCJzdGF0ZVwiIH1dLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljU3RhdGVDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSwgZW50aXR5X2lkLCBiZWxvdywgYWJvdmUgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5udW1lcmljX3N0YXRlLmFib3ZlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhYm92ZVwiXG4gICAgICAgICAgdmFsdWU9e2Fib3ZlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLm51bWVyaWNfc3RhdGUuYmVsb3dcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlbG93XCJcbiAgICAgICAgICB2YWx1ZT17YmVsb3d9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUubnVtZXJpY19zdGF0ZS52YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZV90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKE51bWVyaWNTdGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBlbnRpdHlfaWQsIHN0YXRlIH0gPSBjb25kaXRpb247XG4gICAgY29uc3QgY25kRm9yID0gY29uZGl0aW9uLmZvcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdGF0ZS5zdGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIHtjbmRGb3IgJiYgPHByZT5Gb3I6IHtKU09OLnN0cmluZ2lmeShjbmRGb3IsIG51bGwsIDIpfTwvcHJlPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFN0YXRlQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxuICBzdGF0ZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bkNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBwcml2YXRlIGFmdGVyUGlja2VkOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIHByaXZhdGUgYmVmb3JlUGlja2VkOiAob2JqOiBhbnkpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gICAgdGhpcy5hZnRlclBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMsIFwiYWZ0ZXJcIik7XG4gICAgdGhpcy5iZWZvcmVQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzLCBcImJlZm9yZVwiKTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGtleSwgZXYpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB7IC4uLnRoaXMucHJvcHMuY29uZGl0aW9uIH07XG5cbiAgICBpZiAoZXYudGFyZ2V0LnNlbGVjdGVkKSB7XG4gICAgICBjb25kaXRpb25ba2V5XSA9IGV2LnRhcmdldC5zZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNvbmRpdGlvbltrZXldO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgY29uZGl0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGxvY2FsaXplIH0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICBjb25zdCB7IGFmdGVyLCBhZnRlcl9vZmZzZXQsIGJlZm9yZSwgYmVmb3JlX29mZnNldCB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaWQ9XCJiZWZvcmVsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uYmVmb3JlXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBhbGxvdy1lbXB0eS1zZWxlY3Rpb25cbiAgICAgICAgICBzZWxlY3RlZD17YmVmb3JlfVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImJlZm9yZWxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMuYmVmb3JlUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3VucmlzZVwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnJpc2VcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5zZXRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5zZXRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmJlZm9yZV9vZmZzZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlZm9yZV9vZmZzZXRcIlxuICAgICAgICAgIHZhbHVlPXtiZWZvcmVfb2Zmc2V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17YmVmb3JlID09PSB1bmRlZmluZWR9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGlkPVwiYWZ0ZXJsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uYWZ0ZXJcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIGFsbG93LWVtcHR5LXNlbGVjdGlvblxuICAgICAgICAgIHNlbGVjdGVkPXthZnRlcn1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhZnRlcmxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMuYWZ0ZXJQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5yaXNlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3VucmlzZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnNldFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnNldFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uYWZ0ZXJfb2Zmc2V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhZnRlcl9vZmZzZXRcIlxuICAgICAgICAgIHZhbHVlPXthZnRlcl9vZmZzZXR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXthZnRlciA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oU3VuQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHt9O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVDb25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUudGVtcGxhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihUZW1wbGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHZhbHVlX3RlbXBsYXRlOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGFmdGVyLCBiZWZvcmUgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRpbWUuYWZ0ZXJcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFmdGVyXCJcbiAgICAgICAgICB2YWx1ZT17YWZ0ZXJ9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUudGltZS5iZWZvcmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlZm9yZVwiXG4gICAgICAgICAgdmFsdWU9e2JlZm9yZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihUaW1lQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHt9O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IHsgaGFzTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9oYXNfbG9jYXRpb25cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmZ1bmN0aW9uIHpvbmVBbmRMb2NhdGlvbkZpbHRlcihzdGF0ZU9iaikge1xuICByZXR1cm4gaGFzTG9jYXRpb24oc3RhdGVPYmopICYmIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgIT09IFwiem9uZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab25lQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9uZVBpY2tlZCA9IHRoaXMuem9uZVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB6b25lUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgIHpvbmU6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBlbnRpdHlfaWQsIHpvbmUgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuem9uZS5lbnRpdHlcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAgIGVudGl0eUZpbHRlcj17em9uZUFuZExvY2F0aW9uRmlsdGVyfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS56b25lLnpvbmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e3pvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuem9uZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgaW5jbHVkZURvbWFpbnM9e1tcInpvbmVcIl19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihab25lQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxuICB6b25lOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcblxuaW1wb3J0IENhbGxTZXJ2aWNlQWN0aW9uIGZyb20gXCIuL2NhbGxfc2VydmljZVwiO1xuaW1wb3J0IENvbmRpdGlvbkFjdGlvbiBmcm9tIFwiLi9jb25kaXRpb25cIjtcbmltcG9ydCBEZWxheUFjdGlvbiBmcm9tIFwiLi9kZWxheVwiO1xuaW1wb3J0IERldmljZUFjdGlvbiBmcm9tIFwiLi9kZXZpY2VcIjtcbmltcG9ydCBFdmVudEFjdGlvbiBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IFNjZW5lQWN0aW9uIGZyb20gXCIuL3NjZW5lXCI7XG5pbXBvcnQgV2FpdEFjdGlvbiBmcm9tIFwiLi93YWl0XCI7XG5cbmNvbnN0IFRZUEVTID0ge1xuICBzZXJ2aWNlOiBDYWxsU2VydmljZUFjdGlvbixcbiAgZGVsYXk6IERlbGF5QWN0aW9uLFxuICB3YWl0X3RlbXBsYXRlOiBXYWl0QWN0aW9uLFxuICBjb25kaXRpb246IENvbmRpdGlvbkFjdGlvbixcbiAgZXZlbnQ6IEV2ZW50QWN0aW9uLFxuICBkZXZpY2VfaWQ6IERldmljZUFjdGlvbixcbiAgc2NlbmU6IFNjZW5lQWN0aW9uLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmZ1bmN0aW9uIGdldFR5cGUoYWN0aW9uKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhUWVBFUyk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoa2V5c1tpXSBpbiBhY3Rpb24pIHtcbiAgICAgIHJldHVybiBrZXlzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlQ2hhbmdlZCA9IHRoaXMudHlwZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB0eXBlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1R5cGUgPSBldi50YXJnZXQuc2VsZWN0ZWRJdGVtLmF0dHJpYnV0ZXMuYWN0aW9uLnZhbHVlO1xuICAgIGNvbnN0IG9sZFR5cGUgPSBnZXRUeXBlKHRoaXMucHJvcHMuYWN0aW9uKTtcblxuICAgIGlmIChvbGRUeXBlICE9PSBuZXdUeXBlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIFRZUEVTW25ld1R5cGVdLmRlZmF1bHRDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBpbmRleCwgYWN0aW9uLCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGFjdGlvbik7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gICAgY29uc3QgQ29tcCA9IHR5cGUgJiYgVFlQRVNbdHlwZV07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHNlbGVjdGVkID0gT1BUSU9OUy5pbmRleE9mKHR5cGUpO1xuXG4gICAgaWYgKCFDb21wKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudW5zdXBwb3J0ZWRfYWN0aW9uXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICl9XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoYWN0aW9uLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGVfc2VsZWN0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBvbmlyb24tc2VsZWN0PXt0aGlzLnR5cGVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtPUFRJT05TLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGFjdGlvbj17b3B0fT5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS4ke29wdH0ubGFiZWxgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgICAgIDxDb21wXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQWN0aW9uRWRpdCBmcm9tIFwiLi9hY3Rpb25fZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uRGVsZXRlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChcbiAgICAgIGNvbmZpcm0oXG4gICAgICAgIHRoaXMucHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5kZWxldGVfY29uZmlybVwiXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1lbnVcIj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5kdXBsaWNhdGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb25UYXA9e3RoaXMub25EZWxldGV9PlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QWN0aW9uRWRpdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcblxuaW1wb3J0IFlBTUxUZXh0QXJlYSBmcm9tIFwiLi4veWFtbF90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsU2VydmljZUFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2VydmljZUNoYW5nZWQgPSB0aGlzLnNlcnZpY2VDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQgPSB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHNlcnZpY2VDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIHNlcnZpY2U6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJ2aWNlRGF0YUNoYW5nZWQoZGF0YSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgeyAuLi50aGlzLnByb3BzLmFjdGlvbiwgZGF0YSB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHNlcnZpY2UsIGRhdGEgfSA9IGFjdGlvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtc2VydmljZS1waWNrZXJcbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIHZhbHVlPXtzZXJ2aWNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlcnZpY2VDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgICA8WUFNTFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLnNlcnZpY2Uuc2VydmljZV9kYXRhXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKENhbGxTZXJ2aWNlQWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgYWxpYXM6IFwiXCIsXG4gIHNlcnZpY2U6IFwiXCIsXG4gIGRhdGE6IHt9LFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFN0YXRlQ29uZGl0aW9uIGZyb20gXCIuLi9jb25kaXRpb24vc3RhdGVcIjtcbmltcG9ydCBDb25kaXRpb25FZGl0IGZyb20gXCIuLi9jb25kaXRpb24vY29uZGl0aW9uX2VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgaW5kZXgsIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25kaXRpb25FZGl0XG4gICAgICAgIGNvbmRpdGlvbj17YWN0aW9ufVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbihDb25kaXRpb25BY3Rpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBjb25kaXRpb246IFwic3RhdGVcIixcbiAgLi4uKFN0YXRlQ29uZGl0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF5QWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiYWN0aW9uXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZGVsYXkgfSA9IGFjdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLmRlbGF5LmRlbGF5XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJkZWxheVwiXG4gICAgICAgICAgdmFsdWU9e2RlbGF5fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKERlbGF5QWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZGVsYXk6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtYWN0aW9uLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtL2hhLWZvcm1cIjtcblxuaW1wb3J0IHtcbiAgZmV0Y2hEZXZpY2VBY3Rpb25DYXBhYmlsaXRpZXMsXG4gIGRldmljZUF1dG9tYXRpb25zRXF1YWwsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBEZXZpY2VBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlQWN0aW9uRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50PFxuICB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBhY3Rpb246IERldmljZUFjdGlvbjtcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50O1xuICAgIG9uQ2hhbmdlKGluZGV4OiBudW1iZXIsIGFjdGlvbjogRGV2aWNlQWN0aW9uKTtcbiAgfSxcbiAge1xuICAgIGRldmljZV9pZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGNhcGFiaWxpdGllczogYW55IHwgdW5kZWZpbmVkO1xuICB9XG4+IHtcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29uZmlnOiBEZXZpY2VBY3Rpb24gPSB7XG4gICAgZGV2aWNlX2lkOiBcIlwiLFxuICAgIGRvbWFpbjogXCJcIixcbiAgICBlbnRpdHlfaWQ6IFwiXCIsXG4gIH07XG5cbiAgcHJpdmF0ZSBfb3JpZ0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGV2aWNlUGlja2VkID0gdGhpcy5kZXZpY2VQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldmljZUFjdGlvblBpY2tlZCA9IHRoaXMuZGV2aWNlQWN0aW9uUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkID0gdGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGV2aWNlX2lkOiB1bmRlZmluZWQsIGNhcGFiaWxpdGllczogdW5kZWZpbmVkIH07XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBoYXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRldmljZUlkID0gdGhpcy5zdGF0ZS5kZXZpY2VfaWQgfHwgYWN0aW9uLmRldmljZV9pZDtcbiAgICBjb25zdCBjYXBhYmlsaXRpZXMgPSB0aGlzLnN0YXRlLmNhcGFiaWxpdGllcztcbiAgICBjb25zdCBleHRyYUZpZWxkc0RhdGEgPVxuICAgICAgY2FwYWJpbGl0aWVzICYmIGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHNcbiAgICAgICAgPyBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2l0ZW0ubmFtZV06IHRoaXMucHJvcHMuYWN0aW9uW2l0ZW0ubmFtZV0gfTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtkZXZpY2VJZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkRldmljZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1kZXZpY2UtYWN0aW9uLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXthY3Rpb259XG4gICAgICAgICAgZGV2aWNlSWQ9e2RldmljZUlkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRldmljZUFjdGlvblBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxhYmVsPVwiQWN0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgICAge2V4dHJhRmllbGRzRGF0YSAmJiAoXG4gICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgIGRhdGE9e09iamVjdC5hc3NpZ24oe30sIC4uLmV4dHJhRmllbGRzRGF0YSl9XG4gICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZH1cbiAgICAgICAgICAgIHNjaGVtYT17dGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzfVxuICAgICAgICAgICAgY29tcHV0ZUxhYmVsPXt0aGlzLl9leHRyYUZpZWxkc0NvbXB1dGVMYWJlbENhbGxiYWNrKGhhc3MubG9jYWxpemUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXMpIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb24pIHtcbiAgICAgIHRoaXMuX29yaWdBY3Rpb24gPSB0aGlzLnByb3BzLmFjdGlvbjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghZGV2aWNlQXV0b21hdGlvbnNFcXVhbChwcmV2UHJvcHMuYWN0aW9uLCB0aGlzLnByb3BzLmFjdGlvbikpIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGV2aWNlUGlja2VkKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRldmljZV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXZpY2VBY3Rpb25QaWNrZWQoZXYpIHtcbiAgICBsZXQgZGV2aWNlQWN0aW9uID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX29yaWdBY3Rpb24gJiZcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwodGhpcy5fb3JpZ0FjdGlvbiwgZGV2aWNlQWN0aW9uKVxuICAgICkge1xuICAgICAgZGV2aWNlQWN0aW9uID0gdGhpcy5fb3JpZ0FjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBkZXZpY2VBY3Rpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucHJvcHMuYWN0aW9uO1xuXG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gYWN0aW9uLmRvbWFpblxuICAgICAgPyBhd2FpdCBmZXRjaERldmljZUFjdGlvbkNhcGFiaWxpdGllcyh0aGlzLnByb3BzLmhhc3MsIGFjdGlvbilcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2FwYWJpbGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIC4uLmV2LmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUpIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLmRldmljZV9pZC5leHRyYV9maWVsZHMuJHtzY2hlbWEubmFtZX1gXG4gICAgICApIHx8IHNjaGVtYS5uYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgWUFNTFRleHRBcmVhIGZyb20gXCIuLi95YW1sX3RleHRhcmVhXCI7XG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBFdmVudEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3NjcmlwdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbmRleDogbnVtYmVyO1xuICBhY3Rpb246IEV2ZW50QWN0aW9uO1xuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jO1xuICBvbkNoYW5nZTogKGluZGV4OiBudW1iZXIsIGFjdGlvbjogRXZlbnRBY3Rpb24pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QWN0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdENvbmZpZygpOiBFdmVudEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50OiBcIlwiLFxuICAgICAgZXZlbnRfZGF0YToge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiYWN0aW9uXCIpO1xuICAgIHRoaXMuc2VydmljZURhdGFDaGFuZ2VkID0gdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aW9uOiB7IGV2ZW50LCBldmVudF9kYXRhIH0sXG4gICAgICBsb2NhbGl6ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLmV2ZW50LmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJldmVudFwiXG4gICAgICAgICAgdmFsdWU9e2V2ZW50fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFlBTUxUZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5ldmVudC5zZXJ2aWNlX2RhdGFcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e2V2ZW50X2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VydmljZURhdGFDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VydmljZURhdGFDaGFuZ2VkKGV2ZW50RGF0YSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICBldmVudF9kYXRhOiBldmVudERhdGEsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IEFjdGlvblJvdyBmcm9tIFwiLi9hY3Rpb25fcm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYWRkQWN0aW9uID0gdGhpcy5hZGRBY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFjdGlvbkNoYW5nZWQgPSB0aGlzLmFjdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wcm9wcy5zY3JpcHQuY29uY2F0KHtcbiAgICAgIHNlcnZpY2U6IFwiXCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNjcmlwdCk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uQ2hhbmdlZChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnByb3BzLnNjcmlwdC5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgc2NyaXB0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdFtpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNjcmlwdCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgc2NyaXB0LCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JpcHRcIj5cbiAgICAgICAge3NjcmlwdC5tYXAoKGFjdCwgaWR4KSA9PiAoXG4gICAgICAgICAgPEFjdGlvblJvd1xuICAgICAgICAgICAgaW5kZXg9e2lkeH1cbiAgICAgICAgICAgIGFjdGlvbj17YWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMgYWRkLWNhcmRcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uVGFwPXt0aGlzLmFkZEFjdGlvbn0+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZUFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmVDaGFuZ2VkID0gdGhpcy5zY2VuZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBzY2VuZUNoYW5nZWQoZXY6IGFueSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICBzY2VuZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgaGFzcyB9KSB7XG4gICAgY29uc3QgeyBzY2VuZSB9ID0gYWN0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e3NjZW5lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNjZW5lQ2hhbmdlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGluY2x1ZGVEb21haW5zPXtbXCJzY2VuZVwiXX1cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oU2NlbmVBY3Rpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBzY2VuZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0QWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiYWN0aW9uXCIpO1xuICAgIHRoaXMub25UZW1wbGF0ZUNoYW5nZSA9IHRoaXMub25UZW1wbGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gR2V0cyBmaXJlZCBvbiBtb3VudC4gSWYgZW1wdHksIG9uQ2hhbmdlRXZlbnQgcmVtb3ZlcyBhdHRyaWJ1dGUuXG4gIC8vIFdpdGhvdXQgdGhlIGF0dHJpYnV0ZSB0aGlzIGFjdGlvbiBpcyBubyBsb25nZXIgbWF0Y2hlZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgcHVibGljIG9uVGVtcGxhdGVDaGFuZ2UoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgW2V2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGFjdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgd2FpdF90ZW1wbGF0ZSwgdGltZW91dCB9ID0gYWN0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUud2FpdF90ZW1wbGF0ZS53YWl0X3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ3YWl0X3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17d2FpdF90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25UZW1wbGF0ZUNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUud2FpdF90ZW1wbGF0ZS50aW1lb3V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0aW1lb3V0XCJcbiAgICAgICAgICB2YWx1ZT17dGltZW91dH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihXYWl0QWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgd2FpdF90ZW1wbGF0ZTogXCJcIixcbiAgdGltZW91dDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBzYWZlRHVtcCwgc2FmZUxvYWQgfSBmcm9tIFwianMteWFtbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuXG5jb25zdCBpc0VtcHR5ID0gKG9iajogb2JqZWN0KSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlBTUxUZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9XG4gICAgICAgIHByb3BzLnZhbHVlICYmICFpc0VtcHR5KHByb3BzLnZhbHVlKVxuICAgICAgICAgID8gc2FmZUR1bXAocHJvcHMudmFsdWUpXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgVGhlcmUgd2FzIGFuIGVycm9yIGNvbnZlcnRpbmcgdG8gWUFNTDogJHtlcnJ9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzdmFsaWQ6IHRydWUsXG4gICAgICB2YWx1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldikge1xuICAgIGNvbnN0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGxldCBwYXJzZWQ7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWQgPSBzYWZlTG9hZCh2YWx1ZSk7XG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIEludmFsaWQgWUFNTFxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWUsXG4gICAgICBpc1ZhbGlkLFxuICAgIH0pO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHBhcnNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGxhYmVsIH0sIHsgdmFsdWUsIGlzVmFsaWQgfSkge1xuICAgIGNvbnN0IHN0eWxlOiBhbnkgPSB7XG4gICAgICBtaW5XaWR0aDogMzAwLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPntsYWJlbH08L3A+XG4gICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGVycm9yPXtpc1ZhbGlkID09PSBmYWxzZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUxBO0FBVUE7QUFDQTtBQWZBO0FBQ0E7O0FBREE7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7OztBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQVdBO0FBQ0E7QUFhQTtBQVNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFHQTs7OztBQUlBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBR0E7QUFDQTs7QUFFQTs7QUFOQTs7O0FBNUJBO0FBeUNBO0FBM0dBO0FBQUE7QUFBQTtBQUFBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNIQTtBQUFBO0FBQUE7QUFBQTtBQThIQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOUlBO0FBQUE7QUFBQTtBQUFBO0FBaUpBO0FBQ0E7QUFsSkE7QUFBQTtBQUFBO0FBQUE7QUFxSkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErSkE7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBMUtBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQWhCQTtBQUNBOztBQUhBOzs7Ozs7QUFHQTs7Ozs7Ozs7QUFDQTs7Ozs7QUFKQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpHQTtBQUNBO0FBMEdBOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBa0JBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaERBO0FBQ0E7QUFpREE7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBM0JBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQVNBO0FBRUE7QUFJQTtBQUdBO0FBU0E7QUFFQTtBQUlBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7O0FDbEpBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBcEVBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFZQTtBQUNBO0FBdERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQXZHQTtBQXlHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQWxEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBckNBO0FBdUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQXZEQTtBQXlEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFsR0E7QUFvR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQWhDQTtBQWtDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFsREE7QUFvREE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQW5FQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFvQkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUE1R0E7QUFDQTtBQVpBO0FBYUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFqREE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFsREE7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBM0NBO0FBNkNBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBbEVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=