/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(c,a,b){c.addTest("opacity",function(){var d=a("a").style;d.cssText=b.join("opacity:.55;");return(/^0.55$/).test(d.opacity)})});