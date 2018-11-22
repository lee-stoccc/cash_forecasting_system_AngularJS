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
		 .state('app.cusRegion', {
	            url:'/cusRegion',
	            templateUrl: 'fc/app/cusRegion/cusRegion.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/cusRegion/cusRegion.controller.js',
	                            'fc/app/cusRegion/cusRegion.service.js',                          
	                            'fc/app/cusRegion/cusRegion.state.js'
	                            
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('cusRegion');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	        .state('app.cashGuaranteeRate', {
	            url:'/cashGuaranteeRate',
	            templateUrl: 'fc/app/cashGuaranteeRate/cashGuaranteeRate.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/cashGuaranteeRate/cashGuaranteeRate.controller.js',
	                            'fc/app/cashGuaranteeRate/cashGuaranteeRate.service.js',                          
	                            'fc/app/cashGuaranteeRate/cashGuaranteeRate.state.js'
	                            
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('cashGuaranteeRate');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	        .state('app.inventoryStatistics', {
	            url:'/inventoryStatistics',
	            templateUrl: 'fc/app/inventoryStatistics/inventoryStatistics.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/inventoryStatistics/inventoryStatistics.controller.js',
	                            'fc/app/inventoryStatistics/inventoryStatistics.service.js',                          
	                            'fc/app/inventoryStatistics/inventoryStatistics.state.js'
	                            
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('inventoryStatistics');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	      .state('app.holiday', {
            url:'/holiday/list',
            templateUrl: 'fc/app/holiday/holiday.html',
			params : {
					page : {
						value : '1',
						squash : true
					}
				},
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'fc/app/holiday/holiday.controller.js',
                            'fc/app/holiday/holiday.service.js', 
                            'fc/app/holiday/holiday.state.js'                          
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('holiday');
					$translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
         .state('app.bankInfo', {
            url:'/bankInfo/list',
            templateUrl: 'fc/app/bankInfo/bankInfo.html',
			params : {
					page : {
						value : '1',
						squash : true
					}
				},
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'fc/app/bankInfo/bankInfo.controller.js',
                            'fc/app/bankInfo/bankInfo.service.js', 
                            'fc/app/bankInfo/bankInfo.state.js'                          
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('bankInfo');
					$translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('app.bankRule', {
            url:'/bankRule/list',
            templateUrl: 'fc/app/bankRule/bankRule.html',
			params : {
					page : {
						value : '1',
						squash : true
					}
				},
            resolve: {
                deps: ['$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'fc/app/bankRule/bankRule.controller.js',
                            'fc/app/bankRule/bankRule.service.js', 
                            'fc/app/bankRule/bankRule.state.js'                          
                        ]);
                    }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('bankRule');
					$translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
         .state('app.termInfo', {
	            url:'/termInfo/list/{{bankId}}',
	            templateUrl: 'fc/app/termInfo/termInfo.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/termInfo/termInfo.controller.js',
	                            'fc/app/termInfo/termInfo.service.js',
	                            'fc/app/bankRule/bankRule.service.js',
	                            'fc/app/termInfo/termInfo.state.js'                          
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('termInfo');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	        .state('app.termMonitorData', {
	        	url:'/termMonitorData/list',
	        	templateUrl: 'fc/app/processData/termMonitor/termMonitor.html',
	        	params : {
	        		page : {
	        			value : '1',
	        			squash : true
	        		}
	        	},
	        	resolve: {
	        		deps: ['$ocLazyLoad',
	        		       function ($ocLazyLoad) {
	        			return $ocLazyLoad.load([
	                         'fc/app/processData/termMonitor/termMonitor.controller.js',
	                         'fc/app/processData/termMonitor/termMonitor.service.js', 
	                         'fc/app/termInfo/termInfo.service.js',
	                         'fc/app/bankRule/bankRule.service.js' 
	                         ]);
	        		}],
	        		translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	        			$translatePartialLoader.addPart('termInfo');
	        			$translatePartialLoader.addPart('termMonitor');
	        			$translatePartialLoader.addPart('global');
	        			return $translate.refresh();
	        		}]
	        	}
	        })
	        .state('app.castData', {
	        	url:'/castData/list',
	        	templateUrl: 'fc/app/processData/castData/castData.html',
	        	params : {
	        		page : {
	        			value : '1',
	        			squash : true
	        		},
	        		flag:{
	        			value:'1'
	        		}
	        	},
	        	resolve: {
	        		deps: ['$ocLazyLoad',
	        		       function ($ocLazyLoad) {
	        			return $ocLazyLoad.load([
	                         'fc/app/processData/castData/castData.controller.js',
	                         'fc/app/processData/castData/castData.service.js', 
	                         'fc/app/termInfo/termInfo.service.js',
	                         'fc/app/bankRule/bankRule.service.js' 
	                         ]);
	        		}],
	        		translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	        			$translatePartialLoader.addPart('termInfo');
	        			$translatePartialLoader.addPart('termMonitor');
	        			$translatePartialLoader.addPart('castData');
	        			$translatePartialLoader.addPart('global');
	        			return $translate.refresh();
	        		}]
	        	}
	        })
	        .state('app.returnData', {
	        	url:'/returnData/list',
	        	templateUrl: 'fc/app/processData/castData/castData.html',
	        	params : {
	        		page : {
	        			value : '1',
	        			squash : true
	        		},
	        		flag:{
	        			value:'2'
	        		}
	        	},
	        	resolve: {
	        		deps: ['$ocLazyLoad',
	        		       function ($ocLazyLoad) {
	        			return $ocLazyLoad.load([
		                         'fc/app/processData/castData/castData.controller.js',
		                         'fc/app/processData/castData/castData.service.js', 
		                         'fc/app/termInfo/termInfo.service.js',
		                         'fc/app/bankRule/bankRule.service.js' 
		                         ]);
	        		}],
	        		translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	        			$translatePartialLoader.addPart('termInfo');
	        			$translatePartialLoader.addPart('castData');
	        			$translatePartialLoader.addPart('global');
	        			return $translate.refresh();
	        		}]
	        	}
	        })
	         .state('app.dailyUsingData', {
	        	url:'/dailyUsingData/list',
	        	templateUrl: 'fc/app/processData/dailyUsing/dailyUsing.html',
	        	params : {
	        		page : {
	        			value : '1',
	        			squash : true
	        		}
	        	},
	        	resolve: {
	        		deps: ['$ocLazyLoad',
	        		       function ($ocLazyLoad) {
	        			return $ocLazyLoad.load([
	                         'fc/app/processData/dailyUsing/dailyUsing.controller.js',
	                         'fc/app/processData/dailyUsing/dailyUsing.service.js', 
	                         'fc/app/processData/dailyUsing/dailyUsing.state.js', 
	                         'fc/app/termInfo/termInfo.service.js',
	                         'fc/app/bankRule/bankRule.service.js' 
	                         ]);
	        		}],
	        		translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	        			$translatePartialLoader.addPart('termInfo');
	        			$translatePartialLoader.addPart('termMonitor');
	        			$translatePartialLoader.addPart('bankRule');
	        			$translatePartialLoader.addPart('global');
	        			return $translate.refresh();
	        		}]
	        	}
	        })
	        .state('app.forecastPlan', {
	            url:'/forecastPlan',
	            cache:'true',
	            templateUrl: 'fc/app/forecastPlan/forecastPlan.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/forecastPlan/forecastPlan.controller.js',
	                            'fc/app/forecastPlan/noForecastPlan.controller.js',
	                            'fc/app/forecastPlan/forecastPlan.service.js',
	                            'fc/app/forecastPlan/stock/stock.state.js', 
	                            'fc/app/forecastPlan/forecastPlan.state.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('forecastPlan');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	        .state('app.forecastReportform', {
	            url:'/forecastReportform',
	            cache:'true',
	            templateUrl: 'fc/app/forecastReportform/forecastReportform.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/forecastReportform/forecastReportform.controller.js',
	                            'fc/app/forecastReportform/forecastReportform.service.js',
	                            'fc/app/forecastReportform/forecastReportform.state.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('forecastReport');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        })
	       .state('app.eventManagement', {
	            url:'/eventManagement',
	            cache:'true',
	            templateUrl: 'fc/app/eventManagement/eventManagement.html',
				params : {
						page : {
							value : '1',
							squash : true
						}
					},
	            resolve: {
	                deps: ['$ocLazyLoad',
	                    function ($ocLazyLoad) {
	                        return $ocLazyLoad.load([
	                            'fc/app/eventManagement/eventManagement.controller.js',
	                            'fc/app/eventManagement/eventManagement.service.js',
	                            'fc/app/eventManagement/eventManagement.state.js'
	                        ]);
	                    }],
	                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
	                    $translatePartialLoader.addPart('eventManagement');
						$translatePartialLoader.addPart('global');
	                    return $translate.refresh();
	                }]
	            }
	        });
	}

})();
