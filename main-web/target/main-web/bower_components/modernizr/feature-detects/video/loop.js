/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("videoloop","loop" in a("video"))});