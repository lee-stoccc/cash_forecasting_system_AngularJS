"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["karoon","kooskoliny"],DAY:["Kotisap","Kotaai","Koaeng\u2019","Kosomok","Koang\u2019wan","Komuut","Kolo"],ERANAMES:["Amait kesich Jesu","Kokakesich Jesu"],ERAS:["AM","KO"],FIRSTDAYOFWEEK:0,MONTH:["Mulgul","Ng\u2019atyaato","Kiptaamo","Iwootkuut","Mamuut","Paagi","Ng\u2019eiyeet","Rooptui","Bureet","Epeeso","Kipsuunde ne taai","Kipsuunde nebo aeng\u2019"],SHORTDAY:["Kts","Kot","Koo","Kos","Koa","Kom","Kol"],SHORTMONTH:["Mul","Ngat","Taa","Iwo","Mam","Paa","Nge","Roo","Bur","Epe","Kpt","Kpa"],STANDALONEMONTH:["Mulgul","Ng\u2019atyaato","Kiptaamo","Iwootkuut","Mamuut","Paagi","Ng\u2019eiyeet","Rooptui","Bureet","Epeeso","Kipsuunde ne taai","Kipsuunde nebo aeng\u2019"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"kln",localeID:"kln",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);