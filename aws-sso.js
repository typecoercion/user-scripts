// ==UserScript==
// @name         AWS: SSO
// @icon         https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144-smile.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/aws-sso.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://device.sso.*.amazonaws.com/*
// @match        https://*.awsapps.com/start/*
// @run-at       document-end
// ==/UserScript==

(() => {

  setInterval(function() {
    const el1 = document.querySelector('#cli_verification_btn');

    if (el1) {
      el1.click();
    }

    const el2 = document.querySelector('[data-testid="allow-access-button"]');

    if (el2) {
      el2.click();
    }
  }, 100);

})();

