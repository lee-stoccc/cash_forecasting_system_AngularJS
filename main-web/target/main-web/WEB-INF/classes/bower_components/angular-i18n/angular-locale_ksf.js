"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["s\u00e1r\u00faw\u00e1","c\u025b\u025b\u0301nko"],DAY:["s\u0254\u0301nd\u01dd","l\u01ddnd\u00ed","maad\u00ed","m\u025bkr\u025bd\u00ed","j\u01dd\u01ddd\u00ed","j\u00famb\u00e1","samd\u00ed"],ERANAMES:["di Y\u025b\u0301sus ak\u00e1 y\u00e1l\u025b","c\u00e1m\u025b\u025bn k\u01dd k\u01ddb\u0254pka Y"],ERAS:["d.Y.","k.Y."],FIRSTDAYOFWEEK:0,MONTH:["\u014bw\u00ed\u00ed a nt\u0254\u0301nt\u0254","\u014bw\u00ed\u00ed ak\u01dd b\u025b\u0301\u025b","\u014bw\u00ed\u00ed ak\u01dd r\u00e1\u00e1","\u014bw\u00ed\u00ed ak\u01dd nin","\u014bw\u00ed\u00ed ak\u01dd t\u00e1an","\u014bw\u00ed\u00ed ak\u01dd t\u00e1af\u0254k","\u014bw\u00ed\u00ed ak\u01dd t\u00e1ab\u025b\u025b","\u014bw\u00ed\u00ed ak\u01dd t\u00e1araa","\u014bw\u00ed\u00ed ak\u01dd t\u00e1anin","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk di b\u0254\u0301k","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk di b\u025b\u0301\u025b"],SHORTDAY:["s\u0254\u0301n","l\u01ddn","maa","m\u025bk","j\u01dd\u01dd","j\u00fam","sam"],SHORTMONTH:["\u014b1","\u014b2","\u014b3","\u014b4","\u014b5","\u014b6","\u014b7","\u014b8","\u014b9","\u014b10","\u014b11","\u014b12"],STANDALONEMONTH:["\u014bw\u00ed\u00ed a nt\u0254\u0301nt\u0254","\u014bw\u00ed\u00ed ak\u01dd b\u025b\u0301\u025b","\u014bw\u00ed\u00ed ak\u01dd r\u00e1\u00e1","\u014bw\u00ed\u00ed ak\u01dd nin","\u014bw\u00ed\u00ed ak\u01dd t\u00e1an","\u014bw\u00ed\u00ed ak\u01dd t\u00e1af\u0254k","\u014bw\u00ed\u00ed ak\u01dd t\u00e1ab\u025b\u025b","\u014bw\u00ed\u00ed ak\u01dd t\u00e1araa","\u014bw\u00ed\u00ed ak\u01dd t\u00e1anin","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk di b\u0254\u0301k","\u014bw\u00ed\u00ed ak\u01dd nt\u025bk di b\u025b\u0301\u025b"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"ksf",localeID:"ksf",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);