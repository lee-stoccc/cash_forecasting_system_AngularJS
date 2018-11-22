(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('LayoutService', LayoutService);

    LayoutService.$inject = ['globalConstant', 'utilService'];

    function LayoutService (globalConstant, utilService) {
    	function getWarningInformationPage(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/termWarn/page', params);
        }
        function layoutLog(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/user/layoutLog', params);
        }
        //获取店铺信息
        function getShopMsg(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/store/getCurrentStore',params);
        }
        //配置js头文件
        function getHeader() {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sysDict/getSysShowHeader');
        }
        // 查询预警设备的提示
        function getWarningBells() {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/termWarn/warnNumber');
        }
        var service = {
        	"getWarningInformationPage":getWarningInformationPage,
            "layoutLog": layoutLog,
            "getShopMsg": getShopMsg,
            "getHeader": getHeader,
            "getWarningBells":getWarningBells,
        };  
        return service;
    }
})();
