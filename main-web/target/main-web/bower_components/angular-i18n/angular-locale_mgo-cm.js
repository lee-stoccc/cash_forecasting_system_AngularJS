"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Aneg 1","Aneg 2","Aneg 3","Aneg 4","Aneg 5","Aneg 6","Aneg 7"],ERANAMES:["BCE","CE"],ERAS:["BCE","CE"],FIRSTDAYOFWEEK:0,MONTH:["im\u0259g mbegtug","imeg \u00e0b\u00f9b\u00ec","imeg mb\u0259\u014bchubi","im\u0259g ngw\u0259\u0300t","im\u0259g fog","im\u0259g ichiib\u0254d","im\u0259g \u00e0d\u00f9mb\u0259\u0300\u014b","im\u0259g ichika","im\u0259g kud","im\u0259g t\u00e8si\u02bce","im\u0259g z\u00f2","im\u0259g krizmed"],SHORTDAY:["Aneg 1","Aneg 2","Aneg 3","Aneg 4","Aneg 5","Aneg 6","Aneg 7"],SHORTMONTH:["mbegtug","imeg \u00e0b\u00f9b\u00ec","imeg mb\u0259\u014bchubi","im\u0259g ngw\u0259\u0300t","im\u0259g fog","im\u0259g ichiib\u0254d","im\u0259g \u00e0d\u00f9mb\u0259\u0300\u014b","im\u0259g ichika","im\u0259g kud","im\u0259g t\u00e8si\u02bce","im\u0259g z\u00f2","im\u0259g krizmed"],STANDALONEMONTH:["im\u0259g mbegtug","imeg \u00e0b\u00f9b\u00ec","imeg mb\u0259\u014bchubi","im\u0259g ngw\u0259\u0300t","im\u0259g fog","im\u0259g ichiib\u0254d","im\u0259g \u00e0d\u00f9mb\u0259\u0300\u014b","im\u0259g ichika","im\u0259g kud","im\u0259g t\u00e8si\u02bce","im\u0259g z\u00f2","im\u0259g krizmed"],WEEKENDRANGE:[5,6],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"mgo-cm",localeID:"mgo_CM",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);