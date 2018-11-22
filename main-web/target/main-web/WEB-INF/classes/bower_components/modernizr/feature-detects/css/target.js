/*!
{
  "name": "CSS :target pseudo-class",
  "caniuse": "css-sel3",
  "property": "target",
  "tags": ["css"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
  }],
  "authors": ["@zachleat"],
  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
}
!*/
define(["Modernizr"],function(a){a.addTest("target",function(){var c=window.document;if(!("querySelectorAll" in c)){return false}try{c.querySelectorAll(":target");return true}catch(b){return false}})});