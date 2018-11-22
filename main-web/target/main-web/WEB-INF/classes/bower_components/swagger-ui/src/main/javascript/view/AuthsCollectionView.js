"use strict";SwaggerUi.Views.AuthsCollectionView=Backbone.View.extend({initialize:function(a){this.options=a||{};this.options.data=this.options.data||{};this.router=this.options.router;this.collection=new SwaggerUi.Collections.AuthsCollection(a.data);this.$innerEl=$("<div>");this.authViews=[]},render:function(){this.collection.each(function(a){this.renderOneAuth(a)},this);this.$el.html(this.$innerEl.html()?this.$innerEl:"");return this},renderOneAuth:function(b){var a,e,d;var c=b.get("type");if(c==="apiKey"){d="ApiKeyAuthView"}else{if(c==="basic"&&this.$innerEl.find(".basic_auth_container").length===0){d="BasicAuthView"}else{if(c==="oauth2"){d="Oauth2View"}}}if(d){e=new SwaggerUi.Views[d]({model:b,router:this.router});a=e.render().el;this.authViews.push(e)}this.$innerEl.append(a)},highlightInvalid:function(){this.authViews.forEach(function(a){a.highlightInvalid()},this)}});