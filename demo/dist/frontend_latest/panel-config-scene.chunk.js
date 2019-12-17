(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene"],{

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
const activateScene = (hass, entityId) => hass.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (hass, entities) => hass.callService("scene", "apply", {
  entities
});
const getSceneConfig = (hass, sceneId) => hass.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (hass, sceneId, config) => hass.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (hass, id) => hass.callApi("DELETE", `config/scene/config/${id}`);

/***/ }),

/***/ "./src/dialogs/confirmation/show-dialog-confirmation.ts":
/*!**************************************************************!*\
  !*** ./src/dialogs/confirmation/show-dialog-confirmation.ts ***!
  \**************************************************************/
/*! exports provided: loadConfirmationDialog, showConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfirmationDialog", function() { return loadConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadConfirmationDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~2e5165ad"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-conf~1cfe25e7"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~more-info-dialog~panel-config-automation~panel-config-cloud~ba808462"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-confirmation */ "./src/dialogs/confirmation/dialog-confirmation.ts"));
const showConfirmationDialog = (element, systemLogDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-confirmation",
    dialogImport: loadConfirmationDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ }),

/***/ "./src/panels/config/scene/ha-config-scene.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/ha-config-scene.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _ha_scene_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-scene-editor */ "./src/panels/config/scene/ha-scene-editor.ts");
/* harmony import */ var _ha_scene_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-scene-dashboard */ "./src/panels/config/scene/ha-scene-dashboard.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
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











let HaConfigScene = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-config-scene")], function (_initialize, _HassRouterPage) {
  class HaConfigScene extends _HassRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaConfigScene,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "scenes",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          routes: {
            dashboard: {
              tag: "ha-scene-dashboard",
              cache: true
            },
            edit: {
              tag: "ha-scene-editor"
            }
          }
        };
      }

    }, {
      kind: "field",
      key: "_computeScenes",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(states => {
          const scenes = [];
          Object.values(states).forEach(state => {
            if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(state) === "scene" && !state.attributes.hidden) {
              scenes.push(state);
            }
          });
          return scenes.sort((a, b) => {
            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_7__["compare"])(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(a), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(b));
          });
        });
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl, changedProps) {
        pageEl.hass = this.hass;
        pageEl.narrow = this.narrow;
        pageEl.showAdvanced = this.showAdvanced;

        if (this.hass) {
          pageEl.scenes = this._computeScenes(this.hass.states);
        }

        if ((!changedProps || changedProps.has("route")) && this._currentPage === "edit") {
          const sceneId = this.routeTail.path.substr(1);
          pageEl.creatingNew = sceneId === "new" ? true : false;
          pageEl.scene = sceneId === "new" ? undefined : pageEl.scenes.find(entity => entity.attributes.id === sceneId);
        }
      }
    }]
  };
}, _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"]);

/***/ }),

/***/ "./src/panels/config/scene/ha-scene-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/scene/ha-scene-dashboard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
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

















let HaSceneDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-scene-dashboard")], function (_initialize, _LitElement) {
  class HaSceneDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaSceneDashboard,
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
      key: "scenes",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.scene.caption")}
      >
        <ha-config-section .isWide=${!this.narrow}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.scene.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.scene.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/scene/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.scene.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize("ui.panel.config.scene.picker.pick_scene")}
          >
            ${this.scenes.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.scene.picker.no_scenes")}
                    </p>
                  </div>
                ` : this.scenes.map(scene => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

                      <div class='scene'>
                      <paper-icon-button
                        .scene=${scene}
                        icon="hass:play"
                        title="${this.hass.localize("ui.panel.config.scene.picker.activate_scene")}"
                        @click=${this._activateScene}
                      ></paper-icon-button>
                        <paper-item-body two-line>
                          <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(scene)}</div>
                        </paper-item-body>
                          <a
                            href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_13__["ifDefined"])(scene.attributes.id ? `/config/scene/edit/${scene.attributes.id}` : undefined)}
                          >
                            <paper-icon-button
                              title="${this.hass.localize("ui.panel.config.scene.picker.edit_scene")}"
                              icon="hass:pencil"
                              .disabled=${!scene.attributes.id}
                            ></paper-icon-button>
                            ${!scene.attributes.id ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                    <paper-tooltip position="left">
                                      ${this.hass.localize("ui.panel.config.scene.picker.only_editable")}
                                    </paper-tooltip>
                                  ` : ""}
                          </a>
                      </div>
                    </a>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/scene/edit/new">
          <ha-fab
            slot="fab"
            ?is-wide=${!this.narrow}
            icon="hass:plus"
            title=${this.hass.localize("ui.panel.config.scene.picker.add_scene")}
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__["computeRTL"])(this.hass)}
          ></ha-fab>
        </a>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_activateScene",
      value: async function _activateScene(ev) {
        const scene = ev.target.scene;
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_11__["activateScene"])(this.hass, scene.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(this, {
          message: this.hass.localize("ui.panel.config.scene.activated", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(scene))
        });
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_14__["forwardHaptic"])("light");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        hass-subpage {
          min-height: 100vh;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .scene {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .scene a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
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

/***/ "./src/panels/config/scene/ha-scene-editor.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/ha-scene-editor.ts ***!
  \****************************************************/
/*! exports provided: HaSceneEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaSceneEditor", function() { return HaSceneEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_entity_ha_entities_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/entity/ha-entities-picker */ "./src/components/entity/ha-entities-picker.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../dialogs/confirmation/show-dialog-confirmation */ "./src/dialogs/confirmation/show-dialog-confirmation.ts");
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


























let HaSceneEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-scene-editor")], function (_initialize, _SubscribeMixin) {
  class HaSceneEditor extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaSceneEditor,
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
      key: "scene",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "creatingNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_dirty",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_deviceRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entityRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_storedStates",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_unsubscribeEvents",
      value: void 0
    }, {
      kind: "field",
      key: "_deviceEntityLookup",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_activateContextId",
      value: void 0
    }, {
      kind: "field",
      key: "_getEntitiesDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_22__["default"])((entities, devices, deviceEntityLookup, deviceRegs) => {
          const outputDevices = [];

          if (devices.length) {
            const deviceLookup = {};

            for (const device of deviceRegs) {
              deviceLookup[device.id] = device;
            }

            devices.forEach(deviceId => {
              const device = deviceLookup[deviceId];
              const deviceEntities = deviceEntityLookup[deviceId] || [];
              outputDevices.push({
                name: Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_19__["computeDeviceName"])(device, this.hass, this._deviceEntityLookup[device.id]),
                id: device.id,
                entities: deviceEntities
              });
            });
          }

          const outputEntities = [];
          entities.forEach(entity => {
            if (!outputDevices.find(device => device.entities.includes(entity))) {
              outputEntities.push(entity);
            }
          });
          return {
            devices: outputDevices,
            entities: outputEntities
          };
        });
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaSceneEditor.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubscribeEvents) {
          this._unsubscribeEvents();

          this._unsubscribeEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "hassSubscribe",
      value: function hassSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_20__["subscribeEntityRegistry"])(this.hass.connection, entries => {
          this._entityRegistryEntries = entries;
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_19__["subscribeDeviceRegistry"])(this.hass.connection, entries => {
          this._deviceRegistryEntries = entries;
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass) {
          return;
        }

        const {
          devices,
          entities
        } = this._getEntitiesDevices(this._entities, this._devices, this._deviceEntityLookup, this._deviceRegistryEntries);

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${this.scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(this.scene) : this.hass.localize("ui.panel.config.scene.editor.default_name")}
            </div>
            ${this.creatingNew ? "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-button
                    title="${this.hass.localize("ui.panel.config.scene.picker.delete_scene")}"
                    icon="hass:delete"
                    @click=${this._deleteTapped}
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
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.hass)
        })}"
          >
            <ha-config-section .isWide=${!this.narrow}>
              <div slot="header">
                ${this.scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(this.scene) : this.hass.localize("ui.panel.config.scene.editor.default_name")}
              </div>
              <div slot="introduction">
                ${this.hass.localize("ui.panel.config.scene.editor.introduction")}
              </div>
              <ha-card>
                <div class="card-content">
                  <paper-input
                    .value=${this.scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(this.scene) : ""}
                    @value-changed=${this._nameChanged}
                    label=${this.hass.localize("ui.panel.config.scene.editor.name")}
                  ></paper-input>
                </div>
              </ha-card>
            </ha-config-section>

            <ha-config-section .isWide=${!this.narrow}>
              <div slot="header">
                ${this.hass.localize("ui.panel.config.scene.editor.devices.header")}
              </div>
              <div slot="introduction">
                ${this.hass.localize("ui.panel.config.scene.editor.devices.introduction")}
              </div>

              ${devices.map(device => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <ha-card>
                      <div class="card-header">
                        ${device.name}
                        <paper-icon-button
                          icon="hass:delete"
                          title="${this.hass.localize("ui.panel.config.scene.editor.devices.delete")}"
                          .device=${device.id}
                          @click=${this._deleteDevice}
                        ></paper-icon-button>
                      </div>
                      ${device.entities.map(entityId => {
          const stateObj = this.hass.states[entityId];

          if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <paper-icon-item
                            .entityId=${entityId}
                            @click=${this._showMoreInfo}
                            class="device-entity"
                          >
                            <state-badge
                              .stateObj=${stateObj}
                              slot="item-icon"
                            ></state-badge>
                            <paper-item-body>
                              ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(stateObj)}
                            </paper-item-body>
                          </paper-icon-item>
                        `;
        })}
                    </ha-card>
                  `)}

              <ha-card
                .header=${this.hass.localize("ui.panel.config.scene.editor.devices.add")}
              >
                <div class="card-content">
                  <ha-device-picker
                    @value-changed=${this._devicePicked}
                    .hass=${this.hass}
                    .label=${this.hass.localize("ui.panel.config.scene.editor.devices.add")}
                  />
                </div>
              </ha-card>
            </ha-config-section>

            ${this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <ha-config-section .isWide=${!this.narrow}>
                    <div slot="header">
                      ${this.hass.localize("ui.panel.config.scene.editor.entities.header")}
                    </div>
                    <div slot="introduction">
                      ${this.hass.localize("ui.panel.config.scene.editor.entities.introduction")}
                    </div>
                    ${entities.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <ha-card
                            class="entities"
                            .header=${this.hass.localize("ui.panel.config.scene.editor.entities.without_device")}
                          >
                            ${entities.map(entityId => {
          const stateObj = this.hass.states[entityId];

          if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                <paper-icon-item
                                  .entityId=${entityId}
                                  @click=${this._showMoreInfo}
                                  class="device-entity"
                                >
                                  <state-badge
                                    .stateObj=${stateObj}
                                    slot="item-icon"
                                  ></state-badge>
                                  <paper-item-body>
                                    ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(stateObj)}
                                  </paper-item-body>
                                  <paper-icon-button
                                    icon="hass:delete"
                                    .entityId=${entityId}
                                    .title="${this.hass.localize("ui.panel.config.scene.editor.entities.delete")}"
                                    @click=${this._deleteEntity}
                                  ></paper-icon-button>
                                </paper-icon-item>
                              `;
        })}
                          </ha-card>
                        ` : ""}

                    <ha-card
                      header=${this.hass.localize("ui.panel.config.scene.editor.entities.add")}
                    >
                      <div class="card-content">
                        ${this.hass.localize("ui.panel.config.scene.editor.entities.device_entities")}
                        <ha-entity-picker
                          @value-changed=${this._entityPicked}
                          .excludeDomains=${_data_scene__WEBPACK_IMPORTED_MODULE_17__["SCENE_IGNORED_DOMAINS"]}
                          .hass=${this.hass}
                          label=${this.hass.localize("ui.panel.config.scene.editor.entities.add")}
                        />
                      </div>
                    </ha-card>
                  </ha-config-section>
                ` : ""}
          </div>
        </div>
        <ha-fab
          slot="fab"
          ?is-wide="${!this.narrow}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize("ui.panel.config.scene.editor.save")}"
          @click=${this._saveScene}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.hass)
        })}"
        ></ha-fab>
      </ha-app-layout>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaSceneEditor.prototype), "updated", this).call(this, changedProps);

        const oldscene = changedProps.get("scene");

        if (changedProps.has("scene") && this.scene && this.hass && ( // Only refresh config if we picked a new scene. If same ID, don't fetch it.
        !oldscene || oldscene.attributes.id !== this.scene.attributes.id)) {
          this._loadConfig();
        }

        if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
          this._dirty = false;
          this._config = {
            name: this.hass.localize("ui.panel.config.scene.editor.default_name"),
            entities: {}
          };
        }

        if (changedProps.has("_entityRegistryEntries")) {
          for (const entity of this._entityRegistryEntries) {
            if (!entity.device_id || _data_scene__WEBPACK_IMPORTED_MODULE_17__["SCENE_IGNORED_DOMAINS"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_23__["computeDomain"])(entity.entity_id))) {
              continue;
            }

            if (!(entity.device_id in this._deviceEntityLookup)) {
              this._deviceEntityLookup[entity.device_id] = [];
            }

            if (!this._deviceEntityLookup[entity.device_id].includes(entity.entity_id)) {
              this._deviceEntityLookup[entity.device_id].push(entity.entity_id);
            }
          }
        }
      }
    }, {
      kind: "method",
      key: "_showMoreInfo",
      value: function _showMoreInfo(ev) {
        const entityId = ev.currentTarget.entityId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_18__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_loadConfig",
      value: async function _loadConfig() {
        let config;

        try {
          config = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["getSceneConfig"])(this.hass, this.scene.attributes.id);
        } catch (err) {
          alert(err.status_code === 404 ? this.hass.localize("ui.panel.config.scene.editor.load_error_not_editable") : this.hass.localize("ui.panel.config.scene.editor.load_error_unknown", "err_no", err.status_code));
          history.back();
          return;
        }

        if (!config.entities) {
          config.entities = {};
        }

        this._entities = Object.keys(config.entities);

        this._entities.forEach(entity => {
          this._storeState(entity);
        });

        const filteredEntityReg = this._entityRegistryEntries.filter(entityReg => this._entities.includes(entityReg.entity_id));

        for (const entityReg of filteredEntityReg) {
          if (!entityReg.device_id) {
            continue;
          }

          if (!this._devices.includes(entityReg.device_id)) {
            this._devices = [...this._devices, entityReg.device_id];
          }
        }

        const {
          context
        } = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["activateScene"])(this.hass, this.scene.entity_id);
        this._activateContextId = context.id;
        this._unsubscribeEvents = await this.hass.connection.subscribeEvents(event => this._stateChanged(event), "state_changed");
        this._dirty = false;
        this._config = config;
      }
    }, {
      kind: "method",
      key: "_entityPicked",
      value: function _entityPicked(ev) {
        const entityId = ev.detail.value;
        ev.target.value = "";

        if (this._entities.includes(entityId)) {
          return;
        }

        this._entities = [...this._entities, entityId];

        this._storeState(entityId);

        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteEntity",
      value: function _deleteEntity(ev) {
        ev.stopPropagation();
        const deleteEntityId = ev.target.entityId;
        this._entities = this._entities.filter(entityId => entityId !== deleteEntityId);
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_devicePicked",
      value: function _devicePicked(ev) {
        const device = ev.detail.value;
        ev.target.value = "";

        if (this._devices.includes(device)) {
          return;
        }

        this._devices = [...this._devices, device];
        const deviceEntities = this._deviceEntityLookup[device];

        if (!deviceEntities) {
          return;
        }

        this._entities = [...this._entities, ...deviceEntities];
        deviceEntities.forEach(entityId => {
          this._storeState(entityId);
        });
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteDevice",
      value: function _deleteDevice(ev) {
        const deviceId = ev.target.device;
        this._devices = this._devices.filter(device => device !== deviceId);
        const deviceEntities = this._deviceEntityLookup[deviceId];

        if (!deviceEntities) {
          return;
        }

        this._entities = this._entities.filter(entityId => !deviceEntities.includes(entityId));
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        if (!this._config || this._config.name === ev.detail.value) {
          return;
        }

        this._config.name = ev.detail.value;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_stateChanged",
      value: function _stateChanged(event) {
        if (event.context.id !== this._activateContextId && this._entities.includes(event.data.entity_id)) {
          this._dirty = true;
        }
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty) {
          Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_24__["showConfirmationDialog"])(this, {
            text: this.hass.localize("ui.panel.config.scene.editor.unsaved_confirm"),
            confirmBtnText: this.hass.localize("ui.common.yes"),
            cancelBtnText: this.hass.localize("ui.common.no"),
            confirm: () => this._goBack()
          });
        } else {
          this._goBack();
        }
      }
    }, {
      kind: "method",
      key: "_goBack",
      value: function _goBack() {
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["applyScene"])(this.hass, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_deleteTapped",
      value: function _deleteTapped() {
        Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_24__["showConfirmationDialog"])(this, {
          text: this.hass.localize("ui.panel.config.scene.picker.delete_confirm"),
          confirmBtnText: this.hass.localize("ui.common.yes"),
          cancelBtnText: this.hass.localize("ui.common.no"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["deleteScene"])(this.hass, this.scene.attributes.id);
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["applyScene"])(this.hass, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_calculateStates",
      value: function _calculateStates() {
        const output = {};

        this._entities.forEach(entityId => {
          const state = this._getCurrentState(entityId);

          if (state) {
            output[entityId] = state;
          }
        });

        return output;
      }
    }, {
      kind: "method",
      key: "_storeState",
      value: function _storeState(entityId) {
        if (entityId in this._storedStates) {
          return;
        }

        const state = this._getCurrentState(entityId);

        if (!state) {
          return;
        }

        this._storedStates[entityId] = state;
      }
    }, {
      kind: "method",
      key: "_getCurrentState",
      value: function _getCurrentState(entityId) {
        const stateObj = this.hass.states[entityId];

        if (!stateObj) {
          return;
        }

        return Object.assign({}, stateObj.attributes, {
          state: stateObj.state
        });
      }
    }, {
      kind: "method",
      key: "_saveScene",
      value: async function _saveScene() {
        const id = this.creatingNew ? "" + Date.now() : this.scene.attributes.id;
        this._config = Object.assign({}, this._config, {
          entities: this._calculateStates()
        });

        try {
          await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["saveScene"])(this.hass, id, this._config);
          this._dirty = false;

          if (this.creatingNew) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_15__["navigate"])(this, `/config/scene/edit/${id}`, true);
          }
        } catch (err) {
          this._errors = err.body.message || err.message;
          throw err;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_14__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
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
        paper-icon-item {
          padding: 8px 16px;
        }
        ha-card paper-icon-button {
          color: var(--secondary-text-color);
        }
        .card-header > paper-icon-button {
          float: right;
          position: relative;
          top: -8px;
        }
        .device-entity {
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
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlybWF0aW9uL3Nob3ctZGlhbG9nLWNvbmZpcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY2VuZS9oYS1jb25maWctc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NlbmUvaGEtc2NlbmUtZGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjZW5lL2hhLXNjZW5lLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgU2VydmljZUNhbGxSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0eSBleHRlbmRzIEhhc3NFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgJiB7IGlkPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBTY2VuZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lRW50aXRpZXMge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IHN0cmluZyB8IHsgc3RhdGU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJzY2VuZVwiLCBcInR1cm5fb25cIiwgeyBlbnRpdHlfaWQ6IGVudGl0eUlkIH0pO1xuXG5leHBvcnQgY29uc3QgYXBwbHlTY2VuZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXRpZXM6IFNjZW5lRW50aXRpZXNcbik6IFByb21pc2U8U2VydmljZUNhbGxSZXNwb25zZT4gPT5cbiAgaGFzcy5jYWxsU2VydmljZShcInNjZW5lXCIsIFwiYXBwbHlcIiwgeyBlbnRpdGllcyB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFNjZW5lQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmdcbik6IFByb21pc2U8U2NlbmVDb25maWc+ID0+XG4gIGhhc3MuY2FsbEFwaTxTY2VuZUNvbmZpZz4oXCJHRVRcIiwgYGNvbmZpZy9zY2VuZS9jb25maWcvJHtzY2VuZUlkfWApO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzY2VuZUlkOiBzdHJpbmcsXG4gIGNvbmZpZzogU2NlbmVDb25maWdcbikgPT4gaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke3NjZW5lSWR9YCwgY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjZW5lID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke2lkfWApO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbmZpcm1CdG5UZXh0Pzogc3RyaW5nO1xuICBjYW5jZWxCdG5UZXh0Pzogc3RyaW5nO1xuICBjb25maXJtOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpcm1hdGlvbkRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbmZpcm1hdGlvblwiICovIFwiLi9kaWFsb2ctY29uZmlybWF0aW9uXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctY29uZmlybWF0aW9uXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQ29uZmlybWF0aW9uRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5cbmltcG9ydCBcIi4vaGEtc2NlbmUtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLXNjZW5lLWRhc2hib2FyZFwiO1xuXG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IFNjZW5lRW50aXR5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1zY2VuZVwiKVxuY2xhc3MgSGFDb25maWdTY2VuZSBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2VuZXM6IFNjZW5lRW50aXR5W10gPSBbXTtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJkYXNoYm9hcmRcIixcbiAgICByb3V0ZXM6IHtcbiAgICAgIGRhc2hib2FyZDoge1xuICAgICAgICB0YWc6IFwiaGEtc2NlbmUtZGFzaGJvYXJkXCIsXG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGVkaXQ6IHtcbiAgICAgICAgdGFnOiBcImhhLXNjZW5lLWVkaXRvclwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgX2NvbXB1dGVTY2VuZXMgPSBtZW1vaXplT25lKChzdGF0ZXM6IEhhc3NFbnRpdGllcykgPT4ge1xuICAgIGNvbnN0IHNjZW5lczogU2NlbmVFbnRpdHlbXSA9IFtdO1xuICAgIE9iamVjdC52YWx1ZXMoc3RhdGVzKS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZSkgPT09IFwic2NlbmVcIiAmJiAhc3RhdGUuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgc2NlbmVzLnB1c2goc3RhdGUgYXMgU2NlbmVFbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjZW5lcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gY29tcGFyZShjb21wdXRlU3RhdGVOYW1lKGEpLCBjb21wdXRlU3RhdGVOYW1lKGIpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChwYWdlRWwsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBwYWdlRWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICBwYWdlRWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gICAgcGFnZUVsLnNob3dBZHZhbmNlZCA9IHRoaXMuc2hvd0FkdmFuY2VkO1xuXG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgcGFnZUVsLnNjZW5lcyA9IHRoaXMuX2NvbXB1dGVTY2VuZXModGhpcy5oYXNzLnN0YXRlcyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKCFjaGFuZ2VkUHJvcHMgfHwgY2hhbmdlZFByb3BzLmhhcyhcInJvdXRlXCIpKSAmJlxuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZWRpdFwiXG4gICAgKSB7XG4gICAgICBjb25zdCBzY2VuZUlkID0gdGhpcy5yb3V0ZVRhaWwucGF0aC5zdWJzdHIoMSk7XG4gICAgICBwYWdlRWwuY3JlYXRpbmdOZXcgPSBzY2VuZUlkID09PSBcIm5ld1wiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcGFnZUVsLnNjZW5lID1cbiAgICAgICAgc2NlbmVJZCA9PT0gXCJuZXdcIlxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBwYWdlRWwuc2NlbmVzLmZpbmQoXG4gICAgICAgICAgICAgIChlbnRpdHk6IFNjZW5lRW50aXR5KSA9PiBlbnRpdHkuYXR0cmlidXRlcy5pZCA9PT0gc2NlbmVJZFxuICAgICAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1zY2VuZVwiOiBIYUNvbmZpZ1NjZW5lO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTY2VuZUVudGl0eSwgYWN0aXZhdGVTY2VuZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjZW5lXCI7XG5pbXBvcnQgeyBzaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC90b2FzdFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IHsgZm9yd2FyZEhhcHRpYyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2hhcHRpY3NcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zY2VuZS1kYXNoYm9hcmRcIilcbmNsYXNzIEhhU2NlbmVEYXNoYm9hcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjZW5lcyE6IFNjZW5lRW50aXR5W107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmNhcHRpb25cIil9XG4gICAgICA+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7IXRoaXMubmFycm93fT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5oZWFkZXJcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY2VuZS9lZGl0b3IvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAuaGVhZGluZz0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLnBpY2tfc2NlbmVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuc2NlbmVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLm5vX3NjZW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IHRoaXMuc2NlbmVzLm1hcChcbiAgICAgICAgICAgICAgICAgIChzY2VuZSkgPT4gaHRtbGBcblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NjZW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY2VuZT0ke3NjZW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuYWN0aXZhdGVfc2NlbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fYWN0aXZhdGVTY2VuZX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKHNjZW5lKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC9jb25maWcvc2NlbmUvZWRpdC8ke3NjZW5lLmF0dHJpYnV0ZXMuaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5lZGl0X3NjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshc2NlbmUuYXR0cmlidXRlcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNjZW5lLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5vbmx5X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvc2NlbmUvZWRpdC9uZXdcIj5cbiAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICAgID9pcy13aWRlPSR7IXRoaXMubmFycm93fVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmFkZF9zY2VuZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgICA+PC9oYS1mYWI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hY3RpdmF0ZVNjZW5lKGV2KSB7XG4gICAgY29uc3Qgc2NlbmUgPSBldi50YXJnZXQuc2NlbmUgYXMgU2NlbmVFbnRpdHk7XG4gICAgYXdhaXQgYWN0aXZhdGVTY2VuZSh0aGlzLmhhc3MsIHNjZW5lLmVudGl0eV9pZCk7XG4gICAgc2hvd1RvYXN0KHRoaXMsIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuYWN0aXZhdGVkXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHNjZW5lKVxuICAgICAgKSxcbiAgICB9KTtcbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc3Mtc3VicGFnZSB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjZW5lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBob3Jpem9udGFsO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjZW5lIGFbaHJlZl0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF1baXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXNjZW5lLWRhc2hib2FyZFwiOiBIYVNjZW5lRGFzaGJvYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5cbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9oYS1kZXZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdGllcy1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7XG4gIFNjZW5lRW50aXR5LFxuICBTY2VuZUNvbmZpZyxcbiAgZ2V0U2NlbmVDb25maWcsXG4gIGRlbGV0ZVNjZW5lLFxuICBzYXZlU2NlbmUsXG4gIFNDRU5FX0lHTk9SRURfRE9NQUlOUyxcbiAgU2NlbmVFbnRpdGllcyxcbiAgYXBwbHlTY2VuZSxcbiAgYWN0aXZhdGVTY2VuZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxuICBjb21wdXRlRGV2aWNlTmFtZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSGFzc0V2ZW50IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2NvbmZpcm1hdGlvbi9zaG93LWRpYWxvZy1jb25maXJtYXRpb25cIjtcblxuaW50ZXJmYWNlIERldmljZUVudGl0aWVzIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdGllczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBEZXZpY2VFbnRpdGllc0xvb2t1cCB7XG4gIFtkZXZpY2VJZDogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc2NlbmUtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSGFTY2VuZUVkaXRvciBleHRlbmRzIFN1YnNjcmliZU1peGluKExpdEVsZW1lbnQpIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93PzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjZW5lPzogU2NlbmVFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjcmVhdGluZ05ldz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QWR2YW5jZWQhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXJ0eT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9ycz86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnITogU2NlbmVDb25maWc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VzOiBzdHJpbmdbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VSZWdpc3RyeUVudHJpZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdHlSZWdpc3RyeUVudHJpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBwcml2YXRlIF9zdG9yZWRTdGF0ZXM6IFNjZW5lRW50aXRpZXMgPSB7fTtcbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmVFdmVudHM/OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9kZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0aWVzTG9va3VwID0ge307XG4gIHByaXZhdGUgX2FjdGl2YXRlQ29udGV4dElkPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2dldEVudGl0aWVzRGV2aWNlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgZW50aXRpZXM6IHN0cmluZ1tdLFxuICAgICAgZGV2aWNlczogc3RyaW5nW10sXG4gICAgICBkZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0aWVzTG9va3VwLFxuICAgICAgZGV2aWNlUmVnczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBvdXRwdXREZXZpY2VzOiBEZXZpY2VFbnRpdGllc1tdID0gW107XG5cbiAgICAgIGlmIChkZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBkZXZpY2VMb29rdXA6IHsgW2RldmljZUlkOiBzdHJpbmddOiBEZXZpY2VSZWdpc3RyeUVudHJ5IH0gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBkZXZpY2Ugb2YgZGV2aWNlUmVncykge1xuICAgICAgICAgIGRldmljZUxvb2t1cFtkZXZpY2UuaWRdID0gZGV2aWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGV2aWNlcy5mb3JFYWNoKChkZXZpY2VJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldmljZSA9IGRldmljZUxvb2t1cFtkZXZpY2VJZF07XG4gICAgICAgICAgY29uc3QgZGV2aWNlRW50aXRpZXM6IHN0cmluZ1tdID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZUlkXSB8fCBbXTtcbiAgICAgICAgICBvdXRwdXREZXZpY2VzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY29tcHV0ZURldmljZU5hbWUoXG4gICAgICAgICAgICAgIGRldmljZSxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgICAgICB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGlkOiBkZXZpY2UuaWQsXG4gICAgICAgICAgICBlbnRpdGllczogZGV2aWNlRW50aXRpZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRwdXRFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGlmICghb3V0cHV0RGV2aWNlcy5maW5kKChkZXZpY2UpID0+IGRldmljZS5lbnRpdGllcy5pbmNsdWRlcyhlbnRpdHkpKSkge1xuICAgICAgICAgIG91dHB1dEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IGRldmljZXM6IG91dHB1dERldmljZXMsIGVudGl0aWVzOiBvdXRwdXRFbnRpdGllcyB9O1xuICAgIH1cbiAgKTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJzY3JpYmVFdmVudHMpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlRXZlbnRzKCk7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZUV2ZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzc1N1YnNjcmliZSgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoZW50cmllcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VSZWdpc3RyeUVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGRldmljZXMsIGVudGl0aWVzIH0gPSB0aGlzLl9nZXRFbnRpdGllc0RldmljZXMoXG4gICAgICB0aGlzLl9lbnRpdGllcyxcbiAgICAgIHRoaXMuX2RldmljZXMsXG4gICAgICB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXAsXG4gICAgICB0aGlzLl9kZXZpY2VSZWdpc3RyeUVudHJpZXNcbiAgICApO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWFwcC1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9iYWNrVGFwcGVkfVxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLnNjZW5lXG4gICAgICAgICAgICAgICAgPyBjb21wdXRlU3RhdGVOYW1lKHRoaXMuc2NlbmUpXG4gICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZWZhdWx0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt0aGlzLmNyZWF0aW5nTmV3XG4gICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuZGVsZXRlX3NjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVUYXBwZWR9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPiR7dGhpcy5fZXJyb3JzfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0keyF0aGlzLm5hcnJvd30+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5zY2VuZVxuICAgICAgICAgICAgICAgICAgPyBjb21wdXRlU3RhdGVOYW1lKHRoaXMuc2NlbmUpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGVmYXVsdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLnNjZW5lID8gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLnNjZW5lKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fbmFtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0keyF0aGlzLm5hcnJvd30+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRldmljZXMuaGVhZGVyXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGV2aWNlcy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICR7ZGV2aWNlcy5tYXAoXG4gICAgICAgICAgICAgICAgKGRldmljZSkgPT5cbiAgICAgICAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXZpY2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldmljZT0ke2RldmljZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlRGV2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgJHtkZXZpY2UuZW50aXRpZXMubWFwKChlbnRpdHlJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd01vcmVJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGV2aWNlLWVudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iail9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmFkZFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlUGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmFkZFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgICAke3RoaXMuc2hvd0FkdmFuY2VkXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7IXRoaXMubmFycm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5lbnRpdGllcy53aXRob3V0X2RldmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZW50aXRpZXMubWFwKChlbnRpdHlJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd01vcmVJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGV2aWNlLWVudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iail9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGU9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGVFbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5lbnRpdGllcy5hZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmRldmljZV9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5leGNsdWRlRG9tYWlucz0ke1NDRU5FX0lHTk9SRURfRE9NQUlOU31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5lbnRpdGllcy5hZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1mYWJcbiAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICA/aXMtd2lkZT1cIiR7IXRoaXMubmFycm93fVwiXG4gICAgICAgICAgP2RpcnR5PVwiJHt0aGlzLl9kaXJ0eX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmNvbnRlbnQtc2F2ZVwiXG4gICAgICAgICAgLnRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLnNhdmVcIil9XCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zYXZlU2NlbmV9XG4gICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgID48L2hhLWZhYj5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGNvbnN0IG9sZHNjZW5lID0gY2hhbmdlZFByb3BzLmdldChcInNjZW5lXCIpIGFzIFNjZW5lRW50aXR5O1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJzY2VuZVwiKSAmJlxuICAgICAgdGhpcy5zY2VuZSAmJlxuICAgICAgdGhpcy5oYXNzICYmXG4gICAgICAvLyBPbmx5IHJlZnJlc2ggY29uZmlnIGlmIHdlIHBpY2tlZCBhIG5ldyBzY2VuZS4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZHNjZW5lIHx8IG9sZHNjZW5lLmF0dHJpYnV0ZXMuaWQgIT09IHRoaXMuc2NlbmUuYXR0cmlidXRlcy5pZClcbiAgICApIHtcbiAgICAgIHRoaXMuX2xvYWRDb25maWcoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNyZWF0aW5nTmV3XCIpICYmIHRoaXMuY3JlYXRpbmdOZXcgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICBuYW1lOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKSxcbiAgICAgICAgZW50aXRpZXM6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl9lbnRpdHlSZWdpc3RyeUVudHJpZXNcIikpIHtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWVudGl0eS5kZXZpY2VfaWQgfHxcbiAgICAgICAgICBTQ0VORV9JR05PUkVEX0RPTUFJTlMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZW50aXR5LmRldmljZV9pZF0uaW5jbHVkZXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2FkQ29uZmlnKCkge1xuICAgIGxldCBjb25maWc6IFNjZW5lQ29uZmlnO1xuICAgIHRyeSB7XG4gICAgICBjb25maWcgPSBhd2FpdCBnZXRTY2VuZUNvbmZpZyh0aGlzLmhhc3MsIHRoaXMuc2NlbmUhLmF0dHJpYnV0ZXMuaWQhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBlcnIuc3RhdHVzX2NvZGUgPT09IDQwNFxuICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubG9hZF9lcnJvcl9ub3RfZWRpdGFibGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubG9hZF9lcnJvcl91bmtub3duXCIsXG4gICAgICAgICAgICAgIFwiZXJyX25vXCIsXG4gICAgICAgICAgICAgIGVyci5zdGF0dXNfY29kZVxuICAgICAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLmVudGl0aWVzKSB7XG4gICAgICBjb25maWcuZW50aXRpZXMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbnRpdGllcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5lbnRpdGllcyk7XG5cbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIHRoaXMuX3N0b3JlU3RhdGUoZW50aXR5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlcmVkRW50aXR5UmVnID0gdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzLmZpbHRlcigoZW50aXR5UmVnKSA9PlxuICAgICAgdGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5UmVnLmVudGl0eV9pZClcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBlbnRpdHlSZWcgb2YgZmlsdGVyZWRFbnRpdHlSZWcpIHtcbiAgICAgIGlmICghZW50aXR5UmVnLmRldmljZV9pZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fZGV2aWNlcy5pbmNsdWRlcyhlbnRpdHlSZWcuZGV2aWNlX2lkKSkge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gWy4uLnRoaXMuX2RldmljZXMsIGVudGl0eVJlZy5kZXZpY2VfaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gYXdhaXQgYWN0aXZhdGVTY2VuZSh0aGlzLmhhc3MsIHRoaXMuc2NlbmUhLmVudGl0eV9pZCk7XG5cbiAgICB0aGlzLl9hY3RpdmF0ZUNvbnRleHRJZCA9IGNvbnRleHQuaWQ7XG5cbiAgICB0aGlzLl91bnN1YnNjcmliZUV2ZW50cyA9IGF3YWl0IHRoaXMuaGFzcyEuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHM8XG4gICAgICBIYXNzRXZlbnRcbiAgICA+KChldmVudCkgPT4gdGhpcy5fc3RhdGVDaGFuZ2VkKGV2ZW50KSwgXCJzdGF0ZV9jaGFuZ2VkXCIpO1xuXG4gICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5SWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VudGl0aWVzID0gWy4uLnRoaXMuX2VudGl0aWVzLCBlbnRpdHlJZF07XG4gICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRW50aXR5KGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRlbGV0ZUVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5fZW50aXRpZXMuZmlsdGVyKFxuICAgICAgKGVudGl0eUlkKSA9PiBlbnRpdHlJZCAhPT0gZGVsZXRlRW50aXR5SWRcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RldmljZVBpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBkZXZpY2UgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZGV2aWNlcy5pbmNsdWRlcyhkZXZpY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2RldmljZXMgPSBbLi4udGhpcy5fZGV2aWNlcywgZGV2aWNlXTtcbiAgICBjb25zdCBkZXZpY2VFbnRpdGllcyA9IHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtkZXZpY2VdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSBbLi4udGhpcy5fZW50aXRpZXMsIC4uLmRldmljZUVudGl0aWVzXTtcbiAgICBkZXZpY2VFbnRpdGllcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRGV2aWNlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGRldmljZUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmRldmljZTtcbiAgICB0aGlzLl9kZXZpY2VzID0gdGhpcy5fZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlICE9PSBkZXZpY2VJZCk7XG4gICAgY29uc3QgZGV2aWNlRW50aXRpZXMgPSB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlSWRdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSB0aGlzLl9lbnRpdGllcy5maWx0ZXIoXG4gICAgICAoZW50aXR5SWQpID0+ICFkZXZpY2VFbnRpdGllcy5pbmNsdWRlcyhlbnRpdHlJZClcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8IHRoaXMuX2NvbmZpZy5uYW1lID09PSBldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnLm5hbWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VkKGV2ZW50OiBIYXNzRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5jb250ZXh0LmlkICE9PSB0aGlzLl9hY3RpdmF0ZUNvbnRleHRJZCAmJlxuICAgICAgdGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZXZlbnQuZGF0YS5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmFja1RhcHBlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci51bnNhdmVkX2NvbmZpcm1cIlxuICAgICAgICApLFxuICAgICAgICBjb25maXJtQnRuVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi55ZXNcIiksXG4gICAgICAgIGNhbmNlbEJ0blRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2dvQmFjaygpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvQmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dvQmFjaygpOiB2b2lkIHtcbiAgICBhcHBseVNjZW5lKHRoaXMuaGFzcywgdGhpcy5fc3RvcmVkU3RhdGVzKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlbGV0ZVRhcHBlZCgpOiB2b2lkIHtcbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmRlbGV0ZV9jb25maXJtXCIpLFxuICAgICAgY29uZmlybUJ0blRleHQ6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgY2FuY2VsQnRuVGV4dDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGRlbGV0ZVNjZW5lKHRoaXMuaGFzcywgdGhpcy5zY2VuZSEuYXR0cmlidXRlcy5pZCEpO1xuICAgIGFwcGx5U2NlbmUodGhpcy5oYXNzLCB0aGlzLl9zdG9yZWRTdGF0ZXMpO1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlU3RhdGVzKCk6IFNjZW5lRW50aXRpZXMge1xuICAgIGNvbnN0IG91dHB1dDogU2NlbmVFbnRpdGllcyA9IHt9O1xuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2dldEN1cnJlbnRTdGF0ZShlbnRpdHlJZCk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgb3V0cHV0W2VudGl0eUlkXSA9IHN0YXRlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBwcml2YXRlIF9zdG9yZVN0YXRlKGVudGl0eUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoZW50aXR5SWQgaW4gdGhpcy5fc3RvcmVkU3RhdGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fZ2V0Q3VycmVudFN0YXRlKGVudGl0eUlkKTtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0b3JlZFN0YXRlc1tlbnRpdHlJZF0gPSBzdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEN1cnJlbnRTdGF0ZShlbnRpdHlJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eUlkXTtcbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7IC4uLnN0YXRlT2JqLmF0dHJpYnV0ZXMsIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZVNjZW5lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGluZ05ldyA/IFwiXCIgKyBEYXRlLm5vdygpIDogdGhpcy5zY2VuZSEuYXR0cmlidXRlcy5pZCE7XG4gICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWcsIGVudGl0aWVzOiB0aGlzLl9jYWxjdWxhdGVTdGF0ZXMoKSB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYXZlU2NlbmUodGhpcy5oYXNzLCBpZCwgdGhpcy5fY29uZmlnKTtcbiAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIGAvY29uZmlnL3NjZW5lL2VkaXQvJHtpZH1gLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9ycyA9IGVyci5ib2R5Lm1lc3NhZ2UgfHwgZXJyLm1lc3NhZ2U7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5ydGwgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtaGVhZGVyID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2UtZW50aXR5IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbltzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtODBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltkaXJ0eV0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWIucnRsIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdLnJ0bCB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2NlbmUtZWRpdG9yXCI6IEhhU2NlbmVFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBRUE7QUFNQTtBQU1BOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLGkzQkFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFGQTs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7OztBQXREQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7QUFNQTs7Ozs7O0FBTUE7O0FBSUE7OztBQUlBOzs7QUFKQTtBQUNBOzs7QUFjQTs7QUFFQTtBQUdBOzs7QUFHQTs7O0FBR0E7OztBQU9BOztBQUlBOztBQUdBOztBQUdBOztBQUhBOzs7O0FBOUJBOzs7Ozs7O0FBbURBOztBQUVBO0FBR0E7Ozs7QUEzRkE7QUFnR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMERBOzs7QUFoTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFhQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXpEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUE2REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWxFQTtBQUFBO0FBQUE7QUFBQTtBQXFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUE3RUE7QUFBQTtBQUFBO0FBQUE7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7Ozs7O0FBS0E7OztBQUdBOztBQU1BOztBQUlBOztBQUlBOztBQUVBOzs7OztBQUtBO0FBRUE7QUFGQTs7O0FBT0E7QUFDQTtBQURBOztBQUlBOztBQUVBOzs7QUFPQTs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7OztBQVFBOztBQUVBOzs7QUFLQTs7O0FBS0E7OztBQUtBOzs7QUFHQTtBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7OztBQUlBOzs7O0FBSUE7OztBQVhBO0FBZUE7O0FBbkNBO0FBQ0E7O0FBd0NBOzs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFRQTtBQUVBOztBQUVBOzs7QUFLQTs7QUFJQTs7O0FBSUE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFHQTs7O0FBbkJBO0FBdUJBOztBQXBDQTtBQUNBOztBQXlDQTs7O0FBS0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBbkVBOzs7OztBQWdGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQTVOQTtBQWtPQTtBQTNUQTtBQUFBO0FBQUE7QUFBQTtBQThUQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyV0E7QUFBQTtBQUFBO0FBQUE7QUF3V0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTFXQTtBQUFBO0FBQUE7QUFBQTtBQTZXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQWphQTtBQUFBO0FBQUE7QUFBQTtBQW9hQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTVhQTtBQUFBO0FBQUE7QUFBQTtBQSthQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBcmJBO0FBQUE7QUFBQTtBQUFBO0FBd2JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Y0E7QUFBQTtBQUFBO0FBQUE7QUEwY0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQXBkQTtBQUFBO0FBQUE7QUFBQTtBQXVkQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTVkQTtBQUFBO0FBQUE7QUFBQTtBQStkQTtBQUlBO0FBQ0E7QUFDQTtBQXJlQTtBQUFBO0FBQUE7QUFBQTtBQXdlQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBcGZBO0FBQUE7QUFBQTtBQUFBO0FBdWZBO0FBQ0E7QUFDQTtBQXpmQTtBQUFBO0FBQUE7QUFBQTtBQTRmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQWxnQkE7QUFBQTtBQUFBO0FBQUE7QUFxZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBeGdCQTtBQUFBO0FBQUE7QUFBQTtBQTJnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbmhCQTtBQUFBO0FBQUE7QUFBQTtBQXNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBOWhCQTtBQUFBO0FBQUE7QUFBQTtBQWlpQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF0aUJBO0FBQUE7QUFBQTtBQUFBO0FBeWlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdGpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeWpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVGQTtBQWhwQkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=