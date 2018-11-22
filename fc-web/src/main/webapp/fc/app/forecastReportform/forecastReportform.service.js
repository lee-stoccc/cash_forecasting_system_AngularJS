(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('ForecastReportService', ForecastReportService);

    ForecastReportService.$inject = ['globalConstant', 'utilService'];

    function ForecastReportService (globalConstant, utilService) {   
        function getBankList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankList');
    	}
        
        function getTermNoList(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/termInfo/termList',params);
    	}
        
        function getCusgionList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/cusRegionList');
    	}
        function updatePlanTerm(params){
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/updatePlanTerm/', params);
        }
        function getFirstData(params){
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/stock/getFirstData/', params);
        }
        
        function getHistoryList(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/historyList',params);
    	}
        
        var service = {
        	"getHistoryList":getHistoryList,
        	"getTermNoList":getTermNoList,
            "getBankList":getBankList,
            "getCusgionList":getCusgionList,
            "updatePlanTerm":updatePlanTerm,
            "getFirstData":getFirstData
        };
        return service;
    }
})();