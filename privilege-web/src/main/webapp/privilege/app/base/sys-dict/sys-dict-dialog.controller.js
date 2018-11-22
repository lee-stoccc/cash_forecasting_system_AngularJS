(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SysDictDialogController', SysDictDialogController);

    SysDictDialogController.$inject = ['$scope', '$stateParams', 'SysDictService', '$state','$timeout', '$compile', 'PublicService','$uibModalInstance'];

    function SysDictDialogController($scope, $stateParams, SysDictService, $state, $timeout, $compile, PublicService,$uibModalInstance) {
    	$scope.clear = clear;
        $scope.parentGroup = $stateParams.parentGroup;
        if ($stateParams.id) {
        	$scope.type = "edit";
            SysDictService.getSysDict({id:$stateParams.id}).then(function (response) {
                $scope.sysDict = response.data;
                $scope.parentGroup = response.data.parentGroup;
            });
        } else {
            SysDictService.getSysDict({parentGroup:$scope.parentGroup}).then(function (response) {
                $scope.sysDict = {"sort": 0};
                if(response.data !== null){
                	$scope.sysDict.sort = response.data.maxSort;
                	if(response.data.group != null){
                    	$scope.sysDict.group = response.data.group+".";
                	}
                }
            });
        }

        $scope.save = function() {
            $scope.isSaving = true;
            var msg = 'devplatformApp.sysDict.created';
            if ($scope.sysDict.id !== null && $scope.sysDict.id !== undefined) {
            	$scope.message = "devplatformApp.sysDict.updated";
            	msg = 'devplatformApp.sysDict.updated';
            } else {
                $scope.sysDict.parentGroup = $scope.parentGroup;//父节点
                $scope.message = "devplatformApp.sysDict.created";
                msg = 'devplatformApp.sysDict.created';
            }
            SysDictService.saveSysDict($scope.sysDict).then(function (response) {
                if (response.statusCode === '0000') {
                	PublicService.openDialog(msg);
                	$state.go('app.sys-dict', {parentGroup: $scope.parentGroup});
                } else {
                    $scope.isSaving = false;
                    $scope.message = response.msgCode;
                    PublicService.showMessageDialog($scope);
                }
            });
        };

        $scope.decrease = function () {          //顺序减
            $scope.sysDict.sort--;
            if ($scope.sysDict.sort <= 0) {
                $scope.sysDict.sort = 0;
            }
        };

        $scope.increase = function () {        //顺序增
            $scope.sysDict.sort++;
        };
        
        function clear(flag){
        	$uibModalInstance.close();
            $state.go('app.sys-dict',{},{reload:flag});
        }

    }
})();
