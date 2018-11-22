(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('User', User);

    User.$inject = ['$resource', 'globalConstant', 'utilService'];

    function User($resource, globalConstant, utilService) {
        /* var service = $resource(globalConstant.devplatform_web_apiPath + 'api/users/:login', {}, {
         'query': {method: 'GET', isArray: true},
         'get': {
         method: 'GET',
         transformResponse: function (data) {
         data = angular.fromJson(data);
         return data;
         }
         },
         'userlist': function(){
         return $http(
         {
         method: 'POST',
         url: globalConstant.devplatform_web_apiPath + 'api/users/userlist',
         data: {}
         }
         )
         },
         'save': { method:'POST' },
         'update': { method:'PUT' },
         'delete':{ method:'DELETE'}
         });*/


        function query(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/userlist', params);
        };
        function userlist(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/userlist', params);
        };
        var service = {
            "query": query,
            "userlist": userlist
        };

        return service;
    }
})();
