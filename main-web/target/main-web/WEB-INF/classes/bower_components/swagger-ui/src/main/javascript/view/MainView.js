"use strict";SwaggerUi.Views.MainView=Backbone.View.extend({apisSorter:{alpha:function(d,c){return d.name.localeCompare(c.name)}},operationsSorters:{alpha:function(d,c){return d.path.localeCompare(c.path)},method:function(d,c){return d.method.localeCompare(c.method)}},initialize:function(d){var a,b,c,f;d=d||{};this.router=d.router;if(d.swaggerOptions.apisSorter){a=d.swaggerOptions.apisSorter;if(_.isFunction(a)){b=a}else{b=this.apisSorter[a]}if(_.isFunction(b)){this.model.apisArray.sort(b)}}if(d.swaggerOptions.operationsSorter){a=d.swaggerOptions.operationsSorter;if(_.isFunction(a)){b=a}else{b=this.operationsSorters[a]}if(_.isFunction(b)){for(c in this.model.apisArray){this.model.apisArray[c].operationsArray.sort(b)}}}this.model.auths=[];for(c in this.model.securityDefinitions){f=this.model.securityDefinitions[c];this.model.auths.push({name:c,type:f.type,value:f})}if("validatorUrl" in d.swaggerOptions){this.model.validatorUrl=d.swaggerOptions.validatorUrl}else{if(this.model.url.indexOf("localhost")>0||this.model.url.indexOf("127.0.0.1")>0){this.model.validatorUrl=null}else{if(window.location.protocol==="https:"){this.model.validatorUrl="https://online.swagger.io/validator"}else{this.model.validatorUrl="http://online.swagger.io/validator"}}}var e;for(e in this.model.definitions){if(!this.model.definitions[e].type){this.model.definitions[e].type="object"}}},render:function(){$(this.el).html(Handlebars.templates.main(this.model));this.info=this.$(".info")[0];if(this.info){this.info.addEventListener("click",this.onLinkClick,true)}this.model.securityDefinitions=this.model.securityDefinitions||{};var f={};var a=0;for(var b=0;b<this.model.apisArray.length;b++){var c=this.model.apisArray[b];var g=c.name;while(typeof f[g]!=="undefined"){g=g+"_"+a;a+=1}c.id=g;f[g]=c;this.addResource(c,this.model.auths)}$(".propWrap").hover(function e(){$(".optionsWrapper",$(this)).show()},function d(){$(".optionsWrapper",$(this)).hide()});return this},addResource:function(c,b){c.id=c.id.replace(/\s/g,"_");c.definitions=this.model.definitions;var a=new SwaggerUi.Views.ResourceView({model:c,router:this.router,tagName:"li",id:"resource_"+c.id,className:"resource",auths:b,swaggerOptions:this.options.swaggerOptions});$("#resources",this.el).append(a.render().el)},clear:function(){$(this.el).html("")},onLinkClick:function(b){var a=b.target;if(a.tagName==="A"&&a.href&&!a.target){b.preventDefault();window.open(a.href,"_blank")}}});