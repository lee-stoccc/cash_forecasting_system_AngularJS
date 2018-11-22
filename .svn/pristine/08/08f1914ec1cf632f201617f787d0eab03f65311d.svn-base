(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('WarningInformationController', WarningInformationController);
    WarningInformationController.$inject = ['PublicService','ForecastPlanService','$rootScope','$scope','ngDialog', 'LayoutService','$stateParams','$state','ngVerify','$translate','SysDictService'];
    function WarningInformationController(PublicService,ForecastPlanService, $rootScope,$scope,ngDialog, LayoutService,$stateParams, $state,ngVerify,$translate,SysDictService) {
    	$scope.formParam = {};
    	$scope.init = function(){
    		getDict('deTypeList', 'forecast.denomination'); 
    		getCurrency();
    		$scope.tablesConfig = {
    			checkOneAction:'checkOneAction',
//         		checkAllAction:'checkAllAction',
     			showCheckBox:false,
     			isColspan:true,  
     			rowSpan:3,
                tableTitles:[    
    				{title:"warningInformation.networkName", filed: 'bankName',type:'text',width:15},    
    				{title:"warningInformation.termNo", filed: 'termNo',type:'text',width:10},
    				{title:"warningInformation.realTimeBalance",dynamicTitles:$scope.colSpanData, filed: 'detail', chridTitle:'amount', chridFiled:'count', type:'text',width:20},
//    				{title:"warningInformation.realTimeBalance", filed: 'realTimeBalance',type:'text',width:15}, 
    				{title:"warningInformation.runningState", filed: 'status',type:'text',width:10}, 
    				{title:"CR", filed: 'inPlan',type:'inPlan',width:4}, 
    				{title:"warningInformation.monitoringTime", filed: 'date',type:'date',width:10},   
                    {
        				title : "entity.action.operation",
        				filed : 'operation',
        				type : 'warnBtn',
        				width : 10,
        				actions : [ {actionName : 'markWarn(item)',name : 'Delete'} ,
        				            {actionName : 'addCash(item)',name : 'entity.action.add'}     
        							]
                        } ],
                url:'api/termWarn/page',
    			formParams:{
    				termNo : $scope.formParam.termNo,					
    				bankId : $scope.formParam.bankId,
    				termType: $scope.formParam.termType,
    				cusRegionId: $scope.formParam.cusRegionId,
    				replenishDate: $scope.formParam.replenishDate,
    				forecastStatus: '1'
    			}
    		};
    	}  
         // 获取货币类型
    	function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
    	
    	// 给货币添加货币符号
    	  $scope.colSpanData = [];
    	  function getCurrency(){
              	for (var position = 0; position <$scope.deTypeList.length; position++) {
              			var type=$scope.deTypeList[position].dictKey;
              			var parentGroup = "forecast.denomination."+ type;
              			SysDictService.getDictListAsync(parentGroup).then(function(response){
              				if(response.statusCode === '0000'){
              					var obj={"itemList":[],"type":""};
              					obj['itemList'] = response.data;
              					obj['title'] = type;
              					$scope.colSpanData[position]=obj;
              				}
              			});
      				}  
              	$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(HK$)"
              	$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(￥)"
            }
    	  
    	  $scope.loadAll = function() {
  			$scope.refreshTableList($scope.formParam);
  		};
    	  
  		$rootScope.$on("warningInformationEdit",function(event,data){
			$scope.loadAll();	
		});
  		
  		
  		$scope.markWarn=function(item){
  			ForecastPlanService.markWarn(item.id).then(function(response){
           		if(response.statusCode === '0000'){
           			$scope.refreshTableList($scope.formParam);
           			PublicService.openDialog('Deleted')
           			setTimeout(function(){
           				$('.ngdialog-theme-default').remove()
           			}, 2000)
           		}
           	});
  		}
  		
  		
    	// 临时紧急加钞按钮add
      	$scope.addCash=function (item){
           	 ngDialog.open({
                   template: 'fc/app/warningInformation/warningInformation-edit.html',//模式对话框内容为dialog.html
                   className: 'ngdialog-theme-default',
                   scope: $scope, //将scope传给dialog.html,以便显示提示信息
                   controller:['$rootScope','ForecastPlanService','ngDialog','$stateParams','$state','$scope','PublicService','SysDictService',
                	   function($rootScope,ForecastPlanService,ngDialog, $stateParams, $state, $scope, PublicService, SysDictService){
                	$scope.datePickerOpenStatus = {};
               		$scope.forecastPlan = {
               			"date":item.date,  //  传值过来的date 
               			"termNo":item.termNo,
               			"detailList":[{
               			              "currency":"",  //币种类别
               			              "denominationList":"", //面额类别
               			              "amount":"",// 总额  
               			              "count":""   // 张数
                			}] 
               		};
               		$scope.formParams = {
               			"id":$stateParams.id,
               			"planId":$stateParams.planId
               			//"termNo":$stateParams.termNo
               		};
                       var map={};
                       var length;
                       $scope.typeAndDemination = [{"denominationList":[],"type":""}];
                    $scope.init = function(){
                       	getDict('denominationList', 'forecast.denomination');
                       	getDict('deTypeList', 'forecast.denomination');    
                       	reloadData();
                        // 对货币张数进行分类,用于回显数据 
                        var array =item.forecastDetail
                        $scope.cashCount=$scope.deminationCash(array,item.inPlan)  // 处理张数的 
                       	$scope.changeCurrency ("HKD","0") //币种自动加载
               			$scope.add()   //币种自动加载
               			$scope.changeCurrency ("CNY","1") //币种自动加载
               			$scope.forecastPlan.replenishDate=dateToGMT($scope.forecastPlan.date)  // 传值过来的date 转化为可以复制的date
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
                      			console.log(item)
                      			$scope.typeAndDemination[index]['denominationList'] =  response.data;
                      		// 添加货币符号 和 回显张数
                   			if($scope.typeAndDemination[index]['denominationList'].length==1){
                   				$scope.typeAndDemination[index]['type']='CNY'
                   				$scope.typeAndDemination[index]['denominationList'][0]['count']=$scope.cashCount.CNY
                   				$scope.typeAndDemination[index]['denominationList'][0]['dictDescs']='￥:'+$scope.typeAndDemination[index]['denominationList'][0]['dictDesc']
                   			}else{
                   				for(var i=0;i<$scope.typeAndDemination[index]['denominationList'].length;i++){
                   					$scope.typeAndDemination[index]['denominationList'][0]['count']=$scope.cashCount.HKD100
                   					$scope.typeAndDemination[index]['denominationList'][1]['count']=$scope.cashCount.HKD500
                   					$scope.typeAndDemination[index]['denominationList'][2]['count']=$scope.cashCount.HKD1000
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
                      
                      // 对货币张数进行分类,用于回显数据 
                      $scope.deminationCash=function(array){
                    	  var cashDeminationCount={}
	                    	  for(var i=0;i<array.length;i++){
	                    		  if(array[i].currency=='CNY' && array[i].denomination==100){
	                    			  cashDeminationCount.CNY=array[i]['count']
	                    		  }else{
	                    			  if(array[i].denomination==1000 && array[i].currency=='HKD'){
	                    				  cashDeminationCount.HKD1000=array[i].count
	                    			  }else if(array[i].denomination==100 && array[i].currency=='HKD'){
	                    				  cashDeminationCount.HKD100=array[i].count
	                    			  }else if(array[i].denomination==500 && array[i].currency=='HKD'){
	                    				  cashDeminationCount.HKD500=array[i].count
	                    			  }
	                    		  }
	                    	  }
                    	  return cashDeminationCount
                      }
                      
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
//               			var flag = sumData();
//               			if(!flag){
//               				PublicService.openDialog("forecastPlan.tooMuch");
//               				return false;
//               			}
               			detailInventory();
               			$scope.forecastPlan.warnId=item.id
               			$scope.forecastPlan.replenishDate=item.date
               			$scope.forecastPlan.termNo=item.termNo 
               			ForecastPlanService.saveForecastPlan($scope.forecastPlan)
               			.then(function(response){
               				if(response.statusCode === '0000'){
               					$scope.message = "global.saveSuccess";    
               					PublicService.openDialog($scope.message);
               					setTimeout(function name() {
									$('.ngdialog-theme-default').remove()
									$('.ngdialog-theme-default').remove()
								}, 2000)
               					
               					$rootScope.$broadcast("warningInformationEdit", '');
               				}  
               			});
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
                   		console.log($scope)
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
                   	
                   	// 关闭窗口
                   	$scope.clear=function(){
                   		$('.ngdialog-theme-default').remove()
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
                   }]
               });  

           };
    }
})();

// 182 可以判断回显数据