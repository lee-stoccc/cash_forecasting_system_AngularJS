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
        /*用户选择角色*/
        .state('app.user-select-roles', {
            parent: 'app.user',
            url: '/user-select-roles/user-select-roles/:userId',
            data: {
                authorities: ['ROLE_USER']
            },
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'privilege/app/base/user/user-select-roles/user-select-roles.controller.js'
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('menuManagement');
                    return $translate.refresh();
                }]
            },
            onEnter: ['$uibModal', function ($uibModal) {
                $uibModal.open({
                    templateUrl: 'privilege/app/base/user/user-select-roles/user-select-roles.html',
                    controller: 'SelectRolesController',
                    backdrop: 'static'
                });
            }]
        })
		.state('app.user-edit', {
	    	parent:'app.user',
	        url: 'user/{id}/{menuId}',
	        resolve: {
	            deps: ['$ocLazyLoad',
	                function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
							'privilege/app/base/user/user-dialog.controller.js',
							'privilege/app/base/user/user.service.js'
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
	                templateUrl: 'privilege/app/base/user/user-dialog.html',
	                controller: 'UserDialogController',
	                backdrop: 'static'
	            });
	        }]
	    })     
    }
    
})();


