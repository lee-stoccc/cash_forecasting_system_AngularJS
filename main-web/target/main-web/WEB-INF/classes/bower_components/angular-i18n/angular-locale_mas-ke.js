"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["\u0190nkak\u025bny\u00e1","\u0190nd\u00e1m\u00e2"],DAY:["Jumap\u00edl\u00ed","Jumat\u00e1tu","Jumane","Jumat\u00e1n\u0254","Ala\u00e1misi","Jum\u00e1a","Jumam\u00f3si"],ERANAMES:["Me\u00edn\u014d Y\u025b\u0301s\u0289","E\u00edn\u014d Y\u025b\u0301s\u0289"],ERAS:["MY","EY"],FIRSTDAYOFWEEK:0,MONTH:["Oladal\u0289\u0301","Ar\u00e1t","\u0186\u025bn\u0268\u0301\u0254\u0268\u014b\u0254k","Olodoy\u00ed\u00f3r\u00ed\u00ea ink\u00f3k\u00fa\u00e2","Oloil\u00e9p\u016bny\u012b\u0113 ink\u00f3k\u00fa\u00e2","K\u00faj\u00fa\u0254r\u0254k","M\u00f3rus\u00e1sin","\u0186l\u0254\u0301\u0268\u0301b\u0254\u0301r\u00e1r\u025b","K\u00fash\u00een","Olg\u00edsan","P\u0289sh\u0289\u0301ka","Nt\u0289\u0301\u014b\u0289\u0301s"],SHORTDAY:["Jpi","Jtt","Jnn","Jtn","Alh","Iju","Jmo"],SHORTMONTH:["Dal","Ar\u00e1","\u0186\u025bn","Doy","L\u00e9p","Rok","S\u00e1s","B\u0254\u0301r","K\u00fas","G\u00eds","Sh\u0289\u0301","Nt\u0289\u0301"],STANDALONEMONTH:["Oladal\u0289\u0301","Ar\u00e1t","\u0186\u025bn\u0268\u0301\u0254\u0268\u014b\u0254k","Olodoy\u00ed\u00f3r\u00ed\u00ea ink\u00f3k\u00fa\u00e2","Oloil\u00e9p\u016bny\u012b\u0113 ink\u00f3k\u00fa\u00e2","K\u00faj\u00fa\u0254r\u0254k","M\u00f3rus\u00e1sin","\u0186l\u0254\u0301\u0268\u0301b\u0254\u0301r\u00e1r\u025b","K\u00fash\u00een","Olg\u00edsan","P\u0289sh\u0289\u0301ka","Nt\u0289\u0301\u014b\u0289\u0301s"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"mas-ke",localeID:"mas_KE",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);