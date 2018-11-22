/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("inlinesvg",function(){var c=a("div");c.innerHTML="<svg/>";return(typeof SVGRect!="undefined"&&c.firstChild&&c.firstChild.namespaceURI)=="http://www.w3.org/2000/svg"})});