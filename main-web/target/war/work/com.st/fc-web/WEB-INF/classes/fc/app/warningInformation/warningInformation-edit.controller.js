(function(){angular.module("devplatformApp").controller("WarningInformationEditController",a);a.$inject=["LayoutService","ngDialog","$stateParams","$state","$scope","PublicService","$uibModalInstance","SysDictService"];function a(p,q,b,r,k,n){r.datePickerOpenStatus={};r.forecastPlan={planId:q.planId,termNo:q.termNo,detailList:[{currency:"",denominationList:"",amount:"",count:""}]};r.formParams={id:q.id,planId:q.planId};var c={};var e;r.typeAndDemination=[{denominationList:[],type:""}];r.init=function(){g("denominationList","forecast.denomination");g("deTypeList","forecast.denomination");f();if(q.planId){}m(q.bankId);r.changeCurrency("CNY","0");r.add();r.changeCurrency("HKD","1")};function g(t,s){n.getDictListAsync(s).then(function(u){if(u.statusCode==="0000"){r[t]=u.data;e=(u.data).length}})}function m(s){}r.changeCurrency=function(t,s){r.getDenominationList(t,s)};r.getDenominationList=function(u,s){var t="forecast.denomination."+u+"";if(j(u)&&d()>0){k.showDialogTimeout(u+"global.alreadyExisted");return}n.getDictListAsync(t).then(function(v){if(v.statusCode==="0000"){r.typeAndDemination[s]["denominationList"]=v.data;if(r.typeAndDemination[s]["denominationList"].length==1){r.typeAndDemination[s]["denominationList"][0]["dictDescs"]="￥:"+r.typeAndDemination[s]["denominationList"][0]["dictDesc"]}else{for(var w=0;w<r.typeAndDemination[s]["denominationList"].length;w++){r.typeAndDemination[s]["denominationList"][w]["dictDescs"]="HK$:"+r.typeAndDemination[s]["denominationList"][w]["dictDesc"]}}}});if(u!=""){i(s,u)}else{h(s)}};r.add=function(){if(d()==0){k.showDialogTimeout("global.selectCurrency");return}if(r.typeAndDemination.length>=e){k.showDialogTimeout("global.editDenomination");return}r.typeAndDemination.splice(r.typeAndDemination.length+1,0,{denominationList:[],type:""})};r.del=function(s){if(r.typeAndDemination.length===1){k.showDialogTimeout("global.del");return}h(s);r.typeAndDemination.splice(s,1)};function i(u,s){var t=u;c[t]=s}function d(){var t=0;for(var s in c){t++}return t}function h(s){delete c[s]}function j(t){for(var s in c){if(t==c[s]){return true}}return false}function f(){angular.forEach(r.denominationList,function(s){var t={denomination:s.dictKey};r.forecastPlan.detailList.push(t)})}r.openCalendar=function(s){r.datePickerOpenStatus[s]=true};r.save=function(){o();ForecastPlanService.saveForecastPlan(r.forecastPlan).then(function(s){if(s.statusCode==="0000"){k.openDialog(s.msgCode);r.clear(false)}})};r.clear=function(s){};r.checkDate=function(){if(r.forecastPlan.replenishDate.getDate()<new Date().getDate()){k.openDialog("global.timeMsg3");r.forecastPlan.replenishDate=null}};function o(){var s=new Array();console.log(r);for(var t=0;t<r.typeAndDemination.length;t++){var z=r.typeAndDemination[t].type;var A=r.typeAndDemination[t].denominationList;for(var v=0;v<A.length;v++){var u=Number(A[v].dictKey);var y=Number(A[v].count);var x=u*y;var w={denomination:u,currency:z,count:y,amount:x};s.push(w)}}if(s.length>0){r.forecastPlan.detailList=s}}function l(){var t=0;for(var s=0;s<r.forecastPlan.detailList.length;s++){if(r.forecastPlan.detailList[s].count){t+=r.forecastPlan.detailList[s].denomination*r.forecastPlan.detailList[s].count}else{continue}}if(t>r.stockAmount){return false}return true}}})();