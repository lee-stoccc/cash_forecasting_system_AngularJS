/*!
{
  "name": "CSS Subpixel Fonts",
  "property": "subpixelfont",
  "tags": ["css"],
  "builderAliases": ["css_subpixelfont"],
  "authors": [
    "@derSchepp",
    "@gerritvanaaken",
    "@rodneyrehm",
    "@yatil",
    "@ryanseddon"
  ],
  "notes": [{
    "name": "Origin Test",
    "href": "https://github.com/gerritvanaaken/subpixeldetect"
  }]
}
!*/
define(["Modernizr","testStyles"],function(b,a){a("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(c){var d=c.firstChild;d.innerHTML="This is a text written in Arial";b.addTest("subpixelfont",window.getComputedStyle?window.getComputedStyle(d,null).getPropertyValue("width")!=="44px":false)},1,["subpixel"])});