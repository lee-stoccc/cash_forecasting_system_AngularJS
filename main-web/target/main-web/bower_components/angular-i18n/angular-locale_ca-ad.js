"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a. m.","p. m."],DAY:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],ERANAMES:["abans de Crist","despr\u00e9s de Crist"],ERAS:["aC","dC"],FIRSTDAYOFWEEK:0,MONTH:["de gener","de febrer","de mar\u00e7","d\u2019abril","de maig","de juny","de juliol","d\u2019agost","de setembre","d\u2019octubre","de novembre","de desembre"],SHORTDAY:["dg.","dl.","dt.","dc.","dj.","dv.","ds."],SHORTMONTH:["gen.","febr.","mar\u00e7","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],STANDALONEMONTH:["gener","febrer","mar\u00e7","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM 'de' y",longDate:"d MMMM 'de' y",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"d/M/yy H:mm",shortDate:"d/M/yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"ca-ad",localeID:"ca_AD",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);