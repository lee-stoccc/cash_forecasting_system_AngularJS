$TemplateFactory.$inject=["$http","$templateCache","$injector"];function $TemplateFactory(c,a,b){this.fromConfig=function(d,f,e){return(isDefined(d.template)?this.fromString(d.template,f):isDefined(d.templateUrl)?this.fromUrl(d.templateUrl,f):isDefined(d.templateProvider)?this.fromProvider(d.templateProvider,f,e):null)};this.fromString=function(d,e){return isFunction(d)?d(e):d};this.fromUrl=function(d,e){if(isFunction(d)){d=d(e)}if(d==null){return null}else{return c.get(d,{cache:a,headers:{Accept:"text/html"}}).then(function(f){return f.data})}};this.fromProvider=function(f,e,d){return b.invoke(f,null,d||{params:e})}}angular.module("ui.router.util").service("$templateFactory",$TemplateFactory);