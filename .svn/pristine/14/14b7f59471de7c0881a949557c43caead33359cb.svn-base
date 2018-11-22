/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function(){
    angular.module('devplatformApp')
    .controller('FormEditController',FormEditController);

    FormEditController.$inject = ['PublicService','$stateParams','MenuManagementService','$scope','$compile','ngVerify'];

    function FormEditController(PublicService,$stateParams,MenuManagementService,$scope,$compile,ngVerify){
        if($scope.formId){
            MenuManagementService.getFormById($scope.formId).then(function (response) {
                $scope.sysForm = response.data;
            })
        }
        $scope.sysForm = {
          "menuId" :   $stateParams.menuFormId
        };

        $scope.saveForm = function() {
            $scope.isSaving = true;
            if ($scope.sysForm.id !== null && $scope.sysForm.id !== undefined){
                MenuManagementService.updateSysForm($scope.sysForm).then(function (response) {
                    //$scope.confirm();
                	var msg = "global.saveSuccess";
                	PublicService.openDialog(msg);
                    $scope.closeThisDialog();
                    
                });
            }else {
                MenuManagementService.createSysForm($scope.sysForm).then(function (response) {
                    //$scope.confirm();
                	var msg = "global.saveSuccess";
                	PublicService.openDialog(msg);
                    $scope.closeThisDialog();
                    
                });
            }
        };

        var checkkFormNameMatches = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='devplatformApp.sysForm.onlyChinses'>只能输入中文</span>"))($scope);
        var checkEnglishNameMatches = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='devplatformApp.sysForm.onlyEnglish'>只能输入字母</span>"))($scope);
        var checkRepeatEnglishName = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='{{repeatFormEnglishName}}'>该名称已存在</span>"))($scope);
        var formNameReg = /^[\u2E80-\u9FFF]{1,10}$/;
        var englishNameReg = /^[a-zA-Z]{1,20}$/;
        $scope.checkFormName = function() {
            $scope.isSaving = true;
            if(formNameReg.test($scope.sysForm.formName)) {
                if (checkkFormNameMatches) {
                    checkkFormNameMatches.remove();
                }
                angular.element('#field_formName').removeClass("input-err");
                $scope.isSaving = false;
            }else{
                angular.element('#formNameDiv').append(checkkFormNameMatches);
                angular.element('#field_formName').addClass("input-err");
            }
        };
        $scope.checkEnglishName = function() {
            $scope.englishName = true;
            if(englishNameReg.test($scope.sysForm.englishName)) {
                if (checkEnglishNameMatches) {
                    checkEnglishNameMatches.remove();
                }
                MenuManagementService.checkFormEnglishName({formEnglishName:$scope.sysForm.englishName}).then(function(response){
                    if(response.data > 0){
                    	$scope.repeatFormEnglishName = response.msgCode;
                        angular.element('#englishNameDiv').append(checkRepeatEnglishName);
                        angular.element('#field_englishName').addClass("input-err");
                        $scope.englishName = true;
                    }else if(response.data <= 0){
                        angular.element('#field_englishName').removeClass("input-err");
                        if (checkRepeatEnglishName) {
                            checkRepeatEnglishName.remove();
                            $scope.englishName = false;
                        }
                    }
                });
                angular.element('#field_englishName').removeClass("input-err");
            }else{
                angular.element('#englishNameDiv').append(checkEnglishNameMatches);
                angular.element('#field_englishName').addClass("input-err");
                if (checkRepeatEnglishName) {
                    checkRepeatEnglishName.remove();
                }
            }
        };

    }
})();
