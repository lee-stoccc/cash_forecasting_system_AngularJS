(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('TermInfoDetailController', TermInfoDetailController);
    TermInfoDetailController.$inject = ['FcPublicService','TermInfoService', '$scope', '$stateParams','$state', 'ngDialog', 'PublicService','$uibModalInstance','$translate','SysDictService','BankRuleService'];
    function TermInfoDetailController(FcPublicService,TermInfoService, $scope, $stateParams, $state, ngDialog, PublicService,$uibModalInstance,$translate,SysDictService,BankRuleService) {
    	
    	$scope.replenishRule = [
    	                        {'value': $translate.instant('bankRule.Monday'),"key":1},
    	                        {'value': $translate.instant('bankRule.Tuesday'),"key":2 },
    	                        {'value': $translate.instant('bankRule.Wednesday'),"key":3},
    	                        {'value': $translate.instant('bankRule.Thursday'),"key":4},
    	                        {'value': $translate.instant('bankRule.Friday'),"key":5},
    	                        {'value': $translate.instant('bankRule.Saturday'),"key":6},
    	                        {'value': $translate.instant('bankRule.Sunday'),"key":7}
    	                       ];
    	$scope.workday = $scope.replenishRule.slice(0,5); //工作日
    	$scope.formParam = {};
    	                   
    	$scope.init = function(){
    		getDict('termTypeList', 'forecast.termType'); // 设备类型
    		getDict('regionList', 'forecast.region'); // 行政区域
    		getDict('branchList', 'forecast.branch'); // 网点名称
    		getDict('commercialList', 'forecast.commercial'); // 商圈
    		getDict('termStatusList', 'forecast.termStatus'); // 设备状态
    		getDict('termTypeList', 'forecast.termType'); // 设备类型
			getDict('forecastStatusList', 'forecast.forecastStatus'); // 预测状态
			getDict('escortList', 'forecast.escort'); // 押运公司
    		getCusgionList();
    		getBankList();
    	    showData();
    	    $scope.changeCurrency ("HKD","0") //币种自动加载
			$scope.add()   //币种自动加载
			$scope.changeCurrency ("CNY","1") //币种自动加载
    	};
    	//获取银行
        function getBankList(){
        	$scope.showCheckBox = true;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
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
		
		function getDict(param, parentGroup) {
			SysDictService.getDictListAsync(parentGroup).then(
					function(response) {
						if (response.statusCode === '0000') {
							$scope[param] = response.data;
						}
			});
		}
    	
        //回显数据
        function showData(){
	      	if ($stateParams.id) {
	            TermInfoService.getTermInfo($stateParams.id).then(function (response) {
					if(response.statusCode === "0000"){
						 $scope.formParam = response.data;
			        	 handleCallback();
					}
	            });
	        }
	      }
    	                   
    	function handleCallback(){
        	if($scope.formParam.termCashLimits.length == 0){
        		$scope.formParam.termCashLimits = [{ type:"",denominationList:[]}];
        	}
        	var repRuleArr = [];
        	angular.forEach($scope.replenishRule, function (Rule) {
        		if($scope.formParam['replenishRule']){
        	           if($scope.formParam['replenishRule'].indexOf(Rule['key'] + '') >= 0 ){
           	        	   repRuleArr.push(Rule);
           	           }
        		}
       	    });    
        	 
        	// 自动触发工作日或全星期的选项
        	var obj = PublicService.showData($scope.formParam.replenishRule,$scope.replenishRule);
        	 $scope.select_all = obj.selectAll;
        	 $scope.select_workDay = obj.selectWorkDay;
//        	 
        	if(repRuleArr.length > 0){
        		$scope.flagChecked(repRuleArr,true);
        	}
			calculteWarn($scope.formParam.lackWarn, "lackWarn");
			calculteWarn($scope.formParam.fullWarn, "fullWarn");
			// 给货币添加货币符号
			var stockCeilingsArr=$scope.formParam.termCashLimits
			for(var i=0;i<stockCeilingsArr.length;i++){
				// 若果加钞计划数据，这当作新增加钞规则处理
				if($scope.formParam.termCashLimits[i]['denominationList'].length==0){
					$scope.changeCurrency ("HKD","0") //币种自动加载
					$scope.add()   //币种自动加载
					$scope.changeCurrency ("CNY","1") //币种自动加载
				}
				if($scope.formParam.termCashLimits[i]['denominationList'].length==1){
    				$scope.formParam.termCashLimits[i]['denominationList'][0]['dictDescs']='￥:'+$scope.formParam.termCashLimits[i]['denominationList'][0]['denomination']
    			}else{
    				for(var j=0;j<$scope.formParam.termCashLimits[i]['denominationList'].length;j++){
    					$scope.formParam.termCashLimits[i]['denominationList'][j]['dictDescs']='HK$:'+$scope.formParam.termCashLimits[i]['denominationList'][j]['denomination']
    				}
    			}
			}
			
    	}
    	
		$scope.add = function() {
		    $scope.formParam.termCashLimits.splice($scope.formParam.termCashLimits.length + 1, 0,
		       {"denominationList":[],"type":""}
		    );   
		       
		};
    	
    	// 选择币种
		$scope.changeCurrency = function(param, index) {			
	        var parentGroup = "forecast.denomination."+param;
	         	SysDictService.getDictListAsync(parentGroup)
	        	.then(function(response){
	        		if(response.statusCode === '0000'){
	        			console.log(response)
	        			angular.forEach(response.data,function(denomination){
	        				denomination['denomination'] = denomination['dictDesc'];
	        				denomination['count'] = 0;
	        			});
	        			$scope.formParam.termCashLimits[index]['denominationList'] =  response.data;
	        			// 添加货币符号
	        			if($scope.formParam.termCashLimits[index]['denominationList'].length==1){
	        				 $scope.formParam.termCashLimits[index]['type']='CNY'
	        				$scope.formParam.termCashLimits[index]['denominationList'][0]['dictDescs']='￥:'+$scope.formParam.termCashLimits[index]['denominationList'][0]['dictDesc']
	        			}else{
	        				$scope.formParam.termCashLimits[index]['type']='HKD'
	        				for(var i=0;i<$scope.formParam.termCashLimits[index]['denominationList'].length;i++){
	        					$scope.formParam.termCashLimits[index]['denominationList'][i]['dictDescs']='HK$:'+$scope.formParam.termCashLimits[index]['denominationList'][i]['dictDesc']
	        					
	        				}	   
	        			};
	        		};
	        });
		};
    	
		function calculteWarn(param, juge) {
			if (param) {
				angular.forEach($scope.formParam.termCashLimits,function(termCashLimit){
					angular.forEach(termCashLimit.denominationList,function(denomination){
						if(denomination['minCeilingCount'] > denomination['ceilingCount']){
							denomination['minCeilingCount'] = denomination['ceilingCount']
						}
						denomination[juge] = parseInt(denomination['ceilingCount'] * parseFloat(param / 100, 10));
					});
				});
			}
		}
    	
       	//确定CheckBox组的值
        $scope.flagChecked = function(arr,flag){
       	   angular.forEach(arr, function (i) {
   	           i.checked = flag;
   	       });
          };
          
	   $scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.termInfo',{},{reload:flag});
	    };                 
    }
  })();