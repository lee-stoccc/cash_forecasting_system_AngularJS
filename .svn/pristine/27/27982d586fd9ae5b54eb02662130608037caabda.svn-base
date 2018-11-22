/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
define(["Modernizr"],function(a){a.addTest("cookies",function(){try{document.cookie="cookietest=1";var b=document.cookie.indexOf("cookietest=")!=-1;document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";return b}catch(c){return false}})});