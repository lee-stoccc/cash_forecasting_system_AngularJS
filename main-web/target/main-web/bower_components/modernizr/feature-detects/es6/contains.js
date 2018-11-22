/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
define(["Modernizr","is"],function(b,a){b.addTest("contains",a(String.prototype.contains,"function"))});