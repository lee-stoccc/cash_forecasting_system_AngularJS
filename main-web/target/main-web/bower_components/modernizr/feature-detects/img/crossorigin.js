/*!
{
  "name": "Image crossOrigin",
  "property": "imgcrossorigin",
  "notes": [{
    "name": "Cross Domain Images and the Tainted Canvas",
    "href": "https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/"
  }]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("imgcrossorigin","crossOrigin" in a("img"))});