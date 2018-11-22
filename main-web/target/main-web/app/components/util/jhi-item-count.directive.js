(function() {
    'use strict';

    var jhiItemCount = {
        template: '<div class="info">' +
                    '<span class="hidden-sm-down" data-translate="global.showing"></span> ' +
                    '{{(($ctrl.page - 1) * $ctrl.itemsPerPage) == 0 ? ($ctrl.queryCount > 0 ? 1 : 0) : (($ctrl.page - 1) * $ctrl.itemsPerPage + 1)}} - ' +
                    '{{($ctrl.page * $ctrl.itemsPerPage) < $ctrl.queryCount ? ($ctrl.page * $ctrl.itemsPerPage) : $ctrl.queryCount}} ' +
                    '<span class="hidden-sm-down" data-translate="global.of"></span> ' +
                    '{{$ctrl.queryCount}} ' +
                    '<span class="hidden-sm-down" data-translate="global.items"></span> ' +
                '</div>',
        bindings: {
            page: '<',
            queryCount: '<total',
            itemsPerPage: '<'
        }
    };

    angular
        .module('devplatformApp')
        .component('jhiItemCount', jhiItemCount);
})();
