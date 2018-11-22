/**
 * Created by Administrator on 2017/8/23/0023.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('RoleManagerService', RoleManagerService);

    RoleManagerService.$inject = ['$resource','globalConstant', 'utilService'];

    function RoleManagerService ($resource, globalConstant, utilService) {
        function getAllSysRoles(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/getAllSysRoles', params);
        }
        function getSysRole(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sys-role/getSysRole/', params);
        }
        function updateSysRole(params) {
            return utilService.requestPut(globalConstant.devplatform_web_apiPath + 'api/sys-role/updateSysRole', params);
        }
        function saveSysRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/createSysRole', params);
        }
        function deleteSysRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/deleteSysRole', params);
        }
        function enableSysRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/enableSysRole', params);
        }
        function getFormRightList(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/getFormRightList', params);
        }
        function checkRoleNo(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-role/checkRoleNo', params);
        }
        var service = {
            "getAllSysRoles":getAllSysRoles,
            "getSysRole":getSysRole,
            "updateSysRole":updateSysRole,
            "saveSysRole":saveSysRole,
            "deleteSysRole":deleteSysRole,
            "enableSysRole":enableSysRole,
            "getFormRightList":getFormRightList,
            "checkRoleNo":checkRoleNo
        };
        return service;
    }
})();
