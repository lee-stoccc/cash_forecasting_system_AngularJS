/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("canvas",function(){var c=a("canvas");return !!(c.getContext&&c.getContext("2d"))})});