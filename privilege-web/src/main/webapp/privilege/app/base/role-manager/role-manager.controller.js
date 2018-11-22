/**
 * Created by Administrator on 2017/8/23/0023.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('RoleManagerController', RoleManagerController);

    RoleManagerController.$inject = ['$rootScope','PublicService', 'RoleManagerService','ngDialog', 'AlertService', '$state',  'paginationConstants', '$scope', '$stateParams','$timeout','$translate'];

    function RoleManagerController($rootScope,PublicService, RoleManagerService,ngDialog, AlertService, $state, paginationConstants, $scope, $stateParams,$timeout,$translate) {
    	$scope.menuId = $stateParams.menuId;
        $scope.languages = null;
        $scope.resetSearch = resetSearch;
        $scope.roleManage = PublicService.showView('roleManage');
        $scope.formParam = {};
        $scope.choseArr = [];
        $scope.tablesConfig = {
                showCheckBox:true,
                checkOneAction:'checkOneAction',
         		checkAllAction:'checkAllAction',
                tableWidth:'table-default-width',
                tableTitles:[
                     {title:"devplatformApp.sysRole.roleNo",filed: 'roleNo',type:'text',width:8},
				     {title:"devplatformApp.sysRole.roleName",filed:'roleName',type:'text',width:10},
				     {title:"devplatformApp.sysRole.description",filed:'description',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.sysRole.delFlag",filed:'delFlag',type:'btn-status',width:'table-item-pre-2',actions:[{actionName:'enableRole(item.id,item.delFlag)',statusList:[{status:'0',showName:'devplatformApp.sysRole.select.disabled'},{status:'1',showName:'devplatformApp.sysRole.select.enabled'}]}]},
				     {title:"devplatformApp.sysRole.operation",filed:'operation',type:'btn',width:'table-item-pre-4',actions:[
                           {actionName:'toEdit(item.id)',name:'entity.action.edit',disabled:"item.delFlag === '1'",formEnglishName:'roleManage',englishName:'editBtn'},
                           {actionName:'toConfiguration(item.id)',name:'devplatformApp.sysRole.configuration',disabled:"item.delFlag === '1'",formEnglishName:'roleManage',englishName:'roleConfigBtn'},
                           {actionName:'selectUser(item.id)',name:'devplatformApp.sysRole.assignUser',disabled:"item.delFlag === '1'",formEnglishName:'roleManage',englishName:'assignUserBtn'}
                           ]}
                ],
                url:'api/sys-role/getAllSysRoles',
                formParams:{
                	roleName : $scope.formParam.roleName,
                	roleNo : $scope.formParam.roleNo,
                	delFlag : $scope.formParam.delFlag,
                	description : $scope.formParam.description
                }
        };

        $scope.loadAll = function() {
            $scope.refreshTableList($scope.formParam);
        };
        
        $scope.checkOneAction = function(allItem){
        	$scope.choseArr = [];
            angular.forEach(allItem, function (item) {
                if(item.checked) {
                	$scope.choseArr.push(item);
                }
            });
        };
        
        $scope.checkAllAction = function(allItem){
        	$scope.choseArr = [];
        };
        
        function resetSearch () {
            $scope.formParam = {
           
            };
        }

        $scope.toEdit = function(id){
        	$state.go('app.role-manager-edit',{id:id,menuId:''});
        };
        
        $scope.toConfiguration = function(id){
        	$state.go('app.role-manager-configuration',{id:id,menuId:''});
        };
        
        function onError(error) {
            AlertService.error("获取数据失败");
        }

        $scope.deleteSysRole = function() {
        	
        	$scope.choseArr = $scope.getCheckValues('delFlag').check;
        	$scope.choseArrParam = $scope.getCheckValues('delFlag').checkedParamFlags;
        	var msg = "";
        	var a = false;
            if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
            	msg = "devplatformApp.sysRole.selectOne";
            	a = true;
            }else if($scope.choseArrParam.indexOf("1") != -1){
            	msg = "devplatformApp.sysRole.delDisabled";
            	a = true;
            }
            if(a){
            	ngDialog.openConfirm({
                    template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                    className: 'ngdialog-theme-default',
                    controller:['$scope', function($scope){
                    	$scope.message = msg;
                        $scope.type = "";
                    }]
                    //scope: $scope //将scope传给dialog.html,以便显示提示信息
                });
                return;
            }
            
            $scope.message = "devplatformApp.sysRole.delConfirm";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
	                $scope.confirm = function () {
	                    RoleManagerService.deleteSysRole($scope.checked)
	                    .then(function(response){
	                    	$scope.closeThisDialog(); //关闭弹窗
	                    	if(response.statusCode === '0000'){
	                    		$scope.loadAll();
	                            msg = "global.deleteSuccess";
	                            PublicService.openDialog(msg);
	                    	}
	                    });
	                };
    			 }]
            });
        };

        $scope.showDialog = function(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                //scope:$scope //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                	$scope.message = msg;
                    $scope.type = "";
                }]
            });
            $timeout(function() {
                ngDialog.close();
            }, 2000);
        };

        $scope.enableRole = function(id,delFlag) {
            if(delFlag == '0' || delFlag == null || delFlag == undefined){
                $scope.message = "devplatformApp.sysRole.enableConfirm";
                delFlag = "1";
            }else if(delFlag == '1'){
                $scope.message = "devplatformApp.sysRole.disableConfirm";
                delFlag = "0";
            }
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope:$scope, //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                    $scope.confirm = function(){
                        RoleManagerService.enableSysRole({roleId:id,delFlag:delFlag})
                        .then(function(response){
	                    	if(response.statusCode === '0000'){
	                    		$scope.loadAll();
	                    	}/*else{
	                    		var msg = "global.error.errorMsg";
	                    		PublicService.openDialog(msg);
	                    	}*/
	                    });
                        $scope.closeThisDialog(); //关闭弹窗
                    };
                }]
            });
        };

        //角色选择用户
        $scope.selectUser = function(sysRoleId){
            $state.go('app.role-user',{sysRoleId:sysRoleId});
        };
        
        // 刷新
        $rootScope.$on("newRoleManager",function(event,data){
			$scope.loadAll();	
		});
    }
})();
