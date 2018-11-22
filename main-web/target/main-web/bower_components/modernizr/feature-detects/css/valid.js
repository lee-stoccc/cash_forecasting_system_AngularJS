/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(c,b,a){c.addTest("cssvalid",function(){return b("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var d=a("input");e.appendChild(d);return d.clientWidth>10})})});