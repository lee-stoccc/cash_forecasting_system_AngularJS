(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('cashGuaranteeRateController', cashGuaranteeRateController);

    cashGuaranteeRateController.$inject = ['$http','cashGuaranteeRateService','TermInfoService', '$translate', 'FcPublicService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload'];

    function cashGuaranteeRateController($http,cashGuaranteeRateService,TermInfoService,$translate,FcPublicService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload) {
    	$scope.formParam = {};
    	$scope.dateOptions = {
        		showWeeks:false,
        		formatDayHeader:'EEE'
        	};
//    	$scope.formParam.replenishDate = new Date();
    	$scope.datePickerOpenStatus = {};  
    	$scope.formParam.startTime=new Date(new Date().getTime()-60*60*24*6*1000)
    	$scope.formParam.endTime=new Date()
    	$scope.formParam.startDate=FcPublicService.formatDate($scope.formParam.startTime)  // 传参的格式
		$scope.formParam.endDate=FcPublicService.formatDate($scope.formParam.endTime)  // 传参的格式
        $scope.openCalendar = function (date) {
		$scope.datePickerOpenStatus[date] = true;
		};
		
		$scope.tableTitleListObj=[]
		tableTitleListObj()
		$scope.init = function(){
         	//getDict('denomination', 'forecast.denomination');//这里暂时写死了一个币种，后期修改
//        	getDict('deTypeList', 'forecast.denomination'); 
//         	getCurrency();
			$scope.pageFrom='CashGuanranteeRate'
         	$scope.select('#cashGuaranteeRateDistrict2') 
         	$scope.select('#cashGuaranteeRateDistrict3')       
         	$scope.select('#cashGuaranteeRateLocation2')
         	getBankList()   // 银行列表
         	getDistrictAndLocationList()  // 地区玉玉
         	$scope.tablesConfig = {  
         			showCheckBox:true,
         			isColspan:true,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
                    tableTitles:$scope.tableTitleListObj,
                    url:'/api/statementAnalysis/getCashSecurityRate',     
        			formParams:{
        				sortByTermNo :1,
        				startDate: $scope.formParam.startDate,
        				endDate:$scope.formParam.endDate  
        			}
        		};
         	$scope.select('#cashGuaranteeRatebankName')
          };
          
          // 导出报表
          $scope.exporting = function () {
        	  var t1=FcPublicService.formatDate($scope.formParam.startTime)  // 转换时间
          	  var t2=FcPublicService.formatDate($scope.formParam.endTime) // 转换时间
                     cashGuaranteeRateService.downLoadFile(t1,t2)
          }; 
              
          // 配置表头
          function tableTitleListObj(){  
        	  var dayArrList=getDayArr()  
        	   dayArrList.push('7 Days')   
        	   var j=0
        	   var tableTitleListObj=[{title:"termInfo.termNo",filed: 'termNo',type:'text',tipTitle:'Terminal ID'}]  
        	   for(var i=0;i<7;i++){
        		   tableTitleListObj.push({title:dayArrList[j],filed: 'date'+j,type:'text',tipTitle:'Date'})
        		   j++
        	   }
        	  tableTitleListObj.push({title:'AVG', filed: 'AVGS', type:'text'})
        	  $scope.tableTitleListObj=tableTitleListObj  
          }
          
          // 根据搜索框动态生成时间数组，用做配置表头
          function getDayArr() {
        	  var dayArr=[]
        	  var Month=new Date($scope.formParam.endTime).getMonth()+1  // 当前月
       	   var endDay=new Date($scope.formParam.endTime).getDate()  // 一周前
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
            
            $scope.loadAll = function() {
//    			getBankCheckBox();
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
        		dayArr.push('AVG')
        		for(var i=0;i<dayArr.length;i++){
        			$('#cashGuaranteeRate .table-title .td-left').eq(i+2).text(dayArr[i])    
        		} 
            	delete $scope.formParam.replenishDate    
//            	Object.assign($scope.formParam,{startDate:t1},{endDate:t2},{sortByTermNo:1})  ie不支持assign
            	$scope.formParam.startDate=t1
            	$scope.formParam.endDate=t2   
            	$scope.formParam.sortByTermNo=1
    			$scope.refreshTableList($scope.formParam);
    		};	
          
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
           
           
      	 // 比较输入的开始时间和结束时间
   	    $scope.$watch('formParam',function(n,o){
   	    	if(n.endTime=='' || n.endTime==undefined) return
   	    	if(n.startTime=='' || n.startTime==undefined) return
//   	    	if(n.startTime.getTime() !=o.startTime.getTime() || n.endTime.getTime()!=o.endTime.getTime()){  // 如果对时间进行了操作
   	    		if(n.endTime !='' || n.startTime !=''){
   	    			var flag=PublicService.compareTime(n.startTime,$scope.formParam.endTime)
   	    			if(!flag){
   	    				var msg = "global.timeMsg1";
   	    				PublicService.openDialog(msg);  
   	    			}
   	    		}
//   	    	}
   	    },true)
           
           
           
        
    }
})();