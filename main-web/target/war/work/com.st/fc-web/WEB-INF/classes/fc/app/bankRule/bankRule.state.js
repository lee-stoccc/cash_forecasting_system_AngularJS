(function(){angular.module("devplatformApp").config(a);a.$inject=["$stateProvider"];function a(b){b.state("app.bankRule-edit",{parent:"app.bankRule",url:"/bankRule/edit/{id}",resolve:{deps:["$ocLazyLoad",function(c){return c.load(["fc/app/bankRule/bankRule-edit.controller.js","fc/app/bankRule/bankRule.service.js","fc/css/bankRule/bankRule.css"])}],translatePartialLoader:["$translate","$translatePartialLoader",function(d,c){c.addPart("bankRule");c.addPart("global");return d.refresh()}]},onEnter:["$stateParams","$state","$uibModal",function(e,d,c){c.open({templateUrl:"fc/app/bankRule/bankRule-edit.html",controller:"BankRuleEditController",backdrop:"static",size:"lg"})}]}).state("app.bankRule-detail",{parent:"app.bankRule",url:"/bankRule/detail/{id}",resolve:{deps:["$ocLazyLoad",function(c){return c.load(["fc/app/bankRule/bankRule-detail.controller.js","fc/app/bankRule/bankRule.service.js","fc/css/bankRule/bankRule.css"])}],translatePartialLoader:["$translate","$translatePartialLoader",function(d,c){c.addPart("bankRule");c.addPart("global");return d.refresh()}]},onEnter:["$stateParams","$state","$uibModal",function(e,d,c){c.open({templateUrl:"fc/app/bankRule/bankRule-detail.html",controller:"BankRuleDetailController",backdrop:"static",size:"lg"})}]})}})();