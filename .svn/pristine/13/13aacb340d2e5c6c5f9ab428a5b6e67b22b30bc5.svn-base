(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('DailyUsingService', DailyUsingService);
    DailyUsingService.$inject = ['globalConstant', 'utilService'];

    function DailyUsingService (globalConstant, utilService,$window,$translate) {
        function deleteDailyUsing(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/dailyUsing/delete/', params);
        }
        function generationUsing(params) {
       	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/dailyUsing/generationUsing',params);
       }
        var service = {
            "deleteDailyUsing":deleteDailyUsing,
            "generationUsing":generationUsing
 	};
        return service;
    }
})();