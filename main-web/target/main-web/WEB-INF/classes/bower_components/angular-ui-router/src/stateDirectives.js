function parseStateRef(c,d){var b=c.match(/^\s*({[^}]*})\s*$/),a;if(b){c=d+"("+b[1]+")"}a=c.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!a||a.length!==4){throw new Error("Invalid state ref '"+c+"'")}return{state:a[1],paramExpr:a[3]||null}}function stateContext(b){var a=b.parent().inheritedData("$uiView");if(a&&a.state&&a.state.name){return a.state}}function getTypeInfo(a){var c=Object.prototype.toString.call(a.prop("href"))==="[object SVGAnimatedString]";var b=a[0].nodeName==="FORM";return{attr:b?"action":(c?"xlink:href":"href"),isAnchor:a.prop("tagName").toUpperCase()==="A",clickable:!b}}function clickHook(d,b,a,c,e){return function(i){var g=i.which||i.button,h=e();if(!(g>1||i.ctrlKey||i.metaKey||i.shiftKey||d.attr("target"))){var j=a(function(){b.go(h.state,h.params,h.options)});i.preventDefault();var f=c.isAnchor&&!h.href?1:0;i.preventDefault=function(){if(f--<=0){a.cancel(j)}}}}}function defaultOpts(b,a){return{relative:stateContext(b)||a.$current,inherit:true}}$StateRefDirective.$inject=["$state","$timeout"];function $StateRefDirective(b,a){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(m,j,l,c){var f=parseStateRef(l.uiSref,b.current.name);var e={state:f.state,href:null,params:null};var k=getTypeInfo(j);var g=c[1]||c[0];var d=null;var i;e.options=extend(defaultOpts(j,b),l.uiSrefOpts?m.$eval(l.uiSrefOpts):{});var h=function(n){if(n){e.params=angular.copy(n)}e.href=b.href(f.state,e.params,e.options);if(d){d()}if(g){d=g.$$addStateInfo(f.state,e.params)}if(e.href!==null){l.$set(k.attr,e.href)}};if(f.paramExpr){m.$watch(f.paramExpr,function(n){if(n!==e.params){h(n)}},true);e.params=angular.copy(m.$eval(f.paramExpr))}h();if(!k.clickable){return}i=clickHook(j,b,a,k,function(){return e});j.bind("click",i);m.$on("$destroy",function(){j.unbind("click",i)})}}}$StateRefDynamicDirective.$inject=["$state","$timeout"];function $StateRefDynamicDirective(b,a){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,h,m,c){var k=getTypeInfo(h);var f=c[1]||c[0];var l=[m.uiState,m.uiStateParams||null,m.uiStateOpts||null];var j="["+l.map(function(o){return o||"null"}).join(", ")+"]";var e={state:null,params:null,options:null,href:null};var d=null;var g;function i(o){e.state=o[0];e.params=o[1];e.options=o[2];e.href=b.href(e.state,e.params,e.options);if(d){d()}if(f){d=f.$$addStateInfo(e.state,e.params)}if(e.href){m.$set(k.attr,e.href)}}n.$watch(j,i,true);i(n.$eval(j));if(!k.clickable){return}g=clickHook(h,b,a,k,function(){return e});h.bind("click",g);n.$on("$destroy",function(){h.unbind("click",g)})}}}$StateRefActiveDirective.$inject=["$state","$stateParams","$interpolate"];function $StateRefActiveDirective(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(r,s,p,g){var t=[],f={},j,d;j=c(p.uiSrefActiveEq||"",false)(r);try{d=r.$eval(p.uiSrefActive)}catch(o){}d=d||c(p.uiSrefActive||"",false)(r);if(isObject(d)){forEach(d,function(u,e){if(isString(u)){var v=parseStateRef(u,a.current.name);i(v.state,r.$eval(v.paramExpr),e)}})}this.$$addStateInfo=function(u,v){if(isObject(d)&&t.length>0){return}var e=i(u,v,d);h();return e};r.$on("$stateChangeSuccess",h);function i(y,e,w){var x=a.get(y,stateContext(s));var v=n(y,e);var u={state:x||{name:y},params:e,hash:v};t.push(u);f[v]=w;return function z(){var A=t.indexOf(u);if(A!==-1){t.splice(A,1)}}}function n(e,u){if(!isString(e)){throw new Error("state should be a string")}if(isObject(u)){return e+toJson(u)}u=r.$eval(u);if(isObject(u)){return e+toJson(u)}return e}function h(){for(var e=0;e<t.length;e++){if(l(t[e].state,t[e].params)){m(s,f[t[e].hash])}else{q(s,f[t[e].hash])}if(k(t[e].state,t[e].params)){m(s,j)}else{q(s,j)}}}function m(u,e){g(function(){u.addClass(e)})}function q(u,e){u.removeClass(e)}function l(e,u){return a.includes(e.name,u)}function k(e,u){return a.is(e.name,u)}h()}]}}angular.module("ui.router.state").directive("uiSref",$StateRefDirective).directive("uiSrefActive",$StateRefActiveDirective).directive("uiSrefActiveEq",$StateRefActiveDirective).directive("uiState",$StateRefDynamicDirective);