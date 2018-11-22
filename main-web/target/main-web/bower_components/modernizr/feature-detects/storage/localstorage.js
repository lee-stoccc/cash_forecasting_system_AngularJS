/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
define(["Modernizr"],function(a){a.addTest("localstorage",function(){var b="modernizr";try{localStorage.setItem(b,b);localStorage.removeItem(b);return true}catch(c){return false}})});