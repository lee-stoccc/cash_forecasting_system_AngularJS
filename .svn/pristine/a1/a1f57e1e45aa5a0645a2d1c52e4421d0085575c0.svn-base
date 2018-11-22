(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('inventoryStatistics', inventoryStatistics);

    inventoryStatistics.$inject = ['inventoryStatisticsService','TermInfoService','CastDataService','ngDialog', '$state', '$scope','PublicService','SysDictService','globalConstant','$stateParams','Upload',"$translate"];

    function inventoryStatistics(inventoryStatisticsService,TermInfoService, CastDataService,ngDialog, $state, $scope, PublicService,SysDictService,globalConstant,$stateParams,Upload,$translate) {
    	var date = new Date();
    	var nowTime=new Date()
    	var endTime =  new Date(nowTime.getTime() ) ; // 当天
   	    var startTime = new Date(nowTime.getTime() - 24*60*60*1000*6);//前一天  
     	$scope.formParam = {date:startTime,dateTo:endTime};
    	$scope.datePickerOpenStatus = {};
//    	$scope.formParam = {date :date};
    	$scope.choseArr = [];
        $scope.init = function(){
        	getDict('deTypeList', 'forecast.denomination'); 
         	getDict('district2List', 'forecast.district2'); //区域2
         	getDict('district3List', 'forecast.district3'); //区域3
         	getDict('location2List', 'forecast.location2'); //location2
        	$scope.select('#district2') 
          	$scope.select('#district3') 
          	$scope.select('#location2') 
          	$scope.select('#bankNameCastData')
         	getBankList();
         	getCusgionList();
         	getCurrency();
         	$scope.tablesConfig = {
         			showCheckBox:true,
         			isColspan:true,
             		checkOneAction:'checkOneAction',
             		checkAllAction:'checkAllAction',
         			rowSpan:3,   
                    tableTitles:[
						{title:"termInfo.bankName", filed: 'bankName',type:'text',width:15,tipTitle:'Branch Name'}, 
//						{title:"termInfo.cusRegion", filed: 'cusRegionName',type:'text',width:15},
						{title:"termInfo.termNo", filed: 'termNo',type:'text',width:15,tipTitle:'Terminal ID'},    
						{title:"termInfo.termType", filed: ' typeName',type:'text',width:15,tipTitle:'Terminal Type'},
//						{title:"castData.castAmount", filed: 'amount',type:'text'},   
						{title:"castData.cast",dynamicTitles:$scope.colSpanData, filed: 'details', chridTitle:'dictDesc', chridFiled:'count', type:'text',width:25}, 
						{title:"castData.castTime", filed: 'dateTime',type:'dateTime',format:'yyyy-MM-dd HH:mm',width:12,tipTitle:'Date'}, 
                            ],
                        url:"api/replenishData/page",
        			formParams:{
        				termNo : $scope.formParam.termNo,
        				date :$scope.formParam.date,
        				bankId : $scope.formParam.bankId,
        			}
        		};  
         
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
          	TermInfoService.getCusgionList().then(function (response){
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
          			  var parentGroup = "forecast.denomination."+ type;
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

//          		$scope.colSpanData[0]['title']=$scope.deTypeList[0].dictKey+"(￥)";
//          		$scope.colSpanData[1]['title']=$scope.deTypeList[1].dictKey+"(HK$)";
//          		$scope.colSpanData.reverse();

            }
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
      
        $scope.bankCastDataSelectCheck = function(obj){};
        
        $scope.bankCastDataSelectItem = function(obj){};
        
 
        //获取银行List
        function getBankList(){
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
			$scope.formParam = {};
//			$scope.formParam.date = new Date();
			$scope.loadAll();
		 	getBankList();
		};
			
		$scope.openCalendar = function (date) {
			$scope.datePickerOpenStatus[date] = true;
		};
         
        $scope.importExcel = function(exportFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/replenishData/importExcel';
            PublicService.submitFile(exportFile,url,'loadAll',$scope);
            if($('.ngdialog-theme-default')){
            	$(this).remove()
            }
            PublicService.openDialog("Please Wait...")    
        };
        
        //上传模板
        $scope.upLoadTempFile = function(tempFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/replenishData/uploadTemplate';
        	PublicService.submitFile(tempFile,url);
        };
        //下载模板
        $scope.downLoadFile = function(){
        	 CastDataService.downLoadFile();
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
			  CastDataService.deleteCastData(ids)
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
	    	if(n.date !='' || n.date !=''){
	    		var flag=PublicService.compareTime(n.date,$scope.formParam.dateTo)
	    		if(!flag){
	    			var msg = "global.timeMsg1";
	    			PublicService.openDialog(msg);  
	    		}
	    	}
	    },true)
		
    }
})();