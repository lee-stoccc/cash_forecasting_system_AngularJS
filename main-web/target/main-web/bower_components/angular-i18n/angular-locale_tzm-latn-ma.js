"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Zdat azal","\u1e0ceffir aza"],DAY:["Asamas","Aynas","Asinas","Akras","Akwas","Asimwas","Asi\u1e0dyas"],ERANAMES:["Zdat \u0190isa (TA\u0194)","\u1e0ceffir \u0190isa (TA\u0194)"],ERAS:["Z\u0190","\u1e0c\u0190"],FIRSTDAYOFWEEK:5,MONTH:["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","\u0194uct","Cutanbir","K\u1e6duber","Nwanbir","Dujanbir"],SHORTDAY:["Asa","Ayn","Asn","Akr","Akw","Asm","As\u1e0d"],SHORTMONTH:["Yen","Yeb","Mar","Ibr","May","Yun","Yul","\u0194uc","Cut","K\u1e6du","Nwa","Duj"],STANDALONEMONTH:["Yennayer","Yebrayer","Mars","Ibrir","Mayyu","Yunyu","Yulyuz","\u0194uct","Cutanbir","K\u1e6duber","Nwanbir","Dujanbir"],WEEKENDRANGE:[4,5],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"dh",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"tzm-latn-ma",localeID:"tzm_Latn_MA",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);