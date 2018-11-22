/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
define(["Modernizr","prefixes","createElement"],function(c,b,a){c.addTest("cssgradients",function(){var k="background-image:";var j="gradient(linear,left top,right bottom,from(#9f9),to(white));";var f="";var l;for(var e=0,d=b.length-1;e<d;e++){l=(e===0?"to ":"");f+=k+b[e]+"linear-gradient("+l+"left top, #9f9, white);"}if(c._config.usePrefixes){f+=k+"-webkit-"+j}var h=a("a");var g=h.style;g.cssText=f;return(""+g.backgroundImage).indexOf("gradient")>-1})});