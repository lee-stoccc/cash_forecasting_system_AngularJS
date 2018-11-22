/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(["Modernizr","testStyles"],function(b,a){a("#modernizr { width: 50vw; }",function(e){var d=parseInt(window.innerWidth/2,10);var c=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);b.addTest("cssvwunit",c==d)})});