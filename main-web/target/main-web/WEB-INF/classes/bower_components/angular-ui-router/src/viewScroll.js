function $ViewScrollProvider(){var a=false;this.useAnchorScroll=function(){a=true};this.$get=["$anchorScroll","$timeout",function(c,b){if(a){return c}return function(d){return b(function(){d[0].scrollIntoView()},0,false)}}]}angular.module("ui.router.state").provider("$uiViewScroll",$ViewScrollProvider);