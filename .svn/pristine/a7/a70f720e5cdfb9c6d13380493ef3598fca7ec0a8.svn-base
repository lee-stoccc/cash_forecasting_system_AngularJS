(function() {
    'use strict';

    angular
        .module('devplatformApp')
        .factory('stateHandler', stateHandler);

    stateHandler.$inject = ['$rootScope', '$state', '$sessionStorage', '$translate', 'JhiLanguageService', 'translationHandler', '$window',
        'Auth', 'Principal', 'VERSION', '$templateCache'];

    function stateHandler($rootScope, $state, $sessionStorage, $translate, JhiLanguageService, translationHandler, $window,
        Auth, Principal, VERSION, $templateCache) {
        return {
            initialize: initialize
        };

        function initialize() {
            $rootScope.VERSION = VERSION;

            var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
                $rootScope.toState = toState;
                $rootScope.currentRouter = toState.name;
                $rootScope.toStateParams = toStateParams;
                $rootScope.fromState = fromState;

                if (typeof(toState) !== 'undefined'){
                    $templateCache.remove(toState.templateUrl);
                }

                // Redirect to a state with an external URL (http://stackoverflow.com/a/30221248/1098564)
                if (toState.external) {
                    event.preventDefault();
                    $window.open(toState.url, '_self');
                }
                if($rootScope.toState.name !== 'login'
                    && $rootScope.toState.name !== 'homepage'
                    && $rootScope.toState.name !== 'singleLogin'
                    && $rootScope.toState.name !== 'userRegister'
                    && $rootScope.toState.name !== 'weixin-login'){
                    Auth.authorize();
                }
                // if (Principal.isIdentityResolved()) {
                //     Auth.authorize();
                // }

                // Update the language
                JhiLanguageService.getCurrent().then(function (language) {
                    $translate.use(language);
                });
            });

            var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
                var titleKey = localStorage.appName ;

                // Set the page title key to the one configured in state or use default one
              /*  if (toState.data.pageTitle) {
                    titleKey = toState.data.pageTitle;
                }*/
                translationHandler.updateTitle(titleKey);
            });

            $rootScope.$on('$destroy', function () {
                if(angular.isDefined(stateChangeStart) && stateChangeStart !== null){
                    stateChangeStart();
                }
                if(angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null){
                    stateChangeSuccess();
                }
            });
        }
    }
})();
