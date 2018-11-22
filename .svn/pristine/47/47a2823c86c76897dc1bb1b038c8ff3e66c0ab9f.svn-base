/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
define(["Modernizr","prefixed","is"],function(f,a,e){var d=a("crypto",window);var b;if(d&&"getRandomValues" in d&&"Uint32Array" in window){var g=new Uint32Array(10);var c=d.getRandomValues(g);b=c&&e(c[0],"number")}f.addTest("getrandomvalues",!!b)});