// ==UserScript==
// @name         Outlook
// @icon         https://res-1.cdn.office.net/assets/mail/pwa/v1/pngs/Outlook.512x512.png
// @downloadURL  https://raw.githubusercontent.com/typecoercion/user-scripts/main/outlook.js
// @namespace    http://tampermonkey.net/
// @version      1.1.4
// @description  TC
// @author       TC
// @homepage     https://github.com/typecoercion/user-scripts
// @include      /^https:\/\/outlook\.(office|office365)\.com\/(calendar|mail)\/.*$/
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

GM_addStyle(`

div#tenantLogo_container {
  display: none !important;
}

div:has(> div[title^="In-Place Archive -"]) {
  display: none;
}

div:has(> div[title^="Personal Archive -"]) {
  display: none;
}

div[aria-label="OneDrive"] {
  display: none;
}

button[aria-label="More apps"] {
  display: none;
}

div[title="Add favorite"] {
  display: none !important;
}

div[aria-label="Bookings"] {
  display: none;
}

div[aria-label="To Do"] {
  display: none;
}

div[title="Go to OneDrive for Business"] {
  display: none;
}

div[title="Go to Yammer"] {
  display: none;
}

`);

let webManifest = {
  "name": "Outlook",
  "short_name": "Outlook",
  "icons": [
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.48x48x32.png",
          "sizes": "48x48",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.64x64x32.png",
          "sizes": "64x64",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.128x128x32.png",
          "sizes": "128x128",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.144x144.png",
          "sizes": "144x144",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.192x192.png",
          "sizes": "192x192",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.256x256x32.png",
          "sizes": "256x256",
          "type": "image/png"
      },
      {
          "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v1/pngs/Outlook.512x512.png",
          "sizes": "512x512",
          "type": "image/png"
      }
  ],
  "protocol_handlers": [
      {
          "protocol": "mailto",
          "url": "/mail/deeplink/compose/?mailtouri=%s"
      }
  ],
  "start_url": "/mail/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "shortcuts": [
      {
          "name": "New message",
          "description": "Compose a new message using Outlook",
          "url": "/mail/deeplink/compose",
          "icons": [
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.32.png",
                  "sizes": "32x32",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.48.png",
                  "sizes": "48x48",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.72.png",
                  "sizes": "72x72",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.96.png",
                  "sizes": "96x96",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.144.png",
                  "sizes": "144x144",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewMail.Blue.192.png",
                  "sizes": "192x192",
                  "type": "image/png"
              }
          ]
      },
      {
          "name": "New event",
          "description": "Create a new event using Outlook",
          "url": "/calendar/deeplink/compose",
          "icons": [
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.32.png",
                  "sizes": "32x32",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.48.png",
                  "sizes": "48x48",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.72.png",
                  "sizes": "72x72",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.96.png",
                  "sizes": "96x96",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.144.png",
                  "sizes": "144x144",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/NewEvent.Blue.192.png",
                  "sizes": "192x192",
                  "type": "image/png"
              }
          ]
      },
      {
          "name": "Open calendar",
          "description": "Open your calendar in Outlook",
          "url": "/calendar",
          "icons": [
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.32.png",
                  "sizes": "32x32",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.48.png",
                  "sizes": "48x48",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.72.png",
                  "sizes": "72x72",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.96.png",
                  "sizes": "96x96",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.144.png",
                  "sizes": "144x144",
                  "type": "image/png"
              },
              {
                  "src": "https://res.public.onecdn.static.microsoft/assets/mail/pwa/v2/png/ViewCalendar.Blue.192.png",
                  "sizes": "192x192",
                  "type": "image/png"
              }
          ]
      }
  ]
};

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);
