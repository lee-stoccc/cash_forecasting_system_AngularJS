(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('StockService', StockService);
    StockService.$inject = ['globalConstant', 'utilService'];

    function StockService (globalConstant, utilService) {
        function getStock(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/stock/get/', params);
        }
        function getBankStock(params) {
        	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/stock/returnAmount', params);
        }
        function saveStock(params) {
            return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/stock/save', params);
        }
        function deleteStock(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/stock/delete/', params);
        }
        var service = {
        	"getStock":getStock,
            "getBankStock":getBankStock,
            "saveStock":saveStock,
            "deleteStock":deleteStock,
        };
        return service;
    }
})();