(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('StockController', StockController);

    StockController.$inject = ['StockService', 'ngDialog', '$state', '$scope','PublicService', '$uibModal','$uibModalInstance','FcPublicService'];

    function StockController(StockService, ngDialog, $state, $scope, PublicService,$uibModal,$uibModalInstance,FcPublicService) {
        $scope.formParam = {};
		$scope.datePickerOpenStatus = {};
        $scope.tablesConfig = {
 			showCheckBox:true,
 			tableWidth:'table-width',
            tableTitles:[
				{title:"stock.bankName", filed: 'bankName',type:'text',width:'table-item-pre-5'},    
                {title:"stock.time", filed: 'time',type:'dateTime',format:'yyyy-MM-dd HH:mm',width:'table-item-pre-4'},  
				{title:"stock.currentStock", filed: 'currentStock',type:'text',width:'table-item-pre-3'},    
                    ],
            url:'api/stock/page',
			formParams:{
				bankId : $scope.formParam.bankId,
				date : $scope.formParam.date,
			}
		};
	
        $scope.init = function(){
        	getBankList();
         };
        
         $scope.bankStockSelectItem = function(obj){
         	$scope.formParam.bankId = obj.id;
         };
        //获取银行树
        function getBankList(){
        	$scope.showCheckBox = false;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
		$scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);
		};	
	
		$scope.resetSearch = function() {
			$scope.formParam = {};
			$scope.bankName="";
			};
		
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};

		 
        $scope.addStock = function(){
             $state.go('app.stock-edit',{id:""});
           /* var modalInstance = $uibModal.open({    
            	templateUrl: 'fc/app/forecastPlan/stock/stock-edit.html',
            	controller: StockEditController,
            	backdrop: 'static',
            	size: 'lg'
            });    
	        modalInstance.result.then(function (result) {    
	            console.log(result); //result关闭是回传的值   
	            $scope.loadAll();
	         }, function (reason) {    
	             console.log(reason);//点击空白区域，总会输出backdrop click，点击取消，则会暑促cancel    
         });    */
        };
        
       
        
        $scope.editStock = function () {
        	$scope.choseArr = $scope.getCheckValues('delFlag').check;
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	var id = $scope.choseArr[0];
            	$state.go("app.stock-edit",{id:id});
            }
        };
		
      //批量删除
	$scope.batchDelete = function() {
      	$scope.choseArr = $scope.getCheckValues('activated').check;
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
			 StockService.deleteStock(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
					}
				});
		};
		
	$scope.clear = function(flag) {
        $uibModalInstance.close();
        $state.go('app.forecastPlan',{},{reload:flag});
		};
    }
})();