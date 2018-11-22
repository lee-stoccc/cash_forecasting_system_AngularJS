/*!
{
  "name": "ES5 Immutable Undefined",
  "property": "es5undefined",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
define(["Modernizr"],function(a){a.addTest("es5undefined",function(){var b,d;try{d=window.undefined;window.undefined=12345;b=typeof window.undefined==="undefined";window.undefined=d}catch(c){return false}return b})});