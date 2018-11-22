/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(c,a,b){c.addTest("datachannel",function(){if(!c.peerconnection){return false}for(var g=0,e=b.length;g<e;g++){var d=window[b[g]+"RTCPeerConnection"];if(d){var f=new d({iceServers:[{url:"stun:0"}]});return"createDataChannel" in f}}return false})});