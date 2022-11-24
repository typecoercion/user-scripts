// ==UserScript==
// @name         Slack: Links
// @description  Open all Slack links in the browser.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack-links.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://*.slack.com/archives/*
// @match        https://*.slack.com/app_redirect?channel=*
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';
  window.onload = function() {
    document.querySelector("button.c-button-unstyled.p-download_modal__not_now").click();
  }
})();
