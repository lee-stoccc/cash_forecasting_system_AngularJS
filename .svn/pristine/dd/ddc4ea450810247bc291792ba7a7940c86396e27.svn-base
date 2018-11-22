(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('NoForecastPlanController', NoForecastPlanController);

    NoForecastPlanController.$inject = ['SysDictService', 'ForecastPlanService', 'ngDialog', '$state', '$scope', '$timeout', 'PublicService'];

    function NoForecastPlanController(SysDictService, ForecastPlanService, ngDialog, $state, $scope, $timeout, PublicService) {
    	$scope.formParam = {};
        $scope.tablesConfig = {
 			showCheckBox:true,
            tableTitles:[
				{title:"forecastPlan.termNo", filed: 'termNo',type:'text',width:20},    
				{title:"forecastPlan.branchNo", filed: 'branchNo',type:'text',width:15},    
				{title:"forecastPlan.bankName", filed: 'bankName',type:'text',width:15},
				{title:"forecastPlan.regionName", filed: 'regionName',type:'text',width:15}, 
				{title:"forecastPlan.lastCash", filed: 'lastCash',type:'text',width:10}, 
				{title:"forecastPlan.replenishDate", filed: 'replenishDate',type:'text',width:15}, 
				{title:"forecastPlan.planCash", filed: 'planCash',type:'text',width:10}
                    ],
            url:'api/forecastPlan/page',
			formParams:{
				termNo : $scope.formParam.termNo,					
				bankId : $scope.formParam.bankId,
				termType: $scope.formParam.termType,
				cusRegionId: $scope.formParam.cusRegionId,
				replenishDate: $scope.formParam.replenishDate,
				forecastStatus: '2'
			}
		};
	
		$scope.loadNoPlanAll = function() {
			$scope.formParam.bankId = $scope.bankIdStr;
			$scope.formParam.forecastStatus = '2';
			$scope.refreshTableList($scope.formParam);
		};
		
		$scope.$emit('noPlanLoad', $scope.loadNoPlanAll);
	
        $scope.addForecastPlan = function(){
        	$scope.choseArr = $scope.getCheckValues().check;
        	var ids = ArrayToString($scope.choseArr);
        	ForecastPlanService.updatePlanTerm(ids)
        	.then(function(response){
        		if(response.statusCode === '0000'){
        			$scope.loadAll();
        		}
        		PublicService.openDialog(response.msgCode);
        	});
        };
        
        function ArrayToString(array){
        	var str = '';
        	for(var i=0;i<array.length;i++){
        		str += "," + array[i];
        	}
        	str = str.substring(1);
        	return str;
        }
    }
})();