/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){(function(){b.addTest("csscolumns",function(){var g=false;var i=a("columnCount");try{if(g=!!i){g=new Boolean(g)}}catch(h){}return g});var e=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"];var c,f;for(var d=0;d<e.length;d++){c=e[d].toLowerCase();f=a("column"+e[d]);if(c==="breakbefore"||c==="breakafter"||c=="breakinside"){f=f||a(e[d])}b.addTest("csscolumns."+c,f)}})()});