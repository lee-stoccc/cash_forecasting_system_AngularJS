(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('MobileService', MobileService);

    MobileService.$inject = ['globalConstant', 'utilService'];

    function MobileService (globalConstant, utilService) {
        function sendCode(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/mobileValidate/sendCode', params);
        }

        var service = {
            "sendCode": sendCode
        };
        return service;
    }
})();
