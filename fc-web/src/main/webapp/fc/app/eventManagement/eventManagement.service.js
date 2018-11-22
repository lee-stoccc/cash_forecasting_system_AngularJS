(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('EventManagementService', EventManagementService);

    EventManagementService.$inject = ['globalConstant', 'utilService'];

    function EventManagementService (globalConstant, utilService) {
        function getBankList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankList');
    	}
        
    	function getCusgionList() {
    		return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/cusRegionList');
    	}
    	
        function getEventTermsList(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/actualEvent/pageEventTerms',params);
    	}
        
        function getConflictTermsList(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/actualEvent/getConflictTerms',params);
    	}
        
        function saveEvent(params) {
    		return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/actualEvent/save',params);
    	}
        
//        function deleteEvent(params){
//        	return utilService.requestDelete(globalConstant.devplatform_web_apiPath + '/api/actualEvent/delete/',params);
//        }
        
        function deleteEvent(params){
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + '/api/actualEvent/delete/',params);
        }
        function getEvent(params){
        	 return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/actualEvent/get/', params);
        }
        
        function getDistrictAndLocationList(dictType) {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/termInfo/getDistrictAndLocationList?dictType=', dictType);
       }
    	var service = {
    		'getBankList':getBankList,
    		'getCusgionList':getCusgionList,
    		'getEventTermsList':getEventTermsList,
    		'getConflictTermsList':getConflictTermsList,
    		'saveEvent':saveEvent,
    		'deleteEvent':deleteEvent,
    		'getEvent':getEvent,
    		"getDistrictAndLocationList":getDistrictAndLocationList  
    		
        };
        return service;
    }
})();