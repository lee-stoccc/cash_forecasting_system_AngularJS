"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["ki\u025bm\u025b\u0301\u025bm","kis\u025b\u0301nd\u025b"],DAY:["s\u0254\u0301ndi\u025b","m\u00f3ndie","mu\u00e1ny\u00e1\u014bm\u00f3ndie","met\u00fakp\u00ed\u00e1p\u025b","k\u00fap\u00e9limet\u00fakpiap\u025b","fel\u00e9te","s\u00e9sel\u00e9"],ERANAMES:["katikup\u00eden Y\u00e9suse","\u00e9k\u00e9l\u00e9mk\u00fanup\u00ed\u00e9n n"],ERAS:["k.Y.","+J.C."],FIRSTDAYOFWEEK:0,MONTH:["pik\u00edt\u00edk\u00edtie, o\u00f3l\u00ed \u00fa kut\u00faan","si\u025by\u025b\u0301, o\u00f3li \u00fa k\u00e1nd\u00ed\u025b","\u0254ns\u00famb\u0254l, o\u00f3li \u00fa k\u00e1t\u00e1t\u00fa\u025b","mesi\u014b, o\u00f3li \u00fa k\u00e9nie","ensil, o\u00f3li \u00fa k\u00e1t\u00e1nu\u025b","\u0254s\u0254n","efute","pisuy\u00fa","im\u025b\u014b i pu\u0254s","im\u025b\u014b i put\u00fak,o\u00f3li \u00fa k\u00e1t\u00ed\u025b","makandik\u025b","pil\u0254nd\u0254\u0301"],SHORTDAY:["sd","md","mw","et","kl","fl","ss"],SHORTMONTH:["o.1","o.2","o.3","o.4","o.5","o.6","o.7","o.8","o.9","o.10","o.11","o.12"],STANDALONEMONTH:["pik\u00edt\u00edk\u00edtie, o\u00f3l\u00ed \u00fa kut\u00faan","si\u025by\u025b\u0301, o\u00f3li \u00fa k\u00e1nd\u00ed\u025b","\u0254ns\u00famb\u0254l, o\u00f3li \u00fa k\u00e1t\u00e1t\u00fa\u025b","mesi\u014b, o\u00f3li \u00fa k\u00e9nie","ensil, o\u00f3li \u00fa k\u00e1t\u00e1nu\u025b","\u0254s\u0254n","efute","pisuy\u00fa","im\u025b\u014b i pu\u0254s","im\u025b\u014b i put\u00fak,o\u00f3li \u00fa k\u00e1t\u00ed\u025b","makandik\u025b","pil\u0254nd\u0254\u0301"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"yav-cm",localeID:"yav_CM",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);