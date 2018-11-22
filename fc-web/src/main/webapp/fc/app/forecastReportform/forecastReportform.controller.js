(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('ForecastReportformController', ForecastReportformController);
    ForecastReportformController.$inject = ['$translate','SysDictService', 'ForecastReportService', 'ngDialog', '$state', '$scope', '$timeout', 'PublicService','$uibModal'];

    function ForecastReportformController($translate,SysDictService, ForecastReportService, ngDialog, $state, $scope, $timeout, PublicService,$uibModal) {
    	$scope.formParam = {};
    	$scope.formParam.date = new Date();
    	$scope.datePickerOpenStatus = {};
    	$scope.dateOptions = {
    		showWeeks:false,
    		formatDayHeader:'EEE'
    	};
    	$scope.chartList = [{id:'echartdata1'},{id:'echartdata2'}]; 
        $scope.echartData1 = {
        		id:'echartdata1',
        		width:'95%',
        		height:'350px',
        		title:"",
        		legend:["Predicted daily consumption", "Predict the full amount of the bill"],
        		item:[''],
        		data:[
        	            [0],
        	            [0]  
        	        ]
        };
        
        $scope.echartData2 = {
        		id:'echartdata2',
        		width:'95%',
        		height:'350px',
        		title:"",
        		legend:["Predicted daily consumption", "Predict the full amount of the bill"],
        		item:[''],
        		data:[
        	            [0],
        	            [0]  
        	        ]
        };
                
        $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
        
		//获取银行List
		$scope.getBankList = function(){
        	ForecastReportService.getBankList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        
		//获取银行List
        $scope.getTermNoList = function(){
        	ForecastReportService.getTermNoList({
        		cusRegionId:$scope.formParam.regionName,
        		bankId:$scope.formParam.bankName,
        		termType:$scope.formParam.termType,
        		termNo:$scope.formParam.termNo
        	}).then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.TermNoList = response.data;
				}
        	});
        }
        
        $scope.init = function(){
        	$scope.getBankList();
        	getDict('termTypeList', 'forecast.termType'); //设备类型
//        	getDict('forecastStatusList', 'forecast.forecastStatus'); //预测状态
        	$scope.getCusgionList();
        	$scope.getTermNoList();
        	
        	angular.element("#termNo").select2({		//select2-search__field
   	        	placeholder: $translate.instant("global.pleaseSelect"),
   	        	allowClear: true,
   	        	tags:true
           	});
        };
        
        $scope.bankSelectItem = function(obj){};
        
        $scope.bankSelectCheck = function(obj){};
        
      //获取区域
        $scope.getCusgionList = function(){
        	ForecastReportService.getCusgionList().then(function (response){
        		if (response.statusCode==="0000") {
        			$scope.cusgionList = response.data;
        		}
        	});
        };
        
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
        };
        
        $scope.resetSearch = function(){
        	$scope.formParam = {};
        	$scope.formParam.date = new Date();
       };
        
        $scope.loadAll = function() {
        	var msg = "";
        	if($scope.formParam.termNo == null || $scope.formParam.termNo == ""){
        		msg = "global.inputTermNo";
        		PublicService.openDialog(msg);
        		return;
        	}
        	if($scope.formParam.date == null || $scope.formParam.date == ""){
        		msg = "global.inputDate";
        		PublicService.openDialog(msg);
        		return;
        	}
        	ForecastReportService.getHistoryList($scope.formParam).then(function(response){
        		if(response.statusCode === '0000'){
        			calculatingData(response.data['forecastList'],'echartdata1');
        			calculatingData(response.data['historyList'],'echartdata2');
        		}
        	});
        };
        
        function calculatingData(forecastList,chartId){
            var item = [];  
            var data = [[0],[0]];
        	if(forecastList == null || forecastList.length == 0)
        	return;
            angular.forEach(forecastList, function (forecast,index) {
        		var dateStr = PublicService.formatDate(forecast['replenishDate'],'yyyy-MM-dd');
        		if( item.length <= index){		//表示当前日期已经存在  否则不存在需要插入日期
        			item[index] = dateStr;
        			data[0][index] = 0;
        			data[1][index] = 0;
        		}
        		data[0][index] +=  forecast['usingAmount'];
        		data[1][index] += forecast['replenishAmount'];
            });
            $scope.refreshEchart(chartId,{
            	item:item,
            	legend:["预测日用量", "预测加钞全额"],
            	data:data
            });
        };
    }
})();