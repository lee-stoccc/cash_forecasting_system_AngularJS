"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Uhr v\u00f6rmiddaachs","Uhr nommendaachs"],DAY:["Sunndaach","Moondaach","Dinnsdaach","Metwoch","Dunnersdaach","Friidaach","Samsdaach"],ERANAMES:["v\u00fcr Chrestus","noh Chrestus"],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Jannewa","F\u00e4browa","M\u00e4\u00e4z","Aprell","M\u00e4i","Juuni","Juuli","Oujo\u00df","Sept\u00e4mber","Oktoober","Nov\u00e4mber","Dez\u00e4mber"],SHORTDAY:["Su.","Mo.","Di.","Me.","Du.","Fr.","Sa."],SHORTMONTH:["Jan","F\u00e4b","M\u00e4z","Apr","M\u00e4i","Jun","Jul","Ouj","S\u00e4p","Okt","Nov","Dez"],STANDALONEMONTH:["Jannewa","F\u00e4browa","M\u00e4\u00e4z","Aprell","M\u00e4i","Juuni","Juuli","Oujo\u00df","Sept\u00e4mber","Oktoober","Nov\u00e4mber","Dez\u00e4mber"],WEEKENDRANGE:[5,6],fullDate:"EEEE, 'd\u00e4' d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM. y HH:mm:ss",mediumDate:"d. MMM. y",mediumTime:"HH:mm:ss","short":"d. M. y HH:mm",shortDate:"d. M. y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"ksh-de",localeID:"ksh_DE",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);