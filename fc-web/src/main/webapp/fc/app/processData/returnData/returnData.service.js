(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('ReturnDataService', ReturnDataService);
    ReturnDataService.$inject = ['globalConstant', 'utilService','$window','$translate'];

    function ReturnDataService (globalConstant, utilService,$window,$translate) {
        
    	 function deleteReturnData(params) {
    		 var url = 'api/returnData/delete/';
             return utilService.requestDelete(globalConstant.devplatform_web_apiPath + url, params);
         }
         function downLoadFile() {
        	 var name = $translate.instant('castData.returnTempName');
        	 var url = 'api/returnData/downloadTemplate?tempName='+ name;
        	 $window.open(globalConstant.devplatform_web_apiPath + url);
        }
         var service = {
             "deleteReturnData":deleteReturnData,
             "downLoadFile":downLoadFile
  	};
         return service;
     }
})();