describe("getBody",function(){var a;var b;before(function(c){var d=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});d(["getBody","cleanup"],function(f,e){a=f;b=e;c()})});it("returns document.body",function(){var c=a();expect(c).to.equal(document.body);expect(c.fake).to.be(undefined)});it("returns a fake when document.body does not exist",function(){var e=document.body;var d=e.parentNode;d.removeChild(e);var c=a();d.appendChild(e);expect(c).to.not.equal(document.body);expect(c.fake).to.be(true)});after(function(){b()})});