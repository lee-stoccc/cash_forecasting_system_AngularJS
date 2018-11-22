/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
  }]
}
!*/
define(["Modernizr","docElement"],function(b,a){b.addTest("cssall","all" in a.style)});