/**
 * Created by Administrator on 2017/9/1/0001.
 */

(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
        $stateProvider
		.state('app.sys-dict-edit', {
        	parent:'app.sys-dict',
            url: 'sys-dict/edit/{id}',
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                              'privilege/app/base/sys-dict/sys-dict-dialog.controller.js'
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    return $translate.refresh();
                }]
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'privilege/app/base/sys-dict/sys-dict-dialog.html',
                    controller: 'SysDictDialogController',
                    backdrop: 'static'
                });
            }]
        })
		.state('app.user-edit', {
	    	parent:'app.user',
	        url: 'user/{id}',
	        resolve: {
	            deps: ['$ocLazyLoad',
	                function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
							'privilege/app/base/sys-dict/sys-dict-dialog.controller.js'
	                    ]);
	                }],
	            translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                $translatePartialLoader.addPart('user');
					$translatePartialLoader.addPart('global');
	                return $translate.refresh();
	            }]
	        },
	        onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
	            $uibModal.open({
	                templateUrl: 'privilege/app/base/sys-dict/sys-dict-dialog.html',
	                controller: 'SysDictDialogController',
	                backdrop: 'static'
	            });
	        }]
	    })  
    }
    
})();
