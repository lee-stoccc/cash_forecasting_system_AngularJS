/**
 * Created by NieFZ on 2016/12/3.
 * Controllers
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
        .controller('devplatformCtrl', ['LayoutService', 'AlertService', '$scope', '$window', '$state', '$location', '$localStorage', '$sessionStorage', 'ngDialog', '$uibModal','$rootScope', 'globalConstant',
            function (LayoutService, AlertService, $scope, $window, $state, $location, $localStorage, $sessionStorage, ngDialog, $uibModal, $rootScope, globalConstant) {
                // // add 'ie' classes to html
                // var isIE = !!navigator.userAgent.match(/MSIE/i);
                // isIE && angular.element($window.document.body).addClass('ie');
                // isSmartDevice($window) && angular.element($window.document.body).addClass('smart');
                // config
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

                /*$scope.init = init;
                 $scope.init();
                 function init(){
                 $state.go("app.index");
                 }*/

                // function isSmartDevice($window) {
                //     // Adapted from http://www.detectmobilebrowsers.com
                //     var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                //     // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                //     return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
                // }
                $scope.logout = function () {
                    if(localStorage.Token){
                    // if ($localStorage.authenticationToken || $sessionStorage.authenticationToken) {
                        //alert(localStorage.user);
                        LayoutService.layoutLog(localStorage.user)
                            .then(function (response) {
                                if (response.statusCode === '0000') {
                                    localStorage.clear();
                                    delete $localStorage.authenticationToken;
                                    delete $sessionStorage.authenticationToken;
                                    delete $localStorage.userInfo;
                                    //delete $localStorage.header;
                                    //delete $localStorage.fromList;
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

                $scope.hiddenCss = function () {
                    //angular.element('.navbar-collapse.collapse').css("margin-left","86px");
                    angular.element(".ng-scope").children("div").removeClass("content2");
                    angular.element('.new-nav .active').children("ul").css("display", "none");
                    //var type = angular.element('.new-nav .active').children("ul").css("display");
                };
                $scope.hiddenMenu = function () {
                    //angular.element('.navbar-collapse.collapse').css("margin-left","86px");
                    angular.element(".ng-scope").children("div").removeClass("content2");
                    angular.element('.new-nav .active').children("ul").css("display", "none");
                };

            }]);


    angular.element(".nav navbar-nav navbar-right").click(function () {
        var subMenu = angular.element(".dropdown-menu animated fadeInRight");
        subMenu.style.display = "block";
    });

})();
