
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		 .state('app.stock', {
	        	parent:'app.forecastPlan',
	            url:'/stock/list',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/forecastPlan/stock/stock.controller.js',
	                            'fc/app/forecastPlan/stock/stock.service.js', 
	                            'fc/app/bankRule/bankRule.service.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('stock');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/forecastPlan/stock/stock.html',
	                    controller: 'StockController',
	                    backdrop: 'static',
	                    size:'lg'
	                });
	            }]
	        })
	      .state('app.stock-edit', {
	        	parent:'app.stock',
	            url: '/stock/edit/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/forecastPlan/stock/stock-edit.controller.js',
	                         	  'fc/app/forecastPlan/stock/stock.service.js',
	                         	  'fc/app/bankRule/bankRule.service.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('stock');
						$translatePartialLoader.addPart('global');
						$translatePartialLoader.addPart('bankRule');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	            	var modalInstance = $uibModal.open({
	                    templateUrl: 'fc/app/forecastPlan/stock/stock-edit.html',
	                    controller: 'StockEditController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            	 modalInstance.result.then(function (result) {    
	     	           // console.log(result); //result关闭是回传的值   
	     	         }, function (reason) {    
	     	            // console.log(reason);    
	              }); 
	            }]
	        });
		
    }
})();