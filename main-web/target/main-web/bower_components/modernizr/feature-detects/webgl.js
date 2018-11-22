/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("webgl",function(){var d=a("canvas");var c="probablySupportsContext" in d?"probablySupportsContext":"supportsContext";if(c in d){return d[c]("webgl")||d[c]("experimental-webgl")}return"WebGLRenderingContext" in window})});