(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/components/data-table/sort_filter_worker.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["filterSortData","filterData","sortData"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "5e11efb8a613fe944006.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/common/search/search-input.ts":
/*!*******************************************!*\
  !*** ./src/common/search/search-input.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <paper-icon-button\n                slot=\"suffix\"\n                class=\"suffix\"\n                @click=", "\n                icon=\"hass:close\"\n                alt=\"Clear\"\n                title=\"Clear\"\n              ></paper-icon-button>\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"search-container\">\n        <paper-input\n          autofocus\n          label=\"Search\"\n          .value=", "\n          @value-changed=", "\n        >\n          <iron-icon\n            icon=\"hass:magnify\"\n            slot=\"prefix\"\n            class=\"prefix\"\n          ></iron-icon>\n          ", "\n        </paper-input>\n      </div>\n    "]);

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









var SearchInput = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("search-input")], function (_initialize, _LitElement) {
  var SearchInput =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(SearchInput, _LitElement2);

    function SearchInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SearchInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return SearchInput;
  }(_LitElement);

  return {
    F: SearchInput,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "filter",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.filter, this._filterInputChanged, this.filter && Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this._clearSearch));
      }
    }, {
      kind: "method",
      key: "_filterChanged",
      value: function _filterChanged(value) {
        return regeneratorRuntime.async(function _filterChanged$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
                  value: String(value)
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_filterInputChanged",
      value: function _filterInputChanged(e) {
        return regeneratorRuntime.async(function _filterInputChanged$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._filterChanged(e.target.value);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_clearSearch",
      value: function _clearSearch() {
        return regeneratorRuntime.async(function _clearSearch$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._filterChanged("");

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/components/data-table/ha-data-table.ts":
/*!****************************************************!*\
  !*** ./src/components/data-table/ha-data-table.ts ***!
  \****************************************************/
/*! exports provided: HaDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDataTable", function() { return HaDataTable; });
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/data-table */ "./node_modules/@material/data-table/index.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workerize-loader!./sort_filter_worker */ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _ha_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-checkbox */ "./src/components/ha-checkbox.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      /* default mdc styles, colors changed, without checkbox styles */\n\n      .mdc-data-table__content {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table {\n        background-color: var(--data-table-background-color);\n        border-radius: 4px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: rgba(var(--rgb-primary-text-color), 0.12);\n        display: inline-flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        overflow-x: auto;\n      }\n\n      .mdc-data-table__row--selected {\n        background-color: rgba(var(--rgb-primary-color), 0.04);\n      }\n\n      .mdc-data-table__row {\n        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);\n      }\n\n      .mdc-data-table__row {\n        border-top-width: 1px;\n        border-top-style: solid;\n      }\n\n      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {\n        background-color: rgba(var(--rgb-primary-text-color), 0.04);\n      }\n\n      .mdc-data-table__header-cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__header-row {\n        height: 56px;\n      }\n\n      .mdc-data-table__row {\n        height: 52px;\n      }\n\n      .mdc-data-table__cell,\n      .mdc-data-table__header-cell {\n        padding-right: 16px;\n        padding-left: 16px;\n      }\n\n      .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__cell--checkbox {\n        /* @noflip */\n        padding-left: 16px;\n        /* @noflip */\n        padding-right: 0;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__header-cell--checkbox[dir=\"rtl\"],\n      [dir=\"rtl\"] .mdc-data-table__cell--checkbox,\n      .mdc-data-table__cell--checkbox[dir=\"rtl\"] {\n        /* @noflip */\n        padding-left: 0;\n        /* @noflip */\n        padding-right: 16px;\n      }\n\n      .mdc-data-table__table {\n        width: 100%;\n        border: 0;\n        white-space: nowrap;\n        border-collapse: collapse;\n      }\n\n      .mdc-data-table__cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table__cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__cell--numeric,\n      .mdc-data-table__cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__cell--icon {\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .mdc-data-table__header-cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.375rem;\n        font-weight: 500;\n        letter-spacing: 0.0071428571em;\n        text-decoration: inherit;\n        text-transform: inherit;\n        text-align: left;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell,\n      .mdc-data-table__header-cell[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: right;\n      }\n\n      .mdc-data-table__header-cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--numeric,\n      .mdc-data-table__header-cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__header-cell--icon {\n        text-align: center;\n      }\n\n      /* custom from here */\n\n      .mdc-data-table {\n        display: block;\n      }\n      .mdc-data-table__header-cell {\n        overflow: hidden;\n      }\n      .mdc-data-table__header-cell.sortable {\n        cursor: pointer;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon)\n        span {\n        position: relative;\n        left: -24px;\n      }\n      .mdc-data-table__header-cell.not-sorted > * {\n        transition: left 0.2s ease 0s;\n      }\n      .mdc-data-table__header-cell.not-sorted ha-icon {\n        left: -36px;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon):hover\n        span {\n        left: 0px;\n      }\n      .mdc-data-table__header-cell:hover.not-sorted ha-icon {\n        left: 0px;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                      <td\n                        class=\"mdc-data-table__cell ", "\"\n                      >\n                        ", "\n                      </td>\n                    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                        <td\n                          class=\"mdc-data-table__cell mdc-data-table__cell--checkbox\"\n                        >\n                          <ha-checkbox\n                            class=\"mdc-data-table__row-checkbox\"\n                            @change=", "\n                            .checked=", "\n                          >\n                          </ha-checkbox>\n                        </td>\n                      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <tr\n                  data-row-id=\"", "\"\n                  @click=", "\n                  class=\"mdc-data-table__row\"\n                >\n                  ", "\n                  ", "\n                </tr>\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                          <ha-icon\n                            .icon=", "\n                          ></ha-icon>\n                        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                  <th\n                    class=\"mdc-data-table__header-cell ", "\"\n                    role=\"columnheader\"\n                    scope=\"col\"\n                    @click=", "\n                    data-column-id=\"", "\"\n                  >\n                    ", "\n                    <span>", "</span>\n                  </th>\n                "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                    <th\n                      class=\"mdc-data-table__header-cell mdc-data-table__header-cell--checkbox\"\n                      role=\"columnheader\"\n                      scope=\"col\"\n                    >\n                      <ha-checkbox\n                        id=\"header-checkbox\"\n                        class=\"mdc-data-table__row-checkbox\"\n                        @change=", "\n                        .indeterminate=", "\n                        .checked=", "\n                      >\n                      </ha-checkbox>\n                    </th>\n                  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <search-input\n              @value-changed=", "\n            ></search-input>\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"mdc-data-table\">\n        <table class=\"mdc-data-table__table\">\n          <thead>\n            <tr class=\"mdc-data-table__header-row\">\n              ", "\n              ", "\n            </tr>\n          </thead>\n          <tbody class=\"mdc-data-table__content\">\n            ", "\n          </tbody>\n        </table>\n      </div>\n    "]);

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






 // eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies




 // tslint:disable-next-line




var HaDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-data-table")], function (_initialize, _BaseElement) {
  var HaDataTable =
  /*#__PURE__*/
  function (_BaseElement2) {
    _inherits(HaDataTable, _BaseElement2);

    function HaDataTable() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaDataTable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaDataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaDataTable;
  }(_BaseElement);

  return {
    F: HaDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Object
      })],
      key: "columns",
      value: function value() {
        return {};
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "data",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "selectable",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "id",
      value: function value() {
        return "id";
      }
    }, {
      kind: "field",
      key: "mdcFoundation",
      value: void 0
    }, {
      kind: "field",
      key: "mdcFoundationClass",
      value: function value() {
        return _material_data_table__WEBPACK_IMPORTED_MODULE_2__["MDCDataTableFoundation"];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])(".mdc-data-table")],
      key: "mdcRoot",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["queryAll"])(".mdc-data-table__row")],
      key: "rowElements",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#header-checkbox")],
      key: "_headerCheckbox",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_filterable",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerChecked",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerIndeterminate",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_checkedRows",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_filter",
      value: function value() {
        return "";
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortColumn",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortDirection",
      value: function value() {
        return null;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_filteredData",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "_sortColumns",
      value: function value() {
        return {};
      }
    }, {
      kind: "field",
      key: "curRequest",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      key: "_worker",
      value: void 0
    }, {
      kind: "field",
      key: "_debounceSearch",
      value: function value() {
        var _this2 = this;

        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_12__["debounce"])(function (ev) {
          _this2._filter = ev.detail.value;
        }, 200, false);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(HaDataTable.prototype), "firstUpdated", this).call(this);

        this._worker = workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default()();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(properties) {
        _get(_getPrototypeOf(HaDataTable.prototype), "updated", this).call(this, properties);

        if (properties.has("columns")) {
          this._filterable = Object.values(this.columns).some(function (column) {
            return column.filterable;
          });

          for (var columnId in this.columns) {
            if (this.columns[columnId].direction) {
              this._sortDirection = this.columns[columnId].direction;
              this._sortColumn = columnId;
              break;
            }
          }

          var clonedColumns = Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__["default"])(this.columns);
          Object.values(clonedColumns).forEach(function (column) {
            delete column.title;
            delete column.type;
            delete column.template;
          });
          this._sortColumns = clonedColumns;
        }

        if (properties.has("data") || properties.has("columns") || properties.has("_filter") || properties.has("_sortColumn") || properties.has("_sortDirection")) {
          this._filterData();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this3 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this._filterable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this._handleSearchChange) : "", this.selectable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), this._handleHeaderRowCheckboxChange, this._headerIndeterminate, this._headerChecked) : "", Object.entries(this.columns).map(function (columnEntry) {
          var _columnEntry = _slicedToArray(columnEntry, 2),
              key = _columnEntry[0],
              column = _columnEntry[1];

          var sorted = key === _this3._sortColumn;
          var classes = {
            "mdc-data-table__header-cell--numeric": Boolean(column.type && column.type === "numeric"),
            "mdc-data-table__header-cell--icon": Boolean(column.type && column.type === "icon"),
            sortable: Boolean(column.sortable),
            "not-sorted": Boolean(column.sortable && !sorted)
          };
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject4(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])(classes), _this3._handleHeaderClick, key, column.sortable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject5(), sorted && _this3._sortDirection === "desc" ? "hass:arrow-down" : "hass:arrow-up") : "", column.title);
        }), Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__["repeat"])(this._filteredData, function (row) {
          return row[_this3.id];
        }, function (row) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject6(), row[_this3.id], _this3._handleRowClick, _this3.selectable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject7(), _this3._handleRowCheckboxChange, _this3._checkedRows.includes(row[_this3.id])) : "", Object.entries(_this3.columns).map(function (columnEntry) {
            var _columnEntry2 = _slicedToArray(columnEntry, 2),
                key = _columnEntry2[0],
                column = _columnEntry2[1];

            return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject8(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
              "mdc-data-table__cell--numeric": Boolean(column.type && column.type === "numeric"),
              "mdc-data-table__cell--icon": Boolean(column.type && column.type === "icon")
            }), column.template ? column.template(row[key], row) : row[key]);
          }));
        }));
      }
    }, {
      kind: "method",
      key: "createAdapter",
      value: function createAdapter() {
        var _this4 = this;

        return {
          addClassAtRowIndex: function addClassAtRowIndex(rowIndex, cssClasses) {
            _this4.rowElements[rowIndex].classList.add(cssClasses);
          },
          getRowCount: function getRowCount() {
            return _this4.data.length;
          },
          getRowElements: function getRowElements() {
            return _this4.rowElements;
          },
          getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
            return _this4._getRowIdAtIndex(rowIndex);
          },
          getRowIndexByChildElement: function getRowIndexByChildElement(el) {
            return Array.prototype.indexOf.call(_this4.rowElements, el.closest("tr"));
          },
          getSelectedRowCount: function getSelectedRowCount() {
            return _this4._checkedRows.length;
          },
          isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
            return _this4._checkedRows.includes(_this4._getRowIdAtIndex(rowIndex));
          },
          isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
            return _this4._headerChecked;
          },
          isRowsSelectable: function isRowsSelectable() {
            return true;
          },
          notifyRowSelectionChanged: function notifyRowSelectionChanged() {
            return undefined;
          },
          notifySelectedAll: function notifySelectedAll() {
            return undefined;
          },
          notifyUnselectedAll: function notifyUnselectedAll() {
            return undefined;
          },
          registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
            return undefined;
          },
          registerRowCheckboxes: function registerRowCheckboxes() {
            return undefined;
          },
          removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, cssClasses) {
            _this4.rowElements[rowIndex].classList.remove(cssClasses);
          },
          setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
            _this4.rowElements[rowIndex].setAttribute(attr, value);
          },
          setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
            _this4._headerChecked = checked;
          },
          setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
            _this4._headerIndeterminate = indeterminate;
          },
          setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
            _this4._setRowChecked(_this4._getRowIdAtIndex(rowIndex), checked);
          }
        };
      }
    }, {
      kind: "method",
      key: "_filterData",
      value: function _filterData() {
        var startTime, curRequest, filterProm, _ref, _ref2, data, curTime, elapsed;

        return regeneratorRuntime.async(function _filterData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startTime = new Date().getTime();
                this.curRequest++;
                curRequest = this.curRequest;
                filterProm = this._worker.filterSortData(this.data, this._sortColumns, this._filter, this._sortDirection, this._sortColumn);
                _context.next = 6;
                return regeneratorRuntime.awrap(Promise.all([filterProm, _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__["nextRender"]]));

              case 6:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 1);
                data = _ref2[0];
                curTime = new Date().getTime();
                elapsed = curTime - startTime;

                if (!(elapsed < 100)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return regeneratorRuntime.awrap(new Promise(function (resolve) {
                  return setTimeout(resolve, 100 - elapsed);
                }));

              case 14:
                if (!(this.curRequest !== curRequest)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return");

              case 16:
                this._filteredData = data;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_getRowIdAtIndex",
      value: function _getRowIdAtIndex(rowIndex) {
        return this.rowElements[rowIndex].getAttribute("data-row-id");
      }
    }, {
      kind: "method",
      key: "_handleHeaderClick",
      value: function _handleHeaderClick(ev) {
        var columnId = ev.target.closest("th").getAttribute("data-column-id");

        if (!this.columns[columnId].sortable) {
          return;
        }

        if (!this._sortDirection || this._sortColumn !== columnId) {
          this._sortDirection = "asc";
        } else if (this._sortDirection === "asc") {
          this._sortDirection = "desc";
        } else {
          this._sortDirection = null;
        }

        this._sortColumn = this._sortDirection === null ? undefined : columnId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "sorting-changed", {
          column: columnId,
          direction: this._sortDirection
        });
      }
    }, {
      kind: "method",
      key: "_handleHeaderRowCheckboxChange",
      value: function _handleHeaderRowCheckboxChange() {
        this._headerChecked = this._headerCheckbox.checked;
        this._headerIndeterminate = this._headerCheckbox.indeterminate;
        this.mdcFoundation.handleHeaderRowCheckboxChange();
      }
    }, {
      kind: "method",
      key: "_handleRowCheckboxChange",
      value: function _handleRowCheckboxChange(ev) {
        var checkbox = ev.target;
        var rowId = checkbox.closest("tr").getAttribute("data-row-id");

        this._setRowChecked(rowId, checkbox.checked);

        this.mdcFoundation.handleRowCheckboxChange(ev);
      }
    }, {
      kind: "method",
      key: "_handleRowClick",
      value: function _handleRowClick(ev) {
        var rowId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "row-click", {
          id: rowId
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_setRowChecked",
      value: function _setRowChecked(rowId, checked) {
        if (checked && !this._checkedRows.includes(rowId)) {
          this._checkedRows = [].concat(_toConsumableArray(this._checkedRows), [rowId]);
        } else if (!checked) {
          var index = this._checkedRows.indexOf(rowId);

          if (index !== -1) {
            this._checkedRows.splice(index, 1);
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "selection-changed", {
          id: rowId,
          selected: checked
        });
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._debounceSearch(ev);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject9());
      }
    }]
  };
}, _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__["BaseElement"]);

/***/ }),

/***/ "./src/components/ha-checkbox.ts":
/*!***************************************!*\
  !*** ./src/components/ha-checkbox.ts ***!
  \***************************************/
/*! exports provided: HaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCheckbox", function() { return HaCheckbox; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-checkbox */ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js");
/* harmony import */ var _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-checkbox/mwc-checkbox-css */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)\n          ~ .mdc-checkbox__background {\n          border-color: rgba(var(--rgb-primary-text-color), 0.54);\n        }\n      "]);

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


 // tslint:disable-next-line


// tslint:disable-next-line
var MwcCheckbox = customElements.get("mwc-checkbox");
var HaCheckbox = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-checkbox")], function (_initialize, _MwcCheckbox) {
  var HaCheckbox =
  /*#__PURE__*/
  function (_MwcCheckbox2) {
    _inherits(HaCheckbox, _MwcCheckbox2);

    function HaCheckbox() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaCheckbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaCheckbox;
  }(_MwcCheckbox);

  return {
    F: HaCheckbox,
    d: [{
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(HaCheckbox.prototype), "firstUpdated", this).call(this);

        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__["style"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject())];
      }
    }]
  };
}, MwcCheckbox);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllc35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctZW50aXR5LXJlZ2lzdHJ5fnBhbmVsLWNvbmZpZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNoZWNrYm94LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdFx0XHR2YXIgYWRkTWV0aG9kcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzXCIpXG5cdFx0XHRcdHZhciBtZXRob2RzID0gW1wiZmlsdGVyU29ydERhdGFcIixcImZpbHRlckRhdGFcIixcInNvcnREYXRhXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZTExZWZiOGE2MTNmZTk0NDAwNi53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCwgaHRtbCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcInNlYXJjaC1pbnB1dFwiKVxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBmaWx0ZXI/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuZmlsdGVyfVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVySW5wdXRDaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPGlyb24taWNvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFnbmlmeVwiXG4gICAgICAgICAgICBzbG90PVwicHJlZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwicHJlZml4XCJcbiAgICAgICAgICA+PC9pcm9uLWljb24+XG4gICAgICAgICAgJHt0aGlzLmZpbHRlciAmJlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NsZWFyU2VhcmNofVxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhclwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IFN0cmluZyh2YWx1ZSkgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJJbnB1dENoYW5nZWQoZSkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJTZWFyY2goKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucHJlZml4IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic2VhcmNoLWlucHV0XCI6IFNlYXJjaElucHV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyByZXBlYXQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9yZXBlYXRcIjtcbmltcG9ydCBkZWVwQ2xvbmUgZnJvbSBcImRlZXAtY2xvbmUtc2ltcGxlXCI7XG5cbmltcG9ydCB7XG4gIE1EQ0RhdGFUYWJsZUFkYXB0ZXIsXG4gIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24sXG59IGZyb20gXCJAbWF0ZXJpYWwvZGF0YS10YWJsZVwiO1xuXG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuXG5pbXBvcnQge1xuICBodG1sLFxuICBxdWVyeSxcbiAgcXVlcnlBbGwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheFxuLy8gQHRzLWlnbm9yZVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbmltcG9ydCBzb3J0RmlsdGVyV29ya2VyIGZyb20gXCJ3b3JrZXJpemUtbG9hZGVyIS4vc29ydF9maWx0ZXJfd29ya2VyXCI7XG5cbmltcG9ydCBcIi4uL2hhLWljb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jaGVja2JveFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUNoZWNrYm94IH0gZnJvbSBcIi4uL2hhLWNoZWNrYm94XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBuZXh0UmVuZGVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXNcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwic2VsZWN0aW9uLWNoYW5nZWRcIjogU2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICAgIFwicm93LWNsaWNrXCI6IFJvd0NsaWNrZWRFdmVudDtcbiAgICBcInNvcnRpbmctY2hhbmdlZFwiOiBTb3J0aW5nQ2hhbmdlZEV2ZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93Q2xpY2tlZEV2ZW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQge1xuICBpZDogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3J0aW5nQ2hhbmdlZEV2ZW50IHtcbiAgY29sdW1uOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgU29ydGluZ0RpcmVjdGlvbiA9IFwiZGVzY1wiIHwgXCJhc2NcIiB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogRGF0YVRhYmxlQ29sdW1uRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YSB7XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgZmlsdGVyYWJsZT86IGJvb2xlYW47XG4gIGZpbHRlcktleT86IHN0cmluZztcbiAgZGlyZWN0aW9uPzogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVDb2x1bW5EYXRhIGV4dGVuZHMgRGF0YVRhYmxlU29ydENvbHVtbkRhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB0eXBlPzogXCJudW1lcmljXCIgfCBcImljb25cIjtcbiAgdGVtcGxhdGU/OiA8VD4oZGF0YTogYW55LCByb3c6IFQpID0+IFRlbXBsYXRlUmVzdWx0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZVJvd0RhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGF0YS10YWJsZVwiKVxuZXhwb3J0IGNsYXNzIEhhRGF0YVRhYmxlIGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSkgcHVibGljIGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9IHt9O1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwdWJsaWMgZGF0YTogRGF0YVRhYmxlUm93RGF0YVtdID0gW107XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHB1YmxpYyBpZCA9IFwiaWRcIjtcbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb24hOiBNRENEYXRhVGFibGVGb3VuZGF0aW9uO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzID0gTURDRGF0YVRhYmxlRm91bmRhdGlvbjtcbiAgQHF1ZXJ5KFwiLm1kYy1kYXRhLXRhYmxlXCIpIHByb3RlY3RlZCBtZGNSb290ITogSFRNTEVsZW1lbnQ7XG4gIEBxdWVyeUFsbChcIi5tZGMtZGF0YS10YWJsZV9fcm93XCIpIHByb3RlY3RlZCByb3dFbGVtZW50cyE6IEhUTUxFbGVtZW50W107XG4gIEBxdWVyeShcIiNoZWFkZXItY2hlY2tib3hcIikgcHJpdmF0ZSBfaGVhZGVyQ2hlY2tib3ghOiBIYUNoZWNrYm94O1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX2ZpbHRlcmFibGUgPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9oZWFkZXJDaGVja2VkID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfaGVhZGVySW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwcml2YXRlIF9jaGVja2VkUm93czogc3RyaW5nW10gPSBbXTtcbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHByaXZhdGUgX2ZpbHRlciA9IFwiXCI7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9zb3J0Q29sdW1uPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHJpdmF0ZSBfc29ydERpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pIHByaXZhdGUgX2ZpbHRlcmVkRGF0YTogRGF0YVRhYmxlUm93RGF0YVtdID0gW107XG4gIHByaXZhdGUgX3NvcnRDb2x1bW5zOiB7XG4gICAgW2tleTogc3RyaW5nXTogRGF0YVRhYmxlU29ydENvbHVtbkRhdGE7XG4gIH0gPSB7fTtcbiAgcHJpdmF0ZSBjdXJSZXF1ZXN0ID0gMDtcbiAgcHJpdmF0ZSBfd29ya2VyOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfZGVib3VuY2VTZWFyY2ggPSBkZWJvdW5jZShcbiAgICAoZXYpID0+IHtcbiAgICAgIHRoaXMuX2ZpbHRlciA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIDIwMCxcbiAgICBmYWxzZVxuICApO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5fd29ya2VyID0gc29ydEZpbHRlcldvcmtlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQocHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHByb3BlcnRpZXMuaGFzKFwiY29sdW1uc1wiKSkge1xuICAgICAgdGhpcy5fZmlsdGVyYWJsZSA9IE9iamVjdC52YWx1ZXModGhpcy5jb2x1bW5zKS5zb21lKFxuICAgICAgICAoY29sdW1uKSA9PiBjb2x1bW4uZmlsdGVyYWJsZVxuICAgICAgKTtcblxuICAgICAgZm9yIChjb25zdCBjb2x1bW5JZCBpbiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uc1tjb2x1bW5JZF0uZGlyZWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JZF0uZGlyZWN0aW9uITtcbiAgICAgICAgICB0aGlzLl9zb3J0Q29sdW1uID0gY29sdW1uSWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xvbmVkQ29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0gZGVlcENsb25lKHRoaXMuY29sdW1ucyk7XG4gICAgICBPYmplY3QudmFsdWVzKGNsb25lZENvbHVtbnMpLmZvckVhY2goKGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgY29sdW1uLnRpdGxlO1xuICAgICAgICBkZWxldGUgY29sdW1uLnR5cGU7XG4gICAgICAgIGRlbGV0ZSBjb2x1bW4udGVtcGxhdGU7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc29ydENvbHVtbnMgPSBjbG9uZWRDb2x1bW5zO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiZGF0YVwiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJjb2x1bW5zXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9maWx0ZXJcIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiX3NvcnRDb2x1bW5cIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiX3NvcnREaXJlY3Rpb25cIilcbiAgICApIHtcbiAgICAgIHRoaXMuX2ZpbHRlckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLl9maWx0ZXJhYmxlXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICA+PC9zZWFyY2gtaW5wdXQ+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRhdGEtdGFibGVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLnNlbGVjdGFibGVcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIG1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoZWFkZXItY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fcm93LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRldGVybWluYXRlPSR7dGhpcy5faGVhZGVySW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5faGVhZGVyQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9oYS1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICR7T2JqZWN0LmVudHJpZXModGhpcy5jb2x1bW5zKS5tYXAoKGNvbHVtbkVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgY29sdW1uXSA9IGNvbHVtbkVudHJ5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IGtleSA9PT0gdGhpcy5fc29ydENvbHVtbjtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWNcIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09IFwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgc29ydGFibGU6IEJvb2xlYW4oY29sdW1uLnNvcnRhYmxlKSxcbiAgICAgICAgICAgICAgICAgIFwibm90LXNvcnRlZFwiOiBCb29sZWFuKGNvbHVtbi5zb3J0YWJsZSAmJiAhc29ydGVkKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlSGVhZGVyQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uLWlkPVwiJHtrZXl9XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtjb2x1bW4uc29ydGFibGVcbiAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmljb249JHtzb3J0ZWQgJiYgdGhpcy5fc29ydERpcmVjdGlvbiA9PT0gXCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImhhc3M6YXJyb3ctdXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5IGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICR7cmVwZWF0KFxuICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEhLFxuICAgICAgICAgICAgICAocm93OiBEYXRhVGFibGVSb3dEYXRhKSA9PiByb3dbdGhpcy5pZF0sXG4gICAgICAgICAgICAgIChyb3c6IERhdGFUYWJsZVJvd0RhdGEpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJvdy1pZD1cIiR7cm93W3RoaXMuaWRdfVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVSb3dDbGlja31cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvd1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLnNlbGVjdGFibGVcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2NlbGwgbWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fcm93LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlUm93Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhyb3dbdGhpcy5pZF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgJHtPYmplY3QuZW50cmllcyh0aGlzLmNvbHVtbnMpLm1hcCgoY29sdW1uRW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2tleSwgY29sdW1uXSA9IGNvbHVtbkVudHJ5O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2NlbGwgJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWNcIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvblwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSBcImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2NvbHVtbi50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi50ZW1wbGF0ZShyb3dba2V5XSwgcm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJvd1trZXldfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUFkYXB0ZXIoKTogTURDRGF0YVRhYmxlQWRhcHRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZENsYXNzQXRSb3dJbmRleDogKHJvd0luZGV4OiBudW1iZXIsIGNzc0NsYXNzZXM6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMpO1xuICAgICAgfSxcbiAgICAgIGdldFJvd0NvdW50OiAoKSA9PiB0aGlzLmRhdGEubGVuZ3RoLFxuICAgICAgZ2V0Um93RWxlbWVudHM6ICgpID0+IHRoaXMucm93RWxlbWVudHMsXG4gICAgICBnZXRSb3dJZEF0SW5kZXg6IChyb3dJbmRleDogbnVtYmVyKSA9PiB0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpLFxuICAgICAgZ2V0Um93SW5kZXhCeUNoaWxkRWxlbWVudDogKGVsOiBFbGVtZW50KSA9PlxuICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMucm93RWxlbWVudHMsIGVsLmNsb3Nlc3QoXCJ0clwiKSksXG4gICAgICBnZXRTZWxlY3RlZFJvd0NvdW50OiAoKSA9PiB0aGlzLl9jaGVja2VkUm93cy5sZW5ndGgsXG4gICAgICBpc0NoZWNrYm94QXRSb3dJbmRleENoZWNrZWQ6IChyb3dJbmRleDogbnVtYmVyKSA9PlxuICAgICAgICB0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyh0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpKSxcbiAgICAgIGlzSGVhZGVyUm93Q2hlY2tib3hDaGVja2VkOiAoKSA9PiB0aGlzLl9oZWFkZXJDaGVja2VkLFxuICAgICAgaXNSb3dzU2VsZWN0YWJsZTogKCkgPT4gdHJ1ZSxcbiAgICAgIG5vdGlmeVJvd1NlbGVjdGlvbkNoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeVNlbGVjdGVkQWxsOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICBub3RpZnlVbnNlbGVjdGVkQWxsOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICByZWdpc3RlckhlYWRlclJvd0NoZWNrYm94OiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICByZWdpc3RlclJvd0NoZWNrYm94ZXM6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlbW92ZUNsYXNzQXRSb3dJbmRleDogKHJvd0luZGV4OiBudW1iZXIsIGNzc0NsYXNzZXM6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzZXMpO1xuICAgICAgfSxcbiAgICAgIHNldEF0dHJpYnV0ZUF0Um93SW5kZXg6IChcbiAgICAgICAgcm93SW5kZXg6IG51bWJlcixcbiAgICAgICAgYXR0cjogc3RyaW5nLFxuICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICApID0+IHtcbiAgICAgICAgdGhpcy5yb3dFbGVtZW50c1tyb3dJbmRleF0uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBzZXRIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuX2hlYWRlckNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgfSxcbiAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZTogKGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5faGVhZGVySW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG4gICAgICB9LFxuICAgICAgc2V0Um93Q2hlY2tib3hDaGVja2VkQXRJbmRleDogKHJvd0luZGV4OiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5fc2V0Um93Q2hlY2tlZCh0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpLCBjaGVja2VkKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckRhdGEoKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5jdXJSZXF1ZXN0Kys7XG4gICAgY29uc3QgY3VyUmVxdWVzdCA9IHRoaXMuY3VyUmVxdWVzdDtcblxuICAgIGNvbnN0IGZpbHRlclByb20gPSB0aGlzLl93b3JrZXIuZmlsdGVyU29ydERhdGEoXG4gICAgICB0aGlzLmRhdGEsXG4gICAgICB0aGlzLl9zb3J0Q29sdW1ucyxcbiAgICAgIHRoaXMuX2ZpbHRlcixcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24sXG4gICAgICB0aGlzLl9zb3J0Q29sdW1uXG4gICAgKTtcblxuICAgIGNvbnN0IFtkYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtmaWx0ZXJQcm9tLCBuZXh0UmVuZGVyXSk7XG5cbiAgICBjb25zdCBjdXJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IGN1clRpbWUgLSBzdGFydFRpbWU7XG5cbiAgICBpZiAoZWxhcHNlZCA8IDEwMCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwIC0gZWxhcHNlZCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJSZXF1ZXN0ICE9PSBjdXJSZXF1ZXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmdldEF0dHJpYnV0ZShcImRhdGEtcm93LWlkXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUhlYWRlckNsaWNrKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGNvbHVtbklkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidGhcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4taWRcIikhO1xuICAgIGlmICghdGhpcy5jb2x1bW5zW2NvbHVtbklkXS5zb3J0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NvcnREaXJlY3Rpb24gfHwgdGhpcy5fc29ydENvbHVtbiAhPT0gY29sdW1uSWQpIHtcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc29ydERpcmVjdGlvbiA9PT0gXCJhc2NcIikge1xuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IFwiZGVzY1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0Q29sdW1uID0gdGhpcy5fc29ydERpcmVjdGlvbiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGNvbHVtbklkO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwic29ydGluZy1jaGFuZ2VkXCIsIHtcbiAgICAgIGNvbHVtbjogY29sdW1uSWQsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX3NvcnREaXJlY3Rpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZSgpIHtcbiAgICB0aGlzLl9oZWFkZXJDaGVja2VkID0gdGhpcy5faGVhZGVyQ2hlY2tib3guY2hlY2tlZDtcbiAgICB0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlID0gdGhpcy5faGVhZGVyQ2hlY2tib3guaW5kZXRlcm1pbmF0ZTtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJvd0NoZWNrYm94Q2hhbmdlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZXYudGFyZ2V0IGFzIEhhQ2hlY2tib3g7XG4gICAgY29uc3Qgcm93SWQgPSBjaGVja2JveC5jbG9zZXN0KFwidHJcIikhLmdldEF0dHJpYnV0ZShcImRhdGEtcm93LWlkXCIpO1xuXG4gICAgdGhpcy5fc2V0Um93Q2hlY2tlZChyb3dJZCEsIGNoZWNrYm94LmNoZWNrZWQpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVSb3dDaGVja2JveENoYW5nZShldik7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSb3dDbGljayhldjogRXZlbnQpIHtcbiAgICBjb25zdCByb3dJZCA9IChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAuY2xvc2VzdChcInRyXCIpIVxuICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtcm93LWlkXCIpITtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJyb3ctY2xpY2tcIiwgeyBpZDogcm93SWQgfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFJvd0NoZWNrZWQocm93SWQ6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGlmIChjaGVja2VkICYmICF0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhyb3dJZCkpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWRSb3dzID0gWy4uLnRoaXMuX2NoZWNrZWRSb3dzLCByb3dJZF07XG4gICAgfSBlbHNlIGlmICghY2hlY2tlZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9jaGVja2VkUm93cy5pbmRleE9mKHJvd0lkKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fY2hlY2tlZFJvd3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwic2VsZWN0aW9uLWNoYW5nZWRcIiwge1xuICAgICAgaWQ6IHJvd0lkLFxuICAgICAgc2VsZWN0ZWQ6IGNoZWNrZWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTZWFyY2hDaGFuZ2UoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fZGVib3VuY2VTZWFyY2goZXYpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLyogZGVmYXVsdCBtZGMgc3R5bGVzLCBjb2xvcnMgY2hhbmdlZCwgd2l0aG91dCBjaGVja2JveCBzdHlsZXMgKi9cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jb250ZW50IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTc4NTcxNDI5ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhdGEtdGFibGUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LWNvbG9yKSwgMC4wNCk7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IHtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3c6bm90KC5tZGMtZGF0YS10YWJsZV9fcm93LS1zZWxlY3RlZCk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjA0KTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93IHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3JvdyB7XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3gsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94IHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIH1cbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3gsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1jaGVja2JveFtkaXI9XCJydGxcIl0sXG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3gsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94W2Rpcj1cInJ0bFwiXSB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNzg1NzE0MjllbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpYyxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpY1tkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNzE0Mjg1NzFlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGxbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpY1tkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC8qIGN1c3RvbSBmcm9tIGhlcmUgKi9cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwuc29ydGFibGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQ6bm90KC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWMpOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uKVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMjRweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwubm90LXNvcnRlZCA+ICoge1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZSAwcztcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwubm90LXNvcnRlZCBoYS1pY29uIHtcbiAgICAgICAgbGVmdDogLTM2cHg7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQ6bm90KC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWMpOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uKTpob3ZlclxuICAgICAgICBzcGFuIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbDpob3Zlci5ub3Qtc29ydGVkIGhhLWljb24ge1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGF0YS10YWJsZVwiOiBIYURhdGFUYWJsZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1jaGVja2JveFwiO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1jaGVja2JveC9td2MtY2hlY2tib3gtY3NzXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NDaGVja2JveCA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1jaGVja2JveFwiKSBhcyBDb25zdHJ1Y3RvcjxDaGVja2JveD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY2hlY2tib3hcIilcbmV4cG9ydCBjbGFzcyBIYUNoZWNrYm94IGV4dGVuZHMgTXdjQ2hlY2tib3gge1xuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1kYy10aGVtZS1zZWNvbmRhcnlcIiwgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDplbmFibGVkOm5vdCg6Y2hlY2tlZCk6bm90KDppbmRldGVybWluYXRlKVxuICAgICAgICAgIH4gLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjU0KTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jaGVja2JveFwiOiBIYUNoZWNrYm94O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQTJCQTs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBSUE7QUFDQTtBQWNBOzs7QUE1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQVlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUFBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQUE7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMEJBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQUE7QUFDQTtBQW5DQTtBQUFBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFBQTtBQTBFQTtBQUNBO0FBQUE7QUE4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFSQTtBQVVBO0FBb0JBO0FBTUE7QUFBQTtBQUNBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBSkE7QUFjQTtBQXRDQTtBQThDQTtBQS9MQTtBQUFBO0FBQUE7QUFBQTtBQWlNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUF1Q0E7QUF6T0E7QUFBQTtBQUFBO0FBQUE7QUEyT0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW1CQTtBQUFBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBd0JBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzT0E7QUFBQTtBQUFBO0FBQUE7QUF1UUE7QUFDQTtBQXhRQTtBQUFBO0FBQUE7QUFBQTtBQTJRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBL1JBO0FBQUE7QUFBQTtBQUFBO0FBa1NBO0FBQ0E7QUFDQTtBQUNBO0FBclNBO0FBQUE7QUFBQTtBQUFBO0FBd1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN1NBO0FBQUE7QUFBQTtBQUFBO0FBZ1RBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcFRBO0FBQUE7QUFBQTtBQUFBO0FBdVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQW5VQTtBQUFBO0FBQUE7QUFBQTtBQXNVQTtBQUNBO0FBdlVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwVUE7QUFpTEE7QUEzZkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFTQTtBQWhCQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==