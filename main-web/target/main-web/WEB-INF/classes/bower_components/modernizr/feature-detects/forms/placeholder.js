/*!
{
  "name": "placeholder attribute",
  "property": "placeholder",
  "tags": ["forms", "attribute"],
  "builderAliases": ["forms_placeholder"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("placeholder",("placeholder" in a("input")&&"placeholder" in a("textarea")))});