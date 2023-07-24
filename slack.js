// ==UserScript==
// @name         Slack
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack.js
// @namespace    http://tampermonkey.net/
// @version      1.5.4
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

div.p-channel_sidebar {
  font-size: 11px;
}

div.p-channel_sidebar--iap1 button.p-channel_sidebar__section_heading_plus {
  opacity: 0;
}

div.p-channel_sidebar--iap1 button.p-channel_sidebar__section_heading_plus:hover {
  opacity: 1;
}

div.p-client {
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

button.p-channel_sidebar__compose_button, .p-channel_sidebar__compose_button--iap1 {
  box-shadow: none !important;
  background: none !important;
  color: var(--p-channel_sidebar__top-nav-text);
  opacity: 0.8;
}

button.p-ia__sidebar_header__team_name {
  margin: 4px 22px 0;
  height: 16px;
}

span.p-ia__sidebar_header__team_name_text {
  display: none;
}

button.p-top_nav__search__filters--has-query {
  right: 0;
}

span.p-top_nav__search__text {
  display: none;
}

div.p-top_nav__search__container {
  display: block;
  position: absolute;
  top: 56px;
  left: 108px;
  width: 64px;
}

div.p-top_nav__search__container button {
  background: none;
  box-shadow: none;
}

div..p-top_nav__search__container button:hover {
  box-shadow: none;
}

div..p-top_nav__search__container button i {
  color: #555;
}

div..p-top_nav__search__container button i::before {
  font-size: 20px;
}

button.p-top_nav__search__clear {
  display: none;
}

div.p-top_nav__right {
  min-width: 0 !important;
  padding: 0;
  position: absolute;
  top: 55px;
  left: 9px;
}

span.p-channel_sidebar__section_heading_more_label {
  display: none;
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

i.p-all_unreads_header_team_icon {
    display: none;
}

`);
