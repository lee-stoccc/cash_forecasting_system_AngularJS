/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
define(["Modernizr"],function(a){a.addTest("sessionstorage",function(){var b="modernizr";try{sessionStorage.setItem(b,b);sessionStorage.removeItem(b);return true}catch(c){return false}})});