/*!
 * angular-translate - v2.11.1 - 2016-07-17
 * 
 * Copyright (c) 2016 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(d,c){"function"==typeof define&&define.amd?define([],function(){return c()}):"object"==typeof exports?module.exports=c():c()}(this,function(){function b(d){var c={get:function(a){return d.get(a)},set:function(a,e){d.put(a,e)},put:function(a,e){d.put(a,e)}};return c}return b.$inject=["$cookieStore"],angular.module("pascalprecht.translate").factory("$translateCookieStorage",b),b.displayName="$translateCookieStorage","pascalprecht.translate"});