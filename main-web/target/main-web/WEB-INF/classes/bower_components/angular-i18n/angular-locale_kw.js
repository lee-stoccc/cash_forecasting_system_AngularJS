"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.m.","p.m."],DAY:["dy Sul","dy Lun","dy Meurth","dy Merher","dy Yow","dy Gwener","dy Sadorn"],ERANAMES:["RC","AD"],ERAS:["RC","AD"],FIRSTDAYOFWEEK:0,MONTH:["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu"],SHORTDAY:["Sul","Lun","Mth","Mhr","Yow","Gwe","Sad"],SHORTMONTH:["Gen","Hwe","Meu","Ebr","Me","Met","Gor","Est","Gwn","Hed","Du","Kev"],STANDALONEMONTH:["mis Genver","mis Hwevrer","mis Meurth","mis Ebrel","mis Me","mis Metheven","mis Gortheren","mis Est","mis Gwynngala","mis Hedra","mis Du","mis Kevardhu"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"dd/MM/y HH:mm",shortDate:"dd/MM/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"\u00a3",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"kw",localeID:"kw",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);