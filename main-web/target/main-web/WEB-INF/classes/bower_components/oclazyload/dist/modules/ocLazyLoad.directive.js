(function(a){a.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function(f,c,g,d,b){return{restrict:"A",terminal:true,priority:1000,compile:function e(i,h){var j=i[0].innerHTML;i.html("");return function(l,k,n){var m=d(n.ocLazyLoad);l.$watch(function(){return m(l)||n.ocLazyLoad},function(o){if(a.isDefined(o)){f.load(o).then(function(){g.enter(j,k);c(k.contents())(l)})}},true)}}}}])})(angular);