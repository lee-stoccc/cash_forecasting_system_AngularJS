/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/
define(["Modernizr","createElement","isSVG"],function(b,a,c){b.addTest("vml",function(){var f=a("div");var d=false;var e;if(!c){f.innerHTML='<v:shape id="vml_flag1" adj="1" />';e=f.firstChild;e.style.behavior="url(#default#VML)";d=e?typeof e.adj=="object":true}return d})});