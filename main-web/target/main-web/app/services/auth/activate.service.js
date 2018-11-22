(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('Activate', Activate);

    Activate.$inject = ['$resource', 'globalConstant'];

    function Activate ($resource, globalConstant) {
        var service = $resource(globalConstant.devplatform_web_apiPath + 'api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });

        return service;
    }
})();
