/*!
{
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
!*/
define(["Modernizr","testStyles","test/css/transitions"],function(a){a.addTest("csspseudotransitions",function(){var b=false;if(!a.csstransitions||!window.getComputedStyle){return b}var c='#modernizr:before { content:" "; font-size:5px;'+a._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";a.testStyles(c,function(d){window.getComputedStyle(d,":before").getPropertyValue("font-size");d.className+="trigger";b=window.getComputedStyle(d,":before").getPropertyValue("font-size")==="5px"});return b})});