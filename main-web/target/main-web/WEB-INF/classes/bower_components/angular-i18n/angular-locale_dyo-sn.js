"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Dimas","Tene\u014b","Talata","Alarbay","Aramisay","Arjuma","Sibiti"],ERANAMES:["Ari\u014buu Yeesu","Atoo\u014be Yeesu"],ERAS:["ArY","AtY"],FIRSTDAYOFWEEK:0,MONTH:["Sanvie","F\u00e9birie","Mars","Aburil","Mee","Sue\u014b","S\u00fauyee","Ut","Settembar","Oktobar","Novembar","Disambar"],SHORTDAY:["Dim","Ten","Tal","Ala","Ara","Arj","Sib"],SHORTMONTH:["Sa","Fe","Ma","Ab","Me","Su","S\u00fa","Ut","Se","Ok","No","De"],STANDALONEMONTH:["Sanvie","F\u00e9birie","Mars","Aburil","Mee","Sue\u014b","S\u00fauyee","Ut","Settembar","Oktobar","Novembar","Disambar"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"dyo-sn",localeID:"dyo_SN",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);