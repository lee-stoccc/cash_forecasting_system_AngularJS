describe("prefixedCSS",function(){function d(k,j){var i=["Moz","Khtml","Webkit","O","ms"],f=["moz","khtml","webkit","o","ms"],h=document.createElement("div"),g=k.charAt(0).toUpperCase()+k.slice(1),e;if(!j){if(k in h.style){return k}for(e=i.length;e--;){if((i[e]+g) in h.style){return(i[e]+g)}}}else{if(k in j){return k}for(e=f.length;e--;){if((f[e]+g) in j){return(f[e]+g)}}}return false}function b(e){return e.replace(/([A-Z])/g,function(g,f){return"-"+f.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(e){return e.replace(/([a-z])-([a-z])/g,function(h,g,f){return g+f.toUpperCase()}).replace(/^-/,"")}function c(f){var e=d(a(f));if(e){it("results for "+f+" match the homebaked prefix finder",function(){expect(Modernizr.prefixedCSS(f)).to.be(b(e))})}else{it("results for "+f+" match the homebaked prefix finder",function(){expect(Modernizr.prefixedCSS(f)).to.be(false)})}}c("animationProperty");c("fontFeatureSettings");c("flexWrap");c("boxSizing");c("textShadow");c("resize");c("animation-property");c("font-feature-settings");c("flex-wrap");c("box-sizing");c("text-shadow")});