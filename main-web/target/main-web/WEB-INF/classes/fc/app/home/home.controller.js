(function(){angular.module("devplatformApp").controller("FcHomeController",a);a.$inject=["ngDialog","$state","$scope","$timeout","PublicService"];function a(f,e,b,d,c){b.datas=[];b.backVale=[{id:"001",name:"Vincent"},{id:"002",name:"Smile"},{id:"003",name:"Knight"}];b.datas=b.datas.concat(b.backVale);angular.element("#icon").click(function(){angular.element(".panelDiv").toggle()});angular.element("#key").blur(function(){b.datas.splice(0,b.datas.length);b.datas=b.datas.concat(b.backVale);angular.element(".panelDiv").hide()});b.setValue=function(h,g){b.value=h;b.key=g;angular.element(".panelDiv").hide()};b.inputValue=function(){angular.element(".panelDiv").show();b.datas.splice(0,b.datas.length);if(b.key===""){b.datas=b.datas.concat(b.backVale);b.value="";b.key=""}else{for(var g=0;g<b.backVale.length;g++){var h=angular.uppercase(b.backVale[g].name);var j=angular.uppercase(b.key);if(h.indexOf(j)>-1){b.datas.push(b.backVale[g])}if(b.key===b.backVale[g].name){b.value=b.backVale[g].id}else{b.value=b.backVale[g].name}}}}}})();