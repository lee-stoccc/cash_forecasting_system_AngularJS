/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("video",function(){var d=a("video");var c=false;try{if(c=!!d.canPlayType){c=new Boolean(c);c.ogg=d.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");c.h264=d.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");c.webm=d.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"");c.vp9=d.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"");c.hls=d.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")}}catch(f){}return c})});