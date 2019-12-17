(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~notification-manager"],{

/***/ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js ***!
  \**************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$=\"[[mode]]\">[[_text]]</div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/

var IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject()),
  is: 'iron-a11y-announcer',
  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },
    _text: {
      type: String,
      value: ''
    }
  },
  created: function created() {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function announce(text) {
    this._text = '';
    this.async(function () {
      this._text = text;
    }, 100);
  },
  _onIronAnnounce: function _onIronAnnounce(event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});
IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function () {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};

/***/ }),

/***/ "./node_modules/@polymer/paper-toast/paper-toast.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/paper-toast/paper-toast.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        background-color: var(--paper-toast-background-color, #323232);\n        color: var(--paper-toast-color, #f1f1f1);\n        min-height: 48px;\n        min-width: 288px;\n        padding: 16px 24px;\n        box-sizing: border-box;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n        border-radius: 2px;\n        margin: 12px;\n        font-size: 14px;\n        cursor: default;\n        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        opacity: 0;\n        -webkit-transform: translateY(100px);\n        transform: translateY(100px);\n        @apply --paper-font-common-base;\n      }\n\n      :host(.capsule) {\n        border-radius: 24px;\n      }\n\n      :host(.fit-bottom) {\n        width: 100%;\n        min-width: 0;\n        border-radius: 0;\n        margin: 0;\n      }\n\n      :host(.paper-toast-open) {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n        transform: translateY(0px);\n      }\n    </style>\n\n    <span id=\"label\">{{text}}</span>\n    <slot></slot>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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




 // Keeps track of the toast currently opened.

var currentToast = null;
/**
Material design: [Snackbars &
toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)

`paper-toast` provides a subtle notification toast. Only one `paper-toast` will
be visible on screen.

Use `opened` to show the toast:

Example:

    <paper-toast text="Hello world!" opened></paper-toast>

Also `open()` or `show()` can be used to show the toast:

Example:

    <paper-button on-click="openToast">Open Toast</paper-button>
    <paper-toast id="toast" text="Hello world!"></paper-toast>

    ...

    openToast: function() {
      this.$.toast.open();
    }

Set `duration` to 0, a negative number or Infinity to persist the toast on
screen:

Example:

    <paper-toast text="Terms and conditions" opened duration="0">
      <a href="#">Show more</a>
    </paper-toast>


### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-toast-background-color` | The paper-toast background-color | `#323232`
`--paper-toast-color` | The paper-toast color | `#f1f1f1`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-toast
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
  is: 'paper-toast',
  behaviors: [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"]],
  properties: {
    /**
     * The element to fit `this` into.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    fitInto: {
      type: Object,
      value: window,
      observer: '_onFitIntoChanged'
    },

    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {
      type: String,
      value: 'left'
    },

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {
      type: String,
      value: 'bottom'
    },

    /**
     * The duration in milliseconds to show the toast.
     * Set to `0`, a negative number, or `Infinity`, to disable the
     * toast auto-closing.
     */
    duration: {
      type: Number,
      value: 3000
    },

    /**
     * The text to display in the toast.
     */
    text: {
      type: String,
      value: ''
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     * Set to false to enable closing of the toast by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: true
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     * Set to true to disable auto-focusing the toast or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: true
    }
  },
  listeners: {
    'transitionend': '__onTransitionEnd'
  },

  /**
   * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
   * @property visible
   * @deprecated
   */
  get visible() {
    _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('`visible` is deprecated, use `opened` instead');

    return this.opened;
  },

  /**
   * Read-only. Can auto-close if duration is a positive finite number.
   * @property _canAutoClose
   */
  get _canAutoClose() {
    return this.duration > 0 && this.duration !== Infinity;
  },

  created: function created() {
    this._autoClose = null;
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yAnnouncer"].requestAvailability();
  },

  /**
   * Show the toast. Without arguments, this is the same as `open()` from
   * `IronOverlayBehavior`.
   * @param {(Object|string)=} properties Properties to be set before opening the toast.
   * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
   */
  show: function show(properties) {
    if (typeof properties == 'string') {
      properties = {
        text: properties
      };
    }

    for (var property in properties) {
      if (property.indexOf('_') === 0) {
        _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('The property "' + property + '" is private and was not set.');
      } else if (property in this) {
        this[property] = properties[property];
      } else {
        _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('The property "' + property + '" is not valid.');
      }
    }

    this.open();
  },

  /**
   * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
   */
  hide: function hide() {
    this.close();
  },

  /**
   * Called on transitions of the toast, indicating a finished animation
   * @private
   */
  __onTransitionEnd: function __onTransitionEnd(e) {
    // there are different transitions that are happening when opening and
    // closing the toast. The last one so far is for `opacity`.
    // This marks the end of the transition, so we check for this to determine
    // if this is the correct event.
    if (e && e.target === this && e.propertyName === 'opacity') {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        this._finishRenderClosed();
      }
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   * Called when the value of `opened` changes.
   */
  _openedChanged: function _openedChanged() {
    if (this._autoClose !== null) {
      this.cancelAsync(this._autoClose);
      this._autoClose = null;
    }

    if (this.opened) {
      if (currentToast && currentToast !== this) {
        currentToast.close();
      }

      currentToast = this;
      this.fire('iron-announce', {
        text: this.text
      });

      if (this._canAutoClose) {
        this._autoClose = this.async(this.close, this.duration);
      }
    } else if (currentToast === this) {
      currentToast = null;
    }

    _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehaviorImpl"]._openedChanged.apply(this, arguments);
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function _renderOpened() {
    this.classList.add('paper-toast-open');
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function _renderClosed() {
    this.classList.remove('paper-toast-open');
  },

  /**
   * @private
   */
  _onFitIntoChanged: function _onFitIntoChanged(fitInto) {
    this.positionTarget = fitInto;
  }
  /**
   * Fired when `paper-toast` is opened.
   *
   * @event 'iron-announce'
   * @param {{text: string}} detail Contains text that will be announced.
   */

});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ub3RpZmljYXRpb24tbWFuYWdlci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXRvYXN0L3BhcGVyLXRvYXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5gaXJvbi1hMTF5LWFubm91bmNlcmAgaXMgYSBzaW5nbGV0b24gZWxlbWVudCB0aGF0IGlzIGludGVuZGVkIHRvIGFkZCBhMTF5XG50byBmZWF0dXJlcyB0aGF0IHJlcXVpcmUgb24tZGVtYW5kIGFubm91bmNlbWVudCBmcm9tIHNjcmVlbiByZWFkZXJzLiBJblxub3JkZXIgdG8gbWFrZSB1c2Ugb2YgdGhlIGFubm91bmNlciwgaXQgaXMgYmVzdCB0byByZXF1ZXN0IGl0cyBhdmFpbGFiaWxpdHlcbmluIHRoZSBhbm5vdW5jaW5nIGVsZW1lbnQuXG5cbkV4YW1wbGU6XG5cbiAgICBQb2x5bWVyKHtcblxuICAgICAgaXM6ICd4LWNoYXR0eScsXG5cbiAgICAgIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGNyZWF0ZSB0aGUgc2luZ2xldG9uIGVsZW1lbnQgaWYgaXQgaGFzIG5vdFxuICAgICAgICAvLyBiZWVuIGNyZWF0ZWQgeWV0OlxuICAgICAgICBQb2x5bWVyLklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuQWZ0ZXIgdGhlIGBpcm9uLWExMXktYW5ub3VuY2VyYCBoYXMgYmVlbiBtYWRlIGF2YWlsYWJsZSwgZWxlbWVudHMgY2FuXG5tYWtlIGFubm91bmNlcyBieSBmaXJpbmcgYnViYmxpbmcgYGlyb24tYW5ub3VuY2VgIGV2ZW50cy5cblxuRXhhbXBsZTpcblxuICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHtcbiAgICAgIHRleHQ6ICdUaGlzIGlzIGFuIGFubm91bmNlbWVudCEnXG4gICAgfSwgeyBidWJibGVzOiB0cnVlIH0pO1xuXG5Ob3RlOiBhbm5vdW5jZW1lbnRzIGFyZSBvbmx5IGF1ZGlibGUgaWYgeW91IGhhdmUgYSBzY3JlZW4gcmVhZGVyIGVuYWJsZWQuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5leHBvcnQgY29uc3QgSXJvbkExMXlBbm5vdW5jZXIgPSBQb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LDBweCwwcHgsMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgYXJpYS1saXZlJD1cIltbbW9kZV1dXCI+W1tfdGV4dF1dPC9kaXY+XG5gLFxuXG4gIGlzOiAnaXJvbi1hMTF5LWFubm91bmNlcicsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIG1vZGUgaXMgdXNlZCB0byBzZXQgdGhlIGBhcmlhLWxpdmVgIGF0dHJpYnV0ZVxuICAgICAqIGZvciB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkLiBWYWxpZCB2YWx1ZXMgYXJlOiBgb2ZmYCxcbiAgICAgKiBgcG9saXRlYCBhbmQgYGFzc2VydGl2ZWAuXG4gICAgICovXG4gICAgbW9kZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdwb2xpdGUnfSxcblxuICAgIF90ZXh0OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9XG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgICAgSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2lyb24tYW5ub3VuY2UnLCB0aGlzLl9vbklyb25Bbm5vdW5jZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2F1c2UgYSB0ZXh0IHN0cmluZyB0byBiZSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRoYXQgc2hvdWxkIGJlIGFubm91bmNlZC5cbiAgICovXG4gIGFubm91bmNlOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdGhpcy5fdGV4dCA9ICcnO1xuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB9LCAxMDApO1xuICB9LFxuXG4gIF9vbklyb25Bbm5vdW5jZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC50ZXh0KSB7XG4gICAgICB0aGlzLmFubm91bmNlKGV2ZW50LmRldGFpbC50ZXh0KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5Jcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IG51bGw7XG5cbklyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCFJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSkge1xuICAgIElyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaXJvbi1hMTF5LWFubm91bmNlcicpO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSk7XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQge0lyb25BMTF5QW5ub3VuY2VyfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMnO1xuaW1wb3J0IHtJcm9uT3ZlcmxheUJlaGF2aW9yLCBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHtCYXNlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRvYXN0IGN1cnJlbnRseSBvcGVuZWQuXG52YXIgY3VycmVudFRvYXN0ID0gbnVsbDtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtTbmFja2JhcnMgJlxudG9hc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvc25hY2tiYXJzLXRvYXN0cy5odG1sKVxuXG5gcGFwZXItdG9hc3RgIHByb3ZpZGVzIGEgc3VidGxlIG5vdGlmaWNhdGlvbiB0b2FzdC4gT25seSBvbmUgYHBhcGVyLXRvYXN0YCB3aWxsXG5iZSB2aXNpYmxlIG9uIHNjcmVlbi5cblxuVXNlIGBvcGVuZWRgIHRvIHNob3cgdGhlIHRvYXN0OlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXRvYXN0IHRleHQ9XCJIZWxsbyB3b3JsZCFcIiBvcGVuZWQ+PC9wYXBlci10b2FzdD5cblxuQWxzbyBgb3BlbigpYCBvciBgc2hvdygpYCBjYW4gYmUgdXNlZCB0byBzaG93IHRoZSB0b2FzdDpcblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1idXR0b24gb24tY2xpY2s9XCJvcGVuVG9hc3RcIj5PcGVuIFRvYXN0PC9wYXBlci1idXR0b24+XG4gICAgPHBhcGVyLXRvYXN0IGlkPVwidG9hc3RcIiB0ZXh0PVwiSGVsbG8gd29ybGQhXCI+PC9wYXBlci10b2FzdD5cblxuICAgIC4uLlxuXG4gICAgb3BlblRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJC50b2FzdC5vcGVuKCk7XG4gICAgfVxuXG5TZXQgYGR1cmF0aW9uYCB0byAwLCBhIG5lZ2F0aXZlIG51bWJlciBvciBJbmZpbml0eSB0byBwZXJzaXN0IHRoZSB0b2FzdCBvblxuc2NyZWVuOlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXRvYXN0IHRleHQ9XCJUZXJtcyBhbmQgY29uZGl0aW9uc1wiIG9wZW5lZCBkdXJhdGlvbj1cIjBcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCI+U2hvdyBtb3JlPC9hPlxuICAgIDwvcGFwZXItdG9hc3Q+XG5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10b2FzdC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFRoZSBwYXBlci10b2FzdCBiYWNrZ3JvdW5kLWNvbG9yIHwgYCMzMjMyMzJgXG5gLS1wYXBlci10b2FzdC1jb2xvcmAgfCBUaGUgcGFwZXItdG9hc3QgY29sb3IgfCBgI2YxZjFmMWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItdG9hc3RcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9hc3QtYmFja2dyb3VuZC1jb2xvciwgIzMyMzIzMik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci10b2FzdC1jb2xvciwgI2YxZjFmMSk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIG1pbi13aWR0aDogMjg4cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2Fwc3VsZSkge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguZml0LWJvdHRvbSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5wYXBlci10b2FzdC1vcGVuKSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3BhbiBpZD1cImxhYmVsXCI+e3t0ZXh0fX08L3NwYW4+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLXRvYXN0JyxcbiAgYmVoYXZpb3JzOiBbSXJvbk92ZXJsYXlCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRvIGZpdCBgdGhpc2AgaW50by5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICBmaXRJbnRvOiB7dHlwZTogT2JqZWN0LCB2YWx1ZTogd2luZG93LCBvYnNlcnZlcjogJ19vbkZpdEludG9DaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byBgcG9zaXRpb25UYXJnZXRgLlxuICAgICAqIE92ZXJyaWRkZW4gZnJvbSBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgLlxuICAgICAqL1xuICAgIGhvcml6b250YWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdsZWZ0J30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gYHBvc2l0aW9uVGFyZ2V0YC5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2JvdHRvbSd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSB0b2FzdC5cbiAgICAgKiBTZXQgdG8gYDBgLCBhIG5lZ2F0aXZlIG51bWJlciwgb3IgYEluZmluaXR5YCwgdG8gZGlzYWJsZSB0aGVcbiAgICAgKiB0b2FzdCBhdXRvLWNsb3NpbmcuXG4gICAgICovXG4gICAgZHVyYXRpb246IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAzMDAwfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIHRleHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgICAqIFNldCB0byBmYWxzZSB0byBlbmFibGUgY2xvc2luZyBvZiB0aGUgdG9hc3QgYnkgY2xpY2tpbmcgb3V0c2lkZSBpdC5cbiAgICAgKi9cbiAgICBub0NhbmNlbE9uT3V0c2lkZUNsaWNrOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGF1dG8tZm9jdXNpbmcgdGhlIHRvYXN0IG9yIGNoaWxkIG5vZGVzIHdpdGhcbiAgICAgKiB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlYCB3aGVuIHRoZSBvdmVybGF5IGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBub0F1dG9Gb2N1czoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlfVxuICB9LFxuXG4gIGxpc3RlbmVyczogeyd0cmFuc2l0aW9uZW5kJzogJ19fb25UcmFuc2l0aW9uRW5kJ30sXG5cbiAgLyoqXG4gICAqIFJlYWQtb25seS4gRGVwcmVjYXRlZC4gVXNlIGBvcGVuZWRgIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKiBAcHJvcGVydHkgdmlzaWJsZVxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgQmFzZS5fd2FybignYHZpc2libGVgIGlzIGRlcHJlY2F0ZWQsIHVzZSBgb3BlbmVkYCBpbnN0ZWFkJyk7XG4gICAgcmV0dXJuIHRoaXMub3BlbmVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkuIENhbiBhdXRvLWNsb3NlIGlmIGR1cmF0aW9uIGlzIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cbiAgICogQHByb3BlcnR5IF9jYW5BdXRvQ2xvc2VcbiAgICovXG4gIGdldCBfY2FuQXV0b0Nsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLmR1cmF0aW9uID4gMCAmJiB0aGlzLmR1cmF0aW9uICE9PSBJbmZpbml0eTtcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9hdXRvQ2xvc2UgPSBudWxsO1xuICAgIElyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgfSxcblxuICAvKipcbiAgICogU2hvdyB0aGUgdG9hc3QuIFdpdGhvdXQgYXJndW1lbnRzLCB0aGlzIGlzIHRoZSBzYW1lIGFzIGBvcGVuKClgIGZyb21cbiAgICogYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKiBAcGFyYW0geyhPYmplY3R8c3RyaW5nKT19IHByb3BlcnRpZXMgUHJvcGVydGllcyB0byBiZSBzZXQgYmVmb3JlIG9wZW5pbmcgdGhlIHRvYXN0LlxuICAgKiBlLmcuIGB0b2FzdC5zaG93KCdoZWxsbycpYCBvciBgdG9hc3Quc2hvdyh7dGV4dDogJ2hlbGxvJywgZHVyYXRpb246IDMwMDB9KWBcbiAgICovXG4gIHNob3c6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgPT0gJ3N0cmluZycpIHtcbiAgICAgIHByb3BlcnRpZXMgPSB7dGV4dDogcHJvcGVydGllc307XG4gICAgfVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCdfJykgPT09IDApIHtcbiAgICAgICAgQmFzZS5fd2FybihcbiAgICAgICAgICAgICdUaGUgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgaXMgcHJpdmF0ZSBhbmQgd2FzIG5vdCBzZXQuJyk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5IGluIHRoaXMpIHtcbiAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEJhc2UuX3dhcm4oJ1RoZSBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIiBpcyBub3QgdmFsaWQuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3BlbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSB0b2FzdC4gU2FtZSBhcyBgY2xvc2UoKWAgZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqL1xuICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0cmFuc2l0aW9ucyBvZiB0aGUgdG9hc3QsIGluZGljYXRpbmcgYSBmaW5pc2hlZCBhbmltYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgLy8gdGhlcmUgYXJlIGRpZmZlcmVudCB0cmFuc2l0aW9ucyB0aGF0IGFyZSBoYXBwZW5pbmcgd2hlbiBvcGVuaW5nIGFuZFxuICAgIC8vIGNsb3NpbmcgdGhlIHRvYXN0LiBUaGUgbGFzdCBvbmUgc28gZmFyIGlzIGZvciBgb3BhY2l0eWAuXG4gICAgLy8gVGhpcyBtYXJrcyB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLCBzbyB3ZSBjaGVjayBmb3IgdGhpcyB0byBkZXRlcm1pbmVcbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBjb3JyZWN0IGV2ZW50LlxuICAgIGlmIChlICYmIGUudGFyZ2V0ID09PSB0aGlzICYmIGUucHJvcGVydHlOYW1lID09PSAnb3BhY2l0eScpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9maW5pc2hSZW5kZXJPcGVuZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlckNsb3NlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZhbHVlIG9mIGBvcGVuZWRgIGNoYW5nZXMuXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9DbG9zZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jYW5jZWxBc3luYyh0aGlzLl9hdXRvQ2xvc2UpO1xuICAgICAgdGhpcy5fYXV0b0Nsb3NlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAoY3VycmVudFRvYXN0ICYmIGN1cnJlbnRUb2FzdCAhPT0gdGhpcykge1xuICAgICAgICBjdXJyZW50VG9hc3QuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRUb2FzdCA9IHRoaXM7XG4gICAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7dGV4dDogdGhpcy50ZXh0fSk7XG4gICAgICBpZiAodGhpcy5fY2FuQXV0b0Nsb3NlKSB7XG4gICAgICAgIHRoaXMuX2F1dG9DbG9zZSA9IHRoaXMuYXN5bmModGhpcy5jbG9zZSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VG9hc3QgPT09IHRoaXMpIHtcbiAgICAgIGN1cnJlbnRUb2FzdCA9IG51bGw7XG4gICAgfVxuICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9vcGVuZWRDaGFuZ2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqL1xuICBfcmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLXRvYXN0LW9wZW4nKTtcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICovXG4gIF9yZW5kZXJDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgncGFwZXItdG9hc3Qtb3BlbicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uRml0SW50b0NoYW5nZWQ6IGZ1bmN0aW9uKGZpdEludG8pIHtcbiAgICB0aGlzLnBvc2l0aW9uVGFyZ2V0ID0gZml0SW50bztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGBwYXBlci10b2FzdGAgaXMgb3BlbmVkLlxuICAgKlxuICAgKiBAZXZlbnQgJ2lyb24tYW5ub3VuY2UnXG4gICAqIEBwYXJhbSB7e3RleHQ6IHN0cmluZ319IGRldGFpbCBDb250YWlucyB0ZXh0IHRoYXQgd2lsbCBiZSBhbm5vdW5jZWQuXG4gICAqL1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQVdBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBOENBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQTVDQTtBQStDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUF2TkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==