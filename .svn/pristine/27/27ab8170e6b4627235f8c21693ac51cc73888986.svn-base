

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('CusRegionService', CusRegionService);

    CusRegionService.$inject = ['globalConstant', 'utilService'];

    function CusRegionService (globalConstant, utilService) {
        function getCusRegion(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/cusRegion/get/', params);
        }
        function saveCusRegion(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/cusRegion/save', params);
        }
        function deleteCusRegion(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/cusRegion/delete/', params);
        }
        var service = {
            "getCusRegion":getCusRegion,
            "saveCusRegion":saveCusRegion,
            "deleteCusRegion":deleteCusRegion
        };
        return service;
    }
})();