(function() {
    'use strict';
    angular 
        .module('devplatformApp')
        .controller('ForecastPlanController', ForecastPlanController);
    ForecastPlanController.$inject = ['$rootScope','FcPublicService','SysDictService', 'ForecastPlanService', 'ngDialog', '$state', '$scope', '$timeout', 'PublicService','$uibModal','$translate'];

    function ForecastPlanController($rootScope,FcPublicService,SysDictService, ForecastPlanService, ngDialog, $state, $scope, $timeout, PublicService,$uibModal,$translate) {
    	$scope.formParam = {};
    	$scope.formParam.replenishDate = new Date();
    	$scope.datePickerOpenStatus = {};
    	$scope.dateOptions = {
        		showWeeks:false,
        		formatDayHeader:'EEE'
        	};
        $scope.init = function(){
        	getDict('deTypeList', 'forecast.denomination'); 
        	getCurrency();
        	getBankList();
//        	getDict('termTypeList', 'forecast.termType'); //设备类型
//        	getDict('forecastStatusList', 'forecast.forecastStatus'); //预测状态
//        	getCusgionList();    
            $scope.tablesConfig = {
         			showCheckBox:true,
         			isColspan:true,
         			checkOneAction:'checkOneAction',
         			checkAllAction:'checkAllAction',  
         			rowSpan:3,
                    tableTitles:[  
        				{title:"forecastPlan.termNo", filed: 'termNo',type:'text',width:8,tipTitle:'Terminal ID'},    
        				{title:"forecastPlan.branchNo", filed: 'branchNo',type:'text',width:8,tipTitle:'Branch Code'},    
        				{title:"forecastPlan.bankName", filed: 'bankName',type:'text',width:15,tipTitle:'Brank Name'},
//        				{title:"forecastPlan.regionName", filed: 'regionName',type:'text',width:10,tipTitle:'District'}, 
        				{title:"forecastPlan.replenishDate", filed: 'replenishDate',type:'date',width:10,tipTitle:'Replenish Date'},
        				{title:"forecastPlan.escort", filed: 'escort',type:'text',width:10,tipTitle:'Escort'},
        				{title:"forecastPlan.planCash",dynamicTitles:$scope.colSpanData, filed: 'planDetails', chridTitle:'dictDesc', chridFiled:'count', type:'text',width:18}, 
//        				{title:"forecastPlan.planCash", filed: 'planCash',type:'text-btn',width:10,actions:[{
//        					actionName: "openDetail()"}]}
        				],
                    url:'api/forecastPlan/page',
        			formParams:{
        				termNo : $scope.formParam.termNo,					
        				bankId : $scope.formParam.bankId,
        				termType: $scope.formParam.termType,
        				cusRegionId: $scope.formParam.cusRegionId,
        				replenishDate: $scope.formParam.replenishDate,
        				forecastStatus: '1'
        			}
        		};
            	$scope.select('#regionNamePlan')
            	$scope.select('#termTypePlan')
            	$scope.select('#bankNamePlan')  
            	$scope.select('#bankName') 
            	    
        };

        // 可以填写的选择下拉框
        $scope.select=function(id){
        	angular.element(id).select2({		//select2-search__field
        		placeholder: $translate.instant("global.pleaseSelect"),
        		allowClear: true,
        		tags:false
        	})
        }
        
        $scope.checkOneAction = function(allItem){
        	calculatingData(allItem);
        };
        
        $scope.checkAllAction = function(allItem){
        	calculatingData(allItem);
        };
        
        // 获取表格(面额)
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
      	          			obj['title'] = type;
      	          			$scope.colSpanData[position]=obj;
      	          		
      	          		}
      	          	});
				}
      		$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(HK$)"
      		$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(￥)"
//      		$scope.colSpanData.reverse()
        }
        
       function calculatingData(allItem){
            $scope.item = [""];  
            $scope.data = [[0],[0]];
        	if(allItem.length == 0)
        	return;
            angular.forEach(allItem, function (item) {
                if(item.checked) {
                	if(item['forecastList'] == null || item['forecastList'].length == 0)
                		return;
                	for(var index = 0;index < item['forecastList'].length;index++){
                		var forecast = item['forecastList'][index];
                		var dateStr = PublicService.formatDate(forecast['replenishDate'],'yyyy-MM-dd');
                		if($scope.item.length <= index){		//表示当前日期已经存在  否则不存在需要插入日期
                			$scope.item[index] = dateStr;
                			$scope.data[0][index] = 0;
                			$scope.data[1][index] = 0;
                		}
                		$scope.data[0][index] +=  forecast['usingAmount'];
                		$scope.data[1][index] += forecast['replenishAmount'];
                	}
                }
            });
            $scope.refreshEchart('echart',{
            	item:$scope.item,
            	legend:$scope.legend,
            	data:$scope.data
            });
        };
        
        $scope.legend = ["Predicted daily consumption", "Predict the full amount of the bill"];  
        $scope.item = [""];  
        $scope.data = [[0],[0]];
        $scope.echartData = {
        		title:'Daily Prelog',
        		id:'echart',
        		width:'600px',
        		height:'450px',
        		legend:$scope.legend,
        		item:$scope.item,
        		data:$scope.data
        };
        
        $scope.$on('noPlanLoad', function(event, data){
			$scope.loadNoPlanAll = data;
		});
	
		$scope.loadAll = function() {
		
//			$scope.formParam.bankId = $scope.bankIdStr;   
			$scope.loadNoPlanAll();
			$scope.refreshTableList($scope.formParam);
			
		};	
		
		$scope.resetSearch = function() {
			getBankList();
			$scope.formParam = {};
			$scope.bankIdStr = '';
			$scope.bankId = [];
			$scope.bankName = '';  
		};
		
		

        $scope.addForecastPlan = function(type){
        	//$scope.choseArr = $scope.getCheckValues().check;
        	$scope.choseArr = $scope.getCheckObjects();
        	if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	if(type === "1"){
            		$state.go("app.forecastPlan-edit",{
            			id:$scope.choseArr[0].id,
            			planId:$scope.choseArr[0].planId,
            			termNo:$scope.choseArr[0].termNo,
            			bankId:$scope.choseArr[0].bankId
            		});
            	}else{
            		$state.go("app.forecastPlan-edit",{
            			id:$scope.choseArr[0].id,
            			planId:'',
            			termNo:$scope.choseArr[0].termNo,
            			bankId:$scope.choseArr[0].bankId
            		});
            	}
            }
        };

      
      $scope.stockManage = function () {
    	  $state.go("app.stock");
      };
      
      $scope.forecast = function () {
//    	  $state.go("app.forecast");
    	  var date=$scope.formParam.replenishDate
    	  var date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    	  ForecastPlanService.downLoadFile(date_value)
    	  
      };
      
     
      
      // 获取planId
      $scope.getPlanId=function(){
    	  var planIdArr=[]
    	  for (var i=0;i<$scope.tableList.length;i++){
    		  if($scope.tableList[i].checked===true){
    			  if($scope.tableList[i].planId==null){
    				  continue
    			  }else{
    				  planIdArr.push($scope.tableList[i].planId)
    			  }
    			  
    		  }
    	  }
    	  return planIdArr
      }
      
      $scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
      
    	//批量删除
		$scope.batchDelete = function() {
			$scope.choseArr = $scope.getCheckValues('delFlag').check;
			$scope.chosePlanId =$scope.getPlanId()
			var msg = "";
	      	if (PublicService.isEmptyObject($scope.choseArr[0])) {//没有选择一个的时候提示
	          	msg = "global.selectDelete";
	          	PublicService.openDialog(msg);
	          	return;
	          }
	      	if($scope.chosePlanId.length===0){
	      		msg = "global.noPlanId";
	          	PublicService.openDialog(msg);
	          	return;
	      	}
          	 msg = "global.messages.deleteConfirm";
          	 PublicService.showConfirmDialog(msg, "confirmDelete", $scope, $scope.chosePlanId);
     };
     
        //确认删除
        $scope.confirmDelete = function(id){
        	ForecastPlanService.deleteForecastPlan(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();  
						var msg = "global.messages.deleteSuccess";
						
						PublicService.openDialog(msg);
					}
					
				});
		};	
		
		//获取银行树
        function getBankList(){
        	$scope.showCheckBox = true;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        

        
        $scope.bankForecastSelectItem = function(obj){};
        
        $scope.bankForecastSelectCheck = function(obj){};
        
      //获取区域
        function getCusgionList(){
        	ForecastPlanService.getCusgionList().then(function (response){
        		if (response.statusCode==="0000") {
        			$scope.cusgionList = response.data;
        		}
        	});
        }
        
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
        }
        
        $scope.noPlanShow = function(){
        	if($(".noPlanDiv").hasClass("plan-show")){
        		$(".noPlanDiv").removeClass("plan-show");
        	}else{
        		$(".noPlanDiv").addClass("plan-show");
        	}
        };
        
        $scope.goEchartShow = function(){
        	var item = {
    	    		url:'app.forecastReportform',
    	    		langSwitch:'menu.forecastReportform'
    	    	};
    	    $scope.$parent.$parent.addContent(item);
        };
        
        $scope.echartShow = function(){
        	if($(".forecastEchart").hasClass("plan-show")){
        		$(".forecastEchart").removeClass("plan-show");
        	}else{
        		$(".forecastEchart").addClass("plan-show");
        	}
        };
        
        $rootScope.$on("forecastPlanEdit",function(event,data){
			$scope.loadAll();	
		});
        
        $scope.createPlan = function () {
      	  $state.go("app.createPlan");
      	
        };
        
        $scope.createPlan2=function(){
        	ForecastPlanService.createPlan2().then(function(response){  
        				if(response.statusCode==="0000"){
        					var msg="global.messages.forecastSuccess";
        					PublicService.showDialogTimeout(msg);
        					$scope.refreshTableList($scope.formParam);   // 预测成功刷新
//        					$scope.clear (false)  
        				}else{
        					var msg="global.messages.forecastFail";
        					PublicService.showDialogTimeout(msg);
//        					$scope.clear (false)
        				}  
        			});
        }
    }
})();