/**
 * Created by Administrator on 2017/8/29/0029.
 */

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('RoleManagerConfigurationService', RoleManagerConfigurationService);

    RoleManagerConfigurationService.$inject = ['$resource','globalConstant', 'utilService'];

    function RoleManagerConfigurationService ($resource, globalConstant, utilService) {
        function getAllSysRoleMenus(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/allocatePrivilegeMenuTree', params);
        }

        function saveRolePrivilege(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/saveRolePrivilege', params);
        }

        var service = {
            "getAllSysRoleMenus":getAllSysRoleMenus,
            "saveRolePrivilege":saveRolePrivilege
        };
        return service;
    }
})();
