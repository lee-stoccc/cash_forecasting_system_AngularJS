/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
define(["Modernizr","createElement","addTest","test/canvas"],function(c,b,a){c.addAsyncTest(function(){if(!c.canvas){return false}var f=new Image();var e=b("canvas");var d=e.getContext("2d");f.onload=function(){a("apng",function(){if(typeof e.getContext=="undefined"){return false}else{d.drawImage(f,0,0);return d.getImageData(0,0,1,1).data[3]===0}})};f.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="})});