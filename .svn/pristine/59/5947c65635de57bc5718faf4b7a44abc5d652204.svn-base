(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('BankInfoController', BankInfoController);

    BankInfoController.$inject = ['BankInfoService', 'ngDialog', '$state', '$scope', 'PublicService','SysDictService'];

    function BankInfoController(BankInfoService, ngDialog, $state, $scope, PublicService,SysDictService) {
        $scope.formParam = {"status":"1"};
		$scope.init = function(){
         	getDict('bankStatusList', 'forecast.bankStatus');
        	getBankList();
         	getBankNameSelect();
          };
     
      function getBankList(){
    	  	$scope.showCheckBox = true;
      		BankInfoService.getBankList().then(function (response){
      		if (response.statusCode==="0000") {
      			  $scope.bankList = response.data;
      			  return
			}
      	});
      }
      
      function getBankNameSelect(){
    	  BankInfoService.getBankNameList()
    	  .then(function(response){
    		  if(response.statusCode === '0000'){
    			  $scope.bankNameList = response.data;
    		  }
    		  return
    	  });
      }
      //数据字典加载
      function getDict(param, parentGroup){
      	SysDictService.getDictListAsync(parentGroup)
      	.then(function(response){
      		if(response.statusCode === '0000'){
      			$scope[param] = response.data;
      			//$scope.formParam.status = $scope[param][1].dictKey;
      		}
      	});
      }
      
		$scope.tablesConfig = {
 			showCheckBox:false,
     		checkOneAction:'checkOneAction',
     		checkAllAction:'checkAllAction',
            tableTitles:[
				{title:"bankInfo.bankNo", filed: 'bankNo',type:'text',width:20},    
				{title:"bankInfo.headquarter", filed: 'headquarter',type:'text',width:10},    
				{title:"bankInfo.firstBranch", filed: 'firstBranch',type:'text',width:20},    
				{title:"bankInfo.secondBranch", filed: 'secondBranch',type:'text',width:20},    
				{title:"bankInfo.branch", filed: 'branch',type:'text',width:30},    
                    ],
            url:'api/bankInfo/page',
			formParams:{
				bankNo : $scope.formParam.bankNo,
				headquarter : $scope.formParam.headquarter,
				status : $scope.formParam.status,
			}
		};
		
        $scope.checkOneAction = function(allItem){
//          	$scope.choseArr = [];
//              angular.forEach(allItem, function (item) {
//                  if(item.checked) {
//                  	$scope.choseArr.push(item);
//                  }
//              });
          };
          
          $scope.checkAllAction = function(allItem){
//          	$scope.choseArr = [];
//            angular.forEach(allItem, function (item) {
//                if(item.checked) {
//                	$scope.choseArr.push(item);
//                }
//            });
          };
	
		$scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);
			};	
	
		$scope.resetSearch = function() {
			 $scope.formParam = {status:"1"};
			};
		
		$scope.bankInfoSelectCheck = function(obj){};
		        
        $scope.bankInfoSelectItem = function(obj){
       	 	$scope.formParam.bankId = obj.id;
        };
		
        $scope.addBankInfo = function(){
        	//要么不选上级，要么只能选择一个上级银行
        	if ($scope.bankNo.length == 1 || PublicService.isEmptyObject($scope.bankNo)) {
        		$state.go('app.bankInfo-edit',{state:"add",id:$scope.bankNo});
        	}else{
        		var msg = "bankInfo.chooseOneAdd";
        		PublicService.openDialog(msg);
        	}
        };
        
        $scope.editBankInfo = function () {
        	if ($scope.bankNo.length != 1) {
        		var msg = "global.chooseOneEdit";
        		PublicService.openDialog(msg);
        		return;
        	}else{
        		$state.go("app.bankInfo-edit",{state:"edit",id:$scope.bankNo});
        	}  
        };
		
	     //批量删除
		  $scope.batchDelete = function() {
	    	var msg = "bankInfo.deleteConfirm";
	    	if (PublicService.isEmptyObject($scope.bankNo)) {//没有选择一个的时候提示
	        	msg = "global.selectDelete";
	        	PublicService.openDialog(msg);
	        	return;
	        }
	    	PublicService.showConfirmDialog(msg, "", $scope, $scope.bankNo);
	    };
	    
	    $scope.confirmDelete = function(id){
			 BankInfoService.deleteBankInfo(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();
						getBankNameSelect();
						$scope.bankNo = [];
						getBankList();
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);;
					}else{
						PublicService.openDialog(response.msgCode);
					}
				});
		};	
    		
    }
})();