(function() {
    'use strict';

    angular
        .module('devplatformApp', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'oc.lazyLoad',
            'suitong.util',
            'publicService',
            'ng.ueditor',
            'ngDialog',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'ngVerify',
            'ngImage',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'angularTreeView',
            'angularTable',
            'ncy-angular-breadcrumb',
            'angularComponent',
            'angularTables',
            'angularTree',
            'eChart'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
})();
