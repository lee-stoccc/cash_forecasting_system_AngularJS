(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('CusRegionEditController', CusRegionEditController);
    CusRegionEditController.$inject = ['CusRegionService', '$scope', '$stateParams','$state', 'ngDialog','PublicService','$uibModalInstance'];
    function CusRegionEditController(CusRegionService, $scope, $stateParams, $state, ngDialog, PublicService,$uibModalInstance) {	
    	if ($stateParams.id) {
            CusRegionService.getCusRegion($stateParams.id).then(function (response) {
				if(response.statusCode === "0000"){
					$scope.cusRegion = response.data;
				}
            });
        }
        $scope.save = function() {
            $scope.message = "global.saveSuccess";        
            CusRegionService.saveCusRegion($scope.cusRegion).then(function (response) {
                if (response.statusCode === '0000') {
                    PublicService.openDialog($scope.message);
                    $scope.clear(true);
                } else {
                    $scope.message = response.msgCode;
                    PublicService.openDialog($scope.message);
                }
             });
        };
		

	   $scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.cusRegion',{},{reload:flag});
	    };
    }
})();