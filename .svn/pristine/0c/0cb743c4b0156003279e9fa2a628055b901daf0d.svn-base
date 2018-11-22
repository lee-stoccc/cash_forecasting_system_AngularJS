/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('NewMenuService', NewMenuService);

    NewMenuService.$inject = ['globalConstant', 'utilService'];

    function NewMenuService (globalConstant, utilService) {
        function getGetMenuById(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sys-menu/getSysMenu/', params);
        }

        function createMenu(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/createSysMenu', params);
        }

        function updateMenu(params) {
            return utilService.requestPut(globalConstant.devplatform_web_apiPath + 'api/sys-menu/updateSysMenu', params);
        }

        var service = {
            "getGetMenuById": getGetMenuById,
            "createMenu": createMenu,
            "updateMenu": updateMenu
        };
        return service;
    }
})();
