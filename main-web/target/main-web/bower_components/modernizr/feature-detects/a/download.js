/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse" : "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WhatWG Reference",
    "href": "https://developers.whatwg.org/links.html#downloading-resources"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("adownload",!window.externalHost&&"download" in a("a"))});