(function(){angular.module("devplatformApp").factory("BankRuleService",a);a.$inject=["globalConstant","utilService"];function a(h,f){function c(i){return f.requestGet(h.devplatform_web_apiPath+"api/bankRule/get/",i)}function e(i){return f.requestPost(h.devplatform_web_apiPath+"api/bankRule/save",i)}function d(i){return f.requestDelete(h.devplatform_web_apiPath+"api/bankRule/delete/",i)}function g(k,l){var o=0;for(var n=0;n<k.length;n++){for(var m=0;m<l.length;m++){if(k[n].indexOf(l[m])>=0){o++}}}return o}var b={competeArr:g,getBankRule:c,saveBankRule:e,deleteBankRule:d};return b}})();