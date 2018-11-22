/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(d,a,c,b){c("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(f){var g=f.childNodes[2];var i=f.childNodes[1];var m=f.childNodes[0];var k=parseInt((i.offsetWidth-i.clientWidth)/2,10);var l=m.clientWidth/100;var e=m.clientHeight/100;var j=parseInt(Math.min(l,e)*50,10);var h=parseInt((window.getComputedStyle?getComputedStyle(g,null):g.currentStyle).width,10);d.addTest("cssvminunit",b(j,h)||b(j,h-k))},3)});