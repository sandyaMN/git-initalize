(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene~person-detail-dialog"],{

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
var validEntityId = /^(\w+)\.(\w+)$/;
var isValidEntityId = function isValidEntityId(entityId) {
  return validEntityId.test(entityId);
};
var createValidEntityId = function createValidEntityId(input) {
  return input.toLowerCase().replace(/\s|\'/g, "_") // replace spaces and quotes with underscore
  .replace(/\W/g, "") // remove not allowed chars
  .replace(/_{2,}/g, "_") // replace multiple underscores with 1
  .replace(/_$/, "");
}; // remove underscores at the end

/***/ }),

/***/ "./src/components/entity/ha-entities-picker.ts":
/*!*****************************************************!*\
  !*** ./src/components/entity/ha-entities-picker.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          <div>\n            <ha-entity-picker\n              allow-custom-entity\n              .curValue=", "\n              .hass=", "\n              .includeDomains=", "\n              .excludeDomains=", "\n              .entityFilter=", "\n              .value=", "\n              .label=", "\n              @value-changed=", "\n            ></ha-entity-picker>\n          </div>\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      <div>\n        <ha-entity-picker\n          .hass=", "\n          .includeDomains=", "\n          .excludeDomains=", "\n          .entityFilter=", "\n          .label=", "\n          @value-changed=", "\n        ></ha-entity-picker>\n      </div>\n    "]);

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





 // Not a duplicate, type import
// tslint:disable-next-line

var HaEntitiesPickerLight = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-entities-picker")], function (_initialize, _LitElement) {
  var HaEntitiesPickerLight =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaEntitiesPickerLight, _LitElement2);

    function HaEntitiesPickerLight() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaEntitiesPickerLight);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaEntitiesPickerLight)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaEntitiesPickerLight;
  }(_LitElement);

  return {
    F: HaEntitiesPickerLight,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "picked-entity-label"
      })],
      key: "pickedEntityLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "pick-entity-label"
      })],
      key: "pickEntityLabel",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Show entities from specific domains.
       * @type {string}
       * @attr include-domains
       */

      /**
       * Show no entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */
      function render() {
        var _this2 = this;

        if (!this.hass) {
          return;
        }

        var currentEntities = this._currentEntities;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), currentEntities.map(function (entityId) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), entityId, _this2.hass, _this2.includeDomains, _this2.excludeDomains, _this2._entityFilter, entityId, _this2.pickedEntityLabel, _this2._entityChanged);
        }), this.hass, this.includeDomains, this.excludeDomains, this._entityFilter, this.pickEntityLabel, this._addEntity);
      }
    }, {
      kind: "field",
      key: "_entityFilter",
      value: function value() {
        var _this3 = this;

        return function (stateObj) {
          return !_this3.value || !_this3.value.includes(stateObj.entity_id);
        };
      }
    }, {
      kind: "get",
      key: "_currentEntities",
      value: function _currentEntities() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_updateEntities",
      value: function _updateEntities(entities) {
        return regeneratorRuntime.async(function _updateEntities$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
                  value: entities
                });
                this.value = entities;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_entityChanged",
      value: function _entityChanged(event) {
        event.stopPropagation();
        var curValue = event.currentTarget.curValue;
        var newValue = event.detail.value;

        if (newValue === curValue || newValue !== "" && !Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__["isValidEntityId"])(newValue)) {
          return;
        }

        if (newValue === "") {
          this._updateEntities(this._currentEntities.filter(function (ent) {
            return ent !== curValue;
          }));
        } else {
          this._updateEntities(this._currentEntities.map(function (ent) {
            return ent === curValue ? newValue : ent;
          }));
        }
      }
    }, {
      kind: "method",
      key: "_addEntity",
      value: function _addEntity(event) {
        var toAdd, currentEntities;
        return regeneratorRuntime.async(function _addEntity$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.stopPropagation();
                toAdd = event.detail.value;
                event.currentTarget.value = "";

                if (toAdd) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                currentEntities = this._currentEntities;

                if (!currentEntities.includes(toAdd)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                this._updateEntities([].concat(_toConsumableArray(currentEntities), [toAdd]));

              case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lfnBlcnNvbi1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdGllcy1waWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRFbnRpdHlJZCA9IC9eKFxcdyspXFwuKFxcdyspJC87XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW50aXR5SWQgPSAoZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgdmFsaWRFbnRpdHlJZC50ZXN0KGVudGl0eUlkKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbGlkRW50aXR5SWQgPSAoaW5wdXQ6IHN0cmluZykgPT5cbiAgaW5wdXRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHN8XFwnL2csIFwiX1wiKSAvLyByZXBsYWNlIHNwYWNlcyBhbmQgcXVvdGVzIHdpdGggdW5kZXJzY29yZVxuICAgIC5yZXBsYWNlKC9cXFcvZywgXCJcIikgLy8gcmVtb3ZlIG5vdCBhbGxvd2VkIGNoYXJzXG4gICAgLnJlcGxhY2UoL197Mix9L2csIFwiX1wiKSAvLyByZXBsYWNlIG11bHRpcGxlIHVuZGVyc2NvcmVzIHdpdGggMVxuICAgIC5yZXBsYWNlKC9fJC8sIFwiXCIpOyAvLyByZW1vdmUgdW5kZXJzY29yZXMgYXQgdGhlIGVuZFxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVudGl0eUlkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkXCI7XG5cbmltcG9ydCBcIi4vaGEtZW50aXR5LXBpY2tlclwiO1xuLy8gTm90IGEgZHVwbGljYXRlLCB0eXBlIGltcG9ydFxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgfSBmcm9tIFwiLi9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWVudGl0aWVzLXBpY2tlclwiKVxuY2xhc3MgSGFFbnRpdGllc1BpY2tlckxpZ2h0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTaG93IGVudGl0aWVzIGZyb20gc3BlY2lmaWMgZG9tYWlucy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGF0dHIgaW5jbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU2hvdyBubyBlbnRpdGllcyBvZiB0aGVzZSBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGV4Y2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJleGNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInBpY2tlZC1lbnRpdHktbGFiZWxcIiB9KVxuICBwdWJsaWMgcGlja2VkRW50aXR5TGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJwaWNrLWVudGl0eS1sYWJlbFwiIH0pIHB1YmxpYyBwaWNrRW50aXR5TGFiZWw/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudEVudGl0aWVzID0gdGhpcy5fY3VycmVudEVudGl0aWVzO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjdXJyZW50RW50aXRpZXMubWFwKFxuICAgICAgICAoZW50aXR5SWQpID0+IGh0bWxgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgICAgICAgLmN1clZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHt0aGlzLmluY2x1ZGVEb21haW5zfVxuICAgICAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHt0aGlzLmV4Y2x1ZGVEb21haW5zfVxuICAgICAgICAgICAgICAuZW50aXR5RmlsdGVyPSR7dGhpcy5fZW50aXR5RmlsdGVyfVxuICAgICAgICAgICAgICAudmFsdWU9JHtlbnRpdHlJZH1cbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5waWNrZWRFbnRpdHlMYWJlbH1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9lbnRpdHlDaGFuZ2VkfVxuICAgICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgKX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7dGhpcy5pbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHt0aGlzLmV4Y2x1ZGVEb21haW5zfVxuICAgICAgICAgIC5lbnRpdHlGaWx0ZXI9JHt0aGlzLl9lbnRpdHlGaWx0ZXJ9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5waWNrRW50aXR5TGFiZWx9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9hZGRFbnRpdHl9XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5RmlsdGVyOiBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgPSAoXG4gICAgc3RhdGVPYmo6IEhhc3NFbnRpdHlcbiAgKSA9PiAhdGhpcy52YWx1ZSB8fCAhdGhpcy52YWx1ZS5pbmNsdWRlcyhzdGF0ZU9iai5lbnRpdHlfaWQpO1xuXG4gIHByaXZhdGUgZ2V0IF9jdXJyZW50RW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgW107XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVFbnRpdGllcyhlbnRpdGllcykge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWU6IGVudGl0aWVzLFxuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZSA9IGVudGl0aWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5Q2hhbmdlZChldmVudDogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3VyVmFsdWUgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmN1clZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChcbiAgICAgIG5ld1ZhbHVlID09PSBjdXJWYWx1ZSB8fFxuICAgICAgKG5ld1ZhbHVlICE9PSBcIlwiICYmICFpc1ZhbGlkRW50aXR5SWQobmV3VmFsdWUpKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmV3VmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGl0aWVzKFxuICAgICAgICB0aGlzLl9jdXJyZW50RW50aXRpZXMuZmlsdGVyKChlbnQpID0+IGVudCAhPT0gY3VyVmFsdWUpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRpdGllcyhcbiAgICAgICAgdGhpcy5fY3VycmVudEVudGl0aWVzLm1hcCgoZW50KSA9PiAoZW50ID09PSBjdXJWYWx1ZSA/IG5ld1ZhbHVlIDogZW50KSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWRkRW50aXR5KGV2ZW50OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0b0FkZCA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAoIXRvQWRkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRFbnRpdGllcyA9IHRoaXMuX2N1cnJlbnRFbnRpdGllcztcbiAgICBpZiAoY3VycmVudEVudGl0aWVzLmluY2x1ZGVzKHRvQWRkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUVudGl0aWVzKFsuLi5jdXJyZW50RW50aXRpZXMsIHRvQWRkXSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWVudGl0aWVzLXBpY2tlclwiOiBIYUVudGl0aWVzUGlja2VyTGlnaHQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFPQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7OztBQWhCQTs7Ozs7O0FBT0E7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQTJCQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBL0ZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=