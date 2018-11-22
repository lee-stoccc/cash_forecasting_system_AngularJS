
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.forecastPlan-edit', {
	        	parent:'app.forecastPlan',
	            url: '/bankInfo/edit/{id}/{planId}/{termNo}/{bankId}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/forecastPlan/forecastPlan-edit.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('forecastPlan');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/forecastPlan/forecastPlan-edit.html',
	                    controller: 'ForecastPlanEditController',
	                    backdrop: 'static'
	                });
	            }]
	        })
	        .state('app.forecast', {
	        	parent:'app.forecastPlan',
	            url: '/forecastPlan/forecast',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/forecastPlan/forecast/forecast.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('forecastPlan');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/forecastPlan/forecast/forecast.html',
	                    controller: 'ForecastController',
	                    backdrop: 'static'
	                });
	            }]
	        })
	        .state('app.createPlan', {
	        	parent:'app.forecastPlan',
	            url: '/forecastPlan/createdPlan',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/forecastPlan/forecast/createPlan.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('forecastPlan');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/forecastPlan/forecast/createPlan.html',
	                    controller: 'CreatePlanController',
	                    backdrop: 'static'
	                });
	            }]
	        });
		
    }
})();