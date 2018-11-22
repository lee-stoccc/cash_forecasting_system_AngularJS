/*!
{
  "name": "CSS Cubic Bezier Range",
  "property": "cubicbezierrange",
  "tags": ["css"],
  "builderAliases": ["css_cubicbezierrange"],
  "doc" : null,
  "authors": ["@calvein"],
  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
define(["Modernizr","createElement","prefixes"],function(c,a,b){c.addTest("cubicbezierrange",function(){var d=a("a");d.style.cssText=b.join("transition-timing-function:cubic-bezier(1,0,0,1.1); ");return !!d.style.length})});