"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["prije podne","popodne"],DAY:["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"],ERANAMES:["Prije nove ere","Nove ere"],ERAS:["p. n. e.","n. e."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","mart","april","maj","juni","juli","august","septembar","oktobar","novembar","decembar"],SHORTDAY:["ned","pon","uto","sri","\u010det","pet","sub"],SHORTMONTH:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],STANDALONEMONTH:["januar","februar","mart","april","maj","juni","juli","august","septembar","oktobar","novembar","decembar"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y.",longDate:"dd. MMMM y.",medium:"dd. MMM. y. HH:mm:ss",mediumDate:"dd. MMM. y.",mediumTime:"HH:mm:ss","short":"dd.MM.yy. HH:mm",shortDate:"dd.MM.yy.",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"KM",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"bs-latn",localeID:"bs_Latn",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(e.v==0&&g%10==1&&g%100!=11||e.f%10==1&&e.f%100!=11){return d.ONE}if(e.v==0&&g%10>=2&&g%10<=4&&(g%100<12||g%100>14)||e.f%10>=2&&e.f%10<=4&&(e.f%100<12||e.f%100>14)){return d.FEW}return d.OTHER}})}]);