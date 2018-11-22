/**
 * Created by NieFZ on 2016/12/8.
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
        .controller('navCtrl', ['$scope', 'sidebarService','ngDialog', '$state','PublicService', function ($scope, sidebarService,ngDialog, $state,PublicService ) {
        	
            $scope.getSidebar = getSidebar;
            $scope.getSidebar();
            $scope.openList = [];
            function getSidebar() { 
                sidebarService.getSidebar().then(function (json) {
//                
//                var k=0
//                var q=0
//                for(var j=0;j<1;j++){    // 第一组为侧栏菜单；删除侧栏菜单第一分栏的所有子菜单，字典除外
//                	for(var i = 0 ;i<5;i++){
//                		if(json.data.menuList[j]['children'][q]['englishName'] != "Dictionary"){
//                			json.data.menuList[j]['children'].splice(k,1)  
//                		}else{
//                			q += 1
//                			k += 1
//                		}
//                	}
//                }	  
                 $scope.items = json.data.menuList; 
                 localStorage.formList = angular.toJson(json.data.formList);
                 localStorage.componentList = angular.toJson(json.data.componentList);
                });
            }

            //通过按钮控制样式
            $scope.check = function (item, children) {
            	var englishName = item.englishName || null;
            	var a = angular.element('#'+englishName).hasClass("open");
            	if(a){
            		angular.element('#'+englishName).removeClass("open");
            	}else{
            		angular.element('#'+englishName).addClass("open");
            	}
            	var view = angular.element('#'+englishName+'Menu');
            	angular.element('#'+englishName+'Menu').slideToggle(function(){
            		if($scope.openList.in_array(englishName)){
            			$scope.openList.splice($.inArray(englishName, $scope.openList), 1);
            		}else{
            			$scope.openList.push(englishName);
            		}
            	});
            	if(!item.children){
            		$scope.addContent(item);
            	}
            };
            
            Array.prototype.in_array = function(e){
              for(var i=0;i<this.length;i++)
              {
                if(this[i] == e)
                  return true;
              }
              return false;
            }
            
            angular.element('.menuDiv').hover(function(){
            	$scope.contentWidth("open");
            	angular.forEach($scope.openList, function (item,index) {
            		angular.element('#'+item).addClass("open");
            		angular.element('#'+item+'Menu').slideDown(100);
            	});
            },function(){
            	angular.element('.menuDiv2').slideUp(100);
//            	angular.element('.a1').removeClass("open");
            	$scope.contentWidth("close");
            });
            
            //离开时确认编辑和权限确认
            function jugeSave(url, parentGroup, menuId) {
            	PublicService.getFormPrivilege(menuId);
                var name = $state.current.name;
                if( name.indexOf("add")>-1 || name.indexOf("edit")>-1 || name.indexOf("save")>-1)  {
                	PublicService.cancel(url, {parentGroup: 0, menuId: menuId});
                }else{
                    $state.go(url, {parentGroup: 0, menuId: menuId});
                }
            }
        }]);
    
})();
