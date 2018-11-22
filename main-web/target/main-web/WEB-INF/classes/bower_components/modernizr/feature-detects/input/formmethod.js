/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("inputformmethod",!!("formMethod" in a("input")))});