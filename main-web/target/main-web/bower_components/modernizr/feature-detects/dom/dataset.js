/*!
{
  "name": "dataset API",
  "caniuse": "dataset",
  "property": "dataset",
  "tags": ["dom"],
  "builderAliases": ["dom_dataset"],
  "authors": ["@phiggins42"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("dataset",function(){var c=a("div");c.setAttribute("data-a-b","c");return !!(c.dataset&&c.dataset.aB==="c")})});