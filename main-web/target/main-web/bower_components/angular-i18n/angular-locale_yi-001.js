"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["\u05e4\u05d0\u05e8\u05de\u05d9\u05d8\u05d0\u05d2","\u05e0\u05d0\u05db\u05de\u05d9\u05d8\u05d0\u05d2"],DAY:["\u05d6\u05d5\u05e0\u05d8\u05d9\u05e7","\u05de\u05d0\u05b8\u05e0\u05d8\u05d9\u05e7","\u05d3\u05d9\u05e0\u05e1\u05d8\u05d9\u05e7","\u05de\u05d9\u05d8\u05d5\u05d5\u05d0\u05da","\u05d3\u05d0\u05e0\u05e2\u05e8\u05e9\u05d8\u05d9\u05e7","\u05e4\u05bf\u05e8\u05f2\u05b7\u05d8\u05d9\u05e7","\u05e9\u05d1\u05ea"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["\u05d9\u05d0\u05b7\u05e0\u05d5\u05d0\u05b7\u05e8","\u05e4\u05bf\u05e2\u05d1\u05e8\u05d5\u05d0\u05b7\u05e8","\u05de\u05e2\u05e8\u05e5","\u05d0\u05b7\u05e4\u05bc\u05e8\u05d9\u05dc","\u05de\u05d9\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d9\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e2\u05e4\u05bc\u05d8\u05e2\u05de\u05d1\u05e2\u05e8","\u05d0\u05e7\u05d8\u05d0\u05d1\u05e2\u05e8","\u05e0\u05d0\u05d5\u05d5\u05e2\u05de\u05d1\u05e2\u05e8","\u05d3\u05e2\u05e6\u05e2\u05de\u05d1\u05e2\u05e8"],SHORTDAY:["\u05d6\u05d5\u05e0\u05d8\u05d9\u05e7","\u05de\u05d0\u05b8\u05e0\u05d8\u05d9\u05e7","\u05d3\u05d9\u05e0\u05e1\u05d8\u05d9\u05e7","\u05de\u05d9\u05d8\u05d5\u05d5\u05d0\u05da","\u05d3\u05d0\u05e0\u05e2\u05e8\u05e9\u05d8\u05d9\u05e7","\u05e4\u05bf\u05e8\u05f2\u05b7\u05d8\u05d9\u05e7","\u05e9\u05d1\u05ea"],SHORTMONTH:["\u05d9\u05d0\u05b7\u05e0\u05d5\u05d0\u05b7\u05e8","\u05e4\u05bf\u05e2\u05d1\u05e8\u05d5\u05d0\u05b7\u05e8","\u05de\u05e2\u05e8\u05e5","\u05d0\u05b7\u05e4\u05bc\u05e8\u05d9\u05dc","\u05de\u05d9\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d9\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e2\u05e4\u05bc\u05d8\u05e2\u05de\u05d1\u05e2\u05e8","\u05d0\u05e7\u05d8\u05d0\u05d1\u05e2\u05e8","\u05e0\u05d0\u05d5\u05d5\u05e2\u05de\u05d1\u05e2\u05e8","\u05d3\u05e2\u05e6\u05e2\u05de\u05d1\u05e2\u05e8"],STANDALONEMONTH:["\u05d9\u05d0\u05b7\u05e0\u05d5\u05d0\u05b7\u05e8","\u05e4\u05bf\u05e2\u05d1\u05e8\u05d5\u05d0\u05b7\u05e8","\u05de\u05e2\u05e8\u05e5","\u05d0\u05b7\u05e4\u05bc\u05e8\u05d9\u05dc","\u05de\u05d9\u05d9","\u05d9\u05d5\u05e0\u05d9","\u05d9\u05d5\u05dc\u05d9","\u05d0\u05d5\u05d9\u05d2\u05d5\u05e1\u05d8","\u05e1\u05e2\u05e4\u05bc\u05d8\u05e2\u05de\u05d1\u05e2\u05e8","\u05d0\u05e7\u05d8\u05d0\u05d1\u05e2\u05e8","\u05e0\u05d0\u05d5\u05d5\u05e2\u05de\u05d1\u05e2\u05e8","\u05d3\u05e2\u05e6\u05e2\u05de\u05d1\u05e2\u05e8"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d\u05d8\u05df MMMM y",longDate:"d\u05d8\u05df MMMM y",medium:"d\u05d8\u05df MMM y HH:mm:ss",mediumDate:"d\u05d8\u05df MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"yi-001",localeID:"yi_001",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);