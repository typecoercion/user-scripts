// ==UserScript==
// @name         GitLab
// @icon         https://assets.gitlab-static.net/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/gitlab.js
// @namespace    http://tampermonkey.net/
// @version      0.0.6
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://gitlab.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

.breadcrumb-item-text img {
  display: none;
}

.project-buttons .nav {
  display: none;
}

`);
