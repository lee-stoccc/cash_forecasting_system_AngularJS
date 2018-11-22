/*
	@license Angular Treeview version 0.1.6
	ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
	License: MIT


	[TREE attribute]
	angular-treeview: the treeview directive
	tree-id : each tree's unique id.
	tree-model : the tree model on $scope.
	node-id : each node's id
	node-label : each node's label
	node-children: each node's children

	<input ng-model="bankName"/>
	<span id="bank_icon"  class="glyphicon glyphicon-chevron-down"></span>
		<tree-select id="bank_div" class="configuration-nav-tree"
			tree-view="true"
			tree-id="bank"
			tree-list="bankList"
			object-id="id"
			object-label="bankName"
			object-children="children"
			model-key="bankName"
			model-val="bankNo"
			select="true"
			single="false">
		</tree-select>
*/

(function ( angular ) {
	'use strict';
	angular.module('angularTree', [] ).directive( 'treeSelect', ['$compile', function( $compile ) {
		return {
			restrict: 'EC',
			require: '?^ngController',
			//replace: true,
			link: function ( scope, element, attrs, ctrl ) {
				//tree id
				var treeId = attrs.treeId;
				//tree list
				var treeList = attrs.treeList;
				//object id
				var objectId = attrs.objectId || 'id';
				//object checkBox
				var objectCheckBox = attrs.objectCheckbox || 'checked';
				//object label
				var objectLabel = attrs.objectLabel || 'label';
				//children
				var objectChildren = attrs.objectChildren || 'children';
				//是否选择框
				var select = attrs.select;
				//是否单选
				var single = attrs.single;
				//modelKey
				var modelKey = attrs.modelKey || treeId+'key';
				//modelVal
				var modelVal = attrs.modelVal || treeId+'val';
				//controller
				var controller = attrs.controller || ctrl.constructor.name;
				//显示值初始化
				scope[modelKey] = '';
				//返回值初始化
				scope[modelVal] = [];
				//返回值Str初始化
				scope[modelVal+'Str'] = '';
				//tree template
				var template = 
						'<ul>' +
							'<li data-ng-repeat="node in ' + treeList + '">' +
								'<input type="checkbox" ng-model="node.' + objectCheckBox + '" ng-show="' + scope.showCheckBox + '" data-ng-click="' + treeId + '.selectNode(node)"><i class="collapsed" data-ng-show="node.' + objectChildren + '.length && node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
								'<i class="expanded " data-ng-show="node.' + objectChildren + '.length && !node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
								'<i class="normal" data-ng-hide="node.' + objectChildren + '.length"></i> ' +
								'<span data-ng-class="node.selected" data-ng-click="' + treeId + '.selectObjectLabel(node)" data-translate="{{node.' + objectLabel + '}}"></span>' +
								'<tree-select data-ng-hide="node.collapsed" tree-id="' + treeId + '" tree-list="node.' + objectChildren + '" object-id=' + objectId + ' object-label=' + objectLabel + ' object-children=' + objectChildren + '></tree-select>' +
							'</li>' +
						'</ul>';
				//check tree id, tree model
				if( treeId && treeList ) {
					//root node
					if( attrs.treeView ) {
						//create tree object if not exists
						scope[treeId] = scope[treeId] || {};
						//if node head clicks,
						scope[treeId].selectNodeHead = scope[treeId].selectNodeHead || function( selectedNode ){
							//Collapse or Expand
							selectedNode.collapsed = !selectedNode.collapsed;
						};
						//if node label clicks,
						scope[treeId].selectObjectLabel = scope[treeId].selectObjectLabel || function( selectedNode ){
							//remove highlight from previous node
							if( scope[treeId].currentNode && scope[treeId].currentNode.selected ) {
								scope[treeId].currentNode.selected = undefined;
							}
							//set highlight to selected node
							selectedNode.selected = 'selected';
							//set currentNode
							scope[treeId].currentNode = selectedNode;
							scope[treeId+'SelectItem'](selectedNode);
							//选择后赋值
							checkboxCtrl(selectedNode, "label");
						};

                        scope[treeId].selectNode = scope[treeId].selectNode || function( selectedNode ){
                                //remove highlight from previous node
                                if( scope[treeId].currentNode && scope[treeId].currentNode.selected ) {
                                    scope[treeId].currentNode.selected = undefined;
                                }
                                //set highlight to selected node
                                selectedNode.selected = 'selected';
                                //set currentNode
                                scope[treeId].currentNode = selectedNode;
                                scope[treeId+'SelectCheck'](selectedNode);
                                //选择后赋值
                                checkboxCtrl(selectedNode, "checkBox");
                            };
					}
					if(select === 'true'){
						$(element["0"].parentElement).addClass("tree-select");
					}
					//Rendering template.
					element.html('').append( $compile( template )( scope ) );
				}
				
				function checkboxCtrl(node, type){
					var key = node[objectLabel];
					var val = node[objectId];
					//如果是单选
					if(single === 'true'){
						if(type === 'label'){
							if(node.checked){
								node.checked = false;
								//值
								scope[modelKey] = '';
								scope[modelVal] = [];
								scope[modelVal+'Str'] = '';
							}else{
								node.checked = true;
								//值
								scope[modelKey] = key;
								scope[modelVal] = val;
								scope[modelVal+'Str'] = val;
							}
						}
						if(node.checked){
							//把其他的勾去掉
							checkLoopSingle(node,scope[treeList],false);
						}
						if(select === 'true'){
							angular.element('#'+ treeId + '_div').hide();
						}
					}else{
						if(type === 'label'){
							if(node.checked){
								node.checked = false;
							}else{
								node.checked = true;
							}
							//多选赋值
							manyValue(node[objectLabel],node[objectId],node.checked);
						}else{
							//多选赋值
							manyValue(node[objectLabel],node[objectId],node.checked);
							if(node.children && node.children.length > 0){
								checkLoop(node.children, node.checked);
							}
						}
						
					}
				}
				
				//单选
				function checkLoopSingle(node,list,status){
					for(var i=0;i<list.length;i++){
						var obj = list[i];
						if(obj.id !== node.id){
							obj.checked = status;
						}
						if(obj.children && obj.children.length > 0){
							checkLoopSingle(node, obj.children,status);
						}
					}
				}
				
				//多选循环
				function checkLoop(list, check){
					for(var i=0;i<list.length;i++){
						list[i].checked = check;
						//多选赋值
						manyValue(list[i][objectLabel],list[i][objectId],check);
						if(list[i].children && list[i].children.length > 0){
							checkLoop(list[i].children, check);
						}
					}
				}
				
				//多选赋值方法
				function manyValue(key,val,status){
					var valIndex = scope[modelVal].indexOf(val);
					//多选
					if(valIndex>-1){
						if(status){
							return;//如果是原有的，又是选中，则不删除
						}
						//值
						scope[modelVal].splice(valIndex,1);
						
						//值Str
						var strIndex = scope[modelVal+'Str'].indexOf(val+',');
						scope[modelVal+'Str'] = scope[modelVal+'Str'].substring(0,strIndex)
						+ scope[modelVal+'Str'].substring(strIndex+val.length+1,scope[modelVal+'Str'].length);
						
						//显示
						var keyIndex = scope[modelKey].indexOf(key+',');
						scope[modelKey] = scope[modelKey].substring(0,keyIndex)
						+ scope[modelKey].substring(keyIndex+key.length+1,scope[modelKey].length);
					}else{
						if(!status){
							return;//如果取消就不加了
						}
						//值
						scope[modelVal].push(val);
						//显示
						scope[modelKey] += key+',';
						
						//值的str
						scope[modelVal+'Str'] += val+',';
					}
				}
				
				//设值方法
				scope[treeId].setValue = function(val){
					if( typeof(val) === 'string'){
						scope[modelVal+'Str'] = val+",";
						val = val.split(',');
						scope[modelVal] = val;
					}else{
						scope[modelVal] = val;
						var temp = '';
						for(var i=0;i<val.length;i++){
							temp += val[i]+',';
						}
						scope[modelVal+'Str'] = temp;
					}
					for(var i=0;i<val.length;i++){
						var data = val[i];
						dataLoop(scope[treeList],data);
					}
				};
				
				function dataLoop(list,data){
					if(list){
						for(var i=0;i<list.length;i++){
							var temp = list[i][objectId];
							if(data === temp){
								list[i].checked = true;
								//显示
								scope[modelKey] += list[i][objectLabel];
								if(single !== 'true'){
									scope[modelKey] += ',';
								}
								//break;
							}
							if(list[i].children && list[i].children.length>0){
								dataLoop(list[i].children,data);
							}
						}
					}
				}
				
				if(select === 'true'){
					angular.element('#'+treeId+'_icon').click(function(event){
						angular.element('#'+treeId+'_div').toggle();
						event.stopPropagation();
					});
					//点击外部隐藏
					/*angular.element('div[ng-controller="'+ controller +'"]').click(function(event){
						if(angular.element('#'+treeId+'_div').is(':visible')){
							angular.element('#'+treeId+'_div').hide();
						}
					});*/
					angular.element('#'+treeId+'_div').click(function(event){
						event.stopPropagation();
					});
					angular.element('body[ng-controller="devplatformCtrl"]').click(function(event){
						if(angular.element('#'+treeId+'_div').is(':visible')){
							angular.element('#'+treeId+'_div').hide();
						}
					});
					
				}
				scope.$emit('ngRepeatFinished');
			}
		};
	}]);
})( angular );
