(function() {
	'use strict';
	angular.module('devplatformApp').controller('StockEditController',
			StockEditController);
	StockEditController.$inject = [ 'StockService', '$scope', '$stateParams',
			'$state', 'ngDialog', 'PublicService', '$uibModalInstance',
			'ngVerify', 'SysDictService', 'FcPublicService', '$translate' ];
	function StockEditController(StockService, $scope, $stateParams, $state,
			ngDialog, PublicService, $uibModalInstance, ngVerify,
			SysDictService, FcPublicService, $translate) {

		$scope.datePickerOpenStatus = {};
		$scope.disabled = false;
		var dateTime = new Date();
		$scope.formParam = {
			"bankId":"",
			"time" : dateTime,
			"stockDetails" : [ {
				"denominationList" : [],
				"type" : ""
			} ],
		};
		$scope.init = function() {
			//getDict('denominationList', 'forecast.denomination');//面额
			getDict('deTypeList', 'forecast.denomination');
			getBankList();
			if ($stateParams.id) {
				$scope.disabled = true;
				showData();
			}
		};

		function getDict(param, parentGroup) {
			SysDictService.getDictListAsync(parentGroup).then(
					function(response) {
						if (response.statusCode === '0000') {
							$scope[param] = response.data;
							length = (response.data).length;
						}
					});
		}
		//选择币种
		$scope.changeCurrency = function(param, index) {
			var isHaving = false;
			// 判断选择的币种是否已经存在
			if ($scope.formParam.stockDetails.length > 1) {
				for (var position = 0; position < $scope.formParam.stockDetails.length; position++) {
					if (index != position) {
						var stockCeiling = $scope.formParam.stockDetails[position];
						if (stockCeiling['type'] === param) {
							isHaving = true;
							break;
						}
					}
				}
			}
			var parentGroup = "forecast.denomination." + param + "";
			if (isHaving) {
				PublicService
						.showDialogTimeout(param + "global.alreadyExisted");
				parentGroup = "forecast.denomination.";
			}
			SysDictService.getDictListAsync(parentGroup).then(function(response) {
				if (response.statusCode === '0000') {
						angular.forEach(response.data,function(denomination) {
							denomination['denomination'] = denomination['dictDesc'];
							denomination['count'] = 0;
						});
						$scope.formParam.stockDetails[index]['denominationList'] = response.data;
					};
				});
		};
		
		$scope.add = function() {
	      	 if ($scope.formParam.stockDetails.length >= $scope.deTypeList.length) {
	      		  	PublicService.showDialogTimeout("global.editDenomination");
					return;
			}
		    $scope.formParam.stockDetails.splice($scope.formParam.stockDetails.length + 1, 0,
		       {"denominationList":[],"type":""}
		    );   
		       
		};

		$scope.del = function($index) {
	    	 if($scope.formParam.stockDetails.length===1){ 
	    		 //最后一个不能删除
	    		PublicService.showDialogTimeout("global.del");
	    		 return;
	    	 }
	         $scope.formParam.stockDetails.splice($index, 1); 
		};
		
		$scope.changeBank = function(bankId){
			var param = {
				bankId:bankId,
				time:$scope.formParam.time
			};
			StockService.getBankStock(param).then(function(response){
				if (response.statusCode === "0000") {
					$scope.formParam.stockDetails = response.data;
				}
			});
		};

		//构造面额张数，当前实际库存，预测回笼金额等的数组对象

		//计算当前库存的合计
		$scope.calculteAmount = function(flag){
			angular.forEach($scope.formParam.stockDetails,function(){
				
			});
		};

		//获取银行树
		function getBankList() {
			$scope.showCheckBox = false;
			FcPublicService.getBanksList().then(function(response) {
				if (response.statusCode === "0000") {
					$scope.bankList = response.data;
				}
			});
		}
		//回显数据
		function showData() {
			if ($stateParams.id) {
				StockService.getStock($stateParams.id).then(function(response) {
					if (response.statusCode === "0000") {
						$scope.formParam = response.data;
					}
				});
			}
		}

		$scope.save = function() {
			StockService.saveStock($scope.formParam).then(function(response) {
				if (response.statusCode === '0000') {
					$scope.message = "global.saveSuccess";
					PublicService.openDialog($scope.message);
					$scope.clear(true);
				} else {
					$scope.message = response.msgCode;
					PublicService.openDialog($scope.message);
				}
			});
		};

		$scope.openCalendar = function(date) {
			$scope.datePickerOpenStatus[date] = true;
		};

		$scope.clear = function(flag) {
			$uibModalInstance.close("close");
			$state.go('app.stock', {}, {
				reload : flag
			});
		};
	}
})();