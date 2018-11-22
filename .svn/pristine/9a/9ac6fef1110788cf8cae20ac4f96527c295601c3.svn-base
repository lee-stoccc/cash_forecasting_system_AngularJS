/**
 * Created by Zhouck on 2016/12/9.
 */
(function() {
	'use strict';
	var util = angular.module('suitong.util', []);
	util.factory('utilService', ['$http', '$q', function($http, $q) {

		/**
		 * GET请求
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestGet(url, params) {
			if(params){
				url += params;
			}
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'GET',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				}
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
				//console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}

		/**
		 * GET请求
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function httpGet(url, params) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			var config = {
				method: 'GET',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				}
			};
			if(params){
				config.params = params;
			}
			$http(config).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功
			}).error(function(data, status, headers, config) {
				deferred.reject(data);
				//.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}

		/**
		 * 使用Jquery.ajax请求
		 * @param settings
		 * @returns {then, error, jqXHR, textStatus}
		 */
		function requestByJquery(settings) {
			var jquery = angular.element;
			var result = {};
			if(!settings || typeof settings !== 'object') {
				throw exception;
			}
			var initResult = function(jqXHR, textStatus, responseData) {
				result.jqXHR = jqXHR;
				result.textStatus = textStatus;
				result.then = function(callBack) {
					if(typeof callBack === 'function' && responseData) {
						callBack(responseData);
					}
					return result;
				};
				result.error = function(callBack) {
					if(typeof callBack === 'function') {
						callBack(textStatus);
					}
					return result;
				};
			};
			jquery.extend(settings, {
				headers: {
					'Authorization': 'Bearer ' + localStorage.Token,
//					'ContentType': 'application/json'
				}
			});
			jquery
				.ajax(settings)
				.done(function(data,textStatus,jqXHR) {
					var responseData = "";
					if(Object.prototype.toString.call(data) === "[object String]"){
                        responseData = JSON.parse(data);
					}else{
                        responseData = JSON.parse(angular.toJson(data));
					}
				//	console.info("请求参数:" + JSON.stringify(settings) + ";处理结果:" + textStatus + "返回参数:" + data);
					initResult(jqXHR, textStatus, responseData);
				}).fail(function(jqXHR, textStatus) {
					initResult(jqXHR, textStatus);
				});
			return result;
		}

		/**
		 * POST请求
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestPost(url, params) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'POST',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				},
				data: params
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
				//console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}
		
		/**
		 * POST2请求
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestPostAsync(url, params) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				async:false,
				method: 'POST',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				},
				data: params
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
				//console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}

		/**
		 * PUT请求
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestPut(url, params) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'PUT',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				},
				data: params
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
			//	console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}

		/**
		 * Excel导出
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestExcelOut(url, params) {
			if(params){
				url += params;
			}
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'POST',
				url: url + params,
				headers: {
					'Authorization': localStorage.Token
				},
				responseType: 'arraybuffer'
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
			//	console.log('get error...');
			});
		//	console.log('return promise');
			return promise;
		}

		
		/**
		 * Excel导出
		 * @param url
		 * @param params
		 * @returns {deferred.promise|{then, catch, finally}}
		 */
		function requestExportExcel(url, params) {
			if(params){
				url += params;
			}
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'GET',
				url: url,
				headers: {
					'Authorization': localStorage.Token
				},
                params: params,
				responseType: 'arraybuffer'
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
			//	console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}
		
		
		function requestDelete(url, params) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			$http({
				method: 'DELETE',  //更新requestDelete   method from 'GET' to 'DELETE'   20170828 michael
				url: url + params,
				headers: {
					'Authorization': localStorage.Token
				}
			}).success(function(data, status, headers, config) {
				deferred.resolve(data); //执行成功

			}).error(function(data, status, headers, config) {
				deferred.reject(data);
			//	console.log('get error...');
			});
			//console.log('return promise');
			return promise;
		}

		/**
		 *  用于根据属性名、值查找返回值
		 * @param keyValue 用来查找的属性值
		 * @param inputArray 查询的数组
		 * @param keyProp 用来查询的属性名
		 * @param valueProp 返回值对应的属性名
		 * @returns {{}}  返回对应属性的值
		 */
		function getValueInArray(keyValue, inputArray, keyProp, valueProp) {
			if(typeof inputArray === 'string'){
        		inputArray = JSON.parse(inputArray);
        	}
			var searchValue = {};
			if(inputArray && inputArray.length > 0) {
				for(var i = 0; i < inputArray.length; i++) {
					var nowObj = inputArray[i];
					if(nowObj[keyProp] === keyValue) {
						searchValue = nowObj[valueProp];
						break;
					}
				}
			}
			return searchValue;
		}

		return {
			"requestGet": requestGet,
			"requestPost": requestPost,
			"requestPut": requestPut,
			"requestExcelOut": requestExcelOut,
			"requestExportExcel": requestExportExcel,
			"requestDelete": requestDelete,
			"requestByJquery": requestByJquery,
			"getValueInArray": getValueInArray,
			"httpGet" : httpGet,
			"requestPostAsync":requestPostAsync  
		};
	}]);
})();
