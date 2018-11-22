/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
define(["Modernizr","domPrefixes","hasEvent"],function(c,b,a){c.addTest("pointerevents",function(){var d=false,e=b.length;d=c.hasEvent("pointerdown");while(e--&&!d){if(a(b[e]+"pointerdown")){d=true}}return d})});