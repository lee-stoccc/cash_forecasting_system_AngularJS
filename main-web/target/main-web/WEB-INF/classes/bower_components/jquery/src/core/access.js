define(["../core"],function(b){var a=function(c,h,k,j,e,m,l){var d=0,f=c.length,g=k==null;if(b.type(k)==="object"){e=true;for(d in k){a(c,h,d,k[d],true,m,l)}}else{if(j!==undefined){e=true;if(!b.isFunction(j)){l=true}if(g){if(l){h.call(c,j);h=null}else{g=h;h=function(n,i,o){return g.call(b(n),o)}}}if(h){for(;d<f;d++){h(c[d],k,l?j:j.call(c[d],d,h(c[d],k)))}}}}return e?c:g?h.call(c):f?h(c[0],k):m};return a});