define(["../core","../var/document","../ajax"],function(b,a){b.ajaxPrefilter(function(c){if(c.crossDomain){c.contents.script=false}});b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){b.globalEval(c);return c}}});b.ajaxPrefilter("script",function(c){if(c.cache===undefined){c.cache=false}if(c.crossDomain){c.type="GET"}});b.ajaxTransport("script",function(d){if(d.crossDomain){var c,e;return{send:function(g,f){c=b("<script>").prop({charset:d.scriptCharset,src:d.url}).on("load error",e=function(h){c.remove();e=null;if(h){f(h.type==="error"?404:200,h.type)}});a.head.appendChild(c[0])},abort:function(){if(e){e()}}}}})});