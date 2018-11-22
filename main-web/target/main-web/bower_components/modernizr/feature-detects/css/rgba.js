/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("rgba",function(){var c=a("a").style;c.cssText="background-color:rgba(150,255,150,.5)";return(""+c.backgroundColor).indexOf("rgba")>-1})});