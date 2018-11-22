(function() {
    'use strict';
    angular
        .module('devplatformApp')   
        .controller('inventoryStatisticsController', inventoryStatisticsController);

    inventoryStatisticsController.$inject = ['inventoryStatisticsService','TermMonitorService','TermInfoService', 'FcPublicService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload','$translate'];

    function inventoryStatisticsController(inventoryStatisticsService,TermMonitorService,TermInfoService,FcPublicService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload,$translate) {
    	$scope.datePickerOpenStatus = {};
    	$scope.startDate=FcPublicService.formatDate(new Date(new Date().getTime()-60*60*24*1000*6))   // 昨天
    	$scope.get=true        
    	var endTime=new Date()
    	var startTime =new Date(new Date().getTime()-60*60*24*6*1000)        
    	$scope.formParam = {startTime:startTime,endTime:endTime};
    	$scope.choseArr = [];
    	getDict('deTypeList', 'forecast.denomination'); 
    	$scope.colSpanData = [];
    	$scope.tableTitleListObj=[]
    	$scope.url='api/statementAnalysis/getInventoryStatisticsList'  
     	getCurrency();
     	getEscortList()
        $scope.init = function(){
//         	tableTitle($scope.tableTitleList)
        	
        		$scope.tablesConfig = {
             			showCheckBox:true,
             			isColspan:true,
                 		checkOneAction:'checkOneAction',
                 		checkAllAction:'checkAllAction',
             			rowSpan:3,
                        tableTitles:$scope.tableTitleListObj,
                        url:'api/statementAnalysis/getInventoryStatisticsList',  
            			formParams:{
            				termNo : $scope.formParam.termNo,
            				cusTermNo :$scope.formParam.cusTermNo,   
            				bankId : $scope.formParam.bankId,
            				startTime:startTime,
            				endTime:endTime
            			}
            		};
			
         	$scope.select('#bankNameMonitor')
        	$scope.select('#cusRegionMonitor')
        	  
          };  
             
          // 导出报表
          $scope.exporting = function () {
        	  if($scope.formParam.startTime=="" || $scope.formParam.endTime==""){
        		  var msg = "global.pleaseChoiceExplorerDate";
        		  PublicService.showDialogTimeout(msg)    
        		  return 
        	  }
        	  var t1=FcPublicService.formatDate($scope.formParam.startTime)  // 转换时间
          	  var t2=FcPublicService.formatDate($scope.formParam.endTime) // 转换时间
          	  var t3=($scope.formParam.endTime.getTime()-$scope.formParam.startTime)/(1000*24*60*60) + 1  // 查询的时间段
        	  inventoryStatisticsService.downLoadFile(t1,t2,t3)   
          };
         
      	$scope.colSpanData = [];
        function getCurrency(){
      		  for (var position = 0; position <$scope.deTypeList.length; position++) {
      			  var type=$scope.deTypeList[position].dictKey;   
      			  var parentGroup = "forecast.denomination."+type;   
      				SysDictService.getDictListAsync(parentGroup)
      	          	.then(function(response){
      	          		if(response.statusCode === '0000'){
      	          			var obj={"itemList":[],"type":""};
      	          			obj['itemList'] = response.data;
       	          			switch(type){
        	          			case "HKD":  
        	          				obj['title'] = type + "(HK$)";
        	          				break;
        	          			case "CNY":
        	          				obj['title'] = type +"(￥)";
        	          				break;
        	          			}
      	          			$scope.colSpanData[position]=obj;
      	          		}
      	          	});
				}  
        }
          // 获取护卫公司列表
          function getEscortList(){
        	  inventoryStatisticsService.getEscortList().then(function(response){
	          		if(response.statusCode === '0000'){
	          			$scope.tableTitleList=response.data.concat(); // 获取得到护卫公司的名称的数组
	          			$scope.tableTitleList.push('termAmout')   
	          			var array=response.data.concat();    
	          			array.push('TerminalAmount')  
	          			var tableTitleListObj=[{title:"termInfo.date",filed: 'dateTime',type:'date',tipTitle:'Date',width:7}]  
	                	var titleCount=0
	        			for(var i =0;i<array.length;i++){
	        				if(i==0){   // 第二个
	        					tableTitleListObj.push({title:array[i],dynamicTitles:$scope.colSpanData, filed: $scope.tableTitleList[i], chridTitle:'dictDesc', chridFiled:'amount', type:'text',firstRoop:true})
	        				}else{
	        					tableTitleListObj.push({title:array[i],dynamicTitles:$scope.colSpanData, filed: $scope.tableTitleList[i], chridTitle:'dictDesc', chridFiled:'amount', type:'text',firstRoop:false})
	        				}
	        				titleCount++
	        			}  
	                	$scope.tableTitleListObj=tableTitleListObj
	                	return $scope.tableTitleListObj
	          		}
	          	});
          }
          
    	  // 可以填写的选择下拉框
          $scope.select=function(id){
          	angular.element(id).select2({		//select2-search__field
          		placeholder: $translate.instant("global.pleaseSelect"),
          		allowClear: true,
          		tags:false
          	})
          }
          
          $scope.checkOneAction = function(allItem){
          	$scope.choseArr = [];
              angular.forEach(allItem, function (item) {
                  if(item.checked) {
                  	$scope.choseArr.push(item);
                  }
              });
          };
          
          $scope.checkAllAction = function(allItem){
          	$scope.choseArr = [];
            angular.forEach(allItem, function (item) {
                if(item.checked) {
                	$scope.choseArr.push(item);
                }
            });
          };
          
      
          
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
        
		$scope.loadAll = function() {
//			if($scope.formParam.startTime.getTime()>new Date()){
//				var msg = "Please Choice Dates Before Today ";  
//				PublicService.openDialog(msg);  
//				return
//			}   
			var t3=$scope.formParam.startTime.getTime()+1000*60*60*24*6  // 用来对比时间
        	var t4=$scope.formParam.endTime.getTime() // 用来对比时间   
        	if(t4!=t3){  // 超出7天查询范围
        		var msg = "global.timeMsgOverSevenDays";
    			PublicService.openDialog(msg);  
    			return  
        	}
			$scope.startDate=FcPublicService.formatDate($scope.formParam.startTime)  
			$scope.refreshTableList($scope.startDate);  
		};	
		
		$scope.resetSearch = function() {
			$scope.formParam = {};  
			$scope.formParam.startTime=new Date(new Date().getTime()-60*60*24*1000*6)  
			$scope.loadAll()  
			getCusgionList();  
		};  
			
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;  
		};
	
		 // 比较输入的开始时间和结束时间  
	    $scope.$watch('formParam',function(n,o){
	    	if(n.endTime=='' || n.endTime==undefined) return
	    	if(n.startTime=='' || n.startTime==undefined) return
	    		if(n.endTime !='' || n.startTime !=''){
	    			var flag=PublicService.compareTime(n.startTime,$scope.formParam.endTime)
	    			if(!flag){
	    				var msg = "global.timeMsg1";
	    				PublicService.openDialog(msg);  
	    			}
	    		}
//	    	}
	    },true)
	    
	          
	          
    }
})();