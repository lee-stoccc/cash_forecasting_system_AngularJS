/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
    "href": "https://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("capture",("capture" in a("input")))});