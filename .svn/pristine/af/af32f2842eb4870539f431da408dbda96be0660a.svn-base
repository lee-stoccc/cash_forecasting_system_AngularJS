(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('Password', Password);

    Password.$inject = ['$resource', 'globalConstant'];

    function Password($resource, globalConstant) {
        var service = $resource(globalConstant.devplatform_web_apiPath + 'api/account/change_password', {}, {});

        return service;
    }
})();
