"use strict";angular.module("ngLocale",[],["$provide",function(b){var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function d(g){g=g+"";var f=g.indexOf(".");return(f==-1)?0:g.length-f-1}function c(k,g){var h=g;if(undefined===h){h=Math.min(d(k),3)}var j=Math.pow(10,h);var i=((k*j)|0)%j;return{v:h,f:i}}function a(g,h){if(h===0){return{w:0,t:0}}while((h%10)===0){h/=10;g--}return{w:g,t:h}}b.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["s\u00f8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\u00f8rdag"],ERANAMES:["f.Kr.","e.Kr."],ERAS:["f.Kr.","e.Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],SHORTDAY:["s\u00f8n.","man.","tir.","ons.","tor.","fre.","l\u00f8r."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],STANDALONEMONTH:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE 'den' d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y HH.mm.ss",mediumDate:"d. MMM y",mediumTime:"HH.mm.ss","short":"dd/MM/y HH.mm",shortDate:"dd/MM/y",shortTime:"HH.mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"da-gl",localeID:"da_GL",pluralCat:function(k,h){var j=k|0;var g=c(k,h);var f=a(g.v,g.f);if(k==1||f.t!=0&&(j==0||j==1)){return e.ONE}return e.OTHER}})}]);