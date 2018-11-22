(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('SysDictService', SysDictService);

    SysDictService.$inject = ['$window', 'globalConstant', 'utilService'];

    function SysDictService ($window, globalConstant, utilService) {
        function listAll(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/list', params);
        }
        function saveSysDict(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/save', params);
        }
        function getSysDict(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/get', params);
        }
        function deleteSysDict(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sysDict/delete/', params);
        }
        function exportExcel(group,dictKey,dictDesc,parentGroup) {
            $window.open(globalConstant.devplatform_web_apiPath + "api/sysDict/export?group=" + group + "&dictKey=" + dictKey + "&dictDesc=" + dictDesc + "&parentGroup=" + parentGroup);
        }
        function importExcel(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/import', params);
        }
        function getDictList(parentGroup) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/sysDict/dictList?parentGroup=', parentGroup);
        }
        function enableSysDict(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/enableSysDict', params);
        }
        function getDictListAsync(parentGroup) {
            var settings = {
                    url: globalConstant.devplatform_web_apiPath + 'api/sysDict/dictList?parentGroup=' + parentGroup,
                    async: false,
                    method: "GET"
                };
                return utilService.requestByJquery(settings);
        }
        var service = {
            "listAll": listAll,
            "saveSysDict": saveSysDict,
            "getSysDict": getSysDict,
            "deleteSysDict": deleteSysDict,
            "exportExcel":exportExcel,
            "importExcel":importExcel,
            "getDictList":getDictList,
            "enableSysDict":enableSysDict,
            "getDictListAsync":getDictListAsync
        };
        return service;
    }
})();
