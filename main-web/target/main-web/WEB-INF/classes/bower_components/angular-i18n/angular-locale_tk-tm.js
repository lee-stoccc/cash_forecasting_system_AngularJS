"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["\u00fdek\u015fenbe","du\u015fenbe","si\u015fenbe","\u00e7ar\u015fenbe","pen\u015fenbe","anna","\u015fenbe"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["\u00fdanwar","fewral","mart","aprel","ma\u00fd","i\u00fdun","i\u00fdul","awgust","sent\u00fdabr","okt\u00fdabr","no\u00fdabr","dekabr"],SHORTDAY:["\u00fdb","db","sb","\u00e7b","pb","an","\u015fb"],SHORTMONTH:["\u00fdan","few","mart","apr","ma\u00fd","i\u00fdun","i\u00fdul","awg","sen","okt","no\u00fd","dek"],STANDALONEMONTH:["\u00fdanwar","fewral","mart","aprel","ma\u00fd","i\u00fdun","i\u00fdul","awgust","sent\u00fdabr","okt\u00fdabr","no\u00fdabr","dekabr"],WEEKENDRANGE:[5,6],fullDate:"d MMMM y EEEE",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"TMT",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"tk-tm",localeID:"tk_TM",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);