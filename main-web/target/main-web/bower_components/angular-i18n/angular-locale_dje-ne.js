"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Subbaahi","Zaarikay b"],DAY:["Alhadi","Atinni","Atalaata","Alarba","Alhamisi","Alzuma","Asibti"],ERANAMES:["Isaa jine","Isaa zamanoo"],ERAS:["IJ","IZ"],FIRSTDAYOFWEEK:0,MONTH:["\u017danwiye","Feewiriye","Marsi","Awiril","Me","\u017duwe\u014b","\u017duyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],SHORTDAY:["Alh","Ati","Ata","Ala","Alm","Alz","Asi"],SHORTMONTH:["\u017dan","Fee","Mar","Awi","Me","\u017duw","\u017duy","Ut","Sek","Okt","Noo","Dee"],STANDALONEMONTH:["\u017danwiye","Feewiriye","Marsi","Awiril","Me","\u017duwe\u014b","\u017duyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a4",posPre:"",posSuf:"\u00a4"}]},id:"dje-ne",localeID:"dje_NE",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);