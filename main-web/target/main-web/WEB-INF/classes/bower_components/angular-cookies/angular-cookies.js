(function(d,a){a.module("ngCookies",["ng"]).provider("$cookies",[function c(){var g=this.defaults={};function f(h){return h?a.extend({},g,h):g}this.$get=["$$cookieReader","$$cookieWriter",function(i,h){return{get:function(j){return i()[j]},getObject:function(j){var k=this.get(j);return k?a.fromJson(k):k},getAll:function(){return i()},put:function(k,l,j){h(k,l,f(j))},putObject:function(k,l,j){this.put(k,a.toJson(l),j)},remove:function(k,j){h(k,undefined,f(j))}}}]}]);a.module("ngCookies").factory("$cookieStore",["$cookies",function(f){return{get:function(g){return f.getObject(g)},put:function(g,h){f.putObject(g,h)},remove:function(g){f.remove(g)}}}]);function b(k,i,f){var g=f.baseHref();var h=k[0];function j(n,o,m){var p,l;m=m||{};l=m.expires;p=a.isDefined(m.path)?m.path:g;if(a.isUndefined(o)){l="Thu, 01 Jan 1970 00:00:00 GMT";o=""}if(a.isString(l)){l=new Date(l)}var q=encodeURIComponent(n)+"="+encodeURIComponent(o);q+=p?";path="+p:"";q+=m.domain?";domain="+m.domain:"";q+=l?";expires="+l.toUTCString():"";q+=m.secure?";secure":"";var r=q.length+1;if(r>4096){i.warn("Cookie '"+n+"' possibly not set or overflowed because it was too large ("+r+" > 4096 bytes)!")}return q}return function(m,n,l){h.cookie=j(m,n,l)}}b.$inject=["$document","$log","$browser"];a.module("ngCookies").provider("$$cookieWriter",function e(){this.$get=b})})(window,window.angular);