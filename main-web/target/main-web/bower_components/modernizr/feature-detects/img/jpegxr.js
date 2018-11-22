/*!
{
  "name": "JPEG XR (extended range)",
  "async": true,
  "aliases": ["jpeg-xr"],
  "property": "jpegxr",
  "tags": ["image"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_XR"
  }]
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){var c=new Image();c.onload=c.onerror=function(){a("jpegxr",c.width==1,{aliases:["jpeg-xr"]})};c.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="})});