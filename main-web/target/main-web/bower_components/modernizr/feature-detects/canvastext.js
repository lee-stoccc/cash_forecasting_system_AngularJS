/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(b,a){b.addTest("canvastext",function(){if(b.canvas===false){return false}return typeof a("canvas").getContext("2d").fillText=="function"})});