/**
 * Created by NieFZ on 2016/12/3.
 * Controllers
 *//*
(function () {
    'use strict';
    angular.module('devplatformApp')
        .controller('devplatformCtrl', ['$scope', '$window', '$state', '$location',
            function ($scope, $window, $state, $location) {
                // add 'ie' classes to html
                var isIE = !!navigator.userAgent.match(/MSIE/i);
                isIE && angular.element($window.document.body).addClass('ie');
                isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

                // config
                $scope.app = {
                    name: '无知网',
                    settings: {
                        navbarHeaderColor: 'bg-black',
                        navbarCollapseColor: 'bg-white-only',
                        asideColor: 'bg-black',
                        headerFixed: true,
                        asideFixed: false,
                        asideFolded: false,
                        asideDock: false,
                        container: false
                    }
                };

                function isSmartDevice($window) {
                    // Adapted from http://www.detectmobilebrowsers.com
                    var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
                }

                $scope.logout = function () {
                    if (localStorage.Token || localStorage.user) {
                        localStorage.clear();
                    }
                    $state.go('homepage');
                };
            }]);
})();
*/