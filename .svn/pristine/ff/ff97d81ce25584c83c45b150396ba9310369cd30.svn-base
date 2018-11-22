(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('ForecastController', ForecastController);

    ForecastController.$inject = ['PublicService','ForecastPlanService','ngDialog', '$stateParams','$state', '$scope','$uibModalInstance','SysDictService'];

    function ForecastController(PublicService,ForecastPlanService,ngDialog, $stateParams, $state, $scope,$uibModalInstance,SysDictService) {
    	$scope.formParam = [];
    	$scope.bankList = [];
    	$scope.formParam.forecastDate = new Date();
    	$scope.datePickerOpenStatus = {};
    	
    	$scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.forecastPlan',{},{reload:flag});
		};
		
        $scope.initView = function(){
        	getBanksList();
        	getDict('timePointList', 'forecast.timePoint'); //时间节点
        };
        
        $scope.forecast = function(){
//        	var date = PublicService.formatDate($scope.formParam.forecastDate,"yyyy-MM-dd");
//        	ForecastPlanService.downLoadFile(date,
//        			$scope.formParam.bankName,$scope.formParam.timePoint);
        	ForecastPlanService.downLoadFile();
        };
        
		//获取银行树
        function getBanksList(){
        	$scope.showCheckBox = true;
        	ForecastPlanService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          			if(param == 'timePointList'){
          				$scope.formParam.timePoint = $scope[param][0]['dictKey'];
          			}
          		}
          	});
        }
        
        $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
    }
})();