(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ha-switch */ "./src/components/ha-switch.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      ha-switch {\n        padding: 13px 5px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <ha-switch\n        aria-label=", "\n        .checked=", "\n        @change=", "\n      ></ha-switch>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash-off\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <ha-switch disabled></ha-switch>\n      "]);

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









var isOn = function isOn(stateObj) {
  return stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(stateObj.state);
};

var HaEntityToggle = _decorate(null, function (_initialize, _LitElement) {
  var HaEntityToggle =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaEntityToggle, _LitElement2);

    function HaEntityToggle() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaEntityToggle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaEntityToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaEntityToggle;
  }(_LitElement);

  return {
    F: HaEntityToggle,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_isOn",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: // hass is not a property so that we only re-render on stateObj changes
      function render() {
        if (!this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
        }

        if (this.stateObj.attributes.assumed_state) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2(), "Turn ".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj), " off"), this._turnOff, !this._isOn, "Turn ".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj), " on"), this._turnOn, this._isOn);
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject3(), "Toggle ".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj), " ").concat(this._isOn ? "off" : "on"), this._isOn, this._toggleChanged);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaEntityToggle.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("click", function (ev) {
          return ev.stopPropagation();
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("stateObj")) {
          this._isOn = isOn(this.stateObj);
        }
      }
    }, {
      kind: "method",
      key: "_toggleChanged",
      value: function _toggleChanged(ev) {
        var newVal = ev.target.checked;

        if (newVal !== this._isOn) {
          this._callService(newVal);
        }
      }
    }, {
      kind: "method",
      key: "_turnOn",
      value: function _turnOn() {
        this._callService(true);
      }
    }, {
      kind: "method",
      key: "_turnOff",
      value: function _turnOff() {
        this._callService(false);
      } // We will force a re-render after a successful call to re-sync the toggle
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

    }, {
      kind: "method",
      key: "_callService",
      value: function _callService(turnOn) {
        var _this2 = this;

        var stateDomain, serviceDomain, service, currentState;
        return regeneratorRuntime.async(function _callService$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.hass || !this.stateObj)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("light");
                stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(this.stateObj);

                if (stateDomain === "lock") {
                  serviceDomain = "lock";
                  service = turnOn ? "unlock" : "lock";
                } else if (stateDomain === "cover") {
                  serviceDomain = "cover";
                  service = turnOn ? "open_cover" : "close_cover";
                } else if (stateDomain === "group") {
                  serviceDomain = "homeassistant";
                  service = turnOn ? "turn_on" : "turn_off";
                } else {
                  serviceDomain = stateDomain;
                  service = turnOn ? "turn_on" : "turn_off";
                }

                currentState = this.stateObj; // Optimistic update.

                this._isOn = turnOn;
                _context2.next = 9;
                return regeneratorRuntime.awrap(this.hass.callService(serviceDomain, service, {
                  entity_id: this.stateObj.entity_id
                }));

              case 9:
                setTimeout(function _callee() {
                  return regeneratorRuntime.async(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // If after 2 seconds we have not received a state update
                          // reset the switch to it's original state.
                          if (_this2.stateObj === currentState) {
                            _this2._isOn = isOn(_this2.stateObj);
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  });
                }, 2000);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

customElements.define("ha-entity-toggle", HaEntityToggle);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBTVEFURVNfT0ZGIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGZvcndhcmRIYXB0aWMgfSBmcm9tIFwiLi4vLi4vZGF0YS9oYXB0aWNzXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmltcG9ydCBcIi4uL2hhLXN3aXRjaFwiO1xuXG5jb25zdCBpc09uID0gKHN0YXRlT2JqPzogSGFzc0VudGl0eSkgPT5cbiAgc3RhdGVPYmogIT09IHVuZGVmaW5lZCAmJiAhU1RBVEVTX09GRi5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSk7XG5cbmNsYXNzIEhhRW50aXR5VG9nZ2xlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIGhhc3MgaXMgbm90IGEgcHJvcGVydHkgc28gdGhhdCB3ZSBvbmx5IHJlLXJlbmRlciBvbiBzdGF0ZU9iaiBjaGFuZ2VzXG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogSGFzc0VudGl0eTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaXNPbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtc3dpdGNoIGRpc2FibGVkPjwvaGEtc3dpdGNoPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPSR7YFR1cm4gJHtjb21wdXRlU3RhdGVOYW1lKHRoaXMuc3RhdGVPYmopfSBvZmZgfVxuICAgICAgICAgIGljb249XCJoYXNzOmZsYXNoLW9mZlwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdHVybk9mZn1cbiAgICAgICAgICA/c3RhdGUtYWN0aXZlPSR7IXRoaXMuX2lzT259XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPSR7YFR1cm4gJHtjb21wdXRlU3RhdGVOYW1lKHRoaXMuc3RhdGVPYmopfSBvbmB9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Zmxhc2hcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3R1cm5Pbn1cbiAgICAgICAgICA/c3RhdGUtYWN0aXZlPSR7dGhpcy5faXNPbn1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXN3aXRjaFxuICAgICAgICBhcmlhLWxhYmVsPSR7YFRvZ2dsZSAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9ICR7XG4gICAgICAgICAgdGhpcy5faXNPbiA/IFwib2ZmXCIgOiBcIm9uXCJcbiAgICAgICAgfWB9XG4gICAgICAgIC5jaGVja2VkPSR7dGhpcy5faXNPbn1cbiAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RvZ2dsZUNoYW5nZWR9XG4gICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiBldi5zdG9wUHJvcGFnYXRpb24oKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJzdGF0ZU9ialwiKSkge1xuICAgICAgdGhpcy5faXNPbiA9IGlzT24odGhpcy5zdGF0ZU9iaik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5faXNPbikge1xuICAgICAgdGhpcy5fY2FsbFNlcnZpY2UobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90dXJuT24oKSB7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2UodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF90dXJuT2ZmKCkge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKGZhbHNlKTtcbiAgfVxuXG4gIC8vIFdlIHdpbGwgZm9yY2UgYSByZS1yZW5kZXIgYWZ0ZXIgYSBzdWNjZXNzZnVsIGNhbGwgdG8gcmUtc3luYyB0aGUgdG9nZ2xlXG4gIC8vIHdpdGggdGhlIHN0YXRlLiBJdCB3aWxsIGJlIG91dCBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdFxuICAvLyByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWQgb24uIFNpbmNlIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdpbmcsXG4gIC8vIHRoZSByZXN5bmMgaXMgbm90IGNhbGxlZCBhdXRvbWF0aWMuXG4gIHByaXZhdGUgYXN5bmMgX2NhbGxTZXJ2aWNlKHR1cm5Pbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcndhcmRIYXB0aWMoXCJsaWdodFwiKTtcbiAgICBjb25zdCBzdGF0ZURvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLnN0YXRlT2JqKTtcbiAgICBsZXQgc2VydmljZURvbWFpbjtcbiAgICBsZXQgc2VydmljZTtcblxuICAgIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImxvY2tcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInVubG9ja1wiIDogXCJsb2NrXCI7XG4gICAgfSBlbHNlIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJjb3ZlclwiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwib3Blbl9jb3ZlclwiIDogXCJjbG9zZV9jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVEb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwiaG9tZWFzc2lzdGFudFwiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidHVybl9vblwiIDogXCJ0dXJuX29mZlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gc3RhdGVEb21haW47XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ0dXJuX29uXCIgOiBcInR1cm5fb2ZmXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZU9iajtcblxuICAgIC8vIE9wdGltaXN0aWMgdXBkYXRlLlxuICAgIHRoaXMuX2lzT24gPSB0dXJuT247XG5cbiAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFNlcnZpY2Uoc2VydmljZURvbWFpbiwgc2VydmljZSwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gSWYgYWZ0ZXIgMiBzZWNvbmRzIHdlIGhhdmUgbm90IHJlY2VpdmVkIGEgc3RhdGUgdXBkYXRlXG4gICAgICAvLyByZXNldCB0aGUgc3dpdGNoIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUuXG4gICAgICBpZiAodGhpcy5zdGF0ZU9iaiA9PT0gY3VycmVudFN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2lzT24gPSBpc09uKHRoaXMuc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtaW4td2lkdGg6IDM4cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1wYXBlci1pY29uLWJ1dHRvbi1pbmFjdGl2ZS1jb2xvcixcbiAgICAgICAgICB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG4gICAgICB9XG4gICAgICBwYXBlci1pY29uLWJ1dHRvbltzdGF0ZS1hY3RpdmVdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWljb24tYnV0dG9uLWFjdGl2ZS1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgcGFkZGluZzogMTNweCA1cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktdG9nZ2xlXCIsIEhhRW50aXR5VG9nZ2xlKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBR0E7Ozs7O0FBQ0E7OztBQUFBOzs7OztBQUhBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFTQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUExQkE7QUFBQTtBQTZCQTtBQURBO0FBQ0E7QUE3QkE7QUFnQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBeUNBO0FBQ0E7QUFtQkE7OztBQXJJQTtBQUNBO0FBdUlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=