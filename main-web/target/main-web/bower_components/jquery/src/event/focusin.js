define(["../core","../data/var/dataPriv","./support","../event","./trigger"],function(c,a,b){if(!b.focusin){c.each({focus:"focusin",blur:"focusout"},function(f,d){var e=function(g){c.event.simulate(d,g.target,c.event.fix(g))};c.event.special[d]={setup:function(){var h=this.ownerDocument||this,g=a.access(h,d);if(!g){h.addEventListener(f,e,true)}a.access(h,d,(g||0)+1)},teardown:function(){var h=this.ownerDocument||this,g=a.access(h,d)-1;if(!g){h.removeEventListener(f,e,true);a.remove(h,d)}else{a.access(h,d,g)}}}})}return c});