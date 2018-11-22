(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('CusRegionController', CusRegionController);

    CusRegionController.$inject = ['CusRegionService', 'ngDialog', '$state', '$scope', 'PublicService'];

    function CusRegionController(CusRegionService, ngDialog, $state, $scope, PublicService) {
    	$scope.formParam = {};
    	$scope.choseArr = [];
    	//页面权限配置，cusgionPage为对应的菜单名称，true为有权限
    	$scope.cusregionManage = PublicService.showView('cusgionPage');
    	$scope.tablesConfig = {
 			showCheckBox:true,
     		checkOneAction:'checkOneAction',
     		checkAllAction:'checkAllAction',
            tableTitles:[
				{title:"cusRegion.regionNo", filed: 'regionNo',type:'text',width:40},    
				{title:"cusRegion.regionName", filed: 'regionName',type:'text',width:30},    
				{title:"cusRegion.taskCeiling", filed: 'taskCeiling',type:'text',width:30}    
                    ],
            url:'api/cusRegion/page',
			formParams:{
				regionNo : $scope.formParam.regionNo,					
				regionName : $scope.formParam.regionName,					
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
	
		$scope.loadAll = function() {
			$scope.refreshTableList($scope.formParam);
			};	
	
		$scope.resetSearch = function() {
			$scope.formParam = {};
			};
		

        $scope.addCusRegion = function(){
        	$state.go('app.cusRegion-edit',{id:""}); 	
        };

        $scope.editCusRegion = function () {
            if ($scope.choseArr.length != 1) {
            	var msg = "global.chooseOneEdit";
            	PublicService.openDialog(msg);
            	return;
            }else{
            	 $state.go("app.cusRegion-edit",{id:$scope.choseArr[0]['id']});
            }
      };
    	//批量删除
		$scope.batchDelete = function() {
	      	$scope.choseArr = $scope.getCheckValues('activated').check;
	      	var msg = "";
	      	if (PublicService.isEmptyObject($scope.choseArr[0])) {//没有选择一个的时候提示
	          	msg = "global.selectDelete";
	          	PublicService.openDialog(msg);
	          	return;
	          }
          	 msg = "global.messages.deleteConfirm";
          	 PublicService.showConfirmDialog(msg, "confirmDelete", $scope, $scope.checked);
     };
        //确认删除
        $scope.confirmDelete = function(id){
			 CusRegionService.deleteCusRegion(id)
				.then(function (response){
					if(response.statusCode === "0000"){
						$scope.loadAll();
						var msg = "global.messages.deleteSuccess";
						PublicService.openDialog(msg);
					}else{
						PublicService.openDialog(response.msgCode);
					}
				});
		};	
    }
})();