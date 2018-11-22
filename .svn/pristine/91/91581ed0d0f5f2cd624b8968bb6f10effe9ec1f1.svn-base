/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(["Modernizr","testStyles"],function(b,a){a("#modernizr { height: 50vh; }",function(e){var c=parseInt(window.innerHeight/2,10);var d=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);b.addTest("cssvhunit",d==c)})});