/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/
define(["Modernizr","createElement","test/webgl"],function(b,a){b.addAsyncTest(function(){b.webglextensions=new Boolean(false);if(!b.webgl){return}var f;var d;var h;try{f=a("canvas");d=f.getContext("webgl")||f.getContext("experimental-webgl");h=d.getSupportedExtensions()}catch(j){return}if(d!==undefined){b.webglextensions=new Boolean(true)}for(var g=-1,c=h.length;++g<c;){b.webglextensions[h[g]]=true}f=undefined})});