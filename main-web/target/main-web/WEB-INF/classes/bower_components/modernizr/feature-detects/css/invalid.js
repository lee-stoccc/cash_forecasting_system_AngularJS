/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(c,b,a){c.addTest("cssinvalid",function(){return b("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var d=a("input");d.required=true;e.appendChild(d);return d.clientWidth>10})})});