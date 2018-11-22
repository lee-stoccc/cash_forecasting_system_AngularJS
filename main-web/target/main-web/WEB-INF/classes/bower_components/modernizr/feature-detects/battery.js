/*!
{
  "name": "Battery API",
  "property": "batteryapi",
  "aliases": ["battery-api"],
  "builderAliases": ["battery_api"],
  "tags": ["device", "media"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
  }]
}
!*/
define(["Modernizr","prefixed"],function(b,a){b.addTest("batteryapi",!!a("battery",navigator),{aliases:["battery-api"]})});