+function(d){var e=function(g,f){this.$element=d(g);this.options=d.extend({},e.DEFAULTS,f);this.$trigger=d('[data-toggle="collapse"][href="#'+g.id+'"],[data-toggle="collapse"][data-target="#'+g.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}if(this.options.toggle){this.toggle()}};e.VERSION="3.3.7";e.TRANSITION_DURATION=350;e.DEFAULTS={toggle:true};e.prototype.dimension=function(){var f=this.$element.hasClass("width");return f?"width":"height"};e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var h;var j=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(j&&j.length){h=j.data("bs.collapse");if(h&&h.transitioning){return}}var g=d.Event("show.bs.collapse");this.$element.trigger(g);if(g.isDefaultPrevented()){return}if(j&&j.length){b.call(j,"hide");h||j.data("bs.collapse",null)}var k=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",true);this.$trigger.removeClass("collapsed").attr("aria-expanded",true);this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!d.support.transition){return f.call(this)}var i=d.camelCase(["scroll",k].join("-"));this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[k](this.$element[0][i])};e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var g=d.Event("hide.bs.collapse");this.$element.trigger(g);if(g.isDefaultPrevented()){return}var h=this.dimension();this.$element[h](this.$element[h]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);this.$trigger.addClass("collapsed").attr("aria-expanded",false);this.transitioning=1;var f=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!d.support.transition){return f.call(this)}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)};e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);this.addAriaAndCollapsedClass(c(f),f)},this)).end()};e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");g.attr("aria-expanded",h);f.toggleClass("collapsed",!h).attr("aria-expanded",h)};function c(f){var g;var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");return d(h)}function b(f){return this.each(function(){var i=d(this);var h=i.data("bs.collapse");var g=d.extend({},e.DEFAULTS,i.data(),typeof f=="object"&&f);if(!h&&g.toggle&&/show|hide/.test(f)){g.toggle=false}if(!h){i.data("bs.collapse",(h=new e(this,g)))}if(typeof f=="string"){h[f]()}})}var a=d.fn.collapse;d.fn.collapse=b;d.fn.collapse.Constructor=e;d.fn.collapse.noConflict=function(){d.fn.collapse=a;return this};d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(j){var i=d(this);if(!i.attr("data-target")){j.preventDefault()}var f=c(i);var h=f.data("bs.collapse");var g=h?"toggle":i.data();b.call(f,g)})}(jQuery);