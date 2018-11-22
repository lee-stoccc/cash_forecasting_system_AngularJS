

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('cashGuaranteeRateService', cashGuaranteeRateService);

    cashGuaranteeRateService.$inject = ['globalConstant', 'utilService','$window'];

    function cashGuaranteeRateService (globalConstant, utilService,$window) {
    	
    	 function downLoadFile(t1,t2) {
    		 var params={}    
    		 params={
       			  sortByTermNo:1,
       			  endDate:t2,
       			  startDate:t1,
       			  page_number:1,
       			  "page_size":1000,  
       			  access_token: localStorage.Token,
       			  other_header: 'other_header'  
       	  }  
    		 
    		 var url = [globalConstant.devplatform_web_apiPath +'api/statementAnalysis/excel/getCashSecurityRateExcel', $.param(params)].join('?');
//    		 var url=globalConstant.devplatform_web_apiPath +'api/statementAnalysis/getCashSecurityRateExcel?page_number=1&page_size=1000&sortByTermNo=1&startDate='+
//	                 params.startDate+"&endDate="+params.endDate

         return $window.open(url);  
         }
    	  
        var service = {
        	"downLoadFile":downLoadFile   // 导出报表
        };
        return service;
    }
})();