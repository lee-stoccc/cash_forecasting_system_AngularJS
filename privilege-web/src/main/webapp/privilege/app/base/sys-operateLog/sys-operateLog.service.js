(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('SysOperateLogService', SysOperateLogService);

    SysOperateLogService.$inject = ['globalConstant', 'utilService'];

    function SysOperateLogService (globalConstant, utilService) {
        function getAllSysOperateLogs(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysOperateLog/getAllSysOperateLogs', params);
        }
        //上传文件测试
        function OssPutObject(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysOperateLog/OssPutObject', params);
        }
        var service = {
            "getAllSysOperateLogs": getAllSysOperateLogs,
            "OssPutObject": OssPutObject
        };
        return service;
    }
})();
