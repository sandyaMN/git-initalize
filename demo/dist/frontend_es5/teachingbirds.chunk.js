(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["teachingbirds"],{

/***/ "./demo/src/configs/teachingbirds/entities.ts":
/*!****************************************************!*\
  !*** ./demo/src/configs/teachingbirds/entities.ts ***!
  \****************************************************/
/*! exports provided: demoEntitiesTeachingbirds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoEntitiesTeachingbirds", function() { return demoEntitiesTeachingbirds; });
/* harmony import */ var _src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/fake_data/entity */ "./src/fake_data/entity.ts");

var demoEntitiesTeachingbirds = function demoEntitiesTeachingbirds() {
  return Object(_src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__["convertEntities"])({
    "sensor.pollen_grabo": {
      entity_id: "sensor.pollen_grabo",
      state: "",
      attributes: {
        friendly_name: "Mugwort",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'no levels') return [0, 0]; else if (state === 'low levels') return [50, 70]; else if (state === 'low-moderate levels') return [40, 70]; else if (state === 'moderate levels') return [30, 70]; else if (state === 'moderate-high levels') return [20, 85]; else if (state === 'high levels') return [10, 65]; else if (state === 'very high levels') return [0, 85];"
        },
        icon: "mdi:flower"
      }
    },
    "sensor.pollen_bjork": {
      entity_id: "sensor.pollen_bjork",
      state: "",
      attributes: {
        friendly_name: "Birch",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'no levels') return [0, 0]; else if (state === 'low levels') return [50, 70]; else if (state === 'low-moderate levels') return [40, 70]; else if (state === 'moderate levels') return [30, 70]; else if (state === 'moderate-high levels') return [20, 85]; else if (state === 'high levels') return [10, 65]; else if (state === 'very high levels') return [0, 85];"
        },
        icon: "mdi:leaf"
      }
    },
    "sensor.pollen_gras": {
      entity_id: "sensor.pollen_gras",
      state: "",
      attributes: {
        friendly_name: "Grass",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'no levels') return [0, 0]; else if (state === 'low levels') return [50, 70]; else if (state === 'low-moderate levels') return [40, 70]; else if (state === 'moderate levels') return [30, 70]; else if (state === 'moderate-high levels') return [20, 85]; else if (state === 'high levels') return [10, 65]; else if (state === 'very high levels') return [0, 85];"
        },
        icon: "mdi:flower"
      }
    },
    "sensor.front_door": {
      entity_id: "sensor.front_door",
      state: "Unknown",
      attributes: {
        friendly_name: "Front Door",
        icon: "mdi:comment-question-outline",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [40, 70]
      }
    },
    "sensor.yard_door": {
      entity_id: "sensor.yard_door",
      state: "Closed",
      attributes: {
        friendly_name: "Yard Door",
        icon: "mdi:door",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.balcony_door": {
      entity_id: "sensor.balcony_door",
      state: "Closed",
      attributes: {
        friendly_name: "Balcony Door",
        icon: "mdi:door",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.back_door": {
      entity_id: "sensor.back_door",
      state: "Closed",
      attributes: {
        friendly_name: "Back Door",
        icon: "mdi:door",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.system_stefan_laptop": {
      entity_id: "sensor.system_stefan_laptop",
      state: "Offline",
      attributes: {
        friendly_name: "Stefan laptop",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:laptop-windows",
        hs_color: [0, 85]
      }
    },
    "sensor.system_isa_computer": {
      entity_id: "sensor.system_isa_computer",
      state: "Offline",
      attributes: {
        friendly_name: "Isas computer",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:monitor",
        hs_color: [0, 85]
      }
    },
    "sensor.system_isa_laptop": {
      entity_id: "sensor.system_isa_laptop",
      state: "Offline",
      attributes: {
        friendly_name: "Isas old laptop",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:laptop-windows",
        hs_color: [0, 85]
      }
    },
    "sensor.system_isa_dell_xps": {
      entity_id: "sensor.system_isa_dell_xps",
      state: "Online",
      attributes: {
        friendly_name: "Isa Dell XPS",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:laptop-windows",
        hs_color: [0, 0]
      }
    },
    "sensor.system_printer": {
      entity_id: "sensor.system_printer",
      state: "Online",
      attributes: {
        friendly_name: "HP Printer",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:printer",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ipad": {
      entity_id: "sensor.system_ipad",
      state: "Online",
      attributes: {
        friendly_name: "iPad",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:tablet-ipad",
        hs_color: [0, 0]
      }
    },
    "sensor.system_asus_router": {
      entity_id: "sensor.system_asus_router",
      state: "Online",
      attributes: {
        friendly_name: "Asus Router",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:wifi",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ip_camera": {
      entity_id: "sensor.system_ip_camera",
      state: "Online",
      attributes: {
        friendly_name: "Sannce Camera",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:webcam",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ir_blaster": {
      entity_id: "sensor.system_ir_blaster",
      state: "Online",
      attributes: {
        friendly_name: "Broadlink IR Blaster Hallway",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:remote",
        hs_color: [0, 0]
      }
    },
    "sensor.system_milight_hub": {
      entity_id: "sensor.system_milight_hub",
      state: "Online",
      attributes: {
        friendly_name: "Milight Hub",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:google-keep",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ir_blaster_bedroom": {
      entity_id: "sensor.system_ir_blaster_bedroom",
      state: "Online",
      attributes: {
        friendly_name: "Broadlink IR Blaster Bedroom",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:remote",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ir_blaster_living_room": {
      entity_id: "sensor.system_ir_blaster_living_room",
      state: "Online",
      attributes: {
        friendly_name: "Broadlink IR Blaster Living Room",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:remote",
        hs_color: [0, 0]
      }
    },
    "sensor.system_xiaomi_gateway": {
      entity_id: "sensor.system_xiaomi_gateway",
      state: "Online",
      attributes: {
        friendly_name: "Xiaomi Gateway",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:circle-outline",
        hs_color: [0, 0]
      }
    },
    "sensor.system_sonos": {
      entity_id: "sensor.system_sonos",
      state: "Online",
      attributes: {
        friendly_name: "Sonos",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.system_magic_mirror_rpi": {
      entity_id: "sensor.system_magic_mirror_rpi",
      state: "Online",
      attributes: {
        friendly_name: "Dashboard RPi",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:raspberrypi",
        hs_color: [0, 0]
      }
    },
    "sensor.system_nas": {
      entity_id: "sensor.system_nas",
      state: "Online",
      attributes: {
        friendly_name: "Synology NAS",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:server",
        hs_color: [0, 0]
      }
    },
    "sensor.system_hass_rpi": {
      entity_id: "sensor.system_hass_rpi",
      state: "Online",
      attributes: {
        friendly_name: "Hass RPi",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:home-assistant",
        hs_color: [0, 0]
      }
    },
    "sensor.system_samsung65": {
      entity_id: "sensor.system_samsung65",
      state: "Offline",
      attributes: {
        friendly_name: "Living Room TV",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:television",
        hs_color: [0, 85]
      }
    },
    "sensor.system_dashboard_rpi": {
      entity_id: "sensor.system_dashboard_rpi",
      state: "Offline",
      attributes: {
        friendly_name: '7" Dashboard RPi',
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:raspberrypi",
        hs_color: [0, 85]
      }
    },
    "sensor.system_samsung49": {
      entity_id: "sensor.system_samsung49",
      state: "Offline",
      attributes: {
        friendly_name: "Bedroom TV",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:television",
        hs_color: [0, 85]
      }
    },
    "sensor.system_rpi_zero": {
      entity_id: "sensor.system_rpi_zero",
      state: "Online",
      attributes: {
        friendly_name: "RPi Zero",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:raspberrypi",
        hs_color: [0, 0]
      }
    },
    "sensor.system_movie_system": {
      entity_id: "sensor.system_movie_system",
      state: "Offline",
      attributes: {
        friendly_name: "Living Room Movie System",
        custom_ui_state_card: "state-card-custom-ui",
        hidden: true,
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:speaker",
        hs_color: [0, 85]
      }
    },
    "sensor.system_ring_doorbell": {
      entity_id: "sensor.system_ring_doorbell",
      state: "Offline",
      attributes: {
        friendly_name: "Ring",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:doorbell-video",
        hs_color: [0, 85]
      }
    },
    "sensor.system_netgear_router": {
      entity_id: "sensor.system_netgear_router",
      state: "Online",
      attributes: {
        friendly_name: "Netgear Router",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:wifi",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ring_chime_pro": {
      entity_id: "sensor.system_ring_chime_pro",
      state: "Offline",
      attributes: {
        friendly_name: "Ring Chime Pro",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:wifi",
        hs_color: [0, 85]
      }
    },
    "sensor.system_shield": {
      entity_id: "sensor.system_shield",
      state: "Online",
      attributes: {
        friendly_name: "NVidia Shield",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:android",
        hs_color: [0, 0]
      }
    },
    "sensor.system_ring_chime": {
      entity_id: "sensor.system_ring_chime",
      state: "Offline",
      attributes: {
        friendly_name: "Ring Chime Pro",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:bell-outline",
        hs_color: [0, 85]
      }
    },
    "sensor.system_chromecast_bedroom": {
      entity_id: "sensor.system_chromecast_bedroom",
      state: "Online",
      attributes: {
        friendly_name: "Chromecast Bedroom",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:cast",
        hs_color: [0, 0]
      }
    },
    "sensor.system_dafang": {
      entity_id: "sensor.system_dafang",
      state: "Online",
      attributes: {
        friendly_name: "Dafang",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.system_stefan_computer": {
      entity_id: "sensor.system_stefan_computer",
      state: "Online",
      attributes: {
        friendly_name: "Stefan computer",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Online') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Offline') return [0, 85];"
        },
        icon: "mdi:monitor",
        hs_color: [0, 0]
      }
    },
    "sensor.unlocked_by": {
      entity_id: "sensor.unlocked_by",
      state: "Stefan",
      attributes: {
        friendly_name: "Unlocked by",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Locked') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Unlocked') return [0, 85];"
        }
      }
    },
    "sensor.greenhouse_temperature": {
      entity_id: "sensor.greenhouse_temperature",
      state: "21.3",
      attributes: {
        count_sensors: 3,
        max_value: 21.3,
        mean: 21.3,
        min_value: 21.3,
        last: 21.3,
        unit_of_measurement: "\xB0C",
        friendly_name: "Greenhouse temperature",
        icon: "mdi:calculator",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.dining_area_window": {
      entity_id: "sensor.dining_area_window",
      state: "Closed",
      attributes: {
        friendly_name: "Dining area window",
        icon: "mdi:window-closed",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.bedroom_window": {
      entity_id: "sensor.bedroom_window",
      state: "Closed",
      attributes: {
        friendly_name: "Bedroom window",
        icon: "mdi:window-closed",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.passage_movement": {
      entity_id: "sensor.passage_movement",
      state: "No movement",
      attributes: {
        friendly_name: "Passage Movement",
        icon: "mdi:sleep",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.upstairs_hallway_movement": {
      entity_id: "sensor.upstairs_hallway_movement",
      state: "No movement",
      attributes: {
        friendly_name: "Upstairs Hallway Movement",
        icon: "mdi:sleep",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.trash_status": {
      entity_id: "sensor.trash_status",
      state: "Put out",
      attributes: {
        friendly_name: "Trash",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:delete"
      }
    },
    "sensor.herbs_moisture": {
      entity_id: "sensor.herbs_moisture",
      state: "39",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Herbs moisture",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:water-percent"
      }
    },
    "sensor.monitor": {
      entity_id: "sensor.monitor",
      state: "unknown",
      attributes: {
        friendly_name: "Monitor",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.speedtest_ping": {
      entity_id: "sensor.speedtest_ping",
      state: "6.859",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 286845795,
        bytes_sent: 146800640,
        server_country: "Sweden",
        server_id: "10256",
        latency: 6.859,
        server_name: "Stockholm",
        unit_of_measurement: "ms",
        friendly_name: "Speedtest Ping",
        icon: "mdi:speedometer",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.speedtest_upload": {
      entity_id: "sensor.speedtest_upload",
      state: "169.8",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 286845795,
        bytes_sent: 146800640,
        server_country: "Sweden",
        server_id: "10256",
        latency: 6.859,
        server_name: "Stockholm",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Upload",
        icon: "mdi:speedometer",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.speedtest_download": {
      entity_id: "sensor.speedtest_download",
      state: "229.23",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 286845795,
        bytes_sent: 146800640,
        server_country: "Sweden",
        server_id: "10256",
        latency: 6.859,
        server_name: "Stockholm",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Download",
        icon: "mdi:speedometer",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.big_chili_moisture": {
      entity_id: "sensor.big_chili_moisture",
      state: "36",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Big chili moisture",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:water-percent"
      }
    },
    "sensor.memory_use_percent": {
      entity_id: "sensor.memory_use_percent",
      state: "19.4",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Memory use (percent)",
        icon: "mdi:memory",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.small_chili_moisture": {
      entity_id: "sensor.small_chili_moisture",
      state: "34",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Small chili moisture",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:water-percent"
      }
    },
    "sensor.processor_use": {
      entity_id: "sensor.processor_use",
      state: "37",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Processor use",
        icon: "mdi:memory",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.last_boot": {
      entity_id: "sensor.last_boot",
      state: "2019-01-10T16:56:44+01:00",
      attributes: {
        unit_of_measurement: "",
        friendly_name: "Last boot",
        icon: "mdi:clock",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.disk_use_percent_": {
      entity_id: "sensor.disk_use_percent_",
      state: "28.7",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Disk use (percent) /",
        icon: "mdi:harddisk",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.isabellas_iphone_x_bt": {
      entity_id: "sensor.isabellas_iphone_x_bt",
      state: "unknown",
      attributes: {
        friendly_name: "isabellas_iphone_x_bt",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.stefan_iphone_7_bt": {
      entity_id: "sensor.stefan_iphone_7_bt",
      state: "unknown",
      attributes: {
        friendly_name: "stefan_iphone_7_bt",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.ring_front_door_last_motion": {
      entity_id: "sensor.ring_front_door_last_motion",
      state: "13:07",
      attributes: {
        attribution: "Data provided by Ring.com",
        device_id: "50338bebd4c6",
        firmware: "Up to Date",
        kind: "doorbell_v4",
        timezone: "Europe/Stockholm",
        type: "doorbots",
        wifi_name: "RingOfSecurity-T4UPC6C8n",
        created_at: "2019-01-19T13:07:40+01:00",
        answered: false,
        recording_status: "ready",
        category: "motion",
        friendly_name: "Front Door Last Motion",
        icon: "mdi:history",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state === 'Closed') return [0, 0]; else if (state === 'Unknown') return [40, 70]; else if (state === 'Open') return [0, 85];"
        }
      }
    },
    "switch.livingroom_movie_system": {
      entity_id: "switch.livingroom_movie_system",
      state: "on",
      attributes: {
        friendly_name: "livingroom_movie_system",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "switch.livingroom_tv": {
      entity_id: "switch.livingroom_tv",
      state: "on",
      attributes: {
        friendly_name: "livingroom_tv",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "switch.stefan_radiator_3": {
      entity_id: "switch.stefan_radiator_3",
      state: "off",
      attributes: {
        friendly_name: "Stefan Radiator",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.store": {
      entity_id: "zone.store",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Store",
        icon: "mdi:cart",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.work_s": {
      entity_id: "zone.work_s",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Work S",
        icon: "mdi:code-braces",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.work_solna": {
      entity_id: "zone.work_solna",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Work Solna",
        icon: "mdi:code-braces",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.work_i": {
      entity_id: "zone.work_i",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Work I",
        icon: "mdi:code-braces",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.golf": {
      entity_id: "zone.golf",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 800,
        friendly_name: "Golf",
        icon: "mdi:golf",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.johannes_och_tessie": {
      entity_id: "zone.johannes_och_tessie",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Johannes och Tessie",
        icon: "mdi:account-multiple",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.brulle_och_saara": {
      entity_id: "zone.brulle_och_saara",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Brulle och Saara",
        icon: "mdi:account-multiple",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.emelie": {
      entity_id: "zone.emelie",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Emelie",
        icon: "mdi:account-multiple",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.isa_mamma": {
      entity_id: "zone.isa_mamma",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 300,
        friendly_name: "Isa mamma",
        icon: "mdi:account-multiple",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.fagelbro": {
      entity_id: "zone.fagelbro",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 1000,
        friendly_name: "Fagelbro",
        icon: "mdi:golf",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "zone.home": {
      entity_id: "zone.home",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100,
        friendly_name: "Home",
        icon: "mdi:home",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "script.air_cleaner_quiet": {
      entity_id: "script.air_cleaner_quiet",
      state: "off",
      attributes: {
        last_triggered: null,
        friendly_name: "air_cleaner_quiet",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "script.air_cleaner_auto": {
      entity_id: "script.air_cleaner_auto",
      state: "off",
      attributes: {
        last_triggered: null,
        friendly_name: "air_cleaner_auto",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "script.air_cleaner_turbo": {
      entity_id: "script.air_cleaner_turbo",
      state: "off",
      attributes: {
        last_triggered: null,
        friendly_name: "air_cleaner_turbo",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "script.ac_off": {
      entity_id: "script.ac_off",
      state: "off",
      attributes: {
        last_triggered: null,
        friendly_name: "ac_off",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "script.ac_on": {
      entity_id: "script.ac_on",
      state: "off",
      attributes: {
        last_triggered: null,
        friendly_name: "ac_on",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_boolean.vacation_mode": {
      entity_id: "input_boolean.vacation_mode",
      state: "off",
      attributes: {
        friendly_name: "Vacation Mode",
        icon: "mdi:beach",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_boolean.isa_mode": {
      entity_id: "input_boolean.isa_mode",
      state: "off",
      attributes: {
        friendly_name: "Isabella Mode",
        icon: "mdi:account-off",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          icon: "if (state === 'on') return 'mdi:account'; else if (state === 'off') return 'mdi:account-off';\n",
          icon_color: "if (state === 'on') return 'rgb(56, 150, 56)'; else if (state === 'off') return 'rgb(249, 251, 255)';\n"
        },
        icon_color: "rgb(249, 251, 255)"
      }
    },
    "input_boolean.cleaning_day": {
      entity_id: "input_boolean.cleaning_day",
      state: "off",
      attributes: {
        friendly_name: "Cleaning Day",
        icon: "mdi:broom",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_boolean.guest_mode": {
      entity_id: "input_boolean.guest_mode",
      state: "off",
      attributes: {
        friendly_name: "Guest Mode",
        icon: "mdi:account-multiple-minus",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          icon: "if (state === 'on') return 'mdi:account-group'; else if (state === 'off') return 'mdi:account-multiple-minus';\n",
          icon_color: "if (state === 'on') return 'rgb(56, 150, 56)'; else if (state === 'off') return 'rgb(249, 251, 255)';\n"
        },
        icon_color: "rgb(249, 251, 255)"
      }
    },
    "counter.litterbox_downstairs_visits": {
      entity_id: "counter.litterbox_downstairs_visits",
      state: "3",
      attributes: {
        initial: 0,
        step: 1,
        friendly_name: "Downstairs Litterbox Visits",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:emoticon-poop"
      }
    },
    "counter.litterbox_upstairs_visits": {
      entity_id: "counter.litterbox_upstairs_visits",
      state: "1",
      attributes: {
        initial: 0,
        step: 1,
        friendly_name: "Upstairs Litterbox Visits",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:emoticon-poop"
      }
    },
    "scene.movie_time": {
      entity_id: "scene.movie_time",
      state: "scening",
      attributes: {
        entity_id: ["light.living_room_spotlights_level", "light.passage_ceiling_spotlights_level", "light.kitchen_ceiling_spotlights_level", "light.dining_area_ceiling_light_level", "light.floorlamp_reading_light", "light.floorlamp_uplight", "light.isa_ceiling_light", "light.living_room_ceiling_light_level", "light.stairs_lights", "light.upstairs_hallway_ceiling_light_level"],
        friendly_name: "Movie Time",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "scene.morning_lights": {
      entity_id: "scene.morning_lights",
      state: "scening",
      attributes: {
        entity_id: ["light.living_room_ceiling_light_level", "light.kitchen_ceiling_spotlights_level", "light.passage_ceiling_spotlights_level", "light.upstairs_hallway_ceiling_light_level", "light.floorlamp_uplight", "light.stairs_lights"],
        friendly_name: "Morning Lights",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_select.dryer_status": {
      entity_id: "input_select.dryer_status",
      state: "Idle",
      attributes: {
        options: ["Idle", "Running", "Clean"],
        friendly_name: "Dryer Status",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_select.roomba_mode": {
      entity_id: "input_select.roomba_mode",
      state: "Vacuuming",
      attributes: {
        options: ["Waiting", "Vacuum Now", "Vacuuming", "Has Vacuumed", "Dock", "Not Today"],
        friendly_name: "Roomba",
        icon: "mdi:robot-vacuum",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "input_select.washing_machine_status": {
      entity_id: "input_select.washing_machine_status",
      state: "Running",
      attributes: {
        options: ["Idle", "Running", "Clean"],
        friendly_name: "Washing Machine Status",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:washing-machine"
      }
    },
    "light.upstairs_lights": {
      entity_id: "light.upstairs_lights",
      state: "on",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        brightness: 63,
        friendly_name: "Upstairs lights",
        supported_features: 63,
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "light.walk_in_closet_lights": {
      entity_id: "light.walk_in_closet_lights",
      state: "unavailable",
      attributes: {
        friendly_name: "Walk in closet lights",
        supported_features: 41,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:wall-sconce"
      }
    },
    "light.outdoor_lights": {
      entity_id: "light.outdoor_lights",
      state: "on",
      attributes: {
        brightness: 254,
        friendly_name: "Outdoor lights",
        supported_features: 41,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:wall-sconce"
      }
    },
    "light.downstairs_lights": {
      entity_id: "light.downstairs_lights",
      state: "on",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        brightness: 128,
        color_temp: 366,
        effect_list: ["colorloop"],
        friendly_name: "Downstairs lights",
        supported_features: 63,
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "light.outdoor_yard_light_net": {
      entity_id: "light.outdoor_yard_light_net",
      state: "off",
      attributes: {
        friendly_name: "Outdoor yard light net",
        assumed_state: true,
        supported_features: 1,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lightbulb"
      }
    },
    "light.outdoor_hanging_lights": {
      entity_id: "light.outdoor_hanging_lights",
      state: "off",
      attributes: {
        friendly_name: "Outdoor hanging lights",
        assumed_state: true,
        supported_features: 1,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lightbulb"
      }
    },
    "light.outdoor_front_hanging_lights": {
      entity_id: "light.outdoor_front_hanging_lights",
      state: "off",
      attributes: {
        friendly_name: "Outdoor front hanging lights",
        assumed_state: true,
        supported_features: 1,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lightbulb"
      }
    },
    "binary_sensor.stefans_room_motion": {
      entity_id: "binary_sensor.stefans_room_motion",
      state: "off",
      attributes: {
        battery_level: 100,
        on: true,
        friendly_name: "Stefans Room Motion",
        device_class: "motion",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.temperature_stefan": {
      entity_id: "sensor.temperature_stefan",
      state: "26.2",
      attributes: {
        battery_level: 95,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Stefans Room",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [40, 70]
      }
    },
    "sensor.temperature_downstairs_bathroom": {
      entity_id: "sensor.temperature_downstairs_bathroom",
      state: "23.1",
      attributes: {
        battery_level: 85,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Downstairs Bathroom",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [40, 70]
      }
    },
    "sensor.temperature_bedroom": {
      entity_id: "sensor.temperature_bedroom",
      state: "22.7",
      attributes: {
        battery_level: 78,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Bedroom",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.temperature_storage": {
      entity_id: "sensor.temperature_storage",
      state: "-3.8",
      attributes: {
        battery_level: 75,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Storage",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [0, 0]
      }
    },
    "sensor.refrigerator": {
      entity_id: "sensor.refrigerator",
      state: "6.1",
      attributes: {
        battery_level: 78,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Refrigerator",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.temperature_passage": {
      entity_id: "sensor.temperature_passage",
      state: "23.7",
      attributes: {
        battery_level: 85,
        on: true,
        unit_of_measurement: "\xB0C",
        friendly_name: "Passage",
        icon: "mdi:thermometer",
        device_class: "temperature",
        custom_ui_state_card: "state-card-custom-ui",
        templates: {
          hs_color: "if (state < 23) return [0, 0]; else if (state > 23) return [40, 70]; else if (state > 25) return [0, 85];"
        },
        hs_color: [40, 70]
      }
    },
    "light.bedside_lamp": {
      entity_id: "light.bedside_lamp",
      state: "off",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        is_deconz_group: false,
        friendly_name: "Bedside Lamp",
        supported_features: 63,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lamp"
      }
    },
    "light.floorlamp_reading_light": {
      entity_id: "light.floorlamp_reading_light",
      state: "off",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        is_deconz_group: false,
        friendly_name: "Floorlamp Reading Light",
        supported_features: 43,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lamp"
      }
    },
    "light.hallway_window_light": {
      entity_id: "light.hallway_window_light",
      state: "on",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        brightness: 128,
        color_temp: 366,
        effect_list: ["colorloop"],
        is_deconz_group: false,
        friendly_name: "Hallway window light",
        supported_features: 63,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lamp"
      }
    },
    "light.isa_ceiling_light": {
      entity_id: "light.isa_ceiling_light",
      state: "on",
      attributes: {
        brightness: 77,
        is_deconz_group: false,
        friendly_name: "Isa Ceiling Light",
        supported_features: 41,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:ceiling-light"
      }
    },
    "light.floorlamp_uplight": {
      entity_id: "light.floorlamp_uplight",
      state: "on",
      attributes: {
        min_mireds: 153,
        max_mireds: 500,
        brightness: 150,
        color_temp: 366,
        effect_list: ["colorloop"],
        is_deconz_group: false,
        friendly_name: "Floorlamp",
        supported_features: 63,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:floor-lamp"
      }
    },
    "light.bedroom_ceiling_light": {
      entity_id: "light.bedroom_ceiling_light",
      state: "unavailable",
      attributes: {
        friendly_name: "Bedroom Ceiling Light",
        supported_features: 41,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:ceiling-light"
      }
    },
    "light.gateway_light_34ce008bfc4b": {
      entity_id: "light.gateway_light_34ce008bfc4b",
      state: "off",
      attributes: {
        friendly_name: "Nightlight",
        supported_features: 17,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:lamp"
      }
    },
    "alarm_control_panel.house": {
      entity_id: "alarm_control_panel.house",
      state: "disarmed",
      attributes: {
        allsensors: ["binary_sensor.bedroom_door", "binary_sensor.balcony_door", "binary_sensor.yard_door", "binary_sensor.dining_area_window_sensor_sensor", "binary_sensor.stefans_room_motion", "binary_sensor.window_bedroom", "binary_sensor.passage_pir_sensor", "binary_sensor.upstairs_hallway_pir_sensor", "binary_sensor.front_door_sensor", "binary_sensor.back_door"],
        arm_state: "disarmed",
        bwalarm_version: "1.1.3",
        changed_by: "",
        changedbyuser: null,
        code_format: ".+",
        code_to_arm: false,
        custom_ui_state_card: "state-card-custom-ui",
        delayed: [],
        enable_log: true,
        enable_perimeter_mode: true,
        enable_persistence: true,
        friendly_name: "House",
        ignored: ["binary_sensor.bedroom_door", "binary_sensor.balcony_door", "binary_sensor.yard_door", "binary_sensor.dining_area_window_sensor_sensor", "binary_sensor.stefans_room_motion", "binary_sensor.window_bedroom", "binary_sensor.passage_pir_sensor", "binary_sensor.upstairs_hallway_pir_sensor", "binary_sensor.front_door_sensor", "binary_sensor.back_door"],
        immediate: [],
        log_size: 10,
        logs: [[1547622758.6694887, "HA", 4, null], [1547640268.7761662, "HA", 0, null], [1547709066.5300405, "HA", 4, null], [1547740592.7153869, "HA", 0, null], [1547741192.2297237, "HA", 4, null], [1547741215.1390853, "HA", 0, null], [1547794463.5533135, "HA", 4, null], [1547832780.5026634, "HA", 0, null], [1547984318.5977461, "HA", 4, null], [1547994826.273574, "HA", 0, null]],
        mqtt: {
          command_topic: "home/alarm/set",
          enable_mqtt: false,
          override_code: false,
          payload_arm_away: "ARM_AWAY",
          payload_arm_home: "ARM_HOME",
          payload_arm_night: "ARM_NIGHT",
          payload_disarm: "DISARM",
          pending_on_warning: false,
          qos: 0,
          state_topic: "home/alarm"
        },
        panel: {
          camera_update_interval: "",
          cameras: ["camera.back_door", "camera.front_door", "camera.upstairs"],
          enable_camera_panel: "False",
          enable_clock: "True",
          enable_floorplan_panel: "False",
          enable_sensors_panel: "False",
          enable_serif_font: "False",
          enable_weather: "True",
          hide_passcode: "True",
          hide_sidebar: "True",
          panel_title: "",
          round_buttons: "True",
          shadow_effect: "False"
        },
        panel_locked: false,
        panic_mode: "deactivated",
        passcode_attempts: 3,
        passcode_attempts_timeout: 900,
        py_version: [3, 6, 6, "final", 0],
        states: {
          armed_away: {
            delayed: ["binary_sensor.yard_door", "binary_sensor.front_door_sensor", "binary_sensor.passage_pir_sensor"],
            immediate: ["binary_sensor.upstairs_hallway_pir_sensor", "binary_sensor.balcony_door", "binary_sensor.back_door", "binary_sensor.bedroom_door", "binary_sensor.stefans_room_motion", "binary_sensor.dining_area_window_sensor_sensor", "binary_sensor.passage_pir_sensor"],
            override: ["binary_sensor.window_bedroom"],
            pending_time: 25,
            trigger_time: 300,
            warning_time: 60
          },
          armed_home: {
            delayed: [],
            immediate: ["binary_sensor.front_door_sensor", "binary_sensor.balcony_door", "binary_sensor.yard_door"],
            override: [],
            pending_time: 10,
            trigger_time: 300,
            warning_time: 0
          },
          armed_perimeter: {
            delayed: [],
            immediate: ["binary_sensor.back_door", "binary_sensor.balcony_door", "binary_sensor.front_door_sensor", "binary_sensor.yard_door", "binary_sensor.window_bedroom", "binary_sensor.dining_area_window_sensor_sensor"],
            override: [],
            pending_time: 0,
            trigger_time: 600,
            warning_time: 0
          }
        },
        supported_statuses_off: ["off", "false", "locked", "closed", "undetected", "no_motion", "standby"],
        supported_statuses_on: ["on", "true", "unlocked", "open", "detected", "motion", "motion_detected", "motion detected"],
        templates: {
          hs_color: "if (state === 'disarmed') return [0, 0]; else if (state === 'triggered') return [0, 85]; else return [40, 70];",
          icon_color: "if (state === 'disarmed') return [0, 0]; else if (state === 'triggered') return [0, 85]; else return [40, 70];"
        },
        updateUI: false,
        users: [{
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "ded82243c49f41adbdb0ea11cca1b7b1",
          name: "Hass.io",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "abc561cfafcf410a86ca25a0d9460533",
          name: "Hass.io",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "24dad8f9c2d24d5b8bffaa06cbba55fc",
          name: "Isa",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "39426ba732604d71a5176c1e695710c9",
          name: "Stefan",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "52ff3b9ce9a14a9bb3c33212bcffe936",
          name: "homeassistant",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "439178e213a348fabf87f06da546fb1d",
          name: "dashboard",
          picture: "/local/images/ha.png"
        }, {
          code: "****",
          disable_animations: false,
          enabled: false,
          id: "650d785326e04e8aba8f449f469c7d17",
          name: "Isabella",
          picture: "/local/images/ha.png"
        }],
        hs_color: [0, 0],
        icon_color: [0, 0]
      }
    },
    "device_tracker.stefan_iphone_7": {
      entity_id: "device_tracker.stefan_iphone_7",
      state: "home",
      attributes: {
        source_type: "gps",
        gps_accuracy: 20,
        battery: 64,
        vertical_accuracy: 2.2522367885123806,
        timestamp: "2019-01-20T18:37:02.072+0100",
        altitude: 29.493962323560066,
        speed: -1,
        course: -1,
        trigger: "Background Fetch",
        friendly_name: "stefan iphone 7",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "device_tracker.stefan_iphone_7_wifi": {
      entity_id: "device_tracker.stefan_iphone_7_wifi",
      state: "home",
      attributes: {
        source_type: "router",
        gps_accuracy: 0,
        scanner: "NmapDeviceScanner",
        ip: "192.168.1.36",
        friendly_name: "Stefan iPhone wifi",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "device_tracker.isabellas_iphone_x": {
      entity_id: "device_tracker.isabellas_iphone_x",
      state: "home",
      attributes: {
        source_type: "gps",
        gps_accuracy: 65,
        battery: 83,
        speed: -1,
        course: -1,
        vertical_accuracy: 10,
        altitude: 28.99994659423828,
        timestamp: "2019-01-20T18:20:35.164+0100",
        trigger: "Background Fetch",
        friendly_name: "isabellas iphone x",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "device_tracker.isabellas_iphone_x_wifi": {
      entity_id: "device_tracker.isabellas_iphone_x_wifi",
      state: "home",
      attributes: {
        source_type: "router",
        gps_accuracy: 0,
        scanner: "NmapDeviceScanner",
        ip: "192.168.1.91",
        friendly_name: "Isabellas iPhone X Wifi",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:cellphone-iphone"
      }
    },
    "proximity.home_isa": {
      entity_id: "proximity.home_isa",
      state: "0",
      attributes: {
        dir_of_travel: "stationary",
        nearest: "isabellas iphone x",
        unit_of_measurement: "km",
        friendly_name: "home_isa",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "proximity.home_stefan": {
      entity_id: "proximity.home_stefan",
      state: "0",
      attributes: {
        dir_of_travel: "stationary",
        nearest: "stefan iphone 7",
        unit_of_measurement: "km",
        friendly_name: "home_stefan",
        custom_ui_state_card: "state-card-custom-ui"
      }
    },
    "sensor.presence_isa": {
      entity_id: "sensor.presence_isa",
      state: "Home",
      attributes: {
        battery: 83,
        friendly_name: "Isa",
        source_type: "gps",
        speed: -1
      }
    },
    "sensor.presence_stefan": {
      entity_id: "sensor.presence_stefan",
      state: "Home",
      attributes: {
        battery: 64,
        friendly_name: "Stefan",
        source_type: "gps",
        gps_accuracy: 20,
        speed: -1
      }
    },
    "light.living_room_ceiling_light_level": {
      entity_id: "light.living_room_ceiling_light_level",
      state: "on",
      attributes: {
        brightness: 59,
        node_id: 9,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594193739777",
        power_consumption: 2.7,
        friendly_name: "Living Room Light",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:ceiling-light"
      }
    },
    "sensor.mailbox": {
      entity_id: "sensor.mailbox",
      state: "Empty",
      attributes: {
        icon: "mdi:dots-horizontal",
        latest_emptied: "Unknown",
        latest_mail: "Unknown"
      }
    },
    "light.upstairs_hallway_ceiling_light_level": {
      entity_id: "light.upstairs_hallway_ceiling_light_level",
      state: "on",
      attributes: {
        brightness: 49,
        node_id: 10,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594210516993",
        power_consumption: 2.2,
        friendly_name: "Upstairs Hallway Light",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:ceiling-light"
      }
    },
    "light.dining_area_ceiling_light_level": {
      entity_id: "light.dining_area_ceiling_light_level",
      state: "off",
      attributes: {
        node_id: 11,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594227294209",
        power_consumption: 0,
        friendly_name: "Dining Room Light",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:ceiling-light"
      }
    },
    "light.living_room_spotlights_level": {
      entity_id: "light.living_room_spotlights_level",
      state: "off",
      attributes: {
        node_id: 12,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594244071425",
        power_consumption: 0,
        friendly_name: "Living room Spotlights",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:track-light"
      }
    },
    "light.passage_ceiling_spotlights_level": {
      entity_id: "light.passage_ceiling_spotlights_level",
      state: "on",
      attributes: {
        brightness: 49,
        node_id: 13,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594260848641",
        power_consumption: 2.5,
        friendly_name: "Passage Lights",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:track-light"
      }
    },
    "sensor.passage_pir_luminance": {
      entity_id: "sensor.passage_pir_luminance",
      state: "3.0",
      attributes: {
        node_id: 18,
        value_index: 3,
        value_instance: 1,
        value_id: "72057594344914994",
        unit_of_measurement: "lux",
        friendly_name: "Passage Lux",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:theme-light-dark"
      }
    },
    "sensor.upstairs_hallway_pir_luminance": {
      entity_id: "sensor.upstairs_hallway_pir_luminance",
      state: "3.0",
      attributes: {
        node_id: 22,
        value_index: 3,
        value_instance: 1,
        value_id: "72057594412023858",
        unit_of_measurement: "lux",
        friendly_name: "Upstairs Hallway Lux",
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:theme-light-dark"
      }
    },
    "light.kitchen_ceiling_spotlights_level": {
      entity_id: "light.kitchen_ceiling_spotlights_level",
      state: "on",
      attributes: {
        brightness: 255,
        node_id: 23,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594428620801",
        power_consumption: 37.4,
        friendly_name: "Kitchen Lights",
        supported_features: 33,
        custom_ui_state_card: "state-card-custom-ui",
        icon: "mdi:track-light"
      }
    }
  });
};

/***/ }),

/***/ "./demo/src/configs/teachingbirds/index.ts":
/*!*************************************************!*\
  !*** ./demo/src/configs/teachingbirds/index.ts ***!
  \*************************************************/
/*! exports provided: demoTeachingbirds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoTeachingbirds", function() { return demoTeachingbirds; });
/* harmony import */ var _lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lovelace */ "./demo/src/configs/teachingbirds/lovelace.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./demo/src/configs/teachingbirds/entities.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./demo/src/configs/teachingbirds/theme.ts");



var demoTeachingbirds = {
  authorName: "Isabella Gross Alström",
  authorUrl: "https://github.com/isabellaalstrom/",
  name: "Isa's mobile friendly LL",
  lovelace: _lovelace__WEBPACK_IMPORTED_MODULE_0__["demoLovelaceTeachingbirds"],
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["demoEntitiesTeachingbirds"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["demoThemeTeachingbirds"]
};

/***/ }),

/***/ "./demo/src/configs/teachingbirds/lovelace.ts":
/*!****************************************************!*\
  !*** ./demo/src/configs/teachingbirds/lovelace.ts ***!
  \****************************************************/
/*! exports provided: demoLovelaceTeachingbirds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoLovelaceTeachingbirds", function() { return demoLovelaceTeachingbirds; });
var demoLovelaceTeachingbirds = function demoLovelaceTeachingbirds() {
  return {
    title: "Home",
    views: [{
      cards: [{
        type: "custom:ha-demo-card"
      }, {
        cards: [{
          cards: [{
            image: "/assets/teachingbirds/isa_square.jpg",
            type: "picture-entity",
            show_name: false,
            tap_action: {
              action: "more-info"
            },
            entity: "sensor.presence_isa"
          }, {
            image: "/assets/teachingbirds/Stefan_square.jpg",
            type: "picture-entity",
            show_name: false,
            tap_action: {
              action: "more-info"
            },
            entity: "sensor.presence_stefan"
          }, {
            image: "/assets/teachingbirds/background_square.png",
            elements: [{
              state_image: {
                on: "/assets/teachingbirds/radiator_on.jpg",
                off: "/assets/teachingbirds/radiator_off.jpg"
              },
              type: "image",
              style: {
                width: "100%",
                top: "50%",
                left: "50%"
              },
              tap_action: {
                action: "more-info"
              },
              entity: "switch.stefan_radiator_3"
            }, {
              style: {
                top: "90%",
                left: "50%"
              },
              type: "state-label",
              entity: "sensor.temperature_stefan"
            }],
            type: "picture-elements"
          }, {
            image: "/assets/teachingbirds/background_square.png",
            elements: [{
              style: {
                "--iron-icon-width": "100px",
                "--iron-icon-height": "100px",
                top: "50%",
                left: "50%"
              },
              type: "icon",
              tap_action: {
                action: "navigate",
                navigation_path: "/lovelace/home_info"
              },
              icon: "mdi:car"
            }],
            type: "picture-elements"
          }],
          type: "horizontal-stack"
        }, {
          cards: [{
            show_name: false,
            type: "picture-entity",
            name: "Alarm",
            image: "/assets/teachingbirds/House_square.jpg",
            entity: "alarm_control_panel.house"
          }, {
            name: "Roomba",
            image: "/assets/teachingbirds/roomba_square.jpg",
            show_name: false,
            type: "picture-entity",
            state_image: {
              "Not Today": "/assets/teachingbirds/roomba_bw_square.jpg"
            },
            entity: "input_select.roomba_mode"
          }, {
            show_name: false,
            type: "picture-entity",
            state_image: {
              Mail: "/assets/teachingbirds/mailbox_square.jpg",
              "Package and mail": "/assets/teachingbirds/mailbox_square.jpg",
              Empty: "/assets/teachingbirds/mailbox_bw_square.jpg",
              Package: "/assets/teachingbirds/mailbox_square.jpg"
            },
            entity: "sensor.mailbox"
          }, {
            show_name: false,
            state_image: {
              "Put out": "/assets/teachingbirds/trash_square.jpg",
              "Take in": "/assets/teachingbirds/trash_square.jpg"
            },
            type: "picture-entity",
            image: "/assets/teachingbirds/trash_bear_bw_square.jpg",
            entity: "sensor.trash_status"
          }],
          type: "horizontal-stack"
        }, {
          cards: [{
            state_image: {
              Idle: "/assets/teachingbirds/washer_square.jpg",
              Running: "/assets/teachingbirds/laundry_running_square.jpg",
              Clean: "/assets/teachingbirds/laundry_clean_2_square.jpg"
            },
            entity: "input_select.washing_machine_status",
            type: "picture-entity",
            show_name: false,
            name: "Washer"
          }, {
            state_image: {
              Idle: "/assets/teachingbirds/dryer_square.jpg",
              Running: "/assets/teachingbirds/clothes_drying_square.jpg",
              Clean: "/assets/teachingbirds/folded_clothes_square.jpg"
            },
            entity: "input_select.dryer_status",
            type: "picture-entity",
            show_name: false,
            name: "Dryer"
          }, {
            image: "/assets/teachingbirds/guests_square.jpg",
            type: "picture-entity",
            show_name: false,
            tap_action: {
              action: "toggle"
            },
            entity: "input_boolean.guest_mode"
          }, {
            image: "/assets/teachingbirds/cleaning_square.jpg",
            type: "picture-entity",
            show_name: false,
            tap_action: {
              action: "toggle"
            },
            entity: "input_boolean.cleaning_day"
          }],
          type: "horizontal-stack"
        }],
        type: "vertical-stack"
      }, {
        type: "vertical-stack",
        cards: [{
          cards: [{
            graph: "line",
            type: "sensor",
            entity: "sensor.temperature_bedroom"
          }, {
            graph: "line",
            type: "sensor",
            name: "S's room",
            entity: "sensor.temperature_stefan"
          }],
          type: "horizontal-stack"
        }, {
          cards: [{
            graph: "line",
            type: "sensor",
            entity: "sensor.temperature_passage"
          }, {
            graph: "line",
            type: "sensor",
            name: "Laundry",
            entity: "sensor.temperature_downstairs_bathroom"
          }],
          type: "horizontal-stack"
        }]
      }, {
        entities: ["light.outdoor_lights", {
          name: "Yard net",
          entity: "light.outdoor_yard_light_net"
        }, "light.bedroom_ceiling_light", "light.bedside_lamp", "light.dining_area_ceiling_light_level", "light.kitchen_ceiling_spotlights_level", "light.floorlamp_reading_light", "light.floorlamp_uplight", "light.hallway_window_light", "light.isa_ceiling_light", "light.living_room_ceiling_light_level", "light.living_room_spotlights_level", "light.passage_ceiling_spotlights_level", "light.stairs_lights_lights", "light.walk_in_closet_lights", "light.upstairs_hallway_ceiling_light_level", "light.gateway_light_34ce008bfc4b"],
        show_empty: false,
        type: "entity-filter",
        card: {
          type: "glance",
          show_state: false
        },
        state_filter: ["on"]
      }, {
        type: "shopping-list"
      }, {
        entities: [{
          entity: "switch.livingroom_tv",
          name: "Tv",
          icon: "mdi:television-classic"
        }, // {
        //   hide_power: true,
        //   group: true,
        //   icon: "mdi:television-classic",
        //   artwork_border: true,
        //   type: "custom:mini-media-player",
        //   entity: "media_player.livingroom_tv",
        // },
        {
          entity: "switch.livingroom_movie_system",
          name: "Movie system",
          icon: "mdi:movie"
        } // {
        //   hide_power: true,
        //   group: true,
        //   name: "Movie system",
        //   icon: "mdi:movie",
        //   artwork_border: true,
        //   type: "custom:mini-media-player",
        //   entity: "media_player.livingroom_movie_system",
        // },
        // {
        //   hide_power: true,
        //   type: "custom:mini-media-player",
        //   entity: "media_player.shield",
        //   group: true,
        //   icon: "mdi:cast",
        // },
        // {
        //   group: true,
        //   icon: "mdi:speaker-wireless",
        //   power_color: true,
        //   artwork_border: true,
        //   type: "custom:mini-media-player",
        //   entity: "media_player.sonos",
        // },
        // {
        //   group: true,
        //   name: "Chromecast Bedroom",
        //   icon: "mdi:cast",
        //   artwork_border: true,
        //   type: "custom:mini-media-player",
        //   entity: "media_player.sovrum",
        // },
        ],
        type: "entities"
      }, {
        image: "/assets/teachingbirds/plants.png",
        elements: [{
          style: {
            top: "7%",
            "--ha-label-badge-font-size": "1em",
            left: "2%",
            transform: "none"
          },
          type: "state-badge",
          entity: "sensor.small_chili_moisture"
        }, {
          style: {
            top: "7%",
            "--ha-label-badge-font-size": "1em",
            left: "17%",
            transform: "none"
          },
          type: "state-badge",
          entity: "sensor.big_chili_moisture"
        }, {
          style: {
            top: "7%",
            "--ha-label-badge-font-size": "1em",
            left: "32%",
            transform: "none"
          },
          type: "state-badge",
          entity: "sensor.herbs_moisture"
        }, {
          style: {
            top: "12%",
            "--ha-label-badge-font-size": "1em",
            left: "92%"
          },
          type: "state-label",
          entity: "sensor.greenhouse_temperature"
        }],
        type: "picture-elements"
      }, {
        // show_name: false,
        // entity: "camera.stockholm_meteogram",
        // type: "picture-entity",
        // show_state: false,
        type: "picture",
        image: "/assets/teachingbirds/meteogram.png"
      }, {
        cards: [{
          type: "gauge",
          severity: {
            green: 0,
            yellow: 2,
            red: 3
          },
          min: 0,
          max: 6,
          title: "Downstairs",
          measurement: "visits",
          entity: "counter.litterbox_downstairs_visits"
        }, {
          type: "gauge",
          severity: {
            green: 0,
            yellow: 2,
            red: 3
          },
          min: 0,
          max: 6,
          title: "Upstairs",
          measurement: "visits",
          entity: "counter.litterbox_upstairs_visits"
        }],
        type: "horizontal-stack"
      }],
      path: "home",
      title: "Home",
      icon: "mdi:information-outline"
    }, {
      cards: [{
        cards: [{
          entity: "script.air_cleaner_quiet",
          type: "entity-button",
          name: "AC bed",
          tap_action: {
            action: "call-service",
            service_data: {
              entity_id: "script.air_cleaner_quiet"
            },
            service: "script.turn_on"
          },
          icon: "mdi:fan-off"
        }, {
          entity: "script.air_cleaner_auto",
          type: "entity-button",
          name: "AC bed",
          tap_action: {
            action: "call-service",
            service_data: {
              entity_id: "script.air_cleaner_auto"
            },
            service: "script.turn_on"
          },
          icon: "mdi:fan"
        }, {
          entity: "script.air_cleaner_turbo",
          type: "entity-button",
          name: "AC bed",
          tap_action: {
            action: "call-service",
            service_data: {
              entity_id: "script.air_cleaner_turbo"
            },
            service: "script.turn_on"
          },
          icon: "mdi:run-fast"
        }, {
          entity: "script.ac_off",
          type: "entity-button",
          name: "AC",
          tap_action: {
            action: "call-service",
            service_data: {
              entity_id: "script.ac_off"
            },
            service: "script.turn_on"
          },
          icon: "mdi:fan-off"
        }, {
          entity: "script.ac_on",
          type: "entity-button",
          name: "AC",
          tap_action: {
            action: "call-service",
            service_data: {
              entity_id: "script.ac_on"
            },
            service: "script.turn_on"
          },
          icon: "mdi:fan"
        }],
        type: "horizontal-stack"
      }, {
        cards: [{
          cards: [{
            graph: "line",
            type: "sensor",
            entity: "sensor.temperature_bedroom"
          }, {
            graph: "line",
            type: "sensor",
            name: "S's room",
            entity: "sensor.temperature_stefan"
          }],
          type: "horizontal-stack"
        }, {
          cards: [{
            graph: "line",
            type: "sensor",
            entity: "sensor.temperature_passage"
          }, {
            graph: "line",
            type: "sensor",
            name: "Bathroom",
            entity: "sensor.temperature_downstairs_bathroom"
          }],
          type: "horizontal-stack"
        }, {
          cards: [{
            graph: "line",
            type: "sensor",
            entity: "sensor.temperature_storage"
          }, {
            graph: "line",
            type: "sensor",
            name: "Refrigerator",
            entity: "sensor.refrigerator"
          }],
          type: "horizontal-stack"
        }],
        type: "vertical-stack"
      }, {
        entities: [{
          name: "Vacation",
          entity: "input_boolean.vacation_mode",
          tap_action: {
            action: "toggle"
          }
        }, {
          entity: "input_boolean.cleaning_day",
          tap_action: {
            action: "toggle"
          }
        }, {
          entity: "input_boolean.guest_mode",
          tap_action: {
            action: "toggle"
          }
        }, {
          name: "Isa Mode",
          tap_action: {
            action: "toggle"
          },
          entity: "input_boolean.isa_mode"
        }],
        show_header_toggle: false,
        type: "glance"
      }, {
        entities: ["sensor.pollen_bjork", "sensor.pollen_gras", "sensor.pollen_grabo"],
        type: "glance"
      }, {
        states: ["arm_home", "arm_away", "arm_night"],
        type: "alarm-panel",
        entity: "alarm_control_panel.house"
      }, {
        entities: [{
          entity: "sensor.front_door",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.back_door",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.yard_door",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.balcony_door",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.dining_area_window",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.bedroom_window",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.passage_movement",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.upstairs_hallway_movement",
          secondary_info: "last-changed"
        }, {
          entity: "binary_sensor.stefans_room_motion",
          secondary_info: "last-changed"
        }, {
          entity: "sensor.ring_front_door_last_motion",
          secondary_info: "last-changed"
        }],
        type: "entities"
      }, {
        cards: [{
          hours_to_show: 48,
          entities: ["sensor.temperature_bedroom", "sensor.temperature_passage", "sensor.temperature_downstairs_bathroom", "sensor.temperature_stefan"],
          type: "history-graph",
          title: "Temperatures 48h"
        }, {
          hours_to_show: 168,
          entities: ["sensor.temperature_bedroom", "sensor.temperature_passage", "sensor.temperature_downstairs_bathroom", "sensor.temperature_stefan"],
          type: "history-graph",
          title: "Temperatures 7 Days"
        }, {
          hours_to_show: 24,
          entities: ["sensor.passage_pir_luminance", "sensor.upstairs_hallway_pir_luminance"],
          type: "history-graph",
          title: "Light 24 Hours"
        }],
        type: "vertical-stack"
      }],
      title: "Home info",
      path: "home_info",
      icon: "mdi:home-heart"
    }, {
      cards: [{
        cards: [{
          cards: [{
            entity: "scene.morning_lights",
            tap_action: {
              action: "call-service",
              service: "script.goodnight"
            },
            type: "entity-button",
            icon: "mdi:weather-night"
          }, {
            entity: "scene.morning_lights",
            tap_action: {
              action: "call-service",
              service_data: {
                entity_id: "scene.morning_lights"
              },
              service: "scene.turn_on"
            },
            type: "entity-button",
            icon: "mdi:coffee-outline"
          }, {
            entity: "scene.movie_time",
            tap_action: {
              action: "call-service",
              service_data: {
                entity_id: "scene.movie_time"
              },
              service: "scene.turn_on"
            },
            type: "entity-button",
            icon: "mdi:television-classic"
          }],
          type: "horizontal-stack"
        }, {
          entities: [{
            type: "section",
            label: "Front"
          }, // {
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Wall",
          //   entity: "light.outdoor_front_light",
          // },
          {
            name: "Chain lights",
            entity: "light.outdoor_front_hanging_lights"
          }, {
            type: "section",
            label: "Yard"
          }, // {
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Wall",
          //   entity: "light.outdoor_yard_light",
          // },
          {
            name: "Chain lights",
            entity: "light.outdoor_hanging_lights"
          }, {
            name: "Light net",
            entity: "light.outdoor_yard_light_net"
          }],
          show_header_toggle: false,
          type: "entities",
          title: "Outdoor"
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          cards: [{
            entity: "light.downstairs_lights",
            tap_action: {
              action: "call-service",
              service_data: {
                entity_id: "light.downstairs_lights"
              },
              service: "light.toggle"
            },
            type: "entity-button",
            icon: "mdi:page-layout-footer"
          }, {
            entity: "light.upstairs_lights",
            tap_action: {
              action: "call-service",
              service_data: {
                entity_id: "light.upstairs_lights"
              },
              service: "light.toggle"
            },
            type: "entity-button",
            icon: "mdi:page-layout-header"
          }],
          type: "horizontal-stack"
        }, {
          entities: [{
            name: "Kitchen",
            entity: "light.kitchen_ceiling_spotlights_level"
          } // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Dining area",
          //   entity: "light.dining_area_ceiling_light_level",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Floorlamp",
          //   entity: "light.floorlamp_uplight",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Floorlamp reading",
          //   entity: "light.floorlamp_reading_light",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Livingroom",
          //   entity: "light.living_room_ceiling_light_level",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Livingroom spots",
          //   entity: "light.living_room_spotlights_level",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Passage",
          //   entity: "light.passage_ceiling_spotlights_level",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Hallway window",
          //   entity: "light.hallway_window_light",
          // },
          // {
          //   hide_when_off: true,
          //   toggle: true,
          //   type: "custom:slider-entity-row",
          //   name: "Stairs",
          //   entity: "light.stairs_lights",
          // },
          ],
          show_header_toggle: false,
          type: "entities",
          title: "Downstairs"
        }],
        type: "vertical-stack"
      } // {
      //   cards: [
      //     {
      //       entities: [
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Bedside",
      //           entity: "light.bedside_lamp",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Bedroom",
      //           entity: "light.bedroom_ceiling_light",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Isa",
      //           entity: "light.isa_ceiling_light",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Upstairs hallway",
      //           entity: "light.upstairs_hallway_ceiling_light_level",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Nightlight",
      //           entity: "light.gateway_light_34ce008bfc4b",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: true,
      //           type: "custom:slider-entity-row",
      //           name: "Walk in closet",
      //           entity: "light.walk_in_closet_lights",
      //         },
      //         {
      //           hide_when_off: true,
      //           toggle: false,
      //           type: "custom:slider-entity-row",
      //           name: "Stefan",
      //           entity: "light.stefan_lightstrip",
      //         },
      //       ],
      //       show_header_toggle: false,
      //       type: "entities",
      //       title: "Upstairs",
      //     },
      //   ],
      //   type: "vertical-stack",
      // },
      ],
      path: "lights",
      title: "Lights",
      icon: "mdi:lightbulb-on"
    }, {
      cards: [{
        cards: [{
          cards: [{
            type: "gauge",
            entity: "sensor.processor_use"
          }, {
            type: "gauge",
            entity: "sensor.disk_use_percent_"
          }, {
            type: "gauge",
            entity: "sensor.memory_use_percent"
          }],
          type: "horizontal-stack"
        }, {
          entities: ["sensor.last_boot"],
          type: "entities"
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          entities: ["sensor.system_printer", "sensor.system_nas", "sensor.system_ipad", {
            name: "Sannce",
            entity: "sensor.system_ip_camera"
          }, {
            entity: "sensor.system_dafang",
            name: "Dafang",
            icon: "mdi:webcam"
          }, {
            name: "IR Hallway",
            entity: "sensor.system_ir_blaster"
          }, {
            name: "IR Bedroom",
            entity: "sensor.system_ir_blaster_bedroom"
          }, {
            name: "IR Livingroom",
            entity: "sensor.system_ir_blaster_living_room"
          }, "sensor.system_milight_hub", {
            name: "Xiaomi",
            entity: "sensor.system_xiaomi_gateway"
          }, "sensor.system_ring_doorbell", "sensor.system_ring_chime_pro", "sensor.system_ring_chime"],
          type: "glance",
          columns: 5,
          show_state: false
        }, {
          entities: [{
            name: "Isa",
            entity: "sensor.system_isa_computer"
          }, {
            name: "Isa work laptop",
            entity: "sensor.system_isa_dell_xps"
          }, {
            name: "Isa laptop",
            entity: "sensor.system_isa_laptop"
          }, {
            name: "Stefan",
            entity: "sensor.system_stefan_computer"
          }, {
            name: "Stefan work laptop",
            entity: "sensor.system_stefan_laptop"
          }],
          type: "glance",
          columns: 3,
          show_state: false
        }, {
          entities: [{
            name: "TV",
            entity: "sensor.system_samsung65"
          }, {
            name: "Movie System",
            entity: "sensor.system_movie_system"
          }, {
            name: "Shield",
            entity: "sensor.system_shield"
          }, {
            entity: "sensor.system_sonos",
            name: "Sonos",
            icon: "mdi:speaker-wireless"
          }, {
            name: "Bed TV",
            entity: "sensor.system_samsung49"
          }, {
            name: "Bed CC",
            entity: "sensor.system_chromecast_bedroom"
          }],
          type: "glance",
          columns: 3,
          show_state: false
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          entities: [{
            name: "Asus",
            entity: "sensor.system_asus_router"
          }, {
            name: "Netgear",
            entity: "sensor.system_netgear_router"
          }, {
            name: "Ping",
            entity: "sensor.speedtest_ping"
          }, {
            name: "Download",
            entity: "sensor.speedtest_download"
          }, {
            name: "Upload",
            entity: "sensor.speedtest_upload"
          }],
          type: "glance"
        }, {
          entities: ["sensor.speedtest_download", "sensor.speedtest_ping", "sensor.speedtest_upload"],
          type: "history-graph"
        }, {
          entities: [{
            name: "Hass RPi",
            entity: "sensor.system_hass_rpi"
          }, {
            name: "Dashboard RPi",
            entity: "sensor.system_magic_mirror_rpi"
          }, {
            name: '7" Dashboard RPi',
            entity: "sensor.system_dashboard_rpi"
          }, {
            name: "RPi Zero",
            entity: "sensor.system_rpi_zero"
          }],
          type: "glance",
          columns: 4
        }],
        type: "vertical-stack"
      }, {
        cards: [{
          entities: [{
            entity: "sensor.presence_isa",
            icon: "mdi:map-marker-circle",
            name: "Isa presence",
            secondary_info: "last-changed"
          }, {
            entity: "device_tracker.isabellas_iphone_x",
            secondary_info: "last-changed",
            name: "Isa ios",
            icon: "mdi:apple"
          }, {
            entity: "device_tracker.isabellas_iphone_x_wifi",
            secondary_info: "last-changed",
            name: "Isa Wifi",
            icon: "mdi:wifi"
          }, {
            entity: "sensor.isabellas_iphone_x_bt",
            secondary_info: "last-changed",
            name: "Isa bt",
            icon: "mdi:bluetooth"
          }, {
            name: "Proximity to home",
            entity: "proximity.home_isa"
          }],
          type: "entities"
        }, {
          entities: [{
            entity: "sensor.presence_stefan",
            secondary_info: "last-changed",
            name: "Stefan presence",
            icon: "mdi:map-marker-circle"
          }, {
            entity: "device_tracker.stefan_iphone_7",
            secondary_info: "last-changed",
            name: "Stefan ios",
            icon: "mdi:apple"
          }, {
            entity: "device_tracker.stefan_iphone_7_wifi",
            secondary_info: "last-changed",
            name: "Stefan Wifi",
            icon: "mdi:wifi"
          }, {
            entity: "sensor.stefan_iphone_7_bt",
            secondary_info: "last-changed",
            name: "Stefan bt",
            icon: "mdi:bluetooth"
          }, {
            name: "Proximity to home",
            entity: "proximity.home_stefan"
          }],
          type: "entities"
        }, {
          entities: [{
            entity: "sensor.unlocked_by",
            name: "Front door last unlocked by",
            secondary_info: "last-changed"
          }, {
            entity: "sensor.monitor",
            name: "Monitor status",
            secondary_info: "last-changed"
          }],
          type: "entities"
        }],
        type: "vertical-stack"
      }],
      path: "info",
      title: "Info",
      icon: "mdi:lan"
    }]
  };
};

/***/ }),

/***/ "./demo/src/configs/teachingbirds/theme.ts":
/*!*************************************************!*\
  !*** ./demo/src/configs/teachingbirds/theme.ts ***!
  \*************************************************/
/*! exports provided: demoThemeTeachingbirds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoThemeTeachingbirds", function() { return demoThemeTeachingbirds; });
var demoThemeTeachingbirds = function demoThemeTeachingbirds() {
  return {
    "paper-card-header-color": "var(--paper-item-icon-color)",
    "paper-slider-pin-color": "var(--primary-color)",
    "paper-listbox-background-color": "#202020",
    "paper-grey-50": "var(--primary-text-color)",
    "paper-item-icon-color": "#d3d3d3",
    "divider-color": "rgba(255, 255, 255, 0.12)",
    "primary-color": "#389638",
    "light-primary-color": "#6f956f",
    "label-badge-red": "var(--primary-color)",
    "paper-slider-secondary-color": "var(--light-primary-color)",
    "paper-slider-knob-color": "var(--primary-color)",
    "paper-listbox-color": "#FFFFFF",
    "paper-toggle-button-checked-bar-color": "var(--light-primary-color)",
    "switch-unchecked-track-color": "var(--primary-text-color)",
    "paper-card-background-color": "#4e4e4e",
    "label-badge-text-color": "var(--text-primary-color)",
    "primary-background-color": "#303030",
    "sidebar-icon-color": "var(--paper-item-icon-color)",
    "paper-slider-active-color": "#d8bf50",
    "secondary-background-color": "#2b2b2b",
    "paper-slider-knob-start-color": "var(--primary-color)",
    "paper-item-icon-active-color": "#d8bf50",
    "switch-checked-color": "var(--primary-color)",
    "secondary-text-color": "#389638",
    "disabled-text-color": "#545454",
    "paper-item-icon_-_color": "var(--primary-text-color)",
    "paper-grey-200": "#191919",
    "primary-text-color": "#cfcfcf",
    "label-badge-background-color": "var(--secondary-background-color)"
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmdiaXJkcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3MvdGVhY2hpbmdiaXJkcy9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL3RlYWNoaW5nYmlyZHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvY29uZmlncy90ZWFjaGluZ2JpcmRzL2xvdmVsYWNlLnRzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3MvdGVhY2hpbmdiaXJkcy90aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb252ZXJ0RW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL2Zha2VfZGF0YS9lbnRpdHlcIjtcbmltcG9ydCB7IERlbW9Db25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGRlbW9FbnRpdGllc1RlYWNoaW5nYmlyZHM6IERlbW9Db25maWdbXCJlbnRpdGllc1wiXSA9ICgpID0+XG4gIGNvbnZlcnRFbnRpdGllcyh7XG4gICAgXCJzZW5zb3IucG9sbGVuX2dyYWJvXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucG9sbGVuX2dyYWJvXCIsXG4gICAgICBzdGF0ZTogXCJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJNdWd3b3J0XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdubyBsZXZlbHMnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ2xvdyBsZXZlbHMnKSByZXR1cm4gWzUwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnbG93LW1vZGVyYXRlIGxldmVscycpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdtb2RlcmF0ZSBsZXZlbHMnKSByZXR1cm4gWzMwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnbW9kZXJhdGUtaGlnaCBsZXZlbHMnKSByZXR1cm4gWzIwLCA4NV07IGVsc2UgaWYgKHN0YXRlID09PSAnaGlnaCBsZXZlbHMnKSByZXR1cm4gWzEwLCA2NV07IGVsc2UgaWYgKHN0YXRlID09PSAndmVyeSBoaWdoIGxldmVscycpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpmbG93ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5wb2xsZW5fYmpvcmtcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wb2xsZW5fYmpvcmtcIixcbiAgICAgIHN0YXRlOiBcIlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkJpcmNoXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdubyBsZXZlbHMnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ2xvdyBsZXZlbHMnKSByZXR1cm4gWzUwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnbG93LW1vZGVyYXRlIGxldmVscycpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdtb2RlcmF0ZSBsZXZlbHMnKSByZXR1cm4gWzMwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnbW9kZXJhdGUtaGlnaCBsZXZlbHMnKSByZXR1cm4gWzIwLCA4NV07IGVsc2UgaWYgKHN0YXRlID09PSAnaGlnaCBsZXZlbHMnKSByZXR1cm4gWzEwLCA2NV07IGVsc2UgaWYgKHN0YXRlID09PSAndmVyeSBoaWdoIGxldmVscycpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpsZWFmXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucG9sbGVuX2dyYXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wb2xsZW5fZ3Jhc1wiLFxuICAgICAgc3RhdGU6IFwiXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiR3Jhc3NcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ25vIGxldmVscycpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnbG93IGxldmVscycpIHJldHVybiBbNTAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdsb3ctbW9kZXJhdGUgbGV2ZWxzJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ21vZGVyYXRlIGxldmVscycpIHJldHVybiBbMzAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdtb2RlcmF0ZS1oaWdoIGxldmVscycpIHJldHVybiBbMjAsIDg1XTsgZWxzZSBpZiAoc3RhdGUgPT09ICdoaWdoIGxldmVscycpIHJldHVybiBbMTAsIDY1XTsgZWxzZSBpZiAoc3RhdGUgPT09ICd2ZXJ5IGhpZ2ggbGV2ZWxzJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOmZsb3dlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmZyb250X2Rvb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5mcm9udF9kb29yXCIsXG4gICAgICBzdGF0ZTogXCJVbmtub3duXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRnJvbnQgRG9vclwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjb21tZW50LXF1ZXN0aW9uLW91dGxpbmVcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ0Nsb3NlZCcpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPcGVuJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbNDAsIDcwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci55YXJkX2Rvb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci55YXJkX2Rvb3JcIixcbiAgICAgIHN0YXRlOiBcIkNsb3NlZFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIllhcmQgRG9vclwiLFxuICAgICAgICBpY29uOiBcIm1kaTpkb29yXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdDbG9zZWQnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT3BlbicpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmJhbGNvbnlfZG9vclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmJhbGNvbnlfZG9vclwiLFxuICAgICAgc3RhdGU6IFwiQ2xvc2VkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmFsY29ueSBEb29yXCIsXG4gICAgICAgIGljb246IFwibWRpOmRvb3JcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ0Nsb3NlZCcpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPcGVuJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuYmFja19kb29yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IuYmFja19kb29yXCIsXG4gICAgICBzdGF0ZTogXCJDbG9zZWRcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCYWNrIERvb3JcIixcbiAgICAgICAgaWNvbjogXCJtZGk6ZG9vclwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnQ2xvc2VkJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09wZW4nKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fc3RlZmFuX2xhcHRvcFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9zdGVmYW5fbGFwdG9wXCIsXG4gICAgICBzdGF0ZTogXCJPZmZsaW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RlZmFuIGxhcHRvcFwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6bGFwdG9wLXdpbmRvd3NcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCA4NV0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX2lzYV9jb21wdXRlclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9pc2FfY29tcHV0ZXJcIixcbiAgICAgIHN0YXRlOiBcIk9mZmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJJc2FzIGNvbXB1dGVyXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTptb25pdG9yXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9pc2FfbGFwdG9wXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2lzYV9sYXB0b3BcIixcbiAgICAgIHN0YXRlOiBcIk9mZmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJJc2FzIG9sZCBsYXB0b3BcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOmxhcHRvcC13aW5kb3dzXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9pc2FfZGVsbF94cHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1faXNhX2RlbGxfeHBzXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJJc2EgRGVsbCBYUFNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOmxhcHRvcC13aW5kb3dzXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX3ByaW50ZXJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fcHJpbnRlclwiLFxuICAgICAgc3RhdGU6IFwiT25saW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSFAgUHJpbnRlclwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6cHJpbnRlclwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9pcGFkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2lwYWRcIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcImlQYWRcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOnRhYmxldC1pcGFkXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX2FzdXNfcm91dGVyXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2FzdXNfcm91dGVyXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJBc3VzIFJvdXRlclwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6d2lmaVwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9pcF9jYW1lcmFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1faXBfY2FtZXJhXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTYW5uY2UgQ2FtZXJhXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTp3ZWJjYW1cIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1faXJfYmxhc3RlclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9pcl9ibGFzdGVyXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCcm9hZGxpbmsgSVIgQmxhc3RlciBIYWxsd2F5XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpyZW1vdGVcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fbWlsaWdodF9odWJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fbWlsaWdodF9odWJcIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk1pbGlnaHQgSHViXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpnb29nbGUta2VlcFwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9pcl9ibGFzdGVyX2JlZHJvb21cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1faXJfYmxhc3Rlcl9iZWRyb29tXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCcm9hZGxpbmsgSVIgQmxhc3RlciBCZWRyb29tXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpyZW1vdGVcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1faXJfYmxhc3Rlcl9saXZpbmdfcm9vbVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9pcl9ibGFzdGVyX2xpdmluZ19yb29tXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCcm9hZGxpbmsgSVIgQmxhc3RlciBMaXZpbmcgUm9vbVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6cmVtb3RlXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX3hpYW9taV9nYXRld2F5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX3hpYW9taV9nYXRld2F5XCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJYaWFvbWkgR2F0ZXdheVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6Y2lyY2xlLW91dGxpbmVcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fc29ub3NcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fc29ub3NcIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlNvbm9zXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9tYWdpY19taXJyb3JfcnBpXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX21hZ2ljX21pcnJvcl9ycGlcIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRhc2hib2FyZCBSUGlcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOnJhc3BiZXJyeXBpXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX25hc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9uYXNcIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlN5bm9sb2d5IE5BU1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6c2VydmVyXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX2hhc3NfcnBpXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2hhc3NfcnBpXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJIYXNzIFJQaVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6aG9tZS1hc3Npc3RhbnRcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fc2Ftc3VuZzY1XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX3NhbXN1bmc2NVwiLFxuICAgICAgc3RhdGU6IFwiT2ZmbGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkxpdmluZyBSb29tIFRWXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTp0ZWxldmlzaW9uXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9kYXNoYm9hcmRfcnBpXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2Rhc2hib2FyZF9ycGlcIixcbiAgICAgIHN0YXRlOiBcIk9mZmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogJzdcIiBEYXNoYm9hcmQgUlBpJyxcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOnJhc3BiZXJyeXBpXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9zYW1zdW5nNDlcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fc2Ftc3VuZzQ5XCIsXG4gICAgICBzdGF0ZTogXCJPZmZsaW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVkcm9vbSBUVlwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6dGVsZXZpc2lvblwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDg1XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fcnBpX3plcm9cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fcnBpX3plcm9cIixcbiAgICAgIHN0YXRlOiBcIk9ubGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJQaSBaZXJvXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBcIm1kaTpyYXNwYmVycnlwaVwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9tb3ZpZV9zeXN0ZW1cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fbW92aWVfc3lzdGVtXCIsXG4gICAgICBzdGF0ZTogXCJPZmZsaW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIFJvb20gTW92aWUgU3lzdGVtXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOnNwZWFrZXJcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCA4NV0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3lzdGVtX3JpbmdfZG9vcmJlbGxcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fcmluZ19kb29yYmVsbFwiLFxuICAgICAgc3RhdGU6IFwiT2ZmbGluZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJpbmdcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOmRvb3JiZWxsLXZpZGVvXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9uZXRnZWFyX3JvdXRlclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnN5c3RlbV9uZXRnZWFyX3JvdXRlclwiLFxuICAgICAgc3RhdGU6IFwiT25saW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTmV0Z2VhciBSb3V0ZXJcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOndpZmlcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fcmluZ19jaGltZV9wcm9cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fcmluZ19jaGltZV9wcm9cIixcbiAgICAgIHN0YXRlOiBcIk9mZmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJSaW5nIENoaW1lIFByb1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6d2lmaVwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDg1XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fc2hpZWxkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX3NoaWVsZFwiLFxuICAgICAgc3RhdGU6IFwiT25saW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTlZpZGlhIFNoaWVsZFwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6YW5kcm9pZFwiLFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9yaW5nX2NoaW1lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX3JpbmdfY2hpbWVcIixcbiAgICAgIHN0YXRlOiBcIk9mZmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJSaW5nIENoaW1lIFByb1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnT25saW5lJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09mZmxpbmUnKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogXCJtZGk6YmVsbC1vdXRsaW5lXCIsXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgODVdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9jaHJvbWVjYXN0X2JlZHJvb21cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fY2hyb21lY2FzdF9iZWRyb29tXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJDaHJvbWVjYXN0IEJlZHJvb21cIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOmNhc3RcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zeXN0ZW1fZGFmYW5nXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3lzdGVtX2RhZmFuZ1wiLFxuICAgICAgc3RhdGU6IFwiT25saW5lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRGFmYW5nXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdPbmxpbmUnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT2ZmbGluZScpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnN5c3RlbV9zdGVmYW5fY29tcHV0ZXJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zeXN0ZW1fc3RlZmFuX2NvbXB1dGVyXCIsXG4gICAgICBzdGF0ZTogXCJPbmxpbmVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTdGVmYW4gY29tcHV0ZXJcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ09ubGluZScpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPZmZsaW5lJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IFwibWRpOm1vbml0b3JcIixcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci51bmxvY2tlZF9ieVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVubG9ja2VkX2J5XCIsXG4gICAgICBzdGF0ZTogXCJTdGVmYW5cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJVbmxvY2tlZCBieVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnTG9ja2VkJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1VubG9ja2VkJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuZ3JlZW5ob3VzZV90ZW1wZXJhdHVyZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmdyZWVuaG91c2VfdGVtcGVyYXR1cmVcIixcbiAgICAgIHN0YXRlOiBcIjIxLjNcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY291bnRfc2Vuc29yczogMyxcbiAgICAgICAgbWF4X3ZhbHVlOiAyMS4zLFxuICAgICAgICBtZWFuOiAyMS4zLFxuICAgICAgICBtaW5fdmFsdWU6IDIxLjMsXG4gICAgICAgIGxhc3Q6IDIxLjMsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiXFx1MDBiMENcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJHcmVlbmhvdXNlIHRlbXBlcmF0dXJlXCIsXG4gICAgICAgIGljb246IFwibWRpOmNhbGN1bGF0b3JcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA8IDIzKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA+IDIzKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID4gMjUpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmRpbmluZ19hcmVhX3dpbmRvd1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmRpbmluZ19hcmVhX3dpbmRvd1wiLFxuICAgICAgc3RhdGU6IFwiQ2xvc2VkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRGluaW5nIGFyZWEgd2luZG93XCIsXG4gICAgICAgIGljb246IFwibWRpOndpbmRvdy1jbG9zZWRcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ0Nsb3NlZCcpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAnVW5rbm93bicpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdPcGVuJykgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuYmVkcm9vbV93aW5kb3dcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5iZWRyb29tX3dpbmRvd1wiLFxuICAgICAgc3RhdGU6IFwiQ2xvc2VkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVkcm9vbSB3aW5kb3dcIixcbiAgICAgICAgaWNvbjogXCJtZGk6d2luZG93LWNsb3NlZFwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnQ2xvc2VkJykgcmV0dXJuIFswLCAwXTsgZWxzZSBpZiAoc3RhdGUgPT09ICdVbmtub3duJykgcmV0dXJuIFs0MCwgNzBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ09wZW4nKSByZXR1cm4gWzAsIDg1XTtcIixcbiAgICAgICAgfSxcbiAgICAgICAgaHNfY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5wYXNzYWdlX21vdmVtZW50XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucGFzc2FnZV9tb3ZlbWVudFwiLFxuICAgICAgc3RhdGU6IFwiTm8gbW92ZW1lbnRcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXNzYWdlIE1vdmVtZW50XCIsXG4gICAgICAgIGljb246IFwibWRpOnNsZWVwXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IudXBzdGFpcnNfaGFsbHdheV9tb3ZlbWVudFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVwc3RhaXJzX2hhbGx3YXlfbW92ZW1lbnRcIixcbiAgICAgIHN0YXRlOiBcIk5vIG1vdmVtZW50XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVXBzdGFpcnMgSGFsbHdheSBNb3ZlbWVudFwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzbGVlcFwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnRyYXNoX3N0YXR1c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnRyYXNoX3N0YXR1c1wiLFxuICAgICAgc3RhdGU6IFwiUHV0IG91dFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlRyYXNoXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmRlbGV0ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmhlcmJzX21vaXN0dXJlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IuaGVyYnNfbW9pc3R1cmVcIixcbiAgICAgIHN0YXRlOiBcIjM5XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkhlcmJzIG1vaXN0dXJlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOndhdGVyLXBlcmNlbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5tb25pdG9yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubW9uaXRvclwiLFxuICAgICAgc3RhdGU6IFwidW5rbm93blwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk1vbml0b3JcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zcGVlZHRlc3RfcGluZ1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnNwZWVkdGVzdF9waW5nXCIsXG4gICAgICBzdGF0ZTogXCI2Ljg1OVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHJldHJpZXZlZCBmcm9tIFNwZWVkdGVzdCBieSBPb2tsYVwiLFxuICAgICAgICBieXRlc19yZWNlaXZlZDogMjg2ODQ1Nzk1LFxuICAgICAgICBieXRlc19zZW50OiAxNDY4MDA2NDAsXG4gICAgICAgIHNlcnZlcl9jb3VudHJ5OiBcIlN3ZWRlblwiLFxuICAgICAgICBzZXJ2ZXJfaWQ6IFwiMTAyNTZcIixcbiAgICAgICAgbGF0ZW5jeTogNi44NTksXG4gICAgICAgIHNlcnZlcl9uYW1lOiBcIlN0b2NraG9sbVwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1zXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3BlZWR0ZXN0IFBpbmdcIixcbiAgICAgICAgaWNvbjogXCJtZGk6c3BlZWRvbWV0ZXJcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zcGVlZHRlc3RfdXBsb2FkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3BlZWR0ZXN0X3VwbG9hZFwiLFxuICAgICAgc3RhdGU6IFwiMTY5LjhcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYXR0cmlidXRpb246IFwiRGF0YSByZXRyaWV2ZWQgZnJvbSBTcGVlZHRlc3QgYnkgT29rbGFcIixcbiAgICAgICAgYnl0ZXNfcmVjZWl2ZWQ6IDI4Njg0NTc5NSxcbiAgICAgICAgYnl0ZXNfc2VudDogMTQ2ODAwNjQwLFxuICAgICAgICBzZXJ2ZXJfY291bnRyeTogXCJTd2VkZW5cIixcbiAgICAgICAgc2VydmVyX2lkOiBcIjEwMjU2XCIsXG4gICAgICAgIGxhdGVuY3k6IDYuODU5LFxuICAgICAgICBzZXJ2ZXJfbmFtZTogXCJTdG9ja2hvbG1cIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJNYml0L3NcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTcGVlZHRlc3QgVXBsb2FkXCIsXG4gICAgICAgIGljb246IFwibWRpOnNwZWVkb21ldGVyXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3BlZWR0ZXN0X2Rvd25sb2FkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3BlZWR0ZXN0X2Rvd25sb2FkXCIsXG4gICAgICBzdGF0ZTogXCIyMjkuMjNcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYXR0cmlidXRpb246IFwiRGF0YSByZXRyaWV2ZWQgZnJvbSBTcGVlZHRlc3QgYnkgT29rbGFcIixcbiAgICAgICAgYnl0ZXNfcmVjZWl2ZWQ6IDI4Njg0NTc5NSxcbiAgICAgICAgYnl0ZXNfc2VudDogMTQ2ODAwNjQwLFxuICAgICAgICBzZXJ2ZXJfY291bnRyeTogXCJTd2VkZW5cIixcbiAgICAgICAgc2VydmVyX2lkOiBcIjEwMjU2XCIsXG4gICAgICAgIGxhdGVuY3k6IDYuODU5LFxuICAgICAgICBzZXJ2ZXJfbmFtZTogXCJTdG9ja2hvbG1cIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJNYml0L3NcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTcGVlZHRlc3QgRG93bmxvYWRcIixcbiAgICAgICAgaWNvbjogXCJtZGk6c3BlZWRvbWV0ZXJcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5iaWdfY2hpbGlfbW9pc3R1cmVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5iaWdfY2hpbGlfbW9pc3R1cmVcIixcbiAgICAgIHN0YXRlOiBcIjM2XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkJpZyBjaGlsaSBtb2lzdHVyZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YXRlci1wZXJjZW50XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IubWVtb3J5X3VzZV9wZXJjZW50XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubWVtb3J5X3VzZV9wZXJjZW50XCIsXG4gICAgICBzdGF0ZTogXCIxOS40XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk1lbW9yeSB1c2UgKHBlcmNlbnQpXCIsXG4gICAgICAgIGljb246IFwibWRpOm1lbW9yeVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnNtYWxsX2NoaWxpX21vaXN0dXJlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc21hbGxfY2hpbGlfbW9pc3R1cmVcIixcbiAgICAgIHN0YXRlOiBcIjM0XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlNtYWxsIGNoaWxpIG1vaXN0dXJlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOndhdGVyLXBlcmNlbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5wcm9jZXNzb3JfdXNlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucHJvY2Vzc29yX3VzZVwiLFxuICAgICAgc3RhdGU6IFwiMzdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCIlXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUHJvY2Vzc29yIHVzZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTptZW1vcnlcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5sYXN0X2Jvb3RcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5sYXN0X2Jvb3RcIixcbiAgICAgIHN0YXRlOiBcIjIwMTktMDEtMTBUMTY6NTY6NDQrMDE6MDBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJMYXN0IGJvb3RcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2xvY2tcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5kaXNrX3VzZV9wZXJjZW50X1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmRpc2tfdXNlX3BlcmNlbnRfXCIsXG4gICAgICBzdGF0ZTogXCIyOC43XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRpc2sgdXNlIChwZXJjZW50KSAvXCIsXG4gICAgICAgIGljb246IFwibWRpOmhhcmRkaXNrXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuaXNhYmVsbGFzX2lwaG9uZV94X2J0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IuaXNhYmVsbGFzX2lwaG9uZV94X2J0XCIsXG4gICAgICBzdGF0ZTogXCJ1bmtub3duXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiaXNhYmVsbGFzX2lwaG9uZV94X2J0XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3RlZmFuX2lwaG9uZV83X2J0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3RlZmFuX2lwaG9uZV83X2J0XCIsXG4gICAgICBzdGF0ZTogXCJ1bmtub3duXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwic3RlZmFuX2lwaG9uZV83X2J0XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucmluZ19mcm9udF9kb29yX2xhc3RfbW90aW9uXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucmluZ19mcm9udF9kb29yX2xhc3RfbW90aW9uXCIsXG4gICAgICBzdGF0ZTogXCIxMzowN1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHByb3ZpZGVkIGJ5IFJpbmcuY29tXCIsXG4gICAgICAgIGRldmljZV9pZDogXCI1MDMzOGJlYmQ0YzZcIixcbiAgICAgICAgZmlybXdhcmU6IFwiVXAgdG8gRGF0ZVwiLFxuICAgICAgICBraW5kOiBcImRvb3JiZWxsX3Y0XCIsXG4gICAgICAgIHRpbWV6b25lOiBcIkV1cm9wZS9TdG9ja2hvbG1cIixcbiAgICAgICAgdHlwZTogXCJkb29yYm90c1wiLFxuICAgICAgICB3aWZpX25hbWU6IFwiUmluZ09mU2VjdXJpdHktVDRVUEM2QzhuXCIsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IFwiMjAxOS0wMS0xOVQxMzowNzo0MCswMTowMFwiLFxuICAgICAgICBhbnN3ZXJlZDogZmFsc2UsXG4gICAgICAgIHJlY29yZGluZ19zdGF0dXM6IFwicmVhZHlcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwibW90aW9uXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRnJvbnQgRG9vciBMYXN0IE1vdGlvblwiLFxuICAgICAgICBpY29uOiBcIm1kaTpoaXN0b3J5XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGhzX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdDbG9zZWQnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ1Vua25vd24nKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID09PSAnT3BlbicpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic3dpdGNoLmxpdmluZ3Jvb21fbW92aWVfc3lzdGVtXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzd2l0Y2gubGl2aW5ncm9vbV9tb3ZpZV9zeXN0ZW1cIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwibGl2aW5ncm9vbV9tb3ZpZV9zeXN0ZW1cIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInN3aXRjaC5saXZpbmdyb29tX3R2XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzd2l0Y2gubGl2aW5ncm9vbV90dlwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJsaXZpbmdyb29tX3R2XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzd2l0Y2guc3RlZmFuX3JhZGlhdG9yXzNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInN3aXRjaC5zdGVmYW5fcmFkaWF0b3JfM1wiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RlZmFuIFJhZGlhdG9yXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLnN0b3JlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLnN0b3JlXCIsXG4gICAgICBzdGF0ZTogXCJ6b25pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICByYWRpdXM6IDMwMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTdG9yZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjYXJ0XCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLndvcmtfc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS53b3JrX3NcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMzAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIldvcmsgU1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpjb2RlLWJyYWNlc1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS53b3JrX3NvbG5hXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLndvcmtfc29sbmFcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMzAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIldvcmsgU29sbmFcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y29kZS1icmFjZXNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUud29ya19pXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLndvcmtfaVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAzMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiV29yayBJXCIsXG4gICAgICAgIGljb246IFwibWRpOmNvZGUtYnJhY2VzXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmdvbGZcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuZ29sZlwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA4MDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiR29sZlwiLFxuICAgICAgICBpY29uOiBcIm1kaTpnb2xmXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmpvaGFubmVzX29jaF90ZXNzaWVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuam9oYW5uZXNfb2NoX3Rlc3NpZVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAzMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSm9oYW5uZXMgb2NoIFRlc3NpZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTphY2NvdW50LW11bHRpcGxlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmJydWxsZV9vY2hfc2FhcmFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuYnJ1bGxlX29jaF9zYWFyYVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiAzMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQnJ1bGxlIG9jaCBTYWFyYVwiLFxuICAgICAgICBpY29uOiBcIm1kaTphY2NvdW50LW11bHRpcGxlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmVtZWxpZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5lbWVsaWVcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMzAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkVtZWxpZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTphY2NvdW50LW11bHRpcGxlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmlzYV9tYW1tYVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5pc2FfbWFtbWFcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMzAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIklzYSBtYW1tYVwiLFxuICAgICAgICBpY29uOiBcIm1kaTphY2NvdW50LW11bHRpcGxlXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmZhZ2VsYnJvXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLmZhZ2VsYnJvXCIsXG4gICAgICBzdGF0ZTogXCJ6b25pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICByYWRpdXM6IDEwMDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRmFnZWxicm9cIixcbiAgICAgICAgaWNvbjogXCJtZGk6Z29sZlwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5ob21lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLmhvbWVcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkhvbWVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6aG9tZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LmFpcl9jbGVhbmVyX3F1aWV0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzY3JpcHQuYWlyX2NsZWFuZXJfcXVpZXRcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBsYXN0X3RyaWdnZXJlZDogbnVsbCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJhaXJfY2xlYW5lcl9xdWlldFwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LmFpcl9jbGVhbmVyX2F1dG9cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNjcmlwdC5haXJfY2xlYW5lcl9hdXRvXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbGFzdF90cmlnZ2VyZWQ6IG51bGwsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiYWlyX2NsZWFuZXJfYXV0b1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LmFpcl9jbGVhbmVyX3R1cmJvXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzY3JpcHQuYWlyX2NsZWFuZXJfdHVyYm9cIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBsYXN0X3RyaWdnZXJlZDogbnVsbCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJhaXJfY2xlYW5lcl90dXJib1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LmFjX29mZlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2NyaXB0LmFjX29mZlwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGxhc3RfdHJpZ2dlcmVkOiBudWxsLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcImFjX29mZlwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NyaXB0LmFjX29uXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzY3JpcHQuYWNfb25cIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBsYXN0X3RyaWdnZXJlZDogbnVsbCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJhY19vblwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiaW5wdXRfYm9vbGVhbi52YWNhdGlvbl9tb2RlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJpbnB1dF9ib29sZWFuLnZhY2F0aW9uX21vZGVcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlZhY2F0aW9uIE1vZGVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YmVhY2hcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X2Jvb2xlYW4uaXNhX21vZGVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImlucHV0X2Jvb2xlYW4uaXNhX21vZGVcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIklzYWJlbGxhIE1vZGVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWNjb3VudC1vZmZcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaWNvbjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnb24nKSByZXR1cm4gJ21kaTphY2NvdW50JzsgZWxzZSBpZiAoc3RhdGUgPT09ICdvZmYnKSByZXR1cm4gJ21kaTphY2NvdW50LW9mZic7XFxuXCIsXG4gICAgICAgICAgaWNvbl9jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnb24nKSByZXR1cm4gJ3JnYig1NiwgMTUwLCA1NiknOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ29mZicpIHJldHVybiAncmdiKDI0OSwgMjUxLCAyNTUpJztcXG5cIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbl9jb2xvcjogXCJyZ2IoMjQ5LCAyNTEsIDI1NSlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X2Jvb2xlYW4uY2xlYW5pbmdfZGF5XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJpbnB1dF9ib29sZWFuLmNsZWFuaW5nX2RheVwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQ2xlYW5pbmcgRGF5XCIsXG4gICAgICAgIGljb246IFwibWRpOmJyb29tXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJpbnB1dF9ib29sZWFuLmd1ZXN0X21vZGVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImlucHV0X2Jvb2xlYW4uZ3Vlc3RfbW9kZVwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiR3Vlc3QgTW9kZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTphY2NvdW50LW11bHRpcGxlLW1pbnVzXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGljb246XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA9PT0gJ29uJykgcmV0dXJuICdtZGk6YWNjb3VudC1ncm91cCc7IGVsc2UgaWYgKHN0YXRlID09PSAnb2ZmJykgcmV0dXJuICdtZGk6YWNjb3VudC1tdWx0aXBsZS1taW51cyc7XFxuXCIsXG4gICAgICAgICAgaWNvbl9jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnb24nKSByZXR1cm4gJ3JnYig1NiwgMTUwLCA1NiknOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ29mZicpIHJldHVybiAncmdiKDI0OSwgMjUxLCAyNTUpJztcXG5cIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbl9jb2xvcjogXCJyZ2IoMjQ5LCAyNTEsIDI1NSlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImNvdW50ZXIubGl0dGVyYm94X2Rvd25zdGFpcnNfdmlzaXRzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJjb3VudGVyLmxpdHRlcmJveF9kb3duc3RhaXJzX3Zpc2l0c1wiLFxuICAgICAgc3RhdGU6IFwiM1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpbml0aWFsOiAwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRvd25zdGFpcnMgTGl0dGVyYm94IFZpc2l0c1wiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTplbW90aWNvbi1wb29wXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJjb3VudGVyLmxpdHRlcmJveF91cHN0YWlyc192aXNpdHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImNvdW50ZXIubGl0dGVyYm94X3Vwc3RhaXJzX3Zpc2l0c1wiLFxuICAgICAgc3RhdGU6IFwiMVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpbml0aWFsOiAwLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlVwc3RhaXJzIExpdHRlcmJveCBWaXNpdHNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6ZW1vdGljb24tcG9vcFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NlbmUubW92aWVfdGltZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2NlbmUubW92aWVfdGltZVwiLFxuICAgICAgc3RhdGU6IFwic2NlbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBlbnRpdHlfaWQ6IFtcbiAgICAgICAgICBcImxpZ2h0LmxpdmluZ19yb29tX3Nwb3RsaWdodHNfbGV2ZWxcIixcbiAgICAgICAgICBcImxpZ2h0LnBhc3NhZ2VfY2VpbGluZ19zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICAgICAgXCJsaWdodC5raXRjaGVuX2NlaWxpbmdfc3BvdGxpZ2h0c19sZXZlbFwiLFxuICAgICAgICAgIFwibGlnaHQuZGluaW5nX2FyZWFfY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgIFwibGlnaHQuZmxvb3JsYW1wX3JlYWRpbmdfbGlnaHRcIixcbiAgICAgICAgICBcImxpZ2h0LmZsb29ybGFtcF91cGxpZ2h0XCIsXG4gICAgICAgICAgXCJsaWdodC5pc2FfY2VpbGluZ19saWdodFwiLFxuICAgICAgICAgIFwibGlnaHQubGl2aW5nX3Jvb21fY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgIFwibGlnaHQuc3RhaXJzX2xpZ2h0c1wiLFxuICAgICAgICAgIFwibGlnaHQudXBzdGFpcnNfaGFsbHdheV9jZWlsaW5nX2xpZ2h0X2xldmVsXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTW92aWUgVGltZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2NlbmUubW9ybmluZ19saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNjZW5lLm1vcm5pbmdfbGlnaHRzXCIsXG4gICAgICBzdGF0ZTogXCJzY2VuaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGVudGl0eV9pZDogW1xuICAgICAgICAgIFwibGlnaHQubGl2aW5nX3Jvb21fY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgIFwibGlnaHQua2l0Y2hlbl9jZWlsaW5nX3Nwb3RsaWdodHNfbGV2ZWxcIixcbiAgICAgICAgICBcImxpZ2h0LnBhc3NhZ2VfY2VpbGluZ19zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICAgICAgXCJsaWdodC51cHN0YWlyc19oYWxsd2F5X2NlaWxpbmdfbGlnaHRfbGV2ZWxcIixcbiAgICAgICAgICBcImxpZ2h0LmZsb29ybGFtcF91cGxpZ2h0XCIsXG4gICAgICAgICAgXCJsaWdodC5zdGFpcnNfbGlnaHRzXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTW9ybmluZyBMaWdodHNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X3NlbGVjdC5kcnllcl9zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImlucHV0X3NlbGVjdC5kcnllcl9zdGF0dXNcIixcbiAgICAgIHN0YXRlOiBcIklkbGVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgb3B0aW9uczogW1wiSWRsZVwiLCBcIlJ1bm5pbmdcIiwgXCJDbGVhblwiXSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEcnllciBTdGF0dXNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X3NlbGVjdC5yb29tYmFfbW9kZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfc2VsZWN0LnJvb21iYV9tb2RlXCIsXG4gICAgICBzdGF0ZTogXCJWYWN1dW1pbmdcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIFwiV2FpdGluZ1wiLFxuICAgICAgICAgIFwiVmFjdXVtIE5vd1wiLFxuICAgICAgICAgIFwiVmFjdXVtaW5nXCIsXG4gICAgICAgICAgXCJIYXMgVmFjdXVtZWRcIixcbiAgICAgICAgICBcIkRvY2tcIixcbiAgICAgICAgICBcIk5vdCBUb2RheVwiLFxuICAgICAgICBdLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJvb21iYVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpyb2JvdC12YWN1dW1cIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X3NlbGVjdC53YXNoaW5nX21hY2hpbmVfc3RhdHVzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJpbnB1dF9zZWxlY3Qud2FzaGluZ19tYWNoaW5lX3N0YXR1c1wiLFxuICAgICAgc3RhdGU6IFwiUnVubmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBvcHRpb25zOiBbXCJJZGxlXCIsIFwiUnVubmluZ1wiLCBcIkNsZWFuXCJdLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIldhc2hpbmcgTWFjaGluZSBTdGF0dXNcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6d2FzaGluZy1tYWNoaW5lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsaWdodC51cHN0YWlyc19saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LnVwc3RhaXJzX2xpZ2h0c1wiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbWluX21pcmVkczogMTUzLFxuICAgICAgICBtYXhfbWlyZWRzOiA1MDAsXG4gICAgICAgIGJyaWdodG5lc3M6IDYzLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlVwc3RhaXJzIGxpZ2h0c1wiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDYzLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQud2Fsa19pbl9jbG9zZXRfbGlnaHRzXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC53YWxrX2luX2Nsb3NldF9saWdodHNcIixcbiAgICAgIHN0YXRlOiBcInVuYXZhaWxhYmxlXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiV2FsayBpbiBjbG9zZXQgbGlnaHRzXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNDEsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOndhbGwtc2NvbmNlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsaWdodC5vdXRkb29yX2xpZ2h0c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQub3V0ZG9vcl9saWdodHNcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJyaWdodG5lc3M6IDI1NCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJPdXRkb29yIGxpZ2h0c1wiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDQxLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YWxsLXNjb25jZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQuZG93bnN0YWlyc19saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LmRvd25zdGFpcnNfbGlnaHRzXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBtaW5fbWlyZWRzOiAxNTMsXG4gICAgICAgIG1heF9taXJlZHM6IDUwMCxcbiAgICAgICAgYnJpZ2h0bmVzczogMTI4LFxuICAgICAgICBjb2xvcl90ZW1wOiAzNjYsXG4gICAgICAgIGVmZmVjdF9saXN0OiBbXCJjb2xvcmxvb3BcIl0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRG93bnN0YWlycyBsaWdodHNcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiA2MyxcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0Lm91dGRvb3JfeWFyZF9saWdodF9uZXRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0Lm91dGRvb3JfeWFyZF9saWdodF9uZXRcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk91dGRvb3IgeWFyZCBsaWdodCBuZXRcIixcbiAgICAgICAgYXNzdW1lZF9zdGF0ZTogdHJ1ZSxcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpsaWdodGJ1bGJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0Lm91dGRvb3JfaGFuZ2luZ19saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0Lm91dGRvb3JfaGFuZ2luZ19saWdodHNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk91dGRvb3IgaGFuZ2luZyBsaWdodHNcIixcbiAgICAgICAgYXNzdW1lZF9zdGF0ZTogdHJ1ZSxcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpsaWdodGJ1bGJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0Lm91dGRvb3JfZnJvbnRfaGFuZ2luZ19saWdodHNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0Lm91dGRvb3JfZnJvbnRfaGFuZ2luZ19saWdodHNcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk91dGRvb3IgZnJvbnQgaGFuZ2luZyBsaWdodHNcIixcbiAgICAgICAgYXNzdW1lZF9zdGF0ZTogdHJ1ZSxcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpsaWdodGJ1bGJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3Iuc3RlZmFuc19yb29tX21vdGlvblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5zdGVmYW5zX3Jvb21fbW90aW9uXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogMTAwLFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTdGVmYW5zIFJvb20gTW90aW9uXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9zdGVmYW5cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci50ZW1wZXJhdHVyZV9zdGVmYW5cIixcbiAgICAgIHN0YXRlOiBcIjI2LjJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogOTUsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIlxcdTAwYjBDXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RlZmFucyBSb29tXCIsXG4gICAgICAgIGljb246IFwibWRpOnRoZXJtb21ldGVyXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlIDwgMjMpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID4gMjMpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPiAyNSkgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbNDAsIDcwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9kb3duc3RhaXJzX2JhdGhyb29tXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudGVtcGVyYXR1cmVfZG93bnN0YWlyc19iYXRocm9vbVwiLFxuICAgICAgc3RhdGU6IFwiMjMuMVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA4NSxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiXFx1MDBiMENcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEb3duc3RhaXJzIEJhdGhyb29tXCIsXG4gICAgICAgIGljb246IFwibWRpOnRoZXJtb21ldGVyXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlIDwgMjMpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID4gMjMpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPiAyNSkgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbNDAsIDcwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9iZWRyb29tXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudGVtcGVyYXR1cmVfYmVkcm9vbVwiLFxuICAgICAgc3RhdGU6IFwiMjIuN1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA3OCxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiXFx1MDBiMENcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJCZWRyb29tXCIsXG4gICAgICAgIGljb246IFwibWRpOnRoZXJtb21ldGVyXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlIDwgMjMpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID4gMjMpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPiAyNSkgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IudGVtcGVyYXR1cmVfc3RvcmFnZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnRlbXBlcmF0dXJlX3N0b3JhZ2VcIixcbiAgICAgIHN0YXRlOiBcIi0zLjhcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNzUsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIlxcdTAwYjBDXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3RvcmFnZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTp0aGVybW9tZXRlclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaHNfY29sb3I6XG4gICAgICAgICAgICBcImlmIChzdGF0ZSA8IDIzKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA+IDIzKSByZXR1cm4gWzQwLCA3MF07IGVsc2UgaWYgKHN0YXRlID4gMjUpIHJldHVybiBbMCwgODVdO1wiLFxuICAgICAgICB9LFxuICAgICAgICBoc19jb2xvcjogWzAsIDBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnJlZnJpZ2VyYXRvclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnJlZnJpZ2VyYXRvclwiLFxuICAgICAgc3RhdGU6IFwiNi4xXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDc4LFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJcXHUwMGIwQ1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJlZnJpZ2VyYXRvclwiLFxuICAgICAgICBpY29uOiBcIm1kaTp0aGVybW9tZXRlclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9wYXNzYWdlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IudGVtcGVyYXR1cmVfcGFzc2FnZVwiLFxuICAgICAgc3RhdGU6IFwiMjMuN1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiYXR0ZXJ5X2xldmVsOiA4NSxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiXFx1MDBiMENcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXNzYWdlXCIsXG4gICAgICAgIGljb246IFwibWRpOnRoZXJtb21ldGVyXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJ0ZW1wZXJhdHVyZVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlIDwgMjMpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID4gMjMpIHJldHVybiBbNDAsIDcwXTsgZWxzZSBpZiAoc3RhdGUgPiAyNSkgcmV0dXJuIFswLCA4NV07XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGhzX2NvbG9yOiBbNDAsIDcwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmJlZHNpZGVfbGFtcFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQuYmVkc2lkZV9sYW1wXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbWluX21pcmVkczogMTUzLFxuICAgICAgICBtYXhfbWlyZWRzOiA1MDAsXG4gICAgICAgIGlzX2RlY29uel9ncm91cDogZmFsc2UsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVkc2lkZSBMYW1wXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNjMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmxhbXBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmZsb29ybGFtcF9yZWFkaW5nX2xpZ2h0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC5mbG9vcmxhbXBfcmVhZGluZ19saWdodFwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG1pbl9taXJlZHM6IDE1MyxcbiAgICAgICAgbWF4X21pcmVkczogNTAwLFxuICAgICAgICBpc19kZWNvbnpfZ3JvdXA6IGZhbHNlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZsb29ybGFtcCBSZWFkaW5nIExpZ2h0XCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNDMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmxhbXBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmhhbGx3YXlfd2luZG93X2xpZ2h0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC5oYWxsd2F5X3dpbmRvd19saWdodFwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbWluX21pcmVkczogMTUzLFxuICAgICAgICBtYXhfbWlyZWRzOiA1MDAsXG4gICAgICAgIGJyaWdodG5lc3M6IDEyOCxcbiAgICAgICAgY29sb3JfdGVtcDogMzY2LFxuICAgICAgICBlZmZlY3RfbGlzdDogW1wiY29sb3Jsb29wXCJdLFxuICAgICAgICBpc19kZWNvbnpfZ3JvdXA6IGZhbHNlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkhhbGx3YXkgd2luZG93IGxpZ2h0XCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNjMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmxhbXBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmlzYV9jZWlsaW5nX2xpZ2h0XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC5pc2FfY2VpbGluZ19saWdodFwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYnJpZ2h0bmVzczogNzcsXG4gICAgICAgIGlzX2RlY29uel9ncm91cDogZmFsc2UsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSXNhIENlaWxpbmcgTGlnaHRcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiA0MSxcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2VpbGluZy1saWdodFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQuZmxvb3JsYW1wX3VwbGlnaHRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LmZsb29ybGFtcF91cGxpZ2h0XCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBtaW5fbWlyZWRzOiAxNTMsXG4gICAgICAgIG1heF9taXJlZHM6IDUwMCxcbiAgICAgICAgYnJpZ2h0bmVzczogMTUwLFxuICAgICAgICBjb2xvcl90ZW1wOiAzNjYsXG4gICAgICAgIGVmZmVjdF9saXN0OiBbXCJjb2xvcmxvb3BcIl0sXG4gICAgICAgIGlzX2RlY29uel9ncm91cDogZmFsc2UsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRmxvb3JsYW1wXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogNjMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmZsb29yLWxhbXBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmJlZHJvb21fY2VpbGluZ19saWdodFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQuYmVkcm9vbV9jZWlsaW5nX2xpZ2h0XCIsXG4gICAgICBzdGF0ZTogXCJ1bmF2YWlsYWJsZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkJlZHJvb20gQ2VpbGluZyBMaWdodFwiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDQxLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjZWlsaW5nLWxpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsaWdodC5nYXRld2F5X2xpZ2h0XzM0Y2UwMDhiZmM0YlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQuZ2F0ZXdheV9saWdodF8zNGNlMDA4YmZjNGJcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk5pZ2h0bGlnaHRcIixcbiAgICAgICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiAxNyxcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6bGFtcFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYWxhcm1fY29udHJvbF9wYW5lbC5ob3VzZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYWxhcm1fY29udHJvbF9wYW5lbC5ob3VzZVwiLFxuICAgICAgc3RhdGU6IFwiZGlzYXJtZWRcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYWxsc2Vuc29yczogW1xuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iZWRyb29tX2Rvb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFsY29ueV9kb29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnlhcmRfZG9vclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5kaW5pbmdfYXJlYV93aW5kb3dfc2Vuc29yX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5zdGVmYW5zX3Jvb21fbW90aW9uXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLndpbmRvd19iZWRyb29tXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnBhc3NhZ2VfcGlyX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci51cHN0YWlyc19oYWxsd2F5X3Bpcl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGFybV9zdGF0ZTogXCJkaXNhcm1lZFwiLFxuICAgICAgICBid2FsYXJtX3ZlcnNpb246IFwiMS4xLjNcIixcbiAgICAgICAgY2hhbmdlZF9ieTogXCJcIixcbiAgICAgICAgY2hhbmdlZGJ5dXNlcjogbnVsbCxcbiAgICAgICAgY29kZV9mb3JtYXQ6IFwiLitcIixcbiAgICAgICAgY29kZV90b19hcm06IGZhbHNlLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBkZWxheWVkOiBbXSxcbiAgICAgICAgZW5hYmxlX2xvZzogdHJ1ZSxcbiAgICAgICAgZW5hYmxlX3BlcmltZXRlcl9tb2RlOiB0cnVlLFxuICAgICAgICBlbmFibGVfcGVyc2lzdGVuY2U6IHRydWUsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSG91c2VcIixcbiAgICAgICAgaWdub3JlZDogW1xuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iZWRyb29tX2Rvb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFsY29ueV9kb29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnlhcmRfZG9vclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5kaW5pbmdfYXJlYV93aW5kb3dfc2Vuc29yX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5zdGVmYW5zX3Jvb21fbW90aW9uXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLndpbmRvd19iZWRyb29tXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnBhc3NhZ2VfcGlyX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci51cHN0YWlyc19oYWxsd2F5X3Bpcl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGltbWVkaWF0ZTogW10sXG4gICAgICAgIGxvZ19zaXplOiAxMCxcbiAgICAgICAgbG9nczogW1xuICAgICAgICAgIFsxNTQ3NjIyNzU4LjY2OTQ4ODcsIFwiSEFcIiwgNCwgbnVsbF0sXG4gICAgICAgICAgWzE1NDc2NDAyNjguNzc2MTY2MiwgXCJIQVwiLCAwLCBudWxsXSxcbiAgICAgICAgICBbMTU0NzcwOTA2Ni41MzAwNDA1LCBcIkhBXCIsIDQsIG51bGxdLFxuICAgICAgICAgIFsxNTQ3NzQwNTkyLjcxNTM4NjksIFwiSEFcIiwgMCwgbnVsbF0sXG4gICAgICAgICAgWzE1NDc3NDExOTIuMjI5NzIzNywgXCJIQVwiLCA0LCBudWxsXSxcbiAgICAgICAgICBbMTU0Nzc0MTIxNS4xMzkwODUzLCBcIkhBXCIsIDAsIG51bGxdLFxuICAgICAgICAgIFsxNTQ3Nzk0NDYzLjU1MzMxMzUsIFwiSEFcIiwgNCwgbnVsbF0sXG4gICAgICAgICAgWzE1NDc4MzI3ODAuNTAyNjYzNCwgXCJIQVwiLCAwLCBudWxsXSxcbiAgICAgICAgICBbMTU0Nzk4NDMxOC41OTc3NDYxLCBcIkhBXCIsIDQsIG51bGxdLFxuICAgICAgICAgIFsxNTQ3OTk0ODI2LjI3MzU3NCwgXCJIQVwiLCAwLCBudWxsXSxcbiAgICAgICAgXSxcbiAgICAgICAgbXF0dDoge1xuICAgICAgICAgIGNvbW1hbmRfdG9waWM6IFwiaG9tZS9hbGFybS9zZXRcIixcbiAgICAgICAgICBlbmFibGVfbXF0dDogZmFsc2UsXG4gICAgICAgICAgb3ZlcnJpZGVfY29kZTogZmFsc2UsXG4gICAgICAgICAgcGF5bG9hZF9hcm1fYXdheTogXCJBUk1fQVdBWVwiLFxuICAgICAgICAgIHBheWxvYWRfYXJtX2hvbWU6IFwiQVJNX0hPTUVcIixcbiAgICAgICAgICBwYXlsb2FkX2FybV9uaWdodDogXCJBUk1fTklHSFRcIixcbiAgICAgICAgICBwYXlsb2FkX2Rpc2FybTogXCJESVNBUk1cIixcbiAgICAgICAgICBwZW5kaW5nX29uX3dhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgIHFvczogMCxcbiAgICAgICAgICBzdGF0ZV90b3BpYzogXCJob21lL2FsYXJtXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhbmVsOiB7XG4gICAgICAgICAgY2FtZXJhX3VwZGF0ZV9pbnRlcnZhbDogXCJcIixcbiAgICAgICAgICBjYW1lcmFzOiBbXCJjYW1lcmEuYmFja19kb29yXCIsIFwiY2FtZXJhLmZyb250X2Rvb3JcIiwgXCJjYW1lcmEudXBzdGFpcnNcIl0sXG4gICAgICAgICAgZW5hYmxlX2NhbWVyYV9wYW5lbDogXCJGYWxzZVwiLFxuICAgICAgICAgIGVuYWJsZV9jbG9jazogXCJUcnVlXCIsXG4gICAgICAgICAgZW5hYmxlX2Zsb29ycGxhbl9wYW5lbDogXCJGYWxzZVwiLFxuICAgICAgICAgIGVuYWJsZV9zZW5zb3JzX3BhbmVsOiBcIkZhbHNlXCIsXG4gICAgICAgICAgZW5hYmxlX3NlcmlmX2ZvbnQ6IFwiRmFsc2VcIixcbiAgICAgICAgICBlbmFibGVfd2VhdGhlcjogXCJUcnVlXCIsXG4gICAgICAgICAgaGlkZV9wYXNzY29kZTogXCJUcnVlXCIsXG4gICAgICAgICAgaGlkZV9zaWRlYmFyOiBcIlRydWVcIixcbiAgICAgICAgICBwYW5lbF90aXRsZTogXCJcIixcbiAgICAgICAgICByb3VuZF9idXR0b25zOiBcIlRydWVcIixcbiAgICAgICAgICBzaGFkb3dfZWZmZWN0OiBcIkZhbHNlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhbmVsX2xvY2tlZDogZmFsc2UsXG4gICAgICAgIHBhbmljX21vZGU6IFwiZGVhY3RpdmF0ZWRcIixcbiAgICAgICAgcGFzc2NvZGVfYXR0ZW1wdHM6IDMsXG4gICAgICAgIHBhc3Njb2RlX2F0dGVtcHRzX3RpbWVvdXQ6IDkwMCxcbiAgICAgICAgcHlfdmVyc2lvbjogWzMsIDYsIDYsIFwiZmluYWxcIiwgMF0sXG4gICAgICAgIHN0YXRlczoge1xuICAgICAgICAgIGFybWVkX2F3YXk6IHtcbiAgICAgICAgICAgIGRlbGF5ZWQ6IFtcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnlhcmRfZG9vclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnBhc3NhZ2VfcGlyX3NlbnNvclwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogW1xuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IudXBzdGFpcnNfaGFsbHdheV9waXJfc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYWxjb255X2Rvb3JcIixcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmJhY2tfZG9vclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmVkcm9vbV9kb29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5zdGVmYW5zX3Jvb21fbW90aW9uXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5kaW5pbmdfYXJlYV93aW5kb3dfc2Vuc29yX3NlbnNvclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IucGFzc2FnZV9waXJfc2Vuc29yXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3ZlcnJpZGU6IFtcImJpbmFyeV9zZW5zb3Iud2luZG93X2JlZHJvb21cIl0sXG4gICAgICAgICAgICBwZW5kaW5nX3RpbWU6IDI1LFxuICAgICAgICAgICAgdHJpZ2dlcl90aW1lOiAzMDAsXG4gICAgICAgICAgICB3YXJuaW5nX3RpbWU6IDYwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJtZWRfaG9tZToge1xuICAgICAgICAgICAgZGVsYXllZDogW10sXG4gICAgICAgICAgICBpbW1lZGlhdGU6IFtcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYWxjb255X2Rvb3JcIixcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnlhcmRfZG9vclwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG92ZXJyaWRlOiBbXSxcbiAgICAgICAgICAgIHBlbmRpbmdfdGltZTogMTAsXG4gICAgICAgICAgICB0cmlnZ2VyX3RpbWU6IDMwMCxcbiAgICAgICAgICAgIHdhcm5pbmdfdGltZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFybWVkX3BlcmltZXRlcjoge1xuICAgICAgICAgICAgZGVsYXllZDogW10sXG4gICAgICAgICAgICBpbW1lZGlhdGU6IFtcbiAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmJhY2tfZG9vclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFsY29ueV9kb29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yX3NlbnNvclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IueWFyZF9kb29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci53aW5kb3dfYmVkcm9vbVwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZGluaW5nX2FyZWFfd2luZG93X3NlbnNvcl9zZW5zb3JcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdmVycmlkZTogW10sXG4gICAgICAgICAgICBwZW5kaW5nX3RpbWU6IDAsXG4gICAgICAgICAgICB0cmlnZ2VyX3RpbWU6IDYwMCxcbiAgICAgICAgICAgIHdhcm5pbmdfdGltZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdXBwb3J0ZWRfc3RhdHVzZXNfb2ZmOiBbXG4gICAgICAgICAgXCJvZmZcIixcbiAgICAgICAgICBcImZhbHNlXCIsXG4gICAgICAgICAgXCJsb2NrZWRcIixcbiAgICAgICAgICBcImNsb3NlZFwiLFxuICAgICAgICAgIFwidW5kZXRlY3RlZFwiLFxuICAgICAgICAgIFwibm9fbW90aW9uXCIsXG4gICAgICAgICAgXCJzdGFuZGJ5XCIsXG4gICAgICAgIF0sXG4gICAgICAgIHN1cHBvcnRlZF9zdGF0dXNlc19vbjogW1xuICAgICAgICAgIFwib25cIixcbiAgICAgICAgICBcInRydWVcIixcbiAgICAgICAgICBcInVubG9ja2VkXCIsXG4gICAgICAgICAgXCJvcGVuXCIsXG4gICAgICAgICAgXCJkZXRlY3RlZFwiLFxuICAgICAgICAgIFwibW90aW9uXCIsXG4gICAgICAgICAgXCJtb3Rpb25fZGV0ZWN0ZWRcIixcbiAgICAgICAgICBcIm1vdGlvbiBkZXRlY3RlZFwiLFxuICAgICAgICBdLFxuICAgICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgICAgICBoc19jb2xvcjpcbiAgICAgICAgICAgIFwiaWYgKHN0YXRlID09PSAnZGlzYXJtZWQnKSByZXR1cm4gWzAsIDBdOyBlbHNlIGlmIChzdGF0ZSA9PT0gJ3RyaWdnZXJlZCcpIHJldHVybiBbMCwgODVdOyBlbHNlIHJldHVybiBbNDAsIDcwXTtcIixcbiAgICAgICAgICBpY29uX2NvbG9yOlxuICAgICAgICAgICAgXCJpZiAoc3RhdGUgPT09ICdkaXNhcm1lZCcpIHJldHVybiBbMCwgMF07IGVsc2UgaWYgKHN0YXRlID09PSAndHJpZ2dlcmVkJykgcmV0dXJuIFswLCA4NV07IGVsc2UgcmV0dXJuIFs0MCwgNzBdO1wiLFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVVSTogZmFsc2UsXG4gICAgICAgIHVzZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29kZTogXCIqKioqXCIsXG4gICAgICAgICAgICBkaXNhYmxlX2FuaW1hdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBpZDogXCJkZWQ4MjI0M2M0OWY0MWFkYmRiMGVhMTFjY2ExYjdiMVwiLFxuICAgICAgICAgICAgbmFtZTogXCJIYXNzLmlvXCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBcIi9sb2NhbC9pbWFnZXMvaGEucG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiBcIioqKipcIixcbiAgICAgICAgICAgIGRpc2FibGVfYW5pbWF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBcImFiYzU2MWNmYWZjZjQxMGE4NmNhMjVhMGQ5NDYwNTMzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkhhc3MuaW9cIixcbiAgICAgICAgICAgIHBpY3R1cmU6IFwiL2xvY2FsL2ltYWdlcy9oYS5wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvZGU6IFwiKioqKlwiLFxuICAgICAgICAgICAgZGlzYWJsZV9hbmltYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaWQ6IFwiMjRkYWQ4ZjljMmQyNGQ1YjhiZmZhYTA2Y2JiYTU1ZmNcIixcbiAgICAgICAgICAgIG5hbWU6IFwiSXNhXCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBcIi9sb2NhbC9pbWFnZXMvaGEucG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiBcIioqKipcIixcbiAgICAgICAgICAgIGRpc2FibGVfYW5pbWF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBcIjM5NDI2YmE3MzI2MDRkNzFhNTE3NmMxZTY5NTcxMGM5XCIsXG4gICAgICAgICAgICBuYW1lOiBcIlN0ZWZhblwiLFxuICAgICAgICAgICAgcGljdHVyZTogXCIvbG9jYWwvaW1hZ2VzL2hhLnBuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29kZTogXCIqKioqXCIsXG4gICAgICAgICAgICBkaXNhYmxlX2FuaW1hdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBpZDogXCI1MmZmM2I5Y2U5YTE0YTliYjNjMzMyMTJiY2ZmZTkzNlwiLFxuICAgICAgICAgICAgbmFtZTogXCJob21lYXNzaXN0YW50XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBcIi9sb2NhbC9pbWFnZXMvaGEucG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiBcIioqKipcIixcbiAgICAgICAgICAgIGRpc2FibGVfYW5pbWF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBcIjQzOTE3OGUyMTNhMzQ4ZmFiZjg3ZjA2ZGE1NDZmYjFkXCIsXG4gICAgICAgICAgICBuYW1lOiBcImRhc2hib2FyZFwiLFxuICAgICAgICAgICAgcGljdHVyZTogXCIvbG9jYWwvaW1hZ2VzL2hhLnBuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29kZTogXCIqKioqXCIsXG4gICAgICAgICAgICBkaXNhYmxlX2FuaW1hdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBpZDogXCI2NTBkNzg1MzI2ZTA0ZThhYmE4ZjQ0OWY0NjljN2QxN1wiLFxuICAgICAgICAgICAgbmFtZTogXCJJc2FiZWxsYVwiLFxuICAgICAgICAgICAgcGljdHVyZTogXCIvbG9jYWwvaW1hZ2VzL2hhLnBuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGhzX2NvbG9yOiBbMCwgMF0sXG4gICAgICAgIGljb25fY29sb3I6IFswLCAwXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImRldmljZV90cmFja2VyLnN0ZWZhbl9pcGhvbmVfN1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiZGV2aWNlX3RyYWNrZXIuc3RlZmFuX2lwaG9uZV83XCIsXG4gICAgICBzdGF0ZTogXCJob21lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHNvdXJjZV90eXBlOiBcImdwc1wiLFxuICAgICAgICBncHNfYWNjdXJhY3k6IDIwLFxuICAgICAgICBiYXR0ZXJ5OiA2NCxcbiAgICAgICAgdmVydGljYWxfYWNjdXJhY3k6IDIuMjUyMjM2Nzg4NTEyMzgwNixcbiAgICAgICAgdGltZXN0YW1wOiBcIjIwMTktMDEtMjBUMTg6Mzc6MDIuMDcyKzAxMDBcIixcbiAgICAgICAgYWx0aXR1ZGU6IDI5LjQ5Mzk2MjMyMzU2MDA2NixcbiAgICAgICAgc3BlZWQ6IC0xLFxuICAgICAgICBjb3Vyc2U6IC0xLFxuICAgICAgICB0cmlnZ2VyOiBcIkJhY2tncm91bmQgRmV0Y2hcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJzdGVmYW4gaXBob25lIDdcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImRldmljZV90cmFja2VyLnN0ZWZhbl9pcGhvbmVfN193aWZpXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJkZXZpY2VfdHJhY2tlci5zdGVmYW5faXBob25lXzdfd2lmaVwiLFxuICAgICAgc3RhdGU6IFwiaG9tZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzb3VyY2VfdHlwZTogXCJyb3V0ZXJcIixcbiAgICAgICAgZ3BzX2FjY3VyYWN5OiAwLFxuICAgICAgICBzY2FubmVyOiBcIk5tYXBEZXZpY2VTY2FubmVyXCIsXG4gICAgICAgIGlwOiBcIjE5Mi4xNjguMS4zNlwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlN0ZWZhbiBpUGhvbmUgd2lmaVwiLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiZGV2aWNlX3RyYWNrZXIuaXNhYmVsbGFzX2lwaG9uZV94XCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJkZXZpY2VfdHJhY2tlci5pc2FiZWxsYXNfaXBob25lX3hcIixcbiAgICAgIHN0YXRlOiBcImhvbWVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc291cmNlX3R5cGU6IFwiZ3BzXCIsXG4gICAgICAgIGdwc19hY2N1cmFjeTogNjUsXG4gICAgICAgIGJhdHRlcnk6IDgzLFxuICAgICAgICBzcGVlZDogLTEsXG4gICAgICAgIGNvdXJzZTogLTEsXG4gICAgICAgIHZlcnRpY2FsX2FjY3VyYWN5OiAxMCxcbiAgICAgICAgYWx0aXR1ZGU6IDI4Ljk5OTk0NjU5NDIzODI4LFxuICAgICAgICB0aW1lc3RhbXA6IFwiMjAxOS0wMS0yMFQxODoyMDozNS4xNjQrMDEwMFwiLFxuICAgICAgICB0cmlnZ2VyOiBcIkJhY2tncm91bmQgRmV0Y2hcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJpc2FiZWxsYXMgaXBob25lIHhcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImRldmljZV90cmFja2VyLmlzYWJlbGxhc19pcGhvbmVfeF93aWZpXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJkZXZpY2VfdHJhY2tlci5pc2FiZWxsYXNfaXBob25lX3hfd2lmaVwiLFxuICAgICAgc3RhdGU6IFwiaG9tZVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzb3VyY2VfdHlwZTogXCJyb3V0ZXJcIixcbiAgICAgICAgZ3BzX2FjY3VyYWN5OiAwLFxuICAgICAgICBzY2FubmVyOiBcIk5tYXBEZXZpY2VTY2FubmVyXCIsXG4gICAgICAgIGlwOiBcIjE5Mi4xNjguMS45MVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIklzYWJlbGxhcyBpUGhvbmUgWCBXaWZpXCIsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmNlbGxwaG9uZS1pcGhvbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInByb3hpbWl0eS5ob21lX2lzYVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwicHJveGltaXR5LmhvbWVfaXNhXCIsXG4gICAgICBzdGF0ZTogXCIwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGRpcl9vZl90cmF2ZWw6IFwic3RhdGlvbmFyeVwiLFxuICAgICAgICBuZWFyZXN0OiBcImlzYWJlbGxhcyBpcGhvbmUgeFwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcImttXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiaG9tZV9pc2FcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInByb3hpbWl0eS5ob21lX3N0ZWZhblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwicHJveGltaXR5LmhvbWVfc3RlZmFuXCIsXG4gICAgICBzdGF0ZTogXCIwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGRpcl9vZl90cmF2ZWw6IFwic3RhdGlvbmFyeVwiLFxuICAgICAgICBuZWFyZXN0OiBcInN0ZWZhbiBpcGhvbmUgN1wiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcImttXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiaG9tZV9zdGVmYW5cIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5wcmVzZW5jZV9pc2FcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wcmVzZW5jZV9pc2FcIixcbiAgICAgIHN0YXRlOiBcIkhvbWVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeTogODMsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSXNhXCIsXG4gICAgICAgIHNvdXJjZV90eXBlOiBcImdwc1wiLFxuICAgICAgICBzcGVlZDogLTEsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucHJlc2VuY2Vfc3RlZmFuXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucHJlc2VuY2Vfc3RlZmFuXCIsXG4gICAgICBzdGF0ZTogXCJIb21lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnk6IDY0LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlN0ZWZhblwiLFxuICAgICAgICBzb3VyY2VfdHlwZTogXCJncHNcIixcbiAgICAgICAgZ3BzX2FjY3VyYWN5OiAyMCxcbiAgICAgICAgc3BlZWQ6IC0xLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQubGl2aW5nX3Jvb21fY2VpbGluZ19saWdodF9sZXZlbFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQubGl2aW5nX3Jvb21fY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYnJpZ2h0bmVzczogNTksXG4gICAgICAgIG5vZGVfaWQ6IDksXG4gICAgICAgIHZhbHVlX2luZGV4OiAwLFxuICAgICAgICB2YWx1ZV9pbnN0YW5jZTogMSxcbiAgICAgICAgdmFsdWVfaWQ6IFwiNzIwNTc1OTQxOTM3Mzk3NzdcIixcbiAgICAgICAgcG93ZXJfY29uc3VtcHRpb246IDIuNyxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJMaXZpbmcgUm9vbSBMaWdodFwiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDMzLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjZWlsaW5nLWxpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IubWFpbGJveFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLm1haWxib3hcIixcbiAgICAgIHN0YXRlOiBcIkVtcHR5XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGljb246IFwibWRpOmRvdHMtaG9yaXpvbnRhbFwiLFxuICAgICAgICBsYXRlc3RfZW1wdGllZDogXCJVbmtub3duXCIsXG4gICAgICAgIGxhdGVzdF9tYWlsOiBcIlVua25vd25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LnVwc3RhaXJzX2hhbGx3YXlfY2VpbGluZ19saWdodF9sZXZlbFwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwibGlnaHQudXBzdGFpcnNfaGFsbHdheV9jZWlsaW5nX2xpZ2h0X2xldmVsXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBicmlnaHRuZXNzOiA0OSxcbiAgICAgICAgbm9kZV9pZDogMTAsXG4gICAgICAgIHZhbHVlX2luZGV4OiAwLFxuICAgICAgICB2YWx1ZV9pbnN0YW5jZTogMSxcbiAgICAgICAgdmFsdWVfaWQ6IFwiNzIwNTc1OTQyMTA1MTY5OTNcIixcbiAgICAgICAgcG93ZXJfY29uc3VtcHRpb246IDIuMixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJVcHN0YWlycyBIYWxsd2F5IExpZ2h0XCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogMzMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOmNlaWxpbmctbGlnaHRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImxpZ2h0LmRpbmluZ19hcmVhX2NlaWxpbmdfbGlnaHRfbGV2ZWxcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LmRpbmluZ19hcmVhX2NlaWxpbmdfbGlnaHRfbGV2ZWxcIixcbiAgICAgIHN0YXRlOiBcIm9mZlwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBub2RlX2lkOiAxMSxcbiAgICAgICAgdmFsdWVfaW5kZXg6IDAsXG4gICAgICAgIHZhbHVlX2luc3RhbmNlOiAxLFxuICAgICAgICB2YWx1ZV9pZDogXCI3MjA1NzU5NDIyNzI5NDIwOVwiLFxuICAgICAgICBwb3dlcl9jb25zdW1wdGlvbjogMCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJEaW5pbmcgUm9vbSBMaWdodFwiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDMzLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjZWlsaW5nLWxpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsaWdodC5saXZpbmdfcm9vbV9zcG90bGlnaHRzX2xldmVsXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsaWdodC5saXZpbmdfcm9vbV9zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbm9kZV9pZDogMTIsXG4gICAgICAgIHZhbHVlX2luZGV4OiAwLFxuICAgICAgICB2YWx1ZV9pbnN0YW5jZTogMSxcbiAgICAgICAgdmFsdWVfaWQ6IFwiNzIwNTc1OTQyNDQwNzE0MjVcIixcbiAgICAgICAgcG93ZXJfY29uc3VtcHRpb246IDAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTGl2aW5nIHJvb20gU3BvdGxpZ2h0c1wiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDMzLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTp0cmFjay1saWdodFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQucGFzc2FnZV9jZWlsaW5nX3Nwb3RsaWdodHNfbGV2ZWxcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LnBhc3NhZ2VfY2VpbGluZ19zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBicmlnaHRuZXNzOiA0OSxcbiAgICAgICAgbm9kZV9pZDogMTMsXG4gICAgICAgIHZhbHVlX2luZGV4OiAwLFxuICAgICAgICB2YWx1ZV9pbnN0YW5jZTogMSxcbiAgICAgICAgdmFsdWVfaWQ6IFwiNzIwNTc1OTQyNjA4NDg2NDFcIixcbiAgICAgICAgcG93ZXJfY29uc3VtcHRpb246IDIuNSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQYXNzYWdlIExpZ2h0c1wiLFxuICAgICAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IDMzLFxuICAgICAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogXCJzdGF0ZS1jYXJkLWN1c3RvbS11aVwiLFxuICAgICAgICBpY29uOiBcIm1kaTp0cmFjay1saWdodFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnBhc3NhZ2VfcGlyX2x1bWluYW5jZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBhc3NhZ2VfcGlyX2x1bWluYW5jZVwiLFxuICAgICAgc3RhdGU6IFwiMy4wXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG5vZGVfaWQ6IDE4LFxuICAgICAgICB2YWx1ZV9pbmRleDogMyxcbiAgICAgICAgdmFsdWVfaW5zdGFuY2U6IDEsXG4gICAgICAgIHZhbHVlX2lkOiBcIjcyMDU3NTk0MzQ0OTE0OTk0XCIsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwibHV4XCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGFzc2FnZSBMdXhcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6dGhlbWUtbGlnaHQtZGFya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnVwc3RhaXJzX2hhbGx3YXlfcGlyX2x1bWluYW5jZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnVwc3RhaXJzX2hhbGx3YXlfcGlyX2x1bWluYW5jZVwiLFxuICAgICAgc3RhdGU6IFwiMy4wXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG5vZGVfaWQ6IDIyLFxuICAgICAgICB2YWx1ZV9pbmRleDogMyxcbiAgICAgICAgdmFsdWVfaW5zdGFuY2U6IDEsXG4gICAgICAgIHZhbHVlX2lkOiBcIjcyMDU3NTk0NDEyMDIzODU4XCIsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwibHV4XCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVXBzdGFpcnMgSGFsbHdheSBMdXhcIixcbiAgICAgICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IFwic3RhdGUtY2FyZC1jdXN0b20tdWlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6dGhlbWUtbGlnaHQtZGFya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwibGlnaHQua2l0Y2hlbl9jZWlsaW5nX3Nwb3RsaWdodHNfbGV2ZWxcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LmtpdGNoZW5fY2VpbGluZ19zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBicmlnaHRuZXNzOiAyNTUsXG4gICAgICAgIG5vZGVfaWQ6IDIzLFxuICAgICAgICB2YWx1ZV9pbmRleDogMCxcbiAgICAgICAgdmFsdWVfaW5zdGFuY2U6IDEsXG4gICAgICAgIHZhbHVlX2lkOiBcIjcyMDU3NTk0NDI4NjIwODAxXCIsXG4gICAgICAgIHBvd2VyX2NvbnN1bXB0aW9uOiAzNy40LFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIktpdGNoZW4gTGlnaHRzXCIsXG4gICAgICAgIHN1cHBvcnRlZF9mZWF0dXJlczogMzMsXG4gICAgICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiBcInN0YXRlLWNhcmQtY3VzdG9tLXVpXCIsXG4gICAgICAgIGljb246IFwibWRpOnRyYWNrLWxpZ2h0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuIiwiaW1wb3J0IHsgRGVtb0NvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZGVtb0xvdmVsYWNlVGVhY2hpbmdiaXJkcyB9IGZyb20gXCIuL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBkZW1vRW50aXRpZXNUZWFjaGluZ2JpcmRzIH0gZnJvbSBcIi4vZW50aXRpZXNcIjtcbmltcG9ydCB7IGRlbW9UaGVtZVRlYWNoaW5nYmlyZHMgfSBmcm9tIFwiLi90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgZGVtb1RlYWNoaW5nYmlyZHM6IERlbW9Db25maWcgPSB7XG4gIGF1dGhvck5hbWU6IFwiSXNhYmVsbGEgR3Jvc3MgQWxzdHLDtm1cIixcbiAgYXV0aG9yVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pc2FiZWxsYWFsc3Ryb20vXCIsXG4gIG5hbWU6IFwiSXNhJ3MgbW9iaWxlIGZyaWVuZGx5IExMXCIsXG4gIGxvdmVsYWNlOiBkZW1vTG92ZWxhY2VUZWFjaGluZ2JpcmRzLFxuICBlbnRpdGllczogZGVtb0VudGl0aWVzVGVhY2hpbmdiaXJkcyxcbiAgdGhlbWU6IGRlbW9UaGVtZVRlYWNoaW5nYmlyZHMsXG59O1xuIiwiaW1wb3J0IHsgRGVtb0NvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVtb0xvdmVsYWNlVGVhY2hpbmdiaXJkczogRGVtb0NvbmZpZ1tcImxvdmVsYWNlXCJdID0gKCkgPT4gKHtcbiAgdGl0bGU6IFwiSG9tZVwiLFxuICB2aWV3czogW1xuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHsgdHlwZTogXCJjdXN0b206aGEtZGVtby1jYXJkXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy90ZWFjaGluZ2JpcmRzL2lzYV9zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICBzaG93X25hbWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwibW9yZS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5wcmVzZW5jZV9pc2FcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9TdGVmYW5fc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVudGl0eVwiLFxuICAgICAgICAgICAgICAgICAgc2hvd19uYW1lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucHJlc2VuY2Vfc3RlZmFuXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvYmFja2dyb3VuZF9zcXVhcmUucG5nXCIsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9yYWRpYXRvcl9vbi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZjogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvcmFkaWF0b3Jfb2ZmLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm1vcmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInN3aXRjaC5zdGVmYW5fcmFkaWF0b3JfM1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci50ZW1wZXJhdHVyZV9zdGVmYW5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9iYWNrZ3JvdW5kX3NxdWFyZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCItLWlyb24taWNvbi13aWR0aFwiOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi0taXJvbi1pY29uLWhlaWdodFwiOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIm5hdmlnYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uX3BhdGg6IFwiL2xvdmVsYWNlL2hvbWVfaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6Y2FyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkFsYXJtXCIsXG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvSG91c2Vfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImFsYXJtX2NvbnRyb2xfcGFuZWwuaG91c2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUm9vbWJhXCIsXG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvcm9vbWJhX3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBcIk5vdCBUb2RheVwiOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9yb29tYmFfYndfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJpbnB1dF9zZWxlY3Qucm9vbWJhX21vZGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBNYWlsOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9tYWlsYm94X3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQYWNrYWdlIGFuZCBtYWlsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvbWFpbGJveF9zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5OiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9tYWlsYm94X2J3X3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgUGFja2FnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvbWFpbGJveF9zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5tYWlsYm94XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzaG93X25hbWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJQdXQgb3V0XCI6IFwiL2Fzc2V0cy90ZWFjaGluZ2JpcmRzL3RyYXNoX3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUYWtlIGluXCI6IFwiL2Fzc2V0cy90ZWFjaGluZ2JpcmRzL3RyYXNoX3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvdHJhc2hfYmVhcl9id19zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnRyYXNoX3N0YXR1c1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbC1zdGFja1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0ZV9pbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBJZGxlOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy93YXNoZXJfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBSdW5uaW5nOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9sYXVuZHJ5X3J1bm5pbmdfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBDbGVhbjogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvbGF1bmRyeV9jbGVhbl8yX3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiaW5wdXRfc2VsZWN0Lndhc2hpbmdfbWFjaGluZV9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIldhc2hlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGVfaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgSWRsZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvZHJ5ZXJfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBSdW5uaW5nOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9jbG90aGVzX2RyeWluZ19zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIENsZWFuOiBcIi9hc3NldHMvdGVhY2hpbmdiaXJkcy9mb2xkZWRfY2xvdGhlc19zcXVhcmUuanBnXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImlucHV0X3NlbGVjdC5kcnllcl9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkRyeWVyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvZ3Vlc3RzX3NxdWFyZS5qcGdcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgIHNob3dfbmFtZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiaW5wdXRfYm9vbGVhbi5ndWVzdF9tb2RlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvY2xlYW5pbmdfc3F1YXJlLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVudGl0eVwiLFxuICAgICAgICAgICAgICAgICAgc2hvd19uYW1lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInRvZ2dsZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJpbnB1dF9ib29sZWFuLmNsZWFuaW5nX2RheVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbC1zdGFja1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGdyYXBoOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2Vuc29yXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnRlbXBlcmF0dXJlX2JlZHJvb21cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGdyYXBoOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2Vuc29yXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlMncyByb29tXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnRlbXBlcmF0dXJlX3N0ZWZhblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbC1zdGFja1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci50ZW1wZXJhdHVyZV9wYXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJMYXVuZHJ5XCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnRlbXBlcmF0dXJlX2Rvd25zdGFpcnNfYmF0aHJvb21cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICBcImxpZ2h0Lm91dGRvb3JfbGlnaHRzXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiWWFyZCBuZXRcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0Lm91dGRvb3JfeWFyZF9saWdodF9uZXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxpZ2h0LmJlZHJvb21fY2VpbGluZ19saWdodFwiLFxuICAgICAgICAgICAgXCJsaWdodC5iZWRzaWRlX2xhbXBcIixcbiAgICAgICAgICAgIFwibGlnaHQuZGluaW5nX2FyZWFfY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgICAgXCJsaWdodC5raXRjaGVuX2NlaWxpbmdfc3BvdGxpZ2h0c19sZXZlbFwiLFxuICAgICAgICAgICAgXCJsaWdodC5mbG9vcmxhbXBfcmVhZGluZ19saWdodFwiLFxuICAgICAgICAgICAgXCJsaWdodC5mbG9vcmxhbXBfdXBsaWdodFwiLFxuICAgICAgICAgICAgXCJsaWdodC5oYWxsd2F5X3dpbmRvd19saWdodFwiLFxuICAgICAgICAgICAgXCJsaWdodC5pc2FfY2VpbGluZ19saWdodFwiLFxuICAgICAgICAgICAgXCJsaWdodC5saXZpbmdfcm9vbV9jZWlsaW5nX2xpZ2h0X2xldmVsXCIsXG4gICAgICAgICAgICBcImxpZ2h0LmxpdmluZ19yb29tX3Nwb3RsaWdodHNfbGV2ZWxcIixcbiAgICAgICAgICAgIFwibGlnaHQucGFzc2FnZV9jZWlsaW5nX3Nwb3RsaWdodHNfbGV2ZWxcIixcbiAgICAgICAgICAgIFwibGlnaHQuc3RhaXJzX2xpZ2h0c19saWdodHNcIixcbiAgICAgICAgICAgIFwibGlnaHQud2Fsa19pbl9jbG9zZXRfbGlnaHRzXCIsXG4gICAgICAgICAgICBcImxpZ2h0LnVwc3RhaXJzX2hhbGx3YXlfY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgICAgXCJsaWdodC5nYXRld2F5X2xpZ2h0XzM0Y2UwMDhiZmM0YlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2hvd19lbXB0eTogZmFsc2UsXG4gICAgICAgICAgdHlwZTogXCJlbnRpdHktZmlsdGVyXCIsXG4gICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgdHlwZTogXCJnbGFuY2VcIixcbiAgICAgICAgICAgIHNob3dfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RhdGVfZmlsdGVyOiBbXCJvblwiXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwic2hvcHBpbmctbGlzdFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInN3aXRjaC5saXZpbmdyb29tX3R2XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiVHZcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJtZGk6dGVsZXZpc2lvbi1jbGFzc2ljXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICBoaWRlX3Bvd2VyOiB0cnVlLFxuICAgICAgICAgICAgLy8gICBncm91cDogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgaWNvbjogXCJtZGk6dGVsZXZpc2lvbi1jbGFzc2ljXCIsXG4gICAgICAgICAgICAvLyAgIGFydHdvcmtfYm9yZGVyOiB0cnVlLFxuICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTptaW5pLW1lZGlhLXBsYXllclwiLFxuICAgICAgICAgICAgLy8gICBlbnRpdHk6IFwibWVkaWFfcGxheWVyLmxpdmluZ3Jvb21fdHZcIixcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzd2l0Y2gubGl2aW5ncm9vbV9tb3ZpZV9zeXN0ZW1cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJNb3ZpZSBzeXN0ZW1cIixcbiAgICAgICAgICAgICAgaWNvbjogXCJtZGk6bW92aWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIGhpZGVfcG93ZXI6IHRydWUsXG4gICAgICAgICAgICAvLyAgIGdyb3VwOiB0cnVlLFxuICAgICAgICAgICAgLy8gICBuYW1lOiBcIk1vdmllIHN5c3RlbVwiLFxuICAgICAgICAgICAgLy8gICBpY29uOiBcIm1kaTptb3ZpZVwiLFxuICAgICAgICAgICAgLy8gICBhcnR3b3JrX2JvcmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206bWluaS1tZWRpYS1wbGF5ZXJcIixcbiAgICAgICAgICAgIC8vICAgZW50aXR5OiBcIm1lZGlhX3BsYXllci5saXZpbmdyb29tX21vdmllX3N5c3RlbVwiLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgaGlkZV9wb3dlcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206bWluaS1tZWRpYS1wbGF5ZXJcIixcbiAgICAgICAgICAgIC8vICAgZW50aXR5OiBcIm1lZGlhX3BsYXllci5zaGllbGRcIixcbiAgICAgICAgICAgIC8vICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgICAvLyAgIGljb246IFwibWRpOmNhc3RcIixcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIGdyb3VwOiB0cnVlLFxuICAgICAgICAgICAgLy8gICBpY29uOiBcIm1kaTpzcGVha2VyLXdpcmVsZXNzXCIsXG4gICAgICAgICAgICAvLyAgIHBvd2VyX2NvbG9yOiB0cnVlLFxuICAgICAgICAgICAgLy8gICBhcnR3b3JrX2JvcmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206bWluaS1tZWRpYS1wbGF5ZXJcIixcbiAgICAgICAgICAgIC8vICAgZW50aXR5OiBcIm1lZGlhX3BsYXllci5zb25vc1wiLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgICAvLyAgIG5hbWU6IFwiQ2hyb21lY2FzdCBCZWRyb29tXCIsXG4gICAgICAgICAgICAvLyAgIGljb246IFwibWRpOmNhc3RcIixcbiAgICAgICAgICAgIC8vICAgYXJ0d29ya19ib3JkZXI6IHRydWUsXG4gICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOm1pbmktbWVkaWEtcGxheWVyXCIsXG4gICAgICAgICAgICAvLyAgIGVudGl0eTogXCJtZWRpYV9wbGF5ZXIuc292cnVtXCIsXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL3RlYWNoaW5nYmlyZHMvcGxhbnRzLnBuZ1wiLFxuICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjclXCIsXG4gICAgICAgICAgICAgICAgXCItLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZVwiOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMiVcIixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWJhZGdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc21hbGxfY2hpbGlfbW9pc3R1cmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjclXCIsXG4gICAgICAgICAgICAgICAgXCItLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZVwiOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMTclXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1iYWRnZVwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmJpZ19jaGlsaV9tb2lzdHVyZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB0b3A6IFwiNyVcIixcbiAgICAgICAgICAgICAgICBcIi0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplXCI6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogXCIzMiVcIixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWJhZGdlXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuaGVyYnNfbW9pc3R1cmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdG9wOiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgIFwiLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemVcIjogXCIxZW1cIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjkyJVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuZ3JlZW5ob3VzZV90ZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwicGljdHVyZS1lbGVtZW50c1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gc2hvd19uYW1lOiBmYWxzZSxcbiAgICAgICAgICAvLyBlbnRpdHk6IFwiY2FtZXJhLnN0b2NraG9sbV9tZXRlb2dyYW1cIixcbiAgICAgICAgICAvLyB0eXBlOiBcInBpY3R1cmUtZW50aXR5XCIsXG4gICAgICAgICAgLy8gc2hvd19zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgdHlwZTogXCJwaWN0dXJlXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy90ZWFjaGluZ2JpcmRzL21ldGVvZ3JhbS5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZ2F1Z2VcIixcbiAgICAgICAgICAgICAgc2V2ZXJpdHk6IHtcbiAgICAgICAgICAgICAgICBncmVlbjogMCxcbiAgICAgICAgICAgICAgICB5ZWxsb3c6IDIsXG4gICAgICAgICAgICAgICAgcmVkOiAzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgIG1heDogNixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRG93bnN0YWlyc1wiLFxuICAgICAgICAgICAgICBtZWFzdXJlbWVudDogXCJ2aXNpdHNcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImNvdW50ZXIubGl0dGVyYm94X2Rvd25zdGFpcnNfdmlzaXRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcImdhdWdlXCIsXG4gICAgICAgICAgICAgIHNldmVyaXR5OiB7XG4gICAgICAgICAgICAgICAgZ3JlZW46IDAsXG4gICAgICAgICAgICAgICAgeWVsbG93OiAyLFxuICAgICAgICAgICAgICAgIHJlZDogMyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICBtYXg6IDYsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlVwc3RhaXJzXCIsXG4gICAgICAgICAgICAgIG1lYXN1cmVtZW50OiBcInZpc2l0c1wiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiY291bnRlci5saXR0ZXJib3hfdXBzdGFpcnNfdmlzaXRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICBpY29uOiBcIm1kaTppbmZvcm1hdGlvbi1vdXRsaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXJkczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNjcmlwdC5haXJfY2xlYW5lcl9xdWlldFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcImVudGl0eS1idXR0b25cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJBQyBiZWRcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eV9pZDogXCJzY3JpcHQuYWlyX2NsZWFuZXJfcXVpZXRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwic2NyaXB0LnR1cm5fb25cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaWNvbjogXCJtZGk6ZmFuLW9mZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNjcmlwdC5haXJfY2xlYW5lcl9hdXRvXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXR5LWJ1dHRvblwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkFDIGJlZFwiLFxuICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiLFxuICAgICAgICAgICAgICAgIHNlcnZpY2VfZGF0YToge1xuICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBcInNjcmlwdC5haXJfY2xlYW5lcl9hdXRvXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInNjcmlwdC50dXJuX29uXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGljb246IFwibWRpOmZhblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNjcmlwdC5haXJfY2xlYW5lcl90dXJib1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcImVudGl0eS1idXR0b25cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJBQyBiZWRcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eV9pZDogXCJzY3JpcHQuYWlyX2NsZWFuZXJfdHVyYm9cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwic2NyaXB0LnR1cm5fb25cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaWNvbjogXCJtZGk6cnVuLWZhc3RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzY3JpcHQuYWNfb2ZmXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXR5LWJ1dHRvblwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkFDXCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IFwic2NyaXB0LmFjX29mZlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VydmljZTogXCJzY3JpcHQudHVybl9vblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpY29uOiBcIm1kaTpmYW4tb2ZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwic2NyaXB0LmFjX29uXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXR5LWJ1dHRvblwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkFDXCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgc2VydmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IFwic2NyaXB0LmFjX29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcInNjcmlwdC50dXJuX29uXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGljb246IFwibWRpOmZhblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci50ZW1wZXJhdHVyZV9iZWRyb29tXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJTJ3Mgcm9vbVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci50ZW1wZXJhdHVyZV9zdGVmYW5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZ3JhcGg6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZW5zb3JcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudGVtcGVyYXR1cmVfcGFzc2FnZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZ3JhcGg6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZW5zb3JcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQmF0aHJvb21cIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IudGVtcGVyYXR1cmVfZG93bnN0YWlyc19iYXRocm9vbVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaG9yaXpvbnRhbC1zdGFja1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci50ZW1wZXJhdHVyZV9zdG9yYWdlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBncmFwaDogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbnNvclwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJSZWZyaWdlcmF0b3JcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucmVmcmlnZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJWYWNhdGlvblwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiaW5wdXRfYm9vbGVhbi52YWNhdGlvbl9tb2RlXCIsXG4gICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidG9nZ2xlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwiaW5wdXRfYm9vbGVhbi5jbGVhbmluZ19kYXlcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJpbnB1dF9ib29sZWFuLmd1ZXN0X21vZGVcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiSXNhIE1vZGVcIixcbiAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZW50aXR5OiBcImlucHV0X2Jvb2xlYW4uaXNhX21vZGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IFwiZ2xhbmNlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgXCJzZW5zb3IucG9sbGVuX2Jqb3JrXCIsXG4gICAgICAgICAgICBcInNlbnNvci5wb2xsZW5fZ3Jhc1wiLFxuICAgICAgICAgICAgXCJzZW5zb3IucG9sbGVuX2dyYWJvXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcImdsYW5jZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGVzOiBbXCJhcm1faG9tZVwiLCBcImFybV9hd2F5XCIsIFwiYXJtX25pZ2h0XCJdLFxuICAgICAgICAgIHR5cGU6IFwiYWxhcm0tcGFuZWxcIixcbiAgICAgICAgICBlbnRpdHk6IFwiYWxhcm1fY29udHJvbF9wYW5lbC5ob3VzZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5mcm9udF9kb29yXCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5iYWNrX2Rvb3JcIixcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnlhcmRfZG9vclwiLFxuICAgICAgICAgICAgICBzZWNvbmRhcnlfaW5mbzogXCJsYXN0LWNoYW5nZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuYmFsY29ueV9kb29yXCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5kaW5pbmdfYXJlYV93aW5kb3dcIixcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLmJlZHJvb21fd2luZG93XCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5wYXNzYWdlX21vdmVtZW50XCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci51cHN0YWlyc19oYWxsd2F5X21vdmVtZW50XCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iuc3RlZmFuc19yb29tX21vdGlvblwiLFxuICAgICAgICAgICAgICBzZWNvbmRhcnlfaW5mbzogXCJsYXN0LWNoYW5nZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucmluZ19mcm9udF9kb29yX2xhc3RfbW90aW9uXCIsXG4gICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaG91cnNfdG9fc2hvdzogNDgsXG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAgXCJzZW5zb3IudGVtcGVyYXR1cmVfYmVkcm9vbVwiLFxuICAgICAgICAgICAgICAgIFwic2Vuc29yLnRlbXBlcmF0dXJlX3Bhc3NhZ2VcIixcbiAgICAgICAgICAgICAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9kb3duc3RhaXJzX2JhdGhyb29tXCIsXG4gICAgICAgICAgICAgICAgXCJzZW5zb3IudGVtcGVyYXR1cmVfc3RlZmFuXCIsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaGlzdG9yeS1ncmFwaFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJUZW1wZXJhdHVyZXMgNDhoXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3Vyc190b19zaG93OiAxNjgsXG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAgXCJzZW5zb3IudGVtcGVyYXR1cmVfYmVkcm9vbVwiLFxuICAgICAgICAgICAgICAgIFwic2Vuc29yLnRlbXBlcmF0dXJlX3Bhc3NhZ2VcIixcbiAgICAgICAgICAgICAgICBcInNlbnNvci50ZW1wZXJhdHVyZV9kb3duc3RhaXJzX2JhdGhyb29tXCIsXG4gICAgICAgICAgICAgICAgXCJzZW5zb3IudGVtcGVyYXR1cmVfc3RlZmFuXCIsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiaGlzdG9yeS1ncmFwaFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJUZW1wZXJhdHVyZXMgNyBEYXlzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBob3Vyc190b19zaG93OiAyNCxcbiAgICAgICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgICAgICBcInNlbnNvci5wYXNzYWdlX3Bpcl9sdW1pbmFuY2VcIixcbiAgICAgICAgICAgICAgICBcInNlbnNvci51cHN0YWlyc19oYWxsd2F5X3Bpcl9sdW1pbmFuY2VcIixcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJoaXN0b3J5LWdyYXBoXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkxpZ2h0IDI0IEhvdXJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHRpdGxlOiBcIkhvbWUgaW5mb1wiLFxuICAgICAgcGF0aDogXCJob21lX2luZm9cIixcbiAgICAgIGljb246IFwibWRpOmhvbWUtaGVhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzY2VuZS5tb3JuaW5nX2xpZ2h0c1wiLFxuICAgICAgICAgICAgICAgICAgdGFwX2FjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwic2NyaXB0Lmdvb2RuaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW50aXR5LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6d2VhdGhlci1uaWdodFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNjZW5lLm1vcm5pbmdfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBcInNjZW5lLm1vcm5pbmdfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwic2NlbmUudHVybl9vblwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW50aXR5LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6Y29mZmVlLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzY2VuZS5tb3ZpZV90aW1lXCIsXG4gICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBcInNjZW5lLm1vdmllX3RpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZTogXCJzY2VuZS50dXJuX29uXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbnRpdHktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1kaTp0ZWxldmlzaW9uLWNsYXNzaWNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJGcm9udFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206c2xpZGVyLWVudGl0eS1yb3dcIixcbiAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiV2FsbFwiLFxuICAgICAgICAgICAgICAgIC8vICAgZW50aXR5OiBcImxpZ2h0Lm91dGRvb3JfZnJvbnRfbGlnaHRcIixcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hhaW4gbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQub3V0ZG9vcl9mcm9udF9oYW5naW5nX2xpZ2h0c1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJZYXJkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICB0b2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpzbGlkZXItZW50aXR5LXJvd1wiLFxuICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJXYWxsXCIsXG4gICAgICAgICAgICAgICAgLy8gICBlbnRpdHk6IFwibGlnaHQub3V0ZG9vcl95YXJkX2xpZ2h0XCIsXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkNoYWluIGxpZ2h0c1wiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0Lm91dGRvb3JfaGFuZ2luZ19saWdodHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlnaHQgbmV0XCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQub3V0ZG9vcl95YXJkX2xpZ2h0X25ldFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiT3V0ZG9vclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LmRvd25zdGFpcnNfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICB0YXBfYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBcImxpZ2h0LmRvd25zdGFpcnNfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwibGlnaHQudG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbnRpdHktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1kaTpwYWdlLWxheW91dC1mb290ZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJsaWdodC51cHN0YWlyc19saWdodHNcIixcbiAgICAgICAgICAgICAgICAgIHRhcF9hY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImNhbGwtc2VydmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlX2RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IFwibGlnaHQudXBzdGFpcnNfbGlnaHRzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwibGlnaHQudG9nZ2xlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbnRpdHktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1kaTpwYWdlLWxheW91dC1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJLaXRjaGVuXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQua2l0Y2hlbl9jZWlsaW5nX3Nwb3RsaWdodHNfbGV2ZWxcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGhpZGVfd2hlbl9vZmY6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0b2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpzbGlkZXItZW50aXR5LXJvd1wiLFxuICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJEaW5pbmcgYXJlYVwiLFxuICAgICAgICAgICAgICAgIC8vICAgZW50aXR5OiBcImxpZ2h0LmRpbmluZ19hcmVhX2NlaWxpbmdfbGlnaHRfbGV2ZWxcIixcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGhpZGVfd2hlbl9vZmY6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0b2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpzbGlkZXItZW50aXR5LXJvd1wiLFxuICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJGbG9vcmxhbXBcIixcbiAgICAgICAgICAgICAgICAvLyAgIGVudGl0eTogXCJsaWdodC5mbG9vcmxhbXBfdXBsaWdodFwiLFxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgICAgICAgICAgLy8gICBuYW1lOiBcIkZsb29ybGFtcCByZWFkaW5nXCIsXG4gICAgICAgICAgICAgICAgLy8gICBlbnRpdHk6IFwibGlnaHQuZmxvb3JsYW1wX3JlYWRpbmdfbGlnaHRcIixcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGhpZGVfd2hlbl9vZmY6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0b2dnbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpzbGlkZXItZW50aXR5LXJvd1wiLFxuICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJMaXZpbmdyb29tXCIsXG4gICAgICAgICAgICAgICAgLy8gICBlbnRpdHk6IFwibGlnaHQubGl2aW5nX3Jvb21fY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgICAgICAgICAgLy8gICBuYW1lOiBcIkxpdmluZ3Jvb20gc3BvdHNcIixcbiAgICAgICAgICAgICAgICAvLyAgIGVudGl0eTogXCJsaWdodC5saXZpbmdfcm9vbV9zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBoaWRlX3doZW5fb2ZmOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206c2xpZGVyLWVudGl0eS1yb3dcIixcbiAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiUGFzc2FnZVwiLFxuICAgICAgICAgICAgICAgIC8vICAgZW50aXR5OiBcImxpZ2h0LnBhc3NhZ2VfY2VpbGluZ19zcG90bGlnaHRzX2xldmVsXCIsXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBoaWRlX3doZW5fb2ZmOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206c2xpZGVyLWVudGl0eS1yb3dcIixcbiAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiSGFsbHdheSB3aW5kb3dcIixcbiAgICAgICAgICAgICAgICAvLyAgIGVudGl0eTogXCJsaWdodC5oYWxsd2F5X3dpbmRvd19saWdodFwiLFxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgICAgICAgICAgLy8gICBuYW1lOiBcIlN0YWlyc1wiLFxuICAgICAgICAgICAgICAgIC8vICAgZW50aXR5OiBcImxpZ2h0LnN0YWlyc19saWdodHNcIixcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgICAgICB0eXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkRvd25zdGFpcnNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBjYXJkczogW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICBlbnRpdGllczogW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgIGhpZGVfd2hlbl9vZmY6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgICB0b2dnbGU6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgICB0eXBlOiBcImN1c3RvbTpzbGlkZXItZW50aXR5LXJvd1wiLFxuICAgICAgICAvLyAgICAgICAgICAgbmFtZTogXCJCZWRzaWRlXCIsXG4gICAgICAgIC8vICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQuYmVkc2lkZV9sYW1wXCIsXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICBoaWRlX3doZW5fb2ZmOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgdHlwZTogXCJjdXN0b206c2xpZGVyLWVudGl0eS1yb3dcIixcbiAgICAgICAgLy8gICAgICAgICAgIG5hbWU6IFwiQmVkcm9vbVwiLFxuICAgICAgICAvLyAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LmJlZHJvb21fY2VpbGluZ19saWdodFwiLFxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgIC8vICAgICAgICAgICBuYW1lOiBcIklzYVwiLFxuICAgICAgICAvLyAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LmlzYV9jZWlsaW5nX2xpZ2h0XCIsXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICBoaWRlX3doZW5fb2ZmOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgdHlwZTogXCJjdXN0b206c2xpZGVyLWVudGl0eS1yb3dcIixcbiAgICAgICAgLy8gICAgICAgICAgIG5hbWU6IFwiVXBzdGFpcnMgaGFsbHdheVwiLFxuICAgICAgICAvLyAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LnVwc3RhaXJzX2hhbGx3YXlfY2VpbGluZ19saWdodF9sZXZlbFwiLFxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgIC8vICAgICAgICAgICBuYW1lOiBcIk5pZ2h0bGlnaHRcIixcbiAgICAgICAgLy8gICAgICAgICAgIGVudGl0eTogXCJsaWdodC5nYXRld2F5X2xpZ2h0XzM0Y2UwMDhiZmM0YlwiLFxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgaGlkZV93aGVuX29mZjogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgIC8vICAgICAgICAgICBuYW1lOiBcIldhbGsgaW4gY2xvc2V0XCIsXG4gICAgICAgIC8vICAgICAgICAgICBlbnRpdHk6IFwibGlnaHQud2Fsa19pbl9jbG9zZXRfbGlnaHRzXCIsXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICBoaWRlX3doZW5fb2ZmOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgICAgdG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlci1lbnRpdHktcm93XCIsXG4gICAgICAgIC8vICAgICAgICAgICBuYW1lOiBcIlN0ZWZhblwiLFxuICAgICAgICAvLyAgICAgICAgICAgZW50aXR5OiBcImxpZ2h0LnN0ZWZhbl9saWdodHN0cmlwXCIsXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgXSxcbiAgICAgICAgLy8gICAgICAgc2hvd19oZWFkZXJfdG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAvLyAgICAgICB0aXRsZTogXCJVcHN0YWlyc1wiLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBwYXRoOiBcImxpZ2h0c1wiLFxuICAgICAgdGl0bGU6IFwiTGlnaHRzXCIsXG4gICAgICBpY29uOiBcIm1kaTpsaWdodGJ1bGItb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2F1Z2VcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucHJvY2Vzc29yX3VzZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJnYXVnZVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5kaXNrX3VzZV9wZXJjZW50X1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJnYXVnZVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5tZW1vcnlfdXNlX3BlcmNlbnRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXCJzZW5zb3IubGFzdF9ib290XCJdLFxuICAgICAgICAgICAgICB0eXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgICAgICBcInNlbnNvci5zeXN0ZW1fcHJpbnRlclwiLFxuICAgICAgICAgICAgICAgIFwic2Vuc29yLnN5c3RlbV9uYXNcIixcbiAgICAgICAgICAgICAgICBcInNlbnNvci5zeXN0ZW1faXBhZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU2FubmNlXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9pcF9jYW1lcmFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX2RhZmFuZ1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJEYWZhbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibWRpOndlYmNhbVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJUiBIYWxsd2F5XCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9pcl9ibGFzdGVyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIklSIEJlZHJvb21cIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX2lyX2JsYXN0ZXJfYmVkcm9vbVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJUiBMaXZpbmdyb29tXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9pcl9ibGFzdGVyX2xpdmluZ19yb29tXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInNlbnNvci5zeXN0ZW1fbWlsaWdodF9odWJcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlhpYW9taVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1feGlhb21pX2dhdGV3YXlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic2Vuc29yLnN5c3RlbV9yaW5nX2Rvb3JiZWxsXCIsXG4gICAgICAgICAgICAgICAgXCJzZW5zb3Iuc3lzdGVtX3JpbmdfY2hpbWVfcHJvXCIsXG4gICAgICAgICAgICAgICAgXCJzZW5zb3Iuc3lzdGVtX3JpbmdfY2hpbWVcIixcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJnbGFuY2VcIixcbiAgICAgICAgICAgICAgY29sdW1uczogNSxcbiAgICAgICAgICAgICAgc2hvd19zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSXNhXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9pc2FfY29tcHV0ZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSXNhIHdvcmsgbGFwdG9wXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9pc2FfZGVsbF94cHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSXNhIGxhcHRvcFwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1faXNhX2xhcHRvcFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdGVmYW5cIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX3N0ZWZhbl9jb21wdXRlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdGVmYW4gd29yayBsYXB0b3BcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX3N0ZWZhbl9sYXB0b3BcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImdsYW5jZVwiLFxuICAgICAgICAgICAgICBjb2x1bW5zOiAzLFxuICAgICAgICAgICAgICBzaG93X3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJUVlwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1fc2Ftc3VuZzY1XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk1vdmllIFN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1fbW92aWVfc3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlNoaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1fc2hpZWxkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9zb25vc1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJTb25vc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6c3BlYWtlci13aXJlbGVzc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJCZWQgVFZcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX3NhbXN1bmc0OVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJCZWQgQ0NcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX2Nocm9tZWNhc3RfYmVkcm9vbVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiZ2xhbmNlXCIsXG4gICAgICAgICAgICAgIGNvbHVtbnM6IDMsXG4gICAgICAgICAgICAgIHNob3dfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHR5cGU6IFwidmVydGljYWwtc3RhY2tcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJBc3VzXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9hc3VzX3JvdXRlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJOZXRnZWFyXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN5c3RlbV9uZXRnZWFyX3JvdXRlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJQaW5nXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnNwZWVkdGVzdF9waW5nXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkRvd25sb2FkXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnNwZWVkdGVzdF9kb3dubG9hZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJVcGxvYWRcIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3BlZWR0ZXN0X3VwbG9hZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiZ2xhbmNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgIFwic2Vuc29yLnNwZWVkdGVzdF9kb3dubG9hZFwiLFxuICAgICAgICAgICAgICAgIFwic2Vuc29yLnNwZWVkdGVzdF9waW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzZW5zb3Iuc3BlZWR0ZXN0X3VwbG9hZFwiLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB0eXBlOiBcImhpc3RvcnktZ3JhcGhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJIYXNzIFJQaVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1faGFzc19ycGlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRGFzaGJvYXJkIFJQaVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5zeXN0ZW1fbWFnaWNfbWlycm9yX3JwaVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJzdcIiBEYXNoYm9hcmQgUlBpJyxcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX2Rhc2hib2FyZF9ycGlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUlBpIFplcm9cIixcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3Iuc3lzdGVtX3JwaV96ZXJvXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJnbGFuY2VcIixcbiAgICAgICAgICAgICAgY29sdW1uczogNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucHJlc2VuY2VfaXNhXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1kaTptYXAtbWFya2VyLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJc2EgcHJlc2VuY2VcIixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcImRldmljZV90cmFja2VyLmlzYWJlbGxhc19pcGhvbmVfeFwiLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIklzYSBpb3NcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibWRpOmFwcGxlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiZGV2aWNlX3RyYWNrZXIuaXNhYmVsbGFzX2lwaG9uZV94X3dpZmlcIixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJc2EgV2lmaVwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6d2lmaVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5pc2FiZWxsYXNfaXBob25lX3hfYnRcIixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJc2EgYnRcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibWRpOmJsdWV0b290aFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJQcm94aW1pdHkgdG8gaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInByb3hpbWl0eS5ob21lX2lzYVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5wcmVzZW5jZV9zdGVmYW5cIixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdGVmYW4gcHJlc2VuY2VcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwibWRpOm1hcC1tYXJrZXItY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiZGV2aWNlX3RyYWNrZXIuc3RlZmFuX2lwaG9uZV83XCIsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfaW5mbzogXCJsYXN0LWNoYW5nZWRcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RlZmFuIGlvc1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6YXBwbGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJkZXZpY2VfdHJhY2tlci5zdGVmYW5faXBob25lXzdfd2lmaVwiLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlN0ZWZhbiBXaWZpXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm1kaTp3aWZpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnN0ZWZhbl9pcGhvbmVfN19idFwiLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlN0ZWZhbiBidFwiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJtZGk6Ymx1ZXRvb3RoXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlByb3hpbWl0eSB0byBob21lXCIsXG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwicHJveGltaXR5LmhvbWVfc3RlZmFuXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnVubG9ja2VkX2J5XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkZyb250IGRvb3IgbGFzdCB1bmxvY2tlZCBieVwiLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X2luZm86IFwibGFzdC1jaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLm1vbml0b3JcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTW9uaXRvciBzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9pbmZvOiBcImxhc3QtY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcGF0aDogXCJpbmZvXCIsXG4gICAgICB0aXRsZTogXCJJbmZvXCIsXG4gICAgICBpY29uOiBcIm1kaTpsYW5cIixcbiAgICB9LFxuICBdLFxufSk7XG4iLCJleHBvcnQgY29uc3QgZGVtb1RoZW1lVGVhY2hpbmdiaXJkcyA9ICgpID0+ICh7XG4gIFwicGFwZXItY2FyZC1oZWFkZXItY29sb3JcIjogXCJ2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpXCIsXG4gIFwicGFwZXItc2xpZGVyLXBpbi1jb2xvclwiOiBcInZhcigtLXByaW1hcnktY29sb3IpXCIsXG4gIFwicGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzIwMjAyMFwiLFxuICBcInBhcGVyLWdyZXktNTBcIjogXCJ2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXCIsXG4gIFwicGFwZXItaXRlbS1pY29uLWNvbG9yXCI6IFwiI2QzZDNkM1wiLFxuICBcImRpdmlkZXItY29sb3JcIjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpXCIsXG4gIFwicHJpbWFyeS1jb2xvclwiOiBcIiMzODk2MzhcIixcbiAgXCJsaWdodC1wcmltYXJ5LWNvbG9yXCI6IFwiIzZmOTU2ZlwiLFxuICBcImxhYmVsLWJhZGdlLXJlZFwiOiBcInZhcigtLXByaW1hcnktY29sb3IpXCIsXG4gIFwicGFwZXItc2xpZGVyLXNlY29uZGFyeS1jb2xvclwiOiBcInZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpXCIsXG4gIFwicGFwZXItc2xpZGVyLWtub2ItY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiLFxuICBcInBhcGVyLWxpc3Rib3gtY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gIFwicGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWJhci1jb2xvclwiOiBcInZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpXCIsXG4gIFwic3dpdGNoLXVuY2hlY2tlZC10cmFjay1jb2xvclwiOiBcInZhcigtLXByaW1hcnktdGV4dC1jb2xvcilcIixcbiAgXCJwYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JcIjogXCIjNGU0ZTRlXCIsXG4gIFwibGFiZWwtYmFkZ2UtdGV4dC1jb2xvclwiOiBcInZhcigtLXRleHQtcHJpbWFyeS1jb2xvcilcIixcbiAgXCJwcmltYXJ5LWJhY2tncm91bmQtY29sb3JcIjogXCIjMzAzMDMwXCIsXG4gIFwic2lkZWJhci1pY29uLWNvbG9yXCI6IFwidmFyKC0tcGFwZXItaXRlbS1pY29uLWNvbG9yKVwiLFxuICBcInBhcGVyLXNsaWRlci1hY3RpdmUtY29sb3JcIjogXCIjZDhiZjUwXCIsXG4gIFwic2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3JcIjogXCIjMmIyYjJiXCIsXG4gIFwicGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiLFxuICBcInBhcGVyLWl0ZW0taWNvbi1hY3RpdmUtY29sb3JcIjogXCIjZDhiZjUwXCIsXG4gIFwic3dpdGNoLWNoZWNrZWQtY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiLFxuICBcInNlY29uZGFyeS10ZXh0LWNvbG9yXCI6IFwiIzM4OTYzOFwiLFxuICBcImRpc2FibGVkLXRleHQtY29sb3JcIjogXCIjNTQ1NDU0XCIsXG4gIFwicGFwZXItaXRlbS1pY29uXy1fY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXCIsXG4gIFwicGFwZXItZ3JleS0yMDBcIjogXCIjMTkxOTE5XCIsXG4gIFwicHJpbWFyeS10ZXh0LWNvbG9yXCI6IFwiI2NmY2ZjZlwiLFxuICBcImxhYmVsLWJhZGdlLWJhY2tncm91bmQtY29sb3JcIjogXCJ2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcilcIixcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBVEE7QUFIQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFkQTtBQUhBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBSEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFIQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWZBO0FBSEE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFWQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQVZBO0FBSEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFWQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFYQTtBQUhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFaQTtBQUhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQVpBO0FBSEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBWkE7QUFIQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFaQTtBQUhBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBWkE7QUFIQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBakNBO0FBaURBO0FBU0E7QUFVQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUF6TkE7QUFIQTtBQStOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBSEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFIQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFIQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFyeURBO0FBREE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUEE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBU0E7QUE1QkE7QUErQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVpBO0FBZUE7QUFsQkE7QUFxQkE7QUF2RUE7QUEwRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUxBO0FBT0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBMUNBO0FBNkNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVBBO0FBVUE7QUEzQ0E7QUE4Q0E7QUFyS0E7QUF3S0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFkQTtBQWlCQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBZEE7QUFuQkE7QUFzQ0E7QUFHQTtBQUNBO0FBRkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUE3QkE7QUFnQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTtBQXJEQTtBQXlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQTdCQTtBQWdDQTtBQUNBO0FBQ0E7QUFoWUE7QUFtWUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFYQTtBQWNBO0FBcEVBO0FBdUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQWRBO0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFkQTtBQWlCQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBZEE7QUFpQkE7QUFuREE7QUFzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUE5QkE7QUFpQ0E7QUFLQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBM0NBO0FBK0NBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFNQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBSUE7QUFDQTtBQVBBO0FBVUE7QUFsQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBL1BBO0FBa1FBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQWFBO0FBcENBO0FBdUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBckNBO0FBd0NBO0FBaEZBO0FBbUZBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQWFBO0FBM0JBO0FBOEJBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUE4REE7QUFDQTtBQUNBO0FBakVBO0FBb0VBO0FBbkdBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBQQTtBQXNQQTtBQUNBO0FBQ0E7QUF6UEE7QUE0UEE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFmQTtBQWtCQTtBQUNBO0FBRkE7QUFLQTtBQXhCQTtBQTJCQTtBQUVBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFyQ0E7QUF3Q0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUF6QkE7QUE0QkE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQTlCQTtBQWlDQTtBQXJHQTtBQXdHQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUF2QkE7QUEwQkE7QUFLQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBcEJBO0FBdUJBO0FBMURBO0FBNkRBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBS0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBS0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFiQTtBQWdCQTtBQXBGQTtBQXVGQTtBQUNBO0FBQ0E7QUF4UkE7QUFqNEJBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=