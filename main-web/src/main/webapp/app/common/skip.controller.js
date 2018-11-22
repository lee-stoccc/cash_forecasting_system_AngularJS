(function () {
    'use strict';

    angular
        .module('devplatformApp')
        .controller('SkipController', SkipController);

    SkipController.$inject = ['Principal',  '$state','JhiLanguageService', '$scope', '$stateParams', 'ngDialog', '$rootScope', '$compile', '$interval', '$timeout'];

    function SkipController(Principal, $state,  JhiLanguageService, $scope, $stateParams, ngDialog, $rootScope, $compile, $interval, $timeout) {

        var state = $stateParams.state;

        $scope.autoSkip = function() {
            secondAfterSkip(5);
        };

        function secondAfterSkip(second) {
            $scope.timeText = second;
            var counter = $interval(function(){
                $scope.timeText = $scope.timeText - 1;
            }, 1000);

            $timeout(function() {
                $interval.cancel(counter);
                $state.go(state);
            }, second * 1000);
        }

    }

})();
