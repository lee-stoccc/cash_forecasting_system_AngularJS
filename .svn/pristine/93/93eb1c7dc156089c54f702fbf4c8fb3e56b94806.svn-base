/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
define(["Modernizr"],function(a){a.addTest("xhrresponsetype",(function(){if(typeof XMLHttpRequest=="undefined"){return false}var b=new XMLHttpRequest();b.open("get","/",true);return"response" in b}()))});