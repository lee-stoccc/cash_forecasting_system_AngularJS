/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
define(["Modernizr"],function(a){a.addTest("history",function(){var b=navigator.userAgent;if((b.indexOf("Android 2.")!==-1||(b.indexOf("Android 4.0")!==-1))&&b.indexOf("Mobile Safari")!==-1&&b.indexOf("Chrome")===-1&&b.indexOf("Windows Phone")===-1){return false}return(window.history&&"pushState" in window.history)})});