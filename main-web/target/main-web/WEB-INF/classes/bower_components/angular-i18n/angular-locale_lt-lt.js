"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["prie\u0161piet","popiet"],DAY:["sekmadienis","pirmadienis","antradienis","tre\u010diadienis","ketvirtadienis","penktadienis","\u0161e\u0161tadienis"],ERANAMES:["prie\u0161 Krist\u0173","po Kristaus"],ERAS:["pr. Kr.","po Kr."],FIRSTDAYOFWEEK:0,MONTH:["sausio","vasario","kovo","baland\u017eio","gegu\u017e\u0117s","bir\u017eelio","liepos","rugpj\u016b\u010dio","rugs\u0117jo","spalio","lapkri\u010dio","gruod\u017eio"],SHORTDAY:["sk","pr","an","tr","kt","pn","\u0161t"],SHORTMONTH:["saus.","vas.","kov.","bal.","geg.","bir\u017e.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],STANDALONEMONTH:["sausis","vasaris","kovas","balandis","gegu\u017e\u0117","bir\u017eelis","liepa","rugpj\u016btis","rugs\u0117jis","spalis","lapkritis","gruodis"],WEEKENDRANGE:[5,6],fullDate:"y 'm'. MMMM d 'd'., EEEE",longDate:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd HH:mm:ss",mediumDate:"y-MM-dd",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u20ac",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"lt-lt",localeID:"lt_LT",pluralCat:function(g,f){var e=b(g,f);if(g%10==1&&(g%100<11||g%100>19)){return d.ONE}if(g%10>=2&&g%10<=9&&(g%100<11||g%100>19)){return d.FEW}if(e.f!=0){return d.MANY}return d.OTHER}})}]);