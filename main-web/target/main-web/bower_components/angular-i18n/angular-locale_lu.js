"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Dinda","Dilolo"],DAY:["Lumingu","Nkodya","Nd\u00e0ay\u00e0","Ndang\u00f9","Nj\u00f2wa","Ng\u00f2vya","Lubingu"],ERANAMES:["Kumpala kwa Yezu Kli","Kunyima kwa Yezu Kli"],ERAS:["kmp. Y.K.","kny. Y. K."],FIRSTDAYOFWEEK:0,MONTH:["Ciongo","L\u00f9ishi","Lus\u00f2lo","M\u00f9uy\u00e0","Lum\u00f9ng\u00f9l\u00f9","Lufuimi","Kab\u00e0l\u00e0sh\u00ecp\u00f9","L\u00f9sh\u00eck\u00e0","Lutongolo","Lung\u00f9di","Kasw\u00e8k\u00e8s\u00e8","Cisw\u00e0"],SHORTDAY:["Lum","Nko","Ndy","Ndg","Njw","Ngv","Lub"],SHORTMONTH:["Cio","Lui","Lus","Muu","Lum","Luf","Kab","Lush","Lut","Lun","Kas","Cis"],STANDALONEMONTH:["Ciongo","L\u00f9ishi","Lus\u00f2lo","M\u00f9uy\u00e0","Lum\u00f9ng\u00f9l\u00f9","Lufuimi","Kab\u00e0l\u00e0sh\u00ecp\u00f9","L\u00f9sh\u00eck\u00e0","Lutongolo","Lung\u00f9di","Kasw\u00e8k\u00e8s\u00e8","Cisw\u00e0"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FrCD",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a4",posPre:"",posSuf:"\u00a4"}]},id:"lu",localeID:"lu",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);