"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["tifawt","tadgg\u02b7at"],DAY:["asamas","aynas","asinas","ak\u1e5bas","akwas","asimwas","asi\u1e0dyas"],ERANAMES:["dat n \u025bisa","dffir n \u025bisa"],ERAS:["da\u025b","df\u025b"],FIRSTDAYOFWEEK:0,MONTH:["innayr","b\u1e5bay\u1e5b","ma\u1e5b\u1e63","ibrir","mayyu","yunyu","yulyuz","\u0263uct","cutanbir","ktubr","nuwanbir","dujanbir"],SHORTDAY:["asa","ayn","asi","ak\u1e5b","akw","asim","asi\u1e0d"],SHORTMONTH:["inn","b\u1e5ba","ma\u1e5b","ibr","may","yun","yul","\u0263uc","cut","ktu","nuw","duj"],STANDALONEMONTH:["innayr","b\u1e5bay\u1e5b","ma\u1e5b\u1e63","ibrir","mayyu","yunyu","yulyuz","\u0263uct","cutanbir","ktubr","nuwanbir","dujanbir"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"dh",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a4",posPre:"",posSuf:"\u00a4"}]},id:"shi-latn-ma",localeID:"shi_Latn_MA",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);