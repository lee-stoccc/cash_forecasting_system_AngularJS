

(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .factory('inventoryStatisticsService', inventoryStatisticsService);

    inventoryStatisticsService.$inject = ['globalConstant', 'utilService','$window'];

    function inventoryStatisticsService (globalConstant, utilService,$window) {
    	 function getEscortList(params) {
    		 var settings = {
                     url: globalConstant.devplatform_web_apiPath + 'api/statementAnalysis/getCompany',
                     async: false,
                     method: "GET"
                 };
    		  return utilService.requestByJquery(settings);
         }
    	 
    	 function downLoadFile(t1,t2,t3) {
    		 var params={}    
    		 params={
       			  sortByTermNo:1,    
       			  endDate:t2,
       			  startDate:t1,
       			  page_number:1,
       			  "page_size":1000,  
       			  access_token: localStorage.Token,
       			  other_header: 'other_header' ,
       			  days:t3
       	  } 
    		 var url = [globalConstant.devplatform_web_apiPath +'/api/statementAnalysis/excel/getInventoryStatisticsExcel', $.param(params)].join('?');
//     	 	$window.open(globalConstant.devplatform_web_apiPath + '/api/algorithm/exportPlan?date='+ date + '&bankId=' + bankId + '&timePoint=' + timePoint);
      	    $window.open(url);  
      }
        var service = {
        		"getEscortList":getEscortList,
        		"downLoadFile":downLoadFile   // 导出报表
        };
        return service;
    }
})();