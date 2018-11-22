/*!
{
  "name": "iframe[seamless] Attribute",
  "property": "seamless",
  "tags": ["iframe"],
  "builderAliases": ["iframe_seamless"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-seamless"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("seamless","seamless" in a("iframe"))});