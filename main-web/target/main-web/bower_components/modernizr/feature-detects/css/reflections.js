/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){b.addTest("cssreflections",a("boxReflect","above",true))});