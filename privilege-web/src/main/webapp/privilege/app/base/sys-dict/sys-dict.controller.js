(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SysDictManagementController', SysDictManagementController);

    SysDictManagementController.$inject = ['PublicService','Upload','$window','$location','globalConstant','Principal', 'SysDictService', 'ParseLinks', 'AlertService', '$state', 'paginationConstants', 'JhiLanguageService', '$scope', '$stateParams', '$rootScope', 'ngDialog'];

    function SysDictManagementController(PublicService,Upload,$window,$location,globalConstant,Principal, SysDictService, ParseLinks, AlertService, $state, paginationConstants, JhiLanguageService, $scope, $stateParams, $rootScope, ngDialog) {

        $scope.currentAccount = null;
        $scope.languages = null;
        $scope.clear = clear;
        $scope.deleteSysDict = deleteSysDict;
        $scope.importExcel = importExcel;
        $scope.exportExcel = exportExcel;
        $scope.toEditDict = toEditDict;
        $scope.fileName = '';
        $scope.sysDictManage = PublicService.showView('sysDictManage');

        $scope.formParam = {group: '', dictKey: '', dictDesc: ''};
        $scope.parentGroup = $stateParams.parentGroup;
        $scope.lastParent = $stateParams.parentGroup;

        getLastParent();

        JhiLanguageService.getAll().then(function (languages) {
            $scope.languages = languages;
        });
//        Principal.identity().then(function (account) {
//            $scope.currentAccount = account;
//        });
        
        $scope.tablesConfig = {
                showCheckBox:true,
                tableWidth:'table-default-width',
                tableTitles:[
                     {title:"devplatformApp.sysDict.group",filed: 'group',type:'text-btn',width:20, actions:[{actionName:'toPage(item.group)',name:'item.group', btnClass: "text-muted"}]},
				     {title:"devplatformApp.sysDict.dictKey",filed:'dictKey',type:'text',width:'table-item-pre-1'},
				     {title:"devplatformApp.sysDict.dictDesc",filed:'dictDesc',type:'text',width:'table-item-pre-2'},
				     {title:"devplatformApp.sysDict.sort",filed:'sort',type:'text',width:'table-item-pre-1'},
				     {title:"devplatformApp.sysDict.parentGroup",filed:'parentName',type:'text',width:'table-item-pre-1'},
				     {title:"devplatformApp.sysDict.childrenCount",filed:'childrenCount',type:'text',width:'table-item-pre-1'},
				     {title:"devplatformApp.sysDict.delFlag",filed:'delFlag',type:'btn-status',width:'table-item-pre-1',actions:[{actionName:'enableSysDict(item.id,item.delFlag)',statusList:[{status:'0',showName:'global.disabled'},{status:'1',showName:'global.enabled'}]}]},
				     {title:"entity.action.operation",filed:'operation',type:'btn',width:'table-item-pre-3',actions:[
                           {actionName:'toEditDict(item.id)',name:'devplatformApp.sysDict.home.edit',formEnglishName:'sysDictManage',englishName:'editBtn'}
                           ]}
                ],
                url:'api/sysDict/list',
                formParams:{
                	group: $scope.formParam.group,
                	dictKey: $scope.formParam.dictKey,
                	dictDesc: $scope.formParam.dictDesc,
                    parentGroup: $scope.parentGroup
                }
        };
        
        $scope.toPage = function(parentGroup) {
        	$scope.formParam = {
        			group: $scope.formParam.group,
                	dictKey: $scope.formParam.dictKey,
                	dictDesc: $scope.formParam.dictDesc,
                    parentGroup: parentGroup
                };
            $scope.refreshTableList($scope.formParam);
//        	$state.go("app.sys-dict",{parentGroup:parentGroup});
        };

        $scope.loadAll = function(parentGroup) {
        	if (parentGroup !== null && parentGroup !== undefined) {
                $scope.parentGroup = parentGroup;
                getLastParent();
            }
        	$scope.formParam = {
    			group: $scope.formParam.group,
            	dictKey: $scope.formParam.dictKey,
            	dictDesc: $scope.formParam.dictDesc,
                parentGroup: $scope.parentGroup
            };
            $scope.refreshTableList($scope.formParam);
        };
        
        
        function toEditDict(id){
        	$state.go('app.sys-dict-edit',{parentGroup:$scope.formParam.parentGroup,id:''});
        };
            
        function onError(error) {
            AlertService.error(error.data.message);
        }

        function clear() {
        	$state.go('app.user-edit',{id:'',menuId:''});
//            $scope.formParam = {group: '', dictKey: '', dictDesc: ''};
        }

        //删除数据字典
        function deleteSysDict(id) {
        	$scope.choseArr = $scope.getCheckValues().check;
            if ($scope.choseArr[0] == "" || $scope.choseArr.length == 0) {//没有选择一个的时候提示
                ngDialog.openConfirm({
                    template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                    className: 'ngdialog-theme-default',
                    controller: ['$scope',function($scope){//将scope传给dialog.html,以便显示提示信息
                    	$scope.message = "devplatformApp.sysDict.prompt.selectOne";
                        $scope.type = "";
                    }] 
                });
                return;
            }

            $scope.message = "devplatformApp.sysDict.delete.question";
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                        var id = "";
                        for (var i = 0; i < $scope.choseArr.length; i++) {
                            if (i === 0) {
                                id += "'" + $scope.choseArr[i] + "'";
                            } else {
                                id += ",'" + $scope.choseArr[i] + "'";
                            }
                        }
                        SysDictService.deleteSysDict(id).then(function (res) {
                        	if(res.statusCode==='0000'){
                        		var msg = "devplatformApp.sysDict.prompt.deleteSuccess";
        						PublicService.openDialog(msg);
                        	}
                        	$scope.loadAll($scope.parentGroup);
                        });
                        $scope.closeThisDialog(); //关闭弹窗
                    };
                }]
            });
        }

        function getLastParent() {
            if ($scope.parentGroup && $scope.parentGroup !== '0') {//获取父节点的父节点
                SysDictService.getSysDict({parentGroup:$scope.parentGroup}).then(function (response) {
                    $scope.sysDict = response.data;
                    $scope.lastParent = response.data.parentGroup;
                });
            }
        }

        /*excel文件导出*/
        function exportExcel(){

            if(''===$scope.formParam.group || ''===$scope.formParam.dictKey || ''===$scope.formParam.dictDesc){
                $scope.message = "devplatformApp.sysDict.prompt.confirmExport";
                $scope.type = "confirm";
                ngDialog.openConfirm({
                    template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                    className: 'ngdialog-theme-default',
                    scope: $scope, //将scope传给dialog.html,以便显示提示信息
                    controller: ['$scope', function ($scope) {
                        $scope.confirm = function () {
                            $scope.closeThisDialog(); //关闭弹窗
                            SysDictService.exportExcel($scope.formParam.group, $scope.formParam.dictKey, $scope.formParam.dictDesc, $scope.parentGroup);

                        };
                    }]
                });
            }else{
                SysDictService.exportExcel($scope.formParam.group, $scope.formParam.dictKey, $scope.formParam.dictDesc, $scope.parentGroup);
            }

        }

        /*excel文件导入*/
        function importExcel(){

            var str = GetFileExt($scope.fileName.name);
            if(str!=='.xls' && str!=='.xlsx'){
            	$scope.message = "devplatformApp.sysDict.prompt.uploadNotExcel";
            	PublicService.showMessageDialog($scope);
            }else{
                var url = globalConstant.devplatform_web_apiPath + 'api/sysDict/import';
                Upload.upload({
                    method: 'post',
                    url: url,
                    file : $scope.fileName
                }).then(function (response) {
                    console.log(response);
                    if(response.data.statusCode==='0000'){
                    	$scope.message = "devplatformApp.sysDict.prompt.exportSuccess";
                    	PublicService.showMessageDialog($scope);
                    }else if(response.data.statusCode==='false'){
                    	$scope.message = "devplatformApp.sysDict.prompt.importNotExcel";
                    	PublicService.showMessageDialog($scope);
                    }else{
                    	$scope.message = "devplatformApp.sysDict.prompt.invalidFile";
                    	PublicService.showMessageDialog($scope);
                    }
                });
            }
        }

        //取文件后缀名
        function GetFileExt(filepath) {
            if (filepath != "") {
                var pos = "." + filepath.replace(/.+\./, "");
                return pos;
            }
        }
        
        $scope.enableSysDict = function (id, delFlag) {
            if (delFlag == '0' || delFlag == null || delFlag == undefined) {
                $scope.message = "devplatformApp.sysDict.prompt.confirmEnable";
                delFlag = "1";
            } else if (delFlag == '1') {
                $scope.message = "devplatformApp.sysDict.prompt.confirmDisable";
                delFlag = "0";
            }
            $scope.type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller: ['$scope', function ($scope) {
                    $scope.confirm = function () {
                    	SysDictService.enableSysDict({id: id, delFlag: delFlag}).then(function(response){
                        	if(response.data.statusCode === '0000'){
                        		$scope.loadAll();
                        	}
                        });
                        $scope.closeThisDialog(); //关闭弹窗
                    };
                }]
            });
        };


    }
})();
