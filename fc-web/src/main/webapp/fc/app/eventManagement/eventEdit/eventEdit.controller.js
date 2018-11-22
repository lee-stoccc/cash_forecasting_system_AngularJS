(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('EventEditController', EventEditController);
    EventEditController.$inject = ['$rootScope','SysDictService','PublicService','EventManagementService', 'ngDialog', '$state', '$scope','$stateParams','$uibModalInstance','$translate'];

    function EventEditController($rootScope,SysDictService,PublicService,EventManagementService, ngDialog, $state, $scope,$stateParams,$uibModalInstance,$translate) {
    	 $scope.init = function(){
    		
          };
    	
    	$scope.formParam = {};  
    	$scope.formParam.startDate = '';  
    	$scope.formParam.endDate = ''
    	$scope.datePickerOpenStatus = {};
    	$scope.dateOptions = {
        		showWeeks:false,
        		formatDayHeader:'EEE'
        	};
    	
    	$scope.replenishRule = [
                                {'value': $translate.instant('eventManagement.Monday'),"key":1},
                                {'value': $translate.instant('eventManagement.Tuesday'),"key":2},
                                {'value': $translate.instant('eventManagement.Wednesday'),"key":3},
                                {'value': $translate.instant('eventManagement.Thursday'),"key":4},
                                {'value': $translate.instant('eventManagement.Friday'),"key":5},
                                {'value': $translate.instant('eventManagement.Saturday'),"key":6},
                                {'value': $translate.instant('eventManagement.Sunday'),"key":7}
                               ];
        $scope.workday = $scope.replenishRule.slice(0,5); //工作日   
    	$scope.clear = function(flag) {
    	        $uibModalInstance.close();
    	        $state.go('app.eventManagement'	,{},{reload:flag});
    	};
    	
    	$scope.formParam.ceiling = '';
    	$scope.formParam.lowest = '';  
    	
    	// input+下来选择框
        $scope.initData = function(){
        	getDict('eventTypeList','forecast.event.category');   
//        	getDict('regionList','forecast.region'); 
        	showData();  
        	getDistrictAndLocationList()  
        
        };
       
        
        //展示数据
        function showData(){
        	 if ($stateParams.id) {
				   $scope.type = "edit";
				   var id =$stateParams.id
				   EventManagementService.getEvent($stateParams.id).then(function (response) {
						if(response.statusCode === "0000"){
							$scope.formParam = response.data;
		 					handerCallback($scope.formParam);
							var eventType= "forecast.event.category."+response.data.eventType
							$scope.formParam.eventCategoryList= getDict('eventCategoryList', eventType)
							getDistrictAndLocationList()
							// 把区域的desc 转为 key 绑定数据
//							$scope.formParam.region=$scope.getRegionKey($scope.regionList, response.data.region)  // 获取区域key
							$scope.formParam.endDate= dateToGMT(response.data.endDate)
							$scope.formParam.startDate= dateToGMT(response.data.startDate)
							angular.forEach($scope.dateObj,function(data){
								data.startDate = dateToGMT(data.startDate);
								data.endDate = dateToGMT(data.endDate);
							});
						}    
		            });
		        }
        }
        
        //处理回显数据
        function handerCallback(data){
        	 var obj = PublicService.showData(data.replenishRule,$scope.replenishRule);
        	 $scope.select_all = obj.selectAll;
        	 $scope.select_workDay = obj.selectWorkDay;
        	$scope.amount = 0;
         	angular.forEach($scope.formParam.stockCeilings,function(stockCeiling){
        		angular.forEach(stockCeiling.denominationList,function(denomination){
        			$scope.amount += parseFloat(denomination['denomination'], 10) * denomination['count'];
        		});
			});
        }
        
        //全选
        $scope.selectAll = function () {
            if($scope.select_all) {
         	    $scope.select_workDay = false;
               $scope.flagChecked($scope.replenishRule,true);
            }else {
         	   $scope.flagChecked($scope.replenishRule,false);
            }
        };
        //工作日
        $scope.selectWorkDay = function () {
     	   //选择工作日前先去掉所有的选中
     	   $scope.flagChecked($scope.replenishRule,false);
        	if($scope.select_workDay) {
        		$scope.select_all = false;
        		$scope.flagChecked($scope.workday,true);
        	}else {
        		$scope.flagChecked($scope.workday,false);
        	}
        };
        
        //加钞规则单选
        $scope.selectOne = function () {
       	 var obj = PublicService.calcWorkDayOrAll($scope.replenishRule);
       	 $scope.select_workDay = obj.selectWorkDay;
       	 $scope.select_all = obj.selectAll;
        };
         
      //获取加钞规则周期
    	function getWeek(){
    		var obj = PublicService.getCashDay($scope.replenishRule);
    		$scope.formParam.replenishRule = obj.replenishRule;
    		return obj.flag;
    	}    
        
    	
        $scope.save = function(){
        	getWeek()
        	if($scope.formParam['endDate'] ==null || $scope.formParam['startDate'] ==null){
        		PublicService.showDialogTimeout('Please Choice Date')
        		return 
        	}  
        	
        	// 改变时区
        	if($scope.formParam['endDate'] != undefined || params['startDate'] !==null){
				var newEndData=$scope.formParam['endDate']
				if(typeof newEndData=='object'){
					var t_s = newEndData.getTime();//转化为时间戳毫秒数
					$scope.formParam['endDate']=newEndData.setTime(t_s + 1000 * 200)
				}
			}
        	if($scope.formParam['startDate'] != undefined || params['startDate'] !==null){
				var newEndData=$scope.formParam['startDate']
				if(typeof newEndData=='object'){
					var t_s = newEndData.getTime();//转化为时间戳毫秒数
					$scope.formParam['startDate']=newEndData.setTime(t_s + 1000 * 200)
				}
			}
        	// 获取区域的desc
			var regionList=$scope.regionList
			var key=$scope.formParam.region
			$scope.formParam.region = $scope.getRegionDesc(regionList,key)
			
			// 获取事件名字desc
//			var eventCategoryList=$scope.eventCategoryList
//			var key=$scope.formParam.eventCategory  
//			$scope.formParam.eventCategory = $scope.getRegionDesc(eventCategoryList,key)
			
			if($scope.formParam.ceiling<$scope.formParam.lowest){
				var msg="global.compareCash"
				PublicService.showDialogTimeout(msg)
				return
			}
			EventManagementService.saveEvent($scope.formParam).then(function (response){
				if (response.statusCode==="0000") {
        			$scope.message = "global.saveSuccess"; 
        			PublicService.showDialogTimeout($scope.message);
        			$rootScope.$broadcast("rootEventEdit", '');
        			$scope.clear(false);
				}
        	});
        };
        
        // 获取区域的desc
        $scope.getRegionDesc=function(item,key){
        	for(var i=0;i<item.length;i++){
        		if(item[i]['dictKey']==key){
        			return item[i]['dictDesc']
        		}
        	}
        }
        
     // 获取区域的key
//        $scope.getRegionKey=function(item,desc){
//        	for(var i=0;i<item.length;i++){
//        		if(item[i]['dictDesc']==desc){
//        			return item[i]['dictKey']
//        		}
//        	}
//        }
        
        //数据字典加载
        function getDict(param, parentGroup){
        	SysDictService.getDictListAsync(parentGroup)
        	.then(function(response){
        		if(response.statusCode === '0000'){
        			$scope[param] = response.data;
        		}
        	});
        }

	    $scope.changeEventType = function(eventType){
	    	var eventType='forecast.event.category.'+eventType
	    	$scope.formParam.eventCategoryList=getDict('eventCategoryList',eventType);  
	    	var aa=$scope.formParam.eventCategoryList
	    	$('.tipStyle-3').css('left','305px')
        };
        
        //根据数组来确定CheckBox的显示
        $scope.flagChecked = function(arr,flag){
       	   angular.forEach(arr, function (i) {
   	           i.checked = flag;
   	       });
          };
    	
//        //全选
//        $scope.selectAll = function () {
//            if($scope.select_all) {
//         	    $scope.select_workDay = false;
//               $scope.flagChecked($scope.replenishRule,true);
//            }else {
//         	   $scope.flagChecked($scope.replenishRule,false);
//            }
//        };
//        //工作日
//        $scope.selectWorkDay = function () {
//     	   //选择工作日前先去掉所有的选中
//     	   $scope.flagChecked($scope.replenishRule,false);
//        	if($scope.select_workDay) {
//        		$scope.select_all = false;
//        		$scope.flagChecked($scope.workday,true);
//        	}else {
//        		$scope.flagChecked($scope.workday,false);
//        	}
//        };
//        
//        //单选
//        $scope.selectOne = function () {
//        	 var obj = PublicService.calcWorkDayOrAll($scope.replenishRule);
//        	 $scope.select_workDay = obj.selectWorkDay;
//        	 $scope.select_all = obj.selectAll;
//        };
        
        //选择日期
        $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
		
	    $scope.checkStartTime = function(){
	    	if($scope.formParam.startDate=='' ||$scope.formParam.startDate==null) return
	    	if($scope.formParam.endDate=='' || $scope.formParam.endDate==null) return
            if($scope.formParam.startDate > $scope.formParam.endDate){
                var msg = "global.timeMsg1";
                PublicService.openDialog(msg);
                $scope.formParam.startDate = new Date();
            }
        };  
	    $scope.checkEndTime = function(){
	    	if($scope.formParam.startDate=='') return
	    	if($scope.formParam.endDate=='') return
	        if($scope.formParam.startDate > $scope.formParam.endDate){
	        	 var msg = "global.timeMsg2";
	             PublicService.openDialog(msg);
	             $scope.formParam.endDate = new Date();
	        }
	    };
	    
	    // 获取地区的搜索框内容   // dis3
        function getDistrictAndLocationList(){
        	EventManagementService.getDistrictAndLocationList('districtLevel3')
			.then(function (response){
				if(response.statusCode === "0000"){ 
					$scope.regionList=response.data
				}
			});
        }
	    
	    
	    // 监听钞票最大值和最小值
//	    $scope.$watch('formParam',function(n,o){
//	    	var flag=n.ceiling>=n.lowest?true:false
//	    	var msg="global.compareCash"
//	    	flag?'':PublicService.showDialogTimeout(msg);
//	    },true)
	    
//	    $scope.$watch('formParam',function(n,o){
//	    	if(n.ceiling!==o.ceiling && n.ceiling<n.lowest){
//	    		$scope.formParam.ceiling=''
//	    	}
//	    },true)
    }
})();