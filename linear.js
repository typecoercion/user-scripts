
// ==UserScript==
// @name         Linear
// @icon         https://linear.app/static/apple-touch-icon.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/linear.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://linear.app/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

[aria-label*="Workspace Menu"] img {
  display: none;
}

`);
