"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\u00e2mb\u0103t\u0103"],ERANAMES:["\u00eenainte de Hristos","dup\u0103 Hristos"],ERAS:["\u00ee.Hr.","d.Hr."],FIRSTDAYOFWEEK:0,MONTH:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],SHORTDAY:["Dum","Lun","Mar","Mie","Joi","Vin","S\u00e2m"],SHORTMONTH:["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."],STANDALONEMONTH:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd.MM.y HH:mm",shortDate:"dd.MM.y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"RON",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"ro",localeID:"ro",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}if(e.v!=0||h==0||h!=1&&h%100>=1&&h%100<=19){return d.FEW}return d.OTHER}})}]);