(function(){angular.module("devplatformApp").controller("cashGuaranteeRateController",a);a.$inject=["cashGuaranteeRateService","ngDialog","$state","$scope","PublicService"];function a(c,f,e,b,d){b.formParam={};b.formParam.replenishDate=new Date();b.datePickerOpenStatus={};b.openCalendar=function(g){b.datePickerOpenStatus[g]=true};b.tablesConfig={url:"api/cusRegion/page",formParams:{regionNo:b.formParam.regionNo,regionName:b.formParam.regionName,}}}})();