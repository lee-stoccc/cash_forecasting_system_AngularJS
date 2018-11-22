/*!
{
  "name": "Track element and Timed Text Track",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "builderAliases": ["elem_track"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 track Element Spec",
    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
  },{
    "name": "W3 track API Spec",
    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("texttrackapi",typeof(a("video").addTextTrack)==="function");b.addTest("track","kind" in a("track"))});