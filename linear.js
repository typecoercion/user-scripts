
// ==UserScript==
// @name         Linear
// @icon         https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/82d07241-84b3-4cdf-33b5-a09b8d169300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/linear.js
// @namespace    http://tampermonkey.net/
// @version      1.0.1
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
