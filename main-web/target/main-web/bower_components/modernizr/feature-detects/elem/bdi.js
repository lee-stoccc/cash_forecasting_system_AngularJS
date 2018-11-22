/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(c,b,a){c.addTest("bdi",function(){var f=b("div");var e=b("bdi");e.innerHTML="&#1573;";f.appendChild(e);a.appendChild(f);var d=((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).direction==="rtl");a.removeChild(f);return d})});