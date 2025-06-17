// ==UserScript==
// @name         Microsoft Teams
// @icon         https://statics.teams.cdn.office.net/evergreen-assets/icons/microsoft_teams_logo_refresh.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/teams.js
// @namespace    http://tampermonkey.net/
// @version      1.2.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

document.addEventListener('keydown', function (event) {
  if (event.metaKey && event.shiftKey && event.key.toLowerCase() === '/') {
    event.preventDefault();
    openLocation();
  }
});

function openLocation() {
  const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
  navigator.clipboard
  .readText()
  .then((clipText) => {
    if (urlRegex.test(clipText)) {
      window.location = clipText;
    }
  });
}

/*
GM_addStyle(`

[data-tid="channel-list-container"] span.fui-Avatar {
  display: none;
}

[data-tid="channel-list-container"] div.ui-tree__item a.ui-tree__title {
  font-size: 12px;
  padding: 0 10px;
}

`);
*/
