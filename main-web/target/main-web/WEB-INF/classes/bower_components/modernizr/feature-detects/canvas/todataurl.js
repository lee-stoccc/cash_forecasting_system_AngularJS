/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(c,b){var a=b("canvas");c.addTest("todataurljpeg",function(){return !!c.canvas&&a.toDataURL("image/jpeg").indexOf("data:image/jpeg")===0});c.addTest("todataurlpng",function(){return !!c.canvas&&a.toDataURL("image/png").indexOf("data:image/png")===0});c.addTest("todataurlwebp",function(){var d=false;try{d=!!c.canvas&&a.toDataURL("image/webp").indexOf("data:image/webp")===0}catch(f){}return d})});