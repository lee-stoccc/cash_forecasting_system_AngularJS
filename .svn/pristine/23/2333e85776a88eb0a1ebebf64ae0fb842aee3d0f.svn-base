/*!
{
  "name": "Fullscreen API",
  "property": "fullscreen",
  "caniuse": "fullscreen",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/API/Fullscreen"
  }],
  "polyfills": ["screenfulljs"],
  "builderAliases": ["fullscreen_api"]
}
!*/
define(["Modernizr","prefixed"],function(b,a){b.addTest("fullscreen",!!(a("exitFullscreen",document,false)||a("cancelFullScreen",document,false)))});