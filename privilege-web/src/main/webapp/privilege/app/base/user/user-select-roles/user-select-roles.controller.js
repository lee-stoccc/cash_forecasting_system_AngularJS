(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SelectRolesController', SelectRolesController);

    SelectRolesController.$inject = ['$uibModalInstance', 'UserService', '$state', '$scope', '$stateParams', '$timeout', 'ngDialog', 'PublicService'];
    function SelectRolesController($uibModalInstance, UserService, $state, $scope, $stateParams, $timeout, ngDialog, PublicService) {
        $scope.roleList = [];
        $scope.userRoleList = [];
        $scope.roleIds = [];
        $scope.isRoleActive = 0;
        $scope.isUserRoleActive = 0;
        $scope.checkRole = checkRole;
        $scope.checkUserRole = checkUserRole;
        $scope.selectRole = selectRole;
        $scope.selectAllRole = selectAllRole;
        $scope.selectUserRole = selectUserRole;
        $scope.selectAllUserRole = selectAllUserRole;
        $scope.saveUserRole = saveUserRole;
        $scope.cancelDialog = cancelDialog;
        init();
        function init() {
            UserService.getUserRole({userId:$stateParams.userId}).then(function (response) {
                if (response.statusCode === "0000"){
                    $scope.roleList = response.data.roleList;
                    $scope.userRoleList = response.data.userRoleList;
                }
            },function () {
                $scope.message = "devplatformApp.user.prompt.failedData";
                PublicService.showMessageDialog($scope);
            })
        }

        function checkRole(index) {
            $scope.isRoleActive = index;
        }

        function checkUserRole(index) {
            $scope.isUserRoleActive = index;
        }

        function selectRole() {
            if ($scope.roleList !== null && $scope.roleList.length > 0){
                var role = $scope.roleList[$scope.isRoleActive];
                $scope.userRoleList.push(role);
                $scope.roleList.splice($scope.isRoleActive,1);
            }
        }

        function selectUserRole() {
            if ($scope.userRoleList !== null && $scope.userRoleList.length > 0){
                var role = $scope.userRoleList[$scope.isUserRoleActive];
                $scope.roleList.push(role);
                $scope.userRoleList.splice($scope.isUserRoleActive,1);
            }
        }

        function selectAllRole() {
            if ($scope.roleList !== null && $scope.roleList.length > 0){
                for (var index = 0;index < $scope.roleList.length;index++){
                    var role = $scope.roleList[index];
                    $scope.userRoleList.push(role);
                }
                $scope.roleList = [];
            }
        }

        function selectAllUserRole() {
            if ($scope.userRoleList !== null && $scope.userRoleList.length > 0){
                for (var index = 0;index < $scope.userRoleList.length;index++){
                    var role = $scope.userRoleList[index];
                    $scope.roleList.push(role);
                }
                $scope.userRoleList = [];
            }
        }

        function saveUserRole() {
            if ($scope.userRoleList !== null && $scope.userRoleList.length > 0){
                for (var index = 0;index < $scope.userRoleList.length;index++){
                    $scope.roleIds.push($scope.userRoleList[index]['id']);
                }
            }else {
                //$scope.message = "devplatformApp.user.prompt.selectRoles";
                var msg = 'devplatformApp.user.prompt.selectRoles';
                //PublicService.showMessageDialog($scope);
                PublicService.openDialog(msg);
                return;
            }
            if (!$scope.saveCommit){
                $scope.saveCommit = true;
                UserService.saveUserRole({userId:$stateParams.userId,roleIds:$scope.roleIds}).then(function (response) {
                    $scope.saveCommit = false;
                    //$scope.message = "devplatformApp.user.prompt.saveSuccess";
                    //PublicService.showMessageDialog($scope);
                    var msg = 'devplatformApp.user.prompt.saveSuccess';
                    PublicService.openDialog(msg);
                    /*$timeout(function () {
                        ngDialog.close();
                        $state.go('app.user');
                        cancelDialog();
                    }, 2000);*/
                    cancelDialog();
                    $state.go('app.user');
                },function () {
                    $scope.saveCommit = false;
                    //$scope.message = "devplatformApp.user.prompt.saveFailed";
                    var msg = 'devplatformApp.user.prompt.saveFailed';
                    //PublicService.showMessageDialog($scope);
                    PublicService.openDialog(msg);
                });
            }
        }

        function cancelDialog() {
            $uibModalInstance.dismiss('cancel');
            $state.go('app.user');
        }
    }
})();
