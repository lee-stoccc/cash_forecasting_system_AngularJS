(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['PublicService','LoginService','$rootScope', '$state', '$timeout', 'Auth', '$scope', '$sessionStorage', '$localStorage', 'globalConstant'];

    function loginCtrl(PublicService,LoginService,$rootScope, $state, $timeout, Auth, $scope, $sessionStorage, $localStorage, globalConstant) {
    	$scope.check=function(){
//    		$scope.md5Value = PublicService.md5("1");
    		var password=$('#password').val()
    		var username=$('#username').val()
    		$scope.login(password,username)   
//    		$scope.login()  
    	}    
    	
    	$scope.login=function(password,username){
    		$scope.abc = 1;
        	$scope.times = false;
        	localStorage.singleLogin = false;
            if (localStorage.Token && localStorage.user) {    
                $state.go("app.index");
            } else {
                $scope.form = {
                  };
                
                $scope.loginRequire = function () {
                    if (username === undefined) {
                        $scope.authenticationError = true;
                        $scope.times = false;
                        $scope.msg = "login.messages.error.AccountEmpty";
                    } else if (password === undefined) {   
                        $scope.authenticationError = true;
                        $scope.times = false;     
                        $scope.msg = "login.messages.error.PasswordEmpty";
                    } else if (password.length < 4) {         
                        $scope.authenticationError = true;
                        $scope.times = false;
                        $scope.msg = "login.messages.error.PasswordLengthWrong";
                    } else { 
//                    	$scope.form.password = PublicService.md5( $scope.form.password)
                        Auth.login({
                            username:username,  
                            password:password, 
                            rememberMe: $scope.form.rememberMe,
                            verifyCode: $scope.form.verifyCode   
                        }).then(function (response) {
                            if (response.data.statusCode === '0000') {   
                                $rootScope.$broadcast('authenticationSuccess');
                                $state.go("app.index");
                            } else {
                                $scope.authenticationError = true;
                                if (response.data.msgCode === 'errorPassword') {
                                    var errorCount = response.data.data;
                                    $scope.form.password = "";
                                    if (errorCount >= 5) {
                                    	$scope.times = false;
                                        $scope.msg = "login.messages.error.errorPasswordFiveBack";
                                    } else {
                                    	$scope.times = true;
                                        $scope.msg = "login.messages.error.errorPassword";
                                        $scope.count = errorCount;
                                        $scope.msgBack = "login.messages.error.errorPasswordBack";
                                    }
                                }else{
                                	$scope.times = false;
                                	$scope.msg = response.data.msgCode;
                                }
                            }
                        })['catch'](function () {
                            // $scope.authenticationError = true;
                        });
                    }  
                };
                
                $scope.authenticationError = false;

                $scope.credentials = {};
                $scope.password = null;
                $scope.register = register;
                $scope.rememberMe = true;
                $scope.requestResetPassword = requestResetPassword;
                $scope.username = null;

                $timeout(function () {
                    angular.element('#username').focus();
                });
                $scope.loginRequire()   
            }
    	}
    	
        
        /**
         * 验证码
         */
        $scope.reImg = reImg;
        function reImg(){
            var img = document.getElementById("Img");
            img.src = globalConstant.devplatform_web_apiPath + "api/generateVerifyCode?rnd=" + Math.random();
        }
        
        function register() {
            $state.go('register');
        }

        function requestResetPassword() {
            $state.go('requestReset');
        }
    }
})();
