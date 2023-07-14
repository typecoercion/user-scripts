// ==UserScript==
// @name         Teams
// @description  Interface tweaks.
// @icon         https://statics.teams.cdn.office.net/hashed/favicon/prod/favicon-96x96-72d9855.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/teams.js
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

#chatstab .left-rail-item-hover {
  display: none;
}

#chatstab div.left-rail-selected {
  display: block;
}

#chatstab div.left-rail-item-hover:has(> .ts-unread-channel) {
  display: block;
}

#chatstab div[data-tid="pinned-chat-list"] div.left-rail-item-hover {
  display: block;
}

channel-list img.team-icon {
  display: none !important;
}

channel-list profile-picture:after {
  content: "#";
  display: inline-block;
  margin: 0px 0 3px 0;
  opacity: 0.5;
  vertical-align: top;
  width: 15px;
}

channel-list .ts-channel-list a.channel-anchor {
  padding-left: 3.6rem;
}

channel-list h3.channel-list-team-header {
  font-size: 12px;
}

channel-list .channel-list-channels {
  font-size: 0.8em;
}

div.ts-title-bar-icon {
  display: none !important;
}

`)
