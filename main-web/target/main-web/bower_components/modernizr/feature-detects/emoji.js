/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
define(["Modernizr","createElement","test/canvastext"],function(b,a){b.addTest("emoji",function(){if(!b.canvastext){return false}var f=window.devicePixelRatio||1;var e=12*f;var d=a("canvas");var c=d.getContext("2d");c.fillStyle="#f00";c.textBaseline="top";c.font="32px Arial";c.fillText("\ud83d\udc28",0,0);return c.getImageData(e,e,1,1).data[0]!==0})});