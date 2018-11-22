/*!
{
  "name": "CSS position: sticky",
  "property": "csspositionsticky",
  "tags": ["css"],
  "builderAliases": ["css_positionsticky"],
  "notes": [{
    "name": "Chrome bug report",
    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
  }],
  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
}
!*/
define(["Modernizr","createElement","prefixes"],function(c,a,b){c.addTest("csspositionsticky",function(){var g="position:";var f="sticky";var e=a("a");var d=e.style;d.cssText=g+b.join(f+";"+g).slice(0,-g.length);return d.position.indexOf(f)!==-1})});