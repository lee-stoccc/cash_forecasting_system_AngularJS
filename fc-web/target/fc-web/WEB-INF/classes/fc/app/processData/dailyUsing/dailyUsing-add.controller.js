(function(){angular.module("devplatformApp").controller("DailyUsingAddController",a);a.$inject=["FcPublicService","DailyUsingService","BankRuleService","$scope","$state","ngDialog","PublicService","$uibModalInstance","ngVerify","$translate"];function a(m,f,e,k,b,i,g,j,d,c){k.datePickerOpenStatus={};k.init=function(){l();k.dailyUsing={};k.timeArr=[];for(var n=0;n<24;n++){if(n<10){n="0"+n}k.timeArr.push(n)}k.select("#BankNameDUEdit");k.select("#timeDUEdit")};k.bankDailyUsingAddSelectCheck=function(n){};k.bankDailyUsingAddSelectItem=function(n){};k.select=function(n){angular.element(n).select2({placeholder:c.instant("global.pleaseSelect"),allowClear:true,tags:false})};function l(){m.getBanksList().then(function(n){if(n.statusCode==="0000"){k.bankList=n.data}})}k.openCalendar=function(n){k.datePickerOpenStatus[n]=true};function h(p,q){var o=new Date(new Date().getTime()-24*60*60*1000);if(k.dailyUsing[p]>o){var n="termInfo.formError.currentTime";g.openDialog(n);k.dailyUsing[p]=undefined}else{if(p=="startDate"&&k.dailyUsing[p]>k.dailyUsing.endDate){g.openDialog(q);k.dailyUsing[p]=undefined}else{if(p=="endDate"&&k.dailyUsing.startDate>k.dailyUsing[p]){g.openDialog(q);k.dailyUsing[p]=undefined}}}}k.checkStartTime=function(){h("startDate","global.timeMsg1")};k.checkEndTime=function(){h("endDate","global.timeMsg2")};k.save=function(){k.isSaving=true;k.message="global.saveSuccess";f.generationUsing(k.dailyUsing).then(function(n){if(n.statusCode==="0000"){g.openDialog(k.message);k.clear(true)}else{k.message=n.msgCode;g.openDialog(k.message);k.isSaving=false}})};k.clear=function(n){j.close();b.go("app.dailyUsingData",{},{reload:n})}}})();