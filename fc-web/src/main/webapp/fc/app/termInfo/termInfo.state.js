
(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
		$stateProvider
		.state('app.termInfo-edit', {
	        	parent:'app.termInfo',
	            url: '/termInfo/edit/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                              'fc/app/termInfo/termInfo-edit.controller.js',
                            	  'fc/app/termInfo/termInfo.service.js',
                            	  'fc/app/bankRule/bankRule.service.js',
                            	  'fc/js/dateCalendar/WdatePicker.js',
//                            	  'fc/css/bankRule/bankRule.css'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('termInfo');
	                    $translatePartialLoader.addPart('bankRule');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/termInfo/termInfo-edit.html',
	                    controller: 'TermInfoEditController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            }]
	            
	        })
	        .state('app.batch-edit', {
	        	parent:'app.termInfo',
	        	url: '/batch/edit/{ids}',
	        	resolve: {
	        		deps: ['$ocLazyLoad',
	        		       function ($ocLazyLoad) {
	        			return $ocLazyLoad.load([
		                         'fc/app/termInfo/batch-edit.controller.js',
		                         'fc/app/termInfo/termInfo.service.js',
		                         'fc/app/bankRule/bankRule.service.js',
		                         'fc/js/dateCalendar/WdatePicker.js',
//		                         'fc/css/bankRule/bankRule.css'
		                         ]);
	        		}],
	        		translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	        			$translatePartialLoader.addPart('termInfo');
	        			$translatePartialLoader.addPart('bankRule');
	        			$translatePartialLoader.addPart('global');
	        			return $translate.refresh();
	        		}]
	        	},
	        	onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	        		$uibModal.open({
	        			templateUrl: 'fc/app/termInfo/batch-edit.html',
	        			controller: 'BatchEditController',
	        			backdrop: 'static',
	        			size: 'lg'
	        		});
	        	}]
	        	
	        })
	 .state('app.termInfo-detail', {
	        	parent:'app.termInfo',
	            url: '/termInfo/detail/{id}',
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                             'fc/app/termInfo/termInfo-detail.controller.js',
                            	 'fc/app/termInfo/termInfo.service.js',
                            	 'fc/css/bankRule/bankRule.css'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('termInfo');
	                    $translatePartialLoader.addPart('bankRule');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            },
	            
	            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	                $uibModal.open({
	                    templateUrl: 'fc/app/termInfo/termInfo-detail.html',
	                    controller: 'TermInfoDetailController',
	                    backdrop: 'static',
	                    size: 'lg'
	                });
	            }]
	        });
    }
})();