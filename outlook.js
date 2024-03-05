// ==UserScript==
// @name         Outlook
// @icon         https://res-1.cdn.office.net/assets/mail/pwa/v1/pngs/Outlook.512x512.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/outlook.js
// @namespace    http://tampermonkey.net/
// @version      1.1.2
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @include      /^https:\/\/outlook\.(office|office365)\.com\/(calendar|mail)\/.*$/
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

a#O365_MainLink_TenantLogo {
  display: none;
}

div:has(> div[title^="In-Place Archive -"]) {
  display: none;
}

div:has(> div[title^="Personal Archive -"]) {
  display: none;
}

div[aria-label="OneDrive"] {
  display: none;
}

button[aria-label="More apps"] {
  display: none;
}

div[title="Add favorite"] {
  display: none !important;
}

div[aria-label="Bookings"] {
  display: none;
}

div[aria-label="To Do"] {
  display: none;
}

div[title="Go to OneDrive for Business"] {
  display: none;
}

div[title="Go to Yammer"] {
  display: none;
}

`);
