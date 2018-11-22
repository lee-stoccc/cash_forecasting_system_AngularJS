(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('DailyUsingAddController', DailyUsingAddController);
    DailyUsingAddController.$inject = ['FcPublicService','DailyUsingService', 'BankRuleService','$scope','$state', 'ngDialog','PublicService','$uibModalInstance','ngVerify','$translate'];
    function DailyUsingAddController(FcPublicService,DailyUsingService,BankRuleService, $scope, $state, ngDialog, PublicService,$uibModalInstance,ngVerify,$translate) {	
    	$scope.datePickerOpenStatus = {};
    	  $scope.init = function(){
           	getBankList();
           	$scope.dailyUsing = {};
           	$scope.timeArr =[];
            for(var i = 0;i<24;i++){
            	if(i<10){
            		i = '0'+i;
            	}
            	$scope.timeArr.push(i);
            }
            $scope.select('#BankNameDUEdit')
        	$scope.select('#timeDUEdit')
           };
 	
        $scope.bankDailyUsingAddSelectCheck = function(obj){};
        $scope.bankDailyUsingAddSelectItem = function(obj){};
        
        // 可以填写的选择下拉框
        $scope.select=function(id){
        	angular.element(id).select2({		//select2-search__field
        		placeholder: $translate.instant("global.pleaseSelect"),
        		allowClear: true,
        		tags:false
        	})
        }
        
        //获取银行树
        function getBankList(){
//        	$scope.showCheckBox = true;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        
        $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
	
		function checkTime(time,msg){
			var nowTime = new Date(new Date().getTime() - 24*60*60*1000); //前一天
			if($scope.dailyUsing[time] > nowTime){
			   var message = "termInfo.formError.currentTime";
               PublicService.openDialog(message);
               $scope.dailyUsing[time] = undefined;
		   }else if(time=="startDate" && $scope.dailyUsing[time] > $scope.dailyUsing.endDate){
                PublicService.openDialog(msg);
                $scope.dailyUsing[time] = undefined;
			}else if(time=="endDate" && $scope.dailyUsing.startDate > $scope.dailyUsing[time]){
				PublicService.openDialog(msg);
				$scope.dailyUsing[time] = undefined;
			}
		}
	   $scope.checkStartTime = function(){
		   checkTime("startDate","global.timeMsg1");
	        };
	    $scope.checkEndTime = function(){
	    	 checkTime("endDate","global.timeMsg2");
	    };
        $scope.save = function() {
        	$scope.isSaving = true;
            $scope.message = "global.saveSuccess";        
            DailyUsingService.generationUsing($scope.dailyUsing).then(function (response) {
                if (response.statusCode === '0000') {
                    PublicService.openDialog($scope.message);
                    $scope.clear(true);
                } else {
                    $scope.message = response.msgCode;
                    PublicService.openDialog($scope.message);
                    $scope.isSaving = false;
                }
             });
        };
		
	   $scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.dailyUsingData',{},{reload:flag});
	    };
    }
})();