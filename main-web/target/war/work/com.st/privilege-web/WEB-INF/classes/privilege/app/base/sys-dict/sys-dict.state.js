(function(){angular.module("devplatformApp").config(a);a.$inject=["$stateProvider"];function a(b){b.state("app.sys-dict-edit",{parent:"app.sys-dict",url:"sys-dict/edit/{id}",resolve:{deps:["$ocLazyLoad",function(c){return c.load(["privilege/app/base/sys-dict/sys-dict-dialog.controller.js"])}],translatePartialLoader:["$translate","$translatePartialLoader",function(d,c){return d.refresh()}]},onEnter:["$stateParams","$state","$uibModal",function(e,d,c){c.open({templateUrl:"privilege/app/base/sys-dict/sys-dict-dialog.html",controller:"SysDictDialogController",backdrop:"static"})}]}).state("app.user-edit",{parent:"app.user",url:"user/{id}",resolve:{deps:["$ocLazyLoad",function(c){return c.load(["privilege/app/base/sys-dict/sys-dict-dialog.controller.js"])}],translatePartialLoader:["$translate","$translatePartialLoader",function(d,c){c.addPart("user");c.addPart("global");return d.refresh()}]},onEnter:["$stateParams","$state","$uibModal",function(e,d,c){c.open({templateUrl:"privilege/app/base/sys-dict/sys-dict-dialog.html",controller:"SysDictDialogController",backdrop:"static"})}]})}})();