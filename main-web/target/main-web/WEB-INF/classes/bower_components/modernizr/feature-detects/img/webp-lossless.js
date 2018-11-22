/*!
{
  "name": "Webp Lossless",
  "async": true,
  "property": ["webplossless", "webp-lossless"],
  "tags": ["image"],
  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }]
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){var c=new Image();c.onerror=function(){a("webplossless",false,{aliases:["webp-lossless"]})};c.onload=function(){a("webplossless",c.width==1,{aliases:["webp-lossless"]})};c.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})});