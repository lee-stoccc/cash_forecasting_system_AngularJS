/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){try{var k=window.BlobBuilder;var n=window.URL;if(b._config.usePrefix){k=k||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder;n=n||window.MozURL||window.webkitURL||window.MSURL||window.OURL}var j="Modernizr",c,m,i,f,o,d="this.onmessage=function(e){postMessage(e.data)}";try{c=new Blob([d],{type:"text/javascript"})}catch(l){}if(!c){m=new k();m.append(d);c=m.getBlob()}f=n.createObjectURL(c);i=new Worker(f);i.onmessage=function(p){a("blobworkers",j===p.data);g()};i.onerror=h;o=setTimeout(h,200);i.postMessage(j)}catch(l){h()}function h(){a("blobworkers",false);g()}function g(){if(f){n.revokeObjectURL(f)}if(i){i.terminate()}if(o){clearTimeout(o)}}})});