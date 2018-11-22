/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(e,a,c,d,b){e.addTest("oninput",function(){var g=c("input");var f;g.setAttribute("oninput","return");if(b("oninput",a)||typeof g.oninput=="function"){return true}try{var i=document.createEvent("KeyboardEvent");f=false;var h=function(k){f=true;k.preventDefault();k.stopPropagation()};i.initKeyEvent("keypress",true,true,window,false,false,false,false,0,"e".charCodeAt(0));a.appendChild(g);g.addEventListener("input",h,false);g.focus();g.dispatchEvent(i);g.removeEventListener("input",h,false);a.removeChild(g)}catch(j){f=false}return f})});