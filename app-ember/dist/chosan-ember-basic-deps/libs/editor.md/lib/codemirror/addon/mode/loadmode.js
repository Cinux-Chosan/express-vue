(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),"cjs"):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],function(r){e(r,"amd")}):e(CodeMirror,"plain")})(function(e,r){e.modeURL||(e.modeURL="../mode/%N/%N.js")
var o={}
function n(r,o){var n=e.modes[r].dependencies
if(!n)return o()
for(var t=[],i=0;i<n.length;++i)e.modes.hasOwnProperty(n[i])||t.push(n[i])
if(!t.length)return o()
var d=function(e,r){var o=r
return function(){0==--o&&e()}}(o,t.length)
for(i=0;i<t.length;++i)e.requireMode(t[i],d)}e.requireMode=function(t,i){if("string"!=typeof t&&(t=t.name),e.modes.hasOwnProperty(t))return n(t,i)
if(o.hasOwnProperty(t))return o[t].push(i)
var d=e.modeURL.replace(/%N/g,t)
if("plain"==r){var u=document.createElement("script")
u.src=d
var f=document.getElementsByTagName("script")[0],a=o[t]=[i]
e.on(u,"load",function(){n(t,function(){for(var e=0;e<a.length;++e)a[e]()})}),f.parentNode.insertBefore(u,f)}else"cjs"==r?(require(d),i()):"amd"==r&&requirejs([d],i)},e.autoLoadMode=function(r,o){e.modes.hasOwnProperty(o)||e.requireMode(o,function(){r.setOption("mode",r.getOption("mode"))})}})
