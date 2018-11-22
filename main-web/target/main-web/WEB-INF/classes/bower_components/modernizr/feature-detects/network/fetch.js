/*!
{
  "name": "Fetch API",
  "property": "fetch",
  "tags": ["network"],
  "caniuse": "fetch",
  "notes": [{
    "name": "Fetch Living Standard",
    "href": "https://fetch.spec.whatwg.org/"
  }],
  "polyfills": ["fetch"]
}
!*/
define(["Modernizr"],function(a){a.addTest("fetch","fetch" in window)});