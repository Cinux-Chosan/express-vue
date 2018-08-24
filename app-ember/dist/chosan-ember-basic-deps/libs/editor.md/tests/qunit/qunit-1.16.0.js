(function(t){var e,n,s,r={},o=(b(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,u=t.Date,l=u.now||function(){return(new u).getTime()},c=!1,d=!1,h=t.setTimeout,p=t.clearTimeout,f={document:void 0!==t.document,setTimeout:void 0!==t.setTimeout,sessionStorage:function(){var t="qunit-test-string"
try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}}()},m=function(t){var e,n,s=t.toString()
return"[object"===s.substring(0,7)?(e=t.name?t.name.toString():"Error",n=t.message?t.message.toString():"",e&&n?e+": "+n:e||(n||"Error")):s},g=function(t){var n,s,r=e.is("array",t)?[]:{}
for(n in t)a.call(t,n)&&(s=t[n],r[n]=s===Object(s)?g(s):s)
return r}
function v(t,e){var n,s,r
if(e=void 0===e?4:e,t.stacktrace)return t.stacktrace.split("\n")[e+3]
if(t.stack){if(n=t.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),o){for(s=[],r=e;r<n.length&&-1===n[r].indexOf(o);r++)s.push(n[r])
if(s.length)return s.join("\n")}return n[e]}if(t.sourceURL){if(/qunit.js$/.test(t.sourceURL))return
return t.sourceURL+":"+t.line}}function b(t){var e=new Error
if(!e.stack)try{throw e}catch(t){e=t}return v(e,t)}function w(t,s){if("array"!==e.objectType(t))n.queue.push(t),n.autorun&&!n.blocking&&y(s)
else for(;t.length;)w(t.shift())}function y(t){function e(){y(t)}var s,r,o=l()
for(n.depth=n.depth?n.depth+1:1;n.queue.length&&!n.blocking;){if(!(!f.setTimeout||n.updateRate<=0||l()-o<n.updateRate)){h(e,13)
break}n.current&&(n.current.usedAsync=!1),n.queue.shift()()}n.depth--,!t||n.blocking||n.queue.length||0!==n.depth||(n.autorun=!0,n.previousModule&&I("moduleDone",{name:n.previousModule.name,tests:n.previousModule.tests,failed:n.moduleStats.bad,passed:n.moduleStats.all-n.moduleStats.bad,total:n.moduleStats.all,runtime:l()-n.moduleStats.started}),delete n.previousModule,s=l()-n.started,r=n.stats.all-n.stats.bad,I("done",{failed:n.stats.bad,passed:r,total:n.stats.all,runtime:s}))}function q(){var s,o,i=[]
if(!n.started){for(n.started=l(),function(){var n,s
for(n in r)e[n]!==r[n]&&(s=e[n],e[n]=r[n],e[n](s),t.console&&t.console.warn&&t.console.warn("QUnit."+n+" was replaced with a new value.\nPlease, check out the documentation on how to apply logging callbacks.\nReference: http://api.qunitjs.com/category/callbacks/"))}(),""===n.modules[0].name&&0===n.modules[0].tests.length&&n.modules.shift(),s=0,o=n.modules.length;s<o;s++)i.push({name:n.modules[s].name,tests:n.modules[s].tests})
I("begin",{totalTests:N.count,modules:i})}n.blocking=!1,y(!0)}function E(){d=!0,f.setTimeout?h(function(){n.current&&n.current.semaphore>0||(n.timeout&&p(n.timeout),q())},13):q()}function x(){n.blocking=!0,n.testTimeout&&f.setTimeout&&(p(n.timeout),n.timeout=h(function(){if(!n.current)throw new Error("Test timed out")
n.current.semaphore=0,e.pushFailure("Test timed out",b(2)),E()},n.testTimeout))}function k(){if(n.pollution=[],n.noglobals)for(var e in t)if(a.call(t,e)){if(/^qunit-test-output/.test(e))continue
n.pollution.push(e)}}function T(t,e){var n,s,r=t.slice()
for(n=0;n<r.length;n++)for(s=0;s<e.length;s++)if(r[n]===e[s]){r.splice(n,1),n--
break}return r}function S(e,n,s){for(var r in n)a.call(n,r)&&("constructor"===r&&e===t||(void 0===n[r]?delete e[r]:s&&void 0!==e[r]||(e[r]=n[r])))
return e}function I(t,e){var s,r,o
for(s=0,r=(o=n.callbacks[t]).length;s<r;s++)o[s](e)}function j(t,e){if(e.indexOf)return e.indexOf(t)
for(var n=0,s=e.length;n<s;n++)if(e[n]===t)return n
return-1}function N(t){var e,s
for(++N.count,S(this,t),this.assertions=[],this.semaphore=0,this.usedAsync=!1,this.module=n.currentModule,this.stack=b(3),e=0,s=this.module.tests;e<s.length;e++)this.module.tests[e].name===this.testName&&(this.testName+=" ")
this.testId=function(t,e){for(var n,s=0,r=0,o=t+""+e,i=o.length;s<i;s++)r=(r<<5)-r+o.charCodeAt(s),r|=0;(n=(4294967296+r).toString(16)).length<8&&(n="0000000"+n)
return n.slice(-8)}(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId}),t.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new C(this)}function C(t){this.test=t}e={},(n={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,scrolltop:!0,requireExpects:!1,urlConfig:[{id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],modules:[],currentModule:{name:"",tests:[]},callbacks:{}}).modules.push(n.currentModule),function(){var s,r,o=t.location||{search:"",protocol:"file:"},i=o.search.slice(1).split("&"),a=i.length,u={}
if(i[0])for(s=0;s<a;s++)(r=i[s].split("="))[0]=decodeURIComponent(r[0]),r[1]=!r[1]||decodeURIComponent(r[1]),u[r[0]]?u[r[0]]=[].concat(u[r[0]],r[1]):u[r[0]]=r[1]
if(e.urlParams=u,n.filter=u.filter,n.testId=[],u.testId)for(u.testId=[].concat(u.testId),s=0;s<u.testId.length;s++)n.testId.push(u.testId[s])
e.isLocal="file:"===o.protocol}(),S(e,{module:function(t,e){var s={name:t,testEnvironment:e,tests:[]}
e&&e.setup&&(e.beforeEach=e.setup,delete e.setup),e&&e.teardown&&(e.afterEach=e.teardown,delete e.teardown),n.modules.push(s),n.currentModule=s},asyncTest:function(t,n,s){2===arguments.length&&(s=n,n=null),e.test(t,n,s,!0)},test:function(t,e,n,s){2===arguments.length&&(n=e,e=null),new N({testName:t,expected:e,async:s,callback:n}).queue()},skip:function(t){new N({testName:t,skip:!0}).queue()},start:function(t){var s=c
if(n.current){if(n.current.semaphore-=t||1,n.current.semaphore>0)return
if(n.current.semaphore<0)return n.current.semaphore=0,void e.pushFailure("Called start() while already started (test's semaphore was 0 already)",b(2))}else{if(c=!0,d)throw new Error("Called start() outside of a test context while already started")
if(s||t>1)throw new Error("Called start() outside of a test context too many times")
if(n.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!n.pageLoaded)return void(n.autostart=!0)}E()},stop:function(t){if(!n.current)throw new Error("Called stop() outside of a test context")
n.current.semaphore+=t||1,x()},config:n,is:function(t,n){return e.objectType(n)===t},objectType:function(t){if(void 0===t)return"undefined"
if(null===t)return"null"
var e=i.call(t).match(/^\[object\s(.*)\]$/),n=e&&e[1]||""
switch(n){case"Number":return isNaN(t)?"nan":"number"
case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return n.toLowerCase()}return"object"==typeof t?"object":void 0},url:function(t){t=S(S({},e.urlParams),t)
var n,s="?"
for(n in t)a.call(t,n)&&(s+=encodeURIComponent(n),!0!==t[n]&&(s+="="+encodeURIComponent(t[n])),s+="&")
return location.protocol+"//"+location.host+location.pathname+s.slice(0,-1)},extend:S,load:function(){n.pageLoaded=!0,S(n,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:0,updateRate:1e3,autostart:!0,filter:""},!0),n.blocking=!1,n.autostart&&E()}}),function(){var t,s,o,i=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function a(t){var s=function(s){if("function"!==e.objectType(s))throw new Error("QUnit logging methods require a callback function as their first parameters.")
n.callbacks[t].push(s)}
return r[t]=s,s}for(t=0,s=i.length;t<s;t++)o=i[t],"undefined"===e.objectType(n.callbacks[o])&&(n.callbacks[o]=[]),e[o]=a(o)}(),s=t.onerror,t.onerror=function(t,n,r){var o=!1
if(s&&(o=s(t,n,r)),!0!==o){if(e.config.current){if(e.config.current.ignoreGlobalErrors)return!0
e.pushFailure(t,n+":"+r)}else e.test("global failure",S(function(){e.pushFailure(t,n+":"+r)},{validTest:!0}))
return!1}return o},N.count=0,N.prototype={before:function(){this.module===n.previousModule&&a.call(n,"previousModule")||(a.call(n,"previousModule")&&I("moduleDone",{name:n.previousModule.name,tests:n.previousModule.tests,failed:n.moduleStats.bad,passed:n.moduleStats.all-n.moduleStats.bad,total:n.moduleStats.all,runtime:l()-n.moduleStats.started}),n.previousModule=this.module,n.moduleStats={all:0,bad:0,started:l()},I("moduleStart",{name:this.module.name,tests:this.module.tests})),n.current=this,this.testEnvironment=S({},this.module.testEnvironment),delete this.testEnvironment.beforeEach,delete this.testEnvironment.afterEach,this.started=l(),I("testStart",{name:this.testName,module:this.module.name,testId:this.testId}),n.pollution||k()},run:function(){var t
if(n.current=this,this.async&&e.stop(),this.callbackStarted=l(),n.notrycatch)return t=this.callback.call(this.testEnvironment,this.assert),void this.resolvePromise(t)
try{t=this.callback.call(this.testEnvironment,this.assert),this.resolvePromise(t)}catch(t){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(t.message||t),v(t,0)),k(),n.blocking&&e.start()}},after:function(){var t,s,r
r=n.pollution,k(),(t=T(n.pollution,r)).length>0&&e.pushFailure("Introduced global variable(s): "+t.join(", ")),(s=T(r,n.pollution)).length>0&&e.pushFailure("Deleted global variable(s): "+s.join(", "))},queueHook:function(t,e){var s,r=this
return function(){if(n.current=r,n.notrycatch)return s=t.call(r.testEnvironment,r.assert),void r.resolvePromise(s,e)
try{s=t.call(r.testEnvironment,r.assert),r.resolvePromise(s,e)}catch(t){r.pushFailure(e+" failed on "+r.testName+": "+(t.message||t),v(t,0))}}},hooks:function(t){var n=[]
return this.skip?n:(this.module.testEnvironment&&"function"===e.objectType(this.module.testEnvironment[t])&&n.push(this.queueHook(this.module.testEnvironment[t],t)),n)},finish:function(){n.current=this,n.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t,s=0
for(this.runtime=l()-this.started,n.stats.all+=this.assertions.length,n.moduleStats.all+=this.assertions.length,t=0;t<this.assertions.length;t++)this.assertions[t].result||(s++,n.stats.bad++,n.moduleStats.bad++)
I("testDone",{name:this.testName,module:this.module.name,skipped:!!this.skip,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:this.runtime,assertions:this.assertions,testId:this.testId,duration:this.runtime}),e.reset(),n.current=void 0},queue:function(){var t=this
function n(){w([function(){t.before()},t.hooks("beforeEach"),function(){t.run()},t.hooks("afterEach").reverse(),function(){t.after()},function(){t.finish()}])}this.valid()&&(e.config.reorder&&f.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module.name+"-"+this.testName)?n():w(n,!0))},push:function(t,e,n,s){var r,o={module:this.module.name,name:this.testName,result:t,message:s,actual:e,expected:n,testId:this.testId,runtime:l()-this.started}
t||(r=b())&&(o.source=r),I("log",o),this.assertions.push({result:!!t,message:s})},pushFailure:function(t,e,n){if(!this instanceof N)throw new Error("pushFailure() assertion outside test context, was "+b(2))
var s={module:this.module.name,name:this.testName,result:!1,message:t||"error",actual:n||null,testId:this.testId,runtime:l()-this.started}
e&&(s.source=e),I("log",s),this.assertions.push({result:!1,message:t})},resolvePromise:function(t,n){var s,r,o=this
null!=t&&(s=t.then,"function"===e.objectType(s)&&(e.stop(),s.call(t,e.start,function(t){r="Promise rejected "+(n?n.replace(/Each$/,""):"during")+" "+o.testName+": "+(t.message||t),o.pushFailure(r,v(t,0)),k(),e.start()})))},valid:function(){var t,s=n.filter&&n.filter.toLowerCase(),r=e.urlParams.module&&e.urlParams.module.toLowerCase(),o=(this.module.name+": "+this.testName).toLowerCase()
return!(!this.callback||!this.callback.validTest)||!(n.testId.length>0&&j(this.testId,n.testId)<0)&&(!(r&&(!this.module.name||this.module.name.toLowerCase()!==r))&&(!s||((t="!"!==s.charAt(0))||(s=s.slice(1)),-1!==o.indexOf(s)?t:!t)))}},e.reset=function(){if(void 0!==t){var e=f.document&&document.getElementById&&document.getElementById("qunit-fixture")
e&&(e.innerHTML=n.fixture)}},e.pushFailure=function(){if(!e.config.current)throw new Error("pushFailure() assertion outside test context, in "+b(2))
var t=e.config.current
return t.pushFailure.apply(t,arguments)},e.assert=C.prototype={expect:function(t){if(1!==arguments.length)return this.test.expected
this.test.expected=t},async:function(){var t=this.test,e=!1
return t.semaphore+=1,t.usedAsync=!0,x(),function(){e?t.pushFailure("Called the callback returned from `assert.async` more than once",b(2)):(t.semaphore-=1,e=!0,E())}},push:function(){var t=this,n=t instanceof C&&t.test||e.config.current
if(!n)throw new Error("assertion outside test context, in "+b(2))
return!0===n.usedAsync&&0===n.semaphore&&n.pushFailure("Assertion after the final `assert.async` was resolved",b(2)),t instanceof C||(t=n.assert),t.test.push.apply(t.test,arguments)},ok:function(t,n){n=n||(t?"okay":"failed, expected argument to be truthy, was: "+e.dump.parse(t)),this.push(!!t,t,!0,n)},equal:function(t,e,n){this.push(e==t,t,e,n)},notEqual:function(t,e,n){this.push(e!=t,t,e,n)},propEqual:function(t,n,s){t=g(t),n=g(n),this.push(e.equiv(t,n),t,n,s)},notPropEqual:function(t,n,s){t=g(t),n=g(n),this.push(!e.equiv(t,n),t,n,s)},deepEqual:function(t,n,s){this.push(e.equiv(t,n),t,n,s)},notDeepEqual:function(t,n,s){this.push(!e.equiv(t,n),t,n,s)},strictEqual:function(t,e,n){this.push(e===t,t,e,n)},notStrictEqual:function(t,e,n){this.push(e!==t,t,e,n)},throws:function(t,n,s){var r,o,i=n,a=!1
null==s&&"string"==typeof n&&(s=n,n=null),this.test.ignoreGlobalErrors=!0
try{t.call(this.test.testEnvironment)}catch(t){r=t}this.test.ignoreGlobalErrors=!1,r?(o=e.objectType(n),n?"regexp"===o?a=n.test(m(r)):"string"===o?a=n===m(r):"function"===o&&r instanceof n?a=!0:"object"===o?a=r instanceof n.constructor&&r.name===n.name&&r.message===n.message:"function"===o&&!0===n.call({},r)&&(i=null,a=!0):(a=!0,i=null),this.push(a,r,i,s)):this.test.pushFailure(s,null,"No exception was thrown.")}},C.prototype.raises=C.prototype.throws,e.equiv=function(){var t,n=[],s=[],r=[],o=Object.getPrototypeOf||function(t){return t.__proto__},i=function(){function i(t,e){return t instanceof e.constructor||e instanceof t.constructor?e==t:e===t}return{string:i,boolean:i,number:i,null:i,undefined:i,nan:function(t){return isNaN(t)},date:function(t,n){return"date"===e.objectType(t)&&n.valueOf()===t.valueOf()},regexp:function(t,n){return"regexp"===e.objectType(t)&&n.source===t.source&&n.global===t.global&&n.ignoreCase===t.ignoreCase&&n.multiline===t.multiline&&n.sticky===t.sticky},function:function(){var t=n[n.length-1]
return t!==Object&&void 0!==t},array:function(n,o){var i,a,u,l,c,d
if("array"!==e.objectType(n))return!1
if((u=o.length)!==n.length)return!1
for(s.push(o),r.push(n),i=0;i<u;i++){for(l=!1,a=0;a<s.length;a++)if(c=s[a]===o[i],d=r[a]===n[i],c||d){if(!(o[i]===n[i]||c&&d))return s.pop(),r.pop(),!1
l=!0}if(!l&&!t(o[i],n[i]))return s.pop(),r.pop(),!1}return s.pop(),r.pop(),!0},object:function(e,i){var a,u,l,c,d,h=!0,p=[],f=[]
if(i.constructor!==e.constructor&&!(null===o(i)&&o(e)===Object.prototype||null===o(e)&&o(i)===Object.prototype))return!1
for(a in n.push(i.constructor),s.push(i),r.push(e),i){for(l=!1,u=0;u<s.length;u++)if(c=s[u]===i[a],d=r[u]===e[a],c||d){if(!(i[a]===e[a]||c&&d)){h=!1
break}l=!0}if(p.push(a),!l&&!t(i[a],e[a])){h=!1
break}}for(a in s.pop(),r.pop(),n.pop(),e)f.push(a)
return h&&t(p.sort(),f.sort())}}}()
return t=function(){var n,s,r=[].slice.apply(arguments)
return r.length<2||(n=r[0],s=r[1],(n===s||null!==n&&null!==s&&void 0!==n&&void 0!==s&&e.objectType(n)===e.objectType(s)&&function(t,n,s){var r=e.objectType(t)
if(r)return"function"===e.objectType(n[r])?n[r].apply(n,s):n[r]}(n,i,[s,n]))&&t.apply(this,r.splice(1,r.length-1)))}}(),e.dump=function(){function t(t){return'"'+t.toString().replace(/"/g,'\\"')+'"'}function n(t){return t+""}function s(t,e,n){var s=a.separator(),r=a.indent(),o=a.indent(1)
return e.join&&(e=e.join(","+s+o)),e?[t,o+e,r+n].join(s):t+n}function r(t,e){var n=t.length,r=new Array(n)
if(a.maxDepth&&a.depth>a.maxDepth)return"[object Array]"
for(this.up();n--;)r[n]=this.parse(t[n],void 0,e)
return this.down(),s("[",r,"]")}var o=/^function (\w+)/,a={parse:function(t,e,n){var s,r,o,i=j(t,n=n||[])
return-1!==i?"recursion("+(i-n.length)+")":(e=e||this.typeOf(t),"function"===(o=typeof(r=this.parsers[e]))?(n.push(t),s=r.call(this,t,n),n.pop(),s):"string"===o?r:this.parsers.error)},typeOf:function(t){return null===t?"null":void 0===t?"undefined":e.is("regexp",t)?"regexp":e.is("date",t)?"date":e.is("function",t)?"function":void 0!==t.setInterval&&void 0!==t.document&&void 0===t.nodeType?"window":9===t.nodeType?"document":t.nodeType?"node":"[object Array]"===i.call(t)||"number"==typeof t.length&&void 0!==t.item&&(t.length?t.item(0)===t[0]:null===t.item(0)&&void 0===t[0])?"array":t.constructor===Error.prototype.constructor?"error":typeof t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(t){if(!this.multiline)return""
var e=this.indentChar
return this.HTML&&(e=e.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(t||0)).join(e)},up:function(t){this.depth+=t||1},down:function(t){this.depth-=t||1},setParser:function(t,e){this.parsers[t]=e},quote:t,literal:n,join:s,depth:1,maxDepth:5,parsers:{window:"[Window]",document:"[Document]",error:function(t){return'Error("'+t.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(t){var e="function",n="name"in t?t.name:(o.exec(t)||[])[1]
return n&&(e+=" "+n),s(e=[e+="( ",a.parse(t,"functionArgs"),"){"].join(""),a.parse(t,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(t,e){var n,r,o,i,u,l=[]
if(a.maxDepth&&a.depth>a.maxDepth)return"[object Object]"
for(r in a.up(),n=[],t)n.push(r)
for(i in u=["message","name"])(r=u[i])in t&&!(r in n)&&n.push(r)
for(n.sort(),i=0;i<n.length;i++)o=t[r=n[i]],l.push(a.parse(r,"key")+": "+a.parse(o,void 0,e))
return a.down(),s("{",l,"}")},node:function(t){var e,n,s,r=a.HTML?"&lt;":"<",o=a.HTML?"&gt;":">",i=t.nodeName.toLowerCase(),u=r+i,l=t.attributes
if(l)for(n=0,e=l.length;n<e;n++)(s=l[n].nodeValue)&&"inherit"!==s&&(u+=" "+l[n].nodeName+"="+a.parse(s,"attribute"))
return u+=o,3!==t.nodeType&&4!==t.nodeType||(u+=t.nodeValue),u+r+"/"+i+o},functionArgs:function(t){var e,n=t.length
if(!n)return""
for(e=new Array(n);n--;)e[n]=String.fromCharCode(97+n)
return" "+e.join(", ")+" "},key:t,functionCode:"[code]",attribute:t,string:t,date:t,regexp:n,number:n,boolean:n},HTML:!1,indentChar:"  ",multiline:!0}
return a}(),e.jsDump=e.dump,void 0!==t&&(function(){var t,n=C.prototype
function s(t){return function(){var n=new C(e.config.current)
t.apply(n,arguments)}}for(t in n)e[t]=s(n[t])}(),function(){var n,s,r=["test","module","expect","asyncTest","start","stop","ok","equal","notEqual","propEqual","notPropEqual","deepEqual","notDeepEqual","strictEqual","notStrictEqual","throws"]
for(n=0,s=r.length;n<s;n++)t[r[n]]=e[r[n]]}(),t.QUnit=e),"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof exports&&(exports.QUnit=e)})(function(){return this}()),QUnit.diff=function(){var t=Object.prototype.hasOwnProperty
return function(e,n){e=e.replace(/\s+$/,""),n=n.replace(/\s+$/,"")
var s,r,o="",i=function(e,n){var s,r={},o={}
for(s=0;s<n.length;s++)t.call(r,n[s])||(r[n[s]]={rows:[],o:null}),r[n[s]].rows.push(s)
for(s=0;s<e.length;s++)t.call(o,e[s])||(o[e[s]]={rows:[],n:null}),o[e[s]].rows.push(s)
for(s in r)t.call(r,s)&&1===r[s].rows.length&&t.call(o,s)&&1===o[s].rows.length&&(n[r[s].rows[0]]={text:n[r[s].rows[0]],row:o[s].rows[0]},e[o[s].rows[0]]={text:e[o[s].rows[0]],row:r[s].rows[0]})
for(s=0;s<n.length-1;s++)null!=n[s].text&&null==n[s+1].text&&n[s].row+1<e.length&&null==e[n[s].row+1].text&&n[s+1]==e[n[s].row+1]&&(n[s+1]={text:n[s+1],row:n[s].row+1},e[n[s].row+1]={text:e[n[s].row+1],row:s+1})
for(s=n.length-1;s>0;s--)null!=n[s].text&&null==n[s-1].text&&n[s].row>0&&null==e[n[s].row-1].text&&n[s-1]==e[n[s].row-1]&&(n[s-1]={text:n[s-1],row:n[s].row-1},e[n[s].row-1]={text:e[n[s].row-1],row:s-1})
return{o:e,n:n}}(""===e?[]:e.split(/\s+/),""===n?[]:n.split(/\s+/)),a=e.match(/\s+/g),u=n.match(/\s+/g)
if(null==a?a=[" "]:a.push(" "),null==u?u=[" "]:u.push(" "),0===i.n.length)for(s=0;s<i.o.length;s++)o+="<del>"+i.o[s]+a[s]+"</del>"
else{if(null==i.n[0].text)for(n=0;n<i.o.length&&null==i.o[n].text;n++)o+="<del>"+i.o[n]+a[n]+"</del>"
for(s=0;s<i.n.length;s++)if(null==i.n[s].text)o+="<ins>"+i.n[s]+u[s]+"</ins>"
else{for(r="",n=i.n[s].row+1;n<i.o.length&&null==i.o[n].text;n++)r+="<del>"+i.o[n]+a[n]+"</del>"
o+=" "+i.n[s].text+u[s]+r}}return o}}(),function(){if(QUnit.init=function(){var t,e,n,s,o=QUnit.config
o.stats={all:0,bad:0},o.moduleStats={all:0,bad:0},o.started=0,o.updateRate=1e3,o.blocking=!1,o.autostart=!0,o.autorun=!1,o.filter="",o.queue=[],"undefined"!=typeof window&&((s=c("qunit"))&&(s.innerHTML="<h1 id='qunit-header'>"+r(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),t=c("qunit-tests"),e=c("qunit-banner"),n=c("qunit-testresult"),t&&(t.innerHTML=""),e&&(e.className=""),n&&n.parentNode.removeChild(n),t&&((n=document.createElement("p")).id="qunit-testresult",n.className="result",t.parentNode.insertBefore(n,t),n.innerHTML="Running...<br />&#160;"))},"undefined"!=typeof window){var t=QUnit.config,e=Object.prototype.hasOwnProperty,n={document:void 0!==window.document,sessionStorage:function(){var t="qunit-test-string"
try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}}()},s=[]
QUnit.begin(function(e){var n,o,i,a,l,d,m=c("qunit");((n=c("qunit-fixture"))&&(t.fixture=n.innerHTML),m)&&(m.innerHTML="<h1 id='qunit-header'>"+r(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>",(o=c("qunit-banner"))&&(o.className="",o.innerHTML="<a href='"+QUnit.url({filter:void 0,module:void 0,testId:void 0})+"'>"+o.innerHTML+"</a> "),i=c("qunit-tests"),(a=c("qunit-testresult"))&&a.parentNode.removeChild(a),i&&(i.innerHTML="",(a=document.createElement("p")).id="qunit-testresult",a.className="result",i.parentNode.insertBefore(a,i),a.innerHTML="Running...<br />&#160;"),(l=c("qunit-userAgent"))&&(l.innerHTML=navigator.userAgent),(d=c("qunit-testrunner-toolbar"))&&d.appendChild(h()),function(t){var e,n,r,o,i,a
for(e=0,n=t.length;e<n;e++)for((a=t[e]).name&&s.push(a.name),r=0,o=a.tests.length;r<o;r++)f((i=a.tests[r]).name,i.testId,a.name)}(e.modules),p(),t.hidepassed&&u(m.lastChild,"hidepass"))}),QUnit.done(function(e){var s,r,o=c("qunit-banner"),i=c("qunit-tests"),a=["Tests completed in ",e.runtime," milliseconds.<br />","<span class='passed'>",e.passed,"</span> assertions of <span class='total'>",e.total,"</span> passed, <span class='failed'>",e.failed,"</span> failed."].join("")
if(o&&(o.className=e.failed?"qunit-fail":"qunit-pass"),i&&(c("qunit-testresult").innerHTML=a),t.altertitle&&n.document&&document.title&&(document.title=[e.failed?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),t.reorder&&n.sessionStorage&&0===e.failed)for(s=0;s<sessionStorage.length;s++)0===(r=sessionStorage.key(s++)).indexOf("qunit-test-")&&sessionStorage.removeItem(r)
t.scrolltop&&window.scrollTo&&window.scrollTo(0,0)}),QUnit.testStart(function(t){var e,n;(n=c("qunit-test-output-"+t.testId))?n.className="running":f(t.name,t.testId,t.module),(e=c("qunit-testresult"))&&(e.innerHTML="Running: <br />"+m(t.name,t.module))}),QUnit.log(function(t){var n,s,o,i,a,u=c("qunit-test-output-"+t.testId)
u&&(o="<span class='test-message'>"+(o=r(t.message)||(t.result?"okay":"failed"))+"</span>",o+="<span class='runtime'>@ "+t.runtime+" ms</span>",!t.result&&e.call(t,"expected")?(o+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+(i=r(QUnit.dump.parse(t.expected)))+"</pre></td></tr>",(a=r(QUnit.dump.parse(t.actual)))!==i&&(o+="<tr class='test-actual'><th>Result: </th><td><pre>"+a+"</pre></td></tr><tr class='test-diff'><th>Diff: </th><td><pre>"+QUnit.diff(i,a)+"</pre></td></tr>"),t.source&&(o+="<tr class='test-source'><th>Source: </th><td><pre>"+r(t.source)+"</pre></td></tr>"),o+="</table>"):!t.result&&t.source&&(o+="<table><tr class='test-source'><th>Source: </th><td><pre>"+r(t.source)+"</pre></td></tr></table>"),n=u.getElementsByTagName("ol")[0],(s=document.createElement("li")).className=t.result?"pass":"fail",s.innerHTML=o,n.appendChild(s))}),QUnit.testDone(function(e){var s,r,i,d,h,p,f,m
c("qunit-tests")&&(i=c("qunit-test-output-"+e.testId),d=i.getElementsByTagName("ol")[0],h=e.passed,p=e.failed,t.reorder&&n.sessionStorage&&(p?sessionStorage.setItem("qunit-test-"+e.module+"-"+e.name,p):sessionStorage.removeItem("qunit-test-"+e.module+"-"+e.name)),0===p&&u(d,"qunit-collapsed"),s=i.firstChild,f=p?"<b class='failed'>"+p+"</b>, <b class='passed'>"+h+"</b>, ":"",s.innerHTML+=" <b class='counts'>("+f+e.assertions.length+")</b>",e.skipped?(u(i,"skipped"),(m=document.createElement("em")).className="qunit-skipped-label",m.innerHTML="skipped",i.insertBefore(m,s)):(o(s,"click",function(){var t,e
a(t=d,e="qunit-collapsed")?l(t,e):u(t,e)}),i.className=p?"fail":"pass",(r=document.createElement("span")).className="runtime",r.innerHTML=e.runtime+" ms",i.insertBefore(r,d)))}),n.document&&"complete"!==document.readyState||(t.pageLoaded=!0,t.autorun=!0),n.document&&o(window,"load",QUnit.load)}function r(t){return t?(t+="").replace(/['"<>&]/g,function(t){switch(t){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}}):""}function o(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n){for(var s=t.length;s--;)o(t[s],e,n)}function a(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>=0}function u(t,e){a(t,e)||(t.className+=(t.className?" ":"")+e)}function l(t,e){for(var n=" "+t.className+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ")
t.className="function"==typeof n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function c(t){return n.document&&document.getElementById&&document.getElementById(t)}function d(){var e,n,s={}
n="selectedIndex"in this?this.options[this.selectedIndex].value||void 0:this.checked?this.defaultValue||!0:void 0,s[this.name]=n,e=QUnit.url(s),"hidepassed"===this.name&&"replaceState"in window.history?(t[this.name]=n||!1,n?u(c("qunit-tests"),"hidepass"):l(c("qunit-tests"),"hidepass"),window.history.replaceState(null,"",e)):window.location=e}function h(){var n=document.createElement("span")
return n.innerHTML=function(){var n,s,o,i,a,u=!1,l=t.urlConfig.length,c=""
for(n=0;n<l;n++)if("string"==typeof(o=t.urlConfig[n])&&(o={id:o,label:o}),i=r(o.id),a=r(o.tooltip),t[o.id]=QUnit.urlParams[o.id],o.value&&"string"!=typeof o.value){if(c+="<label for='qunit-urlconfig-"+i+"' title='"+a+"'>"+o.label+": </label><select id='qunit-urlconfig-"+i+"' name='"+i+"' title='"+a+"'><option></option>",QUnit.is("array",o.value))for(s=0;s<o.value.length;s++)c+="<option value='"+(i=r(o.value[s]))+"'"+(t[o.id]===o.value[s]?(u=!0)&&" selected='selected'":"")+">"+i+"</option>"
else for(s in o.value)e.call(o.value,s)&&(c+="<option value='"+r(s)+"'"+(t[o.id]===s?(u=!0)&&" selected='selected'":"")+">"+r(o.value[s])+"</option>")
t[o.id]&&!u&&(c+="<option value='"+(i=r(t[o.id]))+"' selected='selected' disabled='disabled'>"+i+"</option>"),c+="</select>"}else c+="<input id='qunit-urlconfig-"+i+"' name='"+i+"' type='checkbox'"+(o.value?" value='"+r(o.value)+"'":"")+(t[o.id]?" checked='checked'":"")+" title='"+a+"' /><label for='qunit-urlconfig-"+i+"' title='"+a+"'>"+o.label+"</label>"
return c}(),i(n.getElementsByTagName("input"),"click",d),i(n.getElementsByTagName("select"),"change",d),n}function p(){var t=c("qunit-testrunner-toolbar"),e=document.createElement("span"),n=function(){var t,e=""
if(!s.length)return!1
for(s.sort(function(t,e){return t.localeCompare(e)}),e+="<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' "+(void 0===QUnit.urlParams.module?"selected='selected'":"")+">< All Modules ></option>",t=0;t<s.length;t++)e+="<option value='"+r(encodeURIComponent(s[t]))+"' "+(QUnit.urlParams.module===s[t]?"selected='selected'":"")+">"+r(s[t])+"</option>"
return e+="</select>"}()
if(!n)return!1
e.setAttribute("id","qunit-modulefilter-container"),e.innerHTML=n,o(e.lastChild,"change",function(){var t=e.getElementsByTagName("select")[0],n=decodeURIComponent(t.options[t.selectedIndex].value)
window.location=QUnit.url({module:""===n?void 0:n,filter:void 0,testId:void 0})}),t.appendChild(e)}function f(t,e,n){var s,r,o,i,a=c("qunit-tests")
a&&((s=document.createElement("strong")).innerHTML=m(t,n),(r=document.createElement("a")).innerHTML="Rerun",r.href=QUnit.url({testId:e}),(o=document.createElement("li")).appendChild(s),o.appendChild(r),o.id="qunit-test-output-"+e,(i=document.createElement("ol")).className="qunit-assert-list",o.appendChild(i),a.appendChild(o))}function m(t,e){var n=""
return e&&(n="<span class='module-name'>"+r(e)+"</span>: "),n+="<span class='test-name'>"+r(t)+"</span>"}}()