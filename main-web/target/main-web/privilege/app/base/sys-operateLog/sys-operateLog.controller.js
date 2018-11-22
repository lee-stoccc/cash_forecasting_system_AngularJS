(function(){angular.module("devplatformApp").controller("SysOperateLogController",a);a.$inject=["PublicService","Principal","ngDialog","$timeout","SysOperateLogService","ParseLinks","AlertService","$state","paginationConstants","JhiLanguageService","$scope","$stateParams","RoleManagerService","$rootScope","Upload","globalConstant"];function a(e,t,g,s,q,i,m,p,l,c,k,r,h,f,o,b){k.datePickerOpenStatus={};k.openCalendar=n;k.sysOperateLog=e.showView("sysOperateLog");k.formParam={account:"",userName:"",type:"",operateContent:"",startTime:undefined,endTime:undefined};k.tablesConfig={showCheckBox:false,tableTitles:[{title:"devplatformApp.sysOperateLog.account",filed:"account",type:"text"},{title:"devplatformApp.sysOperateLog.userName",filed:"userName",type:"text"},{title:"devplatformApp.sysOperateLog.time",filed:"createTime",type:"date"},{title:"devplatformApp.sysOperateLog.address",filed:"address",type:"text"},{title:"devplatformApp.sysOperateLog.type",filed:"type",type:"text-status",actions:[{statusList:[{status:"1",showName:"devplatformApp.sysOperateLog.select.login"},{status:"2",showName:"devplatformApp.sysOperateLog.select.action"}]}]},{title:"devplatformApp.sysOperateLog.logTime",filed:"logTime",type:"date",},{title:"devplatformApp.sysOperateLog.operationContent",filed:"operateContent",type:"text"}],url:"api/sysOperateLog/getAllSysOperateLogs",formParams:{account:k.formParam.account,userName:k.formParam.userName,type:k.formParam.type,operateContent:k.formParam.operateContent,startTime:k.formParam.startTime,endTime:k.formParam.endTime}};k.loadAll=function d(){k.refreshTableList(k.formParam)};k.clear=function j(){k.formParam={account:"",userName:"",type:"",operateContent:"",startTime:undefined,endTime:undefined}};k.checkStartTime=function(){if(k.formParam.startTime>k.formParam.endTime){var u="devplatformApp.sysOperateLog.timeMsg1";k.showDialog(u);k.formParam.startTime=undefined}};k.checkEndTime=function(){if(k.formParam.startTime>k.formParam.endTime){var u="devplatformApp.sysOperateLog.timeMsg2";k.showDialog(u);k.formParam.endTime=undefined}};k.showDialog=function(u){g.openConfirm({template:"app/common/dialog.html",className:"ngdialog-theme-default",controller:["$scope",function(v){v.message=u;v.type=""}]});s(function(){g.close()},2000)};k.datePickerOpenStatus.startTime=false;k.datePickerOpenStatus.endTime=false;function n(u){k.datePickerOpenStatus[u]=true}}})();