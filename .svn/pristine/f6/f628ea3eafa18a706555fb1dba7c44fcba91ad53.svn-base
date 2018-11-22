/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "https://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(d,a,b,c,e){d.addTest("wrapflow",function(){var g=a("wrapFlow");if(!g||e){return false}var i=g.replace(/([A-Z])/g,function(m,l){return"-"+l.toLowerCase()}).replace(/^ms-/,"-ms-");var f=c("div");var k=c("div");var h=c("span");k.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+i+":end;";h.innerText="X";f.appendChild(k);f.appendChild(h);b.appendChild(f);var j=h.offsetLeft;b.removeChild(f);k=h=f=undefined;return(j==150)})});