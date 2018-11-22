/*!
{
  "name": "ES5 Date",
  "property": "es5date",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
define(["Modernizr"],function(a){a.addTest("es5date",function(){var b="2013-04-12T06:06:37.307Z",c=false;try{c=!!Date.parse(b)}catch(d){}return !!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&c)})});