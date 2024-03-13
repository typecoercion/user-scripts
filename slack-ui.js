// ==UserScript==
// @name         Slack UI
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack-ui.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://app.slack.com/client/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

:root {
  --x-height-add0: 36px;
  --x-height-add1: 36px;
  --x-height-min0: 8px;
  --x-height-min1: 4px;
}

button.p-account_switcher {
  display: none;
}

body {
  margin-top: calc(-1 * var(--x-height-add0)) !important;
  height: calc(100vh + var(--x-height-add1)) !important;
}

div.p-channel_sidebar--classic_nav {
  font-size: 13px;
}

i.p-all_unreads_header_team_icon {
  display: none;
}

div.p-workspace_banner__desktop-download-app {
  display: none;
}

span.p-ia4_home_header_menu__team_name {
  display: none;
}

.p-ia4_client .p-client_workspace_wrapper {
  height: calc(100vh - var(--x-height-min1)) !important;
}

.p-ia4_client.p-ia4_client--with-search-in-top-nav .p-view_contents--primary,
.p-ia4_client.p-ia4_client--with-search-in-top-nav .p-view_contents--secondary,
.p-ia4_client.p-ia4_client--with-search-in-top-nav .p-view_contents--sidebar {
  max-height: calc(100vh - var(--x-height-min0)) !important;
}

.p-theme_background {
  height: calc(100vh + var(--x-height-add1)) !important;
}

`);
