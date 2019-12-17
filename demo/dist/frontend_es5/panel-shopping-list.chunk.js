(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-shopping-list"],{

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

/***/ "./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts":
/*!**************************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts ***!
  \**************************************************************************/
/*! exports provided: showVoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVoiceCommandDialog", function() { return showVoiceCommandDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


var loadVoiceCommandDialog = function loadVoiceCommandDialog() {
  return Promise.all(/*! import() | ha-voice-command-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~4aa624f2"), __webpack_require__.e("ha-voice-command-dialog")]).then(__webpack_require__.bind(null, /*! ./ha-voice-command-dialog */ "./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts"));
};

var showVoiceCommandDialog = function showVoiceCommandDialog(element) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "ha-voice-command-dialog",
    dialogImport: loadVoiceCommandDialog,
    dialogParams: {}
  });
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

/***/ "./src/panels/shopping-list/ha-panel-shopping-list.js":
/*!************************************************************!*\
  !*** ./src/panels/shopping-list/ha-panel-shopping-list.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dialogs/voice-command-dialog/show-ha-voice-command-dialog */ "./src/dialogs/voice-command-dialog/show-ha-voice-command-dialog.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          height: 100%;\n        }\n        app-toolbar paper-listbox {\n          width: 150px;\n        }\n        app-toolbar paper-item {\n          cursor: pointer;\n        }\n        .content {\n          padding-bottom: 32px;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n        paper-icon-item {\n          border-top: 1px solid var(--divider-color);\n        }\n        paper-icon-item:first-child {\n          border-top: 0;\n        }\n        paper-checkbox {\n          padding: 11px;\n        }\n        paper-input {\n          --paper-input-container-underline: {\n            display: none;\n          }\n          --paper-input-container-underline-focus: {\n            display: none;\n          }\n          position: relative;\n          top: 1px;\n        }\n        .tip {\n          padding: 24px;\n          text-align: center;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-menu-button>\n            <div main-title>[[localize('panel.shopping_list')]]</div>\n\n            <paper-icon-button\n              hidden$=\"[[!conversation]]\"\n              aria-label=\"Start conversation\"\n              icon=\"hass:microphone\"\n              on-click=\"_showVoiceCommandDialog\"\n            ></paper-icon-button>\n\n            <paper-menu-button\n              horizontal-align=\"right\"\n              horizontal-offset=\"-5\"\n              vertical-offset=\"-5\"\n            >\n              <paper-icon-button\n                icon=\"hass:dots-vertical\"\n                slot=\"dropdown-trigger\"\n              ></paper-icon-button>\n              <paper-listbox slot=\"dropdown-content\">\n                <paper-item on-click=\"_clearCompleted\"\n                  >[[localize('ui.panel.shopping-list.clear_completed')]]</paper-item\n                >\n              </paper-listbox>\n            </paper-menu-button>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <ha-card>\n            <paper-icon-item on-focus=\"_focusRowInput\">\n              <paper-icon-button\n                slot=\"item-icon\"\n                icon=\"hass:plus\"\n                on-click=\"_addItem\"\n              ></paper-icon-button>\n              <paper-item-body>\n                <paper-input\n                  id=\"addBox\"\n                  placeholder=\"[[localize('ui.panel.shopping-list.add_item')]]\"\n                  on-keydown=\"_addKeyPress\"\n                  no-label-float\n                ></paper-input>\n              </paper-item-body>\n            </paper-icon-item>\n\n            <template is=\"dom-repeat\" items=\"[[items]]\">\n              <paper-icon-item>\n                <paper-checkbox\n                  slot=\"item-icon\"\n                  checked=\"{{item.complete}}\"\n                  on-click=\"_itemCompleteTapped\"\n                  tabindex=\"0\"\n                ></paper-checkbox>\n                <paper-item-body>\n                  <paper-input\n                    id=\"editBox\"\n                    no-label-float\n                    value=\"[[item.name]]\"\n                    on-change=\"_saveEdit\"\n                  ></paper-input>\n                </paper-item-body>\n              </paper-icon-item>\n            </template>\n          </ha-card>\n          <div class=\"tip\" hidden$=\"[[!conversation]]\">\n            [[localize('ui.panel.shopping-list.microphone_tip')]]\n          </div>\n        </div>\n      </app-header-layout>\n    "]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















/*
 * @appliesMixin LocalizeMixin
 */

var HaPanelShoppingList =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPanelShoppingList, _LocalizeMixin);

  function HaPanelShoppingList() {
    _classCallCheck(this, HaPanelShoppingList);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelShoppingList).apply(this, arguments));
  }

  _createClass(HaPanelShoppingList, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaPanelShoppingList.prototype), "connectedCallback", this).call(this);

      this._fetchData = this._fetchData.bind(this);
      this.hass.connection.subscribeEvents(this._fetchData, "shopping_list_updated").then(function (unsub) {
        this._unsubEvents = unsub;
      }.bind(this));

      this._fetchData();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaPanelShoppingList.prototype), "disconnectedCallback", this).call(this);

      if (this._unsubEvents) this._unsubEvents();
    }
  }, {
    key: "_fetchData",
    value: function _fetchData() {
      this.hass.callApi("get", "shopping_list").then(function (items) {
        items.reverse();
        this.items = items;
      }.bind(this));
    }
  }, {
    key: "_itemCompleteTapped",
    value: function _itemCompleteTapped(ev) {
      var _this = this;

      ev.stopPropagation();
      this.hass.callApi("post", "shopping_list/item/" + ev.model.item.id, {
        complete: ev.target.checked
      })["catch"](function () {
        return _this._fetchData();
      });
    }
  }, {
    key: "_addItem",
    value: function _addItem(ev) {
      var _this2 = this;

      this.hass.callApi("post", "shopping_list/item", {
        name: this.$.addBox.value
      })["catch"](function () {
        return _this2._fetchData();
      });
      this.$.addBox.value = ""; // Presence of 'ev' means tap on "add" button.

      if (ev) {
        setTimeout(function () {
          return _this2.$.addBox.focus();
        }, 10);
      }
    }
  }, {
    key: "_addKeyPress",
    value: function _addKeyPress(ev) {
      if (ev.keyCode === 13) {
        this._addItem();
      }
    }
  }, {
    key: "_computeConversation",
    value: function _computeConversation(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_16__["isComponentLoaded"])(hass, "conversation");
    }
  }, {
    key: "_showVoiceCommandDialog",
    value: function _showVoiceCommandDialog() {
      Object(_dialogs_voice_command_dialog_show_ha_voice_command_dialog__WEBPACK_IMPORTED_MODULE_17__["showVoiceCommandDialog"])(this);
    }
  }, {
    key: "_saveEdit",
    value: function _saveEdit(ev) {
      var _this3 = this;

      var _ev$model = ev.model,
          index = _ev$model.index,
          item = _ev$model.item;
      var name = ev.target.value;

      if (name === item.name) {
        return;
      }

      this.set(["items", index, "name"], name);
      this.hass.callApi("post", "shopping_list/item/" + item.id, {
        name: name
      })["catch"](function () {
        return _this3._fetchData();
      });
    }
  }, {
    key: "_clearCompleted",
    value: function _clearCompleted() {
      this.hass.callApi("POST", "shopping_list/clear_completed");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        narrow: Boolean,
        conversation: {
          type: Boolean,
          computed: "_computeConversation(hass)"
        },
        items: {
          type: Array,
          value: []
        }
      };
    }
  }]);

  return HaPanelShoppingList;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_12__["PolymerElement"]));

customElements.define("ha-panel-shopping-list", HaPanelShoppingList);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc2hvcHBpbmctbGlzdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvc2hvdy1oYS12b2ljZS1jb21tYW5kLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvc2hvcHBpbmctbGlzdC9oYS1wYW5lbC1zaG9wcGluZy1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIFJldHVybiBpZiBhIGNvbXBvbmVudCBpcyBsb2FkZWQuICovXG5leHBvcnQgY29uc3QgaXNDb21wb25lbnRMb2FkZWQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuID0+IGhhc3MgJiYgaGFzcy5jb25maWcuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT09IC0xO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5jb25zdCBsb2FkVm9pY2VDb21tYW5kRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIiAqLyBcIi4vaGEtdm9pY2UtY29tbWFuZC1kaWFsb2dcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd1ZvaWNlQ29tbWFuZERpYWxvZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkVm9pY2VDb21tYW5kRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczoge30sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IHNob3dWb2ljZUNvbW1hbmREaWFsb2cgfSBmcm9tIFwiLi4vLi4vZGlhbG9ncy92b2ljZS1jb21tYW5kLWRpYWxvZy9zaG93LWhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbFNob3BwaW5nTGlzdCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBhcHAtdG9vbGJhciBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYXBwLXRvb2xiYXIgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgICAgcGFkZGluZzogMTFweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgfVxuICAgICAgICAudGlwIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5zaG9wcGluZ19saXN0JyldXTwvZGl2PlxuXG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIWNvbnZlcnNhdGlvbl1dXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXJ0IGNvbnZlcnNhdGlvblwiXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOm1pY3JvcGhvbmVcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIl9zaG93Vm9pY2VDb21tYW5kRGlhbG9nXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvbi1jbGljaz1cIl9jbGVhckNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuc2hvcHBpbmctbGlzdC5jbGVhcl9jb21wbGV0ZWQnKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBvbi1mb2N1cz1cIl9mb2N1c1Jvd0lucHV0XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2FkZEl0ZW1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYWRkQm94XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuc2hvcHBpbmctbGlzdC5hZGRfaXRlbScpXV1cIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9hZGRLZXlQcmVzc1wiXG4gICAgICAgICAgICAgICAgICBuby1sYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cInt7aXRlbS5jb21wbGV0ZX19XCJcbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2l0ZW1Db21wbGV0ZVRhcHBlZFwiXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0Qm94XCJcbiAgICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJbW2l0ZW0ubmFtZV1dXCJcbiAgICAgICAgICAgICAgICAgICAgb24tY2hhbmdlPVwiX3NhdmVFZGl0XCJcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBcIiBoaWRkZW4kPVwiW1shY29udmVyc2F0aW9uXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnNob3BwaW5nLWxpc3QubWljcm9waG9uZV90aXAnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBjb252ZXJzYXRpb246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVDb252ZXJzYXRpb24oaGFzcylcIixcbiAgICAgIH0sXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaERhdGEgPSB0aGlzLl9mZXRjaERhdGEuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uXG4gICAgICAuc3Vic2NyaWJlRXZlbnRzKHRoaXMuX2ZldGNoRGF0YSwgXCJzaG9wcGluZ19saXN0X3VwZGF0ZWRcIilcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbih1bnN1Yikge1xuICAgICAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5zdWI7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB0aGlzLl91bnN1YkV2ZW50cygpO1xuICB9XG5cbiAgX2ZldGNoRGF0YSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcImdldFwiLCBcInNob3BwaW5nX2xpc3RcIikudGhlbihcbiAgICAgIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLnJldmVyc2UoKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIF9pdGVtQ29tcGxldGVUYXBwZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcInNob3BwaW5nX2xpc3QvaXRlbS9cIiArIGV2Lm1vZGVsLml0ZW0uaWQsIHtcbiAgICAgICAgY29tcGxldGU6IGV2LnRhcmdldC5jaGVja2VkLFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLl9mZXRjaERhdGEoKSk7XG4gIH1cblxuICBfYWRkSXRlbShldikge1xuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwic2hvcHBpbmdfbGlzdC9pdGVtXCIsIHtcbiAgICAgICAgbmFtZTogdGhpcy4kLmFkZEJveC52YWx1ZSxcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdGhpcy5fZmV0Y2hEYXRhKCkpO1xuICAgIHRoaXMuJC5hZGRCb3gudmFsdWUgPSBcIlwiO1xuICAgIC8vIFByZXNlbmNlIG9mICdldicgbWVhbnMgdGFwIG9uIFwiYWRkXCIgYnV0dG9uLlxuICAgIGlmIChldikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLiQuYWRkQm94LmZvY3VzKCksIDEwKTtcbiAgICB9XG4gIH1cblxuICBfYWRkS2V5UHJlc3MoZXYpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUNvbnZlcnNhdGlvbihoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiY29udmVyc2F0aW9uXCIpO1xuICB9XG5cbiAgX3Nob3dWb2ljZUNvbW1hbmREaWFsb2coKSB7XG4gICAgc2hvd1ZvaWNlQ29tbWFuZERpYWxvZyh0aGlzKTtcbiAgfVxuXG4gIF9zYXZlRWRpdChldikge1xuICAgIGNvbnN0IHsgaW5kZXgsIGl0ZW0gfSA9IGV2Lm1vZGVsO1xuICAgIGNvbnN0IG5hbWUgPSBldi50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmFtZSA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoW1wiaXRlbXNcIiwgaW5kZXgsIFwibmFtZVwiXSwgbmFtZSk7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJzaG9wcGluZ19saXN0L2l0ZW0vXCIgKyBpdGVtLmlkLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMuX2ZldGNoRGF0YSgpKTtcbiAgfVxuXG4gIF9jbGVhckNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcIlBPU1RcIiwgXCJzaG9wcGluZ19saXN0L2NsZWFyX2NvbXBsZXRlZFwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1zaG9wcGluZy1saXN0XCIsIEhhUGFuZWxTaG9wcGluZ0xpc3QpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQSxnWUFFQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUEwSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBM05BO0FBQ0E7QUF1SEE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUF4SUE7QUFDQTtBQThOQTs7OztBIiwic291cmNlUm9vdCI6IiJ9