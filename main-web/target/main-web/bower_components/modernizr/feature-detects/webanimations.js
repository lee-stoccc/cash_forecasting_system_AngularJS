/*!
{
  "name": "Web Animation API",
  "property": "animation",
  "tags": ["webanimations"],
  "polyfills": ["webanimationsjs"],
  "notes": [{
    "name": "Introducing Web Animations",
    "href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("webanimations","animate" in a("div"))});