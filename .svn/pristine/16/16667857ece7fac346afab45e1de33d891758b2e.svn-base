/**
 * Created by Administrator on 2017/8/24/0024.
 */
(function () {
    'use strict';
    angular
        .module('devplatformApp')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider) {
        $stateProvider
            .state('app.new-menu', {
                url: '/new-menu/:id/:parentId/:parentName/:menuId/:type',
                templateUrl: 'privilege/app/base/menu-management/new-menu/new-menu.html',
                data: {
                    authorities: ['ROLE_ADMIN']
                },
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'privilege/app/base/menu-management/new-menu/new-menu.controller.js',
                                'privilege/app/base/menu-management/new-menu/new-menu.service.js',
                                'privilege/app/base/menu-management/new-menu/new-menu.state.js'
                            ]);
                        }],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('newMenu');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                },
                ncyBreadcrumb: {
                    label: '新增或修改',
                    parent: 'app.menu-management'
                }
            })
            .state('app.form-component-management', {
                parent: 'app.menu-management',
                url: '/form-component-management/:menuFormId',
                data: {
                    authorities: ['ROLE_USER']
                },
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'privilege/app/base/menu-management/form-component-management/form-component-management.controller.js',
                                'privilege/app/base/menu-management/form-component-management/form-edit.controller.js',
                                'privilege/app/base/menu-management/form-component-management/component-edit.controller.js'
                            ]);
                        }],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('menuManagement');
                        $translatePartialLoader.addPart('sysForm');
                        $translatePartialLoader.addPart('sysComponent');
                        return $translate.refresh();
                    }]
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'privilege/app/base/menu-management/form-component-management/form-component-management.html',
                        controller: 'FormComponentManagementController',
                        backdrop: 'static',
                        size: 'lg'

                    })
                }]
            })
           /* .state('app.form-edit', {
                parent: 'app.form-component-management',
                url: '/form-edit/:id/:menuId',
                data: {
                    authorities: ['ROLE_USER']
                },
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'privilege/app/base/menu-management/form-component-management/form-edit.controller.js'
                            ]);
                        }],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('sysForm');
                        return $translate.refresh();
                    }]
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'privilege/app/base/menu-management/form-component-management/form-edit.html',
                        controller: 'FormEditController',
                        backdrop: 'static',
                        size: 'lg'

                    })
                }]

            })
            .state('app.component-edit', {
                parent: 'app.form-component-management',
                url: '/component-edit/:id/:formId',
                data: {
                    authorities: ['ROLE_USER']
                },
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'privilege/app/base/menu-management/form-component-management/component-edit.controller.js'
                            ]);
                        }],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('sysComponent');
                        return $translate.refresh();
                    }]
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'privilege/app/base/menu-management/form-component-management/component-edit.html',
                        controller: 'ComponentEditController',
                        backdrop: 'static',
                        size: 'lg'

                    })
                }]

            })*/

    }
})();
