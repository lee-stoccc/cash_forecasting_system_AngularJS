(function() {
    'use strict';
    angular
        .module('devplatformApp')
        .controller('HolidayEditController', HolidayEditController);
    HolidayEditController.$inject = ['$rootScope','HolidayService', '$scope', '$stateParams','$state', 'ngDialog','PublicService','ngVerify','SysDictService','$uibModalInstance','$translate'];
    function HolidayEditController($rootScope,HolidayService, $scope, $stateParams, $state, ngDialog, PublicService,ngVerify,SysDictService,$uibModalInstance,$translate) {
    	 //数据字典加载
        function getDict(param, parentGroup){
        	SysDictService.getDictListAsync(parentGroup)
        	.then(function(response){
        		if(response.statusCode === '0000'){
        			$scope[param] = response.data;
        		}
        	});
        }
        
        $scope.init = function(){
        	$scope.select('#yearHoliday')
        	$scope.select('#holidayNameHoliday')
        	getDict('typeList', 'forecast.holidayType');
        	getDict('holidayList', 'forecast.holiday');
        	// 获取年份
        	getDict('years', 'forecast.years');  
        	showData();
        	years();
         };
         
         // 遍历字典年份
         function years(){
        	var year = Number(PublicService.formatDate(new Date(),"yyyy"));
        	var newYears=[year]	
        	if($scope.years.length !==0 && $scope.years !== undefined){
	        	for(var ii=0;ii<$scope.years[0].dictDesc;ii++){
	        		newYears.push(year+ii+1)
	        		newYears.push(year-ii-1)
	        	}	
        	}
        	$scope.yearArr=newYears.sort()
         }
        	
         
    	$scope.yearArr =$scope.yearArr; 
    	$scope.datePickerOpenStatus = {};
	    
    	  // 可以填写的选择下拉框
        $scope.select=function(id){
        	angular.element(id).select2({		//select2-search__field
        		placeholder: $translate.instant("global.pleaseSelect"),
        		allowClear: true,
        		tags:false
        	})
        }
        
        //展示数据
        function showData(){
        	 if ($stateParams.id) {
				   $scope.type = "edit";
		            HolidayService.getHoliday($stateParams.id).then(function (response) {
						if(response.statusCode === "0000"){
							$scope.holiday = response.data;
//							$scope.endDate=response.data['details'][0]['endDate'].getFullYear()
//							$scope.startDate=response.data['details'][0]['startDate'].getFullYear()
							$scope.dateObj = response.data.details;
							angular.forEach($scope.dateObj,function(data){
								data.startDate = dateToGMT(data.startDate);
								data.endDate = dateToGMT(data.endDate);
							});
							// edit 页面初始化加载数据
					        $('#select2-yearHoliday-container .select2-selection__placeholder').text($scope.holiday['year']).css('color','#000')
//					        $('#select2-yearHoliday-container .select2-selection__placeholder').addClass('select2-selection__clear')
//					        $('#select2-yearHoliday-container .select2-selection__placeholder').removeClass('select2-selection__placeholder')
					        var dictKey=$scope.holiday['holidayNo']
					        for(var i=0;i<$scope.holidayList.length;i++){
					        	if(dictKey==$scope.holidayList[i]['dictKey']){
					        		var dictDesc=$scope.holidayList[i]['dictDesc']
					        		break
					        	}
					        }
					        $('#select2-holidayNameHoliday-container .select2-selection__placeholder').text(dictDesc).css('color','#000')
						}
		            })
        	 }
        }
        
        $scope.dateObj = [{startDate:"",endDate:"",type:""}];  
        $scope.addDate = function() { 
	          $scope.dateObj.splice($scope.dateObj.length+1, 0,{startDate:"",endDate:"",type:""});        
	      };  
	      
	      $scope.delDate = function($index) {
	    	 if($scope.dateObj.length===1){ //最后一个不能删除
	    		PublicService.showDialogTimeout("holiday.formError.lastOne");
	    		 return;
	    	 }
	         $scope.dateObj.splice($index, 1);  
	     };
        $scope.save = function() {
        	if($scope.getHoliday()){
        		var flag = competeDate();
        		if(!flag){
        			PublicService.showDialogTimeout("holiday.formError.dateConflict");
        			return;
        		}
	            $scope.message = "global.saveSuccess";   
	            $scope.holiday.details= $scope.dateObj;
	            
	            // 改变时区
	            var details=$scope.holiday['details']
	            for(var i=0;i<details.length;i++){
	            	if(details[i]['type']==1){
	            		var newEndData=details[i]['endDate']
	            		var type=typeof newEndData
	            		if(type=='object'){
	            			var t_s = newEndData.getTime();//转化为时间戳毫秒数
		            		$scope.holiday['details'][i]['endDate']=newEndData.setTime(t_s + 1000 * 200)
		            		   
		            		var newStartData=details[i]['startDate'] 
		            		var t_s = newStartData.getTime();//转化为时间戳毫秒数
		            		$scope.holiday['details'][i]['startDate']=newStartData.setTime(t_s + 1000 * 200)
	            		}
	            	}else if(details[i]['type']==2){
	            		var newEndData=details[i]['endDate']
	            		if(typeof newEndData=='object'){
	            			var t_s = newEndData.getTime();//转化为时间戳毫秒数
		            		$scope.holiday['details'][i]['endDate']=newEndData.setTime(t_s + 1000 * 200)
		            		var newStartData=details[i]['startDate']
		            		var t_s = newStartData.getTime();//转化为时间戳毫秒数
		            		$scope.holiday['details'][i]['startDate']=newStartData.setTime(t_s + 1000 * 200)
	            		}
	            	}
	            }
	            HolidayService.saveHoliday($scope.holiday).then(function (response) {
	                if (response.statusCode === '0000') {
	                	$rootScope.$broadcast("rootEventHoliday", 'holiday');
	                    PublicService.openDialog($scope.message);
	 					$scope.clear($scope.holiday,false);	  
	                } else { 
	                    $scope.message = response.msgCode;
	                    PublicService.openDialog($scope.message);
	                }
	            });
        	}
        };
		
        $scope.getHoliday = function(){
       	 if($scope.holiday.holidayNo==null){
       		PublicService.showDialogTimeout("holiday.formError.chooseHoliday");
       		return false;
       	 }else{
       		 return true;
       	 }
        };
        
      /* 
       *记录：验证控件对于日期的验证失效前的方法
       * function competeDate() {
    	    var len = $scope.dateObj.length;
    		for(var i=0;i<len;i++){
    			flag = $scope.checkStartTime(i);
    				if(len-1>i){
        				var startDate = $scope.dateObj[i].startDate;
            			var endDate = $scope.dateObj[i].endDate;
            			var nextStartDate =$scope.dateObj[i+1].startDate;
    	            	var nextEndDate = $scope.dateObj[i+1].endDate;
    		            if(startDate>=nextStartDate  && startDate<= nextEndDate || (startDate <= nextStartDate && endDate >= nextStartDate )){
    	            		flag = false;
    	            		break;
    		            }
        			}
        		}
    		}
        };*/
        function competeDate() {
        	var flag = true;
        	var len = $scope.dateObj.length;
        	for(var i=0;i<len;i++){
        		flag = $scope.checkStartTime(i);
        		if(flag){
        			if(len-1>i){
        				var startDate = $scope.dateObj[i].startDate;
        				var endDate = $scope.dateObj[i].endDate;
        				var nextStartDate =$scope.dateObj[i+1].startDate;
        				var nextEndDate = $scope.dateObj[i+1].endDate;
        				if(startDate>=nextStartDate  && startDate<= nextEndDate || (startDate <= nextStartDate && endDate >= nextStartDate )){
        					flag = false;
        					break;
        				}
        			}
        		}else{
        			break;
        		}	
        	}
        	return flag;
        };
        
		$scope.openCalendar = function (el,date) {
			var str = el+date;
			$scope.datePickerOpenStatus[str] = true;
		};
		
	/*	function checkYear(count,year){
			var selectYear = PublicService.formatDate($scope.dateObj[count].[year],"yyyy");
			if(PublicService.isEmptyObject($scope.holiday) || $scope.holiday.year!=selectYear){
				 PublicService.showDialogTimeout("holiday.formError.sameYear");
				 $scope.dateObj[count].[year] = undefined;
			}
		}*/
		
		$scope.checkStartTime = function(count){
		//记录：flag的返回是为了解决验证控件对于日期的验证的失效
			var flag=true;
		//	checkYear(count,"startDate");
			var startDate = $scope.dateObj[count].startDate;
			var endDate = $scope.dateObj[count].endDate;
			$scope.startDate=startDate
			$scope.endDate=endDate
            if(startDate >endDate && !PublicService.isEmptyObject(endDate)){
            	//$scope.dateObj[count].startDate = undefined;
                var msg = "global.timeMsg1";
                PublicService.openDialog(msg);
                flag=false;
                return;
            }
            if(count>0){ //逻辑：从第二列开始，依次跟上一次比较，开始时间处于(上)开始时间跟结束时间之间，或者开始时间小于(上)开始时间并结束时间大于(上)开始时间，即是冲突。不要采取逆向，有意向不到bug，（如果重新填写上一次的日期,那只能在保存的时候判断）
	            for(var i=1; i<=count;i++){
	            	var lastStartDate = $scope.dateObj[count-i].startDate;
	            	var lastEndDate = $scope.dateObj[count-i].endDate;
		            if(startDate>=lastStartDate  && startDate<= lastEndDate || (startDate <= lastStartDate && endDate >= lastStartDate )){
	            		//$scope.dateObj[count].startDate = undefined;
	            		PublicService.showDialogTimeout("holiday.formError.startDateConflict");
	            		flag = false;
	            		break;
		            	}
		            }
				}
            // 如果选择的年份和放假/补班的年份不一致，则提示
//            if($scope['holiday']['year']!=startDate.getFullYear()){  
//            	PublicService.showDialogTimeout("Please Choose The Same Year");
//            }  
            return flag; 
	        };
	        
	    $scope.checkEndTime = function(count){
	    //	checkYear(count,"endDate");
	    	var startDate = $scope.dateObj[count].startDate;
			var endDate = $scope.dateObj[count].endDate;
			$scope.startDate=startDate
			$scope.endDate=endDate
	        if(startDate > endDate && !PublicService.isEmptyObject(startDate)){
	        	// $scope.dateObj[count].endDate = undefined;
	        	 var msg = "global.timeMsg2";
	             PublicService.openDialog(msg);
	             return;
	        }
	        if(count>0){
	            for(var i=1; i<=count;i++){//逻辑：从第二列开始，依次跟上一次比较，结束时间处于(上)开始时间跟结束时间之间，或者开始时间跟结束时间包含(上)一次开始跟结束时间， 即是冲突。不要采取逆向，有意向不到bug
	            	var lastStartDate = $scope.dateObj[count-i].startDate;
	            	var lastEndDate = $scope.dateObj[count-i].endDate;
	            	if(endDate>= lastStartDate && endDate<= lastEndDate || (startDate <= lastStartDate && endDate >= lastEndDate )){
	            	//	$scope.dateObj[count].endDate = undefined;
			        	PublicService.showDialogTimeout("holiday.formError.endDateConflict");
			        }
	            }
	        }
	     // 如果选择的年份和放假/补班的年份不一致，则提示
            if($scope['holiday']['year']!=startDate.getFullYear()){  
            	PublicService.showDialogTimeout("Please Choose The Same Year");
            }
	    };
		
	    // 监听选择是否同一年
//	    $scope.$watch('holiday',function(n,o){说
//	    	// 判断开始时间（开始时间可能来源于页面加载的初始化数据，也有可能来源于页面加载后的选择日期）  
//	    	if($scope.startDate!=undefined){
//	    		var startDate=$scope.startDate.getFullYear()
//	    	}else if($scope.holiday.details[0]['startDate']!=undefined){
//	    		var startDate=$scope.holiday.details[0]['startDate'].getFullYear()
//	    	}
//	    	// 判断结束时间（开始时间可能来源于页面加载的初始化数据，也有可能来源于页面加载后的选择日期）
//	    	if($scope.endDate!=undefined){
//	    		var endDate=$scope.endDate.getFullYear()
//	    	}else if($scope.holiday.details[0]['endDate']!=undefined){
//	    		var endDate=$scope.holiday.details[0]['endDate'].getFullYear()
//	    	}
//	    	
//	    	if(n.year!= startDate || endDate!=n.year){
//	    		PublicService.showDialogTimeout("Please Choose The Same Year");
//	    	}
//	    },true)
	   $scope.clear = function(params,flag) {
	        $uibModalInstance.close();
//	        PublicService.getActiveIndex('#tabUl li','active')
	        $state.go('app.holiday',params,{reload:false});
	        
	    };
	    
	    
	   
    }
})();
