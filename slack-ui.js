// ==UserScript==
// @name         Slack: UI
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack-ui.js
// @namespace    http://tampermonkey.net/
// @version      1.1.4
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://app.slack.com/client/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

const setTitle = function() {
  if (document.title.includes('- Slack') ) {
    let title = document.title.replace(/\s-\s.*\sSlack/, '');
    document.title = title;
  }
}

setInterval(() => {
  setTitle();
}, 40);

GM_addStyle(`

:root {
  --x-height-add0: 40px;
  --x-height-add1: 40px;
  --x-height-min0: 0px;
  --x-height-min1: -4px;
}

button[data-qa="workspace_filter_menu"] {
  font-size: 13px;
  margin-top: 9px;
}

button.p-account_switcher {
  display: none;
}

body {
  margin-top: calc(-1 * var(--x-height-add0)) !important;
  height: calc(100vh + var(--x-height-add1)) !important;
}

div[data-sidebar-link-id="add_more_items_app"],
div[data-item-key="addMoreChannels"],
div[data-item-key="addMoreDM"],
div[data-qa="open-desktop-app-wrapper"] {
  display: none;
}

div.p-channel_sidebar--classic_nav {
  font-size: 13px;
}

div.p-ia4_client div.p-client_workspace__layout {
  border-radius: 6px 0 0 0;
  margin-right: var(--x-height-min1);
}

div.p-ia4_sidebar_header.p-ia4_home_header:not(.p-ia4_home_header--setup,.p-ia4_home_header--with_guided_trial_badge) {
  --saf-0: rgba(var(--sk_foreground_low,29,28,29),.13);
  box-shadow: 0 1px 0 0 var(--saf-0);
}

div.p-ia4_upgrade_button__container {
  display: none;
}

div.p-tab_rail__button__label {
  display: none;
}

div.p-workspace_banner__desktop-download-app {
  display: none;
}

div.ReactModal__Overlay div.ReactModal__Content:has(> div > .c-search_modal__wrapper) {
  top: 50px !important;
}

i.p-all_unreads_header_team_icon {
  display: none;
}

span.p-ia4_home_header_menu__team_name {
  display: none;
}

.p-ia4_client .p-client_workspace_wrapper {
  height: calc(100vh + 44px) !important;
}

.p-theme_background {
  height: calc(100vh + var(--x-height-add1)) !important;
}

.p-channel_sidebar__section_heading_button {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
}

div.p-ia4_client div.p-view_contents--primary,
div.p-ia4_client div.p-view_contents--secondary,
div.p-ia4_client div.p-view_contents--sidebar {
  max-height: 100vh;
}

`);
