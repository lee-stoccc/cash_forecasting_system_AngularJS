"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunntag","M\u00e4ntag","Zi\u0161tag","Mittwu\u010d","Fr\u00f3ntag","Fritag","Sam\u0161tag"],ERANAMES:["v. Chr.","n. Chr"],ERAS:["v. Chr.","n. Chr"],FIRSTDAYOFWEEK:0,MONTH:["Jenner","Hornig","M\u00e4rze","Abrille","Meije","Br\u00e1\u010det","Heiwet","\u00d6ig\u0161te","Herb\u0161tm\u00e1net","W\u00edm\u00e1net","Winterm\u00e1net","Chri\u0161tm\u00e1net"],SHORTDAY:["Sun","M\u00e4n","Zi\u0161","Mit","Fr\u00f3","Fri","Sam"],SHORTMONTH:["Jen","Hor","M\u00e4r","Abr","Mei","Br\u00e1","Hei","\u00d6ig","Her","W\u00edm","Win","Chr"],STANDALONEMONTH:["Jenner","Hornig","M\u00e4rze","Abrille","Meije","Br\u00e1\u010det","Heiwet","\u00d6ig\u0161te","Herb\u0161tm\u00e1net","W\u00edm\u00e1net","Winterm\u00e1net","Chri\u0161tm\u00e1net"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH:mm:ss",mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CHF",DECIMAL_SEP:",",GROUP_SEP:"\u2019",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"wae",localeID:"wae",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);