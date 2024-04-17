// ==UserScript==
// @name         Teams
// @description  Interface tweaks.
// @icon         https://statics.teams.cdn.office.net/hashed/favicon/prod/favicon-96x96-72d9855.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/teams.js
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

[data-tid="channel-list-container"] span.fui-Avatar {
  display: none;
}

[data-tid="channel-list-container"] div.ui-tree__item a.ui-tree__title {
  margin-left: -30px;
  margin-right: -10px;
  font-size: 12px;
}

/*
#chatstab {
  font-size: 0.8em;
}

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

#chatstab div[data-tid="chat-list-recent-section"],
#chatstab div[data-tid="chat-list-pinned-section"] {
  display: none;
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

channel-list .ts-channel-list .channels ul {
  margin-bottom: 20px;
}

channel-list .ts-channel-list .team.match-parent {
  margin-bottom: 0;
}

channel-list .left-rail-item-hover:has(> a.open-channel-mgr) {
  position: absolute;
  top: 9px;
  right: 40px;
}

channel-list .left-rail-item-hover a.open-channel-mgr {
  color: inherit;
  display: inline-block;
  height: 14px;
  max-width: 34px;
  opacity: 0.6;
  padding: 0px 8px;
  text-align: center;
  text-wrap: wrap;
}

channel-list .left-rail-item-hover a.open-channel-mgr .channel-list-show-icon-on-hover {
  display: none !important;
}

channel-list .channel-list-team-header a.unread, .pin-channel-list-header a.unread {
  color: inherit;
  font-weight: 600;
}

channel-list .ts-left-rail-tree .expand-collapse-icon-default {
  margin-left: 4px;
}

div.ts-title-bar-icon {
  display: none !important;
}
*/

`);
