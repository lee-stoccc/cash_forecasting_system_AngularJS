define(["ModernizrProto","cssomPrefixes","is","testProps","domPrefixes","testDOMProps"],function(g,e,d,c,a,b){function f(n,h,k,l,m){var i=n.charAt(0).toUpperCase()+n.slice(1),j=(n+" "+e.join(i+" ")+i).split(" ");if(d(h,"string")||d(h,"undefined")){return c(j,h,l,m)}else{j=(n+" "+(a).join(i+" ")+i).split(" ");return b(j,h,k)}}g.testAllProps=f;return f});