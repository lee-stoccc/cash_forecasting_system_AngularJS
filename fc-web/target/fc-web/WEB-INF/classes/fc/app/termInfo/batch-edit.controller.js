(function(){angular.module("devplatformApp").controller("BatchEditController",a);a.$inject=["$rootScope","TermInfoService","$scope","$stateParams","$state","ngDialog","PublicService","$uibModalInstance","ngVerify","$translate","SysDictService","BankRuleService"];function a(l,g,p,o,b,m,i,n,e,d,k,h){p.dateList=i.getDateList();p.replenishRule=[{value:d.instant("bankRule.Monday"),key:1},{value:d.instant("bankRule.Tuesday"),key:2},{value:d.instant("bankRule.Wednesday"),key:3},{value:d.instant("bankRule.Thursday"),key:4},{value:d.instant("bankRule.Friday"),key:5},{value:d.instant("bankRule.Saturday"),key:6},{value:d.instant("bankRule.Sunday"),key:7}];p.workday=p.replenishRule.slice(0,5);p.select_all=true;p.formParam={id:"",camFullJudge:"0",atmLackJudge:"0",crsLackJudge:"0",crsFullJudge:"0",imLackJudge:"0",imFullJudge:"0",holidayAdd:"1",unitCount:500,day:1,time:1,indCashSecurity:0.99,indReplenishCost:2,fullWarn:80,lackWarn:20,replenishTimes:[{startTime:"08:00",endTime:"09:00"}],};p.formParam.id=o.ids;p.init=function(){f("deTypeList","forecast.denomination");p.selectAll()};p.calcultePencent=function(){if(p.formParam.lackWarn>=100){p.formParam.lackWarn=99}if(p.formParam.lackWarn<=0){p.formParam.lackWarn=1}if(p.formParam.fullWarn>=100){p.formParam.fullWarn=99}if(p.formParam.fullWarn<=0){p.formParam.fullWarn=1}j(p.formParam.lackWarn,"lackWarn");j(p.formParam.fullWarn,"fullWarn")};p.blurformParam=function(){if(p.formParam.indCashSecurity<0.9||p.formParam.indCashSecurity>0.999){p.formParam.indCashSecurity=null}if(p.formParam.indReplenishCost<1||p.formParam.indReplenishCost>3){p.formParam.indReplenishCost=null}};function j(r,q){if(r){angular.forEach(p.formParam.termCashLimits,function(s){angular.forEach(s.denominationList,function(t){if(t.minCeilingCount>t.ceilingCount){t.minCeilingCount=t.ceilingCount}t[q]=parseInt(t.ceilingCount*parseFloat(r/100,10))})})}}function f(r,q){k.getDictListAsync(q).then(function(s){if(s.statusCode==="0000"){p[r]=s.data}})}p.changeCurrency=function(v,s){var t=true;if(p.formParam.termCashLimits.length>1){for(var r=0;r<p.formParam.termCashLimits.length;r++){if(s!=r){var q=p.formParam.termCashLimits[r];if(q.type===v){t=true;break}}else{}}}var u="forecast.denomination."+v;if(t){}k.getDictListAsync(u).then(function(x){if(x.statusCode==="0000"){console.log(x);angular.forEach(x.data,function(y){y.denomination=y.dictDesc;y.count=0});var w=i.typeAndDemination2(x.data,v);p.formParam.termCashLimits.push({type:v,denominationList:w});if(p.formParam.termCashLimits.length==3){p.formParam.termCashLimits.splice(1,1)}}})};p.addCashTime=function(){p.formParam.replenishTimes.splice(p.formParam.replenishTimes.length+1,0,{startTime:"",endTime:""})};p.delCashTime=function(q){if(p.formParam.replenishTimes.length===1){i.showDialogTimeout("termInfo.lastOne");return}p.formParam.replenishTimes.splice(q,1)};p.flagChecked=function(q,r){angular.forEach(q,function(s){s.checked=r})};p.selectAll=function(){if(p.select_all){p.select_workDay=false;p.flagChecked(p.replenishRule,true)}else{p.flagChecked(p.replenishRule,false)}};p.selectWorkDay=function(){p.flagChecked(p.replenishRule,false);if(p.select_workDay){p.select_all=false;p.flagChecked(p.workday,true)}else{p.flagChecked(p.workday,false)}};p.selectOne=function(){var q=i.calcWorkDayOrAll(p.replenishRule);p.select_workDay=q.selectWorkDay;p.select_all=q.selectAll};p.save=function(){var q=c();if(!q){i.showDialogTimeout("bankRule.selectOneCashTime");p.isSaving=false;return}p.isSaving=true;p.message="global.saveSuccess";g.saveBatchTermInfo(p.formParam).then(function(r){if(r.statusCode==="0000"){p.message="global.saveSuccess";i.showDialogTimeout(p.message);l.$broadcast("termInfoEdit","holiday");p.clear(false)}else{p.message=r.msgCode;i.openDialog(p.message);p.isSaving=false}})};function c(){var q=i.getCashDay(p.replenishRule);p.formParam.replenishRule=q.replenishRule;return q.flag}p.clear=function(q){n.close();b.go("app.termInfo",{},{reload:q})};p.add=function(){if(p.formParam.termCashLimits.length>=p.deTypeList.length){return}p.formParam.termCashLimits.splice(p.formParam.termCashLimits.length+1,0,{denominationList:[],type:""})}}})();