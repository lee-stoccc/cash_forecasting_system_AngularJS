define(["ModernizrProto","Modernizr","hasOwnProp","setClasses"],function(e,d,a,c){e._l={};e.on=function(g,f){if(!this._l[g]){this._l[g]=[]}this._l[g].push(f);if(d.hasOwnProperty(g)){setTimeout(function(){d._trigger(g,d[g])},0)}};e._trigger=function(h,g){if(!this._l[h]){return}var f=this._l[h];setTimeout(function(){var k,j;for(k=0;k<f.length;k++){j=f[k];j(g)}},0);delete this._l[h]};function b(g,j){if(typeof g=="object"){for(var f in g){if(a(g,f)){b(f,g[f])}}}else{g=g.toLowerCase();var i=g.split(".");var h=d[i[0]];if(i.length==2){h=h[i[1]]}if(typeof h!="undefined"){return d}j=typeof j=="function"?j():j;if(i.length==1){d[i[0]]=j}else{if(d[i[0]]&&!(d[i[0]] instanceof Boolean)){d[i[0]]=new Boolean(d[i[0]])}d[i[0]][i[1]]=j}c([(!!j&&j!=false?"":"no-")+i.join("-")]);d._trigger(g,j)}return d}d._q.push(function(){e.addTest=b});return b});