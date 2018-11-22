(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('cashUseRateController', cashUseRateController);

    cashUseRateController.$inject = ['cashUseRateService','TermInfoService','$translate', 'FcPublicService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload'];

    function cashUseRateController(cashUseRateService,TermInfoService,$translate,FcPublicService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload) {
    	$scope.formParam = {};
    	$scope.formParam.replenishDate = new Date();
    	$scope.datePickerOpenStatus = {};
        $scope.openCalendar = function (date) {
		$scope.datePickerOpenStatus[date] = true;
		};
		$scope.formParam.startTime=new Date(new Date().getTime()-60*60*24*6*1000)  
    	$scope.formParam.endTime=new Date()
		$scope.colSpanData = [{title:'HKD',itemList:[{amount:'HKD'}]},{title:'CNY',itemList:[{amount:'CNY'}]}];
    	$scope.tableTitleListObj=[]
		$scope.formParam.startDate=FcPublicService.formatDate($scope.formParam.startTime)  // 传参的格式
		$scope.formParam.endDate=FcPublicService.formatDate($scope.formParam.endTime)  // 传参的格式
    	$scope.dateOptions = {
        	showWeeks:false,
        	formatDayHeader:'EEE'       
        };
		getCashUseRateData()
		 $scope.init = function(){
	         	getBankList();   // 银行列表
	         	getDistrictAndLocationList() // 地区玉玉
	         	$scope.select('#cashUseRateDistrict2') 
	         	$scope.select('#cashUseRateDistrict3') 
	         	$scope.select('#cashUseRateLocation2')  
	         	$scope.get=false   // 配置表格post请求
	         	$scope.tablesConfig = {
	         		url:'api/statementAnalysis/getCashUtilizationRate', 
         			showCheckBox:true,
         			isColspan:true,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
         			rowSpan:3,
                    tableTitles:$scope.tableTitleListObj,
                     formParams:{
                    	sortByTermNo:1,  
                		termNo : $scope.formParam.termNo, 
                		startDate: $scope.formParam.startDate,
                		endDate:$scope.formParam.endDate
                	}
        		};
	         	$scope.select('#bankNameMonitor')
	        	
	          };
	          
	          // 导出报表  
	          $scope.exporting = function () {
	        	  var t1=FcPublicService.formatDate($scope.formParam.startTime)  // 转换时间
	          	  var t2=FcPublicService.formatDate($scope.formParam.endTime) // 转换时间
//	        	  $state.go("app.forecast");  
//	        	  var date=$scope.formParam.replenishDate
//	        	  var date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	        	  cashUseRateService.downLoadFile(t1,t2)
	        	  
	          };
	          
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
	            
	            $scope.loadAll = function() {
//	    			getBankCheckBox();
	            	var t1=FcPublicService.formatDate($scope.formParam.startTime)  // 转换时间
	            	var t2=FcPublicService.formatDate($scope.formParam.endTime) // 转换时间
	            	var t3=$scope.formParam.startTime.getTime()+1000*60*60*24*6  // 用来对比时间
	            	var t4=$scope.formParam.endTime.getTime() // 用来对比时间   
	            	if(t4!=t3){  // 超出7天查询范围
	            		var msg = "global.timeMsgOverSevenDays";
		    			PublicService.openDialog(msg);  
		    			return  
	            	}
	            	var dayArr=getDayArr()   // 得到时间数组
	            		dayArr.push('7 Days')
	            	var dateArr=$('#firstRoop span')
	            	for(var i=0;i<dayArr.length;i++){
	            		$('#firstRoop span').eq(i).text(dayArr[i])  
	            	}
	            	delete $scope.formParam.sortByTermNo  
	            	delete $scope.formParam.replenishDate
//	            	Object.assign($scope.formParam,{startDate:t1},{endDate:t2})   ie不支持assign  
	            	$scope.formParam.startDate=t1
	            	$scope.formParam.endDate=t2 
	            	$scope.formParam.sortByTermNo=1  
	    			$scope.refreshTableList($scope.formParam);
	            	
	    		};
	  
	    		  // 可以填写的选择下拉框
	            $scope.select=function(id){
	            	angular.element(id).select2({		//select2-search__field
	            		placeholder: $translate.instant("global.pleaseSelect"),
	            		allowClear: true,
	            		tags:false
	            	})
	            	
	            }
	            
	         // 获取地区的搜索框内容
	    	    function getDistrictAndLocationList(){
	            	TermInfoService.getDistrictAndLocationList('districtLevel2')
	    			.then(function (response){
	    				if(response.statusCode === "0000"){
	    					$scope.district2List=response.data
	    				}
	    			});
	            	TermInfoService.getDistrictAndLocationList('districtLevel3')
	    			.then(function (response){
	    				if(response.statusCode === "0000"){
	    					$scope.district3List=response.data
	    				}
	    			});
	            	TermInfoService.getDistrictAndLocationList('location2')
	    			.then(function (response){
	    				if(response.statusCode === "0000"){
	    					$scope.location2List=response.data
	    				}
	    			});
	            }
	    		
	    	    //获取银行List
	           function getBankList(){
	            	FcPublicService.getBanksList().then(function (response){
	            		if (response.statusCode==="0000") {
	            			  $scope.bankList = response.data;
	    				}
	            	});
	           }
	           
	           // 重置
	           $scope.resetSearch = function() {
	        	   $scope.formParam = {};
	        	   $scope.formParam.startTime=new Date(new Date().getTime()-60*60*24*6*1000)
	           	   $scope.formParam.endTime=new Date()
	        	   getBankList();   
	        	   getDistrictAndLocationList()  
	        	   $scope.loadAll()   
	           };
	           
	           // 获取该页面列表数据
	           function getCashUseRateData(){
	        	   $scope.colSpanData = [{title:'8-1',itemList:[{dictDesc:'HKD'},{dictDesc:'CNY'}]}];  
	        	   $scope.colSpanDataArr=[]
	        	   var dayArr= getDayArr()  
	        	   dayArr.push('7 Days') 
	        	   for(var j=0;j<8;j++){  
	        		   $scope.colSpanDataArr.push([{title:dayArr[j],itemList:[{dictDesc:'HKD'},{dictDesc:'CNY'}]}])
	        	   }
	        	   var tableTitleListObj=[{title:"termInfo.termNo",filed: 'termNo',type:'text',tipTitle:'Terminal ID',width:7}]  
	        	   var array=['Date']
	        	   var jj=0
	        	   for(var i= 0;i<7;i++){     
	        		   if(i==0){
	        			   tableTitleListObj.push({title:array[0],dynamicTitles:$scope.colSpanDataArr[i],filed:'date'+jj, chridTitle:'dictDesc',chridFiled:'amount', type:'text',firstRoop:true})
	        			}else{
	        				tableTitleListObj.push({title:array[0],dynamicTitles:$scope.colSpanDataArr[i],filed:'date'+jj, chridTitle:'dictDesc',chridFiled:'amount', type:'text',firstRoop:false})
	        			}
	        		   jj++
	        	   }  
	        	   tableTitleListObj.push({title:'AVG',dynamicTitles:$scope.colSpanDataArr[7], filed: 'AVGS', chridTitle:'dictDesc', chridFiled:'amount', type:'text',firstRoop:false})
	        	    $scope.tableTitleListObj=tableTitleListObj
	        	    console.log(tableTitleListObj)   
	        	   return $scope.tableTitleListObj  
	           }
	           
	           // 比较输入的开始时间和结束时间
	      	    $scope.$watch('formParam',function(n,o){
	      	    	if(n.endTime=='' || n.endTime==undefined) return
	      	    	if(n.startTime=='' || n.startTime==undefined) return
//	      	    	if(n.startTime.getTime() !=o.startTime.getTime() || n.endTime.getTime()!=o.endTime.getTime()){  // 如果对时间进行了操作
	      	    		if(n.endTime !='' || n.startTime !=''){
	      	    			var flag=PublicService.compareTime(n.startTime,$scope.formParam.endTime)
	      	    			if(!flag){
	      	    				var msg = "global.timeMsg1";
	      	    				PublicService.openDialog(msg);  
	      	    			}
	      	    		}
//	      	    	}
	      	    },true)
	      	    
	      	    
	      	  function getDayArr() {
	          	  var dayArr=[]
	          	  var Month=new Date($scope.formParam.endTime).getMonth()+1  // 当前月
	         	   var endDay=new Date($scope.formParam.endTime).getDate()  // 一周前,往前推7日
	         	   if(endDay>7){  // 计算前7日,不跨月
	         		   for(var q=0;q<7;q++){
	         			    dayArr.push(Month+'-'+endDay)
	         		   		endDay--
	         		   }
	         	   }else{  // 跨月份
	         		   if(Month==3){
	         			   for(var q=0;q<7;q++){
	  	        		   		if(endDay==0){
	  	        		   			var endDay=28
	  	        		   			Month-=1
	  	        		   			dayArr.push(Month+'-'+endDay)
	  	        			    }else{
	  	        			    	dayArr.push(Month+'-'+endDay)
	  	        			    }
	  	        			    endDay--
	  	        		   }
	         		   }else if(Month==1 || Month==3|| Month==5|| Month==7|| Month==8|| Month==10|| Month==11){
	         			   for(var q=0;q<7;q++){
	  	        		   		if(endDay==0){
	  	        		   			var endDay=30
	  	        		   			Month-=1
	  	        		   			dayArr.push(Month+'-'+endDay)
	  	        			    }else{
	  	        			    	dayArr.push(Month+'-'+endDay)
	  	        			    }
	  	        			    endDay--
	  	        		   }
	         		   }else {
	         			   for(var q=0;q<7;q++){
	  	        		   		if(endDay==0){
	  	        		   			var endDay=31  
	  	        		   			Month-=1
	  	        		   			dayArr.push(Month+'-'+endDay)
	  	        			    }else{
	  	        			    	dayArr.push(Month+'-'+endDay)
	  	        			    }
	  	        			    endDay--
	  	        		   }
	         		   }
	         	   }
	          	  dayArr.reverse() 
	          	  return dayArr
	  		}
	            
    }
})();