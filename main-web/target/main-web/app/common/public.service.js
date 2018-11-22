/**
 * Created by ddgui on 2017/9/20.
 */
(function() {
    'use strict';
    var util = angular.module('publicService', []);
    util.factory('PublicService', ['Upload','$state','$q','ngDialog','$timeout','$filter', function(Upload,$state,$q,ngDialog,$timeout,$filter) {

        function isEmptyObject(obj) {
	    	 if (typeof obj !== 'object') {
	    		 return obj === null  || obj === undefined ||  obj === "";
	         }else {
	            var name;
	            for ( name in obj ) {
	                return false;
	            }
            }
            return true;
        }

        function formatDate(date,pattern){
        	if(isEmptyObject(date) || isEmptyObject(pattern)){
        		var date = new Date();
        		var pattern = "yyyy-MM-dd";
        	}
        	return $filter('date')(date, pattern); 
        }

        function openDialog (msg) {
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                controller:['$scope',function($scope){ //将scope传给dialog.html,以便显示提示信息
                	$scope.message = msg;
                	$scope.type = "";
                }]
            });
        }
        
        function showMessageDialog ($scope) {
            ngDialog.open({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                scope: $scope //将scope传给dialog.html,以便显示提示信息
                //controller:"ShowDialogController"
            });
        }

    //按取消的时候先提示是否要离开
        function cancel(url,param){
        	var message = "global.dialog.closeConfirm";
            var type = "confirm";
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
	            controller:['$scope',
                        function ($scope) {
                            $scope.message = message;
                            $scope.type = type;
                        }
                    ]
	                }).then(function(response){
	                	$state.go(url,param);
	                });
        }

        function showDialogTimeout(msg){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                controller:['$scope',function($scope){ //将scope传给dialog.html,以便显示提示信息
                	$scope.message = msg;
                	$scope.type = "";
                }]
            });
            $timeout(function() {
                ngDialog.close();
            }, 2000);
        }
        
        function showConfirmDialog(msg, clickOkfunc, scope, params){
            ngDialog.openConfirm({
                template: 'app/common/dialog.html',//模式对话框内容为dialog.html
                className: 'ngdialog-theme-default',
                controller:function($scope){ //将scope传给dialog.html,以便显示提示信息
                	$scope.message = msg;
                	$scope.type = "confirm";
                	$scope.confirm = function(){
                		scope[clickOkfunc](params);
                		ngDialog.close();
                	};
                }
            });
        }
        
        function showView(name) {
            var formList = angular.fromJson(localStorage.formList);
            for (var position = 0;position < formList.length;position++){
                if (formList[position]['englishName'] === name){
                    if (formList[position]['visible'] === "1"){
                        return formList[position]['checked'];
                    }else {
                        return false;
                    }
                }
            }
            return false;
        }
        
		 function showComponentView(formEnglishName,componentName) {
            var componentList = angular.fromJson(localStorage.componentList);
            if(componentList == null || componentList.length == 0){
            	return false;
            }
            for(var index = 0;index < componentList.length;index++){
                    var component = componentList[index];
                    if (component['englishName'] === formEnglishName){
                        var list = component['list'];
                        for (var position = 0;position < list.length;position++){
                            if (list[position]['englishName'] === componentName){
                                if (list[position]['visible'] === "1"){
                                    return list[position]['checked'];
                                }else{
                                	return false;
                                }
                            }
                        }
                    }
                }
            return true;
        }
		 	 
		function validateNumberInput(text) {
			var numberReg = /^[0-9]+$/;
			if(numberReg.test(text)) {
                return true;
            }
	        return false;
	    }

		//加法函数，用来得到精确的加法结果 
		//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
		//调用：accAdd(arg1,arg2) 
		//返回值：arg1加上arg2的精确结果 
		function accAdd(arg1, arg2) { 
		    var r1, r2, m; 
		    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0; } 
		    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0; } 
		    m = Math.pow(10, Math.max(r1, r2)); 
		    return (arg1 * m + arg2 * m) / m;
		} 
		//给Number类型增加一个add方法，调用起来更加方便。 
		Number.prototype.add = function(arg) { 
		    return accAdd(arg, this); 
		}; 

		//减法函数，用来得到精确的减法结果 
		//说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的加法结果。 
		//调用：accSub(arg1,arg2) 
		//返回值：arg1减去arg2的精确结果 

		function accSub(arg1, arg2) { 
		    var r1, r2, m, n; 
		    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0; } 
		    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0; } 
		    m = Math.pow(10, Math.max(r1, r2)); 
		    n = (r1 >= r2) ? r1 : r2; 
		    return ((arg1 * m - arg2 * m) / m).toFixed(n); 
		} 
		//给Number类型增加一个sub方法，调用起来更加方便。 
		Number.prototype.sub = function(arg) { 
		    return accSub(arg, this); 
		};
		
		//计算时间差
		function subTime(fromDate, toDate) {
			if(!isEmptyObject(fromDate) && !isEmptyObject(toDate)){
				var result = {'errorMsg':"global.timeMsg2"};
				if(fromDate<toDate){
					var date3 = toDate.getTime() - fromDate.getTime(); // 时间差的毫秒数
					// 计算出相差天数
					var days = Math.floor(date3 / (24 * 3600 * 1000));
					// 计算出小时数
					var leave1 = date3 % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
					var hours = toNBitFloat(leave1 / (3600 * 1000), 1);
					// 计算相差分钟数
					var leave2 = leave1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
					var minutes = Math.floor(leave2 / (60 * 1000));
					result = {'days':days, 'hours':hours, 'minutes':minutes};
				}
				return result;
			}
		}
		
		// 保留n位小数
		function toNBitFloat(val, n) {
			if(n < 0){
				return val;
			}
			var x = 1;
			for(var i = 0; i < n; i++){
				x = x * 10;
			}
			return Math.round(val * x) / x;
		}
		
		//工作日节假日判断
        function calcWorkDayOrAll(arr){
        	var selectAll;
    		var selectWorkDay;
        	var selectAllWeekEnd = true;
        	var selectAllWorkDay = true;
        	var selectOneWeekEnd = false;
        	angular.forEach(arr, function (item) {
        		if(item.key === 6 || item.key === 7){
        			selectAllWeekEnd = selectAllWeekEnd && item.checked;
        			selectOneWeekEnd = selectOneWeekEnd || item.checked;
        		}else{
        			selectAllWorkDay = selectAllWorkDay && item.checked;
        		}
        	});
        	if(selectAllWeekEnd && selectAllWorkDay){
        		selectAll = true;
        		selectWorkDay = false;
        	}else if( selectAllWorkDay && !selectOneWeekEnd ){
        		selectWorkDay = true;
        		selectAll = false;
        	}else{
        		selectWorkDay = false;
        		selectAll = false;
        	}
        	var obj = {"selectWorkDay":selectWorkDay,"selectAll":selectAll};
        	return obj;
        }
		
		//获取页面权限
        function getFormPrivilege(menuId) {
        	 var formList = angular.fromJson(localStorage.formList);
        	 var flag = false;
        	 var i = 0; //区别没有配置权限的页面
        	 for (var position = 0;position < formList.length;position++){
                 if (formList[position]['menuId'] === menuId){
                	 i++;
                	 if (formList[position]['checked']){
                		 flag = true; //区别同一个menuId，有和无权限同时存在的情况(但是如果是有保存权限但没有列表权限的时候有bug，反之不会)
                		 return;
                	 }
                 }
             }
        	 if (!flag && i!=0){
        		 showDialogTimeout("global.noPrivilege");
        	 }
        }
        
        //日期列表
        function getDateList(){
        	var dateList = [
        	                {key:'01',value:'01',check:false},
        	                {key:'02',value:'02',check:false},
        	                {key:'03',value:'03',check:false},
        	                {key:'04',value:'04',check:false},
        	                {key:'05',value:'05',check:false},
        	                {key:'06',value:'06',check:false},
        	                {key:'07',value:'07',check:false},
        	                {key:'08',value:'08',check:false},
        	                {key:'09',value:'09',check:false},
        	                {key:'10',value:'10',check:false},
        	                {key:'11',value:'11',check:false},
        	                {key:'12',value:'12',check:false},
        	                {key:'13',value:'13',check:false},
        	                {key:'14',value:'14',check:false},
        	                {key:'15',value:'15',check:false},
        	                {key:'16',value:'16',check:false},
        	                {key:'17',value:'17',check:false},
        	                {key:'18',value:'18',check:false},
        	                {key:'19',value:'19',check:false},
        	                {key:'20',value:'20',check:false},
        	                {key:'21',value:'21',check:false},
        	                {key:'22',value:'22',check:false},
        	                {key:'23',value:'23',check:false},
        	                {key:'24',value:'24',check:false},
        	                {key:'25',value:'25',check:false},
        	                {key:'26',value:'26',check:false},
        	                {key:'27',value:'27',check:false},
        	                {key:'28',value:'28',check:false},
        	                {key:'29',value:'29',check:false},
        	                {key:'30',value:'30',check:false},
        	                {key:'31',value:'31',check:false}
        	                
        	      ];
        	return dateList;
        }
        
		 //上传文件
        function submitFile(uploadFiles,uploadUrl,bankfunc,scope,jsonData,upLoadMethod){
      	   if (isEmptyObject(jsonData)) {
      		   jsonData = {};
      	   }
      	   if (isEmptyObject(upLoadMethod)) {
      		   upLoadMethod = "post";
      	   }
            Upload.upload({
                method: upLoadMethod,
                url: uploadUrl,
                data:jsonData,
                file : uploadFiles
            }).success(function (response) {
//            	openDialog("Please Wait...")
                if(response.statusCode === '0000'){
                	$('.ngdialog-theme-default').remove()
                	showDialogTimeout(response.msgCode);
                	if (!isEmptyObject(bankfunc)) {
              	  		scope[bankfunc]();
              	  	}
                }else{
                	$('.ngdialog-theme-default').remove()
                	showDialogTimeout(response.msgCode);
                }
               }).error(function(data, status, headers, config){
            	   $('.ngdialog-theme-default').remove()
               });
            };
            
            //加钞周期
            function getCashDay(replenishRule){
            	 var week ="";
            	 var weeks="";
        		 var flag = true;
    	    	 angular.forEach(replenishRule,function(data){
    	    		if(data.checked){ //筛选勾选的星期
    	    			week +=data.key+",";
    	    		}
    	    	 });
    	    	 if (week=="") {
                     flag = false;
    			}else{
    				 weeks = week.substring(0,week.length-1);
    			}
    	    	var obj = {"flag":flag,"replenishRule":weeks};
            	return obj;
            };
            
            function showData(json1,json2){
           	 var allDay = false;
           	 var workDay = false;
           	 if (json1 != null) {
           		  var arr2 = json1.split(",");  // arr2转换数组
        		   	 if (arr2.length==7) { //回显全选
        		   		  allDay = true;
        				}else if(arr2.length==5){
               		   	 var arr1 = ["1","2","3","4","5"];  // 比较工作日
               		   	 var num=0  
               		   	 for(var j=0;j<arr1.length;j++){
               		   		 if(arr1[j]==arr2[j]){
               		   			 num+=1
               		   			 if(num==5){
               		   				workDay=true
               		   			 }
               		   		 }
               		   	 }
        			}
        		   	 for(var i in arr2){
        		   		var keepGoing = true; //forEach没有跳出循环的break
        		   		angular.forEach(json2,function(data){
        		   				if(keepGoing && Number(arr2[i])==data.key){
        		   					data.checked = true;
        		   					keepGoing = false;
        		   				}else if(!data.checked){
        		   					data.checked = false;
        		   				}
        		   		});
        		   	}
   			}
   		   		var obj = {"selectWorkDay":workDay,"selectAll":allDay};
   		   		return obj;
           }
            
            // 获取当前操作页面的index 并通过 index 激活原页面  
            function getActiveIndex(sel,className){
            	var liList=$(sel)
            	var indexs=0
    	        for(var jj=0;jj<liList.length;jj++){
    	        	if(liList[jj].classList.contains(className)){
    	        		var indexs=jj
    	        		break
    	        	}
    	        }
            	setTimeout(function(){
            		var liList=$(sel)
    	        	var lengths=liList.length-1
    	        	if(indexs!=lengths){
    	        		$(sel).eq(lengths).removeClass(className)
    	        		$(sel).eq(indexs).addClass(className)
    	        		$(sel).eq(indexs).children('a').click()
    	        	}
    	        },2000)
            }
            
            
            
            // 获得index后激活原来操作的页面
            function activePage(index,sel,className){
            	setTimeout(function(){
    	        	var liList=$(sel)
    	        	var length=liList.length-1
    	        	if(index!=length){
    	        		$(sel).eq(length).removeClass(className)
    	        		$(sel).eq(index).addClass(className)
    	        		$('.active a').click()
    	        	}
    	        },1500)
            }  
            
            // 对比时间
            function compareTime(startTime,endTime){
            	if(typeof startTime=='object'&& typeof startTime=="object" ){
            		var startTimeNum=startTime.getTime()
            		var endTimeNum=endTime.getTime()
            		return endTimeNum>=startTimeNum?true:false
            	}
            } 
            
            // 对货币张数进行分类,用于回显数据 
            function cashDeminationCount(array){
          	  var cashDeminationCount={}
          	  for(var i=0;i<array.length;i++){
          		  if(array[i].currency=='CNY' && array[i].denomination==100){
          			  cashDeminationCount.CNY=array[i]['count']
          		  }else{
          			  if(array[i].denomination==1000 && array[i].currency=='HKD'){
          				  cashDeminationCount.HKD1000=array[i].count
          			  }else if(array[i].denomination==100 && array[i].currency=='HKD'){
          				  cashDeminationCount.HKD100=array[i].count
          			  }else if(array[i].denomination==500 && array[i].currency=='HKD'){
          				  cashDeminationCount.HKD500=array[i].count
          			  }
          		  }
          	  }
          	  return cashDeminationCount
            }
            
            
            // 页面有币种面额等信息的时候使用，加上货币符号 和判断类型
            function typeAndDemination(obj){
            	if(obj.type=='CNY'){  // 人民币
            		var dictDescs='￥:'+obj.denominationList[0]['denomination']
            		obj.denominationList[0]['dictDescs']=dictDescs
    			}else if(obj.type=='HKD'){   // 港币
    				for(var i=0;i<obj.denominationList.length;i++){
    					var dictDescs='HK$:'+obj.denominationList[i]['denomination']
    					obj.denominationList[i]['dictDescs']=dictDescs
    				}
    			}
	            	return obj 
            }
            
            // 页面没有币种面额等信息的时候使用，加上货币符号 和判断类型
            function typeAndDemination2(array,type){
            	if(type=='CNY'){
            		array[0]['dictDescs']='￥:'+array[0]['dictDesc']
            	}else if(type=='HKD'){
            		for(var i=0;i<array.length;i++){
            			array[i]['dictDescs']='HK$:'+array[i]['dictDesc']
            		}
            	}
            	return array
            }
      
            
          return {
        	"showData":showData,
        	"isEmptyObject": isEmptyObject,
            "formatDate": formatDate,
            "cancel": cancel,
            "openDialog": openDialog,
            "showDialogTimeout": showDialogTimeout,
            "showView": showView,
            "getFormPrivilege": getFormPrivilege,
            "showComponentView":showComponentView,
            "showMessageDialog":showMessageDialog,
            "validateNumberInput":validateNumberInput,
            "accAdd":accAdd,
            "accSub":accSub,
            "subTime":subTime,
            "toNBitFloat":toNBitFloat,
            "showConfirmDialog":showConfirmDialog,
            "submitFile":submitFile,
            "getDateList":getDateList,
            "calcWorkDayOrAll":calcWorkDayOrAll,
            "getCashDay":getCashDay,
            "getActiveIndex":getActiveIndex,
            "activePage":activePage,
            "compareTime":compareTime,
            "cashDeminationCount":cashDeminationCount,
            "typeAndDemination":typeAndDemination,
            "typeAndDemination2":typeAndDemination2
        };
    }]);
})();

