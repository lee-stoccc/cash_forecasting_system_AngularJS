
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.dailyUsing-add', {
	        	parent:'app.dailyUsingData',
	            url: '/dailyUsing/add',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/processData/dailyUsing/dailyUsing-add.controller.js',
                            	  'fc/app/processData/dailyUsing/dailyUsing.service.js',
                            	  'fc/app/bankRule/bankRule.service.js',
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('termInfo');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/processData/dailyUsing/dailyUsing-add.html',
	                    controller: 'DailyUsingAddController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            }]
	        });
    }
})();