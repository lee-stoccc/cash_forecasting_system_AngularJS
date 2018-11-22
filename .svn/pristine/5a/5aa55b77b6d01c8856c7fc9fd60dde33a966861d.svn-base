/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(c,b,a){c.addTest("unicoderange",function(){return c.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(f){var e=[".",".","m","m"];for(var d=0;d<e.length;d++){var g=a("span");g.innerHTML=e[d];g.className=d%2?"mono":"";f.appendChild(g);e[d]=g.clientWidth}return(e[0]!==e[1]&&e[2]===e[3])})})});