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
var hasLocation = function hasLocation(stateObj) {
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
  var origData = this.props[prop];

  if (ev.target.value === origData[ev.target.name]) {
    return;
  }

  var data = Object.assign({}, origData);

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
  function () {
    return null;
  }, mountEl);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var HaDeviceActionPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-action-picker")], function (_initialize, _HaDeviceAutomationPi) {
  var HaDeviceActionPicker =
  /*#__PURE__*/
  function (_HaDeviceAutomationPi2) {
    _inherits(HaDeviceActionPicker, _HaDeviceAutomationPi2);

    function HaDeviceActionPicker() {
      var _this;

      _classCallCheck(this, HaDeviceActionPicker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HaDeviceActionPicker).call(this, _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationAction"], _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["fetchDeviceActions"], function (deviceId) {
        return {
          device_id: deviceId || "",
          domain: "",
          entity_id: ""
        };
      }));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaDeviceActionPicker;
  }(_HaDeviceAutomationPi);

  return {
    F: HaDeviceActionPicker,
    d: [{
      kind: "field",
      key: "NO_AUTOMATION_TEXT",
      value: function value() {
        return "No actions";
      }
    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",
      value: function value() {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <paper-item\n                key=", "\n                .automation=", "\n              >\n                ", "\n              </paper-item>\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-paper-dropdown-menu\n        .label=", "\n        .value=", "\n        ?disabled=", "\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"key\"\n          @iron-select=", "\n        >\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          <paper-item\n            key=", "\n            .automation=", "\n            hidden\n          >\n            ", "\n          </paper-item>\n          ", "\n        </paper-listbox>\n      </ha-paper-dropdown-menu>\n    "]);

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









var NO_AUTOMATION_KEY = "NO_AUTOMATION";
var UNKNOWN_AUTOMATION_KEY = "UNKNOWN_AUTOMATION";
var HaDeviceAutomationPicker = _decorate(null, function (_initialize, _LitElement) {
  var HaDeviceAutomationPicker =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaDeviceAutomationPicker, _LitElement2);

    // Trigger an empty render so we start with a clean DOM.
    // paper-listbox does not like changing things around.
    function HaDeviceAutomationPicker(localizeDeviceAutomation, fetchDeviceAutomations, createNoAutomation) {
      var _this;

      _classCallCheck(this, HaDeviceAutomationPicker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HaDeviceAutomationPicker).call(this));

      _initialize(_assertThisInitialized(_this));

      _this._localizeDeviceAutomation = localizeDeviceAutomation;
      _this._fetchDeviceAutomations = fetchDeviceAutomations;
      _this._createNoAutomation = createNoAutomation;
      return _this;
    }

    return HaDeviceAutomationPicker;
  }(_LitElement);

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
      value: function value() {
        return "No automations";
      }
    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",
      value: function value() {
        return "Unknown automation";
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_automations",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_renderEmpty",
      value: function value() {
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
        var _this2 = this;

        if (!this.value || Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(this._createNoAutomation(this.deviceId), this.value)) {
          return NO_AUTOMATION_KEY;
        }

        var idx = this._automations.findIndex(function (automation) {
          return Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(automation, _this2.value);
        });

        if (idx === -1) {
          return UNKNOWN_AUTOMATION_KEY;
        }

        return "".concat(this._automations[idx].device_id, "_").concat(idx);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this3 = this;

        if (this._renderEmpty) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this.label, this.value ? this._localizeDeviceAutomation(this.hass, this.value) : "", this._automations.length === 0, this._key, this._automationChanged, NO_AUTOMATION_KEY, this._createNoAutomation(this.deviceId), this.NO_AUTOMATION_TEXT, UNKNOWN_AUTOMATION_KEY, this.value, this.UNKNOWN_AUTOMATION_TEXT, this._automations.map(function (automation, idx) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), "".concat(_this3.deviceId, "_").concat(idx), automation, _this3._localizeDeviceAutomation(_this3.hass, automation));
        }));
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
          var listbox = this.shadowRoot.querySelector("paper-listbox");

          if (listbox) {
            listbox._selectSelected(this._key);
          }
        }
      }
    }, {
      kind: "method",
      key: "_updateDeviceInfo",
      value: function _updateDeviceInfo() {
        return regeneratorRuntime.async(function _updateDeviceInfo$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.deviceId) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return regeneratorRuntime.awrap(this._fetchDeviceAutomations(this.hass, this.deviceId));

              case 3:
                _context.t0 = _context.sent;
                _context.next = 7;
                break;

              case 6:
                _context.t0 = // No device, clear the list of automations
                [];

              case 7:
                this._automations = _context.t0;

                // If there is no value, or if we have changed the device ID, reset the value.
                if (!this.value || this.value.device_id !== this.deviceId) {
                  this._setValue(this._automations.length ? this._automations[0] : this._createNoAutomation(this.deviceId));
                }

                this._renderEmpty = true;
                _context.next = 12;
                return regeneratorRuntime.awrap(this.updateComplete);

              case 12:
                this._renderEmpty = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
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
        var _this4 = this;

        if (this.value && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_6__["deviceAutomationsEqual"])(automation, this.value)) {
          return;
        }

        this.value = automation;
        setTimeout(function () {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(_this4, "change");
        }, 0);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject4());
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var HaDeviceConditionPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-device-condition-picker")], function (_initialize, _HaDeviceAutomationPi) {
  var HaDeviceConditionPicker =
  /*#__PURE__*/
  function (_HaDeviceAutomationPi2) {
    _inherits(HaDeviceConditionPicker, _HaDeviceAutomationPi2);

    function HaDeviceConditionPicker() {
      var _this;

      _classCallCheck(this, HaDeviceConditionPicker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HaDeviceConditionPicker).call(this, _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationCondition"], _data_device_automation__WEBPACK_IMPORTED_MODULE_1__["fetchDeviceConditions"], function (deviceId) {
        return {
          device_id: deviceId || "",
          condition: "device",
          domain: "",
          entity_id: ""
        };
      }));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaDeviceConditionPicker;
  }(_HaDeviceAutomationPi);

  return {
    F: HaDeviceConditionPicker,
    d: [{
      kind: "field",
      key: "NO_AUTOMATION_TEXT",
      value: function value() {
        return "No conditions";
      }
    }, {
      kind: "field",
      key: "UNKNOWN_AUTOMATION_TEXT",
      value: function value() {
        return "Unknown condition";
      }
    }]
  };
}, _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_3__["HaDeviceAutomationPicker"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

var HaPaperDropdownClass =
/*#__PURE__*/
function (_paperDropdownClass) {
  _inherits(HaPaperDropdownClass, _paperDropdownClass);

  function HaPaperDropdownClass() {
    _classCallCheck(this, HaPaperDropdownClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDropdownClass).apply(this, arguments));
  }

  _createClass(HaPaperDropdownClass, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaPaperDropdownClass.prototype), "ready", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        if (window.getComputedStyle(_this).direction === "rtl") {
          _this.style.textAlign = "right";
        }
      }, 100);
    }
  }]);

  return HaPaperDropdownClass;
}(paperDropdownClass);
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <paper-textarea\n        label=\"[[label]]\"\n        placeholder=\"[[placeholder]]\"\n        value=\"{{value}}\"\n      ></paper-textarea>\n    "]);

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
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/




var HaTextarea =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaTextarea, _PolymerElement);

  function HaTextarea() {
    _classCallCheck(this, HaTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaTextarea).apply(this, arguments));
  }

  _createClass(HaTextarea, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaTextarea;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var fetchDeviceActions = function fetchDeviceActions(hass, deviceId) {
  return hass.callWS({
    type: "device_automation/action/list",
    device_id: deviceId
  });
};
var fetchDeviceConditions = function fetchDeviceConditions(hass, deviceId) {
  return hass.callWS({
    type: "device_automation/condition/list",
    device_id: deviceId
  });
};
var fetchDeviceTriggers = function fetchDeviceTriggers(hass, deviceId) {
  return hass.callWS({
    type: "device_automation/trigger/list",
    device_id: deviceId
  });
};
var fetchDeviceActionCapabilities = function fetchDeviceActionCapabilities(hass, action) {
  return hass.callWS({
    type: "device_automation/action/capabilities",
    action: action
  });
};
var fetchDeviceConditionCapabilities = function fetchDeviceConditionCapabilities(hass, condition) {
  return hass.callWS({
    type: "device_automation/condition/capabilities",
    condition: condition
  });
};
var fetchDeviceTriggerCapabilities = function fetchDeviceTriggerCapabilities(hass, trigger) {
  return hass.callWS({
    type: "device_automation/trigger/capabilities",
    trigger: trigger
  });
};
var whitelist = ["above", "below", "code", "for"];
var deviceAutomationsEqual = function deviceAutomationsEqual(a, b) {
  if (_typeof(a) !== _typeof(b)) {
    return false;
  }

  for (var property in a) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  for (var _property in b) {
    if (whitelist.includes(_property)) {
      continue;
    }

    if (!Object.is(a[_property], b[_property])) {
      return false;
    }
  }

  return true;
};
var localizeDeviceAutomationAction = function localizeDeviceAutomationAction(hass, action) {
  var state = action.entity_id ? hass.states[action.entity_id] : undefined;
  return hass.localize("component.".concat(action.domain, ".device_automation.action_type.").concat(action.type), "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component.".concat(action.domain, ".device_automation.action_subtype.").concat(action.subtype)));
};
var localizeDeviceAutomationCondition = function localizeDeviceAutomationCondition(hass, condition) {
  var state = condition.entity_id ? hass.states[condition.entity_id] : undefined;
  return hass.localize("component.".concat(condition.domain, ".device_automation.condition_type.").concat(condition.type), "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component.".concat(condition.domain, ".device_automation.condition_subtype.").concat(condition.subtype)));
};
var localizeDeviceAutomationTrigger = function localizeDeviceAutomationTrigger(hass, trigger) {
  var state = trigger.entity_id ? hass.states[trigger.entity_id] : undefined;
  return hass.localize("component.".concat(trigger.domain, ".device_automation.trigger_type.").concat(trigger.type), "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : "<unknown>", "subtype", hass.localize("component.".concat(trigger.domain, ".device_automation.trigger_subtype.").concat(trigger.subtype)));
};

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

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
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
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
      }]);

      return _class;
    }(superClass)
  );
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var TYPES = {
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
var OPTIONS = Object.keys(TYPES).sort();

var ConditionEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionEdit, _Component);

  function ConditionEdit() {
    var _this;

    _classCallCheck(this, ConditionEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionEdit).call(this));
    _this.typeChanged = _this.typeChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConditionEdit, [{
    key: "typeChanged",
    value: function typeChanged(ev) {
      var type = ev.target.selectedItem.attributes.condition.value;

      if (type !== this.props.condition.condition) {
        this.props.onChange(this.props.index, Object.assign({
          condition: type
        }, TYPES[type].defaultConfig));
      }
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var index = _ref.index,
          condition = _ref.condition,
          onChange = _ref.onChange,
          hass = _ref.hass,
          localize = _ref.localize;
      // tslint:disable-next-line: variable-name
      var Comp = TYPES[condition.condition];
      var selected = OPTIONS.indexOf(condition.condition);

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
      }, OPTIONS.map(function (opt) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
          condition: opt
        }, localize("ui.panel.config.automation.editor.conditions.type.".concat(opt, ".label")));
      }))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
        index: index,
        condition: condition,
        onChange: onChange,
        hass: hass,
        localize: localize
      }));
    }
  }]);

  return ConditionEdit;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ConditionRow =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionRow, _Component);

  function ConditionRow() {
    var _this;

    _classCallCheck(this, ConditionRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionRow).call(this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConditionRow, [{
    key: "onDelete",
    value: function onDelete() {
      // eslint-disable-next-line
      if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
        this.props.onChange(this.props.index, null);
      }
    }
  }, {
    key: "render",
    value: function render(props) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-menu"
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
  }]);

  return ConditionRow;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DeviceCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(DeviceCondition, _Component);

  function DeviceCondition() {
    var _this;

    _classCallCheck(this, DeviceCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "_origCondition", void 0);

    _this.devicePicked = _this.devicePicked.bind(_assertThisInitialized(_this));
    _this.deviceConditionPicked = _this.deviceConditionPicked.bind(_assertThisInitialized(_this));
    _this._extraFieldsChanged = _this._extraFieldsChanged.bind(_assertThisInitialized(_this));
    _this.state = {
      device_id: undefined,
      capabilities: undefined
    };
    return _this;
  }

  _createClass(DeviceCondition, [{
    key: "devicePicked",
    value: function devicePicked(ev) {
      this.setState(Object.assign({}, this.state, {
        device_id: ev.target.value
      }));
    }
  }, {
    key: "deviceConditionPicked",
    value: function deviceConditionPicked(ev) {
      var condition = ev.target.value;

      if (this._origCondition && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origCondition, condition)) {
        condition = this._origCondition;
      }

      this.props.onChange(this.props.index, condition);
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref, _ref2) {
      var _this2 = this;

      var condition = _ref.condition,
          hass = _ref.hass;
      var device_id = _ref2.device_id,
          capabilities = _ref2.capabilities;

      if (device_id === undefined) {
        device_id = condition.device_id;
      }

      var extraFieldsData = capabilities && capabilities.extra_fields ? capabilities.extra_fields.map(function (item) {
        return _defineProperty({}, item.name, _this2.props.condition[item.name]);
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
        data: Object.assign.apply(Object, [{}].concat(_toConsumableArray(extraFieldsData))),
        schema: this.state.capabilities.extra_fields,
        computeLabel: this._extraFieldsComputeLabelCallback(hass.localize),
        "onvalue-changed": this._extraFieldsChanged
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.capabilities) {
        this._getCapabilities();
      }

      if (this.props.condition) {
        this._origCondition = this.props.condition;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(prevProps.condition, this.props.condition)) {
        this._getCapabilities();
      }
    }
  }, {
    key: "_getCapabilities",
    value: function _getCapabilities() {
      var condition, capabilities;
      return regeneratorRuntime.async(function _getCapabilities$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              condition = this.props.condition;

              if (!condition.domain) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceConditionCapabilities"])(this.props.hass, condition));

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = null;

            case 8:
              capabilities = _context.t0;
              this.setState(Object.assign({}, this.state, {
                capabilities: capabilities
              }));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_extraFieldsChanged",
    value: function _extraFieldsChanged(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {}, ev.detail.value));
    }
  }, {
    key: "_extraFieldsComputeLabelCallback",
    value: function _extraFieldsComputeLabelCallback(localize) {
      // Returns a callback for ha-form to calculate labels per schema object
      return function (schema) {
        return localize("ui.panel.config.automation.editor.condition.type.device.extra_fields.".concat(schema.name)) || schema.name;
      };
    }
  }]);

  return DeviceCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Condition =
/*#__PURE__*/
function (_Component) {
  _inherits(Condition, _Component);

  function Condition() {
    var _this;

    _classCallCheck(this, Condition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Condition).call(this));
    _this.addCondition = _this.addCondition.bind(_assertThisInitialized(_this));
    _this.conditionChanged = _this.conditionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Condition, [{
    key: "addCondition",
    value: function addCondition() {
      var condition = this.props.condition.concat({
        condition: "state"
      });
      this.props.onChange(condition);
    }
  }, {
    key: "conditionChanged",
    value: function conditionChanged(index, newValue) {
      var condition = this.props.condition.concat();

      if (newValue === null) {
        condition.splice(index, 1);
      } else {
        condition[index] = newValue;
      }

      this.props.onChange(condition);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _this2 = this;

      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "triggers"
      }, condition.map(function (cnd, idx) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: idx,
          condition: cnd,
          onChange: _this2.conditionChanged,
          hass: hass,
          localize: localize
        });
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-actions add-card"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
        onTap: this.addCondition
      }, localize("ui.panel.config.automation.editor.conditions.add")))));
    }
  }]);

  return Condition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var LogicalCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(LogicalCondition, _Component);

  function LogicalCondition() {
    var _this;

    _classCallCheck(this, LogicalCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LogicalCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _this.conditionChanged = _this.conditionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LogicalCondition, [{
    key: "conditionChanged",
    value: function conditionChanged(conditions) {
      if (this._mounted) {
        this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
          conditions: conditions
        }));
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this._mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
        condition: condition.conditions || [],
        onChange: this.conditionChanged,
        hass: hass,
        localize: localize
      }));
    }
  }]);

  return LogicalCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var NumericStateCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(NumericStateCondition, _Component);

  function NumericStateCondition() {
    var _this;

    _classCallCheck(this, NumericStateCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericStateCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "condition");
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumericStateCondition, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
        entity_id: ev.target.value
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      var value_template = condition.value_template,
          entity_id = condition.entity_id,
          below = condition.below,
          above = condition.above;
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
  }]);

  return NumericStateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StateCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(StateCondition, _Component);

  function StateCondition() {
    var _this;

    _classCallCheck(this, StateCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_assertThisInitialized(_this), "condition");
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StateCondition, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
        entity_id: ev.target.value
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      var entity_id = condition.entity_id,
          state = condition.state;
      var cndFor = condition["for"];
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
  }]);

  return StateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SunCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(SunCondition, _Component);

  function SunCondition() {
    var _this;

    _classCallCheck(this, SunCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SunCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _defineProperty(_assertThisInitialized(_this), "afterPicked", void 0);

    _defineProperty(_assertThisInitialized(_this), "beforePicked", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "condition");
    _this.afterPicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this), "after");
    _this.beforePicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this), "before");
    return _this;
  }

  _createClass(SunCondition, [{
    key: "radioGroupPicked",
    value: function radioGroupPicked(key, ev) {
      var condition = Object.assign({}, this.props.condition);

      if (ev.target.selected) {
        condition[key] = ev.target.selected;
      } else {
        delete condition[key];
      }

      this.props.onChange(this.props.index, condition);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          localize = _ref.localize;

      /* eslint-disable camelcase */
      var after = condition.after,
          after_offset = condition.after_offset,
          before = condition.before,
          before_offset = condition.before_offset;
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
  }]);

  return SunCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TemplateCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(TemplateCondition, _Component);

  function TemplateCondition() {
    var _this;

    _classCallCheck(this, TemplateCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "condition");
    return _this;
  }

  _createClass(TemplateCondition, [{
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          localize = _ref.localize;

      /* eslint-disable camelcase */
      var value_template = condition.value_template;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
        label: localize("ui.panel.config.automation.editor.conditions.type.template.value_template"),
        name: "value_template",
        value: value_template,
        "onvalue-changed": this.onChange,
        dir: "ltr"
      }));
    }
  }]);

  return TemplateCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TimeCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeCondition, _Component);

  function TimeCondition() {
    var _this;

    _classCallCheck(this, TimeCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeCondition).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "condition");
    return _this;
  }
  /* eslint-disable camelcase */


  _createClass(TimeCondition, [{
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          localize = _ref.localize;
      var after = condition.after,
          before = condition.before;
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
  }]);

  return TimeCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






function zoneAndLocationFilter(stateObj) {
  return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_2__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["computeStateDomain"])(stateObj) !== "zone";
}

var ZoneCondition =
/*#__PURE__*/
function (_Component) {
  _inherits(ZoneCondition, _Component);

  function ZoneCondition() {
    var _this;

    _classCallCheck(this, ZoneCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZoneCondition).call(this));
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    _this.zonePicked = _this.zonePicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ZoneCondition, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
        entity_id: ev.target.value
      }));
    }
  }, {
    key: "zonePicked",
    value: function zonePicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.condition, {
        zone: ev.target.value
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      var entity_id = condition.entity_id,
          zone = condition.zone;
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
  }]);

  return ZoneCondition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var TYPES = {
  service: _call_service__WEBPACK_IMPORTED_MODULE_4__["default"],
  delay: _delay__WEBPACK_IMPORTED_MODULE_6__["default"],
  wait_template: _wait__WEBPACK_IMPORTED_MODULE_10__["default"],
  condition: _condition__WEBPACK_IMPORTED_MODULE_5__["default"],
  event: _event__WEBPACK_IMPORTED_MODULE_8__["default"],
  device_id: _device__WEBPACK_IMPORTED_MODULE_7__["default"],
  scene: _scene__WEBPACK_IMPORTED_MODULE_9__["default"]
};
var OPTIONS = Object.keys(TYPES).sort();

function getType(action) {
  var keys = Object.keys(TYPES); // tslint:disable-next-line: prefer-for-of

  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in action) {
      return keys[i];
    }
  }

  return null;
}

var Action =
/*#__PURE__*/
function (_Component) {
  _inherits(Action, _Component);

  function Action() {
    var _this;

    _classCallCheck(this, Action);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this));
    _this.typeChanged = _this.typeChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Action, [{
    key: "typeChanged",
    value: function typeChanged(ev) {
      var newType = ev.target.selectedItem.attributes.action.value;
      var oldType = getType(this.props.action);

      if (oldType !== newType) {
        this.props.onChange(this.props.index, TYPES[newType].defaultConfig);
      }
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var index = _ref.index,
          action = _ref.action,
          onChange = _ref.onChange,
          hass = _ref.hass,
          localize = _ref.localize;
      var type = getType(action); // tslint:disable-next-line: variable-name

      var Comp = type && TYPES[type]; // @ts-ignore

      var selected = OPTIONS.indexOf(type);

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
      }, OPTIONS.map(function (opt) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
          action: opt
        }, localize("ui.panel.config.automation.editor.actions.type.".concat(opt, ".label")));
      }))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
        index: index,
        action: action,
        onChange: onChange,
        hass: hass,
        localize: localize
      }));
    }
  }]);

  return Action;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Action =
/*#__PURE__*/
function (_Component) {
  _inherits(Action, _Component);

  function Action() {
    var _this;

    _classCallCheck(this, Action);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Action).call(this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Action, [{
    key: "onDelete",
    value: function onDelete() {
      // eslint-disable-next-line
      if (confirm(this.props.localize("ui.panel.config.automation.editor.actions.delete_confirm"))) {
        this.props.onChange(this.props.index, null);
      }
    }
  }, {
    key: "render",
    value: function render(props) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-menu"
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
  }]);

  return Action;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CallServiceAction =
/*#__PURE__*/
function (_Component) {
  _inherits(CallServiceAction, _Component);

  function CallServiceAction() {
    var _this;

    _classCallCheck(this, CallServiceAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CallServiceAction).call(this));
    _this.serviceChanged = _this.serviceChanged.bind(_assertThisInitialized(_this));
    _this.serviceDataChanged = _this.serviceDataChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CallServiceAction, [{
    key: "serviceChanged",
    value: function serviceChanged(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
        service: ev.target.value
      }));
    }
  }, {
    key: "serviceDataChanged",
    value: function serviceDataChanged(data) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
        data: data
      }));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var action = _ref.action,
          hass = _ref.hass,
          localize = _ref.localize;
      var service = action.service,
          data = action.data;
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
  }]);

  return CallServiceAction;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ConditionAction =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionAction, _Component);

  function ConditionAction() {
    _classCallCheck(this, ConditionAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConditionAction).apply(this, arguments));
  }

  _createClass(ConditionAction, [{
    key: "render",
    // eslint-disable-next-line
    value: function render(_ref) {
      var action = _ref.action,
          index = _ref.index,
          onChange = _ref.onChange,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        condition: action,
        onChange: onChange,
        index: index,
        hass: hass,
        localize: localize
      });
    }
  }]);

  return ConditionAction;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DelayAction =
/*#__PURE__*/
function (_Component) {
  _inherits(DelayAction, _Component);

  function DelayAction() {
    var _this;

    _classCallCheck(this, DelayAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DelayAction).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "action");
    return _this;
  }

  _createClass(DelayAction, [{
    key: "render",
    value: function render(_ref) {
      var action = _ref.action,
          localize = _ref.localize;
      var delay = action.delay;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.actions.type.delay.delay"),
        name: "delay",
        value: delay,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return DelayAction;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DeviceActionEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(DeviceActionEditor, _Component);

  function DeviceActionEditor() {
    var _this;

    _classCallCheck(this, DeviceActionEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceActionEditor).call(this));

    _defineProperty(_assertThisInitialized(_this), "_origAction", void 0);

    _this.devicePicked = _this.devicePicked.bind(_assertThisInitialized(_this));
    _this.deviceActionPicked = _this.deviceActionPicked.bind(_assertThisInitialized(_this));
    _this._extraFieldsChanged = _this._extraFieldsChanged.bind(_assertThisInitialized(_this));
    _this.state = {
      device_id: undefined,
      capabilities: undefined
    };
    return _this;
  }

  _createClass(DeviceActionEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          action = _this$props.action,
          hass = _this$props.hass;
      var deviceId = this.state.device_id || action.device_id;
      var capabilities = this.state.capabilities;
      var extraFieldsData = capabilities && capabilities.extra_fields ? capabilities.extra_fields.map(function (item) {
        return _defineProperty({}, item.name, _this2.props.action[item.name]);
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
        data: Object.assign.apply(Object, [{}].concat(_toConsumableArray(extraFieldsData))),
        "onvalue-changed": this._extraFieldsChanged,
        schema: this.state.capabilities.extra_fields,
        computeLabel: this._extraFieldsComputeLabelCallback(hass.localize)
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.capabilities) {
        this._getCapabilities();
      }

      if (this.props.action) {
        this._origAction = this.props.action;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(prevProps.action, this.props.action)) {
        this._getCapabilities();
      }
    }
  }, {
    key: "devicePicked",
    value: function devicePicked(ev) {
      this.setState(Object.assign({}, this.state, {
        device_id: ev.target.value
      }));
    }
  }, {
    key: "deviceActionPicked",
    value: function deviceActionPicked(ev) {
      var deviceAction = ev.target.value;

      if (this._origAction && Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["deviceAutomationsEqual"])(this._origAction, deviceAction)) {
        deviceAction = this._origAction;
      }

      this.props.onChange(this.props.index, deviceAction);
    }
  }, {
    key: "_getCapabilities",
    value: function _getCapabilities() {
      var action, capabilities;
      return regeneratorRuntime.async(function _getCapabilities$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              action = this.props.action;

              if (!action.domain) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_4__["fetchDeviceActionCapabilities"])(this.props.hass, action));

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = null;

            case 8:
              capabilities = _context.t0;
              this.setState(Object.assign({}, this.state, {
                capabilities: capabilities
              }));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "_extraFieldsChanged",
    value: function _extraFieldsChanged(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, {}, ev.detail.value));
    }
  }, {
    key: "_extraFieldsComputeLabelCallback",
    value: function _extraFieldsComputeLabelCallback(localize) {
      // Returns a callback for ha-form to calculate labels per schema object
      return function (schema) {
        return localize("ui.panel.config.automation.editor.actions.type.device_id.extra_fields.".concat(schema.name)) || schema.name;
      };
    }
  }]);

  return DeviceActionEditor;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var EventActionForm =
/*#__PURE__*/
function (_Component) {
  _inherits(EventActionForm, _Component);

  _createClass(EventActionForm, null, [{
    key: "defaultConfig",
    get: function get() {
      return {
        event: "",
        event_data: {}
      };
    }
  }]);

  function EventActionForm() {
    var _this;

    _classCallCheck(this, EventActionForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventActionForm).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_assertThisInitialized(_this), "action");
    _this.serviceDataChanged = _this.serviceDataChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EventActionForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$action = _this$props.action,
          event = _this$props$action.event,
          event_data = _this$props$action.event_data,
          localize = _this$props.localize;
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
  }, {
    key: "serviceDataChanged",
    value: function serviceDataChanged(eventData) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
        event_data: eventData
      }));
    }
  }]);

  return EventActionForm;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Script =
/*#__PURE__*/
function (_Component) {
  _inherits(Script, _Component);

  function Script() {
    var _this;

    _classCallCheck(this, Script);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Script).call(this));
    _this.addAction = _this.addAction.bind(_assertThisInitialized(_this));
    _this.actionChanged = _this.actionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Script, [{
    key: "addAction",
    value: function addAction() {
      var script = this.props.script.concat({
        service: ""
      });
      this.props.onChange(script);
    }
  }, {
    key: "actionChanged",
    value: function actionChanged(index, newValue) {
      var script = this.props.script.concat();

      if (newValue === null) {
        script.splice(index, 1);
      } else {
        script[index] = newValue;
      }

      this.props.onChange(script);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _this2 = this;

      var script = _ref.script,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "script"
      }, script.map(function (act, idx) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_action_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: idx,
          action: act,
          onChange: _this2.actionChanged,
          hass: hass,
          localize: localize
        });
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-actions add-card"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
        onTap: this.addAction
      }, localize("ui.panel.config.automation.editor.actions.add")))));
    }
  }]);

  return Script;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SceneAction =
/*#__PURE__*/
function (_Component) {
  _inherits(SceneAction, _Component);

  function SceneAction() {
    var _this;

    _classCallCheck(this, SceneAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SceneAction).call(this));
    _this.sceneChanged = _this.sceneChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SceneAction, [{
    key: "sceneChanged",
    value: function sceneChanged(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, {
        scene: ev.target.value
      }));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var action = _ref.action,
          hass = _ref.hass;
      var scene = action.scene;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        value: scene,
        onChange: this.sceneChanged,
        hass: hass,
        includeDomains: ["scene"],
        allowCustomEntity: true
      }));
    }
  }]);

  return SceneAction;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var WaitAction =
/*#__PURE__*/
function (_Component) {
  _inherits(WaitAction, _Component);

  function WaitAction() {
    var _this;

    _classCallCheck(this, WaitAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WaitAction).call(this));

    _defineProperty(_assertThisInitialized(_this), "onChange", void 0);

    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_assertThisInitialized(_this), "action");
    _this.onTemplateChange = _this.onTemplateChange.bind(_assertThisInitialized(_this));
    return _this;
  } // Gets fired on mount. If empty, onChangeEvent removes attribute.
  // Without the attribute this action is no longer matched to this component.


  _createClass(WaitAction, [{
    key: "onTemplateChange",
    value: function onTemplateChange(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.action, _defineProperty({}, ev.target.getAttribute("name"), ev.target.value)));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var action = _ref.action,
          localize = _ref.localize;

      /* eslint-disable camelcase */
      var wait_template = action.wait_template,
          timeout = action.timeout;
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
  }]);

  return WaitAction;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var isEmpty = function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

var YAMLTextArea =
/*#__PURE__*/
function (_Component) {
  _inherits(YAMLTextArea, _Component);

  function YAMLTextArea(props) {
    var _this;

    _classCallCheck(this, YAMLTextArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YAMLTextArea).call(this, props));
    var value;

    try {
      value = props.value && !isEmpty(props.value) ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(props.value) : undefined;
    } catch (err) {
      alert("There was an error converting to YAML: ".concat(err));
    }

    _this.state = {
      isvalid: true,
      value: value
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(YAMLTextArea, [{
    key: "onChange",
    value: function onChange(ev) {
      var value = ev.detail.value;
      var parsed;
      var isValid = true;

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
        value: value,
        isValid: isValid
      });

      if (isValid) {
        this.props.onChange(parsed);
      }
    }
  }, {
    key: "render",
    value: function render(_ref, _ref2) {
      var label = _ref.label;
      var value = _ref2.value,
          isValid = _ref2.isValid;
      var style = {
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
  }]);

  return YAMLTextArea;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC9ldmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3ByZWFjdC91bm1vdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtYWN0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXRleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9hdXRvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL2NvbmRpdGlvbl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vY29uZGl0aW9uX3Jvdy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL2RldmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vbG9naWNhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL251bWVyaWNfc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3N1bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3RlbXBsYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vdGltZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3pvbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9hY3Rpb25fZWRpdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2FjdGlvbl9yb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9jYWxsX3NlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9jb25kaXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9kZWxheS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2RldmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9zY2VuZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L3dhaXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3lhbWxfdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBoYXNMb2NhdGlvbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFwibGF0aXR1ZGVcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwibG9uZ2l0dWRlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlc1xuICApO1xufTtcbiIsIi8vIGludGVyZmFjZSBPbkNoYW5nZUNvbXBvbmVudCB7XG4vLyAgIHByb3BzOiB7XG4vLyAgICAgaW5kZXg6IG51bWJlcjtcbi8vICAgICBvbkNoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QpO1xuLy8gICB9O1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DaGFuZ2VFdmVudCh0aGlzOiBPbkNoYW5nZUNvbXBvbmVudCwgcHJvcCwgZXYpIHtcbmV4cG9ydCBmdW5jdGlvbiBvbkNoYW5nZUV2ZW50KHRoaXM6IGFueSwgcHJvcCwgZXYpIHtcbiAgY29uc3Qgb3JpZ0RhdGEgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gIGlmIChldi50YXJnZXQudmFsdWUgPT09IG9yaWdEYXRhW2V2LnRhcmdldC5uYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB7IC4uLm9yaWdEYXRhIH07XG5cbiAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgIGRhdGFbZXYudGFyZ2V0Lm5hbWVdID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBkYXRhW2V2LnRhcmdldC5uYW1lXTtcbiAgfVxuXG4gIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGF0YSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVubW91bnQobW91bnRFbCkge1xuICByZW5kZXIoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICgpID0+IG51bGwsXG4gICAgbW91bnRFbFxuICApO1xufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQWN0aW9uLFxuICBmZXRjaERldmljZUFjdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQWN0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPERldmljZUFjdGlvbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBhY3Rpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhY3Rpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQWN0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBkb21haW46IFwiXCIsXG4gICAgICAgIGVudGl0eV9pZDogXCJcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIjogSGFEZXZpY2VBY3Rpb25QaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQXV0b21hdGlvbixcbiAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5jb25zdCBOT19BVVRPTUFUSU9OX0tFWSA9IFwiTk9fQVVUT01BVElPTlwiO1xuY29uc3QgVU5LTk9XTl9BVVRPTUFUSU9OX0tFWSA9IFwiVU5LTk9XTl9BVVRPTUFUSU9OXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8XG4gIFQgZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uXG4+IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlSWQ/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IFQ7XG4gIHByb3RlY3RlZCBOT19BVVRPTUFUSU9OX1RFWFQgPSBcIk5vIGF1dG9tYXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBhdXRvbWF0aW9uXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F1dG9tYXRpb25zOiBUW10gPSBbXTtcblxuICAvLyBUcmlnZ2VyIGFuIGVtcHR5IHJlbmRlciBzbyB3ZSBzdGFydCB3aXRoIGEgY2xlYW4gRE9NLlxuICAvLyBwYXBlci1saXN0Ym94IGRvZXMgbm90IGxpa2UgY2hhbmdpbmcgdGhpbmdzIGFyb3VuZC5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcmVuZGVyRW1wdHkgPSBmYWxzZTtcblxuICBwcml2YXRlIF9sb2NhbGl6ZURldmljZUF1dG9tYXRpb246IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGF1dG9tYXRpb246IFRcbiAgKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZldGNoRGV2aWNlQXV0b21hdGlvbnM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGRldmljZUlkOiBzdHJpbmdcbiAgKSA9PiBQcm9taXNlPFRbXT47XG4gIHByaXZhdGUgX2NyZWF0ZU5vQXV0b21hdGlvbjogKGRldmljZUlkPzogc3RyaW5nKSA9PiBUO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbjogSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICAgICAgVFxuICAgID5bXCJfbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uXCJdLFxuICAgIGZldGNoRGV2aWNlQXV0b21hdGlvbnM6IEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxcbiAgICAgIFRcbiAgICA+W1wiX2ZldGNoRGV2aWNlQXV0b21hdGlvbnNcIl0sXG4gICAgY3JlYXRlTm9BdXRvbWF0aW9uOiBIYURldmljZUF1dG9tYXRpb25QaWNrZXI8VD5bXCJfY3JlYXRlTm9BdXRvbWF0aW9uXCJdXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uID0gbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uO1xuICAgIHRoaXMuX2ZldGNoRGV2aWNlQXV0b21hdGlvbnMgPSBmZXRjaERldmljZUF1dG9tYXRpb25zO1xuICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbiA9IGNyZWF0ZU5vQXV0b21hdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9rZXkoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudmFsdWUgfHxcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoXG4gICAgICAgIHRoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKSxcbiAgICAgICAgdGhpcy52YWx1ZVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIE5PX0FVVE9NQVRJT05fS0VZO1xuICAgIH1cblxuICAgIGNvbnN0IGlkeCA9IHRoaXMuX2F1dG9tYXRpb25zLmZpbmRJbmRleCgoYXV0b21hdGlvbikgPT5cbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSEpXG4gICAgKTtcblxuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICByZXR1cm4gVU5LTk9XTl9BVVRPTUFUSU9OX0tFWTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy5fYXV0b21hdGlvbnNbaWR4XS5kZXZpY2VfaWR9XyR7aWR4fWA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlbmRlckVtcHR5KSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMudmFsdWVcbiAgICAgICAgICA/IHRoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMudmFsdWUpXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGggPT09IDB9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2tleX1cbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cImtleVwiXG4gICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fYXV0b21hdGlvbkNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAga2V5PSR7Tk9fQVVUT01BVElPTl9LRVl9XG4gICAgICAgICAgICAuYXV0b21hdGlvbj0ke3RoaXMuX2NyZWF0ZU5vQXV0b21hdGlvbih0aGlzLmRldmljZUlkKX1cbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5OT19BVVRPTUFUSU9OX1RFWFR9XG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICBrZXk9JHtVTktOT1dOX0FVVE9NQVRJT05fS0VZfVxuICAgICAgICAgICAgLmF1dG9tYXRpb249JHt0aGlzLnZhbHVlfVxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLlVOS05PV05fQVVUT01BVElPTl9URVhUfVxuICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAke3RoaXMuX2F1dG9tYXRpb25zLm1hcChcbiAgICAgICAgICAgIChhdXRvbWF0aW9uLCBpZHgpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAga2V5PSR7YCR7dGhpcy5kZXZpY2VJZH1fJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAuYXV0b21hdGlvbj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2xvY2FsaXplRGV2aWNlQXV0b21hdGlvbih0aGlzLmhhc3MsIGF1dG9tYXRpb24pfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImRldmljZUlkXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVEZXZpY2VJbmZvKCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHZhbHVlIGhhcyBjaGFuZ2VkLCBmb3JjZSB0aGUgbGlzdGJveCB0byB1cGRhdGVcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInZhbHVlXCIpIHx8IGNoYW5nZWRQcm9wcy5oYXMoXCJfcmVuZGVyRW1wdHlcIikpIHtcbiAgICAgIGNvbnN0IGxpc3Rib3ggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1saXN0Ym94XCIpITtcbiAgICAgIGlmIChsaXN0Ym94KSB7XG4gICAgICAgIGxpc3Rib3guX3NlbGVjdFNlbGVjdGVkKHRoaXMuX2tleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRGV2aWNlSW5mbygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aW9ucyA9IHRoaXMuZGV2aWNlSWRcbiAgICAgID8gYXdhaXQgdGhpcy5fZmV0Y2hEZXZpY2VBdXRvbWF0aW9ucyh0aGlzLmhhc3MsIHRoaXMuZGV2aWNlSWQpXG4gICAgICA6IC8vIE5vIGRldmljZSwgY2xlYXIgdGhlIGxpc3Qgb2YgYXV0b21hdGlvbnNcbiAgICAgICAgW107XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWx1ZSwgb3IgaWYgd2UgaGF2ZSBjaGFuZ2VkIHRoZSBkZXZpY2UgSUQsIHJlc2V0IHRoZSB2YWx1ZS5cbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5kZXZpY2VfaWQgIT09IHRoaXMuZGV2aWNlSWQpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKFxuICAgICAgICB0aGlzLl9hdXRvbWF0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuX2F1dG9tYXRpb25zWzBdXG4gICAgICAgICAgOiB0aGlzLl9jcmVhdGVOb0F1dG9tYXRpb24odGhpcy5kZXZpY2VJZClcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX3JlbmRlckVtcHR5ID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9hdXRvbWF0aW9uQ2hhbmdlZChldikge1xuICAgIHRoaXMuX3NldFZhbHVlKGV2LmRldGFpbC5pdGVtLmF1dG9tYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoYXV0b21hdGlvbjogVCkge1xuICAgIGlmICh0aGlzLnZhbHVlICYmIGRldmljZUF1dG9tYXRpb25zRXF1YWwoYXV0b21hdGlvbiwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGF1dG9tYXRpb247XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgfSwgMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQ29uZGl0aW9uLFxuICBmZXRjaERldmljZUNvbmRpdGlvbnMsXG4gIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyIH0gZnJvbSBcIi4vaGEtZGV2aWNlLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlQ29uZGl0aW9uUGlja2VyIGV4dGVuZHMgSGFEZXZpY2VBdXRvbWF0aW9uUGlja2VyPFxuICBEZXZpY2VDb25kaXRpb25cbj4ge1xuICBwcm90ZWN0ZWQgTk9fQVVUT01BVElPTl9URVhUID0gXCJObyBjb25kaXRpb25zXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biBjb25kaXRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcbiAgICAgIGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbixcbiAgICAgIGZldGNoRGV2aWNlQ29uZGl0aW9ucyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBjb25kaXRpb246IFwiZGV2aWNlXCIsXG4gICAgICAgIGRvbWFpbjogXCJcIixcbiAgICAgICAgZW50aXR5X2lkOiBcIlwiLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kZXZpY2UtY29uZGl0aW9uLXBpY2tlclwiOiBIYURldmljZUNvbmRpdGlvblBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBwYXBlckRyb3Bkb3duQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItZHJvcGRvd24tbWVudVwiXG4pIGFzIENvbnN0cnVjdG9yPFBvbHltZXJFbGVtZW50PjtcblxuLy8gcGF0Y2hlcyBwYXBlciBkcm9wIGRvd24gdG8gcHJvcGVybHkgc3VwcG9ydCBSVEwgLSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWRyb3Bkb3duLW1lbnUvaXNzdWVzLzE4M1xuZXhwb3J0IGNsYXNzIEhhUGFwZXJEcm9wZG93bkNsYXNzIGV4dGVuZHMgcGFwZXJEcm9wZG93bkNsYXNzIHtcbiAgcHVibGljIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCI6IEhhUGFwZXJEcm9wZG93bkNsYXNzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIiwgSGFQYXBlckRyb3Bkb3duQ2xhc3MpO1xuIiwiLypcbldyYXBwZXIgZm9yIHBhcGVyLXRleHRhcmVhLlxuXG5wYXBlci10ZXh0YXJlYSBjcmFzaGVzIG9uIGlPUyB3aGVuIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseS4gVGhpcyBvbmx5IGltcGFjdHNcbm91ciBhdXRvbWF0aW9uIGFuZCBzY3JpcHQgZWRpdG9ycyBhcyB0aGV5IGFyZSB1c2luZyBQcmVhY3QuIFBvbHltZXIgaXMgdXNpbmdcbnRlbXBsYXRlIGVsZW1lbnRzIGFuZCBkb2VzIG5vdCBoYXZlIHRoaXMgaXNzdWUuXG5cbnBhcGVyLXRleHRhcmVhIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy81NTZcbldlYktpdCBpc3N1ZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NDYyOVxuKi9cblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhVGV4dGFyZWEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgPjwvcGFwZXItdGV4dGFyZWE+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS10ZXh0YXJlYVwiLCBIYVRleHRhcmVhKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VBdXRvbWF0aW9uIHtcbiAgZGV2aWNlX2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgc3VidHlwZT86IHN0cmluZztcbiAgZXZlbnQ/OiBzdHJpbmc7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUFjdGlvbiBleHRlbmRzIERldmljZUF1dG9tYXRpb24ge31cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VDb25kaXRpb24gZXh0ZW5kcyBEZXZpY2VBdXRvbWF0aW9uIHtcbiAgY29uZGl0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlVHJpZ2dlciBleHRlbmRzIERldmljZUF1dG9tYXRpb24ge1xuICBwbGF0Zm9ybTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRldmljZUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUFjdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9hY3Rpb24vbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VDb25kaXRpb25zID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRldmljZUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUNvbmRpdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9jb25kaXRpb24vbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VUcmlnZ2VycyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBkZXZpY2VJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VUcmlnZ2VyW10+KHtcbiAgICB0eXBlOiBcImRldmljZV9hdXRvbWF0aW9uL3RyaWdnZXIvbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25DYXBhYmlsaXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFjdGlvbjogRGV2aWNlQWN0aW9uXG4pID0+XG4gIGhhc3MuY2FsbFdTPERldmljZUFjdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9hY3Rpb24vY2FwYWJpbGl0aWVzXCIsXG4gICAgYWN0aW9uLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VDb25kaXRpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vY29uZGl0aW9uL2NhcGFiaWxpdGllc1wiLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZVRyaWdnZXJDYXBhYmlsaXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRyaWdnZXI6IERldmljZVRyaWdnZXJcbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2NhcGFiaWxpdGllc1wiLFxuICAgIHRyaWdnZXIsXG4gIH0pO1xuXG5jb25zdCB3aGl0ZWxpc3QgPSBbXCJhYm92ZVwiLCBcImJlbG93XCIsIFwiY29kZVwiLCBcImZvclwiXTtcblxuZXhwb3J0IGNvbnN0IGRldmljZUF1dG9tYXRpb25zRXF1YWwgPSAoXG4gIGE6IERldmljZUF1dG9tYXRpb24sXG4gIGI6IERldmljZUF1dG9tYXRpb25cbikgPT4ge1xuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBhKSB7XG4gICAgaWYgKHdoaXRlbGlzdC5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5pcyhhW3Byb3BlcnR5XSwgYltwcm9wZXJ0eV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gYikge1xuICAgIGlmICh3aGl0ZWxpc3QuaW5jbHVkZXMocHJvcGVydHkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QuaXMoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYWN0aW9uOiBEZXZpY2VBY3Rpb25cbikgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGFjdGlvbi5lbnRpdHlfaWQgPyBoYXNzLnN0YXRlc1thY3Rpb24uZW50aXR5X2lkXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgYGNvbXBvbmVudC4ke2FjdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmFjdGlvbl90eXBlLiR7YWN0aW9uLnR5cGV9YCxcbiAgICBcImVudGl0eV9uYW1lXCIsXG4gICAgc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IFwiPHVua25vd24+XCIsXG4gICAgXCJzdWJ0eXBlXCIsXG4gICAgaGFzcy5sb2NhbGl6ZShcbiAgICAgIGBjb21wb25lbnQuJHthY3Rpb24uZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi5hY3Rpb25fc3VidHlwZS4ke2FjdGlvbi5zdWJ0eXBlfWBcbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uQ29uZGl0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gY29uZGl0aW9uLmVudGl0eV9pZFxuICAgID8gaGFzcy5zdGF0ZXNbY29uZGl0aW9uLmVudGl0eV9pZF1cbiAgICA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgYGNvbXBvbmVudC4ke2NvbmRpdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmNvbmRpdGlvbl90eXBlLiR7Y29uZGl0aW9uLnR5cGV9YCxcbiAgICBcImVudGl0eV9uYW1lXCIsXG4gICAgc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IFwiPHVua25vd24+XCIsXG4gICAgXCJzdWJ0eXBlXCIsXG4gICAgaGFzcy5sb2NhbGl6ZShcbiAgICAgIGBjb21wb25lbnQuJHtjb25kaXRpb24uZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi5jb25kaXRpb25fc3VidHlwZS4ke2NvbmRpdGlvbi5zdWJ0eXBlfWBcbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlciA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdHJpZ2dlcjogRGV2aWNlVHJpZ2dlclxuKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdHJpZ2dlci5lbnRpdHlfaWQgPyBoYXNzLnN0YXRlc1t0cmlnZ2VyLmVudGl0eV9pZF0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgIGBjb21wb25lbnQuJHt0cmlnZ2VyLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24udHJpZ2dlcl90eXBlLiR7dHJpZ2dlci50eXBlfWAsXG4gICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBcIjx1bmtub3duPlwiLFxuICAgIFwic3VidHlwZVwiLFxuICAgIGhhc3MubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7dHJpZ2dlci5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLnRyaWdnZXJfc3VidHlwZS4ke3RyaWdnZXIuc3VidHlwZX1gXG4gICAgKVxuICApO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5pbXBvcnQgRGV2aWNlQ29uZGl0aW9uIGZyb20gXCIuL2RldmljZVwiO1xuaW1wb3J0IExvZ2ljYWxDb25kaXRpb24gZnJvbSBcIi4vbG9naWNhbFwiO1xuaW1wb3J0IE51bWVyaWNTdGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi9udW1lcmljX3N0YXRlXCI7XG5pbXBvcnQgU3RhdGVDb25kaXRpb24gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBTdW5Db25kaXRpb24gZnJvbSBcIi4vc3VuXCI7XG5pbXBvcnQgVGVtcGxhdGVDb25kaXRpb24gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCBUaW1lQ29uZGl0aW9uIGZyb20gXCIuL3RpbWVcIjtcbmltcG9ydCBab25lQ29uZGl0aW9uIGZyb20gXCIuL3pvbmVcIjtcblxuY29uc3QgVFlQRVMgPSB7XG4gIGFuZDogTG9naWNhbENvbmRpdGlvbixcbiAgZGV2aWNlOiBEZXZpY2VDb25kaXRpb24sXG4gIG51bWVyaWNfc3RhdGU6IE51bWVyaWNTdGF0ZUNvbmRpdGlvbixcbiAgb3I6IExvZ2ljYWxDb25kaXRpb24sXG4gIHN0YXRlOiBTdGF0ZUNvbmRpdGlvbixcbiAgc3VuOiBTdW5Db25kaXRpb24sXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZUNvbmRpdGlvbixcbiAgdGltZTogVGltZUNvbmRpdGlvbixcbiAgem9uZTogWm9uZUNvbmRpdGlvbixcbn07XG5cbmNvbnN0IE9QVElPTlMgPSBPYmplY3Qua2V5cyhUWVBFUykuc29ydCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25FZGl0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlQ2hhbmdlZCA9IHRoaXMudHlwZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB0eXBlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHR5cGUgPSBldi50YXJnZXQuc2VsZWN0ZWRJdGVtLmF0dHJpYnV0ZXMuY29uZGl0aW9uLnZhbHVlO1xuXG4gICAgaWYgKHR5cGUgIT09IHRoaXMucHJvcHMuY29uZGl0aW9uLmNvbmRpdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAgIGNvbmRpdGlvbjogdHlwZSxcbiAgICAgICAgLi4uVFlQRVNbdHlwZV0uZGVmYXVsdENvbmZpZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBpbmRleCwgY29uZGl0aW9uLCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICAgIGNvbnN0IENvbXAgPSBUWVBFU1tjb25kaXRpb24uY29uZGl0aW9uXTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IE9QVElPTlMuaW5kZXhPZihjb25kaXRpb24uY29uZGl0aW9uKTtcblxuICAgIGlmICghQ29tcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnVuc3VwcG9ydGVkX2NvbmRpdGlvblwiLFxuICAgICAgICAgICAgXCJjb25kaXRpb25cIixcbiAgICAgICAgICAgIGNvbmRpdGlvbi5jb25kaXRpb25cbiAgICAgICAgICApfVxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvbmRpdGlvbiwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGVfc2VsZWN0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBvbmlyb24tc2VsZWN0PXt0aGlzLnR5cGVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtPUFRJT05TLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGNvbmRpdGlvbj17b3B0fT5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS4ke29wdH0ubGFiZWxgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgICAgIDxDb21wXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQ29uZGl0aW9uRWRpdCBmcm9tIFwiLi9jb25kaXRpb25fZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25Sb3cgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uRGVsZXRlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChcbiAgICAgIGNvbmZpcm0oXG4gICAgICAgIHRoaXMucHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5kZWxldGVfY29uZmlybVwiXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1lbnVcIj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5kdXBsaWNhdGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb25UYXA9e3RoaXMub25EZWxldGV9PlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q29uZGl0aW9uRWRpdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZm9ybS9oYS1mb3JtXCI7XG5cbmltcG9ydCB7XG4gIGZldGNoRGV2aWNlQ29uZGl0aW9uQ2FwYWJpbGl0aWVzLFxuICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHByaXZhdGUgX29yaWdDb25kaXRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldmljZVBpY2tlZCA9IHRoaXMuZGV2aWNlUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXZpY2VDb25kaXRpb25QaWNrZWQgPSB0aGlzLmRldmljZUNvbmRpdGlvblBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZCA9IHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRldmljZV9pZDogdW5kZWZpbmVkLCBjYXBhYmlsaXRpZXM6IHVuZGVmaW5lZCB9O1xuICB9XG5cbiAgcHVibGljIGRldmljZVBpY2tlZChldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkZXZpY2VfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXZpY2VDb25kaXRpb25QaWNrZWQoZXYpIHtcbiAgICBsZXQgY29uZGl0aW9uID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX29yaWdDb25kaXRpb24gJiZcbiAgICAgIGRldmljZUF1dG9tYXRpb25zRXF1YWwodGhpcy5fb3JpZ0NvbmRpdGlvbiwgY29uZGl0aW9uKVxuICAgICkge1xuICAgICAgY29uZGl0aW9uID0gdGhpcy5fb3JpZ0NvbmRpdGlvbjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBjb25kaXRpb24pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MgfSwgeyBkZXZpY2VfaWQsIGNhcGFiaWxpdGllcyB9KSB7XG4gICAgaWYgKGRldmljZV9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXZpY2VfaWQgPSBjb25kaXRpb24uZGV2aWNlX2lkO1xuICAgIH1cbiAgICBjb25zdCBleHRyYUZpZWxkc0RhdGEgPVxuICAgICAgY2FwYWJpbGl0aWVzICYmIGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHNcbiAgICAgICAgPyBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgW2l0ZW0ubmFtZV06IHRoaXMucHJvcHMuY29uZGl0aW9uW2l0ZW0ubmFtZV0gfTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJEZXZpY2VcIlxuICAgICAgICAvPlxuICAgICAgICA8aGEtZGV2aWNlLWNvbmRpdGlvbi1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9ufVxuICAgICAgICAgIGRldmljZUlkPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlQ29uZGl0aW9uUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJDb25kaXRpb25cIlxuICAgICAgICAvPlxuICAgICAgICB7ZXh0cmFGaWVsZHNEYXRhICYmIChcbiAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgZGF0YT17T2JqZWN0LmFzc2lnbih7fSwgLi4uZXh0cmFGaWVsZHNEYXRhKX1cbiAgICAgICAgICAgIHNjaGVtYT17dGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzfVxuICAgICAgICAgICAgY29tcHV0ZUxhYmVsPXt0aGlzLl9leHRyYUZpZWxkc0NvbXB1dGVMYWJlbENhbGxiYWNrKGhhc3MubG9jYWxpemUpfVxuICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNhcGFiaWxpdGllcykge1xuICAgICAgdGhpcy5fZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmNvbmRpdGlvbikge1xuICAgICAgdGhpcy5fb3JpZ0NvbmRpdGlvbiA9IHRoaXMucHJvcHMuY29uZGl0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKHByZXZQcm9wcy5jb25kaXRpb24sIHRoaXMucHJvcHMuY29uZGl0aW9uKSkge1xuICAgICAgdGhpcy5fZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0Q2FwYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMucHJvcHMuY29uZGl0aW9uO1xuXG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gY29uZGl0aW9uLmRvbWFpblxuICAgICAgPyBhd2FpdCBmZXRjaERldmljZUNvbmRpdGlvbkNhcGFiaWxpdGllcyh0aGlzLnByb3BzLmhhc3MsIGNvbmRpdGlvbilcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2FwYWJpbGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgIC4uLmV2LmRldGFpbC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUpIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9uLnR5cGUuZGV2aWNlLmV4dHJhX2ZpZWxkcy4ke3NjaGVtYS5uYW1lfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cbn1cblxuKERldmljZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGRldmljZV9pZDogXCJcIixcbiAgZG9tYWluOiBcIlwiLFxuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQ29uZGl0aW9uUm93IGZyb20gXCIuL2NvbmRpdGlvbl9yb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRDb25kaXRpb24gPSB0aGlzLmFkZENvbmRpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZGl0aW9uQ2hhbmdlZCA9IHRoaXMuY29uZGl0aW9uQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGFkZENvbmRpdGlvbigpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25jYXQoe1xuICAgICAgY29uZGl0aW9uOiBcInN0YXRlXCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgY29uZGl0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbltpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmlnZ2Vyc1wiPlxuICAgICAgICB7Y29uZGl0aW9uLm1hcCgoY25kLCBpZHgpID0+IChcbiAgICAgICAgICA8Q29uZGl0aW9uUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgY29uZGl0aW9uPXtjbmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jb25kaXRpb25DaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9ucyBhZGQtY2FyZFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb25UYXA9e3RoaXMuYWRkQ29uZGl0aW9ufT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuYWRkXCIpfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naWNhbENvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBwcml2YXRlIF9tb3VudGVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25kaXRpb25DaGFuZ2VkID0gdGhpcy5jb25kaXRpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgY29uZGl0aW9uQ2hhbmdlZChjb25kaXRpb25zKSB7XG4gICAgaWYgKHRoaXMuX21vdW50ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgICAuLi50aGlzLnByb3BzLmNvbmRpdGlvbixcbiAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5fbW91bnRlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fbW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9uLmNvbmRpdGlvbnMgfHwgW119XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY29uZGl0aW9uQ2hhbmdlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKExvZ2ljYWxDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBjb25kaXRpb25zOiBbeyBjb25kaXRpb246IFwic3RhdGVcIiB9XSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtZXJpY1N0YXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgdmFsdWVfdGVtcGxhdGUsIGVudGl0eV9pZCwgYmVsb3csIGFib3ZlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUubnVtZXJpY19zdGF0ZS5hYm92ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWJvdmVcIlxuICAgICAgICAgIHZhbHVlPXthYm92ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5udW1lcmljX3N0YXRlLmJlbG93XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWxvd1wiXG4gICAgICAgICAgdmFsdWU9e2JlbG93fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihOdW1lcmljU3RhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCBzdGF0ZSB9ID0gY29uZGl0aW9uO1xuICAgIGNvbnN0IGNuZEZvciA9IGNvbmRpdGlvbi5mb3I7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3RhdGUuc3RhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICB2YWx1ZT17c3RhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICB7Y25kRm9yICYmIDxwcmU+Rm9yOiB7SlNPTi5zdHJpbmdpZnkoY25kRm9yLCBudWxsLCAyKX08L3ByZT59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgc3RhdGU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5Db25kaXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBhZnRlclBpY2tlZDogKG9iajogYW55KSA9PiB2b2lkO1xuICBwcml2YXRlIGJlZm9yZVBpY2tlZDogKG9iajogYW55KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuYWZ0ZXJQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzLCBcImFmdGVyXCIpO1xuICAgIHRoaXMuYmVmb3JlUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcywgXCJiZWZvcmVcIik7XG4gIH1cblxuICBwdWJsaWMgcmFkaW9Hcm91cFBpY2tlZChrZXksIGV2KSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0geyAuLi50aGlzLnByb3BzLmNvbmRpdGlvbiB9O1xuXG4gICAgaWYgKGV2LnRhcmdldC5zZWxlY3RlZCkge1xuICAgICAgY29uZGl0aW9uW2tleV0gPSBldi50YXJnZXQuc2VsZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb25kaXRpb25ba2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyBhZnRlciwgYWZ0ZXJfb2Zmc2V0LCBiZWZvcmUsIGJlZm9yZV9vZmZzZXQgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGlkPVwiYmVmb3JlbGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmJlZm9yZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgYWxsb3ctZW1wdHktc2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e2JlZm9yZX1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJiZWZvcmVsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLmJlZm9yZVBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5yaXNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3Vuc2V0XCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3Vuc2V0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5iZWZvcmVfb2Zmc2V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWZvcmVfb2Zmc2V0XCJcbiAgICAgICAgICB2YWx1ZT17YmVmb3JlX29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2JlZm9yZSA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBpZD1cImFmdGVybGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmFmdGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBhbGxvdy1lbXB0eS1zZWxlY3Rpb25cbiAgICAgICAgICBzZWxlY3RlZD17YWZ0ZXJ9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWZ0ZXJsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLmFmdGVyUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3VucmlzZVwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnJpc2VcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5zZXRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5zZXRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLmFmdGVyX29mZnNldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWZ0ZXJfb2Zmc2V0XCJcbiAgICAgICAgICB2YWx1ZT17YWZ0ZXJfb2Zmc2V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17YWZ0ZXIgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFN1bkNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7fTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgdmFsdWVfdGVtcGxhdGUgfSA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRlbXBsYXRlLnZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ2YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlX3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGVtcGxhdGVDb25kaXRpb24gYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICB2YWx1ZV90ZW1wbGF0ZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImNvbmRpdGlvblwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhZnRlciwgYmVmb3JlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS50aW1lLmFmdGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhZnRlclwiXG4gICAgICAgICAgdmFsdWU9e2FmdGVyfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRpbWUuYmVmb3JlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWZvcmVcIlxuICAgICAgICAgIHZhbHVlPXtiZWZvcmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGltZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7fTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IGhhc0xvY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvaGFzX2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZGl0aW9uLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25kaXRpb24sXG4gICAgICB6b25lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCB6b25lIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnpvbmUuZW50aXR5XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBlbnRpdHlGaWx0ZXI9e3pvbmVBbmRMb2NhdGlvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuem9uZS56b25lXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXt6b25lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnpvbmVQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAgIGluY2x1ZGVEb21haW5zPXtbXCJ6b25lXCJdfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oWm9uZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgem9uZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbmltcG9ydCBDYWxsU2VydmljZUFjdGlvbiBmcm9tIFwiLi9jYWxsX3NlcnZpY2VcIjtcbmltcG9ydCBDb25kaXRpb25BY3Rpb24gZnJvbSBcIi4vY29uZGl0aW9uXCI7XG5pbXBvcnQgRGVsYXlBY3Rpb24gZnJvbSBcIi4vZGVsYXlcIjtcbmltcG9ydCBEZXZpY2VBY3Rpb24gZnJvbSBcIi4vZGV2aWNlXCI7XG5pbXBvcnQgRXZlbnRBY3Rpb24gZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBTY2VuZUFjdGlvbiBmcm9tIFwiLi9zY2VuZVwiO1xuaW1wb3J0IFdhaXRBY3Rpb24gZnJvbSBcIi4vd2FpdFwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgc2VydmljZTogQ2FsbFNlcnZpY2VBY3Rpb24sXG4gIGRlbGF5OiBEZWxheUFjdGlvbixcbiAgd2FpdF90ZW1wbGF0ZTogV2FpdEFjdGlvbixcbiAgY29uZGl0aW9uOiBDb25kaXRpb25BY3Rpb24sXG4gIGV2ZW50OiBFdmVudEFjdGlvbixcbiAgZGV2aWNlX2lkOiBEZXZpY2VBY3Rpb24sXG4gIHNjZW5lOiBTY2VuZUFjdGlvbixcbn07XG5cbmNvbnN0IE9QVElPTlMgPSBPYmplY3Qua2V5cyhUWVBFUykuc29ydCgpO1xuXG5mdW5jdGlvbiBnZXRUeXBlKGFjdGlvbikge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVFlQRVMpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0gaW4gYWN0aW9uKSB7XG4gICAgICByZXR1cm4ga2V5c1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZUNoYW5nZWQgPSB0aGlzLnR5cGVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdUeXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLmFjdGlvbi52YWx1ZTtcbiAgICBjb25zdCBvbGRUeXBlID0gZ2V0VHlwZSh0aGlzLnByb3BzLmFjdGlvbik7XG5cbiAgICBpZiAob2xkVHlwZSAhPT0gbmV3VHlwZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBUWVBFU1tuZXdUeXBlXS5kZWZhdWx0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgaW5kZXgsIGFjdGlvbiwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB0eXBlID0gZ2V0VHlwZShhY3Rpb24pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICAgIGNvbnN0IENvbXAgPSB0eXBlICYmIFRZUEVTW3R5cGVdO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBzZWxlY3RlZCA9IE9QVElPTlMuaW5kZXhPZih0eXBlKTtcblxuICAgIGlmICghQ29tcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnVuc3VwcG9ydGVkX2FjdGlvblwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIixcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICApfVxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGFjdGlvbiwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlX3NlbGVjdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgb25pcm9uLXNlbGVjdD17dGhpcy50eXBlQ2hhbmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7T1BUSU9OUy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBhY3Rpb249e29wdH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuJHtvcHR9LmxhYmVsYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0PlxuICAgICAgICA8Q29tcFxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IEFjdGlvbkVkaXQgZnJvbSBcIi4vYWN0aW9uX2VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFjdGlvbkVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5cbmltcG9ydCBZQU1MVGV4dEFyZWEgZnJvbSBcIi4uL3lhbWxfdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbFNlcnZpY2VBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNlcnZpY2VDaGFuZ2VkID0gdGhpcy5zZXJ2aWNlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VydmljZURhdGFDaGFuZ2VkID0gdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJ2aWNlQ2hhbmdlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICBzZXJ2aWNlOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VydmljZURhdGFDaGFuZ2VkKGRhdGEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHsgLi4udGhpcy5wcm9wcy5hY3Rpb24sIGRhdGEgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgYWN0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBzZXJ2aWNlLCBkYXRhIH0gPSBhY3Rpb247XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICB2YWx1ZT17c2VydmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFlBTUxUZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5zZXJ2aWNlLnNlcnZpY2VfZGF0YVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihDYWxsU2VydmljZUFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGFsaWFzOiBcIlwiLFxuICBzZXJ2aWNlOiBcIlwiLFxuICBkYXRhOiB7fSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBTdGF0ZUNvbmRpdGlvbiBmcm9tIFwiLi4vY29uZGl0aW9uL3N0YXRlXCI7XG5pbXBvcnQgQ29uZGl0aW9uRWRpdCBmcm9tIFwiLi4vY29uZGl0aW9uL2NvbmRpdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGluZGV4LCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29uZGl0aW9uRWRpdFxuICAgICAgICBjb25kaXRpb249e2FjdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG4oQ29uZGl0aW9uQWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgY29uZGl0aW9uOiBcInN0YXRlXCIsXG4gIC4uLihTdGF0ZUNvbmRpdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxheUFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImFjdGlvblwiKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGRlbGF5IH0gPSBhY3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5kZWxheS5kZWxheVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZGVsYXlcIlxuICAgICAgICAgIHZhbHVlPXtkZWxheX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihEZWxheUFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGRlbGF5OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2UvaGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZm9ybS9oYS1mb3JtXCI7XG5cbmltcG9ydCB7XG4gIGZldGNoRGV2aWNlQWN0aW9uQ2FwYWJpbGl0aWVzLFxuICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuaW1wb3J0IHsgRGV2aWNlQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZUFjdGlvbkVkaXRvciBleHRlbmRzIENvbXBvbmVudDxcbiAge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgYWN0aW9uOiBEZXZpY2VBY3Rpb247XG4gICAgaGFzczogSG9tZUFzc2lzdGFudDtcbiAgICBvbkNoYW5nZShpbmRleDogbnVtYmVyLCBhY3Rpb246IERldmljZUFjdGlvbik7XG4gIH0sXG4gIHtcbiAgICBkZXZpY2VfaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjYXBhYmlsaXRpZXM6IGFueSB8IHVuZGVmaW5lZDtcbiAgfVxuPiB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdENvbmZpZzogRGV2aWNlQWN0aW9uID0ge1xuICAgIGRldmljZV9pZDogXCJcIixcbiAgICBkb21haW46IFwiXCIsXG4gICAgZW50aXR5X2lkOiBcIlwiLFxuICB9O1xuXG4gIHByaXZhdGUgX29yaWdBY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldmljZVBpY2tlZCA9IHRoaXMuZGV2aWNlUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXZpY2VBY3Rpb25QaWNrZWQgPSB0aGlzLmRldmljZUFjdGlvblBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZCA9IHRoaXMuX2V4dHJhRmllbGRzQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRldmljZV9pZDogdW5kZWZpbmVkLCBjYXBhYmlsaXRpZXM6IHVuZGVmaW5lZCB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgaGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXZpY2VJZCA9IHRoaXMuc3RhdGUuZGV2aWNlX2lkIHx8IGFjdGlvbi5kZXZpY2VfaWQ7XG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gdGhpcy5zdGF0ZS5jYXBhYmlsaXRpZXM7XG4gICAgY29uc3QgZXh0cmFGaWVsZHNEYXRhID1cbiAgICAgIGNhcGFiaWxpdGllcyAmJiBjYXBhYmlsaXRpZXMuZXh0cmFfZmllbGRzXG4gICAgICAgID8gY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IFtpdGVtLm5hbWVdOiB0aGlzLnByb3BzLmFjdGlvbltpdGVtLm5hbWVdIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWRldmljZS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZGV2aWNlSWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJEZXZpY2VcIlxuICAgICAgICAvPlxuICAgICAgICA8aGEtZGV2aWNlLWFjdGlvbi1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17YWN0aW9ufVxuICAgICAgICAgIGRldmljZUlkPXtkZXZpY2VJZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VBY3Rpb25QaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBsYWJlbD1cIkFjdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIHtleHRyYUZpZWxkc0RhdGEgJiYgKFxuICAgICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgICBkYXRhPXtPYmplY3QuYXNzaWduKHt9LCAuLi5leHRyYUZpZWxkc0RhdGEpfVxuICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWR9XG4gICAgICAgICAgICBzY2hlbWE9e3RoaXMuc3RhdGUuY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc31cbiAgICAgICAgICAgIGNvbXB1dGVMYWJlbD17dGhpcy5fZXh0cmFGaWVsZHNDb21wdXRlTGFiZWxDYWxsYmFjayhoYXNzLmxvY2FsaXplKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY2FwYWJpbGl0aWVzKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uKSB7XG4gICAgICB0aGlzLl9vcmlnQWN0aW9uID0gdGhpcy5wcm9wcy5hY3Rpb247XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWRldmljZUF1dG9tYXRpb25zRXF1YWwocHJldlByb3BzLmFjdGlvbiwgdGhpcy5wcm9wcy5hY3Rpb24pKSB7XG4gICAgICB0aGlzLl9nZXRDYXBhYmlsaXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRldmljZVBpY2tlZChldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkZXZpY2VfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGV2aWNlQWN0aW9uUGlja2VkKGV2KSB7XG4gICAgbGV0IGRldmljZUFjdGlvbiA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9vcmlnQWN0aW9uICYmXG4gICAgICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKHRoaXMuX29yaWdBY3Rpb24sIGRldmljZUFjdGlvbilcbiAgICApIHtcbiAgICAgIGRldmljZUFjdGlvbiA9IHRoaXMuX29yaWdBY3Rpb247XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGV2aWNlQWN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldENhcGFiaWxpdGllcygpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnByb3BzLmFjdGlvbjtcblxuICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IGFjdGlvbi5kb21haW5cbiAgICAgID8gYXdhaXQgZmV0Y2hEZXZpY2VBY3Rpb25DYXBhYmlsaXRpZXModGhpcy5wcm9wcy5oYXNzLCBhY3Rpb24pXG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGNhcGFiaWxpdGllcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ2hhbmdlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy5hY3Rpb24sXG4gICAgICAuLi5ldi5kZXRhaWwudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9leHRyYUZpZWxkc0NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplKSB7XG4gICAgLy8gUmV0dXJucyBhIGNhbGxiYWNrIGZvciBoYS1mb3JtIHRvIGNhbGN1bGF0ZSBsYWJlbHMgcGVyIHNjaGVtYSBvYmplY3RcbiAgICByZXR1cm4gKHNjaGVtYSkgPT5cbiAgICAgIGxvY2FsaXplKFxuICAgICAgICBgdWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5kZXZpY2VfaWQuZXh0cmFfZmllbGRzLiR7c2NoZW1hLm5hbWV9YFxuICAgICAgKSB8fCBzY2hlbWEubmFtZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFlBTUxUZXh0QXJlYSBmcm9tIFwiLi4veWFtbF90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgRXZlbnRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aW9uOiBFdmVudEFjdGlvbjtcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYztcbiAgb25DaGFuZ2U6IChpbmRleDogbnVtYmVyLCBhY3Rpb246IEV2ZW50QWN0aW9uKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEFjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25maWcoKTogRXZlbnRBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDogXCJcIixcbiAgICAgIGV2ZW50X2RhdGE6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImFjdGlvblwiKTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZCA9IHRoaXMuc2VydmljZURhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbjogeyBldmVudCwgZXZlbnRfZGF0YSB9LFxuICAgICAgbG9jYWxpemUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5ldmVudC5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZXZlbnRcIlxuICAgICAgICAgIHZhbHVlPXtldmVudH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxZQU1MVGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuZXZlbnQuc2VydmljZV9kYXRhXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtldmVudF9kYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNlcnZpY2VEYXRhQ2hhbmdlZChldmVudERhdGEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgZXZlbnRfZGF0YTogZXZlbnREYXRhLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBBY3Rpb25Sb3cgZnJvbSBcIi4vYWN0aW9uX3Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFkZEFjdGlvbiA9IHRoaXMuYWRkQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hY3Rpb25DaGFuZ2VkID0gdGhpcy5hY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgYWRkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucHJvcHMuc2NyaXB0LmNvbmNhdCh7XG4gICAgICBzZXJ2aWNlOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzY3JpcHQpO1xuICB9XG5cbiAgcHVibGljIGFjdGlvbkNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wcm9wcy5zY3JpcHQuY29uY2F0KCk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHRbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzY3JpcHQpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHNjcmlwdCwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwic2NyaXB0XCI+XG4gICAgICAgIHtzY3JpcHQubWFwKChhY3QsIGlkeCkgPT4gKFxuICAgICAgICAgIDxBY3Rpb25Sb3dcbiAgICAgICAgICAgIGluZGV4PXtpZHh9XG4gICAgICAgICAgICBhY3Rpb249e2FjdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRBY3Rpb259PlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5hZGRcIil9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lQ2hhbmdlZCA9IHRoaXMuc2NlbmVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgc2NlbmVDaGFuZ2VkKGV2OiBhbnkpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWN0aW9uLFxuICAgICAgc2NlbmU6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGhhc3MgfSkge1xuICAgIGNvbnN0IHsgc2NlbmUgfSA9IGFjdGlvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtzY2VuZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zY2VuZUNoYW5nZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBpbmNsdWRlRG9tYWlucz17W1wic2NlbmVcIl19XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFNjZW5lQWN0aW9uIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgc2NlbmU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FpdEFjdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcImFjdGlvblwiKTtcbiAgICB0aGlzLm9uVGVtcGxhdGVDaGFuZ2UgPSB0aGlzLm9uVGVtcGxhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEdldHMgZmlyZWQgb24gbW91bnQuIElmIGVtcHR5LCBvbkNoYW5nZUV2ZW50IHJlbW92ZXMgYXR0cmlidXRlLlxuICAvLyBXaXRob3V0IHRoZSBhdHRyaWJ1dGUgdGhpcyBhY3Rpb24gaXMgbm8gbG9uZ2VyIG1hdGNoZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gIHB1YmxpYyBvblRlbXBsYXRlQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIFtldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV06IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBhY3Rpb24sIGxvY2FsaXplIH0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICBjb25zdCB7IHdhaXRfdGVtcGxhdGUsIHRpbWVvdXQgfSA9IGFjdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLndhaXRfdGVtcGxhdGUud2FpdF90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwid2FpdF90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3dhaXRfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uVGVtcGxhdGVDaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLndhaXRfdGVtcGxhdGUudGltZW91dFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidGltZW91dFwiXG4gICAgICAgICAgdmFsdWU9e3RpbWVvdXR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oV2FpdEFjdGlvbiBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHdhaXRfdGVtcGxhdGU6IFwiXCIsXG4gIHRpbWVvdXQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY29kZS1lZGl0b3JcIjtcblxuY29uc3QgaXNFbXB0eSA9IChvYmo6IG9iamVjdCkgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZQU1MVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPVxuICAgICAgICBwcm9wcy52YWx1ZSAmJiAhaXNFbXB0eShwcm9wcy52YWx1ZSlcbiAgICAgICAgICA/IHNhZmVEdW1wKHByb3BzLnZhbHVlKVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFRoZXJlIHdhcyBhbiBlcnJvciBjb252ZXJ0aW5nIHRvIFlBTUw6ICR7ZXJyfWApO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc3ZhbGlkOiB0cnVlLFxuICAgICAgdmFsdWUsXG4gICAgfTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBsZXQgcGFyc2VkO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0gc2FmZUxvYWQodmFsdWUpO1xuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBJbnZhbGlkIFlBTUxcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlLFxuICAgICAgaXNWYWxpZCxcbiAgICB9KTtcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShwYXJzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBsYWJlbCB9LCB7IHZhbHVlLCBpc1ZhbGlkIH0pIHtcbiAgICBjb25zdCBzdHlsZTogYW55ID0ge1xuICAgICAgbWluV2lkdGg6IDMwMCxcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57bGFiZWx9PC9wPlxuICAgICAgICA8aGEtY29kZS1lZGl0b3JcbiAgICAgICAgICBtb2RlPVwieWFtbFwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBlcnJvcj17aXNWYWxpZCA9PT0gZmFsc2V9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQURBO0FBVUE7QUFDQTs7Ozs7QUFmQTs7Ozs7QUFDQTs7Ozs7O0FBQ0E7Ozs7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFhQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUF2Q0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3Q0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBQUE7QUE4REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUE2QkE7QUFBQTtBQVlBO0FBM0dBO0FBQUE7QUFBQTtBQUFBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNIQTtBQUFBO0FBQUE7QUFBQTtBQTZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0hBO0FBQUE7QUFBQTtBQUFBO0FBaUpBO0FBQ0E7QUFsSkE7QUFBQTtBQUFBO0FBQUE7QUFvSkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0pBO0FBV0E7QUExS0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQURBO0FBV0E7QUFDQTs7Ozs7QUFsQkE7Ozs7O0FBR0E7Ozs7OztBQUNBOzs7O0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUlBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTs7OztBQTFCQTtBQUNBO0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQXNCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQVNBO0FBRUE7QUFJQTtBQUdBO0FBU0E7QUFFQTtBQUlBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTs7OztBQW5FQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7Ozs7QUFyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOztBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7OztBQXRHQTtBQUNBO0FBREE7QUF5R0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQU9BOzs7O0FBakRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTs7OztBQXBDQTtBQUNBO0FBREE7QUF1Q0E7QUFDQTtBQUFBO0FBQUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQUNBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTs7OztBQXREQTtBQUNBO0FBREE7QUF5REE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVdBOzs7O0FBdkNBO0FBQ0E7QUFEQTtBQTBDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7Ozs7QUFqR0E7QUFDQTtBQURBO0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7Ozs7QUF4QkE7QUFDQTtBQURBO0FBMkJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTs7OztBQS9CQTtBQUNBO0FBREE7QUFrQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7Ozs7QUFqREE7QUFDQTtBQURBO0FBb0RBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7Ozs7QUFsRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQVlBOzs7O0FBckRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUxBO0FBU0E7Ozs7QUF0Q0E7QUFDQTtBQURBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7QUFaQTtBQUNBO0FBREE7QUFlQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTs7OztBQXRCQTtBQUNBO0FBREE7QUF5QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTs7Ozs7QUFvQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOztBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7OztBQXRIQTtBQUNBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVVBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFMQTtBQVNBOzs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOzs7O0FBaERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7Ozs7QUFqREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBOzs7O0FBNUJBO0FBQ0E7QUFEQTtBQStCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUdBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBOzs7O0FBMUNBO0FBQ0E7QUFEQTtBQTZDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQWxCQTtBQW1CQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTs7OztBQWpFQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9