/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("bgpositionshorthand",function(){var d=a("a");var c=d.style;var e="right 10px bottom 10px";c.cssText="background-position: "+e+";";return(c.backgroundPosition===e)})});