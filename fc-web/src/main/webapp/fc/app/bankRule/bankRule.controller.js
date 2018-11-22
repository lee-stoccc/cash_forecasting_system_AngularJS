(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('BankRuleController', BankRuleController);

    BankRuleController.$inject = ['$rootScope','FcPublicService','BankRuleService', 'ngDialog', '$state', '$scope', 'PublicService','$window','$stateParams','$translate'];

    function BankRuleController($rootScope,FcPublicService,BankRuleService, ngDialog, $state, $scope,PublicService,$window,$stateParams,$translate) {
    	$window.onunload = function(){
    		console.log('刷新一下窗口');	
    	};
    	
    	$scope.formParam = {};
		$scope.datePickerOpenStatus = {};
		$scope.choseArr = [];
        $scope.tablesConfig = {
     		checkOneAction:'checkOneAction',
     		checkAllAction:'checkAllAction',
 			showCheckBox:true,
            tableTitles:[
				{title:"bankRule.bankName", filed: 'bankName',type:'text-btn',width:20, actions:[{actionName:'showBankRule(item.id)'}]},    
				{title:"bankRule.stockCeiling", filed: 'stockCeiling',type:'text',width:8},    
				{title:"bankRule.frequency", filed: 'frequency',type:'text',width:6},    
				{title:"bankRule.replenishRule", filed: 'replenishRule',type:'text',width:14},    
				{title:"bankRule.holidayAdd", filed: 'holidayAdd',type:'text',width:10},    
				{title:"bankRule.indCashSecurit", filed: 'indCashSecurity',type:'text',width:10},    
				{title:"bankRule.indCashReturn", filed: 'indReplenishCost',type:'text',width:10},    
				{title:"bankRule.unitCount", filed: 'unitCount',type:'text',width:10},    
                    ],
            url:'api/bankRule/page',
			formParams:{
				bankId : $scope.formParam.bankId,
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
        };
        
        $scope.init = function(){
        	getBankList();
        	$scope.select('#bankNoBankRule')
         };
        
         // 可以填写的选择下拉框
         $scope.select=function(id){
         	angular.element(id).select2({		//select2-search__field
         		placeholder: $translate.instant("global.pleaseSelect"),
         		allowClear: true,
         		tags:false
         	})
         }
         
        //获取银行
        function getBankList(){
        	$scope.showCheckBox = false;
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
			$scope.bankName="";
			};

        $scope.addBankRule = function(){
            $state.go('app.bankRule-edit',{id:""});
        };
        
        $scope.showBankRule = function(id){
        	$state.go('app.bankRule-detail',{id:id});
        };

        $scope.editBankRule = function () {
//        	$scope.choseArr = $scope.getCheckValues('delFlag').check;
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	var id = $scope.choseArr[0]['id'];
            	$state.go("app.bankRule-edit",{id:id});
            }
        };
		
		  $scope.batchDelete = function() {
	    	$scope.choseArr = $scope.getCheckValues('delFlag').check;
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
			 BankRuleService.deleteBankRule(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
						$scope.loadAll();
						if (response.msgCode=='1') {
							var message = "bankRule.showMsg";
							PublicService.showConfirmDialog(message,'toTermInfoPage',$scope,id);
						}
					}else{
						PublicService.openDialog(response.msgCode);
					}
				});
		};
		
	     $scope.toTermInfoPage = function(bankId){
	        	$state.go("app.termInfo",{bankId:bankId});
		};
			
		$rootScope.$on("bankRuleEdit",function(event,data){
			$scope.loadAll();	
		});
    }
})();