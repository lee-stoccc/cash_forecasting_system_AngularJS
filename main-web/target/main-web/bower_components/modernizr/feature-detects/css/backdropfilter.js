/*!
{
  "name": "Backdrop Filter",
  "property": "backdropfilter",
  "authors": ["Brian Seward"],
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Editor’s Draft specification",
      "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
    },
    {
      "name": "Caniuse for CSS Backdrop Filter",
      "href": "http://caniuse.com/#feat=css-backdrop-filter"
    },
    {
      "name": "WebKit Blog introduction + Demo",
      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
    }
  ]
}
!*/
define(["Modernizr","testAllProps"],function(b,a){b.addTest("backdropfilter",a("backdropFilter"))});