"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["dop.","pop."],DAY:["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],ERANAMES:["pred na\u0161im \u0161tetjem","na\u0161e \u0161tetje"],ERAS:["pr. n. \u0161t.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],SHORTDAY:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],SHORTMONTH:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],STANDALONEMONTH:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],WEEKENDRANGE:[5,6],fullDate:"EEEE, dd. MMMM y",longDate:"dd. MMMM y",medium:"d. MMM y HH:mm:ss",mediumDate:"d. MMM y",mediumTime:"HH:mm:ss","short":"d. MM. yy HH:mm",shortDate:"d. MM. yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"sl-si",localeID:"sl_SI",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(e.v==0&&g%100==1){return d.ONE}if(e.v==0&&g%100==2){return d.TWO}if(e.v==0&&g%100>=3&&g%100<=4||e.v!=0){return d.FEW}return d.OTHER}})}]);