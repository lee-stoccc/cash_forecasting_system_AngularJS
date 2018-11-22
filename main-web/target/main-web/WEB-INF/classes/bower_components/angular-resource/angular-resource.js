(function(f,b){var e=b.$$minErr("$resource");var a=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;function c(h){return(h!=null&&h!==""&&h!=="hasOwnProperty"&&a.test("."+h))}function d(n,m){if(!c(m)){throw e("badmember",'Dotted member path "@{0}" is invalid.',m)}var l=m.split(".");for(var j=0,k=l.length;j<k&&b.isDefined(n);j++){var h=l[j];n=(n!==null)?n[h]:undefined}return n}function g(i,j){j=j||{};b.forEach(j,function(l,k){delete j[k]});for(var h in i){if(i.hasOwnProperty(h)&&!(h.charAt(0)==="$"&&h.charAt(1)==="$")){j[h]=i[h]}}return j}b.module("ngResource",["ng"]).provider("$resource",function(){var h=/^https?:\/\/[^\/]*/;var i=this;this.defaults={stripTrailingSlashes:true,cancellable:false,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:true},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(t,v,p,m){var u=b.noop,o=b.forEach,s=b.extend,j=b.copy,l=b.isFunction;function n(w){return k(w,true).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function k(x,w){return encodeURIComponent(x).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,(w?"%20":"+"))}function r(w,x){this.template=w;this.defaults=s({},i.defaults,x);this.urlParams={}}r.prototype={setUrlParams:function(A,B,z){var E=this,w=z||E.template,y,C,D="";var x=E.urlParams={};o(w.split(/\W/),function(F){if(F==="hasOwnProperty"){throw e("badname","hasOwnProperty is not a valid parameter name.")}if(!(new RegExp("^\\d+$").test(F))&&F&&(new RegExp("(^|[^\\\\]):"+F+"(\\W|$)").test(w))){x[F]={isQueryParamValue:(new RegExp("\\?.*=:"+F+"(?:\\W|$)")).test(w)}}});w=w.replace(/\\:/g,":");w=w.replace(h,function(F){D=F;return""});B=B||{};o(E.urlParams,function(G,F){y=B.hasOwnProperty(F)?B[F]:E.defaults[F];if(b.isDefined(y)&&y!==null){if(G.isQueryParamValue){C=k(y,true)}else{C=n(y)}w=w.replace(new RegExp(":"+F+"(\\W|$)","g"),function(H,I){return C+I})}else{w=w.replace(new RegExp("(/?):"+F+"(\\W|$)","g"),function(I,J,H){if(H.charAt(0)=="/"){return H}else{return J+H}})}});if(E.defaults.stripTrailingSlashes){w=w.replace(/\/+$/,"")||"/"}w=w.replace(/\/\.(?=\w+($|\?))/,".");A.url=D+w.replace(/\/\\\./,"/.");o(B,function(G,F){if(!E.urlParams[F]){A.params=A.params||{};A.params[F]=G}})}};function q(z,B,D,y){var w=new r(z,y);D=s({},i.defaults.actions,D);function x(G,F){var E={};F=s({},B,F);o(F,function(I,H){if(l(I)){I=I(G)}E[H]=I&&I.charAt&&I.charAt(0)=="@"?d(G,I.substr(1)):I});return E}function A(E){return E.resource}function C(E){g(E||{},this)}C.prototype.toJSON=function(){var E=s({},this);delete E.$promise;delete E.$resolved;return E};o(D,function(I,F){var H=/^(POST|PUT|PATCH)$/i.test(I.method);var E=I.timeout;var G=b.isDefined(I.cancellable)?I.cancellable:(y&&b.isDefined(y.cancellable))?y.cancellable:i.defaults.cancellable;if(E&&!b.isNumber(E)){v.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option.");delete I.timeout;E=null}C[F]=function(M,K,J,Y){var O={},P,V,S;switch(arguments.length){case 4:S=Y;V=J;case 3:case 2:if(l(K)){if(l(M)){V=M;S=K;break}V=K;S=J}else{O=M;P=K;V=J;break}case 1:if(l(M)){V=M}else{if(H){P=M}else{O=M}}break;case 0:break;default:throw e("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var L=this instanceof C;var U=L?P:(I.isArray?[]:new C(P));var N={};var R=I.interceptor&&I.interceptor.response||A;var W=I.interceptor&&I.interceptor.responseError||undefined;var T;var Q;o(I,function(aa,Z){switch(Z){default:N[Z]=j(aa);break;case"params":case"isArray":case"interceptor":case"cancellable":break}});if(!L&&G){T=p.defer();N.timeout=T.promise;if(E){Q=m(T.resolve,E)}}if(H){N.data=P}w.setUrlParams(N,s({},x(P,I.params||{}),O),I.url);var X=t(N).then(function(Z){var aa=Z.data;if(aa){if(b.isArray(aa)!==(!!I.isArray)){throw e("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",F,I.isArray?"array":"object",b.isArray(aa)?"array":"object",N.method,N.url)}if(I.isArray){U.length=0;o(aa,function(ac){if(typeof ac==="object"){U.push(new C(ac))}else{U.push(ac)}})}else{var ab=U.$promise;g(aa,U);U.$promise=ab}}Z.resource=U;return Z},function(Z){(S||u)(Z);return p.reject(Z)});X["finally"](function(){U.$resolved=true;if(!L&&G){U.$cancelRequest=b.noop;m.cancel(Q);T=Q=N.timeout=null}});X=X.then(function(Z){var aa=R(Z);(V||u)(aa,Z.headers);return aa},W);if(!L){U.$promise=X;U.$resolved=false;if(G){U.$cancelRequest=T.resolve}return U}return X};C.prototype["$"+F]=function(M,L,K){if(l(M)){K=L;L=M;M={}}var J=C[F].call(this,M,this,L,K);return J.$promise||J}});C.bind=function(E){return q(z,s({},B,E),D)};return C}return q}]})})(window,window.angular);