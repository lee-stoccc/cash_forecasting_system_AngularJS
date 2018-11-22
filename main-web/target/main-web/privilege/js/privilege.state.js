/**
 * Created by Administrator on 2017/9/1/0001.
 */

(function() {
	'use strict';

	angular.module('devplatformApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider', 'globalConstant',
			'$urlRouterProvider' ];

	function stateConfig($stateProvider, globalConstant, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider
				.state(
						'login',
						{
							url : '/login',
							templateUrl : 'privilege/app/base/login/login.html',
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([ 'privilege/app/base/login/login.controller.js'
													/* 'privilege/app/base/privilege.state.js' */
													]);
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader.addPart('global');
											$translatePartialLoader.addPart('login');
											return $translate.refresh();
										} ]
							}
						})
					.state(
						'singleLogin',
						{
							url : '/singleLogin',
							templateUrl : 'privilege/app/base/singleLogin/singleLogin.html',
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([ 
													        'privilege/app/base/singleLogin/singleLogin.controller.js',
													        'privilege/app/base/singleLogin/singleLogin.service.js'
													/* 'privilege/app/base/privilege.state.js' */
													]);
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader.addPart('global');
											$translatePartialLoader.addPart('login');
											return $translate.refresh();
										} ]
							}
						})
					.state(
						'errorMsg',
						{
							url : '/errorMsg',
							templateUrl : 'privilege/app/base/error/error.html',
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([ 
													/* 'privilege/app/base/privilege.state.js' */
													]);
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader.addPart('global');
											return $translate.refresh();
										} ]
							}
						})
				.state(
						'app.user-management',
						{
							url : '/user-management?page&sort',
							templateUrl : 'app/user-management/user-management.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ],
								pageTitle : 'userManagement.home.title'
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([ 'app/user-management/user-management.controller.js' ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('user-management');
											return $translate.refresh();
										} ]
							}
						})
				.state(
						'app',
						{
							abstract : true,
							url : '/app/in',
							//templateUrl : 'privilege/app/base/layouts/navbar/layout.html',
							templateUrl : 'fc/app/layout/layout.html',
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															//'privilege/app/base/layouts/js/controllers/nav.controller.js',
															'fc/app/layout/aside.controller.js',
															/*'fc/app/layout/layout.controller.js',*/
															'privilege/app/base/layouts/js/services/nav.service.js',
															//'fc/app/layout/layout.controller.js',
															//'privilege/app/base/layouts/js/directives/nav.directive.js',
															'privilege/app/base/sys-dict/sys-dict.service.js',
									                        'fc/app/warningInformation/warningInformation.controller.js',
									                      	'fc/app/warningInformation/warningInformation.service.js',
									                      	'fc/app/warningInformation/warningInformation.state.js',
									                      	'fc/app/warningInformation/warningInformation-edit.controller.js',
															 localStorage.header 
															
															]);
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader.addPart('global');
											$translatePartialLoader.addPart('home');
											$translatePartialLoader.addPart('menu');
											$translatePartialLoader.addPart('dict');
											$translatePartialLoader.addPart(localStorage.homeJson);
											return $translate.refresh();
										} ]
							}
						})
		.state('app.index', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            //templateUrl: 'fc/app/home/home.html',
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                           // 'fc/app/home/home.controller.js',                     
                            localStorage.homeContent,
                        ]);
                    }
                ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                	$translatePartialLoader.addPart('menu');
                    return $translate.refresh();
                }]
            }
        })
				/* 数字字典 */
				.state(
						'app.sys-dict',
						{
							url : '/sys-dict/:parentGroup',
							templateUrl : 'privilege/app/base/sys-dict/sys-dict.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ],
								pageTitle : 'devplatformApp.sysDict.home.title'
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								},
								search : {
									value : '',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/sys-dict/sys-dict.controller.js', ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('sysDict');
											$translatePartialLoader
													.addPart('global');
											return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '字典管理',
								parent : 'app.index'

							}

						})
				/* 字典新增 */
				.state(
						'app.sys-dict-save',
						{
							url : 'sys-dict/save/:parentGroup/:parentName/:sort',
							templateUrl : 'privilege/app/base/sys-dict/sys-dict-dialog.html',
							data : {
								authorities : [ 'ROLE_USER' ],
								pageTitle : 'devplatformApp.sysDict.home.createOrEditLabel'
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/sys-dict/sys-dict-dialog.controller.js', ]);
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('sysDict');
											return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '新增或修改',
								parent : 'app.sys-dict'
							}
						})

				/* 日志管理 */
				.state(
						'app.sys-operateLog',
						{
							url : '/sys-operateLog/:menuId',
							templateUrl : 'privilege/app/base/sys-operateLog/sys-operateLog.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ],
								pageTitle : 'devplatformApp.sysOperateLog.home.title'
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								},
								search : {
									value : '',
									squash : true
								}

							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/sys-operateLog/sys-operateLog.controller.js',
															'privilege/app/base/sys-operateLog/sys-operateLog.service.js' ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('sysOperateLog');
											$translatePartialLoader
													.addPart('global');
											return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '日志管理',
								parent : 'app.index'
							}
						})

				/* 角色管理 */
				.state(
						'app.role-manager',
						{
							url : '/role-manager/:menuId',
							templateUrl : 'privilege/app/base/role-manager/role-manager.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ]
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/role-manager/role-manager.controller.js',
															'privilege/app/base/role-manager/role-manager.state.js',
															'privilege/app/base/role-manager/new-role-manager/new-role-manager.controller.js' ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('sysRole');
											$translatePartialLoader
													.addPart('global');
											return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '角色管理',
								parent : 'app.index'
							}
						})

				/* 菜单管理 */
				.state(
						'app.menu-management',
						{
							url : '/menu-management/:menuId',
							templateUrl : 'privilege/app/base/menu-management/menu-management.html',
							data : {
								authorities : [ 'ROLE_USER' ]
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/menu-management/menu-management.controller.js',
															'privilege/app/base/menu-management/menu-management.service.js',
															'privilege/app/base/menu-management/menu-management.state.js' ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : [
										'$translate',
										'$translatePartialLoader',
										function($translate,
												$translatePartialLoader) {
											$translatePartialLoader
													.addPart('menuManagement');
											$translatePartialLoader
													.addPart('global');
											return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '菜单管理',
								parent : 'app.index'
							}
						})
				/* 用户管理 */
				.state(
						'app.user',
						{
							url : '/user/:menuId',
							templateUrl : 'privilege/app/base/user/user.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ],
								pageTitle : 'devplatformApp.user.home.title'
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								},
								search : {
									value : '',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/user/user.controller.js',
															'privilege/app/base/user/user.service.js',
															'privilege/app/base/user/user.state.js' ]);
										} ],
								pagingParams : [
										'$stateParams',
										'PaginationUtil',
										function($stateParams, PaginationUtil) {
											return {
												page : PaginationUtil
														.parsePage($stateParams.page),
												sort : $stateParams.sort,
												predicate : PaginationUtil
														.parsePredicate($stateParams.sort),
												ascending : PaginationUtil
														.parseAscending($stateParams.sort)
											};
										} ],
								translatePartialLoader : ['$translate','$translatePartialLoader',
										function($translate,$translatePartialLoader) {
												$translatePartialLoader.addPart('user');
												$translatePartialLoader.addPart('global');
												return $translate.refresh();
										} ]
							},
							ncyBreadcrumb : {
								label : '用户管理',
								parent : 'app.index'
							}
						})
				.state(
						'app.role-user',
						{
							parent : 'app.role-manager',
							url : '/role-user/:sysRoleId',
							// templateUrl:
							// 'app/entities/role-manager/role-user.html',
							data : {
								authorities : [ 'ROLE_ADMIN' ],
							},
							params : {
								page : {
									value : '1',
									squash : true
								},
								sort : {
									value : 'id,asc',
									squash : true
								}
							},
							resolve : {
								deps : [
										'$ocLazyLoad',
										function($ocLazyLoad) {
											return $ocLazyLoad
													.load([
															'privilege/app/base/role-manager/role-user.controller.js',
															'privilege/app/base/role-manager/role-user.service.js', ]);
										} ]
							},
							onEnter : [
									'$uibModal',
									function($uibModal) {
										$uibModal
												.open({
													templateUrl : 'privilege/app/base/role-manager/role-user.html',
													controller : 'RoleUserController',
													// size: 'lg',
													keyboard : false,// 不给按Esc退出预览
													backdrop : 'static'

												});
									} ]

						});

	}

})();
