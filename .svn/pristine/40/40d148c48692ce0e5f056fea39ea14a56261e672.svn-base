(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('AuthServerProvider', AuthServerProvider);

    AuthServerProvider.$inject = ['$http', '$localStorage', '$sessionStorage', '$q', 'globalConstant'];

    function AuthServerProvider ($http, $localStorage, $sessionStorage, $q, globalConstant) {
        var service = {
            getToken: getToken,
            login: login,
            loginWithToken: loginWithToken,
            storeAuthenticationToken: storeAuthenticationToken,
            logout: logout
        };

        return service;

        function getToken () {
            return $localStorage.authenticationToken || $sessionStorage.authenticationToken;
        }

        function login (credentials) {
            var data = {
                username: credentials.username,
                password: credentials.password,
                rememberMe: credentials.rememberMe,
                verifyCode: credentials.verifyCode
            };
            // return $http.post(globalConstant.devplatform_web_apiPath +  'api/authenticate', data).success(authenticateSuccess);
            return $http(
                {
                    method: 'POST',
                    url: globalConstant.devplatform_web_apiPath + 'api/authenticate',
                    headers: {
    					'Authorization': localStorage.Token
    				},
                    data: data
                }
            ).success(authenticateSuccess);

            function authenticateSuccess (response, status, headers, config) {

                /*var bearerToken = headers('Authorization');
                if (angular.isDefined(bearerToken) && bearerToken.slice(0, 7) === 'Bearer ') {
                    var jwt = bearerToken.slice(7, bearerToken.length);
                    service.storeAuthenticationToken(jwt, credentials.rememberMe);
                    return jwt;
                }*/

                var bearerToken = response['data']['id_token'];
                if (angular.isDefined(bearerToken) ) {
                    var jwt = bearerToken;
                    service.storeAuthenticationToken(jwt, credentials.rememberMe);
                    localStorage.Token = bearerToken;
                    return jwt;
                }
            }
        }

        function loginWithToken(jwt, rememberMe) {
            var deferred = $q.defer();

            if (angular.isDefined(jwt)) {
                this.storeAuthenticationToken(jwt, rememberMe);
                deferred.resolve(jwt);
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        function storeAuthenticationToken(jwt, rememberMe) {
            if(rememberMe){
                $localStorage.authenticationToken = jwt;
            } else {
                $sessionStorage.authenticationToken = jwt;
            }
        }

        function logout () {
            delete $localStorage.authenticationToken;
            delete $sessionStorage.authenticationToken;
        }
    }
})();
