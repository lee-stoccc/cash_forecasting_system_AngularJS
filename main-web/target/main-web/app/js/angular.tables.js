/**
 * Created by Administrator on 2017/10/11/0011.  348 384  508
 */
(function ( angular ) {
    'use strict';
    angular.module('angularTables', [] ).directive( 'tablesModel', ['$compile','utilService','globalConstant','$stateParams','paginationConstants','PublicService',
        function( $compile,utilService ,globalConstant,$stateParams,paginationConstants,PublicService) {
        return {
            restrict: 'A',
            link: function ( scope, element, attrs ) {
            	
                scope.checked = [];
                scope.checkedDelFlags = [];
                scope.predicate = 'id';
                scope.reverse = 'asc';
                scope.tableList = [];
                scope.goPage = 1;
                scope.page = $stateParams.page;
                scope.pageGo = pageGo;
                scope.refreshTableList = refreshTableList;
                scope.getCheckValues = getCheckValues;
                scope.transition = transition;
             /*   scope.mouseenter = mouseenter;
                scope.mouseleave = mouseleave;*/
                scope.mouseMsg = '';
                scope.itemsPerPage = paginationConstants.itemsPerPage;
                scope.select_all = false;
                var configModel = scope[attrs.tablesDataModel];
                if (configModel === null){
                    alert("配置有误");
                    return;
                }
                scope.url = configModel['url'];
                scope.formParams = configModel['formParams'];
                getTablesList();
                var titles = configModel['tableTitles'];
                var tableWidth = configModel['tableWidth'];
                var template ='<table class="table-margin '+ (tableWidth !== undefined ? tableWidth : "table-default-width")  + '">' +
                    '<thead><tr class="table-title"">';
                if (configModel['showCheckBox']){
                    template +='<th class="table-checkbox"><input id="flag" type="checkbox" ng-model="select_all" ng-click="selectAll()"></th>';
                }
                for(var index = 0;index < titles.length;index++){
                	var widthClass = titles[index]['width'];
                	if(widthClass === undefined){
                		widthClass = "";
                	}else{
                		if(!configModel['showCheckBox']){
                			widthClass = widthClass + "-nocheck";
                		}
                	}
                    template += '<th class="td-left '+ widthClass  + '"><span data-translate="'+ titles[index]['title'] +'"></span></th>';
                }
                template += '</tr></thead></table>';
                template +='<div class="table-content"><table class="table-margin '+ (tableWidth !== undefined ? tableWidth : "table-default-width")  + '">';
                template += '<tbody><tr class="'+ "{{($index%2)==0?'tr-white-background':'tr-gray-background'}}" +'" ng-repeat="item in tableList track by item.id">';
                if (configModel['showCheckBox']){
                    template+= '<td class="td-left table-checkbox"><input ng-model="item.checked" type="checkbox" ng-click="selectOne()"></td>';
                }
                for(var index = 0;index < titles.length;index++){
                    var type = titles[index]['type'];
                    var classes = titles[index]['fieldClass'];
                    var format = titles[index]['format'];
                    var content = "";
                    if (type === 'date'){
                        content  = "{{item." + titles[index]['filed'] + "| date:'yyyy-MM-dd'" + "}}";
                    }else if (type === 'dateTime'){
                    	if(format != undefined){
                    		content += "{{item." + titles[index]['filed'] + "| date:'"+format+"'" + "}}";
                    	}else{
                    		content += "{{item." + titles[index]['filed'] + "| date:'yyyy-MM-dd HH:mm:ss'" + "}}";
                    	}
                    }else if (type === 'html'){
                        content  = titles[index]['html'];
                    }else if (type === 'amount'){
                    	content  = "<span>" + titles[index]['sym'] + "</span>" + "{{item." + titles[index]['filed'] + "}}";
                    }else if(type === 'text') {
                    	  content  = '<span data-toggle="popover" title="{{item.'+ titles[index]['filed']+'}}">{{item.' + titles[index]['filed'] + '}}</span>';
                    }else if(type === 'text-status') {
                    	var actions = titles[index]['actions'];
                    	content += '<span  data-translate="{{';
                    	var statusList = actions[0]['statusList'];
                    	for(var position = 0;position < statusList.length;position++){
                    		var item = "item." + titles[index]['filed'] +" =='"+ statusList[position]['status'] +"' ? '" + statusList[position]['showName'] + "':";
                    		content += item;
                    		if(position === statusList.length - 1){
                    			content += "''";
                    		}
                   
                    	}
                        content  += '}}"></span>';
                    }else if (type === 'btn'){
                        var actions = titles[index]['actions'];
                        content +='<div class="btn-group">';
                        for (var position = 0;position < actions.length;position++){
                        	var showBtn = PublicService.showComponentView(actions[position]['formEnglishName'],actions[position]['englishName']);
                            var itemContent = '<button type="submit" ng-click="'+ actions[position]['actionName'] +'"' +
                                    'ng-show="'+ showBtn +'"' +
                                    // 'ng-disabled="item.'+ titles[index]['filed'] + ' == 1"'
                                    (actions[position]['disabled'] !== undefined ? 'ng-disabled="'+ actions[position]['disabled'] + '"' : "") 
                                    + '>' 
                                    + '<span  data-translate="'+ actions[position]['name'] +'"></span>' +
                                '</button>';
                            content += itemContent;
                        }
                        content +='</div>';
                    }else if(type === 'text-btn'){
                        var actions = titles[index]['actions'];
                        content +='<div class="btn-group flex-btn-group-container">';
                        for (var position = 0;position < actions.length;position++){
                        	   var btnClass =  actions[position]['btnClass'] !== undefined ? actions[position]['btnClass'] : "";
                               var itemContent = '<span id="table-title-span" ng-click="'+ actions[position]['actionName'] +'" class="table-title-span '+btnClass+' ">{{item.'+ titles[index]['filed'] +'}}</span>';
                            content += itemContent;
                        }
                        content +='</div>';
                    }else if (type === 'btn-status'){
                        var actions = titles[index]['actions'];
                    	var statusList = actions[0]['statusList'];
                    	var showContent = '';
                    	for(var position = 0;position < statusList.length;position++){
                    		var item = "item." + titles[index]['filed'] +" =='"+ statusList[position]['status'] +"' ? '" + statusList[position]['showName'] + "':";
                    		showContent += item;
                    		if(position === statusList.length - 1){
                    			showContent += "''";
                    		}
                   
                    	}
                        content ='<button ng-click="'+ actions[0]['actionName'] +'" >' +
                                '<span data-translate="{{'+ showContent +'}}"></span>' +
                            '</button>';
                    }
                    var widthClass = titles[index]['width'];
                	if(widthClass === undefined){
                		widthClass = "";
                	}else{
                		if(!configModel['showCheckBox']){
                			widthClass = widthClass + "-nocheck";
                		}
                	}
                    template += '<td class="td-left '+ widthClass + ' '+ (classes !== undefined ? classes : "")  + '">' + content + '</td>';
                }
                template += '</tr></tbody></table></div>';
                template +='<div id="tableShowView" class="table-showview">{{mouseMsg}}</div>';
                template +='<div class="ui-grid-pager-panel ng-scope">' +
                    '<div class="ui-grid-pager-container">' +
                    '<div class="ui-grid-pager-control">' +
                    '<uib-pagination class="pagination-sm table-page" total-items="tablesItems" ng-model="page" ng-change="transition()"></uib-pagination>' +
                    '<div class="ui-grid-pager-control table-go">' +
                    '<input type="text" ng-model="goPage" style="height: 29px" class="form-control ng-pristine ng-valid ng-touched">' +
                    '<button  class="btn btn-info btn-sm" style="height: 29px" ng-click="pageGo(goPage)">GO</button>' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui-grid-pager-row-count-picker ng-scope">' +
                    '<jhi-item-count page="page" total="tablesItems" items-per-page="itemsPerPage"></jhi-item-count>' +
                    '</div>' +
                    '</div></div>';
                element.html('').append( $compile( template )( scope ) );

                scope.$watch("goPage",function () {
                    if (scope.goPage.length > 0){
                        scope.goPage = scope.goPage.replace(/\D/g,"");
                    }
                });

                function sort () {
                    var result = [scope.predicate + ',' + (scope.reverse ? 'asc' : 'desc')];
                    if (scope.predicate !== 'id') {
                        result.push('id');
                    }
                    return result;
                }

                function transition () {
                    $stateParams.page = scope.page;
                    getTablesList();
                }

                function getTablesList() {
                    var param = {
                    	status:"false",
                        page_number: scope.page,
                        page_size: scope.itemsPerPage,
                        formParams:scope.formParams,
                        sort: sort()
                    };
                    utilService.requestPost(globalConstant.devplatform_web_apiPath + scope.url, param).then(function (response) {
                        if (response.statusCode === '0000'){
                            scope.tableList = response.data['list'];
                            scope.tablesItems = response.data['total_count'];
                            scope.select_all = false;
                        	scope.selectAll();
                        }
                    });
                }

                function pageGo(goPage) {
                	if(goPage==0){
                		goPage=1;
                		scope.goPage = 1 ;
                	} 
                	if (goPage > Math.ceil(scope.tablesItems/10)){
                    	scope.message = "maxrange";
                    	PublicService.showMessageDialog(scope);
                        return;
                    }
                    scope.page = goPage;
                    transition();
                }

                function refreshTableList(formParams) {
                    if (configModel === null || formParams === null){
                        return;
                    }
                    scope.formParams = formParams;
                    getTablesList();
                }

                scope.selectAll = function() {
                    if(scope.select_all) {
                        scope.checked = [];
                        scope.checkedDelFlags = [];
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = true;
                            scope.checked.push(i.id);
                            scope.checkedDelFlags.push(i.delFlag);
                        });
                    }else {
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = false;
                            scope.checked = [];
                            scope.checkedDelFlags = [];
                        });
                    }
                    if (PublicService.isEmptyObject(configModel) || PublicService.isEmptyObject(configModel['checkAllAction'])){
                        return;
                    }
                    scope[configModel['checkAllAction']]();
                };

                scope.selectOne = function() {
                    angular.forEach(scope.tableList , function (i) {
                        var index = scope.checked.indexOf(i.id);
                        if(i.checked && index === -1) {
                            scope.checked.push(i.id);
                            scope.checkedDelFlags.push(i.delFlag);
                        } else if (!i.checked && index !== -1){
                            scope.checked.splice(index, 1);
                            scope.checkedDelFlags.splice(index, 1);
                        }
                    });
                    scope.select_all = scope.tableList.length === scope.checked.length;
                    if (configModel === null || configModel['checkOneAction'] === null){
                        return;
                    }
                    scope[configModel['checkOneAction']];
                };

                function getCheckValues() {
                    if (configModel === null){
                        return;
                    }
                    return {check:scope.checked,checkedDelFlags:scope.checkedDelFlags};
                }
                
                function getCheckValues(param) {
                    if (configModel === null){
                        return;
                    }
                    scope.checkedParamFlags = [];
                    angular.forEach(scope.tableList, function (i) {
//                        i.checked = true;
//                        scope.checked.push(i.id);
                        var index = scope.checked.indexOf(i.id);
                        if(i.checked && index !== -1) {
                            if((i[param]&&i[param]!=="0") || i[param] === "1"){
                            	scope.checkedParamFlags.push('1');
                            }else{
                            	 scope.checkedParamFlags.push('0');
                            }
                        }
                       
                    });
                    return {check:scope.checked,checkedParamFlags:scope.checkedParamFlags};
                }
            }
        };
    }])
    
    
    .directive( 'tablesModel2', ['$timeout','$compile','utilService','globalConstant','$stateParams','paginationConstants','PublicService',
        function( $timeout,$compile,utilService ,globalConstant,$stateParams,paginationConstants,PublicService) {
        return {
            restrict: 'A',
            link: function ( scope, element, attrs ) {
            	
                scope.checked = [];
                scope.checkObject = [];
                scope.checkedDelFlags = [];
                scope.predicate = 'id';
                scope.reverse = 'asc';
                scope.goPage = 1;
                scope.page = $stateParams.page;
                scope.pageGo = pageGo;
                scope.refreshTableList = refreshTableList;
                scope.getCheckValues = getCheckValues;
                scope.getCheckObjects = getCheckObjects;
                scope.transition = transition;
                scope.changeItemPerPage = changeItemPerPage;
                scope.mouseMsg = '';
                scope.select_all = false;
                var tableId = attrs.tableId ? attrs.tableId : 'tb';
                var configModel = scope[attrs.tablesDataModel];
                if (configModel === null){
                    alert("配置有误");
                    return;
                }
                scope.tableList = [];
                scope.url = configModel['url'];
                scope.hideGo = false;
                if (configModel['hideGo'] == true){
                	scope.hideGo = configModel['hideGo'];
                }
                scope.pages = 0;
                paginationConstants.itemsPerPage = 10;
                scope.itemsPerPage = 10;
                if(configModel['itemsPerPage']){
                	scope.itemsPerPage = configModel['itemsPerPage'];
                }
                scope.selectValue = scope.itemsPerPage + "";
                scope.formParams = configModel['formParams'];
                getTablesList();
                var titles = configModel['tableTitles'];
                var tableWidth = element.width();
                if(configModel['tableWidth']){
                	tableWidth = configModel['tableWidth'];
                }
                var template = '<div class="tables-view-content" style="height:100%">';
                template += '<div class="tables-view-header">';
                template +='<table id="'+ tableId +'1" class="table-margin" style="table-layout: fixed;width:100%">';
                template += '<thead><tr class="table-title">';
                if (configModel['showCheckBox']){
                	if (configModel['isColspan']){
                		var rowSpan = configModel['rowSpan'];
                		template +='<th class="td-left" rowspan="'+ rowSpan +'" style="width:3%"><input id="flag" type="checkbox" ng-model="select_all" ng-click="selectAll()"></th>';
                	}else{
                		template +='<th class="td-left" style="width:3%"><input id="flag" type="checkbox" ng-model="select_all" ng-click="selectAll()"></th>';
                	}
                }
                var widthClass = "6";
                var count = 0;
                var decolStr = "";
                for(var index = 0;index < titles.length;index++){
                	count++;
                	var inWidthClass = titles[index]['width'];
                	if(inWidthClass !== undefined){
                		widthClass = inWidthClass;
                	}else{
                		if(!configModel['showCheckBox']){
                			widthClass = "10";
                		}
                	}
                	//动态列
    				var dynamicTitles = titles[index]['dynamicTitles'];
    				var chridTitle = titles[index]['chridTitle'];
    				if(dynamicTitles !== undefined){
    					//是否跨列
    					if (configModel['isColspan']){
    						var total = 0;
	    					angular.forEach(dynamicTitles,function(data){
	    						total += data['itemList'].length;
	    					});
    						template += '<th class="td-center" colspan="'+ total +'"><span data-translate="'+ titles[index]['title'] +'"></span></th>';
    					}else{
    						angular.forEach(dynamicTitles,function(data){
        						template += '<th class="td-left "><span>'+ data[chridTitle] +'</span></th>';
        					});
    						}
					}else{
						if (configModel['isColspan']){
							var rowSpan = configModel['rowSpan'];
							var width =configModel['width'];
    						template += '<th class="td-left" rowspan="'+ rowSpan +'" style="width:'+widthClass+'%" ><span title="'+ titles[index]['tipTitle'] +'" data-translate="'+ titles[index]['title'] +'"></span></th>';
    					}else{
    						template += '<th class="td-left" style="width:'+widthClass+'%" ><span title="'+ titles[index]['tipTitle'] +'" data-translate="'+ titles[index]['title'] +'"></span></th>';
    					}
					}
    				//如果动态列在最后，最后执行
    				if(count==titles.length){
    					  template += '</tr>';
    				  }
    				if(dynamicTitles !== undefined){
    					//是否跨列
    					if (configModel['isColspan']){
    						decolStr += '<tr class="table-title">';
	    					angular.forEach(dynamicTitles,function(data){
	    						decolStr += '<th class="td-center" colspan="'+ data['itemList'].length +'"><span>'+ data['title'] +'</span></th>';
	    					});
	    					decolStr += '</tr>';
	    					decolStr += '<tr class="table-title">';
	    					angular.forEach(dynamicTitles,function(dynamic){
	    						angular.forEach(dynamic['itemList'],function(item){
	    							decolStr += '<th class="td-center" ><span">'+ item.dictDesc +'</span></th>';
	    						});
	    					});
							decolStr += '</tr>';
    	  				}
    				}
    				//最后执行
    				if(count==titles.length){
    					  template += decolStr;
    				  }
                }
                template += '</thead></table>';
                
                template += '</div>';
                
                template +='<div class="table-content2"><table id="'+ tableId +'2" class="table-margin" style="table-layout: fixed;width:100%;border-bottom:1px solid #ccc">';
                template += '<tbody><tr class="'+ "{{($index%2)==0?'tr-white-background':'tr-gray-background'}}" +'" ng-repeat="item in tableList">';
                if (configModel['showCheckBox']){
                    template+= '<td class="td-left" style="width:3%"><input ng-model="item.checked" type="checkbox" ng-click="selectOne()"></td>';
                }
                for(var index = 0;index < titles.length;index++){
                	var inWidthClass = titles[index]['width'];
                    var type = titles[index]['type'];
                    var format = titles[index]['format'];
                    var chridFiled = titles[index]['chridFiled'];
                    var classes = titles[index]['fieldClass'];
                    var content = '<div style="text-align:left;overflow: hidden;text-overflow: ellipsis;display:flex">';
                    var dynamicTitles = titles[index]['dynamicTitles'];
                    if(titles[index]['width']==undefined||titles[index]['width']==null){
                    	inWidthClass=6
                    }
                    //判断是否是动态列
    				if(dynamicTitles != undefined){
    					template += '<td class="td-center"  ng-repeat="d in item.' + titles[index]['filed'] +'">';
    					template += '<span data-toggle="popover" title="{{d.'+chridFiled+'}}">{{d.'+chridFiled+'}}</span></td>';
    				}
    				else{
	                    if (type === 'date'){
	                        content += '<span data-toggle="popover" title="{{item.' + titles[index]['filed'] + '}}">{{item.' + titles[index]['filed'] + '| date:"yyyy-MM-dd"' + '}}</span>';
	                    }else if (type == 'holiday_date'){
	                    	var details = titles[index]['filed'];
	                    	content += '<div ng-repeat="detail in item. '+ details +'"><span ng-if="detail.type =='+ "1" +' " data-toggle="popover" title="{{detail.startDate}}">'+ 
	                    	'{{detail.startDate | date:"yyyy-MM-dd"' + '}} &mdash; {{detail.endDate | date:"yyyy-MM-dd"}}<span style="margin-right:15px">&nbsp;&nbsp;&nbsp;<span></span></div>';	
	                    }else if (type == 'supplement_date'){
	                    	content += '<div ng-repeat="detail in item. '+ details +'"><span ng-if="detail.type =='+ "2" +' " data-toggle="popover" title="{{detail.startDate}}">'+ 
	                    	'{{detail.startDate | date:"yyyy-MM-dd"' + '}} &mdash;  {{detail.endDate | date:"yyyy-MM-dd"}}<span style="margin-right:15px">&nbsp;&nbsp;&nbsp;<span></span></div>';	                   	
	                    }else if (type === 'dateTime'){
	                    	if(format != undefined){
	                    		content += '<span data-toggle="popover" title="{{item.' + titles[index]['filed'] + '}}">{{item.' + titles[index]['filed'] + '| date:"' + format + '"' + '}}</span>';
	                    	}else{
	                    		content += '<span data-toggle="popover" title="{{item.' + titles[index]['filed'] + '}}">{{item.' + titles[index]['filed'] + '| date:"yyyy-MM-dd HH:mm:ss"' + '}}</span>';
	                    	}
	                    }else if (type === 'html'){
	                        content += titles[index]['html'];
	                    }else if (type === 'amount'){
	                    	content += "<span>" + titles[index]['sym'] + "</span>" + "{{item." + titles[index]['filed'] + "}}";
	                    }else if(type === 'text') {
	                       // content  = '<span ng-mouseenter="mouseenter($event,item.'+ titles[index]['filed'] +')" ng-mouseleave="mouseleave($event)">{{item.' + titles[index]['filed'] + '}}</span>';
	                    	  content += '<span data-toggle="popover" title="{{item.'+ titles[index]['filed']+'}}">{{item.' + titles[index]['filed'] + '}}</span>';
	                    }else if(type === 'text-status') {
	                    	var actions = titles[index]['actions'];
	                    	content += '<span  data-translate="{{';
	                    	var statusList = actions[0]['statusList'];
	                    	for(var position = 0;position < statusList.length;position++){
	                    		var item = "item." + titles[index]['filed'] +" =='"+ statusList[position]['status'] +"' ? '" + statusList[position]['showName'] + "':";
	                    		content += item;
	                    		if(position === statusList.length - 1){
	                    			content += "''";
	                    		}	                   
	                    	}
	                        content  += '}}"></span>';  
	                    }else if (type === 'btn'){
	                        var actions = titles[index]['actions'];
	                        content +='<div class="btn-group">';
	                        for (var position = 0;position < actions.length;position++){
//	                        	var showBtn = PublicService.showComponentView(actions[position]['formEnglishName'],actions[position]['englishName']);
	                            var itemContent = '<button type="submit" ng-click="'+ actions[position]['actionName'] +'"' +
	                                    'ng-show="'+ true +'"' +
	                                    // 'ng-disabled="item.'+ titles[index]['filed'] + ' == 1"'
	                                    (actions[position]['disabled'] !== undefined ? 'ng-disabled="'+ actions[position]['disabled'] + '"' : "") 
	                                    + '>' 
	                                    + '<span  data-translate="'+ actions[position]['name'] +'"></span>' +
	                                '</button>';
	                            content += itemContent;
	                        }
	                        content +='</div>';
	                    }else if(type === 'text-btn'){
	                        var actions = titles[index]['actions'];
	                        content +='<div class="btn-group flex-btn-group-container">';
	                        for (var position = 0;position < actions.length;position++){
	                        	   var btnClass =  actions[position]['btnClass'] !== undefined ? actions[position]['btnClass'] : "";
	                               var itemContent = '<span id="table-title-span" ng-click="'+ actions[position]['actionName'] +'" class="table-title-span '+btnClass+' ">{{item.'+ titles[index]['filed'] +'}}</span>';
	                            content += itemContent;
	                        }
	                        content +='</div>';
	                    }else if (type === 'btn-status'){
	                        var actions = titles[index]['actions'];
	                    	var statusList = actions[0]['statusList'];
	                    	var showContent = '';
	                    	for(var position = 0;position < statusList.length;position++){
	                    		var item = "item." + titles[index]['filed'] +" =='"+ statusList[position]['status'] +"' ? '" + statusList[position]['showName'] + "':";
	                    		showContent += item;
	                    		if(position === statusList.length - 1){
	                    			showContent += "''";
	                    		}
	                   
	                    	}
	                        content ='<button ng-click="'+ actions[0]['actionName'] +'" >' +
	                                '<span data-translate="{{'+ showContent +'}}"></span>' +
	                            '</button>';
	                    }
	                    content +='</div>';
	                    template += '<td style="width:'+inWidthClass+'%" >' + content + '</td>';
    				}
                }
                template += '</tr></tbody></table></div>';
                template += '</div>';
                template +='<div id="tableShowView" class="table-showview">{{mouseMsg}}</div>';
                template +='<div class="ui-grid-pager-panel ng-scope">' +
                    '<div class="ui-grid-pager-container">' +
                    '<div class="ui-grid-pager-control">' +
                    '<uib-pagination class="pagination-sm table-page" items-per-page="itemsPerPage" total-items="tablesItems" ng-model="page" ng-change="transition()"></uib-pagination>' +
                    '<div ng-if="!hideGo" class="ui-grid-pager-control table-go">' +
                    '<input type="text" ng-model="goPage" style="height: 27px" class="ng-pristine ng-valid ng-touched">' +
                    '<button  class="btn btn-info btn-sm" style="height: 27px" ng-click="pageGo(goPage)">GO</button>' +
				  	'<select class="table-select" ng-model="selectValue" ng-change="changeItemPerPage(selectValue)">' +
			  		'<option value="10">10</option>' +
			  		'<option value="15">15</option>' +
			  		'<option value="20">20</option>' +
			  		'<option value="30">30</option>' +
			  		'<option value="50">50</option>' +
			  		'</select>' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui-grid-pager-row-count-picker ng-scope">' +
                    '<jhi-item-count page="page" total="tablesItems" items-per-page="itemsPerPage"></jhi-item-count>' +
                    '</div>' +
                    '</div></div>';
                template +='<div class="footer bottom-footer" style="background-color:#f2f2f2;left:0px;position:relative">' +
                			'<p class="text-footer" style="position:relative">@2018 suitong</p>'+
                			'</div>'
                element.html('').append( $compile( template )( scope ) );
                //alert(template);
                scope.$watch("goPage",function () {
                    if (scope.goPage.length > 0){
                        scope.goPage = scope.goPage.replace(/\D/g,"");
                    }
                });
                
                function sort () {
                    var result = [scope.predicate + ',' + (scope.reverse ? 'asc' : 'desc')];
                    if (scope.predicate !== 'id') {
                        result.push('id');
                    }
                    return result;
                }

                function transition () {
                    $stateParams.page = scope.page;
                    getTablesList(true);
                }
                
                function getTablesList(flag) {
                	if(!flag){
                		scope.goPage = scope.page = 1;
                	}
                    var param = {
                    	status:"false",
                        page_number: scope.page,
                        page_size: scope.itemsPerPage,
                        //page_size: 20,
                        formParams:scope.formParams,
                        sort: sort()
                    };
                    utilService.requestPost(globalConstant.devplatform_web_apiPath + scope.url, param).then(function (response) {
                        if (response.statusCode === '0000'){
                            scope.tableList = response.data['list'];
                            scope.tablesItems = response.data['total_count'];
                            scope.select_all = false;
                            scope.pages = parseInt(scope.tablesItems / scope.itemsPerPage) + 1;
                        	scope.selectAll();
                        }
                    });
                }

                function pageGo(goPage) {
                	if(goPage==0){
                		goPage=1;
                		scope.goPage = 1 ;
                	} 
                    if (goPage > Math.ceil(scope.tablesItems/10)){
                    	scope.message = "maxrange";
                    	PublicService.showMessageDialog(scope);
                        return;
                    }
                    scope.page = goPage;
                    transition();
                }
                
                function changeItemPerPage(value){
                	scope.page = 1;
                	scope.itemsPerPage = parseInt(value);
                	paginationConstants.itemsPerPage = parseInt(value);
                	getTablesList(true);
                }

                function refreshTableList(formParams) {
                    if (configModel === null || formParams === null){
                        return;
                    }
                    scope.formParams = formParams;
                    getTablesList();
                }

                scope.selectAll = function() {
                    if(scope.select_all) {
                        scope.checked = [];
                        scope.checkedDelFlags = [];
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = true;
                            scope.checked.push(i.id);
                            scope.checkedDelFlags.push(i.delFlag);
                        });
                    }else {
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = false;
                            scope.checked = [];
                            scope.checkedDelFlags = [];
                        });
                    }
                    if (PublicService.isEmptyObject(configModel) || PublicService.isEmptyObject(configModel['checkAllAction'])){
                        return;
                    }
                    scope[configModel['checkAllAction']](scope.tableList);
                };

                scope.selectOne = function() {
                	var item;
                    angular.forEach(scope.tableList , function (i) {
//                    	var check=scope.checkObject
//                    	var index = scope.checked.indexOf(i);
                        var delIndex = scope.checked.indexOf(i.id);
                        item = scope.tableList[i];
                        if(i.checked ) {
                        	var num=0
                        	for(var j=0;j<=scope.checked.length;j++){
                        		if(i.id !== scope.checked[j-1]){
                        			if(num==scope.checked.length){
                        				scope.checked.push(i.id);
                        				break
                        			}
                        			num+=1
                        			continue
                        		}
                        	}
                        }else if (!i.checked){
                        	for(var q=0;q<scope.checked.length;q++){
                        		if(i.id==scope.checked[q]){
                        			scope.checked.splice(q,1)
                        		}
                        	}
//                          scope.checked.splice(delIndex, 1);
//                          scope.checkedDelFlags.splice(delIndex, 1);
                      }
                    });
                    scope.select_all = scope.tableList.length === scope.checked.length;
                    if (configModel === null || configModel['checkOneAction'] === null){
                        return;
                    }
                    scope[configModel['checkOneAction']](scope.tableList);
                };

                function getCheckValues() {
                    if (configModel === null){
                        return;
                    }
                    return {check:scope.checked,checkedDelFlags:scope.checkedDelFlags};
                }
                
                function getCheckValues(param) {
                    if (configModel === null){
                        return;
                    }
                    scope.checkedParamFlags = [];
                    angular.forEach(scope.tableList, function (i) {
                        var index = scope.checked.indexOf(i.id);
                        if(i.checked && index !== -1) {
                            if((i[param]&&i[param]!=="0") || i[param] === "1"){
                            	scope.checkedParamFlags.push('1');
                            }else{
                            	 scope.checkedParamFlags.push('0');
                            }
                        }
                       
                    });
                    return {check:scope.checked,checkedParamFlags:scope.checkedParamFlags};
                }
                
                function getCheckObjects(){
                	if (configModel === null){
                        return;
                    }
                	scope.checkedParamObjects = [];
                	angular.forEach(scope.tableList, function (i){
                		var index = scope.checked.indexOf(i.id);
                		if(i.checked && index !== -1) {
                			scope.checkedParamObjects.push(i);
                		}
                	});
                	return scope.checkedParamObjects;
                }
            }
        };
    }])
        
    .directive( 'tablesModel3', ['$timeout','$compile','utilService','globalConstant','$stateParams','paginationConstants','PublicService',
        function( $timeout,$compile,utilService ,globalConstant,$stateParams,paginationConstants,PublicService) {
        return {
            restrict: 'A',
            link: function ( scope, element, attrs ) {
            	
                scope.predicate = 'id';
                scope.reverse = 'asc';
                scope.tableList = [];
                scope.goPage = 1;
                scope.page = $stateParams.page;
                scope.pageGo = pageGo;
                scope.refreshTableList = refreshTableList;
                scope.getCheckValues = getCheckValues;
                scope.getCheckObjects = getCheckObjects;
                scope.transition = transition;
                scope.changeItemPerPage = changeItemPerPage;
                scope.mouseMsg = '';
                scope.select_all = false;
                var tableId = attrs.tableId ? attrs.tableId : 'tb';
                var configModel = scope[attrs.tablesDataModel];
                if (configModel === null){
                    alert("配置有误");
                    return;
                }
                scope.url = configModel['url'];
                scope.pages = 0;
                paginationConstants.itemsPerPage = 10;
                scope.itemsPerPage = 10;
                scope.selectValue = scope.itemsPerPage + "";
                scope.formParams = configModel['formParams'];
                getTablesList();
                scope.titles = [{id:'1'},
                              {id:'2'},
                              {id:'3'},
                              {id:'4'},
                              {id:'5'},
                              {id:'6'},
                              {id:'7'},
                              {id:'8'},
                              {id:'9'},
                              {id:'10'}];
                var template = '<div class="tables-view-content overScrollx">';
                scope.th_width = "th_width1";
                if(scope.titles.length > 10){
                	scope.th_width = "th-width1";
                }else{
                	scope.th_width = "th-width2";
                }
                template += '<div class="tables-view-header">';
                template +='<table id="'+ tableId +'1" class="table-margin" style="table-layout: fixed;width:100%">';
                template += '<thead><tr class="table-title">';
                template += '<th class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'"><span data-translate="global.termName"></span></th>';
                template += '<th class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'" ng-repeat="title in titles  track by $index"><span data-translate="{{title.id}}"></span></th>';
//                for(var index = 0;index < titles.length;index++){
//                	template += '<th ng-repeat="title in titles  track by $index" class="td-left"><span data-translate="'+ titles[index]['id'] +'" style="width:10%;"></span></th>';
//                }
                template += '<th class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'"><span data-translate="global.averageValue"></span></th>';
                template += '</tr>';
                template += '</thead></table>';
                template += '</div>';
                
                template +='<div class="table-content2"><table id="'+ tableId +'2" class="table-margin" style="table-layout: fixed;width:100%">';
                template += '<tbody><tr class="'+ "{{($index%2)==0?'tr-white-background':'tr-gray-background'}}" +'">';
                template += '<td class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'"></span><span data-translate="设备号"></td>';
                template += '<td class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'" ng-repeat="title in titles  track by $index">';
                template += '<div ><div style="width:50%; float:left" data-translate="{{title.id}}"></div><div style="width:50%; float:left" data-translate="{{title.id}}"></div></div></td>';
                template += '<td class="td-left '+ "{{titles.length > 10?'th-width1':'th-width2'}}" +'" ><div"></div></td>';
                template += '</tr></tbody></table></div>';
                template += '</div>';
//                template +='<div id="tableShowView" class="table-showview">{{mouseMsg}}</div>';
                template +='<div class="ui-grid-pager-panel ng-scope">' +
                    '<div class="ui-grid-pager-container">' +
                    '<div class="ui-grid-pager-control">' +
                    '<uib-pagination class="pagination-sm table-page" items-per-page="itemsPerPage" total-items="tablesItems" ng-model="page" ng-change="transition()"></uib-pagination>' +
                    '<div class="ui-grid-pager-control table-go">' +
                    '<input type="text" ng-model="goPage" style="height: 27px" class="ng-pristine ng-valid ng-touched">' +
                    '<button  class="btn btn-info btn-sm" style="height: 27px" ng-click="pageGo(goPage)">GO</button>' +
				  	'<select class="table-select" ng-model="selectValue" ng-change="changeItemPerPage(selectValue)">' +
			  		'<option value="10">10</option>' +
			  		'<option value="15">15</option>' +
			  		'<option value="20">20</option>' +
			  		'<option value="30">30</option>' +
			  		'<option value="50">50</option>' +
			  		'</select>' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui-grid-pager-row-count-picker ng-scope">' +
                    '<jhi-item-count page="page" total="tablesItems" items-per-page="itemsPerPage"></jhi-item-count>' +
                    '</div>' +
                    '</div></div>';
                element.html('').append( $compile( template )( scope ) );
                //alert(template);
                scope.$watch("goPage",function () {
                    if (scope.goPage.length > 0){
                        scope.goPage = scope.goPage.replace(/\D/g,"");
                    }
                });               

                function sort () {
                    var result = [scope.predicate + ',' + (scope.reverse ? 'asc' : 'desc')];
                    if (scope.predicate !== 'id') {
                        result.push('id');
                    }
                    return result;
                }

                function transition () {
                    $stateParams.page = scope.page;
                    getTablesList(true);
                }
                
                function getTablesList(flag) {
                	if(!flag){
                		scope.goPage = scope.page = 1;
                	}
                    var param = {
                    	status:"false",
                        page_number: scope.page,
                        page_size: scope.itemsPerPage,
                        //page_size: 20,
                        formParams:scope.formParams,
                        sort: sort()
                    };
                    utilService.requestPost(globalConstant.devplatform_web_apiPath + scope.url, param).then(function (response) {
                        if (response.statusCode === '0000'){
                            scope.tableList = response.data['list'];
                            scope.tablesItems = response.data['total_count'];
                            scope.select_all = false;
                            scope.pages = parseInt(scope.tablesItems / scope.itemsPerPage) + 1;
                        	scope.selectAll();
                        }
                    });
                }

                function pageGo(goPage) {
                	if(goPage==0){
                		goPage=1;
                		scope.goPage = 1 ;
                	} 
                    if (goPage > Math.ceil(scope.tablesItems/10)){
                    	scope.message = "maxrange";
                    	PublicService.showMessageDialog(scope);
                        return;
                    }
                    scope.page = goPage;
                    transition();
                }
                
                function changeItemPerPage(value){
                	scope.page = 1;
                	scope.itemsPerPage = parseInt(value);
                	paginationConstants.itemsPerPage = parseInt(value);
                	getTablesList(true);
                }

                function refreshTableList(formParams) {
                    if (configModel === null || formParams === null){
                        return;
                    }
                    scope.formParams = formParams;
                    getTablesList();
                }

                scope.selectAll = function() {
                    if(scope.select_all) {
                        scope.checked = [];
                        scope.checkedDelFlags = [];
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = true;
                            scope.checked.push(i.id);
                            scope.checkedDelFlags.push(i.delFlag);
                        });
                    }else {
                        angular.forEach(scope.tableList, function (i) {
                            i.checked = false;
                            scope.checked = [];
                            scope.checkedDelFlags = [];
                        });
                    }
                    if (PublicService.isEmptyObject(configModel) || PublicService.isEmptyObject(configModel['checkAllAction'])){
                        return;
                    }
                    scope[configModel['checkAllAction']](scope.tableList);
                };

                scope.selectOne = function() {
                	var item;
                    angular.forEach(scope.tableList , function (i) {
                    	var index = scope.checkObject.indexOf(i);
                        var delIndex = scope.checked.indexOf(i.id);
                        item = scope.tableList[i];
                        if(i.checked && index === -1) {
                            scope.checked.push(i.id);
                            scope.checkedDelFlags.push(i.delFlag);
                        } else if (!i.checked && index !== -1){
                            scope.checked.splice(delIndex, 1);
                            scope.checkedDelFlags.splice(delIndex, 1);
                        }
                    });
                    scope.select_all = scope.tableList.length === scope.checked.length;
                    if (configModel === null || configModel['checkOneAction'] === null){
                        return;
                    }
                    scope[configModel['checkOneAction']](scope.tableList);
                };

                function getCheckValues() {
                    if (configModel === null){
                        return;
                    }
                    return {check:scope.checked,checkedDelFlags:scope.checkedDelFlags};
                }
                
                function getCheckValues(param) {
                    if (configModel === null){
                        return;
                    }
                    scope.checkedParamFlags = [];
                    angular.forEach(scope.tableList, function (i) {
                        var index = scope.checked.indexOf(i.id);
                        if(i.checked && index !== -1) {
                            if((i[param]&&i[param]!=="0") || i[param] === "1"){
                            	scope.checkedParamFlags.push('1');
                            }else{
                            	 scope.checkedParamFlags.push('0');
                            }
                        }
                       
                    });
                    return {check:scope.checked,checkedParamFlags:scope.checkedParamFlags};
                }
                
                function getCheckObjects(){
                	if (configModel === null){
                        return;
                    }
                	scope.checkedParamObjects = [];
                	angular.forEach(scope.tableList, function (i){
                		var index = scope.checked.indexOf(i.id);
                		if(i.checked && index !== -1) {
                			scope.checkedParamObjects.push(i);
                		}
                	});
                	return scope.checkedParamObjects;
                }
            }
        };
    }]);
})( angular );
