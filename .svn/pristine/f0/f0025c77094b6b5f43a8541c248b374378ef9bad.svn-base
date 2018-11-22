/**
 * Created by Administrator on 2017/10/10/0010.
 */
(function ( angular ) {
    'use strict';
    angular.module('angularComponent', [] ).directive( 'componentModel', ['$compile', function( $compile ) {
        return {
            restrict: 'A',
            link: function ( scope, element, attrs ) {
                var componentList = angular.fromJson(localStorage.componentList);
                var componentFormEnglishName = attrs.componentFormEnglishname;
                var componentEnglishName = attrs.componentEnglishname;
                var componentDataName = attrs.componentDataname;
                var showBtn = false;
//                var btnName = "";
                outer:
                for(var index = 0;index < componentList.length;index++){
                    var component = componentList[index];
                    if (component['englishName'] === componentFormEnglishName){
                        var list = component['list'];
                        for (var position = 0;position < list.length;position++){
                            if (list[position]['englishName'] === componentEnglishName){
//                                btnName = list[position]['componentName'];
                                if (list[position]['visible'] === "1"){
                                    showBtn = list[position]['checked'];
                                    break outer;        //跳出多循环
                                }
                            }
                        }
                    }
                }
                scope.goPage = 1;
                var template ='<button ng-show="'+ showBtn +'">' +
                        '<span class="'+ attrs.componentIconClass +'"></span>' +
                        '<span data-translate="'+ componentDataName +'"></span>' +
                    '</button>';
                element.html('').append( $compile( template )( scope ) );
            }
        };
    }]);
})( angular );
