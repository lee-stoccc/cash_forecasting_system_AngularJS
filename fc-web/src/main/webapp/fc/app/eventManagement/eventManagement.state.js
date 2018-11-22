
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.eventEdit', {
	        	parent:'app.eventManagement',
	            url: '/eventManagement/edit/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/eventManagement/eventEdit/eventEdit.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('eventManagement');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/eventManagement/eventEdit/eventEdit.html',
	                    controller: 'EventEditController',
	                    backdrop: 'static',
	                    size:'lg'
	                });
	            }]
	        })
	        .state('app.eventAddTerms', {
	        	parent:'app.eventManagement',
	            url: '/eventManagement/add/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/eventManagement/addTerms/addTerms.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('eventManagement');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/eventManagement/addTerms/addTerms.html',
	                    controller: 'EventAddTermsController',
	                    backdrop: 'static',
	                    size:'lg'
	                });
	            }]
	        })
	       .state('app.conflictImpact', {
	        	parent:'app.eventManagement',
	            url: '/eventManagement/conflictImpact/{conflictImpacts}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/eventManagement/conflictImpact/conflictImpact.controller.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('eventManagement');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/eventManagement/conflictImpact/conflictImpact.html',
	                    controller: 'ConflictImpactController',
	                    backdrop: 'static',
	                    size:'lg'
	                });
	            }]
	        });
    }
})();