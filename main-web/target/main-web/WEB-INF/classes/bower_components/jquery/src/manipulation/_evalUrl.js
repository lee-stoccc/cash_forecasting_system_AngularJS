define(["../ajax"],function(a){a._evalUrl=function(b){return a.ajax({url:b,type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true})};return a._evalUrl});