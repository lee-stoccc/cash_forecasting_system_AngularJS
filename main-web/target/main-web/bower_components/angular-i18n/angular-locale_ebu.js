"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["KI","UT"],DAY:["Kiumia","Njumatatu","Njumaine","Njumatano","Aramithi","Njumaa","NJumamothii"],ERANAMES:["Mbere ya Kristo","Thutha wa Kristo"],ERAS:["MK","TK"],FIRSTDAYOFWEEK:0,MONTH:["Mweri wa mbere","Mweri wa ka\u0129ri","Mweri wa kathat\u0169","Mweri wa kana","Mweri wa gatano","Mweri wa gatantat\u0169","Mweri wa m\u0169gwanja","Mweri wa kanana","Mweri wa kenda","Mweri wa ik\u0169mi","Mweri wa ik\u0169mi na \u0169mwe","Mweri wa ik\u0169mi na Ka\u0129r\u0129"],SHORTDAY:["Kma","Tat","Ine","Tan","Arm","Maa","NMM"],SHORTMONTH:["Mbe","Kai","Kat","Kan","Gat","Gan","Mug","Knn","Ken","Iku","Imw","Igi"],STANDALONEMONTH:["Mweri wa mbere","Mweri wa ka\u0129ri","Mweri wa kathat\u0169","Mweri wa kana","Mweri wa gatano","Mweri wa gatantat\u0169","Mweri wa m\u0169gwanja","Mweri wa kanana","Mweri wa kenda","Mweri wa ik\u0169mi","Mweri wa ik\u0169mi na \u0169mwe","Mweri wa ik\u0169mi na Ka\u0129r\u0129"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"ebu",localeID:"ebu",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);