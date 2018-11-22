(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('UserDialogController', UserDialogController);

    UserDialogController.$inject = ['$rootScope','ngVerify','$scope', '$stateParams', 'UserService', '$state','$uibModalInstance', '$timeout', 'DateUtils', '$compile', 'PublicService'];

    function UserDialogController($rootScope,ngVerify,$scope, $stateParams, UserService, $state,$uibModalInstance, $timeout, DateUtils, $compile, PublicService) {

        
        if ($stateParams.id) {
            $scope.type = "edit";
            UserService.getUser($stateParams.id).then(function (response) {
                $scope.user = response.data;
                if (!PublicService.isEmptyObject($scope.user.expireDate)) {
                	 $scope.user.expireDate = dateToGMT($scope.user.expireDate);
				}
                if (!PublicService.isEmptyObject($scope.user.passwordExpireDate)) {
                	$scope.user.passwordExpireDate = dateToGMT($scope.user.passwordExpireDate);
                }
                $scope.isOpen = $scope.user.activated==true ? true : false;
            });
        }

        $scope.save = save;
        $scope.clear = clear;

        function save() {
            $scope.user.activated = $scope.isOpen? true:false;
            $scope.isSaving = true;
            var msg = 'devplatformApp.user.created';
            if ($scope.user.id !== null && $scope.user.id !== undefined) {
                //$scope.message = "devplatformApp.user.updated";
            	msg = 'devplatformApp.user.updated';
            	var p=$('#field_password2').val()
            	$scope.user.password=p  
            } else {
                //$scope.message = "devplatformApp.user.created";
            	$scope.user.password="111111"  
            	msg = 'devplatformApp.user.created';
            }  
            
            $scope.user.passwordExpireDate= $scope.user.paExpireDate
            UserService.saveUser($scope.user).then(function (response) {
                if (response.statusCode === '0000') {
                	 $scope.message = "global.saveSuccess";   
                	 PublicService.showDialogTimeout( $scope.message );
                	$rootScope.$broadcast("userEdit", '');
                	
                	$uibModalInstance.close();
                    $state.go('app.user');
                } else {
                	$scope.isSaving = false;
                    //$scope.message = response.msgCode;
                    msg = response.msgCode;
                    //PublicService.showMessageDialog($scope);
                    PublicService.openDialog(msg);
                }
            });
        }

        $scope.dateformat = "yyyy-MM-dd HH:mm";

        $scope.datePickerOpenStatus = {};

        $scope.datePickerOpenStatus.expireDate = false;
        $scope.datePickerOpenStatus.passwordExpireDate = false;

        $scope.openCalendar = function (date) {
            $scope.datePickerOpenStatus[date] = true;
        };
        
        function clear(flag){
        	$uibModalInstance.close();
            $state.go('app.user',{},{reload:flag});
        }
    };
})();
