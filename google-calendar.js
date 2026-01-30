// ==UserScript==
// @name         Google Calendar
// @icon         https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg
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

  .gb_Ha:not(.gb_9a) .gb_Xa {
    display: none;
  }

  `);
