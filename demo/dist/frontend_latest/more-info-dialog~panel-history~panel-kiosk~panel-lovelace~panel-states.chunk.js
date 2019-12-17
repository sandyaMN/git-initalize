(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate"));

/***/ }),

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"));

/***/ }),

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");




const computeStateDisplay = (localize, stateObj, language) => {
  let display;
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);

  if (domain === "binary_sensor") {
    // Try device class translation, then default binary sensor translation
    if (stateObj.attributes.device_class) {
      display = localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
    }

    if (!display) {
      display = localize(`state.${domain}.default.${stateObj.state}`);
    }
  } else if (stateObj.attributes.unit_of_measurement && !["unknown", "unavailable"].includes(stateObj.state)) {
    display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
  } else if (domain === "input_datetime") {
    let date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"])(date, language);
    } else if (!stateObj.attributes.has_date) {
      const now = new Date();
      date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
      // don't use artificial 1970 year.
      now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["default"])(date, language);
    } else {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__["default"])(date, language);
    }
  } else if (domain === "zwave") {
    if (["initializing", "dead"].includes(stateObj.state)) {
      display = localize(`state.zwave.query_stage.${stateObj.state}`, "query_stage", stateObj.attributes.query_stage);
    } else {
      display = localize(`state.zwave.default.${stateObj.state}`);
    }
  } else {
    display = localize(`state.${domain}.${stateObj.state}`);
  } // Fall back to default, component backend translation, or raw state if nothing else matches.


  if (!display) {
    display = localize(`state.default.${stateObj.state}`) || localize(`component.${domain}.state.${stateObj.state}`) || stateObj.state;
  }

  return display;
};

/***/ }),

/***/ "./src/components/entity/ha-chart-base.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-chart-base.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");







 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

let scriptsLoaded = null;

class HaChartBase extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  get chart() {
    return this._chart;
  }

  static get properties() {
    return {
      data: Object,
      identifier: String,
      rendered: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true
      },
      metas: {
        type: Array,
        value: () => []
      },
      tooltip: {
        type: Object,
        value: () => ({
          opacity: "0",
          left: "0",
          top: "0",
          xPadding: "5",
          yPadding: "3"
        })
      },
      unit: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["onPropsChange(data)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.onPropsChange();

    this._resizeListener = () => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10), () => {
        if (this._isAttached) {
          this.resizeChart();
        }
      });
    };

    if (typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          this._resizeListener();
        });
      });
      this.resizeObserver.observe(this.$.chartTarget);
    } else {
      this.addEventListener("iron-resize", this._resizeListener);
    }

    if (scriptsLoaded === null) {
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
    }

    scriptsLoaded.then(ChartModule => {
      this.ChartClass = ChartModule.default;
      this.onPropsChange();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._isAttached = false;

    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.$.chartTarget);
    }

    this.removeEventListener("iron-resize", this._resizeListener);

    if (this._resizeTimer !== undefined) {
      clearInterval(this._resizeTimer);
      this._resizeTimer = undefined;
    }
  }

  onPropsChange() {
    if (!this._isAttached || !this.ChartClass || !this.data) {
      return;
    }

    this.drawChart();
  }

  _customTooltips(tooltip) {
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      this.set(["tooltip", "opacity"], 0);
      return;
    } // Set caret Position


    if (tooltip.yAlign) {
      this.set(["tooltip", "yAlign"], tooltip.yAlign);
    } else {
      this.set(["tooltip", "yAlign"], "no-transform");
    }

    const title = tooltip.title ? tooltip.title[0] || "" : "";
    this.set(["tooltip", "title"], title);
    const bodyLines = tooltip.body.map(n => n.lines); // Set Text

    if (tooltip.body) {
      this.set(["tooltip", "lines"], bodyLines.map((body, i) => {
        const colors = tooltip.labelColors[i];
        return {
          color: colors.borderColor,
          bgColor: colors.backgroundColor,
          text: body.join("\n")
        };
      }));
    }

    const parentWidth = this.$.chartTarget.clientWidth;
    let positionX = tooltip.caretX;
    const positionY = this._chart.canvas.offsetTop + tooltip.caretY;

    if (tooltip.caretX + 100 > parentWidth) {
      positionX = parentWidth - 100;
    } else if (tooltip.caretX < 100) {
      positionX = 100;
    }

    positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

    this.tooltip = Object.assign({}, this.tooltip, {
      opacity: 1,
      left: `${positionX}px`,
      top: `${positionY}px`
    });
  }

  _legendClick(event) {
    event = event || window.event;
    event.stopPropagation();
    let target = event.target || event.srcElement;

    while (target.nodeName !== "LI") {
      // user clicked child, find parent LI
      target = target.parentElement;
    }

    const index = event.model.itemsIndex;

    const meta = this._chart.getDatasetMeta(index);

    meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
    this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

    this._chart.update();
  }

  _drawLegend() {
    const chart = this._chart; // New data for old graph. Keep metadata.

    const preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
    this._oldIdentifier = this.identifier;
    this.set("metas", this._chart.data.datasets.map((x, i) => ({
      label: x.label,
      color: x.color,
      bgColor: x.backgroundColor,
      hidden: preserveVisibility && i < this.metas.length ? this.metas[i].hidden : !chart.isDatasetVisible(i)
    })));
    let updateNeeded = false;

    if (preserveVisibility) {
      for (let i = 0; i < this.metas.length; i++) {
        const meta = chart.getDatasetMeta(i);
        if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
        meta.hidden = this.metas[i].hidden ? true : null;
      }
    }

    if (updateNeeded) {
      chart.update();
    }

    this.unit = this.data.unit;
  }

  _formatTickValue(value, index, values) {
    if (values.length === 0) {
      return value;
    }

    const date = new Date(values[index].value);
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
  }

  drawChart() {
    const data = this.data.data;
    const ctx = this.$.chartCanvas;

    if ((!data.datasets || !data.datasets.length) && !this._chart) {
      return;
    }

    if (this.data.type !== "timeline" && data.datasets.length > 0) {
      const cnt = data.datasets.length;
      const colors = this.constructor.getColorList(cnt);

      for (let loopI = 0; loopI < cnt; loopI++) {
        data.datasets[loopI].borderColor = colors[loopI].rgbString();
        data.datasets[loopI].backgroundColor = colors[loopI].alpha(0.6).rgbaString();
      }
    }

    if (this._chart) {
      this._customTooltips({
        opacity: 0
      });

      this._chart.data = data;

      this._chart.update({
        duration: 0
      });

      if (this.isTimeline) {
        this._chart.options.scales.yAxes[0].gridLines.display = data.length > 1;
      } else if (this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    } else {
      if (!data.datasets) {
        return;
      }

      this._customTooltips({
        opacity: 0
      });

      const plugins = [{
        afterRender: () => this._setRendered(true)
      }];
      let options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        tooltips: {
          enabled: false,
          custom: this._customTooltips.bind(this)
        },
        legend: {
          display: false
        },
        line: {
          spanGaps: true
        },
        elements: {
          font: "12px 'Roboto', 'sans-serif'"
        },
        ticks: {
          fontFamily: "'Roboto', 'sans-serif'"
        }
      };
      options = Chart.helpers.merge(options, this.data.options);
      options.scales.xAxes[0].ticks.callback = this._formatTickValue;

      if (this.data.type === "timeline") {
        this.set("isTimeline", true);

        if (this.data.colors !== undefined) {
          this._colorFunc = this.constructor.getColorGenerator(this.data.colors.staticColors, this.data.colors.staticColorIndex);
        }

        if (this._colorFunc !== undefined) {
          options.elements.colorFunction = this._colorFunc;
        }

        if (data.datasets.length === 1) {
          if (options.scales.yAxes[0].ticks) {
            options.scales.yAxes[0].ticks.display = false;
          } else {
            options.scales.yAxes[0].ticks = {
              display: false
            };
          }

          if (options.scales.yAxes[0].gridLines) {
            options.scales.yAxes[0].gridLines.display = false;
          } else {
            options.scales.yAxes[0].gridLines = {
              display: false
            };
          }
        }

        this.$.chartTarget.style.height = "50px";
      } else {
        this.$.chartTarget.style.height = "160px";
      }

      const chartData = {
        type: this.data.type,
        data: this.data.data,
        options: options,
        plugins: plugins
      }; // Async resize after dom update

      this._chart = new this.ChartClass(ctx, chartData);

      if (this.isTimeline !== true && this.data.legend === true) {
        this._drawLegend();
      }

      this.resizeChart();
    }
  }

  resizeChart() {
    if (!this._chart) return; // Chart not ready

    if (this._resizeTimer === undefined) {
      this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
      return;
    }

    clearInterval(this._resizeTimer);
    this._resizeTimer = undefined;

    this._resizeChart();
  }

  _resizeChart() {
    const chartTarget = this.$.chartTarget;
    const options = this.data;
    const data = options.data;

    if (data.datasets.length === 0) {
      return;
    }

    if (!this.isTimeline) {
      this._chart.resize();

      return;
    } // Recalculate chart height for Timeline chart


    const areaTop = this._chart.chartArea.top;
    const areaBot = this._chart.chartArea.bottom;
    const height1 = this._chart.canvas.clientHeight;

    if (areaBot > 0) {
      this._axisHeight = height1 - areaBot + areaTop;
    }

    if (!this._axisHeight) {
      chartTarget.style.height = "50px";

      this._chart.resize();

      this.resizeChart();
      return;
    }

    if (this._axisHeight) {
      const cnt = data.datasets.length;
      const targetHeight = 30 * cnt + this._axisHeight + "px";

      if (chartTarget.style.height !== targetHeight) {
        chartTarget.style.height = targetHeight;
      }

      this._chart.resize();
    }
  } // Get HSL distributed color list


  static getColorList(count) {
    let processL = false;

    if (count > 10) {
      processL = true;
      count = Math.ceil(count / 2);
    }

    const h1 = 360 / count;
    const result = [];

    for (let loopI = 0; loopI < count; loopI++) {
      result[loopI] = Color().hsl(h1 * loopI, 80, 38);

      if (processL) {
        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
      }
    }

    return result;
  }

  static getColorGenerator(staticColors, startIndex) {
    // Known colors for static data,
    // should add for very common state string manually.
    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
    const palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

    function getColorIndex(idx) {
      // Reuse the color if index too large.
      return Color("#" + palette[idx % palette.length]);
    }

    const colorDict = {};
    let colorIndex = 0;
    if (startIndex > 0) colorIndex = startIndex;

    if (staticColors) {
      Object.keys(staticColors).forEach(c => {
        const c1 = staticColors[c];

        if (isFinite(c1)) {
          colorDict[c.toLowerCase()] = getColorIndex(c1);
        } else {
          colorDict[c.toLowerCase()] = Color(staticColors[c]);
        }
      });
    } // Custom color assign


    function getColor(__, data) {
      let ret;
      const name = data[3];
      if (name === null) return Color().hsl(0, 40, 38);
      if (name === undefined) return Color().hsl(120, 40, 38);
      const name1 = name.toLowerCase();

      if (ret === undefined) {
        ret = colorDict[name1];
      }

      if (ret === undefined) {
        ret = getColorIndex(colorIndex);
        colorIndex++;
        colorDict[name1] = ret;
      }

      return ret;
    }

    return getColor;
  }

}

customElements.define("ha-chart-base", HaChartBase);

/***/ }),

/***/ "./src/components/state-history-chart-line.js":
/*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");







class StateHistoryChartLine extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      chartData: Object,
      data: Object,
      names: Object,
      unit: String,
      identifier: String,
      isSingleDevice: {
        type: Boolean,
        value: false
      },
      endTime: Object,
      rendered: {
        type: Boolean,
        value: false,
        observer: "_onRenderedChanged"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, isSingleDevice)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  _onRenderedChanged(rendered) {
    if (rendered) this.animateHeight();
  }

  animateHeight() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.style.height = this.$.chart.scrollHeight + "px";
    }));
  }

  drawChart() {
    const unit = this.unit;
    const deviceStates = this.data;
    const datasets = [];
    let endTime;

    if (!this._isAttached) {
      return;
    }

    if (deviceStates.length === 0) {
      return;
    }

    function safeParseFloat(value) {
      const parsed = parseFloat(value);
      return isFinite(parsed) ? parsed : null;
    }

    endTime = this.endTime || // Get the highest date from the last date of each device
    new Date(Math.max.apply(null, deviceStates.map(devSts => new Date(devSts.states[devSts.states.length - 1].last_changed))));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const names = this.names || {};
    deviceStates.forEach(states => {
      const domain = states.domain;
      const name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

      let prevValues;
      const data = [];

      function pushData(timestamp, datavalues) {
        if (!datavalues) return;

        if (timestamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is "now" and client time is not in sync with server time.
          return;
        }

        data.forEach((d, i) => {
          d.data.push({
            x: timestamp,
            y: datavalues[i]
          });
        });
        prevValues = datavalues;
      }

      function addColumn(nameY, step, fill) {
        let dataFill = false;
        let dataStep = false;

        if (fill) {
          dataFill = "origin";
        }

        if (step) {
          dataStep = "before";
        }

        data.push({
          label: nameY,
          fill: dataFill,
          steppedLine: dataStep,
          pointRadius: 0,
          data: [],
          unitText: unit
        });
      }

      if (domain === "thermostat" || domain === "climate" || domain === "water_heater") {
        const hasHvacAction = states.states.some(state => state.attributes && state.attributes.hvac_action);
        const isHeating = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "heating" : state => state.state === "heat";
        const isCooling = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "cooling" : state => state.state === "cool";
        const hasHeat = states.states.some(isHeating);
        const hasCool = states.states.some(isCooling); // We differentiate between thermostats that have a target temperature
        // range versus ones that have just a target temperature
        // Using step chart by step-before so manually interpolation not needed.

        const hasTargetRange = states.states.some(state => state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low);
        addColumn(`${this.hass.localize("ui.card.climate.current_temperature", "name", name)}`, true);

        if (hasHeat) {
          addColumn(`${this.hass.localize("ui.card.climate.heating", "name", name)}`, true, true); // The "heating" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasCool) {
          addColumn(`${this.hass.localize("ui.card.climate.cooling", "name", name)}`, true, true); // The "cooling" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasTargetRange) {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.high"))}`, true);
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.low"))}`, true);
        } else {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_entity", "name", name)}`, true);
        }

        states.states.forEach(state => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];

          if (hasHeat) {
            series.push(isHeating(state) ? curTemp : null);
          }

          if (hasCool) {
            series.push(isCooling(state) ? curTemp : null);
          }

          if (hasTargetRange) {
            const targetHigh = safeParseFloat(state.attributes.target_temp_high);
            const targetLow = safeParseFloat(state.attributes.target_temp_low);
            series.push(targetHigh, targetLow);
            pushData(new Date(state.last_changed), series);
          } else {
            const target = safeParseFloat(state.attributes.temperature);
            series.push(target);
            pushData(new Date(state.last_changed), series);
          }
        });
      } else {
        // Only disable interpolation for sensors
        const isStep = domain === "sensor";
        addColumn(name, isStep);
        let lastValue = null;
        let lastDate = null;
        let lastNullDate = null; // Process chart data.
        // When state is `unknown`, calculate the value and break the line.

        states.states.forEach(state => {
          const value = safeParseFloat(state.state);
          const date = new Date(state.last_changed);

          if (value !== null && lastNullDate !== null) {
            const dateTime = date.getTime();
            const lastNullDateTime = lastNullDate.getTime();
            const lastDateTime = lastDate.getTime();
            const tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
            pushData(lastNullDate, [tmpValue]);
            pushData(new Date(lastNullDateTime + 1), [null]);
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
            lastNullDate = null;
          } else if (value !== null && lastNullDate === null) {
            pushData(date, [value]);
            lastDate = date;
            lastValue = value;
          } else if (value === null && lastNullDate === null && lastValue !== null) {
            lastNullDate = date;
          }
        });
      } // Add an entry for final values


      pushData(endTime, prevValues, false); // Concat two arrays

      Array.prototype.push.apply(datasets, data);
    });

    const formatTooltipTitle = (items, data) => {
      const item = items[0];
      const date = data.datasets[item.datasetIndex].data[item.index].x;
      return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(date, this.hass.language);
    };

    const chartOptions = {
      type: "line",
      unit: unit,
      legend: !this.isSingleDevice,
      options: {
        scales: {
          xAxes: [{
            type: "time",
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 7
            }
          }]
        },
        tooltips: {
          mode: "neareach",
          callbacks: {
            title: formatTooltipTitle
          }
        },
        hover: {
          mode: "neareach"
        },
        layout: {
          padding: {
            top: 5
          }
        },
        elements: {
          line: {
            tension: 0.1,
            pointRadius: 0,
            borderWidth: 1.5
          },
          point: {
            hitRadius: 5
          }
        },
        plugins: {
          filler: {
            propagate: true
          }
        }
      },
      data: {
        labels: [],
        datasets: datasets
      }
    };
    this.chartData = chartOptions;
  }

}

customElements.define("state-history-chart-line", StateHistoryChartLine);

/***/ }),

/***/ "./src/components/state-history-chart-timeline.js":
/*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");








class StateHistoryChartTimeline extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      chartData: Object,
      data: {
        type: Object,
        observer: "dataChanged"
      },
      names: Object,
      noSingle: Boolean,
      endTime: Date,
      rendered: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      rtl: {
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  static get observers() {
    return ["dataChanged(data, endTime, localize, language)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  drawChart() {
    const staticColors = {
      on: 1,
      off: 0,
      unavailable: "#a0a0a0",
      unknown: "#606060",
      idle: 2
    };
    let stateHistory = this.data;

    if (!this._isAttached) {
      return;
    }

    if (!stateHistory) {
      stateHistory = [];
    }

    const startTime = new Date(stateHistory.reduce((minTime, stateInfo) => Math.min(minTime, new Date(stateInfo.data[0].last_changed)), new Date())); // end time is Math.max(startTime, last_event)

    let endTime = this.endTime || new Date(stateHistory.reduce((maxTime, stateInfo) => Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed)), startTime));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const labels = [];
    const datasets = []; // stateHistory is a list of lists of sorted state objects

    const names = this.names || {};
    stateHistory.forEach(stateInfo => {
      let newLastChanged;
      let prevState = null;
      let locState = null;
      let prevLastChanged = startTime;
      const entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
      const dataRow = [];
      stateInfo.data.forEach(state => {
        let newState = state.state;
        const timeStamp = new Date(state.last_changed);

        if (newState === undefined || newState === "") {
          newState = null;
        }

        if (timeStamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is 'now' and client time is not in sync with server time.
          return;
        }

        if (prevState !== null && newState !== prevState) {
          newLastChanged = new Date(state.last_changed);
          dataRow.push([prevLastChanged, newLastChanged, locState, prevState]);
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = newLastChanged;
        } else if (prevState === null) {
          prevState = newState;
          locState = state.state_localize;
          prevLastChanged = new Date(state.last_changed);
        }
      });

      if (prevState !== null) {
        dataRow.push([prevLastChanged, endTime, locState, prevState]);
      }

      datasets.push({
        data: dataRow
      });
      labels.push(entityDisplay);
    });

    const formatTooltipLabel = (item, data) => {
      const values = data.datasets[item.datasetIndex].data[item.index];
      const start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[0], this.hass.language);
      const end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[1], this.hass.language);
      const state = values[2];
      return [state, start, end];
    };

    const chartOptions = {
      type: "timeline",
      options: {
        tooltips: {
          callbacks: {
            label: formatTooltipLabel
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              major: {
                fontStyle: "bold"
              }
            }
          }],
          yAxes: [{
            afterSetDimensions: yaxe => {
              yaxe.maxWidth = yaxe.chart.width * 0.18;
            },
            position: this._computeRTL ? "right" : "left"
          }]
        }
      },
      data: {
        labels: labels,
        datasets: datasets
      },
      colors: {
        staticColors: staticColors,
        staticColorIndex: 3
      }
    };
    this.chartData = chartOptions;
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass);
  }

}

customElements.define("state-history-chart-timeline", StateHistoryChartTimeline);

/***/ }),

/***/ "./src/components/state-history-charts.js":
/*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js");
/* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







class StateHistoryCharts extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      historyData: {
        type: Object,
        value: null
      },
      names: Object,
      isLoadingData: Boolean,
      endTime: {
        type: Object
      },
      upToNow: Boolean,
      noSingle: Boolean
    };
  }

  _computeIsSingleLineChart(data, noSingle) {
    return !noSingle && data && data.length === 1;
  }

  _computeIsEmpty(isLoadingData, historyData) {
    const historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
    return !isLoadingData && historyDataEmpty;
  }

  _computeIsLoading(isLoading) {
    return isLoading && !this.historyData;
  }

  _computeEndTime(endTime, upToNow) {
    // We don't really care about the value of historyData, but if it change we want to update
    // endTime.
    return upToNow ? new Date() : endTime;
  }

}

customElements.define("state-history-charts", StateHistoryCharts);

/***/ }),

/***/ "./src/data/cached-history.ts":
/*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
/*! exports provided: getRecent, getRecentWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecent", function() { return getRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentWithCache", function() { return getRecentWithCache; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");

const RECENT_THRESHOLD = 60000; // 1 minute

const RECENT_CACHE = {};
const stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

const getRecent = (hass, entityId, startTime, endTime, localize, language) => {
  const cacheKey = entityId;
  const cache = RECENT_CACHE[cacheKey];

  if (cache && Date.now() - cache.created < RECENT_THRESHOLD && cache.language === language) {
    return cache.data;
  }

  const prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, startTime, endTime).then(stateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, stateHistory, localize, language), err => {
    delete RECENT_CACHE[entityId];
    throw err;
  });
  RECENT_CACHE[cacheKey] = {
    created: Date.now(),
    language,
    data: prom
  };
  return prom;
}; // Cache type 2 functionality

function getEmptyCache(language, startTime, endTime) {
  return {
    prom: Promise.resolve({
      line: [],
      timeline: []
    }),
    language,
    startTime,
    endTime,
    data: {
      line: [],
      timeline: []
    }
  };
}

const getRecentWithCache = (hass, entityId, cacheConfig, localize, language) => {
  const cacheKey = cacheConfig.cacheKey;
  const endTime = new Date();
  const startTime = new Date(endTime);
  startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
  let toFetchStartTime = startTime;
  let appendingToCache = false;
  let cache = stateHistoryCache[cacheKey];

  if (cache && toFetchStartTime >= cache.startTime && toFetchStartTime <= cache.endTime && cache.language === language) {
    toFetchStartTime = cache.endTime;
    appendingToCache = true; // This pretty much never happens as endTime is usually set to now

    if (endTime <= cache.endTime) {
      return cache.prom;
    }
  } else {
    cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
  }

  const curCacheProm = cache.prom;

  const genProm = async () => {
    let fetchedHistory;

    try {
      const results = await Promise.all([curCacheProm, Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache)]);
      fetchedHistory = results[1];
    } catch (err) {
      delete stateHistoryCache[cacheKey];
      throw err;
    }

    const stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, fetchedHistory, localize, language);

    if (appendingToCache) {
      mergeLine(stateHistory.line, cache.data.line);
      mergeTimeline(stateHistory.timeline, cache.data.timeline);
      pruneStartTime(startTime, cache.data);
    } else {
      cache.data = stateHistory;
    }

    return cache.data;
  };

  cache.prom = genProm();
  cache.startTime = startTime;
  cache.endTime = endTime;
  return cache.prom;
};

const mergeLine = (historyLines, cacheLines) => {
  historyLines.forEach(line => {
    const unit = line.unit;
    const oldLine = cacheLines.find(cacheLine => cacheLine.unit === unit);

    if (oldLine) {
      line.data.forEach(entity => {
        const oldEntity = oldLine.data.find(cacheEntity => entity.entity_id === cacheEntity.entity_id);

        if (oldEntity) {
          oldEntity.states = oldEntity.states.concat(entity.states);
        } else {
          oldLine.data.push(entity);
        }
      });
    } else {
      cacheLines.push(line);
    }
  });
};

const mergeTimeline = (historyTimelines, cacheTimelines) => {
  historyTimelines.forEach(timeline => {
    const oldTimeline = cacheTimelines.find(cacheTimeline => cacheTimeline.entity_id === timeline.entity_id);

    if (oldTimeline) {
      oldTimeline.data = oldTimeline.data.concat(timeline.data);
    } else {
      cacheTimelines.push(timeline);
    }
  });
};

const pruneArray = (originalStartTime, arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const changedAfterStartTime = arr.findIndex(state => new Date(state.last_changed) > originalStartTime);

  if (changedAfterStartTime === 0) {
    // If all changes happened after originalStartTime then we are done.
    return arr;
  } // If all changes happened at or before originalStartTime. Use last index.


  const updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
  arr[updateIndex].last_changed = originalStartTime;
  return arr.slice(updateIndex);
};

const pruneStartTime = (originalStartTime, cacheData) => {
  cacheData.line.forEach(line => {
    line.data.forEach(entity => {
      entity.states = pruneArray(originalStartTime, entity.states);
    });
  });
  cacheData.timeline.forEach(timeline => {
    timeline.data = pruneArray(originalStartTime, timeline.data);
  });
};

/***/ }),

/***/ "./src/data/ha-state-history-data.js":
/*!*******************************************!*\
  !*** ./src/data/ha-state-history-data.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");
/* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cached-history */ "./src/data/cached-history.ts");






/*
 * @appliesMixin LocalizeMixin
 */

class HaStateHistoryData extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged"
      },
      filterType: String,
      cacheConfig: Object,
      startTime: Date,
      endTime: Date,
      entityId: String,
      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true
      },
      data: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true
      }
    };
  }

  static get observers() {
    return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
  }

  disconnectedCallback() {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    super.disconnectedCallback();
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && !this._madeFirstCall) {
      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }

  filterChangedDebouncer(...args) {
    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), () => {
      this.filterChanged(...args);
    });
  }

  filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
    if (!this.hass) {
      return;
    }

    if (cacheConfig && !cacheConfig.cacheKey) {
      return;
    }

    if (!localize) {
      return;
    }

    this._madeFirstCall = true;
    const language = this.hass.language;
    let data;

    if (filterType === "date") {
      if (!startTime || !endTime) return;
      data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.hass, startTime, endTime).then(dateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(this.hass, dateHistory, localize, language));
    } else if (filterType === "recent-entity") {
      if (!entityId) return;

      if (cacheConfig) {
        data = this.getRecentWithCacheRefresh(entityId, cacheConfig, localize, language);
      } else {
        data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"])(this.hass, entityId, startTime, endTime, localize, language);
      }
    } else {
      return;
    }

    this._setIsLoading(true);

    data.then(stateHistory => {
      this._setData(stateHistory);

      this._setIsLoading(false);
    });
  }

  getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    if (cacheConfig.refresh) {
      this._refreshTimeoutId = window.setInterval(() => {
        Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language).then(stateHistory => {
          this._setData(Object.assign({}, stateHistory));
        });
      }, cacheConfig.refresh * 1000);
    }

    return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language);
  }

}

customElements.define("ha-state-history-data", HaStateHistoryData);

/***/ }),

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/*! exports provided: fetchRecent, fetchDate, computeHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecent", function() { return fetchRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDate", function() { return fetchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHistory", function() { return computeHistory; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");



const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
const LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high", "hvac_action"];
const fetchRecent = (hass, entityId, startTime, endTime, skipInitialState = false) => {
  let url = "history/period";

  if (startTime) {
    url += "/" + startTime.toISOString();
  }

  url += "?filter_entity_id=" + entityId;

  if (endTime) {
    url += "&end_time=" + endTime.toISOString();
  }

  if (skipInitialState) {
    url += "&skip_initial_state";
  }

  return hass.callApi("GET", url);
};
const fetchDate = (hass, startTime, endTime) => {
  return hass.callApi("GET", `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`);
};

const equalState = (obj1, obj2) => obj1.state === obj2.state && ( // They either both have an attributes object or not
!obj1.attributes || LINE_ATTRIBUTES_TO_KEEP.every(attr => obj1.attributes[attr] === obj2.attributes[attr]));

const processTimelineEntity = (localize, language, states) => {
  const data = [];

  for (const state of states) {
    if (data.length > 0 && state.state === data[data.length - 1].state) {
      continue;
    }

    data.push({
      state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["computeStateDisplay"])(localize, state, language),
      state: state.state,
      last_changed: state.last_changed
    });
  }

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(states[0]),
    entity_id: states[0].entity_id,
    data
  };
};

const processLineChartEntities = (unit, entities) => {
  const data = [];

  for (const states of entities) {
    const last = states[states.length - 1];
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
    const processedStates = [];

    for (const state of states) {
      let processedState;

      if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
        processedState = {
          state: state.state,
          last_changed: state.last_updated,
          attributes: {}
        };

        for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
          if (attr in state.attributes) {
            processedState.attributes[attr] = state.attributes[attr];
          }
        }
      } else {
        processedState = state;
      }

      if (processedStates.length > 1 && equalState(processedState, processedStates[processedStates.length - 1]) && equalState(processedState, processedStates[processedStates.length - 2])) {
        continue;
      }

      processedStates.push(processedState);
    }

    data.push({
      domain,
      name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(last),
      entity_id: last.entity_id,
      states: processedStates
    });
  }

  return {
    unit,
    identifier: entities.map(states => states[0].entity_id).join(""),
    data
  };
};

const computeHistory = (hass, stateHistory, localize, language) => {
  const lineChartDevices = {};
  const timelineDevices = [];

  if (!stateHistory) {
    return {
      line: [],
      timeline: []
    };
  }

  stateHistory.forEach(stateInfo => {
    if (stateInfo.length === 0) {
      return;
    }

    const stateWithUnit = stateInfo.find(state => "unit_of_measurement" in state.attributes);
    let unit;

    if (stateWithUnit) {
      unit = stateWithUnit.attributes.unit_of_measurement;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "climate") {
      unit = hass.config.unit_system.temperature;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "water_heater") {
      unit = hass.config.unit_system.temperature;
    }

    if (!unit) {
      timelineDevices.push(processTimelineEntity(localize, language, stateInfo));
    } else if (unit in lineChartDevices) {
      lineChartDevices[unit].push(stateInfo);
    } else {
      lineChartDevices[unit] = [stateInfo];
    }
  });
  const unitStates = Object.keys(lineChartDevices).map(unit => processLineChartEntities(unit, lineChartDevices[unit]));
  return {
    line: unitStates,
    timeline: timelineDevices
  };
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

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
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

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1jaGFydC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhY2hlZC1oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJtZWRpdW1EYXRlXCIpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEaXNwbGF5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgbGV0IGRpc3BsYXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoZG9tYWluID09PSBcImJpbmFyeV9zZW5zb3JcIikge1xuICAgIC8vIFRyeSBkZXZpY2UgY2xhc3MgdHJhbnNsYXRpb24sIHRoZW4gZGVmYXVsdCBiaW5hcnkgc2Vuc29yIHRyYW5zbGF0aW9uXG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzc30uJHtzdGF0ZU9iai5zdGF0ZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghZGlzcGxheSkge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQgJiZcbiAgICAhW1widW5rbm93blwiLCBcInVuYXZhaWxhYmxlXCJdLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKVxuICApIHtcbiAgICBkaXNwbGF5ID0gc3RhdGVPYmouc3RhdGUgKyBcIiBcIiArIHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgfSBlbHNlIGlmIChkb21haW4gPT09IFwiaW5wdXRfZGF0ZXRpbWVcIikge1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAvLyBEdWUgdG8gYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5NzU0OFxuICAgICAgICAvLyBkb24ndCB1c2UgYXJ0aWZpY2lhbCAxOTcwIHllYXIuXG4gICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICBub3cuZ2V0TW9udGgoKSxcbiAgICAgICAgbm93LmdldERheSgpLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdFRpbWUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMueWVhcixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5LFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdERhdGVUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcInp3YXZlXCIpIHtcbiAgICBpZiAoW1wiaW5pdGlhbGl6aW5nXCIsIFwiZGVhZFwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShcbiAgICAgICAgYHN0YXRlLnp3YXZlLnF1ZXJ5X3N0YWdlLiR7c3RhdGVPYmouc3RhdGV9YCxcbiAgICAgICAgXCJxdWVyeV9zdGFnZVwiLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoYHN0YXRlLnp3YXZlLmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgfVxuXG4gIC8vIEZhbGwgYmFjayB0byBkZWZhdWx0LCBjb21wb25lbnQgYmFja2VuZCB0cmFuc2xhdGlvbiwgb3IgcmF3IHN0YXRlIGlmIG5vdGhpbmcgZWxzZSBtYXRjaGVzLlxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID1cbiAgICAgIGxvY2FsaXplKGBzdGF0ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIGxvY2FsaXplKGBjb21wb25lbnQuJHtkb21haW59LnN0YXRlLiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHN0YXRlT2JqLnN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIGRpc3BsYXk7XG59O1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IElyb25SZXNpemFibGVCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5cbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyogZ2xvYmFsIENoYXJ0IG1vbWVudCBDb2xvciAqL1xuXG5sZXQgc2NyaXB0c0xvYWRlZCA9IG51bGw7XG5cbmNsYXNzIEhhQ2hhcnRCYXNlIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gIFtJcm9uUmVzaXphYmxlQmVoYXZpb3JdLFxuICBQb2x5bWVyRWxlbWVudFxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDAgMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2IHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydFRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIGZsZXg6IDAgMCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydExlZ2VuZCB7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODAsIDgwLCA4MCwgMC45KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEycHgpO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCB1bCxcbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB1bCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0OSU7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpOm50aC1jaGlsZChvZGQpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgLyogTWFrZSBsYXN0IGl0ZW0gdGFrZSBmdWxsIHdpZHRoIGlmIGl0IGlzIG9kZC1udW1iZXJlZC4gKi9cbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpW2RhdGEtaGlkZGVuXSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGVtLFxuICAgICAgICAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCBlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdW5pdF1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydEhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydFRpdGxlXCI+W1t1bml0XV08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRMZWdlbmRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1ttZXRhc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpIG9uLWNsaWNrPVwiX2xlZ2VuZENsaWNrXCIgZGF0YS1oaWRkZW4kPVwiW1tpdGVtLmhpZGRlbl1dXCI+XG4gICAgICAgICAgICAgICAgICA8ZW0gc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjpbW2l0ZW0uYmdDb2xvcl1dXCI+PC9lbT5cbiAgICAgICAgICAgICAgICAgIFtbaXRlbS5sYWJlbF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgaWQ9XCJjaGFydFRhcmdldFwiIHN0eWxlPVwiaGVpZ2h0OjQwcHg7IHdpZHRoOjEwMCVcIj5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNoYXJ0Q2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcyQ9XCJjaGFydFRvb2x0aXAgW1t0b29sdGlwLnlBbGlnbl1dXCJcbiAgICAgICAgICBzdHlsZSQ9XCJvcGFjaXR5OltbdG9vbHRpcC5vcGFjaXR5XV07IHRvcDpbW3Rvb2x0aXAudG9wXV07IGxlZnQ6W1t0b29sdGlwLmxlZnRdXTsgcGFkZGluZzpbW3Rvb2x0aXAueVBhZGRpbmddXXB4IFtbdG9vbHRpcC54UGFkZGluZ11dcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+W1t0b29sdGlwLnRpdGxlXV08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3Rvb2x0aXAubGluZXNdXVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtXG4gICAgICAgICAgICAgICAgICA+W1tpdGVtLnRleHRdXVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgbWV0YXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6ICgpID0+ICh7XG4gICAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICB4UGFkZGluZzogXCI1XCIsXG4gICAgICAgICAgeVBhZGRpbmc6IFwiM1wiLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICB1bml0OiBPYmplY3QsXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIm9uUHJvcHNDaGFuZ2UoZGF0YSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgIHRpbWVPdXQuYWZ0ZXIoMTApLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kLmNoYXJ0VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGlmIChzY3JpcHRzTG9hZGVkID09PSBudWxsKSB7XG4gICAgICBzY3JpcHRzTG9hZGVkID0gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfY2hhcnRcIiAqLyBcIi4uLy4uL3Jlc291cmNlcy9oYS1jaGFydC1zY3JpcHRzLmpzXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHNjcmlwdHNMb2FkZWQudGhlbigoQ2hhcnRNb2R1bGUpID0+IHtcbiAgICAgIHRoaXMuQ2hhcnRDbGFzcyA9IENoYXJ0TW9kdWxlLmRlZmF1bHQ7XG4gICAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcblxuICAgIGlmICh0aGlzLl9yZXNpemVUaW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvcHNDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkIHx8ICF0aGlzLkNoYXJ0Q2xhc3MgfHwgIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgX2N1c3RvbVRvb2x0aXBzKHRvb2x0aXApIHtcbiAgICAvLyBIaWRlIGlmIG5vIHRvb2x0aXBcbiAgICBpZiAodG9vbHRpcC5vcGFjaXR5ID09PSAwKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwib3BhY2l0eVwiXSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBjYXJldCBQb3NpdGlvblxuICAgIGlmICh0b29sdGlwLnlBbGlnbikge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInlBbGlnblwiXSwgdG9vbHRpcC55QWxpZ24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCBcIm5vLXRyYW5zZm9ybVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IHRvb2x0aXAudGl0bGUgPyB0b29sdGlwLnRpdGxlWzBdIHx8IFwiXCIgOiBcIlwiO1xuICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ0aXRsZVwiXSwgdGl0bGUpO1xuXG4gICAgY29uc3QgYm9keUxpbmVzID0gdG9vbHRpcC5ib2R5Lm1hcCgobikgPT4gbi5saW5lcyk7XG5cbiAgICAvLyBTZXQgVGV4dFxuICAgIGlmICh0b29sdGlwLmJvZHkpIHtcbiAgICAgIHRoaXMuc2V0KFxuICAgICAgICBbXCJ0b29sdGlwXCIsIFwibGluZXNcIl0sXG4gICAgICAgIGJvZHlMaW5lcy5tYXAoKGJvZHksIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSB0b29sdGlwLmxhYmVsQ29sb3JzW2ldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JzLmJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYmdDb2xvcjogY29sb3JzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIHRleHQ6IGJvZHkuam9pbihcIlxcblwiKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50V2lkdGggPSB0aGlzLiQuY2hhcnRUYXJnZXQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHBvc2l0aW9uWCA9IHRvb2x0aXAuY2FyZXRYO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IHRoaXMuX2NoYXJ0LmNhbnZhcy5vZmZzZXRUb3AgKyB0b29sdGlwLmNhcmV0WTtcbiAgICBpZiAodG9vbHRpcC5jYXJldFggKyAxMDAgPiBwYXJlbnRXaWR0aCkge1xuICAgICAgcG9zaXRpb25YID0gcGFyZW50V2lkdGggLSAxMDA7XG4gICAgfSBlbHNlIGlmICh0b29sdGlwLmNhcmV0WCA8IDEwMCkge1xuICAgICAgcG9zaXRpb25YID0gMTAwO1xuICAgIH1cbiAgICBwb3NpdGlvblggKz0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldExlZnQ7XG4gICAgLy8gRGlzcGxheSwgcG9zaXRpb24sIGFuZCBzZXQgc3R5bGVzIGZvciBmb250XG4gICAgdGhpcy50b29sdGlwID0ge1xuICAgICAgLi4udGhpcy50b29sdGlwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uWH1weGAsXG4gICAgICB0b3A6IGAke3Bvc2l0aW9uWX1weGAsXG4gICAgfTtcbiAgfVxuXG4gIF9sZWdlbmRDbGljayhldmVudCkge1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0Lm5vZGVOYW1lICE9PSBcIkxJXCIpIHtcbiAgICAgIC8vIHVzZXIgY2xpY2tlZCBjaGlsZCwgZmluZCBwYXJlbnQgTElcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGV2ZW50Lm1vZGVsLml0ZW1zSW5kZXg7XG5cbiAgICBjb25zdCBtZXRhID0gdGhpcy5fY2hhcnQuZ2V0RGF0YXNldE1ldGEoaW5kZXgpO1xuICAgIG1ldGEuaGlkZGVuID1cbiAgICAgIG1ldGEuaGlkZGVuID09PSBudWxsID8gIXRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLmhpZGRlbiA6IG51bGw7XG4gICAgdGhpcy5zZXQoXG4gICAgICBbXCJtZXRhc1wiLCBpbmRleCwgXCJoaWRkZW5cIl0sXG4gICAgICB0aGlzLl9jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGluZGV4KSA/IG51bGwgOiBcImhpZGRlblwiXG4gICAgKTtcbiAgICB0aGlzLl9jaGFydC51cGRhdGUoKTtcbiAgfVxuXG4gIF9kcmF3TGVnZW5kKCkge1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5fY2hhcnQ7XG4gICAgLy8gTmV3IGRhdGEgZm9yIG9sZCBncmFwaC4gS2VlcCBtZXRhZGF0YS5cbiAgICBjb25zdCBwcmVzZXJ2ZVZpc2liaWxpdHkgPVxuICAgICAgdGhpcy5fb2xkSWRlbnRpZmllciAmJiB0aGlzLmlkZW50aWZpZXIgPT09IHRoaXMuX29sZElkZW50aWZpZXI7XG4gICAgdGhpcy5fb2xkSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcjtcbiAgICB0aGlzLnNldChcbiAgICAgIFwibWV0YXNcIixcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHMubWFwKCh4LCBpKSA9PiAoe1xuICAgICAgICBsYWJlbDogeC5sYWJlbCxcbiAgICAgICAgY29sb3I6IHguY29sb3IsXG4gICAgICAgIGJnQ29sb3I6IHguYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBoaWRkZW46XG4gICAgICAgICAgcHJlc2VydmVWaXNpYmlsaXR5ICYmIGkgPCB0aGlzLm1ldGFzLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLm1ldGFzW2ldLmhpZGRlblxuICAgICAgICAgICAgOiAhY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSxcbiAgICAgIH0pKVxuICAgICk7XG4gICAgbGV0IHVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcmVzZXJ2ZVZpc2liaWxpdHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZXRhID0gY2hhcnQuZ2V0RGF0YXNldE1ldGEoaSk7XG4gICAgICAgIGlmICghIW1ldGEuaGlkZGVuICE9PSAhIXRoaXMubWV0YXNbaV0uaGlkZGVuKSB1cGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICBtZXRhLmhpZGRlbiA9IHRoaXMubWV0YXNbaV0uaGlkZGVuID8gdHJ1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1cGRhdGVOZWVkZWQpIHtcbiAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVuaXQgPSB0aGlzLmRhdGEudW5pdDtcbiAgfVxuXG4gIF9mb3JtYXRUaWNrVmFsdWUodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWVzW2luZGV4XS52YWx1ZSk7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWUoZGF0ZSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5kYXRhO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuJC5jaGFydENhbnZhcztcblxuICAgIGlmICgoIWRhdGEuZGF0YXNldHMgfHwgIWRhdGEuZGF0YXNldHMubGVuZ3RoKSAmJiAhdGhpcy5fY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSBcInRpbWVsaW5lXCIgJiYgZGF0YS5kYXRhc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JMaXN0KGNudCk7XG4gICAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY250OyBsb29wSSsrKSB7XG4gICAgICAgIGRhdGEuZGF0YXNldHNbbG9vcEldLmJvcmRlckNvbG9yID0gY29sb3JzW2xvb3BJXS5yZ2JTdHJpbmcoKTtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2xvb3BJXVxuICAgICAgICAgIC5hbHBoYSgwLjYpXG4gICAgICAgICAgLnJnYmFTdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5fY2hhcnQudXBkYXRlKHsgZHVyYXRpb246IDAgfSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lKSB7XG4gICAgICAgIHRoaXMuX2NoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZGF0YS5sZW5ndGggPiAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkYXRhLmRhdGFzZXRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIGNvbnN0IHBsdWdpbnMgPSBbeyBhZnRlclJlbmRlcjogKCkgPT4gdGhpcy5fc2V0UmVuZGVyZWQodHJ1ZSkgfV07XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgY3VzdG9tOiB0aGlzLl9jdXN0b21Ub29sdGlwcy5iaW5kKHRoaXMpLFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHNwYW5HYXBzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGZvbnQ6IFwiMTJweCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uob3B0aW9ucywgdGhpcy5kYXRhLm9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MuY2FsbGJhY2sgPSB0aGlzLl9mb3JtYXRUaWNrVmFsdWU7XG4gICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09IFwidGltZWxpbmVcIikge1xuICAgICAgICB0aGlzLnNldChcImlzVGltZWxpbmVcIiwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9jb2xvckZ1bmMgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbG9yR2VuZXJhdG9yKFxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9ycy5zdGF0aWNDb2xvcnMsXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ySW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb2xvckZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudHMuY29sb3JGdW5jdGlvbiA9IHRoaXMuX2NvbG9yRnVuYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTYwcHhcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLnR5cGUsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgfTtcbiAgICAgIC8vIEFzeW5jIHJlc2l6ZSBhZnRlciBkb20gdXBkYXRlXG4gICAgICB0aGlzLl9jaGFydCA9IG5ldyB0aGlzLkNoYXJ0Q2xhc3MoY3R4LCBjaGFydERhdGEpO1xuICAgICAgaWYgKHRoaXMuaXNUaW1lbGluZSAhPT0gdHJ1ZSAmJiB0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemVDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2NoYXJ0KSByZXR1cm47XG4gICAgLy8gQ2hhcnQgbm90IHJlYWR5XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZXNpemVDaGFydC5iaW5kKHRoaXMpLCAxMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9yZXNpemVDaGFydCgpO1xuICB9XG5cbiAgX3Jlc2l6ZUNoYXJ0KCkge1xuICAgIGNvbnN0IGNoYXJ0VGFyZ2V0ID0gdGhpcy4kLmNoYXJ0VGFyZ2V0O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgaWYgKGRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlY2FsY3VsYXRlIGNoYXJ0IGhlaWdodCBmb3IgVGltZWxpbmUgY2hhcnRcbiAgICBjb25zdCBhcmVhVG9wID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLnRvcDtcbiAgICBjb25zdCBhcmVhQm90ID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLmJvdHRvbTtcbiAgICBjb25zdCBoZWlnaHQxID0gdGhpcy5fY2hhcnQuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBpZiAoYXJlYUJvdCA+IDApIHtcbiAgICAgIHRoaXMuX2F4aXNIZWlnaHQgPSBoZWlnaHQxIC0gYXJlYUJvdCArIGFyZWFUb3A7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXhpc0hlaWdodCkge1xuICAgICAgY29uc3QgY250ID0gZGF0YS5kYXRhc2V0cy5sZW5ndGg7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSAzMCAqIGNudCArIHRoaXMuX2F4aXNIZWlnaHQgKyBcInB4XCI7XG4gICAgICBpZiAoY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ICE9PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IEhTTCBkaXN0cmlidXRlZCBjb2xvciBsaXN0XG4gIHN0YXRpYyBnZXRDb2xvckxpc3QoY291bnQpIHtcbiAgICBsZXQgcHJvY2Vzc0wgPSBmYWxzZTtcbiAgICBpZiAoY291bnQgPiAxMCkge1xuICAgICAgcHJvY2Vzc0wgPSB0cnVlO1xuICAgICAgY291bnQgPSBNYXRoLmNlaWwoY291bnQgLyAyKTtcbiAgICB9XG4gICAgY29uc3QgaDEgPSAzNjAgLyBjb3VudDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY291bnQ7IGxvb3BJKyspIHtcbiAgICAgIHJlc3VsdFtsb29wSV0gPSBDb2xvcigpLmhzbChoMSAqIGxvb3BJLCA4MCwgMzgpO1xuICAgICAgaWYgKHByb2Nlc3NMKSB7XG4gICAgICAgIHJlc3VsdFtsb29wSSArIGNvdW50XSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCA2Mik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29sb3JHZW5lcmF0b3Ioc3RhdGljQ29sb3JzLCBzdGFydEluZGV4KSB7XG4gICAgLy8gS25vd24gY29sb3JzIGZvciBzdGF0aWMgZGF0YSxcbiAgICAvLyBzaG91bGQgYWRkIGZvciB2ZXJ5IGNvbW1vbiBzdGF0ZSBzdHJpbmcgbWFudWFsbHkuXG4gICAgLy8gUGFsZXR0ZSBtb2RpZmllZCBmcm9tIGh0dHA6Ly9nb29nbGUuZ2l0aHViLmlvL3BhbGV0dGUuanMvIG1wbjY1LCBBcGFjaGUgMi4wXG4gICAgY29uc3QgcGFsZXR0ZSA9IFtcbiAgICAgIFwiZmYwMDI5XCIsXG4gICAgICBcIjY2YTYxZVwiLFxuICAgICAgXCIzNzdlYjhcIixcbiAgICAgIFwiOTg0ZWEzXCIsXG4gICAgICBcIjAwZDJkNVwiLFxuICAgICAgXCJmZjdmMDBcIixcbiAgICAgIFwiYWY4ZDAwXCIsXG4gICAgICBcIjdmODBjZFwiLFxuICAgICAgXCJiM2U5MDBcIixcbiAgICAgIFwiYzQyZTYwXCIsXG4gICAgICBcImE2NTYyOFwiLFxuICAgICAgXCJmNzgxYmZcIixcbiAgICAgIFwiOGRkM2M3XCIsXG4gICAgICBcImJlYmFkYVwiLFxuICAgICAgXCJmYjgwNzJcIixcbiAgICAgIFwiODBiMWQzXCIsXG4gICAgICBcImZkYjQ2MlwiLFxuICAgICAgXCJmY2NkZTVcIixcbiAgICAgIFwiYmM4MGJkXCIsXG4gICAgICBcImZmZWQ2ZlwiLFxuICAgICAgXCJjNGVhZmZcIixcbiAgICAgIFwiY2Y4YzAwXCIsXG4gICAgICBcIjFiOWU3N1wiLFxuICAgICAgXCJkOTVmMDJcIixcbiAgICAgIFwiZTcyOThhXCIsXG4gICAgICBcImU2YWIwMlwiLFxuICAgICAgXCJhNjc2MWRcIixcbiAgICAgIFwiMDA5N2ZmXCIsXG4gICAgICBcIjAwZDA2N1wiLFxuICAgICAgXCJmNDM2MDBcIixcbiAgICAgIFwiNGJhOTNiXCIsXG4gICAgICBcIjU3NzliYlwiLFxuICAgICAgXCI5MjdhY2NcIixcbiAgICAgIFwiOTdlZTNmXCIsXG4gICAgICBcImJmMzk0N1wiLFxuICAgICAgXCI5ZjViMDBcIixcbiAgICAgIFwiZjQ4NzU4XCIsXG4gICAgICBcIjhjYWVkNlwiLFxuICAgICAgXCJmMmI5NGZcIixcbiAgICAgIFwiZWZmMjZlXCIsXG4gICAgICBcImU0Mzg3MlwiLFxuICAgICAgXCJkOWIxMDBcIixcbiAgICAgIFwiOWQ3YTAwXCIsXG4gICAgICBcIjY5OGNmZlwiLFxuICAgICAgXCJkOWQ5ZDlcIixcbiAgICAgIFwiMDBkMjdlXCIsXG4gICAgICBcImQwNjgwMFwiLFxuICAgICAgXCIwMDlmODJcIixcbiAgICAgIFwiYzQ5MjAwXCIsXG4gICAgICBcImNiZThmZlwiLFxuICAgICAgXCJmZWNkZGZcIixcbiAgICAgIFwiYzI3ZWI2XCIsXG4gICAgICBcIjhjZDJjZVwiLFxuICAgICAgXCJjNGI4ZDlcIixcbiAgICAgIFwiZjg4M2IwXCIsXG4gICAgICBcImE0OTEwMFwiLFxuICAgICAgXCJmNDg4MDBcIixcbiAgICAgIFwiMjdkMGRmXCIsXG4gICAgICBcImEwNGE5YlwiLFxuICAgIF07XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JJbmRleChpZHgpIHtcbiAgICAgIC8vIFJldXNlIHRoZSBjb2xvciBpZiBpbmRleCB0b28gbGFyZ2UuXG4gICAgICByZXR1cm4gQ29sb3IoXCIjXCIgKyBwYWxldHRlW2lkeCAlIHBhbGV0dGUubGVuZ3RoXSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yRGljdCA9IHt9O1xuICAgIGxldCBjb2xvckluZGV4ID0gMDtcbiAgICBpZiAoc3RhcnRJbmRleCA+IDApIGNvbG9ySW5kZXggPSBzdGFydEluZGV4O1xuICAgIGlmIChzdGF0aWNDb2xvcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbG9ycykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjMSA9IHN0YXRpY0NvbG9yc1tjXTtcbiAgICAgICAgaWYgKGlzRmluaXRlKGMxKSkge1xuICAgICAgICAgIGNvbG9yRGljdFtjLnRvTG93ZXJDYXNlKCldID0gZ2V0Q29sb3JJbmRleChjMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBDb2xvcihzdGF0aWNDb2xvcnNbY10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGNvbG9yIGFzc2lnblxuICAgIGZ1bmN0aW9uIGdldENvbG9yKF9fLCBkYXRhKSB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgY29uc3QgbmFtZSA9IGRhdGFbM107XG4gICAgICBpZiAobmFtZSA9PT0gbnVsbCkgcmV0dXJuIENvbG9yKCkuaHNsKDAsIDQwLCAzOCk7XG4gICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gQ29sb3IoKS5oc2woMTIwLCA0MCwgMzgpO1xuICAgICAgY29uc3QgbmFtZTEgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gY29sb3JEaWN0W25hbWUxXTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBnZXRDb2xvckluZGV4KGNvbG9ySW5kZXgpO1xuICAgICAgICBjb2xvckluZGV4Kys7XG4gICAgICAgIGNvbG9yRGljdFtuYW1lMV0gPSByZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q29sb3I7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNoYXJ0LWJhc2VcIiwgSGFDaGFydEJhc2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vZW50aXR5L2hhLWNoYXJ0LWJhc2VcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydExpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jaGFydC1iYXNlXG4gICAgICAgIGlkPVwiY2hhcnRcIlxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIGlkZW50aWZpZXI9XCJbW2lkZW50aWZpZXJdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgID48L2hhLWNoYXJ0LWJhc2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgdW5pdDogU3RyaW5nLFxuICAgICAgaWRlbnRpZmllcjogU3RyaW5nLFxuXG4gICAgICBpc1NpbmdsZURldmljZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbmRUaW1lOiBPYmplY3QsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vblJlbmRlcmVkQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGlzU2luZ2xlRGV2aWNlKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfb25SZW5kZXJlZENoYW5nZWQocmVuZGVyZWQpIHtcbiAgICBpZiAocmVuZGVyZWQpIHRoaXMuYW5pbWF0ZUhlaWdodCgpO1xuICB9XG5cbiAgYW5pbWF0ZUhlaWdodCgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kLmNoYXJ0LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy51bml0O1xuICAgIGNvbnN0IGRldmljZVN0YXRlcyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIGxldCBlbmRUaW1lO1xuXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRldmljZVN0YXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG4gICAgfVxuXG4gICAgZW5kVGltZSA9XG4gICAgICB0aGlzLmVuZFRpbWUgfHxcbiAgICAgIC8vIEdldCB0aGUgaGlnaGVzdCBkYXRlIGZyb20gdGhlIGxhc3QgZGF0ZSBvZiBlYWNoIGRldmljZVxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZGV2aWNlU3RhdGVzLm1hcChcbiAgICAgICAgICAgIChkZXZTdHMpID0+XG4gICAgICAgICAgICAgIG5ldyBEYXRlKGRldlN0cy5zdGF0ZXNbZGV2U3RzLnN0YXRlcy5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIGlmIChlbmRUaW1lID4gbmV3IERhdGUoKSkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzIHx8IHt9O1xuICAgIGRldmljZVN0YXRlcy5mb3JFYWNoKChzdGF0ZXMpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IHN0YXRlcy5kb21haW47XG4gICAgICBjb25zdCBuYW1lID0gbmFtZXNbc3RhdGVzLmVudGl0eV9pZF0gfHwgc3RhdGVzLm5hbWU7XG4gICAgICAvLyBhcnJheSBjb250YWluaW5nIFt2YWx1ZTEsIHZhbHVlMiwgZXRjXVxuICAgICAgbGV0IHByZXZWYWx1ZXM7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIHB1c2hEYXRhKHRpbWVzdGFtcCwgZGF0YXZhbHVlcykge1xuICAgICAgICBpZiAoIWRhdGF2YWx1ZXMpIHJldHVybjtcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICAvLyBEcm9wIGRhdGFwb2ludHMgdGhhdCBhcmUgYWZ0ZXIgdGhlIHJlcXVlc3RlZCBlbmRUaW1lLiBUaGlzIGNvdWxkIGhhcHBlbiBpZlxuICAgICAgICAgIC8vIGVuZFRpbWUgaXMgXCJub3dcIiBhbmQgY2xpZW50IHRpbWUgaXMgbm90IGluIHN5bmMgd2l0aCBzZXJ2ZXIgdGltZS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgZC5kYXRhLnB1c2goeyB4OiB0aW1lc3RhbXAsIHk6IGRhdGF2YWx1ZXNbaV0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2VmFsdWVzID0gZGF0YXZhbHVlcztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkQ29sdW1uKG5hbWVZLCBzdGVwLCBmaWxsKSB7XG4gICAgICAgIGxldCBkYXRhRmlsbCA9IGZhbHNlO1xuICAgICAgICBsZXQgZGF0YVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICBkYXRhRmlsbCA9IFwib3JpZ2luXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICBkYXRhU3RlcCA9IFwiYmVmb3JlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogbmFtZVksXG4gICAgICAgICAgZmlsbDogZGF0YUZpbGwsXG4gICAgICAgICAgc3RlcHBlZExpbmU6IGRhdGFTdGVwLFxuICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIHVuaXRUZXh0OiB1bml0LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkb21haW4gPT09IFwidGhlcm1vc3RhdFwiIHx8XG4gICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcIndhdGVyX2hlYXRlclwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaGFzSHZhY0FjdGlvbiA9IHN0YXRlcy5zdGF0ZXMuc29tZShcbiAgICAgICAgICAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMgJiYgc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGlzSGVhdGluZyA9XG4gICAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiAmJiBoYXNIdmFjQWN0aW9uXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJoZWF0aW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJoZWF0XCI7XG4gICAgICAgIGNvbnN0IGlzQ29vbGluZyA9XG4gICAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiAmJiBoYXNIdmFjQWN0aW9uXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJjb29saW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJjb29sXCI7XG5cbiAgICAgICAgY29uc3QgaGFzSGVhdCA9IHN0YXRlcy5zdGF0ZXMuc29tZShpc0hlYXRpbmcpO1xuICAgICAgICBjb25zdCBoYXNDb29sID0gc3RhdGVzLnN0YXRlcy5zb21lKGlzQ29vbGluZyk7XG4gICAgICAgIC8vIFdlIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVybW9zdGF0cyB0aGF0IGhhdmUgYSB0YXJnZXQgdGVtcGVyYXR1cmVcbiAgICAgICAgLy8gcmFuZ2UgdmVyc3VzIG9uZXMgdGhhdCBoYXZlIGp1c3QgYSB0YXJnZXQgdGVtcGVyYXR1cmVcblxuICAgICAgICAvLyBVc2luZyBzdGVwIGNoYXJ0IGJ5IHN0ZXAtYmVmb3JlIHNvIG1hbnVhbGx5IGludGVycG9sYXRpb24gbm90IG5lZWRlZC5cbiAgICAgICAgY29uc3QgaGFzVGFyZ2V0UmFuZ2UgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoXG4gICAgICAgICAgKHN0YXRlKSA9PlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9PVxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd1xuICAgICAgICApO1xuXG4gICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmNhcmQuY2xpbWF0ZS5jdXJyZW50X3RlbXBlcmF0dXJlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICApfWAsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzSGVhdCkge1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5oZWF0aW5nXCIsIFwibmFtZVwiLCBuYW1lKX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRoZSBcImhlYXRpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5jb29saW5nXCIsIFwibmFtZVwiLCBuYW1lKX1gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRoZSBcImNvb2xpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlX21vZGVcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIFwibW9kZVwiLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuaGlnaFwiKVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfdGVtcGVyYXR1cmVfbW9kZVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgXCJtb2RlXCIsXG4gICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5sb3dcIilcbiAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENvbHVtbihcbiAgICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlX2VudGl0eVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZXMuc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgY3VyVGVtcCA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgY29uc3Qgc2VyaWVzID0gW2N1clRlbXBdO1xuICAgICAgICAgIGlmIChoYXNIZWF0KSB7XG4gICAgICAgICAgICBzZXJpZXMucHVzaChpc0hlYXRpbmcoc3RhdGUpID8gY3VyVGVtcCA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgICAgc2VyaWVzLnB1c2goaXNDb29saW5nKHN0YXRlKSA/IGN1clRlbXAgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc1RhcmdldFJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRIaWdoID0gc2FmZVBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldExvdyA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93KTtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKHRhcmdldEhpZ2gsIHRhcmdldExvdyk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpLCBzZXJpZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlKTtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpLCBzZXJpZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPbmx5IGRpc2FibGUgaW50ZXJwb2xhdGlvbiBmb3Igc2Vuc29yc1xuICAgICAgICBjb25zdCBpc1N0ZXAgPSBkb21haW4gPT09IFwic2Vuc29yXCI7XG4gICAgICAgIGFkZENvbHVtbihuYW1lLCBpc1N0ZXApO1xuXG4gICAgICAgIGxldCBsYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdERhdGUgPSBudWxsO1xuICAgICAgICBsZXQgbGFzdE51bGxEYXRlID0gbnVsbDtcblxuICAgICAgICAvLyBQcm9jZXNzIGNoYXJ0IGRhdGEuXG4gICAgICAgIC8vIFdoZW4gc3RhdGUgaXMgYHVua25vd25gLCBjYWxjdWxhdGUgdGhlIHZhbHVlIGFuZCBicmVhayB0aGUgbGluZS5cbiAgICAgICAgc3RhdGVzLnN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuc3RhdGUpO1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBsYXN0TnVsbERhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0TnVsbERhdGVUaW1lID0gbGFzdE51bGxEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REYXRlVGltZSA9IGxhc3REYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRtcFZhbHVlID1cbiAgICAgICAgICAgICAgKHZhbHVlIC0gbGFzdFZhbHVlKSAqXG4gICAgICAgICAgICAgICAgKChsYXN0TnVsbERhdGVUaW1lIC0gbGFzdERhdGVUaW1lKSAvXG4gICAgICAgICAgICAgICAgICAoZGF0ZVRpbWUgLSBsYXN0RGF0ZVRpbWUpKSArXG4gICAgICAgICAgICAgIGxhc3RWYWx1ZTtcbiAgICAgICAgICAgIHB1c2hEYXRhKGxhc3ROdWxsRGF0ZSwgW3RtcFZhbHVlXSk7XG4gICAgICAgICAgICBwdXNoRGF0YShuZXcgRGF0ZShsYXN0TnVsbERhdGVUaW1lICsgMSksIFtudWxsXSk7XG4gICAgICAgICAgICBwdXNoRGF0YShkYXRlLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIGxhc3REYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgbGFzdE51bGxEYXRlID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIGxhc3ROdWxsRGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHVzaERhdGEoZGF0ZSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICBsYXN0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdmFsdWUgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgbGFzdFZhbHVlICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPSBkYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhbiBlbnRyeSBmb3IgZmluYWwgdmFsdWVzXG4gICAgICBwdXNoRGF0YShlbmRUaW1lLCBwcmV2VmFsdWVzLCBmYWxzZSk7XG5cbiAgICAgIC8vIENvbmNhdCB0d28gYXJyYXlzXG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShkYXRhc2V0cywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtYXRUb29sdGlwVGl0bGUgPSAoaXRlbXMsIGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdLng7XG5cbiAgICAgIHJldHVybiBmb3JtYXREYXRlVGltZShkYXRlLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIHVuaXQ6IHVuaXQsXG4gICAgICBsZWdlbmQ6ICF0aGlzLmlzU2luZ2xlRGV2aWNlLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYWpvcjoge1xuICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlYWNoXCIsXG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICB0aXRsZTogZm9ybWF0VG9vbHRpcFRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZWFjaFwiLFxuICAgICAgICB9LFxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICB0ZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgaGl0UmFkaXVzOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICBmaWxsZXI6IHtcbiAgICAgICAgICAgIHByb3BhZ2F0ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXSxcbiAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnRPcHRpb25zO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcIiwgU3RhdGVIaXN0b3J5Q2hhcnRMaW5lKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBcIi4vZW50aXR5L2hhLWNoYXJ0LWJhc2VcIjtcblxuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3JlbmRlcmVkXSkge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jaGFydC1iYXNlIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jaGFydC1iYXNlXG4gICAgICAgIGRhdGE9XCJbW2NoYXJ0RGF0YV1dXCJcbiAgICAgICAgcmVuZGVyZWQ9XCJ7e3JlbmRlcmVkfX1cIlxuICAgICAgICBydGw9XCJ7e3J0bH19XCJcbiAgICAgID48L2hhLWNoYXJ0LWJhc2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgICBlbmRUaW1lOiBEYXRlLFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJkYXRhQ2hhbmdlZChkYXRhLCBlbmRUaW1lLCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCBzdGF0aWNDb2xvcnMgPSB7XG4gICAgICBvbjogMSxcbiAgICAgIG9mZjogMCxcbiAgICAgIHVuYXZhaWxhYmxlOiBcIiNhMGEwYTBcIixcbiAgICAgIHVua25vd246IFwiIzYwNjA2MFwiLFxuICAgICAgaWRsZTogMixcbiAgICB9O1xuICAgIGxldCBzdGF0ZUhpc3RvcnkgPSB0aGlzLmRhdGE7XG5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlSGlzdG9yeSkge1xuICAgICAgc3RhdGVIaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoXG4gICAgICBzdGF0ZUhpc3RvcnkucmVkdWNlKFxuICAgICAgICAobWluVGltZSwgc3RhdGVJbmZvKSA9PlxuICAgICAgICAgIE1hdGgubWluKG1pblRpbWUsIG5ldyBEYXRlKHN0YXRlSW5mby5kYXRhWzBdLmxhc3RfY2hhbmdlZCkpLFxuICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIGVuZCB0aW1lIGlzIE1hdGgubWF4KHN0YXJ0VGltZSwgbGFzdF9ldmVudClcbiAgICBsZXQgZW5kVGltZSA9XG4gICAgICB0aGlzLmVuZFRpbWUgfHxcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZUhpc3RvcnkucmVkdWNlKFxuICAgICAgICAgIChtYXhUaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgbWF4VGltZSxcbiAgICAgICAgICAgICAgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbc3RhdGVJbmZvLmRhdGEubGVuZ3RoIC0gMV0ubGFzdF9jaGFuZ2VkKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBzdGFydFRpbWVcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgIGlmIChlbmRUaW1lID4gbmV3IERhdGUoKSkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgY29uc3QgZGF0YXNldHMgPSBbXTtcbiAgICAvLyBzdGF0ZUhpc3RvcnkgaXMgYSBsaXN0IG9mIGxpc3RzIG9mIHNvcnRlZCBzdGF0ZSBvYmplY3RzXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzIHx8IHt9O1xuICAgIHN0YXRlSGlzdG9yeS5mb3JFYWNoKChzdGF0ZUluZm8pID0+IHtcbiAgICAgIGxldCBuZXdMYXN0Q2hhbmdlZDtcbiAgICAgIGxldCBwcmV2U3RhdGUgPSBudWxsO1xuICAgICAgbGV0IGxvY1N0YXRlID0gbnVsbDtcbiAgICAgIGxldCBwcmV2TGFzdENoYW5nZWQgPSBzdGFydFRpbWU7XG4gICAgICBjb25zdCBlbnRpdHlEaXNwbGF5ID0gbmFtZXNbc3RhdGVJbmZvLmVudGl0eV9pZF0gfHwgc3RhdGVJbmZvLm5hbWU7XG5cbiAgICAgIGNvbnN0IGRhdGFSb3cgPSBbXTtcbiAgICAgIHN0YXRlSW5mby5kYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICBjb25zdCB0aW1lU3RhbXAgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICBpZiAobmV3U3RhdGUgPT09IHVuZGVmaW5lZCB8fCBuZXdTdGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgIG5ld1N0YXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZVN0YW1wID4gZW5kVGltZSkge1xuICAgICAgICAgIC8vIERyb3AgZGF0YXBvaW50cyB0aGF0IGFyZSBhZnRlciB0aGUgcmVxdWVzdGVkIGVuZFRpbWUuIFRoaXMgY291bGQgaGFwcGVuIGlmXG4gICAgICAgICAgLy8gZW5kVGltZSBpcyAnbm93JyBhbmQgY2xpZW50IHRpbWUgaXMgbm90IGluIHN5bmMgd2l0aCBzZXJ2ZXIgdGltZS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCAmJiBuZXdTdGF0ZSAhPT0gcHJldlN0YXRlKSB7XG4gICAgICAgICAgbmV3TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuXG4gICAgICAgICAgZGF0YVJvdy5wdXNoKFtwcmV2TGFzdENoYW5nZWQsIG5ld0xhc3RDaGFuZ2VkLCBsb2NTdGF0ZSwgcHJldlN0YXRlXSk7XG5cbiAgICAgICAgICBwcmV2U3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICBsb2NTdGF0ZSA9IHN0YXRlLnN0YXRlX2xvY2FsaXplO1xuICAgICAgICAgIHByZXZMYXN0Q2hhbmdlZCA9IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZTdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2U3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YVJvdy5wdXNoKFtwcmV2TGFzdENoYW5nZWQsIGVuZFRpbWUsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcbiAgICAgIH1cbiAgICAgIGRhdGFzZXRzLnB1c2goeyBkYXRhOiBkYXRhUm93IH0pO1xuICAgICAgbGFiZWxzLnB1c2goZW50aXR5RGlzcGxheSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb3JtYXRUb29sdGlwTGFiZWwgPSAoaXRlbSwgZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gZGF0YS5kYXRhc2V0c1tpdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtpdGVtLmluZGV4XTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSBmb3JtYXREYXRlVGltZSh2YWx1ZXNbMF0sIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gICAgICBjb25zdCBlbmQgPSBmb3JtYXREYXRlVGltZSh2YWx1ZXNbMV0sIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gICAgICBjb25zdCBzdGF0ZSA9IHZhbHVlc1syXTtcblxuICAgICAgcmV0dXJuIFtzdGF0ZSwgc3RhcnQsIGVuZF07XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6IFwidGltZWxpbmVcIixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGxhYmVsOiBmb3JtYXRUb29sdGlwTGFiZWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYWpvcjoge1xuICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFmdGVyU2V0RGltZW5zaW9uczogKHlheGUpID0+IHtcbiAgICAgICAgICAgICAgICB5YXhlLm1heFdpZHRoID0geWF4ZS5jaGFydC53aWR0aCAqIDAuMTg7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLl9jb21wdXRlUlRMID8gXCJyaWdodFwiIDogXCJsZWZ0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IGRhdGFzZXRzLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBzdGF0aWNDb2xvcnM6IHN0YXRpY0NvbG9ycyxcbiAgICAgICAgc3RhdGljQ29sb3JJbmRleDogMyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0T3B0aW9ucztcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcInN0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmVcIixcbiAgU3RhdGVIaXN0b3J5Q2hhcnRUaW1lbGluZVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcIjtcbmltcG9ydCBcIi4vc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0cyBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qIGhlaWdodCBvZiBzaW5nbGUgdGltZWxpbmUgY2hhcnQgPSA1OHB4ICovXG4gICAgICAgICAgbWluLWhlaWdodDogNThweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0xvYWRpbmcoaXNMb2FkaW5nRGF0YSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5oaXN0b3J5X2NoYXJ0cy5sb2FkaW5nX2hpc3RvcnknKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgY2xhc3M9XCJpbmZvXCJcbiAgICAgICAgaWY9XCJbW19jb21wdXRlSXNFbXB0eShpc0xvYWRpbmdEYXRhLCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5oaXN0b3J5X2NoYXJ0cy5ub19oaXN0b3J5X2ZvdW5kJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1toaXN0b3J5RGF0YS50aW1lbGluZS5sZW5ndGhdXVwiPlxuICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0YT1cIltbaGlzdG9yeURhdGEudGltZWxpbmVdXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbm8tc2luZ2xlPVwiW1tub1NpbmdsZV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2hpc3RvcnlEYXRhLmxpbmVdXVwiPlxuICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICB1bml0PVwiW1tpdGVtLnVuaXRdXVwiXG4gICAgICAgICAgZGF0YT1cIltbaXRlbS5kYXRhXV1cIlxuICAgICAgICAgIGlkZW50aWZpZXI9XCJbW2l0ZW0uaWRlbnRpZmllcl1dXCJcbiAgICAgICAgICBpcy1zaW5nbGUtZGV2aWNlPVwiW1tfY29tcHV0ZUlzU2luZ2xlTGluZUNoYXJ0KGl0ZW0uZGF0YSwgbm9TaW5nbGUpXV1cIlxuICAgICAgICAgIGVuZC10aW1lPVwiW1tfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdywgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgICAgIG5hbWVzPVwiW1tuYW1lc11dXCJcbiAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydC1saW5lPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBoaXN0b3J5RGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG5cbiAgICAgIGlzTG9hZGluZ0RhdGE6IEJvb2xlYW4sXG5cbiAgICAgIGVuZFRpbWU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgdXBUb05vdzogQm9vbGVhbixcbiAgICAgIG5vU2luZ2xlOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZUlzU2luZ2xlTGluZUNoYXJ0KGRhdGEsIG5vU2luZ2xlKSB7XG4gICAgcmV0dXJuICFub1NpbmdsZSAmJiBkYXRhICYmIGRhdGEubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKSB7XG4gICAgY29uc3QgaGlzdG9yeURhdGFFbXB0eSA9XG4gICAgICAhaGlzdG9yeURhdGEgfHxcbiAgICAgICFoaXN0b3J5RGF0YS50aW1lbGluZSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLmxpbmUgfHxcbiAgICAgIChoaXN0b3J5RGF0YS50aW1lbGluZS5sZW5ndGggPT09IDAgJiYgaGlzdG9yeURhdGEubGluZS5sZW5ndGggPT09IDApO1xuICAgIHJldHVybiAhaXNMb2FkaW5nRGF0YSAmJiBoaXN0b3J5RGF0YUVtcHR5O1xuICB9XG5cbiAgX2NvbXB1dGVJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIGlzTG9hZGluZyAmJiAhdGhpcy5oaXN0b3J5RGF0YTtcbiAgfVxuXG4gIF9jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93KSB7XG4gICAgLy8gV2UgZG9uJ3QgcmVhbGx5IGNhcmUgYWJvdXQgdGhlIHZhbHVlIG9mIGhpc3RvcnlEYXRhLCBidXQgaWYgaXQgY2hhbmdlIHdlIHdhbnQgdG8gdXBkYXRlXG4gICAgLy8gZW5kVGltZS5cbiAgICByZXR1cm4gdXBUb05vdyA/IG5ldyBEYXRlKCkgOiBlbmRUaW1lO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiLCBTdGF0ZUhpc3RvcnlDaGFydHMpO1xuIiwiaW1wb3J0IHtcbiAgY29tcHV0ZUhpc3RvcnksXG4gIGZldGNoUmVjZW50LFxuICBIaXN0b3J5UmVzdWx0LFxuICBUaW1lbGluZUVudGl0eSxcbiAgTGluZUNoYXJ0VW5pdCxcbn0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmludGVyZmFjZSBDYWNoZUNvbmZpZyB7XG4gIHJlZnJlc2g6IG51bWJlcjtcbiAgY2FjaGVLZXk6IHN0cmluZztcbiAgaG91cnNUb1Nob3c6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhY2hlZFJlc3VsdHMge1xuICBwcm9tOiBQcm9taXNlPEhpc3RvcnlSZXN1bHQ+O1xuICBzdGFydFRpbWU6IERhdGU7XG4gIGVuZFRpbWU6IERhdGU7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGRhdGE6IEhpc3RvcnlSZXN1bHQ7XG59XG5cbi8vIFRoaXMgaXMgYSBkaWZmZXJlbnQgaW50ZXJmYWNlLCBhIGRpZmZlcmVudCBjYWNoZSA6KFxuaW50ZXJmYWNlIFJlY2VudENhY2hlUmVzdWx0cyB7XG4gIGNyZWF0ZWQ6IG51bWJlcjtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgZGF0YTogUHJvbWlzZTxIaXN0b3J5UmVzdWx0Pjtcbn1cblxuY29uc3QgUkVDRU5UX1RIUkVTSE9MRCA9IDYwMDAwOyAvLyAxIG1pbnV0ZVxuY29uc3QgUkVDRU5UX0NBQ0hFOiB7IFtjYWNoZUtleTogc3RyaW5nXTogUmVjZW50Q2FjaGVSZXN1bHRzIH0gPSB7fTtcbmNvbnN0IHN0YXRlSGlzdG9yeUNhY2hlOiB7IFtjYWNoZUtleTogc3RyaW5nXTogQ2FjaGVkUmVzdWx0cyB9ID0ge307XG5cbi8vIENhY2hlZCB0eXBlIDEgdW5jdGlvbi4gV2l0aG91dCBjYWNoZSBjb25maWcuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBjYWNoZUtleSA9IGVudGl0eUlkO1xuICBjb25zdCBjYWNoZSA9IFJFQ0VOVF9DQUNIRVtjYWNoZUtleV07XG5cbiAgaWYgKFxuICAgIGNhY2hlICYmXG4gICAgRGF0ZS5ub3coKSAtIGNhY2hlLmNyZWF0ZWQgPCBSRUNFTlRfVEhSRVNIT0xEICYmXG4gICAgY2FjaGUubGFuZ3VhZ2UgPT09IGxhbmd1YWdlXG4gICkge1xuICAgIHJldHVybiBjYWNoZS5kYXRhO1xuICB9XG5cbiAgY29uc3QgcHJvbSA9IGZldGNoUmVjZW50KGhhc3MsIGVudGl0eUlkLCBzdGFydFRpbWUsIGVuZFRpbWUpLnRoZW4oXG4gICAgKHN0YXRlSGlzdG9yeSkgPT4gY29tcHV0ZUhpc3RvcnkoaGFzcywgc3RhdGVIaXN0b3J5LCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpLFxuICAgIChlcnIpID0+IHtcbiAgICAgIGRlbGV0ZSBSRUNFTlRfQ0FDSEVbZW50aXR5SWRdO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgKTtcblxuICBSRUNFTlRfQ0FDSEVbY2FjaGVLZXldID0ge1xuICAgIGNyZWF0ZWQ6IERhdGUubm93KCksXG4gICAgbGFuZ3VhZ2UsXG4gICAgZGF0YTogcHJvbSxcbiAgfTtcbiAgcmV0dXJuIHByb207XG59O1xuXG4vLyBDYWNoZSB0eXBlIDIgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gZ2V0RW1wdHlDYWNoZShcbiAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlXG4pOiBDYWNoZWRSZXN1bHRzIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9tOiBQcm9taXNlLnJlc29sdmUoeyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH0pLFxuICAgIGxhbmd1YWdlLFxuICAgIHN0YXJ0VGltZSxcbiAgICBlbmRUaW1lLFxuICAgIGRhdGE6IHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50V2l0aENhY2hlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBjYWNoZUNvbmZpZzogQ2FjaGVDb25maWcsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBjYWNoZUtleSA9IGNhY2hlQ29uZmlnLmNhY2hlS2V5O1xuICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoZW5kVGltZSk7XG4gIHN0YXJ0VGltZS5zZXRIb3VycyhzdGFydFRpbWUuZ2V0SG91cnMoKSAtIGNhY2hlQ29uZmlnLmhvdXJzVG9TaG93KTtcbiAgbGV0IHRvRmV0Y2hTdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gIGxldCBhcHBlbmRpbmdUb0NhY2hlID0gZmFsc2U7XG5cbiAgbGV0IGNhY2hlID0gc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldO1xuICBpZiAoXG4gICAgY2FjaGUgJiZcbiAgICB0b0ZldGNoU3RhcnRUaW1lID49IGNhY2hlLnN0YXJ0VGltZSAmJlxuICAgIHRvRmV0Y2hTdGFydFRpbWUgPD0gY2FjaGUuZW5kVGltZSAmJlxuICAgIGNhY2hlLmxhbmd1YWdlID09PSBsYW5ndWFnZVxuICApIHtcbiAgICB0b0ZldGNoU3RhcnRUaW1lID0gY2FjaGUuZW5kVGltZTtcbiAgICBhcHBlbmRpbmdUb0NhY2hlID0gdHJ1ZTtcbiAgICAvLyBUaGlzIHByZXR0eSBtdWNoIG5ldmVyIGhhcHBlbnMgYXMgZW5kVGltZSBpcyB1c3VhbGx5IHNldCB0byBub3dcbiAgICBpZiAoZW5kVGltZSA8PSBjYWNoZS5lbmRUaW1lKSB7XG4gICAgICByZXR1cm4gY2FjaGUucHJvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUgPSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV0gPSBnZXRFbXB0eUNhY2hlKFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBzdGFydFRpbWUsXG4gICAgICBlbmRUaW1lXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGN1ckNhY2hlUHJvbSA9IGNhY2hlLnByb207XG5cbiAgY29uc3QgZ2VuUHJvbSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgZmV0Y2hlZEhpc3Rvcnk6IEhhc3NFbnRpdHlbXVtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGN1ckNhY2hlUHJvbSxcbiAgICAgICAgZmV0Y2hSZWNlbnQoXG4gICAgICAgICAgaGFzcyxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICB0b0ZldGNoU3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWUsXG4gICAgICAgICAgYXBwZW5kaW5nVG9DYWNoZVxuICAgICAgICApLFxuICAgICAgXSk7XG4gICAgICBmZXRjaGVkSGlzdG9yeSA9IHJlc3VsdHNbMV07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZWxldGUgc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZUhpc3RvcnkgPSBjb21wdXRlSGlzdG9yeShcbiAgICAgIGhhc3MsXG4gICAgICBmZXRjaGVkSGlzdG9yeSxcbiAgICAgIGxvY2FsaXplLFxuICAgICAgbGFuZ3VhZ2VcbiAgICApO1xuICAgIGlmIChhcHBlbmRpbmdUb0NhY2hlKSB7XG4gICAgICBtZXJnZUxpbmUoc3RhdGVIaXN0b3J5LmxpbmUsIGNhY2hlLmRhdGEubGluZSk7XG4gICAgICBtZXJnZVRpbWVsaW5lKHN0YXRlSGlzdG9yeS50aW1lbGluZSwgY2FjaGUuZGF0YS50aW1lbGluZSk7XG4gICAgICBwcnVuZVN0YXJ0VGltZShzdGFydFRpbWUsIGNhY2hlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5kYXRhID0gc3RhdGVIaXN0b3J5O1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGUuZGF0YTtcbiAgfTtcblxuICBjYWNoZS5wcm9tID0gZ2VuUHJvbSgpO1xuICBjYWNoZS5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gIGNhY2hlLmVuZFRpbWUgPSBlbmRUaW1lO1xuICByZXR1cm4gY2FjaGUucHJvbTtcbn07XG5cbmNvbnN0IG1lcmdlTGluZSA9IChcbiAgaGlzdG9yeUxpbmVzOiBMaW5lQ2hhcnRVbml0W10sXG4gIGNhY2hlTGluZXM6IExpbmVDaGFydFVuaXRbXVxuKSA9PiB7XG4gIGhpc3RvcnlMaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IGxpbmUudW5pdDtcbiAgICBjb25zdCBvbGRMaW5lID0gY2FjaGVMaW5lcy5maW5kKChjYWNoZUxpbmUpID0+IGNhY2hlTGluZS51bml0ID09PSB1bml0KTtcbiAgICBpZiAob2xkTGluZSkge1xuICAgICAgbGluZS5kYXRhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRFbnRpdHkgPSBvbGRMaW5lLmRhdGEuZmluZChcbiAgICAgICAgICAoY2FjaGVFbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQgPT09IGNhY2hlRW50aXR5LmVudGl0eV9pZFxuICAgICAgICApO1xuICAgICAgICBpZiAob2xkRW50aXR5KSB7XG4gICAgICAgICAgb2xkRW50aXR5LnN0YXRlcyA9IG9sZEVudGl0eS5zdGF0ZXMuY29uY2F0KGVudGl0eS5zdGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmUuZGF0YS5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZUxpbmVzLnB1c2gobGluZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1lcmdlVGltZWxpbmUgPSAoXG4gIGhpc3RvcnlUaW1lbGluZXM6IFRpbWVsaW5lRW50aXR5W10sXG4gIGNhY2hlVGltZWxpbmVzOiBUaW1lbGluZUVudGl0eVtdXG4pID0+IHtcbiAgaGlzdG9yeVRpbWVsaW5lcy5mb3JFYWNoKCh0aW1lbGluZSkgPT4ge1xuICAgIGNvbnN0IG9sZFRpbWVsaW5lID0gY2FjaGVUaW1lbGluZXMuZmluZChcbiAgICAgIChjYWNoZVRpbWVsaW5lKSA9PiBjYWNoZVRpbWVsaW5lLmVudGl0eV9pZCA9PT0gdGltZWxpbmUuZW50aXR5X2lkXG4gICAgKTtcbiAgICBpZiAob2xkVGltZWxpbmUpIHtcbiAgICAgIG9sZFRpbWVsaW5lLmRhdGEgPSBvbGRUaW1lbGluZS5kYXRhLmNvbmNhdCh0aW1lbGluZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVUaW1lbGluZXMucHVzaCh0aW1lbGluZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHBydW5lQXJyYXkgPSAob3JpZ2luYWxTdGFydFRpbWU6IERhdGUsIGFycikgPT4ge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgY29uc3QgY2hhbmdlZEFmdGVyU3RhcnRUaW1lID0gYXJyLmZpbmRJbmRleChcbiAgICAoc3RhdGUpID0+IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCkgPiBvcmlnaW5hbFN0YXJ0VGltZVxuICApO1xuICBpZiAoY2hhbmdlZEFmdGVyU3RhcnRUaW1lID09PSAwKSB7XG4gICAgLy8gSWYgYWxsIGNoYW5nZXMgaGFwcGVuZWQgYWZ0ZXIgb3JpZ2luYWxTdGFydFRpbWUgdGhlbiB3ZSBhcmUgZG9uZS5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLy8gSWYgYWxsIGNoYW5nZXMgaGFwcGVuZWQgYXQgb3IgYmVmb3JlIG9yaWdpbmFsU3RhcnRUaW1lLiBVc2UgbGFzdCBpbmRleC5cbiAgY29uc3QgdXBkYXRlSW5kZXggPVxuICAgIGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9PT0gLTEgPyBhcnIubGVuZ3RoIC0gMSA6IGNoYW5nZWRBZnRlclN0YXJ0VGltZSAtIDE7XG4gIGFyclt1cGRhdGVJbmRleF0ubGFzdF9jaGFuZ2VkID0gb3JpZ2luYWxTdGFydFRpbWU7XG4gIHJldHVybiBhcnIuc2xpY2UodXBkYXRlSW5kZXgpO1xufTtcblxuY29uc3QgcHJ1bmVTdGFydFRpbWUgPSAob3JpZ2luYWxTdGFydFRpbWU6IERhdGUsIGNhY2hlRGF0YTogSGlzdG9yeVJlc3VsdCkgPT4ge1xuICBjYWNoZURhdGEubGluZS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgbGluZS5kYXRhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgZW50aXR5LnN0YXRlcyA9IHBydW5lQXJyYXkob3JpZ2luYWxTdGFydFRpbWUsIGVudGl0eS5zdGF0ZXMpO1xuICAgIH0pO1xuICB9KTtcblxuICBjYWNoZURhdGEudGltZWxpbmUuZm9yRWFjaCgodGltZWxpbmUpID0+IHtcbiAgICB0aW1lbGluZS5kYXRhID0gcHJ1bmVBcnJheShvcmlnaW5hbFN0YXJ0VGltZSwgdGltZWxpbmUuZGF0YSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlSGlzdG9yeSwgZmV0Y2hEYXRlIH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuaW1wb3J0IHsgZ2V0UmVjZW50LCBnZXRSZWNlbnRXaXRoQ2FjaGUgfSBmcm9tIFwiLi9jYWNoZWQtaGlzdG9yeVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU3RhdGVIaXN0b3J5RGF0YSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlclR5cGU6IFN0cmluZyxcblxuICAgICAgY2FjaGVDb25maWc6IE9iamVjdCxcblxuICAgICAgc3RhcnRUaW1lOiBEYXRlLFxuICAgICAgZW5kVGltZTogRGF0ZSxcblxuICAgICAgZW50aXR5SWQ6IFN0cmluZyxcblxuICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiZmlsdGVyQ2hhbmdlZERlYm91bmNlcihmaWx0ZXJUeXBlLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lLCBjYWNoZUNvbmZpZywgbG9jYWxpemUpXCIsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgdGhpcy5lbnRpdHlJZCxcbiAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZyxcbiAgICAgIHRoaXMubG9jYWxpemVcbiAgICApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBoYXNzQ2hhbmdlZChuZXdIYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFvbGRIYXNzICYmICF0aGlzLl9tYWRlRmlyc3RDYWxsKSB7XG4gICAgICB0aGlzLmZpbHRlckNoYW5nZWREZWJvdW5jZXIoXG4gICAgICAgIHRoaXMuZmlsdGVyVHlwZSxcbiAgICAgICAgdGhpcy5lbnRpdHlJZCxcbiAgICAgICAgdGhpcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5jYWNoZUNvbmZpZyxcbiAgICAgICAgdGhpcy5sb2NhbGl6ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkRGVib3VuY2VyKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9kZWJvdW5jZUZpbHRlckNoYW5nZWQgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZUZpbHRlckNoYW5nZWQsXG4gICAgICB0aW1lT3V0LmFmdGVyKDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckNoYW5nZWQoLi4uYXJncyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckNoYW5nZWQoXG4gICAgZmlsdGVyVHlwZSxcbiAgICBlbnRpdHlJZCxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBjYWNoZUNvbmZpZyxcbiAgICBsb2NhbGl6ZVxuICApIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVDb25maWcgJiYgIWNhY2hlQ29uZmlnLmNhY2hlS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbG9jYWxpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFkZUZpcnN0Q2FsbCA9IHRydWU7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmhhc3MubGFuZ3VhZ2U7XG4gICAgbGV0IGRhdGE7XG5cbiAgICBpZiAoZmlsdGVyVHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgIGlmICghc3RhcnRUaW1lIHx8ICFlbmRUaW1lKSByZXR1cm47XG5cbiAgICAgIGRhdGEgPSBmZXRjaERhdGUodGhpcy5oYXNzLCBzdGFydFRpbWUsIGVuZFRpbWUpLnRoZW4oKGRhdGVIaXN0b3J5KSA9PlxuICAgICAgICBjb21wdXRlSGlzdG9yeSh0aGlzLmhhc3MsIGRhdGVIaXN0b3J5LCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyVHlwZSA9PT0gXCJyZWNlbnQtZW50aXR5XCIpIHtcbiAgICAgIGlmICghZW50aXR5SWQpIHJldHVybjtcbiAgICAgIGlmIChjYWNoZUNvbmZpZykge1xuICAgICAgICBkYXRhID0gdGhpcy5nZXRSZWNlbnRXaXRoQ2FjaGVSZWZyZXNoKFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gZ2V0UmVjZW50KFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGRhdGEudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICB0aGlzLl9zZXREYXRhKHN0YXRlSGlzdG9yeSk7XG4gICAgICB0aGlzLl9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChlbnRpdHlJZCwgY2FjaGVDb25maWcsIGxvY2FsaXplLCBsYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY2FjaGVDb25maWcucmVmcmVzaCkge1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGdldFJlY2VudFdpdGhDYWNoZShcbiAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgY2FjaGVDb25maWcsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKS50aGVuKChzdGF0ZUhpc3RvcnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXREYXRhKHsgLi4uc3RhdGVIaXN0b3J5IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGNhY2hlQ29uZmlnLnJlZnJlc2ggKiAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlY2VudFdpdGhDYWNoZShcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIGVudGl0eUlkLFxuICAgICAgY2FjaGVDb25maWcsXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGxhbmd1YWdlXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCIsIEhhU3RhdGVIaXN0b3J5RGF0YSk7XG4iLCJpbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEaXNwbGF5IH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5XCI7XG5cbmNvbnN0IERPTUFJTlNfVVNFX0xBU1RfVVBEQVRFRCA9IFtcImNsaW1hdGVcIiwgXCJ3YXRlcl9oZWF0ZXJcIl07XG5jb25zdCBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUCA9IFtcbiAgXCJ0ZW1wZXJhdHVyZVwiLFxuICBcImN1cnJlbnRfdGVtcGVyYXR1cmVcIixcbiAgXCJ0YXJnZXRfdGVtcF9sb3dcIixcbiAgXCJ0YXJnZXRfdGVtcF9oaWdoXCIsXG4gIFwiaHZhY19hY3Rpb25cIixcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0U3RhdGUge1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0RW50aXR5IHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHN0YXRlczogTGluZUNoYXJ0U3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRVbml0IHtcbiAgdW5pdDogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIGRhdGE6IExpbmVDaGFydEVudGl0eVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lU3RhdGUge1xuICBzdGF0ZV9sb2NhbGl6ZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZUVudGl0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIGRhdGE6IFRpbWVsaW5lU3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5UmVzdWx0IHtcbiAgbGluZTogTGluZUNoYXJ0VW5pdFtdO1xuICB0aW1lbGluZTogVGltZWxpbmVFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUmVjZW50ID0gKFxuICBoYXNzLFxuICBlbnRpdHlJZCxcbiAgc3RhcnRUaW1lLFxuICBlbmRUaW1lLFxuICBza2lwSW5pdGlhbFN0YXRlID0gZmFsc2Vcbik6IFByb21pc2U8SGFzc0VudGl0eVtdW10+ID0+IHtcbiAgbGV0IHVybCA9IFwiaGlzdG9yeS9wZXJpb2RcIjtcbiAgaWYgKHN0YXJ0VGltZSkge1xuICAgIHVybCArPSBcIi9cIiArIHN0YXJ0VGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIHVybCArPSBcIj9maWx0ZXJfZW50aXR5X2lkPVwiICsgZW50aXR5SWQ7XG4gIGlmIChlbmRUaW1lKSB7XG4gICAgdXJsICs9IFwiJmVuZF90aW1lPVwiICsgZW5kVGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIGlmIChza2lwSW5pdGlhbFN0YXRlKSB7XG4gICAgdXJsICs9IFwiJnNraXBfaW5pdGlhbF9zdGF0ZVwiO1xuICB9XG5cbiAgcmV0dXJuIGhhc3MuY2FsbEFwaShcIkdFVFwiLCB1cmwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGF0ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlXG4pOiBQcm9taXNlPEhhc3NFbnRpdHlbXVtdPiA9PiB7XG4gIHJldHVybiBoYXNzLmNhbGxBcGkoXG4gICAgXCJHRVRcIixcbiAgICBgaGlzdG9yeS9wZXJpb2QvJHtzdGFydFRpbWUudG9JU09TdHJpbmcoKX0/ZW5kX3RpbWU9JHtlbmRUaW1lLnRvSVNPU3RyaW5nKCl9YFxuICApO1xufTtcblxuY29uc3QgZXF1YWxTdGF0ZSA9IChvYmoxOiBMaW5lQ2hhcnRTdGF0ZSwgb2JqMjogTGluZUNoYXJ0U3RhdGUpID0+XG4gIG9iajEuc3RhdGUgPT09IG9iajIuc3RhdGUgJiZcbiAgLy8gVGhleSBlaXRoZXIgYm90aCBoYXZlIGFuIGF0dHJpYnV0ZXMgb2JqZWN0IG9yIG5vdFxuICAoIW9iajEuYXR0cmlidXRlcyB8fFxuICAgIExJTkVfQVRUUklCVVRFU19UT19LRUVQLmV2ZXJ5KFxuICAgICAgKGF0dHIpID0+IG9iajEuYXR0cmlidXRlcyFbYXR0cl0gPT09IG9iajIuYXR0cmlidXRlcyFbYXR0cl1cbiAgICApKTtcblxuY29uc3QgcHJvY2Vzc1RpbWVsaW5lRW50aXR5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBzdGF0ZXM6IEhhc3NFbnRpdHlbXVxuKTogVGltZWxpbmVFbnRpdHkgPT4ge1xuICBjb25zdCBkYXRhOiBUaW1lbGluZVN0YXRlW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDAgJiYgc3RhdGUuc3RhdGUgPT09IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5zdGF0ZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIHN0YXRlX2xvY2FsaXplOiBjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZSwgbGFuZ3VhZ2UpLFxuICAgICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X2NoYW5nZWQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVzWzBdKSxcbiAgICBlbnRpdHlfaWQ6IHN0YXRlc1swXS5lbnRpdHlfaWQsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2Nlc3NMaW5lQ2hhcnRFbnRpdGllcyA9IChcbiAgdW5pdCxcbiAgZW50aXRpZXM6IEhhc3NFbnRpdHlbXVtdXG4pOiBMaW5lQ2hhcnRVbml0ID0+IHtcbiAgY29uc3QgZGF0YTogTGluZUNoYXJ0RW50aXR5W10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHN0YXRlcyBvZiBlbnRpdGllcykge1xuICAgIGNvbnN0IGxhc3Q6IEhhc3NFbnRpdHkgPSBzdGF0ZXNbc3RhdGVzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihsYXN0KTtcbiAgICBjb25zdCBwcm9jZXNzZWRTdGF0ZXM6IExpbmVDaGFydFN0YXRlW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgICBsZXQgcHJvY2Vzc2VkU3RhdGU6IExpbmVDaGFydFN0YXRlO1xuXG4gICAgICBpZiAoRE9NQUlOU19VU0VfTEFTVF9VUERBVEVELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxuICAgICAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGUubGFzdF91cGRhdGVkLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUCkge1xuICAgICAgICAgIGlmIChhdHRyIGluIHN0YXRlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLmF0dHJpYnV0ZXMhW2F0dHJdID0gc3RhdGUuYXR0cmlidXRlc1thdHRyXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NlZFN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgZXF1YWxTdGF0ZShcbiAgICAgICAgICBwcm9jZXNzZWRTdGF0ZSxcbiAgICAgICAgICBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkgJiZcbiAgICAgICAgZXF1YWxTdGF0ZShwcm9jZXNzZWRTdGF0ZSwgcHJvY2Vzc2VkU3RhdGVzW3Byb2Nlc3NlZFN0YXRlcy5sZW5ndGggLSAyXSlcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzc2VkU3RhdGVzLnB1c2gocHJvY2Vzc2VkU3RhdGUpO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBkb21haW4sXG4gICAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKGxhc3QpLFxuICAgICAgZW50aXR5X2lkOiBsYXN0LmVudGl0eV9pZCxcbiAgICAgIHN0YXRlczogcHJvY2Vzc2VkU3RhdGVzLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1bml0LFxuICAgIGlkZW50aWZpZXI6IGVudGl0aWVzLm1hcCgoc3RhdGVzKSA9PiBzdGF0ZXNbMF0uZW50aXR5X2lkKS5qb2luKFwiXCIpLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUhpc3RvcnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlSGlzdG9yeTogSGFzc0VudGl0eVtdW10sXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IEhpc3RvcnlSZXN1bHQgPT4ge1xuICBjb25zdCBsaW5lQ2hhcnREZXZpY2VzOiB7IFt1bml0OiBzdHJpbmddOiBIYXNzRW50aXR5W11bXSB9ID0ge307XG4gIGNvbnN0IHRpbWVsaW5lRGV2aWNlczogVGltZWxpbmVFbnRpdHlbXSA9IFtdO1xuICBpZiAoIXN0YXRlSGlzdG9yeSkge1xuICAgIHJldHVybiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfTtcbiAgfVxuXG4gIHN0YXRlSGlzdG9yeS5mb3JFYWNoKChzdGF0ZUluZm8pID0+IHtcbiAgICBpZiAoc3RhdGVJbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlV2l0aFVuaXQgPSBzdGF0ZUluZm8uZmluZChcbiAgICAgIChzdGF0ZSkgPT4gXCJ1bml0X29mX21lYXN1cmVtZW50XCIgaW4gc3RhdGUuYXR0cmlidXRlc1xuICAgICk7XG5cbiAgICBsZXQgdW5pdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHN0YXRlV2l0aFVuaXQpIHtcbiAgICAgIHVuaXQgPSBzdGF0ZVdpdGhVbml0LmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZUluZm9bMF0pID09PSBcImNsaW1hdGVcIikge1xuICAgICAgdW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlO1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwid2F0ZXJfaGVhdGVyXCIpIHtcbiAgICAgIHVuaXQgPSBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9XG5cbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRpbWVsaW5lRGV2aWNlcy5wdXNoKFxuICAgICAgICBwcm9jZXNzVGltZWxpbmVFbnRpdHkobG9jYWxpemUsIGxhbmd1YWdlLCBzdGF0ZUluZm8pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodW5pdCBpbiBsaW5lQ2hhcnREZXZpY2VzKSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdLnB1c2goc3RhdGVJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSA9IFtzdGF0ZUluZm9dO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pdFN0YXRlcyA9IE9iamVjdC5rZXlzKGxpbmVDaGFydERldmljZXMpLm1hcCgodW5pdCkgPT5cbiAgICBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXModW5pdCwgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSlcbiAgKTtcblxuICByZXR1cm4geyBsaW5lOiB1bml0U3RhdGVzLCB0aW1lbGluZTogdGltZWxpbmVEZXZpY2VzIH07XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXhCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9VQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUF2QkE7QUEyQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM21CQTtBQUNBO0FBMm1CQTs7Ozs7Ozs7Ozs7O0FDN25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFLQTtBQUlBO0FBSUE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFGQTtBQVNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFaQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBNUNBO0FBa0RBO0FBQ0E7QUFDQTtBQUZBO0FBdERBO0FBMkRBO0FBQ0E7QUFDQTtBQXRYQTtBQUNBO0FBc1hBOzs7Ozs7Ozs7Ozs7QUNoWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBakJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVhBO0FBTkE7QUEwQkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWhDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlNQTtBQUNBO0FBOE1BOzs7Ozs7Ozs7Ozs7QUMxTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyR0E7QUFDQTtBQXFHQTs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQXJLQTtBQUNBO0FBcUtBOzs7Ozs7Ozs7Ozs7QUNsTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBNENBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDak9BO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9