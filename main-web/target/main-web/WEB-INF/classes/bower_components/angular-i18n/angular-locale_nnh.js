"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["mba\u02bc\u00e1mba\u02bc","ncw\u00f2nz\u00e9m"],DAY:["ly\u025b\u02bc\u025b\u0301 s\u1e85\u00ed\u014bt\u00e8","mvf\u00f2 ly\u025b\u030c\u02bc","mb\u0254\u0301\u0254nt\u00e8 mvf\u00f2 ly\u025b\u030c\u02bc","ts\u00e8ts\u025b\u0300\u025b ly\u025b\u030c\u02bc","mb\u0254\u0301\u0254nt\u00e8 tsets\u025b\u0300\u025b ly\u025b\u030c\u02bc","mvf\u00f2 m\u00e0ga ly\u025b\u030c\u02bc","m\u00e0ga ly\u025b\u030c\u02bc"],ERANAMES:["m\u00e9 zy\u00e9 Y\u011bs\u00f4","m\u00e9 g\u00ffo \u0144zy\u00e9 Y\u011bs\u00f4"],ERAS:["m.z.Y.","m.g.n.Y."],FIRSTDAYOFWEEK:0,MONTH:["sa\u014b tsets\u025b\u0300\u025b l\u00f9m","sa\u014b k\u00e0g ngw\u00f3\u014b","sa\u014b lepy\u00e8 sh\u00fam","sa\u014b c\u00ff\u00f3","sa\u014b ts\u025b\u0300\u025b c\u00ff\u00f3","sa\u014b nj\u00ffol\u00e1\u02bc","sa\u014b ty\u025b\u0300b ty\u025b\u0300b mb\u0289\u0300","sa\u014b mb\u0289\u0300\u014b","sa\u014b ngw\u0254\u0300\u02bc mb\u00ff\u025b","sa\u014b t\u00e0\u014ba tsets\u00e1\u02bc","sa\u014b mejwo\u014b\u00f3","sa\u014b l\u00f9m"],SHORTDAY:["ly\u025b\u02bc\u025b\u0301 s\u1e85\u00ed\u014bt\u00e8","mvf\u00f2 ly\u025b\u030c\u02bc","mb\u0254\u0301\u0254nt\u00e8 mvf\u00f2 ly\u025b\u030c\u02bc","ts\u00e8ts\u025b\u0300\u025b ly\u025b\u030c\u02bc","mb\u0254\u0301\u0254nt\u00e8 tsets\u025b\u0300\u025b ly\u025b\u030c\u02bc","mvf\u00f2 m\u00e0ga ly\u025b\u030c\u02bc","m\u00e0ga ly\u025b\u030c\u02bc"],SHORTMONTH:["sa\u014b tsets\u025b\u0300\u025b l\u00f9m","sa\u014b k\u00e0g ngw\u00f3\u014b","sa\u014b lepy\u00e8 sh\u00fam","sa\u014b c\u00ff\u00f3","sa\u014b ts\u025b\u0300\u025b c\u00ff\u00f3","sa\u014b nj\u00ffol\u00e1\u02bc","sa\u014b ty\u025b\u0300b ty\u025b\u0300b mb\u0289\u0300","sa\u014b mb\u0289\u0300\u014b","sa\u014b ngw\u0254\u0300\u02bc mb\u00ff\u025b","sa\u014b t\u00e0\u014ba tsets\u00e1\u02bc","sa\u014b mejwo\u014b\u00f3","sa\u014b l\u00f9m"],STANDALONEMONTH:["sa\u014b tsets\u025b\u0300\u025b l\u00f9m","sa\u014b k\u00e0g ngw\u00f3\u014b","sa\u014b lepy\u00e8 sh\u00fam","sa\u014b c\u00ff\u00f3","sa\u014b ts\u025b\u0300\u025b c\u00ff\u00f3","sa\u014b nj\u00ffol\u00e1\u02bc","sa\u014b ty\u025b\u0300b ty\u025b\u0300b mb\u0289\u0300","sa\u014b mb\u0289\u0300\u014b","sa\u014b ngw\u0254\u0300\u02bc mb\u00ff\u025b","sa\u014b t\u00e0\u014ba tsets\u00e1\u02bc","sa\u014b mejwo\u014b\u00f3","sa\u014b l\u00f9m"],WEEKENDRANGE:[5,6],fullDate:"EEEE , 'ly\u025b'\u030c\u02bc d 'na' MMMM, y",longDate:"'ly\u025b'\u030c\u02bc d 'na' MMMM, y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"dd/MM/yy HH:mm",shortDate:"dd/MM/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4\u00a0",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"nnh",localeID:"nnh",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);