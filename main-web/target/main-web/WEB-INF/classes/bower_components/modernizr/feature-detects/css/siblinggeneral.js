/*!
{
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
!*/
define(["Modernizr","createElement","testStyles"],function(c,a,b){c.addTest("siblinggeneral",function(){return b("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(d){return d.lastChild.offsetWidth==200},2)})});