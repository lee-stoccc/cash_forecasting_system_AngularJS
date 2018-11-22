/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
  }]
}
!*/
define(["Modernizr","createElement","prefixed"],function(c,b,a){c.addTest("requestautocomplete",!!a("requestAutocomplete",b("form")))});