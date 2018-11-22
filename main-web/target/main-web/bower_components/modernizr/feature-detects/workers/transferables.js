/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(b,a){b.addAsyncTest(function(){var m=!!(b.blobconstructor&&b.bloburls&&b.webworkers&&b.typedarrays);if(!m){return a("transferables",false)}try{var j,d='var hello = "world"',c=new Blob([d],{type:"text/javascript"}),f=URL.createObjectURL(c),i=new Worker(f),l;i.onerror=h;l=setTimeout(h,200);j=new ArrayBuffer(1);i.postMessage(j,[j]);a("transferables",j.byteLength===0);g()}catch(k){h()}function h(){a("transferables",false);g()}function g(){if(f){URL.revokeObjectURL(f)}if(i){i.terminate()}if(l){clearTimeout(l)}}})});