(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SingleLoginController', SingleLoginController);

    SingleLoginController.$inject = ['$http','$scope','$rootScope','SingleLoginService', '$state', '$timeout', 'Auth', '$location', '$localStorage'];

    function SingleLoginController ($http,$scope,$rootScope,SingleLoginService, $state, $timeout, Auth,$location, $localStorage) {
    	$scope.msg = "该令牌状态无效";
    	$scope.showError = false;
//    	$scope.showError = true;
    	localStorage.singleLogin = false;
    	// 
    	SingleLoginService.singleLogin('timestamp=' + $location.search().timestamp).then(function(response){
            if (response.statusCode === '0000') {
            	$rootScope.$broadcast('authenticationSuccess');
//        		localStorage.Token =  $location.search().timestamp;
//        		$localStorage.authenticationToken = localStorage.Token;
        		localStorage.Token =  response.data.id_token;
        		$localStorage.authenticationToken = localStorage.Token;
        		localStorage.user = angular.toJson(response.data);
                $state.go("app.index");
            }else{
            	$scope.showError = true;
            	$scope.msg = response.msgCode;
            } 
    	});
    }
})();