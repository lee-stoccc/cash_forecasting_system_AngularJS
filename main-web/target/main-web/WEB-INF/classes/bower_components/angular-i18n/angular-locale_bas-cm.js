"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["I bik\u025b\u0302gl\u00e0","I \u0253ugaj\u0254p"],DAY:["\u014bgw\u00e0 n\u0254\u0302y","\u014bgw\u00e0 nja\u014bgumba","\u014bgw\u00e0 \u00fbm","\u014bgw\u00e0 \u014bg\u00ea","\u014bgw\u00e0 mb\u0254k","\u014bgw\u00e0 k\u0254\u0254","\u014bgw\u00e0 j\u00f4n"],ERANAMES:["bis\u016b bi Yes\u00f9 Kr\u01d0st\u00f2","i mb\u016bs Yes\u00f9 Kr\u01d0st\u00f2"],ERAS:["b.Y.K","m.Y.K"],FIRSTDAYOFWEEK:0,MONTH:["K\u0254nd\u0254\u014b","M\u00e0c\u025b\u0302l","M\u00e0t\u00f9mb","M\u00e0top","M\u0300puy\u025b","H\u00ecl\u00f2nd\u025b\u0300","Nj\u00e8b\u00e0","H\u00ecka\u014b","D\u00ecp\u0254\u0300s","B\u00ec\u00f2\u00f4m","M\u00e0y\u025bs\u00e8p","L\u00ecbuy li \u0144y\u00e8e"],SHORTDAY:["n\u0254y","nja","uum","\u014bge","mb\u0254","k\u0254\u0254","jon"],SHORTMONTH:["k\u0254n","mac","mat","mto","mpu","hil","nje","hik","dip","bio","may","li\u0253"],STANDALONEMONTH:["K\u0254nd\u0254\u014b","M\u00e0c\u025b\u0302l","M\u00e0t\u00f9mb","M\u00e0top","M\u0300puy\u025b","H\u00ecl\u00f2nd\u025b\u0300","Nj\u00e8b\u00e0","H\u00ecka\u014b","D\u00ecp\u0254\u0300s","B\u00ec\u00f2\u00f4m","M\u00e0y\u025bs\u00e8p","L\u00ecbuy li \u0144y\u00e8e"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"bas-cm",localeID:"bas_CM",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);