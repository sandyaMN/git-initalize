(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["jimpower"],{

/***/ "./demo/src/configs/jimpower/entities.ts":
/*!***********************************************!*\
  !*** ./demo/src/configs/jimpower/entities.ts ***!
  \***********************************************/
/*! exports provided: demoEntitiesJimpower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoEntitiesJimpower", function() { return demoEntitiesJimpower; });
/* harmony import */ var _src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/fake_data/entity */ "./src/fake_data/entity.ts");

var demoEntitiesJimpower = function demoEntitiesJimpower() {
  return Object(_src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__["convertEntities"])({
    "zone.powertec": {
      entity_id: "zone.powertec",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Powertec",
        icon: "mdi:briefcase"
      }
    },
    "zone.kindy": {
      entity_id: "zone.kindy",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 25,
        friendly_name: "Kindy",
        icon: "mdi:school"
      }
    },
    "zone.stocklands": {
      entity_id: "zone.stocklands",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 200,
        friendly_name: "Stocklands",
        icon: "mdi:cart"
      }
    },
    "zone.parlour": {
      entity_id: "zone.parlour",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Parlour",
        icon: "mdi:coffee"
      }
    },
    "zone.work_home_beacon_25mins": {
      entity_id: "zone.work_home_beacon_25mins",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Work Home Beacon 25mins",
        icon: "mdi:car"
      }
    },
    "zone.work_home_beacon_15mins": {
      entity_id: "zone.work_home_beacon_15mins",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Work Home Beacon 15mins",
        icon: "mdi:car"
      }
    },
    "zone.work_home_beacon_5mins": {
      entity_id: "zone.work_home_beacon_5mins",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Work Home Beacon 5mins",
        icon: "mdi:car"
      }
    },
    "zone.darwin": {
      entity_id: "zone.darwin",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Darwin",
        icon: "mdi:airplane"
      }
    },
    "zone.brisbane": {
      entity_id: "zone.brisbane",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Brisbane",
        icon: "mdi:car"
      }
    },
    "zone.sydney": {
      entity_id: "zone.sydney",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Sydney",
        icon: "mdi:airplane"
      }
    },
    "zone.melbourne": {
      entity_id: "zone.melbourne",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Melbourne",
        icon: "mdi:airplane"
      }
    },
    "zone.perth": {
      entity_id: "zone.perth",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Perth",
        icon: "mdi:airplane"
      }
    },
    "zone.adelaide": {
      entity_id: "zone.adelaide",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Adelaide",
        icon: "mdi:airplane"
      }
    },
    "zone.tasmania": {
      entity_id: "zone.tasmania",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50000,
        friendly_name: "Tasmania",
        icon: "mdi:airplane"
      }
    },
    "zone.uk": {
      entity_id: "zone.uk",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100000,
        friendly_name: "UK",
        icon: "mdi:earth"
      }
    },
    "zone.france": {
      entity_id: "zone.france",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100000,
        friendly_name: "France",
        icon: "mdi:earth"
      }
    },
    "zone.netherlands": {
      entity_id: "zone.netherlands",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100000,
        friendly_name: "Netherlands",
        icon: "mdi:earth"
      }
    },
    "zone.switzerland": {
      entity_id: "zone.switzerland",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100000,
        friendly_name: "Switzerland",
        icon: "mdi:earth"
      }
    },
    "zone.italy": {
      entity_id: "zone.italy",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100000,
        friendly_name: "Italy",
        icon: "mdi:earth"
      }
    },
    "zone.home": {
      entity_id: "zone.home",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100,
        friendly_name: "Kingia Castle",
        icon: "mdi:home"
      }
    },
    "sensor.lower_temperature": {
      entity_id: "sensor.lower_temperature",
      state: "26.4",
      attributes: {
        count_sensors: 2,
        max_value: 27.2,
        mean: 26.4,
        min_value: 25.6,
        last: 27.2,
        unit_of_measurement: "\xB0C",
        friendly_name: "Downstairs Temperature",
        icon: "mdi:sofa"
      }
    },
    "sensor.upstairs_temperature": {
      entity_id: "sensor.upstairs_temperature",
      state: "28.5",
      attributes: {
        count_sensors: 4,
        max_value: 29.5,
        mean: 28.5,
        min_value: 27.7,
        last: 27.7,
        unit_of_measurement: "\xB0C",
        friendly_name: "Upstairs Temperature",
        icon: "mdi:hotel"
      }
    },
    "sensor.next_bus": {
      entity_id: "sensor.next_bus",
      state: "16",
      attributes: {
        unit_of_measurement: "min",
        friendly_name: "Time to Next Bus",
        icon: "mdi:bus-clock"
      }
    },
    "sensor.battery_tina": {
      entity_id: "sensor.battery_tina",
      state: "11",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Battery Tina",
        icon: "mdi:battery-charging",
        device_class: "battery"
      }
    },
    "sensor.battery_james": {
      entity_id: "sensor.battery_james",
      state: "100",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Battery James",
        icon: "",
        device_class: "battery"
      }
    },
    "sensor.james": {
      entity_id: "sensor.james",
      state: "Home",
      attributes: {
        friendly_name: "James",
        icon: "mdi:walk",
        entity_picture: "/local/james.jpg"
      }
    },
    "sensor.tina": {
      entity_id: "sensor.tina",
      state: "Home",
      attributes: {
        friendly_name: "Tina",
        icon: "mdi:walk",
        entity_picture: "/local/tina.jpg"
      }
    },
    "sensor.aqi": {
      entity_id: "sensor.aqi",
      state: "20",
      attributes: {
        friendly_name: "Air Quality Index"
      }
    },
    "sensor.bom_temp": {
      entity_id: "sensor.bom_temp",
      state: "21.9",
      attributes: {
        unit_of_measurement: "\xB0C",
        friendly_name: "Gold Coast Temperature",
        device_class: "temperature"
      }
    },
    "sensor.forks": {
      entity_id: "sensor.forks",
      state: "32",
      attributes: {
        friendly_name: "forks"
      }
    },
    "sensor.stars_last_week": {
      entity_id: "sensor.stars_last_week",
      state: "0",
      attributes: {
        friendly_name: "Last Week"
      }
    },
    "sensor.issues": {
      entity_id: "sensor.issues",
      state: "26",
      attributes: {
        friendly_name: "issues"
      }
    },
    "sensor.stars": {
      entity_id: "sensor.stars",
      state: "282",
      attributes: {
        friendly_name: "stars"
      }
    },
    "sensor.stars_this_month": {
      entity_id: "sensor.stars_this_month",
      state: "12",
      attributes: {
        friendly_name: "This Month"
      }
    },
    "sensor.stars_last_month": {
      entity_id: "sensor.stars_last_month",
      state: "0",
      attributes: {
        friendly_name: "Last Month"
      }
    },
    "sensor.git_stars_next_dif": {
      entity_id: "sensor.git_stars_next_dif",
      state: "45",
      attributes: {
        friendly_name: "Next Target"
      }
    },
    "sensor.git_stars_last_dif": {
      entity_id: "sensor.git_stars_last_dif",
      state: "31",
      attributes: {
        friendly_name: "Next Target"
      }
    },
    "sensor.subscribers": {
      entity_id: "sensor.subscribers",
      state: "32",
      attributes: {
        friendly_name: "subscribers"
      }
    },
    "sensor.stars_this_week": {
      entity_id: "sensor.stars_this_week",
      state: "12",
      attributes: {
        friendly_name: "This Week"
      }
    },
    "sensor.git_stars_trend_dif": {
      entity_id: "sensor.git_stars_trend_dif",
      state: "1486",
      attributes: {
        friendly_name: "Trending Target"
      }
    },
    "binary_sensor.james_bag_status": {
      entity_id: "binary_sensor.james_bag_status",
      state: "off",
      attributes: {
        friendly_name: "James Bag",
        icon: "mdi:briefcase",
        device_class: "connectivity"
      }
    },
    "binary_sensor.tina_gps_status": {
      entity_id: "binary_sensor.tina_gps_status",
      state: "on",
      attributes: {
        friendly_name: "Tina GPS",
        icon: "mdi:crosshairs-gps",
        device_class: "connectivity"
      }
    },
    "binary_sensor.tina_ble_status": {
      entity_id: "binary_sensor.tina_ble_status",
      state: "on",
      attributes: {
        friendly_name: "Tina BLE",
        icon: "mdi:bluetooth-audio",
        device_class: "connectivity"
      }
    },
    "binary_sensor.james_car_status": {
      entity_id: "binary_sensor.james_car_status",
      state: "off",
      attributes: {
        friendly_name: "James Car",
        icon: "mdi:car-side",
        device_class: "connectivity"
      }
    },
    "binary_sensor.james_ble_status": {
      entity_id: "binary_sensor.james_ble_status",
      state: "off",
      attributes: {
        friendly_name: "James BLE",
        icon: "mdi:bluetooth-audio",
        device_class: "connectivity"
      }
    },
    "binary_sensor.tina_keys_status": {
      entity_id: "binary_sensor.tina_keys_status",
      state: "on",
      attributes: {
        friendly_name: "Tina Keys",
        icon: "mdi:key",
        device_class: "connectivity"
      }
    },
    "binary_sensor.james_keys_status": {
      entity_id: "binary_sensor.james_keys_status",
      state: "off",
      attributes: {
        friendly_name: "James Keys",
        icon: "mdi:key",
        device_class: "connectivity"
      }
    },
    "binary_sensor.james_gps_status": {
      entity_id: "binary_sensor.james_gps_status",
      state: "on",
      attributes: {
        friendly_name: "James GPS",
        icon: "mdi:crosshairs-gps",
        device_class: "connectivity"
      }
    },
    "binary_sensor.garage": {
      entity_id: "binary_sensor.garage",
      state: "off",
      attributes: {
        friendly_name: "Garage",
        icon: "mdi:garage",
        device_class: "door"
      }
    },
    "binary_sensor.recycle": {
      entity_id: "binary_sensor.recycle",
      state: "off",
      attributes: {
        friendly_name: "Recycle",
        icon: "mdi:recycle"
      }
    },
    "binary_sensor.trash": {
      entity_id: "binary_sensor.trash",
      state: "off",
      attributes: {
        friendly_name: "Trash",
        icon: "mdi:delete"
      }
    },
    "binary_sensor.alarm": {
      entity_id: "binary_sensor.alarm",
      state: "off",
      attributes: {
        friendly_name: "Alarm",
        icon: "mdi:security-home"
      }
    },
    "binary_sensor.windows": {
      entity_id: "binary_sensor.windows",
      state: "on",
      attributes: {
        friendly_name: "Windows",
        icon: "mdi:window-open",
        device_class: "window"
      }
    },
    "binary_sensor.doors": {
      entity_id: "binary_sensor.doors",
      state: "off",
      attributes: {
        friendly_name: "Doors",
        icon: "mdi:door-closed",
        device_class: "door"
      }
    },
    "binary_sensor.lights": {
      entity_id: "binary_sensor.lights",
      state: "on",
      attributes: {
        friendly_name: "Lights",
        icon: "mdi:lightbulb",
        device_class: "light"
      }
    },
    "alarm_control_panel.ha_alarm": {
      entity_id: "alarm_control_panel.ha_alarm",
      state: "disarmed",
      attributes: {
        code_format: null,
        changed_by: null,
        friendly_name: "HA Alarm",
        icon: "mdi:security-home"
      }
    },
    "binary_sensor.door_window_sensor_158d0001e73c09": {
      entity_id: "binary_sensor.door_window_sensor_158d0001e73c09",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 49,
        friendly_name: "Back Door Sensor",
        device_class: "door"
      }
    },
    "binary_sensor.door_window_sensor_158d0001e73af4": {
      entity_id: "binary_sensor.door_window_sensor_158d0001e73af4",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 49,
        friendly_name: "Kitchen Window",
        device_class: "window"
      }
    },
    "binary_sensor.motion_sensor_158d00022c2f21": {
      entity_id: "binary_sensor.motion_sensor_158d00022c2f21",
      state: "off",
      attributes: {
        "No motion since": "120",
        battery_level: 53,
        friendly_name: "Staircase Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.door_window_sensor_158d0001e73a73": {
      entity_id: "binary_sensor.door_window_sensor_158d0001e73a73",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 49,
        friendly_name: "Jackson Window",
        device_class: "window"
      }
    },
    "binary_sensor.motion_sensor_158d000201351c": {
      entity_id: "binary_sensor.motion_sensor_158d000201351c",
      state: "off",
      attributes: {
        "No motion since": "180",
        battery_level: 53,
        friendly_name: "Jackson Room Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.door_window_sensor_158d0001e73aad": {
      entity_id: "binary_sensor.door_window_sensor_158d0001e73aad",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 57,
        friendly_name: "Hudson Window",
        device_class: "window"
      }
    },
    "binary_sensor.motion_sensor_158d0002006d46": {
      entity_id: "binary_sensor.motion_sensor_158d0002006d46",
      state: "off",
      attributes: {
        "No motion since": "120",
        battery_level: 45,
        friendly_name: "Hudson Room Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.door_window_sensor_158d0001e74875": {
      entity_id: "binary_sensor.door_window_sensor_158d0001e74875",
      state: "on",
      attributes: {
        "Open since": "300",
        battery_level: 47,
        friendly_name: "Bathroom Window",
        device_class: "window"
      }
    },
    "binary_sensor.motion_sensor_158d000200e4ab": {
      entity_id: "binary_sensor.motion_sensor_158d000200e4ab",
      state: "off",
      attributes: {
        "No motion since": "1800",
        battery_level: 45,
        friendly_name: "Bathroom Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.motion_sensor_158d0001e5d118": {
      entity_id: "binary_sensor.motion_sensor_158d0001e5d118",
      state: "off",
      attributes: {
        "No motion since": "120",
        battery_level: 49,
        friendly_name: "Living Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.motion_sensor_158d0001e63803": {
      entity_id: "binary_sensor.motion_sensor_158d0001e63803",
      state: "off",
      attributes: {
        "No motion since": "120",
        battery_level: 49,
        friendly_name: "Bedroom Motion Densor",
        device_class: "motion"
      }
    },
    "binary_sensor.door_window_sensor_158d0001f36741": {
      entity_id: "binary_sensor.door_window_sensor_158d0001f36741",
      state: "on",
      attributes: {
        "Open since": "300",
        battery_level: 45,
        friendly_name: "Bedroom Window",
        device_class: "window"
      }
    },
    "binary_sensor.motion_sensor_158d000200ea5b": {
      entity_id: "binary_sensor.motion_sensor_158d000200ea5b",
      state: "off",
      attributes: {
        "No motion since": "1200",
        battery_level: 49,
        friendly_name: "Patio Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.water_leak_sensor_158d00026e26dc": {
      entity_id: "binary_sensor.water_leak_sensor_158d00026e26dc",
      state: "off",
      attributes: {
        battery_level: 47,
        friendly_name: "Kitchen Leak Sensor",
        device_class: "moisture"
      }
    },
    "binary_sensor.door_window_sensor_158d000225432d": {
      entity_id: "binary_sensor.door_window_sensor_158d000225432d",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 47,
        friendly_name: "Patio Door Sensor",
        device_class: "door"
      }
    },
    "binary_sensor.door_window_sensor_158d00022016b2": {
      entity_id: "binary_sensor.door_window_sensor_158d00022016b2",
      state: "off",
      attributes: {
        "Open since": 0,
        battery_level: 43,
        friendly_name: "Front Door Sensor",
        device_class: "door"
      }
    },
    "binary_sensor.motion_sensor_158d0001e5d147": {
      entity_id: "binary_sensor.motion_sensor_158d0001e5d147",
      state: "off",
      attributes: {
        "No motion since": "1800",
        battery_level: 51,
        friendly_name: "Entrance Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.smoke_sensor_158d0001b8ddc7": {
      entity_id: "binary_sensor.smoke_sensor_158d0001b8ddc7",
      state: "off",
      attributes: {
        Density: 0,
        battery_level: 59,
        friendly_name: "Downstairs Smoke Detector",
        device_class: "smoke"
      }
    },
    "binary_sensor.smoke_sensor_158d0001b8deba": {
      entity_id: "binary_sensor.smoke_sensor_158d0001b8deba",
      state: "off",
      attributes: {
        Density: 0,
        battery_level: 65,
        friendly_name: "Upstairs Smoke Detector",
        device_class: "smoke"
      }
    },
    "binary_sensor.motion_sensor_158d0001e5cf11": {
      entity_id: "binary_sensor.motion_sensor_158d0001e5cf11",
      state: "off",
      attributes: {
        "No motion since": "300",
        battery_level: 47,
        friendly_name: "Playroom Motion Sensor",
        device_class: "motion"
      }
    },
    "binary_sensor.water_leak_sensor_158d0002338651": {
      entity_id: "binary_sensor.water_leak_sensor_158d0002338651",
      state: "off",
      attributes: {
        battery_level: 47,
        friendly_name: "Bathroom Leak Sensor",
        device_class: "moisture"
      }
    },
    "sensor.us_air_pollution_level_2": {
      entity_id: "sensor.us_air_pollution_level_2",
      state: "Good",
      attributes: {
        attribution: "Data provided by AirVisual",
        lati: -27.96724,
        "long": 153.39796,
        friendly_name: "U.S. Air Pollution Level",
        icon: "mdi:emoticon-excited"
      }
    },
    "sensor.us_main_pollutant_2": {
      entity_id: "sensor.us_main_pollutant_2",
      state: "PM2.5",
      attributes: {
        attribution: "Data provided by AirVisual",
        pollutant_symbol: "p2",
        pollutant_unit: "\xB5g/m3",
        lati: -27.96724,
        "long": 153.39796,
        friendly_name: "U.S. Main Pollutant",
        icon: "mdi:chemical-weapon"
      }
    }
  });
};

/***/ }),

/***/ "./demo/src/configs/jimpower/index.ts":
/*!********************************************!*\
  !*** ./demo/src/configs/jimpower/index.ts ***!
  \********************************************/
/*! exports provided: demoJimpower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoJimpower", function() { return demoJimpower; });
/* harmony import */ var _lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lovelace */ "./demo/src/configs/jimpower/lovelace.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./demo/src/configs/jimpower/entities.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./demo/src/configs/jimpower/theme.ts");



var demoJimpower = {
  authorName: "Jimpower",
  authorUrl: "https://github.com/JamesMcCarthy79/Home-Assistant-Config",
  name: "Kingia Castle",
  lovelace: _lovelace__WEBPACK_IMPORTED_MODULE_0__["demoLovelaceJimpower"],
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["demoEntitiesJimpower"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["demoThemeJimpower"]
};

/***/ }),

/***/ "./demo/src/configs/jimpower/lovelace.ts":
/*!***********************************************!*\
  !*** ./demo/src/configs/jimpower/lovelace.ts ***!
  \***********************************************/
/*! exports provided: demoLovelaceJimpower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoLovelaceJimpower", function() { return demoLovelaceJimpower; });
/* harmony import */ var _custom_cards_card_modder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../custom-cards/card-modder */ "./demo/src/custom-cards/card-modder.js");

var demoLovelaceJimpower = function demoLovelaceJimpower() {
  return {
    name: "Kingia Castle",
    resources: [// {
      //   url: "/local/custom_ui/dark-sky-weather-card.js?v=4",
      //   type: "js",
      // },
      // {
      //   url: "/local/custom_ui/mini-media-player-bundle.js?v=0.9.8",
      //   type: "module",
      // },
      // {
      //   url: "/local/custom_ui/tracker-card.js?v=0.1.5",
      //   type: "js",
      // },
      // {
      //   url: "/local/custom_ui/surveillance-card.js?v=0.0.1",
      //   type: "module",
      // },
      // {
      //   url: "/local/custom_ui/mini-graph-card-bundle.js?v=0.1.0",
      //   type: "module",
      // },
      // {
      //   url: "/local/custom_ui/slider-entity-row.js?v=d6da75",
      //   type: "js",
      // },
      // {
      //   url:
      //     "/local/custom_ui/compact-custom-header/compact-custom-header.js?v=0.2.7",
      //   type: "js",
      // },
      // {
      //   url: "/local/custom_ui/waze-card.js?v=1.1.1",
      //   type: "js",
      // },
      // {
      //   url: "/local/custom_ui/circle-sensor-card.js?v=1.2.0",
      //   type: "module",
      // },
      // {
      //   url: "/local/custom_ui/monster-card.js?v=0.2.3",
      //   type: "js",
      // },
    ],
    views: [{
      cards: [{
        type: "custom:ha-demo-card"
      }, {
        cards: [{
          cards: [{
            style: {
              "border-radius": "20px",
              "box-shadow": "3px 3px rgba(0,0,0,0.4)",
              border: "solid 1px rgba(100,100,100,0.3)",
              overflow: "hidden"
            },
            type: "custom:card-modder",
            card: {
              image: "/assets/jimpower/home/james_10.jpg",
              elements: [{
                prefix: "James -- ",
                type: "state-label",
                style: {
                  color: "white",
                  top: "90%",
                  left: "30%"
                },
                entity: "sensor.james"
              }, {
                style: {
                  color: "white",
                  top: "90%",
                  left: "73%"
                },
                type: "state-icon",
                tap_action: "more_info",
                entity: "sensor.battery_james"
              }, {
                style: {
                  color: "white",
                  top: "91%",
                  left: "87%"
                },
                type: "state-label",
                entity: "sensor.battery_james"
              }, {
                style: {
                  color: "white",
                  top: "10%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.james_gps_status"
              }, {
                style: {
                  color: "white",
                  top: "25%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.james_ble_status"
              }, {
                style: {
                  color: "white",
                  top: "40%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.james_keys_status"
              }, {
                style: {
                  color: "white",
                  top: "55%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.james_bag_status"
              }, {
                style: {
                  color: "white",
                  top: "70%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.james_car_status"
              }],
              type: "picture-elements"
            }
          }, {
            style: {
              "border-radius": "20px",
              "box-shadow": "3px 3px rgba(0,0,0,0.4)",
              border: "solid 1px rgba(100,100,100,0.3)",
              overflow: "hidden"
            },
            type: "custom:card-modder",
            card: {
              image: "/assets/jimpower/home/tina_4.jpg",
              elements: [{
                prefix: "Tina -- ",
                type: "state-label",
                style: {
                  color: "white",
                  top: "89%",
                  left: "27%"
                },
                entity: "sensor.tina"
              }, {
                style: {
                  color: "white",
                  top: "89%",
                  left: "73%"
                },
                type: "state-icon",
                entity: "sensor.battery_tina"
              }, {
                style: {
                  color: "white",
                  top: "90%",
                  left: "87%"
                },
                type: "state-label",
                entity: "sensor.battery_tina"
              }, {
                style: {
                  color: "white",
                  top: "10%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.tina_gps_status"
              }, {
                style: {
                  color: "white",
                  top: "25%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.tina_ble_status"
              }, {
                style: {
                  color: "white",
                  top: "40%",
                  left: "92%"
                },
                type: "state-icon",
                entity: "binary_sensor.tina_keys_status"
              }],
              type: "picture-elements"
            }
          }],
          type: "horizontal-stack"
        }, {
          style: {
            "border-radius": "20px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            border: "solid 1px rgba(100,100,100,0.3)",
            overflow: "hidden"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/home/house_4.png",
            elements: [{
              style: {
                color: "white",
                top: "88%",
                left: "52%"
              },
              type: "state-icon",
              tap_action: {
                action: "call-service",
                service_data: {
                  entity_id: "group.downstairs_lights"
                },
                service: "homeassistant.toggle"
              },
              entity: "binary_sensor.lights"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "5%"
              },
              type: "state-icon",
              entity: "binary_sensor.alarm"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "14%"
              },
              type: "state-icon",
              entity: "binary_sensor.doors"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "23%"
              },
              type: "state-icon",
              entity: "binary_sensor.windows"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "32%"
              },
              type: "state-icon",
              entity: "binary_sensor.trash"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "41%"
              },
              type: "state-icon",
              entity: "binary_sensor.recycle"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "72%"
              },
              type: "state-icon",
              tap_action: "more-info",
              entity: "sensor.lower_temperature"
            }, {
              style: {
                color: "white",
                top: "95%",
                left: "72%"
              },
              type: "state-label",
              entity: "sensor.lower_temperature"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "87%"
              },
              type: "state-icon",
              tap_action: "more-info",
              entity: "sensor.upstairs_temperature"
            }, {
              style: {
                color: "white",
                top: "95%",
                left: "87%"
              },
              type: "state-label",
              entity: "sensor.upstairs_temperature"
            }, {
              style: {
                color: "white",
                top: "56%",
                left: "78%"
              },
              type: "state-icon",
              entity: "binary_sensor.smoke_sensor_158d0001b8ddc7"
            }, {
              style: {
                color: "white",
                top: "20%",
                left: "78%"
              },
              type: "state-icon",
              entity: "binary_sensor.smoke_sensor_158d0001b8deba"
            }, {
              style: {
                color: "white",
                top: "61%",
                left: "24%"
              },
              type: "state-icon",
              entity: "binary_sensor.garage"
            }, {
              style: {
                color: "white",
                top: "12%",
                left: "9%"
              },
              type: "state-label",
              entity: "sensor.bom_temp"
            }],
            type: "picture-elements"
          }
        }],
        type: "vertical-stack"
      }, {
        style: {
          "border-radius": "20px",
          "box-shadow": "3px 3px rgba(0,0,0,0.4)",
          border: "solid 1px rgba(100,100,100,0.3)",
          overflow: "hidden"
        },
        type: "custom:card-modder",
        card: {
          image: "/assets/jimpower/home/git.png",
          elements: [{
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "13%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Stargazers"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "28%"
            },
            type: "state-label",
            entity: "sensor.stars"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "45%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Subscribers"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "59%"
            },
            type: "state-label",
            entity: "sensor.subscribers"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "69%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Forks"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "78%"
            },
            type: "state-label",
            entity: "sensor.forks"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "88%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Issues"
          }, {
            style: {
              color: "white",
              top: "10%",
              "font-size": "120%",
              left: "97%"
            },
            type: "state-label",
            entity: "sensor.issues"
          }, {
            style: {
              color: "white",
              top: "25%",
              left: "12%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Next Target"
          }, {
            style: {
              color: "white",
              top: "25%",
              left: "25%"
            },
            type: "state-label",
            entity: "sensor.git_stars_next_dif"
          }, {
            style: {
              color: "white",
              top: "35%",
              left: "12%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Last Target"
          }, {
            style: {
              color: "white",
              top: "35%",
              left: "25%"
            },
            type: "state-label",
            entity: "sensor.git_stars_last_dif"
          }, {
            style: {
              color: "white",
              top: "45%",
              left: "10%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Trending"
          }, {
            style: {
              color: "white",
              top: "45%",
              left: "25%"
            },
            type: "state-label",
            entity: "sensor.git_stars_trend_dif"
          }, {
            style: {
              color: "white",
              top: "25%",
              left: "82%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "This Month"
          }, {
            style: {
              color: "white",
              top: "25%",
              left: "95%"
            },
            type: "state-label",
            entity: "sensor.stars_this_month"
          }, {
            style: {
              color: "white",
              top: "35%",
              left: "82%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Last Month"
          }, {
            style: {
              color: "white",
              top: "35%",
              left: "95%"
            },
            type: "state-label",
            entity: "sensor.stars_last_month"
          }, {
            style: {
              color: "white",
              top: "45%",
              left: "83%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "This Week"
          }, {
            style: {
              color: "white",
              top: "45%",
              left: "95%"
            },
            type: "state-label",
            entity: "sensor.stars_this_week"
          }, {
            style: {
              color: "white",
              top: "55%",
              left: "83%"
            },
            type: "service-button",
            service: "python_script.github_scaper",
            title: "Last Week"
          }, {
            style: {
              color: "white",
              top: "55%",
              left: "95%"
            },
            type: "state-label",
            entity: "sensor.stars_last_week"
          }],
          type: "picture-elements"
        }
      }, {
        cards: [// {
        //   style: {
        //     "background-image": 'url("/assets/jimpower/cardbackK.png")',
        //     "background-size": "100% 400px",
        //     "box-shadow": "3px 3px rgba(0,0,0,0.4)",
        //     "background-repeat": "no-repeat",
        //     color: "#999999",
        //     "border-radius": "20px",
        //     border: "solid 1px rgba(100,100,100,0.3)",
        //     "background-color": "rgba(50,50,50,0.3)",
        //   },
        //   type: "custom:card-modder",
        //   card: {
        //     entity_visibility: "sensor.dark_sky_visibility",
        //     entity_sun: "sun.sun",
        //     entity_daily_summary:
        //       "sensor.bom_gc_forecast_detailed_summary_0",
        //     entity_temperature: "sensor.bom_temp",
        //     entity_forecast_high_temp_3:
        //       "sensor.bom_gc_forecast_max_temp_c_3",
        //     entity_forecast_high_temp_2:
        //       "sensor.bom_gc_forecast_max_temp_c_2",
        //     entity_forecast_high_temp_5:
        //       "sensor.bom_gc_forecast_max_temp_c_5",
        //     entity_forecast_high_temp_4:
        //       "sensor.bom_gc_forecast_max_temp_c_4",
        //     entity_wind_speed: "sensor.bom_wind_sp",
        //     entity_forecast_icon_4: "sensor.dark_sky_icon_4",
        //     entity_forecast_icon_5: "sensor.dark_sky_icon_5",
        //     entity_forecast_icon_2: "sensor.dark_sky_icon_2",
        //     entity_forecast_icon_3: "sensor.dark_sky_icon_3",
        //     entity_forecast_icon_1: "sensor.dark_sky_icon_1",
        //     entity_forecast_high_temp_1:
        //       "sensor.bom_gc_forecast_max_temp_c_1",
        //     entity_wind_bearing: "sensor.bom_wind_bear",
        //     entity_forecast_low_temp_2:
        //       "sensor.bom_gc_forecast_min_temp_c_2",
        //     entity_forecast_low_temp_3:
        //       "sensor.bom_gc_forecast_min_temp_c_3",
        //     entity_pressure: "sensor.bom_pres",
        //     entity_forecast_low_temp_1:
        //       "sensor.bom_gc_forecast_min_temp_c_1",
        //     entity_forecast_low_temp_4:
        //       "sensor.bom_gc_forecast_min_temp_c_4",
        //     entity_forecast_low_temp_5:
        //       "sensor.bom_gc_forecast_min_temp_c_5",
        //     entity_humidity: "sensor.bom_humd",
        //     type: "custom:dark-sky-weather-card",
        //     entity_current_conditions: "sensor.dark_sky_icon",
        //   },
        // },
        // {
        //   style: {
        //     "background-image": 'url("/assets/jimpower/home/waze_5.png")',
        //     "background-size": "100% 400px",
        //     "box-shadow": "3px 3px rgba(0,0,0,0.4)",
        //     "background-repeat": "no-repeat",
        //     "border-radius": "20px",
        //     border: "solid 1px rgba(100,100,100,0.3)",
        //     "background-color": "rgba(50,50,50,0.3)",
        //   },
        //   type: "custom:card-modder",
        //   card: {
        //     entities: [
        //       {
        //         name: "James",
        //         zone: "zone.home",
        //         entity: "sensor.james_to_home",
        //       },
        //       {
        //         name: "Tina",
        //         zone: "zone.home",
        //         entity: "sensor.tina_to_home",
        //       },
        //       {
        //         name: "Work",
        //         zone: "zone.powertec",
        //         entity: "sensor.commute_to_work",
        //       },
        //     ],
        //     type: "custom:waze-card",
        //   },
        // },
        {
          style: {
            "border-radius": "20px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            border: "solid 1px rgba(100,100,100,0.3)",
            overflow: "hidden"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/home/bus_10.jpg",
            elements: [{
              style: {
                color: "white",
                top: "16px",
                left: "23px"
              },
              type: "state-icon",
              entity: "sensor.next_bus"
            }, {
              style: {
                color: "white",
                top: "22px",
                left: "59px"
              },
              type: "state-label",
              entity: "sensor.next_bus"
            }],
            type: "picture-elements"
          }
        }],
        type: "vertical-stack"
      } // {
      //   cards: [
      //     {
      //       style: {
      //         "border-radius": "20px",
      //         color: "#999999",
      //         "box-shadow": "3px 3px rgba(0,0,0,0.4)",
      //         border: "solid 1px rgba(100,100,100,0.3)",
      //       },
      //       type: "custom:card-modder",
      //       card: {
      //         type: "picture-entity",
      //         entity: "camera.bom_radar",
      //       },
      //     },
      //     // {
      //     //   style: {
      //     //     "background-image": 'url("/assets/jimpower/cardbackK.png")',
      //     //     "background-size": "100% 525px",
      //     //     "box-shadow": "3px 3px rgba(0,0,0,0.4)",
      //     //     "background-repeat": "no-repeat",
      //     //     color: "#999999",
      //     //     "border-radius": "20px",
      //     //     border: "solid 1px rgba(100,100,100,0.3)",
      //     //     "background-color": "rgba(50,50,50,0.3)",
      //     //   },
      //     //   type: "custom:card-modder",
      //     //   card: {
      //     //     title: null,
      //     //     type: "custom:tracker-card",
      //     //     trackers: [
      //     //       "sensor.custom_card_tracker",
      //     //       "sensor.custom_component_tracker",
      //     //     ],
      //     //   },
      //     // },
      //   ],
      //   type: "vertical-stack",
      // },
      ],
      icon: "mdi:castle",
      name: "Home",
      background: 'center / cover no-repeat url("/assets/jimpower/background-15.jpg") fixed'
    }, {
      cards: [{
        cards: [{
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/alarm_3.jpg",
            elements: [{
              style: {
                color: "white",
                top: "88%",
                left: "15%"
              },
              type: "state-icon",
              entity: "alarm_control_panel.ha_alarm"
            }, {
              prefix: "Alarm: ",
              type: "state-label",
              style: {
                color: "white",
                top: "88%",
                left: "32%"
              },
              entity: "alarm_control_panel.ha_alarm"
            }],
            type: "picture-elements"
          }
        }, {
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/smoke_4.jpg",
            elements: [{
              style: {
                color: "white",
                top: "88%",
                left: "15%"
              },
              type: "state-icon",
              entity: "binary_sensor.smoke_sensor_158d0001b8ddc7"
            }, {
              prefix: "Downstairs: ",
              type: "state-label",
              style: {
                color: "white",
                top: "89%",
                left: "32%"
              },
              entity: "binary_sensor.smoke_sensor_158d0001b8ddc7"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "60%"
              },
              type: "state-icon",
              entity: "binary_sensor.smoke_sensor_158d0001b8deba"
            }, {
              prefix: "Upstairs: ",
              type: "state-label",
              style: {
                color: "white",
                top: "89%",
                left: "77%"
              },
              entity: "binary_sensor.smoke_sensor_158d0001b8deba"
            }],
            type: "picture-elements"
          }
        }, {
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/air_8.jpg",
            elements: [{
              image: "https://www.airvisual.com/assets/aqi/ic-face-1-green.svg",
              type: "image",
              style: {
                width: "80px",
                top: "30%",
                left: "12%",
                transform: "none",
                height: "80px"
              },
              entity: "sensor.us_air_pollution_level_2"
            }, {
              style: {
                color: "hsl(120, 41%, 39%)",
                top: "50%",
                "font-weight": 600,
                "font-size": "20px",
                left: "44%"
              },
              type: "state-label",
              entity: "sensor.us_air_pollution_level_2"
            }, {
              style: {
                color: "hsl(120, 41%, 39%)",
                top: "50%",
                "line-height": "50px",
                "font-size": "104px",
                left: "70%"
              },
              type: "state-label",
              entity: "sensor.aqi"
            }, {
              style: {
                color: "white",
                top: "80%",
                left: "52%"
              },
              type: "state-icon",
              entity: "sensor.us_main_pollutant_2"
            }, {
              style: {
                color: "white",
                top: "81%",
                "font-weight": 500,
                "font-size": "18px",
                left: "72%"
              },
              type: "state-label",
              suffix: " | 7.2 ug/m3",
              entity: "sensor.us_main_pollutant_2"
            }],
            type: "picture-elements"
          }
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/door_3.png",
            elements: [{
              style: {
                color: "white",
                top: "82%",
                left: "15%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d00022016b2"
            }, {
              prefix: "Front: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "15%"
              },
              entity: "binary_sensor.door_window_sensor_158d00022016b2"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "38%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d000225432d"
            }, {
              prefix: "Patio: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "38%"
              },
              entity: "binary_sensor.door_window_sensor_158d000225432d"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "61%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001e73c09"
            }, {
              prefix: "Back: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "61%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001e73c09"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "85%"
              },
              type: "state-icon",
              entity: "binary_sensor.garage"
            }, {
              prefix: "Garage: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "85%"
              },
              entity: "binary_sensor.garage"
            }],
            type: "picture-elements"
          }
        }, {
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/window_2.jpg",
            elements: [{
              style: {
                color: "white",
                top: "82%",
                left: "25%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001e73af4"
            }, {
              prefix: "Kitchen: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "25%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001e73af4"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "50%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001e73a73"
            }, {
              prefix: "Jackson: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "50%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001e73a73"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "75%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001e73aad"
            }, {
              prefix: "Hudson: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "75%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001e73aad"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "75%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001e74875"
            }, {
              prefix: "Bathroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "75%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001e74875"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "25%"
              },
              type: "state-icon",
              entity: "binary_sensor.door_window_sensor_158d0001f36741"
            }, {
              prefix: "Bedroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "25%"
              },
              entity: "binary_sensor.door_window_sensor_158d0001f36741"
            }],
            type: "picture-elements"
          }
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/motion_3.jpg",
            elements: [{
              style: {
                color: "white",
                top: "82%",
                left: "25%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d0001e5d118"
            }, {
              prefix: "Living: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "25%"
              },
              entity: "binary_sensor.motion_sensor_158d0001e5d118"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "50%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d0001e5cf11"
            }, {
              prefix: "Playroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "50%"
              },
              entity: "binary_sensor.motion_sensor_158d0001e5cf11"
            }, {
              style: {
                color: "white",
                top: "45%",
                left: "25%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d0001e5d147"
            }, {
              prefix: "Entrance: ",
              type: "state-label",
              style: {
                color: "white",
                top: "55%",
                left: "25%"
              },
              entity: "binary_sensor.motion_sensor_158d0001e5d147"
            }, {
              style: {
                color: "white",
                top: "45%",
                left: "50%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d000200ea5b"
            }, {
              prefix: "Patio: ",
              type: "state-label",
              style: {
                color: "white",
                top: "55%",
                left: "50%"
              },
              entity: "binary_sensor.motion_sensor_158d000200ea5b"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "25%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d000201351c"
            }, {
              prefix: "Jackson: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "25%"
              },
              entity: "binary_sensor.motion_sensor_158d000201351c"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "50%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d0002006d46"
            }, {
              prefix: "Hudson: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "50%"
              },
              entity: "binary_sensor.motion_sensor_158d0002006d46"
            }, {
              style: {
                color: "white",
                top: "8%",
                left: "75%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d0001e63803"
            }, {
              prefix: "Bedroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "18%",
                left: "75%"
              },
              entity: "binary_sensor.motion_sensor_158d0001e63803"
            }, {
              style: {
                color: "white",
                top: "82%",
                left: "75%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d000200e4ab"
            }, {
              prefix: "Bathroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "92%",
                left: "75%"
              },
              entity: "binary_sensor.motion_sensor_158d000200e4ab"
            }, {
              style: {
                color: "white",
                top: "45%",
                left: "75%"
              },
              type: "state-icon",
              entity: "binary_sensor.motion_sensor_158d00022c2f21"
            }, {
              prefix: "Staircase: ",
              type: "state-label",
              style: {
                color: "white",
                top: "55%",
                left: "75%"
              },
              entity: "binary_sensor.motion_sensor_158d00022c2f21"
            }],
            type: "picture-elements"
          }
        }, {
          style: {
            "background-image": 'url("/assets/jimpower/cardbackK.png")',
            "background-size": "100% 68px",
            "box-shadow": "3px 3px rgba(0,0,0,0.4)",
            "background-repeat": "no-repeat",
            "border-radius": "20px",
            overflow: "hidden",
            border: "solid 1px rgba(100,100,100,0.3)",
            "background-color": "rgba(50,50,50,0.3)"
          },
          type: "custom:card-modder",
          card: {
            image: "/assets/jimpower/security/leak_2.png",
            elements: [{
              style: {
                color: "white",
                top: "88%",
                left: "15%"
              },
              type: "state-icon",
              entity: "binary_sensor.water_leak_sensor_158d0002338651"
            }, {
              prefix: "Kitchen: ",
              type: "state-label",
              style: {
                color: "white",
                top: "89%",
                left: "32%"
              },
              entity: "binary_sensor.water_leak_sensor_158d0002338651"
            }, {
              style: {
                color: "white",
                top: "88%",
                left: "60%"
              },
              type: "state-icon",
              entity: "binary_sensor.water_leak_sensor_158d00026e26dc"
            }, {
              prefix: "Bathroom: ",
              type: "state-label",
              style: {
                color: "white",
                top: "89%",
                left: "77%"
              },
              entity: "binary_sensor.water_leak_sensor_158d00026e26dc"
            }],
            type: "picture-elements"
          }
        }],
        type: "vertical-stack"
      }],
      icon: "hass:shield-home",
      name: "Security",
      background: 'center / cover no-repeat url("/assets/jimpower/background-15.jpg") fixed'
    }]
  };
};

/***/ }),

/***/ "./demo/src/configs/jimpower/theme.ts":
/*!********************************************!*\
  !*** ./demo/src/configs/jimpower/theme.ts ***!
  \********************************************/
/*! exports provided: demoThemeJimpower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoThemeJimpower", function() { return demoThemeJimpower; });
var demoThemeJimpower = function demoThemeJimpower() {
  return {
    "text-primary-color": "var(--primary-text-color)",
    "paper-item-icon-color": "var(--primary-text-color)",
    "primary-color": "#5294E2",
    "label-badge-red": "var(--accent-color)",
    "paper-tabs-selection-bar-color": "green",
    "paper-slider-knob-color": "var(--accent-color)",
    "light-primary-color": "var(--accent-color)",
    "primary-background-color": "#383C45",
    "primary-text-color": "#FFFFFF",
    "paper-item-selected_-_background-color": "#434954",
    "paper-slider-active-color": "var(--accent-color)",
    "secondary-background-color": "#383C45",
    "paper-slider-container-color": "linear-gradient(var(--primary-background-color), var(--secondary-background-color)) no-repeat",
    "paper-slider-disabled-active-color": "var(--disabled-text-color)",
    "disabled-text-color": "#7F848E",
    "paper-item-icon_-_color": "green",
    "paper-grey-200": "#414A59",
    "label-badge-background-color": "#2E333A",
    "paper-card-header-color": "var(--accent-color)",
    "sidebar-icon-color": "var(--paper-item-icon-color)",
    "paper-listbox-background-color": "#2E333A",
    "table-row-background-color": "#353840",
    "paper-grey-50": "var(--primary-text-color)",
    "switch-checked-color": "var(--accent-color)",
    "paper-dialog-background-color": "#434954",
    "secondary-text-color": "#5294E2",
    "google-red-500": "#E45E65",
    "divider-color": "rgba(0, 0, 0, .12)",
    "google-green-500": "#39E949",
    "switch-unchecked-button-color": "var(--disabled-text-color)",
    "label-badge-border-color": "green",
    "paper-listbox-color": "var(--primary-color)",
    "paper-slider-disabled-secondary-color": "var(--disabled-text-color)",
    "paper-card-background-color": "#434954",
    "label-badge-text-color": "var(--primary-text-color)",
    "paper-slider-knob-start-color": "var(--accent-color)",
    "switch-unchecked-track-color": "var(--disabled-text-color)",
    "dark-primary-color": "var(--accent-color)",
    "paper-slider-secondary-color": "var(--secondary-background-color)",
    "paper-slider-pin-color": "var(--accent-color)",
    "paper-item-icon-active-color": "#F9C536",
    "accent-color": "#E45E65",
    "table-row-alternative-background-color": "#3E424B"
  };
};

/***/ }),

/***/ "./demo/src/custom-cards/card-modder.js":
/*!**********************************************!*\
  !*** ./demo/src/custom-cards/card-modder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _card_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-tools */ "./demo/src/custom-cards/card-tools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div id=\"root\">", "</div>\n    "]);

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




var CardModder =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CardModder, _LitElement);

  function CardModder() {
    _classCallCheck(this, CardModder);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardModder).apply(this, arguments));
  }

  _createClass(CardModder, [{
    key: "setConfig",
    value: function setConfig(config) {
      if (!window.cardTools) throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");
      window.cardTools.checkVersion(0.2);

      if (!config || !config.card) {
        throw new Error("Card config incorrect");
      }

      if (Array.isArray(config.card)) {
        throw new Error("It says 'card', not 'cardS'. Remove the dash.");
      }

      this._config = config;
      this.card = window.cardTools.createCard(config.card);
      this.templated = [];
      this.attempts = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return window.cardTools.litHtml(_templateObject(), this.card);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this._cardMod();
    }
  }, {
    key: "_cardMod",
    value: function _cardMod() {
      var _this = this;

      if (!this._config.style) return;
      var target = null;
      target = target || this.card.querySelector("ha-card");
      target = target || this.card.shadowRoot && this.card.shadowRoot.querySelector("ha-card");
      target = target || this.card.firstChild && this.card.firstChild.shadowRoot && this.card.firstChild.shadowRoot.querySelector("ha-card");
      if (!target && !this.attempts) // Try twice
        setTimeout(function () {
          return _this._cardMod();
        }, 100);
      this.attempts++;
      target = target || this.card;

      for (var k in this._config.style) {
        if (window.cardTools.hasTemplate(this._config.style[k])) this.templated.push(k);
        this.card.style.setProperty(k, "");
        target.style.setProperty(k, window.cardTools.parseTemplate(this._config.style[k]));
      }

      this.target = target;
    }
  }, {
    key: "getCardSize",
    value: function getCardSize() {
      if (this._config && this._config.report_size) return this._config.report_size;
      if (this.card) return typeof this.card.getCardSize === "function" ? this.card.getCardSize() : 1;
      return 1;
    }
  }, {
    key: "hass",
    set: function set(hass) {
      var _this2 = this;

      if (this.card) this.card.hass = hass;
      if (this.templated) this.templated.forEach(function (k) {
        _this2.target.style.setProperty(k, window.cardTools.parseTemplate(_this2._config.style[k], ""));
      });
    }
  }]);

  return CardModder;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("card-modder", CardModder);

/***/ }),

/***/ "./demo/src/custom-cards/card-tools.js":
/*!*********************************************!*\
  !*** ./demo/src/custom-cards/card-tools.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



if (!window.cardTools) {
  var version = 0.2;
  var CUSTOM_TYPE_PREFIX = "custom:";
  var cardTools = {};
  cardTools.v = version;

  cardTools.checkVersion = function (v) {
    if (version < v) {
      throw new Error("Old version of card-tools found. Get the latest version of card-tools.js from https://github.com/thomasloven/lovelace-card-tools");
    }
  };

  cardTools.LitElement = lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"];
  cardTools.litHtml = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"];

  cardTools.hass = function () {
    return document.querySelector("home-assistant").hass;
  };

  cardTools.fireEvent = function (ev, detail) {
    ev = new Event(ev, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    ev.detail = detail || {};
    document.querySelector("ha-demo").dispatchEvent(ev);
  };

  cardTools.createThing = function (thing, config) {
    var _createThing = function _createThing(tag, config) {
      var element = document.createElement(tag);

      try {
        element.setConfig(config);
      } catch (err) {
        console.error(tag, err);
        return _createError(err.message, config);
      }

      return element;
    };

    var _createError = function _createError(error, config) {
      return _createThing("hui-error-card", {
        type: "error",
        error: error,
        config: config
      });
    };

    if (!config || _typeof(config) !== "object" || !config.type) return _createError("No ".concat(thing, " type configured"), config);
    var tag = config.type;

    if (config.error) {
      var err = config.error;
      delete config.error;
      return _createError(err, config);
    }

    if (tag.startsWith(CUSTOM_TYPE_PREFIX)) tag = tag.substr(CUSTOM_TYPE_PREFIX.length);else tag = "hui-".concat(tag, "-").concat(thing);
    if (customElements.get(tag)) return _createThing(tag, config); // If element doesn't exist (yet) create an error

    var element = _createError("Custom element doesn't exist: ".concat(tag, "."), config);

    element.style.display = "None";
    var time = setTimeout(function () {
      element.style.display = "";
    }, 2000); // Remove error if element is defined later

    customElements.whenDefined(tag).then(function () {
      clearTimeout(timer);
      cardTools.fireEvent("rebuild-view");
    });
    return element;
  };

  cardTools.createCard = function (config) {
    return cardTools.createThing("card", config);
  };

  cardTools.createElement = function (config) {
    return cardTools.createThing("element", config);
  };

  cardTools.createEntityRow = function (config) {
    var SPECIAL_TYPES = new Set(["call-service", "divider", "section", "weblink"]);
    var DEFAULT_ROWS = {
      alert: "toggle",
      automation: "toggle",
      climate: "toggle",
      cover: "cover",
      fan: "toggle",
      group: "group",
      input_boolean: "toggle",
      input_number: "input-number",
      input_select: "input-select",
      input_text: "input-text",
      light: "toggle",
      media_player: "media-player",
      lock: "lock",
      scene: "scene",
      script: "script",
      sensor: "sensor",
      timer: "timer",
      "switch": "toggle",
      vacuum: "toggle"
    };

    if (!config || _typeof(config) !== "object" || !config.entity && !config.type) {
      Object.assign(config, {
        error: "Invalid config given"
      });
      return cardTools.createThing("", config);
    }

    var type = config.type || "default";
    if (SPECIAL_TYPES.has(type) || type.startsWith(CUSTOM_TYPE_PREFIX)) return cardTools.createThing("row", config);
    var domain = config.entity.split(".", 1)[0];
    Object.assign(config, {
      type: DEFAULT_ROWS[domain] || "text"
    });
    return cardTools.createThing("entity-row", config);
  };

  cardTools.deviceID = function () {
    var ID_STORAGE_KEY = "lovelace-player-device-id";
    if (window["fully"] && typeof fully.getDeviceId === "function") return fully.getDeviceId();

    if (!localStorage[ID_STORAGE_KEY]) {
      var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 100000).toString(16).substring(1);
      };

      localStorage[ID_STORAGE_KEY] = "".concat(s4()).concat(s4(), "-").concat(s4()).concat(s4());
    }

    return localStorage[ID_STORAGE_KEY];
  }();

  cardTools.moreInfo = function (entity) {
    cardTools.fireEvent("hass-more-info", {
      entityId: entity
    });
  };

  cardTools.longpress = function (element) {
    customElements.whenDefined("action-handler").then(function () {
      var longpress = document.body.querySelector("action-handler");
      longpress.bind(element);
    });
    return element;
  };

  cardTools.hasTemplate = function (text) {
    return /\[\[\s+.*\s+\]\]/.test(text);
  };

  cardTools.parseTemplate = function (text, error) {
    var _parse = function _parse(str) {
      try {
        str = str.replace(/^\[\[\s+|\s+\]\]$/g, "");
        var parts = str.split(".");
        var v = cardTools.hass().states["".concat(parts[0], ".").concat(parts[1])];
        parts.shift();
        parts.shift();
        parts.forEach(function (item) {
          return v = v[item];
        });
        return v;
      } catch (err) {
        return error || "[[ Template matching failed ".concat(str, " ]]");
      }
    };

    text = text.replace(/(\[\[\s.*?\s\]\])/g, function (str, p1, offset, s) {
      return _parse(str);
    });
    return text;
  };

  window.cardTools = cardTools;
  cardTools.fireEvent("rebuild-view");
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltcG93ZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL2ppbXBvd2VyL2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3MvamltcG93ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvY29uZmlncy9qaW1wb3dlci9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL2ppbXBvd2VyL3RoZW1lLnRzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL2N1c3RvbS1jYXJkcy9jYXJkLW1vZGRlci5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jdXN0b20tY2FyZHMvY2FyZC10b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb252ZXJ0RW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2Zha2VfZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IERlbW9Db25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRlbW9FbnRpdGllc0ppbXBvd2VyOiBEZW1vQ29uZmlnW1wiZW50aXRpZXNcIl0gPSAoKSA9PlxuICBjb252ZXJ0RW50aXRpZXMoe1xuICAgIFwiem9uZS5wb3dlcnRlY1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5wb3dlcnRlY1wiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQb3dlcnRlY1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpicmllZmNhc2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUua2luZHlcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUua2luZHlcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMjUsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiS2luZHlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6c2Nob29sXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLnN0b2NrbGFuZHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuc3RvY2tsYW5kc1wiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAyMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RvY2tsYW5kc1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpjYXJ0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLnBhcmxvdXJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUucGFybG91clwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXJsb3VyXCIsXG4gICAgICAgIGljb246IFwibWRpOmNvZmZlZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS53b3JrX2hvbWVfYmVhY29uXzI1bWluc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS53b3JrX2hvbWVfYmVhY29uXzI1bWluc1wiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJXb3JrIEhvbWUgQmVhY29uIDI1bWluc1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpjYXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUud29ya19ob21lX2JlYWNvbl8xNW1pbnNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUud29ya19ob21lX2JlYWNvbl8xNW1pbnNcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiV29yayBIb21lIEJlYWNvbiAxNW1pbnNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2FyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLndvcmtfaG9tZV9iZWFjb25fNW1pbnNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUud29ya19ob21lX2JlYWNvbl81bWluc1wiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJXb3JrIEhvbWUgQmVhY29uIDVtaW5zXCIsXG4gICAgICAgIGljb246IFwibWRpOmNhclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5kYXJ3aW5cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuZGFyd2luXCIsXG4gICAgICBzdGF0ZTogXCJ6b25pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICByYWRpdXM6IDUwMDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRhcndpblwiLFxuICAgICAgICBpY29uOiBcIm1kaTphaXJwbGFuZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5icmlzYmFuZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5icmlzYmFuZVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MDAwMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCcmlzYmFuZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjYXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUuc3lkbmV5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLnN5ZG5leVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MDAwMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTeWRuZXlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWlycGxhbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUubWVsYm91cm5lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLm1lbGJvdXJuZVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MDAwMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJNZWxib3VybmVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWlycGxhbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUucGVydGhcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUucGVydGhcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAwMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGVydGhcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWlycGxhbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUuYWRlbGFpZGVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuYWRlbGFpZGVcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAwMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQWRlbGFpZGVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWlycGxhbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUudGFzbWFuaWFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUudGFzbWFuaWFcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAwMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVGFzbWFuaWFcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWlycGxhbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUudWtcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUudWtcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwMDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlVLXCIsXG4gICAgICAgIGljb246IFwibWRpOmVhcnRoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmZyYW5jZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5mcmFuY2VcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwMDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZyYW5jZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTplYXJ0aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5uZXRoZXJsYW5kc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5uZXRoZXJsYW5kc1wiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAxMDAwMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTmV0aGVybGFuZHNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6ZWFydGhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUuc3dpdHplcmxhbmRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuc3dpdHplcmxhbmRcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwMDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlN3aXR6ZXJsYW5kXCIsXG4gICAgICAgIGljb246IFwibWRpOmVhcnRoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLml0YWx5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLml0YWx5XCIsXG4gICAgICBzdGF0ZTogXCJ6b25pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEwMDAwMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJJdGFseVwiLFxuICAgICAgICBpY29uOiBcIm1kaTplYXJ0aFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5ob21lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLmhvbWVcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIktpbmdpYSBDYXN0bGVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6aG9tZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmxvd2VyX3RlbXBlcmF0dXJlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubG93ZXJfdGVtcGVyYXR1cmVcIixcbiAgICAgIHN0YXRlOiBcIjI2LjRcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY291bnRfc2Vuc29yczogMixcbiAgICAgICAgbWF4X3ZhbHVlOiAyNy4yLFxuICAgICAgICBtZWFuOiAyNi40LFxuICAgICAgICBtaW5fdmFsdWU6IDI1LjYsXG4gICAgICAgIGxhc3Q6IDI3LjIsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiXFx1MDBiMENcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEb3duc3RhaXJzIFRlbXBlcmF0dXJlXCIsXG4gICAgICAgIGljb246IFwibWRpOnNvZmFcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci51cHN0YWlyc190ZW1wZXJhdHVyZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVwc3RhaXJzX3RlbXBlcmF0dXJlXCIsXG4gICAgICBzdGF0ZTogXCIyOC41XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvdW50X3NlbnNvcnM6IDQsXG4gICAgICAgIG1heF92YWx1ZTogMjkuNSxcbiAgICAgICAgbWVhbjogMjguNSxcbiAgICAgICAgbWluX3ZhbHVlOiAyNy43LFxuICAgICAgICBsYXN0OiAyNy43LFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIlxcdTAwYjBDXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVXBzdGFpcnMgVGVtcGVyYXR1cmVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6aG90ZWxcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5uZXh0X2J1c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLm5leHRfYnVzXCIsXG4gICAgICBzdGF0ZTogXCIxNlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1pblwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlRpbWUgdG8gTmV4dCBCdXNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YnVzLWNsb2NrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuYmF0dGVyeV90aW5hXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IuYmF0dGVyeV90aW5hXCIsXG4gICAgICBzdGF0ZTogXCIxMVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIiVcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCYXR0ZXJ5IFRpbmFcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YmF0dGVyeS1jaGFyZ2luZ1wiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiYmF0dGVyeVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmJhdHRlcnlfamFtZXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5iYXR0ZXJ5X2phbWVzXCIsXG4gICAgICBzdGF0ZTogXCIxMDBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCIlXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmF0dGVyeSBKYW1lc1wiLFxuICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiYmF0dGVyeVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmphbWVzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IuamFtZXNcIixcbiAgICAgIHN0YXRlOiBcIkhvbWVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJKYW1lc1wiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YWxrXCIsXG4gICAgICAgIGVudGl0eV9waWN0dXJlOiBcIi9sb2NhbC9qYW1lcy5qcGdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50aW5hXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudGluYVwiLFxuICAgICAgc3RhdGU6IFwiSG9tZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlRpbmFcIixcbiAgICAgICAgaWNvbjogXCJtZGk6d2Fsa1wiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogXCIvbG9jYWwvdGluYS5qcGdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5hcWlcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5hcWlcIixcbiAgICAgIHN0YXRlOiBcIjIwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiQWlyIFF1YWxpdHkgSW5kZXhcIiB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuYm9tX3RlbXBcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5ib21fdGVtcFwiLFxuICAgICAgc3RhdGU6IFwiMjEuOVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIlxcdTAwYjBDXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiR29sZCBDb2FzdCBUZW1wZXJhdHVyZVwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5mb3Jrc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmZvcmtzXCIsXG4gICAgICBzdGF0ZTogXCIzMlwiLFxuICAgICAgYXR0cmlidXRlczogeyBmcmllbmRseV9uYW1lOiBcImZvcmtzXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN0YXJzX2xhc3Rfd2Vla1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN0YXJzX2xhc3Rfd2Vla1wiLFxuICAgICAgc3RhdGU6IFwiMFwiLFxuICAgICAgYXR0cmlidXRlczogeyBmcmllbmRseV9uYW1lOiBcIkxhc3QgV2Vla1wiIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5pc3N1ZXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5pc3N1ZXNcIixcbiAgICAgIHN0YXRlOiBcIjI2XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiaXNzdWVzXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN0YXJzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3RhcnNcIixcbiAgICAgIHN0YXRlOiBcIjI4MlwiLFxuICAgICAgYXR0cmlidXRlczogeyBmcmllbmRseV9uYW1lOiBcInN0YXJzXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN0YXJzX3RoaXNfbW9udGhcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zdGFyc190aGlzX21vbnRoXCIsXG4gICAgICBzdGF0ZTogXCIxMlwiLFxuICAgICAgYXR0cmlidXRlczogeyBmcmllbmRseV9uYW1lOiBcIlRoaXMgTW9udGhcIiB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3RhcnNfbGFzdF9tb250aFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN0YXJzX2xhc3RfbW9udGhcIixcbiAgICAgIHN0YXRlOiBcIjBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJMYXN0IE1vbnRoXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmdpdF9zdGFyc19uZXh0X2RpZlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmdpdF9zdGFyc19uZXh0X2RpZlwiLFxuICAgICAgc3RhdGU6IFwiNDVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJOZXh0IFRhcmdldFwiIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5naXRfc3RhcnNfbGFzdF9kaWZcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5naXRfc3RhcnNfbGFzdF9kaWZcIixcbiAgICAgIHN0YXRlOiBcIjMxXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiTmV4dCBUYXJnZXRcIiB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3Vic2NyaWJlcnNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zdWJzY3JpYmVyc1wiLFxuICAgICAgc3RhdGU6IFwiMzJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJzdWJzY3JpYmVyc1wiIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zdGFyc190aGlzX3dlZWtcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zdGFyc190aGlzX3dlZWtcIixcbiAgICAgIHN0YXRlOiBcIjEyXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiVGhpcyBXZWVrXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmdpdF9zdGFyc190cmVuZF9kaWZcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5naXRfc3RhcnNfdHJlbmRfZGlmXCIsXG4gICAgICBzdGF0ZTogXCIxNDg2XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiVHJlbmRpbmcgVGFyZ2V0XCIgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5qYW1lc19iYWdfc3RhdHVzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmphbWVzX2JhZ19zdGF0dXNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkphbWVzIEJhZ1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpicmllZmNhc2VcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci50aW5hX2dwc19zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IudGluYV9ncHNfc3RhdHVzXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlRpbmEgR1BTXCIsXG4gICAgICAgIGljb246IFwibWRpOmNyb3NzaGFpcnMtZ3BzXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJjb25uZWN0aXZpdHlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IudGluYV9ibGVfc3RhdHVzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnRpbmFfYmxlX3N0YXR1c1wiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJUaW5hIEJMRVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpibHVldG9vdGgtYXVkaW9cIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5qYW1lc19jYXJfc3RhdHVzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmphbWVzX2Nhcl9zdGF0dXNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkphbWVzIENhclwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjYXItc2lkZVwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiY29ubmVjdGl2aXR5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmphbWVzX2JsZV9zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuamFtZXNfYmxlX3N0YXR1c1wiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSmFtZXMgQkxFXCIsXG4gICAgICAgIGljb246IFwibWRpOmJsdWV0b290aC1hdWRpb1wiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiY29ubmVjdGl2aXR5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLnRpbmFfa2V5c19zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IudGluYV9rZXlzX3N0YXR1c1wiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJUaW5hIEtleXNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6a2V5XCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJjb25uZWN0aXZpdHlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuamFtZXNfa2V5c19zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuamFtZXNfa2V5c19zdGF0dXNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkphbWVzIEtleXNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6a2V5XCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJjb25uZWN0aXZpdHlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuamFtZXNfZ3BzX3N0YXR1c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5qYW1lc19ncHNfc3RhdHVzXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkphbWVzIEdQU1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpjcm9zc2hhaXJzLWdwc1wiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiY29ubmVjdGl2aXR5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmdhcmFnZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5nYXJhZ2VcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkdhcmFnZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpnYXJhZ2VcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImRvb3JcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IucmVjeWNsZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5yZWN5Y2xlXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJSZWN5Y2xlXCIsIGljb246IFwibWRpOnJlY3ljbGVcIiB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLnRyYXNoXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnRyYXNoXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJUcmFzaFwiLCBpY29uOiBcIm1kaTpkZWxldGVcIiB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmFsYXJtXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmFsYXJtXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJBbGFybVwiLCBpY29uOiBcIm1kaTpzZWN1cml0eS1ob21lXCIgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci53aW5kb3dzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLndpbmRvd3NcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiV2luZG93c1wiLFxuICAgICAgICBpY29uOiBcIm1kaTp3aW5kb3ctb3BlblwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwid2luZG93XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmRvb3JzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmRvb3JzXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEb29yc1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpkb29yLWNsb3NlZFwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiZG9vclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IubGlnaHRzXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkxpZ2h0c1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpsaWdodGJ1bGJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImxpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJhbGFybV9jb250cm9sX3BhbmVsLmhhX2FsYXJtXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJhbGFybV9jb250cm9sX3BhbmVsLmhhX2FsYXJtXCIsXG4gICAgICBzdGF0ZTogXCJkaXNhcm1lZFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjb2RlX2Zvcm1hdDogbnVsbCxcbiAgICAgICAgY2hhbmdlZF9ieTogbnVsbCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJIQSBBbGFybVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZWN1cml0eS1ob21lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWU3M2MwOVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNjMDlcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk9wZW4gc2luY2VcIjogMCxcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDksXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmFjayBEb29yIFNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiZG9vclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNhZjRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYWY0XCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJPcGVuIHNpbmNlXCI6IDAsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDQ5LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIktpdGNoZW4gV2luZG93XCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ3aW5kb3dcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMjJjMmYyMVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMmMyZjIxXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJObyBtb3Rpb24gc2luY2VcIjogXCIxMjBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNTMsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RhaXJjYXNlIE1vdGlvbiBTZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNhNzNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYTczXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJPcGVuIHNpbmNlXCI6IDAsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDQ5LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkphY2tzb24gV2luZG93XCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ3aW5kb3dcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMjAxMzUxY1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDEzNTFjXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJObyBtb3Rpb24gc2luY2VcIjogXCIxODBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNTMsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSmFja3NvbiBSb29tIE1vdGlvbiBTZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNhYWRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYWFkXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJPcGVuIHNpbmNlXCI6IDAsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDU3LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkh1ZHNvbiBXaW5kb3dcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIndpbmRvd1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDA2ZDQ2XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMDZkNDZcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk5vIG1vdGlvbiBzaW5jZVwiOiBcIjEyMFwiLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0NSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJIdWRzb24gUm9vbSBNb3Rpb24gU2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTc0ODc1XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWU3NDg3NVwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJPcGVuIHNpbmNlXCI6IFwiMzAwXCIsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDQ3LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkJhdGhyb29tIFdpbmRvd1wiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwid2luZG93XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMGU0YWJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMjAwZTRhYlwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIFwiTm8gbW90aW9uIHNpbmNlXCI6IFwiMTgwMFwiLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0NSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCYXRocm9vbSBNb3Rpb24gU2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1ZDExOFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxZTVkMTE4XCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJObyBtb3Rpb24gc2luY2VcIjogXCIxMjBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDksXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIE1vdGlvbiBTZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxZTYzODAzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFlNjM4MDNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk5vIG1vdGlvbiBzaW5jZVwiOiBcIjEyMFwiLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0OSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCZWRyb29tIE1vdGlvbiBEZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFmMzY3NDFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZjM2NzQxXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk9wZW4gc2luY2VcIjogXCIzMDBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDUsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVkcm9vbSBXaW5kb3dcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIndpbmRvd1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDBlYTViXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMGVhNWJcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk5vIG1vdGlvbiBzaW5jZVwiOiBcIjEyMDBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDksXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGF0aW8gTW90aW9uIFNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwibW90aW9uXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLndhdGVyX2xlYWtfc2Vuc29yXzE1OGQwMDAyNmUyNmRjXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLndhdGVyX2xlYWtfc2Vuc29yXzE1OGQwMDAyNmUyNmRjXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDcsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiS2l0Y2hlbiBMZWFrIFNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwibW9pc3R1cmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAyMjU0MzJkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMjI1NDMyZFwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIFwiT3BlbiBzaW5jZVwiOiAwLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0NyxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXRpbyBEb29yIFNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiZG9vclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDIyMDE2YjJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAyMjAxNmIyXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJPcGVuIHNpbmNlXCI6IDAsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDQzLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZyb250IERvb3IgU2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJkb29yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFlNWQxNDdcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1ZDE0N1wiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIFwiTm8gbW90aW9uIHNpbmNlXCI6IFwiMTgwMFwiLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA1MSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJFbnRyYW5jZSBNb3Rpb24gU2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3Iuc21va2Vfc2Vuc29yXzE1OGQwMDAxYjhkZGM3XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnNtb2tlX3NlbnNvcl8xNThkMDAwMWI4ZGRjN1wiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIERlbnNpdHk6IDAsXG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDU5LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRvd25zdGFpcnMgU21va2UgRGV0ZWN0b3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcInNtb2tlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLnNtb2tlX3NlbnNvcl8xNThkMDAwMWI4ZGViYVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5zbW9rZV9zZW5zb3JfMTU4ZDAwMDFiOGRlYmFcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBEZW5zaXR5OiAwLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA2NSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJVcHN0YWlycyBTbW9rZSBEZXRlY3RvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwic21va2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1Y2YxMVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxZTVjZjExXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJObyBtb3Rpb24gc2luY2VcIjogXCIzMDBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDcsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGxheXJvb20gTW90aW9uIFNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwibW90aW9uXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLndhdGVyX2xlYWtfc2Vuc29yXzE1OGQwMDAyMzM4NjUxXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLndhdGVyX2xlYWtfc2Vuc29yXzE1OGQwMDAyMzM4NjUxXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDcsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmF0aHJvb20gTGVhayBTZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vaXN0dXJlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IudXNfYWlyX3BvbGx1dGlvbl9sZXZlbF8yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudXNfYWlyX3BvbGx1dGlvbl9sZXZlbF8yXCIsXG4gICAgICBzdGF0ZTogXCJHb29kXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBcIkRhdGEgcHJvdmlkZWQgYnkgQWlyVmlzdWFsXCIsXG4gICAgICAgIGxhdGk6IC0yNy45NjcyNCxcbiAgICAgICAgbG9uZzogMTUzLjM5Nzk2LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlUuUy4gQWlyIFBvbGx1dGlvbiBMZXZlbFwiLFxuICAgICAgICBpY29uOiBcIm1kaTplbW90aWNvbi1leGNpdGVkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IudXNfbWFpbl9wb2xsdXRhbnRfMlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVzX21haW5fcG9sbHV0YW50XzJcIixcbiAgICAgIHN0YXRlOiBcIlBNMi41XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBcIkRhdGEgcHJvdmlkZWQgYnkgQWlyVmlzdWFsXCIsXG4gICAgICAgIHBvbGx1dGFudF9zeW1ib2w6IFwicDJcIixcbiAgICAgICAgcG9sbHV0YW50X3VuaXQ6IFwiXFx1MDBiNWcvbTNcIixcbiAgICAgICAgbGF0aTogLTI3Ljk2NzI0LFxuICAgICAgICBsb25nOiAxNTMuMzk3OTYsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVS5TLiBNYWluIFBvbGx1dGFudFwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjaGVtaWNhbC13ZWFwb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBEZW1vQ29uZmlnIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZW1vTG92ZWxhY2VKaW1wb3dlciB9IGZyb20gXCIuL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBkZW1vRW50aXRpZXNKaW1wb3dlciB9IGZyb20gXCIuL2VudGl0aWVzXCI7XG5pbXBvcnQgeyBkZW1vVGhlbWVKaW1wb3dlciB9IGZyb20gXCIuL3RoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCBkZW1vSmltcG93ZXI6IERlbW9Db25maWcgPSB7XG4gIGF1dGhvck5hbWU6IFwiSmltcG93ZXJcIixcbiAgYXV0aG9yVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01jQ2FydGh5NzkvSG9tZS1Bc3Npc3RhbnQtQ29uZmlnXCIsXG4gIG5hbWU6IFwiS2luZ2lhIENhc3RsZVwiLFxuICBsb3ZlbGFjZTogZGVtb0xvdmVsYWNlSmltcG93ZXIsXG4gIGVudGl0aWVzOiBkZW1vRW50aXRpZXNKaW1wb3dlcixcbiAgdGhlbWU6IGRlbW9UaGVtZUppbXBvd2VyLFxufTtcbiIsImltcG9ydCBcIi4uLy4uL2N1c3RvbS1jYXJkcy9jYXJkLW1vZGRlclwiO1xuaW1wb3J0IHsgRGVtb0NvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVtb0xvdmVsYWNlSmltcG93ZXI6IERlbW9Db25maWdbXCJsb3ZlbGFjZVwiXSA9ICgpID0+ICh7XG4gIG5hbWU6IFwiS2luZ2lhIENhc3RsZVwiLFxuICByZXNvdXJjZXM6IFtcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbV91aS9kYXJrLXNreS13ZWF0aGVyLWNhcmQuanM/dj00XCIsXG4gICAgLy8gICB0eXBlOiBcImpzXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbV91aS9taW5pLW1lZGlhLXBsYXllci1idW5kbGUuanM/dj0wLjkuOFwiLFxuICAgIC8vICAgdHlwZTogXCJtb2R1bGVcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHVybDogXCIvbG9jYWwvY3VzdG9tX3VpL3RyYWNrZXItY2FyZC5qcz92PTAuMS41XCIsXG4gICAgLy8gICB0eXBlOiBcImpzXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbV91aS9zdXJ2ZWlsbGFuY2UtY2FyZC5qcz92PTAuMC4xXCIsXG4gICAgLy8gICB0eXBlOiBcIm1vZHVsZVwiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b21fdWkvbWluaS1ncmFwaC1jYXJkLWJ1bmRsZS5qcz92PTAuMS4wXCIsXG4gICAgLy8gICB0eXBlOiBcIm1vZHVsZVwiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b21fdWkvc2xpZGVyLWVudGl0eS1yb3cuanM/dj1kNmRhNzVcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHVybDpcbiAgICAvLyAgICAgXCIvbG9jYWwvY3VzdG9tX3VpL2NvbXBhY3QtY3VzdG9tLWhlYWRlci9jb21wYWN0LWN1c3RvbS1oZWFkZXIuanM/dj0wLjIuN1wiLFxuICAgIC8vICAgdHlwZTogXCJqc1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b21fdWkvd2F6ZS1jYXJkLmpzP3Y9MS4xLjFcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHVybDogXCIvbG9jYWwvY3VzdG9tX3VpL2NpcmNsZS1zZW5zb3ItY2FyZC5qcz92PTEuMi4wXCIsXG4gICAgLy8gICB0eXBlOiBcIm1vZHVsZVwiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b21fdWkvbW9uc3Rlci1jYXJkLmpzP3Y9MC4yLjNcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICBdLFxuICB2aWV3czogW1xuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHsgdHlwZTogXCJjdXN0b206aGEtZGVtby1jYXJkXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWQgMXB4IHJnYmEoMTAwLDEwMCwxMDAsMC4zKVwiLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImN1c3RvbTpjYXJkLW1vZGRlclwiLFxuICAgICAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL2hvbWUvamFtZXNfMTAuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkphbWVzIC0tIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuamFtZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3MyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcF9hY3Rpb246IFwibW9yZV9pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmJhdHRlcnlfamFtZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI4NyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmJhdHRlcnlfamFtZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIxMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmphbWVzX2dwc19zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmphbWVzX2JsZV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI0MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmphbWVzX2tleXNfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNTUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5qYW1lc19iYWdfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5qYW1lc19jYXJfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWQgMXB4IHJnYmEoMTAwLDEwMCwxMDAsMC4zKVwiLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImN1c3RvbTpjYXJkLW1vZGRlclwiLFxuICAgICAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL2hvbWUvdGluYV80LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJUaW5hIC0tIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg5JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI3JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudGluYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg5JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjczJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5iYXR0ZXJ5X3RpbmFcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI4NyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmJhdHRlcnlfdGluYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjkyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IudGluYV9ncHNfc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci50aW5hX2JsZV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI0MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnRpbmFfa2V5c19zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL2hvbWUvaG91c2VfNC5wbmdcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTIlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBcImdyb3VwLmRvd25zdGFpcnNfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcImhvbWVhc3Npc3RhbnQudG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmxpZ2h0c1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4OCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5hbGFybVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4OCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjE0JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcnNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIyMyVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLndpbmRvd3NcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzMiVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnRyYXNoXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNDElXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5yZWN5Y2xlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzIlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiBcIm1vcmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmxvd2VyX3RlbXBlcmF0dXJlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjk1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzIlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5sb3dlcl90ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjg3JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgdGFwX2FjdGlvbjogXCJtb3JlLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci51cHN0YWlyc190ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjg3JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudXBzdGFpcnNfdGVtcGVyYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNTYlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3OCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnNtb2tlX3NlbnNvcl8xNThkMDAwMWI4ZGRjN1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjc4JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iuc21va2Vfc2Vuc29yXzE1OGQwMDAxYjhkZWJhXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjYxJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjQlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5nYXJhZ2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI5JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuYm9tX3RlbXBcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgXCJib3gtc2hhZG93XCI6IFwiM3B4IDNweCByZ2JhKDAsMCwwLDAuNClcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9qaW1wb3dlci9ob21lL2dpdC5wbmdcIixcbiAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogXCIxMCVcIixcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTIwJVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIxMyVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VydmljZS1idXR0b25cIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInB5dGhvbl9zY3JpcHQuZ2l0aHViX3NjYXBlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0YXJnYXplcnNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI4JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3RhcnNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjQ1JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU3Vic2NyaWJlcnNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjU5JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3Vic2NyaWJlcnNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjY5JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRm9ya3NcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjc4JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuZm9ya3NcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMjAlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjg4JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSXNzdWVzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogXCIxMCVcIixcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTIwJVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI5NyVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmlzc3Vlc1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV4dCBUYXJnZXRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmdpdF9zdGFyc19uZXh0X2RpZlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiMzUlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGFzdCBUYXJnZXRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmdpdF9zdGFyc19sYXN0X2RpZlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiNDUlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjEwJVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXJ2aWNlLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwicHl0aG9uX3NjcmlwdC5naXRodWJfc2NhcGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVHJlbmRpbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjQ1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmdpdF9zdGFyc190cmVuZF9kaWZcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VydmljZS1idXR0b25cIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInB5dGhvbl9zY3JpcHQuZ2l0aHViX3NjYXBlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoaXMgTW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI5NSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN0YXJzX3RoaXNfbW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VydmljZS1idXR0b25cIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInB5dGhvbl9zY3JpcHQuZ2l0aHViX3NjYXBlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxhc3QgTW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI5NSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN0YXJzX2xhc3RfbW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjQ1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI4MyVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VydmljZS1idXR0b25cIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInB5dGhvbl9zY3JpcHQuZ2l0aHViX3NjYXBlclwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoaXMgV2Vla1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiNDUlXCIsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjk1JVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3RhcnNfdGhpc193ZWVrXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRvcDogXCI1NSVcIixcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiODMlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlcnZpY2UtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZTogXCJweXRob25fc2NyaXB0LmdpdGh1Yl9zY2FwZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMYXN0IFdlZWtcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIjU1JVwiLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCI5NSVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN0YXJzX2xhc3Rfd2Vla1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbGVtZW50c1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICBzdHlsZToge1xuICAgICAgICAgICAgLy8gICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiAndXJsKFwiL2Fzc2V0cy9qaW1wb3dlci9jYXJkYmFja0sucG5nXCIpJyxcbiAgICAgICAgICAgIC8vICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcIjEwMCUgNDAwcHhcIixcbiAgICAgICAgICAgIC8vICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgLy8gICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogXCIjOTk5OTk5XCIsXG4gICAgICAgICAgICAvLyAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSg1MCw1MCw1MCwwLjMpXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAvLyAgIGNhcmQ6IHtcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfdmlzaWJpbGl0eTogXCJzZW5zb3IuZGFya19za3lfdmlzaWJpbGl0eVwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV9zdW46IFwic3VuLnN1blwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV9kYWlseV9zdW1tYXJ5OlxuICAgICAgICAgICAgLy8gICAgICAgXCJzZW5zb3IuYm9tX2djX2ZvcmVjYXN0X2RldGFpbGVkX3N1bW1hcnlfMFwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV90ZW1wZXJhdHVyZTogXCJzZW5zb3IuYm9tX3RlbXBcIixcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfZm9yZWNhc3RfaGlnaF90ZW1wXzM6XG4gICAgICAgICAgICAvLyAgICAgICBcInNlbnNvci5ib21fZ2NfZm9yZWNhc3RfbWF4X3RlbXBfY18zXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2hpZ2hfdGVtcF8yOlxuICAgICAgICAgICAgLy8gICAgICAgXCJzZW5zb3IuYm9tX2djX2ZvcmVjYXN0X21heF90ZW1wX2NfMlwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV9mb3JlY2FzdF9oaWdoX3RlbXBfNTpcbiAgICAgICAgICAgIC8vICAgICAgIFwic2Vuc29yLmJvbV9nY19mb3JlY2FzdF9tYXhfdGVtcF9jXzVcIixcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfZm9yZWNhc3RfaGlnaF90ZW1wXzQ6XG4gICAgICAgICAgICAvLyAgICAgICBcInNlbnNvci5ib21fZ2NfZm9yZWNhc3RfbWF4X3RlbXBfY180XCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X3dpbmRfc3BlZWQ6IFwic2Vuc29yLmJvbV93aW5kX3NwXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2ljb25fNDogXCJzZW5zb3IuZGFya19za3lfaWNvbl80XCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2ljb25fNTogXCJzZW5zb3IuZGFya19za3lfaWNvbl81XCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2ljb25fMjogXCJzZW5zb3IuZGFya19za3lfaWNvbl8yXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2ljb25fMzogXCJzZW5zb3IuZGFya19za3lfaWNvbl8zXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2ljb25fMTogXCJzZW5zb3IuZGFya19za3lfaWNvbl8xXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2hpZ2hfdGVtcF8xOlxuICAgICAgICAgICAgLy8gICAgICAgXCJzZW5zb3IuYm9tX2djX2ZvcmVjYXN0X21heF90ZW1wX2NfMVwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV93aW5kX2JlYXJpbmc6IFwic2Vuc29yLmJvbV93aW5kX2JlYXJcIixcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfZm9yZWNhc3RfbG93X3RlbXBfMjpcbiAgICAgICAgICAgIC8vICAgICAgIFwic2Vuc29yLmJvbV9nY19mb3JlY2FzdF9taW5fdGVtcF9jXzJcIixcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfZm9yZWNhc3RfbG93X3RlbXBfMzpcbiAgICAgICAgICAgIC8vICAgICAgIFwic2Vuc29yLmJvbV9nY19mb3JlY2FzdF9taW5fdGVtcF9jXzNcIixcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHlfcHJlc3N1cmU6IFwic2Vuc29yLmJvbV9wcmVzXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2xvd190ZW1wXzE6XG4gICAgICAgICAgICAvLyAgICAgICBcInNlbnNvci5ib21fZ2NfZm9yZWNhc3RfbWluX3RlbXBfY18xXCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2xvd190ZW1wXzQ6XG4gICAgICAgICAgICAvLyAgICAgICBcInNlbnNvci5ib21fZ2NfZm9yZWNhc3RfbWluX3RlbXBfY180XCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2ZvcmVjYXN0X2xvd190ZW1wXzU6XG4gICAgICAgICAgICAvLyAgICAgICBcInNlbnNvci5ib21fZ2NfZm9yZWNhc3RfbWluX3RlbXBfY181XCIsXG4gICAgICAgICAgICAvLyAgICAgZW50aXR5X2h1bWlkaXR5OiBcInNlbnNvci5ib21faHVtZFwiLFxuICAgICAgICAgICAgLy8gICAgIHR5cGU6IFwiY3VzdG9tOmRhcmstc2t5LXdlYXRoZXItY2FyZFwiLFxuICAgICAgICAgICAgLy8gICAgIGVudGl0eV9jdXJyZW50X2NvbmRpdGlvbnM6IFwic2Vuc29yLmRhcmtfc2t5X2ljb25cIixcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIHN0eWxlOiB7XG4gICAgICAgICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6ICd1cmwoXCIvYXNzZXRzL2ppbXBvd2VyL2hvbWUvd2F6ZV81LnBuZ1wiKScsXG4gICAgICAgICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCIxMDAlIDQwMHB4XCIsXG4gICAgICAgICAgICAvLyAgICAgXCJib3gtc2hhZG93XCI6IFwiM3B4IDNweCByZ2JhKDAsMCwwLDAuNClcIixcbiAgICAgICAgICAgIC8vICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICAvLyAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSg1MCw1MCw1MCwwLjMpXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAvLyAgIGNhcmQ6IHtcbiAgICAgICAgICAgIC8vICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiBcIkphbWVzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvbmU6IFwiem9uZS5ob21lXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuamFtZXNfdG9faG9tZVwiLFxuICAgICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogXCJUaW5hXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvbmU6IFwiem9uZS5ob21lXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudGluYV90b19ob21lXCIsXG4gICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiBcIldvcmtcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgem9uZTogXCJ6b25lLnBvd2VydGVjXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuY29tbXV0ZV90b193b3JrXCIsXG4gICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAvLyAgICAgdHlwZTogXCJjdXN0b206d2F6ZS1jYXJkXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL2hvbWUvYnVzXzEwLmpwZ1wiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjNweFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5uZXh0X2J1c1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1OXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5uZXh0X2J1c1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbGVtZW50c1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGNhcmRzOiBbXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIHN0eWxlOiB7XG4gICAgICAgIC8vICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAvLyAgICAgICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICAgICAgLy8gICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAvLyAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgIC8vICAgICAgIGNhcmQ6IHtcbiAgICAgICAgLy8gICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgIC8vICAgICAgICAgZW50aXR5OiBcImNhbWVyYS5ib21fcmFkYXJcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICAvLyB7XG4gICAgICAgIC8vICAgICAvLyAgIHN0eWxlOiB7XG4gICAgICAgIC8vICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6ICd1cmwoXCIvYXNzZXRzL2ppbXBvd2VyL2NhcmRiYWNrSy5wbmdcIiknLFxuICAgICAgICAvLyAgICAgLy8gICAgIFwiYmFja2dyb3VuZC1zaXplXCI6IFwiMTAwJSA1MjVweFwiLFxuICAgICAgICAvLyAgICAgLy8gICAgIFwiYm94LXNoYWRvd1wiOiBcIjNweCAzcHggcmdiYSgwLDAsMCwwLjQpXCIsXG4gICAgICAgIC8vICAgICAvLyAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAvLyAgICAgLy8gICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICAgICAgLy8gICAgIC8vICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICAgIC8vICAgICAvLyAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZ2JhKDEwMCwxMDAsMTAwLDAuMylcIixcbiAgICAgICAgLy8gICAgIC8vICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDUwLDUwLDUwLDAuMylcIixcbiAgICAgICAgLy8gICAgIC8vICAgfSxcbiAgICAgICAgLy8gICAgIC8vICAgdHlwZTogXCJjdXN0b206Y2FyZC1tb2RkZXJcIixcbiAgICAgICAgLy8gICAgIC8vICAgY2FyZDoge1xuICAgICAgICAvLyAgICAgLy8gICAgIHRpdGxlOiBudWxsLFxuICAgICAgICAvLyAgICAgLy8gICAgIHR5cGU6IFwiY3VzdG9tOnRyYWNrZXItY2FyZFwiLFxuICAgICAgICAvLyAgICAgLy8gICAgIHRyYWNrZXJzOiBbXG4gICAgICAgIC8vICAgICAvLyAgICAgICBcInNlbnNvci5jdXN0b21fY2FyZF90cmFja2VyXCIsXG4gICAgICAgIC8vICAgICAvLyAgICAgICBcInNlbnNvci5jdXN0b21fY29tcG9uZW50X3RyYWNrZXJcIixcbiAgICAgICAgLy8gICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgICAgLy8gICB9LFxuICAgICAgICAvLyAgICAgLy8gfSxcbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBpY29uOiBcIm1kaTpjYXN0bGVcIixcbiAgICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgJ2NlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIvYXNzZXRzL2ppbXBvd2VyL2JhY2tncm91bmQtMTUuanBnXCIpIGZpeGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiAndXJsKFwiL2Fzc2V0cy9qaW1wb3dlci9jYXJkYmFja0sucG5nXCIpJyxcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcIjEwMCUgNjhweFwiLFxuICAgICAgICAgICAgICAgIFwiYm94LXNoYWRvd1wiOiBcIjNweCAzcHggcmdiYSgwLDAsMCwwLjQpXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWQgMXB4IHJnYmEoMTAwLDEwMCwxMDAsMC4zKVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJnYmEoNTAsNTAsNTAsMC4zKVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBcImN1c3RvbTpjYXJkLW1vZGRlclwiLFxuICAgICAgICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9qaW1wb3dlci9zZWN1cml0eS9hbGFybV8zLmpwZ1wiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIxNSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJhbGFybV9jb250cm9sX3BhbmVsLmhhX2FsYXJtXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiQWxhcm06IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzMiVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImFsYXJtX2NvbnRyb2xfcGFuZWwuaGFfYWxhcm1cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6ICd1cmwoXCIvYXNzZXRzL2ppbXBvd2VyL2NhcmRiYWNrSy5wbmdcIiknLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6IFwiMTAwJSA2OHB4XCIsXG4gICAgICAgICAgICAgICAgXCJib3gtc2hhZG93XCI6IFwiM3B4IDNweCByZ2JhKDAsMCwwLDAuNClcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSg1MCw1MCw1MCwwLjMpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL3NlY3VyaXR5L3Ntb2tlXzQuanBnXCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4OCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjE1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iuc21va2Vfc2Vuc29yXzE1OGQwMDAxYjhkZGM3XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiRG93bnN0YWlyczogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4OSVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjMyJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5zbW9rZV9zZW5zb3JfMTU4ZDAwMDFiOGRkYzdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnNtb2tlX3NlbnNvcl8xNThkMDAwMWI4ZGViYVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIlVwc3RhaXJzOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg5JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzclXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnNtb2tlX3NlbnNvcl8xNThkMDAwMWI4ZGViYVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbGVtZW50c1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogJ3VybChcIi9hc3NldHMvamltcG93ZXIvY2FyZGJhY2tLLnBuZ1wiKScsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCIxMDAlIDY4cHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZ2JhKDEwMCwxMDAsMTAwLDAuMylcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDUwLDUwLDUwLDAuMylcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJjdXN0b206Y2FyZC1tb2RkZXJcIixcbiAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvamltcG93ZXIvc2VjdXJpdHkvYWlyXzguanBnXCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5haXJ2aXN1YWwuY29tL2Fzc2V0cy9hcWkvaWMtZmFjZS0xLWdyZWVuLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci51c19haXJfcG9sbHV0aW9uX2xldmVsXzJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaHNsKDEyMCwgNDElLCAzOSUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNDQlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci51c19haXJfcG9sbHV0aW9uX2xldmVsXzJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiaHNsKDEyMCwgNDElLCAzOSUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMDRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzAlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5hcWlcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MiVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudXNfbWFpbl9wb2xsdXRhbnRfMlwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MSVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjcyJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCIgfCA3LjIgdWcvbTNcIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci51c19tYWluX3BvbGx1dGFudF8yXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogJ3VybChcIi9hc3NldHMvamltcG93ZXIvY2FyZGJhY2tLLnBuZ1wiKScsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCIxMDAlIDY4cHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZ2JhKDEwMCwxMDAsMTAwLDAuMylcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDUwLDUwLDUwLDAuMylcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJjdXN0b206Y2FyZC1tb2RkZXJcIixcbiAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvamltcG93ZXIvc2VjdXJpdHkvZG9vcl8zLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIxNSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMjIwMTZiMlwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkZyb250OiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjkyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMjIwMTZiMlwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjM4JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAyMjU0MzJkXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiUGF0aW86IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzOCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAyMjU0MzJkXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNjElXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNjMDlcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJCYWNrOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjkyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNjElXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWU3M2MwOVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjg1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZ2FyYWdlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiR2FyYWdlOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjkyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiODUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmdhcmFnZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbGVtZW50c1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogJ3VybChcIi9hc3NldHMvamltcG93ZXIvY2FyZGJhY2tLLnBuZ1wiKScsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCIxMDAlIDY4cHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZ2JhKDEwMCwxMDAsMTAwLDAuMylcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDUwLDUwLDUwLDAuMylcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJjdXN0b206Y2FyZC1tb2RkZXJcIixcbiAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvamltcG93ZXIvc2VjdXJpdHkvd2luZG93XzIuanBnXCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYWY0XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiS2l0Y2hlbjogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNhZjRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYTczXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiSmFja3NvbjogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIxOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5kb29yX3dpbmRvd19zZW5zb3JfMTU4ZDAwMDFlNzNhNzNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjc1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTczYWFkXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiSHVkc29uOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWU3M2FhZFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjc1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTc0ODc1XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiQmF0aHJvb206IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZTc0ODc1XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWYzNjc0MVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkJlZHJvb206IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxZjM2NzQxXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogJ3VybChcIi9hc3NldHMvamltcG93ZXIvY2FyZGJhY2tLLnBuZ1wiKScsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCIxMDAlIDY4cHhcIixcbiAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjogXCIzcHggM3B4IHJnYmEoMCwwLDAsMC40KVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZ2JhKDEwMCwxMDAsMTAwLDAuMylcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDUwLDUwLDUwLDAuMylcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJjdXN0b206Y2FyZC1tb2RkZXJcIixcbiAgICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvamltcG93ZXIvc2VjdXJpdHkvbW90aW9uXzMuanBnXCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1ZDExOFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkxpdmluZzogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxZTVkMTE4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjgyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxZTVjZjExXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiUGxheXJvb206IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1Y2YxMVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI0NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWU1ZDE0N1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkVudHJhbmNlOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjU1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFlNWQxNDdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNDUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMGVhNWJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJQYXRpbzogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI1NSVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDBlYTViXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMTM1MWNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJKYWNrc29uOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMTM1MWNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMjAwNmQ0NlwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIkh1ZHNvbjogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCIxOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDA2ZDQ2XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFlNjM4MDNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJCZWRyb29tOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFlNjM4MDNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3NSVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIwMGU0YWJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJCYXRocm9vbTogXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MiVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjc1JVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMDBlNGFiXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjQ1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAyMmMyZjIxXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiU3RhaXJjYXNlOiBcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjU1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDIyYzJmMjFcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6ICd1cmwoXCIvYXNzZXRzL2ppbXBvd2VyL2NhcmRiYWNrSy5wbmdcIiknLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6IFwiMTAwJSA2OHB4XCIsXG4gICAgICAgICAgICAgICAgXCJib3gtc2hhZG93XCI6IFwiM3B4IDNweCByZ2JhKDAsMCwwLDAuNClcIixcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZCAxcHggcmdiYSgxMDAsMTAwLDEwMCwwLjMpXCIsXG4gICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiYSg1MCw1MCw1MCwwLjMpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOmNhcmQtbW9kZGVyXCIsXG4gICAgICAgICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ppbXBvd2VyL3NlY3VyaXR5L2xlYWtfMi5wbmdcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjg4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTUlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci53YXRlcl9sZWFrX3NlbnNvcl8xNThkMDAwMjMzODY1MVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIktpdGNoZW46IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODklXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzMiVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iud2F0ZXJfbGVha19zZW5zb3JfMTU4ZDAwMDIzMzg2NTFcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI2MCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLndhdGVyX2xlYWtfc2Vuc29yXzE1OGQwMDAyNmUyNmRjXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiQmF0aHJvb206IFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiODklXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI3NyVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iud2F0ZXJfbGVha19zZW5zb3JfMTU4ZDAwMDI2ZTI2ZGNcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgaWNvbjogXCJoYXNzOnNoaWVsZC1ob21lXCIsXG4gICAgICBuYW1lOiBcIlNlY3VyaXR5XCIsXG4gICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAnY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIi9hc3NldHMvamltcG93ZXIvYmFja2dyb3VuZC0xNS5qcGdcIikgZml4ZWQnLFxuICAgIH0sXG4gIF0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBkZW1vVGhlbWVKaW1wb3dlciA9ICgpID0+ICh7XG4gIFwidGV4dC1wcmltYXJ5LWNvbG9yXCI6IFwidmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVwiLFxuICBcInBhcGVyLWl0ZW0taWNvbi1jb2xvclwiOiBcInZhcigtLXByaW1hcnktdGV4dC1jb2xvcilcIixcbiAgXCJwcmltYXJ5LWNvbG9yXCI6IFwiIzUyOTRFMlwiLFxuICBcImxhYmVsLWJhZGdlLXJlZFwiOiBcInZhcigtLWFjY2VudC1jb2xvcilcIixcbiAgXCJwYXBlci10YWJzLXNlbGVjdGlvbi1iYXItY29sb3JcIjogXCJncmVlblwiLFxuICBcInBhcGVyLXNsaWRlci1rbm9iLWNvbG9yXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcImxpZ2h0LXByaW1hcnktY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzM4M0M0NVwiLFxuICBcInByaW1hcnktdGV4dC1jb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgXCJwYXBlci1pdGVtLXNlbGVjdGVkXy1fYmFja2dyb3VuZC1jb2xvclwiOiBcIiM0MzQ5NTRcIixcbiAgXCJwYXBlci1zbGlkZXItYWN0aXZlLWNvbG9yXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcInNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzM4M0M0NVwiLFxuICBcInBhcGVyLXNsaWRlci1jb250YWluZXItY29sb3JcIjpcbiAgICBcImxpbmVhci1ncmFkaWVudCh2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcikpIG5vLXJlcGVhdFwiLFxuICBcInBhcGVyLXNsaWRlci1kaXNhYmxlZC1hY3RpdmUtY29sb3JcIjogXCJ2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKVwiLFxuICBcImRpc2FibGVkLXRleHQtY29sb3JcIjogXCIjN0Y4NDhFXCIsXG4gIFwicGFwZXItaXRlbS1pY29uXy1fY29sb3JcIjogXCJncmVlblwiLFxuICBcInBhcGVyLWdyZXktMjAwXCI6IFwiIzQxNEE1OVwiLFxuICBcImxhYmVsLWJhZGdlLWJhY2tncm91bmQtY29sb3JcIjogXCIjMkUzMzNBXCIsXG4gIFwicGFwZXItY2FyZC1oZWFkZXItY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwic2lkZWJhci1pY29uLWNvbG9yXCI6IFwidmFyKC0tcGFwZXItaXRlbS1pY29uLWNvbG9yKVwiLFxuICBcInBhcGVyLWxpc3Rib3gtYmFja2dyb3VuZC1jb2xvclwiOiBcIiMyRTMzM0FcIixcbiAgXCJ0YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvclwiOiBcIiMzNTM4NDBcIixcbiAgXCJwYXBlci1ncmV5LTUwXCI6IFwidmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVwiLFxuICBcInN3aXRjaC1jaGVja2VkLWNvbG9yXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcInBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzQzNDk1NFwiLFxuICBcInNlY29uZGFyeS10ZXh0LWNvbG9yXCI6IFwiIzUyOTRFMlwiLFxuICBcImdvb2dsZS1yZWQtNTAwXCI6IFwiI0U0NUU2NVwiLFxuICBcImRpdmlkZXItY29sb3JcIjogXCJyZ2JhKDAsIDAsIDAsIC4xMilcIixcbiAgXCJnb29nbGUtZ3JlZW4tNTAwXCI6IFwiIzM5RTk0OVwiLFxuICBcInN3aXRjaC11bmNoZWNrZWQtYnV0dG9uLWNvbG9yXCI6IFwidmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcilcIixcbiAgXCJsYWJlbC1iYWRnZS1ib3JkZXItY29sb3JcIjogXCJncmVlblwiLFxuICBcInBhcGVyLWxpc3Rib3gtY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiLFxuICBcInBhcGVyLXNsaWRlci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3JcIjogXCJ2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKVwiLFxuICBcInBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvclwiOiBcIiM0MzQ5NTRcIixcbiAgXCJsYWJlbC1iYWRnZS10ZXh0LWNvbG9yXCI6IFwidmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVwiLFxuICBcInBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcInN3aXRjaC11bmNoZWNrZWQtdHJhY2stY29sb3JcIjogXCJ2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKVwiLFxuICBcImRhcmstcHJpbWFyeS1jb2xvclwiOiBcInZhcigtLWFjY2VudC1jb2xvcilcIixcbiAgXCJwYXBlci1zbGlkZXItc2Vjb25kYXJ5LWNvbG9yXCI6IFwidmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpXCIsXG4gIFwicGFwZXItc2xpZGVyLXBpbi1jb2xvclwiOiBcInZhcigtLWFjY2VudC1jb2xvcilcIixcbiAgXCJwYXBlci1pdGVtLWljb24tYWN0aXZlLWNvbG9yXCI6IFwiI0Y5QzUzNlwiLFxuICBcImFjY2VudC1jb2xvclwiOiBcIiNFNDVFNjVcIixcbiAgXCJ0YWJsZS1yb3ctYWx0ZXJuYXRpdmUtYmFja2dyb3VuZC1jb2xvclwiOiBcIiMzRTQyNEJcIixcbn0pO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi9jYXJkLXRvb2xzXCI7XG5cbmNsYXNzIENhcmRNb2RkZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGlmICghd2luZG93LmNhcmRUb29scylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbid0IGZpbmQgY2FyZC10b29scy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aG9tYXNsb3Zlbi9sb3ZlbGFjZS1jYXJkLXRvb2xzYFxuICAgICAgKTtcbiAgICB3aW5kb3cuY2FyZFRvb2xzLmNoZWNrVmVyc2lvbigwLjIpO1xuXG4gICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5jYXJkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXJkIGNvbmZpZyBpbmNvcnJlY3RcIik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5jYXJkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgc2F5cyAnY2FyZCcsIG5vdCAnY2FyZFMnLiBSZW1vdmUgdGhlIGRhc2guXCIpO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5jYXJkID0gd2luZG93LmNhcmRUb29scy5jcmVhdGVDYXJkKGNvbmZpZy5jYXJkKTtcbiAgICB0aGlzLnRlbXBsYXRlZCA9IFtdO1xuICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FyZFRvb2xzLmxpdEh0bWxgXG4gICAgPGRpdiBpZD1cInJvb3RcIj4ke3RoaXMuY2FyZH08L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX2NhcmRNb2QoKTtcbiAgfVxuXG4gIF9jYXJkTW9kKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnN0eWxlKSByZXR1cm47XG5cbiAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcy5jYXJkLnF1ZXJ5U2VsZWN0b3IoXCJoYS1jYXJkXCIpO1xuICAgIHRhcmdldCA9XG4gICAgICB0YXJnZXQgfHxcbiAgICAgICh0aGlzLmNhcmQuc2hhZG93Um9vdCAmJiB0aGlzLmNhcmQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaGEtY2FyZFwiKSk7XG4gICAgdGFyZ2V0ID1cbiAgICAgIHRhcmdldCB8fFxuICAgICAgKHRoaXMuY2FyZC5maXJzdENoaWxkICYmXG4gICAgICAgIHRoaXMuY2FyZC5maXJzdENoaWxkLnNoYWRvd1Jvb3QgJiZcbiAgICAgICAgdGhpcy5jYXJkLmZpcnN0Q2hpbGQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaGEtY2FyZFwiKSk7XG4gICAgaWYgKCF0YXJnZXQgJiYgIXRoaXMuYXR0ZW1wdHMpXG4gICAgICAvLyBUcnkgdHdpY2VcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fY2FyZE1vZCgpLCAxMDApO1xuICAgIHRoaXMuYXR0ZW1wdHMrKztcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcy5jYXJkO1xuXG4gICAgZm9yICh2YXIgayBpbiB0aGlzLl9jb25maWcuc3R5bGUpIHtcbiAgICAgIGlmICh3aW5kb3cuY2FyZFRvb2xzLmhhc1RlbXBsYXRlKHRoaXMuX2NvbmZpZy5zdHlsZVtrXSkpXG4gICAgICAgIHRoaXMudGVtcGxhdGVkLnB1c2goayk7XG4gICAgICB0aGlzLmNhcmQuc3R5bGUuc2V0UHJvcGVydHkoaywgXCJcIik7XG4gICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIGssXG4gICAgICAgIHdpbmRvdy5jYXJkVG9vbHMucGFyc2VUZW1wbGF0ZSh0aGlzLl9jb25maWcuc3R5bGVba10pXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIHNldCBoYXNzKGhhc3MpIHtcbiAgICBpZiAodGhpcy5jYXJkKSB0aGlzLmNhcmQuaGFzcyA9IGhhc3M7XG4gICAgaWYgKHRoaXMudGVtcGxhdGVkKVxuICAgICAgdGhpcy50ZW1wbGF0ZWQuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICB0aGlzLnRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICBrLFxuICAgICAgICAgIHdpbmRvdy5jYXJkVG9vbHMucGFyc2VUZW1wbGF0ZSh0aGlzLl9jb25maWcuc3R5bGVba10sIFwiXCIpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldENhcmRTaXplKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLnJlcG9ydF9zaXplKVxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5yZXBvcnRfc2l6ZTtcbiAgICBpZiAodGhpcy5jYXJkKVxuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNhcmQuZ2V0Q2FyZFNpemUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IHRoaXMuY2FyZC5nZXRDYXJkU2l6ZSgpXG4gICAgICAgIDogMTtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjYXJkLW1vZGRlclwiLCBDYXJkTW9kZGVyKTtcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaWYgKCF3aW5kb3cuY2FyZFRvb2xzKSB7XG4gIGNvbnN0IHZlcnNpb24gPSAwLjI7XG4gIGNvbnN0IENVU1RPTV9UWVBFX1BSRUZJWCA9IFwiY3VzdG9tOlwiO1xuXG4gIGxldCBjYXJkVG9vbHMgPSB7fTtcblxuICBjYXJkVG9vbHMudiA9IHZlcnNpb247XG5cbiAgY2FyZFRvb2xzLmNoZWNrVmVyc2lvbiA9ICh2KSA9PiB7XG4gICAgaWYgKHZlcnNpb24gPCB2KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBPbGQgdmVyc2lvbiBvZiBjYXJkLXRvb2xzIGZvdW5kLiBHZXQgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIGNhcmQtdG9vbHMuanMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdGhvbWFzbG92ZW4vbG92ZWxhY2UtY2FyZC10b29sc2BcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNhcmRUb29scy5MaXRFbGVtZW50ID0gTGl0RWxlbWVudDtcblxuICBjYXJkVG9vbHMubGl0SHRtbCA9IGh0bWw7XG5cbiAgY2FyZFRvb2xzLmhhc3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJob21lLWFzc2lzdGFudFwiKS5oYXNzO1xuICB9O1xuXG4gIGNhcmRUb29scy5maXJlRXZlbnQgPSAoZXYsIGRldGFpbCkgPT4ge1xuICAgIGV2ID0gbmV3IEV2ZW50KGV2LCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBldi5kZXRhaWwgPSBkZXRhaWwgfHwge307XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhhLWRlbW9cIikuZGlzcGF0Y2hFdmVudChldik7XG4gIH07XG5cbiAgY2FyZFRvb2xzLmNyZWF0ZVRoaW5nID0gKHRoaW5nLCBjb25maWcpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlVGhpbmcgPSAodGFnLCBjb25maWcpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICB0cnkge1xuICAgICAgICBlbGVtZW50LnNldENvbmZpZyhjb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGFnLCBlcnIpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZUVycm9yKGVyci5tZXNzYWdlLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IF9jcmVhdGVFcnJvciA9IChlcnJvciwgY29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4gX2NyZWF0ZVRoaW5nKFwiaHVpLWVycm9yLWNhcmRcIiwge1xuICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBjb25maWcsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKCFjb25maWcgfHwgdHlwZW9mIGNvbmZpZyAhPT0gXCJvYmplY3RcIiB8fCAhY29uZmlnLnR5cGUpXG4gICAgICByZXR1cm4gX2NyZWF0ZUVycm9yKGBObyAke3RoaW5nfSB0eXBlIGNvbmZpZ3VyZWRgLCBjb25maWcpO1xuICAgIGxldCB0YWcgPSBjb25maWcudHlwZTtcbiAgICBpZiAoY29uZmlnLmVycm9yKSB7XG4gICAgICBjb25zdCBlcnIgPSBjb25maWcuZXJyb3I7XG4gICAgICBkZWxldGUgY29uZmlnLmVycm9yO1xuICAgICAgcmV0dXJuIF9jcmVhdGVFcnJvcihlcnIsIGNvbmZpZyk7XG4gICAgfVxuICAgIGlmICh0YWcuc3RhcnRzV2l0aChDVVNUT01fVFlQRV9QUkVGSVgpKVxuICAgICAgdGFnID0gdGFnLnN1YnN0cihDVVNUT01fVFlQRV9QUkVGSVgubGVuZ3RoKTtcbiAgICBlbHNlIHRhZyA9IGBodWktJHt0YWd9LSR7dGhpbmd9YDtcblxuICAgIGlmIChjdXN0b21FbGVtZW50cy5nZXQodGFnKSkgcmV0dXJuIF9jcmVhdGVUaGluZyh0YWcsIGNvbmZpZyk7XG5cbiAgICAvLyBJZiBlbGVtZW50IGRvZXNuJ3QgZXhpc3QgKHlldCkgY3JlYXRlIGFuIGVycm9yXG4gICAgY29uc3QgZWxlbWVudCA9IF9jcmVhdGVFcnJvcihcbiAgICAgIGBDdXN0b20gZWxlbWVudCBkb2Vzbid0IGV4aXN0OiAke3RhZ30uYCxcbiAgICAgIGNvbmZpZ1xuICAgICk7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJOb25lXCI7XG4gICAgY29uc3QgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB9LCAyMDAwKTtcbiAgICAvLyBSZW1vdmUgZXJyb3IgaWYgZWxlbWVudCBpcyBkZWZpbmVkIGxhdGVyXG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnKS50aGVuKCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICBjYXJkVG9vbHMuZmlyZUV2ZW50KFwicmVidWlsZC12aWV3XCIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY2FyZFRvb2xzLmNyZWF0ZUNhcmQgPSAoY29uZmlnKSA9PiB7XG4gICAgcmV0dXJuIGNhcmRUb29scy5jcmVhdGVUaGluZyhcImNhcmRcIiwgY29uZmlnKTtcbiAgfTtcblxuICBjYXJkVG9vbHMuY3JlYXRlRWxlbWVudCA9IChjb25maWcpID0+IHtcbiAgICByZXR1cm4gY2FyZFRvb2xzLmNyZWF0ZVRoaW5nKFwiZWxlbWVudFwiLCBjb25maWcpO1xuICB9O1xuXG4gIGNhcmRUb29scy5jcmVhdGVFbnRpdHlSb3cgPSAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgU1BFQ0lBTF9UWVBFUyA9IG5ldyBTZXQoW1xuICAgICAgXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgIFwiZGl2aWRlclwiLFxuICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICBcIndlYmxpbmtcIixcbiAgICBdKTtcbiAgICBjb25zdCBERUZBVUxUX1JPV1MgPSB7XG4gICAgICBhbGVydDogXCJ0b2dnbGVcIixcbiAgICAgIGF1dG9tYXRpb246IFwidG9nZ2xlXCIsXG4gICAgICBjbGltYXRlOiBcInRvZ2dsZVwiLFxuICAgICAgY292ZXI6IFwiY292ZXJcIixcbiAgICAgIGZhbjogXCJ0b2dnbGVcIixcbiAgICAgIGdyb3VwOiBcImdyb3VwXCIsXG4gICAgICBpbnB1dF9ib29sZWFuOiBcInRvZ2dsZVwiLFxuICAgICAgaW5wdXRfbnVtYmVyOiBcImlucHV0LW51bWJlclwiLFxuICAgICAgaW5wdXRfc2VsZWN0OiBcImlucHV0LXNlbGVjdFwiLFxuICAgICAgaW5wdXRfdGV4dDogXCJpbnB1dC10ZXh0XCIsXG4gICAgICBsaWdodDogXCJ0b2dnbGVcIixcbiAgICAgIG1lZGlhX3BsYXllcjogXCJtZWRpYS1wbGF5ZXJcIixcbiAgICAgIGxvY2s6IFwibG9ja1wiLFxuICAgICAgc2NlbmU6IFwic2NlbmVcIixcbiAgICAgIHNjcmlwdDogXCJzY3JpcHRcIixcbiAgICAgIHNlbnNvcjogXCJzZW5zb3JcIixcbiAgICAgIHRpbWVyOiBcInRpbWVyXCIsXG4gICAgICBzd2l0Y2g6IFwidG9nZ2xlXCIsXG4gICAgICB2YWN1dW06IFwidG9nZ2xlXCIsXG4gICAgfTtcblxuICAgIGlmIChcbiAgICAgICFjb25maWcgfHxcbiAgICAgIHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIgfHxcbiAgICAgICghY29uZmlnLmVudGl0eSAmJiAhY29uZmlnLnR5cGUpXG4gICAgKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgeyBlcnJvcjogXCJJbnZhbGlkIGNvbmZpZyBnaXZlblwiIH0pO1xuICAgICAgcmV0dXJuIGNhcmRUb29scy5jcmVhdGVUaGluZyhcIlwiLCBjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBjb25maWcudHlwZSB8fCBcImRlZmF1bHRcIjtcbiAgICBpZiAoU1BFQ0lBTF9UWVBFUy5oYXModHlwZSkgfHwgdHlwZS5zdGFydHNXaXRoKENVU1RPTV9UWVBFX1BSRUZJWCkpXG4gICAgICByZXR1cm4gY2FyZFRvb2xzLmNyZWF0ZVRoaW5nKFwicm93XCIsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBkb21haW4gPSBjb25maWcuZW50aXR5LnNwbGl0KFwiLlwiLCAxKVswXTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgeyB0eXBlOiBERUZBVUxUX1JPV1NbZG9tYWluXSB8fCBcInRleHRcIiB9KTtcbiAgICByZXR1cm4gY2FyZFRvb2xzLmNyZWF0ZVRoaW5nKFwiZW50aXR5LXJvd1wiLCBjb25maWcpO1xuICB9O1xuXG4gIGNhcmRUb29scy5kZXZpY2VJRCA9ICgoKSA9PiB7XG4gICAgY29uc3QgSURfU1RPUkFHRV9LRVkgPSBcImxvdmVsYWNlLXBsYXllci1kZXZpY2UtaWRcIjtcbiAgICBpZiAod2luZG93W1wiZnVsbHlcIl0gJiYgdHlwZW9mIGZ1bGx5LmdldERldmljZUlkID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICByZXR1cm4gZnVsbHkuZ2V0RGV2aWNlSWQoKTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZVtJRF9TVE9SQUdFX0tFWV0pIHtcbiAgICAgIGNvbnN0IHM0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMTAwMDAwKVxuICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgICAgfTtcbiAgICAgIGxvY2FsU3RvcmFnZVtJRF9TVE9SQUdFX0tFWV0gPSBgJHtzNCgpfSR7czQoKX0tJHtzNCgpfSR7czQoKX1gO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW0lEX1NUT1JBR0VfS0VZXTtcbiAgfSkoKTtcblxuICBjYXJkVG9vbHMubW9yZUluZm8gPSAoZW50aXR5KSA9PiB7XG4gICAgY2FyZFRvb2xzLmZpcmVFdmVudChcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGVudGl0eSB9KTtcbiAgfTtcblxuICBjYXJkVG9vbHMubG9uZ3ByZXNzID0gKGVsZW1lbnQpID0+IHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChcImFjdGlvbi1oYW5kbGVyXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgbG9uZ3ByZXNzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiYWN0aW9uLWhhbmRsZXJcIik7XG4gICAgICBsb25ncHJlc3MuYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjYXJkVG9vbHMuaGFzVGVtcGxhdGUgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiAvXFxbXFxbXFxzKy4qXFxzK1xcXVxcXS8udGVzdCh0ZXh0KTtcbiAgfTtcblxuICBjYXJkVG9vbHMucGFyc2VUZW1wbGF0ZSA9ICh0ZXh0LCBlcnJvcikgPT4ge1xuICAgIGNvbnN0IF9wYXJzZSA9IChzdHIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFxbXFxbXFxzK3xcXHMrXFxdXFxdJC9nLCBcIlwiKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICBsZXQgdiA9IGNhcmRUb29scy5oYXNzKCkuc3RhdGVzW2Ake3BhcnRzWzBdfS4ke3BhcnRzWzFdfWBdO1xuICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICBwYXJ0cy5mb3JFYWNoKChpdGVtKSA9PiAodiA9IHZbaXRlbV0pKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yIHx8IGBbWyBUZW1wbGF0ZSBtYXRjaGluZyBmYWlsZWQgJHtzdHJ9IF1dYDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXFtcXFtcXHMuKj9cXHNcXF1cXF0pL2csIChzdHIsIHAxLCBvZmZzZXQsIHMpID0+XG4gICAgICBfcGFyc2Uoc3RyKVxuICAgICk7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgd2luZG93LmNhcmRUb29scyA9IGNhcmRUb29scztcbiAgY2FyZFRvb2xzLmZpcmVFdmVudChcInJlYnVpbGQtdmlld1wiKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBenJCQTtBQURBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBMkNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUE5RUE7QUFSQTtBQTBGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUEzREE7QUFSQTtBQXVFQTtBQWxLQTtBQXFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFkQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBM0lBO0FBUkE7QUF1SkE7QUE3VEE7QUFnVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQTdOQTtBQVJBO0FBeU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQXRCQTtBQVJBO0FBa0NBO0FBdkhBO0FBMEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4c0JBO0FBMHNCQTtBQUNBO0FBQ0E7QUE3c0JBO0FBaXRCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQXZCQTtBQVpBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBMUNBO0FBWkE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQTVEQTtBQVpBO0FBNEVBO0FBN0tBO0FBZ0xBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQWhGQTtBQVpBO0FBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBbkdBO0FBWkE7QUFtSEE7QUFwTkE7QUF1TkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBV0E7QUEvS0E7QUFaQTtBQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBUkE7QUFXQTtBQTFDQTtBQVpBO0FBMERBO0FBMVBBO0FBNlBBO0FBQ0E7QUFDQTtBQXRvQkE7QUE5dkJBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTs7O0FBYUE7QUFDQTtBQUVBO0FBSUE7QUFDQTs7O0FBbkJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7Ozs7QUF0RUE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUNBO0FBcUJBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9