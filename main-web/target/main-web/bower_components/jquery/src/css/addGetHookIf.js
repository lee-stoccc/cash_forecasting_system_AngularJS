define(function(){function a(b,c){return{get:function(){if(b()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}return a});