/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("videopreload","preload" in a("video"))});