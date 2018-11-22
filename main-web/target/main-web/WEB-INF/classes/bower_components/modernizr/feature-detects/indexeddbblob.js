/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(c,b,a){c.addAsyncTest(function(){var d;var j="detect-blob-support";var h=false;var g;var f;try{d=a("indexedDB",window)}catch(i){}if(!(c.indexeddb&&c.indexeddb.deletedatabase)){return false}try{d.deleteDatabase(j).onsuccess=function(){g=d.open(j,1);g.onupgradeneeded=function(){g.result.createObjectStore("store")};g.onsuccess=function(){f=g.result;try{f.transaction("store","readwrite").objectStore("store").put(new Blob(),"key");h=true}catch(k){h=false}finally{b("indexeddbblob",h);f.close();d.deleteDatabase(j)}}}}catch(i){b("indexeddbblob",false)}})});