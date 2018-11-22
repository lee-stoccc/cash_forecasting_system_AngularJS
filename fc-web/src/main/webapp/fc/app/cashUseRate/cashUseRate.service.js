

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('cashUseRateService', cashUseRateService);

    cashUseRateService.$inject = ['globalConstant', 'utilService','$window'];  

    function cashUseRateService (globalConstant, utilService,$window) {
    	 function getCashUseRateData(params) {  
    		 var settings = {
                     url: globalConstant.devplatform_web_apiPath + 'api/statementAnalysis/getCashUtilizationRate',
                     async: false,
                     method: "POST",
                     data:params  
                 };
    		  return utilService.requestByJquery(settings);
         }
    	 
    	 function getCashUseRateData2(params) {
                  var url= globalConstant.devplatform_web_apiPath + 'api/statementAnalysis/getCashUtilizationRate'
    		  return utilService.requestPostAsync(url,params);
         }
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
    		 var url = [globalConstant.devplatform_web_apiPath +'api/statementAnalysis/excel/getCashUtilizationRateExcel', $.param(params)].join('?');
//    	 	$window.open(globalConstant.devplatform_web_apiPath + '/api/algorithm/exportPlan?date='+ date + '&bankId=' + bankId + '&timePoint=' + timePoint);
     	    $window.open(url);
     }
       
    	
        var service = {
        		"getCashUseRateData":getCashUseRateData,
        		"getCashUseRateData2":getCashUseRateData2,
        		"downLoadFile":downLoadFile   // 导出报表
        };
        return service;
    }
})();