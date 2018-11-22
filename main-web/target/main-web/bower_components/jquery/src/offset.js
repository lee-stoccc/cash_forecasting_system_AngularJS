define(["./core","./core/access","./var/document","./var/documentElement","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(i,c,e,g,f,d,b,h){function a(j){return i.isWindow(j)?j:j.nodeType===9&&j.defaultView}i.offset={setOffset:function(l,v,p){var r,o,j,m,k,t,u,q=i.css(l,"position"),n=i(l),s={};if(q==="static"){l.style.position="relative"}k=n.offset();j=i.css(l,"top");t=i.css(l,"left");u=(q==="absolute"||q==="fixed")&&(j+t).indexOf("auto")>-1;if(u){r=n.position();m=r.top;o=r.left}else{m=parseFloat(j)||0;o=parseFloat(t)||0}if(i.isFunction(v)){v=v.call(l,p,i.extend({},k))}if(v.top!=null){s.top=(v.top-k.top)+m}if(v.left!=null){s.left=(v.left-k.left)+o}if("using" in v){v.using.call(l,s)}else{n.css(s)}}};i.fn.extend({offset:function(k){if(arguments.length){return k===undefined?this:this.each(function(p){i.offset.setOffset(this,k,p)})}var j,o,m,n,l=this[0];if(!l){return}if(!l.getClientRects().length){return{top:0,left:0}}m=l.getBoundingClientRect();if(m.width||m.height){n=l.ownerDocument;o=a(n);j=n.documentElement;return{top:m.top+o.pageYOffset-j.clientTop,left:m.left+o.pageXOffset-j.clientLeft}}return m},position:function(){if(!this[0]){return}var l,m,k=this[0],j={top:0,left:0};if(i.css(k,"position")==="fixed"){m=k.getBoundingClientRect()}else{l=this.offsetParent();m=this.offset();if(!i.nodeName(l[0],"html")){j=l.offset()}j={top:j.top+i.css(l[0],"borderTopWidth",true),left:j.left+i.css(l[0],"borderLeftWidth",true)}}return{top:m.top-j.top-i.css(k,"marginTop",true),left:m.left-j.left-i.css(k,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var j=this.offsetParent;while(j&&i.css(j,"position")==="static"){j=j.offsetParent}return j||g})}});i.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,k){var j="pageYOffset"===k;i.fn[l]=function(m){return c(this,function(n,q,p){var o=a(n);if(p===undefined){return o?o[k]:n[q]}if(o){o.scrollTo(!j?p:o.pageXOffset,j?p:o.pageYOffset)}else{n[q]=p}},l,m,arguments.length)}});i.each(["top","left"],function(j,k){i.cssHooks[k]=b(h.pixelPosition,function(m,l){if(l){l=d(m,k);return f.test(l)?i(m).position()[k]+"px":l}})});return i});