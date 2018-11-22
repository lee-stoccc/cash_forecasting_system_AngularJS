(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('BankRuleDetailController', BankRuleDetailController);
    BankRuleDetailController.$inject = ['BankRuleService','FcPublicService', '$scope', '$stateParams','$state', 'ngDialog','PublicService','$uibModalInstance','$translate','SysDictService'];
    function BankRuleDetailController(BankRuleService,FcPublicService, $scope, $stateParams, $state, ngDialog, PublicService,$uibModalInstance,$translate,SysDictService) {
    	 $scope.replenishRule = [
             {'value': $translate.instant('bankRule.Monday'),"key":1},
             {'value': $translate.instant('bankRule.Tuesday'),"key":2},
             {'value': $translate.instant('bankRule.Wednesday'),"key":3},
             {'value': $translate.instant('bankRule.Thursday'),"key":4},
             {'value': $translate.instant('bankRule.Friday'),"key":5},
             {'value': $translate.instant('bankRule.Saturday'),"key":6},
             {'value': $translate.instant('bankRule.Sunday'),"key":7}
            ];
         $scope.workday = $scope.replenishRule.slice(0,5); //工作日
         $scope.count = []; //库存张数
         $scope.amount = 0;
         $scope.formParam ={};   
         
         $scope.init = function(){
         	getDict('denominationList', 'system.denomination');
         	getBankList();
 		  if ($stateParams.id) {
 	            getBankRuleData($stateParams.id);
 			    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
 			    	$scope['bankDetail'].setValue($stateParams.id);//回显tree CheckBox
 			    });
 	        }
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
         
         //获取银行
         function getBankList(){
        	$scope.showCheckBox = false;
         	FcPublicService.getBankTreeList().then(function (response){
         		if (response.statusCode==="0000") {
         			  $scope.bankList = response.data;
 				}
         	});
         }
       
      	//确定CheckBox组的值
         $scope.flagChecked = function(arr,flag){
        	   angular.forEach(arr, function (i) {
    	           i.checked = flag;
    	       });
           };
         
         $scope.bankDetailSelectCheck = function(obj){};
        //点击tree的银行名称
         $scope.bankDetailSelectItem = function(obj){
         	//先将checkBox置空
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
 						for(var j=0;j<stockCeilingsArr[i]['denominationList'].length;j++){
 							$scope.formParam.stockCeilings[i]['denominationList'][j]['dictDescs']=stockCeilingsArr[i]['type']+":"+$scope.formParam.stockCeilings[i]['denominationList'][j]['denomination']
 						}
 					}
 					
 					// 给货币添加货币符号,根据货币类型转换货币符号
//					for(var i=0;i<stockCeilingsArr.length;i++){
//						if($scope.formParam.stockCeilings[i]['type']=="CNY"){
//	        				$scope.formParam.stockCeilings[i]['denominationList'][0]['dictDescs']='￥:'+$scope.formParam.stockCeilings[i]['denominationList'][0]['denomination']
//	        			}else{
//	        				for(var j=0;j<$scope.formParam.stockCeilings[i]['denominationList'].length;j++){
//	        					$scope.formParam.stockCeilings[i]['denominationList'][j]['dictDescs']='HK$:'+$scope.formParam.stockCeilings[i]['denominationList'][j]['denomination']
//	        				}
//	        			}
//					}
 					handerCallback($scope.formParam);
 				}
             });
         }
         
         //处理回显数据
         function handerCallback(data){
         	 var obj = PublicService.showData(data.replenishRule,$scope.replenishRule);
         	 $scope.select_all = obj.selectAll;
         	 $scope.select_workDay = obj.selectWorkDay;
         	$scope.amount = 0;
          	angular.forEach($scope.formParam.stockCeilings,function(stockCeiling){
         		angular.forEach(stockCeiling.denominationList,function(denomination){
         			$scope.amount += parseFloat(denomination['denomination'], 10) * denomination['count'];
         		});
			});
         }
         
         $scope.clear = function(flag) {
         	$uibModalInstance.close();
         	$state.go('app.bankRule',{},{reload:flag});
         };
     }
 })();