"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopoludnia","odpoludnia"],DAY:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"],ERANAMES:["pred Kristom","po Kristovi"],ERAS:["pred Kr.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["janu\u00e1ra","febru\u00e1ra","marca","apr\u00edla","m\u00e1ja","j\u00fana","j\u00fala","augusta","septembra","okt\u00f3bra","novembra","decembra"],SHORTDAY:["ne","po","ut","st","\u0161t","pi","so"],SHORTMONTH:["jan","feb","mar","apr","m\u00e1j","j\u00fan","j\u00fal","aug","sep","okt","nov","dec"],STANDALONEMONTH:["janu\u00e1r","febru\u00e1r","marec","apr\u00edl","m\u00e1j","j\u00fan","j\u00fal","august","september","okt\u00f3ber","november","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"sk-sk",localeID:"sk_SK",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}if(g>=2&&g<=4&&e.v==0){return d.FEW}if(e.v!=0){return d.MANY}return d.OTHER}})}]);