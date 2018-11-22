if(typeof define!=="function"){var projectRoot=require("find-parent-dir").sync(__dirname,"package.json");var filesRoot=projectRoot;if(process.env.APP_DIR_FOR_CODE_COVERAGE){filesRoot=filesRoot+process.env.APP_DIR_FOR_CODE_COVERAGE}var requirejs=require("requirejs");var pkg=require(projectRoot+"/package");var expect=require("expect.js");var domain="modernizr.com";var _=require("lodash");var def=function(){return requirejs.define.apply(this,arguments)}}else{var domain=location.host;var projectRoot="..";var filesRoot="..";var pkg={};var _=window.lodash;var def=function(){return define.apply(this,arguments)}}var generateBanner;var cleanup;describe("generate-banner",function(){before(function(a){var b=requirejs.config({context:Math.random().toString().slice(2),paths:{lib:projectRoot+"/test/mocks/lib",generateBanner:filesRoot+"/lib/generate-banner",cleanup:projectRoot+"/test/cleanup"}});def("package",[],function(){return pkg});def("lodash",[],function(){return _});b(["generateBanner","package","cleanup"],function(e,d,c){generateBanner=e;cleanup=c;pkg=d;a()})});it("should produce a compact banner when requested",function(){var a=generateBanner("compact");var b="/*! "+pkg.name+" "+pkg.version+" (Custom Build) | "+pkg.license+" *";expect(a).to.contain(b)});it("should produce a full banner when requested",function(){var a=generateBanner("full");var b="Modernizr tests which native CSS3 and HTML5 features are available";expect(a).to.contain(b)});it("should include a build url",function(){var a=generateBanner();var b=" * http://"+domain+"/download/?--dontmin";expect(a).to.contain(b)});it('should only accept "full" and "compact" as type arguments',function(){expect(function(){generateBanner("sup")}).to.throwError('banners() must be passed "compact" or "full" as an argument.')});after(function(){cleanup()})});