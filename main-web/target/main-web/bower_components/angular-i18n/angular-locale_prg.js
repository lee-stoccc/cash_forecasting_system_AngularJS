"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ankst\u0101inan","pa pussideinan"],DAY:["nad\u012bli","panad\u012bli","wisas\u012bdis","pussisawaiti","ketwirtiks","p\u0113ntniks","sabattika"],ERANAMES:["BC","AD"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:0,MONTH:["rags","wassarins","p\u016blis","sakkis","zallaws","s\u012bmenis","l\u012bpa","daggis","sillins","spallins","lapkr\u016btis","sallaws"],SHORTDAY:["nad","pan","wis","pus","ket","p\u0113n","sab"],SHORTMONTH:["rag","was","p\u016bl","sak","zal","s\u012bm","l\u012bp","dag","sil","spa","lap","sal"],STANDALONEMONTH:["rags","wassarins","p\u016blis","sakkis","zallaws","s\u012bmenis","l\u012bpa","daggis","sillins","spallins","lapkr\u016btis","sallaws"],WEEKENDRANGE:[5,6],fullDate:"EEEE, y 'mettas' d. MMMM",longDate:"y 'mettas' d. MMMM",medium:"dd.MM 'st'. y HH:mm:ss",mediumDate:"dd.MM 'st'. y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"prg",localeID:"prg",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);