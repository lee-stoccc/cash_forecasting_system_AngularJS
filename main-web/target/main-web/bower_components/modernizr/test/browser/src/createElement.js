describe("createElement",function(){var b;var a;before(function(c){var d=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});d(["createElement","cleanup"],function(f,e){b=f;a=e;c()})});it("is a function",function(){expect(b).to.be.a("function")});it("creates an element",function(){var c=b("modernizr");expect(c.nodeName.toUpperCase()).to.be("MODERNIZR")});after(function(){a()})});