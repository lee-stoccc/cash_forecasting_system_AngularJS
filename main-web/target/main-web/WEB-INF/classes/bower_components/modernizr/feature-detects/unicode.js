/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
define(["Modernizr","createElement","testStyles","isSVG"],function(c,a,b,d){c.addTest("unicode",function(){var e;var f=a("span");var g=a("span");b("#modernizr{font-family:Arial,sans;font-size:300em;}",function(h){f.innerHTML=d?"\u5987":"&#5987";g.innerHTML=d?"\u2606":"&#9734";h.appendChild(f);h.appendChild(g);e="offsetWidth" in f&&f.offsetWidth!==g.offsetWidth});return e})});