/*!
{
  "name": "IE8 compat mode",
  "property": "ie8compat",
  "authors": ["Erich Ocean"]
}
!*/
define(["Modernizr"],function(a){a.addTest("ie8compat",(!window.addEventListener&&!!document.documentMode&&document.documentMode===7))});