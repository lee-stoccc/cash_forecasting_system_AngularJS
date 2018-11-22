(function(d,a){var c=a.module("ngAria",["ng"]).provider("$aria",b);var f=["BUTTON","A","INPUT","TEXTAREA","SELECT","DETAILS","SUMMARY"];var e=function(h,g){if(g.indexOf(h[0].nodeName)!==-1){return true}};function b(){var g={ariaHidden:true,ariaChecked:true,ariaReadonly:true,ariaDisabled:true,ariaRequired:true,ariaInvalid:true,ariaValue:true,tabindex:true,bindKeypress:true,bindRoleForClick:true};this.config=function(i){g=a.extend(g,i)};function h(j,i,k,l){return function(o,p,m){var n=m.$normalize(i);if(g[n]&&!e(p,k)&&!m[n]){o.$watch(m[j],function(q){q=l?!q:!!q;p.attr(i,q)})}}}this.$get=function(){return{config:function(i){return g[i]},$$watchExpr:h}}}c.directive("ngShow",["$aria",function(g){return g.$$watchExpr("ngShow","aria-hidden",[],true)}]).directive("ngHide",["$aria",function(g){return g.$$watchExpr("ngHide","aria-hidden",[],false)}]).directive("ngValue",["$aria",function(g){return g.$$watchExpr("ngValue","aria-checked",f,false)}]).directive("ngChecked",["$aria",function(g){return g.$$watchExpr("ngChecked","aria-checked",f,false)}]).directive("ngReadonly",["$aria",function(g){return g.$$watchExpr("ngReadonly","aria-readonly",f,false)}]).directive("ngRequired",["$aria",function(g){return g.$$watchExpr("ngRequired","aria-required",f,false)}]).directive("ngModel",["$aria",function(j){function h(k,m,n,l){return j.config(m)&&!n.attr(k)&&(l||!e(n,f))}function g(l,k){return !k.attr("role")&&(k.attr("type")===l)&&(k[0].nodeName!=="INPUT")}function i(k,m){var l=k.type,n=k.role;return((l||n)==="checkbox"||n==="menuitemcheckbox")?"checkbox":((l||n)==="radio"||n==="menuitemradio")?"radio":(l==="range"||n==="progressbar"||n==="slider")?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(m,k){var l=i(k,m);return{pre:function(o,p,n,q){if(l==="checkbox"){q.$isEmpty=function(r){return r===false}}},post:function(A,o,y,r){var u=h("tabindex","tabindex",o,false);function x(){return r.$modelValue}function p(C){var D=(y.value==r.$viewValue);o.attr("aria-checked",D)}function z(){o.attr("aria-checked",!r.$isEmpty(r.$viewValue))}switch(l){case"radio":case"checkbox":if(g(l,o)){o.attr("role",l)}if(h("aria-checked","ariaChecked",o,false)){A.$watch(x,l==="radio"?p:z)}if(u){o.attr("tabindex",0)}break;case"range":if(g(l,o)){o.attr("role","slider")}if(j.config("ariaValue")){var n=!o.attr("aria-valuemin")&&(y.hasOwnProperty("min")||y.hasOwnProperty("ngMin"));var w=!o.attr("aria-valuemax")&&(y.hasOwnProperty("max")||y.hasOwnProperty("ngMax"));var B=!o.attr("aria-valuenow");if(n){y.$observe("min",function s(C){o.attr("aria-valuemin",C)})}if(w){y.$observe("max",function s(C){o.attr("aria-valuemax",C)})}if(B){A.$watch(x,function v(C){o.attr("aria-valuenow",C)})}}if(u){o.attr("tabindex",0)}break}if(!y.hasOwnProperty("ngRequired")&&r.$validators.required&&h("aria-required","ariaRequired",o,false)){y.$observe("required",function(){o.attr("aria-required",!!y.required)})}if(h("aria-invalid","ariaInvalid",o,true)){A.$watch(function q(){return r.$invalid},function t(C){o.attr("aria-invalid",!!C)})}}}}}}]).directive("ngDisabled",["$aria",function(g){return g.$$watchExpr("ngDisabled","aria-disabled",f,false)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(h,j,g,i){if(!j.attr("aria-live")){j.attr("aria-live","assertive")}}}}).directive("ngClick",["$aria","$parse",function(h,g){return{restrict:"A",compile:function(k,i){var j=g(i.ngClick,null,true);return function(m,n,l){if(!e(n,f)){if(h.config("bindRoleForClick")&&!n.attr("role")){n.attr("role","button")}if(h.config("tabindex")&&!n.attr("tabindex")){n.attr("tabindex",0)}if(h.config("bindKeypress")&&!l.ngKeypress){n.on("keypress",function(o){var p=o.which||o.keyCode;if(p===32||p===13){m.$apply(q)}function q(){j(m,{$event:o})}})}}}}}}]).directive("ngDblclick",["$aria",function(g){return function(i,j,h){if(g.config("tabindex")&&!j.attr("tabindex")&&!e(j,f)){j.attr("tabindex",0)}}}])})(window,window.angular);