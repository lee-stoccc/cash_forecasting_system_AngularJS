define(["../var/document","../var/support"],function(a,b){b.createHTMLDocument=(function(){var c=a.implementation.createHTMLDocument("").body;c.innerHTML="<form></form><form></form>";return c.childNodes.length===2})();return b});