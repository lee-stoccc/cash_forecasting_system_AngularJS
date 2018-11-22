describe("testPropsAll",function(){var g={_config:{}};var f={_q:[]};var e;var b;var d;var a;var c;before(function(h){c=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}});define("ModernizrProto",[],function(){return g});define("Modernizr",[],function(){return f});define("package",[],function(){return{}});c(["testDOMProps","testProps","cleanup","sinon"],function(k,j,i,l){b=l.spy(k);d=l.spy(j);a=i;h()})});beforeEach(function(h){c.undef("testDOMProps");c.undef("testProps");b.reset();d.reset();define("testDOMProps",function(){return b});define("testProps",function(){return d});c(["testPropsAll"],function(i){e=i;expect(b.callCount).to.be(0);expect(d.callCount).to.be(0);h()})});it("`testProps` is called if `prefixed` is a string",function(){e("display","pfx",undefined,"block");expect(d.callCount).to.be(1)});it("`testProps` is called if `prefixed` is undefined",function(){e("display",undefined,undefined,"block");expect(d.callCount).to.be(1)});it("`testDOMProps` is called if `prefixed` is anything else",function(){e("display",[],undefined,"block");expect(b.callCount).to.be(1)});it("is added to ModernizrProto as `testAllProps`",function(){expect(e).to.equal(g.testAllProps)});afterEach(function(){c.undef("testPropsAll");c.undef("testDOMProps");c.undef("testProps")});after(function(){a()})});