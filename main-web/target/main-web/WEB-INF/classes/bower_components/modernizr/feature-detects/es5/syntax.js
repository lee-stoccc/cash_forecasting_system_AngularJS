/*!
{
  "name": "ES5 Syntax",
  "property": "es5syntax",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }, {
    "name": "original implementation of detect code",
    "href": "http://kangax.github.io/es5-compat-table/"
  }],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
  "tags": ["es5"]
}
!*/
define(["Modernizr"],function(Modernizr){Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{stringAccess=eval('"foobar"[3] === "b"');getter=eval("({ get x(){ return 1 } }).x === 1");eval("({ set x(v){ value = v; } }).x = 1");setter=value===1;eval("obj = ({ if: 1 })");reservedWords=obj["if"]===1;zeroWidthChars=eval("_\u200c\u200d = true");return stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return false}})});