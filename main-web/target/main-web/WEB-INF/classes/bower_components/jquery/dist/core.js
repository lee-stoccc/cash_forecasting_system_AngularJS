define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./core/DOMEval"],function(a,o,b,p,h,i,c,e,q,n,j,s,l,t){var f="3.1.0",m=function(v,w){return new m.fn.init(v,w)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^-ms-/,k=/-([a-z])/g,r=function(v,w){return w.toUpperCase()};m.fn=m.prototype={jquery:f,constructor:m,length:0,toArray:function(){return p.call(this)},get:function(v){return v!=null?(v<0?this[v+this.length]:this[v]):p.call(this)},pushStack:function(v){var w=m.merge(this.constructor(),v);w.prevObject=this;return w},each:function(v){return m.each(this,v)},map:function(v){return this.pushStack(m.map(this,function(x,w){return v.call(x,w,x)}))},slice:function(){return this.pushStack(p.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(x){var v=this.length,w=+x+(x<0?v:0);return this.pushStack(w>=0&&w<v?[this[w]]:[])},end:function(){return this.prevObject||this.constructor()},push:i,sort:a.sort,splice:a.splice};m.extend=m.fn.extend=function(){var E,x,v,w,B,C,A=arguments[0]||{},z=1,y=arguments.length,D=false;if(typeof A==="boolean"){D=A;A=arguments[z]||{};z++}if(typeof A!=="object"&&!m.isFunction(A)){A={}}if(z===y){A=this;z--}for(;z<y;z++){if((E=arguments[z])!=null){for(x in E){v=A[x];w=E[x];if(A===w){continue}if(D&&w&&(m.isPlainObject(w)||(B=m.isArray(w)))){if(B){B=false;C=v&&m.isArray(v)?v:[]}else{C=v&&m.isPlainObject(v)?v:{}}A[x]=m.extend(D,C,w)}else{if(w!==undefined){A[x]=w}}}}}return A};m.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:true,error:function(v){throw new Error(v)},noop:function(){},isFunction:function(v){return m.type(v)==="function"},isArray:Array.isArray,isWindow:function(v){return v!=null&&v===v.window},isNumeric:function(w){var v=m.type(w);return(v==="number"||v==="string")&&!isNaN(w-parseFloat(w))},isPlainObject:function(x){var w,v;if(!x||q.call(x)!=="[object Object]"){return false}w=b(x);if(!w){return true}v=n.call(w,"constructor")&&w.constructor;return typeof v==="function"&&j.call(v)===s},isEmptyObject:function(w){var v;for(v in w){return false}return true},type:function(v){if(v==null){return v+""}return typeof v==="object"||typeof v==="function"?e[q.call(v)]||"object":typeof v},globalEval:function(v){t(v)},camelCase:function(v){return v.replace(u,"ms-").replace(k,r)},nodeName:function(w,v){return w.nodeName&&w.nodeName.toLowerCase()===v.toLowerCase()},each:function(x,y){var w,v=0;if(g(x)){w=x.length;for(;v<w;v++){if(y.call(x[v],v,x[v])===false){break}}}else{for(v in x){if(y.call(x[v],v,x[v])===false){break}}}return x},trim:function(v){return v==null?"":(v+"").replace(d,"")},makeArray:function(v,x){var w=x||[];if(v!=null){if(g(Object(v))){m.merge(w,typeof v==="string"?[v]:v)}else{i.call(w,v)}}return w},inArray:function(x,v,w){return v==null?-1:c.call(v,x,w)},merge:function(z,x){var v=+x.length,w=0,y=z.length;for(;w<v;w++){z[y++]=x[w]}z.length=y;return z},grep:function(v,C,z){var B,y=[],w=0,x=v.length,A=!z;for(;w<x;w++){B=!C(v[w],w);if(B!==A){y.push(v[w])}}return y},map:function(w,B,v){var z,A,y=0,x=[];if(g(w)){z=w.length;for(;y<z;y++){A=B(w[y],y,v);if(A!=null){x.push(A)}}}else{for(y in w){A=B(w[y],y,v);if(A!=null){x.push(A)}}}return h.apply([],x)},guid:1,proxy:function(z,y){var x,v,w;if(typeof y==="string"){x=z[y];y=z;z=x}if(!m.isFunction(z)){return undefined}v=p.call(arguments,2);w=function(){return z.apply(y||this,v.concat(p.call(arguments)))};w.guid=z.guid=z.guid||m.guid++;return w},now:Date.now,support:l});if(typeof Symbol==="function"){m.fn[Symbol.iterator]=a[Symbol.iterator]}m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(w,v){e["[object "+v+"]"]=v.toLowerCase()});function g(x){var w=!!x&&"length" in x&&x.length,v=m.type(x);if(v==="function"||m.isWindow(x)){return false}return v==="array"||w===0||typeof w==="number"&&w>0&&(w-1) in x}return m});