/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function(){
    angular.module('devplatformApp')
    .controller('ComponentEditController',ComponentEditController);

    ComponentEditController.$inject = ['MenuManagementService','$scope','$compile','PublicService'];

    function ComponentEditController(MenuManagementService,$scope,$compile,PublicService){
        if($scope.componentId){
            MenuManagementService.getComponentById($scope.componentId).then(function (response) {
                $scope.sysComponent = response.data;
            });
        }
        $scope.sysComponent = {
          "formId" :   $scope.formId
        };

        $scope.saveComponent = function() {
            $scope.isSaving = true;
            if ($scope.sysComponent.id !== null && $scope.sysComponent.id !== undefined){
                MenuManagementService.updateSysComponent($scope.sysComponent).then(function (response) {
                    //$scope.confirm();
                	var msg = "global.saveSuccess";
                	PublicService.openDialog(msg);
                    $scope.closeThisDialog();
                });
            }else {
                MenuManagementService.createSysComponent($scope.sysComponent).then(function (response) {
                    //$scope.confirm();
                	var msg = "global.saveSuccess";
                	PublicService.openDialog(msg);
                    $scope.closeThisDialog();
                });
            }
        };

        var checkkComponentNameMatches = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='devplatformApp.sysComponent.onlyChinses'>只能输入中文</span>"))($scope);
        var checkEnglishNameMatches = $compile(angular.element("<span style='color:red;font-size: 10px;' data-translate='devplatformApp.sysComponent.onlyEnglish'>只能输入字母</span>"))($scope);
        var componentNameReg = /^[\u2E80-\u9FFF]{1,10}$/;
        var englishNameReg = /^[a-zA-Z]{1,20}$/;
        $scope.checkComponentName = function() {
            $scope.isSaving = true;
            if(componentNameReg.test($scope.sysComponent.componentName)) {
                if (checkkComponentNameMatches) {
                    checkkComponentNameMatches.remove();
                }
                angular.element('#field_componentName').removeClass("input-err");
                if(englishNameReg.test($scope.sysComponent.englishName)) {
                    $scope.isSaving = false;
                }
            }else{
                angular.element('#componentNameDiv').append(checkkComponentNameMatches);
                angular.element('#field_componentName').addClass("input-err");
            }
        };
        $scope.checkEnglishName = function() {
            $scope.isSaving = true;
            if(englishNameReg.test($scope.sysComponent.englishName)) {
                if (checkEnglishNameMatches) {
                    checkEnglishNameMatches.remove();
                }
                angular.element('#field_englishName').removeClass("input-err");
                if(componentNameReg.test($scope.sysComponent.componentName)) {
                    $scope.isSaving = false;
                }
            }else{
                angular.element('#englishNameDiv').append(checkEnglishNameMatches);
                angular.element('#field_englishName').addClass("input-err");

            }
        };
    }
})();
