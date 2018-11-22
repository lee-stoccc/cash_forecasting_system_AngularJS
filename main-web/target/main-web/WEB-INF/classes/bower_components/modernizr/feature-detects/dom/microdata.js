/*!
{
  "name": "microdata",
  "property": "microdata",
  "tags": ["dom"],
  "builderAliases": ["dom_microdata"],
  "notes": [{
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/microdata/"
  }]
}
!*/
define(["Modernizr"],function(a){a.addTest("microdata","getItems" in document)});