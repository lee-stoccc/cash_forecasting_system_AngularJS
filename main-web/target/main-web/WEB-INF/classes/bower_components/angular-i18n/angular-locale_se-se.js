"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["i\u0111itbeaivet","eahketbeaivet"],DAY:["sotnabeaivi","vuoss\u00e1rga","ma\u014b\u014beb\u00e1rga","gaskavahkku","duorasdat","bearjadat","l\u00e1vvardat"],ERANAMES:["ovdal Kristtusa","ma\u014b\u014bel Kristtusa"],ERAS:["o.Kr.","m.Kr."],FIRSTDAYOFWEEK:0,MONTH:["o\u0111\u0111ajagem\u00e1nnu","guovvam\u00e1nnu","njuk\u010dam\u00e1nnu","cuo\u014bom\u00e1nnu","miessem\u00e1nnu","geassem\u00e1nnu","suoidnem\u00e1nnu","borgem\u00e1nnu","\u010dak\u010dam\u00e1nnu","golggotm\u00e1nnu","sk\u00e1bmam\u00e1nnu","juovlam\u00e1nnu"],SHORTDAY:["sotn","vuos","ma\u014b","gask","duor","bear","l\u00e1v"],SHORTMONTH:["o\u0111\u0111j","guov","njuk","cuo","mies","geas","suoi","borg","\u010dak\u010d","golg","sk\u00e1b","juov"],STANDALONEMONTH:["o\u0111\u0111ajagem\u00e1nnu","guovvam\u00e1nnu","njuk\u010dam\u00e1nnu","cuo\u014bom\u00e1nnu","miessem\u00e1nnu","geassem\u00e1nnu","suoidnem\u00e1nnu","borgem\u00e1nnu","\u010dak\u010dam\u00e1nnu","golggotm\u00e1nnu","sk\u00e1bmam\u00e1nnu","juovlam\u00e1nnu"],WEEKENDRANGE:[5,6],fullDate:"y MMMM d, EEEE",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"kr",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"se-se",localeID:"se_SE",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);