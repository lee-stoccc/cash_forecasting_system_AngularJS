(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('ReturnDataController', ReturnDataController);

    ReturnDataController.$inject = ['FcPublicService','ReturnDataService', 'ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload',"$translate"];

    function ReturnDataController(FcPublicService,ReturnDataService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload,$translate) {
    	$scope.datePickerOpenStatus = {};
    	$scope.format = "";
    	$scope.formParam = {};
    	
    	var nowTime=new Date()   // 时间默认值
    	$scope.formParam.date = new Date();
    	var endTime =  new Date(nowTime.getTime() ) ; // 当天
   	    var startTime = new Date(nowTime.getTime() - 24*60*60*1000*6);//前一天  
     	$scope.formParam = {date:startTime,dateTo:endTime};    
    	$scope.choseArr = [];
        $scope.init = function(){
         	//getDict('denomination', 'forecast.denomination.cny'); //这里暂时写死了一个币种，后期修改
        	getDict('deTypeList', 'forecast.denomination'); 
         	getBankList();
         	getCusgionList();
         	getCurrency();
         	$scope.tablesConfig = {
         			showCheckBox:true,  
         			isColspan:true,
         			rowSpan:3,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
                    tableTitles:[
						{title:"termInfo.bankName", filed: 'bankName',type:'text',width:25,tipTitle:'Branch Name'}, 
//						{title:"termInfo.cusRegion", filed: 'cusRegionName',type:'text',width:5},
						{title:"termInfo.termNo", filed: 'termNo',type:'text',width:10,tipTitle:'Terminal ID'},    
						{title:"termInfo.termType", filed: ' typeName',type:'text',width:10,tipTitle:'Terminal Type'},
//						{title:"castData.returnAmount", filed: 'amount',type:'text',width:10},   
						{title:"castData.return",dynamicTitles:$scope.colSpanData, filed: 'details', chridTitle:'dictDesc', chridFiled:'count', type:'text',width:10}, 
						{title:"castData.returnTime", filed: 'dateTime',type:'dateTime',format:'yyyy-MM-dd HH:mm', width:10,tipTitle:'Date'}, 
                            ],
                        url:"api/returnData/page",
        			formParams:{
        				termNo : $scope.formParam.termNo, 
        				date :$scope.formParam.date,
        				dataTo:$scope.formParam.dateTo,
        				bankId : $scope.formParam.bankId,
        			}
        		};
         	$scope.select('#bankNameReturnData') 
         	//2--毫秒后自动加载数据
         	setTimeout(function(){
         		$scope.refreshTableList($scope.formParam);
         	},200)
         	
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

  //        		$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(￥)"
    //      		$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(HK$)"
//          		$scope.colSpanData.reverse()

//          		$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(￥)"
//          		$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(HK$)"
//          		$scope.colSpanData.reverse()
 
            }
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
      
        $scope.bankReturnDataSelectCheck = function(obj){};
        
        $scope.bankReturnDataSelectItem = function(obj){};
        
        //获取银行List
        function getBankList(){
        	$scope.showCheckBox = true;
        	FcPublicService.getBanksList().then(function (response){
        		if (response.statusCode==="0000") {
        			  $scope.bankList = response.data;
				}
        	});
        }
        
		$scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);
		};	
	
		$scope.resetSearch = function() {
			getBankList();
			$scope.formParam = {};
//			$scope.formParam.date = new Date();
			$scope.loadAll();
		};
			
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
         
        $scope.importExcel = function(exportFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/returnData/importExcel';
            PublicService.submitFile(exportFile,url,'loadAll',$scope);
        };
        
        //上传模板
        $scope.upLoadTempFile = function(tempFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/returnData/uploadTemplate';
        	PublicService.submitFile(tempFile,url);
        };
        //下载模板
        $scope.downLoadFile = function(){
        	 ReturnDataService.downLoadFile();
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
			  ReturnDataService.deleteReturnData(ids)
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
	    	if(n.date=='' || n.date==undefined) return
	    	if(n.dateTo=='' || n.date==undefined) return
//	    	if(n.date.getTime()!=o.date.getTime() || n.dateTo.getTime()!=o.dateTo.getTime()){  // 如果对时间进行了操作
	    		if(n.date !='' || n.dateTo !=''){
		    		var flag=PublicService.compareTime(n.date,$scope.formParam.dateTo)  
		    		if(!flag){
		    			var msg = "global.timeMsg1";
		    			PublicService.openDialog(msg);  
		    		}
		    	}
//	    	}
	    },true)
    }
})();