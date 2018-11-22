/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(d,b,c,a){d.addTest("csstransforms3d",function(){var f=!!b("perspective","1px",true);var e=d._config.usePrefixes;if(f&&(!e||"webkitPerspective" in a.style)){var g;var h="#modernizr{width:0;height:0}";if(d.supports){g="@supports (perspective: 1px)"}else{g="@media (transform-3d)";if(e){g+=",(-webkit-transform-3d)"}}g+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}";c(h+g,function(i){f=i.offsetWidth===7&&i.offsetHeight===18})}return f})});