(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('inventoryStatisticsService', inventoryStatisticsService);
    inventoryStatisticsService.$inject = ['globalConstant', 'utilService','$window','$translate'];

    function inventoryStatisticsService (globalConstant, utilService,$window,$translate) {
        
    	 function deleteCastData(params) {
             return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/replenishData/delete/', params);
         }
         function downLoadFile() {
        	 var name = $translate.instant('castData.tempName');
        	 var url = 'api/replenishData/downloadTemplate?tempName='+name;
        	 $window.open(globalConstant.devplatform_web_apiPath + url);
        }
         var service = {
             "deleteCastData":deleteCastData,
             "downLoadFile":downLoadFile
  	};
         return service;
     }
})();