/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
define(["Modernizr","createElement","contains"],function(c,b,a){c.addTest("hsla",function(){var d=b("a").style;d.cssText="background-color:hsla(120,40%,100%,.5)";return a(d.backgroundColor,"rgba")||a(d.backgroundColor,"hsla")})});