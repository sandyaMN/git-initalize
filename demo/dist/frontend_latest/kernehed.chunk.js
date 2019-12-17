(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["kernehed"],{

/***/ "./demo/src/configs/kernehed/entities.ts":
/*!***********************************************!*\
  !*** ./demo/src/configs/kernehed/entities.ts ***!
  \***********************************************/
/*! exports provided: demoEntitiesKernehed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoEntitiesKernehed", function() { return demoEntitiesKernehed; });
/* harmony import */ var _src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/fake_data/entity */ "./src/fake_data/entity.ts");

const demoEntitiesKernehed = () => Object(_src_fake_data_entity__WEBPACK_IMPORTED_MODULE_0__["convertEntities"])({
  "zone.anna": {
    entity_id: "zone.anna",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "Anna",
      icon: "mdi:home-variant"
    }
  },
  "zone.peak_hq": {
    entity_id: "zone.peak_hq",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "PEAK HQ",
      icon: "mdi:briefcase"
    }
  },
  "zone.bellas_jobb": {
    entity_id: "zone.bellas_jobb",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "Bellas jobb",
      icon: "mdi:briefcase"
    }
  },
  "zone.geab": {
    entity_id: "zone.geab",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "GEAB",
      icon: "mdi:briefcase"
    }
  },
  "zone.mamma": {
    entity_id: "zone.mamma",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "Mamma",
      icon: "mdi:home-variant"
    }
  },
  "zone.skolan": {
    entity_id: "zone.skolan",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "Skolan",
      icon: "mdi:school"
    }
  },
  "zone.ica_fjallbacken": {
    entity_id: "zone.ica_fjallbacken",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "ICA Fj\u00e4llbacken",
      icon: "mdi:cart"
    }
  },
  "zone.tempo": {
    entity_id: "zone.tempo",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 50,
      friendly_name: "Tempo",
      icon: "mdi:cart"
    }
  },
  "zone.home": {
    entity_id: "zone.home",
    state: "zoning",
    attributes: {
      hidden: true,
      radius: 100,
      friendly_name: "Hem",
      icon: "mdi:home"
    }
  },
  "sensor.total_clients_wireless": {
    entity_id: "sensor.total_clients_wireless",
    state: "18",
    attributes: {
      friendly_name: "Total clients",
      icon: "mdi:account-group"
    }
  },
  "sensor.zwave_battery_front_door": {
    entity_id: "sensor.zwave_battery_front_door",
    state: "63",
    attributes: {
      friendly_name: "Battery",
      icon: "mdi:battery-60"
    }
  },
  "sensor.oskar_devices": {
    entity_id: "sensor.oskar_devices",
    state: "Home",
    attributes: {
      friendly_name: "Oskar",
      entity_picture: "/assets/kernehed/oscar.jpg"
    }
  },
  "sensor.bella_devices": {
    entity_id: "sensor.bella_devices",
    state: "Home",
    attributes: {
      friendly_name: "Bella",
      entity_picture: "/assets/kernehed/bella.jpg"
    }
  },
  "sensor.oskar_bluetooth": {
    entity_id: "sensor.oskar_bluetooth",
    state: "Eve's room",
    attributes: {
      friendly_name: "Oskar",
      entity_picture: "/assets/kernehed/oscar.jpg"
    }
  },
  "sensor.battery_oskar": {
    entity_id: "sensor.battery_oskar",
    state: "73",
    attributes: {
      unit_of_measurement: "%",
      friendly_name: "oskar batteri",
      device_class: "battery"
    }
  },
  "sensor.battery_bella": {
    entity_id: "sensor.battery_bella",
    state: "88",
    attributes: {
      unit_of_measurement: "%",
      friendly_name: "bella batteri",
      device_class: "battery"
    }
  },
  "binary_sensor.unifi_camera": {
    entity_id: "binary_sensor.unifi_camera",
    state: "off",
    attributes: {
      friendly_name: "R\u00f6relsesensor kamera",
      icon: "mdi:walk"
    }
  },
  "sensor.db_size": {
    entity_id: "sensor.db_size",
    state: "435",
    attributes: {
      unit_of_measurement: "MB",
      friendly_name: "DB size",
      icon: "mdi:database"
    }
  },
  "input_select.christmas_pattern": {
    entity_id: "input_select.christmas_pattern",
    state: "None",
    attributes: {
      options: ["None", "Color Waves", "Palette Test", "Pride", "Rainbow", "Rainbow Glitter", "Snow Glitter", "Confetti", "Juggle", "Sinelon", "BPM", "Solid"],
      friendly_name: "Choose pattern:",
      icon: "mdi:snowflake"
    }
  },
  "input_select.christmas_palette": {
    entity_id: "input_select.christmas_palette",
    state: "None",
    attributes: {
      options: ["None", "Rainbow", "Rainbow Stripe", "Cloud", "Lava", "Ocean", "Forest", "Party", "Heat"],
      friendly_name: "Choose palette:",
      icon: "mdi:vanish"
    }
  },
  "binary_sensor.harmony_hub": {
    entity_id: "binary_sensor.harmony_hub",
    state: "on",
    attributes: {
      round_trip_time_avg: "1.971",
      round_trip_time_max: "2.937",
      round_trip_time_mdev: "",
      round_trip_time_min: "1.679",
      friendly_name: "Harmony hub",
      device_class: "connectivity",
      icon: "mdi:remote"
    }
  },
  "switch.rest_julbelysning": {
    entity_id: "switch.rest_julbelysning",
    state: "on",
    attributes: {
      friendly_name: "Julbelysning"
    }
  },
  "binary_sensor.ubiquiti_nvr": {
    entity_id: "binary_sensor.ubiquiti_nvr",
    state: "on",
    attributes: {
      round_trip_time_avg: "18.002",
      round_trip_time_max: "20.714",
      round_trip_time_mdev: "",
      round_trip_time_min: "15.599",
      friendly_name: "NVR",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "binary_sensor.server_1": {
    entity_id: "binary_sensor.server_1",
    state: "on",
    attributes: {
      round_trip_time_avg: "24.237",
      round_trip_time_max: "30.101",
      round_trip_time_mdev: "",
      round_trip_time_min: "18.923",
      friendly_name: "ESXIone server",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "binary_sensor.windows_server": {
    entity_id: "binary_sensor.windows_server",
    state: "on",
    attributes: {
      round_trip_time_avg: "16.386",
      round_trip_time_max: "16.579",
      round_trip_time_mdev: "",
      round_trip_time_min: "16.023",
      friendly_name: "Windows server",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "binary_sensor.ubiquiti_controller": {
    entity_id: "binary_sensor.ubiquiti_controller",
    state: "on",
    attributes: {
      round_trip_time_avg: "18.033",
      round_trip_time_max: "20.503",
      round_trip_time_mdev: "",
      round_trip_time_min: "15.703",
      friendly_name: "Ubiquiti controller",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "binary_sensor.server_2": {
    entity_id: "binary_sensor.server_2",
    state: "on",
    attributes: {
      round_trip_time_avg: "25.306",
      round_trip_time_max: "30.600",
      round_trip_time_mdev: "",
      round_trip_time_min: "21.483",
      friendly_name: "ESXItwo server",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "alarm_control_panel.kernehed_manison": {
    entity_id: "alarm_control_panel.kernehed_manison",
    state: "disarmed",
    attributes: {
      code_format: ".+",
      changed_by: "",
      immediate: [],
      delayed: [],
      ignored: ["binary_sensor.back_door_sensor", "binary_sensor.skafferiet_motion_sensor", "binary_sensor.kallaren_motion_sensor", "binary_sensor.trapp_motion_sensor", "binary_sensor.banksensor", "binary_sensor.front_door_sensor", "binary_sensor.tvattstugan_motion_sensor"],
      allsensors: ["binary_sensor.back_door_sensor", "binary_sensor.skafferiet_motion_sensor", "binary_sensor.kallaren_motion_sensor", "binary_sensor.trapp_motion_sensor", "binary_sensor.banksensor", "binary_sensor.front_door_sensor", "binary_sensor.tvattstugan_motion_sensor"],
      code_to_arm: false,
      panel_locked: false,
      passcode_attempts: -1,
      passcode_attempts_timeout: 900,
      changedbyuser: null,
      panic_mode: "deactivated",
      arm_state: "disarmed",
      enable_perimeter_mode: true,
      enable_persistence: true,
      enable_log: true,
      log_size: 10,
      supported_statuses_on: ["on", "true", "unlocked", "open", "detected", "motion", "motion_detected", "motion detected"],
      supported_statuses_off: ["off", "false", "locked", "closed", "undetected", "no_motion", "standby"],
      updateUI: false,
      bwalarm_version: "1.1.3",
      py_version: [3, 6, 6, "final", 0],
      users: [{
        id: "3e84584273bb45b39597eeca75c61ed3",
        name: "Hass.io",
        enabled: true,
        code: "****",
        picture: "/local/images/ha.png",
        disable_animations: false
      }, {
        id: "559b6d8184d2461cb326a5da9e235222",
        name: "Our Manison",
        enabled: true,
        code: "****",
        picture: "/local/images/ha.png",
        disable_animations: false
      }, {
        id: "7c0447d2ec824aa98b81044ad9ec198f",
        name: "Legacy API password user",
        enabled: false,
        code: "****",
        picture: "/local/images/ha.png",
        disable_animations: false
      }],
      panel: {
        cameras: ["camera.kernehed_entre"],
        enable_sensors_panel: "True",
        camera_update_interval: "",
        panel_title: "Larmet",
        enable_clock: "True",
        enable_camera_panel: "True",
        enable_custom_panel: "False",
        round_buttons: "True",
        shadow_effect: "True",
        enable_serif_font: "True",
        enable_weather: "True"
      },
      logs: [[1547471423.044971, "HA", 0, null], [1547617402.0813534, "HA", 4, null], [1547646348.0161366, "HA", 5, "binary_sensor.front_door_sensor"], [1547646359.6248462, "HA", 0, null], [1547704923.3253074, "HA", 4, null], [1547736026.435811, "HA", 5, "binary_sensor.front_door_sensor"], [1547736043.3628922, "HA", 0, null], [1547736074.0326948, "HA", 0, null], [1547792963.66214, "HA", 4, null], [1547825941.6920404, "HA", 0, null]],
      mqtt: {
        enable_mqtt: false,
        override_code: false,
        command_topic: "home/alarm/set",
        payload_arm_away: "ARM_AWAY",
        payload_arm_home: "ARM_HOME",
        qos: 0,
        payload_disarm: "DISARM",
        pending_on_warning: false,
        state_topic: "home/alarm",
        payload_arm_night: "ARM_NIGHT"
      },
      states: {
        armed_away: {
          immediate: ["binary_sensor.kallaren_motion_sensor", "binary_sensor.trapp_motion_sensor", "binary_sensor.banksensor", "binary_sensor.tvattstugan_motion_sensor", "binary_sensor.skafferiet_motion_sensor"],
          delayed: ["binary_sensor.back_door_sensor", "binary_sensor.front_door_sensor"],
          override: [],
          pending_time: 25,
          warning_time: 25,
          trigger_time: 300
        },
        armed_home: {
          immediate: [],
          delayed: ["binary_sensor.back_door_sensor", "binary_sensor.front_door_sensor"],
          override: [],
          pending_time: 25,
          warning_time: 25,
          trigger_time: 300
        },
        armed_perimeter: {
          immediate: [],
          delayed: ["binary_sensor.back_door_sensor", "binary_sensor.front_door_sensor"],
          override: [],
          pending_time: 25,
          warning_time: 25,
          trigger_time: 600
        }
      },
      friendly_name: "Our Manison"
    }
  },
  "sensor.qbittorrent_down_speed": {
    entity_id: "sensor.qbittorrent_down_speed",
    state: "0.0",
    attributes: {
      unit_of_measurement: "kB/s",
      friendly_name: "Nedladdning",
      icon: "mdi:file-download"
    }
  },
  "sensor.qbittorrent_status": {
    entity_id: "sensor.qbittorrent_status",
    state: "idle",
    attributes: {
      friendly_name: "Status",
      icon: "mdi:resistor"
    }
  },
  "sensor.qbittorrent_up_speed": {
    entity_id: "sensor.qbittorrent_up_speed",
    state: "0.0",
    attributes: {
      unit_of_measurement: "kB/s",
      friendly_name: "Uppladdning",
      icon: "mdi:file-upload"
    }
  },
  "sensor.pi_hole_ads_blocked_today": {
    entity_id: "sensor.pi_hole_ads_blocked_today",
    state: "5952",
    attributes: {
      domains_blocked: 112493,
      unit_of_measurement: "ads",
      friendly_name: "Pi-Hole Ads Blocked Today",
      icon: "mdi:close-octagon-outline"
    }
  },
  "sensor.pi_hole_dns_unique_clients": {
    entity_id: "sensor.pi_hole_dns_unique_clients",
    state: "13",
    attributes: {
      domains_blocked: 112493,
      unit_of_measurement: "clients",
      friendly_name: "Pi-Hole DNS Unique Clients",
      icon: "mdi:account-outline"
    }
  },
  "sensor.pi_hole_dns_queries_today": {
    entity_id: "sensor.pi_hole_dns_queries_today",
    state: "14730",
    attributes: {
      domains_blocked: 112493,
      unit_of_measurement: "queries",
      friendly_name: "Pi-Hole DNS Queries Today",
      icon: "mdi:comment-question-outline"
    }
  },
  "sensor.memory_free": {
    entity_id: "sensor.memory_free",
    state: "514.3",
    attributes: {
      unit_of_measurement: "MiB",
      friendly_name: "Memory free",
      icon: "mdi:memory"
    }
  },
  "sensor.processor_use": {
    entity_id: "sensor.processor_use",
    state: "9",
    attributes: {
      unit_of_measurement: "%",
      friendly_name: "Processor use",
      icon: "mdi:memory"
    }
  },
  "binary_sensor.gaming_pc": {
    entity_id: "binary_sensor.gaming_pc",
    state: "on",
    attributes: {
      round_trip_time_avg: "0.560",
      round_trip_time_max: "0.628",
      round_trip_time_mdev: "",
      round_trip_time_min: "0.477",
      friendly_name: "Oskars dator",
      device_class: "connectivity",
      icon: "mdi:laptop"
    }
  },
  "sensor.speedtest_download": {
    entity_id: "sensor.speedtest_download",
    state: "37.89",
    attributes: {
      attribution: "Data retrieved from Speedtest by Ookla",
      bytes_received: 47690753,
      bytes_sent: 61612032,
      server_country: "Sweden",
      server_id: "21028",
      latency: 32.049,
      server_name: "Kista",
      unit_of_measurement: "Mbit/s",
      friendly_name: "Speedtest Download",
      icon: "mdi:speedometer"
    }
  },
  "sensor.speedtest_upload": {
    entity_id: "sensor.speedtest_upload",
    state: "49.0",
    attributes: {
      attribution: "Data retrieved from Speedtest by Ookla",
      bytes_received: 47690753,
      bytes_sent: 61612032,
      server_country: "Sweden",
      server_id: "21028",
      latency: 32.049,
      server_name: "Kista",
      unit_of_measurement: "Mbit/s",
      friendly_name: "Speedtest Upload",
      icon: "mdi:speedometer"
    }
  },
  "sensor.speedtest_ping": {
    entity_id: "sensor.speedtest_ping",
    state: "32.049",
    attributes: {
      attribution: "Data retrieved from Speedtest by Ookla",
      bytes_received: 47690753,
      bytes_sent: 61612032,
      server_country: "Sweden",
      server_id: "21028",
      latency: 32.049,
      server_name: "Kista",
      unit_of_measurement: "ms",
      friendly_name: "Speedtest Ping",
      icon: "mdi:speedometer"
    }
  },
  "sensor.last_boot": {
    entity_id: "sensor.last_boot",
    state: "2019-01-18T16:49:29+01:00",
    attributes: {
      unit_of_measurement: "",
      friendly_name: "Last boot",
      icon: "mdi:clock",
      device_class: "timestamp"
    }
  },
  "sensor.plex": {
    entity_id: "sensor.plex",
    state: "0",
    attributes: {
      unit_of_measurement: "Watching",
      friendly_name: "Plex",
      icon: "mdi:plex"
    }
  },
  "binary_sensor.teamspeak": {
    entity_id: "binary_sensor.teamspeak",
    state: "on",
    attributes: {
      round_trip_time_avg: "19.842",
      round_trip_time_max: "26.215",
      round_trip_time_mdev: "",
      round_trip_time_min: "15.690",
      friendly_name: "Teamspeak server",
      device_class: "connectivity",
      icon: "mdi:server-network"
    }
  },
  "sensor.disk_free_home": {
    entity_id: "sensor.disk_free_home",
    state: "8.9",
    attributes: {
      unit_of_measurement: "GiB",
      friendly_name: "Disk free /home",
      icon: "mdi:harddisk"
    }
  },
  "weather.smhi_vader": {
    entity_id: "weather.smhi_vader",
    state: "sunny",
    attributes: {
      temperature: -5,
      humidity: 75,
      pressure: 1003,
      wind_bearing: 263,
      wind_speed: 8,
      visibility: 20.6,
      attribution: "Swedish weather institute (SMHI)",
      forecast: [{
        datetime: "2019-01-19T13:00:00+01:00",
        temperature: -2,
        templow: -7,
        precipitation: 0,
        condition: "sunny"
      }, {
        datetime: "2019-01-20T13:00:00+01:00",
        temperature: -7,
        templow: -12,
        precipitation: 0,
        condition: "sunny"
      }, {
        datetime: "2019-01-21T13:00:00+01:00",
        temperature: -12,
        templow: -16,
        precipitation: 0,
        condition: "sunny"
      }, {
        datetime: "2019-01-22T13:00:00+01:00",
        temperature: -5,
        templow: -17,
        precipitation: 2,
        condition: "snowy"
      }, {
        datetime: "2019-01-23T13:00:00+01:00",
        temperature: -5,
        templow: -7,
        precipitation: 2,
        condition: "partlycloudy"
      }, {
        datetime: "2019-01-24T13:00:00+01:00",
        temperature: -7,
        templow: -11,
        precipitation: 2,
        condition: "snowy"
      }, {
        datetime: "2019-01-25T13:00:00+01:00",
        temperature: -10,
        templow: -10,
        precipitation: 0,
        condition: "sunny"
      }, {
        datetime: "2019-01-26T13:00:00+01:00",
        temperature: -12,
        templow: -12,
        precipitation: 0,
        condition: "sunny"
      }, {
        datetime: "2019-01-27T13:00:00+01:00",
        temperature: -4,
        templow: -6,
        precipitation: 0,
        condition: "partlycloudy"
      }],
      cloudiness: 25,
      friendly_name: "V\u00e4der"
    }
  },
  "binary_sensor.ubiquiti_switch": {
    entity_id: "binary_sensor.ubiquiti_switch",
    state: "on",
    attributes: {
      round_trip_time_avg: "0.459",
      round_trip_time_max: "0.535",
      round_trip_time_mdev: "",
      round_trip_time_min: "0.324",
      friendly_name: "Switch",
      device_class: "connectivity",
      icon: "mdi:nas"
    }
  },
  "binary_sensor.entre_kamera": {
    entity_id: "binary_sensor.entre_kamera",
    state: "on",
    attributes: {
      round_trip_time_avg: "0.528",
      round_trip_time_max: "0.626",
      round_trip_time_mdev: "",
      round_trip_time_min: "0.358",
      friendly_name: "Entr\u00e9 kamera",
      device_class: "connectivity",
      icon: "mdi:cctv"
    }
  },
  "sensor.bella_tid_till_hem": {
    entity_id: "sensor.bella_tid_till_hem",
    state: "0",
    attributes: {
      destination_addresses: ["Stockholm, Sweden"],
      origin_addresses: ["Stockholm, Sweden"],
      status: "OK",
      mode: "transit",
      units: "metric",
      duration: "1 min",
      distance: "12 m",
      unit_of_measurement: "min",
      friendly_name: "Antal minuter hem",
      icon: "mdi:timer"
    }
  },
  "sensor.oskar_tid_till_hem": {
    entity_id: "sensor.oskar_tid_till_hem",
    state: "0",
    attributes: {
      destination_addresses: ["Stockholm, Sweden"],
      origin_addresses: ["Stockholm, Sweden"],
      status: "OK",
      mode: "driving",
      units: "metric",
      duration_in_traffic: "1 min",
      duration: "1 min",
      distance: "2 m",
      unit_of_measurement: "min",
      friendly_name: "Antal minuter hem",
      icon: "mdi:timer"
    }
  },
  "lock.polycontrol_danalock_v3_btze_locked": {
    entity_id: "lock.polycontrol_danalock_v3_btze_locked",
    state: "unlocked",
    attributes: {
      node_id: 28,
      value_index: 0,
      value_instance: 1,
      value_id: "72057594513489920",
      friendly_name: "Frontdoor"
    }
  },
  "binary_sensor.front_door_sensor": {
    entity_id: "binary_sensor.front_door_sensor",
    state: "off",
    attributes: {
      battery_level: 100,
      on: true,
      friendly_name: "Frontdoor sensor",
      device_class: "opening",
      icon: "mdi:door"
    }
  },
  "binary_sensor.altan_motion_sensor": {
    entity_id: "binary_sensor.altan_motion_sensor",
    state: "off",
    attributes: {
      battery_level: 34,
      on: true,
      friendly_name: "altan_motion_sensor",
      device_class: "motion"
    }
  },
  "binary_sensor.back_door_sensor": {
    entity_id: "binary_sensor.back_door_sensor",
    state: "off",
    attributes: {
      battery_level: 88,
      on: true,
      friendly_name: "Altand\u00f6rren sensor",
      device_class: "opening",
      icon: "mdi:door"
    }
  },
  "binary_sensor.badrumssensor": {
    entity_id: "binary_sensor.badrumssensor",
    state: "off",
    attributes: {
      battery_level: 74,
      on: true,
      friendly_name: "badrumssensor",
      device_class: "motion"
    }
  },
  "binary_sensor.trapp_motion_sensor": {
    entity_id: "binary_sensor.trapp_motion_sensor",
    state: "off",
    attributes: {
      battery_level: 47,
      on: true,
      dark: true,
      friendly_name: "R\u00f6relsesensor k\u00e4llaren 1",
      device_class: "motion",
      icon: "mdi:walk"
    }
  },
  "binary_sensor.tvattstugan_motion_sensor": {
    entity_id: "binary_sensor.tvattstugan_motion_sensor",
    state: "off",
    attributes: {
      battery_level: 60,
      on: true,
      dark: true,
      friendly_name: "R\u00f6relsesensor tv\u00e4ttstugan",
      device_class: "motion",
      icon: "mdi:walk"
    }
  },
  "binary_sensor.dorrklockan": {
    entity_id: "binary_sensor.dorrklockan",
    state: "on",
    attributes: {
      battery_level: 100,
      on: true,
      friendly_name: "Doorbell",
      device_class: "opening",
      icon: "mdi:bell"
    }
  },
  "binary_sensor.skafferiet_motion_sensor": {
    entity_id: "binary_sensor.skafferiet_motion_sensor",
    state: "off",
    attributes: {
      battery_level: 60,
      on: true,
      friendly_name: "R\u00f6relsesensor skafferiet",
      device_class: "motion",
      icon: "mdi:walk"
    }
  },
  "binary_sensor.kallaren_motion_sensor": {
    entity_id: "binary_sensor.kallaren_motion_sensor",
    state: "off",
    attributes: {
      battery_level: 60,
      on: true,
      dark: true,
      friendly_name: "R\u00f6relsesensor k\u00e4llaren 2",
      device_class: "motion",
      icon: "mdi:walk"
    }
  },
  "binary_sensor.banksensor": {
    entity_id: "binary_sensor.banksensor",
    state: "on",
    attributes: {
      battery_level: 47,
      on: true,
      dark: true,
      friendly_name: "B\u00e4nksensor",
      device_class: "motion"
    }
  }
});

/***/ }),

/***/ "./demo/src/configs/kernehed/index.ts":
/*!********************************************!*\
  !*** ./demo/src/configs/kernehed/index.ts ***!
  \********************************************/
/*! exports provided: demoKernehed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoKernehed", function() { return demoKernehed; });
/* harmony import */ var _lovelace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lovelace */ "./demo/src/configs/kernehed/lovelace.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./demo/src/configs/kernehed/entities.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./demo/src/configs/kernehed/theme.ts");



const demoKernehed = {
  authorName: "Kernehed",
  authorUrl: "https://github.com/kernehed",
  name: "Hem",
  lovelace: _lovelace__WEBPACK_IMPORTED_MODULE_0__["demoLovelaceKernehed"],
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["demoEntitiesKernehed"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["demoThemeKernehed"]
};

/***/ }),

/***/ "./demo/src/configs/kernehed/lovelace.ts":
/*!***********************************************!*\
  !*** ./demo/src/configs/kernehed/lovelace.ts ***!
  \***********************************************/
/*! exports provided: demoLovelaceKernehed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoLovelaceKernehed", function() { return demoLovelaceKernehed; });
const demoLovelaceKernehed = () => ({
  name: "Hem",
  resources: [// {
    //   url: "/local/custom-lovelace/monster-card.js",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/mini-media-player-bundle.js?v=0.9.8",
    //   type: "module",
    // },
    // {
    //   url: "/local/custom-lovelace/slideshow-card.js?=1.1.0",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/fold-entity-row.js?v=3ae2c4",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/swipe-card/swipe-card.js?v=2.0.0",
    //   type: "module",
    // },
    // {
    //   url: "/local/custom-lovelace/upcoming-media-card/upcoming-media-card.js",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/tracker-card.js?v=0.1.5",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/card-tools.js?v=6ce5d0",
    //   type: "js",
    // },
    // {
    //   url: "/local/custom-lovelace/krisinfo.js?=0.0.1",
    //   type: "js",
    // },
  ],
  views: [{
    cards: [{
      type: "custom:ha-demo-card"
    }, {
      cards: [{
        cards: [{
          image: "/assets/kernehed/oscar.jpg",
          elements: [{
            style: {
              color: "white",
              top: "93%",
              left: "20%"
            },
            type: "state-label",
            entity: "sensor.oskar_devices"
          }, {
            style: {
              color: "white",
              top: "93%",
              left: "90%"
            },
            type: "state-label",
            entity: "sensor.battery_oskar"
          }, {
            style: {
              color: "white",
              top: "93%",
              left: "55%"
            },
            type: "state-label",
            entity: "sensor.oskar_tid_till_hem"
          }],
          type: "picture-elements"
        }, {
          image: "/assets/kernehed/bella.jpg",
          elements: [{
            style: {
              color: "white",
              top: "92%",
              left: "20%"
            },
            type: "state-label",
            entity: "sensor.bella_devices"
          }, {
            style: {
              color: "white",
              top: "92%",
              left: "90%"
            },
            type: "state-label",
            entity: "sensor.battery_bella"
          }, {
            style: {
              color: "white",
              top: "92%",
              left: "55%"
            },
            type: "state-label",
            entity: "sensor.bella_tid_till_hem"
          }],
          type: "picture-elements"
        }],
        type: "horizontal-stack"
      }],
      type: "vertical-stack"
    }, {
      entities: ["lock.polycontrol_danalock_v3_btze_locked", "sensor.zwave_battery_front_door", "alarm_control_panel.kernehed_manison", "binary_sensor.dorrklockan"],
      show_header_toggle: false,
      type: "entities",
      title: "Lock"
    }, // {
    //   filter: {
    //     exclude: [
    //       {
    //         state: "not_home",
    //       },
    //     ],
    //     include: [
    //       {
    //         entity_id: "device_tracker.annasiphone",
    //       },
    //       {
    //         entity_id: "device_tracker.iphone_2",
    //       },
    //     ],
    //   },
    //   type: "custom:monster-card",
    //   card: {
    //     show_header_toggle: false,
    //     type: "entities",
    //     title: "G\u00e4ster",
    //   },
    //   show_empty: false,
    // },
    // {
    //   filter: {
    //     exclude: [
    //       {
    //         state: "Inget",
    //       },
    //       {
    //         state: "i.u.",
    //       },
    //     ],
    //     include: [
    //       {
    //         entity_id: "sensor.pollen_al",
    //       },
    //       {
    //         entity_id: "sensor.pollen_alm",
    //       },
    //       {
    //         entity_id: "sensor.pollen_salg_vide",
    //       },
    //       {
    //         entity_id: "sensor.pollen_bjork",
    //       },
    //       {
    //         entity_id: "sensor.pollen_bok",
    //       },
    //       {
    //         entity_id: "sensor.pollen_ek",
    //       },
    //       {
    //         entity_id: "sensor.pollen_grabo",
    //       },
    //       {
    //         entity_id: "sensor.pollen_gras",
    //       },
    //       {
    //         entity_id: "sensor.pollen_hassel",
    //       },
    //     ],
    //   },
    //   type: "custom:monster-card",
    //   card: {
    //     show_header_toggle: false,
    //     type: "entities",
    //     title: "Pollenniv\u00e5er",
    //   },
    //   show_empty: false,
    // },
    {
      cards: [{
        entities: ["switch.rest_julbelysning", "binary_sensor.front_door_sensor", "binary_sensor.unifi_camera", "binary_sensor.back_door_sensor"],
        image: "/assets/kernehed/camera.entre.jpg",
        type: "picture-glance",
        title: "Entrance camera"
      }, {
        entities: ["input_select.christmas_pattern", "input_select.christmas_palette"],
        type: "entities"
      }],
      type: "vertical-stack"
    }, // {
    //   url: "https://embed.windy.com/embed2.html",
    //   type: "iframe",
    // },
    {
      entities: [{
        name: "Laundry sensor",
        entity: "binary_sensor.tvattstugan_motion_sensor"
      }, {
        name: "Pantry sensor",
        entity: "binary_sensor.skafferiet_motion_sensor"
      }, {
        name: "Basement sensor",
        entity: "binary_sensor.kallaren_motion_sensor"
      }, {
        name: "Stair sensor",
        entity: "binary_sensor.trapp_motion_sensor"
      }, {
        name: "Bench sensor",
        entity: "binary_sensor.banksensor"
      }, {
        name: "Porch sensor",
        entity: "binary_sensor.altan_motion_sensor"
      }, {
        name: "Bathroom sensor",
        entity: "binary_sensor.badrumssensor"
      }],
      type: "glance",
      show_state: false
    }, {
      entities: ["sensor.oskar_bluetooth"],
      show_header_toggle: false,
      type: "entities",
      title: "Occupancy"
    }, // {
    //   filter: {
    //     exclude: [
    //       {
    //         state: false,
    //       },
    //     ],
    //     include: [
    //       {
    //         entity_id:
    //           "binary_sensor.fibaro_system_unknown_type0c02_id1003_sensor_2",
    //       },
    //       {
    //         entity_id:
    //           "binary_sensor.fibaro_system_unknown_type0c02_id1003_sensor_3",
    //       },
    //     ],
    //   },
    //   type: "custom:monster-card",
    //   card: {
    //     show_header_toggle: false,
    //     type: "entities",
    //     title: "Brandvarnare",
    //   },
    //   show_empty: false,
    // },
    {
      type: "weather-forecast",
      entity: "weather.smhi_vader"
    } // {
    //   cards: [
    //     {
    //       max: 50,
    //       min: -50,
    //       type: "gauge",
    //       title: "\u00d6verv\u00e5ning",
    //       entity:
    //         "sensor.fibaro_system_unknown_type0c02_id1003_temperature",
    //     },
    //     {
    //       max: 50,
    //       min: -50,
    //       type: "gauge",
    //       title: "Entr\u00e9n",
    //       entity:
    //         "sensor.fibaro_system_unknown_type0c02_id1003_temperature_2",
    //     },
    //     {
    //       max: 50,
    //       min: -50,
    //       type: "gauge",
    //       title: "K\u00e4llaren",
    //       entity:
    //         "sensor.philio_technology_corporation_phpat02beu_multisensor_2in1_temperature",
    //     },
    //   ],
    //   type: "custom:slideshow-card",
    //   arrow_color: "var(--primary-text-color)",
    //   arrow_opacity: 0.7,
    // },
    ],
    title: "Home",
    path: "home",
    icon: "mdi:home"
  }, {
    cards: [{
      entities: ["sensor.processor_use", "sensor.memory_free", "sensor.disk_free_home", "sensor.last_boot", "sensor.db_size"],
      show_header_toggle: false,
      type: "entities",
      title: "System"
    }, {
      entities: [{
        entity: "sensor.pi_hole_dns_queries_today",
        name: "DNS Queries Today"
      }, {
        entity: "sensor.pi_hole_ads_blocked_today",
        name: "Ads Blocked Today"
      }, {
        entity: "sensor.pi_hole_dns_unique_clients",
        name: "DNS Unique Clients"
      }],
      show_header_toggle: false,
      type: "entities",
      title: "Pi-Hole"
    }, {
      entities: ["sensor.plex", "binary_sensor.gaming_pc", "binary_sensor.server_1", "binary_sensor.server_2", "binary_sensor.windows_server", "binary_sensor.teamspeak", "binary_sensor.harmony_hub" // {
      //   style: {
      //     height: "1px",
      //     width: "85%",
      //     "margin-left": "auto",
      //     background: "#62717b",
      //     "margin-right": "auto",
      //   },
      //   type: "divider",
      // },
      // {
      //   items: ["sensor.uptime_router", "sensor.installerad_routeros"],
      //   head: {
      //     entity: "binary_sensor.router",
      //   },
      //   type: "custom:fold-entity-row",
      //   group_config: {
      //     icon: "mdi:router",
      //   },
      // },
      // {
      //   items: [
      //     "sensor.uptime_router_server",
      //     "sensor.installerad_routeros_server",
      //   ],
      //   head: {
      //     entity: "binary_sensor.router_server",
      //   },
      //   type: "custom:fold-entity-row",
      //   group_config: {
      //     icon: "mdi:router",
      //   },
      // },
      ],
      show_header_toggle: false,
      type: "entities",
      title: "Network"
    }, {
      entities: ["binary_sensor.ubiquiti_controller", "binary_sensor.ubiquiti_switch", "binary_sensor.ubiquiti_nvr", "binary_sensor.entre_kamera", // {
      //   items: ["sensor.uptime_ap_1"],
      //   head: {
      //     entity: "binary_sensor.accesspunkt_1",
      //   },
      //   type: "custom:fold-entity-row",
      //   group_config: {
      //     icon: "router-wireless",
      //   },
      // },
      // {
      //   items: ["sensor.uptime_ap_2"],
      //   head: {
      //     entity: "binary_sensor.accesspunkt_2",
      //   },
      //   type: "custom:fold-entity-row",
      //   group_config: {
      //     icon: "router-wireless",
      //   },
      // },
      "sensor.total_clients_wireless"],
      show_header_toggle: false,
      type: "entities",
      title: "Ubiquiti"
    }, {
      entities: ["sensor.qbittorrent_up_speed", "sensor.qbittorrent_down_speed", "sensor.qbittorrent_status"],
      show_header_toggle: false,
      type: "entities",
      title: "Bittorrent"
    }, {
      entities: ["sensor.speedtest_download", "sensor.speedtest_upload", "sensor.speedtest_ping"],
      show_header_toggle: false,
      type: "entities",
      title: "Bandbredd"
    } // {
    //   title: "Updater",
    //   type: "custom:tracker-card",
    //   trackers: [
    //     "sensor.custom_card_tracker",
    //     "sensor.custom_component_tracker",
    //   ],
    // },
    ],
    title: "System & Network",
    path: "system_network",
    icon: "mdi:server-network"
  }]
});

/***/ }),

/***/ "./demo/src/configs/kernehed/theme.ts":
/*!********************************************!*\
  !*** ./demo/src/configs/kernehed/theme.ts ***!
  \********************************************/
/*! exports provided: demoThemeKernehed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoThemeKernehed", function() { return demoThemeKernehed; });
// https://community.home-assistant.io/t/slate-a-new-dark-theme/86410
const demoThemeKernehed = () => ({
  "text-primary-color": "var(--primary-text-color)",
  "paper-item-icon-color": "var(--primary-text-color)",
  "primary-color": "#2980b9",
  "label-badge-red": "var(--accent-color)",
  "paper-tabs-selection-bar-color": "green",
  "paper-slider-knob-color": "var(--accent-color)",
  "primary-text-color": "#FFFFFF",
  "light-primary-color": "var(--accent-color)",
  "primary-background-color": "#222222",
  "sidebar-icon-color": "#777777",
  "paper-item-selected_-_background-color": "#292929",
  "paper-slider-active-color": "var(--accent-color)",
  "secondary-background-color": "#222222",
  "paper-slider-container-color": "linear-gradient(var(--primary-background-color), var(--secondary-background-color)) no-repeat",
  "paper-slider-disabled-active-color": "var(--disabled-text-color)",
  "disabled-text-color": "#777777",
  "paper-item-icon_-_color": "green",
  "paper-grey-200": "#222222",
  "label-badge-background-color": "#222222",
  "paper-card-header-color": "var(--accent-color)",
  "paper-listbox-background-color": "#141414",
  "table-row-background-color": "#292929",
  "paper-grey-50": "var(--primary-text-color)",
  "switch-checked-color": "var(--accent-color)",
  "paper-dialog-background-color": "#292929",
  "secondary-text-color": "#b58e31",
  "google-red-500": "#b58e31",
  "divider-color": "rgba(0, 0, 0, .12)",
  "google-green-500": "#2980b9",
  "switch-unchecked-button-color": "var(--disabled-text-color)",
  "label-badge-border-color": "green",
  "paper-listbox-color": "#777777",
  "paper-slider-disabled-secondary-color": "var(--disabled-text-color)",
  "paper-card-background-color": "#292929",
  "label-badge-text-color": "var(--primary-text-color)",
  "paper-slider-knob-start-color": "var(--accent-color)",
  "switch-unchecked-track-color": "var(--disabled-text-color)",
  "dark-primary-color": "var(--accent-color)",
  "paper-slider-secondary-color": "var(--secondary-background-color)",
  "paper-slider-pin-color": "var(--accent-color)",
  "paper-item-icon-active-color": "#b58e31",
  "accent-color": "#2980b9",
  "table-row-alternative-background-color": "#292929"
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybmVoZWQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL2tlcm5laGVkL2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL2RlbW8vc3JjL2NvbmZpZ3Mva2VybmVoZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9zcmMvY29uZmlncy9rZXJuZWhlZC9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9kZW1vL3NyYy9jb25maWdzL2tlcm5laGVkL3RoZW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvZmFrZV9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IHsgRGVtb0NvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVtb0VudGl0aWVzS2VybmVoZWQ6IERlbW9Db25maWdbXCJlbnRpdGllc1wiXSA9ICgpID0+XG4gIGNvbnZlcnRFbnRpdGllcyh7XG4gICAgXCJ6b25lLmFubmFcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuYW5uYVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJBbm5hXCIsXG4gICAgICAgIGljb246IFwibWRpOmhvbWUtdmFyaWFudFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5wZWFrX2hxXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLnBlYWtfaHFcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUEVBSyBIUVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpicmllZmNhc2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUuYmVsbGFzX2pvYmJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuYmVsbGFzX2pvYmJcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVsbGFzIGpvYmJcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YnJpZWZjYXNlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmdlYWJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUuZ2VhYlwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJHRUFCXCIsXG4gICAgICAgIGljb246IFwibWRpOmJyaWVmY2FzZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5tYW1tYVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5tYW1tYVwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJNYW1tYVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpob21lLXZhcmlhbnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUuc2tvbGFuXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLnNrb2xhblwiLFxuICAgICAgc3RhdGU6IFwiem9uaW5nXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgcmFkaXVzOiA1MCxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTa29sYW5cIixcbiAgICAgICAgaWNvbjogXCJtZGk6c2Nob29sXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ6b25lLmljYV9mamFsbGJhY2tlblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiem9uZS5pY2FfZmphbGxiYWNrZW5cIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiSUNBIEZqXFx1MDBlNGxsYmFja2VuXCIsXG4gICAgICAgIGljb246IFwibWRpOmNhcnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInpvbmUudGVtcG9cIjoge1xuICAgICAgZW50aXR5X2lkOiBcInpvbmUudGVtcG9cIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogNTAsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVGVtcG9cIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2FydFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiem9uZS5ob21lXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJ6b25lLmhvbWVcIixcbiAgICAgIHN0YXRlOiBcInpvbmluZ1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIHJhZGl1czogMTAwLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkhlbVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpob21lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IudG90YWxfY2xpZW50c193aXJlbGVzc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnRvdGFsX2NsaWVudHNfd2lyZWxlc3NcIixcbiAgICAgIHN0YXRlOiBcIjE4XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiVG90YWwgY2xpZW50c1wiLCBpY29uOiBcIm1kaTphY2NvdW50LWdyb3VwXCIgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnp3YXZlX2JhdHRlcnlfZnJvbnRfZG9vclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnp3YXZlX2JhdHRlcnlfZnJvbnRfZG9vclwiLFxuICAgICAgc3RhdGU6IFwiNjNcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJCYXR0ZXJ5XCIsIGljb246IFwibWRpOmJhdHRlcnktNjBcIiB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iub3NrYXJfZGV2aWNlc1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLm9za2FyX2RldmljZXNcIixcbiAgICAgIHN0YXRlOiBcIkhvbWVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJPc2thclwiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogXCIvYXNzZXRzL2tlcm5laGVkL29zY2FyLmpwZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmJlbGxhX2RldmljZXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5iZWxsYV9kZXZpY2VzXCIsXG4gICAgICBzdGF0ZTogXCJIb21lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiQmVsbGFcIixcbiAgICAgICAgZW50aXR5X3BpY3R1cmU6IFwiL2Fzc2V0cy9rZXJuZWhlZC9iZWxsYS5qcGdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5vc2thcl9ibHVldG9vdGhcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5vc2thcl9ibHVldG9vdGhcIixcbiAgICAgIHN0YXRlOiBcIkV2ZSdzIHJvb21cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJPc2thclwiLFxuICAgICAgICBlbnRpdHlfcGljdHVyZTogXCIvYXNzZXRzL2tlcm5laGVkL29zY2FyLmpwZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmJhdHRlcnlfb3NrYXJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5iYXR0ZXJ5X29za2FyXCIsXG4gICAgICBzdGF0ZTogXCI3M1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIiVcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJvc2thciBiYXR0ZXJpXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJiYXR0ZXJ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuYmF0dGVyeV9iZWxsYVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmJhdHRlcnlfYmVsbGFcIixcbiAgICAgIHN0YXRlOiBcIjg4XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiJVwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcImJlbGxhIGJhdHRlcmlcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImJhdHRlcnlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IudW5pZmlfY2FtZXJhXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnVuaWZpX2NhbWVyYVwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUlxcdTAwZjZyZWxzZXNlbnNvciBrYW1lcmFcIixcbiAgICAgICAgaWNvbjogXCJtZGk6d2Fsa1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmRiX3NpemVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5kYl9zaXplXCIsXG4gICAgICBzdGF0ZTogXCI0MzVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJNQlwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRCIHNpemVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6ZGF0YWJhc2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X3NlbGVjdC5jaHJpc3RtYXNfcGF0dGVyblwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfc2VsZWN0LmNocmlzdG1hc19wYXR0ZXJuXCIsXG4gICAgICBzdGF0ZTogXCJOb25lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICBcIk5vbmVcIixcbiAgICAgICAgICBcIkNvbG9yIFdhdmVzXCIsXG4gICAgICAgICAgXCJQYWxldHRlIFRlc3RcIixcbiAgICAgICAgICBcIlByaWRlXCIsXG4gICAgICAgICAgXCJSYWluYm93XCIsXG4gICAgICAgICAgXCJSYWluYm93IEdsaXR0ZXJcIixcbiAgICAgICAgICBcIlNub3cgR2xpdHRlclwiLFxuICAgICAgICAgIFwiQ29uZmV0dGlcIixcbiAgICAgICAgICBcIkp1Z2dsZVwiLFxuICAgICAgICAgIFwiU2luZWxvblwiLFxuICAgICAgICAgIFwiQlBNXCIsXG4gICAgICAgICAgXCJTb2xpZFwiLFxuICAgICAgICBdLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkNob29zZSBwYXR0ZXJuOlwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzbm93Zmxha2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImlucHV0X3NlbGVjdC5jaHJpc3RtYXNfcGFsZXR0ZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiaW5wdXRfc2VsZWN0LmNocmlzdG1hc19wYWxldHRlXCIsXG4gICAgICBzdGF0ZTogXCJOb25lXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICBcIk5vbmVcIixcbiAgICAgICAgICBcIlJhaW5ib3dcIixcbiAgICAgICAgICBcIlJhaW5ib3cgU3RyaXBlXCIsXG4gICAgICAgICAgXCJDbG91ZFwiLFxuICAgICAgICAgIFwiTGF2YVwiLFxuICAgICAgICAgIFwiT2NlYW5cIixcbiAgICAgICAgICBcIkZvcmVzdFwiLFxuICAgICAgICAgIFwiUGFydHlcIixcbiAgICAgICAgICBcIkhlYXRcIixcbiAgICAgICAgXSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJDaG9vc2UgcGFsZXR0ZTpcIixcbiAgICAgICAgaWNvbjogXCJtZGk6dmFuaXNoXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmhhcm1vbnlfaHViXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmhhcm1vbnlfaHViXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByb3VuZF90cmlwX3RpbWVfYXZnOiBcIjEuOTcxXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tYXg6IFwiMi45MzdcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMS42NzlcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJIYXJtb255IGh1YlwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiY29ubmVjdGl2aXR5XCIsXG4gICAgICAgIGljb246IFwibWRpOnJlbW90ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic3dpdGNoLnJlc3RfanVsYmVseXNuaW5nXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzd2l0Y2gucmVzdF9qdWxiZWx5c25pbmdcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7IGZyaWVuZGx5X25hbWU6IFwiSnVsYmVseXNuaW5nXCIgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci51YmlxdWl0aV9udnJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IudWJpcXVpdGlfbnZyXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByb3VuZF90cmlwX3RpbWVfYXZnOiBcIjE4LjAwMlwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWF4OiBcIjIwLjcxNFwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWRldjogXCJcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21pbjogXCIxNS41OTlcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJOVlJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5zZXJ2ZXJfMVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5zZXJ2ZXJfMVwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIyNC4yMzdcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21heDogXCIzMC4xMDFcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMTguOTIzXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRVNYSW9uZSBzZXJ2ZXJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci53aW5kb3dzX3NlcnZlclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci53aW5kb3dzX3NlcnZlclwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIxNi4zODZcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21heDogXCIxNi41NzlcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMTYuMDIzXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiV2luZG93cyBzZXJ2ZXJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci51YmlxdWl0aV9jb250cm9sbGVyXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnViaXF1aXRpX2NvbnRyb2xsZXJcIixcbiAgICAgIHN0YXRlOiBcIm9uXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9hdmc6IFwiMTguMDMzXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tYXg6IFwiMjAuNTAzXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tZGV2OiBcIlwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWluOiBcIjE1LjcwM1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlViaXF1aXRpIGNvbnRyb2xsZXJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5zZXJ2ZXJfMlwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5zZXJ2ZXJfMlwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIyNS4zMDZcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21heDogXCIzMC42MDBcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMjEuNDgzXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRVNYSXR3byBzZXJ2ZXJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYWxhcm1fY29udHJvbF9wYW5lbC5rZXJuZWhlZF9tYW5pc29uXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJhbGFybV9jb250cm9sX3BhbmVsLmtlcm5laGVkX21hbmlzb25cIixcbiAgICAgIHN0YXRlOiBcImRpc2FybWVkXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvZGVfZm9ybWF0OiBcIi4rXCIsXG4gICAgICAgIGNoYW5nZWRfYnk6IFwiXCIsXG4gICAgICAgIGltbWVkaWF0ZTogW10sXG4gICAgICAgIGRlbGF5ZWQ6IFtdLFxuICAgICAgICBpZ25vcmVkOiBbXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmJhY2tfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3Iuc2thZmZlcmlldF9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmthbGxhcmVuX21vdGlvbl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IudHJhcHBfbW90aW9uX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYW5rc2Vuc29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnR2YXR0c3R1Z2FuX21vdGlvbl9zZW5zb3JcIixcbiAgICAgICAgXSxcbiAgICAgICAgYWxsc2Vuc29yczogW1xuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYWNrX2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnNrYWZmZXJpZXRfbW90aW9uX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5rYWxsYXJlbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnRyYXBwX21vdGlvbl9zZW5zb3JcIixcbiAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFua3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yX3NlbnNvclwiLFxuICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci50dmF0dHN0dWdhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGNvZGVfdG9fYXJtOiBmYWxzZSxcbiAgICAgICAgcGFuZWxfbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgcGFzc2NvZGVfYXR0ZW1wdHM6IC0xLFxuICAgICAgICBwYXNzY29kZV9hdHRlbXB0c190aW1lb3V0OiA5MDAsXG4gICAgICAgIGNoYW5nZWRieXVzZXI6IG51bGwsXG4gICAgICAgIHBhbmljX21vZGU6IFwiZGVhY3RpdmF0ZWRcIixcbiAgICAgICAgYXJtX3N0YXRlOiBcImRpc2FybWVkXCIsXG4gICAgICAgIGVuYWJsZV9wZXJpbWV0ZXJfbW9kZTogdHJ1ZSxcbiAgICAgICAgZW5hYmxlX3BlcnNpc3RlbmNlOiB0cnVlLFxuICAgICAgICBlbmFibGVfbG9nOiB0cnVlLFxuICAgICAgICBsb2dfc2l6ZTogMTAsXG4gICAgICAgIHN1cHBvcnRlZF9zdGF0dXNlc19vbjogW1xuICAgICAgICAgIFwib25cIixcbiAgICAgICAgICBcInRydWVcIixcbiAgICAgICAgICBcInVubG9ja2VkXCIsXG4gICAgICAgICAgXCJvcGVuXCIsXG4gICAgICAgICAgXCJkZXRlY3RlZFwiLFxuICAgICAgICAgIFwibW90aW9uXCIsXG4gICAgICAgICAgXCJtb3Rpb25fZGV0ZWN0ZWRcIixcbiAgICAgICAgICBcIm1vdGlvbiBkZXRlY3RlZFwiLFxuICAgICAgICBdLFxuICAgICAgICBzdXBwb3J0ZWRfc3RhdHVzZXNfb2ZmOiBbXG4gICAgICAgICAgXCJvZmZcIixcbiAgICAgICAgICBcImZhbHNlXCIsXG4gICAgICAgICAgXCJsb2NrZWRcIixcbiAgICAgICAgICBcImNsb3NlZFwiLFxuICAgICAgICAgIFwidW5kZXRlY3RlZFwiLFxuICAgICAgICAgIFwibm9fbW90aW9uXCIsXG4gICAgICAgICAgXCJzdGFuZGJ5XCIsXG4gICAgICAgIF0sXG4gICAgICAgIHVwZGF0ZVVJOiBmYWxzZSxcbiAgICAgICAgYndhbGFybV92ZXJzaW9uOiBcIjEuMS4zXCIsXG4gICAgICAgIHB5X3ZlcnNpb246IFszLCA2LCA2LCBcImZpbmFsXCIsIDBdLFxuICAgICAgICB1c2VyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjNlODQ1ODQyNzNiYjQ1YjM5NTk3ZWVjYTc1YzYxZWQzXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkhhc3MuaW9cIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBjb2RlOiBcIioqKipcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IFwiL2xvY2FsL2ltYWdlcy9oYS5wbmdcIixcbiAgICAgICAgICAgIGRpc2FibGVfYW5pbWF0aW9uczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI1NTliNmQ4MTg0ZDI0NjFjYjMyNmE1ZGE5ZTIzNTIyMlwiLFxuICAgICAgICAgICAgbmFtZTogXCJPdXIgTWFuaXNvblwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvZGU6IFwiKioqKlwiLFxuICAgICAgICAgICAgcGljdHVyZTogXCIvbG9jYWwvaW1hZ2VzL2hhLnBuZ1wiLFxuICAgICAgICAgICAgZGlzYWJsZV9hbmltYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjdjMDQ0N2QyZWM4MjRhYTk4YjgxMDQ0YWQ5ZWMxOThmXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkxlZ2FjeSBBUEkgcGFzc3dvcmQgdXNlclwiLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjb2RlOiBcIioqKipcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IFwiL2xvY2FsL2ltYWdlcy9oYS5wbmdcIixcbiAgICAgICAgICAgIGRpc2FibGVfYW5pbWF0aW9uczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFuZWw6IHtcbiAgICAgICAgICBjYW1lcmFzOiBbXCJjYW1lcmEua2VybmVoZWRfZW50cmVcIl0sXG4gICAgICAgICAgZW5hYmxlX3NlbnNvcnNfcGFuZWw6IFwiVHJ1ZVwiLFxuICAgICAgICAgIGNhbWVyYV91cGRhdGVfaW50ZXJ2YWw6IFwiXCIsXG4gICAgICAgICAgcGFuZWxfdGl0bGU6IFwiTGFybWV0XCIsXG4gICAgICAgICAgZW5hYmxlX2Nsb2NrOiBcIlRydWVcIixcbiAgICAgICAgICBlbmFibGVfY2FtZXJhX3BhbmVsOiBcIlRydWVcIixcbiAgICAgICAgICBlbmFibGVfY3VzdG9tX3BhbmVsOiBcIkZhbHNlXCIsXG4gICAgICAgICAgcm91bmRfYnV0dG9uczogXCJUcnVlXCIsXG4gICAgICAgICAgc2hhZG93X2VmZmVjdDogXCJUcnVlXCIsXG4gICAgICAgICAgZW5hYmxlX3NlcmlmX2ZvbnQ6IFwiVHJ1ZVwiLFxuICAgICAgICAgIGVuYWJsZV93ZWF0aGVyOiBcIlRydWVcIixcbiAgICAgICAgfSxcbiAgICAgICAgbG9nczogW1xuICAgICAgICAgIFsxNTQ3NDcxNDIzLjA0NDk3MSwgXCJIQVwiLCAwLCBudWxsXSxcbiAgICAgICAgICBbMTU0NzYxNzQwMi4wODEzNTM0LCBcIkhBXCIsIDQsIG51bGxdLFxuICAgICAgICAgIFsxNTQ3NjQ2MzQ4LjAxNjEzNjYsIFwiSEFcIiwgNSwgXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3Jfc2Vuc29yXCJdLFxuICAgICAgICAgIFsxNTQ3NjQ2MzU5LjYyNDg0NjIsIFwiSEFcIiwgMCwgbnVsbF0sXG4gICAgICAgICAgWzE1NDc3MDQ5MjMuMzI1MzA3NCwgXCJIQVwiLCA0LCBudWxsXSxcbiAgICAgICAgICBbMTU0NzczNjAyNi40MzU4MTEsIFwiSEFcIiwgNSwgXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3Jfc2Vuc29yXCJdLFxuICAgICAgICAgIFsxNTQ3NzM2MDQzLjM2Mjg5MjIsIFwiSEFcIiwgMCwgbnVsbF0sXG4gICAgICAgICAgWzE1NDc3MzYwNzQuMDMyNjk0OCwgXCJIQVwiLCAwLCBudWxsXSxcbiAgICAgICAgICBbMTU0Nzc5Mjk2My42NjIxNCwgXCJIQVwiLCA0LCBudWxsXSxcbiAgICAgICAgICBbMTU0NzgyNTk0MS42OTIwNDA0LCBcIkhBXCIsIDAsIG51bGxdLFxuICAgICAgICBdLFxuICAgICAgICBtcXR0OiB7XG4gICAgICAgICAgZW5hYmxlX21xdHQ6IGZhbHNlLFxuICAgICAgICAgIG92ZXJyaWRlX2NvZGU6IGZhbHNlLFxuICAgICAgICAgIGNvbW1hbmRfdG9waWM6IFwiaG9tZS9hbGFybS9zZXRcIixcbiAgICAgICAgICBwYXlsb2FkX2FybV9hd2F5OiBcIkFSTV9BV0FZXCIsXG4gICAgICAgICAgcGF5bG9hZF9hcm1faG9tZTogXCJBUk1fSE9NRVwiLFxuICAgICAgICAgIHFvczogMCxcbiAgICAgICAgICBwYXlsb2FkX2Rpc2FybTogXCJESVNBUk1cIixcbiAgICAgICAgICBwZW5kaW5nX29uX3dhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgIHN0YXRlX3RvcGljOiBcImhvbWUvYWxhcm1cIixcbiAgICAgICAgICBwYXlsb2FkX2FybV9uaWdodDogXCJBUk1fTklHSFRcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgYXJtZWRfYXdheToge1xuICAgICAgICAgICAgaW1tZWRpYXRlOiBbXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5rYWxsYXJlbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci50cmFwcF9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYW5rc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci50dmF0dHN0dWdhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5za2FmZmVyaWV0X21vdGlvbl9zZW5zb3JcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWxheWVkOiBbXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYWNrX2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yX3NlbnNvclwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG92ZXJyaWRlOiBbXSxcbiAgICAgICAgICAgIHBlbmRpbmdfdGltZTogMjUsXG4gICAgICAgICAgICB3YXJuaW5nX3RpbWU6IDI1LFxuICAgICAgICAgICAgdHJpZ2dlcl90aW1lOiAzMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcm1lZF9ob21lOiB7XG4gICAgICAgICAgICBpbW1lZGlhdGU6IFtdLFxuICAgICAgICAgICAgZGVsYXllZDogW1xuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yX3NlbnNvclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdmVycmlkZTogW10sXG4gICAgICAgICAgICBwZW5kaW5nX3RpbWU6IDI1LFxuICAgICAgICAgICAgd2FybmluZ190aW1lOiAyNSxcbiAgICAgICAgICAgIHRyaWdnZXJfdGltZTogMzAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJtZWRfcGVyaW1ldGVyOiB7XG4gICAgICAgICAgICBpbW1lZGlhdGU6IFtdLFxuICAgICAgICAgICAgZGVsYXllZDogW1xuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yX3NlbnNvclwiLFxuICAgICAgICAgICAgICBcImJpbmFyeV9zZW5zb3IuZnJvbnRfZG9vcl9zZW5zb3JcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdmVycmlkZTogW10sXG4gICAgICAgICAgICBwZW5kaW5nX3RpbWU6IDI1LFxuICAgICAgICAgICAgd2FybmluZ190aW1lOiAyNSxcbiAgICAgICAgICAgIHRyaWdnZXJfdGltZTogNjAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiT3VyIE1hbmlzb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5xYml0dG9ycmVudF9kb3duX3NwZWVkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucWJpdHRvcnJlbnRfZG93bl9zcGVlZFwiLFxuICAgICAgc3RhdGU6IFwiMC4wXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwia0Ivc1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIk5lZGxhZGRuaW5nXCIsXG4gICAgICAgIGljb246IFwibWRpOmZpbGUtZG93bmxvYWRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5xYml0dG9ycmVudF9zdGF0dXNcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5xYml0dG9ycmVudF9zdGF0dXNcIixcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHsgZnJpZW5kbHlfbmFtZTogXCJTdGF0dXNcIiwgaWNvbjogXCJtZGk6cmVzaXN0b3JcIiB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucWJpdHRvcnJlbnRfdXBfc3BlZWRcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5xYml0dG9ycmVudF91cF9zcGVlZFwiLFxuICAgICAgc3RhdGU6IFwiMC4wXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwia0Ivc1wiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlVwcGxhZGRuaW5nXCIsXG4gICAgICAgIGljb246IFwibWRpOmZpbGUtdXBsb2FkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucGlfaG9sZV9hZHNfYmxvY2tlZF90b2RheVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBpX2hvbGVfYWRzX2Jsb2NrZWRfdG9kYXlcIixcbiAgICAgIHN0YXRlOiBcIjU5NTJcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZG9tYWluc19ibG9ja2VkOiAxMTI0OTMsXG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiYWRzXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGktSG9sZSBBZHMgQmxvY2tlZCBUb2RheVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpjbG9zZS1vY3RhZ29uLW91dGxpbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5waV9ob2xlX2Ruc191bmlxdWVfY2xpZW50c1wiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBpX2hvbGVfZG5zX3VuaXF1ZV9jbGllbnRzXCIsXG4gICAgICBzdGF0ZTogXCIxM1wiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBkb21haW5zX2Jsb2NrZWQ6IDExMjQ5MyxcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJjbGllbnRzXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUGktSG9sZSBETlMgVW5pcXVlIENsaWVudHNcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWNjb3VudC1vdXRsaW5lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucGlfaG9sZV9kbnNfcXVlcmllc190b2RheVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBpX2hvbGVfZG5zX3F1ZXJpZXNfdG9kYXlcIixcbiAgICAgIHN0YXRlOiBcIjE0NzMwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGRvbWFpbnNfYmxvY2tlZDogMTEyNDkzLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcInF1ZXJpZXNcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQaS1Ib2xlIEROUyBRdWVyaWVzIFRvZGF5XCIsXG4gICAgICAgIGljb246IFwibWRpOmNvbW1lbnQtcXVlc3Rpb24tb3V0bGluZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLm1lbW9yeV9mcmVlXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IubWVtb3J5X2ZyZWVcIixcbiAgICAgIHN0YXRlOiBcIjUxNC4zXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiTWlCXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiTWVtb3J5IGZyZWVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6bWVtb3J5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IucHJvY2Vzc29yX3VzZVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnByb2Nlc3Nvcl91c2VcIixcbiAgICAgIHN0YXRlOiBcIjlcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCIlXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiUHJvY2Vzc29yIHVzZVwiLFxuICAgICAgICBpY29uOiBcIm1kaTptZW1vcnlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuZ2FtaW5nX3BjXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmdhbWluZ19wY1wiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIwLjU2MFwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWF4OiBcIjAuNjI4XCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tZGV2OiBcIlwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWluOiBcIjAuNDc3XCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiT3NrYXJzIGRhdG9yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJjb25uZWN0aXZpdHlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6bGFwdG9wXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3BlZWR0ZXN0X2Rvd25sb2FkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3BlZWR0ZXN0X2Rvd25sb2FkXCIsXG4gICAgICBzdGF0ZTogXCIzNy44OVwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHJldHJpZXZlZCBmcm9tIFNwZWVkdGVzdCBieSBPb2tsYVwiLFxuICAgICAgICBieXRlc19yZWNlaXZlZDogNDc2OTA3NTMsXG4gICAgICAgIGJ5dGVzX3NlbnQ6IDYxNjEyMDMyLFxuICAgICAgICBzZXJ2ZXJfY291bnRyeTogXCJTd2VkZW5cIixcbiAgICAgICAgc2VydmVyX2lkOiBcIjIxMDI4XCIsXG4gICAgICAgIGxhdGVuY3k6IDMyLjA0OSxcbiAgICAgICAgc2VydmVyX25hbWU6IFwiS2lzdGFcIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJNYml0L3NcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTcGVlZHRlc3QgRG93bmxvYWRcIixcbiAgICAgICAgaWNvbjogXCJtZGk6c3BlZWRvbWV0ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5zcGVlZHRlc3RfdXBsb2FkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iuc3BlZWR0ZXN0X3VwbG9hZFwiLFxuICAgICAgc3RhdGU6IFwiNDkuMFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBhdHRyaWJ1dGlvbjogXCJEYXRhIHJldHJpZXZlZCBmcm9tIFNwZWVkdGVzdCBieSBPb2tsYVwiLFxuICAgICAgICBieXRlc19yZWNlaXZlZDogNDc2OTA3NTMsXG4gICAgICAgIGJ5dGVzX3NlbnQ6IDYxNjEyMDMyLFxuICAgICAgICBzZXJ2ZXJfY291bnRyeTogXCJTd2VkZW5cIixcbiAgICAgICAgc2VydmVyX2lkOiBcIjIxMDI4XCIsXG4gICAgICAgIGxhdGVuY3k6IDMyLjA0OSxcbiAgICAgICAgc2VydmVyX25hbWU6IFwiS2lzdGFcIixcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJNYml0L3NcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTcGVlZHRlc3QgVXBsb2FkXCIsXG4gICAgICAgIGljb246IFwibWRpOnNwZWVkb21ldGVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iuc3BlZWR0ZXN0X3BpbmdcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5zcGVlZHRlc3RfcGluZ1wiLFxuICAgICAgc3RhdGU6IFwiMzIuMDQ5XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiBcIkRhdGEgcmV0cmlldmVkIGZyb20gU3BlZWR0ZXN0IGJ5IE9va2xhXCIsXG4gICAgICAgIGJ5dGVzX3JlY2VpdmVkOiA0NzY5MDc1MyxcbiAgICAgICAgYnl0ZXNfc2VudDogNjE2MTIwMzIsXG4gICAgICAgIHNlcnZlcl9jb3VudHJ5OiBcIlN3ZWRlblwiLFxuICAgICAgICBzZXJ2ZXJfaWQ6IFwiMjEwMjhcIixcbiAgICAgICAgbGF0ZW5jeTogMzIuMDQ5LFxuICAgICAgICBzZXJ2ZXJfbmFtZTogXCJLaXN0YVwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1zXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiU3BlZWR0ZXN0IFBpbmdcIixcbiAgICAgICAgaWNvbjogXCJtZGk6c3BlZWRvbWV0ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcInNlbnNvci5sYXN0X2Jvb3RcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5sYXN0X2Jvb3RcIixcbiAgICAgIHN0YXRlOiBcIjIwMTktMDEtMThUMTY6NDk6MjkrMDE6MDBcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdW5pdF9vZl9tZWFzdXJlbWVudDogXCJcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJMYXN0IGJvb3RcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2xvY2tcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcInRpbWVzdGFtcFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLnBsZXhcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wbGV4XCIsXG4gICAgICBzdGF0ZTogXCIwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiV2F0Y2hpbmdcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJQbGV4XCIsXG4gICAgICAgIGljb246IFwibWRpOnBsZXhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IudGVhbXNwZWFrXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnRlYW1zcGVha1wiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIxOS44NDJcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21heDogXCIyNi4yMTVcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMTUuNjkwXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiVGVhbXNwZWFrIHNlcnZlclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwiY29ubmVjdGl2aXR5XCIsXG4gICAgICAgIGljb246IFwibWRpOnNlcnZlci1uZXR3b3JrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3IuZGlza19mcmVlX2hvbWVcIjoge1xuICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5kaXNrX2ZyZWVfaG9tZVwiLFxuICAgICAgc3RhdGU6IFwiOC45XCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IFwiR2lCXCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRGlzayBmcmVlIC9ob21lXCIsXG4gICAgICAgIGljb246IFwibWRpOmhhcmRkaXNrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJ3ZWF0aGVyLnNtaGlfdmFkZXJcIjoge1xuICAgICAgZW50aXR5X2lkOiBcIndlYXRoZXIuc21oaV92YWRlclwiLFxuICAgICAgc3RhdGU6IFwic3VubnlcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdGVtcGVyYXR1cmU6IC01LFxuICAgICAgICBodW1pZGl0eTogNzUsXG4gICAgICAgIHByZXNzdXJlOiAxMDAzLFxuICAgICAgICB3aW5kX2JlYXJpbmc6IDI2MyxcbiAgICAgICAgd2luZF9zcGVlZDogOCxcbiAgICAgICAgdmlzaWJpbGl0eTogMjAuNixcbiAgICAgICAgYXR0cmlidXRpb246IFwiU3dlZGlzaCB3ZWF0aGVyIGluc3RpdHV0ZSAoU01ISSlcIixcbiAgICAgICAgZm9yZWNhc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRldGltZTogXCIyMDE5LTAxLTE5VDEzOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogLTIsXG4gICAgICAgICAgICB0ZW1wbG93OiAtNyxcbiAgICAgICAgICAgIHByZWNpcGl0YXRpb246IDAsXG4gICAgICAgICAgICBjb25kaXRpb246IFwic3VubnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIjIwMTktMDEtMjBUMTM6MDA6MDArMDE6MDBcIixcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAtNyxcbiAgICAgICAgICAgIHRlbXBsb3c6IC0xMixcbiAgICAgICAgICAgIHByZWNpcGl0YXRpb246IDAsXG4gICAgICAgICAgICBjb25kaXRpb246IFwic3VubnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIjIwMTktMDEtMjFUMTM6MDA6MDArMDE6MDBcIixcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAtMTIsXG4gICAgICAgICAgICB0ZW1wbG93OiAtMTYsXG4gICAgICAgICAgICBwcmVjaXBpdGF0aW9uOiAwLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBcInN1bm55XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRldGltZTogXCIyMDE5LTAxLTIyVDEzOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogLTUsXG4gICAgICAgICAgICB0ZW1wbG93OiAtMTcsXG4gICAgICAgICAgICBwcmVjaXBpdGF0aW9uOiAyLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBcInNub3d5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRldGltZTogXCIyMDE5LTAxLTIzVDEzOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogLTUsXG4gICAgICAgICAgICB0ZW1wbG93OiAtNyxcbiAgICAgICAgICAgIHByZWNpcGl0YXRpb246IDIsXG4gICAgICAgICAgICBjb25kaXRpb246IFwicGFydGx5Y2xvdWR5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRldGltZTogXCIyMDE5LTAxLTI0VDEzOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogLTcsXG4gICAgICAgICAgICB0ZW1wbG93OiAtMTEsXG4gICAgICAgICAgICBwcmVjaXBpdGF0aW9uOiAyLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBcInNub3d5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRldGltZTogXCIyMDE5LTAxLTI1VDEzOjAwOjAwKzAxOjAwXCIsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogLTEwLFxuICAgICAgICAgICAgdGVtcGxvdzogLTEwLFxuICAgICAgICAgICAgcHJlY2lwaXRhdGlvbjogMCxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogXCJzdW5ueVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0ZXRpbWU6IFwiMjAxOS0wMS0yNlQxMzowMDowMCswMTowMFwiLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IC0xMixcbiAgICAgICAgICAgIHRlbXBsb3c6IC0xMixcbiAgICAgICAgICAgIHByZWNpcGl0YXRpb246IDAsXG4gICAgICAgICAgICBjb25kaXRpb246IFwic3VubnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGV0aW1lOiBcIjIwMTktMDEtMjdUMTM6MDA6MDArMDE6MDBcIixcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAtNCxcbiAgICAgICAgICAgIHRlbXBsb3c6IC02LFxuICAgICAgICAgICAgcHJlY2lwaXRhdGlvbjogMCxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogXCJwYXJ0bHljbG91ZHlcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBjbG91ZGluZXNzOiAyNSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJWXFx1MDBlNGRlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci51YmlxdWl0aV9zd2l0Y2hcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IudWJpcXVpdGlfc3dpdGNoXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByb3VuZF90cmlwX3RpbWVfYXZnOiBcIjAuNDU5XCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tYXg6IFwiMC41MzVcIixcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX21kZXY6IFwiXCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9taW46IFwiMC4zMjRcIixcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJTd2l0Y2hcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcImNvbm5lY3Rpdml0eVwiLFxuICAgICAgICBpY29uOiBcIm1kaTpuYXNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuZW50cmVfa2FtZXJhXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmVudHJlX2thbWVyYVwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcm91bmRfdHJpcF90aW1lX2F2ZzogXCIwLjUyOFwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWF4OiBcIjAuNjI2XCIsXG4gICAgICAgIHJvdW5kX3RyaXBfdGltZV9tZGV2OiBcIlwiLFxuICAgICAgICByb3VuZF90cmlwX3RpbWVfbWluOiBcIjAuMzU4XCIsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRW50clxcdTAwZTkga2FtZXJhXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJjb25uZWN0aXZpdHlcIixcbiAgICAgICAgaWNvbjogXCJtZGk6Y2N0dlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwic2Vuc29yLmJlbGxhX3RpZF90aWxsX2hlbVwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLmJlbGxhX3RpZF90aWxsX2hlbVwiLFxuICAgICAgc3RhdGU6IFwiMFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBkZXN0aW5hdGlvbl9hZGRyZXNzZXM6IFtcIlN0b2NraG9sbSwgU3dlZGVuXCJdLFxuICAgICAgICBvcmlnaW5fYWRkcmVzc2VzOiBbXCJTdG9ja2hvbG0sIFN3ZWRlblwiXSxcbiAgICAgICAgc3RhdHVzOiBcIk9LXCIsXG4gICAgICAgIG1vZGU6IFwidHJhbnNpdFwiLFxuICAgICAgICB1bml0czogXCJtZXRyaWNcIixcbiAgICAgICAgZHVyYXRpb246IFwiMSBtaW5cIixcbiAgICAgICAgZGlzdGFuY2U6IFwiMTIgbVwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1pblwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkFudGFsIG1pbnV0ZXIgaGVtXCIsXG4gICAgICAgIGljb246IFwibWRpOnRpbWVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJzZW5zb3Iub3NrYXJfdGlkX3RpbGxfaGVtXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJzZW5zb3Iub3NrYXJfdGlkX3RpbGxfaGVtXCIsXG4gICAgICBzdGF0ZTogXCIwXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGRlc3RpbmF0aW9uX2FkZHJlc3NlczogW1wiU3RvY2tob2xtLCBTd2VkZW5cIl0sXG4gICAgICAgIG9yaWdpbl9hZGRyZXNzZXM6IFtcIlN0b2NraG9sbSwgU3dlZGVuXCJdLFxuICAgICAgICBzdGF0dXM6IFwiT0tcIixcbiAgICAgICAgbW9kZTogXCJkcml2aW5nXCIsXG4gICAgICAgIHVuaXRzOiBcIm1ldHJpY1wiLFxuICAgICAgICBkdXJhdGlvbl9pbl90cmFmZmljOiBcIjEgbWluXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjEgbWluXCIsXG4gICAgICAgIGRpc3RhbmNlOiBcIjIgbVwiLFxuICAgICAgICB1bml0X29mX21lYXN1cmVtZW50OiBcIm1pblwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkFudGFsIG1pbnV0ZXIgaGVtXCIsXG4gICAgICAgIGljb246IFwibWRpOnRpbWVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJsb2NrLnBvbHljb250cm9sX2RhbmFsb2NrX3YzX2J0emVfbG9ja2VkXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJsb2NrLnBvbHljb250cm9sX2RhbmFsb2NrX3YzX2J0emVfbG9ja2VkXCIsXG4gICAgICBzdGF0ZTogXCJ1bmxvY2tlZFwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBub2RlX2lkOiAyOCxcbiAgICAgICAgdmFsdWVfaW5kZXg6IDAsXG4gICAgICAgIHZhbHVlX2luc3RhbmNlOiAxLFxuICAgICAgICB2YWx1ZV9pZDogXCI3MjA1NzU5NDUxMzQ4OTkyMFwiLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkZyb250ZG9vclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yX3NlbnNvclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5mcm9udF9kb29yX3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDEwMCxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIGZyaWVuZGx5X25hbWU6IFwiRnJvbnRkb29yIHNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwib3BlbmluZ1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpkb29yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmFsdGFuX21vdGlvbl9zZW5zb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuYWx0YW5fbW90aW9uX3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDM0LFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJhbHRhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IuYmFja19kb29yX3NlbnNvclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci5iYWNrX2Rvb3Jfc2Vuc29yXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogODgsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkFsdGFuZFxcdTAwZjZycmVuIHNlbnNvclwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwib3BlbmluZ1wiLFxuICAgICAgICBpY29uOiBcIm1kaTpkb29yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmJhZHJ1bXNzZW5zb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuYmFkcnVtc3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDc0LFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJiYWRydW1zc2Vuc29yXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJtb3Rpb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IudHJhcHBfbW90aW9uX3NlbnNvclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci50cmFwcF9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDcsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJcXHUwMGY2cmVsc2VzZW5zb3Iga1xcdTAwZTRsbGFyZW4gMVwiLFxuICAgICAgICBkZXZpY2VfY2xhc3M6IFwibW90aW9uXCIsXG4gICAgICAgIGljb246IFwibWRpOndhbGtcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3IudHZhdHRzdHVnYW5fbW90aW9uX3NlbnNvclwiOiB7XG4gICAgICBlbnRpdHlfaWQ6IFwiYmluYXJ5X3NlbnNvci50dmF0dHN0dWdhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICBzdGF0ZTogXCJvZmZcIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNjAsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIlJcXHUwMGY2cmVsc2VzZW5zb3IgdHZcXHUwMGU0dHRzdHVnYW5cIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YWxrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmRvcnJrbG9ja2FuXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLmRvcnJrbG9ja2FuXCIsXG4gICAgICBzdGF0ZTogXCJvblwiLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBiYXR0ZXJ5X2xldmVsOiAxMDAsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkRvb3JiZWxsXCIsXG4gICAgICAgIGRldmljZV9jbGFzczogXCJvcGVuaW5nXCIsXG4gICAgICAgIGljb246IFwibWRpOmJlbGxcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcImJpbmFyeV9zZW5zb3Iuc2thZmZlcmlldF9tb3Rpb25fc2Vuc29yXCI6IHtcbiAgICAgIGVudGl0eV9pZDogXCJiaW5hcnlfc2Vuc29yLnNrYWZmZXJpZXRfbW90aW9uX3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDYwLFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJSXFx1MDBmNnJlbHNlc2Vuc29yIHNrYWZmZXJpZXRcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YWxrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmthbGxhcmVuX21vdGlvbl9zZW5zb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3Iua2FsbGFyZW5fbW90aW9uX3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib2ZmXCIsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGJhdHRlcnlfbGV2ZWw6IDYwLFxuICAgICAgICBvbjogdHJ1ZSxcbiAgICAgICAgZGFyazogdHJ1ZSxcbiAgICAgICAgZnJpZW5kbHlfbmFtZTogXCJSXFx1MDBmNnJlbHNlc2Vuc29yIGtcXHUwMGU0bGxhcmVuIDJcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgICBpY29uOiBcIm1kaTp3YWxrXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCJiaW5hcnlfc2Vuc29yLmJhbmtzZW5zb3JcIjoge1xuICAgICAgZW50aXR5X2lkOiBcImJpbmFyeV9zZW5zb3IuYmFua3NlbnNvclwiLFxuICAgICAgc3RhdGU6IFwib25cIixcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmF0dGVyeV9sZXZlbDogNDcsXG4gICAgICAgIG9uOiB0cnVlLFxuICAgICAgICBkYXJrOiB0cnVlLFxuICAgICAgICBmcmllbmRseV9uYW1lOiBcIkJcXHUwMGU0bmtzZW5zb3JcIixcbiAgICAgICAgZGV2aWNlX2NsYXNzOiBcIm1vdGlvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiIsImltcG9ydCB7IERlbW9Db25maWcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRlbW9Mb3ZlbGFjZUtlcm5laGVkIH0gZnJvbSBcIi4vbG92ZWxhY2VcIjtcbmltcG9ydCB7IGRlbW9FbnRpdGllc0tlcm5laGVkIH0gZnJvbSBcIi4vZW50aXRpZXNcIjtcbmltcG9ydCB7IGRlbW9UaGVtZUtlcm5laGVkIH0gZnJvbSBcIi4vdGhlbWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlbW9LZXJuZWhlZDogRGVtb0NvbmZpZyA9IHtcbiAgYXV0aG9yTmFtZTogXCJLZXJuZWhlZFwiLFxuICBhdXRob3JVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2tlcm5laGVkXCIsXG4gIG5hbWU6IFwiSGVtXCIsXG4gIGxvdmVsYWNlOiBkZW1vTG92ZWxhY2VLZXJuZWhlZCxcbiAgZW50aXRpZXM6IGRlbW9FbnRpdGllc0tlcm5laGVkLFxuICB0aGVtZTogZGVtb1RoZW1lS2VybmVoZWQsXG59O1xuIiwiaW1wb3J0IHsgRGVtb0NvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVtb0xvdmVsYWNlS2VybmVoZWQ6IERlbW9Db25maWdbXCJsb3ZlbGFjZVwiXSA9ICgpID0+ICh7XG4gIG5hbWU6IFwiSGVtXCIsXG4gIHJlc291cmNlczogW1xuICAgIC8vIHtcbiAgICAvLyAgIHVybDogXCIvbG9jYWwvY3VzdG9tLWxvdmVsYWNlL21vbnN0ZXItY2FyZC5qc1wiLFxuICAgIC8vICAgdHlwZTogXCJqc1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b20tbG92ZWxhY2UvbWluaS1tZWRpYS1wbGF5ZXItYnVuZGxlLmpzP3Y9MC45LjhcIixcbiAgICAvLyAgIHR5cGU6IFwibW9kdWxlXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbS1sb3ZlbGFjZS9zbGlkZXNob3ctY2FyZC5qcz89MS4xLjBcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHVybDogXCIvbG9jYWwvY3VzdG9tLWxvdmVsYWNlL2ZvbGQtZW50aXR5LXJvdy5qcz92PTNhZTJjNFwiLFxuICAgIC8vICAgdHlwZTogXCJqc1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdXJsOiBcIi9sb2NhbC9jdXN0b20tbG92ZWxhY2Uvc3dpcGUtY2FyZC9zd2lwZS1jYXJkLmpzP3Y9Mi4wLjBcIixcbiAgICAvLyAgIHR5cGU6IFwibW9kdWxlXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbS1sb3ZlbGFjZS91cGNvbWluZy1tZWRpYS1jYXJkL3VwY29taW5nLW1lZGlhLWNhcmQuanNcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHVybDogXCIvbG9jYWwvY3VzdG9tLWxvdmVsYWNlL3RyYWNrZXItY2FyZC5qcz92PTAuMS41XCIsXG4gICAgLy8gICB0eXBlOiBcImpzXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbS1sb3ZlbGFjZS9jYXJkLXRvb2xzLmpzP3Y9NmNlNWQwXCIsXG4gICAgLy8gICB0eXBlOiBcImpzXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB1cmw6IFwiL2xvY2FsL2N1c3RvbS1sb3ZlbGFjZS9rcmlzaW5mby5qcz89MC4wLjFcIixcbiAgICAvLyAgIHR5cGU6IFwianNcIixcbiAgICAvLyB9LFxuICBdLFxuICB2aWV3czogW1xuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHsgdHlwZTogXCJjdXN0b206aGEtZGVtby1jYXJkXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNhcmRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9rZXJuZWhlZC9vc2Nhci5qcGdcIixcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5vc2thcl9kZXZpY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiOTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5iYXR0ZXJ5X29za2FyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCI5MyVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0YXRlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5vc2thcl90aWRfdGlsbF9oZW1cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMva2VybmVoZWQvYmVsbGEuanBnXCIsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuYmVsbGFfZGV2aWNlc1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuYmF0dGVyeV9iZWxsYVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiOTIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjU1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGF0ZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IuYmVsbGFfdGlkX3RpbGxfaGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwaWN0dXJlLWVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgdHlwZTogXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwibG9jay5wb2x5Y29udHJvbF9kYW5hbG9ja192M19idHplX2xvY2tlZFwiLFxuICAgICAgICAgICAgXCJzZW5zb3IuendhdmVfYmF0dGVyeV9mcm9udF9kb29yXCIsXG4gICAgICAgICAgICBcImFsYXJtX2NvbnRyb2xfcGFuZWwua2VybmVoZWRfbWFuaXNvblwiLFxuICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmRvcnJrbG9ja2FuXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJMb2NrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBmaWx0ZXI6IHtcbiAgICAgICAgLy8gICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIHN0YXRlOiBcIm5vdF9ob21lXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgICAgaW5jbHVkZTogW1xuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZW50aXR5X2lkOiBcImRldmljZV90cmFja2VyLmFubmFzaXBob25lXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBlbnRpdHlfaWQ6IFwiZGV2aWNlX3RyYWNrZXIuaXBob25lXzJcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgIF0sXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTptb25zdGVyLWNhcmRcIixcbiAgICAgICAgLy8gICBjYXJkOiB7XG4gICAgICAgIC8vICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAvLyAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAvLyAgICAgdGl0bGU6IFwiR1xcdTAwZTRzdGVyXCIsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBzaG93X2VtcHR5OiBmYWxzZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGZpbHRlcjoge1xuICAgICAgICAvLyAgICAgZXhjbHVkZTogW1xuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgc3RhdGU6IFwiSW5nZXRcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIHN0YXRlOiBcImkudS5cIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgIF0sXG4gICAgICAgIC8vICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBvbGxlbl9hbFwiLFxuICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wb2xsZW5fYWxtXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBvbGxlbl9zYWxnX3ZpZGVcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucG9sbGVuX2Jqb3JrXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBvbGxlbl9ib2tcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIGVudGl0eV9pZDogXCJzZW5zb3IucG9sbGVuX2VrXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBlbnRpdHlfaWQ6IFwic2Vuc29yLnBvbGxlbl9ncmFib1wiLFxuICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wb2xsZW5fZ3Jhc1wiLFxuICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZW50aXR5X2lkOiBcInNlbnNvci5wb2xsZW5faGFzc2VsXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206bW9uc3Rlci1jYXJkXCIsXG4gICAgICAgIC8vICAgY2FyZDoge1xuICAgICAgICAvLyAgICAgc2hvd19oZWFkZXJfdG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgLy8gICAgIHRpdGxlOiBcIlBvbGxlbm5pdlxcdTAwZTVlclwiLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgc2hvd19lbXB0eTogZmFsc2UsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgIFwic3dpdGNoLnJlc3RfanVsYmVseXNuaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmZyb250X2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnVuaWZpX2NhbWVyYVwiLFxuICAgICAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5iYWNrX2Rvb3Jfc2Vuc29yXCIsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMva2VybmVoZWQvY2FtZXJhLmVudHJlLmpwZ1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcInBpY3R1cmUtZ2xhbmNlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkVudHJhbmNlIGNhbWVyYVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgICAgICBcImlucHV0X3NlbGVjdC5jaHJpc3RtYXNfcGF0dGVyblwiLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRfc2VsZWN0LmNocmlzdG1hc19wYWxldHRlXCIsXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiBcInZlcnRpY2FsLXN0YWNrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICB1cmw6IFwiaHR0cHM6Ly9lbWJlZC53aW5keS5jb20vZW1iZWQyLmh0bWxcIixcbiAgICAgICAgLy8gICB0eXBlOiBcImlmcmFtZVwiLFxuICAgICAgICAvLyB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJMYXVuZHJ5IHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci50dmF0dHN0dWdhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIlBhbnRyeSBzZW5zb3JcIixcbiAgICAgICAgICAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3Iuc2thZmZlcmlldF9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkJhc2VtZW50IHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5rYWxsYXJlbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIlN0YWlyIHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci50cmFwcF9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkJlbmNoIHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5iYW5rc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIlBvcmNoIHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5hbHRhbl9tb3Rpb25fc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkJhdGhyb29tIHNlbnNvclwiLFxuICAgICAgICAgICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5iYWRydW1zc2Vuc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdHlwZTogXCJnbGFuY2VcIixcbiAgICAgICAgICBzaG93X3N0YXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVudGl0aWVzOiBbXCJzZW5zb3Iub3NrYXJfYmx1ZXRvb3RoXCJdLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHRpdGxlOiBcIk9jY3VwYW5jeVwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgZmlsdGVyOiB7XG4gICAgICAgIC8vICAgICBleGNsdWRlOiBbXG4gICAgICAgIC8vICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICBzdGF0ZTogZmFsc2UsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgICAgaW5jbHVkZTogW1xuICAgICAgICAvLyAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZW50aXR5X2lkOlxuICAgICAgICAvLyAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLmZpYmFyb19zeXN0ZW1fdW5rbm93bl90eXBlMGMwMl9pZDEwMDNfc2Vuc29yXzJcIixcbiAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIGVudGl0eV9pZDpcbiAgICAgICAgLy8gICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5maWJhcm9fc3lzdGVtX3Vua25vd25fdHlwZTBjMDJfaWQxMDAzX3NlbnNvcl8zXCIsXG4gICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206bW9uc3Rlci1jYXJkXCIsXG4gICAgICAgIC8vICAgY2FyZDoge1xuICAgICAgICAvLyAgICAgc2hvd19oZWFkZXJfdG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgLy8gICAgIHRpdGxlOiBcIkJyYW5kdmFybmFyZVwiLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgc2hvd19lbXB0eTogZmFsc2UsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcIndlYXRoZXItZm9yZWNhc3RcIixcbiAgICAgICAgICBlbnRpdHk6IFwid2VhdGhlci5zbWhpX3ZhZGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBjYXJkczogW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICBtYXg6IDUwLFxuICAgICAgICAvLyAgICAgICBtaW46IC01MCxcbiAgICAgICAgLy8gICAgICAgdHlwZTogXCJnYXVnZVwiLFxuICAgICAgICAvLyAgICAgICB0aXRsZTogXCJcXHUwMGQ2dmVydlxcdTAwZTVuaW5nXCIsXG4gICAgICAgIC8vICAgICAgIGVudGl0eTpcbiAgICAgICAgLy8gICAgICAgICBcInNlbnNvci5maWJhcm9fc3lzdGVtX3Vua25vd25fdHlwZTBjMDJfaWQxMDAzX3RlbXBlcmF0dXJlXCIsXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICBtYXg6IDUwLFxuICAgICAgICAvLyAgICAgICBtaW46IC01MCxcbiAgICAgICAgLy8gICAgICAgdHlwZTogXCJnYXVnZVwiLFxuICAgICAgICAvLyAgICAgICB0aXRsZTogXCJFbnRyXFx1MDBlOW5cIixcbiAgICAgICAgLy8gICAgICAgZW50aXR5OlxuICAgICAgICAvLyAgICAgICAgIFwic2Vuc29yLmZpYmFyb19zeXN0ZW1fdW5rbm93bl90eXBlMGMwMl9pZDEwMDNfdGVtcGVyYXR1cmVfMlwiLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgbWF4OiA1MCxcbiAgICAgICAgLy8gICAgICAgbWluOiAtNTAsXG4gICAgICAgIC8vICAgICAgIHR5cGU6IFwiZ2F1Z2VcIixcbiAgICAgICAgLy8gICAgICAgdGl0bGU6IFwiS1xcdTAwZTRsbGFyZW5cIixcbiAgICAgICAgLy8gICAgICAgZW50aXR5OlxuICAgICAgICAvLyAgICAgICAgIFwic2Vuc29yLnBoaWxpb190ZWNobm9sb2d5X2NvcnBvcmF0aW9uX3BocGF0MDJiZXVfbXVsdGlzZW5zb3JfMmluMV90ZW1wZXJhdHVyZVwiLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOnNsaWRlc2hvdy1jYXJkXCIsXG4gICAgICAgIC8vICAgYXJyb3dfY29sb3I6IFwidmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVwiLFxuICAgICAgICAvLyAgIGFycm93X29wYWNpdHk6IDAuNyxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGljb246IFwibWRpOmhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgXCJzZW5zb3IucHJvY2Vzc29yX3VzZVwiLFxuICAgICAgICAgICAgXCJzZW5zb3IubWVtb3J5X2ZyZWVcIixcbiAgICAgICAgICAgIFwic2Vuc29yLmRpc2tfZnJlZV9ob21lXCIsXG4gICAgICAgICAgICBcInNlbnNvci5sYXN0X2Jvb3RcIixcbiAgICAgICAgICAgIFwic2Vuc29yLmRiX3NpemVcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHRpdGxlOiBcIlN5c3RlbVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW50aXR5OiBcInNlbnNvci5waV9ob2xlX2Ruc19xdWVyaWVzX3RvZGF5XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiRE5TIFF1ZXJpZXMgVG9kYXlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudGl0eTogXCJzZW5zb3IucGlfaG9sZV9hZHNfYmxvY2tlZF90b2RheVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkFkcyBCbG9ja2VkIFRvZGF5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbnRpdHk6IFwic2Vuc29yLnBpX2hvbGVfZG5zX3VuaXF1ZV9jbGllbnRzXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiRE5TIFVuaXF1ZSBDbGllbnRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2hvd19oZWFkZXJfdG9nZ2xlOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiUGktSG9sZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwic2Vuc29yLnBsZXhcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5nYW1pbmdfcGNcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5zZXJ2ZXJfMVwiLFxuICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnNlcnZlcl8yXCIsXG4gICAgICAgICAgICBcImJpbmFyeV9zZW5zb3Iud2luZG93c19zZXJ2ZXJcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci50ZWFtc3BlYWtcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5oYXJtb255X2h1YlwiLFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICBzdHlsZToge1xuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogXCIxcHhcIixcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogXCI4NSVcIixcbiAgICAgICAgICAgIC8vICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IFwiIzYyNzE3YlwiLFxuICAgICAgICAgICAgLy8gICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gICB0eXBlOiBcImRpdmlkZXJcIixcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgIGl0ZW1zOiBbXCJzZW5zb3IudXB0aW1lX3JvdXRlclwiLCBcInNlbnNvci5pbnN0YWxsZXJhZF9yb3V0ZXJvc1wiXSxcbiAgICAgICAgICAgIC8vICAgaGVhZDoge1xuICAgICAgICAgICAgLy8gICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLnJvdXRlclwiLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpmb2xkLWVudGl0eS1yb3dcIixcbiAgICAgICAgICAgIC8vICAgZ3JvdXBfY29uZmlnOiB7XG4gICAgICAgICAgICAvLyAgICAgaWNvbjogXCJtZGk6cm91dGVyXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICBpdGVtczogW1xuICAgICAgICAgICAgLy8gICAgIFwic2Vuc29yLnVwdGltZV9yb3V0ZXJfc2VydmVyXCIsXG4gICAgICAgICAgICAvLyAgICAgXCJzZW5zb3IuaW5zdGFsbGVyYWRfcm91dGVyb3Nfc2VydmVyXCIsXG4gICAgICAgICAgICAvLyAgIF0sXG4gICAgICAgICAgICAvLyAgIGhlYWQ6IHtcbiAgICAgICAgICAgIC8vICAgICBlbnRpdHk6IFwiYmluYXJ5X3NlbnNvci5yb3V0ZXJfc2VydmVyXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyAgIHR5cGU6IFwiY3VzdG9tOmZvbGQtZW50aXR5LXJvd1wiLFxuICAgICAgICAgICAgLy8gICBncm91cF9jb25maWc6IHtcbiAgICAgICAgICAgIC8vICAgICBpY29uOiBcIm1kaTpyb3V0ZXJcIixcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJOZXR3b3JrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgXCJiaW5hcnlfc2Vuc29yLnViaXF1aXRpX2NvbnRyb2xsZXJcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci51YmlxdWl0aV9zd2l0Y2hcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci51YmlxdWl0aV9udnJcIixcbiAgICAgICAgICAgIFwiYmluYXJ5X3NlbnNvci5lbnRyZV9rYW1lcmFcIixcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgaXRlbXM6IFtcInNlbnNvci51cHRpbWVfYXBfMVwiXSxcbiAgICAgICAgICAgIC8vICAgaGVhZDoge1xuICAgICAgICAgICAgLy8gICAgIGVudGl0eTogXCJiaW5hcnlfc2Vuc29yLmFjY2Vzc3B1bmt0XzFcIixcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vICAgdHlwZTogXCJjdXN0b206Zm9sZC1lbnRpdHktcm93XCIsXG4gICAgICAgICAgICAvLyAgIGdyb3VwX2NvbmZpZzoge1xuICAgICAgICAgICAgLy8gICAgIGljb246IFwicm91dGVyLXdpcmVsZXNzXCIsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICBpdGVtczogW1wic2Vuc29yLnVwdGltZV9hcF8yXCJdLFxuICAgICAgICAgICAgLy8gICBoZWFkOiB7XG4gICAgICAgICAgICAvLyAgICAgZW50aXR5OiBcImJpbmFyeV9zZW5zb3IuYWNjZXNzcHVua3RfMlwiLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTpmb2xkLWVudGl0eS1yb3dcIixcbiAgICAgICAgICAgIC8vICAgZ3JvdXBfY29uZmlnOiB7XG4gICAgICAgICAgICAvLyAgICAgaWNvbjogXCJyb3V0ZXItd2lyZWxlc3NcIixcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBcInNlbnNvci50b3RhbF9jbGllbnRzX3dpcmVsZXNzXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJVYmlxdWl0aVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZW50aXRpZXM6IFtcbiAgICAgICAgICAgIFwic2Vuc29yLnFiaXR0b3JyZW50X3VwX3NwZWVkXCIsXG4gICAgICAgICAgICBcInNlbnNvci5xYml0dG9ycmVudF9kb3duX3NwZWVkXCIsXG4gICAgICAgICAgICBcInNlbnNvci5xYml0dG9ycmVudF9zdGF0dXNcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNob3dfaGVhZGVyX3RvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgdHlwZTogXCJlbnRpdGllc1wiLFxuICAgICAgICAgIHRpdGxlOiBcIkJpdHRvcnJlbnRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVudGl0aWVzOiBbXG4gICAgICAgICAgICBcInNlbnNvci5zcGVlZHRlc3RfZG93bmxvYWRcIixcbiAgICAgICAgICAgIFwic2Vuc29yLnNwZWVkdGVzdF91cGxvYWRcIixcbiAgICAgICAgICAgIFwic2Vuc29yLnNwZWVkdGVzdF9waW5nXCIsXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaG93X2hlYWRlcl90b2dnbGU6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IFwiZW50aXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJCYW5kYnJlZGRcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHRpdGxlOiBcIlVwZGF0ZXJcIixcbiAgICAgICAgLy8gICB0eXBlOiBcImN1c3RvbTp0cmFja2VyLWNhcmRcIixcbiAgICAgICAgLy8gICB0cmFja2VyczogW1xuICAgICAgICAvLyAgICAgXCJzZW5zb3IuY3VzdG9tX2NhcmRfdHJhY2tlclwiLFxuICAgICAgICAvLyAgICAgXCJzZW5zb3IuY3VzdG9tX2NvbXBvbmVudF90cmFja2VyXCIsXG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICB0aXRsZTogXCJTeXN0ZW0gJiBOZXR3b3JrXCIsXG4gICAgICBwYXRoOiBcInN5c3RlbV9uZXR3b3JrXCIsXG4gICAgICBpY29uOiBcIm1kaTpzZXJ2ZXItbmV0d29ya1wiLFxuICAgIH0sXG4gIF0sXG59KTtcbiIsIi8vIGh0dHBzOi8vY29tbXVuaXR5LmhvbWUtYXNzaXN0YW50LmlvL3Qvc2xhdGUtYS1uZXctZGFyay10aGVtZS84NjQxMFxuZXhwb3J0IGNvbnN0IGRlbW9UaGVtZUtlcm5laGVkID0gKCkgPT4gKHtcbiAgXCJ0ZXh0LXByaW1hcnktY29sb3JcIjogXCJ2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXCIsXG4gIFwicGFwZXItaXRlbS1pY29uLWNvbG9yXCI6IFwidmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVwiLFxuICBcInByaW1hcnktY29sb3JcIjogXCIjMjk4MGI5XCIsXG4gIFwibGFiZWwtYmFkZ2UtcmVkXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcInBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvclwiOiBcImdyZWVuXCIsXG4gIFwicGFwZXItc2xpZGVyLWtub2ItY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicHJpbWFyeS10ZXh0LWNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICBcImxpZ2h0LXByaW1hcnktY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzIyMjIyMlwiLFxuICBcInNpZGViYXItaWNvbi1jb2xvclwiOiBcIiM3Nzc3NzdcIixcbiAgXCJwYXBlci1pdGVtLXNlbGVjdGVkXy1fYmFja2dyb3VuZC1jb2xvclwiOiBcIiMyOTI5MjlcIixcbiAgXCJwYXBlci1zbGlkZXItYWN0aXZlLWNvbG9yXCI6IFwidmFyKC0tYWNjZW50LWNvbG9yKVwiLFxuICBcInNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzIyMjIyMlwiLFxuICBcInBhcGVyLXNsaWRlci1jb250YWluZXItY29sb3JcIjpcbiAgICBcImxpbmVhci1ncmFkaWVudCh2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcikpIG5vLXJlcGVhdFwiLFxuICBcInBhcGVyLXNsaWRlci1kaXNhYmxlZC1hY3RpdmUtY29sb3JcIjogXCJ2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKVwiLFxuICBcImRpc2FibGVkLXRleHQtY29sb3JcIjogXCIjNzc3Nzc3XCIsXG4gIFwicGFwZXItaXRlbS1pY29uXy1fY29sb3JcIjogXCJncmVlblwiLFxuICBcInBhcGVyLWdyZXktMjAwXCI6IFwiIzIyMjIyMlwiLFxuICBcImxhYmVsLWJhZGdlLWJhY2tncm91bmQtY29sb3JcIjogXCIjMjIyMjIyXCIsXG4gIFwicGFwZXItY2FyZC1oZWFkZXItY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzE0MTQxNFwiLFxuICBcInRhYmxlLXJvdy1iYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzI5MjkyOVwiLFxuICBcInBhcGVyLWdyZXktNTBcIjogXCJ2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXCIsXG4gIFwic3dpdGNoLWNoZWNrZWQtY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3JcIjogXCIjMjkyOTI5XCIsXG4gIFwic2Vjb25kYXJ5LXRleHQtY29sb3JcIjogXCIjYjU4ZTMxXCIsXG4gIFwiZ29vZ2xlLXJlZC01MDBcIjogXCIjYjU4ZTMxXCIsXG4gIFwiZGl2aWRlci1jb2xvclwiOiBcInJnYmEoMCwgMCwgMCwgLjEyKVwiLFxuICBcImdvb2dsZS1ncmVlbi01MDBcIjogXCIjMjk4MGI5XCIsXG4gIFwic3dpdGNoLXVuY2hlY2tlZC1idXR0b24tY29sb3JcIjogXCJ2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKVwiLFxuICBcImxhYmVsLWJhZGdlLWJvcmRlci1jb2xvclwiOiBcImdyZWVuXCIsXG4gIFwicGFwZXItbGlzdGJveC1jb2xvclwiOiBcIiM3Nzc3NzdcIixcbiAgXCJwYXBlci1zbGlkZXItZGlzYWJsZWQtc2Vjb25kYXJ5LWNvbG9yXCI6IFwidmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcilcIixcbiAgXCJwYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JcIjogXCIjMjkyOTI5XCIsXG4gIFwibGFiZWwtYmFkZ2UtdGV4dC1jb2xvclwiOiBcInZhcigtLXByaW1hcnktdGV4dC1jb2xvcilcIixcbiAgXCJwYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvclwiOiBcInZhcigtLWFjY2VudC1jb2xvcilcIixcbiAgXCJzd2l0Y2gtdW5jaGVja2VkLXRyYWNrLWNvbG9yXCI6IFwidmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcilcIixcbiAgXCJkYXJrLXByaW1hcnktY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicGFwZXItc2xpZGVyLXNlY29uZGFyeS1jb2xvclwiOiBcInZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiLFxuICBcInBhcGVyLXNsaWRlci1waW4tY29sb3JcIjogXCJ2YXIoLS1hY2NlbnQtY29sb3IpXCIsXG4gIFwicGFwZXItaXRlbS1pY29uLWFjdGl2ZS1jb2xvclwiOiBcIiNiNThlMzFcIixcbiAgXCJhY2NlbnQtY29sb3JcIjogXCIjMjk4MGI5XCIsXG4gIFwidGFibGUtcm93LWFsdGVybmF0aXZlLWJhY2tncm91bmQtY29sb3JcIjogXCIjMjkyOTI5XCIsXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQWhCQTtBQUhBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBYkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUE3QkE7QUF5Q0E7QUFoS0E7QUFIQTtBQXNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQTFFQTtBQUhBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSEE7QUF6MkJBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBL0JBO0FBa0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFVQTtBQS9CQTtBQWtDQTtBQXJFQTtBQXdFQTtBQTFFQTtBQTZFQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFJQTtBQUxBO0FBUUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFoQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoU0E7QUFrU0E7QUFDQTtBQUNBO0FBclNBO0FBd1NBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFnREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBOUJBO0FBaUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExSUE7QUE0SUE7QUFDQTtBQUNBO0FBL0lBO0FBaFZBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=