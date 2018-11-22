/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(b,a){b.addTest("canvaswinding",function(){if(b.canvas===false){return false}var c=a("canvas").getContext("2d");c.rect(0,0,10,10);c.rect(2,2,6,6);return c.isPointInPath(5,5,"evenodd")===false})});