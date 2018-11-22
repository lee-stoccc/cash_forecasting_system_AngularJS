/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
define(["Modernizr"],function(a){a.addTest("framed",window.location!=top.location)});