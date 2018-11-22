
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		 $stateProvider
		 .state('app.cusRegion-edit', {
	        	parent:'app.cusRegion',
	            url: '/cusRegion/edit/{id}',
	            templateUrl: 'fc/app/cusRegion/cusRegion-edit.html',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/cusRegion/cusRegion-edit.controller.js',
	                              'fc/app/cusRegion/cusRegion.service.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('cusRegion');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	             onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	            	 $uibModal.open({
	                    templateUrl: 'fc/app/cusRegion/cusRegion-edit.html',
	                    controller: 'CusRegionEditController',
	                    backdrop: 'static',
	                //    windowTopClass: 'test',
	                    size: 'super-size'
	                });
	            }]
	        })
    }
})();