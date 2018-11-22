(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('PrivilegeHeadController', PrivilegeHeadController);

    PrivilegeHeadController.$inject = ['$scope','ngDialog','LayoutService','$sessionStorage','$rootScope','$localStorage','$state'];
    function PrivilegeHeadController ($scope,ngDialog,LayoutService,$sessionStorage,$rootScope,$localStorage,$state) {
    		$scope.init=function(){  
    			$scope.tips=true
    			$scope.bellsNumber=0
    			warnNumber()
        		$scope.getWarningBells()
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
		}
    	
    	// 查询预警设备的提示
    	 $scope.getWarningBells = function(id){   
    		 setInterval(function(){
    			 warnNumber()
    		 },3000000)
    	  };
    	  
    	  // 请求预警设备
    	  function warnNumber(){
    		  LayoutService.getWarningBells().then(function (response){
      	  		if(response.statusCode === "0000"){
      	  			if(Number(response.msgCode)>99){
      	  				$('#bellsNumber').text('99+')
      	  			}else {
      	  				$('#bellsNumber').text(response.msgCode)    
					}
      	  		}
      	  	});
    	  }
    	  
        //退出登录
        $scope.logout = function () {
            if(localStorage.Token){
            // if ($localStorage.authenticationToken || $sessionStorage.authenticationToken) {
                LayoutService.layoutLog(localStorage.user)
                    .then(function (response) {
                        if (response.statusCode === '0000') {
                        	/*var header = localStorage.header;
                        	var homeContent = localStorage.homeContent;*/
//                            localStorage.clear();
                            delete $localStorage.authenticationToken;
                            delete $sessionStorage.authenticationToken;
                            delete $localStorage.userInfo;
                            delete $localStorage.header;
                            delete localStorage.user;
                            delete localStorage.Token;
                            $sessionStorage.tabList = [];
                            $sessionStorage.tabLink = {};
                            /*localStorage.header = header;
                            localStorage.homeContent = homeContent;*/
//                            $state.go('login');
                            window.opener = null;
                            window.open("about:blank", "_self");
                            window.close();
                        }
                    });
            }
        };
        
        $('.navbar-right').mouseover(function(){
        	$(this).children('span').css('color','black')
        }).mouseout(function(){
        	$(this).children('span').css('color','white')
        })
        $scope.goBellInfo = function(){
//        	$state.go("app.warningInformation");
//            $scope.message = "确认修改密码吗？";
//            $scope.type = "confirm";
            ngDialog.open({
                template: 'fc/app/warningInformation/warningInformation.html',//模式对话框内容为dialog.html
                className: '',
//                className: 'ngdialog-theme-default',
                scope: $scope, //将scope传给dialog.html,以便显示提示信息
                controller:'WarningInformationController'
            });
        };
    }
})();
