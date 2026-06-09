// ==UserScript==
// @name         GitHub
// @icon         https://github.com/favicons/favicon-ent-dark.svg
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/github.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://*github*.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

section.flash {
    display: none;
}

`);
