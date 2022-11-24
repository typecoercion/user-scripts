// ==UserScript==
// @name         Fidelity
// @icon         https://oltx.fidelity.com/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/fidelity.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://oltx.fidelity.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

div.account-selector--group-container.SP {
  display: none;
}

div.account-selector--watchlist-wrapper {
  display: none;
}

a.account-selector--add-outside-accounts {
  display: none;
}

div.QSIFeedBackLink {
  display: none !important;
}

div.nba-card {
  display: none !important;
}

#onsitemessage {
  display: none;
}

footer {
  display: none !important;
}

.footer {
  display: none !important;
}

#va-lazy-load-container {
  display: none !important;
}

`);
