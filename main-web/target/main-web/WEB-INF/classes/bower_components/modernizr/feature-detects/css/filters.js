/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/
define(["Modernizr","createElement","prefixes","testAllProps","test/css/supports"],function(d,b,c,a){d.addTest("cssfilters",function(){if(d.supports){return a("filter","blur(2px)")}else{var e=b("a");e.style.cssText=c.join("filter:blur(2px); ");return !!e.style.length&&((document.documentMode===undefined||document.documentMode>9))}})});