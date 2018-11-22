(function(){angular.module("devplatformApp").controller("BankInfoController",a);a.$inject=["BankInfoService","ngDialog","$state","$scope","PublicService","SysDictService"];function a(d,g,b,h,e,f){h.formParam={status:"1"};h.init=function(){c("bankStatusList","forecast.bankStatus");j();i()};function j(){h.showCheckBox=true;d.getBankList().then(function(k){if(k.statusCode==="0000"){h.bankList=k.data}})}function i(){d.getBankNameList().then(function(k){if(k.statusCode==="0000"){h.bankNameList=k.data}})}function c(l,k){f.getDictListAsync(k).then(function(m){if(m.statusCode==="0000"){h[l]=m.data}})}h.tablesConfig={showCheckBox:false,checkOneAction:"checkOneAction",checkAllAction:"checkAllAction",tableTitles:[{title:"bankInfo.bankNo",filed:"bankNo",type:"text",width:20},{title:"bankInfo.headquarter",filed:"headquarter",type:"text",width:10},{title:"bankInfo.firstBranch",filed:"firstBranch",type:"text",width:20},{title:"bankInfo.secondBranch",filed:"secondBranch",type:"text",width:20},{title:"bankInfo.branch",filed:"branch",type:"text",width:30},],url:"api/bankInfo/page",formParams:{bankNo:h.formParam.bankNo,headquarter:h.formParam.headquarter,status:h.formParam.status,}};h.checkOneAction=function(k){};h.checkAllAction=function(k){};h.loadAll=function(){h.refreshTableList(h.formParam)};h.resetSearch=function(){h.formParam={status:"1"}};h.bankInfoSelectCheck=function(k){};h.bankInfoSelectItem=function(k){h.formParam.bankId=k.id};h.addBankInfo=function(){if(h.bankNo.length==1||e.isEmptyObject(h.bankNo)){b.go("app.bankInfo-edit",{state:"add",id:h.bankNo})}else{var k="bankInfo.chooseOneAdd";e.openDialog(k)}};h.editBankInfo=function(){if(h.bankNo.length!=1){var k="global.chooseOneEdit";e.openDialog(k);return}else{b.go("app.bankInfo-edit",{state:"edit",id:h.bankNo})}};h.batchDelete=function(){var k="bankInfo.deleteConfirm";if(e.isEmptyObject(h.bankNo)){k="global.selectDelete";e.openDialog(k);return}e.showConfirmDialog(k,"",h,h.bankNo)};h.confirmDelete=function(k){d.deleteBankInfo(k).then(function(l){if(l.statusCode==="0000"){h.loadAll();i();h.bankNo=[];j();var m="global.messages.deleteSuccess";e.openDialog(m)}else{e.openDialog(l.msgCode)}})}}})();