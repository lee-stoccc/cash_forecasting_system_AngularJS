"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["dopoledne","odpoledne"],DAY:["ned\u011ble","pond\u011bl\u00ed","\u00fater\u00fd","st\u0159eda","\u010dtvrtek","p\u00e1tek","sobota"],ERANAMES:["p\u0159. n. l.","n. l."],ERAS:["p\u0159. n. l.","n. l."],FIRSTDAYOFWEEK:0,MONTH:["ledna","\u00fanora","b\u0159ezna","dubna","kv\u011btna","\u010dervna","\u010dervence","srpna","z\u00e1\u0159\u00ed","\u0159\u00edjna","listopadu","prosince"],SHORTDAY:["ne","po","\u00fat","st","\u010dt","p\u00e1","so"],SHORTMONTH:["led","\u00fano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\u00e1\u0159","\u0159\u00edj","lis","pro"],STANDALONEMONTH:["leden","\u00fanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\u00e1\u0159\u00ed","\u0159\u00edjen","listopad","prosinec"],WEEKENDRANGE:[5,6],fullDate:"EEEE d. MMMM y",longDate:"d. MMMM y",medium:"d. M. y H:mm:ss",mediumDate:"d. M. y",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"K\u010d",DECIMAL_SEP:",",GROUP_SEP:"\u00a0",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"\u00a0\u00a4",posPre:"",posSuf:"\u00a0\u00a4"}]},id:"cs",localeID:"cs",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}if(g>=2&&g<=4&&e.v==0){return d.FEW}if(e.v!=0){return d.MANY}return d.OTHER}})}]);