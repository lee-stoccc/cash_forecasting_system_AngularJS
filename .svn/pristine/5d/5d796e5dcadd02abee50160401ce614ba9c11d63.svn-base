/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/
define(["Modernizr","createElement","testStyles"],function(c,a,b){c.addTest("checked",function(){return b("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var d=a("input");d.setAttribute("type","checkbox");d.setAttribute("checked","checked");e.appendChild(d);return d.offsetLeft===20})})});