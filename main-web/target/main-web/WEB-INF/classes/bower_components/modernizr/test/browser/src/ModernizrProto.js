describe("ModernizrProto",function(){var d;var b;var a;var c;before(function(){define("package",[],function(){return{version:"v9999"}});c=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});c(["cleanup"],function(e){b=e})});beforeEach(function(e){a=[];define("tests",function(){return a});c(["ModernizrProto","tests"],function(g,f){d=g;a=f;e()})});afterEach(function(){c.undef("tests");c.undef("ModernizrProto")});it("should define a version",function(){expect(d._version).to.be.a("string")});it("should set a default config",function(){var e=d._config;expect(e.classPrefix).to.be.a("string");expect(e.enableClasses).to.be.a("boolean");expect(e.enableJSClass).to.be.a("boolean");expect(e.usePrefixes).to.be.a("boolean")});it("should define a working stub for `Modernizr.on`",function(e){d.on("fakeDetect",e)});it("should define `Modernizr.addTest` and have it pushed to the internal `tests` queue",function(){var f="fakeDetect";var h=function g(){};var e={opt:"opt"};d.addTest(f,h,e);expect(a).to.have.length(1);expect(a[0].name).to.be(f);expect(a[0].fn).to.be(h);expect(a[0].options).to.be(e)});it("should define `Modernizr.addAsyncTest` and have it pushed to the internal `tests` queue",function(){var f=function e(){};d.addAsyncTest(f);expect(a).to.have.length(1);expect(a[0].fn).to.be(f)});after(function(){b()})});