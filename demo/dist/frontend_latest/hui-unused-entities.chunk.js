(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/*! exports provided: computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
const EXCLUDED_DOMAINS = ["zone", "persistent_notification"];

const addFromAction = (entities, actionConfig) => {
  if (actionConfig.action !== "call-service" || !actionConfig.service_data || !actionConfig.service_data.entity_id) {
    return;
  }

  let entityIds = actionConfig.service_data.entity_id;

  if (!Array.isArray(entityIds)) {
    entityIds = [entityIds];
  }

  for (const entityId of entityIds) {
    entities.add(entityId);
  }
};

const addEntityId = (entities, entity) => {
  if (typeof entity === "string") {
    entities.add(entity);
    return;
  }

  if (entity.entity) {
    entities.add(entity.entity);
  }

  if (entity.camera_image) {
    entities.add(entity.camera_image);
  }

  if (entity.tap_action) {
    addFromAction(entities, entity.tap_action);
  }

  if (entity.hold_action) {
    addFromAction(entities, entity.hold_action);
  }
};

const addEntities = (entities, obj) => {
  if (obj.entity) {
    addEntityId(entities, obj.entity);
  }

  if (obj.entities) {
    obj.entities.forEach(entity => addEntityId(entities, entity));
  }

  if (obj.card) {
    addEntities(entities, obj.card);
  }

  if (obj.cards) {
    obj.cards.forEach(card => addEntities(entities, card));
  }

  if (obj.elements) {
    obj.elements.forEach(card => addEntities(entities, card));
  }

  if (obj.badges) {
    obj.badges.forEach(badge => addEntityId(entities, badge));
  }
};

const computeUsedEntities = config => {
  const entities = new Set();
  config.views.forEach(view => addEntities(entities, view));
  return entities;
};

const computeUnusedEntities = (hass, config) => {
  const usedEntities = computeUsedEntities(config);
  return Object.keys(hass.states).filter(entity => !usedEntities.has(entity) && !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0])).sort();
};

/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts")),
    dialogParams: selectViewDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts ***!
  \***************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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








 // tslint:disable-next-line








let HuiUnusedEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-unused-entities")], function (_initialize, _LitElement) {
  class HuiUnusedEntities extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiUnusedEntities,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
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
      key: "_unusedEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_selectedEntities",

      value() {
        return [];
      }

    }, {
      kind: "get",
      key: "_config",
      value: function _config() {
        return this.lovelace.config;
      }
    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(narrow => {
          const columns = {
            entity: {
              title: this.hass.localize("ui.panel.lovelace.unused_entities.entity"),
              sortable: true,
              filterable: true,
              filterKey: "friendly_name",
              direction: "asc",
              template: stateObj => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div @click=${this._handleEntityClicked} style="cursor: pointer;">
            <state-badge
              .hass=${this.hass}
              .stateObj=${stateObj}
            ></state-badge>
            ${stateObj.friendly_name}
          </div>
        `
            }
          };

          if (narrow) {
            return columns;
          }

          columns.entity_id = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),
            sortable: true,
            filterable: true
          };
          columns.domain = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.domain"),
            sortable: true,
            filterable: true
          };
          columns.last_changed = {
            title: this.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),
            type: "numeric",
            sortable: true,
            template: lastChanged => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <ha-relative-time
          .hass=${this.hass}
          .datetime=${lastChanged}
        ></ha-relative-time>
      `
          };
          return columns;
        });
      }

    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiUnusedEntities.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("lovelace")) {
          this._getUnusedEntities();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.lovelace) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (this.lovelace.mode === "storage" && this.lovelace.editMode === false) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card
        header="${this.hass.localize("ui.panel.lovelace.unused_entities.title")}"
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.lovelace.unused_entities.available_entities")}
          ${this.lovelace.mode === "storage" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <br />${this.hass.localize("ui.panel.lovelace.unused_entities.select_to_add")}
              ` : ""}
        </div>
      </ha-card>
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._unusedEntities.map(entity => {
          const stateObj = this.hass.states[entity];
          return {
            entity_id: entity,
            entity: Object.assign({}, stateObj, {
              friendly_name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj)
            }),
            domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entity),
            last_changed: stateObj.last_changed
          };
        })}
        .id=${"entity_id"}
        .selectable=${this.lovelace.mode === "storage"}
        @selection-changed=${this._handleSelectionChanged}
      ></ha-data-table>
      ${this.lovelace.mode === "storage" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-fab
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTL"])(this.hass)
        })}"
              icon="hass:plus"
              label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._selectView}"
            ></ha-fab>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_getUnusedEntities",
      value: function _getUnusedEntities() {
        if (!this.hass || !this.lovelace) {
          return;
        }

        this._selectedEntities = [];
        this._unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__["computeUnusedEntities"])(this.hass, this._config);
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected) {
          this._selectedEntities.push(entity);
        } else {
          const index = this._selectedEntities.indexOf(entity);

          if (index !== -1) {
            this._selectedEntities.splice(index, 1);
          }
        }
      }
    }, {
      kind: "method",
      key: "_handleEntityClicked",
      value: function _handleEntityClicked(ev) {
        const entityId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_selectView",
      value: function _selectView() {
        Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_12__["showSelectViewDialog"])(this, {
          lovelace: this.lovelace,
          viewSelectedCallback: view => this._addCard(view)
        });
      }
    }, {
      kind: "method",
      key: "_addCard",
      value: function _addCard(view) {
        Object(_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_13__["showEditCardDialog"])(this, {
          lovelace: this.lovelace,
          path: [view],
          entities: this._selectedEntities
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        background: var(--lovelace-background);
        padding: 16px;
      }
      ha-fab {
        position: sticky;
        float: right;
        bottom: 16px;
        z-index: 1;
      }
      ha-fab.rtl {
        float: left;
      }
      ha-card {
        margin-bottom: 16px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2NvbXB1dGUtdW51c2VkLWVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3NlbGVjdC12aWV3L3Nob3ctc2VsZWN0LXZpZXctZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3VudXNlZC1lbnRpdGllcy9odWktdW51c2VkLWVudGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvdmVsYWNlQ29uZmlnLCBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBFWENMVURFRF9ET01BSU5TID0gW1wiem9uZVwiLCBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCJdO1xuXG5jb25zdCBhZGRGcm9tQWN0aW9uID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgYWN0aW9uQ29uZmlnOiBBY3Rpb25Db25maWcpID0+IHtcbiAgaWYgKFxuICAgIGFjdGlvbkNvbmZpZy5hY3Rpb24gIT09IFwiY2FsbC1zZXJ2aWNlXCIgfHxcbiAgICAhYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YSB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhLmVudGl0eV9pZFxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGVudGl0eUlkcyA9IGFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXR5SWRzKSkge1xuICAgIGVudGl0eUlkcyA9IFtlbnRpdHlJZHNdO1xuICB9XG4gIGZvciAoY29uc3QgZW50aXR5SWQgb2YgZW50aXR5SWRzKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eUlkKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXR5SWQgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBlbnRpdHkpID0+IHtcbiAgaWYgKHR5cGVvZiBlbnRpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZW50aXR5LmVudGl0eSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuZW50aXR5KTtcbiAgfVxuICBpZiAoZW50aXR5LmNhbWVyYV9pbWFnZSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuY2FtZXJhX2ltYWdlKTtcbiAgfVxuICBpZiAoZW50aXR5LnRhcF9hY3Rpb24pIHtcbiAgICBhZGRGcm9tQWN0aW9uKGVudGl0aWVzLCBlbnRpdHkudGFwX2FjdGlvbik7XG4gIH1cbiAgaWYgKGVudGl0eS5ob2xkX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS5ob2xkX2FjdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEVudGl0aWVzID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgb2JqKSA9PiB7XG4gIGlmIChvYmouZW50aXR5KSB7XG4gICAgYWRkRW50aXR5SWQoZW50aXRpZXMsIG9iai5lbnRpdHkpO1xuICB9XG4gIGlmIChvYmouZW50aXRpZXMpIHtcbiAgICBvYmouZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgZW50aXR5KSk7XG4gIH1cbiAgaWYgKG9iai5jYXJkKSB7XG4gICAgYWRkRW50aXRpZXMoZW50aXRpZXMsIG9iai5jYXJkKTtcbiAgfVxuICBpZiAob2JqLmNhcmRzKSB7XG4gICAgb2JqLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5lbGVtZW50cykge1xuICAgIG9iai5lbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouYmFkZ2VzKSB7XG4gICAgb2JqLmJhZGdlcy5mb3JFYWNoKChiYWRnZSkgPT4gYWRkRW50aXR5SWQoZW50aXRpZXMsIGJhZGdlKSk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbXB1dGVVc2VkRW50aXRpZXMgPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVudGl0aWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbmZpZy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgdmlldykpO1xuICByZXR1cm4gZW50aXRpZXM7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVudXNlZEVudGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHVzZWRFbnRpdGllcyA9IGNvbXB1dGVVc2VkRW50aXRpZXMoY29uZmlnKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZW50aXR5KSA9PlxuICAgICAgICAhdXNlZEVudGl0aWVzLmhhcyhlbnRpdHkpICYmXG4gICAgICAgICFFWENMVURFRF9ET01BSU5TLmluY2x1ZGVzKGVudGl0eS5zcGxpdChcIi5cIiwgMSlbMF0pXG4gICAgKVxuICAgIC5zb3J0KCk7XG59O1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zIHtcbiAgbG92ZWxhY2U6IExvdmVsYWNlO1xuICB2aWV3U2VsZWN0ZWRDYWxsYmFjazogKHZpZXc6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dTZWxlY3RWaWV3RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc2VsZWN0Vmlld0RpYWxvZ1BhcmFtczogU2VsZWN0Vmlld0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIlxuICAgICAgKSxcbiAgICBkaWFsb2dQYXJhbXM6IHNlbGVjdFZpZXdEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHtcbiAgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50LFxuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgY29tcHV0ZVVudXNlZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgc2hvd1NlbGVjdFZpZXdEaWFsb2cgfSBmcm9tIFwiLi4vc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9jYXJkLWVkaXRvci9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdW51c2VkLWVudGl0aWVzXCIpXG5leHBvcnQgY2xhc3MgSHVpVW51c2VkRW50aXRpZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3c/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VudXNlZEVudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBnZXQgX2NvbmZpZygpOiBMb3ZlbGFjZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMubG92ZWxhY2UhLmNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKChuYXJyb3c6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7XG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgdGl0bGU6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuZW50aXR5XCIpLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyS2V5OiBcImZyaWVuZGx5X25hbWVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICB0ZW1wbGF0ZTogKHN0YXRlT2JqKSA9PiBodG1sYFxuICAgICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5faGFuZGxlRW50aXR5Q2xpY2tlZH0gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3MhfVxuICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtzdGF0ZU9ian1cbiAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgJHtzdGF0ZU9iai5mcmllbmRseV9uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKG5hcnJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy5lbnRpdHlfaWRcIiksXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgICBjb2x1bW5zLmRvbWFpbiA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UudW51c2VkX2VudGl0aWVzLmRvbWFpblwiKSxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbHVtbnMubGFzdF9jaGFuZ2VkID0ge1xuICAgICAgdGl0bGU6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UudW51c2VkX2VudGl0aWVzLmxhc3RfY2hhbmdlZFwiXG4gICAgICApLFxuICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAobGFzdENoYW5nZWQ6IHN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgLmRhdGV0aW1lPSR7bGFzdENoYW5nZWR9XG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwibG92ZWxhY2VcIikpIHtcbiAgICAgIHRoaXMuX2dldFVudXNlZEVudGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmxvdmVsYWNlKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvdmVsYWNlLm1vZGUgPT09IFwic3RvcmFnZVwiICYmIHRoaXMubG92ZWxhY2UuZWRpdE1vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgaGVhZGVyPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMudGl0bGVcIlxuICAgICAgICApfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UudW51c2VkX2VudGl0aWVzLmF2YWlsYWJsZV9lbnRpdGllc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICAke3RoaXMubG92ZWxhY2UubW9kZSA9PT0gXCJzdG9yYWdlXCJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8YnIgLz4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UudW51c2VkX2VudGl0aWVzLnNlbGVjdF90b19hZGRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgICA8aGEtZGF0YS10YWJsZVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3chKX1cbiAgICAgICAgLmRhdGE9JHt0aGlzLl91bnVzZWRFbnRpdGllcy5tYXAoKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzIS5zdGF0ZXNbZW50aXR5XTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHksXG4gICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGVPYmosXG4gICAgICAgICAgICAgIGZyaWVuZGx5X25hbWU6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbWFpbjogY29tcHV0ZURvbWFpbihlbnRpdHkpLFxuICAgICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iaiEubGFzdF9jaGFuZ2VkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pfVxuICAgICAgICAuaWQ9JHtcImVudGl0eV9pZFwifVxuICAgICAgICAuc2VsZWN0YWJsZT0ke3RoaXMubG92ZWxhY2UhLm1vZGUgPT09IFwic3RvcmFnZVwifVxuICAgICAgICBAc2VsZWN0aW9uLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWxlY3Rpb25DaGFuZ2VkfVxuICAgICAgPjwvaGEtZGF0YS10YWJsZT5cbiAgICAgICR7dGhpcy5sb3ZlbGFjZS5tb2RlID09PSBcInN0b3JhZ2VcIlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5hZGRcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fc2VsZWN0Vmlld31cIlxuICAgICAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9nZXRVbnVzZWRFbnRpdGllcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5sb3ZlbGFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzID0gW107XG4gICAgdGhpcy5fdW51c2VkRW50aXRpZXMgPSBjb21wdXRlVW51c2VkRW50aXRpZXModGhpcy5oYXNzLCB0aGlzLl9jb25maWchKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlZFNlbGVjdGlvbiA9IGV2LmRldGFpbCBhcyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgY29uc3QgZW50aXR5ID0gY2hhbmdlZFNlbGVjdGlvbi5pZDtcbiAgICBpZiAoY2hhbmdlZFNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5pbmRleE9mKGVudGl0eSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFbnRpdHlDbGlja2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidHJcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIikhO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0VmlldygpOiB2b2lkIHtcbiAgICBzaG93U2VsZWN0Vmlld0RpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgICB2aWV3U2VsZWN0ZWRDYWxsYmFjazogKHZpZXcpID0+IHRoaXMuX2FkZENhcmQodmlldyksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRDYXJkKHZpZXc6IG51bWJlcik6IHZvaWQge1xuICAgIHNob3dFZGl0Q2FyZERpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgICBwYXRoOiBbdmlld10sXG4gICAgICBlbnRpdGllczogdGhpcy5fc2VsZWN0ZWRFbnRpdGllcyxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbG92ZWxhY2UtYmFja2dyb3VuZCk7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS11bnVzZWQtZW50aXRpZXNcIjogSHVpVW51c2VkRW50aXRpZXM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUlBO0FBQ0E7QUFDQSw0ZEFFQTtBQUVBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBV0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBWkE7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQVRBO0FBY0E7QUFDQTtBQWhFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEVBO0FBQUE7QUFBQTtBQUFBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBS0E7QUFHQTtBQUVBO0FBRkE7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQURBOztBQUlBO0FBR0E7O0FBVkE7QUFyQ0E7QUFvREE7QUF2SUE7QUFBQTtBQUFBO0FBQUE7QUEwSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEvSUE7QUFBQTtBQUFBO0FBQUE7QUFrSkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1SkE7QUFBQTtBQUFBO0FBQUE7QUErSkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQXJLQTtBQUFBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBNUtBO0FBQUE7QUFBQTtBQUFBO0FBK0tBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXBMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUxBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0JBO0FBek1BO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9