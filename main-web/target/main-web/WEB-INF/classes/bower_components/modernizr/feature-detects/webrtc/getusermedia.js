/*!
{
  "name": "getUserMedia",
  "property": "getusermedia",
  "caniuse": "stream",
  "tags": ["webrtc"],
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "W3C Media Capture and Streams spec",
    "href": "https://www.w3.org/TR/mediacapture-streams/"
  }],
  "polyfills": ["getusermedia"]
}
!*/
define(["Modernizr","prefixed"],function(b,a){b.addTest("getusermedia",!!a("getUserMedia",navigator))});