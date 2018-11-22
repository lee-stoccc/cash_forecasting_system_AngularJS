/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('app.role-manager-edit', {
            parent: 'app.role-manager',
            url: '/new-role-manager/new-role-manager/{id}',
            data: {
                authorities: ['ROLE_USER']
            },
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                             'privilege/app/base/role-manager/new-role-manager/new-role-manager.controller.js',
                             'privilege/app/base/role-manager/new-role-manager/new-role-manager.service.js',
                             'privilege/app/base/role-manager/new-role-manager/new-role-manager.state.js'
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('menuManagement');
                	$translatePartialLoader.addPart('sysRole');
                    return $translate.refresh();
                }]
            },
            onEnter: ['$uibModal', function ($uibModal) {
                $uibModal.open({
                    templateUrl: 'privilege/app/base/role-manager/new-role-manager/new-role-manager.html',
                    controller: 'RoleManagerEditController',
                    backdrop: 'static'
                });
            }]
        })
        .state('app.role-manager-configuration', {
            parent: 'app.role-manager',
            url: '/role-manager-configuration/role-manager-configuration/{id}',
            data: {
                authorities: ['ROLE_USER']
            },
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                         'privilege/app/base/role-manager/role-manager-configuration/role-manager-configuration.controller.js',
                         'privilege/app/base/role-manager/role-manager-configuration/role-manager-configuration.service.js',
                         'privilege/app/base/role-manager/role-manager-configuration/role-manager-configuration.state.js'
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    // $translatePartialLoader.addPart('menuManagement');
                	$translatePartialLoader.addPart('roleManagerConfiguration');
                    return $translate.refresh();
                }]
            },
            onEnter: ['$uibModal', function ($uibModal) {
                $uibModal.open({
                    templateUrl: 'privilege/app/base/role-manager/role-manager-configuration/role-manager-configuration.html',
                    controller: 'RoleManagerConfigurationController',
                    backdrop: 'static'
                });
            }]
        })
    }

})();
