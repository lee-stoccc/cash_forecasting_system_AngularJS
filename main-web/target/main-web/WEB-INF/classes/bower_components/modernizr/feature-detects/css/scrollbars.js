/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
define(["Modernizr","testStyles","prefixes"],function(c,a,b){a("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+b.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(d){c.addTest("cssscrollbar",d.scrollWidth==40)})});