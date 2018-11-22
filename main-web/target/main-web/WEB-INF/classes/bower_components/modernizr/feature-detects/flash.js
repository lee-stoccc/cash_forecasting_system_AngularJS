/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(e,d,b,a,c,f){e.addAsyncTest(function(){var h=function(q){if(!b.contains(q)){b.appendChild(q)}};var l=function(q){if(q.fake&&q.parentNode){q.parentNode.removeChild(q)}};var i=function(q,s){var r=!!q;if(r){r=new Boolean(r);r.blocked=(q==="blocked")}a("flash",function(){return r});if(s&&m.contains(s)){while(s.parentNode!==m){s=s.parentNode}m.removeChild(s)}};var g;var p;try{p="ActiveXObject" in window&&"Pan" in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}g=!(("plugins" in navigator&&"Shockwave Flash" in navigator.plugins)||p);if(g||f){i(false)}else{var n=d("embed");var m=c();var k;var j;n.type="application/x-shockwave-flash";m.appendChild(n);if(!("Pan" in n)&&!p){h(m);i("blocked",n);l(m);return}k=function(){h(m);if(!b.contains(m)){m=document.body||m;n=d("embed");n.type="application/x-shockwave-flash";m.appendChild(n);return setTimeout(k,1000)}if(!b.contains(n)){i("blocked")}else{j=n.style.cssText;if(j!==""){i("blocked",n)}else{i(true,n)}}l(m)};setTimeout(k,10)}})});