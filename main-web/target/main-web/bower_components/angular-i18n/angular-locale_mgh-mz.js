"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["wichishu","mchochil\u2019l"],DAY:["Sabato","Jumatatu","Jumanne","Jumatano","Arahamisi","Ijumaa","Jumamosi"],ERANAMES:["Hinapiya yesu","Yopia yesu"],ERAS:["HY","YY"],FIRSTDAYOFWEEK:0,MONTH:["Mweri wo kwanza","Mweri wo unayeli","Mweri wo uneraru","Mweri wo unecheshe","Mweri wo unethanu","Mweri wo thanu na mocha","Mweri wo saba","Mweri wo nane","Mweri wo tisa","Mweri wo kumi","Mweri wo kumi na moja","Mweri wo kumi na yel\u2019li"],SHORTDAY:["Sab","Jtt","Jnn","Jtn","Ara","Iju","Jmo"],SHORTMONTH:["Kwa","Una","Rar","Che","Tha","Moc","Sab","Nan","Tis","Kum","Moj","Yel"],STANDALONEMONTH:["Mweri wo kwanza","Mweri wo unayeli","Mweri wo uneraru","Mweri wo unecheshe","Mweri wo unethanu","Mweri wo thanu na mocha","Mweri wo saba","Mweri wo nane","Mweri wo tisa","Mweri wo kumi","Mweri wo kumi na moja","Mweri wo kumi na yel\u2019li"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"MTn",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"mgh-mz",localeID:"mgh_MZ",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);