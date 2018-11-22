(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('UserEditPasswordController', UserEditPasswordController);

    UserEditPasswordController.$inject = ['$scope', '$uibModalInstance', '$compile', 'UserService', 'ngDialog', '$timeout', 'dep', 'PublicService'];

    function UserEditPasswordController($scope, $uibModalInstance, $compile, UserService, ngDialog, $timeout, dep, PublicService) {

        $scope.editParams = new Object();
        $scope.editParams.login = dep.loginName;

        $scope.clear = function(){
            $uibModalInstance.dismiss('cancel');
        }

        $scope.save = function () {
            $scope.isSaving = true;
            UserService.editPassword($scope.editParams).then(function (response) {
                if (response.statusCode === '0000') {
                    $scope.message = "devplatformApp.user.updated";
                    ngDialog.openConfirm({
                        template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                        className: 'ngdialog-theme-default',
                        scope: $scope //将scope传给dialog.html,以便显示提示信息
                    });
                    $timeout(function () {
                        $scope.clear();
                        //ngDialog.close();
                    }, 1000);
                    //$scope.clear();
                } else {
                	$scope.isSaving = false;
                    $scope.message = response.msgCode;
                    PublicService.showMessageDialog($scope);
                }
            });
            $scope.isSaving = false;
        }

        $scope.checkOldPassword = function () {
            $scope.oldPasswordValid = true;
            if ($scope.editParams.newPassword1 === $scope.editParams.oldPassword) {
            	$scope.newPasswordMsg1 = "devplatformApp.user.prompt.samePassword";
                angular.element('#newPasswordDiv1').append(checkNewPasswordDialog1);
                angular.element('#field_newPassword1').addClass("input-err");
            } else {
            	$scope.newPasswordValid1 = false;
                angular.element('#field_newPassword1').removeClass("input-err");
                if (checkNewPasswordDialog1) {
                    checkNewPasswordDialog1.remove();
                }
            }
        };

        var checkNewPasswordDialog1 = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='{{newPasswordMsg1}}'></span>"))($scope);
        $scope.checkNewPassword1 = function () {
            $scope.newPasswordValid1 = true;
            if ($scope.editParams.newPassword1 === $scope.editParams.oldPassword) {
                $scope.newPasswordMsg1 = "devplatformApp.user.prompt.samePassword";
                angular.element('#newPasswordDiv1').append(checkNewPasswordDialog1);
                angular.element('#field_newPassword1').addClass("input-err");
            } else if ($scope.editParams.newPassword1.length < 4) {
                $scope.newPasswordMsg1 = "devplatformApp.user.prompt.passwordLength";
                angular.element('#newPasswordDiv1').append(checkNewPasswordDialog1);
                angular.element('#field_newPassword1').addClass("input-err");
            } else if (!(/^(?![^a-zA-Z]+$)(?!\D+$)/.test($scope.editParams.newPassword1))) {
                $scope.newPasswordMsg1 = "devplatformApp.user.prompt.passwordStrength";
                angular.element('#newPasswordDiv1').append(checkNewPasswordDialog1);
                angular.element('#field_newPassword1').addClass("input-err");
            } else if ($scope.editParams.newPassword1 !== $scope.editParams.newPassword2 && $scope.editParams.newPassword2 != undefined) {
                angular.element('#newPasswordDiv1').append(checkNewPasswordDialog1);
                angular.element('#field_newPassword1').addClass("input-err");
                $scope.newPasswordMsg1 = "devplatformApp.user.prompt.differentPasswords";
            } else {
                if ($scope.editParams.newPassword1 === $scope.editParams.newPassword2) {
                    $scope.newPasswordValid2 = false;
                    angular.element('#field_newPassword2').removeClass("input-err");
                    if (checkNewPasswordDialog2) {
                        checkNewPasswordDialog2.remove();
                    }
                }
                $scope.newPasswordValid1 = false;
                angular.element('#field_newPassword1').removeClass("input-err");
                if (checkNewPasswordDialog1) {
                    checkNewPasswordDialog1.remove();
                }
            }
        };


        var checkNewPasswordDialog2 = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='{{newPasswordMsg2}}'></span>"))($scope);
        $scope.checkNewPassword2 = function () {
            $scope.newPasswordValid2 = true;
            if ($scope.editParams.newPassword1 !== $scope.editParams.newPassword2) {
                angular.element('#newPasswordDiv2').append(checkNewPasswordDialog2);
                angular.element('#field_newPassword2').addClass("input-err");
                $scope.newPasswordMsg2 = "devplatformApp.user.prompt.differentPasswords";
            } else {
                if ($scope.editParams.newPassword1 === $scope.editParams.newPassword2) {
                    $scope.newPasswordValid1 = false;
                    angular.element('#field_newPassword1').removeClass("input-err");
                    if (checkNewPasswordDialog1) {
                        checkNewPasswordDialog1.remove();
                    }
                }
                $scope.newPasswordValid2 = false;
                angular.element('#field_newPassword2').removeClass("input-err");
                if (checkNewPasswordDialog2) {
                    checkNewPasswordDialog2.remove();
                }
            }
        };

    }
})();
