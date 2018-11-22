/*!
{
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/animations"],function(a){a.addTest("csspseudoanimations",function(){var b=false;if(!a.cssanimations||!window.getComputedStyle){return b}var c=["@",a._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',a._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");a.testStyles(c,function(d){b=window.getComputedStyle(d,":before").getPropertyValue("font-size")==="10px"});return b})});