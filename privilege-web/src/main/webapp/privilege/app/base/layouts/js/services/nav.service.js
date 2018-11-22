/**
 * Created by NieFZ on 2016/12/8.
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
        .factory('sidebarService', sidebarService);
        sidebarService.$inject = ['globalConstant', 'utilService'];
        function sidebarService (globalConstant, utilService) {
            // .service('sidebarService','globalConstant', ['utilService', function (utilService,globalConstant) {
            /**
             * 获取左侧菜单
             * @param params
             * @returns {deferred.promise|{then, catch, finally}}
             */
            function getSidebar(params) {
                var params = {"dd":"","ee":""};
                return utilService.requestPost(globalConstant.devplatform_web_apiPath + 'api/sys-menu/getMenuRightList', params);
            }

            var service = {
                "getSidebar": getSidebar
            };
            return service;

        }

        //}]);
})();
