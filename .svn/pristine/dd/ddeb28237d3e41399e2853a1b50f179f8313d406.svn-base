(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('BankRuleEditController', BankRuleEditController);
    BankRuleEditController.$inject = ['$rootScope','FcPublicService','BankRuleService', '$scope', '$stateParams','$state', 'ngDialog', 'PublicService','$uibModalInstance','ngVerify','$translate','SysDictService'];
    function BankRuleEditController($rootScope,FcPublicService,BankRuleService, $scope, $stateParams, $state, ngDialog, PublicService,$uibModalInstance,ngVerify,$translate,SysDictService) {
    	$scope.dateList = PublicService.getDateList();
    	$scope.replenishRule = [
            {'value': $translate.instant('bankRule.Monday'),"key":1},
            {'value': $translate.instant('bankRule.Tuesday'),"key":2},
            {'value': $translate.instant('bankRule.Wednesday'),"key":3},
            {'value': $translate.instant('bankRule.Thursday'),"key":4},
            {'value': $translate.instant('bankRule.Friday'),"key":5},
            {'value': $translate.instant('bankRule.Saturday'),"key":6},
            {'value': $translate.instant('bankRule.Sunday'),"key":7}
           ];
        $scope.channelList=[{"channelId":1,"shortName":0.50},
                            {"channelId":2,"shortName":0.55},
                            {"channelId":3,"shortName":0.60},
                            {"channelId":4,"shortName":0.65},
                            {"channelId":5,"shortName":0.70}
                            ];
        $scope.workday = $scope.replenishRule.slice(0,5); //工作日
        $scope.amount = 0;
        $scope.count = []; //库存张数
        $scope.formParam = {
			"id" : $stateParams.id,
			"bankName" : "",
		    "holidayAdd": "",
		    "replenishRule": "",
		    "unitCount": "",
		    "day": "",
		    "time": "",
		    "indCashSecurity": 0.99, 
		    "indReplenishCost":"",  
		    "indCashReturn": "",
		    "camFullWarn": "",
		    "atmLackWarn": "",
		    "crsLackWarn": "",
		    "crsFullWarn": "",
		    "imLackWarn": "",
		    "imFullWarn": "",  
		    "camFullJudge": "",
		    "atmLackJudge": "",
		    "crsLackJudge": "",
		    "crsFullJudge": "",
		    "imLackJudge": "",
		    "imFullJudge": "",
		    "volatilityDatum": "",
		    "multipleReplenish": "",
		    "fullImporttance":"",
			"stockCeilings" : [{ type:"",denominationList:[]}],
			"parentId" : "",
			"level" : "",
			"fixedAddDateList":[]
        };   
       $scope.init = function(){
//        	getFixedAddDateList()
        	getDict('deTypeList', 'forecast.denomination'); 
        	
        	//如果ID不为空  回显数据
   		    if ($stateParams.id) {
  	            getBankRuleData($stateParams.id);
  			    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
  			    	$scope['bankEdit'].setValue($stateParams.id);//回显tree CheckBox
  			    });
  	        }else{
  	        	$scope.formParam.stockCeilings = [{ type:"",denominationList:[]}];
  	        	//$scope.select_all = true;//初始默认全选
  	        	//$scope.selectAll(); //初始默认执行全选方法
  	        }
   		    $scope.changeCurrency ("HKD","0") //币种自动加载
			$scope.add()   //币种自动加载
			$scope.changeCurrency ("CNY","1") //币种自动加载
			getBankList();
        };   
        
  		$scope.blurformParam = function(){
//			if($scope.formParam.indCashSecurity < 0.9 || $scope.formParam.indCashSecurity > 0.999){
//				$scope.formParam.indCashSecurity = null;
//			}
			if($scope.formParam.indReplenishCost < 1 || $scope.formParam.indReplenishCost > 3){
				$scope.formParam.indReplenishCost = null;
			}
		};
         
 	    // 数据字典加载
         function getDict(param, parentGroup){
         	SysDictService.getDictListAsync(parentGroup)
         	.then(function(response){
         		if(response.statusCode === '0000'){
         			$scope[param] = response.data;
         		}
         	});
         }
         //选择币种
    	 $scope.changeCurrency = function(param,index) {
    		$scope.getDenominationList(param,index);
        };
        
        $scope.getDenominationList = function(param,index){
        	var isHaving = false;
        	//判断选择的币种是否已经存在
        	if($scope.formParam.stockCeilings.length > 1){
        		for(var position = 0;position < $scope.formParam.stockCeilings.length;position++){
        			if(index != position){
        				var stockCeiling = $scope.formParam.stockCeilings[position];
                		if(stockCeiling['type'] === param){
                			isHaving = true;
                			break;
                		}
                		 $scope.formParam.stockCeilings[position]['type']='HKD'
             			}else{
                     		$scope.formParam.stockCeilings[position]['type']='CNY'
                     	
        			}
        		}
        	}
	        var parentGroup = "forecast.denomination."+param+"";
	       	if (isHaving) {
	       			PublicService.showDialogTimeout(param+"global.alreadyExisted");
	       			parentGroup = "forecast.denomination.";
				}
	         	SysDictService.getDictListAsync(parentGroup)
	        	.then(function(response){
	        		if(response.statusCode === '0000'){
	        			angular.forEach(response.data,function(denomination){
	        				denomination['denomination'] = denomination['dictDesc'];
	        				denomination['count'] = 0;
	        			});
	        			$scope.formParam.stockCeilings[index]['denominationList'] =  response.data;
	        			// 添加货币符号
	        			// 添加货币符号
	        			if($scope.formParam.stockCeilings[index]['denominationList'].length==1){
	        				$scope.formParam.stockCeilings[index]['denominationList'][0]['dictDescs']='￥:'+$scope.formParam.stockCeilings[index]['denominationList'][0]['dictDesc']
	        			}else{
	        				for(var i=0;i<$scope.formParam.stockCeilings[index]['denominationList'].length;i++){
	        					$scope.formParam.stockCeilings[index]['denominationList'][i]['dictDescs']='HK$:'+$scope.formParam.stockCeilings[index]['denominationList'][i]['dictDesc']
	        				}	   
	        			};	        			
	        		};
	        });
        };
        //添加一个比币种
        $scope.add = function() { 
      	  if ($scope.formParam.stockCeilings.length >= $scope.deTypeList.length) {
      		  	PublicService.showDialogTimeout("global.editDenomination");
				return;
			}
	        $scope.formParam.stockCeilings.splice($scope.formParam.stockCeilings.length+1, 0,
	        		  {"denominationList":[],"type":""});        
	      };  
	    //删除一个比币种
	     $scope.del = function($index) {
	    	 if($scope.formParam.stockCeilings.length===1){ 
	    		 //最后一个不能删除
	    		PublicService.showDialogTimeout("global.del");
	    		 return;
	    	 }
	         $scope.formParam.stockCeilings.splice($index, 1);  
	     };
	     
         $scope.changeMultipleReplenish =function(){
        	 PublicService.showDialogTimeout("1");
         };
         $scope.changeVolatilityDatum =function(){
        	 PublicService.showDialogTimeout("2");  
         };  
         $scope.changeFullImporttance =function(){
        	 PublicService.showDialogTimeout("1");
         };  
     	//计算库存总金额
     	 $scope.calculteAmount = function(){
     		$scope.amount = 0;
         	angular.forEach($scope.formParam.stockCeilings,function(stockCeiling){
         		angular.forEach(stockCeiling.denominationList,function(denomination){
         			$scope.amount += parseFloat(denomination['denomination'], 10) * denomination['count'];
         		});
			});
     	};
    

        //获取银行树
        function getBankList(){
        	$scope.showCheckBox = true;
        	FcPublicService.getBankTreeList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
      
        $scope.bankEditSelectCheck = function(obj){
        };
       //点击tree的银行名称
        $scope.bankEditSelectItem = function(obj){
        	 $scope.select_all = false;
        	 $scope.select_workDay = false;
        	 $scope.flagChecked($scope.replenishRule,false);
        	 getBankRuleData(obj.id);
        };
      
        function getBankRuleData(id){
        	BankRuleService.getBankRule(id).then(function (response) {
				if(response.statusCode === "0000"){
					$scope.formParam = response.data;
					var stockCeilingsArr=response.data.stockCeilings
					// 给货币添加货币符号
					for(var i=0;i<stockCeilingsArr.length;i++){
						if($scope.formParam.stockCeilings[i]['denominationList'].length==1){
	        				$scope.formParam.stockCeilings[i]['denominationList'][0]['dictDescs']='￥:'+$scope.formParam.stockCeilings[i]['denominationList'][0]['denomination']
	        			}else{
	        				for(var j=0;j<$scope.formParam.stockCeilings[i]['denominationList'].length;j++){
	        					$scope.formParam.stockCeilings[i]['denominationList'][j]['dictDescs']='HK$:'+$scope.formParam.stockCeilings[i]['denominationList'][j]['denomination']
	        				}
	        			}
					}
					$scope.formParam.stockCeilings.reverse()
					handerCallback($scope.formParam);
				}
            });
        }
        
        //处理回显数据
        function handerCallback(data){
        	//回显加钞规则周期，将一个数组对象传到service处理，不用return也能在controller得到处理后的数组。
//        	//处理面额和张数
        	if($scope.formParam.stockCeilings.length == 0){
        		$scope.formParam.stockCeilings = [{ type:"",denominationList:[]}];
        	}
        	var repRuleArr = [];
        	angular.forEach($scope.replenishRule, function (Rule) {
        		if(data['replenishRule']){
        	           if(data['replenishRule'].indexOf(Rule['key'] + '') >= 0 ){
           	        	   repRuleArr.push(Rule);
           	           }
        		}
       	    });    
        	// 自动触发工作日或全星期的选项
        	 var obj = PublicService.showData(data.replenishRule,$scope.replenishRule);
         	 $scope.select_all = obj.selectAll;
         	 $scope.select_workDay = obj.selectWorkDay;
        	if(repRuleArr.length > 0){
        		$scope.flagChecked(repRuleArr,true);
        	}
        	$scope.calculteAmount();
        	// 固定加钞日期
        	$scope.formParam['fixedAddDateList']=[]    // 把返还的字符串转换为数组
        	$scope.formParam['fixedAddDateList']=$scope.formParam['fixedAddDate'].split(',')
        	if($scope.formParam['fixedAddDateList']){
    			angular.forEach($scope.dateList,function(date){
	     	       if($scope.formParam['fixedAddDateList'].indexOf(date['value']) >= 0 ){
	     	    	  date['check'] = true;
        	       }
    			});
        	}
        }
        
       
        //根据数组来确定CheckBox的显示
        $scope.flagChecked = function(arr,flag){
       	   angular.forEach(arr, function (i) {
   	           i.checked = flag;
   	       });
          };
          
         //全选
         $scope.selectAll = function () {
             if($scope.select_all) {
          	    $scope.select_workDay = false;
                $scope.flagChecked($scope.replenishRule,true);
             }else {
          	   $scope.flagChecked($scope.replenishRule,false);
             }
         };
         //工作日
         $scope.selectWorkDay = function () {
      	   //选择工作日前先去掉所有的选中
      	   $scope.flagChecked($scope.replenishRule,false);
         	if($scope.select_workDay) {
         		$scope.select_all = false;
         		$scope.flagChecked($scope.workday,true);
         	}else {
         		$scope.flagChecked($scope.workday,false);
         	}
         };
         
         //加钞规则单选
         $scope.selectOne = function () {
        	 var obj = PublicService.calcWorkDayOrAll($scope.replenishRule);
        	 $scope.select_workDay = obj.selectWorkDay;
        	 $scope.select_all = obj.selectAll;
         };
         
         //提交数据
        $scope.save = function() {
        	var data=$scope.formParam
        	 getFixedAddDateList()
        	 var flag1 = getWeek();
        	 var flag2 = getBankCheckBox();
        	 if(!flag1){
        		 PublicService.showDialogTimeout("bankRule.selectOneCashTime");
        		 return;
        	 } 
        	 if(!flag2){
        		 PublicService.showDialogTimeout("bankRule.selectOneBank");
        		 return;
        	 }
        	$scope.isSaving = true;
            BankRuleService.saveBankRule($scope.formParam).then(function (response) {
                if (response.statusCode === '0000') {
                	 $state.go('app.bankRule');
                	  var message = "global.saveSuccess";
                	  PublicService.showDialogTimeout(message);
                	  $rootScope.$broadcast("bankRuleEdit",'holiday');
//	           		  if ($stateParams.id && response.msgCode=='1') { //编辑
////		           		  message = "bankRule.showMsg";
//		           		  PublicService.openDialog(message);
////		                  PublicService.showConfirmDialog(message,'toTermInfoPage',$scope,$scope.formParam.id);
//	           		  }else{
//	           			  PublicService.openDialog(message);
//	           		  }
	           		  	$scope.clear($scope.formParam,false);	
                } else {
                    $scope.message = response.msgCode;
                    PublicService.openDialog($scope.message);
                    $scope.isSaving = false;
                }
            });
        };
		// 获取固定加钞日期
    	function getFixedAddDateList(){
			$scope.formParam['fixedAddDateList'] = [];
            angular.forEach($scope.dateList, function (date) {
				if(date['check']){
					$scope.formParam['fixedAddDateList'].push(date['value']);
				}
            });
		};
		
        $scope.toTermInfoPage = function(bankId){
        	var item = {
    	    		url:'app.termInfo',
    	    		langSwitch:'menu.termInfo'
    	    	};
    	    	$scope.$parent.$parent.addContent(item);
//        	$state.go("app.termInfo",{bankId:bankId});
		};
        
    	//获取加钞规则周期
    	function getWeek(){
    		var obj = PublicService.getCashDay($scope.replenishRule);
    		$scope.formParam.replenishRule = obj.replenishRule;
    		return obj.flag;
    	}
    	
    	//获取银行
        function getBankCheckBox() {
        	var flag = true;
        	var str = $scope.bankNoStr;
            if (PublicService.isEmptyObject(str)) {
                flag = false;
   			}else{
   				$scope.formParam.id = str.substring(0,str.length-1);
   			}
            return flag;
        }
        
        $scope.clear = function(params,flag) {
        	$uibModalInstance.close();
        	$state.go('app.bankRule',params,{reload:flag});
        };
        function changeHeigh(){
        	document.getElementsByClassName('modal-content')[0].style.marginTop="10px";
        }
    }
})();