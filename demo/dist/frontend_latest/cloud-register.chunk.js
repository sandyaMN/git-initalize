(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-register"],{

/***/ "./src/panels/config/cloud/register/cloud-register.js":
/*!************************************************************!*\
  !*** ./src/panels/config/cloud/register/cloud-register.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudRegister extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
    <style include="iron-flex ha-style">
      .content {
        direction: ltr;
      }

      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-item {
        cursor: pointer;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--google-red-500);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="[[localize('ui.panel.config.cloud.register.title')]]">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.cloud.register.headline')]]</span>
          <div slot="introduction">
            <p>
              [[localize('ui.panel.config.cloud.register.information')]]
            </p>
            <p>
            [[localize('ui.panel.config.cloud.register.information2')]]
            </p>
            <ul>
              <li>[[localize('ui.panel.config.cloud.register.feature_remote_control')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_google_home')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_amazon_alexa')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_webhook_apps')]]</li>
            </ul>
            <p>
              [[localize('ui.panel.config.cloud.register.information3')]] <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>[[localize('ui.panel.config.cloud.register.information3a')]]
            </p>

            <p>
              [[localize('ui.panel.config.cloud.register.information4')]]
              </p><ul>
                <li><a href="https://home-assistant.io/tos/" target="_blank">[[localize('ui.panel.config.cloud.register.link_terms_conditions')]]</a></li>
                <li><a href="https://home-assistant.io/privacy/" target="_blank">[[localize('ui.panel.config.cloud.register.link_privacy_policy')]]</a></li>
              </ul>
            </p>
          </div>

          <ha-card header="[[localize('ui.panel.config.cloud.register.create_account')]]">
            <div class="card-content">
              <div class="header">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="[[localize('ui.panel.config.cloud.register.email_address')]]" type="email" value="{{email}}" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.email_error_msg')]]"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.password_error_msg')]]"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">[[localize('ui.panel.config.cloud.register.start_trial')]]</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">[[localize('ui.panel.config.cloud.register.resend_confirmation_email')]]</button>
            </div>
          </ha-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      _password: {
        type: String,
        value: ""
      },
      _error: {
        type: String,
        value: ""
      }
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  _inputChanged() {
    this._error = "";
    this.$.email.invalid = false;
    this.$.password.invalid = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleRegister();

      ev.preventDefault();
    }
  }

  _handleRegister() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;
    this._requestInProgress = true;
    this.hass.callApi("post", "cloud/register", {
      email: this.email,
      password: this._password
    }).then(() => this._verificationEmailSent(), err => {
      // Do this before setProperties because changing it clears errors.
      this._password = "";
      this.setProperties({
        _requestInProgress: false,
        _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
      });
    });
  }

  _handleResendVerifyEmail() {
    if (!this.email) {
      this.$.email.invalid = true;
      return;
    }

    this.hass.callApi("post", "cloud/resend_confirm", {
      email: this.email
    }).then(() => this._verificationEmailSent(), err => this.setProperties({
      _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
    }));
  }

  _verificationEmailSent() {
    this.setProperties({
      _requestInProgress: false,
      _password: ""
    });
    this.fire("cloud-done", {
      flashMessage: this.hass.localize("ui.panel.config.cloud.register.account_created")
    });
  }

}

customElements.define("cloud-register", CloudRegister);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtcmVnaXN0ZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9yZWdpc3Rlci9jbG91ZC1yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIENsb3VkUmVnaXN0ZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICBbc2xvdD1pbnRyb2R1Y3Rpb25dIHtcbiAgICAgICAgbWFyZ2luOiAtMWVtIDA7XG4gICAgICB9XG4gICAgICBbc2xvdD1pbnRyb2R1Y3Rpb25dIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci50aXRsZScpXV1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuaGVhZGxpbmUnKV1dPC9zcGFuPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbicpXV1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmluZm9ybWF0aW9uMicpXV1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5mZWF0dXJlX3JlbW90ZV9jb250cm9sJyldXTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuZmVhdHVyZV9nb29nbGVfaG9tZScpXV08L2xpPlxuICAgICAgICAgICAgICA8bGk+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmZlYXR1cmVfYW1hem9uX2FsZXhhJyldXTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuZmVhdHVyZV93ZWJob29rX2FwcHMnKV1dPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmluZm9ybWF0aW9uMycpXV0gPGEgaHJlZj0naHR0cHM6Ly93d3cubmFidWNhc2EuY29tJyB0YXJnZXQ9J19ibGFuayc+TmFidSZuYnNwO0Nhc2EsJm5ic3A7SW5jPC9hPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjNhJyldXVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmluZm9ybWF0aW9uNCcpXV1cbiAgICAgICAgICAgICAgPC9wPjx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vdG9zL1wiIHRhcmdldD1cIl9ibGFua1wiPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5saW5rX3Rlcm1zX2NvbmRpdGlvbnMnKV1dPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL3ByaXZhY3kvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmxpbmtfcHJpdmFjeV9wb2xpY3knKV1dPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuY3JlYXRlX2FjY291bnQnKV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgYXV0b2ZvY3VzPVwiXCIgaWQ9XCJlbWFpbFwiIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2FkZHJlc3MnKV1dXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9XCJ7e2VtYWlsfX1cIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgaWQ9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIiB0eXBlPVwicGFzc3dvcmRcIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnBhc3N3b3JkX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b24gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIiBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuc3RhcnRfdHJpYWwnKV1dPC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaW5rXCIgaGlkZGVuPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiIG9uLWNsaWNrPVwiX2hhbmRsZVJlc2VuZFZlcmlmeUVtYWlsXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnJlc2VuZF9jb25maXJtYXRpb25fZW1haWwnKV1dPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hhc3Mtc3VicGFnZT5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfaW5wdXRDaGFuZ2VkKGVtYWlsLCBfcGFzc3dvcmQpXCJdO1xuICB9XG5cbiAgX2lucHV0Q2hhbmdlZCgpIHtcbiAgICB0aGlzLl9lcnJvciA9IFwiXCI7XG4gICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgX2tleURvd24oZXYpIHtcbiAgICAvLyB2YWxpZGF0ZSBvbiBlbnRlclxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5faGFuZGxlUmVnaXN0ZXIoKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVJlZ2lzdGVyKCkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IHRydWU7XG5cbiAgICAgIGlmICghaW52YWxpZCkge1xuICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kLnBhc3N3b3JkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvcmVnaXN0ZXJcIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB0aGlzLl92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIC8vIERvIHRoaXMgYmVmb3JlIHNldFByb3BlcnRpZXMgYmVjYXVzZSBjaGFuZ2luZyBpdCBjbGVhcnMgZXJyb3JzLlxuICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBfaGFuZGxlUmVzZW5kVmVyaWZ5RW1haWwoKSB7XG4gICAgaWYgKCF0aGlzLmVtYWlsKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9yZXNlbmRfY29uZmlybVwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB0aGlzLl92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSxcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBfdmVyaWZpY2F0aW9uRW1haWxTZW50KCkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgX3Bhc3N3b3JkOiBcIlwiLFxuICAgIH0pO1xuICAgIHRoaXMuZmlyZShcImNsb3VkLWRvbmVcIiwge1xuICAgICAgZmxhc2hNZXNzYWdlOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmFjY291bnRfY3JlYXRlZFwiXG4gICAgICApLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLXJlZ2lzdGVyXCIsIENsb3VkUmVnaXN0ZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU9BO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUE1TUE7QUFDQTtBQTZNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9