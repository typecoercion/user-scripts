// ==UserScript==
// @name         AWS
// @icon         https://a0.awsstatic.com/libra-css/images/site/touch-icon-ipad-144-smile.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/aws.js
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://*.console.aws.amazon.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

#console-nav-footer {
  display: none !important;
}

`);
