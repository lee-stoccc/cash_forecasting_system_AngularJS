/**
 * Created by Administrator on 2017/9/6/0006.
 */

(function ( angular ) {
    'use strict';
    angular.module('angularTable', [] ).directive( 'tableModel', ['$compile', function( $compile ) {
        return {
            restrict: 'A',
            link: function ( scope, element, attrs ) {
                scope.table_select_all = false;
                var tableTitles = scope.tableTitles;
                var tableContentList = scope.tableContentList;
                var tablePageChange = attrs.tablePageChange;
                var tablePage = attrs.tablePage || 'page';
                var tableTotalItems = attrs.tableTotalItems || 'totalItems';
                var tableQueryCount = attrs.tableQueryCount || 'queryCount';
                var tableItemsPerPage = attrs.tableItemsPerPage || 'itemsPerPage';
                var tablePageGo = attrs.tablePageGo || 'pageGo';
                scope.goPage = 1;
                var template ='<div class="table-responsive"><div class="table-content"><table class="table table-striped table-margin">' +
                    '<thead><tr class="table-title" jh-sort="predicate" ascending="reverse" callback="transition(tablePage)">';
                for(var index = 0;index < tableTitles.length;index++){
                    template += '<th class="td-center"><span>'+ tableTitles[index]['title']+'</span></th>'
                }
                template += '</tr></thead>';
                template += '<tbody><tr ng-repeat="tableContent in tableContentList track by tableContent.id">';
                for(var index = 0;index < tableTitles.length;index++){
                    var type = tableTitles[index]['type'];
                    var content = "";
                    if (type === 'date'){
                        content  = "tableContent." + tableTitles[index]['filed'] + "| date:'yyyy-MM-dd HH:mm'";
                    }else if(type === 'text') {
                        content  = "tableContent." + tableTitles[index]['filed'];
                    }
                    template += '<td class="td-center"><span>{{'+content+'}}</span></td>'
                }
                template += '</tr></tbody></table></div></div>';
                template +='<div class="ui-grid-pager-panel ng-scope">' +
                    '<div class="ui-grid-pager-container">' +
                        '<div class="ui-grid-pager-control table-page">' +
                            '<uib-pagination class="pagination-sm" total-items="'+ tableTotalItems +'" ng-model="'+ tablePage +'" ng-change="'+ tablePageChange +'"></uib-pagination>' +
                        '</div>' +
                        '<div class="ui-grid-pager-row-count-picker ng-scope">' +
                            '<jhi-item-count page="'+ tablePage +'" total="'+ tableQueryCount +'" items-per-page="'+ tableItemsPerPage +'"></jhi-item-count>' +
                        '</div>' +
                        '<div class="table-go">' +
                            '<input type="text" ng-model="goPage" class="form-control ng-pristine ng-valid ng-touched">' +
                            '<button  class="btn btn-info btn-sm" ng-click="'+ tablePageGo +'">GO</button>' +
                        '</div>' +
                    '</div></div>';
                element.html('').append( $compile( template )( scope ) );

                scope.$watch("goPage",function () {
                    if (scope.goPage.length > 0){
                        scope.goPage = scope.goPage.replace(/\D/g,"");
                    }
                });
            }
        };
    }]);
})( angular );
