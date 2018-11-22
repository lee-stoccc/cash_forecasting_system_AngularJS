(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource', 'globalConstant'];

    function PasswordResetFinish($resource, globalConstant) {
        var service = $resource(globalConstant.devplatform_web_apiPath + 'api/account/reset_password/finish', {}, {});

        return service;
    }
})();
