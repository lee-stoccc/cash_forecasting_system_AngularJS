/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){b.addTest("ellipsis",a("textOverflow","ellipsis"))});