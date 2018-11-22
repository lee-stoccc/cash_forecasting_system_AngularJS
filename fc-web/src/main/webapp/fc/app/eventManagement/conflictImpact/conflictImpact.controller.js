(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('ConflictImpactController', ConflictImpactController);
    ConflictImpactController.$inject = ['EventManagementService', 'ngDialog', '$state', '$scope','$uibModalInstance','$stateParams','$translate'];

    function ConflictImpactController(EventManagementService, ngDialog, $state, $scope,$uibModalInstance,$stateParams,$translate) {
    	$scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.eventAddTerms',{},{reload:true});
    	};
    	
    	$scope.replenishRule = [
                                {'value': $translate.instant('eventManagement.Monday'),"key":1},
                                {'value': $translate.instant('eventManagement.Tuesday'),"key":2},
                                {'value': $translate.instant('eventManagement.Wednesday'),"key":3},
                                {'value': $translate.instant('eventManagement.Thursday'),"key":4},
                                {'value': $translate.instant('eventManagement.Friday'),"key":5},
                                {'value': $translate.instant('eventManagement.Saturday'),"key":6},
                                {'value': $translate.instant('eventManagement.Sunday'),"key":7}
                               ];
    	
    	$scope.conflictTermsList = JSON.parse($stateParams.conflictImpacts);
    	$scope.events = [{},{}];
    	
    	$scope.changeConlictTerms = function(item){
            angular.forEach($scope.conflictTermsList, function (conflictTerm) {
            	if(conflictTerm['id'] == item['id']){
            		conflictTerm.checked = true;
            	}else{
            		conflictTerm.checked = false;
            	}
            });
    	};
    }
})();