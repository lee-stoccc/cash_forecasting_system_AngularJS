(function(){angular.module("devplatformApp").controller("MenuManagementController",a);a.$inject=["PublicService","$state","RoleManagerService","paginationConstants","MenuManagementService","$scope","$stateParams","ngDialog","$timeout"];function a(f,b,d,i,h,n,l,k,c){n.selectMenu=[];n.menuList=[];n.selectItem=r;n.newMenu=j;n.parentId=0;n.m=[];n.deleteMenus=q;n.menuManage=f.showView("menuManage");n.formParam={menuName:"",parentId:0,parentName:""};p();function p(){h.getMenuTreeList({}).then(g,e)}function g(s){if(s.statusCode==="0000"){n.menuList=s.data.list}else{var t=s.msgCode;n.showDialog(t)}}function e(s){}function m(s){if(s===null||s.length===0){return}o(n.menuList[0].id)}function o(s){r(s);n.totalItems=n.selectMenu.length;n.queryCount=n.totalItems;n.formParam.parentId=0;n.formParam.parentName=""}function r(x){n.formParam.parentId=-1;n.formParam.parentName="";n.select_all=false;n.selectMenu=[];for(var u=0;u<n.menuList.length;u++){if(String(n.menuList[u]["id"])===String(x)){n.formParam.parentId=n.menuList[u]["id"];n.formParam.queryTerm="";n.formParam.parentName=n.menuList[u]["menuName"];n.refreshTable();return}var v=n.menuList[u].children;if(v!==null){for(var s=0;s<v.length;s++){if(String(v[s]["id"])===String(x)){n.formParam.parentId=v[s]["id"];n.formParam.queryTerm="";n.formParam.parentName=v[s]["menuName"];n.refreshTable();return}var t=n.menuList[u].children[s].children;if(t!==null){for(var w=0;w<t.length;w++){if(String(t[w]["id"])===String(x)){n.refreshTable();return}}}}}}}n.tablesConfig={showCheckBox:true,tableWidth:"table-menu-width",tableTitles:[{title:"devplatformApp.menuManagement.CNM",filed:"menuName",type:"text-btn",width:"table-item-pre-1",actions:[{actionName:"toComponentManagement(item.id)"}]},{title:"devplatformApp.menuManagement.ENM",filed:"englishName",type:"text",width:"table-item-pre-2"},{title:"devplatformApp.menuManagement.url",filed:"url",type:"text",width:"table-item-pre-2"},{title:"devplatformApp.menuManagement.langSwitch",filed:"langSwitch",type:"text",width:"table-item-pre-2"},{title:"devplatformApp.menuManagement.order",filed:"sort",type:"text",width:"table-item-pre-1"},{title:"devplatformApp.menuManagement.pId",filed:"parentId",type:"text",width:"table-item-pre-1"},{title:"devplatformApp.menuManagement.delFlag",filed:"visible",type:"btn-status",width:"table-item-pre-1",actions:[{actionName:"enableMenu(item.id,item.visible)",statusList:[{status:"0",showName:"devplatformApp.menuManagement.select.disabled"},{status:"1",showName:"devplatformApp.menuManagement.select.enabled"}]}]},{title:"devplatformApp.menuManagement.operation",filed:"operation",type:"btn",width:"table-item-pre-2",actions:[{actionName:"toEditMenu(item.id)",name:"devplatformApp.menuManagement.reviser",formEnglishName:"menuManage",englishName:"editBtn"}]}],url:"api/sys-menu/getAllSysMenus",formParams:{queryTerm:n.formParam.queryTerm,parentId:n.formParam.parentId,parentName:n.formParam.parentName}};n.refreshTable=function(){n.param={queryTerm:n.formParam.queryTerm,parentId:n.formParam.parentId,};n.refreshTableList(n.param)};n.toComponentManagement=function(s){b.go("app.form-component-management",{menuFormId:s})};n.toEditMenu=function(s){b.go("app.new-menu",{id:s,type:0})};function q(){n.choseArr=n.getCheckValues().check;n.choseArrParam=n.getCheckValues("visible").checkedParamFlags;var s="";if(n.choseArr[0]==""||n.choseArr.length==0){s="devplatformApp.menuManagement.selectOne";n.showDialog(s);return}else{if(n.choseArrParam.indexOf("1")!=-1){s="devplatformApp.menuManagement.onlyDelDisable";n.showDialog(s);return}}n.message="devplatformApp.menuManagement.delConfirm";n.type="confirm";k.openConfirm({template:"app/common/dialog.html",className:"ngdialog-theme-default",scope:n,controller:["$scope",function(t){t.confirm=function(){h.delMenus(t.checked).then(function(){t.closeThisDialog();s="global.deleteSuccess";f.openDialog(s);b.go("app.menu-management",{},{reload:true})})}}]})}function j(){if(n.formParam.parentId===-1){n.message="devplatformApp.menuManagement.notParent";k.openConfirm({template:"app/common/dialog.html",className:"ngdialog-theme-default",scope:n,controller:["$scope",function(s){s.confirm=function(){s.closeThisDialog()}}]})}else{b.go("app.new-menu",{parentId:n.formParam.parentId,parentName:n.formParam.parentName,menuId:n.menuId,type:1})}}n.queryInfo=function(){function s(){n.formParam={classify:n.formParam.classify,delFlag:n.formParam.delFlag,type:n.formParam.type,title:n.formParam.title};n.refreshTableList(n.formParam)}};n.enableMenu=function(t,s){if(s=="0"||s==null||s==undefined){n.message="devplatformApp.menuManagement.enableConfirm";s="1"}else{if(s=="1"){n.message="devplatformApp.menuManagement.disableConfirm";s="0"}}n.type="confirm";k.openConfirm({template:"app/common/dialog.html",className:"ngdialog-theme-default",scope:n,controller:["$scope",function(u){u.confirm=function(){h.enableSysMenu({menuId:t,visible:s}).then(function(){u.refreshTable();u.closeThisDialog()})}}]})};n.showDialog=function(s){k.openConfirm({template:"app/common/dialog.html",className:"ngdialog-theme-default",controller:["$scope",function(t){t.message=s;t.type=""}]});c(function(){k.close()},2000)}}})();