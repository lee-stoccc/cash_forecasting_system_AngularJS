(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('HolidayController', HolidayController);

    HolidayController.$inject = ['$rootScope','FcPublicService','HolidayService', 'ngDialog', '$state', '$scope','PublicService','$window'];

    function HolidayController($rootScope,FcPublicService,HolidayService, ngDialog, $state, $scope, PublicService,$window) {
    	$scope.abc=HolidayService.abc;
    	var startTime = dateToGMT(new Date().getFullYear()+"-01-01T00:00:00.000+0800");
    	var endTime =dateToGMT(new Date().getFullYear()+"-12-31T00:00:00.000+0800");
    	$scope.formParam = {
    		startTime:startTime,
    		endTime:endTime,
    		dates:startTime +'-'+ endTime
        };  
		$scope.datePickerOpenStatus = {};
		$scope.choseArr = [];
		$scope.tablesConfig = {
			checkOneAction:'checkOneAction',
	     	checkAllAction:'checkAllAction',
 			showCheckBox:true,
            tableTitles:[
				{title:"holiday.year", filed: 'year',type:'text',width:8,tipTitle:'Year'},    
                {title:"holiday.date", filed: 'details',type:'holiday_date',width:30,tipTitle:'Holiday'},  
                {title:"holiday.supplement", filed: 'details',type:'supplement_date',width:30,tipTitle:'Supplement'},  
				{title:"holiday.holidayName", filed: 'holidayName',type:'text',width:20,tipTitle:'HolidayName'},    
                    ],
            url:'api/holiday/page',
			formParams:{
				startTime : $scope.formParam.startTime,
            	endTime : $scope.formParam.endTime,
				holidayName : $scope.formParam.holidayName,
				dates:$scope.formParam.dates
			}
		};
	
		  $scope.init = function(){  //初始化 
//			  $scope.changClassTime()  
	         };
	         
	         // 初始化列表中放假时间和补班时间
	         $scope.changClassTime=function (){

	        	 setTimeout(function(){
	        		 var tableList=$scope['tableList']
		        	 for(var i=0;i<tableList.length;i++){
		        		 for(var j=0;j<tableList[i]['details'].length;j++){
		        			 if(tableList[i]['details'][j]['type']==1){  // 放假的情况
		        				 var startDate=tableList[i]['details'][j]['startDate'] // 开始的时间
		        				 var indexStart=startDate.indexOf('T')  // 开始的时间顺序
		        				 var startTime=startDate.substring(0,indexStart) // 开始的时间顺序截取到的年月日
		        				 var endDate=tableList[i]['details'][j]['endDate'] // 结束时间
		        				 var indexEnd=endDate.indexOf('T')
		        				 var endTime=endDate.substring(0,indexEnd) // 结束的时间顺序截取到的年月日
		        				 $scope.tableList[i]['dates']=startTime+'~'+endTime
		        			 }else{     //补班情况
		        				 var startDate=tableList[i]['details'][j]['startDate'] // 开始的时间
		        				 var indexStart=startDate.indexOf('T')  // 开始的时间顺序
		        				 var startTime=startDate.substring(0,indexStart) // 开始的时间顺序截取到的年月日
		        				 var endDate=tableList[i]['details'][j]['endDate'] // 结束时间
		        				 var indexEnd=endDate.indexOf('T')
		        				 var endTime=endDate.substring(0,indexEnd) // 结束的时间顺序截取到的年月日
		        				 $scope.tableList[i]['supplements']=startTime+'~'+endTime
		        			 }
		        		 }
		        	 }
	        	 }, 500)
	         }
	         
	         
		$scope.checkOneAction = function(allItem){
        	$scope.choseArr = [];
            angular.forEach(allItem, function (item) {
                if(item.checked) {
                	$scope.choseArr.push(item);
                }
            });
        }; 
        
        $scope.checkAllAction = function(allItem){
        	$scope.choseArr = [];
        	angular.forEach(allItem, function (item) {
        		if(item.checked) {
        			$scope.choseArr.push(item);
        		}
        	});
        };
        
		$scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);  // 渲染
//			$scope.changClassTime()
		};	
	
		$scope.resetSearch = function() {
			$scope.formParam = {};
			};
			
	   	$scope.openCalendar = function (date) {
				$scope.datePickerOpenStatus[date] = true;
			};
	
	    $scope.checkStartTime = function(){
	            if($scope.formParam.startTime > $scope.formParam.endTime){
	                var msg = "global.timeMsg1";
	                PublicService.openDialog(msg);
	                $scope.formParam.startTime = undefined;
	            }
	        };
	    $scope.checkEndTime = function(){
	        if($scope.formParam.startTime > $scope.formParam.endTime){
	        	 var msg = "global.timeMsg2";
	             PublicService.openDialog(msg);
	             $scope.formParam.endTime = undefined;
	        }
	    };

        $scope.addHoliday = function(){
            $state.go('app.holiday-edit',{id:""});
        };

        $scope.editHoliday = function () {
        	$scope.choseArr = $scope.getCheckValues('delFlag').check;
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	var id = $scope.choseArr[0];
            	$state.go("app.holiday-edit",{id:id});
            }
        };
         
	     //批量删除
		  $scope.batchDelete = function() {
	    	$scope.choseArr = $scope.getCheckValues('delFlag').check;
	    	var msg = "";
	    	if (PublicService.isEmptyObject($scope.choseArr[0])) {//没有选择一个的时候提示
	        	msg = "global.selectDelete";
	        	PublicService.openDialog(msg);
	        	return;
	        }
	    	msg = "global.messages.deleteConfirm";
	    	PublicService.showConfirmDialog(msg, "confirmDelete", $scope, $scope.checked);
	    };
	    
	    $scope.confirmDelete = function(id){   	
			 HolidayService.deleteHoliday(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();				
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
					}
				});
		};
		
		$rootScope.$on("rootEventHoliday",function(event,data){
			$scope.loadAll();	
//			$scope.changClassTime()
		});  
    }
})();