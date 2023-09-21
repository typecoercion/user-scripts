// ==UserScript==
// @name         Slack: UI
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack-simplify.js
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://app.slack.com/client/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

:root {
  --x-top-offset: 40px;
  --x-adjust-height: calc(4px + var(--x-top-offset));
  --x-adjust-width: 6px;
}

body {
  font-size: 13px;
  height: calc(100vh + var(--x-adjust-height));
  margin: calc(0px - var(--x-top-offset)) 0 0 -2px;
  width: calc(100vw + var(--x-adjust-width));
}

button.p-account_switcher {
  display: none;
}

div.p-channel_sidebar--classic_nav {
  font-size: 13px;
}

div.p-channel_sidebar__section_heading_label {
  font-size: 11px;
}

div.p-theme_background {
  display: none;
  height: calc(100vh + var(--x-adjust-height));
  width: calc(100vw + var(--x-adjust-width));
}

div.p-view_contents {
  max-height: calc(100vh) !important;
}

div.p-client_container {
  background: #ddd;
  height: calc(100vh + var(--x-adjust-height));
  width: calc(100vw + var(--x-adjust-width));
}

div.p-ia4_client_container {
  height: calc(100vh + var(--x-adjust-height));
  width: calc(100vw + var(--x-adjust-width));
}

div.p-ia4_client {
  max-height: calc(100vh + var(--x-adjust-height));
  width: calc(100vw + var(--x-adjust-width));
}

div.p-ia4_client div.p-client_workspace__layout {
  border-radius: 0;
  box-shadow: none;
  box-shadow: -1px 0px 0px rgba(var(--sk_foreground_low, 29, 28, 29), .13);
}

div.p-ia4_client div.p-view_contents--primary {
  box-shadow: -1px 0px 0px rgba(var(--sk_foreground_low, 29, 28, 29), .13);
}

div.p-tab_rail {
  background-color: rgba(255, 255, 255, 0.5) !important;
  padding-top: 0;
}

span.p-ia4_home_header_menu__team_name {
  width: 0;
}

`);
