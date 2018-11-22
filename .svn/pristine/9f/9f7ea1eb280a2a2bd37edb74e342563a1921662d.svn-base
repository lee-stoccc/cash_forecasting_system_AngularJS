/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(c,b,a){c.addTest("ruby",function(){var f=b("ruby");var e=b("rt");var g=b("rp");var h="display";var j="fontSize";f.appendChild(g);f.appendChild(e);a.appendChild(f);if(d(g,h)=="none"||d(f,h)=="ruby"&&d(e,h)=="ruby-text"||d(g,j)=="6pt"&&d(e,j)=="6pt"){i();return true}else{i();return false}function d(l,m){var k;if(window.getComputedStyle){k=document.defaultView.getComputedStyle(l,null).getPropertyValue(m)}else{if(l.currentStyle){k=l.currentStyle[m]}}return k}function i(){a.removeChild(f);f=null;e=null;g=null}})});