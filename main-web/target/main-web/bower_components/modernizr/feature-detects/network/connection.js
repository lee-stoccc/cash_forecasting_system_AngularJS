/*!
{
  "name": "Low Bandwidth Connection",
  "property": "lowbandwidth",
  "tags": ["network"],
  "builderAliases": ["network_connection"]
}
!*/
define(["Modernizr"],function(a){a.addTest("lowbandwidth",function(){var b=navigator.connection||{type:0};return b.type==3||b.type==4||/^[23]g$/.test(b.type)})});