define(["../core","../var/document","./var/rsingleTag","../traversing/findFilter"],function(e,a,d){var b,c=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,f=e.fn.init=function(g,j,h){var i,k;if(!g){return this}h=h||b;if(typeof g==="string"){if(g[0]==="<"&&g[g.length-1]===">"&&g.length>=3){i=[null,g,null]}else{i=c.exec(g)}if(i&&(i[1]||!j)){if(i[1]){j=j instanceof e?j[0]:j;e.merge(this,e.parseHTML(i[1],j&&j.nodeType?j.ownerDocument||j:a,true));if(d.test(i[1])&&e.isPlainObject(j)){for(i in j){if(e.isFunction(this[i])){this[i](j[i])}else{this.attr(i,j[i])}}}return this}else{k=a.getElementById(i[2]);if(k){this[0]=k;this.length=1}return this}}else{if(!j||j.jquery){return(j||h).find(g)}else{return this.constructor(j).find(g)}}}else{if(g.nodeType){this[0]=g;this.length=1;return this}else{if(e.isFunction(g)){return h.ready!==undefined?h.ready(g):g(e)}}}return e.makeArray(g,this)};f.prototype=e.fn;b=e(a);return f});