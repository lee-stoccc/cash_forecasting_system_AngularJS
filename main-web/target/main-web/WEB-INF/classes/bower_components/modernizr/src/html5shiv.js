define(["isSVG"],function(b){var a;if(!b){(function(m,o){var i="3.7.3";var f=m.html5||{};var j=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var t;var k="_html5shiv";var c=0;var q={};var g;(function(){try{var w=o.createElement("a");w.innerHTML="<xyz></xyz>";t=("hidden" in w);g=w.childNodes.length==1||(function(){(o.createElement)("a");var y=o.createDocumentFragment();return(typeof y.cloneNode=="undefined"||typeof y.createDocumentFragment=="undefined"||typeof y.createElement=="undefined")}())}catch(x){t=true;g=true}}());function h(w,y){var z=w.createElement("p"),x=w.getElementsByTagName("head")[0]||w.documentElement;z.innerHTML="x<style>"+y+"</style>";return x.insertBefore(z.lastChild,x.firstChild)}function n(){var w=l.elements;return typeof w=="string"?w.split(" "):w}function r(w,x){var y=l.elements;if(typeof y!="string"){y=y.join(" ")}if(typeof w!="string"){w=w.join(" ")}l.elements=y+" "+w;d(x)}function s(w){var x=q[w[k]];if(!x){x={};c++;w[k]=c;q[c]=x}return x}function p(z,w,y){if(!w){w=o}if(g){return w.createElement(z)}if(!y){y=s(w)}var x;if(y.cache[z]){x=y.cache[z].cloneNode()}else{if(e.test(z)){x=(y.cache[z]=y.createElem(z)).cloneNode()}else{x=y.createElem(z)}}return x.canHaveChildren&&!j.test(z)&&!x.tagUrn?y.frag.appendChild(x):x}function u(y,A){if(!y){y=o}if(g){return y.createDocumentFragment()}A=A||s(y);var B=A.frag.cloneNode(),z=0,x=n(),w=x.length;for(;z<w;z++){B.createElement(x[z])}return B}function v(w,x){if(!x.cache){x.cache={};x.createElem=w.createElement;x.createFrag=w.createDocumentFragment;x.frag=x.createFrag()}w.createElement=function(y){if(!l.shivMethods){return x.createElem(y)}return p(y,w,x)};w.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(y){x.createElem(y);x.frag.createElement(y);return'c("'+y+'")'})+");return n}")(l,x.frag)}function d(w){if(!w){w=o}var x=s(w);if(l.shivCSS&&!t&&!x.hasCSS){x.hasCSS=!!h(w,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")}if(!g){v(w,x)}return w}var l={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:i,shivCSS:(f.shivCSS!==false),supportsUnknownElements:g,shivMethods:(f.shivMethods!==false),type:"default",shivDocument:d,createElement:p,createDocumentFragment:u,addElements:r};m.html5=l;d(o);if(typeof module=="object"&&module.exports){module.exports=l}}(typeof window!=="undefined"?window:this,document))}return a});