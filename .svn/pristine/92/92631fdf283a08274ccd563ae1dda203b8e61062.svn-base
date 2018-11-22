(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('CreatePlanController', ForecastController);

    ForecastController.$inject = ['PublicService','ForecastPlanService','ngDialog', '$stateParams','$state', '$scope','$uibModalInstance','SysDictService','$translate'];

    function ForecastController(PublicService,ForecastPlanService,ngDialog, $stateParams, $state, $scope,$uibModalInstance,SysDictService,$translate) {
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
        	$scope.select('#bankName')
        };
        
        $scope.forecast = function(){
        	$uibModalInstance.close();
        	PublicService.openDialog("Please Wait...")
        	var date = PublicService.formatDate($scope.formParam.forecastDate,"yyyy-MM-dd");
        	ForecastPlanService.createPlan(date,
        			$scope.formParam.bankName,$scope.formParam.timePoint).then(function(response){
        				if(response.statusCode==="0000"){
        					var msg="global.messages.forecastSuccess";
        					PublicService.openDialog(msg);
        					$('.ngdialog-theme-default').remove()
        					$scope.clear (false)  
        				}else{
        					var msg="global.messages.forecastFail";
        					PublicService.openDialog(msg);
        					$('.ngdialog-theme-default').remove()
        					$scope.clear (false)
        				}  
        			});
        };
        
        // 可以填写的选择下拉框
        $scope.select=function(id){
        	angular.element(id).select2({		//select2-search__field
        		placeholder: $translate.instant("global.pleaseSelect"),
        		allowClear: true,
        		tags:false
        	})
        }
        
        // 刷新列表
        $scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);
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