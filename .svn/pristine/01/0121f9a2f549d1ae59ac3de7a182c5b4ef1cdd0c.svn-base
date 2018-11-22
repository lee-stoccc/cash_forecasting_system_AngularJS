(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('Register', Register);

    Register.$inject = ['$resource', 'globalConstant'];

    function Register ($resource, globalConstant) {
        return $resource(globalConstant.devplatform_web_apiPath + 'api/register', {}, {});
    }
})();
