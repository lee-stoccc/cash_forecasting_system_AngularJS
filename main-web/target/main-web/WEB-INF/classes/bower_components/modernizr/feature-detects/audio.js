/*!
{
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("audio",function(){var d=a("audio");var c=false;try{if(c=!!d.canPlayType){c=new Boolean(c);c.ogg=d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");c.mp3=d.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,"");c.opus=d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"");c.wav=d.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");c.m4a=(d.canPlayType("audio/x-m4a;")||d.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(f){}return c})});