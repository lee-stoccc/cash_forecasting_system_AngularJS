"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["lahadi","t\u025b\u025bn\u025b\u025b","talata","alaba","aimisa","aijima","si\u0253iti"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["luukao kem\u00e3","\u0253anda\u0253u","v\u0254\u0254","fulu","goo","6","7","k\u0254nde","saah","galo","kenpkato \u0253olol\u0254","luukao l\u0254ma"],SHORTDAY:["lahadi","t\u025b\u025bn\u025b\u025b","talata","alaba","aimisa","aijima","si\u0253iti"],SHORTMONTH:["luukao kem\u00e3","\u0253anda\u0253u","v\u0254\u0254","fulu","goo","6","7","k\u0254nde","saah","galo","kenpkato \u0253olol\u0254","luukao l\u0254ma"],STANDALONEMONTH:["luukao kem\u00e3","\u0253anda\u0253u","v\u0254\u0254","fulu","goo","6","7","k\u0254nde","saah","galo","kenpkato \u0253olol\u0254","luukao l\u0254ma"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"vai-latn",localeID:"vai_Latn",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);