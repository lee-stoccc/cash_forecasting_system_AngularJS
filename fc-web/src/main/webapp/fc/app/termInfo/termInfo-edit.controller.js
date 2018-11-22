(function() {
	'use strict';
	angular.module('devplatformApp').controller('TermInfoEditController',
			TermInfoEditController);
	TermInfoEditController.$inject = ['$rootScope', 'TermInfoService', '$scope',
			'$stateParams', '$state', 'ngDialog', 'PublicService','ngVerify',
			'$uibModalInstance', '$translate', 'SysDictService',
			'FcPublicService','BankRuleService'];
	function TermInfoEditController($rootScope,TermInfoService, $scope, $stateParams,
			$state, ngDialog, PublicService, ngVerify,$uibModalInstance, $translate,
			SysDictService, FcPublicService,BankRuleService) {
		$scope.dateList = PublicService.getDateList();

		$scope.replenishRule = [
		       {'value' : $translate.instant('bankRule.Monday'),"key" : 1}, 
		       {'value' : $translate.instant('bankRule.Tuesday'),"key" : 2},
		       {'value' : $translate.instant('bankRule.Wednesday'),"key" : 3},
		       {'value' : $translate.instant('bankRule.Thursday'),"key" : 4},
		       {'value' : $translate.instant('bankRule.Friday'),"key" : 5},
		       {'value' : $translate.instant('bankRule.Saturday'),"key" : 6}, 
		       {'value' : $translate.instant('bankRule.Sunday'),"key" : 7} ];
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
		$scope.formParam = {
			"id" : "",
			"termNo" : "",
			"cusTermNo" : "",
			"bankId" : "",
			"termType" : "",
			"region" : "",
			"cusRegionId" : "",
			"branchNo" : "",
			"address" : "",
			"commercial" : "",
			"status" : "",
			"forecastStatus" : "",
			"baseFirst" : "1",
			"holidayAdd" : "1",
			"replenishRule" : "1,2,3,4,5",
			"replenishRuleFixed" : "1,2,3,4,5",
			"unitCount" : 500,
			"lackRule" : "0",
			"day" : 1,
			"time" : 1,
			"indCashSecurity" : 0.99,
			"indReplenishCost":2,
//			"escort" : "",
			"fullWarn":80,
			"lackWarn":20,
			"lackJudge" : "0",
			"fullJudge" : "0",
			"termCashLimits" : '',   
			"replenishTimes" : [ {
				"startTime" : "08:00",
				"endTime" : "09:00"
			} ],
			"fixedAddDateList":[]
		};

		$scope.init = function() {
			// 获取语言种类,为了加载日期控件的国际化 
			$scope.language = $translate.storage().get('NG_TRANSLATE_LANG_KEY');
//			getDict('regionList', 'forecast.region'); // 行政区域
			getDict('termStatusList', 'forecast.termStatus'); // 设备状态
//			getDict('termTypeList', 'forecast.termType'); // 设备类型
//			getDict('branchList', 'forecast.branch'); // 网点名称
//			getDict('commercialList', 'forecast.commercial'); // 商圈
			getDict('forecastStatusList', 'forecast.forecastStatus'); // 预测状态
			getDict('escortList', 'forecast.escort'); // 押运公司
//			getDict('deTypeList', 'forecast.denomination');
			$scope.formParam.fillUp = "2";
//			getBankList();
//			getCusgionList();
			showData();
//			$scope.changeCurrency ("HKD","0") //币种自动加载
//			$scope.add()   //币种自动加载
//			$scope.changeCurrency ("CNY","1") //币种自动加载
			angular.element("#branch").select2({
				placeholder : $translate.instant("global.pleaseSelect"),
				allowClear : true,
				tags : false
			});
			console.log($scope)
		};
		
		
		// 计算满 /缺 钞预警张数
		$scope.calcultePencent = function() {
			if($scope.formParam.lackWarn >= 100){
				$scope.formParam.lackWarn = 99;
			}

			if($scope.formParam.lackWarn <= 0){
				$scope.formParam.lackWarn = 1;
			}
			
			if($scope.formParam.fullWarn >= 100){
				$scope.formParam.fullWarn = 99;
			}
			if($scope.formParam.fullWarn <= 0){
				$scope.formParam.fullWarn = 1;
			}
			calculteWarn($scope.formParam.lackWarn, "lackWarn");
			calculteWarn($scope.formParam.fullWarn, "fullWarn");
		};
		//保障率权重 成本系数
//		$scope.blurformParam = function(){
////			if($scope.formParam.indCashSecurity < 0.9 || $scope.formParam.indCashSecurity > 0.999){
////				$scope.formParam.indCashSecurity = null;
////			}
//			if($scope.formParam.indReplenishCost < 1 || $scope.formParam.indReplenishCost > 3){
//				$scope.formParam.indReplenishCost = null;
//			}
//		};
		
		  // 可以填写的选择下拉框
        $scope.select=function(id){
        	angular.element(id).select2({		//select2-search__field
        		placeholder: $translate.instant("global.pleaseSelect"),
        		allowClear: true,
        		tags:true
        	})
        }
		
		// 选择币种
		$scope.changeCurrency = function(param, index) {			
        	var isHaving = true;
        	//判断选择的币种是否已经存在
//        	if($scope.formParam.termCashLimits.length > 1){
//        		for(var position = 0;position < $scope.formParam.termCashLimits.length;position++){
//        			if(index != position){
//        				var stockCeiling = $scope.formParam.termCashLimits[position];
//                		if(stockCeiling['type'] === param){
//                			isHaving = true;
//                			break;
//                		}
//        			}else{
//                	}
//        		}
//        	}
	        var parentGroup = "forecast.denomination."+param;
	         	SysDictService.getDictListAsync(parentGroup)
	        	.then(function(response){
	        		if(response.statusCode === '0000'){
//	        			angular.forEach(response.data,function(denomination){
//	        				denomination['denomination'] = denomination['dictDesc'];
//	        				denomination['count'] = 0;
//	        			});
	        			
	        			//  页面没有币种面额等信息的时候使用，加上货币符号 和判断类型
	        			var denominationList=PublicService.typeAndDemination2(response.data,param)
	        			$scope.formParam.termCashLimits.push({type:param,denominationList:denominationList})
	        			
	        			// 去除数组第一项
	        			if($scope.formParam.termCashLimits.length==3){
	        				$scope.formParam.termCashLimits.shift()
	        			}
	        		};
	        		
	        });
		};
   
		$scope.add = function() {
//	      	 if ($scope.formParam.termCashLimits.length >= $scope.deTypeList.length) {
////	      		  	PublicService.showDialogTimeout("global.editDenomination");
//					return;
//			}
		    $scope.formParam.termCashLimits.splice($scope.formParam.termCashLimits.length + 1, 0,
		       {"denominationList":[],"type":""}
		    );   
		       
		};

		$scope.del = function($index) {
	    	 if($scope.formParam.termCashLimits.length===1){ 
	    		 //最后一个不能删除
	    		PublicService.showDialogTimeout("global.del");
	    		 return;
	    	 }
	         $scope.formParam.termCashLimits.splice($index, 1); 
		};

		// 计算百分比和数字
		function calculteWarn(param, juge) {
			if (param) {
				angular.forEach($scope.formParam.termCashLimits,function(termCashLimit){
					angular.forEach(termCashLimit.denominationList,function(denomination){
						if(denomination['minCeilingCount'] > denomination['fixCount']){
							denomination['minCeilingCount'] = denomination['fixCount']
						}
						denomination[juge] = parseInt(denomination['fixCount'] * parseFloat(param / 100, 10));
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
		
		// 
		
		// 选择设备
		$scope.selectTermType = function() {
			var bankId = angular.element("#bankId").val();
			if (bankId) {
				var obj = {
					"id" : bankId
				};
				$scope.bankSelectItem(obj);
			}
		};

		// 选择一个银行
		$scope.changeBank = function() {
			// 先将checkBox置空
			$scope.select_all = false;
			$scope.select_workDay = false;
			$scope.select_allFixed = false;
			$scope.select_workDayFixed = false;
			$scope.flagChecked($scope.replenishRule, false);
			BankRuleService.getBankRule($scope.formParam.bankId).then(function(response) {
				if (response.statusCode === "0000") {
					//坑爹的银行规则   覆盖参数
					$scope.formParam.baseFirst = response.data.baseFirst;
//					$scope.formParam.indCashSecurity = response.data.indCashSecurity;
					$scope.formParam.indCashSecurity = 1;
					$scope.formParam.indReplenishCost = response.data.indReplenishCost;
					$scope.formParam.replenishRule = response.data.replenishRule;
					$scope.formParam.holidayAdd = response.data.holidayAdd;
					$scope.formParam.day = response.data.day;
					$scope.formParam.time = response.data.time;
					$scope.formParam.unitCount = response.data.unitCount;
					$scope.formParam.lackRule = response.data.lackRule;
					
					setData(response.data,['camFullWarn','camLackWarn','camFullJudge',
					   'camLackJudge','atmFullWarn','atmLackWarn','atmFullJudge',
					   'atmLackJudge','crsFullWarn','crsLackWarn','crsFullJudge',
					   'crsLackJudge','imFullWarn','imLackWarn','imFullJudge','imLackJudge']);				
					$scope.selectTermType();
					handerCallback();
				}
			});
		};
		
		function setData(data,params){	//给参数赋值
			angular.forEach(params,function(param){
				$scope.formParam[param] = data[param];
			});
		};
		//选择设备类型时重新给参数赋值
		function revierData(fullWarn,lackWarn,lackJudge,fullJudge){
			$scope.formParam.fullWarn = $scope.formParam[fullWarn];
			$scope.formParam.lackWarn = $scope.formParam[lackWarn];
			$scope.formParam.lackJudge = $scope.formParam[lackJudge];
			$scope.formParam.fullJudge = $scope.formParam[fullJudge];
		};
		
		$scope.selectTermType =function(){
			if($scope.formParam.termType && $scope.formParam.bankId){
				switch($scope.formParam.termType){
					case "1":
						revierData('camFullWarn','camLackWarn','camLackJudge','camFullJudge');
						break;
					case "2":
						revierData('atmFullWarn','atmLackWarn','atmLackJudge','atmFullJudge');
						break;
					case "3":
						revierData('crsFullWarn','crsLackWarn','crsLackJudge','crsFullJudge');
						break;
					default:
						revierData('imFullWarn','imLackWarn','imLackJudge','imFullJudge');
						break;
				}
			}else{
				$scope.formParam.fullWarn = null;
				$scope.formParam.lackWarn = null;
				$scope.formParam.lackJudge = null;
				$scope.formParam.fullJudge = null;
			}
		};

		// 设备编号和自定义编号保持一致
		$scope.changeNo = function(no) {
			$scope.formParam.cusTermNo = no;
		};
		// 获取银行
		function getBankList() {
			FcPublicService.getBanksList().then(function(response) {
				if (response.statusCode === "0000") {
					$scope.bankList = response.data;
				}
			});
		}

		// 获取区域
		function getCusgionList() {
			FcPublicService.getCusgionList().then(function(response) {
				if (response.statusCode === "0000") {
					$scope.cusgionList = response.data;
				}
			});
		}

		// 回显数据
		function showData() {
			if ($stateParams.id) {
				TermInfoService.getTermInfo($stateParams.id).then(function(response) {
					if (response.statusCode === "0000") {
							$scope.formParam = response.data;
							$scope.formParam.replenishRuleFixed= response.data.replenishWeek // 转换与后端命名不一致的字段名字（固定加钞星期几）
							handerCallback();
							$scope.calcultePencent()
						}
					});
			}
//			else {    // 不知道有森马用
//				$scope.formParam.termCashLimits = [ {
//					"termCashLimits" : [],
//					"type" : ""
//				} ];
//			}
		}

		// 处理回显的面额张数,满/缺钞的预警%
		function handerCallback() {
        	if($scope.formParam.termCashLimits.length == 0){
        		$scope.formParam.termCashLimits = [{ type:"",denominationList:[]}];
        	}
        	// 处理回显的加钞时段
			if($scope.formParam.replenishTimes.length === 0){
				$scope.formParam.replenishTimes = [
				     {
				        startTime : "",
				        endTime : ""   
				      }];
			}
			//一周加钞选择设置
        	var repRuleArr = [];
	        if($scope.formParam['replenishRule']){
	            angular.forEach($scope.replenishRule, function (Rule) {
	     	           if($scope.formParam['replenishRule'].indexOf(Rule['key'] + '') >= 0 ){
	        	        	   repRuleArr.push(Rule);
	        	       }
	    	    });
        	}
	     // 自动触发工作日或全星期的选项
	        var obj = PublicService.showData($scope.formParam.replenishRule,$scope.replenishRule);
        	 $scope.select_all = obj.selectAll;
        	 $scope.select_workDay = obj.selectWorkDay;
	        
	      //一周加钞选择设置（固定）
        	var repRuleArrFixed = [];
	        if($scope.formParam['replenishRuleFixed']){
	            angular.forEach($scope.replenishRuleFixed, function (Rule) {
	     	           if($scope.formParam['replenishRuleFixed'].indexOf(Rule['key'] + '') >= 0 ){
	     	        	  repRuleArrFixed.push(Rule);
	        	       }
	    	    });
        	}
	     // 自动触发工作日或全星期的选项(固定)
	        var obj = PublicService.showData($scope.formParam.replenishRuleFixed,$scope.replenishRuleFixed);
        	 $scope.select_allFixed = obj.selectAllFixed;
        	 $scope.select_workDayFixed = obj.selectWorkDayFixed;

        	if(repRuleArr.length > 0){
        		$scope.flagChecked(repRuleArr,true);
        	}
        	
        	if($scope.formParam['fixedAddDateList']){
    			angular.forEach($scope.dateList,function(date){
	     	       if($scope.formParam['fixedAddDateList'].indexOf(date['value']) >= 0 ){
	     	    	  date['check'] = true;
        	       }
    			});
        	}
        	
        	// 自动触发工作日或全星期的选项（固定）
	        var objFixed = PublicService.showData($scope.formParam.replenishRuleFixed,$scope.replenishRuleFixed);
        	 $scope.select_allFixed = objFixed.selectAllFixed;
        	 $scope.select_workDayFixed = objFixed.selectWorkDayFixed;

        	if(repRuleArrFixed.length > 0){
        		$scope.flagChecked(repRuleArrFixed,true);
        	}
        	
        	if($scope.formParam.termCashLimits[0]['denominationList'].length==0 || $scope.formParam.termCashLimits[1]['denominationList'].length==0){
        		// 如果没有面额币种等信息
        		$scope.changeCurrency ("HKD","0") //币种自动加载   
//				$scope.add()   //币种自动加载
				$scope.changeCurrency ("CNY","1") //币种自动加载     
        	} else{
        		// 如果有面额币种等信息，则加上货币符号 和判断类型
//    			var objRMB = $scope.formParam.termCashLimits[0];  // 从网络请求回来的列表中提取rmb对象
//    			var objHKD = $scope.formParam.termCashLimits[1];  // gb
        		// 根据类型赋值对象
    			var array=$scope.formParam.termCashLimits
    			for(var i=0;i<array.length;i++){
    				if(array[i]['type']=='CNY'){
    					var objRMB = $scope.formParam.termCashLimits[i]; 
    				}else{
    					var objHKD = $scope.formParam.termCashLimits[i];  
    				}
    			}
    			
    			$scope.formParam.termCashLimits[1]=PublicService.typeAndDemination(objRMB)  // 对象
            	$scope.formParam.termCashLimits[0]=PublicService.typeAndDemination(objHKD)
            	
        	}
		}

		$scope.addCashTime = function() {
			$scope.formParam.replenishTimes.splice($scope.formParam.replenishTimes.length + 1, 0, {
				"startTime":"",
				"endTime":""
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
		
		// 固定加钞星期几全选（固定）
		$scope.selectAllFixed = function() {
			if ($scope.select_allFixed) {
				$scope.select_workDayFixed = false;
				$scope.flagChecked($scope.replenishRuleFixed, true);
			} else {
				$scope.flagChecked($scope.replenishRuleFixed, false);
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
		
		// 单选
		$scope.selectOne = function() {
			var obj = PublicService.calcWorkDayOrAll($scope.replenishRule);
			$scope.select_workDay = obj.selectWorkDay;
			$scope.select_all = obj.selectAll;
		};
		
		// 固定加钞星期几单选(固定)
		$scope.selectOneFixed = function() {
			var obj = PublicService.calcWorkDayOrAll($scope.replenishRuleFixed);
			$scope.select_workDayFixed = obj.selectWorkDayFixed;
			$scope.select_allFixed = obj.selectAllFixed;
		};
		// 保存提交
		$scope.save = function() {
			getFixedAddDateList();
			var flag1 = getWeek();
			getWeekFixed()
			// 没有选择星期几会提示
//			if (!flag1) {
//				PublicService.showDialogTimeout("bankRule.selectOneCashTime");
//				$scope.isSaving = true;
//				return;
//			}
			$scope.isSaving = true;
			TermInfoService.saveTermInfo($scope.formParam).then(function(response) {
				if (response.statusCode === '0000') {
					$scope.message = "global.saveSuccess"; 
					PublicService.showDialogTimeout($scope.message);
					$rootScope.$broadcast("termInfoEdit", 'holiday');
					$scope.clear(false);
				} else {
					$scope.message = response.msgCode;
					PublicService.openDialog($scope.message);
					$scope.isSaving = false;
					$scope.clear(true);
				}
			});
		};
		
		function getFixedAddDateList(){
			$scope.formParam['fixedAddDateList'] = [];
            angular.forEach($scope.dateList, function (date) {
				if(date['check']){
					$scope.formParam['fixedAddDateList'].push(date['value']);
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
	}
})();