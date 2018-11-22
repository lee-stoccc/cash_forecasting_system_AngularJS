

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('BankRuleService', BankRuleService);

    BankRuleService.$inject = ['globalConstant', 'utilService'];

    function BankRuleService (globalConstant, utilService) {
        function getBankRule(params) {
            return utilService.requestGet(globalConstant.devplatform_web_apiPath + 'api/bankRule/get/', params);
        }
        function saveBankRule(params) {
        	return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/bankRule/save', params);
        }
        function deleteBankRule(params) {
            return utilService.requestDelete(globalConstant.devplatform_web_apiPath + 'api/bankRule/delete/', params);
        }        
                
        //比较两个数组是否相等
       function competeArr(arr,arr2){
     	   var count = 0;
     	   for (var i = 0; i < arr.length; i++) {
     		   for(var j = 0; j < arr2.length; j++){
     			   if(arr[i].indexOf(arr2[j])>=0){
                       count++;
                    };
     		   };
            }
     	  return count;
        };
                
        var service = {
        	"competeArr":competeArr,
            "getBankRule":getBankRule,
            "saveBankRule":saveBankRule,
            "deleteBankRule":deleteBankRule
        };
        return service;
    }
})();