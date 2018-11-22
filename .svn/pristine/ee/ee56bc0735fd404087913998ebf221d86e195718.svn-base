(function () {
    'use strict';

    angular
        .module('devplatformApp')
        /*.run(['$rootScope', '$state', '$stateParams', '$window','$localStorage','$sessionStorage',
         function($rootScope, $state, $stateParams, $window, $localStorage,$sessionStorage) {
         $rootScope.$on('$stateChangeStart',
         function (event, toState) {
         $rootScope.currentRouter = toState.name;
         });
         if (!$sessionStorage.authenticationToken && !$localStorage.authenticationToken) {
         var prefix_host = location.href.split('#')[0];
         if (window.location.host.indexOf('localhost') > -1) {
         if (window.location.href.indexOf('/login') === -1) {
         $window.location.href = prefix_host + '#/login';
         }
         } else {
         if (window.location.href.indexOf('/login') === -1) {
         $window.location.href = prefix_host + '#/login';
         //$window.location.href = $window.location.href + '#/login';
         }
         }
         }
         }
         ])*/
        .config(['$stateProvider', '$urlRouterProvider', '$provide',  function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('skip', {
                    url: '/skip/:state',
                    templateUrl: 'app/common/skip.html',
                    data: {

                    },
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'app/common/skip.controller.js'
                                ]);
                            }],
                        translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('global');
                            $translatePartialLoader.addPart('skip');
                            return $translate.refresh();
                        }]

                    }
                });

        }]);
})();
