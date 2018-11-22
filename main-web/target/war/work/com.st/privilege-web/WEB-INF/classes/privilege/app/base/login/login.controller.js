(function(){angular.module("devplatformApp").controller("loginCtrl",a);a.$inject=["$rootScope","$state","$timeout","Auth","$scope","$sessionStorage","$localStorage","globalConstant"];function a(i,b,d,e,l,h,j,g){l.abc=1;l.times=false;localStorage.singleLogin=false;if(localStorage.Token&&localStorage.user){b.go("app.index")}else{l.form={};l.login=function(){if(l.form.username===undefined){l.authenticationError=true;l.times=false;l.msg="login.messages.error.AccountEmpty"}else{if(l.form.password===undefined){l.authenticationError=true;l.times=false;l.msg="login.messages.error.PasswordEmpty"}else{if(l.form.password.length<4){l.authenticationError=true;l.times=false;l.msg="login.messages.error.PasswordLengthWrong"}else{e.login({username:l.form.username,password:l.form.password,rememberMe:l.form.rememberMe,verifyCode:l.form.verifyCode}).then(function(m){if(m.data.statusCode==="0000"){i.$broadcast("authenticationSuccess");b.go("app.index")}else{l.authenticationError=true;if(m.data.msgCode==="errorPassword"){var n=m.data.data;l.form.password="";if(n>=5){l.times=false;l.msg="login.messages.error.errorPasswordFiveBack"}else{l.times=true;l.msg="login.messages.error.errorPassword";l.count=n;l.msgBack="login.messages.error.errorPasswordBack"}}else{l.times=false;l.msg=m.data.msgCode}}})["catch"](function(){})}}}};l.authenticationError=false;l.credentials={};l.password=null;l.register=k;l.rememberMe=true;l.requestResetPassword=f;l.username=null;d(function(){angular.element("#username").focus()})}l.reImg=c;function c(){var m=document.getElementById("Img");m.src=g.devplatform_web_apiPath+"api/generateVerifyCode?rnd="+Math.random()}function k(){b.go("register")}function f(){b.go("requestReset")}}})();