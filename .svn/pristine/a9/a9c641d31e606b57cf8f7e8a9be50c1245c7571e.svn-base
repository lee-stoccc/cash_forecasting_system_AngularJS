

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('TermInfoService', TermInfoService);

    TermInfoService.$inject = ['globalConstant', 'utilService','$window','$translate'];

    function TermInfoService (globalConstant, utilService,$window,$translate) {
    	function getTermInfo(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/termInfo/get/', params);
    	}
    	function getCusgionList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/cusRegionList');
    	}
        function saveTermInfo(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/termInfo/save', params);
        }
        function saveBatchTermInfo(params) {
        	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/termInfo/batchAdjustment', params);
        }
      
        function deleteTermInfo(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/termInfo/delete/', params);
        }
        function downLoadFile() {
        	 var name = $translate.instant('termInfo.tempName');
        	 $window.open(globalConstant.devplatform_web_apiPath + 'api/termInfo/downloadTemplate?tempName='+name);
        }
        function getDistrictAndLocationList(dictType) {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/termInfo/getDistrictAndLocationList?dictType=', dictType);
       }
        
        var service = {
            "getTermInfo":getTermInfo,
            "getCusgionList":getCusgionList,
            "saveTermInfo":saveTermInfo,
            "saveBatchTermInfo":saveBatchTermInfo,
            "deleteTermInfo":deleteTermInfo,
            "getDistrictAndLocationList":getDistrictAndLocationList,
            "downLoadFile":downLoadFile
        };
        return service;
    }
})();