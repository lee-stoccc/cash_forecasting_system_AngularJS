/*!
 * angular-translate - v2.11.1 - 2016-07-17
 * 
 * Copyright (c) 2016 The angular-translate team, Pascal Precht; Licensed MIT
 */
(function(a,b){if(typeof define==="function"&&define.amd){define([],function(){return(b())})}else{if(typeof exports==="object"){module.exports=b()}else{b()}}}(this,function(){a.$inject=["$cookieStore"];angular.module("pascalprecht.translate").factory("$translateCookieStorage",a);function a(c){var b={get:function(d){return c.get(d)},set:function(d,e){c.put(d,e)},put:function(d,e){c.put(d,e)}};return b}a.displayName="$translateCookieStorage";return"pascalprecht.translate"}));