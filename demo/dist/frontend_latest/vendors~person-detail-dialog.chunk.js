(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~person-detail-dialog"],{

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CLOSING: 'mdc-dialog--closing',
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  SCROLLABLE: 'mdc-dialog--scrollable',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  STACKED: 'mdc-dialog--stacked'
};
var strings = {
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  CLOSED_EVENT: 'MDCDialog:closed',
  CLOSE_ACTION: 'close',
  CLOSING_EVENT: 'MDCDialog:closing',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  DESTROY_ACTION: 'destroy',
  INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
  OPENED_EVENT: 'MDCDialog:opened',
  OPENING_EVENT: 'MDCDialog:opening',
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};

/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCDialogFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return MDCDialogFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/dialog/node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDialogFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialogFoundation, _super);

  function MDCDialogFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.layoutFrame_ = 0;
    _this.escapeKeyAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.scrimClickAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.autoStackButtons_ = true;
    _this.areButtonsStacked_ = false;
    return _this;
  }

  Object.defineProperty(MDCDialogFoundation, "cssClasses", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "strings", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "numbers", {
    get: function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
    get: function () {
      return {
        addBodyClass: function () {
          return undefined;
        },
        addClass: function () {
          return undefined;
        },
        areButtonsStacked: function () {
          return false;
        },
        clickDefaultButton: function () {
          return undefined;
        },
        eventTargetMatches: function () {
          return false;
        },
        getActionFromEvent: function () {
          return '';
        },
        getInitialFocusEl: function () {
          return null;
        },
        hasClass: function () {
          return false;
        },
        isContentScrollable: function () {
          return false;
        },
        notifyClosed: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        },
        notifyOpened: function () {
          return undefined;
        },
        notifyOpening: function () {
          return undefined;
        },
        releaseFocus: function () {
          return undefined;
        },
        removeBodyClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        reverseButtons: function () {
          return undefined;
        },
        trapFocus: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCDialogFoundation.prototype.init = function () {
    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED)) {
      this.setAutoStackButtons(false);
    }
  };

  MDCDialogFoundation.prototype.destroy = function () {
    if (this.isOpen_) {
      this.close(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].DESTROY_ACTION);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
      this.handleAnimationTimerEnd_();
    }

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
      this.layoutFrame_ = 0;
    }
  };

  MDCDialogFoundation.prototype.open = function () {
    var _this = this;

    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);

      _this.adapter_.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);

      _this.layout();

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.trapFocus(_this.adapter_.getInitialFocusEl());

        _this.adapter_.notifyOpened();
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };

  MDCDialogFoundation.prototype.close = function (action) {
    var _this = this;

    if (action === void 0) {
      action = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
      return;
    }

    this.isOpen_ = false;
    this.adapter_.notifyClosing(action);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.adapter_.releaseFocus();

      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(action);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_CLOSE_TIME_MS);
  };

  MDCDialogFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  };

  MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
    this.escapeKeyAction_ = action;
  };

  MDCDialogFoundation.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  };

  MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
    this.scrimClickAction_ = action;
  };

  MDCDialogFoundation.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  };

  MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
    this.autoStackButtons_ = autoStack;
  };

  MDCDialogFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };
  /** Handles click on the dialog root element. */


  MDCDialogFoundation.prototype.handleClick = function (evt) {
    var isScrim = this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SCRIM_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors.

    if (isScrim && this.scrimClickAction_ !== '') {
      this.close(this.scrimClickAction_);
    } else {
      var action = this.adapter_.getActionFromEvent(evt);

      if (action) {
        this.close(action);
      }
    }
  };
  /** Handles keydown on the dialog root element. */


  MDCDialogFoundation.prototype.handleKeydown = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (!isEnter) {
      return;
    }

    var action = this.adapter_.getActionFromEvent(evt);

    if (action) {
      // Action button callback is handled in `handleClick`,
      // since space/enter keydowns on buttons trigger click events.
      return;
    }

    var isDefault = !this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SUPPRESS_DEFAULT_PRESS_SELECTOR);

    if (isEnter && isDefault) {
      this.adapter_.clickDefaultButton();
    }
  };
  /** Handles keydown on the document. */


  MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape && this.escapeKeyAction_ !== '') {
      this.close(this.escapeKeyAction_);
    }
  };

  MDCDialogFoundation.prototype.layoutInternal_ = function () {
    if (this.autoStackButtons_) {
      this.detectStackedButtons_();
    }

    this.detectScrollableContent_();
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
    // Remove the class first to let us measure the buttons' natural positions.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    var areButtonsStacked = this.adapter_.areButtonsStacked();

    if (areButtonsStacked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    }

    if (areButtonsStacked !== this.areButtonsStacked_) {
      this.adapter_.reverseButtons();
      this.areButtonsStacked_ = areButtonsStacked;
    }
  };

  MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
    // Remove the class first to let us measure the natural height of the content.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);

    if (this.adapter_.isContentScrollable()) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
    }
  };

  return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);

/***/ }),

/***/ "./node_modules/@material/dialog/node_modules/@material/base/foundation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material/dialog/node_modules/@material/base/foundation.js ***!
  \*********************************************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);

/***/ }),

/***/ "./node_modules/@material/mwc-base/base-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/base-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return BaseElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer_js__WEBPACK_IMPORTED_MODULE_1__["observer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



class BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== undefined) {
      this.mdcFoundation.destroy();
    }

    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
    this.mdcFoundation.init();
  }

  firstUpdated() {
    this.createFoundation();
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js ***!
  \********************************************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/***/ }),

/***/ "./node_modules/@material/mwc-base/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-base/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
const observer = observer => // eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
  // if we haven't wrapped `updated` in this class, do so
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;

    proto.updated = function (changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v, k) => {
        const observer = this.constructor._observers.get(k);

        if (observer !== undefined) {
          observer.call(this, this[k], v);
        }
      });
    }; // clone any existing observers (superclasses)

  } else if (!proto.constructor.hasOwnProperty('_observers')) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, k) => proto.constructor._observers.set(k, v));
  } // set this method


  proto.constructor._observers.set(propName, observer);
};

/***/ }),

/***/ "./node_modules/@material/mwc-base/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/mwc-base/utils.js ***!
  \**************************************************/
/*! exports provided: findAssignedElement, addHasRemoveClass, supportsPassiveEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAssignedElement", function() { return findAssignedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return addHasRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListener", function() { return supportsPassiveEventListener; });
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/mwc-base/node_modules/@material/dom/ponyfill.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Return an element assigned to a given slot that matches the given selector
 */

function findAssignedElement(slot, selector) {
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;

      if (Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__["matches"])(el, selector)) {
        return el;
      }
    }
  }

  return null;
}
function addHasRemoveClass(element) {
  return {
    addClass: className => {
      element.classList.add(className);
    },
    removeClass: className => {
      element.classList.remove(className);
    },
    hasClass: className => element.classList.contains(className)
  };
}
let supportsPassive = false;

const fn = () => {};

const optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }

};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */

const supportsPassiveEventListener = supportsPassive;

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-base.js ***!
  \**************************************************************/
/*! exports provided: DialogBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBase", function() { return DialogBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blocking-elements */ "./node_modules/blocking-elements/dist/blocking-elements.js");
/* harmony import */ var blocking_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blocking_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wicg-inert */ "./node_modules/wicg-inert/src/inert.js");
/* harmony import */ var wicg_inert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wicg_inert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dialog/constants.js */ "./node_modules/@material/dialog/constants.js");
/* harmony import */ var _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dialog/foundation.js */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/mwc-dialog/node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/mwc-dialog/node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-base/base-element.js */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/










const blockingElements = document.$blockingElements;
class DialogBase extends _material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["BaseElement"] {
  constructor() {
    super(...arguments);
    this.hideActions = false;
    this.stacked = false;
    this.title = '';
    this.scrimClickAction = 'close';
    this.escapeKeyAction = 'close';
    this.open = false;
    this.defaultAction = 'close';
    this.actionAttribute = 'dialogAction';
    this.initialFocusAttribute = 'dialogInitialFocus';
    this.mdcFoundationClass = _material_dialog_foundation_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.boundLayout = null;
    this.boundHandleClick = null;
    this.boundHandleKeydown = null;
    this.boundHandleDocumentKeydown = null;
  }

  get primaryButton() {
    let assignedNodes = this.primarySlot.assignedNodes();
    assignedNodes = assignedNodes.filter(node => node instanceof HTMLElement);
    const button = assignedNodes[0];
    return button ? button : null;
  }

  emitNotification(name, action) {
    const init = {
      detail: action ? {
        action
      } : {}
    };
    const ev = new CustomEvent(name, init);
    this.dispatchEvent(ev);
  }

  getInitialFocusEl() {
    return this.querySelector(`[${this.initialFocusAttribute}]`);
  }

  createAdapter() {
    return Object.assign(Object.assign({}, Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["addHasRemoveClass"])(this.mdcRoot)), {
      addBodyClass: () => document.body.style.overflow = 'hidden',
      removeBodyClass: () => document.body.style.overflow = '',
      areButtonsStacked: () => this.stacked,
      clickDefaultButton: () => {
        const primary = this.primaryButton;

        if (primary) {
          primary.click();
        }
      },
      eventTargetMatches: (target, selector) => target ? Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["matches"])(target, selector) : false,
      getActionFromEvent: e => {
        if (!e.target) {
          return '';
        }

        const element = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__["closest"])(e.target, `[${this.actionAttribute}]`);
        const action = element && element.getAttribute(this.actionAttribute);
        return action;
      },
      getInitialFocusEl: () => {
        return this.getInitialFocusEl();
      },
      isContentScrollable: () => {
        const el = this.contentElement;
        return el ? el.scrollHeight > el.offsetHeight : false;
      },
      notifyClosed: action => this.emitNotification('closed', action),
      notifyClosing: action => {
        this.open = false;
        this.emitNotification('closing', action);
      },
      notifyOpened: () => this.emitNotification('opened'),
      notifyOpening: () => {
        this.open = true;
        this.emitNotification('opening');
      },
      reverseButtons: () => {},
      releaseFocus: () => {
        blockingElements.remove(this);
      },
      trapFocus: el => {
        blockingElements.push(this);

        if (el) {
          el.focus();
        }
      }
    });
  }

  render() {
    const classes = {
      [_material_dialog_constants_js__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].STACKED]: this.stacked
    };
    let title = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]``;

    if (this.title) {
      title = lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`<h2 class="mdc-dialog__title">${this.title}</h2>`;
    }

    const actionsClasses = {
      'mdc-dialog__actions': !this.hideActions
    };
    return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <div class="mdc-dialog ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(classes)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${title}
          <div class="mdc-dialog__content">
            <slot></slot>
          </div>
          <footer
              id="actions"
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_9__["classMap"])(actionsClasses)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcFoundation.setAutoStackButtons(true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }

  forceLayout() {
    this.mdcFoundation.layout();
  }

  focus() {
    const initialFocusEl = this.getInitialFocusEl();
    initialFocusEl && initialFocusEl.focus();
  }

  blur() {
    if (!this.shadowRoot) {
      return;
    }

    const activeEl = this.shadowRoot.activeElement;

    if (activeEl) {
      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    } else {
      const root = this.getRootNode();
      const activeEl = root instanceof Document ? root.activeElement : null;

      if (activeEl instanceof HTMLElement) {
        activeEl.blur();
      }
    }
  }

  setEventListeners() {
    this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);

    this.boundLayout = () => {
      if (this.open) {
        this.mdcFoundation.layout.bind(this.mdcFoundation);
      }
    };

    this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
    this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    this.mdcRoot.addEventListener('click', this.boundHandleClick);
    window.addEventListener('resize', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    window.addEventListener('orientationchange', this.boundLayout, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    this.addEventListener('keydown', this.boundHandleKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
    document.addEventListener('keydown', this.boundHandleDocumentKeydown, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_5__["applyPassive"])());
  }

  removeEventListeners() {
    if (this.boundHandleClick) {
      this.mdcRoot.removeEventListener('click', this.boundHandleClick);
    }

    if (this.boundLayout) {
      window.removeEventListener('resize', this.boundLayout);
      window.removeEventListener('orientationchange', this.boundLayout);
    }

    if (this.boundHandleKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleKeydown);
    }

    if (this.boundHandleDocumentKeydown) {
      this.mdcRoot.removeEventListener('keydown', this.boundHandleDocumentKeydown);
    }
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog')], DialogBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="primaryAction"]')], DialogBase.prototype, "primarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('slot[name="secondaryAction"]')], DialogBase.prototype, "secondarySlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-dialog__content')], DialogBase.prototype, "contentElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["query"])('.mdc-container')], DialogBase.prototype, "conatinerElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
})], DialogBase.prototype, "hideActions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function () {
  this.forceLayout();
})], DialogBase.prototype, "stacked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
})], DialogBase.prototype, "title", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setScrimClickAction(newAction);
})], DialogBase.prototype, "scrimClickAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: String
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (newAction) {
  this.mdcFoundation.setEscapeKeyAction(newAction);
})], DialogBase.prototype, "escapeKeyAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
  type: Boolean,
  reflect: true
}), Object(_material_mwc_base_base_element_js__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (isOpen) {
  if (isOpen) {
    if (this.mdcFoundation) {
      this.setEventListeners();
      this.mdcFoundation.open();
    }
  } else {
    if (this.mdcFoundation) {
      this.removeEventListeners();
      this.mdcFoundation.close(this.currentAction || this.defaultAction);
      this.currentAction = undefined;
    }
  }
})], DialogBase.prototype, "open", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "defaultAction", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "actionAttribute", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()], DialogBase.prototype, "initialFocusAttribute", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:20px 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:scale(1)}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87);color:var(--mdc-dialog-title-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0,0,0,.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px));border-radius:4px;border-radius:var(--mdc-dialog-shape-radius, 4px)}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*)[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog[dir=rtl] #actions ::slotted(*),[dir=rtl] .mdc-dialog #actions ::slotted(*){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:1e-9px;margin-top:12px}`;

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/mwc-dialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/mwc-dialog.js ***!
  \*********************************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-dialog-base.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-base.js");
/* harmony import */ var _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-dialog-css.js */ "./node_modules/@material/mwc-dialog/mwc-dialog-css.js");

/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Dialog = class Dialog extends _mwc_dialog_base_js__WEBPACK_IMPORTED_MODULE_2__["DialogBase"] {};
Dialog.styles = _mwc_dialog_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Dialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-dialog')], Dialog);


/***/ }),

/***/ "./node_modules/@material/mwc-dialog/node_modules/@material/dom/events.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/node_modules/@material/dom/events.js ***!
  \********************************************************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */

function applyPassive(globalObj, forceRefresh) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported_1 = false;

    try {
      globalObj.document.addEventListener('test', function () {
        return undefined;
      }, {
        get passive() {
          isSupported_1 = true;
          return isSupported_1;
        }

      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


    supportsPassive_ = isSupported_1;
  }

  return supportsPassive_ ? {
    passive: true
  } : false;
}

/***/ }),

/***/ "./node_modules/@material/mwc-dialog/node_modules/@material/dom/ponyfill.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/mwc-dialog/node_modules/@material/dom/ponyfill.js ***!
  \**********************************************************************************/
/*! exports provided: closest, matches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/***/ }),

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

const IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function () {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function (scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function (leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function () {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function (yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function (yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/





/**
This is a lighter version of `paper-icon-button`. Its goal is performance, not
developer ergonomics, so as a result it has fewer features than
`paper-icon-button` itself. To use it, you must distribute a `button` containing
the `iron-icon` you want to use:

<script type="module">
  import '@polymer/iron-icon/iron-icon.js';
  import '@polymer/paper-icon-button/paper-icon-button-light.js';
  import '@polymer/iron-icons/iron-icons.js';
</script>

<paper-icon-button-light>
  <button title="heart">
    <iron-icon icon="favorite"></iron-icon>
  </button>
</paper-icon-button-light>

Note that this button is assumed to be distributed at the startup of
`paper-icon-button-light`. Dynamically adding a `button` to this element is
not supported.

The `title`/`disabled` etc. attributes go on the distributed button, not on the
wrapper.

The following custom properties and mixins are also available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-icon-button-light-ripple` | Mixin applied to the paper ripple | `{}`

@group Paper Elements
@element paper-icon-button-light
@demo demo/paper-icon-button-light.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-icon-button-light',
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
      }

      paper-ripple {
        opacity: 0.6;
        color: currentColor;
        @apply --paper-icon-button-light-ripple;
      }

      :host > ::slotted(button) {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        outline: none;
        vertical-align: middle;
        color: inherit;
        cursor: pointer;
        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }
      :host > ::slotted(button[disabled]) {
        color: #9b9b9b;
        pointer-events: none;
        cursor: auto;
      }
    </style>
    <slot></slot>
  `,
  behaviors: [_polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_1__["PaperRippleBehavior"]],
  registered: function () {
    this._template.setAttribute('strip-whitespace', '');
  },
  ready: function () {
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_4__["afterNextRender"])(this, () => {
      // Add lazy host listeners
      this.addEventListener('down', this._rippleDown.bind(this));
      this.addEventListener('up', this._rippleUp.bind(this)); // Assume the button has already been distributed.

      var button = this.getEffectiveChildren()[0];
      this._rippleContainer = button; // We need to set the focus/blur listeners on the distributed button,
      // not the host, since the host isn't focusable.

      button.addEventListener('focus', this._rippleDown.bind(this));
      button.addEventListener('blur', this._rippleUp.bind(this));
    });
  },
  _rippleDown: function () {
    this.getRipple().uiDownAction();
  },
  _rippleUp: function () {
    this.getRipple().uiUpAction();
  },

  /**
   * @param {...*} var_args
   */
  ensureRipple: function (var_args) {
    var lastRipple = this._ripple;
    _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_1__["PaperRippleBehavior"].ensureRipple.apply(this, arguments);

    if (this._ripple && this._ripple !== lastRipple) {
      this._ripple.center = true;

      this._ripple.classList.add('circle');
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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







/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/blocking-elements/dist/blocking-elements.js":
/*!******************************************************************!*\
  !*** ./node_modules/blocking-elements/dist/blocking-elements.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var _a, _b, _c;
  /* Symbols for private properties */


  const _blockingElements = Symbol();

  const _alreadyInertElements = Symbol();

  const _topElParents = Symbol();

  const _siblingsToRestore = Symbol();

  const _parentMO = Symbol();
  /* Symbols for private static methods */


  const _topChanged = Symbol();

  const _swapInertedSibling = Symbol();

  const _inertSiblings = Symbol();

  const _restoreInertedSiblings = Symbol();

  const _getParents = Symbol();

  const _getDistributedChildren = Symbol();

  const _isInertable = Symbol();

  const _handleMutations = Symbol();

  class BlockingElementsImpl {
    constructor() {
      /**
       * The blocking elements.
       */
      this[_a] = [];
      /**
       * Used to keep track of the parents of the top element, from the element
       * itself up to body. When top changes, the old top might have been removed
       * from the document, so we need to memoize the inerted parents' siblings
       * in order to restore their inerteness when top changes.
       */

      this[_b] = [];
      /**
       * Elements that are already inert before the first blocking element is
       * pushed.
       */

      this[_c] = new Set();
    }

    destructor() {
      // Restore original inertness.
      this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
      // since then we'd need non-null casts in many places. Calling a method on
      // a BlockingElements instance after calling destructor will result in an
      // exception.


      const nullable = this;
      nullable[_blockingElements] = null;
      nullable[_topElParents] = null;
      nullable[_alreadyInertElements] = null;
    }

    get top() {
      const elems = this[_blockingElements];
      return elems[elems.length - 1] || null;
    }

    push(element) {
      if (!element || element === this.top) {
        return;
      } // Remove it from the stack, we'll bring it to the top.


      this.remove(element);

      this[_topChanged](element);

      this[_blockingElements].push(element);
    }

    remove(element) {
      const i = this[_blockingElements].indexOf(element);

      if (i === -1) {
        return false;
      }

      this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


      if (i === this[_blockingElements].length) {
        this[_topChanged](this.top);
      }

      return true;
    }

    pop() {
      const top = this.top;
      top && this.remove(top);
      return top;
    }

    has(element) {
      return this[_blockingElements].indexOf(element) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */


    [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
      const toKeepInert = this[_alreadyInertElements];
      const oldParents = this[_topElParents]; // No new top, reset old top if any.

      if (!newTop) {
        this[_restoreInertedSiblings](oldParents);

        toKeepInert.clear();
        this[_topElParents] = [];
        return;
      }

      const newParents = this[_getParents](newTop); // New top is not contained in the main document!


      if (newParents[newParents.length - 1].parentNode !== document.body) {
        throw Error('Non-connected element cannot be a blocking element');
      } // Cast here because we know we'll call _inertSiblings on newParents
      // below.


      this[_topElParents] = newParents;

      const toSkip = this[_getDistributedChildren](newTop); // No previous top element.


      if (!oldParents.length) {
        this[_inertSiblings](newParents, toSkip, toKeepInert);

        return;
      }

      let i = oldParents.length - 1;
      let j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

      while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
        i--;
        j--;
      } // If up the parents tree there are 2 elements that are siblings, swap
      // the inerted sibling.


      if (oldParents[i] !== newParents[j]) {
        this[_swapInertedSibling](oldParents[i], newParents[j]);
      } // Restore old parents siblings inertness.


      i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

      j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_swapInertedSibling](oldInert, newInert) {
      const siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
      // if it's inertable and if already inert.

      if (this[_isInertable](oldInert) && !oldInert.inert) {
        oldInert.inert = true;
        siblingsToRestore.add(oldInert);
      } // If newInert was already between the siblings to restore, it means it is
      // inertable and must be restored.


      if (siblingsToRestore.has(newInert)) {
        newInert.inert = false;
        siblingsToRestore.delete(newInert);
      }

      newInert[_parentMO] = oldInert[_parentMO];
      newInert[_siblingsToRestore] = siblingsToRestore;
      oldInert[_parentMO] = undefined;
      oldInert[_siblingsToRestore] = undefined;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_restoreInertedSiblings](elements) {
      for (const element of elements) {
        const mo = element[_parentMO];
        mo.disconnect();
        element[_parentMO] = undefined;
        const siblings = element[_siblingsToRestore];

        for (const sibling of siblings) {
          sibling.inert = false;
        }

        element[_siblingsToRestore] = undefined;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */


    [_inertSiblings](elements, toSkip, toKeepInert) {
      for (const element of elements) {
        // Assume element is not a Document, so it must have a parentNode.
        const parent = element.parentNode;
        const children = parent.children;
        const inertedSiblings = new Set();

        for (let j = 0; j < children.length; j++) {
          const sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

          if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
            continue;
          } // Should be collected since already inerted.


          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        } // Store the siblings that were inerted.


        element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

        const mo = new MutationObserver(this[_handleMutations].bind(this));
        element[_parentMO] = mo;
        let parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
        // shady root, which is an object that acts like a ShadowRoot, but isn't
        // actually a node in the real DOM. Observe the real DOM parent instead.

        const maybeShadyRoot = parentToObserve;

        if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
          parentToObserve = maybeShadyRoot.host;
        }

        mo.observe(parentToObserve, {
          childList: true
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */


    [_handleMutations](mutations) {
      const parents = this[_topElParents];
      const toKeepInert = this[_alreadyInertElements];

      for (const mutation of mutations) {
        // If the target is a shadowRoot, get its host as we skip shadowRoots when
        // computing _topElParents.
        const target = mutation.target.host || mutation.target;
        const idx = target === document.body ? parents.length : parents.indexOf(target);
        const inertedChild = parents[idx - 1];
        const inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

        for (let i = 0; i < mutation.removedNodes.length; i++) {
          const sibling = mutation.removedNodes[i];

          if (sibling === inertedChild) {
            console.info('Detected removal of the top Blocking Element.');
            this.pop();
            return;
          }

          if (inertedSiblings.has(sibling)) {
            sibling.inert = false;
            inertedSiblings.delete(sibling);
          }
        } // To inert.


        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const sibling = mutation.addedNodes[i];

          if (!this[_isInertable](sibling)) {
            continue;
          }

          if (toKeepInert && sibling.inert) {
            toKeepInert.add(sibling);
          } else {
            sibling.inert = true;
            inertedSiblings.add(sibling);
          }
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */


    [_isInertable](element) {
      return false === /^(style|template|script)$/.test(element.localName);
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */


    [_getParents](element) {
      const parents = [];
      let current = element; // Stop to body.

      while (current && current !== document.body) {
        // Skip shadow roots.
        if (current.nodeType === Node.ELEMENT_NODE) {
          parents.push(current);
        } // ShadowDom v1


        if (current.assignedSlot) {
          // Collect slots from deepest slot to top.
          while (current = current.assignedSlot) {
            parents.push(current);
          } // Continue the search on the top slot.


          current = parents.pop();
          continue;
        }

        current = current.parentNode || current.host;
      }

      return parents;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */


    [_getDistributedChildren](element) {
      const shadowRoot = element.shadowRoot;

      if (!shadowRoot) {
        return null;
      }

      const result = new Set();
      let i;
      let j;
      let nodes;
      const slots = shadowRoot.querySelectorAll('slot');

      if (slots.length && slots[0].assignedNodes) {
        for (i = 0; i < slots.length; i++) {
          nodes = slots[i].assignedNodes({
            flatten: true
          });

          for (j = 0; j < nodes.length; j++) {
            if (nodes[j].nodeType === Node.ELEMENT_NODE) {
              result.add(nodes[j]);
            }
          }
        } // No need to search for <content>.

      }

      return result;
    }

  }

  document.$blockingElements = new BlockingElementsImpl();
})();

/***/ }),

/***/ "./node_modules/wicg-inert/src/inert.js":
/*!**********************************************!*\
  !*** ./node_modules/wicg-inert/src/inert.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */
// Convenience function for converting NodeLists.

/** @type {typeof Array.prototype.slice} */
const slice = Array.prototype.slice;
/**
 * IE has a non-standard name for "matches".
 * @type {typeof Element.prototype.matches}
 */

const matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
/** @type {string} */

const _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
/**
 * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
 * attribute.
 *
 * Its main functions are:
 *
 * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
 *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
 *   each focusable node in the subtree with the singleton `InertManager` which manages all known
 *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
 *   instance exists for each focusable node which has at least one inert root as an ancestor.
 *
 * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
 *   attribute is removed from the root node). This is handled in the destructor, which calls the
 *   `deregister` method on `InertManager` for each managed inert node.
 */


class InertRoot {
  /**
   * @param {!Element} rootElement The Element at the root of the inert subtree.
   * @param {!InertManager} inertManager The global singleton InertManager object.
   */
  constructor(rootElement, inertManager) {
    /** @type {!InertManager} */
    this._inertManager = inertManager;
    /** @type {!Element} */

    this._rootElement = rootElement;
    /**
     * @type {!Set<!InertNode>}
     * All managed focusable nodes in this InertRoot's subtree.
     */

    this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

    if (this._rootElement.hasAttribute('aria-hidden')) {
      /** @type {?string} */
      this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
    } else {
      this._savedAriaHidden = null;
    }

    this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


    this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
    // - any additions in the subtree: make them unfocusable too
    // - any removals from the subtree: remove them from this inert root's managed nodes
    // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
    //   element, make that node a managed node.


    this._observer = new MutationObserver(this._onMutation.bind(this));

    this._observer.observe(this._rootElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  /**
   * Call this whenever this object is about to become obsolete.  This unwinds all of the state
   * stored in this object and updates the state of all of the managed nodes.
   */


  destructor() {
    this._observer.disconnect();

    if (this._rootElement) {
      if (this._savedAriaHidden !== null) {
        this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
      } else {
        this._rootElement.removeAttribute('aria-hidden');
      }
    }

    this._managedNodes.forEach(function (inertNode) {
      this._unmanageNode(inertNode.node);
    }, this); // Note we cast the nulls to the ANY type here because:
    // 1) We want the class properties to be declared as non-null, or else we
    //    need even more casts throughout this code. All bets are off if an
    //    instance has been destroyed and a method is called.
    // 2) We don't want to cast "this", because we want type-aware optimizations
    //    to know which properties we're setting.


    this._observer =
    /** @type {?} */
    null;
    this._rootElement =
    /** @type {?} */
    null;
    this._managedNodes =
    /** @type {?} */
    null;
    this._inertManager =
    /** @type {?} */
    null;
  }
  /**
   * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
   */


  get managedNodes() {
    return new Set(this._managedNodes);
  }
  /** @return {boolean} */


  get hasSavedAriaHidden() {
    return this._savedAriaHidden !== null;
  }
  /** @param {?string} ariaHidden */


  set savedAriaHidden(ariaHidden) {
    this._savedAriaHidden = ariaHidden;
  }
  /** @return {?string} */


  get savedAriaHidden() {
    return this._savedAriaHidden;
  }
  /**
   * @param {!Node} startNode
   */


  _makeSubtreeUnfocusable(startNode) {
    composedTreeWalk(startNode, node => this._visitNode(node));
    let activeElement = document.activeElement;

    if (!document.body.contains(startNode)) {
      // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
      let node = startNode;
      /** @type {!ShadowRoot|undefined} */

      let root = undefined;

      while (node) {
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          root =
          /** @type {!ShadowRoot} */
          node;
          break;
        }

        node = node.parentNode;
      }

      if (root) {
        activeElement = root.activeElement;
      }
    }

    if (startNode.contains(activeElement)) {
      activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
      // calling blur() will not actually move the focus.
      // To work around this we call focus() on the body instead.

      if (activeElement === document.activeElement) {
        document.body.focus();
      }
    }
  }
  /**
   * @param {!Node} node
   */


  _visitNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
    // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

    if (element !== this._rootElement && element.hasAttribute('inert')) {
      this._adoptInertRoot(element);
    }

    if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
      this._manageNode(element);
    }
  }
  /**
   * Register the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _manageNode(node) {
    const inertNode = this._inertManager.register(node, this);

    this._managedNodes.add(inertNode);
  }
  /**
   * Unregister the given node with this InertRoot and with InertManager.
   * @param {!Node} node
   */


  _unmanageNode(node) {
    const inertNode = this._inertManager.deregister(node, this);

    if (inertNode) {
      this._managedNodes.delete(inertNode);
    }
  }
  /**
   * Unregister the entire subtree starting at `startNode`.
   * @param {!Node} startNode
   */


  _unmanageSubtree(startNode) {
    composedTreeWalk(startNode, node => this._unmanageNode(node));
  }
  /**
   * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
   * @param {!Element} node
   */


  _adoptInertRoot(node) {
    let inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
    // so register it now if need be.


    if (!inertSubroot) {
      this._inertManager.setInert(node, true);

      inertSubroot = this._inertManager.getInertRoot(node);
    }

    inertSubroot.managedNodes.forEach(function (savedInertNode) {
      this._manageNode(savedInertNode.node);
    }, this);
  }
  /**
   * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _onMutation(records, self) {
    records.forEach(function (record) {
      const target =
      /** @type {!Element} */
      record.target;

      if (record.type === 'childList') {
        // Manage added nodes
        slice.call(record.addedNodes).forEach(function (node) {
          this._makeSubtreeUnfocusable(node);
        }, this); // Un-manage removed nodes

        slice.call(record.removedNodes).forEach(function (node) {
          this._unmanageSubtree(node);
        }, this);
      } else if (record.type === 'attributes') {
        if (record.attributeName === 'tabindex') {
          // Re-initialise inert node if tabindex changes
          this._manageNode(target);
        } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
          // If a new inert root is added, adopt its managed nodes and make sure it knows about the
          // already managed nodes from this inert subroot.
          this._adoptInertRoot(target);

          const inertSubroot = this._inertManager.getInertRoot(target);

          this._managedNodes.forEach(function (managedNode) {
            if (target.contains(managedNode.node)) {
              inertSubroot._manageNode(managedNode.node);
            }
          });
        }
      }
    }, this);
  }

}
/**
 * `InertNode` initialises and manages a single inert node.
 * A node is inert if it is a descendant of one or more inert root elements.
 *
 * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
 * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
 * is intrinsically focusable or not.
 *
 * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
 * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
 * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
 * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
 * or removes the `tabindex` attribute if the element is intrinsically focusable.
 */


class InertNode {
  /**
   * @param {!Node} node A focusable element to be made inert.
   * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
   */
  constructor(node, inertRoot) {
    /** @type {!Node} */
    this._node = node;
    /** @type {boolean} */

    this._overrodeFocusMethod = false;
    /**
     * @type {!Set<!InertRoot>} The set of descendant inert roots.
     *    If and only if this set becomes empty, this node is no longer inert.
     */

    this._inertRoots = new Set([inertRoot]);
    /** @type {?number} */

    this._savedTabIndex = null;
    /** @type {boolean} */

    this._destroyed = false; // Save any prior tabindex info and make this node untabbable

    this.ensureUntabbable();
  }
  /**
   * Call this whenever this object is about to become obsolete.
   * This makes the managed node focusable again and deletes all of the previously stored state.
   */


  destructor() {
    this._throwIfDestroyed();

    if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
      const element =
      /** @type {!Element} */
      this._node;

      if (this._savedTabIndex !== null) {
        element.setAttribute('tabindex', this._savedTabIndex);
      } else {
        element.removeAttribute('tabindex');
      } // Use `delete` to restore native focus method.


      if (this._overrodeFocusMethod) {
        delete element.focus;
      }
    } // See note in InertRoot.destructor for why we cast these nulls to ANY.


    this._node =
    /** @type {?} */
    null;
    this._inertRoots =
    /** @type {?} */
    null;
    this._destroyed = true;
  }
  /**
   * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
   * If the object has been destroyed, any attempt to access it will cause an exception.
   */


  get destroyed() {
    return (
      /** @type {!InertNode} */
      this._destroyed
    );
  }
  /**
   * Throw if user tries to access destroyed InertNode.
   */


  _throwIfDestroyed() {
    if (this.destroyed) {
      throw new Error('Trying to access destroyed InertNode');
    }
  }
  /** @return {boolean} */


  get hasSavedTabIndex() {
    return this._savedTabIndex !== null;
  }
  /** @return {!Node} */


  get node() {
    this._throwIfDestroyed();

    return this._node;
  }
  /** @param {?number} tabIndex */


  set savedTabIndex(tabIndex) {
    this._throwIfDestroyed();

    this._savedTabIndex = tabIndex;
  }
  /** @return {?number} */


  get savedTabIndex() {
    this._throwIfDestroyed();

    return this._savedTabIndex;
  }
  /** Save the existing tabindex value and make the node untabbable and unfocusable */


  ensureUntabbable() {
    if (this.node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const element =
    /** @type {!Element} */
    this.node;

    if (matches.call(element, _focusableElementsString)) {
      if (
      /** @type {!HTMLElement} */
      element.tabIndex === -1 && this.hasSavedTabIndex) {
        return;
      }

      if (element.hasAttribute('tabindex')) {
        this._savedTabIndex =
        /** @type {!HTMLElement} */
        element.tabIndex;
      }

      element.setAttribute('tabindex', '-1');

      if (element.nodeType === Node.ELEMENT_NODE) {
        element.focus = function () {};

        this._overrodeFocusMethod = true;
      }
    } else if (element.hasAttribute('tabindex')) {
      this._savedTabIndex =
      /** @type {!HTMLElement} */
      element.tabIndex;
      element.removeAttribute('tabindex');
    }
  }
  /**
   * Add another inert root to this inert node's set of managing inert roots.
   * @param {!InertRoot} inertRoot
   */


  addInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.add(inertRoot);
  }
  /**
   * Remove the given inert root from this inert node's set of managing inert roots.
   * If the set of managing inert roots becomes empty, this node is no longer inert,
   * so the object should be destroyed.
   * @param {!InertRoot} inertRoot
   */


  removeInertRoot(inertRoot) {
    this._throwIfDestroyed();

    this._inertRoots.delete(inertRoot);

    if (this._inertRoots.size === 0) {
      this.destructor();
    }
  }

}
/**
 * InertManager is a per-document singleton object which manages all inert roots and nodes.
 *
 * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
 * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
 * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
 * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
 * is created for each such node, via the `_managedNodes` map.
 */


class InertManager {
  /**
   * @param {!Document} document
   */
  constructor(document) {
    if (!document) {
      throw new Error('Missing required argument; InertManager needs to wrap a document.');
    }
    /** @type {!Document} */


    this._document = document;
    /**
     * All managed nodes known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertNode>}
     */

    this._managedNodes = new Map();
    /**
     * All inert roots known to this InertManager. In a map to allow looking up by Node.
     * @type {!Map<!Node, !InertRoot>}
     */

    this._inertRoots = new Map();
    /**
     * Observer for mutations on `document.body`.
     * @type {!MutationObserver}
     */

    this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

    addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
    } else {
      this._onDocumentLoaded();
    }
  }
  /**
   * Set whether the given element should be an inert root or not.
   * @param {!Element} root
   * @param {boolean} inert
   */


  setInert(root, inert) {
    if (inert) {
      if (this._inertRoots.has(root)) {
        // element is already inert
        return;
      }

      const inertRoot = new InertRoot(root, this);
      root.setAttribute('inert', '');

      this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
      // Ensure inert styles are added there.


      if (!this._document.body.contains(root)) {
        let parent = root.parentNode;

        while (parent) {
          if (parent.nodeType === 11) {
            addInertStyle(parent);
          }

          parent = parent.parentNode;
        }
      }
    } else {
      if (!this._inertRoots.has(root)) {
        // element is already non-inert
        return;
      }

      const inertRoot = this._inertRoots.get(root);

      inertRoot.destructor();

      this._inertRoots.delete(root);

      root.removeAttribute('inert');
    }
  }
  /**
   * Get the InertRoot object corresponding to the given inert root element, if any.
   * @param {!Node} element
   * @return {!InertRoot|undefined}
   */


  getInertRoot(element) {
    return this._inertRoots.get(element);
  }
  /**
   * Register the given InertRoot as managing the given node.
   * In the case where the node has a previously existing inert root, this inert root will
   * be added to its set of inert roots.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {!InertNode} inertNode
   */


  register(node, inertRoot) {
    let inertNode = this._managedNodes.get(node);

    if (inertNode !== undefined) {
      // node was already in an inert subtree
      inertNode.addInertRoot(inertRoot);
    } else {
      inertNode = new InertNode(node, inertRoot);
    }

    this._managedNodes.set(node, inertNode);

    return inertNode;
  }
  /**
   * De-register the given InertRoot as managing the given inert node.
   * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
   * node from the InertManager's set of managed nodes if it is destroyed.
   * If the node is not currently managed, this is essentially a no-op.
   * @param {!Node} node
   * @param {!InertRoot} inertRoot
   * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
   */


  deregister(node, inertRoot) {
    const inertNode = this._managedNodes.get(node);

    if (!inertNode) {
      return null;
    }

    inertNode.removeInertRoot(inertRoot);

    if (inertNode.destroyed) {
      this._managedNodes.delete(node);
    }

    return inertNode;
  }
  /**
   * Callback used when document has finished loading.
   */


  _onDocumentLoaded() {
    // Find all inert roots in document and make them actually inert.
    const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
    inertElements.forEach(function (inertElement) {
      this.setInert(inertElement, true);
    }, this); // Comment this out to use programmatic API only.

    this._observer.observe(this._document.body, {
      attributes: true,
      subtree: true,
      childList: true
    });
  }
  /**
   * Callback used when mutation observer detects attribute changes.
   * @param {!Array<!MutationRecord>} records
   * @param {!MutationObserver} self
   */


  _watchForInert(records, self) {
    const _this = this;

    records.forEach(function (record) {
      switch (record.type) {
        case 'childList':
          slice.call(record.addedNodes).forEach(function (node) {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }

            const inertElements = slice.call(node.querySelectorAll('[inert]'));

            if (matches.call(node, '[inert]')) {
              inertElements.unshift(node);
            }

            inertElements.forEach(function (inertElement) {
              this.setInert(inertElement, true);
            }, _this);
          }, _this);
          break;

        case 'attributes':
          if (record.attributeName !== 'inert') {
            return;
          }

          const target =
          /** @type {!Element} */
          record.target;
          const inert = target.hasAttribute('inert');

          _this.setInert(target, inert);

          break;
      }
    }, this);
  }

}
/**
 * Recursively walk the composed tree from |node|.
 * @param {!Node} node
 * @param {(function (!Element))=} callback Callback to be called for each element traversed,
 *     before descending into child nodes.
 * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
 */


function composedTreeWalk(node, callback, shadowRootAncestor) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    const element =
    /** @type {!Element} */
    node;

    if (callback) {
      callback(element);
    } // Descend into node:
    // If it has a ShadowRoot, ignore all child elements - these will be picked
    // up by the <content> or <shadow> elements. Descend straight into the
    // ShadowRoot.


    const shadowRoot =
    /** @type {!HTMLElement} */
    element.shadowRoot;

    if (shadowRoot) {
      composedTreeWalk(shadowRoot, callback, shadowRoot);
      return;
    } // If it is a <content> element, descend into distributed elements - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'content') {
      const content =
      /** @type {!HTMLContentElement} */
      element; // Verifies if ShadowDom v0 is supported.

      const distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    } // If it is a <slot> element, descend into assigned nodes - these
    // are elements from outside the shadow root which are rendered inside the
    // shadow DOM.


    if (element.localName == 'slot') {
      const slot =
      /** @type {!HTMLSlotElement} */
      element; // Verify if ShadowDom v1 is supported.

      const distributedNodes = slot.assignedNodes ? slot.assignedNodes({
        flatten: true
      }) : [];

      for (let i = 0; i < distributedNodes.length; i++) {
        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
      }

      return;
    }
  } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
  // element, nor a <shadow> element recurse normally.


  let child = node.firstChild;

  while (child != null) {
    composedTreeWalk(child, callback, shadowRootAncestor);
    child = child.nextSibling;
  }
}
/**
 * Adds a style element to the node containing the inert specific styles
 * @param {!Node} node
 */


function addInertStyle(node) {
  if (node.querySelector('style#inert-style')) {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('id', 'inert-style');
  style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  user-select: none;\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '}\n';
  node.appendChild(style);
}
/** @type {!InertManager} */


const inertManager = new InertManager(document);

if (!Element.prototype.hasOwnProperty('inert')) {
  Object.defineProperty(Element.prototype, 'inert', {
    enumerable: true,

    /** @this {!Element} */
    get: function () {
      return this.hasAttribute('inert');
    },

    /** @this {!Element} */
    set: function (inert) {
      inertManager.setInert(this, inert);
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wZXJzb24tZGV0YWlsLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL2ZvdW5kYXRpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy9iYXNlLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3BvbnlmaWxsLnRzIiwid2VicGFjazovLy9zcmMvb2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1kaWFsb2ctYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1kaWFsb2ctY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vZXZlbnRzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9ja2luZy1lbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9zcmMvaW5lcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQ0xPU0lORzogJ21kYy1kaWFsb2ctLWNsb3NpbmcnLFxuICAgIE9QRU46ICdtZGMtZGlhbG9nLS1vcGVuJyxcbiAgICBPUEVOSU5HOiAnbWRjLWRpYWxvZy0tb3BlbmluZycsXG4gICAgU0NST0xMQUJMRTogJ21kYy1kaWFsb2ctLXNjcm9sbGFibGUnLFxuICAgIFNDUk9MTF9MT0NLOiAnbWRjLWRpYWxvZy1zY3JvbGwtbG9jaycsXG4gICAgU1RBQ0tFRDogJ21kYy1kaWFsb2ctLXN0YWNrZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fQVRUUklCVVRFOiAnZGF0YS1tZGMtZGlhbG9nLWFjdGlvbicsXG4gICAgQlVUVE9OX0RFRkFVTFRfQVRUUklCVVRFOiAnZGF0YS1tZGMtZGlhbG9nLWJ1dHRvbi1kZWZhdWx0JyxcbiAgICBCVVRUT05fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fYnV0dG9uJyxcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2VkJyxcbiAgICBDTE9TRV9BQ1RJT046ICdjbG9zZScsXG4gICAgQ0xPU0lOR19FVkVOVDogJ01EQ0RpYWxvZzpjbG9zaW5nJyxcbiAgICBDT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGFpbmVyJyxcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2NvbnRlbnQnLFxuICAgIERFU1RST1lfQUNUSU9OOiAnZGVzdHJveScsXG4gICAgSU5JVElBTF9GT0NVU19BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctaW5pdGlhbC1mb2N1cycsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5lZCcsXG4gICAgT1BFTklOR19FVkVOVDogJ01EQ0RpYWxvZzpvcGVuaW5nJyxcbiAgICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zY3JpbScsXG4gICAgU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUjogW1xuICAgICAgICAndGV4dGFyZWEnLFxuICAgICAgICAnLm1kYy1tZW51IC5tZGMtbGlzdC1pdGVtJyxcbiAgICBdLmpvaW4oJywgJyksXG4gICAgU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zdXJmYWNlJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TOiA3NSxcbiAgICBESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0RpYWxvZ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRGlhbG9nRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENEaWFsb2dGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDRGlhbG9nRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuICAgICAgICBfdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuICAgICAgICBfdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IHRydWU7XG4gICAgICAgIF90aGlzLmFyZUJ1dHRvbnNTdGFja2VkXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRGlhbG9nRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZEJvZHlDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbml0aWFsRm9jdXNFbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2luZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW5lZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW5pbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVCb2R5Q2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJldmVyc2VCdXR0b25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdHJhcEZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF1dG9TdGFja0J1dHRvbnMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW5fKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHN0cmluZ3MuREVTVFJPWV9BQ1RJT04pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWVyXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmluZygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgICAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZEJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dCgpO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udHJhcEZvY3VzKF90aGlzLmFkYXB0ZXJfLmdldEluaXRpYWxGb2N1c0VsKCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IHZvaWQgMCkgeyBhY3Rpb24gPSAnJzsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiBmcm9tIGtleWRvd24gb24gZWxlbWVudHMgdGhhdCBpbmhlcmVudGx5IGVtaXQgY2xpY2tcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zaW5nKGFjdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2VkKGFjdGlvbik7XG4gICAgICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldEVzY2FwZUtleUFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlS2V5QWN0aW9uXztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEVzY2FwZUtleUFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gYWN0aW9uO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2NyaW1DbGlja0FjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyaW1DbGlja0FjdGlvbl87XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTY3JpbUNsaWNrQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gYWN0aW9uO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0QXV0b1N0YWNrQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b1N0YWNrQnV0dG9uc187XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBdXRvU3RhY2tCdXR0b25zID0gZnVuY3Rpb24gKGF1dG9TdGFjaykge1xuICAgICAgICB0aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gYXV0b1N0YWNrO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgY2xpY2sgb24gdGhlIGRpYWxvZyByb290IGVsZW1lbnQuICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc1NjcmltID0gdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TQ1JJTV9TRUxFQ1RPUik7XG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JpbSBjbGljayBmaXJzdCBzaW5jZSBpdCBkb2Vzbid0IHJlcXVpcmUgcXVlcnlpbmcgYW5jZXN0b3JzLlxuICAgICAgICBpZiAoaXNTY3JpbSAmJiB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLnNjcmltQ2xpY2tBY3Rpb25fKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZXMga2V5ZG93biBvbiB0aGUgZGlhbG9nIHJvb3QgZWxlbWVudC4gKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICBpZiAoIWlzRW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRBY3Rpb25Gcm9tRXZlbnQoZXZ0KTtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgLy8gQWN0aW9uIGJ1dHRvbiBjYWxsYmFjayBpcyBoYW5kbGVkIGluIGBoYW5kbGVDbGlja2AsXG4gICAgICAgICAgICAvLyBzaW5jZSBzcGFjZS9lbnRlciBrZXlkb3ducyBvbiBidXR0b25zIHRyaWdnZXIgY2xpY2sgZXZlbnRzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSAhdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKGlzRW50ZXIgJiYgaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsaWNrRGVmYXVsdEJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyBrZXlkb3duIG9uIHRoZSBkb2N1bWVudC4gKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVEb2N1bWVudEtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VzY2FwZSA9IGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlICYmIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5lc2NhcGVLZXlBY3Rpb25fKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU3RhY2tCdXR0b25zXykge1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RTdGFja2VkQnV0dG9uc18oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdFNjcm9sbGFibGVDb250ZW50XygpO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBidXR0b25zJyBuYXR1cmFsIHBvc2l0aW9ucy5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgICAgICB2YXIgYXJlQnV0dG9uc1N0YWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmFyZUJ1dHRvbnNTdGFja2VkKCk7XG4gICAgICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCAhPT0gdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmV2ZXJzZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gYXJlQnV0dG9uc1N0YWNrZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVjdFNjcm9sbGFibGVDb250ZW50XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjbGFzcyBmaXJzdCB0byBsZXQgdXMgbWVhc3VyZSB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuXG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNDb250ZW50U2Nyb2xsYWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENEaWFsb2dGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENEaWFsb2dGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRGlhbG9nRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQge01EQ0ZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9iYXNlJztcbmltcG9ydCB7TGl0RWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge0NvbnN0cnVjdG9yfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJy4vb2JzZXJ2ZXIuanMnO1xuZXhwb3J0IHthZGRIYXNSZW1vdmVDbGFzc30gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgKiBmcm9tICdAbWF0ZXJpYWwvYmFzZS90eXBlcy5qcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKipcbiAgICogUm9vdCBlbGVtZW50IGZvciBNREMgRm91bmRhdGlvbiB1c2FnZS5cbiAgICpcbiAgICogRGVmaW5lIGluIHlvdXIgY29tcG9uZW50IHdpdGggdGhlIGBAcXVlcnlgIGRlY29yYXRvclxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1kY1Jvb3Q6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzOiBDb25zdHJ1Y3RvcjxNRENGb3VuZGF0aW9uPjtcblxuICAvKipcbiAgICogQW4gaW5zdGFuY2Ugb2YgdGhlIE1EQyBGb3VuZGF0aW9uIGNsYXNzIHRvIGF0dGFjaCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWRjRm91bmRhdGlvbjogTURDRm91bmRhdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBhZGFwdGVyIGZvciB0aGUgYG1kY0ZvdW5kYXRpb25gLlxuICAgKlxuICAgKiBPdmVycmlkZSBhbmQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBBZGFwdGVyJ3MgZnVuY3Rpb25zIGltcGxlbWVudGVkOlxuICAgKlxuICAgKiAgICB7XG4gICAqICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgKiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICogICAgICAuLi5cbiAgICogICAgfVxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUFkYXB0ZXIoKToge31cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhdHRhY2ggdGhlIE1EQyBGb3VuZGF0aW9uIHRvIHRoZSBpbnN0YW5jZVxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUZvdW5kYXRpb24oKSB7XG4gICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24gPSBuZXcgdGhpcy5tZGNGb3VuZGF0aW9uQ2xhc3ModGhpcy5jcmVhdGVBZGFwdGVyKCkpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5pbml0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlRm91bmRhdGlvbigpO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtQcm9wZXJ0eVZhbHVlc30gZnJvbSAnbGl0LWVsZW1lbnQvbGliL3VwZGF0aW5nLWVsZW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgKHZhbHVlOiBhbnksIG9sZDogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IG9ic2VydmVyID0gKG9ic2VydmVyOiBPYnNlcnZlcikgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIChwcm90bzogYW55LCBwcm9wTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIC8vIGlmIHdlIGhhdmVuJ3Qgd3JhcHBlZCBgdXBkYXRlZGAgaW4gdGhpcyBjbGFzcywgZG8gc29cbiAgICAgIGlmICghcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycykge1xuICAgICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgT2JzZXJ2ZXI+KCk7XG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGVkID0gcHJvdG8udXBkYXRlZDtcbiAgICAgICAgcHJvdG8udXBkYXRlZCA9IGZ1bmN0aW9uKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgICAgICAgIHVzZXJVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLmdldChrKTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNhbGwodGhpcywgdGhpc1trXSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNsb25lIGFueSBleGlzdGluZyBvYnNlcnZlcnMgKHN1cGVyY2xhc3NlcylcbiAgICAgIH0gZWxzZSBpZiAoIXByb3RvLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KCdfb2JzZXJ2ZXJzJykpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJzID0gcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycztcbiAgICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKHY6IGFueSwgazogUHJvcGVydHlLZXkpID0+IHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuc2V0KGssIHYpKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGlzIG1ldGhvZFxuICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycy5zZXQocHJvcE5hbWUsIG9ic2VydmVyKTtcbiAgICB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKipcbiAqIFJldHVybiBhbiBlbGVtZW50IGFzc2lnbmVkIHRvIGEgZ2l2ZW4gc2xvdCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHNlbGVjdG9yXG4gKi9cblxuaW1wb3J0IHttYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBc3NpZ25lZEVsZW1lbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBzbG90LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgY29uc3QgZWwgPSAobm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gVDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhhc1JlbW92ZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgYWRkQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gIH07XG59XG5cbmxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmNvbnN0IGZuID0gKCkgPT4ge307XG5jb25zdCBvcHRpb25zQmxvY2s6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3gnLCBmbiwgb3B0aW9uc0Jsb2NrKTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3gnLCBmbik7XG4vKipcbiAqIERvIGV2ZW50IGxpc3RlbmVycyBzdXBvcnQgdGhlIGBwYXNzaXZlYCBvcHRpb24/XG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyID0gc3VwcG9ydHNQYXNzaXZlO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0ICdibG9ja2luZy1lbGVtZW50cyc7XG5pbXBvcnQgJ3dpY2ctaW5lcnQnO1xuXG5pbXBvcnQge01EQ0RpYWxvZ0FkYXB0ZXJ9IGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvYWRhcHRlci5qcyc7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzJztcbmltcG9ydCBNRENEaWFsb2dGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyc7XG5pbXBvcnQge2FwcGx5UGFzc2l2ZX0gZnJvbSAnQG1hdGVyaWFsL2RvbS9ldmVudHMnO1xuaW1wb3J0IHtjbG9zZXN0LCBtYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3MsIEJhc2VFbGVtZW50LCBvYnNlcnZlcn0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQge0RvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHN9IGZyb20gJ2Jsb2NraW5nLWVsZW1lbnRzJztcbmltcG9ydCB7aHRtbCwgcHJvcGVydHksIHF1ZXJ5fSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQge2NsYXNzTWFwfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCB7TURDRGlhbG9nQ2xvc2VFdmVudERldGFpbH0gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy90eXBlcyc7XG5cbmNvbnN0IGJsb2NraW5nRWxlbWVudHMgPVxuICAgIChkb2N1bWVudCBhcyBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzKS4kYmxvY2tpbmdFbGVtZW50cztcblxuZXhwb3J0IGNsYXNzIERpYWxvZ0Jhc2UgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIEBxdWVyeSgnLm1kYy1kaWFsb2cnKSBwcm90ZWN0ZWQgbWRjUm9vdCE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIC8vIF9hY3Rpb25JdGVtc1Nsb3Qgc2hvdWxkIGhhdmUgdHlwZSBIVE1MU2xvdEVsZW1lbnQsIGJ1dCB3aGVuIFR5cGVTY3JpcHQnc1xuICAvLyBlbWl0RGVjb3JhdG9yTWV0YWRhdGEgaXMgZW5hYmxlZCwgdGhlIEhUTUxTbG90RWxlbWVudCBjb25zdHJ1Y3RvciB3aWxsXG4gIC8vIGJlIGVtaXR0ZWQgaW50byB0aGUgcnVudGltZSwgd2hpY2ggd2lsbCBjYXVzZSBhbiBcIkhUTUxTbG90RWxlbWVudCBpc1xuICAvLyB1bmRlZmluZWRcIiBlcnJvciBpbiBicm93c2VycyB0aGF0IGRvbid0IGRlZmluZSBpdCAoZS5nLiBFZGdlIGFuZCBJRTExKS5cbiAgQHF1ZXJ5KCdzbG90W25hbWU9XCJwcmltYXJ5QWN0aW9uXCJdJykgcHJvdGVjdGVkIHByaW1hcnlTbG90ITogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gX2FjdGlvbkl0ZW1zU2xvdCBzaG91bGQgaGF2ZSB0eXBlIEhUTUxTbG90RWxlbWVudCwgYnV0IHdoZW4gVHlwZVNjcmlwdCdzXG4gIC8vIGVtaXREZWNvcmF0b3JNZXRhZGF0YSBpcyBlbmFibGVkLCB0aGUgSFRNTFNsb3RFbGVtZW50IGNvbnN0cnVjdG9yIHdpbGxcbiAgLy8gYmUgZW1pdHRlZCBpbnRvIHRoZSBydW50aW1lLCB3aGljaCB3aWxsIGNhdXNlIGFuIFwiSFRNTFNsb3RFbGVtZW50IGlzXG4gIC8vIHVuZGVmaW5lZFwiIGVycm9yIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgZGVmaW5lIGl0IChlLmcuIEVkZ2UgYW5kIElFMTEpLlxuICBAcXVlcnkoJ3Nsb3RbbmFtZT1cInNlY29uZGFyeUFjdGlvblwiXScpIHByb3RlY3RlZCBzZWNvbmRhcnlTbG90ITogSFRNTEVsZW1lbnQ7XG5cbiAgQHF1ZXJ5KCcubWRjLWRpYWxvZ19fY29udGVudCcpIHByb3RlY3RlZCBjb250ZW50RWxlbWVudCE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIEBxdWVyeSgnLm1kYy1jb250YWluZXInKSBwcm90ZWN0ZWQgY29uYXRpbmVyRWxlbWVudCE6IEhUTUxEaXZFbGVtZW50O1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGhpZGVBY3Rpb25zID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgQG9ic2VydmVyKGZ1bmN0aW9uKHRoaXM6IERpYWxvZ0Jhc2UpIHtcbiAgICB0aGlzLmZvcmNlTGF5b3V0KCk7XG4gIH0pXG4gIHN0YWNrZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IFN0cmluZ30pIHRpdGxlID0gJyc7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBTdHJpbmd9KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSwgbmV3QWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0U2NyaW1DbGlja0FjdGlvbihuZXdBY3Rpb24pO1xuICB9KVxuICBzY3JpbUNsaWNrQWN0aW9uID0gJ2Nsb3NlJztcblxuICBAcHJvcGVydHkoe3R5cGU6IFN0cmluZ30pXG4gIEBvYnNlcnZlcihmdW5jdGlvbih0aGlzOiBEaWFsb2dCYXNlLCBuZXdBY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5zZXRFc2NhcGVLZXlBY3Rpb24obmV3QWN0aW9uKTtcbiAgfSlcbiAgZXNjYXBlS2V5QWN0aW9uID0gJ2Nsb3NlJztcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9KVxuICBAb2JzZXJ2ZXIoZnVuY3Rpb24odGhpczogRGlhbG9nQmFzZSwgaXNPcGVuOiBib29sZWFuKSB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbikge1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubWRjRm91bmRhdGlvbikge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5jbG9zZSh0aGlzLmN1cnJlbnRBY3Rpb24gfHwgdGhpcy5kZWZhdWx0QWN0aW9uKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgb3BlbiA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIGRlZmF1bHRBY3Rpb24gPSAnY2xvc2UnO1xuICBAcHJvcGVydHkoKSBhY3Rpb25BdHRyaWJ1dGUgPSAnZGlhbG9nQWN0aW9uJztcbiAgQHByb3BlcnR5KCkgaW5pdGlhbEZvY3VzQXR0cmlidXRlID0gJ2RpYWxvZ0luaXRpYWxGb2N1cyc7XG5cbiAgcHJvdGVjdGVkIGdldCBwcmltYXJ5QnV0dG9uKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgIGxldCBhc3NpZ25lZE5vZGVzID0gKHRoaXMucHJpbWFyeVNsb3QgYXMgSFRNTFNsb3RFbGVtZW50KS5hc3NpZ25lZE5vZGVzKCk7XG4gICAgYXNzaWduZWROb2RlcyA9IGFzc2lnbmVkTm9kZXMuZmlsdGVyKChub2RlKSA9PiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGFzc2lnbmVkTm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGJ1dHRvbiA/IGJ1dHRvbiA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3VycmVudEFjdGlvbjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb25DbGFzcyA9IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uITogTURDRGlhbG9nRm91bmRhdGlvbjtcbiAgcHJvdGVjdGVkIGJvdW5kTGF5b3V0OiAoKCkgPT4gdm9pZCl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBib3VuZEhhbmRsZUNsaWNrOiAoKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkKXxudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIGJvdW5kSGFuZGxlS2V5ZG93bjogKChldjogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBib3VuZEhhbmRsZURvY3VtZW50S2V5ZG93bjpcbiAgICAgICgoZXY6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuXG4gIHByb3RlY3RlZCBlbWl0Tm90aWZpY2F0aW9uKG5hbWU6IHN0cmluZywgYWN0aW9uPzogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5pdDogQ3VzdG9tRXZlbnRJbml0ID0ge2RldGFpbDogYWN0aW9uID8ge2FjdGlvbn0gOiB7fX07XG4gICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwgaW5pdCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbml0aWFsRm9jdXNFbCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLmluaXRpYWxGb2N1c0F0dHJpYnV0ZX1dYCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQWRhcHRlcigpOiBNRENEaWFsb2dBZGFwdGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWRkSGFzUmVtb3ZlQ2xhc3ModGhpcy5tZGNSb290KSxcbiAgICAgIGFkZEJvZHlDbGFzczogKCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nLFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoKSA9PiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJycsXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4gdGhpcy5zdGFja2VkLFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW1hcnkgPSB0aGlzLnByaW1hcnlCdXR0b247XG4gICAgICAgIGlmIChwcmltYXJ5KSB7XG4gICAgICAgICAgcHJpbWFyeS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiAodGFyZ2V0LCBzZWxlY3RvcikgPT5cbiAgICAgICAgICB0YXJnZXQgPyBtYXRjaGVzKHRhcmdldCBhcyBFbGVtZW50LCBzZWxlY3RvcikgOiBmYWxzZSxcbiAgICAgIGdldEFjdGlvbkZyb21FdmVudDogKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID1cbiAgICAgICAgICAgIGNsb3Nlc3QoZS50YXJnZXQgYXMgRWxlbWVudCwgYFske3RoaXMuYWN0aW9uQXR0cmlidXRlfV1gKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZWxlbWVudCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLmFjdGlvbkF0dHJpYnV0ZSk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICB9LFxuICAgICAgZ2V0SW5pdGlhbEZvY3VzRWw6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbEZvY3VzRWwoKTtcbiAgICAgIH0sXG4gICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIGVsID8gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwub2Zmc2V0SGVpZ2h0IDogZmFsc2U7XG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoYWN0aW9uKSA9PiB0aGlzLmVtaXROb3RpZmljYXRpb24oJ2Nsb3NlZCcsIGFjdGlvbiksXG4gICAgICBub3RpZnlDbG9zaW5nOiAoYWN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVtaXROb3RpZmljYXRpb24oJ2Nsb3NpbmcnLCBhY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW5lZDogKCkgPT4gdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdvcGVuZWQnKSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0Tm90aWZpY2F0aW9uKCdvcGVuaW5nJyk7XG4gICAgICB9LFxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6ICgpID0+IHt9LFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB7XG4gICAgICAgIGJsb2NraW5nRWxlbWVudHMucmVtb3ZlKHRoaXMpO1xuICAgICAgfSxcbiAgICAgIHRyYXBGb2N1czogKGVsKSA9PiB7XG4gICAgICAgIGJsb2NraW5nRWxlbWVudHMucHVzaCh0aGlzKTtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW2Nzc0NsYXNzZXMuU1RBQ0tFRF06IHRoaXMuc3RhY2tlZCxcbiAgICB9O1xuXG4gICAgbGV0IHRpdGxlID0gaHRtbGBgO1xuXG4gICAgaWYgKHRoaXMudGl0bGUpIHtcbiAgICAgIHRpdGxlID0gaHRtbGA8aDIgY2xhc3M9XCJtZGMtZGlhbG9nX190aXRsZVwiPiR7dGhpcy50aXRsZX08L2gyPmA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uc0NsYXNzZXMgPSB7XG4gICAgICAnbWRjLWRpYWxvZ19fYWN0aW9ucyc6ICF0aGlzLmhpZGVBY3Rpb25zLFxuICAgIH07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZyAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibXktZGlhbG9nLXRpdGxlXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm15LWRpYWxvZy1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zdXJmYWNlXCI+XG4gICAgICAgICAgJHt0aXRsZX1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb290ZXJcbiAgICAgICAgICAgICAgaWQ9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKGFjdGlvbnNDbGFzc2VzKX1cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwic2Vjb25kYXJ5QWN0aW9uXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgPHNsb3QgbmFtZT1cInByaW1hcnlBY3Rpb25cIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fc2NyaW1cIj48L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5zZXRBdXRvU3RhY2tCdXR0b25zKHRydWUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBmb3JjZUxheW91dCgpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24ubGF5b3V0KCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBjb25zdCBpbml0aWFsRm9jdXNFbCA9IHRoaXMuZ2V0SW5pdGlhbEZvY3VzRWwoKTtcbiAgICBpbml0aWFsRm9jdXNFbCAmJiBpbml0aWFsRm9jdXNFbC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpIHtcbiAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsID0gdGhpcy5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsKSB7XG4gICAgICBpZiAoYWN0aXZlRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBhY3RpdmVFbC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3ROb2RlKCk7XG4gICAgICBjb25zdCBhY3RpdmVFbCA9IHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudCA/IHJvb3QuYWN0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgICBpZiAoYWN0aXZlRWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBhY3RpdmVFbC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuYm91bmRIYW5kbGVDbGljayA9IHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVDbGljay5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24pIGFzIEV2ZW50TGlzdGVuZXI7XG4gICAgdGhpcy5ib3VuZExheW91dCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmxheW91dC5iaW5kKHRoaXMubWRjRm91bmRhdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmJvdW5kSGFuZGxlS2V5ZG93biA9IHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVLZXlkb3duLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uKSBhcyBFdmVudExpc3RlbmVyO1xuICAgIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24gPVxuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlRG9jdW1lbnRLZXlkb3duLmJpbmQodGhpcy5tZGNGb3VuZGF0aW9uKSBhc1xuICAgICAgICBFdmVudExpc3RlbmVyO1xuXG4gICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZUNsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5ib3VuZExheW91dCwgYXBwbHlQYXNzaXZlKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLmJvdW5kTGF5b3V0LCBhcHBseVBhc3NpdmUoKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEhhbmRsZUtleWRvd24sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24sIGFwcGx5UGFzc2l2ZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5ib3VuZEhhbmRsZUNsaWNrKSB7XG4gICAgICB0aGlzLm1kY1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kTGF5b3V0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5ib3VuZExheW91dCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLmJvdW5kTGF5b3V0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZEhhbmRsZUtleWRvd24pIHtcbiAgICAgIHRoaXMubWRjUm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEhhbmRsZUtleWRvd24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kSGFuZGxlRG9jdW1lbnRLZXlkb3duKSB7XG4gICAgICB0aGlzLm1kY1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAna2V5ZG93bicsIHRoaXMuYm91bmRIYW5kbGVEb2N1bWVudEtleWRvd24pO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjc3N9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzYC5tZGMtZGlhbG9nLC5tZGMtZGlhbG9nX19zY3JpbXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1kaWFsb2d7ZGlzcGxheTpub25lO3otaW5kZXg6N30ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc3VyZmFjZSwgI2ZmZil9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3Njcmlte2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzIpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX190aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX2NvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fdGl0bGUsLm1kYy1kaWFsb2cubWRjLWRpYWxvZy0tc2Nyb2xsYWJsZSAubWRjLWRpYWxvZ19fYWN0aW9uc3tib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21pbi13aWR0aDoyODBweH1AbWVkaWEobWF4LXdpZHRoOiA1OTJweCl7Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSAzMnB4KX19QG1lZGlhKG1pbi13aWR0aDogNTkycHgpey5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC13aWR0aDo1NjBweH19Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAzMnB4KX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXtib3JkZXItcmFkaXVzOjRweH0ubWRjLWRpYWxvZ19fc2NyaW17b3BhY2l0eTowO3otaW5kZXg6LTF9Lm1kYy1kaWFsb2dfX2NvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2JveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6MTAwJTt0cmFuc2Zvcm06c2NhbGUoMC44KTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0ubWRjLWRpYWxvZ19fc3VyZmFjZXtib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzowO2ZsZXgtc2hyaW5rOjA7Ym94LXNpemluZzpib3JkZXItYm94O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czphdXRvO292ZXJmbG93LXk6YXV0b30ubWRjLWRpYWxvZ1tkaXI9cnRsXSAubWRjLWRpYWxvZ19fc3VyZmFjZSxbZGlyPXJ0bF0gLm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3N1cmZhY2V7dGV4dC1hbGlnbjpyaWdodH0ubWRjLWRpYWxvZ19fdGl0bGV7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlJvYm90bywgc2Fucy1zZXJpZjstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6MS4yNXJlbTtsaW5lLWhlaWdodDoycmVtO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouMDEyNWVtO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LXNocmluazowO2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjAgMjRweCA5cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnR9Lm1kYy1kaWFsb2dfX3RpdGxlOjpiZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6NDBweDtjb250ZW50OlwiXCI7dmVydGljYWwtYWxpZ246MH0ubWRjLWRpYWxvZ1tkaXI9cnRsXSAubWRjLWRpYWxvZ19fdGl0bGUsW2Rpcj1ydGxdIC5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX190aXRsZXt0ZXh0LWFsaWduOnJpZ2h0fS5tZGMtZGlhbG9nLS1zY3JvbGxhYmxlIC5tZGMtZGlhbG9nX190aXRsZXtwYWRkaW5nLWJvdHRvbToxNXB4fS5tZGMtZGlhbG9nX19jb250ZW50e2ZvbnQtZmFtaWx5OlJvYm90bywgc2Fucy1zZXJpZjstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjVyZW07Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOi4wMzEyNWVtO3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7ZmxleC1ncm93OjE7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MjBweCAyNHB4O292ZXJmbG93OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9Lm1kYy1kaWFsb2dfX2NvbnRlbnQ+OmZpcnN0LWNoaWxke21hcmdpbi10b3A6MH0ubWRjLWRpYWxvZ19fY29udGVudD46bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9Lm1kYy1kaWFsb2dfX3RpdGxlKy5tZGMtZGlhbG9nX19jb250ZW50e3BhZGRpbmctdG9wOjB9Lm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2NvbnRlbnR7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWRjLWRpYWxvZ19fY29udGVudCAubWRjLWxpc3Q6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHtwYWRkaW5nOjZweCAwIDB9Lm1kYy1kaWFsb2ctLXNjcm9sbGFibGUgLm1kYy1kaWFsb2dfX2NvbnRlbnQgLm1kYy1saXN0OmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7cGFkZGluZzowfS5tZGMtZGlhbG9nX19hY3Rpb25ze2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LXNocmluazowO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7Ym94LXNpemluZzpib3JkZXItYm94O21pbi1oZWlnaHQ6NTJweDttYXJnaW46MDtwYWRkaW5nOjhweDtib3JkZXItdG9wOjFweCBzb2xpZCB0cmFuc3BhcmVudH0ubWRjLWRpYWxvZy0tc3RhY2tlZCAubWRjLWRpYWxvZ19fYWN0aW9uc3tmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1lbmR9Lm1kYy1kaWFsb2dfX2J1dHRvbnttYXJnaW4tbGVmdDo4cHg7bWFyZ2luLXJpZ2h0OjA7bWF4LXdpZHRoOjEwMCU7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm1kYy1kaWFsb2dfX2J1dHRvbiwubWRjLWRpYWxvZ19fYnV0dG9uW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjhweH0ubWRjLWRpYWxvZ19fYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9W2Rpcj1ydGxdIC5tZGMtZGlhbG9nX19idXR0b246Zmlyc3QtY2hpbGQsLm1kYy1kaWFsb2dfX2J1dHRvbjpmaXJzdC1jaGlsZFtkaXI9cnRsXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowfS5tZGMtZGlhbG9nW2Rpcj1ydGxdIC5tZGMtZGlhbG9nX19idXR0b24sW2Rpcj1ydGxdIC5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19idXR0b257dGV4dC1hbGlnbjpsZWZ0fS5tZGMtZGlhbG9nLS1zdGFja2VkIC5tZGMtZGlhbG9nX19idXR0b246bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxMnB4fS5tZGMtZGlhbG9nLS1vcGVuLC5tZGMtZGlhbG9nLS1vcGVuaW5nLC5tZGMtZGlhbG9nLS1jbG9zaW5ne2Rpc3BsYXk6ZmxleH0ubWRjLWRpYWxvZy0tb3BlbmluZyAubWRjLWRpYWxvZ19fc2NyaW17dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLWRpYWxvZy0tb3BlbmluZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zaXRpb246b3BhY2l0eSA3NW1zIGxpbmVhcix0cmFuc2Zvcm0gMTUwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfS5tZGMtZGlhbG9nLS1jbG9zaW5nIC5tZGMtZGlhbG9nX19zY3JpbSwubWRjLWRpYWxvZy0tY2xvc2luZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zaXRpb246b3BhY2l0eSA3NW1zIGxpbmVhcn0ubWRjLWRpYWxvZy0tY2xvc2luZyAubWRjLWRpYWxvZ19fY29udGFpbmVye3RyYW5zZm9ybTpzY2FsZSgxKX0ubWRjLWRpYWxvZy0tb3BlbiAubWRjLWRpYWxvZ19fc2NyaW17b3BhY2l0eToxfS5tZGMtZGlhbG9nLS1vcGVuIC5tZGMtZGlhbG9nX19jb250YWluZXJ7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0ubWRjLWRpYWxvZy1zY3JvbGwtbG9ja3tvdmVyZmxvdzpoaWRkZW59I2FjdGlvbnM6bm90KC5tZGMtZGlhbG9nX19hY3Rpb25zKXtkaXNwbGF5Om5vbmV9QG1lZGlhKG1pbi13aWR0aDogNTYwcHgpey5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21heC13aWR0aDo1NjBweDttYXgtd2lkdGg6dmFyKC0tbWRjLWRpYWxvZy1tYXgtd2lkdGgsIDU2MHB4KX19Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3Njcmlte2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLWRpYWxvZy1zY3JpbS1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjMyKSl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX3RpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtjb2xvcjp2YXIoLS1tZGMtZGlhbG9nLXRpdGxlLWluay1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjg3KSl9Lm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX2NvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuNik7Y29sb3I6dmFyKC0tbWRjLWRpYWxvZy1jb250ZW50LWluay1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjYpKX0ubWRjLWRpYWxvZy5tZGMtZGlhbG9nLS1zY3JvbGxhYmxlIC5tZGMtZGlhbG9nX190aXRsZSwubWRjLWRpYWxvZy5tZGMtZGlhbG9nLS1zY3JvbGxhYmxlIC5tZGMtZGlhbG9nX19hY3Rpb25ze2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy1kaWFsb2ctc2Nyb2xsLWRpdmlkZXItY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4xMikpfS5tZGMtZGlhbG9nIC5tZGMtZGlhbG9nX19zdXJmYWNle21pbi13aWR0aDoyODBweDttaW4td2lkdGg6dmFyKC0tbWRjLWRpYWxvZy1taW4td2lkdGgsIDI4MHB4KX0ubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZXttYXgtaGVpZ2h0OnZhcigtLW1kYy1kaWFsb2ctbWF4LWhlaWdodCwgY2FsYygxMDAlIC0gMzJweCkpO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlci1yYWRpdXM6dmFyKC0tbWRjLWRpYWxvZy1zaGFwZS1yYWRpdXMsIDRweCl9I2FjdGlvbnMgOjpzbG90dGVkKCope21hcmdpbi1sZWZ0OjhweDttYXJnaW4tcmlnaHQ6MDttYXgtd2lkdGg6MTAwJTt0ZXh0LWFsaWduOnJpZ2h0fVtkaXI9cnRsXSAjYWN0aW9ucyA6OnNsb3R0ZWQoKiksI2FjdGlvbnMgOjpzbG90dGVkKCopW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjhweH0ubWRjLWRpYWxvZ1tkaXI9cnRsXSAjYWN0aW9ucyA6OnNsb3R0ZWQoKiksW2Rpcj1ydGxdIC5tZGMtZGlhbG9nICNhY3Rpb25zIDo6c2xvdHRlZCgqKXt0ZXh0LWFsaWduOmxlZnR9Lm1kYy1kaWFsb2ctLXN0YWNrZWQgI2FjdGlvbnN7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Lm1kYy1kaWFsb2ctLXN0YWNrZWQgI2FjdGlvbnMgKjpub3QoOmxhc3QtY2hpbGQpIDo6c2xvdHRlZCgqKXtmbGV4LWJhc2lzOjFlLTlweDttYXJnaW4tdG9wOjEycHh9YDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge0RpYWxvZ0Jhc2V9IGZyb20gJy4vbXdjLWRpYWxvZy1iYXNlLmpzJztcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vbXdjLWRpYWxvZy1jc3MuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtd2MtZGlhbG9nJzogRGlhbG9nO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdtd2MtZGlhbG9nJylcbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBEaWFsb2dCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IHN0eWxlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgUG9seW1lci5Jcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3JgIGFsbG93cyBhbiBlbGVtZW50IHRvIHJlc3BvbmQgdG8gc2Nyb2xsXG4gKiBldmVudHMgZnJvbSBhIGRlc2lnbmF0ZWQgc2Nyb2xsIHRhcmdldC5cbiAqXG4gKiBFbGVtZW50cyB0aGF0IGNvbnN1bWUgdGhpcyBiZWhhdmlvciBjYW4gb3ZlcnJpZGUgdGhlIGBfc2Nyb2xsSGFuZGxlcmBcbiAqIG1ldGhvZCB0byBhZGQgbG9naWMgb24gdGhlIHNjcm9sbCBldmVudC5cbiAqXG4gKiBAZGVtbyBkZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG4gKiBAZGVtbyBkZW1vL2RvY3VtZW50Lmh0bWwgRG9jdW1lbnQgRWxlbWVudFxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgZWxlbWVudCB0aGF0IHdpbGwgaGFuZGxlIHRoZSBzY3JvbGwgZXZlbnRcbiAgICAgKiBvbiB0aGUgYmVoYWxmIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQuIFRoaXMgaXMgdHlwaWNhbGx5IGEgcmVmZXJlbmNlIHRvIGFuXG4gICAgICplbGVtZW50LCBidXQgdGhlcmUgYXJlIGEgZmV3IG1vcmUgcG9zaWJpbGl0aWVzOlxuICAgICAqXG4gICAgICogIyMjIEVsZW1lbnRzIGlkXG4gICAgICpcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8ZGl2IGlkPVwic2Nyb2xsYWJsZS1lbGVtZW50XCIgc3R5bGU9XCJvdmVyZmxvdzogYXV0bztcIj5cbiAgICAgKiAgPHgtZWxlbWVudCBzY3JvbGwtdGFyZ2V0PVwic2Nyb2xsYWJsZS1lbGVtZW50XCI+XG4gICAgICogICAgPCEtLSBDb250ZW50LS0+XG4gICAgICogIDwveC1lbGVtZW50PlxuICAgICAqIDwvZGl2PlxuICAgICAqYGBgXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgYHNjcm9sbFRhcmdldGAgd2lsbCBwb2ludCB0byB0aGUgb3V0ZXIgZGl2IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiAjIyMgRG9jdW1lbnQgc2Nyb2xsaW5nXG4gICAgICpcbiAgICAgKiBGb3IgZG9jdW1lbnQgc2Nyb2xsaW5nLCB5b3UgY2FuIHVzZSB0aGUgcmVzZXJ2ZWQgd29yZCBgZG9jdW1lbnRgOlxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICogPHgtZWxlbWVudCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICAgKiAgIDwhLS0gQ29udGVudCAtLT5cbiAgICAgKiA8L3gtZWxlbWVudD5cbiAgICAgKmBgYFxuICAgICAqXG4gICAgICogIyMjIEVsZW1lbnRzIHJlZmVyZW5jZVxuICAgICAqXG4gICAgICpgYGBqc1xuICAgICAqIGFwcEhlYWRlci5zY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsYWJsZS1lbGVtZW50Jyk7XG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKiBAZGVmYXVsdCBkb2N1bWVudFxuICAgICAqL1xuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgdHlwZTogSFRNTEVsZW1lbnQsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U2Nyb2xsVGFyZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3Njcm9sbFRhcmdldENoYW5nZWQoc2Nyb2xsVGFyZ2V0LCBpc0F0dGFjaGVkKSddLFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBldmVudCBsaXN0ZW5lciBzaG91bGQgYmUgaW5zdGFsbGVkLlxuICAgKi9cbiAgX3Nob3VsZEhhdmVMaXN0ZW5lcjogdHJ1ZSxcblxuICBfc2Nyb2xsVGFyZ2V0Q2hhbmdlZDogZnVuY3Rpb24oc2Nyb2xsVGFyZ2V0LCBpc0F0dGFjaGVkKSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0O1xuXG4gICAgaWYgKHRoaXMuX29sZFNjcm9sbFRhcmdldCkge1xuICAgICAgdGhpcy5fdG9nZ2xlU2Nyb2xsTGlzdGVuZXIoZmFsc2UsIHRoaXMuX29sZFNjcm9sbFRhcmdldCk7XG4gICAgICB0aGlzLl9vbGRTY3JvbGxUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBlbGVtZW50IGlkIHJlZmVyZW5jZXNcbiAgICBpZiAoc2Nyb2xsVGFyZ2V0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IHRoaXMuX2RvYztcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkb21Ib3N0ID0gdGhpcy5kb21Ib3N0O1xuXG4gICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IGRvbUhvc3QgJiYgZG9tSG9zdC4kID9cbiAgICAgICAgICBkb21Ib3N0LiRbc2Nyb2xsVGFyZ2V0XSA6XG4gICAgICAgICAgZG9tKHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvcignIycgKyBzY3JvbGxUYXJnZXQpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHRoaXMuX29sZFNjcm9sbFRhcmdldCA9IHNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKHRoaXMuX3Nob3VsZEhhdmVMaXN0ZW5lciwgc2Nyb2xsVGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJ1bnMgb24gZXZlcnkgc2Nyb2xsIGV2ZW50LiBDb25zdW1lciBvZiB0aGlzIGJlaGF2aW9yIG1heSBvdmVycmlkZSB0aGlzXG4gICAqIG1ldGhvZC5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3Njcm9sbEhhbmRsZXI6IGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7fSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgc2Nyb2xsIHRhcmdldC4gQ29uc3VtZXJzIG9mIHRoaXMgYmVoYXZpb3IgbWF5IHdhbnQgdG8gY3VzdG9taXplXG4gICAqIHRoZSBkZWZhdWx0IHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb2M7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB0aGUgZG9jdW1lbnQgZWxlbWVudFxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGdldCBfZG9jKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZFxuICAgKiB1cHdhcmQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRvcCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkIHRvIHRoZVxuICAgKiBsZWZ0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxMZWZ0KCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkU2Nyb2xsVGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jID8gd2luZG93LnBhZ2VYT2Zmc2V0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBwaXhlbHMgdGhhdCB0aGUgY29udGVudCBvZiBhbiBlbGVtZW50IGlzIHNjcm9sbGVkXG4gICAqIHVwd2FyZC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHNldCBfc2Nyb2xsVG9wKHRvcCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnBhZ2VYT2Zmc2V0LCB0b3ApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCB0byB0aGVcbiAgICogbGVmdC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHNldCBfc2Nyb2xsTGVmdChsZWZ0KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhsZWZ0LCB3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGNvbnRlbnQgdG8gYSBwYXJ0aWN1bGFyIHBsYWNlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFxuICAgKiBAcGFyYW0ge251bWJlcnwhe2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9fSBsZWZ0T3JPcHRpb25zIFRoZSBsZWZ0IHBvc2l0aW9uIG9yIHNjcm9sbCBvcHRpb25zXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gdG9wIFRoZSB0b3AgcG9zaXRpb25cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNjcm9sbDogZnVuY3Rpb24obGVmdE9yT3B0aW9ucywgdG9wKSB7XG4gICAgdmFyIGxlZnQ7XG5cbiAgICBpZiAodHlwZW9mIGxlZnRPck9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZWZ0ID0gbGVmdE9yT3B0aW9ucy5sZWZ0O1xuICAgICAgdG9wID0gbGVmdE9yT3B0aW9ucy50b3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBsZWZ0T3JPcHRpb25zO1xuICAgIH1cblxuICAgIGxlZnQgPSBsZWZ0IHx8IDA7XG4gICAgdG9wID0gdG9wIHx8IDA7XG4gICAgaWYgKHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhsZWZ0LCB0b3ApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUYXJnZXRXaWR0aCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5pbm5lcldpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbCB0YXJnZXQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgX3Njcm9sbFRhcmdldEhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2Nyb2xsIHRhcmdldCBpcyBhIHZhbGlkIEhUTUxFbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX2lzVmFsaWRTY3JvbGxUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9LFxuXG4gIF90b2dnbGVTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oeWVzLCBzY3JvbGxUYXJnZXQpIHtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBzY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdyA6IHNjcm9sbFRhcmdldDtcbiAgICBpZiAoeWVzKSB7XG4gICAgICBpZiAoIXRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcikge1xuICAgICAgICB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIgPSB0aGlzLl9zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSB5ZXMgVHJ1ZSB0byBhZGQgdGhlIGV2ZW50LCBGYWxzZSB0byByZW1vdmUgaXQuXG4gICAqL1xuICB0b2dnbGVTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oeWVzKSB7XG4gICAgdGhpcy5fc2hvdWxkSGF2ZUxpc3RlbmVyID0geWVzO1xuICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKHllcywgdGhpcy5zY3JvbGxUYXJnZXQpO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLWRyb3Bkb3duLW1lbnVcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLyogTk9URShjZGF0YSk6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlXG4gICAgICAgICAqIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtub2lua10pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbi8qKlxuVGhpcyBpcyBhIGxpZ2h0ZXIgdmVyc2lvbiBvZiBgcGFwZXItaWNvbi1idXR0b25gLiBJdHMgZ29hbCBpcyBwZXJmb3JtYW5jZSwgbm90XG5kZXZlbG9wZXIgZXJnb25vbWljcywgc28gYXMgYSByZXN1bHQgaXQgaGFzIGZld2VyIGZlYXR1cmVzIHRoYW5cbmBwYXBlci1pY29uLWJ1dHRvbmAgaXRzZWxmLiBUbyB1c2UgaXQsIHlvdSBtdXN0IGRpc3RyaWJ1dGUgYSBgYnV0dG9uYCBjb250YWluaW5nXG50aGUgYGlyb24taWNvbmAgeW91IHdhbnQgdG8gdXNlOlxuXG48c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzJztcbiAgaW1wb3J0ICdAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi1saWdodC5qcyc7XG4gIGltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29ucy9pcm9uLWljb25zLmpzJztcbjwvc2NyaXB0PlxuXG48cGFwZXItaWNvbi1idXR0b24tbGlnaHQ+XG4gIDxidXR0b24gdGl0bGU9XCJoZWFydFwiPlxuICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCI+PC9pcm9uLWljb24+XG4gIDwvYnV0dG9uPlxuPC9wYXBlci1pY29uLWJ1dHRvbi1saWdodD5cblxuTm90ZSB0aGF0IHRoaXMgYnV0dG9uIGlzIGFzc3VtZWQgdG8gYmUgZGlzdHJpYnV0ZWQgYXQgdGhlIHN0YXJ0dXAgb2ZcbmBwYXBlci1pY29uLWJ1dHRvbi1saWdodGAuIER5bmFtaWNhbGx5IGFkZGluZyBhIGBidXR0b25gIHRvIHRoaXMgZWxlbWVudCBpc1xubm90IHN1cHBvcnRlZC5cblxuVGhlIGB0aXRsZWAvYGRpc2FibGVkYCBldGMuIGF0dHJpYnV0ZXMgZ28gb24gdGhlIGRpc3RyaWJ1dGVkIGJ1dHRvbiwgbm90IG9uIHRoZVxud3JhcHBlci5cblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhbHNvIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWljb24tYnV0dG9uLWxpZ2h0LXJpcHBsZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBwYXBlciByaXBwbGUgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaWNvbi1idXR0b24tbGlnaHRcbkBkZW1vIGRlbW8vcGFwZXItaWNvbi1idXR0b24tbGlnaHQuaHRtbFxuKi9cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLWljb24tYnV0dG9uLWxpZ2h0JyxcblxuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWJ1dHRvbi1saWdodC1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGJ1dHRvbikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvKiBOT1RFOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZSB2YWx1ZSB0byBiZSBcXGB0cmFuc3BhcmVudFxcYC4gKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoYnV0dG9uW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgYCxcblxuICBiZWhhdmlvcnM6IFtQYXBlclJpcHBsZUJlaGF2aW9yXSxcblxuICByZWdpc3RlcmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCAoKSA9PiB7XG4gICAgICAvLyBBZGQgbGF6eSBob3N0IGxpc3RlbmVyc1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdkb3duJywgdGhpcy5fcmlwcGxlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndXAnLCB0aGlzLl9yaXBwbGVVcC5iaW5kKHRoaXMpKTtcblxuICAgICAgLy8gQXNzdW1lIHRoZSBidXR0b24gaGFzIGFscmVhZHkgYmVlbiBkaXN0cmlidXRlZC5cbiAgICAgIHZhciBidXR0b24gPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKClbMF07XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBidXR0b247XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHRoZSBmb2N1cy9ibHVyIGxpc3RlbmVycyBvbiB0aGUgZGlzdHJpYnV0ZWQgYnV0dG9uLFxuICAgICAgLy8gbm90IHRoZSBob3N0LCBzaW5jZSB0aGUgaG9zdCBpc24ndCBmb2N1c2FibGUuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9yaXBwbGVEb3duLmJpbmQodGhpcykpO1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9yaXBwbGVVcC5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgfSxcbiAgX3JpcHBsZURvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0UmlwcGxlKCkudWlEb3duQWN0aW9uKCk7XG4gIH0sXG4gIF9yaXBwbGVVcDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRSaXBwbGUoKS51aVVwQWN0aW9uKCk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLip9IHZhcl9hcmdzXG4gICAqL1xuICBlbnN1cmVSaXBwbGU6IGZ1bmN0aW9uKHZhcl9hcmdzKSB7XG4gICAgdmFyIGxhc3RSaXBwbGUgPSB0aGlzLl9yaXBwbGU7XG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvci5lbnN1cmVSaXBwbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5fcmlwcGxlICYmIHRoaXMuX3JpcHBsZSAhPT0gbGFzdFJpcHBsZSkge1xuICAgICAgdGhpcy5fcmlwcGxlLmNlbnRlciA9IHRydWU7XG4gICAgICB0aGlzLl9yaXBwbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsIi8qKlxuICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gKi9cblxuLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8qKlxuICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICovXG5jb25zdCBtYXRjaGVzID1cbiAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4vKiogQHR5cGUge3N0cmluZ30gKi9cbmNvbnN0IF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZWFbaHJlZl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lmcmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbi8qKlxuICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gKiBhdHRyaWJ1dGUuXG4gKlxuICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAqXG4gKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAqXG4gKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAqL1xuY2xhc3MgSW5lcnRSb290IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAqL1xuICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAvLyBXYXRjaCBmb3I6XG4gICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwge2F0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICovXG4gIGRlc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZXJ0Tm9kZSkge1xuICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi8gKG51bGwpO1xuICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAqL1xuICBnZXQgbWFuYWdlZE5vZGVzKCkge1xuICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IGhhc1NhdmVkQXJpYUhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuICBzZXQgc2F2ZWRBcmlhSGlkZGVuKGFyaWFIaWRkZW4pIHtcbiAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gIGdldCBzYXZlZEFyaWFIaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICovXG4gIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCAobm9kZSkgPT4gdGhpcy5fdmlzaXROb2RlKG5vZGUpKTtcblxuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICBsZXQgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovIChub2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICovXG4gIF92aXNpdE5vZGUobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKG5vZGUpO1xuXG4gICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICovXG4gIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICovXG4gIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgIGNvbnN0IGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5kZWxldGUoaW5lcnROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgKi9cbiAgX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgKG5vZGUpID0+IHRoaXMuX3VubWFuYWdlTm9kZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICovXG4gIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgbGV0IGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgIH1cblxuICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICovXG4gIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAocmVjb3JkLnRhcmdldCk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmXG4gICAgICAgICAgICAgICAgICAgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgY29uc3QgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAqXG4gKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gKlxuICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAqL1xuY2xhc3MgSW5lcnROb2RlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgKi9cbiAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgKi9cbiAgZGVzdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovICh0aGlzLl9ub2RlKTtcbiAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovIChudWxsKTtcbiAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqLyAobnVsbCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgKi9cbiAgZ2V0IGRlc3Ryb3llZCgpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqLyAodGhpcykuX2Rlc3Ryb3llZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgKi9cbiAgX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgaGFzU2F2ZWRUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cbiAgZ2V0IG5vZGUoKSB7XG4gICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cbiAgc2V0IHNhdmVkVGFiSW5kZXgodGFiSW5kZXgpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gIGdldCBzYXZlZFRhYkluZGV4KCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgfVxuXG4gIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAodGhpcy5ub2RlKTtcbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgIGlmICgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLnRhYkluZGV4ID09PSAtMSAmJlxuICAgICAgICAgIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KS50YWJJbmRleDtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KS50YWJJbmRleDtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICovXG4gIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgKi9cbiAgcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICB0aGlzLl9pbmVydFJvb3RzLmRlbGV0ZShpbmVydFJvb3QpO1xuICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAqXG4gKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICovXG5jbGFzcyBJbmVydE1hbmFnZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgLyoqXG4gICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICovXG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAqL1xuICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICovXG4gIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgaWYgKGluZXJ0KSB7XG4gICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHsgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICBsZXQgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkgeyAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICBpbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgdGhpcy5faW5lcnRSb290cy5kZWxldGUocm9vdCk7XG4gICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgKi9cbiAgZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgKi9cbiAgcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgbGV0IGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7IC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICovXG4gIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgY29uc3QgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZGVsZXRlKG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmVydE5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgKi9cbiAgX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICBjb25zdCBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpbmVydEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHksIHthdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAqL1xuICBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWNvcmQpIHtcbiAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChyZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICovXG5mdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAoZWxlbWVudCkuc2hhZG93Um9vdDtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgIC8vIHNoYWRvdyBET00uXG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgY29uc3QgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi8gKGVsZW1lbnQpO1xuICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgIGNvbnN0IGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgP1xuICAgICAgICBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgIC8vIHNoYWRvdyBET00uXG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgY29uc3Qgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi8gKGVsZW1lbnQpO1xuICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICBjb25zdCBkaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID9cbiAgICAgICAgc2xvdC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSkgOiBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgbGV0IGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlJykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicrXG4gICAgICAgICAgICAgICAgICAgICAgJ1tpbmVydF0ge1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnfVxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICd9XFxuJztcbiAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbi8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbmNvbnN0IGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgIH0sXG4gICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKGluZXJ0KSB7XG4gICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgIH0sXG4gIH0pO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFsQkE7QUFxQkE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0Q0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBL0NBO0FBQUE7QUFDQTtBQUNBO0FBRkE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWxCQTtBQW9CQTtBQXJCQTs7QUFBQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQWhSQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFBQTtBQUFBO0FBNEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE5QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFBQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFHQTtBQUNBO0FBR0E7QUErQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7O0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFBQTs7QUFtQkE7QUFNQTtBQUVBO0FBTUE7QUFNQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE4TEE7QUFDQTtBQTVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFPQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBZEE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExUUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUpBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBSkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQWtCQTtBQWhCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7O0FBSUE7QUFFQTs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QU5uREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QU9oREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE2Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFQQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0VBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQTJDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWpGQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBNEJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7O0FDckRBOzs7Ozs7Ozs7Ozs7Ozs7O0FBNERBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBcUJBO0FBQUE7QUFDQTs7O0FBR0E7QUFFQTs7Ozs7OztBQU1BO0FBRUE7Ozs7O0FBSUE7QUE2VEE7QUFDQTtBQTVUQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEvVUE7QUFDQTtBQWdWQTtBQUVBOzs7Ozs7Ozs7OztBQ3JiQTs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhPQTtBQTBPQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0lBO0FBaUpBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7OztBQUlBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBdEJBO0FBd0JBO0FBQ0E7QUFDQTtBQW5MQTtBQXFMQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7OztBIiwic291cmNlUm9vdCI6IiJ9