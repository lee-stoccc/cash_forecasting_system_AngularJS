/*!
{
  "name": "Data URI",
  "property": "datauri",
  "caniuse": "datauri",
  "tags": ["url"],
  "builderAliases": ["url_data_uri"],
  "async": true,
  "notes": [{
    "name": "Wikipedia article",
    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
  }],
  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){if(navigator.userAgent.indexOf("MSIE 7.")!==-1){setTimeout(function(){a("datauri",false)},10)}var c=new Image();c.onerror=function(){a("datauri",false)};c.onload=function(){if(c.width==1&&c.height==1){d()}else{a("datauri",false)}};c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";function d(){var e=new Image();e.onerror=function(){a("datauri",true);b.datauri=new Boolean(true);b.datauri.over32kb=false};e.onload=function(){a("datauri",true);b.datauri=new Boolean(true);b.datauri.over32kb=(e.width==1&&e.height==1)};var f="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";while(f.length<33000){f="\r\n"+f}e.src="data:image/gif;base64,"+f}})});