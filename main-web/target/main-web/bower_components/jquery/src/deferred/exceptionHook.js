define(["../core","../deferred"],function(b){var a=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;b.Deferred.exceptionHook=function(d,c){if(window.console&&window.console.warn&&d&&a.test(d.name)){window.console.warn("jQuery.Deferred exception: "+d.message,d.stack,c)}}});