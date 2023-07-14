// ==UserScript==
// @name         Teams
// @description  Interface tweaks.
// @icon         https://statics.teams.cdn.office.net/hashed/favicon/prod/favicon-96x96-72d9855.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/teams.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
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

`)
