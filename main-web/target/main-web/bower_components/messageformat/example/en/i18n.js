(function(d){var f={en:function(m,h){var k=String(m).split("."),g=!k[1],l=Number(k[0])==m,j=l&&k[0].slice(-1),i=l&&k[0].slice(-2);if(h){return(j==1&&i!=11)?"one":(j==2&&i!=12)?"two":(j==3&&i!=13)?"few":"other"}return(m==1&&g)?"one":"other"}};var b={};var e=function(g,h){if(isNaN(g)){throw new Error("'"+g+"' isn't a number.")}return g-(h||0)};var c=function(j,k,l,i,h){if({}.hasOwnProperty.call(i,j)){return i[j]()}if(k){j-=k}var g=l(j,h);if(g in i){return i[g]()}return i.other()};var a=function(h,g){if({}.hasOwnProperty.call(g,h)){return g[h]()}return g.other()};d.i18n={colors:{red:function(g){return"red"},blue:function(g){return"blue"},green:function(g){return"green"}},"sub/folder/plural":{test:function(g){return"Your "+c(g.NUM,0,f.en,{one:function(){return"message goes"},other:function(){return e(g.NUM)+" messages go"}})+" here."}}}})(this);