(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('TermMonitorService', TermMonitorService);
    TermMonitorService.$inject = ['globalConstant', 'utilService','$window','$translate'];

    function TermMonitorService (globalConstant, utilService,$window,$translate) {
        function deleteTermMonitor(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/termMonitor/delete/', params);
        }
        function downLoadFile() {
       	 var name = $translate.instant('termMonitor.tempName');
       	 $window.open(globalConstant.devplatform_web_apiPath + 'api/termMonitor/downloadTemplate?tempName='+name);
       }
        function getDistrictAndLocationList(dictType) {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/termInfo/getDistrictAndLocationList?dictType=', dictType);
       }
        
        var service = {
            "deleteTermMonitor":deleteTermMonitor,
            "getDistrictAndLocationList":getDistrictAndLocationList,
            "downLoadFile":downLoadFile
 	};
        return service;
    }
})();