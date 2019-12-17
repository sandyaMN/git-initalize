(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["arsaboo"],{

/***/ "./demo/src/configs/arsaboo/entities.ts":
/*!**********************************************!*\
  !*** ./demo/src/configs/arsaboo/entities.ts ***!
  \**********************************************/
/*! exports provided: demoEntitiesArsaboo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoEntitiesArsaboo", function() { return demoEntitiesArsaboo; });
/* harmony import */ var _src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/fake_data/entity */ "./src/fake_data/entity.ts");

const demoEntitiesArsaboo = localize => Object(_src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__["convertEntities"])({
  "zone.home": {
    entity_id: "zone.home",
    state: "zoning",
    attributes: {
      hidden: true,
      latitude: 52.3631339,
      longitude: 4.8903147,
      radius: 200,
      friendly_name: "Home",
      icon: "hademo:home"
    }
  },
  "zone.uva": {
    entity_id: "zone.buckhead",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 400,
      friendly_name: "UvA",
      icon: "hademo:school",
      latitude: 52.3558182,
      longitude: 4.9535376
    }
  },
  "person.arsaboo": {
    entity_id: "person.arsaboo",
    state: "not_home",
    attributes: {
      radius: 50,
      friendly_name: "Arsaboo",
      latitude: 52.3579946,
      longitude: 4.8664597,
      entity_picture: "/assets/arsaboo/images/arsaboo.jpg"
    }
  },
  "person.melody": {
    entity_id: "person.melody",
    state: "not_home",
    attributes: {
      radius: 50,
      friendly_name: "Melody",
      latitude: 52.3408927,
      longitude: 4.8711073,
      entity_picture: "/assets/arsaboo/images/melody.jpg"
    }
  },
  "sensor.livingroom_temp_rounded": {
    entity_id: "sensor.livingroom_temp_rounded",
    state: "21",
    attributes: {
      friendly_name: "Living room temperature"
    }
  },
  "sensor.study_temp_rounded": {
    entity_id: "sensor.study_temp_rounded",
    state: "23",
    attributes: {
      friendly_name: "Study temperature"
    }
  },
  "sensor.living_room": {
    entity_id: "sensor.living_room",
    state: "YouTube",
    attributes: {
      friendly_name: "Harmony",
      entity_picture: "/assets/arsaboo/icons/Harmony.png"
    }
  },
  "sensor.total_tv_time": {
    entity_id: "sensor.total_tv_time",
    state: "0.42",
    attributes: {
      value: "25m",
      unit_of_measurement: "h",
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.total_tv_time"),
      icon: "hademo:chart-line"
    }
  },
  "climate.upstairs": {
    entity_id: "climate.upstairs",
    state: "auto",
    attributes: {
      current_temperature: 22,
      min_temp: 15,
      max_temp: 30,
      temperature: null,
      target_temp_high: 24,
      target_temp_low: 20,
      fan_mode: "auto",
      fan_modes: ["auto", "on"],
      hvac_modes: ["auto", "cool", "heat", "off"],
      aux_heat: "off",
      actual_humidity: 30,
      fan: "on",
      operation: "fan",
      fan_min_on_time: 10,
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.names.upstairs"),
      supported_features: 27,
      preset_mode: "away",
      preset_modes: ["home", "away", "eco", "sleep"]
    }
  },
  "input_boolean.abodeupdate": {
    entity_id: "input_boolean.abodeupdate",
    state: "on",
    attributes: {
      friendly_name: "Abode Updates",
      icon: "hademo:security"
    }
  },
  "input_boolean.tv": {
    entity_id: "input_boolean.tv",
    state: "off",
    attributes: {
      friendly_name: "TV",
      icon: "hademo:television"
    }
  },
  "input_boolean.homeautomation": {
    entity_id: "input_boolean.homeautomation",
    state: "on",
    attributes: {
      friendly_name: "Home Automation",
      icon: "hass:home-automation"
    }
  },
  "input_boolean.tvtime": {
    entity_id: "input_boolean.tvtime",
    state: "on",
    attributes: {
      friendly_name: "TV Time",
      icon: "hademo:television-guide"
    }
  },
  "input_select.livingroomharmony": {
    entity_id: "input_select.livingroomharmony",
    state: "YouTube",
    attributes: {
      options: ["PowerOff", "Watch Fire TV", "YouTube", "SATV", "Watch Apple TV"],
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.activity"),
      icon: "hademo:remote"
    }
  },
  "input_select.hdmiswitcher": {
    entity_id: "input_select.hdmiswitcher",
    state: "Shield",
    attributes: {
      options: ["AppleTV", "FireTV", "Shield"],
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.hdmi_switcher"),
      icon: "hademo:remote"
    }
  },
  "input_select.hdmiinput": {
    entity_id: "input_select.hdmiinput",
    state: "InputHdmi4",
    attributes: {
      options: ["InputHdmi1", "InputHdmi2", "InputHDMI3", "InputHdmi4"],
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.hdmi_input"),
      icon: "hademo:remote"
    }
  },
  "input_number.harmonyvolume": {
    entity_id: "input_number.harmonyvolume",
    state: "18.0",
    attributes: {
      initial: 30,
      min: 1,
      max: 100,
      step: 1,
      mode: "slider",
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.volume"),
      icon: "hademo:volume-high"
    }
  },
  "script.tv_off": {
    entity_id: "script.tv_off",
    state: "off",
    attributes: {
      last_triggered: null,
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.turn_tv_off")
    }
  },
  "sensor.usdinr": {
    entity_id: "sensor.usdinr",
    state: "71.25",
    attributes: {
      attribution: "Stock market information provided by Alpha Vantage",
      from: "USD",
      to: "INR",
      unit_of_measurement: "INR",
      friendly_name: "USDINR",
      icon: "hademo:currency-usd"
    }
  },
  "sensor.study_temp": {
    entity_id: "sensor.study_temp",
    state: "20.9",
    attributes: {
      unit_of_measurement: "°C",
      device_class: "temperature",
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.names.temperature_study"),
      icon: "hademo:thermometer"
    }
  },
  "cover.garagedoor": {
    entity_id: "cover.garagedoor",
    state: "closed",
    attributes: {
      friendly_name: "Garage Door",
      icon: "hademo:garage",
      supported_features: 11,
      homebridge_cover_type: "garage_door"
    }
  },
  "light.living_room_lights": {
    entity_id: "light.living_room_lights",
    state: "off",
    attributes: {
      min_mireds: 111,
      max_mireds: 400,
      friendly_name: "Living Room Lights",
      supported_features: 55
    }
  },
  "switch.security_armed": {
    entity_id: "switch.security_armed",
    state: "off",
    attributes: {
      friendly_name: "Home Security Arm"
    }
  },
  "light.kitchen_lights": {
    entity_id: "light.kitchen_lights",
    state: "off",
    attributes: {
      friendly_name: "Kitchen lights",
      supported_features: 1
    }
  },
  "sensor.plexspy": {
    entity_id: "sensor.plexspy",
    state: "0",
    attributes: {
      unit_of_measurement: "Watching",
      friendly_name: "PlexSpy"
    }
  },
  "binary_sensor.ring_front_door_ding": {
    entity_id: "binary_sensor.ring_front_door_ding",
    state: "off",
    attributes: {
      attribution: "Data provided by Ring.com",
      device_id: "e04f434dca02",
      firmware: "Up to Date",
      timezone: "America/New_York",
      friendly_name: "Front Door Ding",
      device_class: "occupancy"
    }
  },
  "sensor.ring_front_door_last_motion": {
    entity_id: "sensor.ring_front_door_last_motion",
    state: "13:21",
    attributes: {
      attribution: "Data provided by Ring.com",
      device_id: "e04f434dca02",
      firmware: "Up to Date",
      kind: "lpd_v2",
      timezone: "America/New_York",
      type: "doorbots",
      wifi_name: "RingOfSecurity-hUrGKNlhR",
      created_at: "2019-01-22T13:21:03-05:00",
      answered: false,
      recording_status: "ready",
      category: "motion",
      friendly_name: "Front Door Last Motion",
      icon: "hademo:history"
    }
  },
  "camera.patio": {
    entity_id: "camera.patio",
    state: "streaming",
    attributes: {
      access_token: "cbd8dfac9efb441f19168e271cb8629b0372d0c1f721353394b23ed0202013b0",
      motion_detection: true,
      friendly_name: "Patio",
      entity_picture: "/api/camera_proxy/camera.patio?token=cbd8dfac9efb441f19168e271cb8629b0372d0c1f721353394b23ed0202013b0",
      supported_features: 0
    }
  },
  "camera.porch": {
    entity_id: "camera.porch",
    state: "streaming",
    attributes: {
      access_token: "479b332e0a7cad4c58e0fb98a1ecb7942e3b225190adb93a1341edfa7daf45b0",
      motion_detection: true,
      friendly_name: "Porch",
      entity_picture: "/api/camera_proxy/camera.porch?token=479b332e0a7cad4c58e0fb98a1ecb7942e3b225190adb93a1341edfa7daf45b0",
      supported_features: 0
    }
  },
  "camera.backyard": {
    entity_id: "camera.backyard",
    state: "streaming",
    attributes: {
      access_token: "9381b2e4edd1bb21e868e2193f5d132a5fae153ce4f458451d979a02712b4642",
      motion_detection: true,
      friendly_name: "Backyard",
      entity_picture: "/api/camera_proxy/camera.backyard?token=9381b2e4edd1bb21e868e2193f5d132a5fae153ce4f458451d979a02712b4642",
      supported_features: 0
    }
  },
  "camera.driveway": {
    entity_id: "camera.driveway",
    state: "streaming",
    attributes: {
      access_token: "ac38bf88c2c5896eed66ae15739a3e726677f92d79e0d57f83f726ac28bda746",
      motion_detection: true,
      friendly_name: "Driveway",
      entity_picture: "/api/camera_proxy/camera.driveway?token=ac38bf88c2c5896eed66ae15739a3e726677f92d79e0d57f83f726ac28bda746",
      supported_features: 0
    }
  },
  "alarm_control_panel.abode_alarm": {
    entity_id: "alarm_control_panel.abode_alarm",
    state: "disarmed",
    attributes: {
      code_format: null,
      changed_by: null,
      attribution: "Data provided by goabode.com",
      device_id: "area_1",
      battery_backup: false,
      cellular_backup: false,
      friendly_name: "Abode Alarm",
      icon: "hademo:security",
      entity_picture: "/assets/arsaboo/icons/Abode.jpg"
    }
  },
  "binary_sensor.ring_front_door_motion": {
    entity_id: "binary_sensor.ring_front_door_motion",
    state: "off",
    attributes: {
      attribution: "Data provided by Ring.com",
      device_id: "e04f434dca02",
      firmware: "Up to Date",
      timezone: "America/New_York",
      friendly_name: "Front Door Motion",
      device_class: "motion"
    }
  },
  "binary_sensor.motion_sensor_158d00016daecc": {
    entity_id: "binary_sensor.motion_sensor_158d00016daecc",
    state: "off",
    attributes: {
      "No motion since": "120",
      battery_level: 43,
      friendly_name: "Living Room Occupancy",
      device_class: "motion"
    }
  },
  "binary_sensor.door_window_sensor_158d0001bf26df": {
    entity_id: "binary_sensor.door_window_sensor_158d0001bf26df",
    state: "off",
    attributes: {
      "Open since": 0,
      battery_level: 45,
      friendly_name: "Garage Entry Door",
      device_class: "door"
    }
  },
  "binary_sensor.motion_sensor_158d0001a1f2ab": {
    entity_id: "binary_sensor.motion_sensor_158d0001a1f2ab",
    state: "off",
    attributes: {
      "No motion since": 0,
      battery_level: 49,
      friendly_name: "Guest Room Occupancy",
      device_class: "motion"
    }
  },
  "binary_sensor.front_door": {
    entity_id: "binary_sensor.front_door",
    state: "off",
    attributes: {
      attribution: "Data provided by goabode.com",
      device_id: "RF:005e8810",
      battery_low: false,
      no_response: false,
      device_type: "Door Contact",
      friendly_name: "Front Door",
      device_class: "door"
    }
  },
  "binary_sensor.back_door": {
    entity_id: "binary_sensor.back_door",
    state: "off",
    attributes: {
      attribution: "Data provided by goabode.com",
      device_id: "RF:005c7110",
      battery_low: false,
      no_response: false,
      device_type: "Door Contact",
      friendly_name: "Back Door",
      device_class: "door"
    }
  },
  "media_player.family_room_2": {
    entity_id: "media_player.family_room_2",
    state: "playing",
    attributes: {
      volume_level: 0.18,
      is_volume_muted: false,
      media_content_type: "music",
      media_duration: 300,
      media_position: 0,
      media_position_updated_at: new Date( // 23 seconds in
      new Date().getTime() - 23000).toISOString(),
      media_title: "I Wasn't Born To Follow",
      media_artist: "The Byrds",
      media_album_name: "The Notorious Byrd Brothers",
      source_list: ["Bollywood Hindi Hits", "Bollywood Radio and Beyond", "Bolywood Instrumental - Hungama Radio", "Classic Bollywood Radio", "Contemporary Bollywood Radio", "Hindi Bollywood Hits Radio", "It's A Party", "Lata Mangeshkar", "NPR Program Stream", "Radio HSL", "Retro 70s and 80s"],
      shuffle: false,
      sonos_group: ["media_player.family_room_2"],
      night_sound: false,
      speech_enhance: false,
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.names.family_room"),
      entity_picture: "/api/media_player_proxy/media_player.family_room_2?token=be41a86e2a360761d67c36a010b09654b730deec092016ee92aafef79b1978ff&cache=e03d22fb103202e7",
      supported_features: 64063
    }
  },
  "sensor.ring_front_door_last_ding": {
    entity_id: "sensor.ring_front_door_last_ding",
    state: "06:44",
    attributes: {
      attribution: "Data provided by Ring.com",
      device_id: "e04f434dca02",
      firmware: "Up to Date",
      kind: "lpd_v2",
      timezone: "America/New_York",
      type: "doorbots",
      wifi_name: "RingOfSecurity-hUrGKNlhR",
      created_at: "2019-01-22T06:44:31-05:00",
      answered: false,
      recording_status: "ready",
      category: "ding",
      friendly_name: "Front Door Last Ding",
      icon: "hademo:history"
    }
  },
  "light.lifx5": {
    entity_id: "light.lifx5",
    state: "on",
    attributes: {
      min_mireds: 111,
      max_mireds: 400,
      friendly_name: "Garage lights",
      supported_features: 55
    }
  },
  "sensor.alok_to_home": {
    entity_id: "sensor.alok_to_home",
    state: "41",
    attributes: {
      destination_addresses: ["XYZ"],
      origin_addresses: ["XYZ"],
      status: "OK",
      mode: "driving",
      units: "imperial",
      duration_in_traffic: "41 mins",
      duration: "44 mins",
      distance: "34.3 mi",
      unit_of_measurement: "min",
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.commute_home"),
      icon: "hademo:car"
    }
  },
  "sensor.morning_commute": {
    entity_id: "sensor.morning_commute",
    state: "37",
    attributes: {
      destination_addresses: ["XYZ"],
      origin_addresses: ["XYZ"],
      status: "OK",
      mode: "driving",
      units: "imperial",
      duration_in_traffic: "37 mins",
      duration: "37 mins",
      distance: "30.2 mi",
      unit_of_measurement: "min",
      friendly_name: localize("ui.panel.page-demo.config.arsaboo.labels.morning_commute"),
      icon: "hademo:car"
    }
  },
  "switch.driveway": {
    entity_id: "switch.driveway",
    state: "off",
    attributes: {
      friendly_name: "Driveway Light"
    }
  },
  "switch.wemoporch": {
    entity_id: "switch.wemoporch",
    state: "off",
    attributes: {
      friendly_name: "Porch Lights"
    }
  }
});

/***/ }),

/***/ "./demo/src/configs/arsaboo/index.ts":
/*!*******************************************!*\
  !*** ./demo/src/configs/arsaboo/index.ts ***!
  \*******************************************/
/*! exports provided: demoArsaboo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoArsaboo", function() { return demoArsaboo; });
/* harmony import */ var _lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lovelace */ "./demo/src/configs/arsaboo/lovelace.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./demo/src/configs/arsaboo/entities.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./demo/src/configs/arsaboo/theme.ts");



const demoArsaboo = {
  authorName: "Arsaboo",
  authorUrl: "https://github.com/arsaboo/homeassistant-config/",
  name: "ARS Home",
  lovelace: _lovelace__WEBPACK_IMPORTED_MODULE_0__["demoLovelaceArsaboo"],
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["demoEntitiesArsaboo"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["demoThemeArsaboo"]
};

/***/ }),

/***/ "./demo/src/configs/arsaboo/lovelace.ts":
/*!**********************************************!*\
  !*** ./demo/src/configs/arsaboo/lovelace.ts ***!
  \**********************************************/
/*! exports provided: demoLovelaceArsaboo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoLovelaceArsaboo", function() { return demoLovelaceArsaboo; });
const demoLovelaceArsaboo = localize => ({
  title: "Home Assistant",
  views: [{
    icon: "hass:home-assistant",
    id: "home",
    title: "Home",
    cards: [{
      type: "custom:ha-demo-card"
    }, {
      type: "entities",
      title: localize("ui.panel.page-demo.config.arsaboo.labels.lights"),
      entities: [{
        entity: "light.kitchen_lights"
      }, {
        entity: "light.living_room_lights"
      }, {
        entity: "switch.wemoporch"
      }, "light.lifx5", {
        type: "custom:cast-demo-row"
      }]
    }, {
      type: "thermostat",
      entity: "climate.upstairs"
    }, {
      type: "picture-elements",
      image: "/assets/arsaboo/floorplans/main.png",
      elements: [{
        type: "image",
        entity: "input_boolean.abodeupdate",
        tap_action: {
          action: "toggle"
        },
        state_image: {
          on: "/assets/arsaboo/icons/abode_enabled.png",
          off: "/assets/arsaboo/icons/abode_disabled.png"
        },
        style: {
          top: "4%",
          left: "30%",
          width: "7%"
        }
      }, {
        type: "image",
        entity: "input_boolean.tvtime",
        tap_action: {
          action: "toggle"
        },
        state_image: {
          on: "/assets/arsaboo/icons/tv_enabled.png",
          off: "/assets/arsaboo/icons/tv_disabled.png"
        },
        style: {
          top: "4%",
          left: "40%",
          width: "7%"
        }
      }, {
        type: "image",
        entity: "switch.security_armed",
        tap_action: {
          action: "toggle"
        },
        state_image: {
          on: "/assets/arsaboo/icons/security_armed_red.png",
          off: "/assets/arsaboo/icons/security_disarmed.png"
        },
        style: {
          top: "4%",
          left: "50%",
          width: "7%"
        }
      }, {
        type: "image",
        entity: "input_boolean.homeautomation",
        tap_action: {
          action: "toggle"
        },
        state_image: {
          on: "/assets/arsaboo/icons/automation_enabled.png",
          off: "/assets/arsaboo/icons/automation_disabled.png"
        },
        style: {
          top: "4%",
          left: "60%",
          width: "7%"
        }
      }, {
        type: "image",
        entity: "light.kitchen_lights",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/light_bulb_off.png",
        state_image: {
          on: "/assets/arsaboo/icons/light_bulb_on.png"
        },
        state_filter: {
          on: "brightness(130%) saturate(1.5) drop-shadow(0px 0px 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "40%",
          left: "11%",
          width: "7%",
          padding: "10px"
        }
      }, {
        type: "image",
        entity: "camera.porch",
        image: "/assets/arsaboo/icons/camera_porch_streaming.png",
        state_image: {
          recording: "/assets/arsaboo/icons/camera_porch_recording.png"
        },
        style: {
          top: "90%",
          left: "3%",
          width: "7%",
          transform: "none"
        }
      }, {
        type: "image",
        entity: "camera.patio",
        image: "/assets/arsaboo/icons/camera_patio_streaming.png",
        state_image: {
          recording: "/assets/arsaboo/icons/camera_patio_recording.png"
        },
        style: {
          top: "12%",
          left: "3%",
          width: "7%",
          transform: "none"
        }
      }, {
        type: "image",
        entity: "camera.backyard",
        image: "/assets/arsaboo/icons/camera_backyard_streaming.png",
        state_image: {
          recording: "/assets/arsaboo/icons/camera_backyard_recording.png"
        },
        style: {
          top: "12%",
          left: "90%",
          width: "7%",
          transform: "none"
        }
      }, {
        type: "image",
        entity: "camera.driveway",
        image: "/assets/arsaboo/icons/camera_driveway_streaming.png",
        state_image: {
          recording: "/assets/arsaboo/icons/camera_driveway_recording.png"
        },
        style: {
          top: "81.5%",
          left: "90%",
          width: "7%",
          transform: "none"
        }
      }, {
        type: "image",
        entity: "light.living_room_lights",
        tap_action: {
          action: "toggle"
        },
        hold_action: {
          action: "more-info"
        },
        image: "/assets/arsaboo/icons/light_bulb_off.png",
        state_image: {
          on: "/assets/arsaboo/icons/light_bulb_on.png"
        },
        state_filter: {
          on: "brightness(130%) saturate(1.5) drop-shadow(0px 0px 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "34%",
          left: "50%",
          width: "7%",
          padding: "10px"
        }
      }, {
        type: "state-label",
        entity: "sensor.livingroom_temp_rounded",
        style: {
          top: "43%",
          left: "50%",
          background: 'center / contain no-repeat url("/assets/arsaboo/icons/ecobee_blank.png")',
          "text-align": "center",
          "font-size": "12px",
          color: "white",
          "font-family": "Helvetica"
        }
      }, {
        type: "state-icon",
        entity: "binary_sensor.motion_sensor_158d00016daecc",
        style: {
          top: "27%",
          left: "50%"
        }
      }, {
        type: "state-icon",
        entity: "binary_sensor.back_door",
        style: {
          top: "17%",
          left: "15%"
        }
      }, {
        type: "image",
        entity: "input_boolean.tv",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/tv_off2.png",
        state_image: {
          on: "/assets/arsaboo/icons/tv_on2.png"
        },
        state_filter: {
          on: "drop-shadow(-5px 0 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "29%",
          left: "68.3%",
          width: "2.5%",
          padding: "10px 0 10px 30px"
        }
      }, {
        type: "state-icon",
        entity: "binary_sensor.motion_sensor_158d0001a1f2ab",
        style: {
          top: "27%",
          left: "85%"
        }
      }, {
        type: "image",
        entity: "switch.wemoporch",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/light_bulb_off.png",
        state_image: {
          on: "/assets/arsaboo/icons/light_bulb_on.png"
        },
        state_filter: {
          on: "brightness(130%) saturate(1.5) drop-shadow(0px 0px 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "92%",
          left: "20%",
          width: "7%",
          padding: "10px"
        }
      }, {
        type: "state-icon",
        entity: "binary_sensor.ring_front_door_motion",
        style: {
          top: "95%",
          left: "32%"
        }
      }, {
        type: "state-icon",
        entity: "binary_sensor.door_window_sensor_158d0001bf26df",
        style: {
          top: "64%",
          left: "56%"
        }
      }, {
        type: "image",
        entity: "light.lifx5",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/light_bulb_off.png",
        state_image: {
          on: "/assets/arsaboo/icons/light_bulb_on.png"
        },
        state_filter: {
          on: "brightness(130%) saturate(1.5) drop-shadow(0px 0px 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "60%",
          left: "78%",
          width: "7%",
          padding: "10px"
        }
      }, {
        type: "image",
        entity: "switch.driveway",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/light_off.png",
        state_image: {
          on: "/assets/arsaboo/icons/light_on.png"
        },
        state_filter: {
          on: "drop-shadow(-5px -5px 10px gold)",
          off: "brightness(80%) saturate(0.8)"
        },
        style: {
          top: "84%",
          left: "82%",
          width: "7%",
          padding: "10px"
        }
      }, {
        type: "image",
        entity: "cover.garagedoor",
        tap_action: {
          action: "toggle"
        },
        image: "/assets/arsaboo/icons/garage_door_closed.png",
        state_image: {
          open: "/assets/arsaboo/icons/garage_door_open.png",
          closed: "/assets/arsaboo/icons/garage_door_closed.png"
        },
        style: {
          top: "71%",
          left: "74%",
          width: "7%",
          transform: "none"
        }
      }, {
        type: "state-label",
        entity: "sensor.study_temp_rounded",
        style: {
          top: "80%",
          left: "49%",
          "background-color": "gray",
          background: 'center / contain no-repeat url("/assets/arsaboo/icons/ecobee_blank.png")',
          "text-align": "center",
          "font-size": "12px",
          color: "white",
          "font-family": "Helvetica",
          display: "block",
          overflow: "hidden"
        }
      }, // {
      //   type: "custom:thermostat-card",
      //   entity: "climate.downstairs",
      //   no_card: true,
      //   hvac: {
      //     attribute: "operation",
      //   },
      //   style: {
      //     top: "78%",
      //     left: "15%",
      //     width: "50px",
      //     height: "50px",
      //   },
      // },
      {
        type: "state-icon",
        entity: "binary_sensor.front_door",
        style: {
          top: "89%",
          left: "32%"
        }
      }]
    }, {
      type: "media-control",
      entity: "media_player.family_room_2"
    }, {
      type: "entities",
      title: localize("ui.panel.page-demo.config.arsaboo.labels.information"),
      show_header_toggle: false,
      entities: ["sensor.morning_commute", "sensor.alok_to_home", "sensor.plexspy", "sensor.usdinr"]
    }, {
      type: "alarm-panel",
      entity: "alarm_control_panel.abode_alarm",
      name: "Security",
      states: ["arm_home", "arm_away"]
    }, {
      type: "entities",
      title: localize("ui.panel.page-demo.config.arsaboo.labels.entertainment"),
      show_header_toggle: false,
      entities: ["sensor.living_room", "input_select.livingroomharmony", "input_select.hdmiswitcher", "input_select.hdmiinput", "input_number.harmonyvolume", "sensor.total_tv_time", "script.tv_off"]
    }, {
      type: "sensor",
      entity: "sensor.study_temp",
      graph: "line"
    }, {
      type: "entities",
      title: "Doorbell",
      show_header_toggle: false,
      entities: ["binary_sensor.ring_front_door_ding", "binary_sensor.ring_front_door_motion", "sensor.ring_front_door_last_ding", "sensor.ring_front_door_last_motion"]
    }]
  }]
});

/***/ }),

/***/ "./demo/src/configs/arsaboo/theme.ts":
/*!*******************************************!*\
  !*** ./demo/src/configs/arsaboo/theme.ts ***!
  \*******************************************/
/*! exports provided: demoThemeArsaboo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoThemeArsaboo", function() { return demoThemeArsaboo; });
const demoThemeArsaboo = () => ({});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJzYWJvby5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3MvYXJzYWJvby9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL2Fyc2Fib28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvY29uZmlncy9hcnNhYm9vL2xvdmVsYWNlLnRzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3MvYXJzYWJvby90aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb252ZXJ0RW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2Zha2VfZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IERlbW9Db25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRlbW9FbnRpdGllc0Fyc2Fib286IERlbW9Db25maWdbXCJlbnRpdGllc1wiXSA9IChsb2NhbGl6ZSkgPT5cbiAgY29udmVydEVudGl0aWVzKHtcbiAgICBcInpvbmUuaG9tZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5ob21lXCIsXG4gICAgICBzdGF0ZTogXCJ6b25pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICBsYXRpdHVkZTogNTIuMzYzMTMzOSxcbiAgICAgICAgbG9uZ2l0dWRlOiA0Ljg5MDMxNDcsXG4gICAgICAgIHJhZGl1czogMjAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkhvbWVcIixcbiAgICAgICAgaWNvbjogXCJoYWRlbW86aG9tZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS51dmFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuYnVja2hlYWRcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlV2QVwiLFxuICAgICAgICBpY29uOiBcImhhZGVtbzpzY2hvb2xcIixcbiAgICAgICAgbGF0aXR1ZGU6IDUyLjM1NTgxODIsXG4gICAgICAgIGxvbmdpdHVkZTogNC45NTM1Mzc2LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwicGVyc29uLmFyc2Fib29cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInBlcnNvbi5hcnNhYm9vXCIsXG4gICAgICBzdGF0ZTogXCJub3RfaG9tZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByYWRpdXM6IDUwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkFyc2Fib29cIixcbiAgICAgICAgbGF0aXR1ZGU6IDUyLjM1Nzk5NDYsXG4gICAgICAgIGxvbmdpdHVkZTogNC44NjY0NTk3LFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogXCIvYXNzZXRzL2Fyc2Fib28vaW1hZ2VzL2Fyc2Fib28uanBnXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJwZXJzb24ubWVsb2R5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJwZXJzb24ubWVsb2R5XCIsXG4gICAgICBzdGF0ZTogXCJub3RfaG9tZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByYWRpdXM6IDUwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk1lbG9keVwiLFxuICAgICAgICBsYXRpdHVkZTogNTIuMzQwODkyNyxcbiAgICAgICAgbG9uZ2l0dWRlOiA0Ljg3MTEwNzMsXG4gICAgICAgIGVudGl0eV9waWN0dXJlOiBcIi9hc3NldHMvYXJzYWJvby9pbWFnZXMvbWVsb2R5LmpwZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmxpdmluZ3Jvb21fdGVtcF9yb3VuZGVkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubGl2aW5ncm9vbV90ZW1wX3JvdW5kZWRcIixcbiAgICAgIHN0YXRlOiBcIjIxXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIHJvb20gdGVtcGVyYXR1cmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zdHVkeV90ZW1wX3JvdW5kZWRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zdHVkeV90ZW1wX3JvdW5kZWRcIixcbiAgICAgIHN0YXRlOiBcIjIzXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3R1ZHkgdGVtcGVyYXR1cmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5saXZpbmdfcm9vbVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmxpdmluZ19yb29tXCIsXG4gICAgICBzdGF0ZTogXCJZb3VUdWJlXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSGFybW9ueVwiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvSGFybW9ueS5wbmdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50b3RhbF90dl90aW1lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudG90YWxfdHZfdGltZVwiLFxuICAgICAgc3RhdGU6IFwiMC40MlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB2YWx1ZTogXCIyNW1cIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJoXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IGxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy50b3RhbF90dl90aW1lXCJcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogXCJoYWRlbW86Y2hhcnQtbGluZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiY2xpbWF0ZS51cHN0YWlyc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiY2xpbWF0ZS51cHN0YWlyc1wiLFxuICAgICAgc3RhdGU6IFwiYXV0b1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjdXJyZW50X3RlbXBlcmF0dXJlOiAyMixcbiAgICAgICAgbWluX3RlbXA6IDE1LFxuICAgICAgICBtYXhfdGVtcDogMzAsXG4gICAgICAgIHRlbXBlcmF0dXJlOiBudWxsLFxuICAgICAgICB0YXJnZXRfdGVtcF9oaWdoOiAyNCxcbiAgICAgICAgdGFyZ2V0X3RlbXBfbG93OiAyMCxcbiAgICAgICAgZmFuX21vZGU6IFwiYXV0b1wiLFxuICAgICAgICBmYW5fbW9kZXM6IFtcImF1dG9cIiwgXCJvblwiXSxcbiAgICAgICAgaHZhY19tb2RlczogW1wiYXV0b1wiLCBcImNvb2xcIiwgXCJoZWF0XCIsIFwib2ZmXCJdLFxuICAgICAgICBhdXhfaGVhdDogXCJvZmZcIixcbiAgICAgICAgYWN0dWFsX2h1bWlkaXR5OiAzMCxcbiAgICAgICAgZmFuOiBcIm9uXCIsXG4gICAgICAgIG9wZXJhdGlvbjogXCJmYW5cIixcbiAgICAgICAgZmFuX21pbl9vbl90aW1lOiAxMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogbG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLWRlbW8uY29uZmlnLmFyc2Fib28ubmFtZXMudXBzdGFpcnNcIlxuICAgICAgICApLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDI3LFxuICAgICAgICBwcmVzZXRfbW9kZTogXCJhd2F5XCIsXG4gICAgICAgIHByZXNldF9tb2RlczogW1wiaG9tZVwiLCBcImF3YXlcIiwgXCJlY29cIiwgXCJzbGVlcFwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X2Jvb2xlYW4uYWJvZGV1cGRhdGVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImlucHV0X2Jvb2xlYW4uYWJvZGV1cGRhdGVcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQWJvZGUgVXBkYXRlc1wiLFxuICAgICAgICBpY29uOiBcImhhZGVtbzpzZWN1cml0eVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfYm9vbGVhbi50dlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfYm9vbGVhbi50dlwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVFZcIixcbiAgICAgICAgaWNvbjogXCJoYWRlbW86dGVsZXZpc2lvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfYm9vbGVhbi5ob21lYXV0b21hdGlvblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfYm9vbGVhbi5ob21lYXV0b21hdGlvblwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJIb21lIEF1dG9tYXRpb25cIixcbiAgICAgICAgaWNvbjogXCJoYXNzOmhvbWUtYXV0b21hdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfYm9vbGVhbi50dnRpbWVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImlucHV0X2Jvb2xlYW4udHZ0aW1lXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlRWIFRpbWVcIixcbiAgICAgICAgaWNvbjogXCJoYWRlbW86dGVsZXZpc2lvbi1ndWlkZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfc2VsZWN0LmxpdmluZ3Jvb21oYXJtb255XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJpbnB1dF9zZWxlY3QubGl2aW5ncm9vbWhhcm1vbnlcIixcbiAgICAgIHN0YXRlOiBcIllvdVR1YmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIFwiUG93ZXJPZmZcIixcbiAgICAgICAgICBcIldhdGNoIEZpcmUgVFZcIixcbiAgICAgICAgICBcIllvdVR1YmVcIixcbiAgICAgICAgICBcIlNBVFZcIixcbiAgICAgICAgICBcIldhdGNoIEFwcGxlIFRWXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IGxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy5hY3Rpdml0eVwiXG4gICAgICAgICksXG4gICAgICAgIGljb246IFwiaGFkZW1vOnJlbW90ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfc2VsZWN0LmhkbWlzd2l0Y2hlclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfc2VsZWN0LmhkbWlzd2l0Y2hlclwiLFxuICAgICAgc3RhdGU6IFwiU2hpZWxkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcIkFwcGxlVFZcIiwgXCJGaXJlVFZcIiwgXCJTaGllbGRcIl0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IGxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy5oZG1pX3N3aXRjaGVyXCJcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogXCJoYWRlbW86cmVtb3RlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJpbnB1dF9zZWxlY3QuaGRtaWlucHV0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJpbnB1dF9zZWxlY3QuaGRtaWlucHV0XCIsXG4gICAgICBzdGF0ZTogXCJJbnB1dEhkbWk0XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcIklucHV0SGRtaTFcIiwgXCJJbnB1dEhkbWkyXCIsIFwiSW5wdXRIRE1JM1wiLCBcIklucHV0SGRtaTRcIl0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IGxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy5oZG1pX2lucHV0XCJcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogXCJoYWRlbW86cmVtb3RlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJpbnB1dF9udW1iZXIuaGFybW9ueXZvbHVtZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfbnVtYmVyLmhhcm1vbnl2b2x1bWVcIixcbiAgICAgIHN0YXRlOiBcIjE4LjBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaW5pdGlhbDogMzAsXG4gICAgICAgIG1pbjogMSxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIG1vZGU6IFwic2xpZGVyXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IGxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy52b2x1bWVcIlxuICAgICAgICApLFxuICAgICAgICBpY29uOiBcImhhZGVtbzp2b2x1bWUtaGlnaFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LnR2X29mZlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2NyaXB0LnR2X29mZlwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGxhc3RfdHJpZ2dlcmVkOiBudWxsLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBsb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2UtZGVtby5jb25maWcuYXJzYWJvby5sYWJlbHMudHVybl90dl9vZmZcIlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnVzZGluclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVzZGluclwiLFxuICAgICAgc3RhdGU6IFwiNzEuMjVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYXR0cmlidXRpb246IFwiU3RvY2sgbWFya2V0IGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IEFscGhhIFZhbnRhZ2VcIixcbiAgICAgICAgZnJvbTogXCJVU0RcIixcbiAgICAgICAgdG86IFwiSU5SXCIsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiSU5SXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVVNESU5SXCIsXG4gICAgICAgIGljb246IFwiaGFkZW1vOmN1cnJlbmN5LXVzZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN0dWR5X3RlbXBcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zdHVkeV90ZW1wXCIsXG4gICAgICBzdGF0ZTogXCIyMC45XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiwrBDXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBsb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2UtZGVtby5jb25maWcuYXJzYWJvby5uYW1lcy50ZW1wZXJhdHVyZV9zdHVkeVwiXG4gICAgICAgICksXG4gICAgICAgIGljb246IFwiaGFkZW1vOnRoZXJtb21ldGVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJjb3Zlci5nYXJhZ2Vkb29yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJjb3Zlci5nYXJhZ2Vkb29yXCIsXG4gICAgICBzdGF0ZTogXCJjbG9zZWRcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJHYXJhZ2UgRG9vclwiLFxuICAgICAgICBpY29uOiBcImhhZGVtbzpnYXJhZ2VcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxMSxcbiAgICAgICAgaG9tZWJyaWRnZV9jb3Zlcl90eXBlOiBcImdhcmFnZV9kb29yXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBcImxpZ2h0LmxpdmluZ19yb29tX2xpZ2h0c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQubGl2aW5nX3Jvb21fbGlnaHRzXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbWluX21pcmVkczogMTExLFxuICAgICAgICBtYXhfbWlyZWRzOiA0MDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIFJvb20gTGlnaHRzXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNTUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzd2l0Y2guc2VjdXJpdHlfYXJtZWRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInN3aXRjaC5zZWN1cml0eV9hcm1lZFwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSG9tZSBTZWN1cml0eSBBcm1cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmtpdGNoZW5fbGlnaHRzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC5raXRjaGVuX2xpZ2h0c1wiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiS2l0Y2hlbiBsaWdodHNcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgXCJzZW5zb3IucGxleHNweVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBsZXhzcHlcIixcbiAgICAgIHN0YXRlOiBcIjBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJXYXRjaGluZ1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlBsZXhTcHlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IucmluZ19mcm9udF9kb29yX2RpbmdcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IucmluZ19mcm9udF9kb29yX2RpbmdcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHByb3ZpZGVkIGJ5IFJpbmcuY29tXCIsXG4gICAgICAgIGRldmljZV9pZDogXCJlMDRmNDM0ZGNhMDJcIixcbiAgICAgICAgZmlybXdhcmU6IFwiVXAgdG8gRGF0ZVwiLFxuICAgICAgICB0aW1lem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRnJvbnQgRG9vciBEaW5nXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJvY2N1cGFuY3lcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5yaW5nX2Zyb250X2Rvb3JfbGFzdF9tb3Rpb25cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5yaW5nX2Zyb250X2Rvb3JfbGFzdF9tb3Rpb25cIixcbiAgICAgIHN0YXRlOiBcIjEzOjIxXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBcIkRhdGEgcHJvdmlkZWQgYnkgUmluZy5jb21cIixcbiAgICAgICAgZGV2aWNlX2lkOiBcImUwNGY0MzRkY2EwMlwiLFxuICAgICAgICBmaXJtd2FyZTogXCJVcCB0byBEYXRlXCIsXG4gICAgICAgIGtpbmQ6IFwibHBkX3YyXCIsXG4gICAgICAgIHRpbWV6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIixcbiAgICAgICAgdHlwZTogXCJkb29yYm90c1wiLFxuICAgICAgICB3aWZpX25hbWU6IFwiUmluZ09mU2VjdXJpdHktaFVyR0tObGhSXCIsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxOS0wMS0yMlQxMzoyMTowMy0wNTowMFwiLFxuICAgICAgICBhbnN3ZXJlZDogZmFsc2UsXG4gICAgICAgIHJlY29yZGluZ19zdGF0dXM6IFwicmVhZHlcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwibW90aW9uXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRnJvbnQgRG9vciBMYXN0IE1vdGlvblwiLFxuICAgICAgICBpY29uOiBcImhhZGVtbzpoaXN0b3J5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJjYW1lcmEucGF0aW9cIjoge1xuICAgICAgZW50aXR5X2lkOiBcImNhbWVyYS5wYXRpb1wiLFxuICAgICAgc3RhdGU6IFwic3RyZWFtaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGFjY2Vzc190b2tlbjpcbiAgICAgICAgICBcImNiZDhkZmFjOWVmYjQ0MWYxOTE2OGUyNzFjYjg2MjliMDM3MmQwYzFmNzIxMzUzMzk0YjIzZWQwMjAyMDEzYjBcIixcbiAgICAgICAgbW90aW9uX2RldGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXRpb1wiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTpcbiAgICAgICAgICBcIi9hcGkvY2FtZXJhX3Byb3h5L2NhbWVyYS5wYXRpbz90b2tlbj1jYmQ4ZGZhYzllZmI0NDFmMTkxNjhlMjcxY2I4NjI5YjAzNzJkMGMxZjcyMTM1MzM5NGIyM2VkMDIwMjAxM2IwXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImNhbWVyYS5wb3JjaFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiY2FtZXJhLnBvcmNoXCIsXG4gICAgICBzdGF0ZTogXCJzdHJlYW1pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYWNjZXNzX3Rva2VuOlxuICAgICAgICAgIFwiNDc5YjMzMmUwYTdjYWQ0YzU4ZTBmYjk4YTFlY2I3OTQyZTNiMjI1MTkwYWRiOTNhMTM0MWVkZmE3ZGFmNDViMFwiLFxuICAgICAgICBtb3Rpb25fZGV0ZWN0aW9uOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlBvcmNoXCIsXG4gICAgICAgIGVudGl0eV9waWN0dXJlOlxuICAgICAgICAgIFwiL2FwaS9jYW1lcmFfcHJveHkvY2FtZXJhLnBvcmNoP3Rva2VuPTQ3OWIzMzJlMGE3Y2FkNGM1OGUwZmI5OGExZWNiNzk0MmUzYjIyNTE5MGFkYjkzYTEzNDFlZGZhN2RhZjQ1YjBcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiY2FtZXJhLmJhY2t5YXJkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJjYW1lcmEuYmFja3lhcmRcIixcbiAgICAgIHN0YXRlOiBcInN0cmVhbWluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhY2Nlc3NfdG9rZW46XG4gICAgICAgICAgXCI5MzgxYjJlNGVkZDFiYjIxZTg2OGUyMTkzZjVkMTMyYTVmYWUxNTNjZTRmNDU4NDUxZDk3OWEwMjcxMmI0NjQyXCIsXG4gICAgICAgIG1vdGlvbl9kZXRlY3Rpb246IHRydWUsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmFja3lhcmRcIixcbiAgICAgICAgZW50aXR5X3BpY3R1cmU6XG4gICAgICAgICAgXCIvYXBpL2NhbWVyYV9wcm94eS9jYW1lcmEuYmFja3lhcmQ/dG9rZW49OTM4MWIyZTRlZGQxYmIyMWU4NjhlMjE5M2Y1ZDEzMmE1ZmFlMTUzY2U0ZjQ1ODQ1MWQ5NzlhMDI3MTJiNDY0MlwiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJjYW1lcmEuZHJpdmV3YXlcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImNhbWVyYS5kcml2ZXdheVwiLFxuICAgICAgc3RhdGU6IFwic3RyZWFtaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGFjY2Vzc190b2tlbjpcbiAgICAgICAgICBcImFjMzhiZjg4YzJjNTg5NmVlZDY2YWUxNTczOWEzZTcyNjY3N2Y5MmQ3OWUwZDU3ZjgzZjcyNmFjMjhiZGE3NDZcIixcbiAgICAgICAgbW90aW9uX2RldGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEcml2ZXdheVwiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTpcbiAgICAgICAgICBcIi9hcGkvY2FtZXJhX3Byb3h5L2NhbWVyYS5kcml2ZXdheT90b2tlbj1hYzM4YmY4OGMyYzU4OTZlZWQ2NmFlMTU3MzlhM2U3MjY2NzdmOTJkNzllMGQ1N2Y4M2Y3MjZhYzI4YmRhNzQ2XCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImFsYXJtX2NvbnRyb2xfcGFuZWwuYWJvZGVfYWxhcm1cIjoge1xuICAgICAgZW50aXR5X2lkOiBcImFsYXJtX2NvbnRyb2xfcGFuZWwuYWJvZGVfYWxhcm1cIixcbiAgICAgIHN0YXRlOiBcImRpc2FybWVkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvZGVfZm9ybWF0OiBudWxsLFxuICAgICAgICBjaGFuZ2VkX2J5OiBudWxsLFxuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHByb3ZpZGVkIGJ5IGdvYWJvZGUuY29tXCIsXG4gICAgICAgIGRldmljZV9pZDogXCJhcmVhXzFcIixcbiAgICAgICAgYmF0dGVyeV9iYWNrdXA6IGZhbHNlLFxuICAgICAgICBjZWxsdWxhcl9iYWNrdXA6IGZhbHNlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkFib2RlIEFsYXJtXCIsXG4gICAgICAgIGljb246IFwiaGFkZW1vOnNlY3VyaXR5XCIsXG4gICAgICAgIGVudGl0eV9waWN0dXJlOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9BYm9kZS5qcGdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IucmluZ19mcm9udF9kb29yX21vdGlvblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5yaW5nX2Zyb250X2Rvb3JfbW90aW9uXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYXR0cmlidXRpb246IFwiRGF0YSBwcm92aWRlZCBieSBSaW5nLmNvbVwiLFxuICAgICAgICBkZXZpY2VfaWQ6IFwiZTA0ZjQzNGRjYTAyXCIsXG4gICAgICAgIGZpcm13YXJlOiBcIlVwIHRvIERhdGVcIixcbiAgICAgICAgdGltZXpvbmU6IFwiQW1lcmljYS9OZXdfWW9ya1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZyb250IERvb3IgTW90aW9uXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMTZkYWVjY1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxNmRhZWNjXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgXCJObyBtb3Rpb24gc2luY2VcIjogXCIxMjBcIixcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDMsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIFJvb20gT2NjdXBhbmN5XCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxYmYyNmRmXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmRvb3Jfd2luZG93X3NlbnNvcl8xNThkMDAwMWJmMjZkZlwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIFwiT3BlbiBzaW5jZVwiOiAwLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0NSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJHYXJhZ2UgRW50cnkgRG9vclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiZG9vclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxYTFmMmFiXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLm1vdGlvbl9zZW5zb3JfMTU4ZDAwMDFhMWYyYWJcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBcIk5vIG1vdGlvbiBzaW5jZVwiOiAwLFxuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA0OSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJHdWVzdCBSb29tIE9jY3VwYW5jeVwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwibW90aW9uXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYXR0cmlidXRpb246IFwiRGF0YSBwcm92aWRlZCBieSBnb2Fib2RlLmNvbVwiLFxuICAgICAgICBkZXZpY2VfaWQ6IFwiUkY6MDA1ZTg4MTBcIixcbiAgICAgICAgYmF0dGVyeV9sb3c6IGZhbHNlLFxuICAgICAgICBub19yZXNwb25zZTogZmFsc2UsXG4gICAgICAgIGRldmljZV90eXBlOiBcIkRvb3IgQ29udGFjdFwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZyb250IERvb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImRvb3JcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmJhY2tfZG9vclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBcIkRhdGEgcHJvdmlkZWQgYnkgZ29hYm9kZS5jb21cIixcbiAgICAgICAgZGV2aWNlX2lkOiBcIlJGOjAwNWM3MTEwXCIsXG4gICAgICAgIGJhdHRlcnlfbG93OiBmYWxzZSxcbiAgICAgICAgbm9fcmVzcG9uc2U6IGZhbHNlLFxuICAgICAgICBkZXZpY2VfdHlwZTogXCJEb29yIENvbnRhY3RcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCYWNrIERvb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImRvb3JcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1lZGlhX3BsYXllci5mYW1pbHlfcm9vbV8yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJtZWRpYV9wbGF5ZXIuZmFtaWx5X3Jvb21fMlwiLFxuICAgICAgc3RhdGU6IFwicGxheWluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB2b2x1bWVfbGV2ZWw6IDAuMTgsXG4gICAgICAgIGlzX3ZvbHVtZV9tdXRlZDogZmFsc2UsXG4gICAgICAgIG1lZGlhX2NvbnRlbnRfdHlwZTogXCJtdXNpY1wiLFxuICAgICAgICBtZWRpYV9kdXJhdGlvbjogMzAwLFxuICAgICAgICBtZWRpYV9wb3NpdGlvbjogMCxcbiAgICAgICAgbWVkaWFfcG9zaXRpb25fdXBkYXRlZF9hdDogbmV3IERhdGUoXG4gICAgICAgICAgLy8gMjMgc2Vjb25kcyBpblxuICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMjMwMDBcbiAgICAgICAgKS50b0lTT1N0cmluZygpLFxuICAgICAgICBtZWRpYV90aXRsZTogXCJJIFdhc24ndCBCb3JuIFRvIEZvbGxvd1wiLFxuICAgICAgICBtZWRpYV9hcnRpc3Q6IFwiVGhlIEJ5cmRzXCIsXG4gICAgICAgIG1lZGlhX2FsYnVtX25hbWU6IFwiVGhlIE5vdG9yaW91cyBCeXJkIEJyb3RoZXJzXCIsXG4gICAgICAgIHNvdXJjZV9saXN0OiBbXG4gICAgICAgICAgXCJCb2xseXdvb2QgSGluZGkgSGl0c1wiLFxuICAgICAgICAgIFwiQm9sbHl3b29kIFJhZGlvIGFuZCBCZXlvbmRcIixcbiAgICAgICAgICBcIkJvbHl3b29kIEluc3RydW1lbnRhbCAtIEh1bmdhbWEgUmFkaW9cIixcbiAgICAgICAgICBcIkNsYXNzaWMgQm9sbHl3b29kIFJhZGlvXCIsXG4gICAgICAgICAgXCJDb250ZW1wb3JhcnkgQm9sbHl3b29kIFJhZGlvXCIsXG4gICAgICAgICAgXCJIaW5kaSBCb2xseXdvb2QgSGl0cyBSYWRpb1wiLFxuICAgICAgICAgIFwiSXQncyBBIFBhcnR5XCIsXG4gICAgICAgICAgXCJMYXRhIE1hbmdlc2hrYXJcIixcbiAgICAgICAgICBcIk5QUiBQcm9ncmFtIFN0cmVhbVwiLFxuICAgICAgICAgIFwiUmFkaW8gSFNMXCIsXG4gICAgICAgICAgXCJSZXRybyA3MHMgYW5kIDgwc1wiLFxuICAgICAgICBdLFxuICAgICAgICBzaHVmZmxlOiBmYWxzZSxcbiAgICAgICAgc29ub3NfZ3JvdXA6IFtcIm1lZGlhX3BsYXllci5mYW1pbHlfcm9vbV8yXCJdLFxuICAgICAgICBuaWdodF9zb3VuZDogZmFsc2UsXG4gICAgICAgIHNwZWVjaF9lbmhhbmNlOiBmYWxzZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogbG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLWRlbW8uY29uZmlnLmFyc2Fib28ubmFtZXMuZmFtaWx5X3Jvb21cIlxuICAgICAgICApLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTpcbiAgICAgICAgICBcIi9hcGkvbWVkaWFfcGxheWVyX3Byb3h5L21lZGlhX3BsYXllci5mYW1pbHlfcm9vbV8yP3Rva2VuPWJlNDFhODZlMmEzNjA3NjFkNjdjMzZhMDEwYjA5NjU0YjczMGRlZWMwOTIwMTZlZTkyYWFmZWY3OWIxOTc4ZmYmY2FjaGU9ZTAzZDIyZmIxMDMyMDJlN1wiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDY0MDYzLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnJpbmdfZnJvbnRfZG9vcl9sYXN0X2RpbmdcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5yaW5nX2Zyb250X2Rvb3JfbGFzdF9kaW5nXCIsXG4gICAgICBzdGF0ZTogXCIwNjo0NFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHByb3ZpZGVkIGJ5IFJpbmcuY29tXCIsXG4gICAgICAgIGRldmljZV9pZDogXCJlMDRmNDM0ZGNhMDJcIixcbiAgICAgICAgZmlybXdhcmU6IFwiVXAgdG8gRGF0ZVwiLFxuICAgICAgICBraW5kOiBcImxwZF92MlwiLFxuICAgICAgICB0aW1lem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIsXG4gICAgICAgIHR5cGU6IFwiZG9vcmJvdHNcIixcbiAgICAgICAgd2lmaV9uYW1lOiBcIlJpbmdPZlNlY3VyaXR5LWhVckdLTmxoUlwiLFxuICAgICAgICBjcmVhdGVkX2F0OiBcIjIwMTktMDEtMjJUMDY6NDQ6MzEtMDU6MDBcIixcbiAgICAgICAgYW5zd2VyZWQ6IGZhbHNlLFxuICAgICAgICByZWNvcmRpbmdfc3RhdHVzOiBcInJlYWR5XCIsXG4gICAgICAgIGNhdGVnb3J5OiBcImRpbmdcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJGcm9udCBEb29yIExhc3QgRGluZ1wiLFxuICAgICAgICBpY29uOiBcImhhZGVtbzpoaXN0b3J5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsaWdodC5saWZ4NVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQubGlmeDVcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG1pbl9taXJlZHM6IDExMSxcbiAgICAgICAgbWF4X21pcmVkczogNDAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkdhcmFnZSBsaWdodHNcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiA1NSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5hbG9rX3RvX2hvbWVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5hbG9rX3RvX2hvbWVcIixcbiAgICAgIHN0YXRlOiBcIjQxXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGRlc3RpbmF0aW9uX2FkZHJlc3NlczogW1wiWFlaXCJdLFxuICAgICAgICBvcmlnaW5fYWRkcmVzc2VzOiBbXCJYWVpcIl0sXG4gICAgICAgIHN0YXR1czogXCJPS1wiLFxuICAgICAgICBtb2RlOiBcImRyaXZpbmdcIixcbiAgICAgICAgdW5pdHM6IFwiaW1wZXJpYWxcIixcbiAgICAgICAgZHVyYXRpb25faW5fdHJhZmZpYzogXCI0MSBtaW5zXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjQ0IG1pbnNcIixcbiAgICAgICAgZGlzdGFuY2U6IFwiMzQuMyBtaVwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1pblwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBsb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2UtZGVtby5jb25maWcuYXJzYWJvby5sYWJlbHMuY29tbXV0ZV9ob21lXCJcbiAgICAgICAgKSxcbiAgICAgICAgaWNvbjogXCJoYWRlbW86Y2FyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IubW9ybmluZ19jb21tdXRlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubW9ybmluZ19jb21tdXRlXCIsXG4gICAgICBzdGF0ZTogXCIzN1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IFtcIlhZWlwiXSxcbiAgICAgICAgb3JpZ2luX2FkZHJlc3NlczogW1wiWFlaXCJdLFxuICAgICAgICBzdGF0dXM6IFwiT0tcIixcbiAgICAgICAgbW9kZTogXCJkcml2aW5nXCIsXG4gICAgICAgIHVuaXRzOiBcImltcGVyaWFsXCIsXG4gICAgICAgIGR1cmF0aW9uX2luX3RyYWZmaWM6IFwiMzcgbWluc1wiLFxuICAgICAgICBkdXJhdGlvbjogXCIzNyBtaW5zXCIsXG4gICAgICAgIGRpc3RhbmNlOiBcIjMwLjIgbWlcIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJtaW5cIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogbG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLWRlbW8uY29uZmlnLmFyc2Fib28ubGFiZWxzLm1vcm5pbmdfY29tbXV0ZVwiXG4gICAgICAgICksXG4gICAgICAgIGljb246IFwiaGFkZW1vOmNhclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic3dpdGNoLmRyaXZld2F5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzd2l0Y2guZHJpdmV3YXlcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRyaXZld2F5IExpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzd2l0Y2gud2Vtb3BvcmNoXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzd2l0Y2gud2Vtb3BvcmNoXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQb3JjaCBMaWdodHNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBEZW1vQ29uZmlnIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZW1vTG92ZWxhY2VBcnNhYm9vIH0gZnJvbSBcIi4vbG92ZWxhY2VcIjtcbmltcG9ydCB7IGRlbW9FbnRpdGllc0Fyc2Fib28gfSBmcm9tIFwiLi9lbnRpdGllc1wiO1xuaW1wb3J0IHsgZGVtb1RoZW1lQXJzYWJvbyB9IGZyb20gXCIuL3RoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCBkZW1vQXJzYWJvbzogRGVtb0NvbmZpZyA9IHtcbiAgYXV0aG9yTmFtZTogXCJBcnNhYm9vXCIsXG4gIGF1dGhvclVybDogXCJodHRwczovL2dpdGh1Yi5jb20vYXJzYWJvby9ob21lYXNzaXN0YW50LWNvbmZpZy9cIixcbiAgbmFtZTogXCJBUlMgSG9tZVwiLFxuICBsb3ZlbGFjZTogZGVtb0xvdmVsYWNlQXJzYWJvbyxcbiAgZW50aXRpZXM6IGRlbW9FbnRpdGllc0Fyc2Fib28sXG4gIHRoZW1lOiBkZW1vVGhlbWVBcnNhYm9vLFxufTtcbiIsImltcG9ydCB7IERlbW9Db25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRlbW9Mb3ZlbGFjZUFyc2Fib286IERlbW9Db25maWdbXCJsb3ZlbGFjZVwiXSA9IChsb2NhbGl6ZSkgPT4gKHtcbiAgdGl0bGU6IFwiSG9tZSBBc3Npc3RhbnRcIixcbiAgdmlld3M6IFtcbiAgICB7XG4gICAgICBpY29uOiBcImhhc3M6aG9tZS1hc3Npc3RhbnRcIixcbiAgICAgIGlkOiBcImhvbWVcIixcbiAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHsgdHlwZTogXCJjdXN0b206aGEtZGVtby1jYXJkXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogbG9jYWxpemUoXCJ1aS5wYW5lbC5wYWdlLWRlbW8uY29uZmlnLmFyc2Fib28ubGFiZWxzLmxpZ2h0c1wiKSxcbiAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQua2l0Y2hlbl9saWdodHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJsaWdodC5saXZpbmdfcm9vbV9saWdodHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzd2l0Y2gud2Vtb3BvcmNoXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaWdodC5saWZ4NVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImN1c3RvbTpjYXN0LWRlbW8tcm93XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRoZXJtb3N0YXRcIixcbiAgICAgICAgICBlbnRpdHk6IFwiY2xpbWF0ZS51cHN0YWlyc1wiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vZmxvb3JwbGFucy9tYWluLnBuZ1wiLFxuICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImlucHV0X2Jvb2xlYW4uYWJvZGV1cGRhdGVcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBvbjogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvYWJvZGVfZW5hYmxlZC5wbmdcIixcbiAgICAgICAgICAgICAgICBvZmY6IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2Fib2RlX2Rpc2FibGVkLnBuZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRvcDogXCI0JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNyVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImlucHV0X2Jvb2xlYW4udHZ0aW1lXCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXRlX2ltYWdlOiB7XG4gICAgICAgICAgICAgICAgb246IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL3R2X2VuYWJsZWQucG5nXCIsXG4gICAgICAgICAgICAgICAgb2ZmOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy90dl9kaXNhYmxlZC5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiNCVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjQwJVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjclXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJzd2l0Y2guc2VjdXJpdHlfYXJtZWRcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBvbjogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvc2VjdXJpdHlfYXJtZWRfcmVkLnBuZ1wiLFxuICAgICAgICAgICAgICAgIG9mZjogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvc2VjdXJpdHlfZGlzYXJtZWQucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjQlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3JVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiaW5wdXRfYm9vbGVhbi5ob21lYXV0b21hdGlvblwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIG9uOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9hdXRvbWF0aW9uX2VuYWJsZWQucG5nXCIsXG4gICAgICAgICAgICAgICAgb2ZmOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9hdXRvbWF0aW9uX2Rpc2FibGVkLnBuZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRvcDogXCI0JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNjAlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNyVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LmtpdGNoZW5fbGlnaHRzXCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9saWdodF9idWxiX29mZi5wbmdcIixcbiAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBvbjogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvbGlnaHRfYnVsYl9vbi5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhdGVfZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgb246XG4gICAgICAgICAgICAgICAgICBcImJyaWdodG5lc3MoMTMwJSkgc2F0dXJhdGUoMS41KSBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggZ29sZClcIixcbiAgICAgICAgICAgICAgICBvZmY6IFwiYnJpZ2h0bmVzcyg4MCUpIHNhdHVyYXRlKDAuOClcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiNDAlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCIxMSVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3JVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiY2FtZXJhLnBvcmNoXCIsXG4gICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9jYW1lcmFfcG9yY2hfc3RyZWFtaW5nLnBuZ1wiLFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIHJlY29yZGluZzogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvY2FtZXJhX3BvcmNoX3JlY29yZGluZy5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiOTAlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCIzJVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjclXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImNhbWVyYS5wYXRpb1wiLFxuICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvY2FtZXJhX3BhdGlvX3N0cmVhbWluZy5wbmdcIixcbiAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICByZWNvcmRpbmc6IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2NhbWVyYV9wYXRpb19yZWNvcmRpbmcucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMyVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3JVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJjYW1lcmEuYmFja3lhcmRcIixcbiAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2NhbWVyYV9iYWNreWFyZF9zdHJlYW1pbmcucG5nXCIsXG4gICAgICAgICAgICAgIHN0YXRlX2ltYWdlOiB7XG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nOlxuICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvY2FtZXJhX2JhY2t5YXJkX3JlY29yZGluZy5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiMTIlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCI5MCVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3JVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJjYW1lcmEuZHJpdmV3YXlcIixcbiAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2NhbWVyYV9kcml2ZXdheV9zdHJlYW1pbmcucG5nXCIsXG4gICAgICAgICAgICAgIHN0YXRlX2ltYWdlOiB7XG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nOlxuICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvY2FtZXJhX2RyaXZld2F5X3JlY29yZGluZy5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiODEuNSVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjclXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LmxpdmluZ19yb29tX2xpZ2h0c1wiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBob2xkX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtb3JlLWluZm9cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2xpZ2h0X2J1bGJfb2ZmLnBuZ1wiLFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIG9uOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9saWdodF9idWxiX29uLnBuZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGF0ZV9maWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBvbjpcbiAgICAgICAgICAgICAgICAgIFwiYnJpZ2h0bmVzcygxMzAlKSBzYXR1cmF0ZSgxLjUpIGRyb3Atc2hhZG93KDBweCAwcHggMTBweCBnb2xkKVwiLFxuICAgICAgICAgICAgICAgIG9mZjogXCJicmlnaHRuZXNzKDgwJSkgc2F0dXJhdGUoMC44KVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRvcDogXCIzNCVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjclXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IubGl2aW5ncm9vbV90ZW1wX3JvdW5kZWRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiNDMlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgJ2NlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybChcIi9hc3NldHMvYXJzYWJvby9pY29ucy9lY29iZWVfYmxhbmsucG5nXCIpJyxcbiAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJIZWx2ZXRpY2FcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5tb3Rpb25fc2Vuc29yXzE1OGQwMDAxNmRhZWNjXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjI3JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjE3JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTUlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJpbnB1dF9ib29sZWFuLnR2XCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy90dl9vZmYyLnBuZ1wiLFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIG9uOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy90dl9vbjIucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXRlX2ZpbHRlcjoge1xuICAgICAgICAgICAgICAgIG9uOiBcImRyb3Atc2hhZG93KC01cHggMCAxMHB4IGdvbGQpXCIsXG4gICAgICAgICAgICAgICAgb2ZmOiBcImJyaWdodG5lc3MoODAlKSBzYXR1cmF0ZSgwLjgpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjI5JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNjguMyVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyLjUlXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDAgMTBweCAzMHB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IubW90aW9uX3NlbnNvcl8xNThkMDAwMWExZjJhYlwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRvcDogXCIyNyVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjg1JVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwic3dpdGNoLndlbW9wb3JjaFwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvbGlnaHRfYnVsYl9vZmYucG5nXCIsXG4gICAgICAgICAgICAgIHN0YXRlX2ltYWdlOiB7XG4gICAgICAgICAgICAgICAgb246IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2xpZ2h0X2J1bGJfb24ucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXRlX2ZpbHRlcjoge1xuICAgICAgICAgICAgICAgIG9uOlxuICAgICAgICAgICAgICAgICAgXCJicmlnaHRuZXNzKDEzMCUpIHNhdHVyYXRlKDEuNSkgZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IGdvbGQpXCIsXG4gICAgICAgICAgICAgICAgb2ZmOiBcImJyaWdodG5lc3MoODAlKSBzYXR1cmF0ZSgwLjgpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjkyJVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNyVcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwic3RhdGUtaWNvblwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5yaW5nX2Zyb250X2Rvb3JfbW90aW9uXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjk1JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzIlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWljb25cIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuZG9vcl93aW5kb3dfc2Vuc29yXzE1OGQwMDAxYmYyNmRmXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjY0JVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTYlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJsaWdodC5saWZ4NVwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvbGlnaHRfYnVsYl9vZmYucG5nXCIsXG4gICAgICAgICAgICAgIHN0YXRlX2ltYWdlOiB7XG4gICAgICAgICAgICAgICAgb246IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2xpZ2h0X2J1bGJfb24ucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXRlX2ZpbHRlcjoge1xuICAgICAgICAgICAgICAgIG9uOlxuICAgICAgICAgICAgICAgICAgXCJicmlnaHRuZXNzKDEzMCUpIHNhdHVyYXRlKDEuNSkgZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IGdvbGQpXCIsXG4gICAgICAgICAgICAgICAgb2ZmOiBcImJyaWdodG5lc3MoODAlKSBzYXR1cmF0ZSgwLjgpXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjYwJVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzglXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNyVcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcInN3aXRjaC5kcml2ZXdheVwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvbGlnaHRfb2ZmLnBuZ1wiLFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIG9uOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9saWdodF9vbi5wbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhdGVfZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgb246IFwiZHJvcC1zaGFkb3coLTVweCAtNXB4IDEwcHggZ29sZClcIixcbiAgICAgICAgICAgICAgICBvZmY6IFwiYnJpZ2h0bmVzcyg4MCUpIHNhdHVyYXRlKDAuOClcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiODQlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCI4MiVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3JVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiY292ZXIuZ2FyYWdlZG9vclwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2Fyc2Fib28vaWNvbnMvZ2FyYWdlX2Rvb3JfY2xvc2VkLnBuZ1wiLFxuICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgIG9wZW46IFwiL2Fzc2V0cy9hcnNhYm9vL2ljb25zL2dhcmFnZV9kb29yX29wZW4ucG5nXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VkOiBcIi9hc3NldHMvYXJzYWJvby9pY29ucy9nYXJhZ2VfZG9vcl9jbG9zZWQucG5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjcxJVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiNzQlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNyVcIixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN0dWR5X3RlbXBfcm91bmRlZFwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHRvcDogXCI4MCVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjQ5JVwiLFxuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImdyYXlcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgJ2NlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybChcIi9hc3NldHMvYXJzYWJvby9pY29ucy9lY29iZWVfYmxhbmsucG5nXCIpJyxcbiAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJIZWx2ZXRpY2FcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTp0aGVybW9zdGF0LWNhcmRcIixcbiAgICAgICAgICAgIC8vICAgZW50aXR5OiBcImNsaW1hdGUuZG93bnN0YWlyc1wiLFxuICAgICAgICAgICAgLy8gICBub19jYXJkOiB0cnVlLFxuICAgICAgICAgICAgLy8gICBodmFjOiB7XG4gICAgICAgICAgICAvLyAgICAgYXR0cmlidXRlOiBcIm9wZXJhdGlvblwiLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gICBzdHlsZToge1xuICAgICAgICAgICAgLy8gICAgIHRvcDogXCI3OCVcIixcbiAgICAgICAgICAgIC8vICAgICBsZWZ0OiBcIjE1JVwiLFxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1pY29uXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3JcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiODklXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCIzMiVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJtZWRpYS1jb250cm9sXCIsXG4gICAgICAgICAgZW50aXR5OiBcIm1lZGlhX3BsYXllci5mYW1pbHlfcm9vbV8yXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLWRlbW8uY29uZmlnLmFyc2Fib28ubGFiZWxzLmluZm9ybWF0aW9uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwic2Vuc29yLm1vcm5pbmdfY29tbXV0ZVwiLFxuICAgICAgICAgICAgXCJzZW5zb3IuYWxva190b19ob21lXCIsXG4gICAgICAgICAgICBcInNlbnNvci5wbGV4c3B5XCIsXG4gICAgICAgICAgICBcInNlbnNvci51c2RpbnJcIixcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImFsYXJtLXBhbmVsXCIsXG4gICAgICAgICAgZW50aXR5OiBcImFsYXJtX2NvbnRyb2xfcGFuZWwuYWJvZGVfYWxhcm1cIixcbiAgICAgICAgICBuYW1lOiBcIlNlY3VyaXR5XCIsXG4gICAgICAgICAgc3RhdGVzOiBbXCJhcm1faG9tZVwiLCBcImFybV9hd2F5XCJdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHRpdGxlOiBsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1kZW1vLmNvbmZpZy5hcnNhYm9vLmxhYmVscy5lbnRlcnRhaW5tZW50XCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwic2Vuc29yLmxpdmluZ19yb29tXCIsXG4gICAgICAgICAgICBcImlucHV0X3NlbGVjdC5saXZpbmdyb29taGFybW9ueVwiLFxuICAgICAgICAgICAgXCJpbnB1dF9zZWxlY3QuaGRtaXN3aXRjaGVyXCIsXG4gICAgICAgICAgICBcImlucHV0X3NlbGVjdC5oZG1paW5wdXRcIixcbiAgICAgICAgICAgIFwiaW5wdXRfbnVtYmVyLmhhcm1vbnl2b2x1bWVcIixcbiAgICAgICAgICAgIFwic2Vuc29yLnRvdGFsX3R2X3RpbWVcIixcbiAgICAgICAgICAgIFwic2NyaXB0LnR2X29mZlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3R1ZHlfdGVtcFwiLFxuICAgICAgICAgIGdyYXBoOiBcImxpbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJEb29yYmVsbFwiLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5yaW5nX2Zyb250X2Rvb3JfZGluZ1wiLFxuICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnJpbmdfZnJvbnRfZG9vcl9tb3Rpb25cIixcbiAgICAgICAgICAgIFwic2Vuc29yLnJpbmdfZnJvbnRfZG9vcl9sYXN0X2RpbmdcIixcbiAgICAgICAgICAgIFwic2Vuc29yLnJpbmdfZnJvbnRfZG9vcl9sYXN0X21vdGlvblwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59KTtcbiIsImV4cG9ydCBjb25zdCBkZW1vVGhlbWVBcnNhYm9vID0gKCkgPT4gKHt9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXBCQTtBQUhBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFHQTtBQVhBO0FBSEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBSEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUhBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBSEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFuQ0E7QUFIQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWJBO0FBSEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBYkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBMWlCQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBZEE7QUFvQkE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBZkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBbEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFIQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWRBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFmQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFmQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWRBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQTFXQTtBQXNYQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQU5BO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBTkE7QUFpQkE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBaGNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9