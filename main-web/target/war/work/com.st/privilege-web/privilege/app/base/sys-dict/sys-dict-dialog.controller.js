(function(){angular.module("devplatformApp").controller("SysDictDialogController",a);a.$inject=["$scope","$stateParams","SysDictService","$state","$timeout","$compile","PublicService","$uibModalInstance"];function a(j,i,g,b,c,d,f,h){j.clear=e;j.parentGroup=i.parentGroup;if(i.id){j.type="edit";g.getSysDict({id:i.id}).then(function(k){j.sysDict=k.data;j.parentGroup=k.data.parentGroup})}else{g.getSysDict({parentGroup:j.parentGroup}).then(function(k){j.sysDict={sort:0};if(k.data!==null){j.sysDict.sort=k.data.maxSort;if(k.data.group!=null){j.sysDict.group=k.data.group+"."}}})}j.save=function(){j.isSaving=true;var k="devplatformApp.sysDict.created";if(j.sysDict.id!==null&&j.sysDict.id!==undefined){j.message="devplatformApp.sysDict.updated";k="devplatformApp.sysDict.updated"}else{j.sysDict.parentGroup=j.parentGroup;j.message="devplatformApp.sysDict.created";k="devplatformApp.sysDict.created"}g.saveSysDict(j.sysDict).then(function(l){if(l.statusCode==="0000"){f.openDialog(k);b.go("app.sys-dict",{parentGroup:j.parentGroup})}else{j.isSaving=false;j.message=l.msgCode;f.showMessageDialog(j)}})};j.decrease=function(){j.sysDict.sort--;if(j.sysDict.sort<=0){j.sysDict.sort=0}};j.increase=function(){j.sysDict.sort++};function e(k){h.close();b.go("app.sys-dict",{},{reload:k})}}})();