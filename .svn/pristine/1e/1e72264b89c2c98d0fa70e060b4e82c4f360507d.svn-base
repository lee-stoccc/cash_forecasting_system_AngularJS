/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('RoleManagerConfigurationController', RoleManagerConfigurationController);

    RoleManagerConfigurationController.$inject = [ 'RoleManagerConfigurationService','$state',  'paginationConstants', '$scope', '$stateParams','ngDialog','$timeout','PublicService','$uibModalInstance'];

    function RoleManagerConfigurationController(RoleManagerConfigurationService,$state, paginationConstants,$scope, $stateParams,ngDialog,$timeout,PublicService,$uibModalInstance) {
        $scope.roleList = [];
        $scope.totalFormList = [];
        $scope.formList = [];
        $scope.totalComponentList = [];
        $scope.componentList = [];
        $scope.checkMenuIdList = [];
        $scope.checkFormIdList = [];
        $scope.checkComponentIdList = [];
        $scope.showCheckBox = true;
        $scope.selectCheck = false;
        $scope.selectItem = selectForm;
        $scope.selectCheck = selectCheck;
        $scope.selectComponent = selectComponent;
        $scope.checked_All_Form = false;
        $scope.checked_All_Component = false;
        $scope.checkedAllComponent = checkedAllComponent;
        $scope.checkedComponent = checkedComponent;
        $scope.checkedAllForm = checkedAllForm;
        $scope.checkedForm = checkedForm;
        $scope.saveRoleMenu = saveRoleMenu;
        $scope.menuId = $stateParams.menuId;
        $scope.clear = clear;

        if (!PublicService.isEmptyObject($stateParams.id)){
            init();
        }
        function init () {
            RoleManagerConfigurationService.getAllSysRoleMenus({roleId:$stateParams.id}).then(function (response) {
                if (response.statusCode === '0000') {
                    $scope.roleList = response.data.menuList;
                    $scope.totalFormList = response.data.formList;
                    $scope.totalComponentList = response.data.componentList ;
                    setDefaultRoleData($scope.roleList);
                }else{
                    ngDialog.openConfirm({
                        template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                        className: 'ngdialog-theme-default',
                        //scope:$scope //将scope传给dialog.html,以便显示提示信息
                        controller:['$scope', function($scope){
                        	$scope.message = response.msgCode;
                        }]
                    });
                    /*$timeout(function() {
                        ngDialog.close();
                    }, 2000);*/
                }
            });
        }

        function selectForm(id) {                   //
            $scope.formList = [];
            $scope.componentList = [];
            $scope.checked_All_Form = false;
            $scope.checked_All_Component = false;
            if ($scope.totalFormList === null){
                return;
            }
            for (var index = 0;index < $scope.totalFormList.length;index++){
                   if ($scope.totalFormList[index]['id'] === id){
                       $scope.formList = $scope.totalFormList[index]['list'];
                       if ($scope.formList !== null && $scope.formList.length > 0){
                           selectComponent($scope.formList[0]['id']);
                       }
                       break;
                   }
            }
        }

        function selectComponent(id) {
            $scope.checked_All_Component = false;
            $scope.componentList = [];
            if ($scope.totalComponentList === null){
                return;
            }
            for (var index = 0;index < $scope.totalComponentList.length;index++){
                if ($scope.totalComponentList[index]['id'] === id){
                    $scope.componentList = $scope.totalComponentList[index]['list'];
                    break;
                }
            }
        }

        function setDefaultRoleData(data) {
            if (data === null || data.length === 0){
                return;
            }
            $scope.formList = [];
            var roleChildren = data[0].children;
            if (roleChildren !== null && roleChildren.length === 0){
                var roleChildren2 = roleChildren[0].children;
                if (roleChildren2 !== null || roleChildren2.length === 0){
                    selectForm(roleChildren2[0].id)
                }else {
                    selectForm(roleChildren2.id);
                }
            }else {
                selectForm(data[0].id);
            }
        }

        function selectCheck(id) {          //点击checkBox找到对应的role  有子集的把子集全选或全部选   有父级的同理
            for (var index = 0;index < $scope.roleList.length;index++){
                if (String($scope.roleList[index]['id']) === String(id)){   //第一层找到  不用判断父级
                    var itemChildren = $scope.roleList[index]['children'];
                    if (itemChildren !== null && itemChildren.length > 0){
                        for (var checkIndex = 0;checkIndex < itemChildren.length; checkIndex++){
                            itemChildren[checkIndex]['checked'] = $scope.roleList[index]['checked'];
                            selectCheck(itemChildren[checkIndex]['id']);
                        }
                    }else {
                        checkedAllFormByMenuId($scope.roleList[index]['id'],$scope.roleList[index]['checked']);
                    }
                    return;
                }
                var menuChildren = $scope.roleList[index].children;
                if (menuChildren !== null){                     //第一层找到  不用判断父级
                    for (var position = 0;position < menuChildren.length;position++){
                        if (String(menuChildren[position]['id']) === String(id)){
                            var menuChildren1 = menuChildren[position]['children'];
                            if (menuChildren1 !== null && menuChildren1.length > 0){
                                for (var checkPos = 0;checkPos < menuChildren1.length; checkPos++){
                                    menuChildren1[checkPos]['checked'] = menuChildren[position]['checked'];
                                    selectCheck(menuChildren1[checkPos]['id']);
                                }
                            }else {
                                if (menuChildren[position]['checked']){
                                    checkedMenuByMenuParentId(menuChildren[position]['parentId']);
                                }
                            }
                            return;
                        }
                        var menuChildren2 = menuChildren[position].children;
                        if (menuChildren2 !== null && menuChildren2.length > 0){
                            for (var pos = 0;pos < menuChildren2.length;pos++){
                                if (String(menuChildren2[pos]['id']) === String(id)){
                                    checkedAllFormByMenuId(id,menuChildren2[pos]['checked']);
                                    if (menuChildren2[pos]['checked']){
                                        checkedMenuByMenuParentId(menuChildren2[pos]['parentId']);
                                    }
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }

        // function checkedMenuByMenuParentId(parentId) {
        //
        // }

        function checkedMenuByMenuParentId(menuId) {            //有可能需要做3层嵌套判断
            $scope.isFindMenuId = false;
            if($scope.roleList === null  || $scope.roleList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.roleList.length;index++){     //如果第一层就找到   运气好  几乎不可能
                 if ($scope.roleList[index]['id'] === menuId){
                     $scope.roleList[index]['checked'] = true;
                     return;
                 }
                 //第一层不是  查找的 children有没有
                var children = $scope.roleList[index]['children'];
                 if (children === null || children.length === 0){
                     continue;    //一般不会出现这样的情况   以防万一
                 }
                 for (var position = 0;position < children.length;position++){
                     if (children[position]['id'] === menuId){
                         children[position]['checked'] = true;
                         checkedMenuByMenuParentId(children[position]['parentId']);
                         return;
                     }

                     //第一层children不是  查找的children的 children有没有
                     var grandChildren = children[position]['children'];   //到孙子了
                     if (grandChildren === null || grandChildren.length === 0){
                         continue;    //一般不会出现这样的情况   以防万一
                     }

                     for (var pos = 0;pos < grandChildren.length;pos++){
                         if (grandChildren[pos]['id'] === menuId){
                             grandChildren[pos]['checked'] = true;
                             checkedMenuByMenuParentId(grandChildren[pos]['parentId']);
                             return;
                         }
                     }
                 }
            }
        }

        function checkedAllFormByMenuId(menuId,checked) {
            if($scope.totalFormList === null  || $scope.totalFormList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.totalFormList.length;index++){
                if ($scope.totalFormList[index]['id'] === menuId){
                    var formList = $scope.totalFormList[index]['list'];
                    if (formList === null || formList.length === 0){
                        return;
                    }
                    for (var position = 0;position < formList.length;position++){
                        formList[position]['checked'] = checked;
                        checkedAllComponentByFrom(formList[position]['id'],checked);
                    }
                }
            }
        }

        function checkedAllForm() {   //formList的全选全不选操作
            if($scope.formList === null  || $scope.formList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.formList.length;index++){
                $scope.formList[index]['checked'] = $scope.checked_All_Form;
                checkedAllComponentByFrom($scope.formList[index]['id'],$scope.checked_All_Form);      //需要把当前表单下的所有选项勾选操作
            }
            $scope.checked_All_Component = $scope.checked_All_Form;
            if ($scope.checked_All_Form){
                checkedMenuByMenuParentId($scope.formList[0]['menuId']);
            }
        }

        function checkedForm(id,menuId,checked) {      //主动勾选
            if (checked){
                checkedMenuByMenuParentId(menuId);
            }else {
                $scope.checked_All_Form = false;
            }
            if ($scope.componentList !==null && $scope.componentList.length > 0){
                if ($scope.componentList[0]['formId'] === id){
                    $scope.checked_All_Component = checked;
                    checkedAllComponent();
                }
            }
        }

        function checkedFormByComponent(formId) {           //被动勾选Form
            if($scope.formList === null  || $scope.formList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.formList.length;index++){
                if ($scope.formList[index]['id'] === formId){
                    $scope.formList[index]['checked'] = true;
                    break
                }
            }
            checkedMenuByMenuParentId($scope.formList[index]['menuId']);
        }

        function checkedAllComponentByFrom(formId,checked) {        //componentList被动勾选 FORM
            if($scope.totalComponentList === null  || $scope.totalComponentList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.totalComponentList.length;index++){
                if ($scope.totalComponentList[index]['id'] === formId){
                    var componentList = $scope.totalComponentList[index]['list'];
                    if (componentList === null || componentList.length === 0){
                        return;
                    }
                    for (var position = 0;position < componentList.length;position++){
                        componentList[position]['checked'] = checked;
                    }
                }
            }
        }

        function checkedAllComponent() {        //componentList的全选全不选操作
            if($scope.componentList === null  || $scope.componentList.length === 0){
                return;
            }
            for (var index = 0;index < $scope.componentList.length;index++){
                $scope.componentList[index]['checked'] = $scope.checked_All_Component;
            }
            if ($scope.checked_All_Component){
                checkedFormByComponent($scope.componentList[0]['formId']);
            }
        }

        function checkedComponent(formId,checked) {
            if (checked){           //如果是勾选状态需要判断form选项是不是也勾选上  没有则勾选上
                checkedFormByComponent(formId);
            }else {
                $scope.checked_All_Component = false;
            }
        }

        function getRoleCheck() {
            $scope.checkMenuIdList = [];
            if ($scope.roleList !== null || $scope.roleList.length > 0){
                for (var index = 0;index < $scope.roleList.length;index++){
                    if ($scope.roleList[index]['checked']){
                        $scope.checkMenuIdList.push($scope.roleList[index]['id']);
                    }
                    var roleChildren = $scope.roleList[index]['children'];
                    if (roleChildren !== null && roleChildren.length > 0){
                        for (var position = 0;position < roleChildren.length;position++){
                            if (roleChildren[position]['checked']){
                                $scope.checkMenuIdList.push(roleChildren[position]['id']);
                            }
                            var grandChildren = roleChildren[position]['children'];
                            if (grandChildren !== null && grandChildren.length > 0){
                                for (var pos = 0;pos < grandChildren.length;pos++){
                                    if (grandChildren[pos]['checked']){
                                        $scope.checkMenuIdList.push(grandChildren[pos]['id']);
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }

        function getFormCheck() {
            $scope.checkFormIdList = [];
            if ($scope.totalFormList !== null && $scope.totalFormList.length > 0){
                for (var index = 0;index < $scope.totalFormList.length;index++){
                    var formList = $scope.totalFormList[index]['list'];
                    if (formList !== null && formList.length > 0){
                        for (var position = 0;position < formList.length;position++){
                            if (formList[position]['checked']){
                                $scope.checkFormIdList.push(formList[position]['id']);
                            }
                        }
                    }
                }
            }
        }

        function getComponent() {
            $scope.checkComponentIdList = [];
            if ($scope.totalComponentList !== null && $scope.totalComponentList.length > 0){
                for (var index = 0;index < $scope.totalComponentList.length;index++){
                    var componentList = $scope.totalComponentList[index]['list'];
                    if (componentList !== null && componentList.length > 0){
                        for (var position = 0;position < componentList.length;position++){
                            if (componentList[position]['checked']){
                                $scope.checkComponentIdList.push(componentList[position]['id']);
                            }
                        }
                    }
                }
            }
        }

        function saveRoleMenu() {   //遍历所有列表  挑选出checked
            getRoleCheck();
            getFormCheck();
            getComponent();
            RoleManagerConfigurationService.saveRolePrivilege({menuList:$scope.checkMenuIdList,formList:$scope.checkFormIdList,
                componentList:$scope.checkComponentIdList,roleId:$stateParams.id}).then(function (response) {
                if (response.statusCode === '0000') {
                    var message = "devplatformApp.roleManagerConfiguration.success";
                    $scope.showDialog(message);
                }else{
                    var message = response.msgCode;
                    $scope.showDialog(message);
                }
            });
        }

        $scope.showDialog = function(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                //scope:$scope //将scope传给dialog.html,以便显示提示信息
                controller:['$scope', function($scope){
                	$scope.message = msg;
                }]
            });
            /*$timeout(function() {
                ngDialog.close();
                $state.go('app.role-manager');
            }, 2000);*/
            $state.go('app.role-manager');
        };
        
        function clear(flag){
        	$uibModalInstance.close();
            $state.go('app.role-manager',{},{reload:flag});
        }
    }
})();
