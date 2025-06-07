// ==UserScript==
// @name         Google Calendar
// @icon         https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_31_256.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/google-calendar.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://calendar.google.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

[data-ogsr-up] {
  display: none;
}

`);
