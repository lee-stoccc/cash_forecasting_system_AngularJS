(function(){angular.module("devplatformApp").config(a);a.$inject=["$stateProvider"];function a(b){b.state("app.dailyUsing-add",{parent:"app.dailyUsingData",url:"/dailyUsing/add",resolve:{deps:["$ocLazyLoad",function(c){return c.load(["fc/app/processData/dailyUsing/dailyUsing-add.controller.js","fc/app/processData/dailyUsing/dailyUsing.service.js","fc/app/bankRule/bankRule.service.js",])}],translatePartialLoader:["$translate","$translatePartialLoader",function(d,c){c.addPart("termInfo");c.addPart("global");return d.refresh()}]},onEnter:["$stateParams","$state","$uibModal",function(e,d,c){c.open({templateUrl:"fc/app/processData/dailyUsing/dailyUsing-add.html",controller:"DailyUsingAddController",backdrop:"static",size:"lg"})}]})}})();