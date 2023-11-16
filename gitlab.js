// ==UserScript==
// @name         GitLab
// @icon         https://about.gitlab.com/nuxt-images/ico/mstile-144x144.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/gitlab.js
// @namespace    http://tampermonkey.net/
// @version      0.0.9
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://gitlab.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

.home-panel-title-row .avatar-container {
  display: none;
}

div[data-testid="nav-container"] .gl-new-dropdown .gl-avatar {
  margin-left: -20px;
  opacity: 0;
}

.group-row-contents a:has([itemprop="logo"]) {
  display: none;
}

.group-row-contents a:has([itemprop="image"]) {
  display: none;
}

.breadcrumb-item-text img {
  display: none;
}

.project-buttons .nav {
  display: none;
}

.breadcrumbs-links .avatar-tile {
  display: none;
}

.project-buttons .nav {
  display: none;
}

.project-cell:has(.gl-avatar) {
  display: none;
}

.project-home-panel .home-panel-avatar,
.group-home-panel .home-panel-avatar {
  display: none;
}

.group-row-contents .gl-avatar {
  display: none;
}

.sidebar-top-level-items .avatar-container {
  display: none;
}

.sidebar-top-level-items .context-header {
  padding-top: 8px;
}

.sidebar-top-level-items .context-header a {
  padding: 16px;
}

`);
