(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-calendar~panel-config-automation~panel-config-script"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function _updateLayoutStates() {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VNode = function VNode() {};

var options = {};
var stack = [];
var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
  var children = EMPTY_CHILDREN,
      lastSimple,
      child,
      simple,
      i;

  for (i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  }

  if (attributes && attributes.children != null) {
    if (!stack.length) stack.push(attributes.children);
    delete attributes.children;
  }

  while (stack.length) {
    if ((child = stack.pop()) && child.pop !== undefined) {
      for (i = child.length; i--;) {
        stack.push(child[i]);
      }
    } else {
      if (typeof child === 'boolean') child = null;

      if (simple = typeof nodeName !== 'function') {
        if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
      }

      if (simple && lastSimple) {
        children[children.length - 1] += child;
      } else if (children === EMPTY_CHILDREN) {
        children = [child];
      } else {
        children.push(child);
      }

      lastSimple = simple;
    }
  }

  var p = new VNode();
  p.nodeName = nodeName;
  p.children = children;
  p.attributes = attributes == null ? undefined : attributes;
  p.key = attributes == null ? undefined : attributes.key;
  if (options.vnode !== undefined) options.vnode(p);
  return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
var items = [];

function enqueueRender(component) {
  if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
    (options.debounceRendering || defer)(rerender);
  }
}

function rerender() {
  var p;

  while (p = items.pop()) {
    if (p._dirty) renderComponent(p);
  }
}

function isSameNodeType(node, vnode, hydrating) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return node.splitText !== undefined;
  }

  if (typeof vnode.nodeName === 'string') {
    return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  }

  return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
  return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
  var props = extend({}, vnode.attributes);
  props.children = vnode.children;
  var defaultProps = vnode.nodeName.defaultProps;

  if (defaultProps !== undefined) {
    for (var i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}

function createNode(nodeName, isSvg) {
  var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
  node.normalizedNodeName = nodeName;
  return node;
}

function removeNode(node) {
  var parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
  if (name === 'className') name = 'class';

  if (name === 'key') {} else if (name === 'ref') {
    applyRef(old, null);
    applyRef(value, node);
  } else if (name === 'class' && !isSvg) {
    node.className = value || '';
  } else if (name === 'style') {
    if (!value || typeof value === 'string' || typeof old === 'string') {
      node.style.cssText = value || '';
    }

    if (value && _typeof(value) === 'object') {
      if (typeof old !== 'string') {
        for (var i in old) {
          if (!(i in value)) node.style[i] = '';
        }
      }

      for (var i in value) {
        node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
      }
    }
  } else if (name === 'dangerouslySetInnerHTML') {
    if (value) node.innerHTML = value.__html || '';
  } else if (name[0] == 'o' && name[1] == 'n') {
    var useCapture = name !== (name = name.replace(/Capture$/, ''));
    name = name.toLowerCase().substring(2);

    if (value) {
      if (!old) node.addEventListener(name, eventProxy, useCapture);
    } else {
      node.removeEventListener(name, eventProxy, useCapture);
    }

    (node._listeners || (node._listeners = {}))[name] = value;
  } else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
    try {
      node[name] = value == null ? '' : value;
    } catch (e) {}

    if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  } else {
    var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

    if (value == null || value === false) {
      if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
    } else if (typeof value !== 'function') {
      if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
    }
  }
}

function eventProxy(e) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];
var diffLevel = 0;
var isSvgMode = false;
var hydrating = false;

function flushMounts() {
  var c;

  while (c = mounts.shift()) {
    if (options.afterMount) options.afterMount(c);
    if (c.componentDidMount) c.componentDidMount();
  }
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
  if (!diffLevel++) {
    isSvgMode = parent != null && parent.ownerSVGElement !== undefined;
    hydrating = dom != null && !('__preactattr_' in dom);
  }

  var ret = idiff(dom, vnode, context, mountAll, componentRoot);
  if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  if (! --diffLevel) {
    hydrating = false;
    if (!componentRoot) flushMounts();
  }

  return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
  var out = dom,
      prevSvgMode = isSvgMode;
  if (vnode == null || typeof vnode === 'boolean') vnode = '';

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
      if (dom.nodeValue != vnode) {
        dom.nodeValue = vnode;
      }
    } else {
      out = document.createTextNode(vnode);

      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out['__preactattr_'] = true;
    return out;
  }

  var vnodeName = vnode.nodeName;

  if (typeof vnodeName === 'function') {
    return buildComponentFromVNode(dom, vnode, context, mountAll);
  }

  isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;
  vnodeName = String(vnodeName);

  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      while (dom.firstChild) {
        out.appendChild(dom.firstChild);
      }

      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
      recollectNodeTree(dom, true);
    }
  }

  var fc = out.firstChild,
      props = out['__preactattr_'],
      vchildren = vnode.children;

  if (props == null) {
    props = out['__preactattr_'] = {};

    for (var a = out.attributes, i = a.length; i--;) {
      props[a[i].name] = a[i].value;
    }
  }

  if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
    if (fc.nodeValue != vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  } else if (vchildren && vchildren.length || fc != null) {
    innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
  }

  diffAttributes(out, vnode.attributes, props);
  isSvgMode = prevSvgMode;
  return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
  var originalChildren = dom.childNodes,
      children = [],
      keyed = {},
      keyedLen = 0,
      min = 0,
      len = originalChildren.length,
      childrenLen = 0,
      vlen = vchildren ? vchildren.length : 0,
      j,
      c,
      f,
      vchild,
      child;

  if (len !== 0) {
    for (var i = 0; i < len; i++) {
      var _child = originalChildren[i],
          props = _child['__preactattr_'],
          key = vlen && props ? _child._component ? _child._component.__key : props.key : null;

      if (key != null) {
        keyedLen++;
        keyed[key] = _child;
      } else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
        children[childrenLen++] = _child;
      }
    }
  }

  if (vlen !== 0) {
    for (var i = 0; i < vlen; i++) {
      vchild = vchildren[i];
      child = null;
      var key = vchild.key;

      if (key != null) {
        if (keyedLen && keyed[key] !== undefined) {
          child = keyed[key];
          keyed[key] = undefined;
          keyedLen--;
        }
      } else if (min < childrenLen) {
        for (j = min; j < childrenLen; j++) {
          if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
            child = c;
            children[j] = undefined;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
        }
      }

      child = idiff(child, vchild, context, mountAll);
      f = originalChildren[i];

      if (child && child !== dom && child !== f) {
        if (f == null) {
          dom.appendChild(child);
        } else if (child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(child, f);
        }
      }
    }
  }

  if (keyedLen) {
    for (var i in keyed) {
      if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
    }
  }

  while (min <= childrenLen) {
    if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  }
}

function recollectNodeTree(node, unmountOnly) {
  var component = node._component;

  if (component) {
    unmountComponent(component);
  } else {
    if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

    if (unmountOnly === false || node['__preactattr_'] == null) {
      removeNode(node);
    }

    removeChildren(node);
  }
}

function removeChildren(node) {
  node = node.lastChild;

  while (node) {
    var next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

function diffAttributes(dom, attrs, old) {
  var name;

  for (name in old) {
    if (!(attrs && attrs[name] != null) && old[name] != null) {
      setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
    }
  }

  for (name in attrs) {
    if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
      setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
  }
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
  var inst,
      i = recyclerComponents.length;

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context);
    Component.call(inst, props, context);
  } else {
    inst = new Component(props, context);
    inst.constructor = Ctor;
    inst.render = doRender;
  }

  while (i--) {
    if (recyclerComponents[i].constructor === Ctor) {
      inst.nextBase = recyclerComponents[i].nextBase;
      recyclerComponents.splice(i, 1);
      return inst;
    }
  }

  return inst;
}

function doRender(props, state, context) {
  return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
  if (component._disable) return;
  component._disable = true;
  component.__ref = props.ref;
  component.__key = props.key;
  delete props.ref;
  delete props.key;

  if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
    if (!component.base || mountAll) {
      if (component.componentWillMount) component.componentWillMount();
    } else if (component.componentWillReceiveProps) {
      component.componentWillReceiveProps(props, context);
    }
  }

  if (context && context !== component.context) {
    if (!component.prevContext) component.prevContext = component.context;
    component.context = context;
  }

  if (!component.prevProps) component.prevProps = component.props;
  component.props = props;
  component._disable = false;

  if (renderMode !== 0) {
    if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
      renderComponent(component, 1, mountAll);
    } else {
      enqueueRender(component);
    }
  }

  applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
  if (component._disable) return;
  var props = component.props,
      state = component.state,
      context = component.context,
      previousProps = component.prevProps || props,
      previousState = component.prevState || state,
      previousContext = component.prevContext || context,
      isUpdate = component.base,
      nextBase = component.nextBase,
      initialBase = isUpdate || nextBase,
      initialChildComponent = component._component,
      skip = false,
      snapshot = previousContext,
      rendered,
      inst,
      cbase;

  if (component.constructor.getDerivedStateFromProps) {
    state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
    component.state = state;
  }

  if (isUpdate) {
    component.props = previousProps;
    component.state = previousState;
    component.context = previousContext;

    if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
      skip = true;
    } else if (component.componentWillUpdate) {
      component.componentWillUpdate(props, state, context);
    }

    component.props = props;
    component.state = state;
    component.context = context;
  }

  component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
  component._dirty = false;

  if (!skip) {
    rendered = component.render(props, state, context);

    if (component.getChildContext) {
      context = extend(extend({}, context), component.getChildContext());
    }

    if (isUpdate && component.getSnapshotBeforeUpdate) {
      snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
    }

    var childComponent = rendered && rendered.nodeName,
        toUnmount,
        base;

    if (typeof childComponent === 'function') {
      var childProps = getNodeProps(rendered);
      inst = initialChildComponent;

      if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
        setComponentProps(inst, childProps, 1, context, false);
      } else {
        toUnmount = inst;
        component._component = inst = createComponent(childComponent, childProps, context);
        inst.nextBase = inst.nextBase || nextBase;
        inst._parentComponent = component;
        setComponentProps(inst, childProps, 0, context, false);
        renderComponent(inst, 1, mountAll, true);
      }

      base = inst.base;
    } else {
      cbase = initialBase;
      toUnmount = initialChildComponent;

      if (toUnmount) {
        cbase = component._component = null;
      }

      if (initialBase || renderMode === 1) {
        if (cbase) cbase._component = null;
        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
      }
    }

    if (initialBase && base !== initialBase && inst !== initialChildComponent) {
      var baseParent = initialBase.parentNode;

      if (baseParent && base !== baseParent) {
        baseParent.replaceChild(base, initialBase);

        if (!toUnmount) {
          initialBase._component = null;
          recollectNodeTree(initialBase, false);
        }
      }
    }

    if (toUnmount) {
      unmountComponent(toUnmount);
    }

    component.base = base;

    if (base && !isChild) {
      var componentRef = component,
          t = component;

      while (t = t._parentComponent) {
        (componentRef = t).base = base;
      }

      base._component = componentRef;
      base._componentConstructor = componentRef.constructor;
    }
  }

  if (!isUpdate || mountAll) {
    mounts.push(component);
  } else if (!skip) {
    if (component.componentDidUpdate) {
      component.componentDidUpdate(previousProps, previousState, snapshot);
    }

    if (options.afterUpdate) options.afterUpdate(component);
  }

  while (component._renderCallbacks.length) {
    component._renderCallbacks.pop().call(component);
  }

  if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
  var c = dom && dom._component,
      originalComponent = c,
      oldDom = dom,
      isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
      isOwner = isDirectOwner,
      props = getNodeProps(vnode);

  while (c && !isOwner && (c = c._parentComponent)) {
    isOwner = c.constructor === vnode.nodeName;
  }

  if (c && isOwner && (!mountAll || c._component)) {
    setComponentProps(c, props, 3, context, mountAll);
    dom = c.base;
  } else {
    if (originalComponent && !isDirectOwner) {
      unmountComponent(originalComponent);
      dom = oldDom = null;
    }

    c = createComponent(vnode.nodeName, props, context);

    if (dom && !c.nextBase) {
      c.nextBase = dom;
      oldDom = null;
    }

    setComponentProps(c, props, 1, context, mountAll);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      recollectNodeTree(oldDom, false);
    }
  }

  return dom;
}

function unmountComponent(component) {
  if (options.beforeUnmount) options.beforeUnmount(component);
  var base = component.base;
  component._disable = true;
  if (component.componentWillUnmount) component.componentWillUnmount();
  component.base = null;
  var inner = component._component;

  if (inner) {
    unmountComponent(inner);
  } else if (base) {
    if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);
    component.nextBase = base;
    removeNode(base);
    recyclerComponents.push(component);
    removeChildren(base);
  }

  applyRef(component.__ref, null);
}

function Component(props, context) {
  this._dirty = true;
  this.context = context;
  this.props = props;
  this.state = this.state || {};
  this._renderCallbacks = [];
}

extend(Component.prototype, {
  setState: function setState(state, callback) {
    if (!this.prevState) this.prevState = this.state;
    this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
    if (callback) this._renderCallbacks.push(callback);
    enqueueRender(this);
  },
  forceUpdate: function forceUpdate(callback) {
    if (callback) this._renderCallbacks.push(callback);
    renderComponent(this, 2);
  },
  render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
  return {};
}

var preact = {
  h: h,
  createElement: h,
  cloneElement: cloneElement,
  createRef: createRef,
  Component: Component,
  render: render,
  rerender: rerender,
  options: options
};
/* harmony default export */ __webpack_exports__["default"] = (preact);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jYWxlbmRhcn5wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92bm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZW5kZXItcXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmRvbS9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdmRvbS9jb21wb25lbnQtcmVjeWNsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92ZG9tL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ByZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtBcHBMYXlvdXRCZWhhdmlvcn0gZnJvbSAnLi4vYXBwLWxheW91dC1iZWhhdmlvci9hcHAtbGF5b3V0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5hcHAtaGVhZGVyLWxheW91dCBpcyBhIHdyYXBwZXIgZWxlbWVudCB0aGF0IHBvc2l0aW9ucyBhbiBhcHAtaGVhZGVyIGFuZCBvdGhlclxuY29udGVudC4gVGhpcyBlbGVtZW50IHVzZXMgdGhlIGRvY3VtZW50IHNjcm9sbCBieSBkZWZhdWx0LCBidXQgaXQgY2FuIGFsc29cbmRlZmluZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG5cblVzaW5nIHRoZSBkb2N1bWVudCBzY3JvbGw6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dD5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuVXNpbmcgYW4gb3duIHNjcm9sbGluZyByZWdpb246XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbiBzdHlsZT1cIndpZHRoOiAzMDBweDsgaGVpZ2h0OiA0MDBweDtcIj5cbiAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkIGNvbmRlbnNlcyBlZmZlY3RzPVwid2F0ZXJmYWxsXCI+XG4gICAgPGFwcC10b29sYmFyPlxuICAgICAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gICAgPC9hcHAtdG9vbGJhcj5cbiAgPC9hcHAtaGVhZGVyPlxuICA8ZGl2PlxuICAgIG1haW4gY29udGVudFxuICA8L2Rpdj5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQWRkIHRoZSBgZnVsbGJsZWVkYCBhdHRyaWJ1dGUgdG8gYXBwLWhlYWRlci1sYXlvdXQgdG8gbWFrZSBpdCBmaXQgdGhlIHNpemUgb2Zcbml0cyBjb250YWluZXI6XG5cbmBgYGh0bWxcbjxhcHAtaGVhZGVyLWxheW91dCBmdWxsYmxlZWQ+XG4gLi4uXG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkBncm91cCBBcHAgRWxlbWVudHNcbkBlbGVtZW50IGFwcC1oZWFkZXItbGF5b3V0XG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3NpbXBsZS5odG1sIFNpbXBsZSBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL3Njcm9sbGluZy1yZWdpb24uaHRtbCBTY3JvbGxpbmcgUmVnaW9uXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL211c2ljLmh0bWwgTXVzaWMgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9mb290ZXIuaHRtbCBGb290ZXIgRGVtb1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyLFxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtaGVhZGVyLWxheW91dCcsXG4gIGJlaGF2aW9yczogW0FwcExheW91dEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGN1cnJlbnQgZWxlbWVudCB3aWxsIGhhdmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGRvY3VtZW50IHNjcm9sbCB0byBjb250cm9sIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaGFzU2Nyb2xsaW5nUmVnaW9uOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ3Jlc2V0TGF5b3V0KGlzQXR0YWNoZWQsIGhhc1Njcm9sbGluZ1JlZ2lvbiknXSxcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGFwcC1oZWFkZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHByb3BlcnR5IGhlYWRlclxuICAgKi9cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMuJC5oZWFkZXJTbG90KS5nZXREaXN0cmlidXRlZE5vZGVzKClbMF07XG4gIH0sXG5cbiAgX3VwZGF0ZUxheW91dFN0YXRlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICFoZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsaXppbmcgY2xhc3MsIHdoaWNoIHN0YXRpY2x5IHBvc2l0aW9ucyB0aGUgaGVhZGVyIGFuZFxuICAgIC8vIHRoZSBjb250ZW50IHVudGlsIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLiQud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsaXppbmcnKTtcbiAgICAvLyBVcGRhdGUgc2Nyb2xsIHRhcmdldC5cbiAgICBoZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24gP1xuICAgICAgICB0aGlzLiQuY29udGVudENvbnRhaW5lciA6XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgLy8gR2V0IGhlYWRlciBoZWlnaHQgaGVyZSBzbyB0aGF0IHN0eWxlIHJlYWRzIGFyZSBiYXRjaGVkIHRvZ2V0aGVyIGJlZm9yZVxuICAgIC8vIHN0eWxlIHdyaXRlcyAoaS5lLiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBiZWxvdykuXG4gICAgdmFyIGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gVXBkYXRlIHRoZSBoZWFkZXIgcG9zaXRpb24uXG4gICAgaWYgKCF0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodE9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQ7XG4gICAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gcmlnaHRPZmZzZXQgKyAncHgnO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyIHBvc2l0aW9uLlxuICAgIHZhciBjb250YWluZXJTdHlsZSA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlO1xuICAgIGlmIChoZWFkZXIuZml4ZWQgJiYgIWhlYWRlci5jb25kZW5zZXMgJiYgdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgc2l6ZSBkb2VzIG5vdCBjaGFuZ2UgYW5kIHdlJ3JlIHVzaW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbixcbiAgICAgIC8vIGV4Y2x1ZGUgdGhlIGhlYWRlciBhcmVhIGZyb20gdGhlIHNjcm9sbGluZyByZWdpb24gc28gdGhhdCB0aGUgaGVhZGVyXG4gICAgICAvLyBkb2Vzbid0IG92ZXJsYXAgdGhlIHNjcm9sbGJhci5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuICogVmlydHVhbCBET00gTm9kZVxuICogQHR5cGVkZWYgVk5vZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb259IG5vZGVOYW1lIFRoZSBzdHJpbmcgb2YgdGhlIERPTSBub2RlIHRvIGNyZWF0ZSBvciBDb21wb25lbnQgY29uc3RydWN0b3IgdG8gcmVuZGVyXG4gKiBAcHJvcGVydHkge0FycmF5PFZOb2RlIHwgc3RyaW5nPn0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIG9mIG5vZGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkfSBrZXkgVGhlIGtleSB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgVk5vZGUgaW4gYSBsaXN0XG4gKiBAcHJvcGVydHkge29iamVjdH0gYXR0cmlidXRlcyBUaGUgcHJvcGVydGllcyBvZiB0aGlzIFZOb2RlXG4gKi9cbmV4cG9ydCBjb25zdCBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlKCkge307XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29tcG9uZW50JykuQ29tcG9uZW50fSBDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdm5vZGUnKS5WTm9kZX0gVk5vZGVcbiAqL1xuXG4vKipcbiAqIEdsb2JhbCBvcHRpb25zXG4gKiBAcHVibGljXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzeW5jQ29tcG9uZW50VXBkYXRlc10gSWYgYHRydWVgLCBgcHJvcGAgY2hhbmdlcyB0cmlnZ2VyIHN5bmNocm9ub3VzIGNvbXBvbmVudCB1cGRhdGVzLiBEZWZhdWx0cyB0byB0cnVlLlxuICogQHByb3BlcnR5IHsodm5vZGU6IFZOb2RlKSA9PiB2b2lkfSBbdm5vZGVdIFByb2Nlc3NlcyBhbGwgY3JlYXRlZCBWTm9kZXMuXG4gKiBAcHJvcGVydHkgeyhjb21wb25lbnQ6IENvbXBvbmVudCkgPT4gdm9pZH0gW2FmdGVyTW91bnRdIEhvb2sgaW52b2tlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICogQHByb3BlcnR5IHsoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHZvaWR9IFthZnRlclVwZGF0ZV0gSG9vayBpbnZva2VkIGFmdGVyIHRoZSBET00gaXMgdXBkYXRlZCB3aXRoIGEgY29tcG9uZW50J3MgbGF0ZXN0IHJlbmRlci5cbiAqIEBwcm9wZXJ0eSB7KGNvbXBvbmVudDogQ29tcG9uZW50KSA9PiB2b2lkfSBbYmVmb3JlVW5tb3VudF0gSG9vayBpbnZva2VkIGltbWVkaWF0ZWx5IGJlZm9yZSBhIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gKiBAcHJvcGVydHkgeyhyZXJlbmRlcjogZnVuY3Rpb24pID0+IHZvaWR9IFtkZWJvdW5jZVJlbmRlcmluZ10gSG9vayBpbnZva2VkIHdoZW5ldmVyIGEgcmVyZW5kZXIgaXMgcmVxdWVzdGVkLiBDYW4gYmUgdXNlZCB0byBkZWJvdW5jZSByZXJlbmRlcnMuXG4gKiBAcHJvcGVydHkgeyhldmVudDogRXZlbnQpID0+IEV2ZW50IHwgdm9pZH0gW2V2ZW50XSBIb29rIGludm9rZWQgYmVmb3JlIGFueSBQcmVhY3QgZXZlbnQgbGlzdGVuZXJzLiBUaGUgcmV0dXJuIHZhbHVlIChpZiBhbnkpIHJlcGxhY2VzIHRoZSBuYXRpdmUgYnJvd3NlciBldmVudCBnaXZlbiB0byBldmVudCBsaXN0ZW5lcnNcbiAqL1xuXG4vKiogQHR5cGUge09wdGlvbnN9ICAqL1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cblxuY29uc3Qgc3RhY2sgPSBbXTtcblxuY29uc3QgRU1QVFlfQ0hJTERSRU4gPSBbXTtcblxuLyoqXG4gKiBKU1gvaHlwZXJzY3JpcHQgcmV2aXZlci5cbiAqIEBzZWUgaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4XG4gKiBCZW5jaG1hcmtzOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3ZWU4ZjhlMzMwYWIwOTkwMGExYTFhMFxuICpcbiAqIE5vdGU6IHRoaXMgaXMgZXhwb3J0ZWQgYXMgYm90aCBgaCgpYCBhbmQgYGNyZWF0ZUVsZW1lbnQoKWAgZm9yIGNvbXBhdGliaWxpdHlcbiAqIHJlYXNvbnMuXG4gKlxuICogQ3JlYXRlcyBhIFZOb2RlICh2aXJ0dWFsIERPTSBlbGVtZW50KS4gQSB0cmVlIG9mIFZOb2RlcyBjYW4gYmUgdXNlZCBhcyBhXG4gKiBsaWdodHdlaWdodCByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3RydWN0dXJlIG9mIGEgRE9NIHRyZWUuIFRoaXMgc3RydWN0dXJlIGNhblxuICogYmUgcmVhbGl6ZWQgYnkgcmVjdXJzaXZlbHkgY29tcGFyaW5nIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgX2FjdHVhbF8gRE9NXG4gKiBzdHJ1Y3R1cmUsIGFuZCBhcHBseWluZyBvbmx5IHRoZSBkaWZmZXJlbmNlcy5cbiAqXG4gKiBgaCgpYC9gY3JlYXRlRWxlbWVudCgpYCBhY2NlcHRzIGFuIGVsZW1lbnQgbmFtZSwgYSBsaXN0IG9mIGF0dHJpYnV0ZXMvcHJvcHMsXG4gKiBhbmQgb3B0aW9uYWxseSBjaGlsZHJlbiB0byBhcHBlbmQgdG8gdGhlIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGUgVGhlIGZvbGxvd2luZyBET00gdHJlZVxuICpcbiAqIGA8ZGl2IGlkPVwiZm9vXCIgbmFtZT1cImJhclwiPkhlbGxvITwvZGl2PmBcbiAqXG4gKiBjYW4gYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiBhczpcbiAqXG4gKiBgaCgnZGl2JywgeyBpZDogJ2ZvbycsIG5hbWUgOiAnYmFyJyB9LCAnSGVsbG8hJyk7YFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgZnVuY3Rpb259IG5vZGVOYW1lIEFuIGVsZW1lbnQgbmFtZS4gRXg6IGBkaXZgLCBgYWAsIGBzcGFuYCwgZXRjLlxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSBhdHRyaWJ1dGVzIEFueSBhdHRyaWJ1dGVzL3Byb3BzIHRvIHNldCBvbiB0aGUgY3JlYXRlZCBlbGVtZW50LlxuICogQHBhcmFtIHtWTm9kZVtdfSBbcmVzdF0gQWRkaXRpb25hbCBhcmd1bWVudHMgYXJlIHRha2VuIHRvIGJlIGNoaWxkcmVuIHRvXG4gKiAgYXBwZW5kLiBDYW4gYmUgaW5maW5pdGVseSBuZXN0ZWQgQXJyYXlzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWUsIGF0dHJpYnV0ZXMpIHtcblx0bGV0IGNoaWxkcmVuPUVNUFRZX0NISUxEUkVOLCBsYXN0U2ltcGxlLCBjaGlsZCwgc2ltcGxlLCBpO1xuXHRmb3IgKGk9YXJndW1lbnRzLmxlbmd0aDsgaS0tID4gMjsgKSB7XG5cdFx0c3RhY2sucHVzaChhcmd1bWVudHNbaV0pO1xuXHR9XG5cdGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMuY2hpbGRyZW4hPW51bGwpIHtcblx0XHRpZiAoIXN0YWNrLmxlbmd0aCkgc3RhY2sucHVzaChhdHRyaWJ1dGVzLmNoaWxkcmVuKTtcblx0XHRkZWxldGUgYXR0cmlidXRlcy5jaGlsZHJlbjtcblx0fVxuXHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG5cdFx0aWYgKChjaGlsZCA9IHN0YWNrLnBvcCgpKSAmJiBjaGlsZC5wb3AhPT11bmRlZmluZWQpIHtcblx0XHRcdGZvciAoaT1jaGlsZC5sZW5ndGg7IGktLTsgKSBzdGFjay5wdXNoKGNoaWxkW2ldKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkPT09J2Jvb2xlYW4nKSBjaGlsZCA9IG51bGw7XG5cblx0XHRcdGlmICgoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lIT09J2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKGNoaWxkPT1udWxsKSBjaGlsZCA9ICcnO1xuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgY2hpbGQ9PT0nbnVtYmVyJykgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO1xuXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgY2hpbGQhPT0nc3RyaW5nJykgc2ltcGxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV0gKz0gY2hpbGQ7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChjaGlsZHJlbj09PUVNUFRZX0NISUxEUkVOKSB7XG5cdFx0XHRcdGNoaWxkcmVuID0gW2NoaWxkXTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0XHRcdH1cblxuXHRcdFx0bGFzdFNpbXBsZSA9IHNpbXBsZTtcblx0XHR9XG5cdH1cblxuXHRsZXQgcCA9IG5ldyBWTm9kZSgpO1xuXHRwLm5vZGVOYW1lID0gbm9kZU5hbWU7XG5cdHAuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0cC5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcz09bnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXM7XG5cdHAua2V5ID0gYXR0cmlidXRlcz09bnVsbCA/IHVuZGVmaW5lZCA6IGF0dHJpYnV0ZXMua2V5O1xuXG5cdC8vIGlmIGEgXCJ2bm9kZSBob29rXCIgaXMgZGVmaW5lZCwgcGFzcyBldmVyeSBjcmVhdGVkIFZOb2RlIHRvIGl0XG5cdGlmIChvcHRpb25zLnZub2RlIT09dW5kZWZpbmVkKSBvcHRpb25zLnZub2RlKHApO1xuXG5cdHJldHVybiBwO1xufVxuIiwiLyoqXG4gKiBDb3B5IGFsbCBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCBvbnRvIGBvYmpgLlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBPYmplY3Qgb250byB3aGljaCBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb3BpZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgT2JqZWN0IGZyb20gd2hpY2ggdG8gY29weSBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge29iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqLCBwcm9wcykge1xuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIG9iajtcbn1cblxuLyoqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqICBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gW3JlZj1udWxsXVxuICogIEBwYXJhbSB7YW55fSBbdmFsdWVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlZihyZWYsIHZhbHVlKSB7XG5cdGlmIChyZWYhPW51bGwpIHtcblx0XHRpZiAodHlwZW9mIHJlZj09J2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtcblx0XHRlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH1cbn1cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHksIGFzIHNvb24gYXMgcG9zc2libGUuIE1ha2VzXG4gKiB1c2Ugb2YgSFRNTCBQcm9taXNlIHRvIHNjaGVkdWxlIHRoZSBjYWxsYmFjayBpZiBhdmFpbGFibGUsXG4gKiBvdGhlcndpc2UgZmFsbGluZyBiYWNrIHRvIGBzZXRUaW1lb3V0YCAobWFpbmx5IGZvciBJRTwxMSkuXG4gKiBAdHlwZSB7KGNhbGxiYWNrOiBmdW5jdGlvbikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmVyID0gdHlwZW9mIFByb21pc2U9PSdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpIDogc2V0VGltZW91dDtcbiIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9oJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL3Zub2RlJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi92bm9kZScpLlZOb2RlPn0gW3Jlc3RdIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB3aWxsIGJlIHVzZWQgYXMgcmVwbGFjZW1lbnRcbiAqICBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMpIHtcblx0cmV0dXJuIGgoXG5cdFx0dm5vZGUubm9kZU5hbWUsXG5cdFx0ZXh0ZW5kKGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyksIHByb3BzKSxcblx0XHRhcmd1bWVudHMubGVuZ3RoPjIgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB2bm9kZS5jaGlsZHJlblxuXHQpO1xufVxuIiwiLy8gcmVuZGVyIG1vZGVzXG5cbi8qKiBEbyBub3QgcmUtcmVuZGVyIGEgY29tcG9uZW50ICovXG5leHBvcnQgY29uc3QgTk9fUkVOREVSID0gMDtcbi8qKiBTeW5jaHJvbm91c2x5IHJlLXJlbmRlciBhIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgU1lOQ19SRU5ERVIgPSAxO1xuLyoqIFN5bmNocm9ub3VzbHkgcmUtcmVuZGVyIGEgY29tcG9uZW50LCBldmVuIGlmIGl0cyBsaWZlY3ljbGUgbWV0aG9kcyBhdHRlbXB0IHRvIHByZXZlbnQgaXQuICovXG5leHBvcnQgY29uc3QgRk9SQ0VfUkVOREVSID0gMjtcbi8qKiBRdWV1ZSBhc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIGEgY29tcG9uZW50IGFuZCBpdCdzIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgQVNZTkNfUkVOREVSID0gMztcblxuXG5leHBvcnQgY29uc3QgQVRUUl9LRVkgPSAnX19wcmVhY3RhdHRyXyc7XG5cbi8qKiBET00gcHJvcGVydGllcyB0aGF0IHNob3VsZCBOT1QgaGF2ZSBcInB4XCIgYWRkZWQgd2hlbiBudW1lcmljICovXG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7XG5cbiIsImltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBkZWZlciB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyByZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3Zkb20vY29tcG9uZW50JztcblxuLyoqXG4gKiBNYW5hZ2VkIHF1ZXVlIG9mIGRpcnR5IGNvbXBvbmVudHMgdG8gYmUgcmUtcmVuZGVyZWRcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vY29tcG9uZW50JykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IGl0ZW1zID0gW107XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9jb21wb25lbnQnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCkge1xuXHRpZiAoIWNvbXBvbmVudC5fZGlydHkgJiYgKGNvbXBvbmVudC5fZGlydHkgPSB0cnVlKSAmJiBpdGVtcy5wdXNoKGNvbXBvbmVudCk9PTEpIHtcblx0XHQob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyB8fCBkZWZlcikocmVyZW5kZXIpO1xuXHR9XG59XG5cbi8qKiBSZXJlbmRlciBhbGwgZW5xdWV1ZWQgZGlydHkgY29tcG9uZW50cyAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcmVuZGVyKCkge1xuXHRsZXQgcDtcblx0d2hpbGUgKCAocCA9IGl0ZW1zLnBvcCgpKSApIHtcblx0XHRpZiAocC5fZGlydHkpIHJlbmRlckNvbXBvbmVudChwKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbm9kZXMgYXJlIGVxdWl2YWxlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vZG9tJykuUHJlYWN0RWxlbWVudH0gbm9kZSBET00gTm9kZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgVmlydHVhbCBET00gbm9kZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoeWRyYXRpbmc9ZmFsc2VdIElmIHRydWUsIGlnbm9yZXMgY29tcG9uZW50IGNvbnN0cnVjdG9yc1xuICogIHdoZW4gY29tcGFyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU5vZGVUeXBlKG5vZGUsIHZub2RlLCBoeWRyYXRpbmcpIHtcblx0aWYgKHR5cGVvZiB2bm9kZT09PSdzdHJpbmcnIHx8IHR5cGVvZiB2bm9kZT09PSdudW1iZXInKSB7XG5cdFx0cmV0dXJuIG5vZGUuc3BsaXRUZXh0IT09dW5kZWZpbmVkO1xuXHR9XG5cdGlmICh0eXBlb2Ygdm5vZGUubm9kZU5hbWU9PT0nc3RyaW5nJykge1xuXHRcdHJldHVybiAhbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3IgJiYgaXNOYW1lZE5vZGUobm9kZSwgdm5vZGUubm9kZU5hbWUpO1xuXHR9XG5cdHJldHVybiBoeWRyYXRpbmcgfHwgbm9kZS5fY29tcG9uZW50Q29uc3RydWN0b3I9PT12bm9kZS5ub2RlTmFtZTtcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIEVsZW1lbnQgaGFzIGEgZ2l2ZW4gbm9kZU5hbWUsIGNhc2UtaW5zZW5zaXRpdmVseS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBub2RlIEEgRE9NIEVsZW1lbnQgdG8gaW5zcGVjdCB0aGUgbmFtZSBvZi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBub2RlTmFtZSBVbm5vcm1hbGl6ZWQgbmFtZSB0byBjb21wYXJlIGFnYWluc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05hbWVkTm9kZShub2RlLCBub2RlTmFtZSkge1xuXHRyZXR1cm4gbm9kZS5ub3JtYWxpemVkTm9kZU5hbWU9PT1ub2RlTmFtZSB8fCBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG5cbi8qKlxuICogUmVjb25zdHJ1Y3QgQ29tcG9uZW50LXN0eWxlIGBwcm9wc2AgZnJvbSBhIFZOb2RlLlxuICogRW5zdXJlcyBkZWZhdWx0L2ZhbGxiYWNrIHZhbHVlcyBmcm9tIGBkZWZhdWx0UHJvcHNgOlxuICogT3duLXByb3BlcnRpZXMgb2YgYGRlZmF1bHRQcm9wc2Agbm90IHByZXNlbnQgaW4gYHZub2RlLmF0dHJpYnV0ZXNgIGFyZSBhZGRlZC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi92bm9kZScpLlZOb2RlfSB2bm9kZSBUaGUgVk5vZGUgdG8gZ2V0IHByb3BzIGZvclxuICogQHJldHVybnMge29iamVjdH0gVGhlIHByb3BzIHRvIHVzZSBmb3IgdGhpcyBWTm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHZub2RlKSB7XG5cdGxldCBwcm9wcyA9IGV4dGVuZCh7fSwgdm5vZGUuYXR0cmlidXRlcyk7XG5cdHByb3BzLmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cblx0bGV0IGRlZmF1bHRQcm9wcyA9IHZub2RlLm5vZGVOYW1lLmRlZmF1bHRQcm9wcztcblx0aWYgKGRlZmF1bHRQcm9wcyE9PXVuZGVmaW5lZCkge1xuXHRcdGZvciAobGV0IGkgaW4gZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAocHJvcHNbaV09PT11bmRlZmluZWQpIHtcblx0XHRcdFx0cHJvcHNbaV0gPSBkZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHByb3BzO1xufVxuIiwiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFwcGx5UmVmIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBBIERPTSBldmVudCBsaXN0ZW5lclxuICogQHR5cGVkZWYgeyhlOiBFdmVudCkgPT4gdm9pZH0gRXZlbnRMaXN0bmVyXG4gKi9cblxuLyoqXG4gKiBBIG1hcHBpbmcgb2YgZXZlbnQgdHlwZXMgdG8gZXZlbnQgbGlzdGVuZXJzXG4gKiBAdHlwZWRlZiB7T2JqZWN0LjxzdHJpbmcsIEV2ZW50TGlzdGVuZXI+fSBFdmVudExpc3RlbmVyTWFwXG4gKi9cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIFByZWFjdCBhZGRzIHRvIGVsZW1lbnRzIGl0IGNyZWF0ZXNcbiAqIEB0eXBlZGVmIFByZWFjdEVsZW1lbnRFeHRlbnNpb25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25vcm1hbGl6ZWROb2RlTmFtZV0gQSBub3JtYWxpemVkIG5vZGUgbmFtZSB0byB1c2UgaW4gZGlmZmluZ1xuICogQHByb3BlcnR5IHtFdmVudExpc3RlbmVyTWFwfSBbX2xpc3RlbmVyc10gQSBtYXAgb2YgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIGJ5IGNvbXBvbmVudHMgdG8gdGhpcyBET00gbm9kZVxuICogQHByb3BlcnR5IHtpbXBvcnQoJy4uL2NvbXBvbmVudCcpLkNvbXBvbmVudH0gW19jb21wb25lbnRdIFRoZSBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGlzIERPTSBub2RlXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBbX2NvbXBvbmVudENvbnN0cnVjdG9yXSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcmVkIHRoaXMgRE9NIG5vZGVcbiAqL1xuXG4vKipcbiAqIEEgRE9NIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBleHRlbmRlZCB3aXRoIFByZWFjdCBwcm9wZXJ0aWVzXG4gKiBAdHlwZWRlZiB7RWxlbWVudCAmIEVsZW1lbnRDU1NJbmxpbmVTdHlsZSAmIFByZWFjdEVsZW1lbnRFeHRlbnNpb25zfSBQcmVhY3RFbGVtZW50XG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBub2RlTmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBub2RlTmFtZSBUaGUgRE9NIG5vZGUgdG8gY3JlYXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N2Zz1mYWxzZV0gSWYgYHRydWVgLCBjcmVhdGVzIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBTVkdcbiAqICBuYW1lc3BhY2UuXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH0gVGhlIGNyZWF0ZWQgRE9NIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUobm9kZU5hbWUsIGlzU3ZnKSB7XG5cdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0bGV0IG5vZGUgPSBpc1N2ZyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBub2RlTmFtZSkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcblx0bm9kZS5ub3JtYWxpemVkTm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cmV0dXJuIG5vZGU7XG59XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cblxuLyoqXG4gKiBTZXQgYSBuYW1lZCBhdHRyaWJ1dGUgb24gdGhlIGdpdmVuIE5vZGUsIHdpdGggc3BlY2lhbCBiZWhhdmlvciBmb3Igc29tZSBuYW1lc1xuICogYW5kIGV2ZW50IGhhbmRsZXJzLiBJZiBgdmFsdWVgIGlzIGBudWxsYCwgdGhlIGF0dHJpYnV0ZS9oYW5kbGVyIHdpbGwgYmVcbiAqIHJlbW92ZWQuXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG5vZGUgQW4gZWxlbWVudCB0byBtdXRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lL2tleSB0byBzZXQsIHN1Y2ggYXMgYW4gZXZlbnQgb3IgYXR0cmlidXRlIG5hbWVcbiAqIEBwYXJhbSB7Kn0gb2xkIFRoZSBsYXN0IHZhbHVlIHRoYXQgd2FzIHNldCBmb3IgdGhpcyBuYW1lL25vZGUgcGFpclxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbiBhdHRyaWJ1dGUgdmFsdWUsIHN1Y2ggYXMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGFzIGFuXG4gKiAgZXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBBcmUgd2UgY3VycmVudGx5IGRpZmZpbmcgaW5zaWRlIGFuIHN2Zz9cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY2Nlc3Nvcihub2RlLCBuYW1lLCBvbGQsIHZhbHVlLCBpc1N2Zykge1xuXHRpZiAobmFtZT09PSdjbGFzc05hbWUnKSBuYW1lID0gJ2NsYXNzJztcblxuXG5cdGlmIChuYW1lPT09J2tleScpIHtcblx0XHQvLyBpZ25vcmVcblx0fVxuXHRlbHNlIGlmIChuYW1lPT09J3JlZicpIHtcblx0XHRhcHBseVJlZihvbGQsIG51bGwpO1xuXHRcdGFwcGx5UmVmKHZhbHVlLCBub2RlKTtcblx0fVxuXHRlbHNlIGlmIChuYW1lPT09J2NsYXNzJyAmJiAhaXNTdmcpIHtcblx0XHRub2RlLmNsYXNzTmFtZSA9IHZhbHVlIHx8ICcnO1xuXHR9XG5cdGVsc2UgaWYgKG5hbWU9PT0nc3R5bGUnKSB7XG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyB8fCB0eXBlb2Ygb2xkPT09J3N0cmluZycpIHtcblx0XHRcdG5vZGUuc3R5bGUuY3NzVGV4dCA9IHZhbHVlIHx8ICcnO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlPT09J29iamVjdCcpIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkIT09J3N0cmluZycpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBvbGQpIGlmICghKGkgaW4gdmFsdWUpKSBub2RlLnN0eWxlW2ldID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdG5vZGUuc3R5bGVbaV0gPSB0eXBlb2YgdmFsdWVbaV09PT0nbnVtYmVyJyAmJiBJU19OT05fRElNRU5TSU9OQUwudGVzdChpKT09PWZhbHNlID8gKHZhbHVlW2ldKydweCcpIDogdmFsdWVbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGVsc2UgaWYgKG5hbWU9PT0nZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKHZhbHVlKSBub2RlLmlubmVySFRNTCA9IHZhbHVlLl9faHRtbCB8fCAnJztcblx0fVxuXHRlbHNlIGlmIChuYW1lWzBdPT0nbycgJiYgbmFtZVsxXT09J24nKSB7XG5cdFx0bGV0IHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZT1uYW1lLnJlcGxhY2UoL0NhcHR1cmUkLywgJycpKTtcblx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHksIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0XHQobm9kZS5fbGlzdGVuZXJzIHx8IChub2RlLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG5cdH1cblx0ZWxzZSBpZiAobmFtZSE9PSdsaXN0JyAmJiBuYW1lIT09J3R5cGUnICYmICFpc1N2ZyAmJiBuYW1lIGluIG5vZGUpIHtcblx0XHQvLyBBdHRlbXB0IHRvIHNldCBhIERPTSBwcm9wZXJ0eSB0byB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0Ly8gSUUgJiBGRiB0aHJvdyBmb3IgY2VydGFpbiBwcm9wZXJ0eS12YWx1ZSBjb21iaW5hdGlvbnMuXG5cdFx0dHJ5IHtcblx0XHRcdG5vZGVbbmFtZV0gPSB2YWx1ZT09bnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0fSBjYXRjaCAoZSkgeyB9XG5cdFx0aWYgKCh2YWx1ZT09bnVsbCB8fCB2YWx1ZT09PWZhbHNlKSAmJiBuYW1lIT0nc3BlbGxjaGVjaycpIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGxldCBucyA9IGlzU3ZnICYmIChuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvXnhsaW5rOj8vLCAnJykpKTtcblx0XHQvLyBzcGVsbGNoZWNrIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgdGhhbiBhbGwgb3RoZXIgYm9vbGVhbiB2YWx1ZXMgYW5kXG5cdFx0Ly8gc2hvdWxkIG5vdCBiZSByZW1vdmVkIHdoZW4gdGhlIHZhbHVlIGlzIGBmYWxzZWAuIFNlZTpcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1zcGVsbGNoZWNrXG5cdFx0aWYgKHZhbHVlPT1udWxsIHx8IHZhbHVlPT09ZmFsc2UpIHtcblx0XHRcdGlmIChucykgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRlbHNlIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2YgdmFsdWUhPT0nZnVuY3Rpb24nKSB7XG5cdFx0XHRpZiAobnMpIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBuYW1lLnRvTG93ZXJDYXNlKCksIHZhbHVlKTtcblx0XHRcdGVsc2Ugbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH1cblx0fVxufVxuXG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3NlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG5cdHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShvcHRpb25zLmV2ZW50ICYmIG9wdGlvbnMuZXZlbnQoZSkgfHwgZSk7XG59XG4iLCJpbXBvcnQgeyBBVFRSX0tFWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpc1NhbWVOb2RlVHlwZSwgaXNOYW1lZE5vZGUgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSwgc2V0QWNjZXNzb3IgfSBmcm9tICcuLi9kb20vaW5kZXgnO1xuaW1wb3J0IHsgdW5tb3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgYXBwbHlSZWYgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IHJlbW92ZU5vZGUgfSBmcm9tICcuLi9kb20vaW5kZXgnO1xuXG4vKipcbiAqIFF1ZXVlIG9mIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gbW91bnRlZCBhbmQgYXJlIGF3YWl0aW5nIGNvbXBvbmVudERpZE1vdW50XG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuLi9jb21wb25lbnQnKS5Db21wb25lbnQ+fVxuICovXG5leHBvcnQgY29uc3QgbW91bnRzID0gW107XG5cbi8qKiBEaWZmIHJlY3Vyc2lvbiBjb3VudCwgdXNlZCB0byB0cmFjayB0aGUgZW5kIG9mIHRoZSBkaWZmIGN5Y2xlLiAqL1xuZXhwb3J0IGxldCBkaWZmTGV2ZWwgPSAwO1xuXG4vKiogR2xvYmFsIGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgZGlmZiBpcyBjdXJyZW50bHkgd2l0aGluIGFuIFNWRyAqL1xubGV0IGlzU3ZnTW9kZSA9IGZhbHNlO1xuXG4vKiogR2xvYmFsIGZsYWcgaW5kaWNhdGluZyBpZiB0aGUgZGlmZiBpcyBwZXJmb3JtaW5nIGh5ZHJhdGlvbiAqL1xubGV0IGh5ZHJhdGluZyA9IGZhbHNlO1xuXG4vKiogSW52b2tlIHF1ZXVlZCBjb21wb25lbnREaWRNb3VudCBsaWZlY3ljbGUgbWV0aG9kcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoTW91bnRzKCkge1xuXHRsZXQgYztcblx0d2hpbGUgKChjID0gbW91bnRzLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJNb3VudCkgb3B0aW9ucy5hZnRlck1vdW50KGMpO1xuXHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50KSBjLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdH1cbn1cblxuXG4vKipcbiAqIEFwcGx5IGRpZmZlcmVuY2VzIGluIGEgZ2l2ZW4gdm5vZGUgKGFuZCBpdCdzIGRlZXAgY2hpbGRyZW4pIHRvIGEgcmVhbCBET00gTm9kZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBkb20gQSBET00gbm9kZSB0byBtdXRhdGUgaW50byB0aGUgc2hhcGUgb2YgYSBgdm5vZGVgXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgQSBWTm9kZSAod2l0aCBkZXNjZW5kYW50cyBmb3JtaW5nIGEgdHJlZSkgcmVwcmVzZW50aW5nXG4gKiAgdGhlIGRlc2lyZWQgRE9NIHN0cnVjdHVyZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBtb3VudEFsbCBXaGV0aGVyIG9yIG5vdCB0byBpbW1lZGlhdGVseSBtb3VudCBhbGwgY29tcG9uZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgP1xuICogQHBhcmFtIHtib29sZWFufSBjb21wb25lbnRSb290ID9cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IFRoZSBjcmVhdGVkL211dGF0ZWQgZWxlbWVudFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIHBhcmVudCwgY29tcG9uZW50Um9vdCkge1xuXHQvLyBkaWZmTGV2ZWwgaGF2aW5nIGJlZW4gMCBoZXJlIGluZGljYXRlcyBpbml0aWFsIGVudHJ5IGludG8gdGhlIGRpZmYgKG5vdCBhIHN1YmRpZmYpXG5cdGlmICghZGlmZkxldmVsKyspIHtcblx0XHQvLyB3aGVuIGZpcnN0IHN0YXJ0aW5nIHRoZSBkaWZmLCBjaGVjayBpZiB3ZSdyZSBkaWZmaW5nIGFuIFNWRyBvciB3aXRoaW4gYW4gU1ZHXG5cdFx0aXNTdmdNb2RlID0gcGFyZW50IT1udWxsICYmIHBhcmVudC5vd25lclNWR0VsZW1lbnQhPT11bmRlZmluZWQ7XG5cblx0XHQvLyBoeWRyYXRpb24gaXMgaW5kaWNhdGVkIGJ5IHRoZSBleGlzdGluZyBlbGVtZW50IHRvIGJlIGRpZmZlZCBub3QgaGF2aW5nIGEgcHJvcCBjYWNoZVxuXHRcdGh5ZHJhdGluZyA9IGRvbSE9bnVsbCAmJiAhKEFUVFJfS0VZIGluIGRvbSk7XG5cdH1cblxuXHRsZXQgcmV0ID0gaWRpZmYoZG9tLCB2bm9kZSwgY29udGV4dCwgbW91bnRBbGwsIGNvbXBvbmVudFJvb3QpO1xuXG5cdC8vIGFwcGVuZCB0aGUgZWxlbWVudCBpZiBpdHMgYSBuZXcgcGFyZW50XG5cdGlmIChwYXJlbnQgJiYgcmV0LnBhcmVudE5vZGUhPT1wYXJlbnQpIHBhcmVudC5hcHBlbmRDaGlsZChyZXQpO1xuXG5cdC8vIGRpZmZMZXZlbCBiZWluZyByZWR1Y2VkIHRvIDAgbWVhbnMgd2UncmUgZXhpdGluZyB0aGUgZGlmZlxuXHRpZiAoIS0tZGlmZkxldmVsKSB7XG5cdFx0aHlkcmF0aW5nID0gZmFsc2U7XG5cdFx0Ly8gaW52b2tlIHF1ZXVlZCBjb21wb25lbnREaWRNb3VudCBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdGlmICghY29tcG9uZW50Um9vdCkgZmx1c2hNb3VudHMoKTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cblxuLyoqXG4gKiBJbnRlcm5hbHMgb2YgYGRpZmYoKWAsIHNlcGFyYXRlZCB0byBhbGxvdyBieXBhc3NpbmcgZGlmZkxldmVsIC8gbW91bnQgZmx1c2hpbmcuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vZG9tJykuUHJlYWN0RWxlbWVudH0gZG9tIEEgRE9NIG5vZGUgdG8gbXV0YXRlIGludG8gdGhlIHNoYXBlIG9mIGEgYHZub2RlYFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3Zub2RlJykuVk5vZGV9IHZub2RlIEEgVk5vZGUgKHdpdGggZGVzY2VuZGFudHMgZm9ybWluZyBhIHRyZWUpIHJlcHJlc2VudGluZyB0aGUgZGVzaXJlZCBET00gc3RydWN0dXJlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1vdW50QWxsIFdoZXRoZXIgb3Igbm90IHRvIGltbWVkaWF0ZWx5IG1vdW50IGFsbCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjb21wb25lbnRSb290XSA/XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCkge1xuXHRsZXQgb3V0ID0gZG9tLFxuXHRcdHByZXZTdmdNb2RlID0gaXNTdmdNb2RlO1xuXG5cdC8vIGVtcHR5IHZhbHVlcyAobnVsbCwgdW5kZWZpbmVkLCBib29sZWFucykgcmVuZGVyIGFzIGVtcHR5IFRleHQgbm9kZXNcblx0aWYgKHZub2RlPT1udWxsIHx8IHR5cGVvZiB2bm9kZT09PSdib29sZWFuJykgdm5vZGUgPSAnJztcblxuXG5cdC8vIEZhc3QgY2FzZTogU3RyaW5ncyAmIE51bWJlcnMgY3JlYXRlL3VwZGF0ZSBUZXh0IG5vZGVzLlxuXHRpZiAodHlwZW9mIHZub2RlPT09J3N0cmluZycgfHwgdHlwZW9mIHZub2RlPT09J251bWJlcicpIHtcblxuXHRcdC8vIHVwZGF0ZSBpZiBpdCdzIGFscmVhZHkgYSBUZXh0IG5vZGU6XG5cdFx0aWYgKGRvbSAmJiBkb20uc3BsaXRUZXh0IT09dW5kZWZpbmVkICYmIGRvbS5wYXJlbnROb2RlICYmICghZG9tLl9jb21wb25lbnQgfHwgY29tcG9uZW50Um9vdCkpIHtcblx0XHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvKiBCcm93c2VyIHF1aXJrIHRoYXQgY2FuJ3QgYmUgY292ZXJlZDogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvY29tbWl0L2ZkNGYyMWY1YzQ1ZGZkNzUxNTFiZDI3YjRjMjE3ZDgwMDNhYTVlYjkgKi9cblx0XHRcdGlmIChkb20ubm9kZVZhbHVlIT12bm9kZSkge1xuXHRcdFx0XHRkb20ubm9kZVZhbHVlID0gdm5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gaXQgd2Fzbid0IGEgVGV4dCBub2RlOiByZXBsYWNlIGl0IHdpdGggb25lIGFuZCByZWN5Y2xlIHRoZSBvbGQgRWxlbWVudFxuXHRcdFx0b3V0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuXHRcdFx0aWYgKGRvbSkge1xuXHRcdFx0XHRpZiAoZG9tLnBhcmVudE5vZGUpIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG5cdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b3V0W0FUVFJfS0VZXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblxuXHQvLyBJZiB0aGUgVk5vZGUgcmVwcmVzZW50cyBhIENvbXBvbmVudCwgcGVyZm9ybSBhIGNvbXBvbmVudCBkaWZmOlxuXHRsZXQgdm5vZGVOYW1lID0gdm5vZGUubm9kZU5hbWU7XG5cdGlmICh0eXBlb2Ygdm5vZGVOYW1lPT09J2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdH1cblxuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBTVkcgbmFtZXNwYWNlIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpc1N2Z01vZGUgPSB2bm9kZU5hbWU9PT0nc3ZnJyA/IHRydWUgOiB2bm9kZU5hbWU9PT0nZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcblxuXG5cdC8vIElmIHRoZXJlJ3Mgbm8gZXhpc3RpbmcgZWxlbWVudCBvciBpdCdzIHRoZSB3cm9uZyB0eXBlLCBjcmVhdGUgYSBuZXcgb25lOlxuXHR2bm9kZU5hbWUgPSBTdHJpbmcodm5vZGVOYW1lKTtcblx0aWYgKCFkb20gfHwgIWlzTmFtZWROb2RlKGRvbSwgdm5vZGVOYW1lKSkge1xuXHRcdG91dCA9IGNyZWF0ZU5vZGUodm5vZGVOYW1lLCBpc1N2Z01vZGUpO1xuXG5cdFx0aWYgKGRvbSkge1xuXHRcdFx0Ly8gbW92ZSBjaGlsZHJlbiBpbnRvIHRoZSByZXBsYWNlbWVudCBub2RlXG5cdFx0XHR3aGlsZSAoZG9tLmZpcnN0Q2hpbGQpIG91dC5hcHBlbmRDaGlsZChkb20uZmlyc3RDaGlsZCk7XG5cblx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBFbGVtZW50IHdhcyBtb3VudGVkIGludG8gdGhlIERPTSwgcmVwbGFjZSBpdCBpbmxpbmVcblx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblxuXHRcdFx0Ly8gcmVjeWNsZSB0aGUgb2xkIGVsZW1lbnQgKHNraXBzIG5vbi1FbGVtZW50IG5vZGUgdHlwZXMpXG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShkb20sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cblx0bGV0IGZjID0gb3V0LmZpcnN0Q2hpbGQsXG5cdFx0cHJvcHMgPSBvdXRbQVRUUl9LRVldLFxuXHRcdHZjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuXG5cdGlmIChwcm9wcz09bnVsbCkge1xuXHRcdHByb3BzID0gb3V0W0FUVFJfS0VZXSA9IHt9O1xuXHRcdGZvciAobGV0IGE9b3V0LmF0dHJpYnV0ZXMsIGk9YS5sZW5ndGg7IGktLTsgKSBwcm9wc1thW2ldLm5hbWVdID0gYVtpXS52YWx1ZTtcblx0fVxuXG5cdC8vIE9wdGltaXphdGlvbjogZmFzdC1wYXRoIGZvciBlbGVtZW50cyBjb250YWluaW5nIGEgc2luZ2xlIFRleHROb2RlOlxuXHRpZiAoIWh5ZHJhdGluZyAmJiB2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aD09PTEgJiYgdHlwZW9mIHZjaGlsZHJlblswXT09PSdzdHJpbmcnICYmIGZjIT1udWxsICYmIGZjLnNwbGl0VGV4dCE9PXVuZGVmaW5lZCAmJiBmYy5uZXh0U2libGluZz09bnVsbCkge1xuXHRcdGlmIChmYy5ub2RlVmFsdWUhPXZjaGlsZHJlblswXSkge1xuXHRcdFx0ZmMubm9kZVZhbHVlID0gdmNoaWxkcmVuWzBdO1xuXHRcdH1cblx0fVxuXHQvLyBvdGhlcndpc2UsIGlmIHRoZXJlIGFyZSBleGlzdGluZyBvciBuZXcgY2hpbGRyZW4sIGRpZmYgdGhlbTpcblx0ZWxzZSBpZiAodmNoaWxkcmVuICYmIHZjaGlsZHJlbi5sZW5ndGggfHwgZmMhPW51bGwpIHtcblx0XHRpbm5lckRpZmZOb2RlKG91dCwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaHlkcmF0aW5nIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIT1udWxsKTtcblx0fVxuXG5cblx0Ly8gQXBwbHkgYXR0cmlidXRlcy9wcm9wcyBmcm9tIFZOb2RlIHRvIHRoZSBET00gRWxlbWVudDpcblx0ZGlmZkF0dHJpYnV0ZXMob3V0LCB2bm9kZS5hdHRyaWJ1dGVzLCBwcm9wcyk7XG5cblxuXHQvLyByZXN0b3JlIHByZXZpb3VzIFNWRyBtb2RlOiAoaW4gY2FzZSB3ZSdyZSBleGl0aW5nIGFuIFNWRyBuYW1lc3BhY2UpXG5cdGlzU3ZnTW9kZSA9IHByZXZTdmdNb2RlO1xuXG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBBcHBseSBjaGlsZCBhbmQgYXR0cmlidXRlIGNoYW5nZXMgYmV0d2VlbiBhIFZOb2RlIGFuZCBhIERPTSBOb2RlIHRvIHRoZSBET00uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vZG9tJykuUHJlYWN0RWxlbWVudH0gZG9tIEVsZW1lbnQgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGNvbXBhcmVkICYgbXV0YXRlZFxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL3Zub2RlJykuVk5vZGU+fSB2Y2hpbGRyZW4gQXJyYXkgb2YgVk5vZGVzIHRvIGNvbXBhcmUgdG8gYGRvbS5jaGlsZE5vZGVzYFxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgSW1wbGljaXRseSBkZXNjZW5kYW50IGNvbnRleHQgb2JqZWN0IChmcm9tIG1vc3RcbiAqICByZWNlbnQgYGdldENoaWxkQ29udGV4dCgpYClcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91bnRBbGwgV2hldGhlciBvciBub3QgdG8gaW1tZWRpYXRlbHkgbW91bnQgYWxsIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgaWYgYHRydWVgLCBjb25zdW1lcyBleHRlcm5hbGx5IGNyZWF0ZWQgZWxlbWVudHNcbiAqICBzaW1pbGFyIHRvIGh5ZHJhdGlvblxuICovXG5mdW5jdGlvbiBpbm5lckRpZmZOb2RlKGRvbSwgdmNoaWxkcmVuLCBjb250ZXh0LCBtb3VudEFsbCwgaXNIeWRyYXRpbmcpIHtcblx0bGV0IG9yaWdpbmFsQ2hpbGRyZW4gPSBkb20uY2hpbGROb2Rlcyxcblx0XHRjaGlsZHJlbiA9IFtdLFxuXHRcdGtleWVkID0ge30sXG5cdFx0a2V5ZWRMZW4gPSAwLFxuXHRcdG1pbiA9IDAsXG5cdFx0bGVuID0gb3JpZ2luYWxDaGlsZHJlbi5sZW5ndGgsXG5cdFx0Y2hpbGRyZW5MZW4gPSAwLFxuXHRcdHZsZW4gPSB2Y2hpbGRyZW4gPyB2Y2hpbGRyZW4ubGVuZ3RoIDogMCxcblx0XHRqLCBjLCBmLCB2Y2hpbGQsIGNoaWxkO1xuXG5cdC8vIEJ1aWxkIHVwIGEgbWFwIG9mIGtleWVkIGNoaWxkcmVuIGFuZCBhbiBBcnJheSBvZiB1bmtleWVkIGNoaWxkcmVuOlxuXHRpZiAobGVuIT09MCkge1xuXHRcdGZvciAobGV0IGk9MDsgaTxsZW47IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gb3JpZ2luYWxDaGlsZHJlbltpXSxcblx0XHRcdFx0cHJvcHMgPSBjaGlsZFtBVFRSX0tFWV0sXG5cdFx0XHRcdGtleSA9IHZsZW4gJiYgcHJvcHMgPyBjaGlsZC5fY29tcG9uZW50ID8gY2hpbGQuX2NvbXBvbmVudC5fX2tleSA6IHByb3BzLmtleSA6IG51bGw7XG5cdFx0XHRpZiAoa2V5IT1udWxsKSB7XG5cdFx0XHRcdGtleWVkTGVuKys7XG5cdFx0XHRcdGtleWVkW2tleV0gPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHByb3BzIHx8IChjaGlsZC5zcGxpdFRleHQhPT11bmRlZmluZWQgPyAoaXNIeWRyYXRpbmcgPyBjaGlsZC5ub2RlVmFsdWUudHJpbSgpIDogdHJ1ZSkgOiBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW5MZW4rK10gPSBjaGlsZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodmxlbiE9PTApIHtcblx0XHRmb3IgKGxldCBpPTA7IGk8dmxlbjsgaSsrKSB7XG5cdFx0XHR2Y2hpbGQgPSB2Y2hpbGRyZW5baV07XG5cdFx0XHRjaGlsZCA9IG51bGw7XG5cblx0XHRcdC8vIGF0dGVtcHQgdG8gZmluZCBhIG5vZGUgYmFzZWQgb24ga2V5IG1hdGNoaW5nXG5cdFx0XHRsZXQga2V5ID0gdmNoaWxkLmtleTtcblx0XHRcdGlmIChrZXkhPW51bGwpIHtcblx0XHRcdFx0aWYgKGtleWVkTGVuICYmIGtleWVkW2tleV0hPT11bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjaGlsZCA9IGtleWVkW2tleV07XG5cdFx0XHRcdFx0a2V5ZWRba2V5XSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRrZXllZExlbi0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHBsdWNrIGEgbm9kZSBvZiB0aGUgc2FtZSB0eXBlIGZyb20gdGhlIGV4aXN0aW5nIGNoaWxkcmVuXG5cdFx0XHRlbHNlIGlmIChtaW48Y2hpbGRyZW5MZW4pIHtcblx0XHRcdFx0Zm9yIChqPW1pbjsgajxjaGlsZHJlbkxlbjsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGNoaWxkcmVuW2pdIT09dW5kZWZpbmVkICYmIGlzU2FtZU5vZGVUeXBlKGMgPSBjaGlsZHJlbltqXSwgdmNoaWxkLCBpc0h5ZHJhdGluZykpIHtcblx0XHRcdFx0XHRcdGNoaWxkID0gYztcblx0XHRcdFx0XHRcdGNoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGo9PT1jaGlsZHJlbkxlbi0xKSBjaGlsZHJlbkxlbi0tO1xuXHRcdFx0XHRcdFx0aWYgKGo9PT1taW4pIG1pbisrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIG1vcnBoIHRoZSBtYXRjaGVkL2ZvdW5kL2NyZWF0ZWQgRE9NIGNoaWxkIHRvIG1hdGNoIHZjaGlsZCAoZGVlcClcblx0XHRcdGNoaWxkID0gaWRpZmYoY2hpbGQsIHZjaGlsZCwgY29udGV4dCwgbW91bnRBbGwpO1xuXG5cdFx0XHRmID0gb3JpZ2luYWxDaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAmJiBjaGlsZCE9PWRvbSAmJiBjaGlsZCE9PWYpIHtcblx0XHRcdFx0aWYgKGY9PW51bGwpIHtcblx0XHRcdFx0XHRkb20uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGNoaWxkPT09Zi5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZG9tLmluc2VydEJlZm9yZShjaGlsZCwgZik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdC8vIHJlbW92ZSB1bnVzZWQga2V5ZWQgY2hpbGRyZW46XG5cdGlmIChrZXllZExlbikge1xuXHRcdGZvciAobGV0IGkgaW4ga2V5ZWQpIGlmIChrZXllZFtpXSE9PXVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoa2V5ZWRbaV0sIGZhbHNlKTtcblx0fVxuXG5cdC8vIHJlbW92ZSBvcnBoYW5lZCB1bmtleWVkIGNoaWxkcmVuOlxuXHR3aGlsZSAobWluPD1jaGlsZHJlbkxlbikge1xuXHRcdGlmICgoY2hpbGQgPSBjaGlsZHJlbltjaGlsZHJlbkxlbi0tXSkhPT11bmRlZmluZWQpIHJlY29sbGVjdE5vZGVUcmVlKGNoaWxkLCBmYWxzZSk7XG5cdH1cbn1cblxuXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgcmVjeWNsZSAob3IganVzdCB1bm1vdW50KSBhIG5vZGUgYW5kIGl0cyBkZXNjZW5kYW50cy5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBub2RlIERPTSBub2RlIHRvIHN0YXJ0XG4gKiAgdW5tb3VudC9yZW1vdmFsIGZyb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VubW91bnRPbmx5PWZhbHNlXSBJZiBgdHJ1ZWAsIG9ubHkgdHJpZ2dlcnMgdW5tb3VudFxuICogIGxpZmVjeWNsZSwgc2tpcHMgcmVtb3ZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdW5tb3VudE9ubHkpIHtcblx0bGV0IGNvbXBvbmVudCA9IG5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGNvbXBvbmVudCkge1xuXHRcdC8vIGlmIG5vZGUgaXMgb3duZWQgYnkgYSBDb21wb25lbnQsIHVubW91bnQgdGhhdCBjb21wb25lbnQgKGVuZHMgdXAgcmVjdXJzaW5nIGJhY2sgaGVyZSlcblx0XHR1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gSWYgdGhlIG5vZGUncyBWTm9kZSBoYWQgYSByZWYgZnVuY3Rpb24sIGludm9rZSBpdCB3aXRoIG51bGwgaGVyZS5cblx0XHQvLyAodGhpcyBpcyBwYXJ0IG9mIHRoZSBSZWFjdCBzcGVjLCBhbmQgc21hcnQgZm9yIHVuc2V0dGluZyByZWZlcmVuY2VzKVxuXHRcdGlmIChub2RlW0FUVFJfS0VZXSE9bnVsbCkgYXBwbHlSZWYobm9kZVtBVFRSX0tFWV0ucmVmLCBudWxsKTtcblxuXHRcdGlmICh1bm1vdW50T25seT09PWZhbHNlIHx8IG5vZGVbQVRUUl9LRVldPT1udWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG5vZGUpO1xuXHRcdH1cblxuXHRcdHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZWNvbGxlY3QvdW5tb3VudCBhbGwgY2hpbGRyZW4uXG4gKlx0LSB3ZSB1c2UgLmxhc3RDaGlsZCBoZXJlIGJlY2F1c2UgaXQgY2F1c2VzIGxlc3MgcmVmbG93IHRoYW4gLmZpcnN0Q2hpbGRcbiAqXHQtIGl0J3MgYWxzbyBjaGVhcGVyIHRoYW4gYWNjZXNzaW5nIHRoZSAuY2hpbGROb2RlcyBMaXZlIE5vZGVMaXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG5cdG5vZGUgPSBub2RlLmxhc3RDaGlsZDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHRsZXQgbmV4dCA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdHJlY29sbGVjdE5vZGVUcmVlKG5vZGUsIHRydWUpO1xuXHRcdG5vZGUgPSBuZXh0O1xuXHR9XG59XG5cblxuLyoqXG4gKiBBcHBseSBkaWZmZXJlbmNlcyBpbiBhdHRyaWJ1dGVzIGZyb20gYSBWTm9kZSB0byB0aGUgZ2l2ZW4gRE9NIEVsZW1lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vZG9tJykuUHJlYWN0RWxlbWVudH0gZG9tIEVsZW1lbnQgd2l0aCBhdHRyaWJ1dGVzIHRvIGRpZmYgYGF0dHJzYCBhZ2FpbnN0XG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cnMgVGhlIGRlc2lyZWQgZW5kLXN0YXRlIGtleS12YWx1ZSBhdHRyaWJ1dGUgcGFpcnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvbGQgQ3VycmVudC9wcmV2aW91cyBhdHRyaWJ1dGVzIChmcm9tIHByZXZpb3VzIFZOb2RlIG9yXG4gKiAgZWxlbWVudCdzIHByb3AgY2FjaGUpXG4gKi9cbmZ1bmN0aW9uIGRpZmZBdHRyaWJ1dGVzKGRvbSwgYXR0cnMsIG9sZCkge1xuXHRsZXQgbmFtZTtcblxuXHQvLyByZW1vdmUgYXR0cmlidXRlcyBubyBsb25nZXIgcHJlc2VudCBvbiB0aGUgdm5vZGUgYnkgc2V0dGluZyB0aGVtIHRvIHVuZGVmaW5lZFxuXHRmb3IgKG5hbWUgaW4gb2xkKSB7XG5cdFx0aWYgKCEoYXR0cnMgJiYgYXR0cnNbbmFtZV0hPW51bGwpICYmIG9sZFtuYW1lXSE9bnVsbCkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IHVuZGVmaW5lZCwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuXHRmb3IgKG5hbWUgaW4gYXR0cnMpIHtcblx0XHRpZiAobmFtZSE9PSdjaGlsZHJlbicgJiYgbmFtZSE9PSdpbm5lckhUTUwnICYmICghKG5hbWUgaW4gb2xkKSB8fCBhdHRyc1tuYW1lXSE9PShuYW1lPT09J3ZhbHVlJyB8fCBuYW1lPT09J2NoZWNrZWQnID8gZG9tW25hbWVdIDogb2xkW25hbWVdKSkpIHtcblx0XHRcdHNldEFjY2Vzc29yKGRvbSwgbmFtZSwgb2xkW25hbWVdLCBvbGRbbmFtZV0gPSBhdHRyc1tuYW1lXSwgaXNTdmdNb2RlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbi8qKlxuICogUmV0YWlucyBhIHBvb2wgb2YgQ29tcG9uZW50cyBmb3IgcmUtdXNlLlxuICogQHR5cGUge0NvbXBvbmVudFtdfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY3ljbGVyQ29tcG9uZW50cyA9IFtdO1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgY29tcG9uZW50LiBOb3JtYWxpemVzIGRpZmZlcmVuY2VzIGJldHdlZW4gUEZDJ3MgYW5kIGNsYXNzZnVsXG4gKiBDb21wb25lbnRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gQ3RvciBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGNvbXBvbmVudCB0byBjcmVhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgaW5pdGlhbCBwcm9wcyBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2NvbXBvbmVudCcpLkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChDdG9yLCBwcm9wcywgY29udGV4dCkge1xuXHRsZXQgaW5zdCwgaSA9IHJlY3ljbGVyQ29tcG9uZW50cy5sZW5ndGg7XG5cblx0aWYgKEN0b3IucHJvdG90eXBlICYmIEN0b3IucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdGluc3QgPSBuZXcgQ3Rvcihwcm9wcywgY29udGV4dCk7XG5cdFx0Q29tcG9uZW50LmNhbGwoaW5zdCwgcHJvcHMsIGNvbnRleHQpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGluc3QgPSBuZXcgQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcblx0XHRpbnN0LmNvbnN0cnVjdG9yID0gQ3Rvcjtcblx0XHRpbnN0LnJlbmRlciA9IGRvUmVuZGVyO1xuXHR9XG5cblxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0aWYgKHJlY3ljbGVyQ29tcG9uZW50c1tpXS5jb25zdHJ1Y3Rvcj09PUN0b3IpIHtcblx0XHRcdGluc3QubmV4dEJhc2UgPSByZWN5Y2xlckNvbXBvbmVudHNbaV0ubmV4dEJhc2U7XG5cdFx0XHRyZWN5Y2xlckNvbXBvbmVudHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0cmV0dXJuIGluc3Q7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluc3Q7XG59XG5cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgU1lOQ19SRU5ERVIsIE5PX1JFTkRFUiwgRk9SQ0VfUkVOREVSLCBBU1lOQ19SRU5ERVIsIEFUVFJfS0VZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgZXh0ZW5kLCBhcHBseVJlZiB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4uL3JlbmRlci1xdWV1ZSc7XG5pbXBvcnQgeyBnZXROb2RlUHJvcHMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGRpZmYsIG1vdW50cywgZGlmZkxldmVsLCBmbHVzaE1vdW50cywgcmVjb2xsZWN0Tm9kZVRyZWUsIHJlbW92ZUNoaWxkcmVuIH0gZnJvbSAnLi9kaWZmJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgcmVjeWNsZXJDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnQtcmVjeWNsZXInO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSB9IGZyb20gJy4uL2RvbS9pbmRleCc7XG5cbi8qKlxuICogU2V0IGEgY29tcG9uZW50J3MgYHByb3BzYCBhbmQgcG9zc2libHkgcmUtcmVuZGVyIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9jb21wb25lbnQnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgQ29tcG9uZW50IHRvIHNldCBwcm9wcyBvblxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBuZXcgcHJvcHNcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW5kZXJNb2RlIFJlbmRlciBvcHRpb25zIC0gc3BlY2lmaWVzIGhvdyB0byByZS1yZW5kZXIgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIG5ldyBjb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1vdW50QWxsIFdoZXRoZXIgb3Igbm90IHRvIGltbWVkaWF0ZWx5IG1vdW50IGFsbCBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb21wb25lbnRQcm9wcyhjb21wb25lbnQsIHByb3BzLCByZW5kZXJNb2RlLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cdGNvbXBvbmVudC5fZGlzYWJsZSA9IHRydWU7XG5cblx0Y29tcG9uZW50Ll9fcmVmID0gcHJvcHMucmVmO1xuXHRjb21wb25lbnQuX19rZXkgPSBwcm9wcy5rZXk7XG5cdGRlbGV0ZSBwcm9wcy5yZWY7XG5cdGRlbGV0ZSBwcm9wcy5rZXk7XG5cblx0aWYgKHR5cGVvZiBjb21wb25lbnQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmICghY29tcG9uZW50LmJhc2UgfHwgbW91bnRBbGwpIHtcblx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbnRleHQgJiYgY29udGV4dCE9PWNvbXBvbmVudC5jb250ZXh0KSB7XG5cdFx0aWYgKCFjb21wb25lbnQucHJldkNvbnRleHQpIGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0O1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGlmICghY29tcG9uZW50LnByZXZQcm9wcykgY29tcG9uZW50LnByZXZQcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcblx0Y29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gZmFsc2U7XG5cblx0aWYgKHJlbmRlck1vZGUhPT1OT19SRU5ERVIpIHtcblx0XHRpZiAocmVuZGVyTW9kZT09PVNZTkNfUkVOREVSIHx8IG9wdGlvbnMuc3luY0NvbXBvbmVudFVwZGF0ZXMhPT1mYWxzZSB8fCAhY29tcG9uZW50LmJhc2UpIHtcblx0XHRcdHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIFNZTkNfUkVOREVSLCBtb3VudEFsbCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZW5xdWV1ZVJlbmRlcihjb21wb25lbnQpO1xuXHRcdH1cblx0fVxuXG5cdGFwcGx5UmVmKGNvbXBvbmVudC5fX3JlZiwgY29tcG9uZW50KTtcbn1cblxuXG5cbi8qKlxuICogUmVuZGVyIGEgQ29tcG9uZW50LCB0cmlnZ2VyaW5nIG5lY2Vzc2FyeSBsaWZlY3ljbGUgZXZlbnRzIGFuZCB0YWtpbmdcbiAqIEhpZ2gtT3JkZXIgQ29tcG9uZW50cyBpbnRvIGFjY291bnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vY29tcG9uZW50JykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW5kZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmVuZGVyTW9kZV0gcmVuZGVyIG1vZGUsIHNlZSBjb25zdGFudHMuanMgZm9yIGF2YWlsYWJsZSBvcHRpb25zLlxuICogQHBhcmFtIHtib29sZWFufSBbbW91bnRBbGxdIFdoZXRoZXIgb3Igbm90IHRvIGltbWVkaWF0ZWx5IG1vdW50IGFsbCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0NoaWxkXSA/XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgcmVuZGVyTW9kZSwgbW91bnRBbGwsIGlzQ2hpbGQpIHtcblx0aWYgKGNvbXBvbmVudC5fZGlzYWJsZSkgcmV0dXJuO1xuXG5cdGxldCBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcyxcblx0XHRzdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZSxcblx0XHRjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQsXG5cdFx0cHJldmlvdXNQcm9wcyA9IGNvbXBvbmVudC5wcmV2UHJvcHMgfHwgcHJvcHMsXG5cdFx0cHJldmlvdXNTdGF0ZSA9IGNvbXBvbmVudC5wcmV2U3RhdGUgfHwgc3RhdGUsXG5cdFx0cHJldmlvdXNDb250ZXh0ID0gY29tcG9uZW50LnByZXZDb250ZXh0IHx8IGNvbnRleHQsXG5cdFx0aXNVcGRhdGUgPSBjb21wb25lbnQuYmFzZSxcblx0XHRuZXh0QmFzZSA9IGNvbXBvbmVudC5uZXh0QmFzZSxcblx0XHRpbml0aWFsQmFzZSA9IGlzVXBkYXRlIHx8IG5leHRCYXNlLFxuXHRcdGluaXRpYWxDaGlsZENvbXBvbmVudCA9IGNvbXBvbmVudC5fY29tcG9uZW50LFxuXHRcdHNraXAgPSBmYWxzZSxcblx0XHRzbmFwc2hvdCA9IHByZXZpb3VzQ29udGV4dCxcblx0XHRyZW5kZXJlZCwgaW5zdCwgY2Jhc2U7XG5cblx0aWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMpIHtcblx0XHRzdGF0ZSA9IGV4dGVuZChleHRlbmQoe30sIHN0YXRlKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpKTtcblx0XHRjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcblx0fVxuXG5cdC8vIGlmIHVwZGF0aW5nXG5cdGlmIChpc1VwZGF0ZSkge1xuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByZXZpb3VzUHJvcHM7XG5cdFx0Y29tcG9uZW50LnN0YXRlID0gcHJldmlvdXNTdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IHByZXZpb3VzQ29udGV4dDtcblx0XHRpZiAocmVuZGVyTW9kZSE9PUZPUkNFX1JFTkRFUlxuXHRcdFx0JiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdFx0JiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpID09PSBmYWxzZSkge1xuXHRcdFx0c2tpcCA9IHRydWU7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZShwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXHRcdH1cblx0XHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBzdGF0ZTtcblx0XHRjb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG5cdH1cblxuXHRjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByZXZTdGF0ZSA9IGNvbXBvbmVudC5wcmV2Q29udGV4dCA9IGNvbXBvbmVudC5uZXh0QmFzZSA9IG51bGw7XG5cdGNvbXBvbmVudC5fZGlydHkgPSBmYWxzZTtcblxuXHRpZiAoIXNraXApIHtcblx0XHRyZW5kZXJlZCA9IGNvbXBvbmVudC5yZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcblxuXHRcdC8vIGNvbnRleHQgdG8gcGFzcyB0byB0aGUgY2hpbGQsIGNhbiBiZSB1cGRhdGVkIHZpYSAoZ3JhbmQtKXBhcmVudCBjb21wb25lbnRcblx0XHRpZiAoY29tcG9uZW50LmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0Y29udGV4dCA9IGV4dGVuZChleHRlbmQoe30sIGNvbnRleHQpLCBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdH1cblxuXHRcdGlmIChpc1VwZGF0ZSAmJiBjb21wb25lbnQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpIHtcblx0XHRcdHNuYXBzaG90ID0gY29tcG9uZW50LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUpO1xuXHRcdH1cblxuXHRcdGxldCBjaGlsZENvbXBvbmVudCA9IHJlbmRlcmVkICYmIHJlbmRlcmVkLm5vZGVOYW1lLFxuXHRcdFx0dG9Vbm1vdW50LCBiYXNlO1xuXG5cdFx0aWYgKHR5cGVvZiBjaGlsZENvbXBvbmVudD09PSdmdW5jdGlvbicpIHtcblx0XHRcdC8vIHNldCB1cCBoaWdoIG9yZGVyIGNvbXBvbmVudCBsaW5rXG5cblx0XHRcdGxldCBjaGlsZFByb3BzID0gZ2V0Tm9kZVByb3BzKHJlbmRlcmVkKTtcblx0XHRcdGluc3QgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cblx0XHRcdGlmIChpbnN0ICYmIGluc3QuY29uc3RydWN0b3I9PT1jaGlsZENvbXBvbmVudCAmJiBjaGlsZFByb3BzLmtleT09aW5zdC5fX2tleSkge1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCBTWU5DX1JFTkRFUiwgY29udGV4dCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRvVW5tb3VudCA9IGluc3Q7XG5cblx0XHRcdFx0Y29tcG9uZW50Ll9jb21wb25lbnQgPSBpbnN0ID0gY3JlYXRlQ29tcG9uZW50KGNoaWxkQ29tcG9uZW50LCBjaGlsZFByb3BzLCBjb250ZXh0KTtcblx0XHRcdFx0aW5zdC5uZXh0QmFzZSA9IGluc3QubmV4dEJhc2UgfHwgbmV4dEJhc2U7XG5cdFx0XHRcdGluc3QuX3BhcmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHRcdFx0c2V0Q29tcG9uZW50UHJvcHMoaW5zdCwgY2hpbGRQcm9wcywgTk9fUkVOREVSLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHRcdHJlbmRlckNvbXBvbmVudChpbnN0LCBTWU5DX1JFTkRFUiwgbW91bnRBbGwsIHRydWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRiYXNlID0gaW5zdC5iYXNlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGNiYXNlID0gaW5pdGlhbEJhc2U7XG5cblx0XHRcdC8vIGRlc3Ryb3kgaGlnaCBvcmRlciBjb21wb25lbnQgbGlua1xuXHRcdFx0dG9Vbm1vdW50ID0gaW5pdGlhbENoaWxkQ29tcG9uZW50O1xuXHRcdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0XHRjYmFzZSA9IGNvbXBvbmVudC5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluaXRpYWxCYXNlIHx8IHJlbmRlck1vZGU9PT1TWU5DX1JFTkRFUikge1xuXHRcdFx0XHRpZiAoY2Jhc2UpIGNiYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRiYXNlID0gZGlmZihjYmFzZSwgcmVuZGVyZWQsIGNvbnRleHQsIG1vdW50QWxsIHx8ICFpc1VwZGF0ZSwgaW5pdGlhbEJhc2UgJiYgaW5pdGlhbEJhc2UucGFyZW50Tm9kZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGluaXRpYWxCYXNlICYmIGJhc2UhPT1pbml0aWFsQmFzZSAmJiBpbnN0IT09aW5pdGlhbENoaWxkQ29tcG9uZW50KSB7XG5cdFx0XHRsZXQgYmFzZVBhcmVudCA9IGluaXRpYWxCYXNlLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoYmFzZVBhcmVudCAmJiBiYXNlIT09YmFzZVBhcmVudCkge1xuXHRcdFx0XHRiYXNlUGFyZW50LnJlcGxhY2VDaGlsZChiYXNlLCBpbml0aWFsQmFzZSk7XG5cblx0XHRcdFx0aWYgKCF0b1VubW91bnQpIHtcblx0XHRcdFx0XHRpbml0aWFsQmFzZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShpbml0aWFsQmFzZSwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRvVW5tb3VudCkge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudCh0b1VubW91bnQpO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudC5iYXNlID0gYmFzZTtcblx0XHRpZiAoYmFzZSAmJiAhaXNDaGlsZCkge1xuXHRcdFx0bGV0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudCxcblx0XHRcdFx0dCA9IGNvbXBvbmVudDtcblx0XHRcdHdoaWxlICgodD10Ll9wYXJlbnRDb21wb25lbnQpKSB7XG5cdFx0XHRcdChjb21wb25lbnRSZWYgPSB0KS5iYXNlID0gYmFzZTtcblx0XHRcdH1cblx0XHRcdGJhc2UuX2NvbXBvbmVudCA9IGNvbXBvbmVudFJlZjtcblx0XHRcdGJhc2UuX2NvbXBvbmVudENvbnN0cnVjdG9yID0gY29tcG9uZW50UmVmLmNvbnN0cnVjdG9yO1xuXHRcdH1cblx0fVxuXG5cdGlmICghaXNVcGRhdGUgfHwgbW91bnRBbGwpIHtcblx0XHRtb3VudHMucHVzaChjb21wb25lbnQpO1xuXHR9XG5cdGVsc2UgaWYgKCFza2lwKSB7XG5cdFx0Ly8gRW5zdXJlIHRoYXQgcGVuZGluZyBjb21wb25lbnREaWRNb3VudCgpIGhvb2tzIG9mIGNoaWxkIGNvbXBvbmVudHNcblx0XHQvLyBhcmUgY2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50RGlkVXBkYXRlKCkgaG9vayBpbiB0aGUgcGFyZW50LlxuXHRcdC8vIE5vdGU6IGRpc2FibGVkIGFzIGl0IGNhdXNlcyBkdXBsaWNhdGUgaG9va3MsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9pc3N1ZXMvNzUwXG5cdFx0Ly8gZmx1c2hNb3VudHMoKTtcblxuXHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSB7XG5cdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUsIHNuYXBzaG90KTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJVcGRhdGUpIG9wdGlvbnMuYWZ0ZXJVcGRhdGUoY29tcG9uZW50KTtcblx0fVxuXG5cdHdoaWxlIChjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnBvcCgpLmNhbGwoY29tcG9uZW50KTtcblxuXHRpZiAoIWRpZmZMZXZlbCAmJiAhaXNDaGlsZCkgZmx1c2hNb3VudHMoKTtcbn1cblxuXG5cbi8qKlxuICogQXBwbHkgdGhlIENvbXBvbmVudCByZWZlcmVuY2VkIGJ5IGEgVk5vZGUgdG8gdGhlIERPTS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG11dGF0ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3Zub2RlJykuVk5vZGV9IHZub2RlIEEgQ29tcG9uZW50LXJlZmVyZW5jaW5nIFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1vdW50QWxsIFdoZXRoZXIgb3Igbm90IHRvIGltbWVkaWF0ZWx5IG1vdW50IGFsbCBjb21wb25lbnRzXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBUaGUgY3JlYXRlZC9tdXRhdGVkIGVsZW1lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbXBvbmVudEZyb21WTm9kZShkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCkge1xuXHRsZXQgYyA9IGRvbSAmJiBkb20uX2NvbXBvbmVudCxcblx0XHRvcmlnaW5hbENvbXBvbmVudCA9IGMsXG5cdFx0b2xkRG9tID0gZG9tLFxuXHRcdGlzRGlyZWN0T3duZXIgPSBjICYmIGRvbS5fY29tcG9uZW50Q29uc3RydWN0b3I9PT12bm9kZS5ub2RlTmFtZSxcblx0XHRpc093bmVyID0gaXNEaXJlY3RPd25lcixcblx0XHRwcm9wcyA9IGdldE5vZGVQcm9wcyh2bm9kZSk7XG5cdHdoaWxlIChjICYmICFpc093bmVyICYmIChjPWMuX3BhcmVudENvbXBvbmVudCkpIHtcblx0XHRpc093bmVyID0gYy5jb25zdHJ1Y3Rvcj09PXZub2RlLm5vZGVOYW1lO1xuXHR9XG5cblx0aWYgKGMgJiYgaXNPd25lciAmJiAoIW1vdW50QWxsIHx8IGMuX2NvbXBvbmVudCkpIHtcblx0XHRzZXRDb21wb25lbnRQcm9wcyhjLCBwcm9wcywgQVNZTkNfUkVOREVSLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGlmIChvcmlnaW5hbENvbXBvbmVudCAmJiAhaXNEaXJlY3RPd25lcikge1xuXHRcdFx0dW5tb3VudENvbXBvbmVudChvcmlnaW5hbENvbXBvbmVudCk7XG5cdFx0XHRkb20gPSBvbGREb20gPSBudWxsO1xuXHRcdH1cblxuXHRcdGMgPSBjcmVhdGVDb21wb25lbnQodm5vZGUubm9kZU5hbWUsIHByb3BzLCBjb250ZXh0KTtcblx0XHRpZiAoZG9tICYmICFjLm5leHRCYXNlKSB7XG5cdFx0XHRjLm5leHRCYXNlID0gZG9tO1xuXHRcdFx0Ly8gcGFzc2luZyBkb20vb2xkRG9tIGFzIG5leHRCYXNlIHdpbGwgcmVjeWNsZSBpdCBpZiB1bnVzZWQsIHNvIGJ5cGFzcyByZWN5Y2xpbmcgb24gTDIyOTpcblx0XHRcdG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCBTWU5DX1JFTkRFUiwgY29udGV4dCwgbW91bnRBbGwpO1xuXHRcdGRvbSA9IGMuYmFzZTtcblxuXHRcdGlmIChvbGREb20gJiYgZG9tIT09b2xkRG9tKSB7XG5cdFx0XHRvbGREb20uX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRyZWNvbGxlY3ROb2RlVHJlZShvbGREb20sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG5cblxuLyoqXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgRE9NIGFuZCByZWN5Y2xlIGl0LlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2NvbXBvbmVudCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBDb21wb25lbnQgaW5zdGFuY2UgdG8gdW5tb3VudFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChvcHRpb25zLmJlZm9yZVVubW91bnQpIG9wdGlvbnMuYmVmb3JlVW5tb3VudChjb21wb25lbnQpO1xuXG5cdGxldCBiYXNlID0gY29tcG9uZW50LmJhc2U7XG5cblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuXHRjb21wb25lbnQuYmFzZSA9IG51bGw7XG5cblx0Ly8gcmVjdXJzaXZlbHkgdGVhciBkb3duICYgcmVjb2xsZWN0IGhpZ2gtb3JkZXIgY29tcG9uZW50IGNoaWxkcmVuOlxuXHRsZXQgaW5uZXIgPSBjb21wb25lbnQuX2NvbXBvbmVudDtcblx0aWYgKGlubmVyKSB7XG5cdFx0dW5tb3VudENvbXBvbmVudChpbm5lcik7XG5cdH1cblx0ZWxzZSBpZiAoYmFzZSkge1xuXHRcdGlmIChiYXNlW0FUVFJfS0VZXSE9bnVsbCkgYXBwbHlSZWYoYmFzZVtBVFRSX0tFWV0ucmVmLCBudWxsKTtcblxuXHRcdGNvbXBvbmVudC5uZXh0QmFzZSA9IGJhc2U7XG5cblx0XHRyZW1vdmVOb2RlKGJhc2UpO1xuXHRcdHJlY3ljbGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cblx0XHRyZW1vdmVDaGlsZHJlbihiYXNlKTtcblx0fVxuXG5cdGFwcGx5UmVmKGNvbXBvbmVudC5fX3JlZiwgbnVsbCk7XG59XG4iLCJpbXBvcnQgeyBGT1JDRV9SRU5ERVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi92ZG9tL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9yZW5kZXItcXVldWUnO1xuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy5cbiAqIFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaCB0cmlnZ2VyIHJlbmRlcmluZy5cbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJyBnZXRDaGlsZENvbnRleHRcbiAqIEBwdWJsaWNcbiAqXG4gKiBAZXhhbXBsZVxuICogY2xhc3MgTXlGb28gZXh0ZW5kcyBDb21wb25lbnQge1xuICogICByZW5kZXIocHJvcHMsIHN0YXRlKSB7XG4gKiAgICAgcmV0dXJuIDxkaXYgLz47XG4gKiAgIH1cbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLl9kaXJ0eSA9IHRydWU7XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge29iamVjdH1cblx0ICovXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICogQHR5cGUge29iamVjdH1cblx0ICovXG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7b2JqZWN0fVxuXHQgKi9cblx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG5cblx0dGhpcy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG59XG5cblxuZXh0ZW5kKENvbXBvbmVudC5wcm90b3R5cGUsIHtcblxuXHQvKipcblx0ICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBBIGRpY3Qgb2Ygc3RhdGUgcHJvcGVydGllcyB0byBiZSBzaGFsbG93bHkgbWVyZ2VkXG5cdCAqIFx0aW50byB0aGUgY3VycmVudCBzdGF0ZSwgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcHJvZHVjZSBzdWNoIGEgZGljdC4gVGhlXG5cdCAqIFx0ZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHByb3BzLlxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG5cdCAqIFx0dXBkYXRlZFxuXHQgKi9cblx0c2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCF0aGlzLnByZXZTdGF0ZSkgdGhpcy5wcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuc3RhdGUgPSBleHRlbmQoXG5cdFx0XHRleHRlbmQoe30sIHRoaXMuc3RhdGUpLFxuXHRcdFx0dHlwZW9mIHN0YXRlID09PSAnZnVuY3Rpb24nID8gc3RhdGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcykgOiBzdGF0ZVxuXHRcdCk7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2sgQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG5cdCAqIFx0cmUtcmVuZGVyZWQuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdHJlbmRlckNvbXBvbmVudCh0aGlzLCBGT1JDRV9SRU5ERVIpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cblx0ICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUHJvcHMgKGVnOiBKU1ggYXR0cmlidXRlcykgcmVjZWl2ZWQgZnJvbSBwYXJlbnRcblx0ICogXHRlbGVtZW50L2NvbXBvbmVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGVcblx0ICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG5cdCAqICBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcblx0ICogQHJldHVybnMge2ltcG9ydCgnLi92bm9kZScpLlZOb2RlIHwgdm9pZH1cblx0ICovXG5cdHJlbmRlcigpIHt9XG5cbn0pO1xuIiwiaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4vdmRvbS9kaWZmJztcblxuLyoqXG4gKiBSZW5kZXIgSlNYIGludG8gYSBgcGFyZW50YCBFbGVtZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgQSAoSlNYKSBWTm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2RvbScpLlByZWFjdEVsZW1lbnR9IHBhcmVudCBET00gZWxlbWVudCB0byByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vZG9tJykuUHJlYWN0RWxlbWVudH0gW21lcmdlXSBBdHRlbXB0IHRvIHJlLXVzZSBhbiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXRcbiAqICBgbWVyZ2VgXG4gKiBAcHVibGljXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJlbmRlciBhIGRpdiBpbnRvIDxib2R5PjpcbiAqIHJlbmRlcig8ZGl2IGlkPVwiaGVsbG9cIj5oZWxsbyE8L2Rpdj4sIGRvY3VtZW50LmJvZHkpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZW5kZXIgYSBcIlRoaW5nXCIgY29tcG9uZW50IGludG8gI2ZvbzpcbiAqIGNvbnN0IFRoaW5nID0gKHsgbmFtZSB9KSA9PiA8c3Bhbj57IG5hbWUgfTwvc3Bhbj47XG4gKiByZW5kZXIoPFRoaW5nIG5hbWU9XCJvbmVcIiAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbycpKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50LCBtZXJnZSkge1xuXHRyZXR1cm4gZGlmZihtZXJnZSwgdm5vZGUsIHt9LCBmYWxzZSwgcGFyZW50LCBmYWxzZSk7XG59XG4iLCJpbXBvcnQgeyBoLCBoIGFzIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2gnO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSAnLi9jbG9uZS1lbGVtZW50JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IHJlcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXItcXVldWUnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4ge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aCxcblx0Y3JlYXRlRWxlbWVudCxcblx0Y2xvbmVFbGVtZW50LFxuXHRjcmVhdGVSZWYsXG5cdENvbXBvbmVudCxcblx0cmVuZGVyLFxuXHRyZXJlbmRlcixcblx0b3B0aW9uc1xufTtcblxuZXhwb3J0IHtcblx0aCxcblx0Y3JlYXRlRWxlbWVudCxcblx0Y2xvbmVFbGVtZW50LFxuXHRjcmVhdGVSZWYsXG5cdENvbXBvbmVudCxcblx0cmVuZGVyLFxuXHRyZXJlbmRlcixcblx0b3B0aW9uc1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7QUErRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUNVQTtBQ2ZBO0FBRUE7QUFDQTtBQWdDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFDQTtBQURBO0FBSUE7QUFEQTtBQUlBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOzs7QUM3RUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFPQTtBQUNBO0FBQ0E7Ozs7QUFXQTtBQUNBO0FDbkJBO0FBQ0E7OztBQ1RBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFFQTs7O0FDUEE7O0FBTUE7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQVdBO0FBQ0E7OztBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7O0FDZkE7QUFDQTtBQUNBOzs7QUFRQTtBQUNBO0FBQ0E7QUFEQTs7QUFpQkE7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFFQTs7OztBQUVBO0FBQ0E7Ozs7QUFUQTtBQWNBO0FBREE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFLQTtBQVRBO0FBY0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFEQTs7O0FBaUJBO0FBQ0E7Ozs7QUM1SEE7O0FBR0E7O0FBR0E7QUFDQTtBQUVBOztBQUdBO0FBRUE7QUFDQTtBQUNBOzs7O0FBbUJBO0FBRUE7QUFHQTs7O0FBR0E7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUVBO0FBQ0E7Ozs7QUFLQTtBQUNBOzs7O0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7OztBQUdBOzs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFHQTtBQUVBOzs7QUFLQTs7O0FBS0E7O0FBSUE7O0FBRUE7OztBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUhBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7Ozs7OztBQVFBO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7O0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTs7O0FBR0E7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFZQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUN0VUE7O0FBV0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFHQTs7OztBQUlBOzs7QUFjQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUdBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUVBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBSUE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBbkJBO0FBc0JBOzs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTs7Ozs7O0FBS0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7OztBQVVBOztBQUVBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBRUE7O0FBSUE7O0FBV0E7QUFDQTs7QUFDQTs7QUFFQTtBQUVBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTs7O0FBTUE7O0FDblJBO0FBQ0E7O0FBTUE7O0FBTUE7O0FBTUE7O0FBRUE7OztBQUlBO0FBQUE7OztBQWdCQTtBQUNBO0FBakJBO0FBQ0E7QUEyQkE7QUFDQTtBQTdCQTtBQUNBO0FBREE7QUFBQTtBQ3pCQTtBQUNBO0FEd0JBO0FBQUE7QUVyQ0E7QUFDQTs7QUZvQ0E7QUVqQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=