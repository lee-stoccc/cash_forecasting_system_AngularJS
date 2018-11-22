(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SysOperateLogController', SysOperateLogController);

    SysOperateLogController.$inject = ['PublicService','Principal', 'ngDialog', '$timeout', 'SysOperateLogService', 'ParseLinks', 'AlertService', '$state',  'paginationConstants', 'JhiLanguageService', '$scope',
        '$stateParams','RoleManagerService','$rootScope','Upload','globalConstant'];
    
    function SysOperateLogController(PublicService,Principal, ngDialog, $timeout, SysOperateLogService, ParseLinks, AlertService, $state, paginationConstants, JhiLanguageService, $scope,
                                     $stateParams, RoleManagerService, $rootScope, Upload, globalConstant) {

        $scope.datePickerOpenStatus = {};
        $scope.openCalendar = openCalendar;
        $scope.sysOperateLog = PublicService.showView('sysOperateLog');
        
        $scope.formParam = {
                'account' : '',
                'userName' : '',
                'type' : '',
                'operateContent' : '',
                'startTime' : undefined,
                'endTime' : undefined
            };
        
        $scope.tablesConfig = {
                showCheckBox:false,
                //tableWidth:'table-default-width',
                tableTitles:[
                     {title:"devplatformApp.sysOperateLog.account",filed: 'account',type:'text'},
				     {title:"devplatformApp.sysOperateLog.userName",filed:'userName',type:'text'},
				     {title:"devplatformApp.sysOperateLog.time",filed:'createTime',type:'date'},
				     {title:"devplatformApp.sysOperateLog.address",filed:'address',type:'text'},
				     /*{title:"devplatformApp.sysOperateLog.type",filed:'typeName',type:'text',width:'table-item-pre-1'},*/
				     {title:"devplatformApp.sysOperateLog.type",filed:'type',type:'text-status',actions:[{statusList:[{status:'1',showName:'devplatformApp.sysOperateLog.select.login'},{status:'2',showName:'devplatformApp.sysOperateLog.select.action'}]}]},
				     {title:"devplatformApp.sysOperateLog.logTime",filed:'logTime',type:'date',},
				     {title:"devplatformApp.sysOperateLog.operationContent",filed:'operateContent',type:'text'}
                ],
                url:'api/sysOperateLog/getAllSysOperateLogs',
                formParams:{
                	account : $scope.formParam.account,
                	userName : $scope.formParam.userName,
                	type : $scope.formParam.type,
                	operateContent : $scope.formParam.operateContent,
                	startTime : $scope.formParam.startTime,
                	endTime : $scope.formParam.endTime
                }
        };
        
        $scope.loadAll = function loadAll () {
            $scope.refreshTableList($scope.formParam);
        };
        
        $scope.clear = function clear(){
        	$scope.formParam = {
                    'account' : '',
                    'userName' : '',
                    'type' : '',
                    'operateContent' : '',
                    'startTime' : undefined,
                    'endTime' : undefined
                };
        };
        
        $scope.checkStartTime = function(){
            if($scope.formParam.startTime > $scope.formParam.endTime){
                var msg = "devplatformApp.sysOperateLog.timeMsg1";
                $scope.showDialog(msg);
                $scope.formParam.startTime = undefined;
            }
        };
        $scope.checkEndTime = function(){
            if($scope.formParam.startTime > $scope.formParam.endTime){
            	var msg = "devplatformApp.sysOperateLog.timeMsg2";
                $scope.showDialog(msg);
                $scope.formParam.endTime = undefined;
            }
        };

        $scope.showDialog = function(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                controller:['$scope',function($scope){
                	$scope.message = msg;
                	$scope.type = "";
                }]
            });
            $timeout(function() {
                ngDialog.close();
            }, 2000);
        };

        $scope.datePickerOpenStatus.startTime = false;
        $scope.datePickerOpenStatus.endTime = false;
        function openCalendar (date) {
            $scope.datePickerOpenStatus[date] = true;
        }

    }
})();
