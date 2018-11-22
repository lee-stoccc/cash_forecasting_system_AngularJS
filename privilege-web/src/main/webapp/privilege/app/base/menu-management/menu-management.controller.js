/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('MenuManagementController', MenuManagementController);

    MenuManagementController.$inject = ['PublicService', '$state','RoleManagerService', 'paginationConstants', 'MenuManagementService','$scope', '$stateParams','ngDialog','$timeout'];
    function MenuManagementController(PublicService,$state,RoleManagerService,paginationConstants,MenuManagementService,$scope, $stateParams,ngDialog,$timeout) {
        
    	$scope.selectMenu = [];
        $scope.menuList = [];
        $scope.selectItem = selectItem;
        $scope.newMenu = newMenu;

        $scope.parentId = 0;
        $scope.m = [];
        $scope.deleteMenus = deleteMenus;
        $scope.menuManage = PublicService.showView('menuManage');

        $scope.formParam = {
        	'menuName':"",
        	'parentId': 0,
        	'parentName':""
        };
        init();
        function init () {
            MenuManagementService.getMenuTreeList({}).then(onSuccess,onError);
        }

        function onSuccess(response) {
            if (response.statusCode === '0000') {
                $scope.menuList = response.data.list;
//                setMenuData($scope.menuList);
            }else{
            	var msg = response.msgCode;
            	$scope.showDialog(msg);
            }
        }

        function onError(error) {
            // AlertService.error(error.data.message);
        }

        function setMenuData(data) {
            if (data === null || data.length === 0){
                return;
            }
            defaultSelect($scope.menuList[0].id);
        }

        function defaultSelect(id) {
            selectItem(id);
            $scope.totalItems = $scope.selectMenu.length;
            $scope.queryCount = $scope.totalItems;
            $scope.formParam.parentId = 0;
            $scope.formParam.parentName = "";
        }

        function selectItem(id) {
            $scope.formParam.parentId = -1;
            $scope.formParam.parentName = "";
            $scope.select_all = false;
            //select_All();
            $scope.selectMenu = [];
            for (var index = 0;index < $scope.menuList.length;index++){   //第一层目录
                if (String($scope.menuList[index]['id']) === String(id)){
                    $scope.formParam.parentId = $scope.menuList[index]['id'];
                    $scope.formParam.queryTerm = '';
                    $scope.formParam.parentName = $scope.menuList[index]['menuName'];
                    $scope.refreshTable();
                    return;
                }
                var menuChildren = $scope.menuList[index].children;
                if (menuChildren !== null){
                    for (var position = 0;position < menuChildren.length;position++){//第二层目录
                        if (String(menuChildren[position]['id']) === String(id)){
                            $scope.formParam.parentId = menuChildren[position]['id'];
                            $scope.formParam.queryTerm = '';
                            $scope.formParam.parentName = menuChildren[position]['menuName'];
                            $scope.refreshTable();
                            return;
                        }
                        var menuChildren2 = $scope.menuList[index].children[position].children;
                        if (menuChildren2 !== null){	//第三层目录
                            for (var pos = 0;pos < menuChildren2.length;pos++){
                                if (String(menuChildren2[pos]['id']) === String(id)){
//                                    $scope.formParam.parentId = menuChildren2[pos]['id'];
//                                    $scope.formParam.queryTerm = '';
//                                    $scope.formParam.parentName = menuChildren2[pos]['menuName'];
                                	 $scope.refreshTable();
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        $scope.tablesConfig = {
                showCheckBox:true,
                tableWidth:'table-menu-width',
                tableTitles:[
                     {title:"devplatformApp.menuManagement.CNM",filed: 'menuName',type:'text-btn',width:'table-item-pre-1',actions:[{actionName:'toComponentManagement(item.id)'}]},
				     {title:"devplatformApp.menuManagement.ENM",filed:'englishName',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.menuManagement.url",filed:'url',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.menuManagement.langSwitch",filed:'langSwitch',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.menuManagement.order",filed:'sort',type:'text',width:'table-item-pre-1'},
				     {title:"devplatformApp.menuManagement.pId",filed:'parentId',type:'text',width:'table-item-pre-1'},
//				     {title:"devplatformApp.menuManagement.pName",filed:'parentName',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.menuManagement.delFlag",filed:'visible',type:'btn-status',width:'table-item-pre-1',actions:[{actionName:'enableMenu(item.id,item.visible)',statusList:[{status:'0',showName:'devplatformApp.menuManagement.select.disabled'},{status:'1',showName:'devplatformApp.menuManagement.select.enabled'}]}]},
				     {title:"devplatformApp.menuManagement.operation",filed:'operation',type:'btn',width:'table-item-pre-2',actions:[
                           {actionName:'toEditMenu(item.id)',name:'devplatformApp.menuManagement.reviser',formEnglishName:'menuManage',englishName:'editBtn'}
                           ]}
                ],
                url:'api/sys-menu/getAllSysMenus',
                formParams:{
                	queryTerm : $scope.formParam.queryTerm,
                	parentId : $scope.formParam.parentId,
                	parentName : $scope.formParam.parentName
                }
        };

        $scope.refreshTable = function(){
            $scope.param = {
                	'queryTerm':$scope.formParam.queryTerm,
                	'parentId': $scope.formParam.parentId,
                };
            $scope.refreshTableList($scope.param); 
        };

//        $scope.loadAll = function() {
//            $scope.refreshTableList($scope.formParam);
//        };
        
        $scope.toComponentManagement = function(id){
        	$state.go('app.form-component-management',{menuFormId:id});
        };
        
        $scope.toEditMenu = function(id){
        	$state.go('app.new-menu',{id:id,type:0});
        };
        

        //删除菜单选项
        function deleteMenus() {
        	$scope.choseArr = $scope.getCheckValues().check;
        	$scope.choseArrParam = $scope.getCheckValues('visible').checkedParamFlags;
        	var msg = "";
        	if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
            	msg = "devplatformApp.menuManagement.selectOne";
            	$scope.showDialog(msg);
            	return;
            }else if($scope.choseArrParam.indexOf("1") != -1){
            	msg = "devplatformApp.menuManagement.onlyDelDisable";
            	$scope.showDialog(msg);
            	return;
            }
            $scope.message = "devplatformApp.menuManagement.delConfirm";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        MenuManagementService.delMenus($scope.checked).then(function (){
                            $scope.closeThisDialog(); //关闭弹窗
                            msg = "global.deleteSuccess";
                            PublicService.openDialog(msg);
                            $state.go('app.menu-management',{},{reload:true});
                        });
                    };
                }]
            });
        }


        function newMenu() {
            if ($scope.formParam.parentId === -1){
                $scope.message = "devplatformApp.menuManagement.notParent";
                ngDialog.openConfirm({
                    template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                    className: 'ngdialog-theme-default',
                    scope: $scope, //将scope传给dialog.html,以便显示提示信息
                    controller: ['$scope', function ($scope) {
                        $scope.confirm = function () {
                            $scope.closeThisDialog(); //关闭弹窗
                        };
                    }]
                });
            }else {
                $state.go('app.new-menu',{parentId:$scope.formParam.parentId,parentName:$scope.formParam.parentName,menuId:$scope.menuId,type:1});
            }
        }
        
        $scope.queryInfo = function() {
        	  function loadAll () {
           	   $scope.formParam = {
       			   classify : $scope.formParam.classify,
                      delFlag : $scope.formParam.delFlag,
                      type : $scope.formParam.type,
                      title : $scope.formParam.title
                  };
                   $scope.refreshTableList($scope.formParam);
               }

        };

        $scope.enableMenu = function(id,visible) {
            if(visible == '0' || visible == null || visible == undefined){   //1 可见
                $scope.message = "devplatformApp.menuManagement.enableConfirm";
                visible = "1";
            }else if(visible == '1'){
                $scope.message = "devplatformApp.menuManagement.disableConfirm";
                visible = "0";
            }
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope:$scope, //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                    $scope.confirm = function(){
                        MenuManagementService.enableSysMenu({menuId:id,visible:visible}).then(function(){
                        	$scope.refreshTable();
                    		$scope.closeThisDialog(); //关闭弹窗
                        	
                        });
                    };
                }]
            });
        };

        $scope.showDialog = function(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                //scope:$scope //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                	$scope.message = msg;
                    $scope.type = "";
                }]
            });
            $timeout(function() {
                ngDialog.close();
            }, 2000);
        };

    }
})();

