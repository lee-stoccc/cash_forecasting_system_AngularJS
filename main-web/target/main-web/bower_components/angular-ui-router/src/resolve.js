$Resolve.$inject=["$q","$injector"];function $Resolve(c,g){var b=1,h=2,d={},f=[],e=d,a=extend(c.when(d),{$$promises:d,$$values:d});this.study=function(k){if(!isObject(k)){throw new Error("'invocables' must be an object")}var o=objectKeys(k||{});var n=[],m=[],j={};function l(q,p){if(j[p]===h){return}m.push(p);if(j[p]===b){m.splice(0,indexOf(m,p));throw new Error("Cyclic dependency: "+m.join(" -> "))}j[p]=b;if(isString(q)){n.push(p,[function(){return g.get(q)}],f)}else{var r=g.annotate(q);forEach(r,function(s){if(s!==p&&k.hasOwnProperty(s)){l(k[s],s)}});n.push(p,q,r)}m.pop();j[p]=h}forEach(k,l);k=m=j=null;function i(p){return isObject(p)&&p.then&&p.$$promises}return function(p,y,B){if(i(p)&&B===undefined){B=y;y=p;p=null}if(!p){p=e}else{if(!isObject(p)){throw new Error("'locals' must be an object")}}if(!y){y=a}else{if(!i(y)){throw new Error("'parent' must be a promise returned by $resolve.resolve()")}}var r=c.defer(),C=r.promise,w=C.$$promises={},z=extend({},p),v=1+n.length/3,x=false;function t(){if(!--v){if(!x){merge(z,y.$$values)}C.$$values=z;C.$$promises=C.$$promises||true;delete C.$$inheritedValues;r.resolve(z)}}function q(D){C.$$failure=D;r.reject(D)}if(isDefined(y.$$failure)){q(y.$$failure);return C}if(y.$$inheritedValues){merge(z,omit(y.$$inheritedValues,o))}extend(w,y.$$promises);if(y.$$values){x=merge(z,omit(y.$$values,o));C.$$inheritedValues=omit(y.$$values,o);t()}else{if(y.$$inheritedValues){C.$$inheritedValues=omit(y.$$inheritedValues,o)}y.then(t,q)}for(var u=0,A=n.length;u<A;u+=3){if(p.hasOwnProperty(n[u])){t()}else{s(n[u],n[u+1],n[u+2])}}function s(D,E,J){var I=c.defer(),H=0;function G(K){I.reject(K);q(K)}forEach(J,function(K){if(w.hasOwnProperty(K)&&!p.hasOwnProperty(K)){H++;w[K].then(function(L){z[K]=L;if(!(--H)){F()}},G)}});if(!H){F()}function F(){if(isDefined(C.$$failure)){return}try{I.resolve(g.invoke(E,B,z));I.promise.then(function(L){z[D]=L;t()},G)}catch(K){G(K)}}w[D]=I.promise}return C}};this.resolve=function(j,l,k,i){return this.study(j)(l,k,i)}}angular.module("ui.router.util").service("$resolve",$Resolve);