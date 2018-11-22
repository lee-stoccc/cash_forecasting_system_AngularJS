define(["./core","./var/document","./var/documentElement","./var/hasOwn","./var/indexOf"],function(n,i,l,g,k){var j,h,b=n.expando.split("").sort(c).join("")===n.expando,f=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.oMatchesSelector||l.msMatchesSelector,d=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,e=function(p,o){if(o){if(p==="\0"){return"\uFFFD"}return p.slice(0,-1)+"\\"+p.charCodeAt(p.length-1).toString(16)+" "}return"\\"+p};function c(p,o){if(p===o){j=true;return 0}var q=!p.compareDocumentPosition-!o.compareDocumentPosition;if(q){return q}q=(p.ownerDocument||p)===(o.ownerDocument||o)?p.compareDocumentPosition(o):1;if(q&1){if(p===i||p.ownerDocument===i&&n.contains(i,p)){return -1}if(o===i||o.ownerDocument===i&&n.contains(i,o)){return 1}return h?(k.call(h,p)-k.call(h,o)):0}return q&4?-1:1}function a(q){var r,s=[],o=0,p=0;j=false;h=!b&&q.slice(0);q.sort(c);if(j){while((r=q[p++])){if(r===q[p]){o=s.push(p)}}while(o--){q.splice(s[o],1)}}h=null;return q}function m(o){return(o+"").replace(d,e)}n.extend({uniqueSort:a,unique:a,escapeSelector:m,find:function(o,t,s,q){var u,p,r=0;s=s||[];t=t||i;if(!o||typeof o!=="string"){return s}if((p=t.nodeType)!==1&&p!==9){return[]}if(q){while((u=q[r++])){if(n.find.matchesSelector(u,o)){s.push(u)}}}else{n.merge(s,t.querySelectorAll(o))}return s},text:function(s){var r,p="",q=0,o=s.nodeType;if(!o){while((r=s[q++])){p+=n.text(r)}}else{if(o===1||o===9||o===11){return s.textContent}else{if(o===3||o===4){return s.nodeValue}}}return p},contains:function(p,o){var r=p.nodeType===9?p.documentElement:p,q=o&&o.parentNode;return p===q||!!(q&&q.nodeType===1&&r.contains(q))},isXMLDoc:function(o){var p=o&&(o.ownerDocument||o).documentElement;return p?p.nodeName!=="HTML":false},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}});n.extend(n.find,{matches:function(p,o){return n.find(p,null,null,o)},matchesSelector:function(o,p){return f.call(o,p)},attr:function(q,o){var p=n.expr.attrHandle[o.toLowerCase()],r=p&&g.call(n.expr.attrHandle,o.toLowerCase())?p(q,o,n.isXMLDoc(q)):undefined;return r!==undefined?r:q.getAttribute(o)}})});