(function() {
	'use strict';
	angular.module('devplatformApp').controller('BatchEditController',
			BatchEditController);
	BatchEditController.$inject = ['$rootScope', 'TermInfoService', '$scope',
			'$stateParams', '$state', 'ngDialog', 'PublicService',
			'$uibModalInstance', 'ngVerify', '$translate', 'SysDictService',
			'BankRuleService' ];
	function BatchEditController($rootScope,TermInfoService, $scope, $stateParams, $state,
			ngDialog, PublicService, $uibModalInstance, ngVerify, $translate,
			SysDictService, BankRuleService) {
		$scope.dateList = PublicService.getDateList();

		$scope.replenishRule = [ {
			'value' : $translate.instant('bankRule.Monday'),
			"key" : 1
		}, {
			'value' : $translate.instant('bankRule.Tuesday'),
			"key" : 2
		}, {
			'value' : $translate.instant('bankRule.Wednesday'),
			"key" : 3
		}, {
			'value' : $translate.instant('bankRule.Thursday'),
			"key" : 4
		}, {
			'value' : $translate.instant('bankRule.Friday'),
			"key" : 5
		}, {
			'value' : $translate.instant('bankRule.Saturday'),
			"key" : 6
		}, {
			'value' : $translate.instant('bankRule.Sunday'),
			"key" : 7
		} ];
		$scope.workday = $scope.replenishRule.slice(0, 5); // 工作日
		
		// 固定加钞星期几
		$scope.replenishRuleFixed = [
		         		       {'value' : $translate.instant('bankRule.Monday'),"key" : 1}, 
		         		       {'value' : $translate.instant('bankRule.Tuesday'),"key" : 2},
		         		       {'value' : $translate.instant('bankRule.Wednesday'),"key" : 3},
		         		       {'value' : $translate.instant('bankRule.Thursday'),"key" : 4},
		         		       {'value' : $translate.instant('bankRule.Friday'),"key" : 5},
		         		       {'value' : $translate.instant('bankRule.Saturday'),"key" : 6}, 
		         		       {'value' : $translate.instant('bankRule.Sunday'),"key" : 7} ];
		$scope.workdayFixed = $scope.replenishRuleFixed.slice(0, 5); // 工作日
		
		$scope.select_all = true;// 初始默认全选
		$scope.formParam = {
			"id" : "",
			"camFullJudge" : "0",
			"atmLackJudge" : "0",
			"crsLackJudge" : "0",
			"crsFullJudge" : "0",
			"imLackJudge" : "0",
			"imFullJudge" : "0",
			"holidayAdd" : "1", // 初始默认节日加钞
			"unitCount" : 500, // 初始默认加钞规则500张
			"day" : 1,
			"time" : 1,
			"indCashSecurity" : 0.99,
			"indReplenishCost" : 2,
			"fullWarn" : 80,
			"lackWarn" : 20,
//			"termCashLimits" : [],
			"replenishTimes" : [ {
				"startTime" : "08:00",
				"endTime" : "09:00"
			} ],
		};
		$scope.formParam.id = $stateParams.ids;

		$scope.init = function() {
			getDict('deTypeList', 'forecast.denomination');
			$scope.selectAll(); // 初始默认执行全选方法  
//			$scope.changeCurrency ("HKD","0") //币种自动加载
//			$scope.add()   //币种自动加载
//			$scope.changeCurrency ("CNY","1") //币种自动加载
		};

		// 计算满 /缺 钞预警张数
		$scope.calcultePencent = function() {
			if ($scope.formParam.lackWarn >= 100) {
				$scope.formParam.lackWarn = 99;
			}

			if ($scope.formParam.lackWarn <= 0) {
				$scope.formParam.lackWarn = 1;
			}

			if ($scope.formParam.fullWarn >= 100) {
				$scope.formParam.fullWarn = 99;
			}
			if ($scope.formParam.fullWarn <= 0) {
				$scope.formParam.fullWarn = 1;
			}
			calculteWarn($scope.formParam.lackWarn, "lackWarn");
			calculteWarn($scope.formParam.fullWarn, "fullWarn");
		};

		// 保障率权重 成本系数
		$scope.blurformParam = function() {
			if ($scope.formParam.indCashSecurity < 0.9
					|| $scope.formParam.indCashSecurity > 0.999) {
				$scope.formParam.indCashSecurity = null;
			}
			if ($scope.formParam.indReplenishCost < 1
					|| $scope.formParam.indReplenishCost > 3) {
				$scope.formParam.indReplenishCost = null;
			}
		};

		function calculteWarn(param, juge) {
			if (param) {
				angular
						.forEach(
								$scope.formParam.termCashLimits,
								function(termCashLimit) {
									angular
											.forEach(
													termCashLimit.denominationList,
													function(denomination) {
														if (denomination['minCeilingCount'] > denomination['ceilingCount']) {
															denomination['minCeilingCount'] = denomination['ceilingCount']
														}
														denomination[juge] = parseInt(denomination['ceilingCount']
																* parseFloat(
																		param / 100,
																		10));
													});
								});
			}
		}

		function getDict(param, parentGroup) {
			SysDictService.getDictListAsync(parentGroup).then(
					function(response) {
						if (response.statusCode === '0000') {
							$scope[param] = response.data;
						}
					});
		}
		// 选择币种
		$scope.changeCurrency = function(param, index) {			    
        	var isHaving = true;
        	//判断选择的币种是否已经存在
        	if($scope.formParam.termCashLimits.length > 1){
        		for(var position = 0;position < $scope.formParam.termCashLimits.length;position++){
        			if(index != position){
        				var stockCeiling = $scope.formParam.termCashLimits[position];
                		if(stockCeiling['type'] === param){
                			isHaving = true;
                			break;
                		}
        			}else{  
                	}
        		}
        	}
	        var parentGroup = "forecast.denomination."+param;
	       	if (isHaving) {
//	       			PublicService.showDialogTimeout(param+"global.alreadyExisted");
//	       			parentGroup = "forecast.denomination.";
				}
	         	SysDictService.getDictListAsync(parentGroup)
	        	.then(function(response){
	        		if(response.statusCode === '0000'){
	        			console.log(response)
	        			angular.forEach(response.data,function(denomination){
	        				denomination['denomination'] = denomination['dictDesc'];
	        				denomination['count'] = 0;
	        			});
	        			//  页面没有币种面额等信息的时候使用，加上货币符号 和判断类型
	        			var denominationList=PublicService.typeAndDemination2(response.data,param)
	        			 $scope.formParam.termCashLimits.push({type:param,denominationList:denominationList})
	        			 if($scope.formParam.termCashLimits.length==3){
	        				 $scope.formParam.termCashLimits.splice(1,1)
	        			 }  
	        		};
	        });
		};
		
		$scope.addCashTime = function() {
			$scope.formParam.replenishTimes.splice(
					$scope.formParam.replenishTimes.length + 1, 0, {
						startTime : "",
						endTime : ""
					});
		};

		// 删除加钞时段
		$scope.delCashTime = function(index) {
			if ($scope.formParam.replenishTimes.length === 1) { // 最后一个不能删除
				PublicService.showDialogTimeout("termInfo.lastOne");
				return;
			}
			$scope.formParam.replenishTimes.splice(index, 1);
		};

		// 确定CheckBox组的值
		$scope.flagChecked = function(arr, flag) {
			angular.forEach(arr, function(i) {
				i.checked = flag;
			});
		};

		// 全选
		$scope.selectAll = function() {
			if ($scope.select_all) {
				$scope.select_workDay = false;
				$scope.flagChecked($scope.replenishRule, true);
			} else {
				$scope.flagChecked($scope.replenishRule, false);
			}
		};
		// 工作日
		$scope.selectWorkDay = function() {
			$scope.flagChecked($scope.replenishRule, false);
			if ($scope.select_workDay) {
				$scope.select_all = false;
				$scope.flagChecked($scope.workday, true);
			} else {
				$scope.flagChecked($scope.workday, false);
			}
		};

		// 单选
		$scope.selectOne = function() {
			var obj = PublicService.calcWorkDayOrAll($scope.replenishRule);
			$scope.select_workDay = obj.selectWorkDay;
			$scope.select_all = obj.selectAll;
		};
		
		// 固定加钞星期几全选（固定）
		$scope.selectAllFixed = function() {
			if ($scope.select_allFixed) {
				$scope.select_workDayFixed = false;
				$scope.flagChecked($scope.replenishRuleFixed, true);
			} else {
				$scope.flagChecked($scope.replenishRuleFixed, false);
			}
		};
		
		// 工作日（固定）
		$scope.selectWorkDayFixed = function() {
			$scope.flagChecked($scope.replenishRuleFixed, false);
			if ($scope.select_workDayFixed) {
				$scope.select_allFixed = false;
				$scope.flagChecked($scope.workdayFixed, true);
			} else {
				$scope.flagChecked($scope.workdayFixed, false);
			}
		};
		
		// 固定加钞星期几单选(固定)
		$scope.selectOneFixed = function() {
			var obj = PublicService.calcWorkDayOrAll($scope.replenishRuleFixed);
			$scope.select_workDayFixed = obj.selectWorkDayFixed;
			$scope.select_allFixed = obj.selectAllFixed;
		};
		
		

		$scope.save = function() {
			var flag = getWeek();
			getFixedAddDateList();   // 固定假钞日期
			getWeekFixed()
				// 没有选择星期几会提示
//			if (!flag) {
//				PublicService.showDialogTimeout("bankRule.selectOneCashTime");
//				$scope.isSaving = false;
//				return;
//			}
			$scope.isSaving = true;
			$scope.message = "global.saveSuccess";
			TermInfoService.saveBatchTermInfo($scope.formParam).then(
					function(response) {
						if (response.statusCode === '0000') {
							$scope.message = "global.saveSuccess"; 
							PublicService.showDialogTimeout($scope.message);
							$rootScope.$broadcast("termInfoEdit", 'holiday');
							$scope.clear(false);
						} else {
							$scope.message = response.msgCode;
							PublicService.openDialog($scope.message);
							$scope.isSaving = false;
						}
					});
		};

		// 获取加钞规则周期
		function getWeek() {
			var obj = PublicService.getCashDay($scope.replenishRule);
			$scope.formParam.replenishRule = obj.replenishRule;
			return obj.flag;
		}
		
		// 获取加钞规则周期（固定）
		function getWeekFixed() {
			var objFixed = PublicService.getCashDay($scope.replenishRuleFixed);
			$scope.formParam.replenishWeek = objFixed.replenishRule;
			return objFixed.flag;
		}
		
		$scope.clear = function(flag) {
			$uibModalInstance.close();
			$state.go('app.termInfo', {}, {
				reload : flag
			});
		};
		
		
		$scope.add = function() {
	      	 if ($scope.formParam.termCashLimits.length >= $scope.deTypeList.length) {
//	      		  	PublicService.showDialogTimeout("global.editDenomination");
					return;
			}
		    $scope.formParam.termCashLimits.splice($scope.formParam.termCashLimits.length + 1, 0,
		       {"denominationList":[],"type":""}
		    );   
		       
		};
		
		// 固定加钞日期
		function getFixedAddDateList(){
			$scope.formParam['fixedAddDateList'] = [];
            angular.forEach($scope.dateList, function (date) {
				if(date['check']){
					$scope.formParam['fixedAddDateList'].push(date['value']);
				}
            });
		};
	}
})();