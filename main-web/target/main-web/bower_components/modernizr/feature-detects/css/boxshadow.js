/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){b.addTest("boxshadow",a("boxShadow","1px 1px",true))});