describe("is",function(){var a;var b;before(function(c){var d=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});d(["is","cleanup"],function(e,f){b=e;a=f;c()})});it("is a function",function(){expect(b).to.be.a("function")});it("recognizes all types",function(){var f=b(undefined,"undefined");var e=b(function(){},"function");var d=b(true,"boolean");var c=b(null,"object");var g=b("1","string");expect(f).to.be(true);expect(e).to.be(true);expect(d).to.be(true);expect(c).to.be(true);expect(g).to.be(true)});after(function(){a()})});