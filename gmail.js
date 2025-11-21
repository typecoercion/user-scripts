// ==UserScript==
// @name         Gmail
// @description  Interface tweaks.
// @icon         https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/gmail.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://mail.google.com/mail/*
// @grant        GM_addStyle
// @run-at       document-idle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

div.aqn.aIH {
  background: #F7F7F7;
  border-right: 1px solid #ccc !important;
}

`);
