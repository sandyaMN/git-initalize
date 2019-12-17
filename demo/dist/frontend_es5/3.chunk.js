(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@polymer/iron-list/iron-list.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-list/iron-list.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/mutable-data-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/templatizer-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id=\"selector\" items=\"{{items}}\" selected=\"{{selectedItems}}\" selected-item=\"{{selectedItem}}\"></array-selector>\n\n    <div id=\"items\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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














var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;
/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Styling

You can use the `--iron-list-items-container` mixin to style the container of
items:

```css
iron-list {
 --iron-list-items-container: {
    margin: auto;
  };
}
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@element iron-list
@demo demo/index.html

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  /** @override */
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject()),
  is: 'iron-list',
  properties: {
    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {
      type: Array
    },

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {
      type: String,
      value: 'item'
    },

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {
      type: String,
      value: 'index'
    },

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {
      type: String,
      value: 'selected'
    },

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {
      type: Boolean,
      value: false
    },

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {
      type: Object,
      notify: true
    },

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {
      type: Object,
      notify: true
    },

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {
      type: Boolean,
      value: false
    },

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {
      type: Number,
      value: 0
    }
  },
  observers: ['_itemsChanged(items.*)', '_selectionEnabledChanged(selectionEnabled)', '_multiSelectionChanged(multiSelection)', '_setOverflow(scrollTarget, scrollOffset)'],
  behaviors: [_polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__["Templatizer"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronScrollTargetBehavior"], _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);

    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;

    if (val < 0) {
      val = this._physicalCount + val;
    }

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;

    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;
      idx = this._iterateItems(function (pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
        } // Handle a partially rendered final row in grid mode


        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - vidx % this._itemsPerRow;
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }

    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;

    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        this._iterateItems(function (pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }

          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }

      this._lastVisibleIndexVal = idx;
    }

    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  /** @override */
  ready: function ready() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },

  /** @override */
  attached: function attached() {
    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },

  /** @override */
  detached: function detached() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function _setOverflow(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : ''; // Clear cache.

    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;

    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function updateViewportBoundaries() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function _scrollHandler() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0; // Track the current scroll position.

    this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null; // Random access.

    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;

      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset based on the virtual start index.
      // adjusts the physical start position to stay in sync with the clamped
      // virtual start index. It's critical not to let this value be
      // more than the scroll position however, since that would result in
      // the physical items not covering the viewport, and leading to
      // _increasePoolIfNeeded to run away creating items to try to fill it.

      this._physicalTop = Math.min(Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage, this._scrollPosition);

      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);

      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }

      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function _getReusables(fromTop) {
    var ith, lastIth, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset; // This may be called outside of a scrollHandler, so use last cached position

    var scrollTop = this._scrollPosition;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      lastIth = this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      lastIth = this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }

    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;

      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }

      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        } // Check that the index is not visible.


        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }

        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        } // Check that the index is not visible.


        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }

        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = ith === 0 ? physicalCount - 1 : ith - 1;
      }
    }

    return {
      indexes: idxs,
      physicalTop: top - this._scrollOffset
    };
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function _update(itemSet, movingUp) {
    if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
      return;
    }

    this._manageFocus();

    this._assignModels(itemSet);

    this._updateMetrics(itemSet); // Adjust offset after measuring.


    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }

    this._positionItems();

    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function _createPool(size) {
    this._ensureTemplatized();

    var i, inst;
    var physicalItems = new Array(size);

    for (i = 0; i < size; i++) {
      inst = this.stamp(null); // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.

      physicalItems[i] = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    }

    return physicalItems;
  },
  _isClientFull: function _isClientFull() {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function _increasePoolIfNeeded(count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);

    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;

      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }

      nextPhysicalCount -= correction;
    }

    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.

      if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }

      this._update();

      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    } // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.


    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {// Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["idlePeriod"]);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function _render() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }

    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);

      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;

      this._update(reusables.indexes);

      this._update();

      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();

      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function _ensureTemplatized() {
    if (this.ctor) {
      return;
    }

    this._userTemplate =
    /** @type {!HTMLTemplateElement} */
    this.queryEffectiveChildren('template');

    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }

    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },
  _gridChanged: function _gridChanged(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined') return;
    this.notifyResize();
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function _itemsChanged(change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;

      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }

      this._removeFocusedItem();

      this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);

      this._virtualCount = this.items ? this.items.length : 0; // Only blur if at least one item is added or removed.

      var itemAddedOrRemoved = change.value.indexSplices.some(function (splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });

      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();

        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      } // Render only if the affected index is rendered.


      var affectedIndexRendered = change.value.indexSplices.some(function (splice) {
        return splice.index + splice.addedCount >= this._virtualStart && splice.index <= this._virtualEnd;
      }, this);

      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }
  },
  _forwardItemPath: function _forwardItemPath(path, value) {
    path = path.slice(6); // 'items.'.length == 6

    var dot = path.indexOf('.');

    if (dot === -1) {
      dot = path.length;
    }

    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);

    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }

    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');

    inst._setPendingPropertyOrPath(path, value, false, true);

    inst._flushProperties && inst._flushProperties(); // TODO(blasten): V1 doesn't do this and it's a bug

    if (isIndexRendered) {
      this._updateMetrics([pidx]);

      this._positionItems();

      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function _adjustVirtualIndex(splices) {
    splices.forEach(function (splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this); // We only need to care about changes happening above the current position

      if (splice.index < this._virtualStart) {
        var delta = Math.max(splice.addedCount - splice.removed.length, splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;

        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },
  _removeItem: function _removeItem(item) {
    this.$.selector.deselect(item); // remove the current focused item

    if (this._focusedItem && this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function _iterateItems(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);

        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;

      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }

      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function _computeVidx(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }

    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function _assignModels(itemSet) {
    this._iterateItems(function (pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];

      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;

        this._forwardProperty(inst, this.as, item);

        this._forwardProperty(inst, this.selectedAs, this.$.selector.isSelected(item));

        this._forwardProperty(inst, this.indexAs, vidx);

        this._forwardProperty(inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);

        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function _updateMetrics(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function (pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();

      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    } // Update the average if it measured something.


    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    }
  },
  _updateGridMetrics: function _updateGridMetrics() {
    this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
    this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function _positionItems() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function (pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor(modulus * this._itemWidth + rowOffset);

        if (this._isRTL) {
          x = x * -1;
        }

        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);

        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      var order = [];

      this._iterateItems(function (pidx, vidx) {
        var item = this._physicalItems[pidx];
        this.translate3d(0, y + 'px', 0, item);
        y += this._physicalSizes[pidx];
        var itemId = item.id;

        if (itemId) {
          order.push(itemId);
        }
      });

      if (order.length) {
        this.setAttribute('aria-owns', order.join(' '));
      }
    }
  },
  _getPhysicalSizeIncrement: function _getPhysicalSizeIncrement(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }

    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }

    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function _shouldRenderNextRow(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function _adjustScrollPosition() {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight; // This may be called outside of a scrollHandler, so use last cached position

      var scrollTop = this._scrollPosition; // juking scroll position during interial scrolling on iOS is no bueno

      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function _resetScrollPosition(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function _updateScrollerSize(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
    }

    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function scrollToItem(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function scrollToIndex(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }

    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])(); // Items should have been rendered prior scrolling to an index.

    if (this._physicalCount === 0) {
      return;
    }

    idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
    }

    this._manageFocus();

    this._assignModels();

    this._updateMetrics(); // Estimate new physical offset.


    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }

    this._updateScrollerSize(true);

    this._positionItems();

    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

    this._increasePoolIfNeeded(0); // clear cached visible index.


    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function _resetAverage() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function _resizeHandler() {
    this._debounce('_render', function () {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;

      if (this._isVisible) {
        this.updateViewportBoundaries(); // Reinstall the scroll event listener.

        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function selectItem(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function selectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);

      if (model) {
        model[this.selectedAs] = true;
      }

      this.updateSizeForIndex(index);
    }

    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function deselectItem(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function deselectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }

    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function toggleSelectionForItem(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function toggleSelectionForIndex(index) {
    var isSelected = this.$.selector.isIndexSelected ? this.$.selector.isIndexSelected(index) : this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function clearSelection() {
    this._iterateItems(function (pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });

    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function _selectionEnabledChanged(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function _selectionHandler(e) {
    var model = this.modelForElement(e.target);

    if (!model) {
      return;
    }

    var modelTabIndex, activeElTabIndex;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(e).path[0];

    var activeEl = this._getActiveElement();

    var physicalItem = this._physicalItems[this._getPhysicalIndex(model[this.indexAs])]; // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043


    if (target.localName === 'input' || target.localName === 'button' || target.localName === 'select') {
      return;
    } // Set a temporary tabindex


    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex; // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`

    if (activeEl && physicalItem !== activeEl && physicalItem.contains(activeEl) && activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }

    this.toggleSelectionForItem(model[this.as]);
  },
  _multiSelectionChanged: function _multiSelectionChanged(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function updateSizeForItem(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function updateSizeForIndex(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }

    this._updateMetrics([this._getPhysicalIndex(index)]);

    this._positionItems();

    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function _manageFocus() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function _convertIndexToCompleteRow(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },
  _isIndexRendered: function _isIndexRendered(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },
  _isIndexVisible: function _isIndexVisible(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },
  _getPhysicalIndex: function _getPhysicalIndex(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  focusItem: function focusItem(idx) {
    this._focusPhysicalItem(idx);
  },
  _focusPhysicalItem: function _focusPhysicalItem(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }

    this._restoreFocusedItem(); // scroll to index to make sure it's rendered


    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }

    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];

    var model = this.modelForElement(physicalItem);
    var focusable; // set a secret tab index

    model.tabIndex = SECRET_TABINDEX; // check if focusable element is the physical item

    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    } // search for the element which tabindex is bound to the secret tab index


    if (!focusable) {
      focusable = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(physicalItem).querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    } // restore the tab index


    model.tabIndex = 0; // focus the focusable element

    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },
  _removeFocusedItem: function _removeFocusedItem() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }

    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },
  _createFocusBackfillItem: function _createFocusBackfillItem() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }

    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem =
      /** @type {!HTMLElement} */
      inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    } // Set the offcreen focused physical item.


    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx; // Hide the focused physical.

    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },
  _restoreFocusedItem: function _restoreFocusedItem() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    } // Assign models to the focused index.


    this._assignModels(); // Get the new physical index for the focused index.


    var fpidx = this._focusedPhysicalIndex = this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];

    if (!onScreenItem) {
      return;
    }

    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem); // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').

    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1; // Restore the focused physical item.

      this._physicalItems[fpidx] = this._offscreenFocusedItem; // Hide the physical item that backfills.

      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();

      this._focusBackfillItem = null;
    }

    this._offscreenFocusedItem = null;
  },
  _didFocus: function _didFocus(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;

    if (!targetModel) {
      return;
    }

    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem(); // Restore tabIndex for the currently focused item.


      if (focusedModel) {
        focusedModel.tabIndex = -1;
      } // Set the tabIndex for the next focused item.


      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];

      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },
  _keydownHandler: function _keydownHandler(e) {
    switch (e.keyCode) {
      case
      /* ARROW_DOWN */
      40:
        if (this._focusedVirtualIndex < this._virtualCount - 1) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_RIGHT */
      39:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;

      case
      /* ARROW_UP */
      38:
        if (this._focusedVirtualIndex > 0) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_LEFT */
      37:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;

      case
      /* ENTER */
      13:
        this._focusPhysicalItem(this._focusedVirtualIndex);

        if (this.selectionEnabled) this._selectionHandler(e);
        break;
    }
  },
  _clamp: function _clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function _debounce(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["enqueueDebouncer"])(this._debouncers[name]);
  },
  _forwardProperty: function _forwardProperty(inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function _forwardHostPropV2(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).forwardHostProp(prop, value);
      }
    }, this);
  },
  _notifyInstancePropV2: function _notifyInstancePropV2(inst, prop, value) {
    if (Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["matches"])(this.as, prop)) {
      var idx = inst[this.indexAs];

      if (prop == this.as) {
        this.items[idx] = value;
      }

      this.notifyPath(Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["translate"])(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function _getStampedChildren() {
    return this._physicalItems;
  },
  _forwardInstancePath: function _forwardInstancePath(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
    }
  },
  _forwardParentPath: function _forwardParentPath(path, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).notifyPath(path, value);
      }
    }, this);
  },
  _forwardParentProp: function _forwardParentProp(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item)[prop] = value;
      }
    }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function _getActiveElement() {
    var itemsHost = this._itemsParent.node.domHost;
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(itemsHost ? itemsHost.root : document).activeElement;
  }
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js ***!
  \*******************************************************************************************/
/*! exports provided: ComboBoxDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxDataProviderMixin", function() { return ComboBoxDataProviderMixin; });
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */

var ComboBoxDataProviderMixin = function ComboBoxDataProviderMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(DataProviderMixin, _superClass);

      function DataProviderMixin() {
        _classCallCheck(this, DataProviderMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(DataProviderMixin).apply(this, arguments));
      }

      _createClass(DataProviderMixin, [{
        key: "_dataProviderClearFilter",
        value: function _dataProviderClearFilter(dataProvider, opened, value) {
          // Can't depend on filter in this obsever as we don't want
          // to clear the filter whenever it's set
          if (dataProvider && this.filter) {
            this.size = undefined;
            this._pendingRequests = {};
            this.filter = '';
            this.clearCache();
          }
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(DataProviderMixin.prototype), "ready", this).call(this);

          this.clearCache();
          this.$.overlay.addEventListener('index-requested', function (e) {
            var index = e.detail.index;

            if (index !== undefined) {
              var page = _this._getPageForIndex(index);

              if (_this._shouldLoadPage(page)) {
                _this._loadPage(page);
              }
            }
          });
        }
      }, {
        key: "_dataProviderFilterChanged",
        value: function _dataProviderFilterChanged() {
          if (this.dataProvider && this.opened) {
            this.size = undefined;
            this._pendingRequests = {};
            this.clearCache();
          }
        }
      }, {
        key: "_ensureFirstPage",
        value: function _ensureFirstPage(opened) {
          if (opened && this._shouldLoadPage(0)) {
            this._loadPage(0);
          }
        }
      }, {
        key: "_shouldLoadPage",
        value: function _shouldLoadPage(page) {
          if (!this.filteredItems || this._forceNextRequest) {
            this._forceNextRequest = false;
            return true;
          }

          var loadedItem = this.filteredItems[page * this.pageSize];

          if (loadedItem !== undefined) {
            return loadedItem instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"];
          } else {
            return this.size === undefined;
          }
        }
      }, {
        key: "_loadPage",
        value: function _loadPage(page) {
          var _this2 = this;

          // make sure same page isn't requested multiple times.
          if (!this._pendingRequests[page] && this.dataProvider) {
            this.loading = true;
            var params = {
              page: page,
              pageSize: this.pageSize,
              filter: this.filter
            };

            var callback = function callback(items, size) {
              if (_this2._pendingRequests[page] === callback) {
                if (!_this2.filteredItems) {
                  var filteredItems = [];
                  filteredItems.splice.apply(filteredItems, [params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                  _this2.filteredItems = filteredItems;
                } else {
                  _this2.splice.apply(_this2, ['filteredItems', params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                } // Update selectedItem from filteredItems if value is set


                if (_this2._isValidValue(_this2.value) && _this2._getItemValue(_this2.selectedItem) !== _this2.value) {
                  _this2._selectItemForValue(_this2.value);
                }

                _this2.size = size;
                delete _this2._pendingRequests[page];

                if (Object.keys(_this2._pendingRequests).length === 0) {
                  _this2.loading = false;
                }

                if (page === 0 && _this2.__repositionOverlayDebouncer && items.length > (_this2.__maxRenderedItems || 0)) {
                  setTimeout(function () {
                    return _this2.__repositionOverlayDebouncer.flush();
                  });
                  _this2.__maxRenderedItems = items.length;
                }
              }
            };

            this._pendingRequests[page] = callback;
            this.dataProvider(params, callback);
          }
        }
      }, {
        key: "_getPageForIndex",
        value: function _getPageForIndex(index) {
          return Math.floor(index / this.pageSize);
        }
        /**
         * Clears the cached pages and reloads data from dataprovider when needed.
         */

      }, {
        key: "clearCache",
        value: function clearCache() {
          if (!this.dataProvider) {
            return;
          }

          this._pendingRequests = {};
          var filteredItems = [];

          for (var i = 0; i < (this.size || 0); i++) {
            filteredItems.push(this.__placeHolder);
          }

          this.filteredItems = filteredItems;

          if (this.opened) {
            this._loadPage(0);
          } else {
            this._forceNextRequest = true;
          }
        }
      }, {
        key: "_sizeChanged",
        value: function _sizeChanged() {
          var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var filteredItems = (this.filteredItems || []).slice(0, size);

          for (var i = 0; i < size; i++) {
            filteredItems[i] = filteredItems[i] !== undefined ? filteredItems[i] : this.__placeHolder;
          }

          this.filteredItems = filteredItems;
        }
      }, {
        key: "_pageSizeChanged",
        value: function _pageSizeChanged(pageSize, oldPageSize) {
          if (Math.floor(pageSize) !== pageSize || pageSize === 0) {
            this.pageSize = oldPageSize;
            throw new Error('`pageSize` value must be an integer > 0');
          }

          this.clearCache();
        }
      }, {
        key: "_dataProviderChanged",
        value: function _dataProviderChanged(dataProvider, oldDataProvider) {
          var _this3 = this;

          this._ensureItemsOrDataProvider(function () {
            _this3.dataProvider = oldDataProvider;
          });
        }
      }, {
        key: "_ensureItemsOrDataProvider",
        value: function _ensureItemsOrDataProvider(restoreOldValueCallback) {
          if (this.items !== undefined && this.dataProvider !== undefined) {
            restoreOldValueCallback();
            throw new Error('Using `items` and `dataProvider` together is not supported');
          } else if (this.dataProvider && !this.filteredItems) {
            this.filteredItems = [];
          }
        }
      }, {
        key: "_warnDataProviderValue",
        value: function _warnDataProviderValue(dataProvider, value) {
          if (dataProvider && value !== '' && (this.selectedItem === undefined || this.selectedItem === null)) {
            var valueIndex = this._indexOfValue(value, this.filteredItems);

            if (valueIndex < 0 || !this._getItemLabel(this.filteredItems[valueIndex])) {
              /* eslint-disable no-console */
              console.warn('Warning: unable to determine the label for the provided `value`. ' + 'Nothing to display in the text field. This usually happens when ' + 'setting an initial `value` before any items are returned from ' + 'the `dataProvider` callback. Consider setting `selectedItem` ' + 'instead of `value`');
              /* eslint-enable no-console */
            }
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Number of items fetched at a time from the dataprovider.
             */
            pageSize: {
              type: Number,
              value: 50,
              observer: '_pageSizeChanged'
            },

            /**
             * Total number of items.
             */
            size: {
              type: Number,
              observer: '_sizeChanged'
            },

            /**
             * Function that provides items lazily. Receives arguments `params`, `callback`
             *
             * `params.page` Requested page index
             *
             * `params.pageSize` Current page size
             *
             * `params.filter` Currently applied filter
             *
             * `callback(items, size)` Callback function with arguments:
             *   - `items` Current page of items
             *   - `size` Total number of items.
             */
            dataProvider: {
              type: Object,
              observer: '_dataProviderChanged'
            },
            _pendingRequests: {
              value: function value() {
                return {};
              }
            },
            __placeHolder: {
              value: new _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"]()
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_dataProviderFilterChanged(filter, dataProvider)', '_dataProviderClearFilter(dataProvider, opened, value)', '_warnDataProviderValue(dataProvider, value)', '_ensureFirstPage(opened)'];
        }
      }]);

      return DataProviderMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_list_iron_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-list/iron-list.js */ "./node_modules/@polymer/iron-list/iron-list.js");
/* harmony import */ var _vaadin_combo_box_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-combo-box-item.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js");
/* harmony import */ var _vaadin_combo_box_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role$=\"[[_getAriaRole(index)]]\" aria-selected$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"], ["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role\\$=\"[[_getAriaRole(index)]]\" aria-selected\\$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme\\$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







var TOUCH_DEVICE = function () {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}();
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */


var ComboBoxDropdownWrapperElement =
/*#__PURE__*/
function (_ref) {
  _inherits(ComboBoxDropdownWrapperElement, _ref);

  function ComboBoxDropdownWrapperElement() {
    _classCallCheck(this, ComboBoxDropdownWrapperElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownWrapperElement).apply(this, arguments));
  }

  _createClass(ComboBoxDropdownWrapperElement, [{
    key: "_fireTouchAction",
    value: function _fireTouchAction(sourceEvent) {
      this.dispatchEvent(new CustomEvent('vaadin-overlay-touch-action', {
        detail: {
          sourceEvent: sourceEvent
        }
      }));
    }
  }, {
    key: "_getItems",
    value: function _getItems(opened, items) {
      return opened ? items : [];
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, items, loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        if (!opened) {
          return;
        } else {
          this._initDropdown();
        }
      } // Do not attach if no items
      // Do not dettach if opened but user types an invalid search


      this.$.dropdown.opened = !!(opened && (loading || this.$.dropdown.opened || items && items.length));
    }
  }, {
    key: "_initDropdown",
    value: function _initDropdown() {
      var _this = this;

      this.$.dropdown.removeAttribute('disable-upgrade');

      this._templateChanged();

      this._loadingChanged(this.loading);

      this.$.dropdown.$.overlay.addEventListener('touchend', function (e) {
        return _this._fireTouchAction(e);
      });
      this.$.dropdown.$.overlay.addEventListener('touchmove', function (e) {
        return _this._fireTouchAction(e);
      }); // Prevent blurring the input when clicking inside the overlay.

      this.$.dropdown.$.overlay.addEventListener('mousedown', function (e) {
        return e.preventDefault();
      }); // IE11: when scrolling with mouse, the focus goes to the scroller.
      // This causes the overlay closing due to defocusing the input field.
      // Prevent focusing the scroller by setting `unselectable="on"`.

      if (/Trident/.test(navigator.userAgent)) {
        this._scroller.setAttribute('unselectable', 'on');
      }
    }
  }, {
    key: "_templateChanged",
    value: function _templateChanged(e) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      this._selector = this.$.dropdown.$.overlay.content.querySelector('#selector');
      this._scroller = this.$.dropdown.$.overlay.content.querySelector('#scroller');
    }
  }, {
    key: "_loadingChanged",
    value: function _loadingChanged(loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      if (loading) {
        this.$.dropdown.$.overlay.setAttribute('loading', '');
      } else {
        this.$.dropdown.$.overlay.removeAttribute('loading');
      }
    }
  }, {
    key: "_selectorChanged",
    value: function _selectorChanged(selector) {
      this._patchWheelOverScrolling();
    }
  }, {
    key: "_setOverlayHeight",
    value: function _setOverlayHeight() {
      if (!this.opened || !this.positionTarget || !this._selector) {
        return;
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this._scroller.style.maxHeight = (window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-combo-box-overlay-max-height') : getComputedStyle(this).getPropertyValue('--vaadin-combo-box-overlay-max-height')) || '65vh';

      var maxHeight = this._maxOverlayHeight(targetRect); // overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.


      this.$.dropdown.$.overlay.style.maxHeight = maxHeight; // we need to set height for iron-list to make its `firstVisibleIndex` work correctly.

      this._selector.style.maxHeight = maxHeight;
      this.updateViewportBoundaries();
    }
  }, {
    key: "_maxOverlayHeight",
    value: function _maxOverlayHeight(targetRect) {
      var margin = 8;
      var minHeight = 116; // Height of two items in combo-box

      var bottom = Math.min(window.innerHeight, document.body.scrollHeight - document.body.scrollTop);

      if (this.$.dropdown.alignedAbove) {
        return Math.max(targetRect.top - margin + Math.min(document.body.scrollTop, 0), minHeight) + 'px';
      } else {
        return Math.max(bottom - targetRect.bottom - margin, minHeight) + 'px';
      }
    }
  }, {
    key: "_getFocusedItem",
    value: function _getFocusedItem(focusedIndex) {
      if (focusedIndex >= 0) {
        return this._items[focusedIndex];
      }
    }
  }, {
    key: "_isItemSelected",
    value: function _isItemSelected(item, selectedItem, itemIdPath) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"]) {
        return false;
      } else if (itemIdPath && item !== undefined && selectedItem !== undefined) {
        return this.get(itemIdPath, item) === this.get(itemIdPath, selectedItem);
      } else {
        return item === selectedItem;
      }
    }
  }, {
    key: "_onItemClick",
    value: function _onItemClick(e) {
      if (e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation) {
        this._stopPropagation(e.detail.sourceEvent);
      }

      this.dispatchEvent(new CustomEvent('selection-changed', {
        detail: {
          item: e.model.item
        }
      }));
    }
    /**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */

  }, {
    key: "indexOfLabel",
    value: function indexOfLabel(label) {
      if (this._items && label) {
        for (var i = 0; i < this._items.length; i++) {
          if (this.getItemLabel(this._items[i]).toString().toLowerCase() === label.toString().toLowerCase()) {
            return i;
          }
        }
      }

      return -1;
    }
    /**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */

  }, {
    key: "__requestItemByIndex",
    value: function __requestItemByIndex(item, index) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"] && index !== undefined) {
        this.dispatchEvent(new CustomEvent('index-requested', {
          detail: {
            index: index
          }
        }));
      }

      return index;
    }
    /**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */

  }, {
    key: "getItemLabel",
    value: function getItemLabel(item, itemLabelPath) {
      itemLabelPath = itemLabelPath || this._itemLabelPath;
      var label = item && itemLabelPath ? this.get(itemLabelPath, item) : undefined;

      if (label === undefined || label === null) {
        label = item ? item.toString() : '';
      }

      return label;
    }
  }, {
    key: "_isItemFocused",
    value: function _isItemFocused(focusedIndex, itemIndex) {
      return focusedIndex == itemIndex;
    }
  }, {
    key: "_getAriaSelected",
    value: function _getAriaSelected(focusedIndex, itemIndex) {
      return this._isItemFocused(focusedIndex, itemIndex).toString();
    }
  }, {
    key: "_getAriaRole",
    value: function _getAriaRole(itemIndex) {
      return itemIndex !== undefined ? 'option' : false;
    }
  }, {
    key: "_focusedIndexChanged",
    value: function _focusedIndexChanged(index) {
      if (index >= 0) {
        this._scrollIntoView(index);
      }
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(index) {
      if (!(this.opened && index >= 0)) {
        return;
      }

      var visibleItemsCount = this._visibleItemsCount();

      if (visibleItemsCount === undefined) {
        // Scroller is not visible. Moving is unnecessary.
        return;
      }

      var targetIndex = index;

      if (index > this._selector.lastVisibleIndex - 1) {
        // Index is below the bottom, scrolling down. Make the item appear at the bottom.
        // First scroll to target (will be at the top of the scroller) to make sure it's rendered.
        this._selector.scrollToIndex(index); // Then calculate the index for the following scroll (to get the target to bottom of the scroller).


        targetIndex = index - visibleItemsCount + 1;
      } else if (index > this._selector.firstVisibleIndex) {
        // The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
        // the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
        targetIndex = this._selector.firstVisibleIndex;
      }

      this._selector.scrollToIndex(Math.max(0, targetIndex)); // Sometimes the item is partly below the bottom edge, detect and adjust.


      var pidx = this._selector._getPhysicalIndex(index),
          physicalItem = this._selector._physicalItems[pidx];

      if (!physicalItem) {
        return;
      }

      var physicalItemRect = physicalItem.getBoundingClientRect(),
          scrollerRect = this._scroller.getBoundingClientRect(),
          scrollTopAdjust = physicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;

      if (scrollTopAdjust > 0) {
        this._scroller.scrollTop += scrollTopAdjust;
      }
    }
  }, {
    key: "ensureItemsRendered",
    value: function ensureItemsRendered() {
      this._selector._render();
    }
  }, {
    key: "adjustScrollPosition",
    value: function adjustScrollPosition() {
      if (this.opened && this._items) {
        this._scrollIntoView(this._focusedIndex);
      }
    }
    /**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */

  }, {
    key: "_patchWheelOverScrolling",
    value: function _patchWheelOverScrolling() {
      var selector = this._selector;
      selector.addEventListener('wheel', function (e) {
        var scroller = selector._scroller || selector.scrollTarget;
        var scrolledToTop = scroller.scrollTop === 0;
        var scrolledToBottom = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 1;

        if (scrolledToTop && e.deltaY < 0) {
          e.preventDefault();
        } else if (scrolledToBottom && e.deltaY > 0) {
          e.preventDefault();
        }
      });
    }
  }, {
    key: "updateViewportBoundaries",
    value: function updateViewportBoundaries() {
      this._cachedViewportTotalPaddingBottom = undefined;

      this._selector.updateViewportBoundaries();
    }
  }, {
    key: "_visibleItemsCount",
    value: function _visibleItemsCount() {
      if (!this._selector) {
        return;
      } // Ensure items are rendered


      this._selector.flushDebouncer('_debounceTemplate'); // Ensure items are positioned


      this._selector.scrollToIndex(this._selector.firstVisibleIndex); // Ensure viewport boundaries are up-to-date


      this.updateViewportBoundaries();
      return this._selector.lastVisibleIndex - this._selector.firstVisibleIndex + 1;
    }
  }, {
    key: "_selectItem",
    value: function _selectItem(item) {
      item = typeof item === 'number' ? this._items[item] : item;

      if (this._selector.selectedItem !== item) {
        this._selector.selectItem(item);
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }, {
    key: "_hidden",
    value: function _hidden(itemsChange) {
      return !this.loading && (!this._items || !this._items.length);
    }
  }, {
    key: "_viewportTotalPaddingBottom",
    get: function get() {
      if (this._cachedViewportTotalPaddingBottom === undefined) {
        var itemsStyle = window.getComputedStyle(this._selector.$.items);
        this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map(function (v) {
          return parseInt(v, 10);
        }).reduce(function (sum, v) {
          return sum + v;
        });
      }

      return this._cachedViewportTotalPaddingBottom;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown-wrapper';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * True if the device supports touch events.
         */
        touchDevice: {
          type: Boolean,
          value: TOUCH_DEVICE
        },
        opened: Boolean,

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * `true` when new items are being loaded.
         */
        loading: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_setOverlayHeight'
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String,
        _selectedItem: {
          type: Object
        },
        _items: {
          type: Object
        },
        _focusedIndex: {
          type: Number,
          value: -1,
          observer: '_focusedIndexChanged'
        },
        _focusedItem: {
          type: String,
          computed: '_getFocusedItem(_focusedIndex)'
        },
        _itemLabelPath: {
          type: String,
          value: 'label'
        },
        _itemValuePath: {
          type: String,
          value: 'value'
        },
        _selector: Object,
        _itemIdPath: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_selectorChanged(_selector)', '_loadingChanged(loading)', '_openedChanged(opened, _items, loading)'];
    }
  }]);

  return ComboBoxDropdownWrapperElement;
}(
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(_class, _PolymerElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  return _class;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxDropdownWrapperElement.is, ComboBoxDropdownWrapperElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden\\$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme\\$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxOverlayElement =
/*#__PURE__*/
function (_OverlayElement) {
  _inherits(ComboBoxOverlayElement, _OverlayElement);

  function ComboBoxOverlayElement() {
    _classCallCheck(this, ComboBoxOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxOverlayElement).apply(this, arguments));
  }

  _createClass(ComboBoxOverlayElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxOverlayElement.prototype), "ready", this).call(this);

      var loader = document.createElement('div');
      loader.setAttribute('part', 'loader');
      var content = this.shadowRoot.querySelector(['[part~="content"]']);
      content.parentNode.insertBefore(loader, content);
    }
  }], [{
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-overlay';
    }
  }]);

  return ComboBoxOverlayElement;
}(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__["OverlayElement"]);

customElements.define(ComboBoxOverlayElement.is, ComboBoxOverlayElement);
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxDropdownElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(ComboBoxDropdownElement, _DisableUpgradeMixin);

  _createClass(ComboBoxDropdownElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          observer: '_openedChanged'
        },
        template: {
          type: Object,
          notify: true
        },

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * If `true`, overlay is aligned above the `positionTarget`
         */
        alignedAbove: {
          type: Boolean,
          value: false
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String
      };
    }
  }]);

  function ComboBoxDropdownElement() {
    var _this;

    _classCallCheck(this, ComboBoxDropdownElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownElement).call(this));
    _this._boundSetPosition = _this._setPosition.bind(_assertThisInitialized(_this));
    _this._boundOutsideClickListener = _this._outsideClickListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxDropdownElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "connectedCallback", this).call(this);

      this.addEventListener('iron-resize', this._boundSetPosition);
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "ready", this).call(this); // Preventing the default modal behaviour of the overlay on input clicking


      this.$.overlay.addEventListener('vaadin-overlay-outside-click', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "disconnectedCallback", this).call(this);

      this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the overlay is closed and removed from DOM after detaching the dropdown.

      this.opened = false;
    }
  }, {
    key: "notifyResize",
    value: function notifyResize() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "notifyResize", this).call(this);

      if (this.positionTarget && this.opened) {
        this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


        requestAnimationFrame(this._setPosition.bind(this));
      }
    }
    /**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */

    /**
     * Fired after the `vaadin-combo-box-dropdown` closes.
     *
     * @event vaadin-combo-box-dropdown-closed
     */

  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, oldValue) {
      if (!!opened === !!oldValue) {
        return;
      }

      if (opened) {
        this.$.overlay.style.position = this._isPositionFixed(this.positionTarget) ? 'fixed' : 'absolute';

        this._setPosition();

        window.addEventListener('scroll', this._boundSetPosition, true);
        document.addEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened', {
          bubbles: true,
          composed: true
        }));
      } else {
        window.removeEventListener('scroll', this._boundSetPosition, true);
        document.removeEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed', {
          bubbles: true,
          composed: true
        }));
      }
    } // We need to listen on 'click' event and capture it and close the overlay before
    // propagating the event to the listener in the button. Otherwise, if the clicked button would call
    // open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4

  }, {
    key: "_outsideClickListener",
    value: function _outsideClickListener(event) {
      var eventPath = event.composedPath();

      if (eventPath.indexOf(this.positionTarget) < 0 && eventPath.indexOf(this.$.overlay) < 0) {
        this.opened = false;
      }
    }
  }, {
    key: "_isPositionFixed",
    value: function _isPositionFixed(element) {
      var offsetParent = this._getOffsetParent(element);

      return window.getComputedStyle(element).position === 'fixed' || offsetParent && this._isPositionFixed(offsetParent);
    }
  }, {
    key: "_getOffsetParent",
    value: function _getOffsetParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot.parentElement;
      } else if (element.parentElement) {
        return element.offsetParent;
      }

      var parent = element.parentNode;

      if (parent && parent.nodeType === 11 && parent.host) {
        return parent.host; // parent is #shadowRoot
      }
    }
  }, {
    key: "_verticalOffset",
    value: function _verticalOffset(overlayRect, targetRect) {
      return this.alignedAbove ? -overlayRect.height : targetRect.height;
    }
  }, {
    key: "_shouldAlignAbove",
    value: function _shouldAlignAbove(targetRect) {
      var spaceBelow = (window.innerHeight - targetRect.bottom - Math.min(document.body.scrollTop, 0)) / window.innerHeight;
      return spaceBelow < 0.30;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition(e) {
      if (this.hidden) {
        return;
      }

      if (e && e.target) {
        var target = e.target === document ? document.body : e.target;
        var parent = this.$.overlay.parentElement;

        if (!(target.contains(this.$.overlay) || target.contains(this.positionTarget)) || parent !== document.body) {
          return;
        }
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this.alignedAbove = this._shouldAlignAbove(targetRect);
      var overlayRect = this.$.overlay.getBoundingClientRect();
      this._translateX = targetRect.left - overlayRect.left + (this._translateX || 0);
      this._translateY = targetRect.top - overlayRect.top + (this._translateY || 0) + this._verticalOffset(overlayRect, targetRect);

      var _devicePixelRatio = window.devicePixelRatio || 1;

      this._translateX = Math.round(this._translateX * _devicePixelRatio) / _devicePixelRatio;
      this._translateY = Math.round(this._translateY * _devicePixelRatio) / _devicePixelRatio;
      this.$.overlay.style.transform = "translate3d(".concat(this._translateX, "px, ").concat(this._translateY, "px, 0)");
      this.$.overlay.style.width = this.positionTarget.clientWidth + 'px';
      this.$.overlay.style.justifyContent = this.alignedAbove ? 'flex-end' : 'flex-start'; // TODO: fire only when position actually changes changes

      this.dispatchEvent(new CustomEvent('position-changed'));
    }
  }]);

  return ComboBoxDropdownElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__["mixinBehaviors"])(_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronResizableBehavior"], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ComboBoxDropdownElement.is, ComboBoxDropdownElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part=\"content\" id=\"content\"></div>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * The default element used for items in the vaadin-combo-box.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the item label or template content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `selected` | Set when the item is selected | :host
 * `focused` | Set when the item is focused | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @private
 */

var ComboBoxItemElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(ComboBoxItemElement, _ThemableMixin);

  function ComboBoxItemElement() {
    _classCallCheck(this, ComboBoxItemElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxItemElement).apply(this, arguments));
  }

  _createClass(ComboBoxItemElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxItemElement.prototype), "connectedCallback", this).call(this);

      if (!this._itemTemplateInstance) {
        // 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
        var overlay = this.getRootNode().host.getRootNode().host;
        var dropdown = overlay.__dataHost;
        var comboBoxOverlay = dropdown.getRootNode().host;
        this._comboBox = comboBoxOverlay.getRootNode().host;

        this._comboBox._ensureTemplatized();

        if (this._comboBox._TemplateClass) {
          this._itemTemplateInstance = new this._comboBox._TemplateClass({});
          this.$.content.textContent = '';
          this.$.content.appendChild(this._itemTemplateInstance.root);
        }
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.renderer) {
        return;
      }

      var model = {
        index: this.index,
        item: this.item
      };
      this.renderer(this.$.content, this._comboBox, model);
    }
  }, {
    key: "_rendererOrItemChanged",
    value: function _rendererOrItemChanged(renderer, index, item) {
      if (item === undefined || index === undefined) {
        return;
      }

      if (this._oldRenderer !== renderer) {
        this.$.content.innerHTML = '';
      }

      if (renderer) {
        this._oldRenderer = renderer;

        this._render();
      }
    }
  }, {
    key: "_updateLabel",
    value: function _updateLabel(label, _itemTemplateInstance) {
      if (_itemTemplateInstance === undefined && this.$.content && !this.renderer) {
        // Only set label to textContent no template
        this.$.content.textContent = label;
      }
    }
  }, {
    key: "_updateTemplateInstanceVariable",
    value: function _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
      if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
        return;
      }

      _itemTemplateInstance[variable] = value;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-item';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The index of the item
         */
        index: Number,

        /**
         * The item to render
         * @type {(String|Object)}
         */
        item: Object,

        /**
         * The text label corresponding to the item
         */
        label: String,

        /**
         * True when item is selected
         */
        selected: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * True when item is focused
         */
        focused: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * The template instance corresponding to the item
         */
        _itemTemplateInstance: Object,

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * Saved instance of a custom renderer function.
         */
        _oldRenderer: Function
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_rendererOrItemChanged(renderer, index, item.*)', '_updateLabel(label, _itemTemplateInstance)', '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)', '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)', '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)'];
    }
  }]);

  return ComboBoxItemElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxItemElement.is, ComboBoxItemElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxLightElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxLightElement", function() { return ComboBoxLightElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js");
/* harmony import */ var _vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-data-provider-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js");
/* harmony import */ var _vaadin_combo_box_dropdown_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-wrapper.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host([opened]) {\n        pointer-events: auto;\n      }\n    </style>\n\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id=\"overlay\" opened=\"[[opened]]\" position-target=\"[[inputElement]]\" renderer=\"[[renderer]]\" _focused-index=\"[[_focusedIndex]]\" _item-id-path=\"[[itemIdPath]]\" _item-label-path=\"[[itemLabelPath]]\" loading=\"[[loading]]\" theme=\"[[theme]]\">\n    </vaadin-combo-box-dropdown-wrapper>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * `<vaadin-combo-box-light>` is a customizable version of the `<vaadin-combo-box>` providing
 * only the dropdown functionality and leaving the input field definition to the user.
 *
 * The element has the same API as `<vaadin-combo-box>`.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `value` by default. See the example below for a simplest possible example
 * using a `<vaadin-text-field>` element.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <vaadin-text-field>
 *   </vaadin-text-field>
 * </vaadin-combo-box-light>
 * ```
 *
 * If you are using other custom input fields like `<iron-input>`, you
 * need to define the name of the bindable property with the `attrForValue` attribute.
 *
 * ```html
 * <vaadin-combo-box-light attr-for-value="bind-value">
 *   <iron-input>
 *     <input>
 *   </iron-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * In the next example you can see how to create a custom input field based
 * on a `<paper-input>` decorated with a custom `<iron-icon>` and
 * two `<paper-button>`s to act as the clear and toggle controls.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <paper-input label="Elements" class="input">
 *     <iron-icon icon="toll" slot="prefix"></iron-icon>
 *     <paper-button slot="suffix" class="clear-button">Clear</paper-button>
 *     <paper-button slot="suffix" class="toggle-button">Toggle</paper-button>
 *   </paper-input>
 * </vaadin-combo-box-light>
 * ```
 * @memberof Vaadin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

var ComboBoxLightElement =
/*#__PURE__*/
function (_ThemePropertyMixin) {
  _inherits(ComboBoxLightElement, _ThemePropertyMixin);

  _createClass(ComboBoxLightElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-light';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Name of the two-way data-bindable property representing the
         * value of the custom input field.
         */
        attrForValue: {
          type: String,
          value: 'value'
        },
        inputElement: {
          type: Element,
          readOnly: true
        }
      };
    }
  }]);

  function ComboBoxLightElement() {
    var _this;

    _classCallCheck(this, ComboBoxLightElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxLightElement).call(this));
    _this._boundInputValueChanged = _this._inputValueChanged.bind(_assertThisInitialized(_this));
    _this.__boundInputValueCommitted = _this.__inputValueCommitted.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxLightElement, [{
    key: "ready",
    value: function ready() {
      var _this2 = this;

      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "ready", this).call(this);

      this._toggleElement = this.querySelector('.toggle-button');
      this._clearElement = this.querySelector('.clear-button');

      if (this._clearElement) {
        this._clearElement.addEventListener('mousedown', function (e) {
          e.preventDefault(); // Prevent native focus changes
          // _focusableElement is needed for paper-input

          (_this2.inputElement._focusableElement || _this2.inputElement).focus();
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "connectedCallback", this).call(this);

      var cssSelector = 'vaadin-text-field,iron-input,paper-input,.paper-input-input,.input';

      this._setInputElement(this.querySelector(cssSelector));

      this._revertInputValue();

      this.inputElement.addEventListener('input', this._boundInputValueChanged);
      this.inputElement.addEventListener('change', this.__boundInputValueCommitted);

      this._preventInputBlur();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "disconnectedCallback", this).call(this);

      this.inputElement.removeEventListener('input', this._boundInputValueChanged);
      this.inputElement.removeEventListener('change', this.__boundInputValueCommitted);

      this._restoreInputBlur();
    }
  }, {
    key: "__inputValueCommitted",
    value: function __inputValueCommitted(e) {
      // Detect if the input was cleared (by clicking the clear button on a vaadin-text-field)
      // and propagate the value change to combo box value immediately.
      if (e.__fromClearButton) {
        this._clear();
      }
    }
  }, {
    key: "focused",
    get: function get() {
      return this.getRootNode().activeElement === this.inputElement;
    }
  }, {
    key: "_propertyForValue",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__["dashToCamelCase"])(this.attrForValue);
    }
  }, {
    key: "_inputElementValue",
    get: function get() {
      return this.inputElement && this.inputElement[this._propertyForValue];
    },
    set: function set(value) {
      if (this.inputElement) {
        this.inputElement[this._propertyForValue] = value;
      }
    }
  }]);

  return ComboBoxLightElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemePropertyMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxDataProviderMixin"])(Object(_vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ComboBoxMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ComboBoxLightElement.is, ComboBoxLightElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxMixin", function() { return ComboBoxMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * @polymerMixin
 */

var ComboBoxMixin = function ComboBoxMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_subclass) {
      _inherits(VaadinComboBoxMixinElement, _subclass);

      function VaadinComboBoxMixinElement() {
        _classCallCheck(this, VaadinComboBoxMixinElement);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinComboBoxMixinElement).apply(this, arguments));
      }

      _createClass(VaadinComboBoxMixinElement, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinComboBoxMixinElement.prototype), "ready", this).call(this);

          this.addEventListener('focusout', function (e) {
            // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
            var dropdown = _this.$.overlay.$.dropdown;

            if (dropdown && dropdown.$ && e.relatedTarget === dropdown.$.overlay) {
              e.composedPath()[0].focus();
              return;
            }

            if (!_this._closeOnBlurIsPrevented) {
              _this.close();
            }
          });
          this._lastCommittedValue = this.value;
          _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

          this.$.overlay.addEventListener('selection-changed', this._overlaySelectedItemChanged.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-closed', this.close.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-opened', this._onOpened.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          this.addEventListener('click', this._onClick.bind(this));
          this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._onOverlayTouchAction.bind(this));
          this.addEventListener('touchend', function (e) {
            if (!_this._clearElement || e.composedPath()[0] !== _this._clearElement) {
              return;
            }

            e.preventDefault();

            _this._clear();
          });
          this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__["FlattenedNodesObserver"](this, function (info) {
            _this._setTemplateFromNodes(info.addedNodes);
          });
        }
        /**
         * Manually invoke existing renderer.
         */

      }, {
        key: "render",
        value: function render() {
          if (this.$.overlay._selector) {
            this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item').forEach(function (item) {
              return item._render();
            });
          }
        }
      }, {
        key: "_setTemplateFromNodes",
        value: function _setTemplateFromNodes(nodes) {
          this._itemTemplate = nodes.filter(function (node) {
            return node.localName && node.localName === 'template';
          })[0] || this._itemTemplate;
        }
      }, {
        key: "_removeNewRendererOrTemplate",
        value: function _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
          if (template !== oldTemplate) {
            this._itemTemplate = undefined;
          } else if (renderer !== oldRenderer) {
            this.renderer = undefined;
          }
        }
      }, {
        key: "_templateOrRendererChanged",
        value: function _templateOrRendererChanged(template, renderer) {
          if (template && renderer) {
            this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

            throw new Error('You should only use either a renderer or a template for combo box items');
          }

          this._oldTemplate = template;
          this._oldRenderer = renderer;
        }
        /**
         * Opens the dropdown list.
         */

      }, {
        key: "open",
        value: function open() {
          // Prevent _open() being called when input is disabled or read-only
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
        /**
         * Closes the dropdown list.
         */

      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(value, old) {
          // Prevent _close() being called when opened is set to its default value (false).
          if (old === undefined) {
            return;
          }

          if (this.opened) {
            this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.

            if (!this.hasAttribute('focused') && !this.$.overlay.touchDevice) {
              this.focus();
            }
          } else {
            this._onClosed();

            if (this._openedWithFocusRing && this.hasAttribute('focused')) {
              this.focusElement.setAttribute('focus-ring', '');
            }
          }
        }
      }, {
        key: "_onOverlayTouchAction",
        value: function _onOverlayTouchAction(event) {
          // On touch devices, blur the input on touch start inside the overlay, in order to hide
          // the virtual keyboard. But don't close the overlay on this blur.
          this._closeOnBlurIsPrevented = true;
          this.inputElement.blur();
          this._closeOnBlurIsPrevented = false;
        }
      }, {
        key: "_onClick",
        value: function _onClick(e) {
          this._closeOnBlurIsPrevented = true;
          var path = e.composedPath();
          var isClearElement = path.indexOf(this._clearElement) !== -1 || path[0].getAttribute('part') === 'clear-button';

          if (isClearElement) {
            this._clear();

            this.focus();
          } else if (path.indexOf(this.inputElement) !== -1) {
            if (path.indexOf(this._toggleElement) > -1 && this.opened) {
              this.close();
            } else {
              this.open();
            }
          }

          this._closeOnBlurIsPrevented = false;
        }
        /**
         * Keyboard navigation
         */

      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (this._isEventKey(e, 'down')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowDown();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'up')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowUp();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'enter')) {
            this._onEnter(e);
          } else if (this._isEventKey(e, 'esc')) {
            this._onEscape(e);
          }
        }
      }, {
        key: "_isEventKey",
        value: function _isEventKey(e, k) {
          return _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k);
        }
      }, {
        key: "_getItemLabel",
        value: function _getItemLabel(item) {
          return this.$.overlay.getItemLabel(item);
        }
      }, {
        key: "_getItemValue",
        value: function _getItemValue(item) {
          var value = item && this.itemValuePath ? this.get(this.itemValuePath, item) : undefined;

          if (value === undefined) {
            value = item ? item.toString() : '';
          }

          return value;
        }
      }, {
        key: "_onArrowDown",
        value: function _onArrowDown() {
          if (this.opened) {
            if (this.$.overlay._items) {
              this._focusedIndex = Math.min(this.$.overlay._items.length - 1, this._focusedIndex + 1);

              this._prefillFocusedItemLabel();
            }
          } else {
            this.open();
          }
        }
      }, {
        key: "_onArrowUp",
        value: function _onArrowUp() {
          if (this.opened) {
            if (this._focusedIndex > -1) {
              this._focusedIndex = Math.max(0, this._focusedIndex - 1);
            } else {
              if (this.$.overlay._items) {
                this._focusedIndex = this.$.overlay._items.length - 1;
              }
            }

            this._prefillFocusedItemLabel();
          } else {
            this.open();
          }
        }
      }, {
        key: "_prefillFocusedItemLabel",
        value: function _prefillFocusedItemLabel() {
          var _this2 = this;

          if (this._focusedIndex > -1) {
            // Reset the input value asyncronously to prevent partial value changes
            // announce. Makes OSX VoiceOver to announce the complete value instead.
            this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

            setTimeout(function () {
              _this2._inputElementValue = _this2._getItemLabel(_this2.$.overlay._focusedItem);

              _this2._markAllSelectionRange();
            }, 1);
          }
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(start, end) {
          // vaadin-text-field does not implement setSelectionRange, hence we need the native input
          var input = this._nativeInput || this.inputElement; // Setting selection range focuses and/or moves the caret in some browsers,
          // and there's no need to modify the selection range if the input isn't focused anyway.
          // This affects Safari. When the overlay is open, and then hiting tab, browser should focus
          // the next focusable element instead of the combo-box itself.
          // Checking the focused property here is enough instead of checking the activeElement.

          if (this.hasAttribute('focused') && input && input.setSelectionRange) {
            try {
              input.setSelectionRange(start, end);
            } catch (ignore) {// IE11 randomly fails when running tests in Sauce.
            }
          }
        }
      }, {
        key: "_markAllSelectionRange",
        value: function _markAllSelectionRange() {
          if (this._inputElementValue !== undefined) {
            this._setSelectionRange(0, this._inputElementValue.length);
          }
        }
      }, {
        key: "_clearSelectionRange",
        value: function _clearSelectionRange() {
          if (this._inputElementValue !== undefined) {
            var pos = this._inputElementValue ? this._inputElementValue.length : 0;

            this._setSelectionRange(pos, pos);
          }
        }
      }, {
        key: "_onEnter",
        value: function _onEnter(e) {
          // should close on enter when custom values are allowed, input field is cleared, or when an existing
          // item is focused with keyboard.
          if (this.opened && (this.allowCustomValue || this._inputElementValue === '' || this._focusedIndex > -1)) {
            this.close(); // Do not submit the surrounding form.

            e.preventDefault(); // Do not trigger global listeners

            e.stopPropagation();
          }
        }
      }, {
        key: "_onEscape",
        value: function _onEscape(e) {
          if (this.opened) {
            this._stopPropagation(e);

            if (this._focusedIndex > -1) {
              this._focusedIndex = -1;

              this._revertInputValue();
            } else {
              this.cancel();
            }
          }
        }
      }, {
        key: "_toggleElementChanged",
        value: function _toggleElementChanged(toggleElement) {
          var _this3 = this;

          if (toggleElement) {
            // Don't blur the input on toggle mousedown
            toggleElement.addEventListener('mousedown', function (e) {
              return e.preventDefault();
            }); // Unfocus previously focused element if focus is not inside combo box (on touch devices)

            toggleElement.addEventListener('click', function (e) {
              if (_this3.$.overlay.touchDevice && !_this3.hasAttribute('focused')) {
                document.activeElement.blur();
              }
            });
          }
        }
        /**
         * Clears the current value.
         */

      }, {
        key: "_clear",
        value: function _clear() {
          this.selectedItem = null;

          if (this.allowCustomValue) {
            this.value = '';
          }

          this._detectAndDispatchChange();
        }
        /**
         * Reverts back to original value.
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this._revertInputValueToValue(); // In the next _detectAndDispatchChange() call, the change detection should not pass


          this._lastCommittedValue = this.value;
          this.close();
        }
      }, {
        key: "_onOpened",
        value: function _onOpened() {
          var _this4 = this;

          // Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
          // we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
          // because that will cause problems to say the least.
          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])(); // With iron-list v1.3.9, calling `notifyResize()` no longer renders
          // the items synchronously. It is required to have the items rendered
          // before we update the overlay and the list positions and sizes.

          this.$.overlay.ensureItemsRendered();

          this.$.overlay._selector.toggleScrollListener(true); // Ensure metrics are up-to-date


          this.$.overlay.updateViewportBoundaries(); // Force iron-list to create reusable nodes. Otherwise it will only start
          // doing that in scroll listener, which is especially slow in Edge.

          this.$.overlay._selector._increasePoolIfNeeded();

          setTimeout(function () {
            return _this4._resizeDropdown();
          }, 1); // Defer scroll position adjustment to prevent freeze in Edge

          window.requestAnimationFrame(function () {
            return _this4.$.overlay.adjustScrollPosition();
          }); // _detectAndDispatchChange() should not consider value changes done before opening

          this._lastCommittedValue = this.value;
        }
      }, {
        key: "_onClosed",
        value: function _onClosed() {
          // Happens when the overlay is closed by clicking outside
          if (this.opened) {
            this.close();
          }

          if (this.$.overlay._items && this._focusedIndex > -1) {
            var focusedItem = this.$.overlay._items[this._focusedIndex];

            if (this.selectedItem !== focusedItem) {
              this.selectedItem = focusedItem;
            } // make sure input field is updated in case value doesn't change (i.e. FOO -> foo)


            this._inputElementValue = this._getItemLabel(this.selectedItem);
          } else if (this._inputElementValue === '' || this._inputElementValue === undefined) {
            this.selectedItem = null;

            if (this.allowCustomValue) {
              this.value = '';
            }
          } else {
            if (this.allowCustomValue) {
              var e = new CustomEvent('custom-value-set', {
                detail: this._inputElementValue,
                composed: true,
                cancelable: true,
                bubbles: true
              });
              this.dispatchEvent(e);

              if (!e.defaultPrevented) {
                var customValue = this._inputElementValue;

                this._selectItemForValue(customValue);

                this.value = customValue;
              }
            } else {
              this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : '';
            }
          }

          this._detectAndDispatchChange();

          this._clearSelectionRange();

          if (!this.dataProvider) {
            this.filter = '';
          }
        }
      }, {
        key: "_inputValueChanged",

        /**
         *  Filtering and items handling
         */
        value: function _inputValueChanged(e) {
          // Handle only input events from our inputElement.
          if (e.composedPath().indexOf(this.inputElement) !== -1) {
            this._inputElementValue = this.inputElement[this._propertyForValue];

            this._filterFromInput(e);
          }
        }
      }, {
        key: "_filterFromInput",
        value: function _filterFromInput(e) {
          if (!this.opened && !e.__fromClearButton) {
            this.open();
          }

          if (this.filter === this._inputElementValue) {
            // Filter and input value might get out of sync, while keyboard navigating for example.
            // Afterwards, input value might be changed to the same value as used in filtering.
            // In situation like these, we need to make sure all the filter changes handlers are run.
            this._filterChanged(this.filter, this.itemValuePath, this.itemLabelPath);
          } else {
            this.filter = this._inputElementValue;
          }
        }
      }, {
        key: "_itemLabelPathChanged",
        value: function _itemLabelPathChanged(itemLabelPath, oldItemLabelPath) {
          if (typeof itemLabelPath !== 'string') {
            console.error('You should set itemLabelPath to a valid string');
          }
        }
      }, {
        key: "_filterChanged",
        value: function _filterChanged(filter, itemValuePath, itemLabelPath) {
          if (filter === undefined) {
            return;
          }

          if (this.items) {
            this.filteredItems = this._filterItems(this.items, filter);
          } else {
            // With certain use cases (e. g., external filtering), `items` are
            // undefined. Filtering is unnecessary per se, but the filteredItems
            // observer should still be invoked to update focused item.
            this._filteredItemsChanged({
              path: 'filteredItems',
              value: this.filteredItems
            }, itemValuePath, itemLabelPath);
          }
        }
      }, {
        key: "_loadingChanged",
        value: function _loadingChanged(loading) {
          if (loading) {
            this._focusedIndex = -1;
          }
        }
      }, {
        key: "_revertInputValue",
        value: function _revertInputValue() {
          if (this.filter !== '') {
            this._inputElementValue = this.filter;
          } else {
            this._revertInputValueToValue();
          }

          this._clearSelectionRange();
        }
      }, {
        key: "_revertInputValueToValue",
        value: function _revertInputValueToValue() {
          if (this.allowCustomValue && !this.selectedItem) {
            this._inputElementValue = this.value;
          } else {
            this._inputElementValue = this._getItemLabel(this.selectedItem);
          }
        }
      }, {
        key: "_resizeDropdown",
        value: function _resizeDropdown() {
          this.$.overlay.$.dropdown.notifyResize();
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(hasValue) {
          if (hasValue) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "_selectedItemChanged",
        value: function _selectedItemChanged(selectedItem, itemLabelPath) {
          if (selectedItem === null || selectedItem === undefined) {
            if (this.filteredItems) {
              if (!this.allowCustomValue) {
                this.value = '';
              }

              this._updateHasValue(this.value !== '');

              this._inputElementValue = this.value;
            }
          } else {
            var value = this._getItemValue(selectedItem);

            if (this.value !== value) {
              this.value = value;

              if (this.value !== value) {
                // The value was changed to something else in value-changed listener,
                // so prevent from resetting it to the previous value.
                return;
              }
            }

            this._updateHasValue(true);

            this._inputElementValue = this._getItemLabel(selectedItem); // Could not be defined in 1.x because ready is called after all prop-setters

            if (this.inputElement) {
              this.inputElement[this._propertyForValue] = this._inputElementValue;
            }
          }

          this.$.overlay._selectedItem = selectedItem;

          if (this.filteredItems && this.$.overlay._items) {
            this._focusedIndex = this.filteredItems.indexOf(selectedItem);
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldVal) {
          if (value === '' && oldVal === undefined) {
            // initializing, no need to do anything (#554)
            return;
          }

          if (this._isValidValue(value)) {
            var item;

            if (this._getItemValue(this.selectedItem) !== value) {
              this._selectItemForValue(value);
            } else {
              item = this.selectedItem;
            }

            if (!item && this.allowCustomValue) {
              this._inputElementValue = value;
            }

            this._updateHasValue(this.value !== '');
          } else {
            this.selectedItem = null;
          } // In the next _detectAndDispatchChange() call, the change detection should pass


          this._lastCommittedValue = undefined;
        }
      }, {
        key: "_detectAndDispatchChange",
        value: function _detectAndDispatchChange() {
          if (this.value !== this._lastCommittedValue) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
            this._lastCommittedValue = this.value;
          }
        }
      }, {
        key: "_itemsChanged",
        value: function _itemsChanged(items, oldItems) {
          var _this5 = this;

          this._ensureItemsOrDataProvider(function () {
            _this5.items = oldItems;
          });
        }
      }, {
        key: "_itemsOrPathsChanged",
        value: function _itemsOrPathsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'items' || e.path === 'items.splices') {
            this.filteredItems = this.items ? this.items.slice(0) : this.items;

            var valueIndex = this._indexOfValue(this.value, this.items);

            this._focusedIndex = valueIndex;
            var item = valueIndex > -1 && this.items[valueIndex];

            if (item) {
              this.selectedItem = item;
            }
          }
        }
      }, {
        key: "_filteredItemsChanged",
        value: function _filteredItemsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'filteredItems' || e.path === 'filteredItems.splices') {
            this._setOverlayItems(this.filteredItems);

            this._focusedIndex = this.opened ? this.$.overlay.indexOfLabel(this.filter) : this._indexOfValue(this.value, this.filteredItems);

            if (this.opened) {
              this._repositionOverlay();
            }
          }
        }
      }, {
        key: "_filterItems",
        value: function _filterItems(arr, filter) {
          var _this6 = this;

          if (!arr) {
            return arr;
          }

          return arr.filter(function (item) {
            filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

            return _this6._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
          });
        }
      }, {
        key: "_selectItemForValue",
        value: function _selectItemForValue(value) {
          var valueIndex = this._indexOfValue(value, this.filteredItems);

          var previouslySelectedItem = this.selectedItem;
          this.selectedItem = valueIndex >= 0 ? this.filteredItems[valueIndex] : this.dataProvider && this.selectedItem === undefined ? undefined : null;

          if (this.selectedItem === null && previouslySelectedItem === null) {
            this._selectedItemChanged(this.selectedItem);
          }
        }
      }, {
        key: "_setOverlayItems",
        value: function _setOverlayItems(items) {
          this.$.overlay.set('_items', items);
        }
      }, {
        key: "_repositionOverlay",
        value: function _repositionOverlay() {
          var _this7 = this;

          // async needed to reposition correctly after filtering
          // (especially when aligned on top of input)
          this.__repositionOverlayDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this.__repositionOverlayDebouncer, // Long debounce: sizing updates invoke multiple styling rounds,
          // which is very slow in Edge
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(500), function () {
            var selector = _this7.$.overlay._selector;

            if (!selector._isClientFull()) {
              // Due to the mismatch of the Y position of the item rendered
              // at the top of the scrolling list with some specific scroll
              // position values (2324, 3486, 6972, 60972, 95757 etc.)
              // iron-list loops the increasing of the pool and adds
              // too many items to the DOM.
              // Adjusting scroll position to equal the current scrollTop value
              // to avoid looping.
              selector._resetScrollPosition(selector._physicalTop);
            }

            _this7._resizeDropdown();

            _this7.$.overlay.updateViewportBoundaries();

            _this7.$.overlay.ensureItemsRendered();

            selector.notifyResize();
            Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
          });
        }
      }, {
        key: "_indexOfValue",
        value: function _indexOfValue(value, items) {
          if (items && this._isValidValue(value)) {
            for (var i = 0; i < items.length; i++) {
              if (this._getItemValue(items[i]) === value) {
                return i;
              }
            }
          }

          return -1;
        }
        /**
         * Checks if the value is supported as an item value in this control.
         *
         * @return {boolean}
         */

      }, {
        key: "_isValidValue",
        value: function _isValidValue(value) {
          return value !== undefined && value !== null;
        }
      }, {
        key: "_overlaySelectedItemChanged",
        value: function _overlaySelectedItemChanged(e) {
          // stop this private event from leaking outside.
          e.stopPropagation();

          if (e.detail.item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__["ComboBoxPlaceholder"]) {
            // Placeholder items should not be selectable.
            return;
          }

          if (this.opened) {
            this._focusedIndex = this.filteredItems.indexOf(e.detail.item);
            this.close();
          } else if (this.selectedItem !== e.detail.item) {
            this.selectedItem = e.detail.item;

            this._detectAndDispatchChange();
          }
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * You can override the `checkValidity` method for custom validations.
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.inputElement.validate) {
            return this.inputElement.validate();
          }
        }
      }, {
        key: "_ensureTemplatized",
        value: function _ensureTemplatized() {
          if (!this._TemplateClass) {
            var tpl = this._itemTemplate || this._getRootTemplate();

            if (tpl) {
              this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__["templatize"])(tpl, this, {
                instanceProps: this._instanceProps,
                forwardHostProp: function forwardHostProp(prop, value) {
                  var items = this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item');

                  Array.prototype.forEach.call(items, function (item) {
                    if (item._itemTemplateInstance) {
                      item._itemTemplateInstance.set(prop, value);

                      item._itemTemplateInstance.notifyPath(prop, value, true);
                    }
                  });
                }
              });
            }
          }
        }
      }, {
        key: "_getRootTemplate",
        value: function _getRootTemplate() {
          return Array.prototype.filter.call(this.children, function (elem) {
            return elem.tagName === 'TEMPLATE';
          })[0];
        }
      }, {
        key: "_preventInputBlur",
        value: function _preventInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.addEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.addEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_restoreInputBlur",
        value: function _restoreInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.removeEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.removeEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_preventDefault",
        value: function _preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "_stopPropagation",
        value: function _stopPropagation(e) {
          e.stopPropagation();
        }
        /**
         * Fired when the value changes.
         *
         * @event value-changed
         * @param {Object} detail
         *  @param {String} detail.value the combobox value
         */

        /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */

        /**
         * Fired when the user sets a custom value.
         * @event custom-value-set
         * @param {String} detail the custom value
         */

        /**
         * Fired when value changes.
         * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
         * @event change
         */

      }, {
        key: "_propertyForValue",
        get: function get() {
          return 'value';
        }
      }, {
        key: "_instanceProps",
        get: function get() {
          return {
            item: true,
            index: true,
            selected: true,
            focused: true
          };
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * True if the dropdown is open, false otherwise.
             */
            opened: {
              type: Boolean,
              notify: true,
              value: false,
              reflectToAttribute: true,
              observer: '_openedChanged'
            },

            /**
             * Set to true to disable this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * When present, it specifies that the element field is read-only.
             */
            readonly: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * Custom function for rendering the content of every item.
             * Receives three arguments:
             *
             * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
             * - `comboBox` The reference to the `<vaadin-combo-box>` element.
             * - `model` The object with the properties related with the rendered
             *   item, contains:
             *   - `model.index` The index of the rendered item.
             *   - `model.item` The item.
             */
            renderer: Function,

            /**
             * A full set of items to filter the visible options from.
             * The items can be of either `String` or `Object` type.
             */
            items: {
              type: Array,
              observer: '_itemsChanged'
            },

            /**
             * If `true`, the user can input a value that is not present in the items list.
             * `value` property will be set to the input value in this case.
             * Also, when `value` is set programmatically, the input value will be set
             * to reflect that value.
             */
            allowCustomValue: {
              type: Boolean,
              value: false
            },

            /**
             * A subset of items, filtered based on the user input. Filtered items
             * can be assigned directly to omit the internal filtering functionality.
             * The items can be of either `String` or `Object` type.
             */
            filteredItems: {
              type: Array
            },

            /**
             * The `String` value for the selected item of the combo box. Provides
             * the value for `iron-form`.
             *
             * When there’s no item selected, the value is an empty string.
             *
             * Use `selectedItem` property to get the raw selected item from
             * the `items` array.
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Used to detect user value changes and fire `change` events.
             */
            _lastCommittedValue: String,

            /*
             * When set to `true`, "loading" attribute is added to host and the overlay element.
             */
            loading: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            _focusedIndex: {
              type: Number,
              value: -1
            },

            /**
             * Filtering string the user has typed into the input field.
             */
            filter: {
              type: String,
              value: '',
              notify: true
            },

            /**
             * The selected item from the `items` array.
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * Path for label of the item. If `items` is an array of objects, the
             * `itemLabelPath` is used to fetch the displayed string label for each
             * item.
             *
             * The item label is also used for matching items when processing user
             * input, i.e., for filtering and selecting items.
             *
             * When using item templates, the property is still needed because it is used
             * for filtering, and for displaying the selected item value in the input box.
             */
            itemLabelPath: {
              type: String,
              value: 'label',
              observer: '_itemLabelPathChanged'
            },

            /**
             * Path for the value of the item. If `items` is an array of objects, the
             * `itemValuePath:` is used to fetch the string value for the selected
             * item.
             *
             * The item value is used in the `value` property of the combo box,
             * to provide the form value.
             */
            itemValuePath: {
              type: String,
              value: 'value'
            },

            /**
             * Path for the id of the item. If `items` is an array of objects,
             * the `itemIdPath` is used to compare and identify the same item
             * in `selectedItem` and `filteredItems` (items given by the
             * `dataProvider` callback).
             */
            itemIdPath: String,

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Set to true if the value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },
            _toggleElement: Object,
            _clearElement: Object,
            _inputElementValue: String,
            _closeOnBlurIsPrevented: Boolean,
            _previousDocumentPointerEvents: String,
            _itemTemplate: Object
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_filterChanged(filter, itemValuePath, itemLabelPath)', '_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)', '_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)', '_templateOrRendererChanged(_itemTemplate, renderer)', '_loadingChanged(loading)', '_selectedItemChanged(selectedItem, itemLabelPath)', '_toggleElementChanged(_toggleElement)'];
        }
      }]);

      return VaadinComboBoxMixinElement;
    }(subclass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js ***!
  \***********************************************************************************/
/*! exports provided: ComboBoxPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxPlaceholder", function() { return ComboBoxPlaceholder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */
var ComboBoxPlaceholder =
/*#__PURE__*/
function () {
  function ComboBoxPlaceholder() {
    _classCallCheck(this, ComboBoxPlaceholder);
  }

  _createClass(ComboBoxPlaceholder, [{
    key: "toString",
    value: function toString() {
      return '';
    }
  }]);

  return ComboBoxPlaceholder;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-combo-box-overlay\" theme-for=\"vaadin-combo-box-overlay\">\n  <template>\n    <style include=\"material-menu-overlay\">\n      :host {\n        /* TODO using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: 8px 0;\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      [part=\"overlay\"] {\n        position: relative;\n        overflow: visible;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n      }\n\n      :host([loading]) [part=\"loader\"] {\n        height: 2px;\n        position: absolute;\n        z-index: 1;\n        top: -2px;\n        left: 0;\n        right: 0;\n        background:\n          var(--material-background-color) linear-gradient(\n            90deg,\n            transparent 0%,\n            transparent 20%,\n            var(--material-primary-color) 20%,\n            var(--material-primary-color) 40%,\n            transparent 40%,\n            transparent 60%,\n            var(--material-primary-color) 60%,\n            var(--material-primary-color) 80%,\n            transparent 80%,\n            transparent 100%\n          ) 0 0 / 400% 100% repeat-x;\n        opacity: 0;\n        animation:\n          3s linear infinite material-combo-box-loader-progress,\n          .3s .1s both material-combo-box-loader-fade-in;\n      }\n\n      [part=\"loader\"]::before {\n        content: '';\n        display: block;\n        height: 100%;\n        opacity: 0.16;\n        background: var(--material-primary-color);\n      }\n\n      @keyframes material-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes material-combo-box-loader-progress {\n        0% {\n          background-position: 0 0;\n          background-size: 300% 100%;\n        }\n\n        33% {\n          background-position: -100% 0;\n          background-size: 400% 100%;\n        }\n\n        67% {\n          background-position: -200% 0;\n          background-size: 250% 100%;\n        }\n\n        100% {\n          background-position: -300% 0;\n          background-size: 300% 100%;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_item_theme_material_vaadin_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/material/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-combo-box-item\" theme-for=\"vaadin-combo-box-item\">\n  <template>\n    <style include=\"material-item\">\n      :host {\n        cursor: pointer;\n        -webkit-tap-highlight-color: transparent;\n        padding: 4px 10px;\n        min-height: 36px;\n        font-size: var(--material-small-font-size);\n        --_material-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--material-secondary-background-color);\n      }\n\n      :host([focused]) {\n        background-color: var(--material-divider-color);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover),\n        :host([focused]) {\n          background-color: transparent;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js");
/* harmony import */ var _src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js");




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js ***!
  \*******************************************************************/
/*! exports provided: ItemMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMixin", function() { return ItemMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
 *
 * `focused`, `active` and `focus-ring` are set as only as attributes.
 * @polymerMixin
 */
var ItemMixin = function ItemMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinItemMixin, _superClass);

      function VaadinItemMixin() {
        _classCallCheck(this, VaadinItemMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinItemMixin).apply(this, arguments));
      }

      _createClass(VaadinItemMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinItemMixin.prototype), "ready", this).call(this);

          var attrValue = this.getAttribute('value');

          if (attrValue !== null) {
            this.value = attrValue;
          }

          this.addEventListener('focus', function (e) {
            return _this._setFocused(true);
          }, true);
          this.addEventListener('blur', function (e) {
            return _this._setFocused(false);
          }, true);
          this.addEventListener('mousedown', function (e) {
            _this._setActive(_this._mousedown = true);

            var mouseUpListener = function mouseUpListener() {
              _this._setActive(_this._mousedown = false);

              document.removeEventListener('mouseup', mouseUpListener);
            };

            document.addEventListener('mouseup', mouseUpListener);
          });
          this.addEventListener('keydown', function (e) {
            return _this._onKeydown(e);
          });
          this.addEventListener('keyup', function (e) {
            return _this._onKeyup(e);
          });
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinItemMixin.prototype), "disconnectedCallback", this).call(this); // in Firefox and Safari, blur does not fire on the element when it is removed,
          // especially between keydown and keyup events, being active at the same time.
          // reproducible in `<vaadin-select>` when closing overlay on select.


          if (this.hasAttribute('active')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_selectedChanged",
        value: function _selectedChanged(selected) {
          this.setAttribute('aria-selected', selected);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          if (disabled) {
            this.selected = false;
            this.setAttribute('aria-disabled', 'true');
            this.blur();
          } else {
            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');

            if (!this._mousedown) {
              this.setAttribute('focus-ring', '');
            }
          } else {
            this.removeAttribute('focused');
            this.removeAttribute('focus-ring');

            this._setActive(false);
          }
        }
      }, {
        key: "_setActive",
        value: function _setActive(active) {
          if (active) {
            this.setAttribute('active', '');
          } else {
            this.removeAttribute('active');
          }
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (/^( |SpaceBar|Enter)$/.test(event.key) && !event.defaultPrevented) {
            event.preventDefault();

            this._setActive(true);
          }
        }
      }, {
        key: "_onKeyup",
        value: function _onKeyup(event) {
          if (this.hasAttribute('active')) {
            this._setActive(false);

            this.click();
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this.textContent.trim();
        },
        set: function set(value) {
          this._value = value;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Used for mixin detection because `instanceof` does not work with mixins.
             * e.g. in VaadinListMixin it filters items by using the
             * `element._hasVaadinItemMixin` condition.
             */
            _hasVaadinItemMixin: {
              value: true
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },

            /**
             * If true, the item is in selected state.
             */
            selected: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: '_selectedChanged'
            },
            _value: String
          };
        }
      }]);

      return VaadinItemMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item.js ***!
  \*************************************************************/
/*! exports provided: ItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemElement", function() { return ItemElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-item-mixin.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <vaadin-item>
 *     Item content
 *   </vaadin-item>
 * ```
 *
 * ### Selectable
 *
 * `<vaadin-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<vaadin-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<vaadin-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ThemableMixin
 */

var ItemElement =
/*#__PURE__*/
function (_ItemMixin) {
  _inherits(ItemElement, _ItemMixin);

  _createClass(ItemElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-item';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.1.1';
    }
  }]);

  function ItemElement() {
    var _this;

    _classCallCheck(this, ItemElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemElement).call(this));
    /**
     * Submittable string value. The default value is the trimmed text content of the element.
     * @type {string}
     */

    _this.value;
    return _this;
  }

  return ItemElement;
}(Object(_vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ItemMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ItemElement.is, ItemElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-item\" theme-for=\"vaadin-item\">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        overflow: hidden;\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        line-height: 24px;\n        padding: 4px 0;\n      }\n\n      /* It's the list-box's responsibility to add the focus style */\n      :host([focused]) {\n        outline: none;\n      }\n\n      /* Selected item has an icon */\n\n      :host::before {\n        display: var(--_material-item-selected-icon-display, none);\n        content: \"\";\n        font-family: material-icons;\n        font-size: 24px;\n        line-height: 1;\n        font-weight: 400;\n        width: 24px;\n        text-align: center;\n        margin-right: 10px;\n        color: var(--material-secondary-text-color);\n        flex: none;\n      }\n\n      :host([selected])::before {\n        content: var(--material-icons-check);\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--material-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-item-styles.js */ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js");
/* harmony import */ var _src_vaadin_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-menu-overlay\">\n  <template>\n    <style include=\"material-overlay\">\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWxpc3QvaXJvbi1saXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtZGF0YS1wcm92aWRlci1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9tYXRlcmlhbC92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtaXRlbS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9tYXRlcmlhbC92YWFkaW4tY29tYm8tYm94LWxpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3NyYy92YWFkaW4taXRlbS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4taXRlbS9zcmMvdmFhZGluLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWl0ZW0vdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWl0ZW0tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL21lbnUtb3ZlcmxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNjcm9sbFRhcmdldEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7T3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvbXV0YWJsZS1kYXRhLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lciBhcyBQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGl6ZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS90ZW1wbGF0aXplci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2FuaW1hdGlvbkZyYW1lLCBpZGxlUGVyaW9kLCBtaWNyb1Rhc2t9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbmltcG9ydCB7RGVib3VuY2VyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQge2VucXVldWVEZWJvdW5jZXIsIGZsdXNofSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7bWF0Y2hlcywgdHJhbnNsYXRlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9wYXRoLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZUJhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuXG52YXIgSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLyk7XG52YXIgSU9TX1RPVUNIX1NDUk9MTElORyA9IElPUyAmJiBJT1NbMV0gPj0gODtcbnZhciBERUZBVUxUX1BIWVNJQ0FMX0NPVU5UID0gMztcbnZhciBISURERU5fWSA9ICctMTAwMDBweCc7XG52YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcblxuLyoqXG5cbmBpcm9uLWxpc3RgIGRpc3BsYXlzIGEgdmlydHVhbCwgJ2luZmluaXRlJyBsaXN0LiBUaGUgdGVtcGxhdGUgaW5zaWRlXG50aGUgaXJvbi1saXN0IGVsZW1lbnQgcmVwcmVzZW50cyB0aGUgRE9NIHRvIGNyZWF0ZSBmb3IgZWFjaCBsaXN0IGl0ZW0uXG5UaGUgYGl0ZW1zYCBwcm9wZXJ0eSBzcGVjaWZpZXMgYW4gYXJyYXkgb2YgbGlzdCBpdGVtIGRhdGEuXG5cbkZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBub3QgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdCBpcyByZW5kZXJlZCBhdCBvbmNlO1xuaW5zdGVhZCBhIHNtYWxsIHN1YnNldCBvZiBhY3R1YWwgdGVtcGxhdGUgZWxlbWVudHMgKihlbm91Z2ggdG8gZmlsbCB0aGVcbnZpZXdwb3J0KSogYXJlIHJlbmRlcmVkIGFuZCByZXVzZWQgYXMgdGhlIHVzZXIgc2Nyb2xscy4gQXMgc3VjaCwgaXQgaXMgaW1wb3J0YW50XG50aGF0IGFsbCBzdGF0ZSBvZiB0aGUgbGlzdCB0ZW1wbGF0ZSBpcyBib3VuZCB0byB0aGUgbW9kZWwgZHJpdmluZyBpdCwgc2luY2UgdGhlXG52aWV3IG1heSBiZSByZXVzZWQgd2l0aCBhIG5ldyBtb2RlbCBhdCBhbnkgdGltZS4gUGFydGljdWxhcmx5LCBhbnkgc3RhdGUgdGhhdFxubWF5IGNoYW5nZSBhcyB0aGUgcmVzdWx0IG9mIGEgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBsaXN0IGl0ZW0gbXVzdCBiZSBib3VuZFxudG8gdGhlIG1vZGVsIHRvIGF2b2lkIHZpZXcgc3RhdGUgaW5jb25zaXN0ZW5jeS5cblxuIyMjIFNpemluZyBpcm9uLWxpc3RcblxuYGlyb24tbGlzdGAgbXVzdCBlaXRoZXIgYmUgZXhwbGljaXRseSBzaXplZCwgb3IgZGVsZWdhdGUgc2Nyb2xsaW5nIHRvIGFuXG5leHBsaWNpdGx5IHNpemVkIHBhcmVudC4gQnkgXCJleHBsaWNpdGx5IHNpemVkXCIsIHdlIG1lYW4gaXQgZWl0aGVyIGhhcyBhblxuZXhwbGljaXQgQ1NTIGBoZWlnaHRgIHByb3BlcnR5IHNldCB2aWEgYSBjbGFzcyBvciBpbmxpbmUgc3R5bGUsIG9yIGVsc2UgaXMgc2l6ZWRcbmJ5IG90aGVyIGxheW91dCBtZWFucyAoZS5nLiB0aGUgYGZsZXhgIG9yIGBmaXRgIGNsYXNzZXMpLlxuXG4jIyMjIEZsZXhib3ggLSBbanNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3Zlam9uaS9lZGl0P2h0bWwsb3V0cHV0KVxuXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBFeHBsaWNpdCBzaXplIC0gW2pzYmluXShodHRwczovL2pzYmluLmNvbS92b3B1Y3VzL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMHZoOyAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC5cbipcXC9cbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBNYWluIGRvY3VtZW50IHNjcm9sbGluZyAtXG5banNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3dldmlyb3cvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjxoZWFkPlxuICA8c3R5bGU+XG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgYXBwLXRvb2xiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICAvKiBhZGQgcGFkZGluZyBzaW5jZSB0aGUgYXBwLXRvb2xiYXIgaXMgZml4ZWQgYXQgdGhlIHRvcCAqXFwvXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC9ib2R5PlxuYGBgXG5cbmBpcm9uLWxpc3RgIG11c3QgYmUgZ2l2ZW4gYSBgPHRlbXBsYXRlPmAgd2hpY2ggY29udGFpbnMgZXhhY3RseSBvbmUgZWxlbWVudC4gSW5cbnRoZSBleGFtcGxlcyBhYm92ZSB3ZSB1c2VkIGEgYDxkaXY+YCwgYnV0IHlvdSBjYW4gcHJvdmlkZSBhbnkgZWxlbWVudCAoaW5jbHVkaW5nXG5jdXN0b20gZWxlbWVudHMpLlxuXG4jIyMgVGVtcGxhdGUgbW9kZWxcblxuTGlzdCBpdGVtIHRlbXBsYXRlcyBzaG91bGQgYmluZCB0byB0ZW1wbGF0ZSBtb2RlbHMgb2YgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbmBgYGpzXG57XG4gIGluZGV4OiAwLCAgICAgICAgLy8gaW5kZXggaW4gdGhlIGl0ZW0gYXJyYXlcbiAgc2VsZWN0ZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgdGFiSW5kZXg6IC0xLCAgICAvLyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCB0YWJJbmRleCBmb3IgZm9jdXMgbWFuYWdlbWVudFxuICBpdGVtOiB7fSAgICAgICAgIC8vIHVzZXIgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGl0ZW1zW2luZGV4XVxufVxuYGBgXG5cbkFsdGVybmF0aXZlbHksIHlvdSBjYW4gY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYXMgZGF0YSBpbmRleCBieSBjaGFuZ2luZ1xudGhlIGBpbmRleEFzYCBwcm9wZXJ0eS4gVGhlIGBhc2AgcHJvcGVydHkgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG9cbmFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5LlxuXG5Gb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBgZGF0YWAgYXJyYXk6XG5cbiMjIyMjIGRhdGEuanNvblxuXG5gYGBqc1xuW1xuICB7XCJuYW1lXCI6IFwiQm9iXCJ9LFxuICB7XCJuYW1lXCI6IFwiVGltXCJ9LFxuICB7XCJuYW1lXCI6IFwiTWlrZVwifVxuXVxuYGBgXG5cblRoZSBmb2xsb3dpbmcgY29kZSB3b3VsZCByZW5kZXIgdGhlIGxpc3QgKG5vdGUgdGhlIG5hbWUgcHJvcGVydHkgaXMgYm91bmQgZnJvbVxudGhlIG1vZGVsIG9iamVjdCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgc2NvcGUpOlxuXG5gYGBodG1sXG48aXJvbi1hamF4IHVybD1cImRhdGEuanNvblwiIGxhc3QtcmVzcG9uc2U9XCJ7e2RhdGF9fVwiIGF1dG8+PC9pcm9uLWFqYXg+XG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgR3JpZCBsYXlvdXRcblxuYGlyb24tbGlzdGAgc3VwcG9ydHMgYSBncmlkIGxheW91dCBpbiBhZGRpdGlvbiB0byBsaW5lYXIgbGF5b3V0IGJ5IHNldHRpbmdcbnRoZSBgZ3JpZGAgYXR0cmlidXRlLiAgSW4gdGhpcyBjYXNlLCB0aGUgbGlzdCB0ZW1wbGF0ZSBpdGVtIG11c3QgaGF2ZSBib3RoIGZpeGVkXG53aWR0aCBhbmQgaGVpZ2h0IChlLmcuIHZpYSBDU1MpLiBCYXNlZCBvbiB0aGlzLCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG5wZXIgcm93IGFyZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGxpc3Qgdmlld3BvcnQuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmBpcm9uLWxpc3RgIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBpdGVtcy4gSXQgYWxzb1xucHJvdmlkZXMgYSBgdGFiSW5kZXhgIHByb3BlcnR5IHdpdGhpbiB0aGUgdGVtcGxhdGUgc2NvcGUgdGhhdCBjYW4gYmUgdXNlZCBmb3JcbmtleWJvYXJkIG5hdmlnYXRpb24uIEZvciBleGFtcGxlLCB1c2VycyBjYW4gcHJlc3MgdGhlIHVwIGFuZCBkb3duIGtleXMgdG8gbW92ZVxudG8gcHJldmlvdXMgYW5kIG5leHQgaXRlbXMgaW4gdGhlIGxpc3Q6XG5cbmBgYGh0bWxcbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBTdHlsaW5nXG5cbllvdSBjYW4gdXNlIHRoZSBgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyYCBtaXhpbiB0byBzdHlsZSB0aGUgY29udGFpbmVyIG9mXG5pdGVtczpcblxuYGBgY3NzXG5pcm9uLWxpc3Qge1xuIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfTtcbn1cbmBgYFxuXG4jIyMgUmVzaXppbmdcblxuYGlyb24tbGlzdGAgbGF5cyBvdXQgdGhlIGl0ZW1zIHdoZW4gaXQgcmVjZWl2ZXMgYSBub3RpZmljYXRpb24gdmlhIHRoZVxuYGlyb24tcmVzaXplYCBldmVudC4gVGhpcyBldmVudCBpcyBmaXJlZCBieSBhbnkgZWxlbWVudCB0aGF0IGltcGxlbWVudHNcbmBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuXG5CeSBkZWZhdWx0LCBlbGVtZW50cyBzdWNoIGFzIGBpcm9uLXBhZ2VzYCwgYHBhcGVyLXRhYnNgIG9yIGBwYXBlci1kaWFsb2dgIHdpbGxcbnRyaWdnZXIgdGhpcyBldmVudCBhdXRvbWF0aWNhbGx5LiBJZiB5b3UgaGlkZSB0aGUgbGlzdCBtYW51YWxseSAoZS5nLiB5b3UgdXNlXG5gZGlzcGxheTogbm9uZWApIHlvdSBtaWdodCB3YW50IHRvIGltcGxlbWVudCBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYCBvciBmaXJlXG50aGlzIGV2ZW50IG1hbnVhbGx5IHJpZ2h0IGFmdGVyIHRoZSBsaXN0IGJlY2FtZSB2aXNpYmxlIGFnYWluLiBGb3IgZXhhbXBsZTpcblxuYGBganNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tbGlzdCcpLmZpcmUoJ2lyb24tcmVzaXplJyk7XG5gYGBcblxuIyMjIFdoZW4gc2hvdWxkIGA8aXJvbi1saXN0PmAgYmUgdXNlZD9cblxuYGlyb24tbGlzdGAgc2hvdWxkIGJlIHVzZWQgd2hlbiBhIHBhZ2UgaGFzIHNpZ25pZmljYW50bHkgbW9yZSBET00gbm9kZXMgdGhhbiB0aGVcbm9uZXMgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLiBlLmcuIHRoZSBwYWdlIGhhcyA1MDAgbm9kZXMsIGJ1dCBvbmx5IDIwIGFyZSB2aXNpYmxlXG5hdCBhIHRpbWUuIFRoaXMgaXMgd2h5IHdlIHJlZmVyIHRvIGl0IGFzIGEgYHZpcnR1YWxgIGxpc3QuIEluIHRoaXMgY2FzZSwgYVxuYGRvbS1yZXBlYXRgIHdpbGwgc3RpbGwgY3JlYXRlIDUwMCBub2RlcyB3aGljaCBjb3VsZCBzbG93IGRvd24gdGhlIHdlYiBhcHAsIGJ1dFxuYGlyb24tbGlzdGAgd2lsbCBvbmx5IGNyZWF0ZSAyMC5cblxuSG93ZXZlciwgaGF2aW5nIGFuIGBpcm9uLWxpc3RgIGRvZXMgbm90IG1lYW4gdGhhdCB5b3UgY2FuIGxvYWQgYWxsIHRoZSBkYXRhIGF0XG5vbmNlLiBTYXkgeW91IGhhdmUgYSBtaWxsaW9uIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlLCB5b3Ugd2FudCB0byBzcGxpdCB0aGUgZGF0YVxuaW50byBwYWdlcyBzbyB5b3UgY2FuIGJyaW5nIGluIGEgcGFnZSBhdCB0aGUgdGltZS4gVGhlIHBhZ2UgY291bGQgY29udGFpbiA1MDBcbml0ZW1zLCBhbmQgaXJvbi1saXN0IHdpbGwgb25seSByZW5kZXIgMjAuXG5cbkBlbGVtZW50IGlyb24tbGlzdFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5cbiovXG5Qb2x5bWVyKHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1tYXgtZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyB7XG4gICAgICAgIEBhcHBseSAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZ3JpZF0pKSAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGFycmF5LXNlbGVjdG9yIGlkPVwic2VsZWN0b3JcIiBpdGVtcz1cInt7aXRlbXN9fVwiIHNlbGVjdGVkPVwie3tzZWxlY3RlZEl0ZW1zfX1cIiBzZWxlY3RlZC1pdGVtPVwie3tzZWxlY3RlZEl0ZW19fVwiPjwvYXJyYXktc2VsZWN0b3I+XG5cbiAgICA8ZGl2IGlkPVwiaXRlbXNcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWxpc3QnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgaXRlbXMgZGV0ZXJtaW5pbmcgaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoZSB0ZW1wbGF0ZVxuICAgICAqIHRvIHN0YW1wIGFuZCB0aGF0IHRoYXQgZWFjaCB0ZW1wbGF0ZSBpbnN0YW5jZSBzaG91bGQgYmluZCB0by5cbiAgICAgKi9cbiAgICBpdGVtczoge3R5cGU6IEFycmF5fSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgZm9yIHRoZSBhcnJheVxuICAgICAqIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gdGVtcGxhdGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgYXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaXRlbSd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB3aXRoIHRoZSBpbmRleFxuICAgICAqIGZvciB0aGUgcm93LlxuICAgICAqL1xuICAgIGluZGV4QXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaW5kZXgnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgdG8gaW5kaWNhdGVcbiAgICAgKiBpZiB0aGUgcm93IGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdGVkQXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnc2VsZWN0ZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXMgYSBncmlkLiBHcmlkIGl0ZW1zIG11c3QgaGF2ZVxuICAgICAqIGZpeGVkIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHZpYSBDU1MuIGUuZy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aXJvbi1saXN0IGdyaWQ+XG4gICAgICogICA8dGVtcGxhdGU+XG4gICAgICogICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1wiPiAxMDB4MTAwIDwvZGl2PlxuICAgICAqICAgPC90ZW1wbGF0ZT5cbiAgICAgKiA8L2lyb24tbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBncmlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfZ3JpZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGFwcGluZyBhIHJvdyB3aWxsIHNlbGVjdCB0aGUgaXRlbSwgcGxhY2luZyBpdHMgZGF0YSBtb2RlbFxuICAgICAqIGluIHRoZSBzZXQgb2Ygc2VsZWN0ZWQgaXRlbXMgcmV0cmlldmFibGUgdmlhIHRoZSBzZWxlY3Rpb24gcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGFwcGluZyBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBsaXN0IGl0ZW0gd2lsbCBub3RcbiAgICAgKiByZXN1bHQgaW4gc2VsZWN0aW9uLCBzaW5jZSB0aGV5IGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoZWlyICogb3duIGFjdGlvbi5cbiAgICAgKi9cbiAgICBzZWxlY3Rpb25FbmFibGVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyBmYWxzZSwgdGhpcyBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yXG4gICAgICogYG51bGxgIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiB7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgbXVsdGlTZWxlY3Rpb25gIGlzIHRydWUsIHRoaXMgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1zOiB7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgdHJ1ZWAsIG11bHRpcGxlIGl0ZW1zIG1heSBiZSBzZWxlY3RlZCBhdCBvbmNlIChpbiB0aGlzIGNhc2UsXG4gICAgICogYHNlbGVjdGVkYCBpcyBhbiBhcnJheSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMpLiAgV2hlbiBgZmFsc2VgLFxuICAgICAqIG9ubHkgb25lIGl0ZW0gbWF5IGJlIHNlbGVjdGVkIGF0IGEgdGltZS5cbiAgICAgKi9cbiAgICBtdWx0aVNlbGVjdGlvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2Zmc2V0IHRvcCBmcm9tIHRoZSBzY3JvbGxpbmcgZWxlbWVudCB0byB0aGUgaXJvbi1saXN0IGVsZW1lbnQuXG4gICAgICogVGhpcyB2YWx1ZSBjYW4gYmUgY29tcHV0ZWQgdXNpbmcgdGhlIHBvc2l0aW9uIHJldHVybmVkIGJ5XG4gICAgICogYGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpYCBhbHRob3VnaCBpdCdzIHByZWZlcnJlZCB0byB1c2UgYSBjb25zdGFudCB2YWx1ZVxuICAgICAqIHdoZW4gcG9zc2libGUuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHVzZWZ1bCB3aGVuIGFuIGV4dGVybmFsIHNjcm9sbGluZyBlbGVtZW50IGlzIHVzZWQgYW5kXG4gICAgICogdGhlcmUncyBzb21lIG9mZnNldCBiZXR3ZWVuIHRoZSBzY3JvbGxpbmcgZWxlbWVudCBhbmQgdGhlIGxpc3QuIEZvclxuICAgICAqIGV4YW1wbGU6IGEgaGVhZGVyIGlzIHBsYWNlZCBhYm92ZSB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzY3JvbGxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwfVxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfaXRlbXNDaGFuZ2VkKGl0ZW1zLiopJyxcbiAgICAnX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkKHNlbGVjdGlvbkVuYWJsZWQpJyxcbiAgICAnX211bHRpU2VsZWN0aW9uQ2hhbmdlZChtdWx0aVNlbGVjdGlvbiknLFxuICAgICdfc2V0T3ZlcmZsb3coc2Nyb2xsVGFyZ2V0LCBzY3JvbGxPZmZzZXQpJ1xuICBdLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIFRlbXBsYXRpemVyLFxuICAgIElyb25SZXNpemFibGVCZWhhdmlvcixcbiAgICBJcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3IsXG4gICAgT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yXG4gIF0sXG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbyBvZiBoaWRkZW4gdGlsZXMgdGhhdCBzaG91bGQgcmVtYWluIGluIHRoZSBzY3JvbGwgZGlyZWN0aW9uLlxuICAgKiBSZWNvbW1lbmRlZCB2YWx1ZSB+MC41LCBzbyBpdCB3aWxsIGRpc3RyaWJ1dGUgdGlsZXMgZXZlbmx5IGluIGJvdGhcbiAgICogZGlyZWN0aW9ucy5cbiAgICovXG4gIF9yYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBUaGUgcGFkZGluZy10b3AgdmFsdWUgZm9yIHRoZSBsaXN0LlxuICAgKi9cbiAgX3Njcm9sbGVyUGFkZGluZ1RvcDogMCxcblxuICAvKipcbiAgICogVGhpcyB2YWx1ZSBpcyBhIGNhY2hlZCB2YWx1ZSBvZiBgc2Nyb2xsVG9wYCBmcm9tIHRoZSBsYXN0IGBzY3JvbGxgIGV2ZW50LlxuICAgKi9cbiAgX3Njcm9sbFBvc2l0aW9uOiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgc3VtIG9mIHRoZSBoZWlnaHRzIG9mIGFsbCB0aGUgdGlsZXMgaW4gdGhlIERPTS5cbiAgICovXG4gIF9waHlzaWNhbFNpemU6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBhdmVyYWdlIGBvZmZzZXRIZWlnaHRgIG9mIHRoZSB0aWxlcyBvYnNlcnZlZCB0aWxsIG5vdy5cbiAgICovXG4gIF9waHlzaWNhbEF2ZXJhZ2U6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgdGlsZXMgd2hpY2ggYG9mZnNldEhlaWdodGAgPiAwIG9ic2VydmVkIHVudGlsIG5vdy5cbiAgICovXG4gIF9waHlzaWNhbEF2ZXJhZ2VDb3VudDogMCxcblxuICAvKipcbiAgICogVGhlIFkgcG9zaXRpb24gb2YgdGhlIGl0ZW0gcmVuZGVyZWQgaW4gdGhlIGBfcGh5c2ljYWxTdGFydGBcbiAgICogdGlsZSByZWxhdGl2ZSB0byB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAqL1xuICBfcGh5c2ljYWxUb3A6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAqL1xuICBfdmlydHVhbENvdW50OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgZXN0aW1hdGVkIHNjcm9sbCBoZWlnaHQgYmFzZWQgb24gYF9waHlzaWNhbEF2ZXJhZ2VgXG4gICAqL1xuICBfZXN0U2Nyb2xsSGVpZ2h0OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsIGhlaWdodCBvZiB0aGUgZG9tIG5vZGVcbiAgICovXG4gIF9zY3JvbGxIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mXG4gICAqIGxpc3QuXG4gICAqL1xuICBfdmlld3BvcnRIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICogbGlzdC5cbiAgICovXG4gIF92aWV3cG9ydFdpZHRoOiAwLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBET00gbm9kZXMgdGhhdCBhcmUgY3VycmVudGx5IGluIHRoZSB0cmVlXG4gICAqIEB0eXBlIHs/QXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9waHlzaWNhbEl0ZW1zOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBoZWlnaHRzIGZvciBlYWNoIGl0ZW0gaW4gYF9waHlzaWNhbEl0ZW1zYFxuICAgKiBAdHlwZSB7P0FycmF5PG51bWJlcj59XG4gICAqL1xuICBfcGh5c2ljYWxTaXplczogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBmaXJzdCB2aXNpYmxlIGluZGV4LlxuICAgKiBTZWUgYGZpcnN0VmlzaWJsZUluZGV4YFxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICovXG4gIF9maXJzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBsYXN0IHZpc2libGUgaW5kZXguXG4gICAqIFNlZSBgbGFzdFZpc2libGVJbmRleGBcbiAgICogQHR5cGUgez9udW1iZXJ9XG4gICAqL1xuICBfbGFzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogVGhlIG1heCBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyLiBPbmUgcGFnZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBoZWlnaHQgb2ZcbiAgICogdGhlIGxpc3QuXG4gICAqL1xuICBfbWF4UGFnZXM6IDIsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgdmlydHVhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRWaXJ0dWFsSW5kZXg6IC0xLFxuXG4gIC8qKlxuICAgKiBUaGUgcGh5c2ljYWwgaW5kZXggb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICovXG4gIF9mb2N1c2VkUGh5c2ljYWxJbmRleDogLTEsXG5cbiAgLyoqXG4gICAqIFRoZSB0aGUgaXRlbSB0aGF0IGlzIGZvY3VzZWQgaWYgaXQgaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKiBAcHJpdmF0ZSB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX29mZnNjcmVlbkZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgaXRlbSB0aGF0IGJhY2tmaWxscyB0aGUgYF9vZmZzY3JlZW5Gb2N1c2VkSXRlbWAgaW4gdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAqIGxpc3Qgd2hlbiB0aGF0IGl0ZW0gaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKiBAdHlwZSB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX2ZvY3VzQmFja2ZpbGxJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBpdGVtcyBwZXIgcm93XG4gICAqL1xuICBfaXRlbXNQZXJSb3c6IDEsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiBlYWNoIGdyaWQgaXRlbVxuICAgKi9cbiAgX2l0ZW1XaWR0aDogMCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93IGluIGdyaWQgbGF5b3V0LlxuICAgKi9cbiAgX3Jvd0hlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIGNvc3Qgb2Ygc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbiBtcy5cbiAgICovXG4gIF90ZW1wbGF0ZUNvc3Q6IDAsXG5cbiAgLyoqXG4gICAqIE5lZWRlZCB0byBwYXNzIGV2ZW50Lm1vZGVsIHByb3BlcnR5IHRvIGRlY2xhcmF0aXZlIGV2ZW50IGhhbmRsZXJzIC1cbiAgICogc2VlIHBvbHltZXIvcG9seW1lciM0MzM5LlxuICAgKi9cbiAgX3BhcmVudE1vZGVsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgYm90dG9tIG9mIHRoZSBwaHlzaWNhbCBjb250ZW50LlxuICAgKi9cbiAgZ2V0IF9waHlzaWNhbEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9waHlzaWNhbFNpemU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBib3R0b20gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIGdldCBfc2Nyb2xsQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgbi10aCBpdGVtIHJlbmRlcmVkIGluIHRoZSBsYXN0IHBoeXNpY2FsIGl0ZW0uXG4gICAqL1xuICBnZXQgX3ZpcnR1YWxFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaHlzaWNhbCBjb250ZW50IHRoYXQgaXNuJ3Qgb24gdGhlIHNjcmVlbi5cbiAgICovXG4gIGdldCBfaGlkZGVuQ29udGVudFNpemUoKSB7XG4gICAgdmFyIHNpemUgPVxuICAgICAgICB0aGlzLmdyaWQgPyB0aGlzLl9waHlzaWNhbFJvd3MgKiB0aGlzLl9yb3dIZWlnaHQgOiB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgcmV0dXJuIHNpemUgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBub2RlIGZvciB0aGUgX3VzZXJUZW1wbGF0ZS5cbiAgICovXG4gIGdldCBfaXRlbXNQYXJlbnQoKSB7XG4gICAgcmV0dXJuIGRvbShkb20odGhpcy5fdXNlclRlbXBsYXRlKS5wYXJlbnROb2RlKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gc2Nyb2xsIHRvcCB2YWx1ZS5cbiAgICovXG4gIGdldCBfbWF4U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGxhcmdlc3Qgbi10aCB2YWx1ZSBmb3IgYW4gaXRlbSBzdWNoIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkIGluXG4gICAqIGBfcGh5c2ljYWxTdGFydGAuXG4gICAqL1xuICBnZXQgX21heFZpcnR1YWxTdGFydCgpIHtcbiAgICB2YXIgdmlydHVhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyh0aGlzLl92aXJ0dWFsQ291bnQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCB2aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50KTtcbiAgfSxcblxuICBzZXQgX3ZpcnR1YWxTdGFydCh2YWwpIHtcbiAgICB2YWwgPSB0aGlzLl9jbGFtcCh2YWwsIDAsIHRoaXMuX21heFZpcnR1YWxTdGFydCk7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9XG4gICAgdGhpcy5fdmlydHVhbFN0YXJ0VmFsID0gdmFsO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGstdGggdGlsZSB0aGF0IGlzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgKi9cbiAgc2V0IF9waHlzaWNhbFN0YXJ0KHZhbCkge1xuICAgIHZhbCA9IHZhbCAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgaWYgKHZhbCA8IDApIHtcbiAgICAgIHZhbCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyB2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfVxuICAgIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IF9waHlzaWNhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsIHx8IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIGdldCBfcGh5c2ljYWxFbmQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDEpICVcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgfSxcblxuICBzZXQgX3BoeXNpY2FsQ291bnQodmFsKSB7XG4gICAgdGhpcy5fcGh5c2ljYWxDb3VudFZhbCA9IHZhbDtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogQW4gb3B0aW1hbCBwaHlzaWNhbCBzaXplIHN1Y2ggdGhhdCB3ZSB3aWxsIGhhdmUgZW5vdWdoIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIGZpbGwgdXAgdGhlIHZpZXdwb3J0IGFuZCByZWN5Y2xlIHdoZW4gdGhlIHVzZXIgc2Nyb2xscy5cbiAgICpcbiAgICogVGhpcyBkZWZhdWx0IHZhbHVlIGFzc3VtZXMgdGhhdCB3ZSB3aWxsIGF0IGxlYXN0IGhhdmUgdGhlIGVxdWl2YWxlbnRcbiAgICogdG8gYSB2aWV3cG9ydCBvZiBwaHlzaWNhbCBpdGVtcyBhYm92ZSBhbmQgYmVsb3cgdGhlIHVzZXIncyB2aWV3cG9ydC5cbiAgICovXG4gIGdldCBfb3B0UGh5c2ljYWxTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3cG9ydEhlaWdodCA9PT0gMCA/IEluZmluaXR5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCAqIHRoaXMuX21heFBhZ2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgdmlzaWJsZS5cbiAgICovXG4gIGdldCBfaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBmaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcblxuICAgICAgaWR4ID0gdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuXG4gICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA+IHRoaXMuX3Njcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KSA6IHZpZHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGEgcGFydGlhbGx5IHJlbmRlcmVkIGZpbmFsIHJvdyBpbiBncmlkIG1vZGVcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLl92aXJ0dWFsQ291bnQgLSAxID09PSB2aWR4KSB7XG4gICAgICAgICAgcmV0dXJuIHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgICAgfVxuICAgICAgfSkgfHxcbiAgICAgICAgICAwO1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGFzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbDtcbiAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgaWR4ID0gTWF0aC5taW4oXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQsXG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICsgdGhpcy5fZXN0Um93c0luVmlldyAqIHRoaXMuX2l0ZW1zUGVyUm93IC1cbiAgICAgICAgICAgICAgICAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA8IHRoaXMuX3Njcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgaWR4ID0gdmlkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFJvd0NvdW50KCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlydHVhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICB9LFxuXG4gIGdldCBfZXN0Um93c0luVmlldygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5fcm93SGVpZ2h0KTtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsUm93cygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gIH0sXG5cbiAgZ2V0IF9zY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCArIHRoaXMuc2Nyb2xsT2Zmc2V0O1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9kaWRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgIC8vIGBpcm9uLXJlc2l6ZWAgaXMgZmlyZWQgd2hlbiB0aGUgbGlzdCBpcyBhdHRhY2hlZCBpZiB0aGUgZXZlbnQgaXMgYWRkZWRcbiAgICAvLyBiZWZvcmUgYXR0YWNoZWQgY2F1c2luZyB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgIHRoaXMubGlzdGVuKHRoaXMsICdpcm9uLXJlc2l6ZScsICdfcmVzaXplSGFuZGxlcicpO1xuICAgIHRoaXMubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBpZiB0aGlzIGVsZW1lbnQgaGFzIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvblxuICAgKi9cbiAgX3NldE92ZXJmbG93OiBmdW5jdGlvbihzY3JvbGxUYXJnZXQpIHtcbiAgICB0aGlzLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ3RvdWNoJyA6ICcnO1xuICAgIHRoaXMuc3R5bGUub3ZlcmZsb3dZID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ2F1dG8nIDogJyc7XG4gICAgLy8gQ2xlYXIgY2FjaGUuXG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBhbmltYXRpb25GcmFtZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAqIHNpemUgb3IgQ1NTIHBhZGRpbmcuXG4gICAqXG4gICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAqL1xuICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgPVxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcyA/IDAgOiBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgIHRoaXMuX3ZpZXdwb3J0V2lkdGggPSB0aGlzLiQuaXRlbXMub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICB2YXIgZGVsdGEgPSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgZGVsdGEgPSBkZWx0YSAtIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBpZHhBZGp1c3RtZW50ID1cbiAgICAgICAgICBNYXRoLnJvdW5kKGRlbHRhIC8gdGhpcy5fcGh5c2ljYWxBdmVyYWdlKSAqIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQgYmFzZWQgb24gdGhlIHZpcnR1YWwgc3RhcnQgaW5kZXguXG4gICAgICAvLyBhZGp1c3RzIHRoZSBwaHlzaWNhbCBzdGFydCBwb3NpdGlvbiB0byBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY2xhbXBlZFxuICAgICAgLy8gdmlydHVhbCBzdGFydCBpbmRleC4gSXQncyBjcml0aWNhbCBub3QgdG8gbGV0IHRoaXMgdmFsdWUgYmVcbiAgICAgIC8vIG1vcmUgdGhhbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGhvd2V2ZXIsIHNpbmNlIHRoYXQgd291bGQgcmVzdWx0IGluXG4gICAgICAvLyB0aGUgcGh5c2ljYWwgaXRlbXMgbm90IGNvdmVyaW5nIHRoZSB2aWV3cG9ydCwgYW5kIGxlYWRpbmcgdG9cbiAgICAgIC8vIF9pbmNyZWFzZVBvb2xJZk5lZWRlZCB0byBydW4gYXdheSBjcmVhdGluZyBpdGVtcyB0byB0cnkgdG8gZmlsbCBpdC5cbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKlxuICAgICAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UsXG4gICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID4gMCkge1xuICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyhpc1Njcm9sbGluZ0Rvd24pO1xuICAgICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGUoXG4gICAgICAgICAgcmV1c2FibGVzLmluZGV4ZXMsIGlzU2Nyb2xsaW5nRG93biA/IG51bGwgOiByZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKHRoaXMsIDApLFxuICAgICAgICAgIG1pY3JvVGFzayk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBpbmRleGVzIG9mIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgKiB0aGF0IG1pZ2h0IGJlIHJldXNlZCBhbmQgdGhlIHBoeXNpY2FsVG9wLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZyb21Ub3AgSWYgdGhlIHBvdGVudGlhbCByZXVzYWJsZSBpdGVtcyBhcmUgYWJvdmUgdGhlIHNjcm9sbGluZyByZWdpb24uXG4gICAqL1xuICBfZ2V0UmV1c2FibGVzOiBmdW5jdGlvbihmcm9tVG9wKSB7XG4gICAgdmFyIGl0aCwgbGFzdEl0aCwgb2Zmc2V0Q29udGVudCwgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgIHZhciBpZHhzID0gW107XG4gICAgdmFyIHByb3RlY3RlZE9mZnNldENvbnRlbnQgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZSAqIHRoaXMuX3JhdGlvO1xuICAgIHZhciB2aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHZpcnR1YWxFbmQgPSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgIHZhciBwaHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB2YXIgdG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGJvdHRvbSA9IHRoaXMuX3BoeXNpY2FsQm90dG9tICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgIC8vIFRoaXMgbWF5IGJlIGNhbGxlZCBvdXRzaWRlIG9mIGEgc2Nyb2xsSGFuZGxlciwgc28gdXNlIGxhc3QgY2FjaGVkIHBvc2l0aW9uXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgIHZhciBzY3JvbGxCb3R0b20gPSB0aGlzLl9zY3JvbGxCb3R0b207XG5cbiAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgaXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgIG9mZnNldENvbnRlbnQgPSBzY3JvbGxUb3AgLSB0b3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICBvZmZzZXRDb250ZW50ID0gYm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgcGh5c2ljYWxJdGVtSGVpZ2h0ID0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGl0aCk7XG4gICAgICBvZmZzZXRDb250ZW50ID0gb2Zmc2V0Q29udGVudCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgIGlmIChpZHhzLmxlbmd0aCA+PSBwaHlzaWNhbENvdW50IHx8XG4gICAgICAgICAgb2Zmc2V0Q29udGVudCA8PSBwcm90ZWN0ZWRPZmZzZXRDb250ZW50KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICBpZiAodmlydHVhbEVuZCArIGlkeHMubGVuZ3RoICsgMSA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgaWYgKHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodCA+PSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgdG9wID0gdG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICBpdGggPSAoaXRoICsgMSkgJSBwaHlzaWNhbENvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICBpZiAodmlydHVhbFN0YXJ0IC0gaWR4cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICBpZiAodG9wICsgdGhpcy5fcGh5c2ljYWxTaXplIC0gcGh5c2ljYWxJdGVtSGVpZ2h0IDw9IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICB0b3AgPSB0b3AgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgIGl0aCA9IChpdGggPT09IDApID8gcGh5c2ljYWxDb3VudCAtIDEgOiBpdGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2luZGV4ZXM6IGlkeHMsIHBoeXNpY2FsVG9wOiB0b3AgLSB0aGlzLl9zY3JvbGxPZmZzZXR9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgaXRlbXMsIHN0YXJ0aW5nIGZyb20gdGhlIGBfdmlydHVhbFN0YXJ0YCBpdGVtLlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gbW92aW5nVXBcbiAgICovXG4gIF91cGRhdGU6IGZ1bmN0aW9uKGl0ZW1TZXQsIG1vdmluZ1VwKSB7XG4gICAgaWYgKChpdGVtU2V0ICYmIGl0ZW1TZXQubGVuZ3RoID09PSAwKSB8fCB0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hbmFnZUZvY3VzKCk7XG4gICAgdGhpcy5fYXNzaWduTW9kZWxzKGl0ZW1TZXQpO1xuICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoaXRlbVNldCk7XG4gICAgLy8gQWRqdXN0IG9mZnNldCBhZnRlciBtZWFzdXJpbmcuXG4gICAgaWYgKG1vdmluZ1VwKSB7XG4gICAgICB3aGlsZSAobW92aW5nVXAubGVuZ3RoKSB7XG4gICAgICAgIHZhciBpZHggPSBtb3ZpbmdVcC5wb3AoKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgLT0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGlkeCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHBvb2wgb2YgRE9NIGVsZW1lbnRzIGFuZCBhdHRhY2hlcyB0aGVtIHRvIHRoZSBsb2NhbCBkb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIHBvb2xcbiAgICovXG4gIF9jcmVhdGVQb29sOiBmdW5jdGlvbihzaXplKSB7XG4gICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICB2YXIgaSwgaW5zdDtcbiAgICB2YXIgcGh5c2ljYWxJdGVtcyA9IG5ldyBBcnJheShzaXplKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIC8vIFRPRE8oYmxhc3Rlbik6XG4gICAgICAvLyBGaXJzdCBlbGVtZW50IGNoaWxkIGlzIGl0ZW07IFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgY2hpbGRyZW5bMF1cbiAgICAgIC8vIG9uIGEgZG9jIGZyYWdtZW50LiBUZXN0IHRoaXMgdG8gc2VlIGlmIGl0IHN0aWxsIG1hdHRlcnMuXG4gICAgICBwaHlzaWNhbEl0ZW1zW2ldID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgfVxuICAgIHJldHVybiBwaHlzaWNhbEl0ZW1zO1xuICB9LFxuXG4gIF9pc0NsaWVudEZ1bGw6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxCb3R0b20gIT0gMCAmJlxuICAgICAgICB0aGlzLl9waHlzaWNhbEJvdHRvbSAtIDEgPj0gdGhpcy5fc2Nyb2xsQm90dG9tICYmXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIDw9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZXMgdGhlIHBvb2wgc2l6ZS5cbiAgICovXG4gIF9pbmNyZWFzZVBvb2xJZk5lZWRlZDogZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jbGFtcChcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCArIGNvdW50LFxuICAgICAgICBERUZBVUxUX1BIWVNJQ0FMX0NPVU5ULFxuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQpO1xuICAgIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyhuZXh0UGh5c2ljYWxDb3VudCk7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFyIGNvcnJlY3Rpb24gPSBuZXh0UGh5c2ljYWxDb3VudCAlIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgaWYgKGNvcnJlY3Rpb24gJiYgbmV4dFBoeXNpY2FsQ291bnQgLSBjb3JyZWN0aW9uIDw9IHRoaXMuX3BoeXNpY2FsQ291bnQpIHtcbiAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgKz0gdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICB9XG4gICAgICBuZXh0UGh5c2ljYWxDb3VudCAtPSBjb3JyZWN0aW9uO1xuICAgIH1cbiAgICB2YXIgZGVsdGEgPSBuZXh0UGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgdmFyIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG5cbiAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgIHZhciB0cyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIC8vIENvbmNhdCBhcnJheXMgaW4gcGxhY2UuXG4gICAgICBbXS5wdXNoLmFwcGx5KHRoaXMuX3BoeXNpY2FsSXRlbXMsIHRoaXMuX2NyZWF0ZVBvb2woZGVsdGEpKTtcbiAgICAgIC8vIFB1c2ggMHMgaW50byBwaHlzaWNhbFNpemVzLiBDYW4ndCB1c2UgQXJyYXkuZmlsbCBiZWNhdXNlIElFMTEgZG9lc24ndFxuICAgICAgLy8gc3VwcG9ydCBpdC5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzLnB1c2goMCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9waHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudCArIGRlbHRhO1xuICAgICAgLy8gVXBkYXRlIHRoZSBwaHlzaWNhbCBzdGFydCBpZiBpdCBuZWVkcyB0byBwcmVzZXJ2ZSB0aGUgbW9kZWwgb2YgdGhlXG4gICAgICAvLyBmb2N1c2VkIGl0ZW0uIEluIHRoaXMgc2l0dWF0aW9uLCB0aGUgZm9jdXNlZCBpdGVtIGlzIGN1cnJlbnRseSByZW5kZXJlZFxuICAgICAgLy8gYW5kIGl0cyBtb2RlbCB3b3VsZCBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5jcmVhc2luZyB0aGUgcG9vbCBpZiB0aGVcbiAgICAgIC8vIHBoeXNpY2FsIHN0YXJ0IHJlbWFpbmVkIHVuY2hhbmdlZC5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbFN0YXJ0ID4gdGhpcy5fcGh5c2ljYWxFbmQgJiZcbiAgICAgICAgICB0aGlzLl9pc0luZGV4UmVuZGVyZWQodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCkgJiZcbiAgICAgICAgICB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpIDxcbiAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljYWxFbmQpIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBkZWx0YTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgdGhpcy5fdGVtcGxhdGVDb3N0ID0gKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIHRzKSAvIGRlbHRhO1xuICAgICAgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcbiAgICB9XG4gICAgLy8gVGhlIHVwcGVyIGJvdW5kcyBpcyBub3QgZml4ZWQgd2hlbiBkZWFsaW5nIHdpdGggYSBncmlkIHRoYXQgZG9lc24ndFxuICAgIC8vIGZpbGwgaXQncyBsYXN0IHJvdyB3aXRoIHRoZSBleGFjdCBudW1iZXIgb2YgaXRlbXMgcGVyIHJvdy5cbiAgICBpZiAodGhpcy5fdmlydHVhbEVuZCA+PSB0aGlzLl92aXJ0dWFsQ291bnQgLSAxIHx8IG5leHRJbmNyZWFzZSA9PT0gMCkge1xuICAgICAgLy8gRG8gbm90aGluZy5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZCh0aGlzLCBuZXh0SW5jcmVhc2UpLFxuICAgICAgICAgIG1pY3JvVGFzayk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbFNpemUgPCB0aGlzLl9vcHRQaHlzaWNhbFNpemUpIHtcbiAgICAgIC8vIFlpZWxkIGFuZCBpbmNyZWFzZSB0aGUgcG9vbCBkdXJpbmcgaWRsZSB0aW1lIHVudGlsIHRoZSBwaHlzaWNhbCBzaXplIGlzXG4gICAgICAvLyBvcHRpbWFsLlxuICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5fY2xhbXAoXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKDUwIC8gdGhpcy5fdGVtcGxhdGVDb3N0KSwgMSwgbmV4dEluY3JlYXNlKSksXG4gICAgICAgICAgaWRsZVBlcmlvZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBhIG5ldyBsaXN0LlxuICAgKi9cbiAgX3JlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuX2lzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCAhPT0gMCkge1xuICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyh0cnVlKTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICB0aGlzLl91cGRhdGUocmV1c2FibGVzLmluZGV4ZXMpO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnR1YWxDb3VudCA+IDApIHtcbiAgICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoREVGQVVMVF9QSFlTSUNBTF9DT1VOVCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUZW1wbGV0aXplcyB0aGUgdXNlciB0ZW1wbGF0ZS5cbiAgICovXG4gIF9lbnN1cmVUZW1wbGF0aXplZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91c2VyVGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAoXG4gICAgICAgIHRoaXMucXVlcnlFZmZlY3RpdmVDaGlsZHJlbigndGVtcGxhdGUnKSk7XG4gICAgaWYgKCF0aGlzLl91c2VyVGVtcGxhdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignaXJvbi1saXN0IHJlcXVpcmVzIGEgdGVtcGxhdGUgdG8gYmUgcHJvdmlkZWQgaW4gbGlnaHQtZG9tJyk7XG4gICAgfVxuICAgIHZhciBpbnN0YW5jZVByb3BzID0ge307XG4gICAgaW5zdGFuY2VQcm9wcy5fX2tleV9fID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzW3RoaXMuYXNdID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzW3RoaXMuaW5kZXhBc10gPSB0cnVlO1xuICAgIGluc3RhbmNlUHJvcHNbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgaW5zdGFuY2VQcm9wcy50YWJJbmRleCA9IHRydWU7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluc3RhbmNlUHJvcHM7XG4gICAgdGhpcy50ZW1wbGF0aXplKHRoaXMuX3VzZXJUZW1wbGF0ZSwgdGhpcy5tdXRhYmxlRGF0YSk7XG4gIH0sXG5cbiAgX2dyaWRDaGFuZ2VkOiBmdW5jdGlvbihuZXdHcmlkLCBvbGRHcmlkKSB7XG4gICAgaWYgKHR5cGVvZiBvbGRHcmlkID09PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIGZsdXNoKCk7XG4gICAgbmV3R3JpZCAmJiB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgaXRlbXMgaGF2ZSBjaGFuZ2VkLiBUaGF0IGlzLCByZWFzc2lnbm1lbnRzXG4gICAqIHRvIGBpdGVtc2AsIHNwbGljZXMgb3IgdXBkYXRlcyB0byBhIHNpbmdsZSBpdGVtLlxuICAgKi9cbiAgX2l0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMnKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSAwO1xuICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXkgPSB7fTtcbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgfHwgMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXMgPSB0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplcyA9IHRoaXMuX3BoeXNpY2FsU2l6ZXMgfHwgW107XG4gICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gMDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxUb3AgPiB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbigwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5fYWRqdXN0VmlydHVhbEluZGV4KGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMpO1xuICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgIC8vIE9ubHkgYmx1ciBpZiBhdCBsZWFzdCBvbmUgaXRlbSBpcyBhZGRlZCBvciByZW1vdmVkLlxuICAgICAgdmFyIGl0ZW1BZGRlZE9yUmVtb3ZlZCA9IGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMuc29tZShmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgICAgcmV0dXJuIHNwbGljZS5hZGRlZENvdW50ID4gMCB8fCBzcGxpY2UucmVtb3ZlZC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXRlbUFkZGVkT3JSZW1vdmVkKSB7XG4gICAgICAgIC8vIE9ubHkgYmx1ciBhY3RpdmVFbGVtZW50IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiB0aGUgbGlzdCAoIzUwNSxcbiAgICAgICAgLy8gIzUwNykuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICBpZiAodGhpcy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYWZmZWN0ZWQgaW5kZXggaXMgcmVuZGVyZWQuXG4gICAgICB2YXIgYWZmZWN0ZWRJbmRleFJlbmRlcmVkID1cbiAgICAgICAgICBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaWNlLmluZGV4ICsgc3BsaWNlLmFkZGVkQ291bnQgPj0gdGhpcy5fdmlydHVhbFN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgc3BsaWNlLmluZGV4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpIHx8IGFmZmVjdGVkSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggIT09ICdpdGVtcy5sZW5ndGgnKSB7XG4gICAgICB0aGlzLl9mb3J3YXJkSXRlbVBhdGgoY2hhbmdlLnBhdGgsIGNoYW5nZS52YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIF9mb3J3YXJkSXRlbVBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoNik7ICAvLyAnaXRlbXMuJy5sZW5ndGggPT0gNlxuICAgIHZhciBkb3QgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICBpZiAoZG90ID09PSAtMSkge1xuICAgICAgZG90ID0gcGF0aC5sZW5ndGg7XG4gICAgfVxuICAgIHZhciBpc0luZGV4UmVuZGVyZWQ7XG4gICAgdmFyIHBpZHg7XG4gICAgdmFyIGluc3Q7XG4gICAgdmFyIG9mZnNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgIHZhciB2aWR4ID0gcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMCwgZG90KSwgMTApO1xuICAgIGlzSW5kZXhSZW5kZXJlZCA9IHRoaXMuX2lzSW5kZXhSZW5kZXJlZCh2aWR4KTtcbiAgICBpZiAoaXNJbmRleFJlbmRlcmVkKSB7XG4gICAgICBwaWR4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh2aWR4KTtcbiAgICAgIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICB9IGVsc2UgaWYgKG9mZnNjcmVlbkluc3RhbmNlKSB7XG4gICAgICBpbnN0ID0gb2Zmc2NyZWVuSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0IHx8IGluc3RbdGhpcy5pbmRleEFzXSAhPT0gdmlkeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoZG90ICsgMSk7XG4gICAgcGF0aCA9IHRoaXMuYXMgKyAocGF0aCA/ICcuJyArIHBhdGggOiAnJyk7XG4gICAgaW5zdC5fc2V0UGVuZGluZ1Byb3BlcnR5T3JQYXRoKHBhdGgsIHZhbHVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgIC8vIFRPRE8oYmxhc3Rlbik6IFYxIGRvZXNuJ3QgZG8gdGhpcyBhbmQgaXQncyBhIGJ1Z1xuICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3BpZHhdKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8IU9iamVjdD59IHNwbGljZXNcbiAgICovXG4gIF9hZGp1c3RWaXJ0dWFsSW5kZXg6IGZ1bmN0aW9uKHNwbGljZXMpIHtcbiAgICBzcGxpY2VzLmZvckVhY2goZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAvLyBkZXNlbGVjdCByZW1vdmVkIGl0ZW1zXG4gICAgICBzcGxpY2UucmVtb3ZlZC5mb3JFYWNoKHRoaXMuX3JlbW92ZUl0ZW0sIHRoaXMpO1xuICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIGNhcmUgYWJvdXQgY2hhbmdlcyBoYXBwZW5pbmcgYWJvdmUgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgIGlmIChzcGxpY2UuaW5kZXggPCB0aGlzLl92aXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGljZS5pbmRleCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGRlbHRhO1xuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9yZW1vdmVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KGl0ZW0pO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBmb2N1c2VkIGl0ZW1cbiAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0gJiZcbiAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pW3RoaXMuYXNdID09PSBpdGVtKSB7XG4gICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBwcm92aWRlZCBmdW5jdGlvbiBwZXIgZXZlcnkgcGh5c2ljYWwgaW5kZXggaW4gYGl0ZW1TZXRgXG4gICAqIGBpdGVtU2V0YCBkZWZhdWx0IHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGVudGlyZSBzZXQgb2YgcGh5c2ljYWxcbiAgICogaW5kZXhlcy5cbiAgICpcbiAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyLCBudW1iZXIpfSBmblxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2l0ZXJhdGVJdGVtczogZnVuY3Rpb24oZm4sIGl0ZW1TZXQpIHtcbiAgICB2YXIgcGlkeCwgdmlkeCwgcnRuLCBpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgaXRlbVNldCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1TZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGlkeCA9IGl0ZW1TZXRbaV07XG4gICAgICAgIHZpZHggPSB0aGlzLl9jb21wdXRlVmlkeChwaWR4KTtcbiAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwaWR4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIHZpZHggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICBmb3IgKDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsQ291bnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAocGlkeCA9IDA7IHBpZHggPCB0aGlzLl9waHlzaWNhbFN0YXJ0OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aXJ0dWFsIGluZGV4IGZvciBhIGdpdmVuIHBoeXNpY2FsIGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwaWR4IFBoeXNpY2FsIGluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIF9jb21wdXRlVmlkeDogZnVuY3Rpb24ocGlkeCkge1xuICAgIGlmIChwaWR4ID49IHRoaXMuX3BoeXNpY2FsU3RhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAocGlkeCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbFN0YXJ0KSArXG4gICAgICAgIHBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFzc2lnbnMgdGhlIGRhdGEgbW9kZWxzIHRvIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2Fzc2lnbk1vZGVsczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdO1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbdmlkeF07XG4gICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZWwpO1xuICAgICAgICBpbnN0Ll9fa2V5X18gPSBudWxsO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5hcywgaXRlbSk7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShcbiAgICAgICAgICAgIGluc3QsIHRoaXMuc2VsZWN0ZWRBcywgdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5pbmRleEFzLCB2aWR4KTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KFxuICAgICAgICAgICAgaW5zdCwgJ3RhYkluZGV4JywgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9PT0gdmlkeCA/IDAgOiAtMSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlbaW5zdC5fX2tleV9fXSA9IHBpZHg7XG4gICAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIH1cbiAgICB9LCBpdGVtU2V0KTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaGVpZ2h0IGZvciBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICovXG4gIF91cGRhdGVNZXRyaWNzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRpc3RyaWJ1dGVkIGFsbCB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAvLyBzbyB3ZSBjYW4gbWVhc3VyZSB0aGVtLlxuICAgIGZsdXNoKCk7XG5cbiAgICB2YXIgbmV3UGh5c2ljYWxTaXplID0gMDtcbiAgICB2YXIgb2xkUGh5c2ljYWxTaXplID0gMDtcbiAgICB2YXIgcHJldkF2Z0NvdW50ID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQ7XG4gICAgdmFyIHByZXZQaHlzaWNhbEF2ZyA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICBvbGRQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld1BoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA/IDEgOiAwO1xuICAgIH0sIGl0ZW1TZXQpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9XG4gICAgICAgICAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBoeXNpY2FsU2l6ZSA9ICh0aGlzLl9pdGVtc1BlclJvdyA9PT0gMSkgP1xuICAgICAgICAgIG9sZFBoeXNpY2FsU2l6ZSA6XG4gICAgICAgICAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICB0aGlzLl9waHlzaWNhbFNpemUgPVxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSArIG5ld1BoeXNpY2FsU2l6ZSAtIG9sZFBoeXNpY2FsU2l6ZTtcbiAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gMTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBhdmVyYWdlIGlmIGl0IG1lYXN1cmVkIHNvbWV0aGluZy5cbiAgICBpZiAodGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgIT09IHByZXZBdmdDb3VudCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHByZXZQaHlzaWNhbEF2ZyAqIHByZXZBdmdDb3VudCkgKyBuZXdQaHlzaWNhbFNpemUpIC9cbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCk7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVHcmlkTWV0cmljczogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlbVdpZHRoID0gdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgP1xuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDpcbiAgICAgICAgMjAwO1xuICAgIHRoaXMuX3Jvd0hlaWdodCA9XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5vZmZzZXRIZWlnaHQgOiAyMDA7XG4gICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtV2lkdGggP1xuICAgICAgICBNYXRoLmZsb29yKHRoaXMuX3ZpZXdwb3J0V2lkdGggLyB0aGlzLl9pdGVtV2lkdGgpIDpcbiAgICAgICAgdGhpcy5faXRlbXNQZXJSb3c7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwaHlzaWNhbCBpdGVtcy5cbiAgICovXG4gIF9wb3NpdGlvbkl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9hZGp1c3RTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgdmFyIHkgPSB0aGlzLl9waHlzaWNhbFRvcDtcblxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhciB0b3RhbEl0ZW1XaWR0aCA9IHRoaXMuX2l0ZW1zUGVyUm93ICogdGhpcy5faXRlbVdpZHRoO1xuICAgICAgdmFyIHJvd09mZnNldCA9ICh0aGlzLl92aWV3cG9ydFdpZHRoIC0gdG90YWxJdGVtV2lkdGgpIC8gMjtcblxuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdmFyIG1vZHVsdXMgPSB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcigobW9kdWx1cyAqIHRoaXMuX2l0ZW1XaWR0aCkgKyByb3dPZmZzZXQpO1xuICAgICAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgICAgICB4ID0geCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNsYXRlM2QoeCArICdweCcsIHkgKyAncHgnLCAwLCB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck5leHRSb3codmlkeCkpIHtcbiAgICAgICAgICB5ICs9IHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yZGVyID0gW107XG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgaXRlbSk7XG4gICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICAgIG9yZGVyLnB1c2goaXRlbUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAob3JkZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLW93bnMnLCBvcmRlci5qb2luKCcgJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgKiB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyByb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuIHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyA9PT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCB3YXMgb3ZlcmVzdGltYXRlZC5cbiAgICovXG4gIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlbHRhSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ID09PSAwID9cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgOlxuICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgIGlmIChkZWx0YUhlaWdodCAhPT0gMCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgLy8gVGhpcyBtYXkgYmUgY2FsbGVkIG91dHNpZGUgb2YgYSBzY3JvbGxIYW5kbGVyLCBzbyB1c2UgbGFzdCBjYWNoZWQgcG9zaXRpb25cbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICAgIC8vIGp1a2luZyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGludGVyaWFsIHNjcm9sbGluZyBvbiBpT1MgaXMgbm8gYnVlbm9cbiAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIF9yZXNldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbihwb3MpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIElmIHRydWUsIHVwZGF0ZXMgdGhlIGhlaWdodCBubyBtYXR0ZXIgd2hhdC5cbiAgICovXG4gIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCxcbiAgICAgICAgICAgICAgIDApICpcbiAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5ncmlkICYmIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPCB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgIGlmIChmb3JjZVVwZGF0ZSB8fFxuICAgICAgICBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpdGVtIGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSXRlbVxuICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAqL1xuICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJyB8fCBpZHggPCAwIHx8IGlkeCA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmbHVzaCgpO1xuICAgIC8vIEl0ZW1zIHNob3VsZCBoYXZlIGJlZW4gcmVuZGVyZWQgcHJpb3Igc2Nyb2xsaW5nIHRvIGFuIGluZGV4LlxuICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlkeCA9IHRoaXMuX2NsYW1wKGlkeCwgMCwgdGhpcy5fdmlydHVhbENvdW50IC0gMSk7XG4gICAgLy8gVXBkYXRlIHRoZSB2aXJ0dWFsIHN0YXJ0IG9ubHkgd2hlbiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSB8fCBpZHggPj0gdGhpcy5fbWF4VmlydHVhbFN0YXJ0KSB7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPVxuICAgICAgICAgIHRoaXMuZ3JpZCA/IChpZHggLSB0aGlzLl9pdGVtc1BlclJvdyAqIDIpIDogKGlkeCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoKTtcbiAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKlxuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICB2YXIgY3VycmVudFRvcEl0ZW0gPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgIHZhciBjdXJyZW50VmlydHVhbEl0ZW0gPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHRhcmdldE9mZnNldFRvcCA9IDA7XG4gICAgdmFyIGhpZGRlbkNvbnRlbnRTaXplID0gdGhpcy5faGlkZGVuQ29udGVudFNpemU7XG4gICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIGFzIG11Y2ggYXMgd2UgY2FuLlxuICAgIHdoaWxlIChjdXJyZW50VmlydHVhbEl0ZW0gPCBpZHggJiYgdGFyZ2V0T2Zmc2V0VG9wIDw9IGhpZGRlbkNvbnRlbnRTaXplKSB7XG4gICAgICB0YXJnZXRPZmZzZXRUb3AgPVxuICAgICAgICAgIHRhcmdldE9mZnNldFRvcCArIHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChjdXJyZW50VG9wSXRlbSk7XG4gICAgICBjdXJyZW50VG9wSXRlbSA9IChjdXJyZW50VG9wSXRlbSArIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIGN1cnJlbnRWaXJ0dWFsSXRlbSsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUodHJ1ZSk7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0ICsgdGFyZ2V0T2Zmc2V0VG9wKTtcbiAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwaHlzaWNhbCBhdmVyYWdlIGFuZCB0aGUgYXZlcmFnZSBjb3VudC5cbiAgICovXG4gIF9yZXNldEF2ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IDA7XG4gICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgPSAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IHRyaWdnZXJlZCBieSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlc2l6ZWQuXG4gICAqL1xuICBfcmVzaXplSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIC8vIFJlaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgYW5pbWF0aW9uRnJhbWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAqL1xuICBzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKi9cbiAgc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgfVxuICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleChpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBkZXNlbGVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICovXG4gIGRlc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmRlc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzZWxlY3RJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIGRlc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KFxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhIGdpdmVuIGl0ZW0gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW1cbiAgICogaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIG9iamVjdC5cbiAgICovXG4gIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5XG4gICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqL1xuICB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWQgP1xuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkKGluZGV4KSA6XG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICBpc1NlbGVjdGVkID8gdGhpcy5kZXNlbGVjdEluZGV4KGluZGV4KSA6IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBsaXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGNsZWFyU2VsZWN0aW9uXG4gICAqL1xuICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiQuc2VsZWN0b3IuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGB0YXBgIGlmIGBzZWxlY3Rpb25FbmFibGVkYCBpcyB0cnVlLFxuICAgKiBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgb3RoZXJ3aXNlLlxuICAgKi9cbiAgX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3Rpb25FbmFibGVkKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBzZWxlY3Rpb25FbmFibGVkID8gdGhpcy5saXN0ZW4gOiB0aGlzLnVubGlzdGVuO1xuICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0aGlzLCAndGFwJywgJ19zZWxlY3Rpb25IYW5kbGVyJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBpdGVtIGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICAgKi9cbiAgX3NlbGVjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgaWYgKCFtb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbW9kZWxUYWJJbmRleCwgYWN0aXZlRWxUYWJJbmRleDtcbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGUpLnBhdGhbMF07XG4gICAgdmFyIGFjdGl2ZUVsID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgIHZhciBwaHlzaWNhbEl0ZW0gPVxuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgobW9kZWxbdGhpcy5pbmRleEFzXSldO1xuICAgIC8vIFNhZmFyaSBkb2VzIG5vdCBmb2N1cyBjZXJ0YWluIGZvcm0gY29udHJvbHMgdmlhIG1vdXNlXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExODA0M1xuICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnIHx8IHRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nIHx8XG4gICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBhIHRlbXBvcmFyeSB0YWJpbmRleFxuICAgIG1vZGVsVGFiSW5kZXggPSBtb2RlbC50YWJJbmRleDtcbiAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICBhY3RpdmVFbFRhYkluZGV4ID0gYWN0aXZlRWwgPyBhY3RpdmVFbC50YWJJbmRleCA6IC0xO1xuICAgIG1vZGVsLnRhYkluZGV4ID0gbW9kZWxUYWJJbmRleDtcbiAgICAvLyBPbmx5IHNlbGVjdCB0aGUgaXRlbSBpZiB0aGUgdGFwIHdhc24ndCBvbiBhIGZvY3VzYWJsZSBjaGlsZFxuICAgIC8vIG9yIHRoZSBlbGVtZW50IGJvdW5kIHRvIGB0YWJJbmRleGBcbiAgICBpZiAoYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtICE9PSBhY3RpdmVFbCAmJlxuICAgICAgICBwaHlzaWNhbEl0ZW0uY29udGFpbnMoYWN0aXZlRWwpICYmXG4gICAgICAgIGFjdGl2ZUVsVGFiSW5kZXggIT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckl0ZW0obW9kZWxbdGhpcy5hc10pO1xuICB9LFxuXG4gIF9tdWx0aVNlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpU2VsZWN0aW9uKSB7XG4gICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuJC5zZWxlY3Rvci5tdWx0aSA9IG11bHRpU2VsZWN0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIGEgZ2l2ZW4gbGlzdCBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgKi9cbiAgdXBkYXRlU2l6ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVTaXplRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIHVwZGF0ZVNpemVGb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFt0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBiYWNrZmlsbCBpdGVtIGluIHRoZSByZW5kZXJlZCBwb29sIG9mIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIHJlcGxhY2UgdGhlIG1haW4gZm9jdXNlZCBpdGVtLiBUaGUgZm9jdXNlZCBpdGVtIGhhcyB0YWJJbmRleCA9IDBcbiAgICogYW5kIG1pZ2h0IGJlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBUaGlzIGR5bmFtaWMgcmVwbGFjZW1lbnQgaGVscHMgdG8gcHJlc2VydmUgdGhlIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgX21hbmFnZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG5cbiAgICBpZiAoZmlkeCA+PSAwICYmIGZpZHggPCB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCBpbmRleCwgY2hlY2sgaWYgdGhhdCBpbmRleCBpcyByZW5kZXJlZFxuICAgICAgLy8gaW4gYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChmaWR4KSkge1xuICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwICYmIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UsIGFzc2lnbiB0aGUgaW5pdGlhbCBmb2N1c2VkIGluZGV4LlxuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9waHlzaWNhbFN0YXJ0XTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgcmFuZG9tIGluZGV4IHRvIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IGNvbXBsZXRlcyBpdCdzIHJvdy5cbiAgICogQWxsb3dzIGZvciBiZXR0ZXIgb3JkZXIgYW5kIGZpbGwgY29tcHV0YXRpb24gd2hlbiBncmlkID09IHRydWUuXG4gICAqL1xuICBfY29udmVydEluZGV4VG9Db21wbGV0ZVJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgLy8gd2hlbiBncmlkID09IGZhbHNlIF9pdGVtUGVyUm93IGNhbiBiZSB1bnNldC5cbiAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1zUGVyUm93IHx8IDE7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZCA/IE1hdGguY2VpbChpZHggLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9pdGVtc1BlclJvdyA6XG4gICAgICAgICAgICAgICAgICAgICAgIGlkeDtcbiAgfSxcblxuICBfaXNJbmRleFJlbmRlcmVkOiBmdW5jdGlvbihpZHgpIHtcbiAgICByZXR1cm4gaWR4ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJiBpZHggPD0gdGhpcy5fdmlydHVhbEVuZDtcbiAgfSxcblxuICBfaXNJbmRleFZpc2libGU6IGZ1bmN0aW9uKGlkeCkge1xuICAgIHJldHVybiBpZHggPj0gdGhpcy5maXJzdFZpc2libGVJbmRleCAmJiBpZHggPD0gdGhpcy5sYXN0VmlzaWJsZUluZGV4O1xuICB9LFxuXG4gIF9nZXRQaHlzaWNhbEluZGV4OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKHZpZHggLSB0aGlzLl92aXJ0dWFsU3RhcnQpKSAlXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gIH0sXG5cbiAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShpZHgpO1xuICB9LFxuXG4gIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4KTtcbiAgICB9XG4gICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChwaHlzaWNhbEl0ZW0pO1xuICAgIHZhciBmb2N1c2FibGU7XG4gICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgfVxuICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2hpY2ggdGFiaW5kZXggaXMgYm91bmQgdG8gdGhlIHNlY3JldCB0YWIgaW5kZXhcbiAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgZm9jdXNhYmxlID0gZG9tKHBoeXNpY2FsSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW3RhYmluZGV4PVwiJyArIFNFQ1JFVF9UQUJJTkRFWCArICdcIl0nKTtcbiAgICB9XG4gICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgbW9kZWwudGFiSW5kZXggPSAwO1xuICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5mb2N1cygpO1xuICB9LFxuXG4gIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSAtMTtcbiAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICB9LFxuXG4gIF9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID1cbiAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJykpO1xuICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBvZmZjcmVlbiBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkudGFiSW5kZXggPSAwO1xuICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW07XG4gICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSBmcGlkeDtcbiAgICAvLyBIaWRlIHRoZSBmb2N1c2VkIHBoeXNpY2FsLlxuICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgfSxcblxuICBfcmVzdG9yZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtIHx8IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEFzc2lnbiBtb2RlbHMgdG8gdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgLy8gR2V0IHRoZSBuZXcgcGh5c2ljYWwgaW5kZXggZm9yIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID1cbiAgICAgICAgdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KTtcblxuICAgIHZhciBvblNjcmVlbkl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICBpZiAoIW9uU2NyZWVuSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb25TY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9uU2NyZWVuSXRlbSk7XG4gICAgdmFyIG9mZlNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgIC8vIFJlc3RvcmVzIHRoZSBwaHlzaWNhbCBpdGVtIG9ubHkgd2hlbiBpdCBoYXMgdGhlIHNhbWUgbW9kZWxcbiAgICAvLyBhcyB0aGUgb2Zmc2NyZWVuIG9uZS4gVXNlIGtleSBmb3IgY29tcGFyaXNvbiBzaW5jZSB1c2VycyBjYW4gc2V0XG4gICAgLy8gYSBuZXcgaXRlbSB2aWEgc2V0KCdpdGVtcy5pZHgnKS5cbiAgICBpZiAob25TY3JlZW5JbnN0YW5jZVt0aGlzLmFzXSA9PT0gb2ZmU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10pIHtcbiAgICAgIC8vIEZsaXAgdGhlIGZvY3VzIGJhY2tmaWxsLlxuICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBvblNjcmVlbkl0ZW07XG4gICAgICBvblNjcmVlbkluc3RhbmNlLnRhYkluZGV4ID0gLTE7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgLy8gSGlkZSB0aGUgcGh5c2ljYWwgaXRlbSB0aGF0IGJhY2tmaWxscy5cbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSBudWxsO1xuICB9LFxuXG4gIF9kaWRGb2N1czogZnVuY3Rpb24oZSkge1xuICAgIHZhciB0YXJnZXRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGUudGFyZ2V0KTtcbiAgICB2YXIgZm9jdXNlZE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pO1xuICAgIHZhciBoYXNPZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtICE9PSBudWxsO1xuICAgIHZhciBmaWR4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleDtcbiAgICBpZiAoIXRhcmdldE1vZGVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb2N1c2VkTW9kZWwgPT09IHRhcmdldE1vZGVsKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBmb2N1c2VkIHRoZSBzYW1lIGl0ZW0sIHRoZW4gYnJpbmcgaXQgaW50byB2aWV3IGlmIGl0J3Mgbm90XG4gICAgICAvLyB2aXNpYmxlLlxuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4VmlzaWJsZShmaWR4KSkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoZmlkeCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgLy8gUmVzdG9yZSB0YWJJbmRleCBmb3IgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0uXG4gICAgICBpZiAoZm9jdXNlZE1vZGVsKSB7XG4gICAgICAgIGZvY3VzZWRNb2RlbC50YWJJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgLy8gU2V0IHRoZSB0YWJJbmRleCBmb3IgdGhlIG5leHQgZm9jdXNlZCBpdGVtLlxuICAgICAgdGFyZ2V0TW9kZWwudGFiSW5kZXggPSAwO1xuICAgICAgZmlkeCA9IHRhcmdldE1vZGVsW3RoaXMuaW5kZXhBc107XG4gICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gZmlkeDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChmaWR4KTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleF07XG4gICAgICBpZiAoaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gJiYgIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfa2V5ZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAvKiBBUlJPV19ET1dOICovIDQwOlxuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBBUlJPV19SSUdIVCAqLyAzOTpcbiAgICAgICAgaWYgKHRoaXMuZ3JpZClcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IC0xIDogMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQVJST1dfVVAgKi8gMzg6XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID4gMClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKFxuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCAtICh0aGlzLmdyaWQgPyB0aGlzLl9pdGVtc1BlclJvdyA6IDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEFSUk9XX0xFRlQgKi8gMzc6XG4gICAgICAgIGlmICh0aGlzLmdyaWQpXG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAxIDogLTEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEVOVEVSICovIDEzOlxuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5hYmxlZClcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25IYW5kbGVyKGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgX2NsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpO1xuICB9LFxuXG4gIF9kZWJvdW5jZTogZnVuY3Rpb24obmFtZSwgY2IsIGFzeW5jTW9kdWxlKSB7XG4gICAgdGhpcy5fZGVib3VuY2VycyA9IHRoaXMuX2RlYm91bmNlcnMgfHwge307XG4gICAgdGhpcy5fZGVib3VuY2Vyc1tuYW1lXSA9XG4gICAgICAgIERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXJzW25hbWVdLCBhc3luY01vZHVsZSwgY2IuYmluZCh0aGlzKSk7XG4gICAgZW5xdWV1ZURlYm91bmNlcih0aGlzLl9kZWJvdW5jZXJzW25hbWVdKTtcbiAgfSxcblxuICBfZm9yd2FyZFByb3BlcnR5OiBmdW5jdGlvbihpbnN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyogVGVtcGxhdGl6ZXIgYmluZGluZ3MgZm9yIHYyICovXG4gIF9mb3J3YXJkSG9zdFByb3BWMjogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5mb3J3YXJkSG9zdFByb3AocHJvcCwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX25vdGlmeUluc3RhbmNlUHJvcFYyOiBmdW5jdGlvbihpbnN0LCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChtYXRjaGVzKHRoaXMuYXMsIHByb3ApKSB7XG4gICAgICB2YXIgaWR4ID0gaW5zdFt0aGlzLmluZGV4QXNdO1xuICAgICAgaWYgKHByb3AgPT0gdGhpcy5hcykge1xuICAgICAgICB0aGlzLml0ZW1zW2lkeF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm90aWZ5UGF0aCh0cmFuc2xhdGUodGhpcy5hcywgJ2l0ZW1zLicgKyBpZHgsIHByb3ApLCB2YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MSAqL1xuICBfZ2V0U3RhbXBlZENoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxJdGVtcztcbiAgfSxcblxuICBfZm9yd2FyZEluc3RhbmNlUGF0aDogZnVuY3Rpb24oaW5zdCwgcGF0aCwgdmFsdWUpIHtcbiAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuYXMgKyAnLicpID09PSAwKSB7XG4gICAgICB0aGlzLm5vdGlmeVBhdGgoXG4gICAgICAgICAgJ2l0ZW1zLicgKyBpbnN0Ll9fa2V5X18gKyAnLicgKyBwYXRoLnNsaWNlKHRoaXMuYXMubGVuZ3RoICsgMSksXG4gICAgICAgICAgdmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfZm9yd2FyZFBhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgfSxcblxuICBfZm9yd2FyZFBhcmVudFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSlbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIC8qIEdldHMgdGhlIGFjdGl2ZUVsZW1lbnQgb2YgdGhlIHNoYWRvdyByb290L2hvc3QgdGhhdCBjb250YWlucyB0aGUgbGlzdC4gKi9cbiAgX2dldEFjdGl2ZUVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtc0hvc3QgPSB0aGlzLl9pdGVtc1BhcmVudC5ub2RlLmRvbUhvc3Q7XG4gICAgcmV0dXJuIGRvbShpdGVtc0hvc3QgPyBpdGVtc0hvc3Qucm9vdCA6IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50O1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOCBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IENvbWJvQm94UGxhY2Vob2xkZXIgfSBmcm9tICcuL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbWJvQm94RGF0YVByb3ZpZGVyTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIERhdGFQcm92aWRlck1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogTnVtYmVyIG9mIGl0ZW1zIGZldGNoZWQgYXQgYSB0aW1lIGZyb20gdGhlIGRhdGFwcm92aWRlci5cbiAgICAgICAqL1xuICAgICAgcGFnZVNpemU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAsXG4gICAgICAgIG9ic2VydmVyOiAnX3BhZ2VTaXplQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBzaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6ICdfc2l6ZUNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgaXRlbXMgbGF6aWx5LiBSZWNlaXZlcyBhcmd1bWVudHMgYHBhcmFtc2AsIGBjYWxsYmFja2BcbiAgICAgICAqXG4gICAgICAgKiBgcGFyYW1zLnBhZ2VgIFJlcXVlc3RlZCBwYWdlIGluZGV4XG4gICAgICAgKlxuICAgICAgICogYHBhcmFtcy5wYWdlU2l6ZWAgQ3VycmVudCBwYWdlIHNpemVcbiAgICAgICAqXG4gICAgICAgKiBgcGFyYW1zLmZpbHRlcmAgQ3VycmVudGx5IGFwcGxpZWQgZmlsdGVyXG4gICAgICAgKlxuICAgICAgICogYGNhbGxiYWNrKGl0ZW1zLCBzaXplKWAgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHM6XG4gICAgICAgKiAgIC0gYGl0ZW1zYCBDdXJyZW50IHBhZ2Ugb2YgaXRlbXNcbiAgICAgICAqICAgLSBgc2l6ZWAgVG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBkYXRhUHJvdmlkZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogJ19kYXRhUHJvdmlkZXJDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX3BlbmRpbmdSZXF1ZXN0czoge1xuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX19wbGFjZUhvbGRlcjoge1xuICAgICAgICB2YWx1ZTogbmV3IENvbWJvQm94UGxhY2Vob2xkZXIoKVxuICAgICAgfVxuXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX2RhdGFQcm92aWRlckZpbHRlckNoYW5nZWQoZmlsdGVyLCBkYXRhUHJvdmlkZXIpJyxcbiAgICAgICdfZGF0YVByb3ZpZGVyQ2xlYXJGaWx0ZXIoZGF0YVByb3ZpZGVyLCBvcGVuZWQsIHZhbHVlKScsXG4gICAgICAnX3dhcm5EYXRhUHJvdmlkZXJWYWx1ZShkYXRhUHJvdmlkZXIsIHZhbHVlKScsXG4gICAgICAnX2Vuc3VyZUZpcnN0UGFnZShvcGVuZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgX2RhdGFQcm92aWRlckNsZWFyRmlsdGVyKGRhdGFQcm92aWRlciwgb3BlbmVkLCB2YWx1ZSkge1xuICAgIC8vIENhbid0IGRlcGVuZCBvbiBmaWx0ZXIgaW4gdGhpcyBvYnNldmVyIGFzIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBjbGVhciB0aGUgZmlsdGVyIHdoZW5ldmVyIGl0J3Mgc2V0XG4gICAgaWYgKGRhdGFQcm92aWRlciAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID0ge307XG4gICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdpbmRleC1yZXF1ZXN0ZWQnLCBlID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWwuaW5kZXg7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZExvYWRQYWdlKHBhZ2UpKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZFBhZ2UocGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9kYXRhUHJvdmlkZXJGaWx0ZXJDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGFQcm92aWRlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID0ge307XG4gICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB9XG4gIH1cblxuICBfZW5zdXJlRmlyc3RQYWdlKG9wZW5lZCkge1xuICAgIGlmIChvcGVuZWQgJiYgdGhpcy5fc2hvdWxkTG9hZFBhZ2UoMCkpIHtcbiAgICAgIHRoaXMuX2xvYWRQYWdlKDApO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRMb2FkUGFnZShwYWdlKSB7XG4gICAgaWYgKCF0aGlzLmZpbHRlcmVkSXRlbXMgfHwgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCkge1xuICAgICAgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVkSXRlbSA9IHRoaXMuZmlsdGVyZWRJdGVtc1twYWdlICogdGhpcy5wYWdlU2l6ZV07XG4gICAgaWYgKGxvYWRlZEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGxvYWRlZEl0ZW0gaW5zdGFuY2VvZiBDb21ib0JveFBsYWNlaG9sZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplID09PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgX2xvYWRQYWdlKHBhZ2UpIHtcbiAgICAvLyBtYWtlIHN1cmUgc2FtZSBwYWdlIGlzbid0IHJlcXVlc3RlZCBtdWx0aXBsZSB0aW1lcy5cbiAgICBpZiAoIXRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXSAmJiB0aGlzLmRhdGFQcm92aWRlcikge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYWdlLFxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoaXRlbXMsIHNpemUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXSA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyZWRJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5zcGxpY2UocGFyYW1zLnBhZ2UgKiBwYXJhbXMucGFnZVNpemUsIGl0ZW1zLmxlbmd0aCwgLi4uaXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoJ2ZpbHRlcmVkSXRlbXMnLCBwYXJhbXMucGFnZSAqIHBhcmFtcy5wYWdlU2l6ZSwgaXRlbXMubGVuZ3RoLCAuLi5pdGVtcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEl0ZW0gZnJvbSBmaWx0ZXJlZEl0ZW1zIGlmIHZhbHVlIGlzIHNldFxuICAgICAgICAgIGlmICh0aGlzLl9pc1ZhbGlkVmFsdWUodGhpcy52YWx1ZSkgJiYgdGhpcy5fZ2V0SXRlbVZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtKSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbUZvclZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXTtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wZW5kaW5nUmVxdWVzdHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYWdlID09PSAwICYmIHRoaXMuX19yZXBvc2l0aW9uT3ZlcmxheURlYm91bmNlciAmJiBpdGVtcy5sZW5ndGggPiAodGhpcy5fX21heFJlbmRlcmVkSXRlbXMgfHwgMCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fX3JlcG9zaXRpb25PdmVybGF5RGVib3VuY2VyLmZsdXNoKCkpO1xuICAgICAgICAgICAgdGhpcy5fX21heFJlbmRlcmVkSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzW3BhZ2VdID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLmRhdGFQcm92aWRlcihwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UGFnZUZvckluZGV4KGluZGV4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhY2hlZCBwYWdlcyBhbmQgcmVsb2FkcyBkYXRhIGZyb20gZGF0YXByb3ZpZGVyIHdoZW4gbmVlZGVkLlxuICAgKi9cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YVByb3ZpZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9IHt9O1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLnNpemUgfHwgMCk7IGkrKykge1xuICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKHRoaXMuX19wbGFjZUhvbGRlcik7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9sb2FkUGFnZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3NpemVDaGFuZ2VkKHNpemUgPSAwKSB7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9ICh0aGlzLmZpbHRlcmVkSXRlbXMgfHwgW10pLnNsaWNlKDAsIHNpemUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBmaWx0ZXJlZEl0ZW1zW2ldID0gZmlsdGVyZWRJdGVtc1tpXSAhPT0gdW5kZWZpbmVkID8gZmlsdGVyZWRJdGVtc1tpXSA6IHRoaXMuX19wbGFjZUhvbGRlcjtcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgfVxuXG4gIF9wYWdlU2l6ZUNoYW5nZWQocGFnZVNpemUsIG9sZFBhZ2VTaXplKSB7XG4gICAgaWYgKE1hdGguZmxvb3IocGFnZVNpemUpICE9PSBwYWdlU2l6ZSB8fCBwYWdlU2l6ZSA9PT0gMCkge1xuICAgICAgdGhpcy5wYWdlU2l6ZSA9IG9sZFBhZ2VTaXplO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgcGFnZVNpemVgIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciA+IDAnKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cblxuICBfZGF0YVByb3ZpZGVyQ2hhbmdlZChkYXRhUHJvdmlkZXIsIG9sZERhdGFQcm92aWRlcikge1xuICAgIHRoaXMuX2Vuc3VyZUl0ZW1zT3JEYXRhUHJvdmlkZXIoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBvbGREYXRhUHJvdmlkZXI7XG4gICAgfSk7XG4gIH1cblxuICBfZW5zdXJlSXRlbXNPckRhdGFQcm92aWRlcihyZXN0b3JlT2xkVmFsdWVDYWxsYmFjaykge1xuICAgIGlmICh0aGlzLml0ZW1zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5kYXRhUHJvdmlkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdG9yZU9sZFZhbHVlQ2FsbGJhY2soKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNpbmcgYGl0ZW1zYCBhbmQgYGRhdGFQcm92aWRlcmAgdG9nZXRoZXIgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhUHJvdmlkZXIgJiYgIXRoaXMuZmlsdGVyZWRJdGVtcykge1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgfVxuICB9XG5cbiAgX3dhcm5EYXRhUHJvdmlkZXJWYWx1ZShkYXRhUHJvdmlkZXIsIHZhbHVlKSB7XG4gICAgaWYgKGRhdGFQcm92aWRlciAmJiB2YWx1ZSAhPT0gJycgJiYgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZWxlY3RlZEl0ZW0gPT09IG51bGwpKSB7XG4gICAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy5faW5kZXhPZlZhbHVlKHZhbHVlLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgICAgaWYgKHZhbHVlSW5kZXggPCAwIHx8ICF0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy5maWx0ZXJlZEl0ZW1zW3ZhbHVlSW5kZXhdKSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogdW5hYmxlIHRvIGRldGVybWluZSB0aGUgbGFiZWwgZm9yIHRoZSBwcm92aWRlZCBgdmFsdWVgLiAnICtcbiAgICAgICAgICAnTm90aGluZyB0byBkaXNwbGF5IGluIHRoZSB0ZXh0IGZpZWxkLiBUaGlzIHVzdWFsbHkgaGFwcGVucyB3aGVuICcgK1xuICAgICAgICAgICdzZXR0aW5nIGFuIGluaXRpYWwgYHZhbHVlYCBiZWZvcmUgYW55IGl0ZW1zIGFyZSByZXR1cm5lZCBmcm9tICcgK1xuICAgICAgICAgICd0aGUgYGRhdGFQcm92aWRlcmAgY2FsbGJhY2suIENvbnNpZGVyIHNldHRpbmcgYHNlbGVjdGVkSXRlbWAgJyArXG4gICAgICAgICAgJ2luc3RlYWQgb2YgYHZhbHVlYCdcbiAgICAgICAgKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWxpc3QvaXJvbi1saXN0LmpzJztcbmltcG9ydCAnLi92YWFkaW4tY29tYm8tYm94LWl0ZW0uanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24uanMnO1xuaW1wb3J0IHsgQ29tYm9Cb3hQbGFjZWhvbGRlciB9IGZyb20gJy4vdmFhZGluLWNvbWJvLWJveC1wbGFjZWhvbGRlci5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCBUT1VDSF9ERVZJQ0UgPSAoKCkgPT4ge1xuICB0cnkge1xuICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbi8qKlxuICogRWxlbWVudCBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ29tYm9Cb3hEcm9wZG93bldyYXBwZXJFbGVtZW50IGV4dGVuZHMgKGNsYXNzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge30pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8dmFhZGluLWNvbWJvLWJveC1kcm9wZG93biBpZD1cImRyb3Bkb3duXCIgaGlkZGVuPVwiW1tfaGlkZGVuKF9pdGVtcy4qLCBsb2FkaW5nKV1dXCIgcG9zaXRpb24tdGFyZ2V0PVwiW1twb3NpdGlvblRhcmdldF1dXCIgb24tdGVtcGxhdGUtY2hhbmdlZD1cIl90ZW1wbGF0ZUNoYW5nZWRcIiBvbi1wb3NpdGlvbi1jaGFuZ2VkPVwiX3NldE92ZXJsYXlIZWlnaHRcIiBkaXNhYmxlLXVwZ3JhZGU9XCJcIiB0aGVtZT1cIltbdGhlbWVdXVwiPlxuICAgICAgPHRlbXBsYXRlPlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgI3Njcm9sbGVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgICAgICAvKiBGaXhlcyBpdGVtIGJhY2tncm91bmQgZnJvbSBnZXR0aW5nIG9uIHRvcCBvZiBzY3JvbGxiYXJzIG9uIFNhZmFyaSAqL1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcblxuICAgICAgICAgICAgLyogRW5hYmxlIG1vbWVudHVtIHNjcm9sbGluZyBvbiBpT1MgKGlyb24tbGlzdCB2MS4yKyBubyBsb25nZXIgZG9lcyBpdCBmb3IgdXMpICovXG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgICAgICAgICAgIC8qIEZpeGVzIHNjcm9sbGJhciBkaXNhcHBlYXJpbmcgd2hlbiAnU2hvdyBzY3JvbGwgYmFyczogQWx3YXlzJyBlbmFibGVkIGluIFNhZmFyaSAqL1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGlkPVwic2Nyb2xsZXJcIiBvbi1jbGljaz1cIl9zdG9wUHJvcGFnYXRpb25cIj5cbiAgICAgICAgICA8aXJvbi1saXN0IGlkPVwic2VsZWN0b3JcIiByb2xlPVwibGlzdGJveFwiIGl0ZW1zPVwiW1tfZ2V0SXRlbXMob3BlbmVkLCBfaXRlbXMpXV1cIiBzY3JvbGwtdGFyZ2V0PVwiW1tfc2Nyb2xsZXJdXVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgICA8dmFhZGluLWNvbWJvLWJveC1pdGVtIG9uLWNsaWNrPVwiX29uSXRlbUNsaWNrXCIgaW5kZXg9XCJbW19fcmVxdWVzdEl0ZW1CeUluZGV4KGl0ZW0sIGluZGV4KV1dXCIgaXRlbT1cIltbaXRlbV1dXCIgbGFiZWw9XCJbW2dldEl0ZW1MYWJlbChpdGVtLCBfaXRlbUxhYmVsUGF0aCldXVwiIHNlbGVjdGVkPVwiW1tfaXNJdGVtU2VsZWN0ZWQoaXRlbSwgX3NlbGVjdGVkSXRlbSwgX2l0ZW1JZFBhdGgpXV1cIiByZW5kZXJlcj1cIltbcmVuZGVyZXJdXVwiIHJvbGVcXCQ9XCJbW19nZXRBcmlhUm9sZShpbmRleCldXVwiIGFyaWEtc2VsZWN0ZWRcXCQ9XCJbW19nZXRBcmlhU2VsZWN0ZWQoX2ZvY3VzZWRJbmRleCxpbmRleCldXVwiIGZvY3VzZWQ9XCJbW19pc0l0ZW1Gb2N1c2VkKF9mb2N1c2VkSW5kZXgsaW5kZXgpXV1cIiB0YWJpbmRleD1cIi0xXCIgdGhlbWVcXCQ9XCJbW3RoZW1lXV1cIj5cbiAgICAgICAgICAgICAgPC92YWFkaW4tY29tYm8tYm94LWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvaXJvbi1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXInO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGRldmljZSBzdXBwb3J0cyB0b3VjaCBldmVudHMuXG4gICAgICAgKi9cbiAgICAgIHRvdWNoRGV2aWNlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBUT1VDSF9ERVZJQ0VcbiAgICAgIH0sXG5cbiAgICAgIG9wZW5lZDogQm9vbGVhbixcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWxlbWVudCB0byBwb3NpdGlvbi9hbGlnbiB0aGUgZHJvcGRvd24gYnkuXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uVGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDdXN0b20gZnVuY3Rpb24gZm9yIHJlbmRlcmluZyB0aGUgY29udGVudCBvZiB0aGUgYDx2YWFkaW4tY29tYm8tYm94LWl0ZW0+YCBwcm9wYWdhdGVkIGZyb20gdGhlIGNvbWJvIGJveCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogYHRydWVgIHdoZW4gbmV3IGl0ZW1zIGFyZSBiZWluZyBsb2FkZWQuXG4gICAgICAgKi9cbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX3NldE92ZXJsYXlIZWlnaHQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzZWQgdG8gcHJvcGFnYXRlIHRoZSBgdGhlbWVgIGF0dHJpYnV0ZSBmcm9tIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHRoZW1lOiBTdHJpbmcsXG5cbiAgICAgIF9zZWxlY3RlZEl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICBfaXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICBfZm9jdXNlZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogJ19mb2N1c2VkSW5kZXhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6ICdfZ2V0Rm9jdXNlZEl0ZW0oX2ZvY3VzZWRJbmRleCknXG4gICAgICB9LFxuXG4gICAgICBfaXRlbUxhYmVsUGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnbGFiZWwnXG4gICAgICB9LFxuXG4gICAgICBfaXRlbVZhbHVlUGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0b3I6IE9iamVjdCxcblxuICAgICAgX2l0ZW1JZFBhdGg6IFN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gWydfc2VsZWN0b3JDaGFuZ2VkKF9zZWxlY3RvciknLCAnX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpJywgJ19vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgX2l0ZW1zLCBsb2FkaW5nKSddO1xuICB9XG5cbiAgX2ZpcmVUb3VjaEFjdGlvbihzb3VyY2VFdmVudCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1vdmVybGF5LXRvdWNoLWFjdGlvbicsIHtcbiAgICAgIGRldGFpbDoge3NvdXJjZUV2ZW50OiBzb3VyY2VFdmVudH1cbiAgICB9KSk7XG4gIH1cblxuICBfZ2V0SXRlbXMob3BlbmVkLCBpdGVtcykge1xuICAgIHJldHVybiBvcGVuZWQgPyBpdGVtcyA6IFtdO1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQob3BlbmVkLCBpdGVtcywgbG9hZGluZykge1xuICAgIGlmICh0aGlzLiQuZHJvcGRvd24uaGFzQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKSkge1xuICAgICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5pdERyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERvIG5vdCBhdHRhY2ggaWYgbm8gaXRlbXNcbiAgICAvLyBEbyBub3QgZGV0dGFjaCBpZiBvcGVuZWQgYnV0IHVzZXIgdHlwZXMgYW4gaW52YWxpZCBzZWFyY2hcbiAgICB0aGlzLiQuZHJvcGRvd24ub3BlbmVkID0gISEob3BlbmVkICYmIChsb2FkaW5nIHx8IHRoaXMuJC5kcm9wZG93bi5vcGVuZWQgfHwgaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSk7XG4gIH1cblxuICBfaW5pdERyb3Bkb3duKCkge1xuICAgIHRoaXMuJC5kcm9wZG93bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDaGFuZ2VkKCk7XG4gICAgdGhpcy5fbG9hZGluZ0NoYW5nZWQodGhpcy5sb2FkaW5nKTtcblxuICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHRoaXMuX2ZpcmVUb3VjaEFjdGlvbihlKSk7XG4gICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBlID0+IHRoaXMuX2ZpcmVUb3VjaEFjdGlvbihlKSk7XG5cbiAgICAvLyBQcmV2ZW50IGJsdXJyaW5nIHRoZSBpbnB1dCB3aGVuIGNsaWNraW5nIGluc2lkZSB0aGUgb3ZlcmxheS5cbiAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxuICAgIC8vIElFMTE6IHdoZW4gc2Nyb2xsaW5nIHdpdGggbW91c2UsIHRoZSBmb2N1cyBnb2VzIHRvIHRoZSBzY3JvbGxlci5cbiAgICAvLyBUaGlzIGNhdXNlcyB0aGUgb3ZlcmxheSBjbG9zaW5nIGR1ZSB0byBkZWZvY3VzaW5nIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAvLyBQcmV2ZW50IGZvY3VzaW5nIHRoZSBzY3JvbGxlciBieSBzZXR0aW5nIGB1bnNlbGVjdGFibGU9XCJvblwiYC5cbiAgICBpZiAoL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHRoaXMuX3Njcm9sbGVyLnNldEF0dHJpYnV0ZSgndW5zZWxlY3RhYmxlJywgJ29uJyk7XG4gICAgfVxuICB9XG5cbiAgX3RlbXBsYXRlQ2hhbmdlZChlKSB7XG4gICAgaWYgKHRoaXMuJC5kcm9wZG93bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0b3IgPSB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LmNvbnRlbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdG9yJyk7XG4gICAgdGhpcy5fc2Nyb2xsZXIgPSB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LmNvbnRlbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbGVyJyk7XG4gIH1cblxuICBfbG9hZGluZ0NoYW5nZWQobG9hZGluZykge1xuICAgIGlmICh0aGlzLiQuZHJvcGRvd24uaGFzQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0b3JDaGFuZ2VkKHNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcGF0Y2hXaGVlbE92ZXJTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIF9zZXRPdmVybGF5SGVpZ2h0KCkge1xuICAgIGlmICghdGhpcy5vcGVuZWQgfHwgIXRoaXMucG9zaXRpb25UYXJnZXQgfHwgIXRoaXMuX3NlbGVjdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMucG9zaXRpb25UYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLl9zY3JvbGxlci5zdHlsZS5tYXhIZWlnaHQgPSAod2luZG93LlNoYWR5Q1NTID9cbiAgICAgIHdpbmRvdy5TaGFkeUNTUy5nZXRDb21wdXRlZFN0eWxlVmFsdWUodGhpcywgJy0tdmFhZGluLWNvbWJvLWJveC1vdmVybGF5LW1heC1oZWlnaHQnKSA6XG4gICAgICBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJy0tdmFhZGluLWNvbWJvLWJveC1vdmVybGF5LW1heC1oZWlnaHQnKSkgfHwgJzY1dmgnO1xuXG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5fbWF4T3ZlcmxheUhlaWdodCh0YXJnZXRSZWN0KTtcblxuICAgIC8vIG92ZXJsYXkgbWF4IGhlaWdodCBpcyByZXN0cmFpbmVkIGJ5IHRoZSAjc2Nyb2xsZXIgbWF4IGhlaWdodCB3aGljaCBpcyBzZXQgdG8gNjV2aCBpbiBDU1MuXG4gICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHNldCBoZWlnaHQgZm9yIGlyb24tbGlzdCB0byBtYWtlIGl0cyBgZmlyc3RWaXNpYmxlSW5kZXhgIHdvcmsgY29ycmVjdGx5LlxuICAgIHRoaXMuX3NlbGVjdG9yLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gIH1cblxuICBfbWF4T3ZlcmxheUhlaWdodCh0YXJnZXRSZWN0KSB7XG4gICAgY29uc3QgbWFyZ2luID0gODtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSAxMTY7IC8vIEhlaWdodCBvZiB0d28gaXRlbXMgaW4gY29tYm8tYm94XG4gICAgY29uc3QgYm90dG9tID0gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcblxuICAgIGlmICh0aGlzLiQuZHJvcGRvd24uYWxpZ25lZEFib3ZlKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgodGFyZ2V0UmVjdC50b3AgLSBtYXJnaW4gKyBNYXRoLm1pbihkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgMCksIG1pbkhlaWdodCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoYm90dG9tIC0gdGFyZ2V0UmVjdC5ib3R0b20gLSBtYXJnaW4sIG1pbkhlaWdodCkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRGb2N1c2VkSXRlbShmb2N1c2VkSW5kZXgpIHtcbiAgICBpZiAoZm9jdXNlZEluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tmb2N1c2VkSW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIF9pc0l0ZW1TZWxlY3RlZChpdGVtLCBzZWxlY3RlZEl0ZW0sIGl0ZW1JZFBhdGgpIHtcbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIENvbWJvQm94UGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGl0ZW1JZFBhdGggJiYgaXRlbSAhPT0gdW5kZWZpbmVkICYmIHNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoaXRlbUlkUGF0aCwgaXRlbSkgPT09IHRoaXMuZ2V0KGl0ZW1JZFBhdGgsIHNlbGVjdGVkSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBzZWxlY3RlZEl0ZW07XG4gICAgfVxuICB9XG5cbiAgX29uSXRlbUNsaWNrKGUpIHtcbiAgICBpZiAoZS5kZXRhaWwgJiYgZS5kZXRhaWwuc291cmNlRXZlbnQgJiYgZS5kZXRhaWwuc291cmNlRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24oZS5kZXRhaWwuc291cmNlRXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbi1jaGFuZ2VkJywge2RldGFpbDoge2l0ZW06IGUubW9kZWwuaXRlbX19KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gd2l0aCB0aGUgcHJvdmlkZWQgbGFiZWwuXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGluZGV4T2ZMYWJlbChsYWJlbCkge1xuICAgIGlmICh0aGlzLl9pdGVtcyAmJiBsYWJlbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRJdGVtTGFiZWwodGhpcy5faXRlbXNbaV0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBsYWJlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBkYXRhUHJvdmlkZXIgaXMgdXNlZCwgZGlzcGF0Y2ggYSByZXF1ZXN0IGZvciB0aGUgaXRlbeKAmXMgaW5kZXggaWZcbiAgICogdGhlIGl0ZW0gaXMgYSBwbGFjZWhvbGRlciBvYmplY3QuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIF9fcmVxdWVzdEl0ZW1CeUluZGV4KGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKChpdGVtIGluc3RhbmNlb2YgQ29tYm9Cb3hQbGFjZWhvbGRlcikgJiYgaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5kZXgtcmVxdWVzdGVkJywge2RldGFpbDoge2luZGV4fX0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbGFiZWwgc3RyaW5nIGZvciB0aGUgaXRlbSBiYXNlZCBvbiB0aGUgYF9pdGVtTGFiZWxQYXRoYC5cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0SXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICBpdGVtTGFiZWxQYXRoID0gaXRlbUxhYmVsUGF0aCB8fCB0aGlzLl9pdGVtTGFiZWxQYXRoO1xuICAgIGxldCBsYWJlbCA9IGl0ZW0gJiYgaXRlbUxhYmVsUGF0aCA/IHRoaXMuZ2V0KGl0ZW1MYWJlbFBhdGgsIGl0ZW0pIDogdW5kZWZpbmVkO1xuICAgIGlmIChsYWJlbCA9PT0gdW5kZWZpbmVkIHx8IGxhYmVsID09PSBudWxsKSB7XG4gICAgICBsYWJlbCA9IGl0ZW0gPyBpdGVtLnRvU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgX2lzSXRlbUZvY3VzZWQoZm9jdXNlZEluZGV4LCBpdGVtSW5kZXgpIHtcbiAgICByZXR1cm4gZm9jdXNlZEluZGV4ID09IGl0ZW1JbmRleDtcbiAgfVxuXG4gIF9nZXRBcmlhU2VsZWN0ZWQoZm9jdXNlZEluZGV4LCBpdGVtSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNJdGVtRm9jdXNlZChmb2N1c2VkSW5kZXgsIGl0ZW1JbmRleCkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIF9nZXRBcmlhUm9sZShpdGVtSW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbUluZGV4ICE9PSB1bmRlZmluZWQgPyAnb3B0aW9uJyA6IGZhbHNlO1xuICB9XG5cbiAgX2ZvY3VzZWRJbmRleENoYW5nZWQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5fc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIF9zY3JvbGxJbnRvVmlldyhpbmRleCkge1xuICAgIGlmICghKHRoaXMub3BlbmVkICYmIGluZGV4ID49IDApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZpc2libGVJdGVtc0NvdW50ID0gdGhpcy5fdmlzaWJsZUl0ZW1zQ291bnQoKTtcbiAgICBpZiAodmlzaWJsZUl0ZW1zQ291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2Nyb2xsZXIgaXMgbm90IHZpc2libGUuIE1vdmluZyBpcyB1bm5lY2Vzc2FyeS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0SW5kZXggPSBpbmRleDtcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX3NlbGVjdG9yLmxhc3RWaXNpYmxlSW5kZXggLSAxKSB7XG4gICAgICAvLyBJbmRleCBpcyBiZWxvdyB0aGUgYm90dG9tLCBzY3JvbGxpbmcgZG93bi4gTWFrZSB0aGUgaXRlbSBhcHBlYXIgYXQgdGhlIGJvdHRvbS5cbiAgICAgIC8vIEZpcnN0IHNjcm9sbCB0byB0YXJnZXQgKHdpbGwgYmUgYXQgdGhlIHRvcCBvZiB0aGUgc2Nyb2xsZXIpIHRvIG1ha2Ugc3VyZSBpdCdzIHJlbmRlcmVkLlxuICAgICAgdGhpcy5fc2VsZWN0b3Iuc2Nyb2xsVG9JbmRleChpbmRleCk7XG4gICAgICAvLyBUaGVuIGNhbGN1bGF0ZSB0aGUgaW5kZXggZm9yIHRoZSBmb2xsb3dpbmcgc2Nyb2xsICh0byBnZXQgdGhlIHRhcmdldCB0byBib3R0b20gb2YgdGhlIHNjcm9sbGVyKS5cbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXggLSB2aXNpYmxlSXRlbXNDb3VudCArIDE7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IHRoaXMuX3NlbGVjdG9yLmZpcnN0VmlzaWJsZUluZGV4KSB7XG4gICAgICAvLyBUaGUgaXRlbSBpcyBhbHJlYWR5IHZpc2libGUsIHNjcm9sbGluZyBpcyB1bm5lY2Vzc2FyeSBwZXIgc2UuIEJ1dCB3ZSBuZWVkIHRvIHRyaWdnZXIgaXJvbi1saXN0IHRvIHNldFxuICAgICAgLy8gdGhlIGNvcnJlY3Qgc2Nyb2xsVG9wIG9uIHRoZSBzY3JvbGxUYXJnZXQuIFNjcm9sbGluZyB0byBmaXJzdFZpc2libGVJbmRleC5cbiAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5fc2VsZWN0b3IuZmlyc3RWaXNpYmxlSW5kZXg7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdG9yLnNjcm9sbFRvSW5kZXgoTWF0aC5tYXgoMCwgdGFyZ2V0SW5kZXgpKTtcblxuICAgIC8vIFNvbWV0aW1lcyB0aGUgaXRlbSBpcyBwYXJ0bHkgYmVsb3cgdGhlIGJvdHRvbSBlZGdlLCBkZXRlY3QgYW5kIGFkanVzdC5cbiAgICBjb25zdCBwaWR4ID0gdGhpcy5fc2VsZWN0b3IuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpLFxuICAgICAgcGh5c2ljYWxJdGVtID0gdGhpcy5fc2VsZWN0b3IuX3BoeXNpY2FsSXRlbXNbcGlkeF07XG4gICAgaWYgKCFwaHlzaWNhbEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGh5c2ljYWxJdGVtUmVjdCA9IHBoeXNpY2FsSXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbGVyUmVjdCA9IHRoaXMuX3Njcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsVG9wQWRqdXN0ID0gcGh5c2ljYWxJdGVtUmVjdC5ib3R0b20gLSBzY3JvbGxlclJlY3QuYm90dG9tICsgdGhpcy5fdmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b207XG4gICAgaWYgKHNjcm9sbFRvcEFkanVzdCA+IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbGVyLnNjcm9sbFRvcCArPSBzY3JvbGxUb3BBZGp1c3Q7XG4gICAgfVxuICB9XG5cbiAgZW5zdXJlSXRlbXNSZW5kZXJlZCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rvci5fcmVuZGVyKCk7XG4gIH1cblxuICBhZGp1c3RTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgdGhpcy5faXRlbXMpIHtcbiAgICAgIHRoaXMuX3Njcm9sbEludG9WaWV3KHRoaXMuX2ZvY3VzZWRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdlIHdhbnQgdG8gcHJldmVudCB0aGUga2luZXRpYyBzY3JvbGxpbmcgZW5lcmd5IGZyb20gYmVpbmcgdHJhbnNmZXJyZWQgZnJvbSB0aGUgb3ZlcmxheSBjb250ZW50cyBvdmVyIHRvIHRoZSBwYXJlbnQuXG4gICAqIEZ1cnRoZXIgaW1wcm92ZW1lbnQgaWRlYXM6IGFmdGVyIHRoZSBjb250ZW50cyBoYXZlIGJlZW4gc2Nyb2xsZWQgdG8gdGhlIHRvcCBvciBib3R0b20gYW5kIHNjcm9sbGluZyBoYXMgc3RvcHBlZCwgaXQgY291bGQgYWxsb3dcbiAgICogc2Nyb2xsaW5nIHRoZSBwYXJlbnQgc2ltaWxhcmx5IHRvIHRvdWNoIHNjcm9sbGluZy5cbiAgICovXG4gIF9wYXRjaFdoZWVsT3ZlclNjcm9sbGluZygpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuX3NlbGVjdG9yO1xuICAgIHNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxlciA9IHNlbGVjdG9yLl9zY3JvbGxlciB8fCBzZWxlY3Rvci5zY3JvbGxUYXJnZXQ7XG4gICAgICBjb25zdCBzY3JvbGxlZFRvVG9wID0gc2Nyb2xsZXIuc2Nyb2xsVG9wID09PSAwO1xuICAgICAgY29uc3Qgc2Nyb2xsZWRUb0JvdHRvbSA9IChzY3JvbGxlci5zY3JvbGxIZWlnaHQgLSBzY3JvbGxlci5zY3JvbGxUb3AgLSBzY3JvbGxlci5jbGllbnRIZWlnaHQpIDw9IDE7XG5cbiAgICAgIGlmIChzY3JvbGxlZFRvVG9wICYmIGUuZGVsdGFZIDwgMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbGVkVG9Cb3R0b20gJiYgZS5kZWx0YVkgPiAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpIHtcbiAgICB0aGlzLl9jYWNoZWRWaWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZWxlY3Rvci51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgfVxuXG4gIGdldCBfdmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b20oKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGl0ZW1zU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9zZWxlY3Rvci4kLml0ZW1zKTtcbiAgICAgIHRoaXMuX2NhY2hlZFZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tID0gW1xuICAgICAgICBpdGVtc1N0eWxlLnBhZGRpbmdCb3R0b20sXG4gICAgICAgIGl0ZW1zU3R5bGUuYm9yZGVyQm90dG9tV2lkdGhcbiAgICAgIF0ubWFwKHYgPT4ge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodiwgMTApO1xuICAgICAgfSkucmVkdWNlKChzdW0sIHYpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bSArIHY7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkVmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b207XG4gIH1cblxuICBfdmlzaWJsZUl0ZW1zQ291bnQoKSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBpdGVtcyBhcmUgcmVuZGVyZWRcbiAgICB0aGlzLl9zZWxlY3Rvci5mbHVzaERlYm91bmNlcignX2RlYm91bmNlVGVtcGxhdGUnKTtcbiAgICAvLyBFbnN1cmUgaXRlbXMgYXJlIHBvc2l0aW9uZWRcbiAgICB0aGlzLl9zZWxlY3Rvci5zY3JvbGxUb0luZGV4KHRoaXMuX3NlbGVjdG9yLmZpcnN0VmlzaWJsZUluZGV4KTtcbiAgICAvLyBFbnN1cmUgdmlld3BvcnQgYm91bmRhcmllcyBhcmUgdXAtdG8tZGF0ZVxuICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yLmxhc3RWaXNpYmxlSW5kZXggLSB0aGlzLl9zZWxlY3Rvci5maXJzdFZpc2libGVJbmRleCArIDE7XG4gIH1cblxuICBfc2VsZWN0SXRlbShpdGVtKSB7XG4gICAgaXRlbSA9ICh0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicpID8gdGhpcy5faXRlbXNbaXRlbV0gOiBpdGVtO1xuICAgIGlmICh0aGlzLl9zZWxlY3Rvci5zZWxlY3RlZEl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuX3NlbGVjdG9yLnNlbGVjdEl0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIF9oaWRkZW4oaXRlbXNDaGFuZ2UpIHtcbiAgICByZXR1cm4gIXRoaXMubG9hZGluZyAmJiAoIXRoaXMuX2l0ZW1zIHx8ICF0aGlzLl9pdGVtcy5sZW5ndGgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShDb21ib0JveERyb3Bkb3duV3JhcHBlckVsZW1lbnQuaXMsIENvbWJvQm94RHJvcGRvd25XcmFwcGVyRWxlbWVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgRGlzYWJsZVVwZ3JhZGVNaXhpbiB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9kaXNhYmxlLXVwZ3JhZGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgT3ZlcmxheUVsZW1lbnQgfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1vdmVybGF5L3NyYy92YWFkaW4tb3ZlcmxheS5qcyc7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3MuanMnO1xuLyoqXG4gKiBUaGUgb3ZlcmxheSBlbGVtZW50LlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogU2VlIFtgPHZhYWRpbi1vdmVybGF5PmAgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tb3ZlcmxheS9ibG9iL21hc3Rlci9zcmMvdmFhZGluLW92ZXJsYXkuaHRtbClcbiAqIGZvciBgPHZhYWRpbi1jb21iby1ib3gtb3ZlcmxheT5gIHBhcnRzLlxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENvbWJvQm94T3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBPdmVybGF5RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LW92ZXJsYXknO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdwYXJ0JywgJ2xvYWRlcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihbJ1twYXJ0fj1cImNvbnRlbnRcIl0nXSk7XG4gICAgY29udGVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsb2FkZXIsIGNvbnRlbnQpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShDb21ib0JveE92ZXJsYXlFbGVtZW50LmlzLCBDb21ib0JveE92ZXJsYXlFbGVtZW50KTtcblxuLyoqXG4gKiBFbGVtZW50IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb21ib0JveERyb3Bkb3duRWxlbWVudCBleHRlbmRzIERpc2FibGVVcGdyYWRlTWl4aW4oXG4gIG1peGluQmVoYXZpb3JzKElyb25SZXNpemFibGVCZWhhdmlvciwgUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiAjb3ZlcmxheSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8dmFhZGluLWNvbWJvLWJveC1vdmVybGF5IGlkPVwib3ZlcmxheVwiIGhpZGRlblxcJD1cIltbaGlkZGVuXV1cIiBvcGVuZWQ9XCJbW29wZW5lZF1dXCIgdGVtcGxhdGU9XCJ7e3RlbXBsYXRlfX1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBzdHJldGNoOyBtYXJnaW46IDA7XCIgdGhlbWVcXCQ9XCJbW3RoZW1lXV1cIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3ZhYWRpbi1jb21iby1ib3gtb3ZlcmxheT5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWNvbWJvLWJveC1kcm9wZG93bic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVsZW1lbnQgdG8gcG9zaXRpb24vYWxpZ24gdGhlIGRyb3Bkb3duIGJ5LlxuICAgICAgICovXG4gICAgICBwb3NpdGlvblRhcmdldDoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYHRydWVgLCBvdmVybGF5IGlzIGFsaWduZWQgYWJvdmUgdGhlIGBwb3NpdGlvblRhcmdldGBcbiAgICAgICAqL1xuICAgICAgYWxpZ25lZEFib3ZlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2VkIHRvIHByb3BhZ2F0ZSB0aGUgYHRoZW1lYCBhdHRyaWJ1dGUgZnJvbSB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB0aGVtZTogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYm91bmRTZXRQb3NpdGlvbiA9IHRoaXMuX3NldFBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZFNldFBvc2l0aW9uKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBQcmV2ZW50aW5nIHRoZSBkZWZhdWx0IG1vZGFsIGJlaGF2aW91ciBvZiB0aGUgb3ZlcmxheSBvbiBpbnB1dCBjbGlja2luZ1xuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LW91dHNpZGUtY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24pO1xuXG4gICAgLy8gTWFraW5nIHN1cmUgdGhlIG92ZXJsYXkgaXMgY2xvc2VkIGFuZCByZW1vdmVkIGZyb20gRE9NIGFmdGVyIGRldGFjaGluZyB0aGUgZHJvcGRvd24uXG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5vdGlmeVJlc2l6ZSgpIHtcbiAgICBzdXBlci5ub3RpZnlSZXNpemUoKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uVGFyZ2V0ICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9zZXRQb3NpdGlvbigpO1xuICAgICAgLy8gU2NoZWR1bGUgYW5vdGhlciBwb3NpdGlvbiB1cGRhdGUgKHRvIGNvdmVyIHZpcnR1YWwga2V5Ym9hcmQgb3BlbmluZyBmb3IgZXhhbXBsZSlcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9zZXRQb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgYWZ0ZXIgdGhlIGB2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duYCBvcGVucy5cbiAgICpcbiAgICogQGV2ZW50IHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tb3BlbmVkXG4gICAqL1xuICAvKipcbiAgICogRmlyZWQgYWZ0ZXIgdGhlIGB2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duYCBjbG9zZXMuXG4gICAqXG4gICAqIEBldmVudCB2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLWNsb3NlZFxuICAgKi9cblxuICBfb3BlbmVkQ2hhbmdlZChvcGVuZWQsIG9sZFZhbHVlKSB7XG4gICAgaWYgKCEhb3BlbmVkID09PSAhIW9sZFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSB0aGlzLl9pc1Bvc2l0aW9uRml4ZWQodGhpcy5wb3NpdGlvblRhcmdldCkgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFNldFBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRPdXRzaWRlQ2xpY2tMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLW9wZW5lZCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tY2xvc2VkJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gV2UgbmVlZCB0byBsaXN0ZW4gb24gJ2NsaWNrJyBldmVudCBhbmQgY2FwdHVyZSBpdCBhbmQgY2xvc2UgdGhlIG92ZXJsYXkgYmVmb3JlXG4gIC8vIHByb3BhZ2F0aW5nIHRoZSBldmVudCB0byB0aGUgbGlzdGVuZXIgaW4gdGhlIGJ1dHRvbi4gT3RoZXJ3aXNlLCBpZiB0aGUgY2xpY2tlZCBidXR0b24gd291bGQgY2FsbFxuICAvLyBvcGVuKCksIHRoaXMgd291bGQgaGFwcGVuOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVo4NlZfSUNVQ0Q0XG4gIF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGV2ZW50UGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIGlmIChldmVudFBhdGguaW5kZXhPZih0aGlzLnBvc2l0aW9uVGFyZ2V0KSA8IDAgJiYgZXZlbnRQYXRoLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpIDwgMCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfaXNQb3NpdGlvbkZpeGVkKGVsZW1lbnQpIHtcbiAgICBjb25zdCBvZmZzZXRQYXJlbnQgPSB0aGlzLl9nZXRPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcgfHxcbiAgICAgIChvZmZzZXRQYXJlbnQgJiYgdGhpcy5faXNQb3NpdGlvbkZpeGVkKG9mZnNldFBhcmVudCkpO1xuICB9XG5cbiAgX2dldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5hc3NpZ25lZFNsb3QucGFyZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09PSAxMSAmJiBwYXJlbnQuaG9zdCkge1xuICAgICAgcmV0dXJuIHBhcmVudC5ob3N0OyAvLyBwYXJlbnQgaXMgI3NoYWRvd1Jvb3RcbiAgICB9XG4gIH1cblxuICBfdmVydGljYWxPZmZzZXQob3ZlcmxheVJlY3QsIHRhcmdldFJlY3QpIHtcbiAgICByZXR1cm4gdGhpcy5hbGlnbmVkQWJvdmUgPyAtb3ZlcmxheVJlY3QuaGVpZ2h0IDogdGFyZ2V0UmVjdC5oZWlnaHQ7XG4gIH1cblxuICBfc2hvdWxkQWxpZ25BYm92ZSh0YXJnZXRSZWN0KSB7XG4gICAgY29uc3Qgc3BhY2VCZWxvdyA9IChcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtXG4gICAgICB0YXJnZXRSZWN0LmJvdHRvbSAtXG4gICAgICBNYXRoLm1pbihkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgMClcbiAgICApIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNwYWNlQmVsb3cgPCAwLjMwO1xuICB9XG5cbiAgX3NldFBvc2l0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0ID09PSBkb2N1bWVudCA/IGRvY3VtZW50LmJvZHkgOiBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuJC5vdmVybGF5LnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAoISh0YXJnZXQuY29udGFpbnModGhpcy4kLm92ZXJsYXkpIHx8IHRhcmdldC5jb250YWlucyh0aGlzLnBvc2l0aW9uVGFyZ2V0KSkgfHwgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5wb3NpdGlvblRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLmFsaWduZWRBYm92ZSA9IHRoaXMuX3Nob3VsZEFsaWduQWJvdmUodGFyZ2V0UmVjdCk7XG5cbiAgICBjb25zdCBvdmVybGF5UmVjdCA9IHRoaXMuJC5vdmVybGF5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSB0YXJnZXRSZWN0LmxlZnQgLSBvdmVybGF5UmVjdC5sZWZ0ICsgKHRoaXMuX3RyYW5zbGF0ZVggfHwgMCk7XG4gICAgdGhpcy5fdHJhbnNsYXRlWSA9IHRhcmdldFJlY3QudG9wIC0gb3ZlcmxheVJlY3QudG9wICsgKHRoaXMuX3RyYW5zbGF0ZVkgfHwgMCkgK1xuICAgICAgdGhpcy5fdmVydGljYWxPZmZzZXQob3ZlcmxheVJlY3QsIHRhcmdldFJlY3QpO1xuXG4gICAgY29uc3QgX2RldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSBNYXRoLnJvdW5kKHRoaXMuX3RyYW5zbGF0ZVggKiBfZGV2aWNlUGl4ZWxSYXRpbykgLyBfZGV2aWNlUGl4ZWxSYXRpbztcbiAgICB0aGlzLl90cmFuc2xhdGVZID0gTWF0aC5yb3VuZCh0aGlzLl90cmFuc2xhdGVZICogX2RldmljZVBpeGVsUmF0aW8pIC8gX2RldmljZVBpeGVsUmF0aW87XG4gICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5fdHJhbnNsYXRlWH1weCwgJHt0aGlzLl90cmFuc2xhdGVZfXB4LCAwKWA7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS53aWR0aCA9IHRoaXMucG9zaXRpb25UYXJnZXQuY2xpZW50V2lkdGggKyAncHgnO1xuICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gdGhpcy5hbGlnbmVkQWJvdmUgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnO1xuXG4gICAgLy8gVE9ETzogZmlyZSBvbmx5IHdoZW4gcG9zaXRpb24gYWN0dWFsbHkgY2hhbmdlcyBjaGFuZ2VzXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncG9zaXRpb24tY2hhbmdlZCcpKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoQ29tYm9Cb3hEcm9wZG93bkVsZW1lbnQuaXMsIENvbWJvQm94RHJvcGRvd25FbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG4vKipcbiAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdXNlZCBmb3IgaXRlbXMgaW4gdGhlIHZhYWRpbi1jb21iby1ib3guXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBQYXJ0IG5hbWUgfCBEZXNjcmlwdGlvblxuICogLS0tfC0tLVxuICogYGNvbnRlbnRgIHwgVGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgaXRlbSBsYWJlbCBvciB0ZW1wbGF0ZSBjb250ZW50XG4gKlxuICogVGhlIGZvbGxvd2luZyBzdGF0ZSBhdHRyaWJ1dGVzIGFyZSBleHBvc2VkIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgICB8IERlc2NyaXB0aW9uIHwgUGFydCBuYW1lXG4gKiAtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgc2VsZWN0ZWRgIHwgU2V0IHdoZW4gdGhlIGl0ZW0gaXMgc2VsZWN0ZWQgfCA6aG9zdFxuICogYGZvY3VzZWRgIHwgU2V0IHdoZW4gdGhlIGl0ZW0gaXMgZm9jdXNlZCB8IDpob3N0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb21ib0JveEl0ZW1FbGVtZW50IGV4dGVuZHMgVGhlbWFibGVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBwYXJ0PVwiY29udGVudFwiIGlkPVwiY29udGVudFwiPjwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWl0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgICAgICovXG4gICAgICBpbmRleDogTnVtYmVyLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpdGVtIHRvIHJlbmRlclxuICAgICAgICogQHR5cGUgeyhTdHJpbmd8T2JqZWN0KX1cbiAgICAgICAqL1xuICAgICAgaXRlbTogT2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB0ZXh0IGxhYmVsIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGl0ZW1cbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIHdoZW4gaXRlbSBpcyBzZWxlY3RlZFxuICAgICAgICovXG4gICAgICBzZWxlY3RlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIHdoZW4gaXRlbSBpcyBmb2N1c2VkXG4gICAgICAgKi9cbiAgICAgIGZvY3VzZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHRlbXBsYXRlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGl0ZW1cbiAgICAgICAqL1xuICAgICAgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlOiBPYmplY3QsXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGA8dmFhZGluLWNvbWJvLWJveC1pdGVtPmAgcHJvcGFnYXRlZCBmcm9tIHRoZSBjb21ibyBib3ggZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgcmVuZGVyZXI6IEZ1bmN0aW9uLFxuXG4gICAgICAvKipcbiAgICAgICAqIFNhdmVkIGluc3RhbmNlIG9mIGEgY3VzdG9tIHJlbmRlcmVyIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBfb2xkUmVuZGVyZXI6IEZ1bmN0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX3JlbmRlcmVyT3JJdGVtQ2hhbmdlZChyZW5kZXJlciwgaW5kZXgsIGl0ZW0uKiknLFxuICAgICAgJ191cGRhdGVMYWJlbChsYWJlbCwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKScsXG4gICAgICAnX3VwZGF0ZVRlbXBsYXRlSW5zdGFuY2VWYXJpYWJsZShcImluZGV4XCIsIGluZGV4LCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpJyxcbiAgICAgICdfdXBkYXRlVGVtcGxhdGVJbnN0YW5jZVZhcmlhYmxlKFwiaXRlbVwiLCBpdGVtLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpJyxcbiAgICAgICdfdXBkYXRlVGVtcGxhdGVJbnN0YW5jZVZhcmlhYmxlKFwic2VsZWN0ZWRcIiwgc2VsZWN0ZWQsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSknLFxuICAgICAgJ191cGRhdGVUZW1wbGF0ZUluc3RhbmNlVmFyaWFibGUoXCJmb2N1c2VkXCIsIGZvY3VzZWQsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSknXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLl9pdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgLy8gMi4wIGhhcyBfX2RhdGFIb3N0LiBNaWdodCB3YW50IHRvIGNvbnNpZGVyIGFzc2lnbmluZyBjb21ib2JveCByZWZlcmVuY2UgZGlyZWN0bHkgdG8gaXRlbS5cbiAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLmdldFJvb3ROb2RlKCkuaG9zdC5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICBjb25zdCBkcm9wZG93biA9IG92ZXJsYXkuX19kYXRhSG9zdDtcbiAgICAgIGNvbnN0IGNvbWJvQm94T3ZlcmxheSA9IGRyb3Bkb3duLmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgIHRoaXMuX2NvbWJvQm94ID0gY29tYm9Cb3hPdmVybGF5LmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgIHRoaXMuX2NvbWJvQm94Ll9lbnN1cmVUZW1wbGF0aXplZCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbWJvQm94Ll9UZW1wbGF0ZUNsYXNzKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1UZW1wbGF0ZUluc3RhbmNlID0gbmV3IHRoaXMuX2NvbWJvQm94Ll9UZW1wbGF0ZUNsYXNzKHt9KTtcbiAgICAgICAgdGhpcy4kLmNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdGhpcy4kLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5faXRlbVRlbXBsYXRlSW5zdGFuY2Uucm9vdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RlbCA9IHtcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgaXRlbTogdGhpcy5pdGVtXG4gICAgfTtcblxuICAgIHRoaXMucmVuZGVyZXIodGhpcy4kLmNvbnRlbnQsIHRoaXMuX2NvbWJvQm94LCBtb2RlbCk7XG4gIH1cblxuICBfcmVuZGVyZXJPckl0ZW1DaGFuZ2VkKHJlbmRlcmVyLCBpbmRleCwgaXRlbSkge1xuICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQgfHwgaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbGRSZW5kZXJlciAhPT0gcmVuZGVyZXIpIHtcbiAgICAgIHRoaXMuJC5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgdGhpcy5fb2xkUmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVMYWJlbChsYWJlbCwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgaWYgKF9pdGVtVGVtcGxhdGVJbnN0YW5jZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuJC5jb250ZW50ICYmICF0aGlzLnJlbmRlcmVyKSB7XG4gICAgICAvLyBPbmx5IHNldCBsYWJlbCB0byB0ZXh0Q29udGVudCBubyB0ZW1wbGF0ZVxuICAgICAgdGhpcy4kLmNvbnRlbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVGVtcGxhdGVJbnN0YW5jZVZhcmlhYmxlKHZhcmlhYmxlLCB2YWx1ZSwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgaWYgKHZhcmlhYmxlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfaXRlbVRlbXBsYXRlSW5zdGFuY2VbdmFyaWFibGVdID0gdmFsdWU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94SXRlbUVsZW1lbnQuaXMsIENvbWJvQm94SXRlbUVsZW1lbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wZXJ0eU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcbmltcG9ydCB7IENvbWJvQm94TWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1jb21iby1ib3gtbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29tYm9Cb3hEYXRhUHJvdmlkZXJNaXhpbiB9IGZyb20gJy4vdmFhZGluLWNvbWJvLWJveC1kYXRhLXByb3ZpZGVyLW1peGluLmpzJztcbmltcG9ydCAnLi92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGRhc2hUb0NhbWVsQ2FzZSB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcbi8qKlxuICogYDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0PmAgaXMgYSBjdXN0b21pemFibGUgdmVyc2lvbiBvZiB0aGUgYDx2YWFkaW4tY29tYm8tYm94PmAgcHJvdmlkaW5nXG4gKiBvbmx5IHRoZSBkcm9wZG93biBmdW5jdGlvbmFsaXR5IGFuZCBsZWF2aW5nIHRoZSBpbnB1dCBmaWVsZCBkZWZpbml0aW9uIHRvIHRoZSB1c2VyLlxuICpcbiAqIFRoZSBlbGVtZW50IGhhcyB0aGUgc2FtZSBBUEkgYXMgYDx2YWFkaW4tY29tYm8tYm94PmAuXG4gKlxuICogVG8gY3JlYXRlIGEgY3VzdG9tIGlucHV0IGZpZWxkLCB5b3UgbmVlZCB0byBhZGQgYSBjaGlsZCBlbGVtZW50IHdoaWNoIGhhcyBhIHR3by13YXlcbiAqIGRhdGEtYmluZGFibGUgcHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZSBpbnB1dCB2YWx1ZS4gVGhlIHByb3BlcnR5IG5hbWUgaXMgZXhwZWN0ZWRcbiAqIHRvIGJlIGB2YWx1ZWAgYnkgZGVmYXVsdC4gU2VlIHRoZSBleGFtcGxlIGJlbG93IGZvciBhIHNpbXBsZXN0IHBvc3NpYmxlIGV4YW1wbGVcbiAqIHVzaW5nIGEgYDx2YWFkaW4tdGV4dC1maWVsZD5gIGVsZW1lbnQuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gKiAgIDx2YWFkaW4tdGV4dC1maWVsZD5cbiAqICAgPC92YWFkaW4tdGV4dC1maWVsZD5cbiAqIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAqIGBgYFxuICpcbiAqIElmIHlvdSBhcmUgdXNpbmcgb3RoZXIgY3VzdG9tIGlucHV0IGZpZWxkcyBsaWtlIGA8aXJvbi1pbnB1dD5gLCB5b3VcbiAqIG5lZWQgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBiaW5kYWJsZSBwcm9wZXJ0eSB3aXRoIHRoZSBgYXR0ckZvclZhbHVlYCBhdHRyaWJ1dGUuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1jb21iby1ib3gtbGlnaHQgYXR0ci1mb3ItdmFsdWU9XCJiaW5kLXZhbHVlXCI+XG4gKiAgIDxpcm9uLWlucHV0PlxuICogICAgIDxpbnB1dD5cbiAqICAgPC9pcm9uLWlucHV0PlxuICogPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICogYGBgXG4gKlxuICogSW4gdGhlIG5leHQgZXhhbXBsZSB5b3UgY2FuIHNlZSBob3cgdG8gY3JlYXRlIGEgY3VzdG9tIGlucHV0IGZpZWxkIGJhc2VkXG4gKiBvbiBhIGA8cGFwZXItaW5wdXQ+YCBkZWNvcmF0ZWQgd2l0aCBhIGN1c3RvbSBgPGlyb24taWNvbj5gIGFuZFxuICogdHdvIGA8cGFwZXItYnV0dG9uPmBzIHRvIGFjdCBhcyB0aGUgY2xlYXIgYW5kIHRvZ2dsZSBjb250cm9scy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAqICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiRWxlbWVudHNcIiBjbGFzcz1cImlucHV0XCI+XG4gKiAgICAgPGlyb24taWNvbiBpY29uPVwidG9sbFwiIHNsb3Q9XCJwcmVmaXhcIj48L2lyb24taWNvbj5cbiAqICAgICA8cGFwZXItYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBjbGFzcz1cImNsZWFyLWJ1dHRvblwiPkNsZWFyPC9wYXBlci1idXR0b24+XG4gKiAgICAgPHBhcGVyLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCI+VG9nZ2xlPC9wYXBlci1idXR0b24+XG4gKiAgIDwvcGFwZXItaW5wdXQ+XG4gKiA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gKiBgYGBcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29tYm9Cb3hEYXRhUHJvdmlkZXJNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db21ib0JveE1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWVQcm9wZXJ0eU1peGluXG4gKi9cbmNsYXNzIENvbWJvQm94TGlnaHRFbGVtZW50IGV4dGVuZHNcbiAgVGhlbWVQcm9wZXJ0eU1peGluKFxuICAgIFRoZW1hYmxlTWl4aW4oXG4gICAgICBDb21ib0JveERhdGFQcm92aWRlck1peGluKFxuICAgICAgICBDb21ib0JveE1peGluKFBvbHltZXJFbGVtZW50KSkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW29wZW5lZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cblxuICAgIDx2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIgaWQ9XCJvdmVybGF5XCIgb3BlbmVkPVwiW1tvcGVuZWRdXVwiIHBvc2l0aW9uLXRhcmdldD1cIltbaW5wdXRFbGVtZW50XV1cIiByZW5kZXJlcj1cIltbcmVuZGVyZXJdXVwiIF9mb2N1c2VkLWluZGV4PVwiW1tfZm9jdXNlZEluZGV4XV1cIiBfaXRlbS1pZC1wYXRoPVwiW1tpdGVtSWRQYXRoXV1cIiBfaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIiBsb2FkaW5nPVwiW1tsb2FkaW5nXV1cIiB0aGVtZT1cIltbdGhlbWVdXVwiPlxuICAgIDwvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi13cmFwcGVyPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWxpZ2h0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBOYW1lIG9mIHRoZSB0d28td2F5IGRhdGEtYmluZGFibGUgcHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICogdmFsdWUgb2YgdGhlIGN1c3RvbSBpbnB1dCBmaWVsZC5cbiAgICAgICAqL1xuICAgICAgYXR0ckZvclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIGlucHV0RWxlbWVudDoge1xuICAgICAgICB0eXBlOiBFbGVtZW50LFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2JvdW5kSW5wdXRWYWx1ZUNoYW5nZWQgPSB0aGlzLl9pbnB1dFZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX19ib3VuZElucHV0VmFsdWVDb21taXR0ZWQgPSB0aGlzLl9faW5wdXRWYWx1ZUNvbW1pdHRlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl90b2dnbGVFbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWJ1dHRvbicpO1xuICAgIHRoaXMuX2NsZWFyRWxlbWVudCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuXG4gICAgaWYgKHRoaXMuX2NsZWFyRWxlbWVudCkge1xuICAgICAgdGhpcy5fY2xlYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgbmF0aXZlIGZvY3VzIGNoYW5nZXNcbiAgICAgICAgLy8gX2ZvY3VzYWJsZUVsZW1lbnQgaXMgbmVlZGVkIGZvciBwYXBlci1pbnB1dFxuICAgICAgICAodGhpcy5pbnB1dEVsZW1lbnQuX2ZvY3VzYWJsZUVsZW1lbnQgfHwgdGhpcy5pbnB1dEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuaW5wdXRFbGVtZW50O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjb25zdCBjc3NTZWxlY3RvciA9ICd2YWFkaW4tdGV4dC1maWVsZCxpcm9uLWlucHV0LHBhcGVyLWlucHV0LC5wYXBlci1pbnB1dC1pbnB1dCwuaW5wdXQnO1xuICAgIHRoaXMuX3NldElucHV0RWxlbWVudCh0aGlzLnF1ZXJ5U2VsZWN0b3IoY3NzU2VsZWN0b3IpKTtcbiAgICB0aGlzLl9yZXZlcnRJbnB1dFZhbHVlKCk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZElucHV0VmFsdWVDaGFuZ2VkKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9fYm91bmRJbnB1dFZhbHVlQ29tbWl0dGVkKTtcbiAgICB0aGlzLl9wcmV2ZW50SW5wdXRCbHVyKCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fYm91bmRJbnB1dFZhbHVlQ2hhbmdlZCk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fX2JvdW5kSW5wdXRWYWx1ZUNvbW1pdHRlZCk7XG4gICAgdGhpcy5fcmVzdG9yZUlucHV0Qmx1cigpO1xuICB9XG5cbiAgX19pbnB1dFZhbHVlQ29tbWl0dGVkKGUpIHtcbiAgICAvLyBEZXRlY3QgaWYgdGhlIGlucHV0IHdhcyBjbGVhcmVkIChieSBjbGlja2luZyB0aGUgY2xlYXIgYnV0dG9uIG9uIGEgdmFhZGluLXRleHQtZmllbGQpXG4gICAgLy8gYW5kIHByb3BhZ2F0ZSB0aGUgdmFsdWUgY2hhbmdlIHRvIGNvbWJvIGJveCB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICBpZiAoZS5fX2Zyb21DbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX3Byb3BlcnR5Rm9yVmFsdWUoKSB7XG4gICAgcmV0dXJuIGRhc2hUb0NhbWVsQ2FzZSh0aGlzLmF0dHJGb3JWYWx1ZSk7XG4gIH1cblxuICBnZXQgX2lucHV0RWxlbWVudFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXTtcbiAgfVxuXG4gIHNldCBfaW5wdXRFbGVtZW50VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShDb21ib0JveExpZ2h0RWxlbWVudC5pcywgQ29tYm9Cb3hMaWdodEVsZW1lbnQpO1xuXG5leHBvcnQgeyBDb21ib0JveExpZ2h0RWxlbWVudCB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcblxuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgZmx1c2ggfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0aXplIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvdGVtcGxhdGl6ZS5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUFubm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUtleXNCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7IEZsYXR0ZW5lZE5vZGVzT2JzZXJ2ZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbGF0dGVuZWQtbm9kZXMtb2JzZXJ2ZXIuanMnO1xuaW1wb3J0IHsgQ29tYm9Cb3hQbGFjZWhvbGRlciB9IGZyb20gJy4vdmFhZGluLWNvbWJvLWJveC1wbGFjZWhvbGRlci5qcyc7XG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgQ29tYm9Cb3hNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpbkNvbWJvQm94TWl4aW5FbGVtZW50IGV4dGVuZHMgc3ViY2xhc3Mge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBkcm9wZG93biBpcyBvcGVuLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgZWxlbWVudCBmaWVsZCBpcyByZWFkLW9ubHkuXG4gICAgICAgKi9cbiAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRoZSBjb250ZW50IG9mIGV2ZXJ5IGl0ZW0uXG4gICAgICAgKiBSZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgKlxuICAgICAgICogLSBgcm9vdGAgVGhlIGA8dmFhZGluLWNvbWJvLWJveC1pdGVtPmAgaW50ZXJuYWwgY29udGFpbmVyIERPTSBlbGVtZW50LlxuICAgICAgICogLSBgY29tYm9Cb3hgIFRoZSByZWZlcmVuY2UgdG8gdGhlIGA8dmFhZGluLWNvbWJvLWJveD5gIGVsZW1lbnQuXG4gICAgICAgKiAtIGBtb2RlbGAgVGhlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHJlbGF0ZWQgd2l0aCB0aGUgcmVuZGVyZWRcbiAgICAgICAqICAgaXRlbSwgY29udGFpbnM6XG4gICAgICAgKiAgIC0gYG1vZGVsLmluZGV4YCBUaGUgaW5kZXggb2YgdGhlIHJlbmRlcmVkIGl0ZW0uXG4gICAgICAgKiAgIC0gYG1vZGVsLml0ZW1gIFRoZSBpdGVtLlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBmdWxsIHNldCBvZiBpdGVtcyB0byBmaWx0ZXIgdGhlIHZpc2libGUgb3B0aW9ucyBmcm9tLlxuICAgICAgICogVGhlIGl0ZW1zIGNhbiBiZSBvZiBlaXRoZXIgYFN0cmluZ2Agb3IgYE9iamVjdGAgdHlwZS5cbiAgICAgICAqL1xuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiAnX2l0ZW1zQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW4gaW5wdXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBpdGVtcyBsaXN0LlxuICAgICAgICogYHZhbHVlYCBwcm9wZXJ0eSB3aWxsIGJlIHNldCB0byB0aGUgaW5wdXQgdmFsdWUgaW4gdGhpcyBjYXNlLlxuICAgICAgICogQWxzbywgd2hlbiBgdmFsdWVgIGlzIHNldCBwcm9ncmFtbWF0aWNhbGx5LCB0aGUgaW5wdXQgdmFsdWUgd2lsbCBiZSBzZXRcbiAgICAgICAqIHRvIHJlZmxlY3QgdGhhdCB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBzdWJzZXQgb2YgaXRlbXMsIGZpbHRlcmVkIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0LiBGaWx0ZXJlZCBpdGVtc1xuICAgICAgICogY2FuIGJlIGFzc2lnbmVkIGRpcmVjdGx5IHRvIG9taXQgdGhlIGludGVybmFsIGZpbHRlcmluZyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICogVGhlIGl0ZW1zIGNhbiBiZSBvZiBlaXRoZXIgYFN0cmluZ2Agb3IgYE9iamVjdGAgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZmlsdGVyZWRJdGVtczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYFN0cmluZ2AgdmFsdWUgZm9yIHRoZSBzZWxlY3RlZCBpdGVtIG9mIHRoZSBjb21ibyBib3guIFByb3ZpZGVzXG4gICAgICAgKiB0aGUgdmFsdWUgZm9yIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIFdoZW4gdGhlcmXigJlzIG5vIGl0ZW0gc2VsZWN0ZWQsIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICAgKlxuICAgICAgICogVXNlIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGdldCB0aGUgcmF3IHNlbGVjdGVkIGl0ZW0gZnJvbVxuICAgICAgICogdGhlIGBpdGVtc2AgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlZCB0byBkZXRlY3QgdXNlciB2YWx1ZSBjaGFuZ2VzIGFuZCBmaXJlIGBjaGFuZ2VgIGV2ZW50cy5cbiAgICAgICAqL1xuICAgICAgX2xhc3RDb21taXR0ZWRWYWx1ZTogU3RyaW5nLFxuXG4gICAgICAvKlxuICAgICAgICogV2hlbiBzZXQgdG8gYHRydWVgLCBcImxvYWRpbmdcIiBhdHRyaWJ1dGUgaXMgYWRkZWQgdG8gaG9zdCBhbmQgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGaWx0ZXJpbmcgc3RyaW5nIHRoZSB1c2VyIGhhcyB0eXBlZCBpbnRvIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgICAqL1xuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgYGl0ZW1zYCBhcnJheS5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIGxhYmVsIG9mIHRoZSBpdGVtLiBJZiBgaXRlbXNgIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZVxuICAgICAgICogYGl0ZW1MYWJlbFBhdGhgIGlzIHVzZWQgdG8gZmV0Y2ggdGhlIGRpc3BsYXllZCBzdHJpbmcgbGFiZWwgZm9yIGVhY2hcbiAgICAgICAqIGl0ZW0uXG4gICAgICAgKlxuICAgICAgICogVGhlIGl0ZW0gbGFiZWwgaXMgYWxzbyB1c2VkIGZvciBtYXRjaGluZyBpdGVtcyB3aGVuIHByb2Nlc3NpbmcgdXNlclxuICAgICAgICogaW5wdXQsIGkuZS4sIGZvciBmaWx0ZXJpbmcgYW5kIHNlbGVjdGluZyBpdGVtcy5cbiAgICAgICAqXG4gICAgICAgKiBXaGVuIHVzaW5nIGl0ZW0gdGVtcGxhdGVzLCB0aGUgcHJvcGVydHkgaXMgc3RpbGwgbmVlZGVkIGJlY2F1c2UgaXQgaXMgdXNlZFxuICAgICAgICogZm9yIGZpbHRlcmluZywgYW5kIGZvciBkaXNwbGF5aW5nIHRoZSBzZWxlY3RlZCBpdGVtIHZhbHVlIGluIHRoZSBpbnB1dCBib3guXG4gICAgICAgKi9cbiAgICAgIGl0ZW1MYWJlbFBhdGg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xhYmVsJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaXRlbUxhYmVsUGF0aENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbS4gSWYgYGl0ZW1zYCBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGVcbiAgICAgICAqIGBpdGVtVmFsdWVQYXRoOmAgaXMgdXNlZCB0byBmZXRjaCB0aGUgc3RyaW5nIHZhbHVlIGZvciB0aGUgc2VsZWN0ZWRcbiAgICAgICAqIGl0ZW0uXG4gICAgICAgKlxuICAgICAgICogVGhlIGl0ZW0gdmFsdWUgaXMgdXNlZCBpbiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBvZiB0aGUgY29tYm8gYm94LFxuICAgICAgICogdG8gcHJvdmlkZSB0aGUgZm9ybSB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgaXRlbVZhbHVlUGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIHRoZSBpZCBvZiB0aGUgaXRlbS4gSWYgYGl0ZW1zYCBpcyBhbiBhcnJheSBvZiBvYmplY3RzLFxuICAgICAgICogdGhlIGBpdGVtSWRQYXRoYCBpcyB1c2VkIHRvIGNvbXBhcmUgYW5kIGlkZW50aWZ5IHRoZSBzYW1lIGl0ZW1cbiAgICAgICAqIGluIGBzZWxlY3RlZEl0ZW1gIGFuZCBgZmlsdGVyZWRJdGVtc2AgKGl0ZW1zIGdpdmVuIGJ5IHRoZVxuICAgICAgICogYGRhdGFQcm92aWRlcmAgY2FsbGJhY2spLlxuICAgICAgICovXG4gICAgICBpdGVtSWRQYXRoOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfdG9nZ2xlRWxlbWVudDogT2JqZWN0LFxuICAgICAgX2NsZWFyRWxlbWVudDogT2JqZWN0LFxuXG4gICAgICBfaW5wdXRFbGVtZW50VmFsdWU6IFN0cmluZyxcblxuICAgICAgX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQ6IEJvb2xlYW4sXG5cbiAgICAgIF9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50czogU3RyaW5nLFxuXG4gICAgICBfaXRlbVRlbXBsYXRlOiBPYmplY3RcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfZmlsdGVyQ2hhbmdlZChmaWx0ZXIsIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpJyxcbiAgICAgICdfaXRlbXNPclBhdGhzQ2hhbmdlZChpdGVtcy4qLCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKScsXG4gICAgICAnX2ZpbHRlcmVkSXRlbXNDaGFuZ2VkKGZpbHRlcmVkSXRlbXMuKiwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCknLFxuICAgICAgJ190ZW1wbGF0ZU9yUmVuZGVyZXJDaGFuZ2VkKF9pdGVtVGVtcGxhdGUsIHJlbmRlcmVyKScsXG4gICAgICAnX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpJyxcbiAgICAgICdfc2VsZWN0ZWRJdGVtQ2hhbmdlZChzZWxlY3RlZEl0ZW0sIGl0ZW1MYWJlbFBhdGgpJyxcbiAgICAgICdfdG9nZ2xlRWxlbWVudENoYW5nZWQoX3RvZ2dsZUVsZW1lbnQpJ1xuICAgIF07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGUgPT4ge1xuICAgICAgLy8gRml4ZXMgdGhlIHByb2JsZW0gd2l0aCBgZm9jdXNvdXRgIGhhcHBlbmluZyB3aGVuIGNsaWNraW5nIG9uIHRoZSBzY3JvbGwgYmFyIG9uIEVkZ2VcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy4kLm92ZXJsYXkuJC5kcm9wZG93bjtcbiAgICAgIGlmIChkcm9wZG93biAmJiBkcm9wZG93bi4kICYmIGUucmVsYXRlZFRhcmdldCA9PT0gZHJvcGRvd24uJC5vdmVybGF5KSB7XG4gICAgICAgIGUuY29tcG9zZWRQYXRoKClbMF0uZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuXG4gICAgLy8gMi4wIGRvZXMgbm90IHN1cHBvcnQgJ292ZXJsYXkuc2VsZWN0aW9uLWNoYW5nZWQnIHN5bnRheCBpbiBsaXN0ZW5lcnNcbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb24tY2hhbmdlZCcsIHRoaXMuX292ZXJsYXlTZWxlY3RlZEl0ZW1DaGFuZ2VkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLWNsb3NlZCcsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLW9wZW5lZCcsIHRoaXMuX29uT3BlbmVkLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljay5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LXRvdWNoLWFjdGlvbicsIHRoaXMuX29uT3ZlcmxheVRvdWNoQWN0aW9uLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jbGVhckVsZW1lbnQgfHwgZS5jb21wb3NlZFBhdGgoKVswXSAhPT0gdGhpcy5fY2xlYXJFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX29ic2VydmVyID0gbmV3IEZsYXR0ZW5lZE5vZGVzT2JzZXJ2ZXIodGhpcywgaW5mbyA9PiB7XG4gICAgICB0aGlzLl9zZXRUZW1wbGF0ZUZyb21Ob2RlcyhpbmZvLmFkZGVkTm9kZXMpO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogTWFudWFsbHkgaW52b2tlIGV4aXN0aW5nIHJlbmRlcmVyLlxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCd2YWFkaW4tY29tYm8tYm94LWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5fcmVuZGVyKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRUZW1wbGF0ZUZyb21Ob2Rlcyhub2Rlcykge1xuICAgIHRoaXMuX2l0ZW1UZW1wbGF0ZSA9IG5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUubG9jYWxOYW1lICYmIG5vZGUubG9jYWxOYW1lID09PSAndGVtcGxhdGUnKVswXSB8fCB0aGlzLl9pdGVtVGVtcGxhdGU7XG4gIH1cblxuICBfcmVtb3ZlTmV3UmVuZGVyZXJPclRlbXBsYXRlKHRlbXBsYXRlLCBvbGRUZW1wbGF0ZSwgcmVuZGVyZXIsIG9sZFJlbmRlcmVyKSB7XG4gICAgaWYgKHRlbXBsYXRlICE9PSBvbGRUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5faXRlbVRlbXBsYXRlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAocmVuZGVyZXIgIT09IG9sZFJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIF90ZW1wbGF0ZU9yUmVuZGVyZXJDaGFuZ2VkKHRlbXBsYXRlLCByZW5kZXJlcikge1xuICAgIGlmICh0ZW1wbGF0ZSAmJiByZW5kZXJlcikge1xuICAgICAgdGhpcy5fcmVtb3ZlTmV3UmVuZGVyZXJPclRlbXBsYXRlKHRlbXBsYXRlLCB0aGlzLl9vbGRUZW1wbGF0ZSwgcmVuZGVyZXIsIHRoaXMuX29sZFJlbmRlcmVyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHNob3VsZCBvbmx5IHVzZSBlaXRoZXIgYSByZW5kZXJlciBvciBhIHRlbXBsYXRlIGZvciBjb21ibyBib3ggaXRlbXMnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbGRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX29sZFJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyb3Bkb3duIGxpc3QuXG4gICAqL1xuICBvcGVuKCkge1xuICAgIC8vIFByZXZlbnQgX29wZW4oKSBiZWluZyBjYWxsZWQgd2hlbiBpbnB1dCBpcyBkaXNhYmxlZCBvciByZWFkLW9ubHlcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBkcm9wZG93biBsaXN0LlxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKHZhbHVlLCBvbGQpIHtcbiAgICAvLyBQcmV2ZW50IF9jbG9zZSgpIGJlaW5nIGNhbGxlZCB3aGVuIG9wZW5lZCBpcyBzZXQgdG8gaXRzIGRlZmF1bHQgdmFsdWUgKGZhbHNlKS5cbiAgICBpZiAob2xkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZFdpdGhGb2N1c1JpbmcgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXMtcmluZycpIHx8ICh0aGlzLmZvY3VzRWxlbWVudCAmJiB0aGlzLmZvY3VzRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSk7XG4gICAgICAvLyBGb3IgdG91Y2ggZGV2aWNlcywgd2UgZG9uJ3Qgd2FudCB0byBwb3B1cCB2aXJ0dWFsIGtleWJvYXJkIHVubGVzcyBpbnB1dCBpcyBleHBsaWNpdGx5IGZvY3VzZWQgYnkgdGhlIHVzZXIuXG4gICAgICBpZiAoIXRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykgJiYgIXRoaXMuJC5vdmVybGF5LnRvdWNoRGV2aWNlKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25DbG9zZWQoKTtcbiAgICAgIGlmICh0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nICYmIHRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykpIHtcbiAgICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuc2V0QXR0cmlidXRlKCdmb2N1cy1yaW5nJywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbk92ZXJsYXlUb3VjaEFjdGlvbihldmVudCkge1xuICAgIC8vIE9uIHRvdWNoIGRldmljZXMsIGJsdXIgdGhlIGlucHV0IG9uIHRvdWNoIHN0YXJ0IGluc2lkZSB0aGUgb3ZlcmxheSwgaW4gb3JkZXIgdG8gaGlkZVxuICAgIC8vIHRoZSB2aXJ0dWFsIGtleWJvYXJkLiBCdXQgZG9uJ3QgY2xvc2UgdGhlIG92ZXJsYXkgb24gdGhpcyBibHVyLlxuICAgIHRoaXMuX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG4gIH1cblxuICBfb25DbGljayhlKSB7XG4gICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICBjb25zdCBpc0NsZWFyRWxlbWVudCA9IChwYXRoLmluZGV4T2YodGhpcy5fY2xlYXJFbGVtZW50KSAhPT0gLTEpIHx8IChwYXRoWzBdLmdldEF0dHJpYnV0ZSgncGFydCcpID09PSAnY2xlYXItYnV0dG9uJyk7XG4gICAgaWYgKGlzQ2xlYXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50KSAhPT0gLTEpIHtcbiAgICAgIGlmIChwYXRoLmluZGV4T2YodGhpcy5fdG9nZ2xlRWxlbWVudCkgPiAtMSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogS2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgKi9cblxuICBfb25LZXlEb3duKGUpIHtcbiAgICBpZiAodGhpcy5faXNFdmVudEtleShlLCAnZG93bicpKSB7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uQXJyb3dEb3duKCk7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIHByZXZlbnQgY2FyZXQgZnJvbSBtb3ZpbmdcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXZlbnRLZXkoZSwgJ3VwJykpIHtcbiAgICAgIHRoaXMuX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fb25BcnJvd1VwKCk7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIHByZXZlbnQgY2FyZXQgZnJvbSBtb3ZpbmdcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXZlbnRLZXkoZSwgJ2VudGVyJykpIHtcbiAgICAgIHRoaXMuX29uRW50ZXIoZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0V2ZW50S2V5KGUsICdlc2MnKSkge1xuICAgICAgdGhpcy5fb25Fc2NhcGUoZSk7XG4gICAgfVxuICB9XG5cbiAgX2lzRXZlbnRLZXkoZSwgaykge1xuICAgIHJldHVybiBJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZSwgayk7XG4gIH1cblxuICBfZ2V0SXRlbUxhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy4kLm92ZXJsYXkuZ2V0SXRlbUxhYmVsKGl0ZW0pO1xuICB9XG5cbiAgX2dldEl0ZW1WYWx1ZShpdGVtKSB7XG4gICAgbGV0IHZhbHVlID0gaXRlbSAmJiB0aGlzLml0ZW1WYWx1ZVBhdGggPyB0aGlzLmdldCh0aGlzLml0ZW1WYWx1ZVBhdGgsIGl0ZW0pIDogdW5kZWZpbmVkO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGl0ZW0gPyBpdGVtLnRvU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX29uQXJyb3dEb3duKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuJC5vdmVybGF5Ll9pdGVtcykge1xuICAgICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSBNYXRoLm1pbih0aGlzLiQub3ZlcmxheS5faXRlbXMubGVuZ3RoIC0gMSwgdGhpcy5fZm9jdXNlZEluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMuX3ByZWZpbGxGb2N1c2VkSXRlbUxhYmVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkFycm93VXAoKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5fZm9jdXNlZEluZGV4IC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy4kLm92ZXJsYXkuX2l0ZW1zKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gdGhpcy4kLm92ZXJsYXkuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcHJlZmlsbEZvY3VzZWRJdGVtTGFiZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgX3ByZWZpbGxGb2N1c2VkSXRlbUxhYmVsKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlIGFzeW5jcm9ub3VzbHkgdG8gcHJldmVudCBwYXJ0aWFsIHZhbHVlIGNoYW5nZXNcbiAgICAgIC8vIGFubm91bmNlLiBNYWtlcyBPU1ggVm9pY2VPdmVyIHRvIGFubm91bmNlIHRoZSBjb21wbGV0ZSB2YWx1ZSBpbnN0ZWFkLlxuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSAnJztcbiAgICAgIC8vIDFtcyBkZWxheSBuZWVkZWQgZm9yIE9TWCBWb2ljZU92ZXIgdG8gcmVhbGlzZSBpbnB1dCB2YWx1ZSB3YXMgcmVzZXRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMuX2dldEl0ZW1MYWJlbCh0aGlzLiQub3ZlcmxheS5fZm9jdXNlZEl0ZW0pO1xuICAgICAgICB0aGlzLl9tYXJrQWxsU2VsZWN0aW9uUmFuZ2UoKTtcbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKSB7XG4gICAgLy8gdmFhZGluLXRleHQtZmllbGQgZG9lcyBub3QgaW1wbGVtZW50IHNldFNlbGVjdGlvblJhbmdlLCBoZW5jZSB3ZSBuZWVkIHRoZSBuYXRpdmUgaW5wdXRcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuX25hdGl2ZUlucHV0IHx8IHRoaXMuaW5wdXRFbGVtZW50O1xuXG4gICAgLy8gU2V0dGluZyBzZWxlY3Rpb24gcmFuZ2UgZm9jdXNlcyBhbmQvb3IgbW92ZXMgdGhlIGNhcmV0IGluIHNvbWUgYnJvd3NlcnMsXG4gICAgLy8gYW5kIHRoZXJlJ3Mgbm8gbmVlZCB0byBtb2RpZnkgdGhlIHNlbGVjdGlvbiByYW5nZSBpZiB0aGUgaW5wdXQgaXNuJ3QgZm9jdXNlZCBhbnl3YXkuXG4gICAgLy8gVGhpcyBhZmZlY3RzIFNhZmFyaS4gV2hlbiB0aGUgb3ZlcmxheSBpcyBvcGVuLCBhbmQgdGhlbiBoaXRpbmcgdGFiLCBicm93c2VyIHNob3VsZCBmb2N1c1xuICAgIC8vIHRoZSBuZXh0IGZvY3VzYWJsZSBlbGVtZW50IGluc3RlYWQgb2YgdGhlIGNvbWJvLWJveCBpdHNlbGYuXG4gICAgLy8gQ2hlY2tpbmcgdGhlIGZvY3VzZWQgcHJvcGVydHkgaGVyZSBpcyBlbm91Z2ggaW5zdGVhZCBvZiBjaGVja2luZyB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSAmJiBpbnB1dCAmJiBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgLy8gSUUxMSByYW5kb21seSBmYWlscyB3aGVuIHJ1bm5pbmcgdGVzdHMgaW4gU2F1Y2UuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21hcmtBbGxTZWxlY3Rpb25SYW5nZSgpIHtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXJTZWxlY3Rpb25SYW5nZSgpIHtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPyB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZS5sZW5ndGggOiAwO1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uUmFuZ2UocG9zLCBwb3MpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkVudGVyKGUpIHtcbiAgICAvLyBzaG91bGQgY2xvc2Ugb24gZW50ZXIgd2hlbiBjdXN0b20gdmFsdWVzIGFyZSBhbGxvd2VkLCBpbnB1dCBmaWVsZCBpcyBjbGVhcmVkLCBvciB3aGVuIGFuIGV4aXN0aW5nXG4gICAgLy8gaXRlbSBpcyBmb2N1c2VkIHdpdGgga2V5Ym9hcmQuXG4gICAgaWYgKHRoaXMub3BlbmVkICYmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUgfHwgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPT09ICcnIHx8IHRoaXMuX2ZvY3VzZWRJbmRleCA+IC0xKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAvLyBEbyBub3Qgc3VibWl0IHRoZSBzdXJyb3VuZGluZyBmb3JtLlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBEbyBub3QgdHJpZ2dlciBnbG9iYWwgbGlzdGVuZXJzXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24oZSk7XG5cbiAgICAgIGlmICh0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRWxlbWVudENoYW5nZWQodG9nZ2xlRWxlbWVudCkge1xuICAgIGlmICh0b2dnbGVFbGVtZW50KSB7XG4gICAgICAvLyBEb24ndCBibHVyIHRoZSBpbnB1dCBvbiB0b2dnbGUgbW91c2Vkb3duXG4gICAgICB0b2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgIC8vIFVuZm9jdXMgcHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgaWYgZm9jdXMgaXMgbm90IGluc2lkZSBjb21ibyBib3ggKG9uIHRvdWNoIGRldmljZXMpXG4gICAgICB0b2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiQub3ZlcmxheS50b3VjaERldmljZSAmJiAhdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgKi9cbiAgX2NsZWFyKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLl9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVydHMgYmFjayB0byBvcmlnaW5hbCB2YWx1ZS5cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9yZXZlcnRJbnB1dFZhbHVlVG9WYWx1ZSgpO1xuICAgIC8vIEluIHRoZSBuZXh0IF9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpIGNhbGwsIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHNob3VsZCBub3QgcGFzc1xuICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgX29uT3BlbmVkKCkge1xuICAgIC8vIFByZSBQMiBpcm9uLWxpc3QgdXNlZCBhIGRlYm91bmNlciB0byByZW5kZXIuIE5vdyB0aGF0IHdlIHN5bmNocm9ub3VzbHkgcmVuZGVyIGl0ZW1zLFxuICAgIC8vIHdlIG5lZWQgdG8gZmx1c2ggdGhlIERPTSB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCBnZXQgZmx1c2hlZCBpbiB0aGUgbWlkZGxlIG9mIF9yZW5kZXIgY2FsbFxuICAgIC8vIGJlY2F1c2UgdGhhdCB3aWxsIGNhdXNlIHByb2JsZW1zIHRvIHNheSB0aGUgbGVhc3QuXG4gICAgZmx1c2goKTtcblxuICAgIC8vIFdpdGggaXJvbi1saXN0IHYxLjMuOSwgY2FsbGluZyBgbm90aWZ5UmVzaXplKClgIG5vIGxvbmdlciByZW5kZXJzXG4gICAgLy8gdGhlIGl0ZW1zIHN5bmNocm9ub3VzbHkuIEl0IGlzIHJlcXVpcmVkIHRvIGhhdmUgdGhlIGl0ZW1zIHJlbmRlcmVkXG4gICAgLy8gYmVmb3JlIHdlIHVwZGF0ZSB0aGUgb3ZlcmxheSBhbmQgdGhlIGxpc3QgcG9zaXRpb25zIGFuZCBzaXplcy5cbiAgICB0aGlzLiQub3ZlcmxheS5lbnN1cmVJdGVtc1JlbmRlcmVkKCk7XG4gICAgdGhpcy4kLm92ZXJsYXkuX3NlbGVjdG9yLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuXG4gICAgLy8gRW5zdXJlIG1ldHJpY3MgYXJlIHVwLXRvLWRhdGVcbiAgICB0aGlzLiQub3ZlcmxheS51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICAvLyBGb3JjZSBpcm9uLWxpc3QgdG8gY3JlYXRlIHJldXNhYmxlIG5vZGVzLiBPdGhlcndpc2UgaXQgd2lsbCBvbmx5IHN0YXJ0XG4gICAgLy8gZG9pbmcgdGhhdCBpbiBzY3JvbGwgbGlzdGVuZXIsIHdoaWNoIGlzIGVzcGVjaWFsbHkgc2xvdyBpbiBFZGdlLlxuICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3Rvci5faW5jcmVhc2VQb29sSWZOZWVkZWQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Jlc2l6ZURyb3Bkb3duKCksIDEpO1xuICAgIC8vIERlZmVyIHNjcm9sbCBwb3NpdGlvbiBhZGp1c3RtZW50IHRvIHByZXZlbnQgZnJlZXplIGluIEVkZ2VcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuJC5vdmVybGF5LmFkanVzdFNjcm9sbFBvc2l0aW9uKCkpO1xuXG5cbiAgICAvLyBfZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKSBzaG91bGQgbm90IGNvbnNpZGVyIHZhbHVlIGNoYW5nZXMgZG9uZSBiZWZvcmUgb3BlbmluZ1xuICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBfb25DbG9zZWQoKSB7XG5cbiAgICAvLyBIYXBwZW5zIHdoZW4gdGhlIG92ZXJsYXkgaXMgY2xvc2VkIGJ5IGNsaWNraW5nIG91dHNpZGVcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kLm92ZXJsYXkuX2l0ZW1zICYmIHRoaXMuX2ZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBmb2N1c2VkSXRlbSA9IHRoaXMuJC5vdmVybGF5Ll9pdGVtc1t0aGlzLl9mb2N1c2VkSW5kZXhdO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICE9PSBmb2N1c2VkSXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGZvY3VzZWRJdGVtO1xuICAgICAgfVxuICAgICAgLy8gbWFrZSBzdXJlIGlucHV0IGZpZWxkIGlzIHVwZGF0ZWQgaW4gY2FzZSB2YWx1ZSBkb2Vzbid0IGNoYW5nZSAoaS5lLiBGT08gLT4gZm9vKVxuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPT09ICcnIHx8IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLXZhbHVlLXNldCcsIHtkZXRhaWw6IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlLCBjb21wb3NlZDogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgYnViYmxlczogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tVmFsdWUgPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtRm9yVmFsdWUoY3VzdG9tVmFsdWUpO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBjdXN0b21WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbSA/IHRoaXMuX2dldEl0ZW1MYWJlbCh0aGlzLnNlbGVjdGVkSXRlbSkgOiAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpO1xuXG4gICAgdGhpcy5fY2xlYXJTZWxlY3Rpb25SYW5nZSgpO1xuXG4gICAgaWYgKCF0aGlzLmRhdGFQcm92aWRlcikge1xuICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgX3Byb3BlcnR5Rm9yVmFsdWUoKSB7XG4gICAgcmV0dXJuICd2YWx1ZSc7XG4gIH1cblxuICAvKipcbiAgICogIEZpbHRlcmluZyBhbmQgaXRlbXMgaGFuZGxpbmdcbiAgICovXG4gIF9pbnB1dFZhbHVlQ2hhbmdlZChlKSB7XG4gICAgLy8gSGFuZGxlIG9ubHkgaW5wdXQgZXZlbnRzIGZyb20gb3VyIGlucHV0RWxlbWVudC5cbiAgICBpZiAoZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50KSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV07XG4gICAgICB0aGlzLl9maWx0ZXJGcm9tSW5wdXQoZSk7XG4gICAgfVxuICB9XG5cbiAgX2ZpbHRlckZyb21JbnB1dChlKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiAhZS5fX2Zyb21DbGVhckJ1dHRvbikge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyID09PSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSkge1xuICAgICAgLy8gRmlsdGVyIGFuZCBpbnB1dCB2YWx1ZSBtaWdodCBnZXQgb3V0IG9mIHN5bmMsIHdoaWxlIGtleWJvYXJkIG5hdmlnYXRpbmcgZm9yIGV4YW1wbGUuXG4gICAgICAvLyBBZnRlcndhcmRzLCBpbnB1dCB2YWx1ZSBtaWdodCBiZSBjaGFuZ2VkIHRvIHRoZSBzYW1lIHZhbHVlIGFzIHVzZWQgaW4gZmlsdGVyaW5nLlxuICAgICAgLy8gSW4gc2l0dWF0aW9uIGxpa2UgdGhlc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGFsbCB0aGUgZmlsdGVyIGNoYW5nZXMgaGFuZGxlcnMgYXJlIHJ1bi5cbiAgICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQodGhpcy5maWx0ZXIsIHRoaXMuaXRlbVZhbHVlUGF0aCwgdGhpcy5pdGVtTGFiZWxQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBfaXRlbUxhYmVsUGF0aENoYW5nZWQoaXRlbUxhYmVsUGF0aCwgb2xkSXRlbUxhYmVsUGF0aCkge1xuICAgIGlmICh0eXBlb2YgaXRlbUxhYmVsUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzaG91bGQgc2V0IGl0ZW1MYWJlbFBhdGggdG8gYSB2YWxpZCBzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICBfZmlsdGVyQ2hhbmdlZChmaWx0ZXIsIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlckl0ZW1zKHRoaXMuaXRlbXMsIGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdpdGggY2VydGFpbiB1c2UgY2FzZXMgKGUuIGcuLCBleHRlcm5hbCBmaWx0ZXJpbmcpLCBgaXRlbXNgIGFyZVxuICAgICAgLy8gdW5kZWZpbmVkLiBGaWx0ZXJpbmcgaXMgdW5uZWNlc3NhcnkgcGVyIHNlLCBidXQgdGhlIGZpbHRlcmVkSXRlbXNcbiAgICAgIC8vIG9ic2VydmVyIHNob3VsZCBzdGlsbCBiZSBpbnZva2VkIHRvIHVwZGF0ZSBmb2N1c2VkIGl0ZW0uXG4gICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zQ2hhbmdlZCh7cGF0aDogJ2ZpbHRlcmVkSXRlbXMnLCB2YWx1ZTogdGhpcy5maWx0ZXJlZEl0ZW1zfSwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpIHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgX3JldmVydElucHV0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyICE9PSAnJykge1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLmZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZVRvVmFsdWUoKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJTZWxlY3Rpb25SYW5nZSgpO1xuICB9XG5cbiAgX3JldmVydElucHV0VmFsdWVUb1ZhbHVlKCkge1xuICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5fZ2V0SXRlbUxhYmVsKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH1cblxuICBfcmVzaXplRHJvcGRvd24oKSB7XG4gICAgdGhpcy4kLm92ZXJsYXkuJC5kcm9wZG93bi5ub3RpZnlSZXNpemUoKTtcbiAgfVxuXG4gIF91cGRhdGVIYXNWYWx1ZShoYXNWYWx1ZSkge1xuICAgIGlmIChoYXNWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy12YWx1ZScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy12YWx1ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RlZEl0ZW1DaGFuZ2VkKHNlbGVjdGVkSXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IG51bGwgfHwgc2VsZWN0ZWRJdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcmVkSXRlbXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVIYXNWYWx1ZSh0aGlzLnZhbHVlICE9PSAnJyk7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRJdGVtVmFsdWUoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIC8vIFRoZSB2YWx1ZSB3YXMgY2hhbmdlZCB0byBzb21ldGhpbmcgZWxzZSBpbiB2YWx1ZS1jaGFuZ2VkIGxpc3RlbmVyLFxuICAgICAgICAgIC8vIHNvIHByZXZlbnQgZnJvbSByZXNldHRpbmcgaXQgdG8gdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl91cGRhdGVIYXNWYWx1ZSh0cnVlKTtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5fZ2V0SXRlbUxhYmVsKHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgIC8vIENvdWxkIG5vdCBiZSBkZWZpbmVkIGluIDEueCBiZWNhdXNlIHJlYWR5IGlzIGNhbGxlZCBhZnRlciBhbGwgcHJvcC1zZXR0ZXJzXG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRJdGVtO1xuICAgIGlmICh0aGlzLmZpbHRlcmVkSXRlbXMgJiYgdGhpcy4kLm92ZXJsYXkuX2l0ZW1zKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSB0aGlzLmZpbHRlcmVkSXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQodmFsdWUsIG9sZFZhbCkge1xuICAgIGlmICh2YWx1ZSA9PT0gJycgJiYgb2xkVmFsID09PSB1bmRlZmluZWQpIHsgLy8gaW5pdGlhbGl6aW5nLCBubyBuZWVkIHRvIGRvIGFueXRoaW5nICgjNTU0KVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1ZhbGlkVmFsdWUodmFsdWUpKSB7XG4gICAgICBsZXQgaXRlbTtcbiAgICAgIGlmICh0aGlzLl9nZXRJdGVtVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW0pICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RJdGVtRm9yVmFsdWUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWl0ZW0gJiYgdGhpcy5hbGxvd0N1c3RvbVZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUhhc1ZhbHVlKHRoaXMudmFsdWUgIT09ICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIH1cbiAgICAvLyBJbiB0aGUgbmV4dCBfZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKSBjYWxsLCB0aGUgY2hhbmdlIGRldGVjdGlvbiBzaG91bGQgcGFzc1xuICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7YnViYmxlczogdHJ1ZX0pKTtcbiAgICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgX2l0ZW1zQ2hhbmdlZChpdGVtcywgb2xkSXRlbXMpIHtcbiAgICB0aGlzLl9lbnN1cmVJdGVtc09yRGF0YVByb3ZpZGVyKCgpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSBvbGRJdGVtcztcbiAgICB9KTtcbiAgfVxuXG4gIF9pdGVtc09yUGF0aHNDaGFuZ2VkKGUsIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICBpZiAoZS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLnBhdGggPT09ICdpdGVtcycgfHwgZS5wYXRoID09PSAnaXRlbXMuc3BsaWNlcycpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLnNsaWNlKDApIDogdGhpcy5pdGVtcztcblxuICAgICAgY29uc3QgdmFsdWVJbmRleCA9IHRoaXMuX2luZGV4T2ZWYWx1ZSh0aGlzLnZhbHVlLCB0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHZhbHVlSW5kZXg7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZUluZGV4ID4gLTEgJiYgdGhpcy5pdGVtc1t2YWx1ZUluZGV4XTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZmlsdGVyZWRJdGVtc0NoYW5nZWQoZSwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChlLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUucGF0aCA9PT0gJ2ZpbHRlcmVkSXRlbXMnIHx8IGUucGF0aCA9PT0gJ2ZpbHRlcmVkSXRlbXMuc3BsaWNlcycpIHtcbiAgICAgIHRoaXMuX3NldE92ZXJsYXlJdGVtcyh0aGlzLmZpbHRlcmVkSXRlbXMpO1xuXG4gICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSB0aGlzLm9wZW5lZCA/XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LmluZGV4T2ZMYWJlbCh0aGlzLmZpbHRlcikgOlxuICAgICAgICB0aGlzLl9pbmRleE9mVmFsdWUodGhpcy52YWx1ZSwgdGhpcy5maWx0ZXJlZEl0ZW1zKTtcblxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX3JlcG9zaXRpb25PdmVybGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2ZpbHRlckl0ZW1zKGFyciwgZmlsdGVyKSB7XG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIgPyBmaWx0ZXIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICAvLyBDaGVjayBpZiBpdGVtIGNvbnRhaW5zIGlucHV0IHZhbHVlLlxuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1MYWJlbChpdGVtKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpID4gLTE7XG4gICAgfSk7XG4gIH1cblxuICBfc2VsZWN0SXRlbUZvclZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IHRoaXMuX2luZGV4T2ZWYWx1ZSh2YWx1ZSwgdGhpcy5maWx0ZXJlZEl0ZW1zKTtcbiAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHZhbHVlSW5kZXggPj0gMFxuICAgICAgPyB0aGlzLmZpbHRlcmVkSXRlbXNbdmFsdWVJbmRleF1cbiAgICAgIDogKHRoaXMuZGF0YVByb3ZpZGVyICYmIHRoaXMuc2VsZWN0ZWRJdGVtID09PSB1bmRlZmluZWQpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogbnVsbDtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gbnVsbCAmJiBwcmV2aW91c2x5U2VsZWN0ZWRJdGVtID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH1cblxuICBfc2V0T3ZlcmxheUl0ZW1zKGl0ZW1zKSB7XG4gICAgdGhpcy4kLm92ZXJsYXkuc2V0KCdfaXRlbXMnLCBpdGVtcyk7XG4gIH1cblxuICBfcmVwb3NpdGlvbk92ZXJsYXkoKSB7XG4gICAgLy8gYXN5bmMgbmVlZGVkIHRvIHJlcG9zaXRpb24gY29ycmVjdGx5IGFmdGVyIGZpbHRlcmluZ1xuICAgIC8vIChlc3BlY2lhbGx5IHdoZW4gYWxpZ25lZCBvbiB0b3Agb2YgaW5wdXQpXG4gICAgdGhpcy5fX3JlcG9zaXRpb25PdmVybGF5RGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fX3JlcG9zaXRpb25PdmVybGF5RGVib3VuY2VyLFxuICAgICAgLy8gTG9uZyBkZWJvdW5jZTogc2l6aW5nIHVwZGF0ZXMgaW52b2tlIG11bHRpcGxlIHN0eWxpbmcgcm91bmRzLFxuICAgICAgLy8gd2hpY2ggaXMgdmVyeSBzbG93IGluIEVkZ2VcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoNTAwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3I7XG4gICAgICAgIGlmICghc2VsZWN0b3IuX2lzQ2xpZW50RnVsbCgpKSB7XG4gICAgICAgICAgLy8gRHVlIHRvIHRoZSBtaXNtYXRjaCBvZiB0aGUgWSBwb3NpdGlvbiBvZiB0aGUgaXRlbSByZW5kZXJlZFxuICAgICAgICAgIC8vIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGluZyBsaXN0IHdpdGggc29tZSBzcGVjaWZpYyBzY3JvbGxcbiAgICAgICAgICAvLyBwb3NpdGlvbiB2YWx1ZXMgKDIzMjQsIDM0ODYsIDY5NzIsIDYwOTcyLCA5NTc1NyBldGMuKVxuICAgICAgICAgIC8vIGlyb24tbGlzdCBsb29wcyB0aGUgaW5jcmVhc2luZyBvZiB0aGUgcG9vbCBhbmQgYWRkc1xuICAgICAgICAgIC8vIHRvbyBtYW55IGl0ZW1zIHRvIHRoZSBET00uXG4gICAgICAgICAgLy8gQWRqdXN0aW5nIHNjcm9sbCBwb3NpdGlvbiB0byBlcXVhbCB0aGUgY3VycmVudCBzY3JvbGxUb3AgdmFsdWVcbiAgICAgICAgICAvLyB0byBhdm9pZCBsb29waW5nLlxuICAgICAgICAgIHNlbGVjdG9yLl9yZXNldFNjcm9sbFBvc2l0aW9uKHNlbGVjdG9yLl9waHlzaWNhbFRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzaXplRHJvcGRvd24oKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LmVuc3VyZUl0ZW1zUmVuZGVyZWQoKTtcbiAgICAgICAgc2VsZWN0b3Iubm90aWZ5UmVzaXplKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIF9pbmRleE9mVmFsdWUodmFsdWUsIGl0ZW1zKSB7XG4gICAgaWYgKGl0ZW1zICYmIHRoaXMuX2lzVmFsaWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtc1tpXSkgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBpcyBzdXBwb3J0ZWQgYXMgYW4gaXRlbSB2YWx1ZSBpbiB0aGlzIGNvbnRyb2wuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfaXNWYWxpZFZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBfb3ZlcmxheVNlbGVjdGVkSXRlbUNoYW5nZWQoZSkge1xuICAgIC8vIHN0b3AgdGhpcyBwcml2YXRlIGV2ZW50IGZyb20gbGVha2luZyBvdXRzaWRlLlxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoZS5kZXRhaWwuaXRlbSBpbnN0YW5jZW9mIENvbWJvQm94UGxhY2Vob2xkZXIpIHtcbiAgICAgIC8vIFBsYWNlaG9sZGVyIGl0ZW1zIHNob3VsZCBub3QgYmUgc2VsZWN0YWJsZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMuZmlsdGVyZWRJdGVtcy5pbmRleE9mKGUuZGV0YWlsLml0ZW0pO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW0gIT09IGUuZGV0YWlsLml0ZW0pIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gZS5kZXRhaWwuaXRlbTtcbiAgICAgIHRoaXMuX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIGFuZCBzZXRzIHRoZSBgaW52YWxpZGAgZmxhZyBhcHByb3ByaWF0ZWx5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZCBhbmQgc2V0cyB0aGUgYGludmFsaWRgIGZsYWcgYXBwcm9wcmlhdGVseVxuICAgKi9cbiAgdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuICEodGhpcy5pbnZhbGlkID0gIXRoaXMuY2hlY2tWYWxpZGl0eSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgc2F0aXNmaWVzIGFsbCBjb25zdHJhaW50cyAoaWYgYW55KVxuICAgKlxuICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoZSBgY2hlY2tWYWxpZGl0eWAgbWV0aG9kIGZvciBjdXN0b20gdmFsaWRhdGlvbnMuXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IF9pbnN0YW5jZVByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB0cnVlLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgX2Vuc3VyZVRlbXBsYXRpemVkKCkge1xuICAgIGlmICghdGhpcy5fVGVtcGxhdGVDbGFzcykge1xuICAgICAgY29uc3QgdHBsID0gdGhpcy5faXRlbVRlbXBsYXRlIHx8IHRoaXMuX2dldFJvb3RUZW1wbGF0ZSgpO1xuICAgICAgaWYgKHRwbCkge1xuICAgICAgICB0aGlzLl9UZW1wbGF0ZUNsYXNzID0gdGVtcGxhdGl6ZSh0cGwsIHRoaXMsIHtcbiAgICAgICAgICBpbnN0YW5jZVByb3BzOiB0aGlzLl9pbnN0YW5jZVByb3BzLFxuICAgICAgICAgIGZvcndhcmRIb3N0UHJvcDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy4kLm92ZXJsYXkuX3NlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZhYWRpbi1jb21iby1ib3gtaXRlbScpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLl9pdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2l0ZW1UZW1wbGF0ZUluc3RhbmNlLnNldChwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaXRlbS5faXRlbVRlbXBsYXRlSW5zdGFuY2Uubm90aWZ5UGF0aChwcm9wLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldFJvb3RUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuY2hpbGRyZW4sIGVsZW0gPT4gZWxlbS50YWdOYW1lID09PSAnVEVNUExBVEUnKVswXTtcbiAgfVxuXG4gIF9wcmV2ZW50SW5wdXRCbHVyKCkge1xuICAgIGlmICh0aGlzLl90b2dnbGVFbGVtZW50KSB7XG4gICAgICB0aGlzLl90b2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fcHJldmVudERlZmF1bHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xlYXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jbGVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICB9XG5cbiAgX3Jlc3RvcmVJbnB1dEJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX3RvZ2dsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGVhckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NsZWFyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQGV2ZW50IHZhbHVlLWNoYW5nZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGRldGFpbFxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IGRldGFpbC52YWx1ZSB0aGUgY29tYm9ib3ggdmFsdWVcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAZXZlbnQgc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxcbiAgICogIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGV0YWlsLnZhbHVlIHRoZSBzZWxlY3RlZCBpdGVtLiBUeXBlIGlzIHRoZSBzYW1lIGFzIHRoZSB0eXBlIG9mIGBpdGVtc2AuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIHNldHMgYSBjdXN0b20gdmFsdWUuXG4gICAqIEBldmVudCBjdXN0b20tdmFsdWUtc2V0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkZXRhaWwgdGhlIGN1c3RvbSB2YWx1ZVxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBUbyBjb21wbHkgd2l0aCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2hhbmdlXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE4IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuLypcbiAqIFBsYWNlaG9sZGVyIG9iamVjdCBjbGFzcyByZXByZXNlbnRpbmcgaXRlbXMgYmVpbmcgbG9hZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBDb21ib0JveFBsYWNlaG9sZGVyID0gY2xhc3MgQ29tYm9Cb3hQbGFjZWhvbGRlciB7XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9tZW51LW92ZXJsYXkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1jb21iby1ib3gtb3ZlcmxheVwiIHRoZW1lLWZvcj1cInZhYWRpbi1jb21iby1ib3gtb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1tZW51LW92ZXJsYXlcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgLyogVE9ETyB1c2luZyBhIGxlZ2FjeSBtaXhpbiAodW5zdXBwb3J0ZWQpICovXG4gICAgICAgIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgICAgICAgIGJvcmRlci13aWR0aDogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjb250ZW50XCJdIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2xvYWRpbmddKSBbcGFydD1cImxvYWRlclwiXSB7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgdmFyKC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcikgbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDIwJSxcbiAgICAgICAgICAgIHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpIDIwJSxcbiAgICAgICAgICAgIHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpIDQwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDQwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSxcbiAgICAgICAgICAgIHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpIDYwJSxcbiAgICAgICAgICAgIHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpIDgwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDgwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDEwMCVcbiAgICAgICAgICApIDAgMCAvIDQwMCUgMTAwJSByZXBlYXQteDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIDNzIGxpbmVhciBpbmZpbml0ZSBtYXRlcmlhbC1jb21iby1ib3gtbG9hZGVyLXByb2dyZXNzLFxuICAgICAgICAgIC4zcyAuMXMgYm90aCBtYXRlcmlhbC1jb21iby1ib3gtbG9hZGVyLWZhZGUtaW47XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibG9hZGVyXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMC4xNjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbWF0ZXJpYWwtY29tYm8tYm94LWxvYWRlci1mYWRlLWluIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbWF0ZXJpYWwtY29tYm8tYm94LWxvYWRlci1wcm9ncmVzcyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAzMyUge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDAlIDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA2NyUge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNTAlIDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAwJSAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1pdGVtL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1pdGVtLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtY29tYm8tYm94LWl0ZW1cIiB0aGVtZS1mb3I9XCJ2YWFkaW4tY29tYm8tYm94LWl0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibWF0ZXJpYWwtaXRlbVwiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLXNtYWxsLWZvbnQtc2l6ZSk7XG4gICAgICAgIC0tX21hdGVyaWFsLWl0ZW0tc2VsZWN0ZWQtaWNvbi1kaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLyogU2hhZHlDU1Mgd29ya2Fyb3VuZCAqL1xuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgICAgIDpob3N0KDpob3ZlciksXG4gICAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1zdHlsZXMuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtaXRlbS1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyc7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG4vKipcbiAqIEEgbWl4aW4gcHJvdmlkaW5nIGBmb2N1c2VkYCwgYGZvY3VzLXJpbmdgLCBgYWN0aXZlYCwgYGRpc2FibGVkYCBhbmQgYHNlbGVjdGVkYC5cbiAqXG4gKiBgZm9jdXNlZGAsIGBhY3RpdmVgIGFuZCBgZm9jdXMtcmluZ2AgYXJlIHNldCBhcyBvbmx5IGFzIGF0dHJpYnV0ZXMuXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpbkl0ZW1NaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2VkIGZvciBtaXhpbiBkZXRlY3Rpb24gYmVjYXVzZSBgaW5zdGFuY2VvZmAgZG9lcyBub3Qgd29yayB3aXRoIG1peGlucy5cbiAgICAgICAqIGUuZy4gaW4gVmFhZGluTGlzdE1peGluIGl0IGZpbHRlcnMgaXRlbXMgYnkgdXNpbmcgdGhlXG4gICAgICAgKiBgZWxlbWVudC5faGFzVmFhZGluSXRlbU1peGluYCBjb25kaXRpb24uXG4gICAgICAgKi9cbiAgICAgIF9oYXNWYWFkaW5JdGVtTWl4aW46IHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCB0aGUgaXRlbSBpcyBpbiBzZWxlY3RlZCBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX3NlbGVjdGVkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF92YWx1ZTogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuX3ZhbHVlIDogdGhpcy50ZXh0Q29udGVudC50cmltKCk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIGlmIChhdHRyVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBhdHRyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4gdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0aGlzLl9tb3VzZWRvd24gPSB0cnVlKTtcbiAgICAgIGNvbnN0IG1vdXNlVXBMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlKHRoaXMuX21vdXNlZG93biA9IGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLl9vbktleWRvd24oZSkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHRoaXMuX29uS2V5dXAoZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyBpbiBGaXJlZm94IGFuZCBTYWZhcmksIGJsdXIgZG9lcyBub3QgZmlyZSBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIHJlbW92ZWQsXG4gICAgLy8gZXNwZWNpYWxseSBiZXR3ZWVuIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cywgYmVpbmcgYWN0aXZlIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgLy8gcmVwcm9kdWNpYmxlIGluIGA8dmFhZGluLXNlbGVjdD5gIHdoZW4gY2xvc2luZyBvdmVybGF5IG9uIHNlbGVjdC5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0ZWRDaGFuZ2VkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gIH1cblxuICBfZGlzYWJsZWRDaGFuZ2VkKGRpc2FibGVkKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBfc2V0Rm9jdXNlZChmb2N1c2VkKSB7XG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1c2VkJywgJycpO1xuICAgICAgaWYgKCF0aGlzLl9tb3VzZWRvd24pIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdmb2N1c2VkJyk7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZm9jdXMtcmluZycpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBfc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfb25LZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9eKCB8U3BhY2VCYXJ8RW50ZXIpJC8udGVzdChldmVudC5rZXkpICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIF9vbktleXVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBJdGVtTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1pdGVtLW1peGluLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG4vKipcbiAqIGA8dmFhZGluLWl0ZW0+YCBpcyBhIFdlYiBDb21wb25lbnQgcHJvdmlkaW5nIGxheW91dCBmb3IgaXRlbXMgaW4gdGFicyBhbmQgbWVudXMuXG4gKlxuICogYGBgXG4gKiAgIDx2YWFkaW4taXRlbT5cbiAqICAgICBJdGVtIGNvbnRlbnRcbiAqICAgPC92YWFkaW4taXRlbT5cbiAqIGBgYFxuICpcbiAqICMjIyBTZWxlY3RhYmxlXG4gKlxuICogYDx2YWFkaW4taXRlbT5gIGhhcyB0aGUgYHNlbGVjdGVkYCBwcm9wZXJ0eSBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGUgYXR0cmlidXRlLlxuICogQ3VycmVudGx5LCB0aGUgY29tcG9uZW50IHNldHMgdGhlIGBzZWxlY3RlZGAgdG8gZmFsc2UsIHdoZW4gYGRpc2FibGVkYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZS5cbiAqIEJ1dCBvdGhlciB0aGFuIHRoYXQsIHRoZSBgPHZhYWRpbi1pdGVtPmAgZG9lcyBub3Qgc3dpdGNoIHNlbGVjdGlvbiBieSBpdHNlbGYuXG4gKiBJbiBnZW5lcmFsLCBpdCBpcyB0aGUgd3JhcHBlciBjb21wb25lbnQsIGxpa2UgYDx2YWFkaW4tbGlzdC1ib3g+YCwgd2hpY2ggc2hvdWxkIHVwZGF0ZVxuICogdGhlIGBzZWxlY3RlZGAgcHJvcGVydHkgb24gdGhlIGl0ZW1zLCBlLiBnLiBvbiBtb3VzZWRvd24gb3Igd2hlbiBFbnRlciAvIFNwYWNlYmFyIGlzIHByZXNzZWQuXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBQYXJ0IG5hbWUgfCBEZXNjcmlwdGlvblxuICogLS0tfC0tLVxuICogYGNvbnRlbnRgIHwgVGhlIGVsZW1lbnQgdGhhdCB3cmFwcyB0aGUgc2xvdFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgfCBEZXNjcmlwdGlvbiB8IFBhcnQgbmFtZVxuICogLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS1cbiAqIGBkaXNhYmxlZGAgfCBTZXQgdG8gYSBkaXNhYmxlZCBpdGVtIHwgOmhvc3RcbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQgfCA6aG9zdFxuICogYGZvY3VzLXJpbmdgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMga2V5Ym9hcmQgZm9jdXNlZCB8IDpob3N0XG4gKiBgc2VsZWN0ZWRgIHwgU2V0IHdoZW4gdGhlIGl0ZW0gaXMgc2VsZWN0ZWQgfCA6aG9zdFxuICogYGFjdGl2ZWAgfCBTZXQgd2hlbiBtb3VzZWRvd24gb3IgZW50ZXIvc3BhY2ViYXIgcHJlc3NlZCB8IDpob3N0XG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5JdGVtTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICovXG5jbGFzcyBJdGVtRWxlbWVudCBleHRlbmRzIEl0ZW1NaXhpbihUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IHBhcnQ9XCJjb250ZW50XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1pdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzIuMS4xJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXR0YWJsZSBzdHJpbmcgdmFsdWUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSB0cmltbWVkIHRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKEl0ZW1FbGVtZW50LmlzLCBJdGVtRWxlbWVudCk7XG5cbmV4cG9ydCB7IEl0ZW1FbGVtZW50IH07XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1pdGVtXCIgdGhlbWUtZm9yPVwidmFhZGluLWl0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1hdGVyaWFsLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgIH1cblxuICAgICAgLyogSXQncyB0aGUgbGlzdC1ib3gncyByZXNwb25zaWJpbGl0eSB0byBhZGQgdGhlIGZvY3VzIHN0eWxlICovXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLyogU2VsZWN0ZWQgaXRlbSBoYXMgYW4gaWNvbiAqL1xuXG4gICAgICA6aG9zdDo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogdmFyKC0tX21hdGVyaWFsLWl0ZW0tc2VsZWN0ZWQtaWNvbi1kaXNwbGF5LCBub25lKTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hdGVyaWFsLWljb25zO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzZWxlY3RlZF0pOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jaGVjayk7XG4gICAgICB9XG5cbiAgICAgIC8qIERpc2FibGVkIGl0ZW0gKi9cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWl0ZW0tc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1pdGVtLmpzJztcbiIsImltcG9ydCAnLi4vY29sb3IuanMnO1xuaW1wb3J0ICcuL292ZXJsYXkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtbWVudS1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cIm1hdGVyaWFsLW92ZXJsYXlcIj5cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2TkE7QUFDQTtBQUNBO0FBcUNBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFuRkE7QUFzRkE7QUFPQTtBQUNBO0FBTUE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQTNCQTtBQTZCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaHNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVBBOzs7OztBQUtBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkVBO0FBQUE7QUFBQTtBQXlFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckZBO0FBQUE7QUFBQTtBQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3RkE7QUFBQTtBQUFBO0FBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBO0FBQUE7QUFBQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpIQTtBQUFBO0FBQUE7QUFtSEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEzSkE7QUFBQTtBQUFBO0FBOEpBO0FBQ0E7QUFFQTs7OztBQWpLQTtBQUFBO0FBQUE7QUFxS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuTEE7QUFBQTtBQUFBO0FBcUxBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNMQTtBQUFBO0FBQUE7QUE4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFuTUE7QUFBQTtBQUFBO0FBcU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXpNQTtBQUFBO0FBQUE7QUE0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsTkE7QUFBQTtBQUFBO0FBcU5BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBbk9BO0FBQUE7QUFBQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUEzQ0E7QUFnREE7QUFuREE7QUFBQTtBQUFBO0FBc0RBO0FBTUE7QUE1REE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7QUFrSEE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcllBO0FBQ0E7QUE0QkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBckVBO0FBdUVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoSEE7QUFDQTtBQTJhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Y0E7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFWQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBYUE7QUFFQTs7Ozs7OztBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQTdCQTtBQStCQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQXpNQTtBQUNBO0FBMk1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNQQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7OztBQW9GQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUE1SUE7QUFDQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBaERBO0FBa0RBOzs7QUFFQTtBQUNBO0FBUUE7Ozs7QUFsRkE7QUFDQTtBQStJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBOzs7Ozs7O0FBS0E7QUFDQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBM0JBO0FBQ0E7QUFDQTs7O0FBMkJBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXRHQTtBQUNBO0FBd0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S0E7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK01BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBMVBBO0FBQUE7QUFBQTtBQThQQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFqUUE7QUFBQTtBQUFBO0FBb1FBO0FBQUE7QUFBQTtBQUNBO0FBclFBO0FBQUE7QUFBQTtBQXdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3UUE7QUFBQTtBQUFBO0FBZ1JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBelJBO0FBQUE7QUFBQTtBQTZSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFuU0E7QUFBQTtBQUFBO0FBdVNBO0FBQ0E7QUF4U0E7QUFBQTtBQUFBO0FBMlNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNVRBO0FBQUE7QUFBQTtBQStUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwVUE7QUFBQTtBQUFBO0FBdVVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBelZBO0FBQUE7QUFBQTtBQThWQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpYQTtBQUFBO0FBQUE7QUFvWEE7QUFDQTtBQXJYQTtBQUFBO0FBQUE7QUF3WEE7QUFDQTtBQXpYQTtBQUFBO0FBQUE7QUE0WEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWpZQTtBQUFBO0FBQUE7QUFvWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1WUE7QUFBQTtBQUFBO0FBK1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1WkE7QUFBQTtBQUFBO0FBOFpBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6YUE7QUFBQTtBQUFBO0FBNGFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEzYkE7QUFBQTtBQUFBO0FBOGJBO0FBQ0E7QUFDQTtBQUNBO0FBamNBO0FBQUE7QUFBQTtBQW9jQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF4Y0E7QUFBQTtBQUFBO0FBMmNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdGRBO0FBQUE7QUFBQTtBQXlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuZUE7QUFBQTtBQUFBO0FBcWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBbGZBO0FBQUE7QUFBQTtBQXNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUEvZkE7QUFBQTtBQUFBO0FBbWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF2Z0JBO0FBQUE7QUFBQTtBQXlnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQWppQkE7QUFBQTtBQUFBO0FBcWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNWtCQTtBQUFBO0FBQ0E7QUFpbEJBOzs7QUFsbEJBO0FBc2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNsQkE7QUFBQTtBQUFBO0FBOGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFtQkE7QUFBQTtBQUFBO0FBNm1CQTtBQUNBO0FBQ0E7QUFDQTtBQWhuQkE7QUFBQTtBQUFBO0FBbW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTluQkE7QUFBQTtBQUFBO0FBaW9CQTtBQUNBO0FBQ0E7QUFDQTtBQXBvQkE7QUFBQTtBQUFBO0FBdW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN29CQTtBQUFBO0FBQUE7QUFncEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJwQkE7QUFBQTtBQUFBO0FBd3BCQTtBQUNBO0FBenBCQTtBQUFBO0FBQUE7QUE0cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpxQkE7QUFBQTtBQUFBO0FBb3FCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcnNCQTtBQUFBO0FBQUE7QUF3c0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE5dEJBO0FBQUE7QUFBQTtBQWl1QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFydUJBO0FBQUE7QUFBQTtBQXV1QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBM3VCQTtBQUFBO0FBQUE7QUE4dUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1dkJBO0FBQUE7QUFBQTtBQSt2QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTd3QkE7QUFBQTtBQUFBO0FBK3dCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6eEJBO0FBQUE7QUFBQTtBQTR4QkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBeHlCQTtBQUFBO0FBQUE7QUEyeUJBO0FBQ0E7QUE1eUJBO0FBQUE7QUFBQTtBQTh5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBejBCQTtBQUFBO0FBQUE7QUE0MEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQXYxQkE7QUFBQTtBQUFBO0FBNjFCQTtBQUNBO0FBOTFCQTtBQUFBO0FBQUE7QUFpMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7O0FBbjNCQTtBQUFBO0FBQUE7QUF5M0JBO0FBQ0E7QUFFQTs7Ozs7O0FBNTNCQTtBQUFBO0FBQUE7QUFrNEJBO0FBQ0E7QUFDQTtBQUNBO0FBcjRCQTtBQUFBO0FBQUE7QUFpNUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQWw2QkE7QUFBQTtBQUFBO0FBcTZCQTtBQUFBO0FBQUE7QUFDQTtBQXQ2QkE7QUFBQTtBQUFBO0FBeTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBLzZCQTtBQUFBO0FBQUE7QUFrN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF4N0JBO0FBQUE7QUFBQTtBQTI3QkE7QUFDQTtBQTU3QkE7QUFBQTtBQUFBO0FBKzdCQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0FBUUE7Ozs7OztBQU1BOzs7Ozs7QUF4OUJBO0FBQUE7QUFBQTtBQStrQkE7QUFDQTtBQWhsQkE7QUFBQTtBQUFBO0FBdzRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQTk0QkE7QUFBQTtBQUFBO0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUE1TEE7QUE4TEE7QUFqTUE7QUFBQTtBQUFBO0FBb01BO0FBU0E7QUE3TUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTtBQTZGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW1DQTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7QUFLQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBNkNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFuRUE7QUFBQTtBQUFBO0FBdUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQS9FQTtBQUFBO0FBQUE7QUFrRkE7QUFDQTtBQW5GQTtBQUFBO0FBQUE7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdGQTtBQUFBO0FBQUE7QUFnR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUExR0E7QUFBQTtBQUFBO0FBNkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxIQTtBQUFBO0FBQUE7QUFxSEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBekhBO0FBQUE7QUFBQTtBQTRIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFoSUE7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUF2Q0E7QUEwQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBL0JBO0FBaUNBO0FBbkNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTs7Ozs7OztBQUNBO0FBQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUlBO0FBUEE7QUFRQTtBQUNBOztBQW5DQTtBQUNBO0FBb0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWtEQTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9