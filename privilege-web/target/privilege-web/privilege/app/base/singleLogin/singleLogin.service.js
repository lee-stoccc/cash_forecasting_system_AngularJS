(function(){angular.module("devplatformApp").factory("SingleLoginService",a);a.$inject=["$http","$uibModal","globalConstant","utilService"];function a(g,c,f,d){function e(h){return d.requestGet(f.devplatform_web_apiPath+"api/ssoauthen?",h)}var b={singleLogin:e};return b}})();