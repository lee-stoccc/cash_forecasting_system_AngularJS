/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(c,b,a,d){c.addTest("regions",function(){if(d){return false}var k=c.prefixed("flowFrom");var h=c.prefixed("flowInto");var o=false;if(!k||!h){return o}var m=b("iframe");var e=b("div");var i=b("div");var l=b("div");var g="modernizr_flow_for_regions_check";i.innerText="M";e.style.cssText="top: 150px; left: 150px; padding: 0px;";l.style.cssText="width: 50px; height: 50px; padding: 42px;";l.style[k]=g;e.appendChild(i);e.appendChild(l);a.appendChild(e);var j,n;var f=i.getBoundingClientRect();i.style[h]=g;j=i.getBoundingClientRect();n=parseInt(j.left-f.left,10);a.removeChild(e);if(n==42){o=true}else{a.appendChild(m);f=m.getBoundingClientRect();m.style[h]=g;j=m.getBoundingClientRect();if(f.height>0&&f.height!==j.height&&j.height===0){o=true}}i=l=e=m=undefined;return o})});