

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('HolidayService', HolidayService);

    HolidayService.$inject = ['globalConstant', 'utilService'];

    function HolidayService (globalConstant, utilService) {
    	this.abc='1111111111'
        function getHoliday(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/holiday/get/', params);
        }
        function saveHoliday(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/holiday/save', params);
        }
//        function deleteHoliday(params) {
//            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/holiday/delete/', params);
//        }
        function deleteHoliday(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/holiday/delete/', params);
        }
        var service = {
            "getHoliday":getHoliday,
            "saveHoliday":saveHoliday,
            "deleteHoliday":deleteHoliday
        };
        return service;
    }
})();