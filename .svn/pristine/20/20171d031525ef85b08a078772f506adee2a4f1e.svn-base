(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('UserManagementController', UserManagementController);

    UserManagementController.$inject = ['$rootScope','PublicService', 'Principal', 'UserService', 'ParseLinks', 'AlertService', '$state', 'paginationConstants', 'JhiLanguageService', '$scope', '$stateParams', 'ngDialog', 'RoleManagerService', '$timeout', 'SysDictService'];

    function UserManagementController($rootScope,PublicService, Principal, UserService, ParseLinks, AlertService, $state, paginationConstants, JhiLanguageService, $scope, $stateParams, ngDialog, RoleManagerService, $timeout, SysDictService) {

        $scope.currentAccount = null;
        $scope.languages = null;
        $scope.clear = clear;
        $scope.addUser = addUser;
        $scope.deleteUser = deleteUser;
        $scope.exportExcel = exportExcel;
        $scope.toEdit = toEdit;
        $scope.selectRoles = selectRoles;
        $scope.resetPassword = resetPassword;
        $scope.userManage = PublicService.showView('userManage');

        $scope.formParam = {login: '', firstName: '', activated: ''};

        JhiLanguageService.getAll().then(function (languages) {
            $scope.languages = languages;
        });
        Principal.identity().then(function (account) {
            $scope.currentAccount = account;
        });

        SysDictService.getDictList('system.status').then(function (response) {
            $scope.dictList = response.data;
        });
        
        $scope.tablesConfig = {
                showCheckBox:true,
                tableWidth:'table-default-width',
                tableTitles:[
                     {title:"devplatformApp.user.login",filed: 'login',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.user.firstName",filed:'firstName',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.user.activated",filed:'activated',type:'btn-status',width:'table-item-pre-2',actions:[{actionName:'enableUser(item.id,item.activated)',statusList:[{status:'0',showName:'global.disabled'},{status:'1',showName:'global.enabled'}]}]},
				     {title:"devplatformApp.user.expireDate",filed:'expireDate',type:'date',width:'table-item-pre-2'},
				     {title:"entity.action.operation",filed:'operation',type:'btn',width:'table-item-pre-4',actions:[
                           {actionName:'toEdit(item.id)',name:'devplatformApp.user.home.edit',disabled:'item.activated',formEnglishName:'userManage',englishName:'editBtn'},
                           {actionName:'selectRoles(item.id)',name:'devplatformApp.user.home.selectRoles',disabled:'item.activated',formEnglishName:'userManage',englishName:'selectRolesBtn'},
                           {actionName:'resetPassword(item.id)',name:'devplatformApp.user.home.resetPassword',disabled:'item.activated',formEnglishName:'userManage',englishName:'resetPasswordBtn'}
                           ]}
                ],
                url:'api/user/list',
                formParams:{
                	login : $scope.formParam.login,
                	firstName : $scope.formParam.firstName,
                	activated : $scope.formParam.activated
                }
        };
        
        $scope.loadAll = function() {
            $scope.refreshTableList($scope.formParam);
        };

        function onError(error) {
            AlertService.error(error.data.message);
        }

        function clear() {
            $scope.formParam = {login: '', firstName: '', activated: ''};
        }
        
        function addUser(){
        	$state.go('app.user-edit',{id:'',menuId:''});
        }

        //删除用户
        function deleteUser() {
        	$scope.choseArr = $scope.getCheckValues('activated').check;
        	$scope.choseArrParam = $scope.getCheckValues('activated').checkedParamFlags;
        	var msg = "";
        	var a = false;
            if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
            	msg = "devplatformApp.user.prompt.selectOne";
            	a = true;
            }else if($scope.choseArrParam.indexOf("1") != -1){
            	msg = "devplatformApp.user.prompt.cannotBeDelete";
            	a = true;
            }
            if(a){
            	$scope.message = msg;
            	$scope.type = "";
            	PublicService.showMessageDialog($scope);
                return;
            }
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                	$scope.message = "devplatformApp.user.delete.question";
                    $scope.type = "confirm";
                    $scope.confirm = function () {
                        var id = "";
                        for (var i = 0; i < $scope.choseArr.length; i++) {
                            if (i === 0) {
                                id += "'" + $scope.choseArr[i] + "'";
                            } else {
                                id += ",'" + $scope.choseArr[i] + "'";
                            }
                        }
                        UserService.deleteUser(id).then(function(){
                        	$scope.loadAll();
                        	$scope.closeThisDialog(); //关闭弹窗
                        	msg = "global.deleteSuccess";
                            PublicService.openDialog(msg);
                        });
                        
                    };
                }]
            });
        }

        //跳转编辑页
        function toEdit(id) {
            $state.go('app.user-edit', {id: id});
        }

        function exportExcel() {
            $scope.message = "devplatformApp.user.prompt.inDevelopment";
            PublicService.showMessageDialog($scope);
        }

        function selectRoles(id) {
            $state.go('app.user-select-roles', {userId: id});
        }

        function resetPassword(id) {
            $scope.message = "devplatformApp.user.prompt.confirmReset";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        UserService.resetPassword(id).then(function () {
                            $scope.message = "devplatformApp.user.prompt.resetSuccess";
                            $scope.type = "";
                            $timeout(function () {
                                ngDialog.close();
                            }, 2000);
                        });
                    };
                }]
            });
        }

        $scope.enableUser = function (id, activated) {
            if (activated == '0' || activated == null || activated == undefined) {
                $scope.message = "devplatformApp.user.prompt.confirmEnable";
                activated = "1";
            } else if (activated == '1') {
                $scope.message = "devplatformApp.user.prompt.confirmDisable";
                activated = "0";
            }
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        UserService.enableSysUser({userId: id, activated: activated}).then(function(response){
                        	if(response.statusCode === '0000'){
                        		$scope.loadAll();
                        	}
                        });
                        $scope.closeThisDialog(); //关闭弹窗
                    };
                }]
            });
        };
        
        $rootScope.$on("userEdit",function(event,data){
			$scope.loadAll();	
		});
    }
})();
