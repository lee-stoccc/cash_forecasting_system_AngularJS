

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('ForecastPlanService', ForecastPlanService);

    ForecastPlanService.$inject = ['globalConstant', 'utilService','$window'];

    function ForecastPlanService (globalConstant, utilService,$window) {
        function getForecastPlanPage(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/page', params);
        }
        function getBankList() {
       	 	var settings = {
                    url: globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankTreeList',
                    async: false,
                    method: "POST"
                };
       	 	return utilService.requestByJquery(settings);
        }
        function getCusgionList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/cusRegionList');
    	}
        function updatePlanTerm(params){
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/updatePlanTerm/', params);
        }
        function getForecastPlanDTO(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/getForecastPlanDTO', params);
    	}
        function saveForecastPlan(params){
        	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/saveForecastPlan', params);
        }
        function deleteForecastPlan(params){
        	return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/forecastPlan/deleteForecastPlan/',params);
        }
        function getFirstData(params){
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/stock/getFirstData/', params);
        }
        function getBanksList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankList');
    	}
        
        function downLoadFile(date) {
//       	 	$window.open(globalConstant.devplatform_web_apiPath + '/api/algorithm/exportPlan?date='+ date + '&bankId=' + bankId + '&timePoint=' + timePoint);
        	    $window.open(globalConstant.devplatform_web_apiPath + '/api/algorithm/exportPlan?date='+date);
        }
        
        function createPlan(date,bankId,timePoint) {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + '/api/algorithm/createPlan?date='+ date + '&bankId=' + bankId + '&timePoint=' + timePoint);
       }
        
        function markWarn(id) {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + '/api//termWarn/markWarn/'+ id);
       }
        var service = {
            "getForecastPlanPage":getForecastPlanPage,
            "getBankList":getBankList,
            "getCusgionList":getCusgionList,
            "updatePlanTerm":updatePlanTerm,
            "getForecastPlanDTO":getForecastPlanDTO,
            "saveForecastPlan":saveForecastPlan,
            "deleteForecastPlan":deleteForecastPlan,
            "getFirstData":getFirstData,
            "getBanksList":getBanksList,
            "downLoadFile":downLoadFile,
            "markWarn":markWarn,
            "createPlan":createPlan
        };
        return service;
    }
})();