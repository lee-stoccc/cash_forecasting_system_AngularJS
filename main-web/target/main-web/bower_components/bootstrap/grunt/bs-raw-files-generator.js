/*!
 * Bootstrap Grunt task for generating raw-files.min.js for the Customizer
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";var fs=require("fs");var btoa=require("btoa");var glob=require("glob");function getFiles(c){var d={};var b=c==="less";var a=b?"/**/*":"/*";glob.sync(c+a).filter(function(e){return c==="fonts"?true:new RegExp("\\."+c+"$").test(e)}).forEach(function(f){var e=f.replace(/^[^/]+\//,"");d[e]=c==="fonts"?btoa(fs.readFileSync(f)):fs.readFileSync(f,"utf8")});return"var __"+c+" = "+JSON.stringify(d)+"\n"}module.exports=function generateRawFilesJs(f,a){if(!a){a=""}var e=["js","less","fonts"];var d=a+e.map(getFiles).reduce(function(h,g){return h+g},"");var b="docs/assets/js/raw-files.min.js";try{fs.writeFileSync(b,d)}catch(c){f.fail.warn(c)}f.log.writeln("File "+b.cyan+" created.")};