(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-automation~panel-config-core~panel-config-script"],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \***************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */

const IronMenubarBehaviorImpl = {
  hostAttributes: {
    'role': 'menubar'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left': '_onLeftKey',
    'right': '_onRightKey'
  },
  _onUpKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },
  _onDownKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function (event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onRightKey: function (event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onKeydown: function (event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    } // all other keys focus the menu item starting with that character


    this._focusWithKeyboardEvent(event);
  }
};
/** @polymerBehavior */

const IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-button/paper-radio-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-button` is a button that can be either checked or unchecked. The
user can tap the radio button to check or uncheck it.

Use a `<paper-radio-group>` to group a set of radio buttons. When radio buttons
are inside a radio group, exactly one radio button in the group can be checked
at any time.

Example:

    <paper-radio-button></paper-radio-button>
    <paper-radio-button>Item label</paper-radio-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
`--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
`--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-radio-button-checked-color` | Radio button color when the input is checked | `--primary-color`
`--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-radio-button-size` | Size of the radio button | `16px`
`--paper-radio-button-ink-size` | Size of the ripple | `48px`
`--paper-radio-button-label-color` | Label color | `--primary-text-color`
`--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
`--paper-radio-button-radio-container` | A mixin applied to the internal radio container | `{}`
`--paper-radio-button-label` | A mixin applied to the internal label | `{}`
`--paper-radio-button-label-checked` | A mixin applied to the internal label when the radio button is checked | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-radio-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-radio-button',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperCheckedElementBehavior"]],
  hostAttributes: {
    role: 'radio',
    'aria-checked': false,
    tabindex: 0
  },
  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-checked'
    }
  },
  ready: function () {
    this._rippleContainer = this.$.radioContainer;
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-radio-button-ink-size').trim(); // If unset, compute and set the default `--paper-radio-button-ink-size`.

      if (inkSize === '-1px') {
        var size = parseFloat(this.getComputedStyleValue('--calculated-paper-radio-button-size').trim());
        var defaultInkSize = Math.floor(3 * size); // The button and ripple need to have the same parity so that their
        // centers align.

        if (defaultInkSize % 2 !== size % 2) {
          defaultInkSize++;
        }

        this.updateStyles({
          '--paper-radio-button-ink-size': defaultInkSize + 'px'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-group/paper-radio-group.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button.js */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/**
Material design: [Radio
button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-group` allows user to select at most one radio button from a set.
Checking one radio button that belongs to a radio group unchecks any
previously checked radio button within the same group. Use
`selected` to get or set the selected radio button.

The <paper-radio-buttons> inside the group must have the `name` attribute
set.

Example:

    <paper-radio-group selected="small">
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

Radio-button-groups can be made optional, and allow zero buttons to be selected:

    <paper-radio-group selected="small" allow-empty-selection>
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

See <a href="paper-radio-button">paper-radio-button</a> for more
information about `paper-radio-button`.


Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-group-item-padding` | The padding of the item | `12px`

@group Paper Elements
@element paper-radio-group
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,
  is: 'paper-radio-group',
  behaviors: [_polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'radiogroup'
  },
  properties: {
    /**
     * Fired when the radio group selection changes.
     *
     * @event paper-radio-group-changed
     */

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    attrForSelected: {
      type: String,
      value: 'name'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectedAttribute: {
      type: String,
      value: 'checked'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectable: {
      type: String,
      value: 'paper-radio-button'
    },

    /**
     * If true, radio-buttons can be deselected
     */
    allowEmptySelection: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Selects the given value.
   */
  select: function (value) {
    var newItem = this._valueToItem(value);

    if (newItem && newItem.hasAttribute('disabled')) {
      return;
    }

    if (this.selected) {
      var oldItem = this._valueToItem(this.selected);

      if (this.selected == value) {
        // If deselecting is allowed we'll have to apply an empty selection.
        // Otherwise, we should force the selection to stay and make this
        // action a no-op.
        if (this.allowEmptySelection) {
          value = '';
        } else {
          if (oldItem) oldItem.checked = true;
          return;
        }
      }

      if (oldItem) oldItem.checked = false;
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__["IronSelectableBehavior"].select.apply(this, [value]);
    this.fire('paper-radio-group-changed');
  },
  _activateFocusedItem: function () {
    this._itemActivate(this._valueForItem(this.focusedItem), this.focusedItem);
  },
  _onUpKey: function (event) {
    this._focusPrevious();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onDownKey: function (event) {
    this._focusNext();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onLeftKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onLeftKey.apply(this, arguments);

    this._activateFocusedItem();
  },
  _onRightKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onRightKey.apply(this, arguments);

    this._activateFocusedItem();
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctY29yZX5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnViYXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uTWVudUJlaGF2aW9yfSBmcm9tICcuL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYElyb25NZW51YmFyQmVoYXZpb3JgIGltcGxlbWVudHMgYWNjZXNzaWJsZSBtZW51YmFyIGJlaGF2aW9yLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk1lbnViYXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdtZW51YmFyJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsnbGVmdCc6ICdfb25MZWZ0S2V5JywgJ3JpZ2h0JzogJ19vblJpZ2h0S2V5J30sXG5cbiAgX29uVXBLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1c2VkSXRlbS5jbGljaygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtLmNsaWNrKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBnZXQgX2lzUlRMKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVsnZGlyZWN0aW9uJ10gPT09ICdydGwnO1xuICB9LFxuXG4gIF9vbkxlZnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vblJpZ2h0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25LZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ3VwIGRvd24gbGVmdCByaWdodCBlc2MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsbCBvdGhlciBrZXlzIGZvY3VzIHRoZSBtZW51IGl0ZW0gc3RhcnRpbmcgd2l0aCB0aGF0IGNoYXJhY3RlclxuICAgIHRoaXMuX2ZvY3VzV2l0aEtleWJvYXJkRXZlbnQoZXZlbnQpO1xuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvciA9IFtJcm9uTWVudUJlaGF2aW9yLCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHthZnRlck5leHRSZW5kZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLXNpemU6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplLCAxNnB4KTtcbiAgICAvKiAtMXB4IGlzIGEgc2VudGluZWwgZm9yIHRoZSBkZWZhdWx0IGFuZCBpcyByZXBsYWNlIGluIFxcYGF0dGFjaGVkXFxgLiAqL1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemU6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZSwgLTFweCk7XG4gIH1cblxuICA6aG9zdCg6Zm9jdXMpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgI3JhZGlvQ29udGFpbmVyIHtcbiAgICBAYXBwbHkgLS1sYXlvdXQtaW5saW5lO1xuICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24tc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgQGFwcGx5IC0tcGFwZXItcmFkaW8tYnV0dG9uLXJhZGlvLWNvbnRhaW5lcjtcbiAgfVxuXG4gICNpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbiAgI2lua1tjaGVja2VkXSB7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgI29mZlJhZGlvLCAjb25SYWRpbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gICNvZmZSYWRpbyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjhzO1xuICB9XG5cbiAgI29uUmFkaW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZSAwLjI4cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAwLjI4cztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB9XG5cbiAgOmhvc3QoW2NoZWNrZWRdKSAjb2ZmUmFkaW8ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI29uUmFkaW8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuXG4gICNyYWRpb0xhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLXNwYWNpbmcsIDEwcHgpO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICBAYXBwbHkgLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWw7XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNyYWRpb0xhYmVsIHtcbiAgICBAYXBwbHkgLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY2hlY2tlZDtcbiAgfVxuXG4gICNyYWRpb0xhYmVsOmRpcihydGwpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1zcGFjaW5nLCAxMHB4KTtcbiAgfVxuXG4gICNyYWRpb0xhYmVsW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkaXNhYmxlZCBzdGF0ZSAqL1xuXG4gIDpob3N0KFtkaXNhYmxlZF0pICNvZmZSYWRpbyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdW2NoZWNrZWRdKSAjb25SYWRpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI3JhZGlvTGFiZWwge1xuICAgIC8qIHNsaWdodGx5IGRhcmtlciB0aGFuIHRoZSBidXR0b24sIHNvIHRoYXQgaXQncyByZWFkYWJsZSAqL1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgaWQ9XCJyYWRpb0NvbnRhaW5lclwiPlxuICA8ZGl2IGlkPVwib2ZmUmFkaW9cIj48L2Rpdj5cbiAgPGRpdiBpZD1cIm9uUmFkaW9cIj48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGlkPVwicmFkaW9MYWJlbFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1JhZGlvIGJ1dHRvbl0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NlbGVjdGlvbi1jb250cm9scy1yYWRpby1idXR0b24pXG5cbmBwYXBlci1yYWRpby1idXR0b25gIGlzIGEgYnV0dG9uIHRoYXQgY2FuIGJlIGVpdGhlciBjaGVja2VkIG9yIHVuY2hlY2tlZC4gVGhlXG51c2VyIGNhbiB0YXAgdGhlIHJhZGlvIGJ1dHRvbiB0byBjaGVjayBvciB1bmNoZWNrIGl0LlxuXG5Vc2UgYSBgPHBhcGVyLXJhZGlvLWdyb3VwPmAgdG8gZ3JvdXAgYSBzZXQgb2YgcmFkaW8gYnV0dG9ucy4gV2hlbiByYWRpbyBidXR0b25zXG5hcmUgaW5zaWRlIGEgcmFkaW8gZ3JvdXAsIGV4YWN0bHkgb25lIHJhZGlvIGJ1dHRvbiBpbiB0aGUgZ3JvdXAgY2FuIGJlIGNoZWNrZWRcbmF0IGFueSB0aW1lLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXJhZGlvLWJ1dHRvbj48L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICA8cGFwZXItcmFkaW8tYnV0dG9uPkl0ZW0gbGFiZWw8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcmAgfCBSYWRpbyBidXR0b24gYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGB0cmFuc3BhcmVudGBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtY29sb3JgIHwgUmFkaW8gYnV0dG9uIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtY29sb3JgIHwgUmFkaW8gYnV0dG9uIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplYCB8IFNpemUgb2YgdGhlIHJhZGlvIGJ1dHRvbiB8IGAxNnB4YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplYCB8IFNpemUgb2YgdGhlIHJpcHBsZSB8IGA0OHB4YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLWNvbG9yYCB8IExhYmVsIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLXNwYWNpbmdgIHwgU3BhY2luZyBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIGJ1dHRvbiB8IGAxMHB4YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXJhZGlvLWNvbnRhaW5lcmAgfCBBIG1peGluIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHJhZGlvIGNvbnRhaW5lciB8IGB7fWBcbmAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbGAgfCBBIG1peGluIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLWNoZWNrZWRgIHwgQSBtaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBsYWJlbCB3aGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItcmFkaW8tYnV0dG9uXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXJhZGlvLWJ1dHRvbicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yXSxcblxuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdyYWRpbycsICdhcmlhLWNoZWNrZWQnOiBmYWxzZSwgdGFiaW5kZXg6IDB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAZXZlbnQgY2hhbmdlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIGFyaWFBY3RpdmVBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYXJpYS1jaGVja2VkJ31cbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy4kLnJhZGlvQ29udGFpbmVyO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBXYWl0IHVudGlsIHN0eWxlcyBoYXZlIHJlc29sdmVkIHRvIGNoZWNrIGZvciB0aGUgZGVmYXVsdCBzZW50aW5lbC5cbiAgICAvLyBTZWUgcG9seW1lciM0MDA5IGZvciBtb3JlIGRldGFpbHMuXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGlua1NpemUgPVxuICAgICAgICAgIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplJylcbiAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgIC8vIElmIHVuc2V0LCBjb21wdXRlIGFuZCBzZXQgdGhlIGRlZmF1bHQgYC0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplYC5cbiAgICAgIGlmIChpbmtTaXplID09PSAnLTFweCcpIHtcbiAgICAgICAgdmFyIHNpemUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgdGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24tc2l6ZScpXG4gICAgICAgICAgICAgICAgLnRyaW0oKSk7XG4gICAgICAgIHZhciBkZWZhdWx0SW5rU2l6ZSA9IE1hdGguZmxvb3IoMyAqIHNpemUpO1xuXG4gICAgICAgIC8vIFRoZSBidXR0b24gYW5kIHJpcHBsZSBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgcGFyaXR5IHNvIHRoYXQgdGhlaXJcbiAgICAgICAgLy8gY2VudGVycyBhbGlnbi5cbiAgICAgICAgaWYgKGRlZmF1bHRJbmtTaXplICUgMiAhPT0gc2l6ZSAlIDIpIHtcbiAgICAgICAgICBkZWZhdWx0SW5rU2l6ZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoe1xuICAgICAgICAgICctLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZSc6IGRlZmF1bHRJbmtTaXplICsgJ3B4JyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59KVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b24uanMnO1xuXG5pbXBvcnQge0lyb25NZW51YmFyQmVoYXZpb3IsIElyb25NZW51YmFyQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51YmFyLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNlbGVjdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLXNlbGVjdGFibGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtSYWRpb1xuYnV0dG9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc2VsZWN0aW9uLWNvbnRyb2xzLXJhZGlvLWJ1dHRvbilcblxuYHBhcGVyLXJhZGlvLWdyb3VwYCBhbGxvd3MgdXNlciB0byBzZWxlY3QgYXQgbW9zdCBvbmUgcmFkaW8gYnV0dG9uIGZyb20gYSBzZXQuXG5DaGVja2luZyBvbmUgcmFkaW8gYnV0dG9uIHRoYXQgYmVsb25ncyB0byBhIHJhZGlvIGdyb3VwIHVuY2hlY2tzIGFueVxucHJldmlvdXNseSBjaGVja2VkIHJhZGlvIGJ1dHRvbiB3aXRoaW4gdGhlIHNhbWUgZ3JvdXAuIFVzZVxuYHNlbGVjdGVkYCB0byBnZXQgb3Igc2V0IHRoZSBzZWxlY3RlZCByYWRpbyBidXR0b24uXG5cblRoZSA8cGFwZXItcmFkaW8tYnV0dG9ucz4gaW5zaWRlIHRoZSBncm91cCBtdXN0IGhhdmUgdGhlIGBuYW1lYCBhdHRyaWJ1dGVcbnNldC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1yYWRpby1ncm91cCBzZWxlY3RlZD1cInNtYWxsXCI+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzbWFsbFwiPlNtYWxsPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJtZWRpdW1cIj5NZWRpdW08L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxhcmdlXCI+TGFyZ2U8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG5SYWRpby1idXR0b24tZ3JvdXBzIGNhbiBiZSBtYWRlIG9wdGlvbmFsLCBhbmQgYWxsb3cgemVybyBidXR0b25zIHRvIGJlIHNlbGVjdGVkOlxuXG4gICAgPHBhcGVyLXJhZGlvLWdyb3VwIHNlbGVjdGVkPVwic21hbGxcIiBhbGxvdy1lbXB0eS1zZWxlY3Rpb24+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzbWFsbFwiPlNtYWxsPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJtZWRpdW1cIj5NZWRpdW08L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxhcmdlXCI+TGFyZ2U8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG5TZWUgPGEgaHJlZj1cInBhcGVyLXJhZGlvLWJ1dHRvblwiPnBhcGVyLXJhZGlvLWJ1dHRvbjwvYT4gZm9yIG1vcmVcbmluZm9ybWF0aW9uIGFib3V0IGBwYXBlci1yYWRpby1idXR0b25gLlxuXG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXJhZGlvLWdyb3VwLWl0ZW0tcGFkZGluZ2AgfCBUaGUgcGFkZGluZyBvZiB0aGUgaXRlbSB8IGAxMnB4YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXJhZGlvLWdyb3VwXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYXBlci1yYWRpby1ncm91cC1pdGVtLXBhZGRpbmcsIDEycHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItcmFkaW8tZ3JvdXAnLFxuICBiZWhhdmlvcnM6IFtJcm9uTWVudWJhckJlaGF2aW9yXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICByb2xlOiAncmFkaW9ncm91cCcsXG4gIH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIHJhZGlvIGdyb3VwIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IHBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIFBvbHltZXIuSXJvblNlbGVjdGFibGVCZWhhdmlvclxuICAgICAqL1xuICAgIGF0dHJGb3JTZWxlY3RlZDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICduYW1lJ30sXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZW4gZnJvbSBQb2x5bWVyLklyb25TZWxlY3RhYmxlQmVoYXZpb3JcbiAgICAgKi9cbiAgICBzZWxlY3RlZEF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdjaGVja2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZW4gZnJvbSBQb2x5bWVyLklyb25TZWxlY3RhYmxlQmVoYXZpb3JcbiAgICAgKi9cbiAgICBzZWxlY3RhYmxlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3BhcGVyLXJhZGlvLWJ1dHRvbid9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcmFkaW8tYnV0dG9ucyBjYW4gYmUgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGFsbG93RW1wdHlTZWxlY3Rpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBuZXdJdGVtID0gdGhpcy5fdmFsdWVUb0l0ZW0odmFsdWUpO1xuICAgIGlmIChuZXdJdGVtICYmIG5ld0l0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHZhciBvbGRJdGVtID0gdGhpcy5fdmFsdWVUb0l0ZW0odGhpcy5zZWxlY3RlZCk7XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkID09IHZhbHVlKSB7XG4gICAgICAgIC8vIElmIGRlc2VsZWN0aW5nIGlzIGFsbG93ZWQgd2UnbGwgaGF2ZSB0byBhcHBseSBhbiBlbXB0eSBzZWxlY3Rpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2Ugc2hvdWxkIGZvcmNlIHRoZSBzZWxlY3Rpb24gdG8gc3RheSBhbmQgbWFrZSB0aGlzXG4gICAgICAgIC8vIGFjdGlvbiBhIG5vLW9wLlxuICAgICAgICBpZiAodGhpcy5hbGxvd0VtcHR5U2VsZWN0aW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2xkSXRlbSlcbiAgICAgICAgICAgIG9sZEl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbGRJdGVtKVxuICAgICAgICBvbGRJdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLnNlbGVjdC5hcHBseSh0aGlzLCBbdmFsdWVdKTtcbiAgICB0aGlzLmZpcmUoJ3BhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQnKTtcbiAgfSxcblxuICBfYWN0aXZhdGVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlbUFjdGl2YXRlKHRoaXMuX3ZhbHVlRm9ySXRlbSh0aGlzLmZvY3VzZWRJdGVtKSwgdGhpcy5mb2N1c2VkSXRlbSk7XG4gIH0sXG5cbiAgX29uVXBLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGVGb2N1c2VkSXRlbSgpO1xuICB9LFxuXG4gIF9vbkRvd25LZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNOZXh0KCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH0sXG5cbiAgX29uTGVmdEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uTWVudWJhckJlaGF2aW9ySW1wbC5fb25MZWZ0S2V5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5fYWN0aXZhdGVGb2N1c2VkSXRlbSgpO1xuICB9LFxuXG4gIF9vblJpZ2h0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25NZW51YmFyQmVoYXZpb3JJbXBsLl9vblJpZ2h0S2V5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5fYWN0aXZhdGVGb2N1c2VkSXRlbSgpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQW9EQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7Ozs7Ozs7Ozs7OztBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUFDQTtBQTJCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1R0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==