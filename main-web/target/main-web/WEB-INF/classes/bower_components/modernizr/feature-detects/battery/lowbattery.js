/*!
{
  "name": "Low Battery Level",
  "property": "lowbattery",
  "tags": ["hardware", "mobile"],
  "builderAliases": ["battery_level"],
  "authors": ["Paul Sayre"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
  }]
}
!*/
define(["Modernizr","prefixed"],function(b,a){b.addTest("lowbattery",function(){var d=0.2;var c=a("battery",navigator);return !!(c&&!c.charging&&c.level<=d)})});