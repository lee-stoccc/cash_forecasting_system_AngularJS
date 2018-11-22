(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('authInterceptor', authInterceptor)
        .config(['$httpProvider',
             function($httpProvider) {
        	 	$httpProvider.defaults.withCredentials = true;
             }
         ]);

    authInterceptor.$inject = ['$rootScope', '$q', '$location', '$localStorage', '$sessionStorage'];

    function authInterceptor ($rootScope, $q, $location, $localStorage, $sessionStorage) {
        var service = {
            request: request
        };

        return service;

        function request (config) {
            /*jshint camelcase: false */
            config.headers = config.headers || {};
            //var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
            var token = localStorage.Token;
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }
    }
})();
