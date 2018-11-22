/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(d,a){var b;try{b=a("indexedDB",window)}catch(c){}d.addTest("indexeddb",!!b);if(!!b){d.addTest("indexeddb.deletedatabase","deleteDatabase" in b)}});