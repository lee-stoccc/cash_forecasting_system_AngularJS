"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.","p."],DAY:["domenie","lunis","martars","miercus","joibe","vinars","sabide"],ERANAMES:["pdC","ddC"],ERAS:["pdC","ddC"],FIRSTDAYOFWEEK:0,MONTH:["Zen\u00e2r","Fevr\u00e2r","Mar\u00e7","Avr\u00eel","Mai","Jugn","Lui","Avost","Setembar","Otubar","Novembar","Dicembar"],SHORTDAY:["dom","lun","mar","mie","joi","vin","sab"],SHORTMONTH:["Zen","Fev","Mar","Avr","Mai","Jug","Lui","Avo","Set","Otu","Nov","Dic"],STANDALONEMONTH:["Zen\u00e2r","Fevr\u00e2r","Mar\u00e7","Avr\u00eel","Mai","Jugn","Lui","Avost","Setembar","Otubar","Novembar","Dicembar"],WEEKENDRANGE:[5,6],fullDate:"EEEE d 'di' MMMM 'dal' y",longDate:"d 'di' MMMM 'dal' y",medium:"dd/MM/y HH:mm:ss",mediumDate:"dd/MM/y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"fur-it",localeID:"fur_IT",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);