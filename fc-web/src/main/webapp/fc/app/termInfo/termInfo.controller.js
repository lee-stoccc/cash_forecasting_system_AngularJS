(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('TermInfoController', TermInfoController);

    TermInfoController.$inject = ['$rootScope','FcPublicService','TermInfoService', 'ngDialog', '$state', '$scope','PublicService','SysDictService','BankRuleService','globalConstant','Upload','$stateParams','$translate'];

    function TermInfoController($rootScope,FcPublicService,TermInfoService, ngDialog, $state, $scope, PublicService,SysDictService,BankRuleService,globalConstant,Upload,$stateParams,$translate) {
    	$scope.formParam = {
			"status":"",
			"bankId":$stateParams.bankId
    	};
        $scope.tablesConfig = {
 			showCheckBox:true,
     		checkOneAction:'checkOneAction',
     		checkAllAction:'checkAllAction',
            tableTitles:[
				{title:"termInfo.termNo", filed: 'termNo',type:'text',Width:5,tipTitle:"Terminal ID"},    
			//	{title:"termInfo.cusTermNo", filed: 'cusTermNo',type:'text',width:7},    
				{title:"termInfo.bankName", filed: 'bankName',type:'text',width:18,tipTitle:"Brank Name"},       
//				{title:"termInfo.district2", filed: 'districtLevel2',type:'text',width:7,tipTitle:"District Level 2"},  
//				{title:"termInfo.district3", filed: 'districtLevel3',type:'text',width:7,tipTitle:"District Level 3"},  
//				{title:"termInfo.location2", filed: 'location2',type:'text',width:7,tipTitle:"Location2"},  
				{title:"termInfo.branchNo", filed: 'branchName',type:'text',width:7,tipTitle:"Brank Code"},  
				{title:"termInfo.holidayAdd", filed: 'holidayAdd',type:'text',width:7,tipTitle:"Holiday Add"},    
				{title:"termInfo.replenishRule", filed: 'replenishRule',type:'text',width:8,tipTitle:"ReplenishRule"},    
//				{title:"termInfo.unitCount", filed: 'ceilingAmount',type:'text',width:6,tipTitle:"UnitCount"},    
//				{title:"termInfo.cashTime", filed: 'timeSlot',type:'text',width:7},    
				{title:"termInfo.indCashSecurity", filed: 'indCashSecurity',type:'text',width:8,tipTitle:"IndCashSecurity"},    
//				{title:"termInfo.indCashReturn", filed: 'indReplenishCost',type:'text',width:8},    
				{title:"termInfo.escort", filed: 'escortName',type:'text',width:5,tipTitle:"Escort"},    
				{title:"termInfo.status", filed: 'status',type:'text',width:5,tipTitle:"Status"},    
//                {title:"entity.action.operation",filed:'operation',type:'btn',width:6,actions:[
//                   {actionName:'showTermInfo(item.id)',name:'entity.action.detail'}
//                      ]}
                    ],
            url:'api/termInfo/page',
			formParams:{
				termNo : $scope.formParam.termNo,
				cusTermNo : $scope.formParam.cusTermNo,
				cusRegionId : $scope.formParam.cusRegionId,
				bankId : $scope.formParam.bankId,
				branchNo : $scope.formParam.branchNo,
				status : $scope.formParam.status,
				escort : $scope.formParam.escort
			}
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
        
        $scope.init = function(){
         	getDict('termStatusList', 'forecast.termStatus'); //设备状态
         	getDict('escortList', 'forecast.escort'); //押运公司
         	getDict('branchList', 'forecast.branch'); //网点名称
         	getDistrictAndLocationList()
         	getBankList();  
//         	getCusgionList();   // 获取区域
//         	changeWidth()
         	$scope.select('#bankNameTerm')
         	$scope.select('#cusRegionTerm')
         	$scope.select('#branchNameTerm')  
         	$scope.select('#statusTerm') 
         	$scope.select('#escortTerm')
         	$scope.select('#district2') 
         	$scope.select('#district3') 
         	$scope.select('#location2') 
          };   
          
          // getHtmlById
         function getHtmlById(id){
        	 var htmlArr=document.getElementById(id)
        	 return htmlArr
            }
//          // 改变宽度
//         function changeWidth(){
//        	 setTimeout(function(){
//        		 var htmlArr=getHtmlById('table-title')
//        		 console.log(htmlArr)
//        	 }, 2000)
//         }
         
         // 可以填写的选择下拉框
         $scope.select=function(id){
         	angular.element(id).select2({		//select2-search__field
         		placeholder: $translate.instant("global.pleaseSelect"),
         		allowClear: true,
         		tags:false
         	})
         }
         
        function getDict(param, parentGroup){
          	SysDictService.getDictListAsync(parentGroup)
          	.then(function(response){
          		if(response.statusCode === '0000'){
          			$scope[param] = response.data;
          		}
          	});
          }
        //获取区域
        function getCusgionList(){
        	FcPublicService.getCusgionList().then(function (response){
        		if (response.statusCode==="0000") {
        			$scope.cusgionList = response.data;
        		}
        	});
        }
        
        $scope.bankTermInfoSelectCheck = function(obj){};
        
        $scope.bankTermInfoSelectItem = function(obj){};
        
//        //获取银行
//        function getBankCheckBox() {
//        	var str = $scope.bankNoStr;
//        	 if($scope.bankNo.length >0){
//   				$scope.formParam.bankId = str.substring(0,str.length-1);
//   			}
//        }
        
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
//			getBankCheckBox();
			$scope.refreshTableList($scope.formParam);
		};	
	
		$scope.resetSearch = function() {
			$scope.formParam = {"status":"1"};
			$scope.bankName="";
		//	$scope.bankNoStr = "";
			getBankList();
			$scope.init()
			};
		
        $scope.addTermInfo = function(){
            $state.go('app.termInfo-edit',{id:""});
        };

        $scope.editTermInfo = function () {
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	var id = $scope.choseArr[0]['id'];
            	$state.go("app.termInfo-edit",{id:id});
            }
        };
		
        //批量编辑
		 $scope.batchEdit = function() {
	    	if (PublicService.isEmptyObject($scope.choseArr[0])) {//没有选择一个的时候提示
	    		var msg = "global.selectEdit";
	        	PublicService.openDialog(msg);
	        	return;
	        }
	    	$state.go("app.batch-edit",{ids:$scope.checked});
	    };
        
        
        /*excel文件导入*/
        $scope.importExcel = function(exportFile){
                var url = globalConstant.devplatform_web_apiPath + 'api/termInfo/importExcel';
                PublicService.submitFile(exportFile,url,'loadAll',$scope);
        };
        
        /*excel文件导入更新设备*/
        $scope.importSettingExcel = function(exportFile){
                var url = globalConstant.devplatform_web_apiPath + 'api/termInfo/batchImportAdjustment';
                PublicService.submitFile(exportFile,url,'loadAll',$scope);
        };
        
        //上传模板
        $scope.upLoadTempFile = function(tempFile){
        	var url = globalConstant.devplatform_web_apiPath + 'api/termInfo/uploadTemplate';
        	PublicService.submitFile(tempFile,url);
        };
        
        //下载模板
        $scope.downLoadFile = function(){
        	TermInfoService.downLoadFile();
        };

	     //批量删除
		 $scope.batchDelete = function() {
	    	var msg = "";
	    	if (PublicService.isEmptyObject($scope.choseArr[0])) {//没有选择一个的时候提示
	        	msg = "global.selectDelete";
	        	PublicService.openDialog(msg);
	        	return;
	        }
	    	msg = "global.messages.deleteConfirm";
	    	PublicService.showConfirmDialog(msg, "confirmDelete", $scope, $scope.checked);
	    };
	    
	    $scope.confirmDelete = function(id){
			 TermInfoService.deleteTermInfo(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
						
					}
				});
		};	
    		
		$scope.showTermInfo = function (id) {
        	 $state.go("app.termInfo-detail",{id:id});
        };
        
        // 刷新页面
        $rootScope.$on("termInfoEdit",function(event,data){
			$scope.loadAll();	
		});
        
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
    }
})();