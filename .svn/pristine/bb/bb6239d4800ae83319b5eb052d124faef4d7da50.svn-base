(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('SingleLoginService', SingleLoginService);

    SingleLoginService.$inject = ['$http','$uibModal','globalConstant', 'utilService'];

    function SingleLoginService ($http,$uibModal,globalConstant, utilService) {
        function singleLogin(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/ssoauthen?',params);
        }
       
        var service = {
            "singleLogin": singleLogin
        };
        return service;

    }
})();
