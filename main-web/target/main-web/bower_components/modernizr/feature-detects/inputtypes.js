/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
define(["Modernizr","inputElem","docElement"],function(e,d,c){var b="search tel url email datetime date month week time datetime-local number range color".split(" ");var a={};e.inputtypes=(function(k){var f=k.length;var h="1)";var m;var l;var g;for(var j=0;j<f;j++){d.setAttribute("type",m=k[j]);g=d.type!=="text"&&"style" in d;if(g){d.value=h;d.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(m)&&d.style.WebkitAppearance!==undefined){c.appendChild(d);l=document.defaultView;g=l.getComputedStyle&&l.getComputedStyle(d,null).WebkitAppearance!=="textfield"&&(d.offsetHeight!==0);c.removeChild(d)}else{if(/^(search|tel)$/.test(m)){}else{if(/^(url|email)$/.test(m)){g=d.checkValidity&&d.checkValidity()===false}else{g=d.value!=h}}}}a[k[j]]=!!g}return a})(b)});