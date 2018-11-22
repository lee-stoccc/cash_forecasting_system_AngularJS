(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('DailyUsingController', DailyUsingController);

    DailyUsingController.$inject = ['FcPublicService','DailyUsingService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload','$translate'];

    function DailyUsingController(FcPublicService,DailyUsingService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload,$translate) {
    	$scope.datePickerOpenStatus = {};
//    	var endTime =  new Date() ; 
    	var endTime = "" ; 
    	var startTime=""
//   	    var startTime = new Date(endTime.getTime() - 24*60*60*1000);//前一天
     	$scope.formParam = {startTime:startTime,endTime:endTime};
     	$scope.choseArr = [];
        $scope.init = function(){
        	getDict('deTypeList', 'forecast.denomination'); 
        	getCurrency();
         	getBankList();
         	getCusgionList();
         	$scope.tablesConfig = {
         			showCheckBox:true,
         			isColspan:true,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
         			rowSpan:3,
                    tableTitles:[
						{title:"termInfo.bankName", filed: 'bankName',type:'text',width:15,tipTitle:'Branch Name'}, 
//						{title:"termInfo.cusRegion", filed: 'cusRegionName',type:'text',width:10},
						{title:"termInfo.termNo", filed: 'termNo',type:'text',width:7,tipTitle:'Terminal ID'},    
						{title:"termInfo.termType", filed: ' typeName',type:'text',width:10,tipTitle:'Terminal Type'},
						{title:"termInfo.date", filed: 'date',type:'date', width:10,tipTitle:'Date'}, 
						{title:"bankRule.whichDay", filed: 'weekday',type:'text',width:10,tipTitle:'Weekday'},
						{title:"bankRule.holidayAdd", filed: 'holidayFlag',type:'text',width:10,tipTitle:'Holiday Add'},
//						{title:"termInfo.dailyAmount", filed: 'totalAmount',type:'text',width:10},   
						{title:"termInfo.dailyUsing",dynamicTitles:$scope.colSpanData, filed: 'details', chridTitle:'dictDesc', chridFiled:'count', type:'text',width:14}, 
                            ],
                        url:'api/dailyUsing/page',
        			formParams:{   
        				termNo : $scope.formParam.termNo,
        				cusTermNo :$scope.formParam.cusTermNo,
        				bankId : $scope.formParam.bankId,
        				startTime:$scope.formParam.startTime,
        				endTime:$scope.formParam.endTime
        			}
        		};
         	$scope.select('#bankIdDailyUsing')
         	$scope.select('#cusRegionIdDailyUsing')
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
          
          //获取区域
          function getCusgionList(){
        	  FcPublicService.getCusgionList().then(function (response){
          		if (response.statusCode==="0000") {
          			$scope.cusgionList = response.data;
          		}
          	});
          }
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
    //  		$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(￥)"
   //   		$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(HK$)"
//      		$scope.colSpanData.reverse()
        }
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
      
        $scope.bankDailyUsingSelectCheck = function(obj){};
        
        $scope.bankDailyUsingSelectItem = function(obj){};
        
        //获取银行树
        function getBankList(){
        	$scope.showCheckBox = true;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        
		$scope.loadAll = function() {
			var start = $scope.formParam.startTime;
			var end= $scope.formParam.endTime;
			var result = PublicService.subTime(start,end);
//			if(!PublicService.isEmptyObject(result.errorMsg)){  
//				PublicService.openDialog(result.errorMsg);
//				return;
//			}    
			// 对比天数的意思？    
//			if(result.days>14){
//				var msg = $translate.instant('termMonitor.dateMsg', {day:result.days});
//				PublicService.openDialog(msg);
//				return;
//			}
//			getBankCheckBox();
			$scope.refreshTableList($scope.formParam);
		};	
		
		$scope.resetSearch = function() {
//			$scope.formParam = {startTime:startTime,endTime:endTime};
			$scope.formParam = {}
			getBankList();
			getCusgionList();
			$scope.bankNoStr = ""; 
			$scope.bankName="";
		};
			
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
	
	/*    $scope.checkStartTime = function(){
	            if($scope.formParam.startTime > $scope.formParam.endTime){
	                var msg = "global.timeMsg1";
	                PublicService.openDialog(msg);
	                $scope.formParam.startTime = undefined;
	            }
	        };
	    $scope.checkEndTime = function(){
	        if($scope.formParam.startTime > $scope.formParam.endTime){
	        	 var msg = "global.timeMsg2";
	             PublicService.openDialog(msg);
	             $scope.formParam.endTime = undefined;
	        }
	    };*/
         
		//生成日用量
		 $scope.generationUsing = function(){
	        	$state.go('app.dailyUsing-add'); 	
	        };
        
	     //批量删除
		 $scope.batchDelete = function() {
	    	var msg = "";
	    	if ($scope.choseArr.length === 0) {//没有选择一个的时候提示
	        	msg = "global.selectDelete";
	        	PublicService.openDialog(msg);
	        	return;
	        }
	    	msg = "global.messages.deleteConfirm";
	    	PublicService.showConfirmDialog(msg, "confirmDelete", $scope);
	    };
	    
	    $scope.confirmDelete = function(){
	    	  var ids = "";
              angular.forEach($scope.choseArr, function (item,index) {
            	  ids += item['id'];
            	  if(index != $scope.choseArr.length - 1){
            		  ids += ',';
            	  }
              });
			 DailyUsingService.deleteDailyUsing(ids)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();
						$scope.choseArr = [];
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
					}
				});
		};
		
		 // 比较输入的开始时间和结束时间  
	    $scope.$watch('formParam',function(n,o){  
	    	if(n.startTime=='' || n.startTime==undefined) return
	    	if(n.endTime=='' || n.endTime==undefined) return
//	    	if(n.endTime.getTime()!=o.endTime.getTime() || n.startTime.getTime()!=o.startTime.getTime()){  // 如果对时间进行了操作
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