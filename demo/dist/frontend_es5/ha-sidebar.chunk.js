(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-sidebar"],{

/***/ "./src/components/ha-sidebar.ts":
/*!**************************************!*\
  !*** ./src/components/ha-sidebar.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_user_ha_user_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/user/ha-user-badge */ "./src/components/user/ha-user-badge.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/const */ "./src/common/const.ts");
/* harmony import */ var _external_app_external_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../external_app/external_config */ "./src/external_app/external_config.ts");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        height: 100%;\n        display: block;\n        overflow: hidden;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        border-right: 1px solid var(--divider-color);\n        background-color: var(--sidebar-background-color);\n        width: 64px;\n      }\n      :host([expanded]) {\n        width: 256px;\n      }\n\n      .menu {\n        box-sizing: border-box;\n        height: 65px;\n        display: flex;\n        padding: 0 12px;\n        border-bottom: 1px solid transparent;\n        white-space: nowrap;\n        font-weight: 400;\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        background-color: var(--primary-background-color);\n        font-size: 20px;\n        align-items: center;\n      }\n      :host([expanded]) .menu {\n        width: 256px;\n      }\n\n      .menu paper-icon-button {\n        color: var(--sidebar-icon-color);\n      }\n      :host([expanded]) .menu paper-icon-button {\n        margin-right: 23px;\n      }\n      :host([expanded][_rtl]) .menu paper-icon-button {\n        margin-right: 0px;\n        margin-left: 23px;\n      }\n\n      .title {\n        display: none;\n      }\n      :host([expanded]) .title {\n        display: initial;\n      }\n\n      paper-listbox::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem;\n      }\n\n      paper-listbox::-webkit-scrollbar-thumb {\n        -webkit-border-radius: 4px;\n        border-radius: 4px;\n        background: var(--scrollbar-thumb-color);\n      }\n\n      paper-listbox {\n        padding: 4px 0;\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        height: calc(100% - 196px);\n        overflow-y: auto;\n        overflow-x: hidden;\n        scrollbar-color: var(--scrollbar-thumb-color) transparent;\n        scrollbar-width: thin;\n      }\n\n      a {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n      }\n\n      paper-icon-item {\n        box-sizing: border-box;\n        margin: 4px 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        --paper-item-min-height: 40px;\n        width: 48px;\n      }\n      :host([expanded]) paper-icon-item {\n        width: 240px;\n      }\n      :host([_rtl]) paper-icon-item {\n        padding-left: auto;\n        padding-right: 12px;\n      }\n\n      ha-icon[slot=\"item-icon\"] {\n        color: var(--sidebar-icon-color);\n      }\n\n      .iron-selected paper-icon-item:before {\n        border-radius: 4px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        content: \"\";\n        background-color: var(--sidebar-selected-icon-color);\n        opacity: 0.12;\n        transition: opacity 15ms linear;\n        will-change: opacity;\n      }\n\n      .iron-selected paper-icon-item[pressed]:before {\n        opacity: 0.37;\n      }\n\n      paper-icon-item span {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      a.iron-selected paper-icon-item ha-icon {\n        color: var(--sidebar-selected-icon-color);\n      }\n\n      a.iron-selected .item-text {\n        color: var(--sidebar-selected-text-color);\n      }\n\n      paper-icon-item .item-text {\n        display: none;\n      }\n      :host([expanded]) paper-icon-item .item-text {\n        display: block;\n      }\n\n      .divider {\n        bottom: 112px;\n        padding: 10px 0;\n      }\n      .divider::before {\n        content: \" \";\n        display: block;\n        height: 1px;\n        background-color: var(--divider-color);\n      }\n\n      .notifications {\n        cursor: pointer;\n      }\n      .notifications .item-text {\n        flex: 1;\n      }\n      .profile {\n      }\n      .profile paper-icon-item {\n        padding-left: 4px;\n      }\n      :host([_rtl]) .profile paper-icon-item {\n        padding-left: auto;\n        padding-right: 4px;\n      }\n      .profile .item-text {\n        margin-left: 8px;\n      }\n      :host([_rtl]) .profile .item-text {\n        margin-right: 8px;\n      }\n\n      .notification-badge {\n        min-width: 20px;\n        box-sizing: border-box;\n        border-radius: 50%;\n        font-weight: 400;\n        background-color: var(--accent-color);\n        line-height: 20px;\n        text-align: center;\n        padding: 0px 6px;\n        color: var(--text-primary-color);\n      }\n      ha-icon + .notification-badge {\n        position: absolute;\n        bottom: 14px;\n        left: 26px;\n        font-size: 0.65em;\n      }\n\n      .spacer {\n        flex: 1;\n        pointer-events: none;\n      }\n\n      .subheader {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        padding: 16px;\n        white-space: nowrap;\n      }\n\n      .dev-tools {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 0 8px;\n        width: 256px;\n        box-sizing: border-box;\n      }\n\n      .dev-tools a {\n        color: var(--sidebar-icon-color);\n      }\n\n      .tooltip {\n        display: none;\n        position: absolute;\n        opacity: 0.9;\n        border-radius: 2px;\n        white-space: nowrap;\n        color: var(--sidebar-background-color);\n        background-color: var(--sidebar-text-color);\n        padding: 4px;\n        font-weight: 500;\n      }\n\n      :host([_rtl]) .menu paper-icon-button {\n        -webkit-transform: scaleX(-1);\n        transform: scaleX(-1);\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      <a\n        aria-role=\"option\"\n        href=\"", "\"\n        data-panel=\"", "\"\n        tabindex=\"-1\"\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-icon slot=\"item-icon\" .icon=\"", "\"></ha-icon>\n          <span class=\"item-text\">", "</span>\n        </paper-icon-item>\n      </a>\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n              <span class=\"notification-badge\">", "</span>\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n              <span class=\"notification-badge\" slot=\"item-icon\">\n                ", "\n              </span>\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n              <a\n                aria-role=\"option\"\n                aria-label=", "\n                href=\"#external-app-configuration\"\n                tabindex=\"-1\"\n                @click=", "\n              >\n                <paper-icon-item\n                  @mouseenter=", "\n                  @mouseleave=", "\n                >\n                  <ha-icon\n                    slot=\"item-icon\"\n                    icon=\"hass:cellphone-settings-variant\"\n                  ></ha-icon>\n                  <span class=\"item-text\">\n                    ", "\n                  </span>\n                </paper-icon-item>\n              </a>\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <paper-icon-button\n                aria-label=", "\n                .icon=", "\n                @click=", "\n              ></paper-icon-button>\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"menu\">\n        ", "\n        <span class=\"title\">Home Assistant</span>\n      </div>\n      <paper-listbox\n        attr-for-selected=\"data-panel\"\n        .selected=", "\n        @focusin=", "\n        @focusout=", "\n        @scroll=", "\n        @keydown=", "\n      >\n        ", "\n        ", "\n        <div class=\"spacer\" disabled></div>\n\n        ", "\n        ", "\n      </paper-listbox>\n\n      <div class=\"divider\"></div>\n\n      <paper-icon-item\n        class=\"notifications\"\n        aria-role=\"option\"\n        @click=", "\n        @mouseenter=", "\n        @mouseleave=", "\n      >\n        <ha-icon slot=\"item-icon\" icon=\"hass:bell\"></ha-icon>\n        ", "\n        <span class=\"item-text\">\n          ", "\n        </span>\n        ", "\n      </paper-icon-item>\n\n      <a\n        class=", "\n        href=\"/profile\"\n        data-panel=\"panel\"\n        tabindex=\"-1\"\n        aria-role=\"option\"\n        aria-label=", "\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-user-badge slot=\"item-icon\" .user=", "></ha-user-badge>\n\n          <span class=\"item-text\">\n            ", "\n          </span>\n        </paper-icon-item>\n      </a>\n      <div disabled class=\"bottom-spacer\"></div>\n      <div class=\"tooltip\"></div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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















 // tslint:disable-next-line: no-duplicate-imports


var SHOW_AFTER_SPACER = ["config", "developer-tools", "hassio"];
var SUPPORT_SCROLL_IF_NEEDED = "scrollIntoViewIfNeeded" in document.body;
var SORT_VALUE_URL_PATHS = {
  map: 1,
  logbook: 2,
  history: 3,
  "developer-tools": 9,
  hassio: 10,
  config: 11
};

var panelSorter = function panelSorter(a, b) {
  var aBuiltIn = a.url_path in SORT_VALUE_URL_PATHS;
  var bBuiltIn = b.url_path in SORT_VALUE_URL_PATHS;

  if (aBuiltIn && bBuiltIn) {
    return SORT_VALUE_URL_PATHS[a.url_path] - SORT_VALUE_URL_PATHS[b.url_path];
  }

  if (aBuiltIn) {
    return -1;
  }

  if (bBuiltIn) {
    return 1;
  } // both not built in, sort by title


  if (a.title < b.title) {
    return -1;
  }

  if (a.title > b.title) {
    return 1;
  }

  return 0;
};

var computePanels = function computePanels(hass) {
  var panels = hass.panels;

  if (!panels) {
    return [[], []];
  }

  var beforeSpacer = [];
  var afterSpacer = [];
  Object.values(panels).forEach(function (panel) {
    if (!panel.title) {
      return;
    }

    (SHOW_AFTER_SPACER.includes(panel.url_path) ? afterSpacer : beforeSpacer).push(panel);
  });
  beforeSpacer.sort(panelSorter);
  afterSpacer.sort(panelSorter);
  return [beforeSpacer, afterSpacer];
};
/*
 * @appliesMixin LocalizeMixin
 */


var HaSidebar = _decorate(null, function (_initialize, _LitElement) {
  var HaSidebar =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaSidebar, _LitElement2);

    function HaSidebar() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaSidebar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaSidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaSidebar;
  }(_LitElement);

  return {
    F: HaSidebar,
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
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "alwaysExpand",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_defaultPage",
      value: function value() {
        return localStorage.defaultPage || _common_const__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_PANEL"];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_externalConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_notifications",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "_rtl",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_mouseLeaveTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_tooltipHideTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_recentKeydownActiveUntil",
      value: function value() {
        return 0;
      }
    }, {
      kind: "method",
      key: "render",
      value: // property used only in css
      // @ts-ignore
      function render() {
        var _this2 = this;

        var hass = this.hass;

        if (!hass) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        var _computePanels = computePanels(hass),
            _computePanels2 = _slicedToArray(_computePanels, 2),
            beforeSpacer = _computePanels2[0],
            afterSpacer = _computePanels2[1];

        var notificationCount = this._notifications ? this._notifications.length : 0;

        for (var entityId in hass.states) {
          if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__["computeDomain"])(entityId) === "configurator") {
            notificationCount++;
          }
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), !this.narrow ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), hass.localize("ui.sidebar.sidebar_toggle"), hass.dockedSidebar === "docked" ? "hass:menu-open" : "hass:menu", this._toggleSidebar) : "", hass.panelUrl, this._listboxFocusIn, this._listboxFocusOut, this._listboxScroll, this._listboxKeydown, this._renderPanel(this._defaultPage, "hass:apps", hass.localize("panel.states")), beforeSpacer.map(function (panel) {
          return _this2._renderPanel(panel.url_path, panel.icon, hass.localize("panel.".concat(panel.title)) || panel.title);
        }), afterSpacer.map(function (panel) {
          return _this2._renderPanel(panel.url_path, panel.icon, hass.localize("panel.".concat(panel.title)) || panel.title);
        }), this._externalConfig && this._externalConfig.hasSettingsScreen ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), hass.localize("ui.sidebar.external_app_configuration"), this._handleExternalAppConfiguration, this._itemMouseEnter, this._itemMouseLeave, hass.localize("ui.sidebar.external_app_configuration")) : "", this._handleShowNotificationDrawer, this._itemMouseEnter, this._itemMouseLeave, !this.expanded && notificationCount > 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), notificationCount) : "", hass.localize("ui.notification_drawer.title"), this.expanded && notificationCount > 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), notificationCount) : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__["classMap"])({
          profile: true,
          // Mimick behavior that paper-listbox provides
          "iron-selected": hass.panelUrl === "profile"
        }), hass.localize("panel.profile"), this._itemMouseEnter, this._itemMouseLeave, hass.user, hass.user ? hass.user.name : "");
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("expanded") || changedProps.has("narrow") || changedProps.has("alwaysExpand") || changedProps.has("_externalConfig") || changedProps.has("_notifications")) {
          return true;
        }

        if (!this.hass || !changedProps.has("hass")) {
          return false;
        }

        var oldHass = changedProps.get("hass");

        if (!oldHass) {
          return true;
        }

        var hass = this.hass;
        return hass.panels !== oldHass.panels || hass.panelUrl !== oldHass.panelUrl || hass.user !== oldHass.user || hass.localize !== oldHass.localize || hass.states !== oldHass.states;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this3 = this;

        _get(_getPrototypeOf(HaSidebar.prototype), "firstUpdated", this).call(this, changedProps);

        if (this.hass && this.hass.auth.external) {
          Object(_external_app_external_config__WEBPACK_IMPORTED_MODULE_11__["getExternalConfig"])(this.hass.auth.external).then(function (conf) {
            _this3._externalConfig = conf;
          });
        }

        Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__["subscribeNotifications"])(this.hass.connection, function (notifications) {
          _this3._notifications = notifications;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaSidebar.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("alwaysExpand")) {
          this.expanded = this.alwaysExpand;
        }

        if (!changedProps.has("hass")) {
          return;
        }

        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass);

        if (!SUPPORT_SCROLL_IF_NEEDED) {
          return;
        }

        var oldHass = changedProps.get("hass");

        if (!oldHass || oldHass.panelUrl !== this.hass.panelUrl) {
          var selectedEl = this.shadowRoot.querySelector(".iron-selected");

          if (selectedEl) {
            // @ts-ignore
            selectedEl.scrollIntoViewIfNeeded();
          }
        }
      }
    }, {
      kind: "get",
      key: "_tooltip",
      value: function _tooltip() {
        return this.shadowRoot.querySelector(".tooltip");
      }
    }, {
      kind: "method",
      key: "_itemMouseEnter",
      value: function _itemMouseEnter(ev) {
        // On keypresses on the listbox, we're going to ignore mouse enter events
        // for 100ms so that we ignore it when pressing down arrow scrolls the
        // sidebar causing the mouse to hover a new icon
        if (this.expanded || new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
          this._mouseLeaveTimeout = undefined;
        }

        this._showTooltip(ev.currentTarget);
      }
    }, {
      kind: "method",
      key: "_itemMouseLeave",
      value: function _itemMouseLeave() {
        var _this4 = this;

        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
        }

        this._mouseLeaveTimeout = window.setTimeout(function () {
          _this4._hideTooltip();
        }, 500);
      }
    }, {
      kind: "method",
      key: "_listboxFocusIn",
      value: function _listboxFocusIn(ev) {
        if (this.expanded || ev.target.nodeName !== "A") {
          return;
        }

        this._showTooltip(ev.target.querySelector("paper-icon-item"));
      }
    }, {
      kind: "method",
      key: "_listboxFocusOut",
      value: function _listboxFocusOut() {
        this._hideTooltip();
      }
    }, {
      kind: "method",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["eventOptions"])({
        passive: true
      })],
      key: "_listboxScroll",
      value: function _listboxScroll() {
        // On keypresses on the listbox, we're going to ignore scroll events
        // for 100ms so that if pressing down arrow scrolls the sidebar, the tooltip
        // will not be hidden.
        if (new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        this._hideTooltip();
      }
    }, {
      kind: "method",
      key: "_listboxKeydown",
      value: function _listboxKeydown() {
        this._recentKeydownActiveUntil = new Date().getTime() + 100;
      }
    }, {
      kind: "method",
      key: "_showTooltip",
      value: function _showTooltip(item) {
        if (this._tooltipHideTimeout) {
          clearTimeout(this._tooltipHideTimeout);
          this._tooltipHideTimeout = undefined;
        }

        var tooltip = this._tooltip;
        var listbox = this.shadowRoot.querySelector("paper-listbox");
        var top = item.offsetTop + 7;

        if (listbox.contains(item)) {
          top -= listbox.scrollTop;
        }

        tooltip.innerHTML = item.querySelector(".item-text").innerHTML;
        tooltip.style.display = "block";
        tooltip.style.top = "".concat(top, "px");
        tooltip.style.left = "".concat(item.offsetLeft + item.clientWidth + 12, "px");
      }
    }, {
      kind: "method",
      key: "_hideTooltip",
      value: function _hideTooltip() {
        var _this5 = this;

        // Delay it a little in case other events are pending processing.
        if (!this._tooltipHideTimeout) {
          this._tooltipHideTimeout = window.setTimeout(function () {
            _this5._tooltipHideTimeout = undefined;
            _this5._tooltip.style.display = "none";
          }, 10);
        }
      }
    }, {
      kind: "method",
      key: "_handleShowNotificationDrawer",
      value: function _handleShowNotificationDrawer() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "hass-show-notifications");
      }
    }, {
      kind: "method",
      key: "_handleExternalAppConfiguration",
      value: function _handleExternalAppConfiguration(ev) {
        ev.preventDefault();
        this.hass.auth.external.fireMessage({
          type: "config_screen/show"
        });
      }
    }, {
      kind: "method",
      key: "_toggleSidebar",
      value: function _toggleSidebar() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "hass-toggle-menu");
      }
    }, {
      kind: "method",
      key: "_renderPanel",
      value: function _renderPanel(urlPath, icon, title) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), "/".concat(urlPath), urlPath, this._itemMouseEnter, this._itemMouseLeave, icon, title);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-sidebar", HaSidebar);

/***/ }),

/***/ "./src/components/user/ha-user-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/user/ha-user-badge.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        text-align: center;\n        background-color: var(--light-primary-color);\n        text-decoration: none;\n        color: var(--primary-text-color);\n        overflow: hidden;\n      }\n\n      :host([long]) {\n        font-size: 80%;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

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




var computeInitials = function computeInitials(name) {
  if (!name) {
    return "user";
  }

  return name.trim() // Split by space and take first 3 words
  .split(" ").slice(0, 3) // Of each word, take first letter
  .map(function (s) {
    return s.substr(0, 1);
  }).join("");
};

var StateBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-user-badge")], function (_initialize, _LitElement) {
  var StateBadge =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(StateBadge, _LitElement2);

    function StateBadge() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateBadge);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return StateBadge;
  }(_LitElement);

  return {
    F: StateBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "user",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var user = this.user;
        var initials = user ? computeInitials(user.name) : "?";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), initials);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(StateBadge.prototype), "updated", this).call(this, changedProps);

        Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_1__["toggleAttribute"])(this, "long", (this.user ? computeInitials(this.user.name) : "?").length > 2);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/external_app/external_config.ts":
/*!*********************************************!*\
  !*** ./src/external_app/external_config.ts ***!
  \*********************************************/
/*! exports provided: getExternalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalConfig", function() { return getExternalConfig; });
var getExternalConfig = function getExternalConfig(bus) {
  if (!bus.cache.cfg) {
    bus.cache.cfg = bus.sendMessage({
      type: "config/get"
    });
  }

  return bus.cache.cfg;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc2lkZWJhci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNpZGViYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci9oYS11c2VyLWJhZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIGV2ZW50T3B0aW9ucyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuL2hhLWljb25cIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2VcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFBhbmVsSW5mbyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgREVGQVVMVF9QQU5FTCB9IGZyb20gXCIuLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7XG4gIGdldEV4dGVybmFsQ29uZmlnLFxuICBFeHRlcm5hbENvbmZpZyxcbn0gZnJvbSBcIi4uL2V4dGVybmFsX2FwcC9leHRlcm5hbF9jb25maWdcIjtcbmltcG9ydCB7XG4gIFBlcnNpc3RlbnROb3RpZmljYXRpb24sXG4gIHN1YnNjcmliZU5vdGlmaWNhdGlvbnMsXG59IGZyb20gXCIuLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBQYXBlckljb25JdGVtRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jb25zdCBTSE9XX0FGVEVSX1NQQUNFUiA9IFtcImNvbmZpZ1wiLCBcImRldmVsb3Blci10b29sc1wiLCBcImhhc3Npb1wiXTtcblxuY29uc3QgU1VQUE9SVF9TQ1JPTExfSUZfTkVFREVEID0gXCJzY3JvbGxJbnRvVmlld0lmTmVlZGVkXCIgaW4gZG9jdW1lbnQuYm9keTtcblxuY29uc3QgU09SVF9WQUxVRV9VUkxfUEFUSFMgPSB7XG4gIG1hcDogMSxcbiAgbG9nYm9vazogMixcbiAgaGlzdG9yeTogMyxcbiAgXCJkZXZlbG9wZXItdG9vbHNcIjogOSxcbiAgaGFzc2lvOiAxMCxcbiAgY29uZmlnOiAxMSxcbn07XG5cbmNvbnN0IHBhbmVsU29ydGVyID0gKGEsIGIpID0+IHtcbiAgY29uc3QgYUJ1aWx0SW4gPSBhLnVybF9wYXRoIGluIFNPUlRfVkFMVUVfVVJMX1BBVEhTO1xuICBjb25zdCBiQnVpbHRJbiA9IGIudXJsX3BhdGggaW4gU09SVF9WQUxVRV9VUkxfUEFUSFM7XG5cbiAgaWYgKGFCdWlsdEluICYmIGJCdWlsdEluKSB7XG4gICAgcmV0dXJuIFNPUlRfVkFMVUVfVVJMX1BBVEhTW2EudXJsX3BhdGhdIC0gU09SVF9WQUxVRV9VUkxfUEFUSFNbYi51cmxfcGF0aF07XG4gIH1cbiAgaWYgKGFCdWlsdEluKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChiQnVpbHRJbikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIC8vIGJvdGggbm90IGJ1aWx0IGluLCBzb3J0IGJ5IHRpdGxlXG4gIGlmIChhLnRpdGxlISA8IGIudGl0bGUhKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLnRpdGxlISA+IGIudGl0bGUhKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5jb25zdCBjb21wdXRlUGFuZWxzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBbUGFuZWxJbmZvW10sIFBhbmVsSW5mb1tdXSA9PiB7XG4gIGNvbnN0IHBhbmVscyA9IGhhc3MucGFuZWxzO1xuICBpZiAoIXBhbmVscykge1xuICAgIHJldHVybiBbW10sIFtdXTtcbiAgfVxuXG4gIGNvbnN0IGJlZm9yZVNwYWNlcjogUGFuZWxJbmZvW10gPSBbXTtcbiAgY29uc3QgYWZ0ZXJTcGFjZXI6IFBhbmVsSW5mb1tdID0gW107XG5cbiAgT2JqZWN0LnZhbHVlcyhwYW5lbHMpLmZvckVhY2goKHBhbmVsKSA9PiB7XG4gICAgaWYgKCFwYW5lbC50aXRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoU0hPV19BRlRFUl9TUEFDRVIuaW5jbHVkZXMocGFuZWwudXJsX3BhdGgpXG4gICAgICA/IGFmdGVyU3BhY2VyXG4gICAgICA6IGJlZm9yZVNwYWNlclxuICAgICkucHVzaChwYW5lbCk7XG4gIH0pO1xuXG4gIGJlZm9yZVNwYWNlci5zb3J0KHBhbmVsU29ydGVyKTtcbiAgYWZ0ZXJTcGFjZXIuc29ydChwYW5lbFNvcnRlcik7XG5cbiAgcmV0dXJuIFtiZWZvcmVTcGFjZXIsIGFmdGVyU3BhY2VyXTtcbn07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTaWRlYmFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYWx3YXlzRXhwYW5kID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIGV4cGFuZGVkID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBfZGVmYXVsdFBhZ2U/OiBzdHJpbmcgPVxuICAgIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSB8fCBERUZBVUxUX1BBTkVMO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9leHRlcm5hbENvbmZpZz86IEV4dGVybmFsQ29uZmlnO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub3RpZmljYXRpb25zPzogUGVyc2lzdGVudE5vdGlmaWNhdGlvbltdO1xuICAvLyBwcm9wZXJ0eSB1c2VkIG9ubHkgaW4gY3NzXG4gIC8vIEB0cy1pZ25vcmVcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBwcml2YXRlIF9ydGwgPSBmYWxzZTtcblxuICBwcml2YXRlIF9tb3VzZUxlYXZlVGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfdG9vbHRpcEhpZGVUaW1lb3V0PzogbnVtYmVyO1xuICBwcml2YXRlIF9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWwgPSAwO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcblxuICAgIGlmICghaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBbYmVmb3JlU3BhY2VyLCBhZnRlclNwYWNlcl0gPSBjb21wdXRlUGFuZWxzKGhhc3MpO1xuXG4gICAgbGV0IG5vdGlmaWNhdGlvbkNvdW50ID0gdGhpcy5fbm90aWZpY2F0aW9uc1xuICAgICAgPyB0aGlzLl9ub3RpZmljYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIGZvciAoY29uc3QgZW50aXR5SWQgaW4gaGFzcy5zdGF0ZXMpIHtcbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUlkKSA9PT0gXCJjb25maWd1cmF0b3JcIikge1xuICAgICAgICBub3RpZmljYXRpb25Db3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuc2lkZWJhci5zaWRlYmFyX3RvZ2dsZVwiKX1cbiAgICAgICAgICAgICAgICAuaWNvbj0ke2hhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJkb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgPyBcImhhc3M6bWVudS1vcGVuXCJcbiAgICAgICAgICAgICAgICAgIDogXCJoYXNzOm1lbnVcIn1cbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVTaWRlYmFyfVxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj5Ib21lIEFzc2lzdGFudDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJkYXRhLXBhbmVsXCJcbiAgICAgICAgLnNlbGVjdGVkPSR7aGFzcy5wYW5lbFVybH1cbiAgICAgICAgQGZvY3VzaW49JHt0aGlzLl9saXN0Ym94Rm9jdXNJbn1cbiAgICAgICAgQGZvY3Vzb3V0PSR7dGhpcy5fbGlzdGJveEZvY3VzT3V0fVxuICAgICAgICBAc2Nyb2xsPSR7dGhpcy5fbGlzdGJveFNjcm9sbH1cbiAgICAgICAgQGtleWRvd249JHt0aGlzLl9saXN0Ym94S2V5ZG93bn1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICB0aGlzLl9kZWZhdWx0UGFnZSxcbiAgICAgICAgICBcImhhc3M6YXBwc1wiLFxuICAgICAgICAgIGhhc3MubG9jYWxpemUoXCJwYW5lbC5zdGF0ZXNcIilcbiAgICAgICAgKX1cbiAgICAgICAgJHtiZWZvcmVTcGFjZXIubWFwKChwYW5lbCkgPT5cbiAgICAgICAgICB0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICAgIHBhbmVsLnVybF9wYXRoLFxuICAgICAgICAgICAgcGFuZWwuaWNvbixcbiAgICAgICAgICAgIGhhc3MubG9jYWxpemUoYHBhbmVsLiR7cGFuZWwudGl0bGV9YCkgfHwgcGFuZWwudGl0bGVcbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIiBkaXNhYmxlZD48L2Rpdj5cblxuICAgICAgICAke2FmdGVyU3BhY2VyLm1hcCgocGFuZWwpID0+XG4gICAgICAgICAgdGhpcy5fcmVuZGVyUGFuZWwoXG4gICAgICAgICAgICBwYW5lbC51cmxfcGF0aCxcbiAgICAgICAgICAgIHBhbmVsLmljb24sXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlXG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICAke3RoaXMuX2V4dGVybmFsQ29uZmlnICYmIHRoaXMuX2V4dGVybmFsQ29uZmlnLmhhc1NldHRpbmdzU2NyZWVuXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgaHJlZj1cIiNleHRlcm5hbC1hcHAtY29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlRXh0ZXJuYWxBcHBDb25maWd1cmF0aW9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbVxuICAgICAgICAgICAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9pdGVtTW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNlbGxwaG9uZS1zZXR0aW5ncy12YXJpYW50XCJcbiAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5zaWRlYmFyLmV4dGVybmFsX2FwcF9jb25maWd1cmF0aW9uXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9wYXBlci1saXN0Ym94PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PlxuXG4gICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9uc1wiXG4gICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZVNob3dOb3RpZmljYXRpb25EcmF3ZXJ9XG4gICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxoYS1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiBpY29uPVwiaGFzczpiZWxsXCI+PC9oYS1pY29uPlxuICAgICAgICAkeyF0aGlzLmV4cGFuZGVkICYmIG5vdGlmaWNhdGlvbkNvdW50ID4gMFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RpZmljYXRpb24tYmFkZ2VcIiBzbG90PVwiaXRlbS1pY29uXCI+XG4gICAgICAgICAgICAgICAgJHtub3RpZmljYXRpb25Db3VudH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5ub3RpZmljYXRpb25fZHJhd2VyLnRpdGxlXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICR7dGhpcy5leHBhbmRlZCAmJiBub3RpZmljYXRpb25Db3VudCA+IDBcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90aWZpY2F0aW9uLWJhZGdlXCI+JHtub3RpZmljYXRpb25Db3VudH08L3NwYW4+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgIHByb2ZpbGU6IHRydWUsXG4gICAgICAgICAgLy8gTWltaWNrIGJlaGF2aW9yIHRoYXQgcGFwZXItbGlzdGJveCBwcm92aWRlc1xuICAgICAgICAgIFwiaXJvbi1zZWxlY3RlZFwiOiBoYXNzLnBhbmVsVXJsID09PSBcInByb2ZpbGVcIixcbiAgICAgICAgfSl9XG4gICAgICAgIGhyZWY9XCIvcHJvZmlsZVwiXG4gICAgICAgIGRhdGEtcGFuZWw9XCJwYW5lbFwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICBhcmlhLXJvbGU9XCJvcHRpb25cIlxuICAgICAgICBhcmlhLWxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInBhbmVsLnByb2ZpbGVcIil9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICBAbW91c2VlbnRlcj0ke3RoaXMuX2l0ZW1Nb3VzZUVudGVyfVxuICAgICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICA8aGEtdXNlci1iYWRnZSBzbG90PVwiaXRlbS1pY29uXCIgLnVzZXI9JHtoYXNzLnVzZXJ9PjwvaGEtdXNlci1iYWRnZT5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAke2hhc3MudXNlciA/IGhhc3MudXNlci5uYW1lIDogXCJcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBkaXNhYmxlZCBjbGFzcz1cImJvdHRvbS1zcGFjZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJleHBhbmRlZFwiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIm5hcnJvd1wiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcImFsd2F5c0V4cGFuZFwiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9leHRlcm5hbENvbmZpZ1wiKSB8fFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9ub3RpZmljYXRpb25zXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIWNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50O1xuICAgIGlmICghb2xkSGFzcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgcmV0dXJuIChcbiAgICAgIGhhc3MucGFuZWxzICE9PSBvbGRIYXNzLnBhbmVscyB8fFxuICAgICAgaGFzcy5wYW5lbFVybCAhPT0gb2xkSGFzcy5wYW5lbFVybCB8fFxuICAgICAgaGFzcy51c2VyICE9PSBvbGRIYXNzLnVzZXIgfHxcbiAgICAgIGhhc3MubG9jYWxpemUgIT09IG9sZEhhc3MubG9jYWxpemUgfHxcbiAgICAgIGhhc3Muc3RhdGVzICE9PSBvbGRIYXNzLnN0YXRlc1xuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5oYXNzLmF1dGguZXh0ZXJuYWwpIHtcbiAgICAgIGdldEV4dGVybmFsQ29uZmlnKHRoaXMuaGFzcy5hdXRoLmV4dGVybmFsKS50aGVuKChjb25mKSA9PiB7XG4gICAgICAgIHRoaXMuX2V4dGVybmFsQ29uZmlnID0gY29uZjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25zKHRoaXMuaGFzcy5jb25uZWN0aW9uLCAobm90aWZpY2F0aW9ucykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnM7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJhbHdheXNFeHBhbmRcIikpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSB0aGlzLmFsd2F5c0V4cGFuZDtcbiAgICB9XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3J0bCA9IGNvbXB1dGVSVEwodGhpcy5oYXNzKTtcblxuICAgIGlmICghU1VQUE9SVF9TQ1JPTExfSUZfTkVFREVEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGlmICghb2xkSGFzcyB8fCBvbGRIYXNzLnBhbmVsVXJsICE9PSB0aGlzLmhhc3MucGFuZWxVcmwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRWwgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIuaXJvbi1zZWxlY3RlZFwiKTtcbiAgICAgIGlmIChzZWxlY3RlZEVsKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2VsZWN0ZWRFbC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Rvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIi50b29sdGlwXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2l0ZW1Nb3VzZUVudGVyKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgLy8gT24ga2V5cHJlc3NlcyBvbiB0aGUgbGlzdGJveCwgd2UncmUgZ29pbmcgdG8gaWdub3JlIG1vdXNlIGVudGVyIGV2ZW50c1xuICAgIC8vIGZvciAxMDBtcyBzbyB0aGF0IHdlIGlnbm9yZSBpdCB3aGVuIHByZXNzaW5nIGRvd24gYXJyb3cgc2Nyb2xscyB0aGVcbiAgICAvLyBzaWRlYmFyIGNhdXNpbmcgdGhlIG1vdXNlIHRvIGhvdmVyIGEgbmV3IGljb25cbiAgICBpZiAoXG4gICAgICB0aGlzLmV4cGFuZGVkIHx8XG4gICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IHRoaXMuX3JlY2VudEtleWRvd25BY3RpdmVVbnRpbFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCk7XG4gICAgICB0aGlzLl9tb3VzZUxlYXZlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fc2hvd1Rvb2x0aXAoZXYuY3VycmVudFRhcmdldCBhcyBQYXBlckljb25JdGVtRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIF9pdGVtTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGJveEZvY3VzSW4oZXYpIHtcbiAgICBpZiAodGhpcy5leHBhbmRlZCB8fCBldi50YXJnZXQubm9kZU5hbWUgIT09IFwiQVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Nob3dUb29sdGlwKGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwicGFwZXItaWNvbi1pdGVtXCIpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3Rib3hGb2N1c091dCgpIHtcbiAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xuICB9XG5cbiAgQGV2ZW50T3B0aW9ucyh7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgfSlcbiAgcHJpdmF0ZSBfbGlzdGJveFNjcm9sbCgpIHtcbiAgICAvLyBPbiBrZXlwcmVzc2VzIG9uIHRoZSBsaXN0Ym94LCB3ZSdyZSBnb2luZyB0byBpZ25vcmUgc2Nyb2xsIGV2ZW50c1xuICAgIC8vIGZvciAxMDBtcyBzbyB0aGF0IGlmIHByZXNzaW5nIGRvd24gYXJyb3cgc2Nyb2xscyB0aGUgc2lkZWJhciwgdGhlIHRvb2x0aXBcbiAgICAvLyB3aWxsIG5vdCBiZSBoaWRkZW4uXG4gICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgdGhpcy5fcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2hpZGVUb29sdGlwKCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0Ym94S2V5ZG93bigpIHtcbiAgICB0aGlzLl9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwMDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dUb29sdGlwKGl0ZW06IFBhcGVySWNvbkl0ZW1FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCk7XG4gICAgICB0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xuICAgIGNvbnN0IGxpc3Rib3ggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1saXN0Ym94XCIpITtcbiAgICBsZXQgdG9wID0gaXRlbS5vZmZzZXRUb3AgKyA3O1xuICAgIGlmIChsaXN0Ym94LmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICB0b3AgLT0gbGlzdGJveC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tdGV4dFwiKSEuaW5uZXJIVE1MO1xuICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0b29sdGlwLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gYCR7aXRlbS5vZmZzZXRMZWZ0ICsgaXRlbS5jbGllbnRXaWR0aCArIDEyfXB4YDtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGVUb29sdGlwKCkge1xuICAgIC8vIERlbGF5IGl0IGEgbGl0dGxlIGluIGNhc2Ugb3RoZXIgZXZlbnRzIGFyZSBwZW5kaW5nIHByb2Nlc3NpbmcuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTaG93Tm90aWZpY2F0aW9uRHJhd2VyKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3Mtc2hvdy1ub3RpZmljYXRpb25zXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRXh0ZXJuYWxBcHBDb25maWd1cmF0aW9uKGV2OiBFdmVudCkge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5oYXNzLmF1dGguZXh0ZXJuYWwhLmZpcmVNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnX3NjcmVlbi9zaG93XCIsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVTaWRlYmFyKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtdG9nZ2xlLW1lbnVcIik7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJQYW5lbCh1cmxQYXRoLCBpY29uLCB0aXRsZSkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgaHJlZj1cIiR7YC8ke3VybFBhdGh9YH1cIlxuICAgICAgICBkYXRhLXBhbmVsPVwiJHt1cmxQYXRofVwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9pdGVtTW91c2VFbnRlcn1cbiAgICAgICAgICBAbW91c2VsZWF2ZT0ke3RoaXMuX2l0ZW1Nb3VzZUxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgPGhhLWljb24gc2xvdD1cIml0ZW0taWNvblwiIC5pY29uPVwiJHtpY29ufVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGV4dFwiPiR7dGl0bGV9PC9zcGFuPlxuICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgIDwvYT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIHtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWVudSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIC5tZW51IHtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWljb24tY29sb3IpO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLm1lbnUgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdW19ydGxdKSAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjNweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWxpc3Rib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNHJlbTtcbiAgICAgICAgaGVpZ2h0OiAwLjRyZW07XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWxpc3Rib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveCB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE5NnB4KTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbGJhci10aHVtYi1jb2xvcikgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiA0cHggOHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW19ydGxdKSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWljb25bc2xvdD1cIml0ZW0taWNvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWljb24tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW06YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItc2VsZWN0ZWQtaWNvbi1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuMTI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTVtcyBsaW5lYXI7XG4gICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAgICAgfVxuXG4gICAgICAuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW1bcHJlc3NlZF06YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4zNztcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBhLmlyb24tc2VsZWN0ZWQgcGFwZXItaWNvbi1pdGVtIGhhLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgYS5pcm9uLXNlbGVjdGVkIC5pdGVtLXRleHQge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIC5pdGVtLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgcGFwZXItaWNvbi1pdGVtIC5pdGVtLXRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBib3R0b206IDExMnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB9XG4gICAgICAuZGl2aWRlcjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb25zIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm5vdGlmaWNhdGlvbnMgLml0ZW0tdGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAucHJvZmlsZSB7XG4gICAgICB9XG4gICAgICAucHJvZmlsZSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtfcnRsXSkgLnByb2ZpbGUgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgICAucHJvZmlsZSAuaXRlbS10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtfcnRsXSkgLnByb2ZpbGUgLml0ZW0tdGV4dCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgaGEtaWNvbiArIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgbGVmdDogMjZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XG4gICAgICB9XG5cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnN1YmhlYWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC5kZXYtdG9vbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB3aWR0aDogMjU2cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5kZXYtdG9vbHMgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWljb24tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAudG9vbHRpcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtfcnRsXSkgLm1lbnUgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXNpZGViYXJcIjogSGFTaWRlYmFyO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNpZGViYXJcIiwgSGFTaWRlYmFyKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9kYXRhL3VzZXJcIjtcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0b2dnbGVBdHRyaWJ1dGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS90b2dnbGVfYXR0cmlidXRlXCI7XG5cbmNvbnN0IGNvbXB1dGVJbml0aWFscyA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIFwidXNlclwiO1xuICB9XG4gIHJldHVybiAoXG4gICAgbmFtZVxuICAgICAgLnRyaW0oKVxuICAgICAgLy8gU3BsaXQgYnkgc3BhY2UgYW5kIHRha2UgZmlyc3QgMyB3b3Jkc1xuICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgLnNsaWNlKDAsIDMpXG4gICAgICAvLyBPZiBlYWNoIHdvcmQsIHRha2UgZmlyc3QgbGV0dGVyXG4gICAgICAubWFwKChzKSA9PiBzLnN1YnN0cigwLCAxKSlcbiAgICAgIC5qb2luKFwiXCIpXG4gICk7XG59O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXVzZXItYmFkZ2VcIilcbmNsYXNzIFN0YXRlQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIHVzZXI/OiBVc2VyIHwgQ3VycmVudFVzZXI7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgY29uc3QgaW5pdGlhbHMgPSB1c2VyID8gY29tcHV0ZUluaXRpYWxzKHVzZXIubmFtZSkgOiBcIj9cIjtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7aW5pdGlhbHN9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0b2dnbGVBdHRyaWJ1dGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJsb25nXCIsXG4gICAgICAodGhpcy51c2VyID8gY29tcHV0ZUluaXRpYWxzKHRoaXMudXNlci5uYW1lKSA6IFwiP1wiKS5sZW5ndGggPiAyXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2xvbmddKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXVzZXItYmFkZ2VcIjogU3RhdGVCYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRXh0ZXJuYWxNZXNzYWdpbmcgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbENvbmZpZyB7XG4gIGhhc1NldHRpbmdzU2NyZWVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZXJuYWxDb25maWcgPSAoXG4gIGJ1czogRXh0ZXJuYWxNZXNzYWdpbmdcbik6IFByb21pc2U8RXh0ZXJuYWxDb25maWc+ID0+IHtcbiAgaWYgKCFidXMuY2FjaGUuY2ZnKSB7XG4gICAgYnVzLmNhY2hlLmNmZyA9IGJ1cy5zZW5kTWVzc2FnZTxFeHRlcm5hbENvbmZpZz4oe1xuICAgICAgdHlwZTogXCJjb25maWcvZ2V0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJ1cy5jYWNoZS5jZmc7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7OztBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUFBOzs7O0FBQ0E7OztBQUNBOzs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUlBOzs7OztBQU5BO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBO0FBQUE7QUFTQTtBQUFBO0FBZ0VBO0FBQ0E7QUFDQTtBQUhBO0FBeUJBOzs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFnQkE7Ozs7O0FBRUE7QUFDQTtBQTRPQTs7O0FBdmtCQTtBQUNBO0FBK2tCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuckJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7Ozs7O0FBRUE7QUFDQTtBQWtCQTs7O0FBdkNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9