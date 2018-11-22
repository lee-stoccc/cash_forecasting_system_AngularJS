describe("prefixed autobind",function(){var b;var c=["r","msR","mozR","webkitR","oR"];_.forEach(c,function(d){b=b||(window[d+"equestAnimationFrame"]&&d+"equestAnimationFrame")});if(b){it('Modernizr.prefixed("requestAnimationFrame", window) returns a function',function(){expect(Modernizr.prefixed("requestAnimationFrame",window)).to.be.a("function")});it('Modernizr.prefixed("requestAnimationFrame", window, false) returns a string (the prop name)',function(){expect(Modernizr.prefixed("requestAnimationFrame",window,false)).to.be(b)})}if(document.body.webkitMatchesSelector||document.body.mozMatchesSelector){var a=Modernizr.prefixed("matchesSelector",HTMLElement.prototype,document.body);it('Modernizr.prefixed("matchesSelector", HTMLElement.prototype, document.body) returns a function',function(){expect(a).to.be.a("function")});it('Modernizr.prefixed("matchesSelector", HTMLElement.prototype, document.body) is scoped to the body',function(){expect(a("body")).to.be(true)})}if(window.webkitNotifications){it('Modernizr.prefixed("Notifications") returns an object',function(){expect(Modernizr.prefixed("Notifications",window)).to.be.an("object")})}if(!_.isUndefined(document.webkitIsFullScreen)){it('Modernizr.prefixed("isFullScreen") returns a boolean',function(){expect(Modernizr.prefixed("isFullScreen",document)).to.be.a("boolean")})}if(!_.isUndefined(document.mozFullScreen)){it('Modernizr.prefixed("isFullScreen") returns a boolean',function(){expect(Modernizr.prefixed("fullScreen",document)).to.be.a("boolean")})}if(document.body.style.WebkitAnimation){it('Modernizr.prefixed("animation", document.body.style) returns value of that, as a string',function(){expect(Modernizr.prefixed("animation",document.body.style)).to.be.a("string")});it('Modernizr.prefixed("animation", document.body.style, false) returns the name of the property: webkitAnimation',function(){expect(Modernizr.prefixed("animation",document.body.style,false)).to.equal("webkitAnimation")})}it('Modernizr.prefixed("doSomethingAmazing$#$", window) : Gobbledygook with prefixed(str,obj) returns false',function(){expect(Modernizr.prefixed("doSomethingAmazing$#$",window)).to.be(false)});it('Modernizr.prefixed("doSomethingAmazing$#$", window) : Gobbledygook with prefixed(str,obj, scope) returns false',function(){expect(Modernizr.prefixed("doSomethingAmazing$#$",window,document.body)).to.be(false)});it('Modernizr.prefixed("doSomethingAmazing$#$", window) : Gobbledygook with prefixed(str,obj, false) returns false',function(){expect(Modernizr.prefixed("doSomethingAmazing$#$",window,false)).to.be(false)})});