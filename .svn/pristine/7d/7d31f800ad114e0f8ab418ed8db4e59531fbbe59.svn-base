(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('privilegeHeaderService', privilegeHeaderService);

    privilegeHeaderService.$inject = ['$resource','globalConstant', 'utilService'];

    function privilegeHeaderService (resource,globalConstant, utilService) {
        function getWarningBells(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/mobileValidate/sendCode', params);
        }

        var service = {
            "getWarningBells": getWarningBells
        };
        return service;
    }
})();
