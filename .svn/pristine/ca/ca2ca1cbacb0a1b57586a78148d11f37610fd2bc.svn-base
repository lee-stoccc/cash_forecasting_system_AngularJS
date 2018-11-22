/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
define(["Modernizr","testStyles"],function(b,a){b.addTest("mathml",function(){var c;a("#modernizr{position:absolute;display:inline-block}",function(d){d.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>";c=d.offsetHeight>d.offsetWidth});return c})});