(function(){angular.module("devplatformApp").factory("MobileService",a);a.$inject=["globalConstant","utilService"];function a(e,d){function c(f){return d.requestPost(e.devplatform_web_apiPath+"api/mobileValidate/sendCode",f)}var b={sendCode:c};return b}})();