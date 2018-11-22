(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('FcPublicService', FcPublicService);

    FcPublicService.$inject = ['globalConstant', 'utilService','$window'];

    function FcPublicService (globalConstant, utilService,$window) {
        
    	function getCusgionList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/cusRegionList');
    	}
    	
        function getBanksList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankList');
    	}
        function getBankTreeList() {
        	 var settings = {
                     url: globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankTreeList',
                     async: false,
                     method: "POST"
                 };
             return utilService.requestByJquery(settings);
        	//return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankTreeList');
        }
    	
        var service = {
        	"getCusgionList":getCusgionList,
        	"getBanksList":getBanksList,
        	"getBankTreeList":getBankTreeList
        	
        };
        return service;
    }
})();