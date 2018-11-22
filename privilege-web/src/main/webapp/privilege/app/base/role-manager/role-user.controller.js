(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('RoleUserController', RoleUserController);

    RoleUserController.$inject = ['$uibModalInstance', 'Principal', 'RoleUserService', 'ParseLinks', 'AlertService', '$state',  'paginationConstants', 'JhiLanguageService', '$scope', '$stateParams','$timeout','ngDialog'];

    function RoleUserController($uibModalInstance, Principal, RoleUserService, ParseLinks, AlertService, $state, paginationConstants, JhiLanguageService, $scope, $stateParams, $timeout, ngDialog) {

        $scope.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        $scope.currentAccount = null;
        $scope.languages = null;
        $scope.getAllUsers = getAllUsers;
        $scope.page = 1;
        $scope.totalItems = null;
        $scope.clear = clear;
        $scope.links = null;
        $scope.loadPage = loadPage;
        $scope.predicate = 'id';
        $scope.reverse = 'asc';
        $scope.itemsPerPage = paginationConstants.itemsPerPage;
        $scope.transition = transition;
        $scope.selectAll = select_All;
        $scope.selectOne = selectOne;
        $scope.save = save;
        $scope.select_all = false;
        $scope.userDTOs= [];
        $scope.checked = [];
        $scope.addSysUsersId = [];
        $scope.delSysUsersId = [];

        $scope.formParam = {
            'userName' : '',
            'roleId' : ''
        };

        $scope.getAllUsers();
        JhiLanguageService.getAll().then(function (languages) {
            $scope.languages = languages;
        });
        Principal.identity().then(function(account) {
            $scope.currentAccount = account;
        }); 
 
        function getAllUsers() {
            RoleUserService.getAllUsers({
                page_number: $stateParams.page,
                page_size: $scope.itemsPerPage,
                formParams:{
                    'userName' : $scope.formParam.userName,
                    'roleId' : $stateParams.sysRoleId
                },
                sort: sort()
            }).then(onSuccess, onError);
        }

        function onSuccess(response) {
            if (response.statusCode === '0000') {
                var data = response.data;
                $scope.userDTOs = data.list;
                $scope.links = ParseLinks.parse(data['link']);
                $scope.totalItems = data['total_count'];
                $scope.queryCount = $scope.totalItems;
                //$scope.page = $stateParams.page;
                $scope.select_all = false;
                reChecked();
            }
        }

        function onError(error) {
            AlertService.error(error.data.message);
        }

        function clear () {
            $scope.formParam = {
                'userName' : ''
            };
        }

        function sort () {
            var result = [$scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc')];
            if ($scope.predicate !== 'id') {
                result.push('id');
            }
            return result;
        }

        function loadPage (page) {
            $scope.page = page;
            $scope.transition();
        }

        function transition () {
            /*$state.transitionTo($state.$current, {
                page: $scope.page,
                sort: $scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc')
                //search: $scope.currentSearch,
                //selectData:{}
            });*/
            RoleUserService.getAllUsers({
                page_number: $scope.page,
                page_size: $scope.itemsPerPage,
                formParams:{
                    'userName' : $scope.formParam.userName,
                    'roleId' : $stateParams.sysRoleId
                },
                sort: sort()
            }).then(onSuccess, onError);
        }

        function select_All() {
            if($scope.select_all) {
                $scope.checked = [];
                angular.forEach($scope.userDTOs, function (i) {
                    i.checked = true;
                    $scope.checked.push(i.id);
                })
            }else {
                angular.forEach($scope.userDTOs, function (i) {
                    i.checked = false;
                    $scope.checked = [];
                })
            }

            angular.forEach($scope.userDTOs, function (i) {
                //新增的
                var add = $scope.addSysUsersId.indexOf(i.id);
                if(i.checked && add === -1 && !i.sysUsersId) {
                    $scope.addSysUsersId.push(i.id);
                } else if (!i.checked && add !== -1){
                    $scope.addSysUsersId.splice(index, 1);
                }

                //删除的
                var del = $scope.delSysUsersId.indexOf(i.id);
                if(!i.checked && del === -1 && i.sysUsersId) {
                    $scope.delSysUsersId.push(i.id);
                } else if (i.checked && del !== -1){
                    $scope.delSysUsersId.splice(index, 1);
                }
            })


        }

        function selectOne() {
            angular.forEach($scope.userDTOs, function (i) {
                var index = $scope.checked.indexOf(i.id);
                if(i.checked && index === -1) {
                    $scope.checked.push(i.id);
                } else if (!i.checked && index !== -1){
                    $scope.checked.splice(index, 1);
                }

                //新增的
                var add = $scope.addSysUsersId.indexOf(i.id);
                if(i.checked && add === -1 && !i.sysUsersId) {
                    $scope.addSysUsersId.push(i.id);
                } else if (!i.checked && add !== -1){
                    $scope.addSysUsersId.splice(add, 1);
                }

                //删除的
                var del = $scope.delSysUsersId.indexOf(i.id);
                if(!i.checked && del === -1 && i.sysUsersId) {
                    $scope.delSysUsersId.push(i.id);
                } else if (i.checked && del !== -1){
                    $scope.delSysUsersId.splice(del, 1);
                }
            });

            if ($scope.userDTOs.length === $scope.checked.length) {
                $scope.select_all = true;
            } else {
                $scope.select_all = false;
            }
        }

        //回显方法
        function reChecked() {
            angular.forEach($scope.userDTOs, function (i) {
                if(i.sysUsersId){
                    i.checked = true;
                }
                var delIndex = $scope.delSysUsersId.indexOf(i.id);
                if(delIndex !== -1){
                    i.checked = false;
                }

                var addIndex = $scope.addSysUsersId.indexOf(i.id);
                if(addIndex !== -1){
                    i.checked = true;
                }

                var num = 0;
                angular.forEach($scope.userDTOs, function (i) {
                    if(i.checked){
                        num++;
                    }
                })
                if($scope.userDTOs.length === num){
                    $scope.select_all = true;
                }
            });


        }

        function save() {
            RoleUserService.saveSysUserRole({
                sysRolesId : $stateParams.sysRoleId,
                addSysUsersId : $scope.addSysUsersId,
                delSysUsersId : $scope.delSysUsersId
            }).then(function (result) {
                if (result.statusCode === '0000') {
                    var message = result.msgCode;
                    $scope.openDialog(message);
                    /*$timeout(function () {
                        ngDialog.close();
                        $uibModalInstance.dismiss('cancel');
                        $state.go('app.role-manager');
                    }, 2000);*/
                    $uibModalInstance.dismiss('cancel');
                    $state.go('app.role-manager');
                } else {
                    var message = result.msgCode;
                    $scope.openDialog(message);
                }
            });
            $scope.isSaving = false;
        }

        $scope.openDialog = function (msg) {
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                //scope: $scope //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                	$scope.message = msg;
                }]
            });
        };


        $scope.cancelDialog = function() {
            $uibModalInstance.dismiss('cancel');
            $state.go('app.role-manager');
        }
    }
})();
