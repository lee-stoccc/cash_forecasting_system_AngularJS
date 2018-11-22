(function(){angular.module("devplatformApp").controller("CastDataController",a);a.$inject=["FcPublicService","TermInfoService","CastDataService","ngDialog","$state","$scope","PublicService","SysDictService","globalConstant","$stateParams","Upload","$translate"];function a(c,u,o,j,r,l,i,q,d,s,p,m){var t=new Date();var b=new Date();var h=new Date(b.getTime());var k=new Date(b.getTime()-24*60*60*1000*6);l.formParam={date:k,dateTo:h};l.datePickerOpenStatus={};l.choseArr=[];l.init=function(){n("deTypeList","forecast.denomination");g();e();f();l.tablesConfig={showCheckBox:true,isColspan:true,checkOneAction:"checkOneAction",checkAllAction:"checkAllAction",rowSpan:3,tableTitles:[{title:"termInfo.bankName",filed:"bankName",type:"text",width:15,tipTitle:"Branch Name"},{title:"termInfo.termNo",filed:"termNo",type:"text",width:15,tipTitle:"Terminal ID"},{title:"termInfo.termType",filed:" typeName",type:"text",width:15,tipTitle:"Terminal Type"},{title:"castData.cast",dynamicTitles:l.colSpanData,filed:"details",chridTitle:"dictDesc",chridFiled:"count",type:"text",width:25},{title:"castData.castTime",filed:"dateTime",type:"dateTime",format:"yyyy-MM-dd HH:mm",width:12,tipTitle:"Date"},],url:"api/replenishData/page",formParams:{termNo:l.formParam.termNo,date:l.formParam.date,bankId:l.formParam.bankId,}};l.select("#bankNameCastData");setTimeout(function(){l.refreshTableList(l.formParam)},200)};l.select=function(v){angular.element(v).select2({placeholder:m.instant("global.pleaseSelect"),allowClear:true,tags:false})};l.checkOneAction=function(v){l.choseArr=[];angular.forEach(v,function(w){if(w.checked){l.choseArr.push(w)}})};l.checkAllAction=function(v){l.choseArr=[];angular.forEach(v,function(w){if(w.checked){l.choseArr.push(w)}})};function e(){u.getCusgionList().then(function(v){if(v.statusCode==="0000"){l.cusgionList=v.data}})}l.colSpanData=[];function f(){for(var v=0;v<l.deTypeList.length;v++){var w=l.deTypeList[v].dictKey;var x="forecast.denomination."+w;q.getDictListAsync(x).then(function(y){if(y.statusCode==="0000"){var z={itemList:[],type:""};z.itemList=y.data;switch(w){case"HKD":z.title=w+"(HK$)";break;case"CNY":z.title=w+"(￥)";break}l.colSpanData[v]=z}})}}function n(w,v){q.getDictListAsync(v).then(function(x){if(x.statusCode==="0000"){l[w]=x.data}})}l.bankCastDataSelectCheck=function(v){};l.bankCastDataSelectItem=function(v){};function g(){c.getBanksList().then(function(v){if(v.statusCode==="0000"){l.bankList=v.data}})}l.loadAll=function(){l.refreshTableList(l.formParam)};l.resetSearch=function(){l.formParam={};l.loadAll();g()};l.openCalendar=function(v){l.datePickerOpenStatus[v]=true};l.importExcel=function(v){var w=d.devplatform_web_apiPath+"api/replenishData/importExcel";i.submitFile(v,w,"loadAll",l);if($(".ngdialog-theme-default")){$(this).remove()}i.openDialog("Please Wait...")};l.upLoadTempFile=function(w){var v=d.devplatform_web_apiPath+"api/replenishData/uploadTemplate";i.submitFile(w,v)};l.downLoadFile=function(){o.downLoadFile()};l.batchDelete=function(){var v="";if(l.choseArr.length===0){v="global.selectDelete";i.openDialog(v);return}v="global.messages.deleteConfirm";i.showConfirmDialog(v,"confirmDelete",l)};l.confirmDelete=function(){var v="";angular.forEach(l.choseArr,function(x,w){v+=x.id;if(w!=l.choseArr.length-1){v+=","}});o.deleteCastData(v).then(function(w){if(w.statusCode==="0000"){l.loadAll();l.choseArr=[];var x="global.messages.deleteSuccess";i.openDialog(x)}})};l.$watch("formParam",function(y,x){if(y.date!=""||y.date!=""){var v=i.compareTime(y.date,l.formParam.dateTo);if(!v){var w="global.timeMsg1";i.openDialog(w)}}},true)}})();