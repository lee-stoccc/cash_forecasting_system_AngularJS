(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('UserService', UserService);

    UserService.$inject = ['globalConstant', 'utilService'];

    function UserService (globalConstant, utilService) {
        function listAll(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/list', params);
        }
        function saveUser(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/save', params);
        }
        function getUser(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/user/get/', params);
        }
        function deleteUser(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/user/delete/', params);
        }
        function resetPassword(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/user/resetPassword/', params);
        }
        function editPassword(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/editPassword/', params);
        }
        function getUserRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysUserRole/getUserRole/', params);
        }
        function saveUserRole(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysUserRole/saveUserRole/', params);
        }
        function userRegister(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/userRegister', params);
        }
        function weixinLogin(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/weixinLogin', params);
        }
        function enableSysUser(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/enableSysUser', params);
        }
        function loginTransfer(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/loginTransfer', params);
        }
        var service = {
            "listAll": listAll,
            "saveUser": saveUser,
            "getUser": getUser,
            "deleteUser": deleteUser,
            "resetPassword": resetPassword,
            "editPassword": editPassword,
            "getUserRole":getUserRole,
            "saveUserRole":saveUserRole,
            "userRegister":userRegister,
            "weixinLogin":weixinLogin,
            "enableSysUser":enableSysUser,
            "loginTransfer":loginTransfer
        };
        return service;
    }
})();
