$ViewProvider.$inject=[];function $ViewProvider(){this.$get=a;a.$inject=["$rootScope","$templateFactory"];function a(b,d){return{load:function c(g,f){var e,h={template:null,controller:null,view:null,locals:null,notify:true,async:true,params:{}};f=extend(h,f);if(f.view){e=d.fromConfig(f.view,f.params,f.locals)}return e}}}}angular.module("ui.router.state").provider("$view",$ViewProvider);