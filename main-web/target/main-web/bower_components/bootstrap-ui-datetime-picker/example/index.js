var app=angular.module("app",["ui.bootstrap","ui.bootstrap.datetimepicker"]);app.controller("MyController",["$scope",function(b){var c=this;this.picker1={date:new Date("2015-03-01T00:00:00Z"),datepickerOptions:{showWeeks:false,startingDay:1,dateDisabled:function(d){return(d.mode==="day"&&(new Date().toDateString()==d.date.toDateString()))}}};this.picker2={date:new Date("2015-03-01T12:30:00Z"),timepickerOptions:{readonlyInput:false,showMeridian:false}};this.picker3={date:new Date()};this.picker4={date:new Date(),datepickerOptions:{maxDate:null}};this.picker5={date:new Date(),datepickerOptions:{minDate:null}};this.picker5.date.setDate(this.picker5.date.getDate()+10);this.picker6={date:new Date()};this.picker7={date:new Date()};this.picker8={date:new Date(),datepickerOptions:{mode:"year",minMode:"year",maxMode:"year"}};this.picker9={date:null};this.picker10={date:new Date("2016-03-01T09:00:00Z"),timepickerOptions:{max:null}};this.picker11={date:new Date("2016-03-01T10:00:00Z"),timepickerOptions:{min:null}};this.picker12={date:new Date(),buttonBar:{show:true,now:{show:true,text:"Now!"},today:{show:true,text:"Today!"},clear:{show:false,text:"Wipe"},date:{show:true,text:"Date"},time:{show:true,text:"Time"},close:{show:true,text:"Shut"}}};this.picker13={date:new Date(),closed:function(d){c.closedArgs=d}};this.picker14={date:new Date().toISOString()};this.openCalendar=function(f,d){c[d].open=true};var a=b.$watch(function(){return[c.picker4,c.picker5,c.picker10,c.picker11]},function(){c.picker4.datepickerOptions.maxDate=c.picker5.date;c.picker5.datepickerOptions.minDate=c.picker4.date;if(c.picker4.date&&c.picker5.date){var d=c.picker4.date.getTime()-c.picker5.date.getTime();c.dayRange=Math.round(Math.abs(d/(1000*60*60*24)))}else{c.dayRange="n/a"}c.picker10.timepickerOptions.max=c.picker11.date;c.picker11.timepickerOptions.min=c.picker10.date},true);b.$on("$destroy",function(){a()})}]);