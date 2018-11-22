/*!
{
  "name": "iframe[srcdoc] Attribute",
  "property": "srcdoc",
  "tags": ["iframe"],
  "builderAliases": ["iframe_srcdoc"],
  "notes": [{
    "name": "WhatWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-srcdoc"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("srcdoc","srcdoc" in a("iframe"))});