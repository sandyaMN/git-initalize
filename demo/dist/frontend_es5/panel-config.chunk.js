(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
var isComponentLoaded = function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
};

/***/ }),

/***/ "./src/common/dom/media_query.ts":
/*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
/*! exports provided: listenMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMediaQuery", function() { return listenMediaQuery; });
/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
var listenMediaQuery = function listenMediaQuery(mediaQuery, matchesChanged) {
  var mql = matchMedia(mediaQuery);

  var listener = function listener(e) {
    return matchesChanged(e.matches);
  };

  mql.addListener(listener);
  matchesChanged(mql.matches);
  return function () {
    return mql.removeListener(listener);
  };
};

/***/ }),

/***/ "./src/data/cloud.ts":
/*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
/*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, convertThingTalk, updateCloudPref, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant, updateCloudAlexaEntityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudStatus", function() { return fetchCloudStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudhook", function() { return createCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCloudhook", function() { return deleteCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectCloudRemote", function() { return connectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectCloudRemote", function() { return disconnectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudSubscriptionInfo", function() { return fetchCloudSubscriptionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertThingTalk", function() { return convertThingTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudPref", function() { return updateCloudPref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudGoogleEntityConfig", function() { return updateCloudGoogleEntityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudSyncGoogleAssistant", function() { return cloudSyncGoogleAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudAlexaEntityConfig", function() { return updateCloudAlexaEntityConfig; });
var fetchCloudStatus = function fetchCloudStatus(hass) {
  return hass.callWS({
    type: "cloud/status"
  });
};
var createCloudhook = function createCloudhook(hass, webhookId) {
  return hass.callWS({
    type: "cloud/cloudhook/create",
    webhook_id: webhookId
  });
};
var deleteCloudhook = function deleteCloudhook(hass, webhookId) {
  return hass.callWS({
    type: "cloud/cloudhook/delete",
    webhook_id: webhookId
  });
};
var connectCloudRemote = function connectCloudRemote(hass) {
  return hass.callWS({
    type: "cloud/remote/connect"
  });
};
var disconnectCloudRemote = function disconnectCloudRemote(hass) {
  return hass.callWS({
    type: "cloud/remote/disconnect"
  });
};
var fetchCloudSubscriptionInfo = function fetchCloudSubscriptionInfo(hass) {
  return hass.callWS({
    type: "cloud/subscription"
  });
};
var convertThingTalk = function convertThingTalk(hass, query) {
  return hass.callWS({
    type: "cloud/thingtalk/convert",
    query: query
  });
};
var updateCloudPref = function updateCloudPref(hass, prefs) {
  return hass.callWS(Object.assign({
    type: "cloud/update_prefs"
  }, prefs));
};
var updateCloudGoogleEntityConfig = function updateCloudGoogleEntityConfig(hass, entityId, values) {
  return hass.callWS(Object.assign({
    type: "cloud/google_assistant/entities/update",
    entity_id: entityId
  }, values));
};
var cloudSyncGoogleAssistant = function cloudSyncGoogleAssistant(hass) {
  return hass.callApi("POST", "cloud/google_actions/sync");
};
var updateCloudAlexaEntityConfig = function updateCloudAlexaEntityConfig(hass, entityId, values) {
  return hass.callWS(Object.assign({
    type: "cloud/alexa/entities/update",
    entity_id: entityId
  }, values));
};

/***/ }),

/***/ "./src/panels/config/ha-panel-config.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/ha-panel-config.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");
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









var HaPanelConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-panel-config")], function (_initialize, _HassRouterPage) {
  var HaPanelConfig =
  /*#__PURE__*/
  function (_HassRouterPage2) {
    _inherits(HaPanelConfig, _HassRouterPage2);

    function HaPanelConfig() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaPanelConfig);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaPanelConfig)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaPanelConfig;
  }(_HassRouterPage);

  return {
    F: HaPanelConfig,
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
      key: "routerOptions",
      value: function value() {
        return {
          defaultPage: "dashboard",
          cacheAll: true,
          preloadAll: true,
          routes: {
            area_registry: {
              tag: "ha-config-area-registry",
              load: function load() {
                return Promise.all(/*! import() | panel-config-area-registry */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-area-registry"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e("panel-config-area-registry")]).then(__webpack_require__.bind(null, /*! ./area_registry/ha-config-area-registry */ "./src/panels/config/area_registry/ha-config-area-registry.ts"));
              }
            },
            automation: {
              tag: "ha-config-automation",
              load: function load() {
                return Promise.all(/*! import() | panel-config-automation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e(6), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e(7), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e(9), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e(11), __webpack_require__.e("more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation")]).then(__webpack_require__.bind(null, /*! ./automation/ha-config-automation */ "./src/panels/config/automation/ha-config-automation.js"));
              }
            },
            cloud: {
              tag: "ha-config-cloud",
              load: function load() {
                return Promise.all(/*! import() | panel-config-cloud */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e(7), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e(8), __webpack_require__.e("panel-config-cloud~panel-config-zwave"), __webpack_require__.e("panel-config-cloud")]).then(__webpack_require__.bind(null, /*! ./cloud/ha-config-cloud */ "./src/panels/config/cloud/ha-config-cloud.ts"));
              }
            },
            core: {
              tag: "ha-config-core",
              load: function load() {
                return Promise.all(/*! import() | panel-config-core */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-config-core"), __webpack_require__.e(8), __webpack_require__.e("panel-config-core")]).then(__webpack_require__.bind(null, /*! ./core/ha-config-core */ "./src/panels/config/core/ha-config-core.js"));
              }
            },
            devices: {
              tag: "ha-config-devices",
              load: function load() {
                return Promise.all(/*! import() | panel-config-devices */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("vendors~panel-config-devices~panel-config-integrations"), __webpack_require__.e(5), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-devices~panel-config-integrations"), __webpack_require__.e("panel-config-devices")]).then(__webpack_require__.bind(null, /*! ./devices/ha-config-devices */ "./src/panels/config/devices/ha-config-devices.ts"));
              }
            },
            server_control: {
              tag: "ha-config-server-control",
              load: function load() {
                return Promise.all(/*! import() | panel-config-server-control */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e(8), __webpack_require__.e("panel-config-server-control")]).then(__webpack_require__.bind(null, /*! ./server_control/ha-config-server-control */ "./src/panels/config/server_control/ha-config-server-control.js"));
              }
            },
            customize: {
              tag: "ha-config-customize",
              load: function load() {
                return Promise.all(/*! import() | panel-config-customize */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(6), __webpack_require__.e("vendors~panel-config-customize"), __webpack_require__.e("panel-config-customize")]).then(__webpack_require__.bind(null, /*! ./customize/ha-config-customize */ "./src/panels/config/customize/ha-config-customize.js"));
              }
            },
            dashboard: {
              tag: "ha-config-dashboard",
              load: function load() {
                return Promise.all(/*! import() | panel-config-dashboard */[__webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~panel-config-dashboard"), __webpack_require__.e("panel-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./dashboard/ha-config-dashboard */ "./src/panels/config/dashboard/ha-config-dashboard.ts"));
              }
            },
            entity_registry: {
              tag: "ha-config-entity-registry",
              load: function load() {
                return Promise.all(/*! import() | panel-config-entity-registry */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-entity-registry")]).then(__webpack_require__.bind(null, /*! ./entity_registry/ha-config-entity-registry */ "./src/panels/config/entity_registry/ha-config-entity-registry.ts"));
              }
            },
            integrations: {
              tag: "ha-config-integrations",
              load: function load() {
                return Promise.all(/*! import() | panel-config-integrations */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-device~edc475cd"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e(10), __webpack_require__.e(14), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("vendors~panel-config-devices~panel-config-integrations"), __webpack_require__.e(5), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-devices~panel-config-integrations"), __webpack_require__.e("panel-config-integrations")]).then(__webpack_require__.bind(null, /*! ./integrations/ha-config-integrations */ "./src/panels/config/integrations/ha-config-integrations.ts"));
              }
            },
            person: {
              tag: "ha-config-person",
              load: function load() {
                return Promise.all(/*! import() | panel-config-person */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e("panel-config-person")]).then(__webpack_require__.bind(null, /*! ./person/ha-config-person */ "./src/panels/config/person/ha-config-person.ts"));
              }
            },
            script: {
              tag: "ha-config-script",
              load: function load() {
                return Promise.all(/*! import() | panel-config-script */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e(13), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-config-script"), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e(11), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-script")]).then(__webpack_require__.bind(null, /*! ./script/ha-config-script */ "./src/panels/config/script/ha-config-script.js"));
              }
            },
            scene: {
              tag: "ha-config-scene",
              load: function load() {
                return Promise.all(/*! import() | panel-config-scene */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e(14), __webpack_require__.e("vendors~panel-config-scene"), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e("panel-config-automation~panel-config-scene~panel-config-script"), __webpack_require__.e("panel-config-scene~person-detail-dialog"), __webpack_require__.e("panel-config-scene")]).then(__webpack_require__.bind(null, /*! ./scene/ha-config-scene */ "./src/panels/config/scene/ha-config-scene.ts"));
              }
            },
            users: {
              tag: "ha-config-users",
              load: function load() {
                return Promise.all(/*! import() | panel-config-users */[__webpack_require__.e("vendors~hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~pan~995d6f63"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~ae8f33b8"), __webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("hui-unused-entities~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-confi~d175df46"), __webpack_require__.e("panel-config-users")]).then(__webpack_require__.bind(null, /*! ./users/ha-config-users */ "./src/panels/config/users/ha-config-users.js"));
              }
            },
            zha: {
              tag: "zha-config-panel",
              load: function load() {
                return __webpack_require__.e(/*! import() | panel-config-zha */ "panel-config-zha").then(__webpack_require__.bind(null, /*! ./zha/zha-config-panel */ "./src/panels/config/zha/zha-config-panel.ts"));
              }
            },
            zwave: {
              tag: "ha-config-zwave",
              load: function load() {
                return Promise.all(/*! import() | panel-config-zwave */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~827dd7a2"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~ed11b2f8"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(6), __webpack_require__.e("vendors~dialog-zha-device-info~panel-config-zwave~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e(8), __webpack_require__.e("panel-config-cloud~panel-config-zwave"), __webpack_require__.e("panel-config-zwave")]).then(__webpack_require__.bind(null, /*! ./zwave/ha-config-zwave */ "./src/panels/config/zwave/ha-config-zwave.js"));
              }
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wideSidebar",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_wide",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_coreUserData",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cloudStatus",
      value: void 0
    }, {
      kind: "field",
      key: "_listeners",
      value: function value() {
        return [];
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        _get(_getPrototypeOf(HaPanelConfig.prototype), "connectedCallback", this).call(this);

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1040px)", function (matches) {
          _this2._wide = matches;
        }));

        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__["listenMediaQuery"])("(min-width: 1296px)", function (matches) {
          _this2._wideSidebar = matches;
        }));

        this._listeners.push(Object(_data_frontend__WEBPACK_IMPORTED_MODULE_6__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").subscribe(function (coreUserData) {
          _this2._coreUserData = coreUserData || {};
        }));
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaPanelConfig.prototype), "disconnectedCallback", this).call(this);

        while (this._listeners.length) {
          this._listeners.pop()();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this3 = this;

        _get(_getPrototypeOf(HaPanelConfig.prototype), "firstUpdated", this).call(this, changedProps);

        if (Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__["isComponentLoaded"])(this.hass, "cloud")) {
          this._updateCloudStatus();
        }

        this.addEventListener("ha-refresh-cloud-status", function () {
          return _this3._updateCloudStatus();
        });
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        var showAdvanced = !!(this._coreUserData && this._coreUserData.showAdvanced);
        var isWide = this.hass.dockedSidebar === "docked" ? this._wideSidebar : this._wide;

        if ("setProperties" in el) {
          // As long as we have Polymer panels
          el.setProperties({
            route: this.routeTail,
            hass: this.hass,
            showAdvanced: showAdvanced,
            isWide: isWide,
            narrow: this.narrow,
            cloudStatus: this._cloudStatus
          });
        } else {
          el.route = this.routeTail;
          el.hass = this.hass;
          el.showAdvanced = showAdvanced;
          el.isWide = isWide;
          el.narrow = this.narrow;
          el.cloudStatus = this._cloudStatus;
        }
      }
    }, {
      kind: "method",
      key: "_updateCloudStatus",
      value: function _updateCloudStatus() {
        var _this4 = this;

        return regeneratorRuntime.async(function _updateCloudStatus$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(Object(_data_cloud__WEBPACK_IMPORTED_MODULE_3__["fetchCloudStatus"])(this.hass));

              case 2:
                this._cloudStatus = _context.sent;

                if (this._cloudStatus.cloud === "connecting") {
                  setTimeout(function () {
                    return _this4._updateCloudStatus();
                  }, 5000);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__["HassRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9tZWRpYV9xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1wYW5lbC1jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBjb25zdCBpc0NvbXBvbmVudExvYWRlZCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29tcG9uZW50OiBzdHJpbmdcbik6IGJvb2xlYW4gPT4gaGFzcyAmJiBoYXNzLmNvbmZpZy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTE7XG4iLCIvKipcbiAqIEF0dGFjaCBhIG1lZGlhIHF1ZXJ5LiBMaXN0ZW5lciBpcyBjYWxsZWQgcmlnaHQgYXdheSBhbmQgd2hlbiBpdCBtYXRjaGVzLlxuICogQHBhcmFtIG1lZGlhUXVlcnkgbWVkaWEgcXVlcnkgdG8gbWF0Y2guXG4gKiBAcGFyYW0gbGlzdGVuZXIgbGlzdGVuZXIgdG8gY2FsbCB3aGVuIG1lZGlhIHF1ZXJ5IGNoYW5nZXMgYmV0d2VlbiBtYXRjaC91bm1hdGNoXG4gKiBAcmV0dXJucyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICovXG5leHBvcnQgY29uc3QgbGlzdGVuTWVkaWFRdWVyeSA9IChcbiAgbWVkaWFRdWVyeTogc3RyaW5nLFxuICBtYXRjaGVzQ2hhbmdlZDogKG1hdGNoZXM6IGJvb2xlYW4pID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBtcWwgPSBtYXRjaE1lZGlhKG1lZGlhUXVlcnkpO1xuICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiBtYXRjaGVzQ2hhbmdlZChlLm1hdGNoZXMpO1xuICBtcWwuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICBtYXRjaGVzQ2hhbmdlZChtcWwubWF0Y2hlcyk7XG4gIHJldHVybiAoKSA9PiBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVudGl0eUZpbHRlciB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXJcIjtcbmltcG9ydCB7IEF1dG9tYXRpb25Db25maWcgfSBmcm9tIFwiLi9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckNvbnRhaW5lciB9IGZyb20gXCIuLi9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vdGhpbmd0YWxrL2RpYWxvZy10aGluZ3RhbGtcIjtcblxuaW50ZXJmYWNlIENsb3VkU3RhdHVzQmFzZSB7XG4gIGxvZ2dlZF9pbjogYm9vbGVhbjtcbiAgY2xvdWQ6IFwiZGlzY29ubmVjdGVkXCIgfCBcImNvbm5lY3RpbmdcIiB8IFwiY29ubmVjdGVkXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlRW50aXR5Q29uZmlnIHtcbiAgc2hvdWxkX2V4cG9zZT86IGJvb2xlYW47XG4gIG92ZXJyaWRlX25hbWU/OiBzdHJpbmc7XG4gIGFsaWFzZXM/OiBzdHJpbmdbXTtcbiAgZGlzYWJsZV8yZmE/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXhhRW50aXR5Q29uZmlnIHtcbiAgc2hvdWxkX2V4cG9zZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VydGlmaWNhdGVJbmZvcm1hdGlvbiB7XG4gIGNvbW1vbl9uYW1lOiBzdHJpbmc7XG4gIGV4cGlyZV9kYXRlOiBzdHJpbmc7XG4gIGZpbmdlcnByaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRQcmVmZXJlbmNlcyB7XG4gIGdvb2dsZV9lbmFibGVkOiBib29sZWFuO1xuICBhbGV4YV9lbmFibGVkOiBib29sZWFuO1xuICByZW1vdGVfZW5hYmxlZDogYm9vbGVhbjtcbiAgZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3Bpbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjbG91ZGhvb2tzOiB7IFt3ZWJob29rSWQ6IHN0cmluZ106IENsb3VkV2ViaG9vayB9O1xuICBnb29nbGVfZW50aXR5X2NvbmZpZ3M6IHtcbiAgICBbZW50aXR5SWQ6IHN0cmluZ106IEdvb2dsZUVudGl0eUNvbmZpZztcbiAgfTtcbiAgYWxleGFfZW50aXR5X2NvbmZpZ3M6IHtcbiAgICBbZW50aXR5SWQ6IHN0cmluZ106IEFsZXhhRW50aXR5Q29uZmlnO1xuICB9O1xuICBhbGV4YV9yZXBvcnRfc3RhdGU6IGJvb2xlYW47XG4gIGdvb2dsZV9yZXBvcnRfc3RhdGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIENsb3VkU3RhdHVzTG9nZ2VkSW4gPSBDbG91ZFN0YXR1c0Jhc2UgJiB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGdvb2dsZV9lbnRpdGllczogRW50aXR5RmlsdGVyO1xuICBnb29nbGVfZG9tYWluczogc3RyaW5nW107XG4gIGFsZXhhX2VudGl0aWVzOiBFbnRpdHlGaWx0ZXI7XG4gIHByZWZzOiBDbG91ZFByZWZlcmVuY2VzO1xuICByZW1vdGVfZG9tYWluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHJlbW90ZV9jb25uZWN0ZWQ6IGJvb2xlYW47XG4gIHJlbW90ZV9jZXJ0aWZpY2F0ZTogdW5kZWZpbmVkIHwgQ2VydGlmaWNhdGVJbmZvcm1hdGlvbjtcbn07XG5cbmV4cG9ydCB0eXBlIENsb3VkU3RhdHVzID0gQ2xvdWRTdGF0dXNCYXNlIHwgQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpcHRpb25JbmZvIHtcbiAgaHVtYW5fZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZFdlYmhvb2sge1xuICB3ZWJob29rX2lkOiBzdHJpbmc7XG4gIGNsb3VkaG9va19pZDogc3RyaW5nO1xuICBjbG91ZGhvb2tfdXJsOiBzdHJpbmc7XG4gIG1hbmFnZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoaW5nVGFsa0NvbnZlcnNpb24ge1xuICBjb25maWc6IFBhcnRpYWw8QXV0b21hdGlvbkNvbmZpZz47XG4gIHBsYWNlaG9sZGVyczogUGxhY2Vob2xkZXJDb250YWluZXI7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkU3RhdHVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkU3RhdHVzPih7IHR5cGU6IFwiY2xvdWQvc3RhdHVzXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkV2ViaG9vaz4oe1xuICAgIHR5cGU6IFwiY2xvdWQvY2xvdWRob29rL2NyZWF0ZVwiLFxuICAgIHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL2Nsb3VkaG9vay9kZWxldGVcIixcbiAgICB3ZWJob29rX2lkOiB3ZWJob29rSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9jb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9kaXNjb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8U3Vic2NyaXB0aW9uSW5mbz4oeyB0eXBlOiBcImNsb3VkL3N1YnNjcmlwdGlvblwiIH0pO1xuXG5leHBvcnQgY29uc3QgY29udmVydFRoaW5nVGFsayA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBxdWVyeTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxUaGluZ1RhbGtDb252ZXJzaW9uPih7IHR5cGU6IFwiY2xvdWQvdGhpbmd0YWxrL2NvbnZlcnRcIiwgcXVlcnkgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDbG91ZFByZWYgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHByZWZzOiB7XG4gICAgZ29vZ2xlX2VuYWJsZWQ/OiBDbG91ZFByZWZlcmVuY2VzW1wiZ29vZ2xlX2VuYWJsZWRcIl07XG4gICAgYWxleGFfZW5hYmxlZD86IENsb3VkUHJlZmVyZW5jZXNbXCJhbGV4YV9lbmFibGVkXCJdO1xuICAgIGFsZXhhX3JlcG9ydF9zdGF0ZT86IENsb3VkUHJlZmVyZW5jZXNbXCJhbGV4YV9yZXBvcnRfc3RhdGVcIl07XG4gICAgZ29vZ2xlX3JlcG9ydF9zdGF0ZT86IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfcmVwb3J0X3N0YXRlXCJdO1xuICAgIGdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW4/OiBDbG91ZFByZWZlcmVuY2VzW1wiZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpblwiXTtcbiAgfVxuKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjbG91ZC91cGRhdGVfcHJlZnNcIixcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFsdWVzOiBHb29nbGVFbnRpdHlDb25maWdcbikgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5Q29uZmlnPih7XG4gICAgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzL3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGkoXCJQT1NUXCIsIFwiY2xvdWQvZ29vZ2xlX2FjdGlvbnMvc3luY1wiKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHZhbHVlczogQWxleGFFbnRpdHlDb25maWdcbikgPT5cbiAgaGFzcy5jYWxsV1M8QWxleGFFbnRpdHlDb25maWc+KHtcbiAgICB0eXBlOiBcImNsb3VkL2FsZXhhL2VudGl0aWVzL3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcbiIsImltcG9ydCB7IHByb3BlcnR5LCBQcm9wZXJ0eVZhbHVlcywgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENsb3VkU3RhdHVzLCBmZXRjaENsb3VkU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IGxpc3Rlbk1lZGlhUXVlcnkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9tZWRpYV9xdWVyeVwiO1xuaW1wb3J0IHsgSGFzc1JvdXRlclBhZ2UsIFJvdXRlck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQge1xuICBDb3JlRnJvbnRlbmRVc2VyRGF0YSxcbiAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLXBhbmVsLWNvbmZpZ1wiKVxuY2xhc3MgSGFQYW5lbENvbmZpZyBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJkYXNoYm9hcmRcIixcbiAgICBjYWNoZUFsbDogdHJ1ZSxcbiAgICBwcmVsb2FkQWxsOiB0cnVlLFxuICAgIHJvdXRlczoge1xuICAgICAgYXJlYV9yZWdpc3RyeToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWFyZWEtcmVnaXN0cnlcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1hcmVhLXJlZ2lzdHJ5XCIgKi8gXCIuL2FyZWFfcmVnaXN0cnkvaGEtY29uZmlnLWFyZWEtcmVnaXN0cnlcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgYXV0b21hdGlvbjoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWF1dG9tYXRpb25cIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1hdXRvbWF0aW9uXCIgKi8gXCIuL2F1dG9tYXRpb24vaGEtY29uZmlnLWF1dG9tYXRpb25cIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgY2xvdWQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1jbG91ZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNsb3VkXCIgKi8gXCIuL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBjb3JlOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctY29yZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNvcmVcIiAqLyBcIi4vY29yZS9oYS1jb25maWctY29yZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBkZXZpY2VzOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZGV2aWNlc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWRldmljZXNcIiAqLyBcIi4vZGV2aWNlcy9oYS1jb25maWctZGV2aWNlc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXJfY29udHJvbDoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLXNlcnZlci1jb250cm9sXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2VydmVyLWNvbnRyb2xcIiAqLyBcIi4vc2VydmVyX2NvbnRyb2wvaGEtY29uZmlnLXNlcnZlci1jb250cm9sXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbWl6ZToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWN1c3RvbWl6ZVwiICovIFwiLi9jdXN0b21pemUvaGEtY29uZmlnLWN1c3RvbWl6ZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1kYXNoYm9hcmRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1kYXNoYm9hcmRcIiAqLyBcIi4vZGFzaGJvYXJkL2hhLWNvbmZpZy1kYXNoYm9hcmRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZW50aXR5X3JlZ2lzdHJ5OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCIgKi8gXCIuL2VudGl0eV9yZWdpc3RyeS9oYS1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIGludGVncmF0aW9uczoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWludGVncmF0aW9uc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWludGVncmF0aW9uc1wiICovIFwiLi9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWludGVncmF0aW9uc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBwZXJzb246IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1wZXJzb25cIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1wZXJzb25cIiAqLyBcIi4vcGVyc29uL2hhLWNvbmZpZy1wZXJzb25cIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2NyaXB0XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2NyaXB0XCIgKi8gXCIuL3NjcmlwdC9oYS1jb25maWctc2NyaXB0XCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHNjZW5lOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2NlbmVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1zY2VuZVwiICovIFwiLi9zY2VuZS9oYS1jb25maWctc2NlbmVcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgdXNlcnM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy11c2Vyc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXVzZXJzXCIgKi8gXCIuL3VzZXJzL2hhLWNvbmZpZy11c2Vyc1wiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB6aGE6IHtcbiAgICAgICAgdGFnOiBcInpoYS1jb25maWctcGFuZWxcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy16aGFcIiAqLyBcIi4vemhhL3poYS1jb25maWctcGFuZWxcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgendhdmU6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy16d2F2ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXp3YXZlXCIgKi8gXCIuL3p3YXZlL2hhLWNvbmZpZy16d2F2ZVwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93aWRlU2lkZWJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF93aWRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvcmVVc2VyRGF0YT86IENvcmVGcm9udGVuZFVzZXJEYXRhO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzO1xuXG4gIHByaXZhdGUgX2xpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGxpc3Rlbk1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMDQwcHgpXCIsIChtYXRjaGVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3dpZGUgPSBtYXRjaGVzO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgbGlzdGVuTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEyOTZweClcIiwgKG1hdGNoZXMpID0+IHtcbiAgICAgICAgdGhpcy5fd2lkZVNpZGViYXIgPSBtYXRjaGVzO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uKFxuICAgICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgICAgXCJjb3JlXCJcbiAgICAgICkuc3Vic2NyaWJlKChjb3JlVXNlckRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5fY29yZVVzZXJEYXRhID0gY29yZVVzZXJEYXRhIHx8IHt9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2hpbGUgKHRoaXMuX2xpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wb3AoKSEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBcImNsb3VkXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiLCAoKSA9PlxuICAgICAgdGhpcy5fdXBkYXRlQ2xvdWRTdGF0dXMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKGVsKSB7XG4gICAgY29uc3Qgc2hvd0FkdmFuY2VkID0gISEoXG4gICAgICB0aGlzLl9jb3JlVXNlckRhdGEgJiYgdGhpcy5fY29yZVVzZXJEYXRhLnNob3dBZHZhbmNlZFxuICAgICk7XG4gICAgY29uc3QgaXNXaWRlID1cbiAgICAgIHRoaXMuaGFzcy5kb2NrZWRTaWRlYmFyID09PSBcImRvY2tlZFwiID8gdGhpcy5fd2lkZVNpZGViYXIgOiB0aGlzLl93aWRlO1xuXG4gICAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIGVsKSB7XG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGhhdmUgUG9seW1lciBwYW5lbHNcbiAgICAgIChlbCBhcyBQb2x5bWVyRWxlbWVudCkuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlVGFpbCxcbiAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICBzaG93QWR2YW5jZWQsXG4gICAgICAgIGlzV2lkZSxcbiAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgY2xvdWRTdGF0dXM6IHRoaXMuX2Nsb3VkU3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJvdXRlID0gdGhpcy5yb3V0ZVRhaWw7XG4gICAgICBlbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgZWwuc2hvd0FkdmFuY2VkID0gc2hvd0FkdmFuY2VkO1xuICAgICAgZWwuaXNXaWRlID0gaXNXaWRlO1xuICAgICAgZWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gICAgICBlbC5jbG91ZFN0YXR1cyA9IHRoaXMuX2Nsb3VkU3RhdHVzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUNsb3VkU3RhdHVzKCkge1xuICAgIHRoaXMuX2Nsb3VkU3RhdHVzID0gYXdhaXQgZmV0Y2hDbG91ZFN0YXR1cyh0aGlzLmhhc3MpO1xuXG4gICAgaWYgKHRoaXMuX2Nsb3VkU3RhdHVzLmNsb3VkID09PSBcImNvbm5lY3RpbmdcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpLCA1MDAwKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhbmVsLWNvbmZpZ1wiOiBIYVBhbmVsQ29uZmlnO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTs7Ozs7O0FBTUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3lEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQVdBO0FBREE7QUFWQTtBQWVBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsc21CQUVBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBLDIrRkFFQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQSx5eUJBRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEscXRCQUVBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBLHMzQ0FFQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQSxxZkFFQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQSxnakNBRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEsa2NBRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEsMG1DQUVBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBLDA4Q0FFQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQSx3a0JBRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEsaTlFQUVBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBLHd4Q0FFQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQSwwc0JBRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEscU5BRUE7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUEsaXJDQUVBO0FBRkE7QUFGQTtBQTFHQTtBQUpBOzs7O0FBd0hBOzs7QUFBQTs7OztBQUNBOzs7QUFBQTs7OztBQUNBOzs7OztBQUNBOzs7Ozs7O0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBck1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=