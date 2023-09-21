// ==UserScript==
// @name         Slack: UI
// @description  Interface tweaks.
// @icon         https://a.slack-edge.com/cebaa/img/ico/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/slack-simplify.js
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @match        https://app.slack.com/client/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
  window.onload = function() {
    document.querySelector("button.p-ia4_home_header_menu__button").innerHTML = `<svg data-2cq="true" aria-hidden="true" viewBox="0 0 20 20" className=""><path fill="currentColor" fill-rule="evenodd" d="M2.537 9.25a7.506 7.506 0 0 1 5.784-6.561c-.91 1.577-1.891 3.86-2.049 6.561H2.537ZM10 2.815c-.905 1.41-2.044 3.691-2.225 6.435h4.45c-.181-2.744-1.32-5.025-2.225-6.435Zm2.225 7.935h-4.45c.181 2.744 1.32 5.025 2.225 6.435.905-1.41 2.044-3.691 2.225-6.435Zm-.546 6.561c.91-1.577 1.891-3.86 2.05-6.561h3.734a7.506 7.506 0 0 1-5.784 6.561Zm2.05-8.061c-.159-2.7-1.14-4.984-2.05-6.561a7.506 7.506 0 0 1 5.784 6.561h-3.735Zm-11.192 1.5h3.735c.158 2.7 1.138 4.984 2.05 6.561a7.505 7.505 0 0 1-5.785-6.561ZM10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" clip-rule="evenodd"></path></svg>`;
  }
})();

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

button.p-ia4_home_header_menu__button {
  color: var(--dt_color-content-sec);
}

div.p-channel_sidebar--classic_nav {
  font-size: 13px;
}

div.p-channel_sidebar__section_heading {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    margin: 0px !important;
    padding: 0 22px !important;
    height: 38px !important;
}

div.p-channel_sidebar__section_heading_label {
  font-size: 11px;
}

div.p-ia__view_header__title i.c-team_icon {
  display: none;
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
  width: 0; /* hide team name while it is being replaced */
}

`);
