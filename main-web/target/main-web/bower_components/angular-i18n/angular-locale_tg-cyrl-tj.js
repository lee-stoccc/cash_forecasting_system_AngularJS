"use strict";angular.module("ngLocale",[],["$provide",function(a){var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};function c(f){f=f+"";var e=f.indexOf(".");return(e==-1)?0:f.length-e-1}function b(j,e){var g=e;if(undefined===g){g=Math.min(c(j),3)}var i=Math.pow(10,g);var h=((j*i)|0)%i;return{v:g,f:h}}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["\u043f\u0435. \u0447\u043e.","\u043f\u0430. \u0447\u043e."],DAY:["\u042f\u043a\u0448\u0430\u043d\u0431\u0435","\u0414\u0443\u0448\u0430\u043d\u0431\u0435","\u0421\u0435\u0448\u0430\u043d\u0431\u0435","\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0435","\u041f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435","\u04b6\u0443\u043c\u044a\u0430","\u0428\u0430\u043d\u0431\u0435"],MONTH:["\u042f\u043d\u0432\u0430\u0440","\u0424\u0435\u0432\u0440\u0430\u043b","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b","\u041c\u0430\u0439","\u0418\u044e\u043d","\u0418\u044e\u043b","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440","\u041e\u043a\u0442\u044f\u0431\u0440","\u041d\u043e\u044f\u0431\u0440","\u0414\u0435\u043a\u0430\u0431\u0440"],SHORTDAY:["\u042f\u0448\u0431","\u0414\u0448\u0431","\u0421\u0448\u0431","\u0427\u0448\u0431","\u041f\u0448\u0431","\u04b6\u043c\u044a","\u0428\u043d\u0431"],SHORTMONTH:["\u042f\u043d\u0432","\u0424\u0435\u0432","\u041c\u0430\u0440","\u0410\u043f\u0440","\u041c\u0430\u0439","\u0418\u044e\u043d","\u0418\u044e\u043b","\u0410\u0432\u0433","\u0421\u0435\u043d","\u041e\u043a\u0442","\u041d\u043e\u044f","\u0414\u0435\u043a"],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"yy/MM/dd HH:mm",shortDate:"yy/MM/dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"Som",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"\u00a4\u00a0-",negSuf:"",posPre:"\u00a4\u00a0",posSuf:""}]},id:"tg-cyrl-tj",pluralCat:function(h,f){var g=h|0;var e=b(h,f);if(g==1&&e.v==0){return d.ONE}return d.OTHER}})}]);