(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('RoleManagerEditController', RoleManagerEditController);

    RoleManagerEditController.$inject = ['$rootScope','PublicService','$timeout','$scope','$stateParams','RoleManagerService','$state','$compile','ngVerify','$uibModalInstance'];

    function RoleManagerEditController ($rootScope,PublicService,$timeout,$scope,$stateParams,RoleManagerService,$state,$compile,ngVerify,$uibModalInstance) {
        $scope.menuId = $stateParams.menuId;
        $scope.clear = clear;
        if($stateParams.id) {
            RoleManagerService.getSysRole($stateParams.id).then(function (response) {
                $scope.sysRole = response.data;
            });
        }
        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        $scope.save = function() {
            $scope.isSaving = true;
            if ($scope.sysRole.id !== null && $scope.sysRole.id !== undefined) {
                RoleManagerService.updateSysRole($scope.sysRole).then(function(response){
                	if(response.statusCode === '0000'){
                		 $scope.message = "global.saveSuccess"; 
                		 PublicService.showDialogTimeout($scope.message);
                			$rootScope.$broadcast("newRoleManager", '');
                		 $state.go('app.role-manager');
                		 
                         $scope.isSaving = false;
                	}else{
                		var msg = response.msgCode;
                		PublicService.openDialog(msg);
                	}
                });
            } else {
                RoleManagerService.saveSysRole($scope.sysRole).then(function(response){
                	if(response.statusCode === '0000'){
                		PublicService.openDialog("global.saveSuccess");
		                $state.go('app.role-manager');
		                $scope.isSaving = false;
		                $scope.clear(true);
                	}else{
                		var msg = response.msgCode;
                		PublicService.openDialog(msg);
                	}
                });
            }
        };

        var checkRoleNoMatches = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='devplatformApp.sysRole.regular'>编号只能为字母和数字，且长度为3到10</span>"))($scope);
        var checkRoleNoDialog = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='{{repeatRoleNo}}'>该编号已存在，请重新输入</span>"))($scope);
        var roleNoReg = /^[a-zA-Z0-9]{3,10}$/;
        $scope.checkRoleNo = function() {
            $scope.isSaving = true;
            if(roleNoReg.test($scope.sysRole.roleNo)){
                if (checkRoleNoMatches) {
                    checkRoleNoMatches.remove();
                }
                RoleManagerService.checkRoleNo({roleNo:$scope.sysRole.roleNo}).then(function(response){
                    if(response.data > 0){
                    	$scope.repeatRoleNo = response.msgCode;
                        angular.element('#roleNoDiv').append(checkRoleNoDialog);
                        angular.element('#roleNo').addClass("input-err");
                        $scope.isSaving = true;
                    }else if(response.data <= 0){
                        angular.element('#roleNo').removeClass("input-err");
                        if (checkRoleNoDialog) {
                            checkRoleNoDialog.remove();
                            $scope.isSaving = false;
                        }
                    }
                });
            }else{
                angular.element('#roleNoDiv').append(checkRoleNoMatches);
                angular.element('#roleNo').addClass("input-err");
                if (checkRoleNoDialog) {
                    checkRoleNoDialog.remove();
                }
            }
        };
        
        
        function clear(flag){
        	$uibModalInstance.close();
            $state.go('app.role-manager',{},{reload:flag});
        }
    }
})();
