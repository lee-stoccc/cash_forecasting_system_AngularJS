/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
define(["Modernizr","testProp"],function(b,a){b.addTest("textshadow",a("textShadow","1px 1px"))});