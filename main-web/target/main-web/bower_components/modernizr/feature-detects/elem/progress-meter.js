/*!
{
  "name": "progress Element",
  "caniuse": "progress",
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
define(["Modernizr","createElement"],function(b,a){b.addTest("progressbar",a("progress").max!==undefined);b.addTest("meter",a("meter").max!==undefined)});