/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('FormComponentManagementController', FormComponentManagementController);

    FormComponentManagementController.$inject = ['PublicService', '$state', 'MenuManagementService','$scope', '$stateParams','ngDialog','$uibModalInstance','$timeout'];
    function FormComponentManagementController(PublicService,$state,MenuManagementService,$scope, $stateParams,ngDialog,$uibModalInstance,$timeout) {
        $scope.formChecked = [];
        $scope.componentChecked = [];
        $scope.menuFormId = $stateParams.menuFormId;
        $scope.select_all_form = false;
        $scope.select_all_component = false;

        $scope.loadForm = loadForm;
        $scope.loadForm();
        function loadForm(){
            $scope.formChecked = [];
            if($stateParams.menuFormId) {
                MenuManagementService.getAllSysForms({menuId:$stateParams.menuFormId}).then(function(response){
                    $scope.formList = response.data;
                });
            }
        }

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
            $state.go('app.menu-management');
        };
        $scope.loadComponent = loadComponent;
        function loadComponent(formId) {
            $scope.componentChecked = [];
            $scope.formId = formId;
            if(formId) {
                MenuManagementService.getAllSysComponents({formId:formId}).then(function(response){
                    $scope.componentList = response.data;
                });
            }
        }
        $scope.addForm = function () {
            $scope.formId = null;
            if (!$scope.menuFormId){
                //$scope.type = "";
                //$scope.message = "未获取到菜单信息，请重试!";
            	var msg = "devplatformApp.menuManagement.noMenuMsg";
                $scope.showDialog(msg);
                return;
            }else{
                ngDialog.openConfirm({
                    template: 'privilege/app/base/menu-management/form-component-management/form-edit.html',
                    className: 'ngdialog-theme-default',
                    controller: 'FormEditController',
                    width:"500px",
                    scope: $scope
                }).then(loadForm);
            }
        };
        $scope.editForm = function () {
            if ($scope.formChecked.length !== 1){
                //$scope.type = "";
                //$scope.message = "请选择一条数据";
            	var msg = "devplatformApp.menuManagement.mustSelect";
                $scope.showDialog(msg);
                return;
            }else{
                $scope.formId = $scope.formChecked[0];
                ngDialog.openConfirm({
                    template: 'privilege/app/base/menu-management/form-component-management/form-edit.html',
                    className: 'ngdialog-theme-default',
                    controller: 'FormEditController',
                    width:"500px",
                    scope: $scope
                }).then(loadForm);
            }
        };
        $scope.deleteForm = function () {
            if ($scope.formChecked.length === 0){
                //$scope.type = "";
                //$scope.message = "请选择数据";
                var msg = "devplatformApp.menuManagement.mustSelect";
                $scope.showDialog(msg);
                return;
            }
            $scope.message = "devplatformApp.menuManagement.delConfirmForm";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        MenuManagementService.deleteSysForm($scope.formChecked).then(function(){
                            $scope.closeThisDialog(); //关闭弹窗
                            msg = "global.deleteSuccess";
                            PublicService.openDialog(msg);
                            $scope.loadForm();
                            $scope.loadComponent($scope.formId);
                        });
                    };
                }]
            });

        };
        $scope.addComponent = function () {
            if(!$scope.formId){
                //$scope.type = "";
                var msg = "devplatformApp.menuManagement.mustSelect";
                $scope.showDialog(msg);
                return;
            }else{
                $scope.componentId = null;
                ngDialog.openConfirm({
                    template: 'privilege/app/base/menu-management/form-component-management/component-edit.html',
                    className: 'ngdialog-theme-default',
                    controller: 'ComponentEditController',
                    scope: $scope
                }).then(function(response){
                    $scope.loadComponent($scope.formId);
                });
            }
        };
        $scope.editComponent = function () {
            if ($scope.componentChecked.length !== 1){
                //$scope.type = "";
                //$scope.message = "请选择一条数据";
            	var msg = "devplatformApp.menuManagement.mustSelect";
                $scope.showDialog(msg);
                return;
            }else{
                $scope.componentId = $scope.componentChecked[0];
                ngDialog.openConfirm({
                    template: 'privilege/app/base/menu-management/form-component-management/component-edit.html',
                    className: 'ngdialog-theme-default',
                    controller: 'ComponentEditController',
                    scope: $scope
                }).then(function(response){
                    $scope.loadComponent($scope.formId);
                });
            }
        };
        $scope.deleteComponent = function () {
            if ($scope.componentChecked.length === 0){
                //$scope.type = "";
                //$scope.message = "请选择数据";
            	var msg = "devplatformApp.menuManagement.mustSelect";
                $scope.showDialog(msg);
                return;
            }
            $scope.message = "devplatformApp.menuManagement.delConfirmForm";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        MenuManagementService.deleteSysComponent($scope.componentChecked).then(function(response){
                            $scope.loadComponent($scope.formId);
                            $scope.closeThisDialog(); //关闭弹窗
                            msg = "global.deleteSuccess";
                            PublicService.openDialog(msg);
                        });

                    };
                }]
            });
        };

        $scope.selectAllForms = function() {
            if($scope.select_all_form) {
                angular.forEach($scope.formList, function (i) {
                    i.checked = true;
                    $scope.formChecked.push(i.id);
                })
            }else {
                angular.forEach($scope.formList, function (i) {
                    i.checked = false;
                    $scope.formChecked = [];
                })
            }
        };

        $scope.selectOneForm = function() {
            angular.forEach($scope.formList , function (i) {
                var index = $scope.formChecked.indexOf(i.id);
                if(i.checked && index === -1) {
                    $scope.formChecked.push(i.id);
                } else if (!i.checked && index !== -1){
                    $scope.formChecked.splice(index, 1);
                }
            });

            if ($scope.formList.length === $scope.formChecked.length) {
                $scope.select_all_form = true;
            } else {
                $scope.select_all_form = false;
            }
        };
        $scope.selectAllComponents = function() {
            if($scope.select_all_component) {
                angular.forEach($scope.componentList, function (i) {
                    i.checked = true;
                    $scope.componentChecked.push(i.id);
                })
            }else {
                angular.forEach($scope.componentList, function (i) {
                    i.checked = false;
                    $scope.componentChecked = [];
                })
            }
        };

        $scope.selectOneComponent = function() {
            angular.forEach($scope.componentList , function (i) {
                var index = $scope.componentChecked.indexOf(i.id);
                if(i.checked && index === -1) {
                    $scope.componentChecked.push(i.id);
                } else if (!i.checked && index !== -1){
                    $scope.componentChecked.splice(index, 1);
                }
            });

            if ($scope.componentList.length === $scope.componentChecked.length) {
                $scope.select_all_component = true;
            } else {
                $scope.select_all_component = false;
            }
        };

        $scope.showDialog = function(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                //scope:$scope //将scope传给dialog.html,以便显示提示信息
                controller:['$scope',function($scope){
                	$scope.message = msg;
                	$scope.type = '';
                }]
            });
            $timeout(function() {
                ngDialog.close();
            }, 2000);
        };

    }
})();

