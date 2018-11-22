/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
define(["Modernizr","test/es5/array","test/es5/date","test/es5/function","test/es5/object","test/es5/strictmode","test/es5/string","test/json","test/es5/syntax","test/es5/undefined"],function(a){a.addTest("es5",function(){return !!(a.es5array&&a.es5date&&a.es5function&&a.es5object&&a.strictmode&&a.es5string&&a.json&&a.es5syntax&&a.es5undefined)})});