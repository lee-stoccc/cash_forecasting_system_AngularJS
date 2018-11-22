(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource', 'globalConstant'];

    function PasswordResetInit($resource, globalConstant) {
        var service = $resource(globalConstant.devplatform_web_apiPath + 'api/account/reset_password/init', {}, {});

        return service;
    }
})();
