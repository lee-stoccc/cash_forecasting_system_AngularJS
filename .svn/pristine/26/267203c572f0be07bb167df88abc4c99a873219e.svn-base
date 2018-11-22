

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('BankInfoService', BankInfoService);

    BankInfoService.$inject = ['globalConstant', 'utilService'];

    function BankInfoService (globalConstant, utilService) {
        function getBankInfo(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/get/', params);
        }
        function saveBankInfo(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/bankInfo/save', params);
        }
        function deleteBankInfo(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/bankInfo/delete/', params);
        }
        function getBankList() {
        	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/bankInfo/bankTreeList');
        }
        function getBankNameList() {
        	return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankInfo/headquarterList/');
        }
        var service = {
            "getBankInfo":getBankInfo,
            "saveBankInfo":saveBankInfo,
            "deleteBankInfo":deleteBankInfo,
            "getBankList":getBankList,
            "getBankNameList":getBankNameList
        };
        return service;
    }
})();