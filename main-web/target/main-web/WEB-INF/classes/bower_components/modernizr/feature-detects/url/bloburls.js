/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
define(["Modernizr","prefixed"],function(c,a){var b=a("URL",window,false);b=b&&window[b];c.addTest("bloburls",b&&"revokeObjectURL" in b&&"createObjectURL" in b)});