/*!
{
  "name": "details Element",
  "caniuse": "details",
  "property": "details",
  "tags": ["elem"],
  "builderAliases": ["elem_details"],
  "authors": ["@mathias"],
  "notes": [{
    "name": "Mathias' Original",
    "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
  }]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(d,b,a,c){d.addTest("details",function(){var e=b("details");var f;if(!("open" in e)){return false}c("#modernizr details{display:block}",function(g){g.appendChild(e);e.innerHTML="<summary>a</summary>b";f=e.offsetHeight;e.open=true;f=f!=e.offsetHeight});return f})});