/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/
define(["Modernizr","testStyles"],function(c,b){var a=(function(){var g=navigator.userAgent;var d=g.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1);var f=g.match(/w(eb)?osbrowser/gi);var h=g.match(/windows phone/gi)&&g.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;var e=d<533&&g.match(/android/gi);return f||e||h}());if(a){c.addTest("fontface",false)}else{b('@font-face {font-family:"font";src:url("https://")}',function(h,i){var g=document.getElementById("smodernizr");var e=g.sheet||g.styleSheet;var f=e?(e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||""):"";var d=/src/i.test(f)&&f.indexOf(i.split(" ")[0])===0;c.addTest("fontface",d)})}});