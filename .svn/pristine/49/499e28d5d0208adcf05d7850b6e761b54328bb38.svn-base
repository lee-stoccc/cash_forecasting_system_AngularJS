/*!
{
  "name": "Force Touch Events",
  "property": "forcetouch",
  "authors": ["Kraig Walker"],
  "notes": [{
    "name": "Responding to Force Touch Events from JavaScript",
    "href": "https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/RespondingtoForceTouchEventsfromJavaScript.html"
  }]
}
!*/
define(["Modernizr","hasEvent","prefixed"],function(c,b,a){c.addTest("forcetouch",function(){if(!b(a("mouseforcewillbegin",window,false),window)){return false}return MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN})});