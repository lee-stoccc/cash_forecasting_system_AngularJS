/*!
{
  "authors": ["Cătălin Mariș"],
  "caniuse": "proximity",
  "name": "Proximity API",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
  },{
    "name": "W3C specification",
    "href": "https://www.w3.org/TR/proximity/"
  }],
  "property": "proximity",
  "tags": ["events", "proximity"]
}
!*/
define(["Modernizr","addTest"],function(b,a){b.addAsyncTest(function(){var e;var d=300;function c(){clearTimeout(e);window.removeEventListener("deviceproximity",c);a("proximity",true)}if("ondeviceproximity" in window&&"onuserproximity" in window){window.addEventListener("deviceproximity",c);e=setTimeout(function(){window.removeEventListener("deviceproximity",c);a("proximity",false)},d)}else{a("proximity",false)}})});