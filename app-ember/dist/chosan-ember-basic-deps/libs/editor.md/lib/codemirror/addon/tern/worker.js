var server
this.onmessage=function(e){var r=e.data
switch(r.type){case"init":return startServer(r.defs,r.plugins,r.scripts)
case"add":return server.addFile(r.name,r.text)
case"del":return server.delFile(r.name)
case"req":return server.request(r.body,function(e,t){postMessage({id:r.id,body:t,err:e&&String(e)})})
case"getFile":var t=pending[r.id]
return delete pending[r.id],t(r.err,r.text)
default:throw new Error("Unknown message type: "+r.type)}}
var nextId=0,pending={}
function getFile(e,r){postMessage({type:"getFile",name:e,id:++nextId}),pending[nextId]=r}function startServer(e,r,t){t&&importScripts.apply(null,t),server=new tern.Server({getFile:getFile,async:!0,defs:e,plugins:r})}var console={log:function(e){postMessage({type:"debug",message:e})}}
