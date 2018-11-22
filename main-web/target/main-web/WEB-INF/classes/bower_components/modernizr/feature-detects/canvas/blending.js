/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(b,a){b.addTest("canvasblending",function(){if(b.canvas===false){return false}var c=a("canvas").getContext("2d");try{c.globalCompositeOperation="screen"}catch(d){}return c.globalCompositeOperation==="screen"})});