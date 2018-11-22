/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(e,c,d){var a="autocomplete autofocus list placeholder max min multiple pattern required step".split(" ");var b={};e.input=(function(h){for(var g=0,f=h.length;g<f;g++){b[h[g]]=!!(h[g] in d)}if(b.list){b.list=!!(c("datalist")&&window.HTMLDataListElement)}return b})(a)});