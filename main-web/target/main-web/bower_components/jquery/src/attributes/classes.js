define(["../core","../var/rnotwhite","../data/var/dataPriv","../core/init"],function(e,d,a){var c=/[\t\r\n\f]/g;function b(f){return f.getAttribute&&f.getAttribute("class")||""}e.fn.extend({addClass:function(o){var h,g,p,k,n,l,f,m=0;if(e.isFunction(o)){return this.each(function(i){e(this).addClass(o.call(this,i,b(this)))})}if(typeof o==="string"&&o){h=o.match(d)||[];while((g=this[m++])){k=b(g);p=g.nodeType===1&&(" "+k+" ").replace(c," ");if(p){l=0;while((n=h[l++])){if(p.indexOf(" "+n+" ")<0){p+=n+" "}}f=e.trim(p);if(k!==f){g.setAttribute("class",f)}}}}return this},removeClass:function(o){var h,g,p,k,n,l,f,m=0;if(e.isFunction(o)){return this.each(function(i){e(this).removeClass(o.call(this,i,b(this)))})}if(!arguments.length){return this.attr("class","")}if(typeof o==="string"&&o){h=o.match(d)||[];while((g=this[m++])){k=b(g);p=g.nodeType===1&&(" "+k+" ").replace(c," ");if(p){l=0;while((n=h[l++])){while(p.indexOf(" "+n+" ")>-1){p=p.replace(" "+n+" "," ")}}f=e.trim(p);if(k!==f){g.setAttribute("class",f)}}}}return this},toggleClass:function(h,f){var g=typeof h;if(typeof f==="boolean"&&g==="string"){return f?this.addClass(h):this.removeClass(h)}if(e.isFunction(h)){return this.each(function(j){e(this).toggleClass(h.call(this,j,b(this),f),f)})}return this.each(function(){var l,k,j,m;if(g==="string"){k=0;j=e(this);m=h.match(d)||[];while((l=m[k++])){if(j.hasClass(l)){j.removeClass(l)}else{j.addClass(l)}}}else{if(h===undefined||g==="boolean"){l=b(this);if(l){a.set(this,"__className__",l)}if(this.setAttribute){this.setAttribute("class",l||h===false?"":a.get(this,"__className__")||"")}}}})},hasClass:function(f){var h,j,g=0;h=" "+f+" ";while((j=this[g++])){if(j.nodeType===1&&(" "+b(j)+" ").replace(c," ").indexOf(h)>-1){return true}}return false}})});