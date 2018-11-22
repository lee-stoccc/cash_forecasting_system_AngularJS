/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){try{var c="Modernizr",f=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");f.onmessage=function(g){f.terminate();a("dataworkers",c===g.data);f=null};f.onerror=function(){a("dataworkers",false);f=null};setTimeout(function(){a("dataworkers",false)},200);f.postMessage(c)}catch(d){setTimeout(function(){a("dataworkers",false)},0)}})});