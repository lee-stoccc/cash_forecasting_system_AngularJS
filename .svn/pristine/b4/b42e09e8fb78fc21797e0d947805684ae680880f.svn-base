(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('BankInfoEditController', BankInfoEditController);
    BankInfoEditController.$inject = ['BankInfoService', '$scope', '$stateParams','$state', 'ngDialog','PublicService','$uibModalInstance','ngVerify','SysDictService'];
    function BankInfoEditController(BankInfoService, $scope, $stateParams, $state, ngDialog,PublicService,$uibModalInstance,ngVerify,SysDictService) {
		$scope.datePickerOpenStatus = {};
		$scope.bankInfo = {status:"1"};
		if ($stateParams.id && $stateParams.state=="edit") { //编辑
            BankInfoService.getBankInfo($stateParams.id).then(function (response) {
				if(response.statusCode === "0000"){
					$scope.bankInfo = response.data;
				}
            });
		}else if ($stateParams.id && $stateParams.state=="add") { //勾选父级银行，新增
            	BankInfoService.getBankInfo($stateParams.id).then(function (response) {
            		if(response.statusCode === "0000"){
            			$scope.bankInfo = response.data;
            			$scope.bankInfo.parentName = $scope.bankInfo.bankName;
            			$scope.bankInfo.parentId = $scope.bankInfo.id;
            			$scope.bankInfo.bankName = "";
            			$scope.bankInfo.bankNo = "";
            			$scope.bankInfo.id = "";
            			
            		}
            	});
		}
        $scope.init = function(){
        	getDict('bankStatusList', 'forecast.bankStatus');
         };
        
         //数据字典加载
         function getDict(param, parentGroup){
         	SysDictService.getDictListAsync(parentGroup)
         	.then(function(response){
         		if(response.statusCode === '0000'){
         			$scope[param] = response.data;
         		}
         	});
         }
        
        $scope.save = function() {
            $scope.message = "global.saveSuccess";        
            BankInfoService.saveBankInfo($scope.bankInfo).then(function (response) {
                if (response.statusCode === '0000') {
                    PublicService.openDialog($scope.message);
 					$scope.clear(true);	
                } else {
                    $scope.message = response.msgCode;
                    PublicService.openDialog($scope.message);
                }
            });
        };
		

   $scope.clear = function(flag) {
        $uibModalInstance.close();
        $state.go('app.bankInfo',{},{reload:flag});
    };
    }
})();