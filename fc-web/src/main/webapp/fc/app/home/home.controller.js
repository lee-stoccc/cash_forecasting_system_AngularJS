(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('FcHomeController', FcHomeController);

    FcHomeController.$inject = ['ngDialog', '$state', '$scope', '$timeout', 'PublicService'];

    function FcHomeController(ngDialog, $state, $scope, $timeout, PublicService) {
    	$scope.datas = [];
    	$scope.backVale = [
    		{
    			id:'001',
    			name:'Vincent'
    		},
    		{
    			id:'002',
    			name:'Smile'
    		},
    		{
    			id:'003',
    			name:'Knight'
    		}
    	];
    	$scope.datas = $scope.datas.concat($scope.backVale);
    	
    	angular.element('#icon').click(function(){
    		angular.element('.panelDiv').toggle();
    	});
    	
    	angular.element('#key').blur(function(){
    		$scope.datas.splice(0, $scope.datas.length);
    		$scope.datas = $scope.datas.concat($scope.backVale);
    		angular.element('.panelDiv').hide();
    	});
    	
    	$scope.setValue = function(id,name){
    		$scope.value = id;
    		$scope.key = name;
    		angular.element('.panelDiv').hide();
    	};
    	
    	$scope.inputValue = function(){
    		angular.element('.panelDiv').show();
    		$scope.datas.splice(0, $scope.datas.length);
    		if($scope.key === ''){
    			$scope.datas = $scope.datas.concat($scope.backVale);
    			$scope.value = '';
        		$scope.key = '';
    		}else{
    			for(var i=0;i<$scope.backVale.length;i++){
    				var aa = angular.uppercase($scope.backVale[i].name);
    				var akey = angular.uppercase($scope.key);
    				if(aa.indexOf(akey)>-1){
    					$scope.datas.push($scope.backVale[i]);
    				}
    				if($scope.key === $scope.backVale[i].name){
    					$scope.value = $scope.backVale[i].id;
    				}else{
    					$scope.value = $scope.backVale[i].name;
    				}
    			}
    		}
    	};
    	
    	
    	
    	
    }
})();