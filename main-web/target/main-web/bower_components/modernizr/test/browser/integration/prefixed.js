describe("prefixed()",function(){function d(k,j){var i=["Moz","Khtml","Webkit","O","ms"],f=["moz","khtml","webkit","o","ms"],h=document.createElement("div"),g=k.charAt(0).toUpperCase()+k.slice(1),e;if(!j){if(k in h.style){return k}for(e=i.length;e--;){if((i[e]+g) in h.style){return(i[e]+g)}}}else{if(k in j){return k}for(e=f.length;e--;){if((f[e]+g) in j){return(f[e]+g)}}}return false}function a(e){return e.replace(/([A-Z])/g,function(g,f){return"-"+f.toLowerCase()}).replace(/^ms-/,"-ms-")}var b=["transition","backgroundSize","boxSizing","borderImage","borderRadius","boxShadow","columnCount"];var c=[{prop:"requestAnimationFrame",obj:window},{prop:"querySelectorAll",obj:document},{prop:"matchesSelector",obj:document.createElement("div")}];_.forEach(b,function(e){it("results for "+e+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(e)).to.equal(d(e))})});_.forEach(b,function(e){it("results for "+e+" match the homebaked prefix finder",function(){expect(Modernizr.prefixed(a(e))).to.equal(d(e))})});_.forEach(c,function(e){it("results for "+e.prop+" match the homebaked prefix finder",function(){var g=Modernizr.prefixed(e.prop,e.obj,false);var f=d(e.prop,e.obj);expect(g).to[(_.isString(f)?"contain":"equal")](f)})})});