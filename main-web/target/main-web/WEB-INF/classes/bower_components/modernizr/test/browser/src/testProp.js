describe("testProp",function(){var f={};var e;var d;var b;var a;var c;before(function(g){c=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}});define("ModernizrProto",[],function(){return f});define("package",[],function(){return{}});c(["cleanup","sinon"],function(h,i){b=h;a=i;g()})});beforeEach(function(g){d=a.spy();define("testProps",function(){return d});c(["testProp"],function(h){e=h;g()})});it("is a curried version of `testProps`",function(){e("flexAlign","end",true);expect(d.calledOnce).to.be(true);expect(d.calledWithExactly(["flexAlign"],undefined,"end",true)).to.be(true)});it("is added to ModernizrProto",function(){expect(e).to.equal(f.testProp)});after(function(){b()})});