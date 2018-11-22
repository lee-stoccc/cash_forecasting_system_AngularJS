
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.bankInfo-edit', {
	        	parent:'app.bankInfo',
	            url: '/bankInfo/edit/{state}/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/bankInfo/bankInfo-edit.controller.js',
                            	  'fc/app/bankInfo/bankInfo.service.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('bankInfo');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/bankInfo/bankInfo-edit.html',
	                    controller: 'BankInfoEditController',
	                    backdrop: 'static'
	                });
	            }]
	        });
    }
})();