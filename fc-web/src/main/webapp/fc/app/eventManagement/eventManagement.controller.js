(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('EventManagementController', EventManagementController);
    EventManagementController.$inject = ['$rootScope','PublicService','EventManagementService', 'ngDialog', '$state', '$scope','$window','FcPublicService'];

    function EventManagementController($rootScope,PublicService,EventManagementService, ngDialog, $state, $scope,$window,FcPublicService) {
    	$scope.formParam = {};
    	$scope.choseArr = [];
    	$scope.formParam.startDate = '';
    	$scope.formParam.endDate = '';  
    	$scope.datePickerOpenStatus = {};
    	$scope.dateOptions = {
        		showWeeks:false,
        		formatDayHeader:'EEE'
        	};
//    	getDict()
        $scope.tablesConfig = {
 			showCheckBox:true,
 			checkOneAction:'checkOneAction', 
     		checkAllAction:'checkAllAction',
            tableTitles:[     
                {title:"eventManagement.eventType", filed: 'eventKind',type:'text',width:20,tipTitle:'Event Type'},
				{title:"eventManagement.eventName", filed: 'eventName',type:'text',width:20,tipTitle:'Event Name'},
				{title:"eventManagement.region", filed: 'region',type:'text',width:20,tipTitle:'District3'},
				{title:"eventManagement.startDate", filed: 'startDate',type:'date',width:20,tipTitle:'Start Date'}, 
				{title:"eventManagement.endDate", filed: 'endDate',type:'date',width:20,tipTitle:'End Date'}, 
//                {
//				title : "entity.action.operation",
//				filed : 'operation',
//				type : 'btn',  
//				width : 20,
//				actions : [ {
//					actionName : 'editEvent(item.id)',
//					name : 'entity.action.addDevice'
//					} ]
//                } 
				],
            url:'api/actualEvent/page',
			formParams:{
				eventName : $scope.formParam.eventName,	
				startDate: $scope.formParam.startDate,
				endDate: $scope.formParam.endDate,
			}
		};  
        
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
        
		$scope.editEvent = function (id) {
			$state.go('app.eventAddTerms',{id:id});
        };
        
		$scope.loadAll = function() {  
			$scope.refreshTableList($scope.formParam);
		};	
	
		$scope.resetSearch = function() {
			$scope.formParam = {};
//	    	$scope.formParam.startDate = new Date();
//	    	$scope.formParam.endDate = new Date();   
		};
        
		// 添加事件
        $scope.addNewEvent = function(){
            $state.go('app.eventEdit',{id:""});
        };
        
        // 修改事件
        $scope.editEvent = function () {
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	var id = $scope.choseArr[0]['id'];
            	$state.go("app.eventEdit",{id:id});
            }
        };
        
        $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
		
	    $scope.checkStartTime = function(){
            if($scope.formParam.startDate > $scope.formParam.endDate){
                var msg = "global.timeMsg1";
                PublicService.openDialog(msg);
                $scope.formParam.startDate = new Date();
            }
        };
	    $scope.checkEndTime = function(){
	        if($scope.formParam.startDate > $scope.formParam.endDate){
	        	 var msg = "global.timeMsg2";
	             PublicService.openDialog(msg);
	             $scope.formParam.endDate = new Date();
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
			 EventManagementService.deleteEvent(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();				
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
					}
				});
		};	
		$rootScope.$on("rootEventEdit",function(event,data){
			$scope.loadAll();	
		});
		 
		 //数据字典加载
//        function getDict(param, parentGroup){
//        	SysDictService.getDictListAsync(parentGroup)
//        	.then(function(response){
//        		if(response.statusCode === '0000'){
//        			$scope[param] = response.data;
//        		}
//        	});
//        }
		
    }
})();