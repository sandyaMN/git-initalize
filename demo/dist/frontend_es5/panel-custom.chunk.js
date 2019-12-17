(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-custom"],{

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
var _load = function _load(tag, url, type) {
  // This promise will be used by Promise.all to determine success or failure
  return new Promise(function (resolve, reject) {
    var element = document.createElement(tag);
    var attr = "src";
    var parent = "body"; // Important success and error for the promise

    element.onload = function () {
      return resolve(url);
    };

    element.onerror = function () {
      return reject(url);
    }; // Need to set different attributes depending on tag type


    switch (tag) {
      case "script":
        element.async = true;

        if (type) {
          element.type = type;
        }

        break;

      case "link":
        element.type = "text/css";
        element.rel = "stylesheet";
        attr = "href";
        parent = "head";
    } // Inject into document to kick off loading


    element[attr] = url;
    document[parent].appendChild(element);
  });
};

var loadCSS = function loadCSS(url) {
  return _load("link", url);
};
var loadJS = function loadJS(url) {
  return _load("script", url);
};
var loadImg = function loadImg(url) {
  return _load("img", url);
};
var loadModule = function loadModule(url) {
  return _load("script", url, "module");
};

/***/ }),

/***/ "./src/panels/custom/ha-panel-custom.ts":
/*!**********************************************!*\
  !*** ./src/panels/custom/ha-panel-custom.ts ***!
  \**********************************************/
/*! exports provided: HaPanelCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPanelCustom", function() { return HaPanelCustom; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/custom-panel/load-custom-panel */ "./src/util/custom-panel/load-custom-panel.ts");
/* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/custom-panel/create-custom-panel-element */ "./src/util/custom-panel/create-custom-panel-element.ts");
/* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/custom-panel/set-custom-panel-properties */ "./src/util/custom-panel/set-custom-panel-properties.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var HaPanelCustom = _decorate(null, function (_initialize, _UpdatingElement) {
  var HaPanelCustom =
  /*#__PURE__*/
  function (_UpdatingElement2) {
    _inherits(HaPanelCustom, _UpdatingElement2);

    function HaPanelCustom() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaPanelCustom);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaPanelCustom)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaPanelCustom;
  }(_UpdatingElement);

  return {
    F: HaPanelCustom,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "panel",
      value: void 0
    }, {
      kind: "field",
      key: "_setProperties",
      value: void 0
    }, {
      kind: "field",
      key: "navigate",
      value: function value() {
        var _this2 = this;

        return function (path, replace) {
          return Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(_this2, path, replace);
        };
      }
    }, {
      kind: "method",
      key: "registerIframe",
      value: // Since navigate fires events on `window`, we need to expose this as a function
      // to allow custom panels to forward their location changes to the main window
      // instead of their iframe window.
      function registerIframe(initialize, setProperties) {
        initialize(this.panel, {
          hass: this.hass,
          narrow: this.narrow,
          route: this.route
        });
        this._setProperties = setProperties;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaPanelCustom.prototype), "disconnectedCallback", this).call(this);

        this._cleanupPanel();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("panel")) {
          // Clean up old things if we had a panel
          if (changedProps.get("panel")) {
            this._cleanupPanel();
          }

          this._createPanel(this.panel);

          return;
        }

        if (!this._setProperties) {
          return;
        }

        var props = {}; // @ts-ignore

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = changedProps.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;
            props[key] = this[key];
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this._setProperties(props);
      }
    }, {
      kind: "method",
      key: "_cleanupPanel",
      value: function _cleanupPanel() {
        delete window.customPanel;
        this._setProperties = undefined;

        while (this.lastChild) {
          this.removeChild(this.lastChild);
        }
      }
    }, {
      kind: "method",
      key: "_createPanel",
      value: function _createPanel(panel) {
        var _this3 = this;

        var config = panel.config._panel_custom;
        var tempA = document.createElement("a");
        tempA.href = config.html_url || config.js_url || config.module_url || "";

        if (!config.trust_external && !["localhost", "127.0.0.1", location.hostname].includes(tempA.hostname)) {
          if (!confirm("".concat(this.hass.localize("ui.panel.custom.external_panel.question_trust", "name", config.name, "link", tempA.href), "\n\n           ").concat(this.hass.localize("ui.panel.custom.external_panel.complete_access"), "\n\n           (").concat(this.hass.localize("ui.panel.custom.external_panel.hide_message"), ")"))) {
            return;
          }
        }

        if (!config.embed_iframe) {
          Object(_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__["loadCustomPanel"])(config).then(function () {
            var element = Object(_util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__["createCustomPanelElement"])(config);

            _this3._setProperties = function (props) {
              return Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__["setCustomPanelProperties"])(element, props);
            };

            Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__["setCustomPanelProperties"])(element, {
              panel: panel,
              hass: _this3.hass,
              narrow: _this3.narrow,
              route: _this3.route
            });

            _this3.appendChild(element);
          }, function () {
            alert("Unable to load custom panel from ".concat(tempA.href));
          });
          return;
        }

        window.customPanel = this;
        this.innerHTML = "\n    <style>\n      iframe {\n        border: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n        background-color: var(--primary-background-color);\n      }\n    </style>\n    <iframe></iframe>\n    ".trim();
        var iframeDoc = this.querySelector("iframe").contentWindow.document;
        iframeDoc.open();
        iframeDoc.write("<!doctype html><script src='".concat(window.customPanelJS, "'></script>"));
        iframeDoc.close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);
customElements.define("ha-panel-custom", HaPanelCustom);

/***/ }),

/***/ "./src/util/custom-panel/create-custom-panel-element.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/create-custom-panel-element.ts ***!
  \**************************************************************/
/*! exports provided: createCustomPanelElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomPanelElement", function() { return createCustomPanelElement; });
var createCustomPanelElement = function createCustomPanelElement(panelConfig) {
  // Legacy support. Custom panels used to have to define element ha-panel-{name}
  var tagName = "html_url" in panelConfig ? "ha-panel-".concat(panelConfig.name) : panelConfig.name;
  return document.createElement(tagName);
};

/***/ }),

/***/ "./src/util/custom-panel/load-custom-panel.ts":
/*!****************************************************!*\
  !*** ./src/util/custom-panel/load-custom-panel.ts ***!
  \****************************************************/
/*! exports provided: loadCustomPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomPanel", function() { return loadCustomPanel; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Make sure we only import every JS-based panel once (HTML import has this built-in)

var JS_CACHE = {};
var loadCustomPanel = function loadCustomPanel(panelConfig) {
  if (panelConfig.html_url) {
    var toLoad = [__webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js"))];

    if (!panelConfig.embed_iframe) {
      toLoad.push(__webpack_require__.e(/*! import() | legacy-support */ "legacy-support").then(__webpack_require__.bind(null, /*! ../legacy-support */ "./src/util/legacy-support.js")));
    }

    return Promise.all(toLoad).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          importHrefPromise = _ref2[0].importHrefPromise;

      return importHrefPromise(panelConfig.html_url);
    });
  }

  if (panelConfig.js_url) {
    if (!(panelConfig.js_url in JS_CACHE)) {
      JS_CACHE[panelConfig.js_url] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(panelConfig.js_url);
    }

    return JS_CACHE[panelConfig.js_url];
  }

  if (panelConfig.module_url) {
    return Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(panelConfig.module_url);
  }

  return Promise.reject("No valid url found in panel config.");
};

/***/ }),

/***/ "./src/util/custom-panel/set-custom-panel-properties.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/set-custom-panel-properties.ts ***!
  \**************************************************************/
/*! exports provided: setCustomPanelProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomPanelProperties", function() { return setCustomPanelProperties; });
var setCustomPanelProperties = function setCustomPanelProperties(root, properties) {
  if ("setProperties" in root) {
    root.setProperties(properties);
  } else {
    Object.keys(properties).forEach(function (key) {
      root[key] = properties[key];
    });
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY3VzdG9tLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2N1c3RvbS9oYS1wYW5lbC1jdXN0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvbG9hZC1jdXN0b20tcGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2FkIGEgcmVzb3VyY2UgYW5kIGdldCBhIHByb21pc2Ugd2hlbiBsb2FkaW5nIGRvbmUuXG4vLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWxvYWRlclxuXG5jb25zdCBfbG9hZCA9IChcbiAgdGFnOiBcImxpbmtcIiB8IFwic2NyaXB0XCIgfCBcImltZ1wiLFxuICB1cmw6IHN0cmluZyxcbiAgdHlwZT86IFwibW9kdWxlXCJcbikgPT4ge1xuICAvLyBUaGlzIHByb21pc2Ugd2lsbCBiZSB1c2VkIGJ5IFByb21pc2UuYWxsIHRvIGRldGVybWluZSBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGxldCBhdHRyID0gXCJzcmNcIjtcbiAgICBsZXQgcGFyZW50ID0gXCJib2R5XCI7XG5cbiAgICAvLyBJbXBvcnRhbnQgc3VjY2VzcyBhbmQgZXJyb3IgZm9yIHRoZSBwcm9taXNlXG4gICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHVybCk7XG4gICAgZWxlbWVudC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHVybCk7XG5cbiAgICAvLyBOZWVkIHRvIHNldCBkaWZmZXJlbnQgYXR0cmlidXRlcyBkZXBlbmRpbmcgb24gdGFnIHR5cGVcbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSBcInNjcmlwdFwiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuYXN5bmMgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgYXR0ciA9IFwiaHJlZlwiO1xuICAgICAgICBwYXJlbnQgPSBcImhlYWRcIjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgaW50byBkb2N1bWVudCB0byBraWNrIG9mZiBsb2FkaW5nXG4gICAgZWxlbWVudFthdHRyXSA9IHVybDtcbiAgICBkb2N1bWVudFtwYXJlbnRdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ1NTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImxpbmtcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSlMgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEltZyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJpbWdcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkTW9kdWxlID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwsIFwibW9kdWxlXCIpO1xuIiwiaW1wb3J0IHsgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzLCBVcGRhdGluZ0VsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRDdXN0b21QYW5lbCB9IGZyb20gXCIuLi8uLi91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudFwiO1xuaW1wb3J0IHsgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEN1c3RvbVBhbmVsSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhL3BhbmVsX2N1c3RvbVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY3VzdG9tUGFuZWw6IEhhUGFuZWxDdXN0b20gfCB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhhUGFuZWxDdXN0b20gZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHBhbmVsITogQ3VzdG9tUGFuZWxJbmZvO1xuICBwcml2YXRlIF9zZXRQcm9wZXJ0aWVzPzogKHByb3BzOiB7fSkgPT4gdm9pZCB8IHVuZGVmaW5lZDtcblxuICAvLyBTaW5jZSBuYXZpZ2F0ZSBmaXJlcyBldmVudHMgb24gYHdpbmRvd2AsIHdlIG5lZWQgdG8gZXhwb3NlIHRoaXMgYXMgYSBmdW5jdGlvblxuICAvLyB0byBhbGxvdyBjdXN0b20gcGFuZWxzIHRvIGZvcndhcmQgdGhlaXIgbG9jYXRpb24gY2hhbmdlcyB0byB0aGUgbWFpbiB3aW5kb3dcbiAgLy8gaW5zdGVhZCBvZiB0aGVpciBpZnJhbWUgd2luZG93LlxuICBwdWJsaWMgbmF2aWdhdGUgPSAocGF0aDogc3RyaW5nLCByZXBsYWNlPzogYm9vbGVhbikgPT5cbiAgICBuYXZpZ2F0ZSh0aGlzLCBwYXRoLCByZXBsYWNlKTtcblxuICBwdWJsaWMgcmVnaXN0ZXJJZnJhbWUoaW5pdGlhbGl6ZSwgc2V0UHJvcGVydGllcykge1xuICAgIGluaXRpYWxpemUodGhpcy5wYW5lbCwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFByb3BlcnRpZXMgPSBzZXRQcm9wZXJ0aWVzO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2xlYW51cFBhbmVsKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJwYW5lbFwiKSkge1xuICAgICAgLy8gQ2xlYW4gdXAgb2xkIHRoaW5ncyBpZiB3ZSBoYWQgYSBwYW5lbFxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoXCJwYW5lbFwiKSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBhbmVsKHRoaXMucGFuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NldFByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgcHJvcHNba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwUGFuZWwoKSB7XG4gICAgZGVsZXRlIHdpbmRvdy5jdXN0b21QYW5lbDtcbiAgICB0aGlzLl9zZXRQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZWwocGFuZWw6IEN1c3RvbVBhbmVsSW5mbykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNvbmZpZyEuX3BhbmVsX2N1c3RvbTtcblxuICAgIGNvbnN0IHRlbXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdGVtcEEuaHJlZiA9IGNvbmZpZy5odG1sX3VybCB8fCBjb25maWcuanNfdXJsIHx8IGNvbmZpZy5tb2R1bGVfdXJsIHx8IFwiXCI7XG5cbiAgICBpZiAoXG4gICAgICAhY29uZmlnLnRydXN0X2V4dGVybmFsICYmXG4gICAgICAhW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCIsIGxvY2F0aW9uLmhvc3RuYW1lXS5pbmNsdWRlcyh0ZW1wQS5ob3N0bmFtZSlcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jdXN0b20uZXh0ZXJuYWxfcGFuZWwucXVlc3Rpb25fdHJ1c3RcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgY29uZmlnLm5hbWUsXG4gICAgICAgICAgICBcImxpbmtcIixcbiAgICAgICAgICAgIHRlbXBBLmhyZWZcbiAgICAgICAgICApfVxuXG4gICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLmNvbXBsZXRlX2FjY2Vzc1wiXG4gICAgICAgICAgICl9XG5cbiAgICAgICAgICAgKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLmhpZGVfbWVzc2FnZVwiXG4gICAgICAgICAgICl9KWBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5lbWJlZF9pZnJhbWUpIHtcbiAgICAgIGxvYWRDdXN0b21QYW5lbChjb25maWcpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50KGNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydGllcyA9IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgICAgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHBhbmVsLFxuICAgICAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChgVW5hYmxlIHRvIGxvYWQgY3VzdG9tIHBhbmVsIGZyb20gJHt0ZW1wQS5ocmVmfWApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5jdXN0b21QYW5lbCA9IHRoaXM7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgaWZyYW1lIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxpZnJhbWU+PC9pZnJhbWU+XG4gICAgYC50cmltKCk7XG4gICAgY29uc3QgaWZyYW1lRG9jID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpIS5jb250ZW50V2luZG93IS5kb2N1bWVudDtcbiAgICBpZnJhbWVEb2Mub3BlbigpO1xuICAgIGlmcmFtZURvYy53cml0ZShcbiAgICAgIGA8IWRvY3R5cGUgaHRtbD48c2NyaXB0IHNyYz0nJHt3aW5kb3cuY3VzdG9tUGFuZWxKU30nPjwvc2NyaXB0PmBcbiAgICApO1xuICAgIGlmcmFtZURvYy5jbG9zZSgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLWN1c3RvbVwiLCBIYVBhbmVsQ3VzdG9tKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQgPSAocGFuZWxDb25maWcpID0+IHtcbiAgLy8gTGVnYWN5IHN1cHBvcnQuIEN1c3RvbSBwYW5lbHMgdXNlZCB0byBoYXZlIHRvIGRlZmluZSBlbGVtZW50IGhhLXBhbmVsLXtuYW1lfVxuICBjb25zdCB0YWdOYW1lID1cbiAgICBcImh0bWxfdXJsXCIgaW4gcGFuZWxDb25maWdcbiAgICAgID8gYGhhLXBhbmVsLSR7cGFuZWxDb25maWcubmFtZX1gXG4gICAgICA6IHBhbmVsQ29uZmlnLm5hbWU7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufTtcbiIsImltcG9ydCB7IGxvYWRKUywgbG9hZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2xvYWRfcmVzb3VyY2VcIjtcblxuLy8gTWFrZSBzdXJlIHdlIG9ubHkgaW1wb3J0IGV2ZXJ5IEpTLWJhc2VkIHBhbmVsIG9uY2UgKEhUTUwgaW1wb3J0IGhhcyB0aGlzIGJ1aWx0LWluKVxuY29uc3QgSlNfQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDdXN0b21QYW5lbCA9IChwYW5lbENvbmZpZyk6IFByb21pc2U8dW5rbm93bj4gPT4ge1xuICBpZiAocGFuZWxDb25maWcuaHRtbF91cmwpIHtcbiAgICBjb25zdCB0b0xvYWQgPSBbXG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW1wb3J0LWhyZWYtcG9seWZpbGxcIiAqLyBcIi4uLy4uL3Jlc291cmNlcy9odG1sLWltcG9ydC9pbXBvcnQtaHJlZlwiXG4gICAgICApLFxuICAgIF07XG5cbiAgICBpZiAoIXBhbmVsQ29uZmlnLmVtYmVkX2lmcmFtZSkge1xuICAgICAgdG9Mb2FkLnB1c2goXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlZ2FjeS1zdXBwb3J0XCIgKi8gXCIuLi9sZWdhY3ktc3VwcG9ydFwiKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodG9Mb2FkKS50aGVuKChbeyBpbXBvcnRIcmVmUHJvbWlzZSB9XSkgPT5cbiAgICAgIGltcG9ydEhyZWZQcm9taXNlKHBhbmVsQ29uZmlnLmh0bWxfdXJsKVxuICAgICk7XG4gIH1cbiAgaWYgKHBhbmVsQ29uZmlnLmpzX3VybCkge1xuICAgIGlmICghKHBhbmVsQ29uZmlnLmpzX3VybCBpbiBKU19DQUNIRSkpIHtcbiAgICAgIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF0gPSBsb2FkSlMocGFuZWxDb25maWcuanNfdXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF07XG4gIH1cbiAgaWYgKHBhbmVsQ29uZmlnLm1vZHVsZV91cmwpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZShwYW5lbENvbmZpZy5tb2R1bGVfdXJsKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyB2YWxpZCB1cmwgZm91bmQgaW4gcGFuZWwgY29uZmlnLlwiKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzID0gKHJvb3QsIHByb3BlcnRpZXMpID0+IHtcbiAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIHJvb3QpIHtcbiAgICByb290LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByb290W2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQUE7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFjQTtBQUFBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQTdDQTtBQUFBO0FBQUE7QUFBQTtBQWdEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQWhJQTtBQUFBO0FBQUE7QUFtSUE7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0Esd09BRUE7QUFDQTtBQUdBO0FBQ0Esd0xBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=