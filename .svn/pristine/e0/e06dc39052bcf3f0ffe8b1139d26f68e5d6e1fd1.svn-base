(function ( angular ) {
	'use strict';
	angular.module('eChart', [] ).directive( 'eChartLine', ['$compile', function( $compile ) {
		    return {  
   		        restrict: 'A',  
   		        replace: true, 
   		        link: function(scope, element, attrs) {
   		        	var echartData = scope[attrs.echartData]; 
   		        	var width = echartData['width'];
   		        	var height = echartData['height'];
   		        	var id = echartData['id'];
   		        	var title = echartData['title'];
   		        	scope.refreshEchart = refreshEchart;
   		        	function getOption(echartData){
   	   		        	var legend = echartData['legend'];
   	   		        	var item = echartData['item'];
   	   		        	var data = echartData['data'];
   	   		        	var option = {
   	    		                // 提示框，鼠标悬浮交互时的信息提示  
	   	   		                noDataLoadingOption :{
		   	   	                    text: '暂无数据',
		   	   	                    effect:'whirling',
		   	   	                    effectOption : {
		   	   	                        effect: {
		   	   	                            n: 0 //气泡个数为0 
		   	   	                        }
		   	   	                    },
		   	   	                    textStyle: {
		   	   	                        fontSize: 26,
		   	   	                        fontWeight: 'bold'
		   	   	                    }
	   	   	                    },
   	    		                tooltip: {  
   	    		                    show: true,  
   	    		                    trigger: 'item'  
   	    		                },
   	    		                
   	 	   		             title:{
   	 	   	                    text:title,
   	 	   	                    padding: [12,12,0,12],
   	 	   	                    textStyle:{
   	 	   	                     //文字颜色
   	 	   	                     color:'#000',
   	 	   	                     //字体风格,'normal','italic','oblique'
   	 	   	                     fontStyle:'normal',
   	 	   	                     //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
   	 	   	                     //fontWeight:'bold',
   	 	   	                     //字体系列
   	 	   	                     //fontFamily:'sans-serif',
   	 	   	                     //字体大小
   	 	   	                     fontSize:16
   	 	   	                    }
   	 	   	                },
   	    		                grid: {
   	    		                	show:'true',
   	    		                	borderWidth:'0',
   	 		   		            x:60,
   	 		   		            y:80,
   	 		   		            x2:10,
   	 		   		            y2:100
   	    		                },
   	    		                // 图例  
   	    		                legend: {  
   	 		   		            orient: 'horizontal', // 'vertical'
   	 		   		            x: 'center', // 'center' | 'left' | {number},
   	 		   		            y: 'bottom', // 'center' | 'bottom' | {number}
   	 	   		                data:[ {name: legend[0],
   	 	   		                	 		textStyle:{color:"#000"}
   	 	   		                    	},
   	 	   		                    	{name: legend[1],
   	 	   		                	 		textStyle:{color:"#000"}
   	 	   		                    	}
   	 	   		               ]
   	    		                },  
   	 		   		        // 横轴坐标轴  
   	    		                xAxis: [{
   	    		                	splitLine:{show: false},//去除网格线
   	    		                    type: 'category',  
   	    		                    data: item,
   	                             axisLabel:{  
   	                                 interval:0,//横轴信息全部显示  
   	                                 rotate:-45,//-30度角倾斜显示  
   	                                 textStyle: {
   	                                     color: '#000'
   	                                 }
   	                            }, 
   	                             axisLine:{  
   	                                 lineStyle: {
   	                                     type: 'solid',
   	                                     color: '#22292d',//左边线的颜色
   	                                     width:'1'//坐标线的宽度
   	                                 }
   	                             } 
   	    		                }],  
   	    		                // 纵轴坐标轴  
   	    		                yAxis: [{
   	    		                	splitLine:{
   	    		                		show: true,
   	    		                		lineStyle : { 
   	    		                			color:'#4C555D'
   	    		                		},  
   	    		                	},//去除网格线
   	    		                    type: 'value',
   	                             axisLabel:{  
   	                                 interval:0,//横轴信息全部显示  
   	                                 textStyle: {
   	                                     color: '#000'
   	                                 },
   	                            },  
   	                             axisLine:{  
   	                                 lineStyle: {
   	                                     type: 'solid',
   	                                     color: '#22292d',//左边线的颜色
   	                                     width:'0'//坐标线的宽度
   	                                 }
   	                             } 
   	    		                }],  
   	    		                // 数据内容数组  
   	    		                series: function(){  
   	    		                    var serie=[];  
   	    		                    for(var i=0;i<legend.length;i++){
   	    		                    	var color = '';
   	    		                    	if(i%2 == 0){
   	    		                    		color = '#00C1DE';
   	    		                    	}else{
   	    		                    		color = '#FE5835';
   	    		                    	}
   	    		                        var item = {  
   	    		                            name : legend[i],
//   	    		                            symbol:'none',  //这句就是去掉点的  
//   	    		                            smooth:true,  //这句就是让曲线变平滑的 
   	    		                            type: 'line',  
   	    		                            itemStyle: {
   	    		                            	normal: {
   	    		                              		color: color
   	    		                          			}
   	    		                         		},
   	    		                            data: data[i]  
   	    		                        };  
   	    		                        serie.push(item);  
   	    		                    }  
   	    		                    return serie;  
   	    		                }()  
   	    		            };
   	   		        	return option;
   		        	};
   		            
   		            var template = "<div style='width:"+(width !== undefined ? width : "95%") + 
   		            ";height:"+(height !== undefined ? height : "95%")+"' id='"+ (id !== undefined ? id : "echart") +"'></div>";  
   		            element.html('').append( $compile( template )( scope ) );
   		            scope[id] = echarts.init(document.getElementById((id !== undefined ? id : "echart")),'mint');  
   		            scope[id].setOption(getOption(echartData));
	   		         window.onresize = function () {
		   		          //重置容器高宽
	   		        	  scope.resizeWorldMapContainer();
	   		        	  if(scope.chartList != null && scope.chartList.length > 1){
	   		        		angular.forEach(scope.chartList, function (chart) {
	   		        			scope[chart.id].resize(); 
	   		        		});
	   		        	  }else{
	   		        		scope[id].resize(); 
	   		        	  } 
	   		         };
   		            
   		            function refreshEchart(id,echartData){
   		            	scope[id] = echarts.init(document.getElementById((id !== undefined ? id : "echart")),'mint');  
   		            	scope[id].clear();
   		            	scope[id].setOption(getOption(echartData),true);
   		            }
   		            
	   		         var worldMapContainer = angular.element('#' + id);
		
		   		    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		   		     scope.resizeWorldMapContainer = function () {
		   		        worldMapContainer.offsetWidth = 0.75 * window.innerWidth+'px';
		   		        worldMapContainer.offsetHeight = 0.75 * window.innerHeight+'px';
		   		    };
   		        }  
   		    };  
	}]);
})( angular );
