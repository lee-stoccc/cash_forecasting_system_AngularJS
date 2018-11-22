/*!
{
  "name": "input formenctype",
  "property": "inputformenctype",
  "aliases": ["input-formenctype"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formenctype"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/16-formenctype.html"
  }],
  "polyfills": [
    "html5formshim"
  ]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("inputformenctype",!!("formEnctype" in a("input")),{aliases:["input-formenctype"]})});