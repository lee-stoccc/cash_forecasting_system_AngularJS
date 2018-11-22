/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){b.addTest("borderimage",a("borderImage","url() 1",true))});