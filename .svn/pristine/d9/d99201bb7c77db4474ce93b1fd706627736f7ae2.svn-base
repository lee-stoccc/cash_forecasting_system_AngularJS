(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('Account', Account);

    Account.$inject = ['$resource', 'globalConstant', '$state', '$timeout'];

    function Account($resource, globalConstant, $state, $timeout) {
        var service = $resource(globalConstant.devplatform_web_apiPath + 'api/account', {}, {
            'get': {
                method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function (response) {
                        // expose response
                        var expireDate = response.data.expireDate;
                        var passwordExpireDate = response.data.passwordExpireDate;
                        if (expireDate !== null && expireDate < new Date()) {
                            if (localStorage.Token || localStorage.user) {
                                localStorage.clear();
                            }
                             $state.go('homepage');
                        } else if (passwordExpireDate !== null && passwordExpireDate < new Date()) {
                            if (localStorage.Token || localStorage.user) {
                                localStorage.clear();
                            }
                             $state.go('homepage');
                        }
                        localStorage.user = angular.toJson(response.data);
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
