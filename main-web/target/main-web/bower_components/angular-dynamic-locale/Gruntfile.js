(function(){var a="/**\n * Angular Dynamic Locale - <%= pkg.version %>\n * https://github.com/lgalfaso/angular-dynamic-locale\n * License: MIT\n */\n";module.exports=function(b){b.loadNpmTasks("grunt-contrib-clean");b.loadNpmTasks("grunt-contrib-copy");b.loadNpmTasks("grunt-contrib-jshint");b.loadNpmTasks("grunt-jscs");b.loadNpmTasks("grunt-karma");b.loadNpmTasks("grunt-bump");b.loadNpmTasks("grunt-npm");b.loadNpmTasks("grunt-contrib-uglify");b.loadNpmTasks("grunt-contrib-concat");b.initConfig({pkg:b.file.readJSON("package.json"),jshint:{all:["Gruntfile.js","src/*.js","test/*.js"]},jscs:{src:["src/**/*.js","test/**/*.js"],options:{config:".jscs.json"}},karma:{unit:{configFile:"karma.conf.js"},"unit.min":{configFile:"karma.min.conf.js"},autotest:{configFile:"karma.conf.js",autoWatch:true,singleRun:false},travis:{configFile:"karma.conf.js",reporters:"dots",browsers:["PhantomJS"]}},concat:{options:{banner:a,},dist:{src:["src/tmhDynamicLocale.js"],dest:"dist/tmhDynamicLocale.js",},},uglify:{all:{files:{"tmhDynamicLocale.min.js":["src/*.js"],"dist/tmhDynamicLocale.min.js":["src/*.js"]},options:{banner:a,sourceMap:true}}},bump:{options:{files:["package.json","bower.json"],commitFiles:["package.json","bower.json"],tagName:"%VERSION%"}},"npm-publish":{options:{requires:["jshint","karma:unit"],abortIfDirty:true}}});b.registerTask("release",["jshint","jscs","karma:unit","concat","uglify:all","karma:unit.min","publish"])}}());