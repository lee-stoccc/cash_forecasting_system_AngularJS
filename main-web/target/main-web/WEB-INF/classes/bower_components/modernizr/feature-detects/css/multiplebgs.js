/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("multiplebgs",function(){var c=a("a").style;c.cssText="background:url(https://),url(https://),red url(https://)";return(/(url\s*\(.*?){3}/).test(c.background)})});