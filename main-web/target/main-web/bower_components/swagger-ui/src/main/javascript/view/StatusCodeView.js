"use strict";SwaggerUi.Views.StatusCodeView=Backbone.View.extend({initialize:function(a){this.options=a||{};this.router=this.options.router},render:function(){var b,a;var c=this.router.api.models[this.model.responseModel];$(this.el).html(Handlebars.templates.status_code(this.model));if(this.router.api.models.hasOwnProperty(this.model.responseModel)){b={sampleJSON:JSON.stringify(SwaggerUi.partials.signature.createJSONSample(c),void 0,2),sampleXML:this.model.isXML?SwaggerUi.partials.signature.createXMLSample("",this.model.schema,this.router.api.models):false,isParam:false,signature:SwaggerUi.partials.signature.getModelSignature(this.model.responseModel,c,this.router.api.models),defaultRendering:this.model.defaultRendering}}else{b={signature:SwaggerUi.partials.signature.getPrimitiveSignature(this.model.schema)}}a=new SwaggerUi.Views.SignatureView({model:b,tagName:"div"});$(".model-signature",this.$el).append(a.render().el);return this}});