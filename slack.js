// ==UserScript==
// @name         Slack
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack.js
// @namespace    http://tampermonkey.net/
// @version      1.5.2
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://app.slack.com/client/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

body {
  margin-top: -45px;
}

.p-view_header--with-bookmarks-bar {
  z-index: 203 !important;
}

.p-channel_sidebar {
  font-size: 11px;
}

.p-channel_sidebar--iap1 .p-channel_sidebar__section_heading_plus {
  opacity: 0;
}

.p-channel_sidebar--iap1 .p-channel_sidebar__section_heading_plus:hover {
  opacity: 1;
}

.p-client {
  height: calc(100vh + 45px);
}

.p-top_nav__history_menu {
  position: absolute !important;
  top: 56px;
  left: 180px;
}

.p-top_nav__history_menu span{
  --s: 16px !important;
}

.p-channel_sidebar__channel {
  padding-left: 17px !important;
}

.p-channel_sidebar__link.p-channel_sidebar__link--add-more-items {
  padding-left: 17px !important;
}

.p-channel_sidebar__section_heading_label {
  font-size: 10px !important;
}

.p-channel_sidebar__compose_button_svg_icon {
  fill: #D1D2D3;
}

.p-channel_sidebar__compose_button, .p-channel_sidebar__compose_button--iap1 {
  box-shadow: none !important;
  background: none !important;
  color: var(--p-channel_sidebar__top-nav-text);
  opacity: 0.8;
}

.p-ia__sidebar_header__team_name {
  margin: 4px 22px 0;
  height: 16px;
}

.p-ia__sidebar_header__team_name_text {
  display: none;
}

.p-top_nav__search__filters--has-query {
  right: 0;
}

.p-top_nav__search__text {
  display: none;
}

.p-top_nav__search__container {
  display: block;
  position: absolute;
  top: 56px;
  left: 108px;
  width: 64px;
}

.p-top_nav__search__container button {
  background: none;
  box-shadow: none;
}

.p-top_nav__search__container button:hover {
  box-shadow: none;
}

.p-top_nav__search__container button i {
  color: #555;
}

.p-top_nav__search__container button i::before {
  font-size: 20px;
}

.p-top_nav__search__clear--toggle-larger-top-nav-bar {
  display: none !important;
}

.p-top_nav__right {
  min-width: 0 !important;
  padding: 0;
  position: absolute;
  top: 55px;
  left: 9px;
}

[data-qa="top-nav-help-button"] {
  display: none !important;
}

.p-workspace__primary_view {
    max-height: calc(100vh) !important;
}

.p-workspace__secondary_view {
    max-height: calc(100vh) !important;
}

.p-upgrades_button--top_nav {
    display: none;
}

`);
