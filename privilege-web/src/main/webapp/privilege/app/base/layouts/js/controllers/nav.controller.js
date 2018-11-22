/**
 * Created by NieFZ on 2016/12/8.
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
    //.controller('navCtrl', ['$scope',  function ($scope) {
        .controller('navCtrl', ['$scope', 'sidebarService','ngDialog', '$state','PublicService', function ($scope, sidebarService,ngDialog, $state,PublicService ) {

            $scope.getSidebar = getSidebar;
            $scope.getSidebar();
            function getSidebar() {

                sidebarService.getSidebar().then(function (json) {

                 $scope.items = json.data.menuList;
                 localStorage.formList = angular.toJson(json.data.formList);
                 localStorage.componentList = angular.toJson(json.data.componentList);
                 /*angular.element('.new-nav').children().eq(0).addClass("active");
                 angular.element('.new-nav .active').children("ul").css("display","block");*/
                 /*页面刷新默认菜单的第一个*/
                 //$scope.check($scope.items[0],$scope.items[0].children);
                 /*页面刷新默认首先进入主页*/
                 /*$state.go("app.index");*/
                });
            }

            //通过按钮控制样式
            $scope.check = function (item, children) {

                //console.log(angular.element('.second-menu').css("margin-left"));
                angular.element('.new-nav').children().eq(0).addClass("active");
                var type = angular.element('.new-nav .active').children("ul").css("display");
                if ('none' === type || undefined === type) {
                    angular.element('.new-nav .active').children("ul").css("display", "block");
                }
                //angular.element(".ng-scope").children("div .app-content").addClass("content2");
                /*if (angular.element(".ng-scope").children("div .app-content").hasClass("content2")) {
                    angular.element(".ng-scope").children("div .app-content").addClass("content2");
                } else {
                    angular.element(".ng-scope").children("div .app-content").addClass("content2");
                }*/

                if (null !== children) {//一级菜单

                    if (children.length > 0) {//有二级菜单

                        //console.log(children);
                        if (null !== children[0].children) {

                            var length = children[0].children.length;
                            if (length > 0) {//有三级菜单

                                //三级菜单
                                for (var i = 0; i < length; i++) {
                                    //angular.element('.navbar-collapse.collapse').css("margin-left","196px");
                                    angular.element(".ng-scope").children("div .app-content").addClass("content2");
                                    if (children[0].children[i].checked) {
                                        jugeSave(children[0].children[i].url,0,children[0].children[i].id);
                                        //$state.go(children[0].children[i].url, {menuId: children[0].children[i].id});
                                    }
                                }

                            } else {

                                //二级菜单
                                angular.element('.new-nav .active').children("ul").css("display", "black");
                                angular.element(".app-content").addClass("content2");
                                for (var i = 0; i < children.length; i++) {
                                    if (children[i].checked) {
                                        jugeSave(children[i].url,0,children[i].id);
                                        //$scope.second(children[i]);
                                        //$state.go(children[i].url, {menuId: children[i].id});
                                        break;
                                    }
                                }
                            }

                        } else {

                            //二级菜单
                            angular.element('.new-nav .active').children("ul").css("display", "black");
                            angular.element(".app-content").addClass("content2");

                            // alert(angular.element(".ng-scope").children("div .app-content").hasClass("content2"));
                            for (var i = 0; i < children.length; i++) {
                                if (children[i].checked) {
                                    $scope.second(children[i]);
                                    //$state.go(children[i].url, {menuId: children[i].id});
                                    break;
                                }
                            }

                        }

                    } else {//无二级菜单

                        //一级菜单
                        if (item.checked) {
                            //angular.element('.navbar-collapse.collapse').css("margin-left","86px");
                            angular.element(".app-content").removeClass("content2");
                            jugeSave(item.url,0,item.id);

                            //$state.go(item.url, {parentGroup: 0,menuId: item.id});

                        }

                    }
                } else {

                    //一级菜单
                    if (item.checked) {
                        //angular.element('.navbar-collapse.collapse').css("margin-left","86px");
                        angular.element(".app-content").removeClass("content2");
                        jugeSave(item.url,0,item.id);

                        //$state.go(item.url, {parentGroup: 0, menuId: item.id});

                    }

                }


            };

            //防止没有三级菜单
            $scope.second = function second(item) {
                angular.element('.new-nav .active').children("ul").css("display", "block");
                if (null !== item.children) {
                    //二级菜单路径
                    if (item.children[0].checked) {
                        jugeSave(item.children[0].url,0,item.children[0].id);
                        //$state.go(item.children[0].url, {menuId: item.children[0].id});
                    }

                } else {
                    if (item.checked) {
                        jugeSave(item.url,0,item.id);
                        //$state.go(item.url, {menuId: item.id});
                    }

                }
            };

            /*三级菜单*/
            $scope.three = function (item) {

            };


            //离开时确认编辑和权限确认
            function jugeSave(url, parentGroup, menuId) {
            	PublicService.getFormPrivilege(menuId);
                var name = $state.current.name;
                if( name.indexOf("add")>-1 || name.indexOf("edit")>-1 || name.indexOf("save")>-1)  {
                	PublicService.cancel(url, {parentGroup: 0, menuId: menuId});
                }else{
                    $state.go(url, {parentGroup: 0, menuId: menuId});
                }
            }
        }]);

})();
