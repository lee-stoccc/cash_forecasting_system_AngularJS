(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('EventAddTermsController', EventAddTermsController);
    EventAddTermsController.$inject = ['PublicService','SysDictService','EventManagementService','ngDialog', '$state', '$scope','$uibModalInstance','$stateParams'];

    function EventAddTermsController(PublicService,SysDictService,EventManagementService,ngDialog, $state, $scope,$uibModalInstance,$stateParams) {
    	$scope.formParam = {};
//    	$scope.formParam.startDate = new Date();
//    	$scope.formParam.endDate = new Date();
    	
    	$scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.eventManagement',{},{reload:flag});
    	};
    	
    	$scope.loadAll = function(){
    		$scope.refreshTableList($scope.formParam);
    	};
    	
    	$scope.save = function(){
    		$scope.conflictTermsList = [{id:'123'},{id:'124'}];
    		$uibModalInstance.close();
    		$state.go('app.conflictImpact',{conflictImpacts:JSON.stringify($scope.conflictTermsList)});
//    		if($scope.conflictTerms.length > 0){
//    			$uibModalInstance.close();
//    			getConflictTermsList($scope.conflictTerms);
//    		}else{
//	        	 var msg = "global.chooseOneData";
//	             PublicService.openDialog(msg);
//    		}
    	};
    	
    	$scope.addTermsList = [];    	
//        $scope.tablesConfig = {
//     			showCheckBox:true,
//     			hideGo:true,
//     			tableListName:'tableList1',
//                tableTitles:[   
//    				{title:"forecastReportform.regionName", filed: 'regionName',type:'text',width:20}, 
//    				{title:"termInfo.termNo", filed: 'termNo',type:'text',width:20},
//    				{title:"eventManagement.effectValue", filed: 'effectValue',type:'text',width:20}],
//                url:'/api/actualEvent/pageEventTerms',
//    			formParams:{
//    				eventId : $stateParams.id	
//    			}
//    		};
        
        $scope.tablesConfig = {
     			showCheckBox:true,
     			hideGo:true,
     			checkOneAction:'checkOneAction',
     			checkAllAction:'checkAllAction',
     			itemsPerPage:6,
                tableTitles:[   
    				{title:"forecastReportform.bankName", filed: 'bankName',type:'text',width:15},
    				{title:"forecastReportform.region", filed: 'region',type:'text',width:20}, 
    				{title:"forecastReportform.regionName", filed: 'regionName',type:'text',width:15}, 
    				{title:"termInfo.branchNo", filed: 'branchName',type:'text',width:20},
    				{title:"termInfo.termNo", filed: 'termNo',type:'text',width:15}, 
    				{title:"eventManagement.effectValue", filed: 'effectValue',type:'text',width:15}],
                url:'/api/actualEvent/pageTermForChoose',
        		formParams: {
        	        "bankName": $scope.formParam.bankName,
        	        "regionName": $scope.formParam.regionName,
        	        "branchName": $scope.formParam.branchNo,
        	        "commercial": $scope.formParam.commercial
        		}
    		};
        
        $scope.checkOneAction = function(allItem){
        	calculatingData(allItem);
        };
        
        $scope.checkAllAction = function(allItem){
        	calculatingData(allItem);
        };
        
        function calculatingData(allItem){
        	$scope.conflictTerms = [];
        	if(allItem.length == 0)
        	return;
            angular.forEach(allItem, function (item) {
                if(item.checked) {
                	item.ralatingEventId=$stateParams.id;
                	$scope.conflictTerms.push(item);
                }
            });
        };
        
        $scope.init = function(){
        	getEventTermsList();
         	getDict('branchList', 'forecast.branch'); //网点名称
         	getDict('commercialList', 'forecast.commercial'); //商圈
         	getBankList();
         	getCusgionList();
        };
        
        //2.13.3. 查询事件设备关系
        function getEventTermsList(){
            var param = {
                    page_number: 1,
                    page_size: 99999,
        			formParams:{
        				eventId : $stateParams.id	
        			}
                };
            
    		EventManagementService.getEventTermsList(param).then(function (response){
        		if (response.statusCode==="0000") {
        			$scope.addTermsList = response.data['list'];
    			}
        	});
        };
        
		//获取银行List
		function getBankList(){
			EventManagementService.getBankList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
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
          //获取区域
          function getCusgionList(){
        	  EventManagementService.getCusgionList().then(function (response){
          		if (response.statusCode==="0000") {
          			$scope.cusgionList = response.data;
          		}
          	});
          }
          
          function getConflictTermsList(conflictTerms){
              var param = {
            		  conflictTerms: conflictTerms
                  };
      		EventManagementService.getConflictTermsList(param).then(function (response){
        		if (response.statusCode==="0000") {
        			$scope.addTermsList = response.data;
        			if($scope.addTermsList.length > 0){
        	    		$uibModalInstance.close();
        	    		$state.go('app.conflictImpact',{conflictImpacts:$scope.addTermsList});
        			}else{
        				getEventTermsList();
        				$scope.refreshTableList($scope.formParam);
        			}
    			}
        	});
          }
    }
})();