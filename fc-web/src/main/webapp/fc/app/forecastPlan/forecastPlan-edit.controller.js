(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('ForecastPlanEditController', ForecastPlanEditController);

    ForecastPlanEditController.$inject = ['$rootScope','ForecastPlanService', 'ngDialog', '$stateParams', '$state', '$scope','PublicService','$uibModalInstance', 'SysDictService'];

    function ForecastPlanEditController($rootScope,ForecastPlanService, ngDialog, $stateParams, $state, $scope, PublicService, $uibModalInstance, SysDictService) {
		$scope.datePickerOpenStatus = {};
		$scope.forecastPlan = {
			"planId":$stateParams.planId,    
			"termNo":$stateParams.termNo,
			"detailList":[{
			              "currency":"",  //币种类别
			              "denominationList":"", //面额类别
			              "amount":"",// 总额
			              "count":""   // 张数
 			}] 
		};
		$scope.formParams = {
			"planId":$stateParams.planId,
			"id":$stateParams.id,
			"termNo":$stateParams.termNo
		};
        var map={};
        var length;
        $scope.typeAndDemination = [{"denominationList":[],"type":""}];
        $scope.init = function(){
        	getDict('denominationList', 'forecast.denomination');
        	getDict('deTypeList', 'forecast.denomination'); 
        	reloadData();
        	if($stateParams.planId){
        		ForecastPlanService.getForecastPlanDTO($scope.formParams)
        		.then(function(response){
        			if(response.statusCode === '0000'){
             			$scope.forecastPlan = response.data;
             			//把planId 带过去
//             			$scope.forecastPlan['id']=$stateParams.planId
             			if(PublicService.isEmptyObject($scope.forecastPlan.detailList)){
             				reloadData();
             			}
             			// 对返回数据遍历，并复制到页面上，ng-model
             			for(var j=0;j<$scope.typeAndDemination.length;j++){
             				if($scope.typeAndDemination[j]['type']=='CNY'){
             					for(var q=0;q<response.data.detailList.length;q++){
             						if(response.data.detailList[q]['currency']=='CNY'){
             							$scope.typeAndDemination[j]['denominationList'][0]['count']=response.data.detailList[q]['count']
             						}
             					}
             				}else{
             					for(var m=0;m<response.data.detailList.length;m++){  // 返回data遍历
             						if(response.data.detailList[m]['denomination']==100 && response.data.detailList[m]['currency']=='HKD'){
             							$scope.typeAndDemination[j]['denominationList'][0]['count']=response.data.detailList[m]['count']
             						}else if(response.data.detailList[m]['denomination']==500){
             							$scope.typeAndDemination[j]['denominationList'][1]['count']=response.data.detailList[m]['count']
             						}else if(response.data.detailList[m]['denomination']==1000){
             							$scope.typeAndDemination[j]['denominationList'][2]['count']=response.data.detailList[m]['count']
             						}
             					}
             				}
             			}
             			$scope.forecastPlan.replenishDate = dateToGMT(response.data.replenishDate);
             		}
        		});
        	}
        	getFirstData($stateParams.bankId);
        	$scope.changeCurrency ("HKD","0") //币种自动加载  
			$scope.add()   //币种自动加载
			$scope.changeCurrency ("CNY","1") //币种自动加载
			console.log($scope)
        };
        
        function getDict(param, parentGroup){
         	SysDictService.getDictListAsync(parentGroup)
         	.then(function(response){
         		if(response.statusCode === '0000'){
         			$scope[param] = response.data;
         			length=(response.data).length;
         		}
         	});
         }
        
        function getFirstData(param){
        	ForecastPlanService.getFirstData(param)
        	.then(function(response){
        		if(response.statusCode === '0000'){
        			$scope.stockAmount = response.data.currentStock;
        		}
        	});
        }
        //选择币种
   	 $scope.changeCurrency = function(param,index) {
   		$scope.getDenominationList(param,index);
       };
       
       $scope.getDenominationList = function(param,index){
      	var parentGroup = "forecast.denomination."+param+"";
      	if (isHaving(param)&& getSizeforMap()>0) {
      		PublicService.showDialogTimeout(param+"global.alreadyExisted");
				return;
			}
        	SysDictService.getDictListAsync(parentGroup)
       	.then(function(response){
       		if(response.statusCode === '0000'){
       			$scope.typeAndDemination[index]['denominationList'] =  response.data;
       		// 添加货币符号
    			if($scope.typeAndDemination[index]['denominationList'].length==1){
    				$scope.typeAndDemination[index]['type']='CNY'
    				$scope.typeAndDemination[index]['denominationList'][0]['dictDescs']='￥:'+$scope.typeAndDemination[index]['denominationList'][0]['dictDesc']
    			}else{
    				for(var i=0;i<$scope.typeAndDemination[index]['denominationList'].length;i++){
    					$scope.typeAndDemination[index]['type']='HKD'
    					$scope.typeAndDemination[index]['denominationList'][i]['dictDescs']='HK$:'+$scope.typeAndDemination[index]['denominationList'][i]['dictDesc']
    				}
    			}	   
       		};
       	});
        	if (param!="") {
        		setMap(index, param);
			}else{
				deleteMap(index);
			}
       };
       $scope.add = function() { 
     	  if (getSizeforMap()==0) {
     		PublicService.showDialogTimeout("global.selectCurrency");
				return;
     	  }
     	  if ($scope.typeAndDemination.length>=length) {
     		PublicService.showDialogTimeout("global.editDenomination");
				return;
			}
     	 
	          $scope.typeAndDemination.splice($scope.typeAndDemination.length+1, 0,
	        		  {"denominationList":[],"type":""});        
	          
	      };  
	      
	      $scope.del = function($index) {
	    	 if($scope.typeAndDemination.length===1){ 
	    		 //最后一个不能删除
	    		PublicService.showDialogTimeout("global.del");
	    		 return;
	    	 }
	    	 deleteMap($index);
	         $scope.typeAndDemination.splice($index, 1);  
	     };
	     //设置map里面的值
	        function setMap(id,newsObj)
	        {
	            //如果key也是动态的，则如下处理
	            var key=id;
	            map[key]=newsObj;
	        }
	      //获取map里面的值
	        function getSizeforMap()
	        {
	        	var count=0;
	            for(var i in map)
	            {
	               count++;
	            }
	            return count;
	        }
	        //删除map里面的元素
	        function deleteMap(id)
	        {
	            delete map[id];  
	        }
	        //判断map里面是否存在该元素
	        function isHaving(id)
	        {
	            for(var i in map)
	            {
	                if(id==map[i])
	                {
	                    return true;
	                }
	            }
	            return false;
	        }    
        function reloadData(){
        	angular.forEach($scope.denominationList, function(i){
        		var obj = {
        			"denomination":i.dictKey
        		};
        		$scope.forecastPlan.detailList.push(obj);
        	});
        }
   
        
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};

		$scope.save = function(){
//			var flag = sumData();
//			if(!flag){
//				PublicService.openDialog("forecastPlan.tooMuch");
//				return false;
//			}
			detailInventory();
			for(var i=0;i<$scope.forecastPlan['detailList'].length;i++){
				$scope.forecastPlan['detailList'][0]['currency']='HKD'
				$scope.forecastPlan['detailList'][1]['currency']='HKD'
				$scope.forecastPlan['detailList'][2]['currency']='HKD'  
				$scope.forecastPlan['detailList'][3]['currency']='CNY'
			}
			
			   
			var time=$scope.forecastPlan['replenishDate']
			if(typeof time=='object'){
				var t_s = time.getTime();//转化为时间戳毫秒数
				$scope.forecastPlan['replenishDate']=time.setTime(t_s + 1000 * 200)
//				var date=$scope.forecastPlan['replenishDate']
//				 var Y = date.getFullYear() 
//				 var M = time.getMonth()+1
//				 var D = date.getDate() + ' ';
//				 $scope.forecastPlan['replenishDate']=Y+M+D
			}
			ForecastPlanService.saveForecastPlan($scope.forecastPlan)
			.then(function(response){   
				if(response.statusCode === '0000'){
					$scope.message = "global.saveSuccess";   
					PublicService.showDialogTimeout($scope.message);
					$rootScope.$broadcast("forecastPlanEdit", '');
					$scope.clear(false);
				}
			});
		};
		
		$scope.clear = function(flag) {
	        $uibModalInstance.close();
	        $state.go('app.forecastPlan',{},{reload:flag});
		};
		
		
		$scope.checkDate = function(){
			if($scope.forecastPlan.replenishDate.getDate() < new Date().getDate()){
				PublicService.openDialog("global.timeMsg3");
				$scope.forecastPlan.replenishDate = null;
			} 
		};
		
		// 处理选择的值得，格式化参数
    	function detailInventory() {
    		var dataArr = new Array();
    		for (var positon = 0; positon < $scope.typeAndDemination.length; positon++) {
				var type=$scope.typeAndDemination[positon].type;
				var dd=$scope.typeAndDemination[positon].denominationList;
				for (var position2 = 0; position2 < dd.length; position2++) {
					var denomination=Number(dd[position2].dictKey);
					var count=Number(dd[position2].count)
					var amount=denomination*count
						var obj = {"denomination": denomination,"currency":type,"count":count,"amount":amount};
						dataArr.push(obj);
				}
			}	
    		if(dataArr.length>0) {
    			$scope.forecastPlan.detailList = dataArr;
    	    }
    	}
		function sumData(){
			var sum = 0;
			for(var i=0;i<$scope.forecastPlan.detailList.length;i++){
				if($scope.forecastPlan.detailList[i].count){
					sum += $scope.forecastPlan.detailList[i].denomination * $scope.forecastPlan.detailList[i].count;
				}else{
					continue;
				}
			}
			if(sum > $scope.stockAmount){
				return false;
			}
			return true;
		}
		
    }
})();