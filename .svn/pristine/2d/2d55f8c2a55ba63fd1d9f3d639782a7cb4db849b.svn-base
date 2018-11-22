(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('TermMonitorController', TermMonitorController);

    TermMonitorController.$inject = ['FcPublicService','TermInfoService','TermMonitorService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload','$translate'];

    function TermMonitorController(FcPublicService,TermInfoService,TermMonitorService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload,$translate) {
    	$scope.datePickerOpenStatus = {};
    	var endTime =  new Date() ; 
    	var startTime = new Date(endTime.getTime() - 24*60*60*1000);//前一天
    	var endTime=""
    	var startTime =""
    	$scope.formParam = {startTime:startTime,endTime:endTime};
    	$scope.choseArr = [];
        $scope.init = function(){
         	//getDict('denomination', 'forecast.denomination');//这里暂时写死了一个币种，后期修改
        	getDict('deTypeList', 'forecast.denomination'); 
         	getBankList();
         	getCusgionList();
         	getCurrency();
         	getDistrictAndLocationList()
         	$scope.select('#district2') 
         	$scope.select('#district3') 
         	$scope.select('#location2')  
         	
         	$scope.tablesConfig = {
         			showCheckBox:true,
         			isColspan:true,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
         			rowSpan:3,
                    tableTitles:[
						{title:"termInfo.bankName", filed: 'bankName',type:'text',width:20,tipTitle:'Branch Name'}, 
//						{title:"termInfo.cusRegion", filed: 'cusRegionName',type:'text',width:10,tipTitle:'Branch Name'},
						{title:"termInfo.branchNo", filed: 'branchName',type:'text',width:10,tipTitle:'Branch Name'},
						{title:"termInfo.termNo", filed: 'termNo',type:'text',width:10,tipTitle:'Branch Name'},    
						{title:"termInfo.termType", filed: ' typeName',type:'text',width:8,tipTitle:'Branch Name'},
//						{title:"termMonitor.allAmount", filed: 'totalAmount',type:'text',width:10},   
						{title:"termMonitor.amount",dynamicTitles:$scope.colSpanData, filed: 'monitorDetails', chridTitle:'dictDesc', chridFiled:'count', type:'text',width:20}, 
						{title:"termInfo.status", filed: 'status',type:'text',width:8,tipTitle:'Terminal Type'},    
						{title:"termInfo.date", filed: 'monitorTime',type:'dateTime',format:'yyyy-MM-dd HH:mm', width:10,tipTitle:'Date'}, 
                            ],
                        url:'api/termMonitor/page',
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
          
      	$scope.colSpanData = [];
          function getCurrency(){
        //	  if($scope.deTypeList.length>0){
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
          
          //获取区域
          function getCusgionList(){
        	  FcPublicService.getCusgionList().then(function (response){
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
      
        $scope.bankTermMonitorSelectCheck = function(obj){};
        
        $scope.bankTermMonitorSelectItem = function(obj){};
        
       
        
		$scope.loadAll = function() {
			var start = $scope.formParam.startTime;
			var end= $scope.formParam.endTime;
			var result = PublicService.subTime(start,end);
//			if(!PublicService.isEmptyObject(result.errorMsg)){
//				PublicService.openDialog(result.errorMsg);
//				return;
//			}  
//			if(result.days>14){
//				var msg = $translate.instant('termMonitor.dateMsg', {day:result.days});
//				PublicService.openDialog(msg);
//				return;
//			}
			$scope.refreshTableList($scope.formParam);
		};	
		
		$scope.resetSearch = function() {
			$scope.formParam = {};
			getBankList();
			getDistrictAndLocationList()
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
         
        $scope.importExcel = function(exportFile){
            var url = globalConstant.devplatform_web_apiPath + 'api/termMonitor/importExcel';
            PublicService.submitFile(exportFile,url,'loadAll',$scope);
        };
        
        //上传模板
        $scope.upLoadTempFile = function(tempFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/termMonitor/uploadTemplate';
        	PublicService.submitFile(tempFile,url);
        };
        //下载模板
        $scope.downLoadFile = function(){
        	TermMonitorService.downLoadFile();
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
			 TermMonitorService.deleteTermMonitor(ids)
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
	    	if(n.endTime=='' || n.endTime==undefined) return
	    	if(n.startTime=='' || n.startTime==undefined) return
//	    	if(n.startTime.getTime() !=o.startTime.getTime() || n.endTime.getTime()!=o.endTime.getTime()){  // 如果对时间进行了操作
	    		if(n.endTime !='' || n.startTime !=''){
	    			var flag=PublicService.compareTime(n.startTime,$scope.formParam.endTime)
	    			if(!flag){
	    				var msg = "global.timeMsg1";
	    				PublicService.openDialog(msg);  
	    			}
	    		}
//	    	}
	    },true)
	    
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
    }
})();