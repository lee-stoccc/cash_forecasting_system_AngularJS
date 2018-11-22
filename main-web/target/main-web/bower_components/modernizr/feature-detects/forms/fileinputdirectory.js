/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(c,b,a){c.addTest("fileinputdirectory",function(){var g=b("input"),e="directory";g.type="file";if(e in g){return true}else{for(var f=0,d=a.length;f<d;f++){if(a[f]+e in g){return true}}}return false})});