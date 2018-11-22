(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('RoleUserService', RoleUserService);

    RoleUserService.$inject = ['globalConstant', 'utilService'];

    function RoleUserService (globalConstant, utilService) {
        function getAllUsers(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysUserRole/getAllUsers', params);
        }

        function saveSysUserRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysUserRole/saveSysUserRole', params);
        }

        var service = {
            "getAllUsers": getAllUsers,
            "saveSysUserRole": saveSysUserRole
        };
        return service;
    }
})();
