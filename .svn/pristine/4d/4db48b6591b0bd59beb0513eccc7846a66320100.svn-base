/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
define(["Modernizr","createElement","addTest"],function(c,b,a){c.addAsyncTest(function(){var e,d,h;var g=b("img");var f="sizes" in g;if(!f&&("srcset" in g)){d="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";h=function(){a("sizes",g.width==2)};g.onload=h;g.onerror=h;g.setAttribute("sizes","9px");g.srcset=e+" 1w,"+d+" 8w";g.src=e}else{a("sizes",f)}})});