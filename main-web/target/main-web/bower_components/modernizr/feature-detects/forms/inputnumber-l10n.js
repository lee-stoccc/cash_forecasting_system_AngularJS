/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(d,c,a,b){d.addTest("localizednumber",function(){if(!d.inputtypes.number){return false}if(!d.formvalidation){return false}var i=c("div");var k;var f=b();var g=(function(){return a.insertBefore(f,a.firstElementChild||a.firstChild)}());i.innerHTML='<input type="number" value="1.0" step="0.1"/>';var h=i.childNodes[0];g.appendChild(i);h.focus();try{document.execCommand("InsertText",false,"1,1")}catch(j){}k=h.type==="number"&&h.valueAsNumber===1.1&&h.checkValidity();g.removeChild(i);f.fake&&g.parentNode.removeChild(g);return k})});