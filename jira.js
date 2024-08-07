// ==UserScript==
// @name         Jira
// @icon         https://id.atlassian.com/favicon.ico
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/jira.js
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @include      /^https:\/\/.*(dev|jira)(\.?.*)\..*\..*\/(browse|issues|projects|secure)\/.*$/
// @grant        GM_addStyle
// @run-at       document-body
// ==/UserScript==

GM_addStyle(`

div#announcement-banner {
  display: none;
}

div#gantt-msg {
  display: none;
}

span#logo {
  display: none;
}

header#header > .aui-header.aui-dropdown2-trigger-group {
  --aui-appheader-bg-color: #0747a6;
  --aui-appheader-text-color: #deebff;
  --aui-button-primary-text-color: #deebff;
  --aui-button-primary-bg-color: #0065ff;
  --aui-button-primary-hover-bg-color: #2e81ff;
  --aui-button-primary-active-bg-color: #005be6;
  --aui-button-primary-active-text-color: #fafafa;
  border-bottom: 1px solid #2e3d54;
}

header#header > .aui-header.aui-dropdown2-trigger-group .aui-nav > li > a {
  --aui-item-focus-bg: #033681;
  --aui-item-active-bg: #033681;
  --aui-item-focus-text: #deebff;
  --aui-item-active-text: #deebff;
  --aui-appheader-item-focus-bg-color: #033681;
  --aui-appheader-item-focus-text-color: #deebff;
  --aui-appheader-item-active-bg-color: #033681;
  --aui-appheader-item-active-text-color: #deebff;
}

input#quickSearchInput {
    background: var(--aui-appheader-quicksearch-bg-color) !important;
}

.aui-header .aui-icon.aui-icon-small {
  --aui-icon-size: 16px;
}

.aui-header .aui-header-secondary > .aui-nav > li > a > .aui-icon {
  --aui-icon-size: 16px;
}

`);
