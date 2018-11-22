/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function(){
    //angular module
    angular.module('devplatformApp')
    //test controller
    .controller('NewMenuController',NewMenuController);
    NewMenuController.$inject = ['$stateParams','NewMenuService','$scope','AlertService','$state','PublicService'];
    function NewMenuController($stateParams,NewMenuService,$scope,AlertService,$state,PublicService){
        //test tree model 2
        $scope.saveMenu = saveMenu;
        $scope.decrease = decrease;
        $scope.increase = increase;
        $scope.dataTranslate = "devplatformApp.newMenu.newMenu";
        $scope.menuNameError = "";
        $scope.englishNameError = "";
        $scope.urlError = "";
        $scope.langSwitchError = "";
        $scope.chnError = "";
        $scope.chnEnglishNameError = "";
        $scope.isOpen = false;
        $scope.menu = {
                "parentName":"",
                "parentId":"",
                "menuName":"",
                "englishName":"",
                "url":"",
                "langSwitch":"",
                "sort":0,
                "state":0
            };
        $scope.menuId = $stateParams.menuId;
        if ($stateParams.type == "1"){
            $scope.dataTranslate = "devplatformApp.newMenu.newMenu";
        }else {
            $scope.dataTranslate = "devplatformApp.newMenu.reviserMenu";
        }

        if($stateParams.id){
            NewMenuService.getGetMenuById($stateParams.id).then(function (response) {
                $scope.menu = response.data;
                $scope.isOpen = $scope.menu.visible=='1' ? true : false;
            });
        }else {
            $scope.menu = {
                "parentName":$stateParams.parentName,
                "parentId":$stateParams.parentId,
                "menuName":"",
                "englishName":"",
                "url":"",
                "langSwitch":"",
                "sort":0,
                "state":0
            };
        }

        function saveMenu() {
            if ($scope.menu.menuName.length === 0 || $scope.menu.englishName.length === 0){
                if ($scope.menu.menuName.length === 0){
                    $scope.menuNameError = "menuNameError";
                }
                if ($scope.menu.englishName.length === 0){
                    $scope.englishNameError = "englishNameError";
                }
               /* if ($scope.menu.url.length === 0){
                    $scope.urlError = "urlError";
                }*/
                if ($scope.menu.langSwitch.length === 0){
                    $scope.langSwitchError = "langSwitchError";
                }
                return;
            }

            for(var i=0;i < $scope.menu.englishName.length;i++){
                var c = $scope.menu.englishName.substr(i,1);
                var ts = escape(c);
                if(ts.substring(0,2) == "%u"){
                    $scope.chnEnglishNameError = "chnEnglishNameError";
                    return;
                }
            }
/*
            for(var i=0;i < $scope.menu.url.length;i++){
                var c = $scope.menu.url.substr(i,1);
                var ts = escape(c);
                if(ts.substring(0,2) == "%u"){
                    $scope.chnError = "chnError";
                    return;
                }
            }*/
            
            for(var i=0;i < $scope.menu.langSwitch.length;i++){
                var c = $scope.menu.langSwitch.substr(i,1);
                var ts = escape(c);
                if(ts.substring(0,2) == "%u"){
                    $scope.langSwitchError = "langSwitchError";
                    return;
                }
            }
            $scope.menu.visible = $scope.isOpen? 1:0;
            if ($scope.menu.id !== null && $scope.menu.id !== undefined){
                NewMenuService.updateMenu($scope.menu).then(function (response) {
                	if ("0000"===response.statusCode) {
                		PublicService.openDialog("global.saveSuccess");
                		$state.go('app.menu-management',{menuId:$scope.menuId});
                	}else{
                		PublicService.openDialog(response.msgCode);
                	}
                });
            }else {
                NewMenuService.createMenu($scope.menu).then(function (response) {
                	if ("0000"===response.statusCode) {
	                	PublicService.openDialog("global.saveSuccess");
	                    $state.go('app.menu-management',{menuId:$scope.menuId});
                	}else{
                		PublicService.openDialog(response.msgCode);
                	}
                });
            }
        }

        function decrease() {          //顺序减
            $scope.menu.sort--;
            if ($scope.menu.sort <= 0){
                $scope.menu.sort = 0;
            }
        }

        function increase() {        //顺序增
            $scope.menu.sort++;
        }

        $scope.$watch("menu.menuName",function (newValue, oldValue,scope) {
            if ($scope.menu.menuName > 20) {
                $scope.menu.menuName = $scope.menu.menuName.substring(0,20);
            }
            $scope.menuNameError = "";
        });

        $scope.$watch("menu.englishName",function (newValue, oldValue,scope) {
            $scope.englishNameError = "";
            $scope.chnEnglishNameError = "";
            if ($scope.menu.englishName > 50) {
                $scope.menu.englishName = $scope.menu.englishName.substring(0,50);
            }
            if ($scope.menu.englishName !== null && $scope.menu.englishName.length > 0){
                for(var i=0;i < $scope.menu.englishName.length;i++){
                    var c = $scope.menu.englishName.substr(i,1);
                    var ts = escape(c);
                    if(ts.substring(0,2) == "%u"){
                        $scope.chnEnglishNameError = "chnError";
                        return;
                    }
                }
            }
        });

    /*    $scope.$watch("menu.url",function (newValue, oldValue,scope) {
            $scope.urlError = "";
            $scope.chnError = "";
            if ($scope.menu.url > 50) {
                $scope.menu.url = $scope.menu.url.substring(0,50);
            }
            if ($scope.menu.url !== null && $scope.menu.url.length > 0){
                for(var i=0;i < $scope.menu.url.length;i++){
                    var c = $scope.menu.url.substr(i,1);
                    var ts = escape(c);
                    if(ts.substring(0,2) == "%u"){
                        $scope.chnError = "chnError";
                        return;
                    }
                }
            }
        });*/
       /* 
        $scope.$watch("menu.langSwitch",function (newValue, oldValue,scope) {
            $scope.urlError = "";
            $scope.chnError = "";
            if ($scope.menu.langSwitch > 50) {
                $scope.menu.langSwitch = $scope.menu.langSwitch.substring(0,50);
            }
            if ($scope.menu.langSwitch !== null && $scope.menu.langSwitch.length > 0){
                for(var i=0;i < $scope.menu.langSwitch.length;i++){
                    var c = $scope.menu.langSwitch.substr(i,1);
                    var ts = escape(c);
                    if(ts.substring(0,2) == "%u"){
                    	$scope.langSwitchError = "langSwitchError";
                        return;
                    }
                }
            }
        });*/

        $scope.$watch("menu.sort",function (newValue, oldValue,scope) {
            if ($scope.menu.sort > 20) {
                $scope.menu.sort = $scope.menu.sort.substring(0,20);
            }
        });
    }
})();
