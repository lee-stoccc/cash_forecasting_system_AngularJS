define(["../../core"],function(a){return function(e,c,f){var b=[],d=f!==undefined;while((e=e[c])&&e.nodeType!==9){if(e.nodeType===1){if(d&&a(e).is(f)){break}b.push(e)}}return b}});