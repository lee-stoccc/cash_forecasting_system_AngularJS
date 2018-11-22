/**
 * Created by NieFZ on 2016/12/3.
 * Controllers
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
        .controller('devplatformCtrl', ['$timeout','$translate','$translatePartialLoader','$ocLazyLoad','$stateParams','$compile','LayoutService', 'AlertService', '$scope', '$window', '$state', '$location', '$localStorage', '$sessionStorage', 'ngDialog', '$uibModal','$rootScope', 'globalConstant',
            function ($timeout,$translate,$translatePartialLoader,$ocLazyLoad,$stateParams,$compile, LayoutService, AlertService, $scope, $window, $state, $location, $localStorage, $sessionStorage, ngDialog, $uibModal, $rootScope, globalConstant) {
        	
        		/*$scope.$on('tabWidth',function(event, data){
        			$scope.tabWidth = data;
        		});*/
        		$scope.tableList = [];
        		$scope.viewList = [];
                $scope.app = {
                    name: '新平台',
                    settings: {
                        navbarHeaderColor: 'bg-black',
                        navbarCollapseColor: 'bg-white-only',
                        asideColor: 'bg-black',
                        headerFixed: true,
                        asideFixed: false,
                        asideFolded: false,
                        asideDock: false,
                        container: false
                    }
                };

              
                $scope.logout = function () {
                    if(localStorage.Token){
                        LayoutService.layoutLog(localStorage.user)
                            .then(function (response) {
                                if (response.statusCode === '0000') {
                                    localStorage.clear();
                                    delete $localStorage.authenticationToken;
                                    delete $sessionStorage.authenticationToken;
                                    delete $localStorage.userInfo;
                                    //delete $sessionStorage.tabList;
                                    //delete $sessionStorage.tabLink;
                                    $state.go('login');
                                }
                            });
                    }
                };
                //根据不同项目展示不同的头文件和body文件以及对应的国际化文件
                $scope.showHeader = function () {
                	LayoutService.getHeader()
                    .then(function (response) {
                        if (response.statusCode === '0000') {
                        	
                        	if (response.data!=null) {
                        		$scope.app.key =  response.data.appKey;
                        		$scope.app.productLogo = response.data.appLogo;
                        		localStorage.appName = response.data.appName;
                                localStorage.header = response.data.appHeader;
                            	localStorage.homeContent = response.data.appContent;
                            	localStorage.homeJson = response.data.appJson;
                            	localStorage.index = response.data.appIndex;
							}
                        }
                    });
                };
                
                $scope.editPassword = function () {
                    $scope.message = "确认修改密码吗？";
                    $scope.type = "confirm";
                    ngDialog.open({
                        template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                        className: 'ngdialog-theme-default',
                        scope: $scope, //将scope传给dialog.html,以便显示提示信息
                        controller: function ($scope) {
                            $scope.confirm = function () {
                                $scope.loginName = JSON.parse(localStorage.user).login;
                                $uibModal.open({
                                    templateUrl: 'privilege/app/base/user/user-editPassword.html',
                                    controller: 'UserEditPasswordController',
                                    size: 'lg',
                                    keyboard: false,//不给按Esc退出预览
                                    backdrop: 'static',
                                    resolve: {
                                        deps: ['$ocLazyLoad',
                                            function ($ocLazyLoad) {
                                                return $ocLazyLoad.load([
                                                    'privilege/app/base/user/user-editPassword.controller.js',
                                                    'privilege/app/base/user/user.service.js'
                                                ]);
                                            }],
                                        translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                                            $translatePartialLoader.addPart('user');
                                            return $translate.refresh();
                                        }],
                                        dep: function () {
                                            return $scope;
                                        }
                                    }
                                });
                                $scope.closeThisDialog(); //关闭弹窗
                            };
                        }
                    });
                };
                
                $scope.contentWidth = function(type){
                };
                
                //记录上次点击的菜单
                if(!localStorage.Token){
                	$sessionStorage.tabList = [];
                	$sessionStorage.tabLink = {};
                }
                
                if(!$sessionStorage.tabList){
                	$sessionStorage.tabList = [];
                }
                
                if(!$sessionStorage.tabLink){
                	$sessionStorage.tabLink = {};
                }
                
                $scope.closeContent = function(index){
                	$sessionStorage.tabList.splice($sessionStorage.tabList.length - (index + 1), 1);
            		if($sessionStorage.tabLink.hasOwnProperty($scope.tableList[index].id)){
            			delete $sessionStorage.tabLink[$scope.tableList[index].id];
            		}
            		$scope.tableList.splice(index, 1);
            		$scope.viewList.splice(index, 1);
            		if($sessionStorage.tabList.length === 0){
            			$scope.activeTabView = "";
	            	}else{
	            		var id = $sessionStorage.tabList[0];
	            		$scope.activeTabView = id;
	            	}
	            };
                                
                $scope.addContent = function(item){
                	var id = item.url;
                	//先验证有没有tab
                	var index = $sessionStorage.tabList.indexOf(id);
                	if(index > -1){
                		$scope.activeTabView = id;
                	}else{
                		$scope.addHtmlView(item);
                		$sessionStorage.tabList.unshift(id); 
                	}
                };
                
                $scope.addHtmlView = function(item){
                	var id = item.url;
            		var path = '';
            		var jsFiles = [];
            		switch(id){		//坑爹的按需加载JS文件及国际化JSON文件
            		    case 'app.bankRule':
            		    	$translatePartialLoader.addPart('bankRule');
            		    	path = "fc/app/bankRule/bankRule.html";
            		    	jsFiles = [
                                       'fc/app/bankRule/bankRule.controller.js',
                                       'fc/app/bankRule/bankRule.service.js', 
                                       'fc/app/bankRule/bankRule.state.js'  
    	                            ];
            		        break;
            		    case 'app.holiday':
            		    	$translatePartialLoader.addPart('holiday');
            		    	path = "fc/app/holiday/holiday.html";
            		    	jsFiles = [
                                       'fc/app/holiday/holiday.controller.js',
                                       'fc/app/holiday/holiday.service.js', 
                                       'fc/app/holiday/holiday.state.js' 
    	                            ];
            		        break;
            		    case 'app.cusRegion':
            		    	$translatePartialLoader.addPart('cusRegion');
            		    	path = "fc/app/cusRegion/cusRegion.html";
            		    	jsFiles = [
       	                            'fc/app/cusRegion/cusRegion.controller.js',
    	                            'fc/app/cusRegion/cusRegion.service.js',                          
    	                            'fc/app/cusRegion/cusRegion.state.js'
    	                            ];
            		        break;
            		    case 'app.bankInfo':
            		    	$translatePartialLoader.addPart('bankInfo');
            		    	path = "fc/app/bankInfo/bankInfo.html";
            		    	jsFiles = [
                                       'fc/app/bankInfo/bankInfo.controller.js',
                                       'fc/app/bankInfo/bankInfo.service.js', 
                                       'fc/app/bankInfo/bankInfo.state.js' 
    	                            ];
            		        break;
            		    case 'app.termInfo':
            		    	$translatePartialLoader.addPart('termInfo');
            		    	$translatePartialLoader.addPart('bankRule');
            		    	path = "fc/app/termInfo/termInfo.html";
            		    	jsFiles = [
           	                            'fc/app/termInfo/termInfo.controller.js',
        	                            'fc/app/termInfo/termInfo.service.js',
        	                            'fc/app/bankRule/bankRule.service.js',
        	                            'fc/app/termInfo/termInfo.state.js'   
    	                            ];
            		        break;
            		    case 'app.termMonitorData':
    	        			$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('termMonitor');
            		    	path = "fc/app/processData/termMonitor/termMonitor.html";
            		    	jsFiles = [
          	                         'fc/app/processData/termMonitor/termMonitor.controller.js',
        	                         'fc/app/processData/termMonitor/termMonitor.service.js', 
        	                         'fc/app/termInfo/termInfo.service.js',
        	                         'fc/app/bankRule/bankRule.service.js'   
    	                            ];
            		        break;
            		    case 'app.castData':
    	        			$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('termMonitor');
    	        			$translatePartialLoader.addPart('castData');
            		    	path = "fc/app/processData/castData/castData.html";
            		    	jsFiles = [
          	                         'fc/app/processData/castData/castData.controller.js',
        	                         'fc/app/processData/castData/castData.service.js', 
        	                         'fc/app/termInfo/termInfo.service.js',
        	                         'fc/app/bankRule/bankRule.service.js'   
    	                            ];
            		        break;
            		        
            		    case 'app.returnData':
    	        			$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('castData');
            		    	path = "fc/app/processData/returnData/returnData.html";
            		    	jsFiles = [
      		                         'fc/app/processData/returnData/returnData.controller.js',
    		                         'fc/app/processData/returnData/returnData.service.js', 
    		                         'fc/app/termInfo/termInfo.service.js',
    		                         'fc/app/bankRule/bankRule.service.js'   
    	                            ];
            		        break;
            		    case 'app.dailyUsingData':
    	        			$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('termMonitor');
    	        			$translatePartialLoader.addPart('bankRule');
            		    	path = "fc/app/processData/dailyUsing/dailyUsing.html";
            		    	jsFiles = [
          	                         'fc/app/processData/dailyUsing/dailyUsing.controller.js',
        	                         'fc/app/processData/dailyUsing/dailyUsing.service.js', 
        	                         'fc/app/processData/dailyUsing/dailyUsing.state.js', 
        	                         'fc/app/termInfo/termInfo.service.js',
        	                         'fc/app/bankRule/bankRule.service.js'  
    	                            ];
            		        break;
            		    case 'app.forecastPlan':
            		    	$translatePartialLoader.addPart('forecastPlan');
            		    	path = "fc/app/forecastPlan/forecastPlan.html";
            		    	jsFiles = [
           	                            'fc/app/forecastPlan/forecastPlan.controller.js',
        	                            'fc/app/forecastPlan/noForecastPlan.controller.js',
        	                            'fc/app/forecastPlan/forecastPlan.service.js',
        	                            'fc/app/forecastPlan/stock/stock.state.js', 
        	                            'fc/app/forecastPlan/forecastPlan.state.js'
    	                            ];
            		        break;
            		    case 'app.forecastReportform':
    	        			$translatePartialLoader.addPart('forecastReport');
            		    	path = "fc/app/forecastReportform/forecastReportform.html";
            		    	jsFiles = [
       	                            'fc/app/forecastReportform/forecastReportform.controller.js',
    	                            'fc/app/forecastReportform/forecastReportform.service.js',
    	                            'fc/app/forecastReportform/forecastReportform.state.js'
    	                            ];
            		        break;
            		    case 'app.eventManagement':
            		    	$translatePartialLoader.addPart('forecastReport');
            		    	$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('eventManagement');
            		    	path = "fc/app/eventManagement/eventManagement.html";
            		    	jsFiles = [
       	                            'fc/app/eventManagement/eventManagement.controller.js',
    	                            'fc/app/eventManagement/eventManagement.service.js',
    	                            'fc/app/eventManagement/eventManagement.state.js'
    	                            ];
            		        break;
              		    case 'app.cashUseRate':
              		    	$translatePartialLoader.addPart('termInfo');
    	        			$translatePartialLoader.addPart('cashUseRate');
            		    	path = "fc/app/cashUseRate/cashUseRate.html";
            		    	jsFiles = [
          	                            'fc/app/cashUseRate/cashUseRate.controller.js',
        	                            'fc/app/cashUseRate/cashUseRate.service.js',
        	                            'fc/app/cashUseRate/cashUseRate.state.js',
        	                            'fc/app/termInfo/termInfo.service.js',
    	                            ];
            		        break;    
              		  case 'app.cashGuaranteeRate':
              			$translatePartialLoader.addPart('termInfo');
  	        			$translatePartialLoader.addPart('cashGuaranteeRate');
          		    	path = "fc/app/cashGuaranteeRate/cashGuaranteeRate.html";
          		    	jsFiles = [
        	                        'fc/app/cashGuaranteeRate/cashGuaranteeRate.controller.js',
      	                            'fc/app/cashGuaranteeRate/cashGuaranteeRate.service.js',
      	                            'fc/app/cashGuaranteeRate/cashGuaranteeRate.state.js',
      	                            'fc/app/termInfo/termInfo.service.js',
  	                            ];
          		        break;       
              		  case 'app.inventoryStatistics':
              			  	$translatePartialLoader.addPart('termInfo');
              			  	$translatePartialLoader.addPart('termMonitor');  // 翻译器
    	        			$translatePartialLoader.addPart('inventoryStatistics');
            		    	path = "fc/app/inventoryStatistics/inventoryStatistics.html";
            		    	jsFiles = [
            		    	           'fc/app/inventoryStatistics/inventoryStatistics.controller.js',
        	                           'fc/app/inventoryStatistics/inventoryStatistics.service.js',
        	                           'fc/app/inventoryStatistics/inventoryStatistics.state.js',
        	                           'fc/app/termInfo/termInfo.service.js',
        	                           'fc/app/processData/termMonitor/termMonitor.service.js', 
    	                            ];
            		        break;
            		        
            		        
              		  case 'app.sys-dict':
  	        			$translatePartialLoader.addPart('sysDict');
          		    	path = "privilege/app/base/sys-dict/sys-dict.html";
          		    	jsFiles = [
        	                        'privilege/app/base/sys-dict/sys-dict.controller.js',
        	                        'privilege/app/base/sys-dict/sys-dict.service.js',
        	                        'privilege/app/base/sys-dict/sys-dict.state.js'
  	                            ];
          		        break;
              		  case 'app.sys-operateLog':
    	        			$translatePartialLoader.addPart('sysOperateLog');
            		    	path = "privilege/app/base/sys-operateLog/sys-operateLog.html";
            		    	jsFiles = [
										'privilege/app/base/sys-operateLog/sys-operateLog.controller.js',
										'privilege/app/base/sys-operateLog/sys-operateLog.service.js',
										'privilege/app/base/sys-operateLog/sys-operateLog.state.js'
    	                            ];
            		        break;
              		  case 'app.role-manager':
    	        			$translatePartialLoader.addPart('sysRole');
            		    	path = "privilege/app/base/role-manager/role-manager.html";
            		    	jsFiles = [
										'privilege/app/base/role-manager/role-manager.controller.js',
										'privilege/app/base/role-manager/role-manager.state.js',
										'privilege/app/base/role-manager/new-role-manager/new-role-manager.controller.js' 
    	                            ];
            		        break;
              		  case 'app.menu-management':
    	        			$translatePartialLoader.addPart('menuManagement');
            		    	path = "privilege/app/base/menu-management/menu-management.html";
            		    	jsFiles = [
										'privilege/app/base/menu-management/menu-management.controller.js',
										'privilege/app/base/menu-management/menu-management.service.js',
										'privilege/app/base/menu-management/menu-management.state.js' 
    	                            ];
            		        break;
              		  case 'app.user':
    	        			$translatePartialLoader.addPart('user');
            		    	path = "privilege/app/base/user/user.html";
            		    	jsFiles = [
										'privilege/app/base/user/user.controller.js',
										'privilege/app/base/user/user.service.js',
										'privilege/app/base/user/user.state.js' 
    	                            ];
            		        break;
            		    default:
            		    	return;
            		}
            		$scope.addHtmlContent(item,path,jsFiles);
                };
                
                $scope.addHtmlContent = function(item,path,jsFiles){
                    $ocLazyLoad.load(jsFiles);
    				$translatePartialLoader.addPart('global');
    				$translate.refresh();
                	$scope.activeTabView = item.url;
               		$timeout(function () {
               			var tab = {
               				id:item.url,
               				idParams:"'" + item.url + "'",
               				langSwitch:item.langSwitch,
               			};
               			
               			if($scope.tableList.in_array(tab)){
               				return;
               			}
//               			$scope.tableList.push(tab);
               			$scope.tableList.splice($scope.tableList.length, 1,tab);
               			var view = {
               				id:item.url,
               				path:path
               			};
//               			$scope.viewList.push(view);
               			$scope.viewList.splice($scope.viewList.length, 1,view);
                    	// 添加到数组记录
                    	if(!$sessionStorage.tabLink.hasOwnProperty(item.url)){
                    		$sessionStorage.tabLink[item.url] = item;
                    	}
            		}, 100);
                };
                                
                $scope.selectTab = function(index){
                	$scope.activeTabView = $scope.tableList[index].id;
                };
                
                $scope.tabLoad = function(){
                	if($sessionStorage.tabLink){
                		$scope.tableList = [];
                		$scope.viewList = [];
//                		$sessionStorage.tabLink.unique3();
	                	for(var key in $sessionStorage.tabLink){
	                		var item = $sessionStorage.tabLink[key];
	                		$scope.addHtmlView(item);
	                	}
                	}
                	if($sessionStorage.tabList && $sessionStorage.tabList.length > 0){
                		$timeout(function () {
                        	var id = $sessionStorage.tabList[0];
                        	$scope.activeTabView = id;
                		},1000);
                    }
                };
                
                Array.prototype.in_array = function(obj){
                    for(var index = 0;index < this.length;index++){
                        if(this[index] == obj)
                            return true;
                    }
                    return false;
                };
                
            }]);

})();
