/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
define(["Modernizr","testStyles"],function(b,a){a("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(d){var c;var e=d.childNodes;c=e[0].offsetLeft<e[1].offsetLeft;b.addTest("displaytable",c,{aliases:["display-table"]})},2)});