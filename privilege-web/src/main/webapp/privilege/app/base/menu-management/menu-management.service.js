/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('MenuManagementService', MenuManagementService);

    MenuManagementService.$inject = ['globalConstant', 'utilService'];

    function MenuManagementService (globalConstant, utilService) {
        function getMenuTreeList(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/getMenuTreeList', params);
        }

        function getAllSysMenus(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/getAllSysMenus', params);
        }

        function delMenus(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/deleteSysMenu/', params);
        }
        function getAllSysForms(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-form/getSysForms', params);
        }
        function getAllSysComponents(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-component/getSysComponents', params);
        }
        function getFormById(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sys-form/getSysForm/', params);
        }
        function updateSysForm(params) {
            return utilService.requestPut(globalConstant.devplatform_web_apiPath + 'api/sys-form/updateSysForm', params);
        }
        function createSysForm(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-form/createSysForm', params);
        }
        function deleteSysForm(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-form/deleteSysForm', params);
        }
        function checkFormEnglishName(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-form/checkFormEnglishName', params);
        }
        function getComponentById(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sys-component/getSysComponent/', params);
        }
        function updateSysComponent(params) {
            return utilService.requestPut(globalConstant.devplatform_web_apiPath + 'api/sys-component/updateSysComponent', params);
        }
        function createSysComponent(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-component/createSysComponent', params);
        }
        function deleteSysComponent(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-component/deleteSysComponent', params);
        }
        function enableSysMenu(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/enableSysMenu/', params);
        }
        var service = {
            "getMenuTreeList": getMenuTreeList,
            "getAllSysMenus":getAllSysMenus,
            "delMenus": delMenus,
            "getAllSysForms":getAllSysForms,
            "getAllSysComponents":getAllSysComponents,
            "getFormById":getFormById,
            "updateSysForm":updateSysForm,
            "createSysForm":createSysForm,
            "deleteSysForm":deleteSysForm,
            "getComponentById":getComponentById,
            "updateSysComponent":updateSysComponent,
            "createSysComponent":createSysComponent,
            "deleteSysComponent":deleteSysComponent,
            "enableSysMenu":enableSysMenu,
            "checkFormEnglishName":checkFormEnglishName
        };
        return service;
    }
})();
