
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.bankRule-edit', {
	        	parent:'app.bankRule',
	            url: '/bankRule/edit/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/bankRule/bankRule-edit.controller.js',
                            	  'fc/app/bankRule/bankRule.service.js',
	                              'fc/css/bankRule/bankRule.css'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('bankRule');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/bankRule/bankRule-edit.html',
	                    controller: 'BankRuleEditController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            }]
	        })
	         .state('app.bankRule-detail', {
	        	parent:'app.bankRule',
	            url: '/bankRule/detail/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                             'fc/app/bankRule/bankRule-detail.controller.js',
                            	 'fc/app/bankRule/bankRule.service.js',
                            	 'fc/css/bankRule/bankRule.css'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('bankRule');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/bankRule/bankRule-detail.html',
	                    controller: 'BankRuleDetailController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            }]
	            
	        });
    }
})();