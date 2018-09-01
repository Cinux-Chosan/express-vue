(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.TernServer=function(s){var l=this
this.options=s||{}
var u=this.options.plugins||(this.options.plugins={})
u.doc_comment||(u.doc_comment=!0),this.options.useWorker?this.server=new function(e){var t=e.worker=new Worker(e.options.workerScript)
t.postMessage({type:"init",defs:e.options.defs,plugins:e.options.plugins,scripts:e.options.workerDeps})
var n=0,o={}
function i(e,r){r&&(e.id=++n,o[n]=r),t.postMessage(e)}t.onmessage=function(t){var n=t.data
"getFile"==n.type?r(e,n.name,function(e,t){i({type:"getFile",err:String(e),text:t,id:n.id})}):"debug"==n.type?window.console.log(n.message):n.id&&o[n.id]&&(o[n.id](n.err,n.body),delete o[n.id])},t.onerror=function(e){for(var t in o)o[t](e)
o={}},this.addFile=function(e,t){i({type:"add",name:e,text:t})},this.delFile=function(e){i({type:"del",name:e})},this.request=function(e,t){i({type:"req",body:e},t)}}(this):this.server=new tern.Server({getFile:function(e,t){return r(l,e,t)},async:!0,defs:this.options.defs||[],plugins:u}),this.docs=Object.create(null),this.trackChange=function(e,t){(function(e,t,n){var r=i(e,t),s=e.cachedArgHints
s&&s.doc==t&&h(s.start,n.to)<=0&&(e.cachedArgHints=null)
var c=r.changed
null==c&&(r.changed=c={from:n.from.line,to:n.from.line})
var l=n.from.line+(n.text.length-1)
n.from.line<c.to&&(c.to=c.to-(n.to.line-l))
l>=c.to&&(c.to=l+1)
c.from>n.from.line&&(c.from=n.from.line)
t.lineCount()>o&&n.to-c.from>100&&setTimeout(function(){r.changed&&r.changed.to-r.changed.from>100&&a(e,r)},200)})(l,e,t)},this.cachedArgHints=null,this.activeArgHints=null,this.jumpStack=[],this.getHint=function(o,r){return function(o,r,i){o.request(r,{type:"completions",types:!0,docs:!0,urls:!0},function(s,a){if(s)return x(o,r,s)
var l=[],u="",f=a.start,d=a.end
'["'==r.getRange(t(f.line,f.ch-2),f)&&'"]'!=r.getRange(d,t(d.line,d.ch+2))&&(u='"]')
for(var p=0;p<a.completions.length;++p){var h=a.completions[p],g=c(h.type)
a.guess&&(g+=" "+n+"guess"),l.push({text:h.name+u,displayText:h.name,className:g,data:h})}var m={from:f,to:d,list:l},v=null
e.on(m,"close",function(){C(v)}),e.on(m,"update",function(){C(v)}),e.on(m,"select",function(e,t){C(v)
var r=o.options.completionTip?o.options.completionTip(e.data):e.data.doc
r&&((v=y(t.parentNode.getBoundingClientRect().right+window.pageXOffset,t.getBoundingClientRect().top+window.pageYOffset,r)).className+=" "+n+"hint-doc")}),i(m)})}(l,o,r)},this.getHint.async=!0},e.TernServer.prototype={addDoc:function(t,n){var o={doc:n,name:t,changed:null}
return this.server.addFile(t,w(this,o)),e.on(n,"change",this.trackChange),this.docs[t]=o},delDoc:function(t){var n=s(this,t)
n&&(e.off(n.doc,"change",this.trackChange),delete this.docs[n.name],this.server.delFile(n.name))},hideDoc:function(e){b(this)
var t=s(this,e)
t&&t.changed&&a(this,t)},complete:function(e){e.showHint({hint:this.getHint})},showType:function(e,t,n){l(this,e,t,"type",n)},showDocs:function(e,t,n){l(this,e,t,"documentation",n)},updateArgHints:function(n){(function(n,o){if(b(n),o.somethingSelected())return
var r=o.getTokenAt(o.getCursor()).state,i=e.innerMode(o.getMode(),r)
if("javascript"!=i.mode.name)return
var s=i.state.lexical
if("call"!=s.info)return
for(var a,c=s.pos||0,l=o.getOption("tabSize"),f=o.getCursor().line,d=Math.max(0,f-9),p=!1;f>=d;--f){for(var g=o.getLine(f),m=0,v=0;;){var y=g.indexOf("\t",v)
if(-1==y)break
m+=l-(y+m)%l-1,v=y+1}if(a=s.column-m,"("==g.charAt(a)){p=!0
break}}if(!p)return
var C=t(f,a),x=n.cachedArgHints
if(x&&x.doc==o.getDoc()&&0==h(C,x.start))return u(n,o,c)
n.request(o,{type:"type",preferFunction:!0,end:C},function(e,t){!e&&t.type&&/^fn\(/.test(t.type)&&(n.cachedArgHints={start:v,type:function(e){var t=[],n=3
function o(t){for(var o=0,r=n;;){var i=e.charAt(n)
if(t.test(i)&&!o)return e.slice(r,n);/[{\[\(]/.test(i)?++o:/[}\]\)]/.test(i)&&--o,++n}}if(")"!=e.charAt(n))for(;;){var r=e.slice(n).match(/^([^, \(\[\{]+): /)
if(r&&(n+=r[0].length,r=r[1]),t.push({name:r,type:o(/[\),]/)}),")"==e.charAt(n))break
n+=2}var i=e.slice(n).match(/^\) -> (.*)$/)
return{args:t,rettype:i&&i[1]}}(t.type),name:t.exprName||t.name||"fn",guess:t.guess,doc:o.getDoc()},u(n,o,c))})})(this,n)},jumpToDef:function(e){(function(e,n){function o(o){var r={type:"definition",variable:o||null},s=i(e,n.getDoc())
e.server.request(p(e,s,r),function(o,r){if(o)return x(e,n,o)
if(r.file||!r.url){if(r.file){var i,a=e.docs[r.file]
if(a&&(i=function(e,n){for(var o=n.context.slice(0,n.contextOffset).split("\n"),r=n.start.line-(o.length-1),i=t(r,(1==o.length?n.start.ch:e.getLine(r).length)-o[0].length),s=e.getLine(r).slice(i.ch),a=r+1;a<e.lineCount()&&s.length<n.context.length;++a)s+="\n"+e.getLine(a)
if(s.slice(0,n.context.length)==n.context)return n
var c,l=e.getSearchCursor(n.context,0,!1),u=1/0
for(;l.findNext();){var f=l.from(),d=1e4*Math.abs(f.line-i.line)
d||(d=Math.abs(f.ch-i.ch)),d<u&&(c=f,u=d)}if(!c)return null
1==o.length?c.ch+=o[0].length:c=t(c.line+(o.length-1),o[o.length-1].length)
if(n.start.line==n.end.line)var p=t(c.line,c.ch+(n.end.ch-n.start.ch))
else var p=t(c.line+(n.end.line-n.start.line),n.end.ch)
return{start:c,end:p}}(a.doc,r)))return e.jumpStack.push({file:s.name,start:n.getCursor("from"),end:n.getCursor("to")}),void f(e,s,a,i.start,i.end)}x(e,n,"Could not find a definition.")}else window.open(r.url)})}!function(e){var t=e.getCursor("end"),n=e.getTokenAt(t)
return(!(n.start<t.ch)||"comment"!=n.type&&"string"!=n.type)&&/\w/.test(e.getLine(t.line).slice(Math.max(t.ch-1,0),t.ch+1))}(n)?m(n,"Jump to variable",function(e){e&&o(e)}):o()})(this,e)},jumpBack:function(e){(function(e,t){var n=e.jumpStack.pop(),o=n&&e.docs[n.file]
if(!o)return
f(e,i(e,t.getDoc()),o,n.start,n.end)})(this,e)},rename:function(e){(function(e,t){var n=t.getTokenAt(t.getCursor())
if(!/\w/.test(n.string))return x(e,t,"Not at a variable")
m(t,"New name for "+n.string,function(n){e.request(t,{type:"rename",newName:n,fullDocs:!0},function(n,o){if(n)return x(e,t,n);(function(e,t){for(var n=Object.create(null),o=0;o<t.length;++o){var r=t[o];(n[r.file]||(n[r.file]=[])).push(r)}for(var i in n){var s=e.docs[i],a=n[i]
if(s){a.sort(function(e,t){return h(t.start,e.start)})
for(var c="*rename"+ ++d,o=0;o<a.length;++o){var r=a[o]
s.doc.replaceRange(r.text,r.start,r.end,c)}}}})(e,o.changes)})})})(this,e)},selectName:function(e){(function(e,t){var n=i(e,t.doc).name
e.request(t,{type:"refs"},function(o,r){if(o)return x(e,t,o)
for(var i=[],s=0,a=0;a<r.refs.length;a++){var c=r.refs[a]
c.file==n&&(i.push({anchor:c.start,head:c.end}),h(s,c.start)>=0&&h(s,c.end)<=0&&(s=i.length-1))}t.setSelections(i,s)})})(this,e)},request:function(e,t,n,o){var r=this,s=i(this,e.getDoc()),a=p(this,s,t,o)
this.server.request(a,function(e,o){!e&&r.options.responseFilter&&(o=r.options.responseFilter(s,t,a,e,o)),n(e,o)})},destroy:function(){this.worker&&(this.worker.terminate(),this.worker=null)}}
var t=e.Pos,n="CodeMirror-Tern-",o=250
function r(e,t,n){var o=e.docs[t]
o?n(w(e,o)):e.options.getFile?e.options.getFile(t,n):n(null)}function i(e,t,n){for(var o in e.docs){var r=e.docs[o]
if(r.doc==t)return r}if(!n)for(var i=0;;++i)if(o="[doc"+(i||"")+"]",!e.docs[o]){n=o
break}return e.addDoc(n,t)}function s(t,n){return"string"==typeof n?t.docs[n]:(n instanceof e&&(n=n.getDoc()),n instanceof e.Doc?i(t,n):void 0)}function a(e,t){e.server.request({files:[{type:"full",name:t.name,text:w(e,t)}]},function(e){e?window.console.error(e):t.changed=null})}function c(e){var t
return t="?"==e?"unknown":"number"==e||"string"==e||"bool"==e?e:/^fn\(/.test(e)?"fn":/^\[/.test(e)?"array":"object",n+"completion "+n+"completion-"+t}function l(e,t,n,o,r){e.request(t,o,function(n,o){if(n)return x(e,t,n)
if(e.options.typeTip)var i=e.options.typeTip(o)
else{i=g("span",null,g("strong",null,o.type||"not found"))
if(o.doc&&i.appendChild(document.createTextNode(" — "+o.doc)),o.url){i.appendChild(document.createTextNode(" "))
var s=i.appendChild(g("a",null,"[docs]"))
s.href=o.url,s.target="_blank"}}v(t,i),r&&r()},n)}function u(e,t,o){b(e)
for(var r=e.cachedArgHints,i=r.type,s=g("span",r.guess?n+"fhint-guess":null,g("span",n+"fname",r.name),"("),a=0;a<i.args.length;++a){a&&s.appendChild(document.createTextNode(", "))
var c=i.args[a]
s.appendChild(g("span",n+"farg"+(a==o?" "+n+"farg-current":""),c.name||"?")),"?"!=c.type&&(s.appendChild(document.createTextNode(": ")),s.appendChild(g("span",n+"type",c.type)))}s.appendChild(document.createTextNode(i.rettype?") -> ":")")),i.rettype&&s.appendChild(g("span",n+"type",i.rettype))
var l=t.cursorCoords(null,"page")
e.activeArgHints=y(l.right+1,l.bottom,s)}function f(e,t,n,o,r){n.doc.setSelection(o,r),t!=n&&e.options.switchToDoc&&(b(e),e.options.switchToDoc(n.name,n.doc))}var d=0
function p(n,r,i,s){var a=[],c=0,l=!i.fullDocs
l||delete i.fullDocs,"string"==typeof i&&(i={type:i}),i.lineCharPositions=!0,null==i.end&&(i.end=s||r.doc.getCursor("end"),r.doc.somethingSelected()&&(i.start=r.doc.getCursor("start")))
var u=i.start||i.end
if(r.changed)if(r.doc.lineCount()>o&&!1!==l&&r.changed.to-r.changed.from<100&&r.changed.from<=u.line&&r.changed.to>i.end.line){a.push(function(n,o,r){for(var i,s=n.doc,a=null,c=null,l=o.line-1,u=Math.max(0,l-50);l>=u;--l){var f=s.getLine(l),d=f.search(/\bfunction\b/)
if(!(d<0)){var p=e.countColumn(f,null,4)
null!=a&&a<=p||(a=p,c=l)}}null==c&&(c=u)
var h=Math.min(s.lastLine(),r.line+20)
if(null==a||a==e.countColumn(s.getLine(o.line),null,4))i=h
else for(i=r.line+1;i<h;++i){var p=e.countColumn(s.getLine(i),null,4)
if(p<=a)break}var g=t(c,0)
return{type:"part",name:n.name,offsetLines:g.line,text:s.getRange(g,t(i,0))}}(r,u,i.end)),i.file="#0"
c=a[0].offsetLines
null!=i.start&&(i.start=t(i.start.line- -c,i.start.ch)),i.end=t(i.end.line-c,i.end.ch)}else a.push({type:"full",name:r.name,text:w(n,r)}),i.file=r.name,r.changed=null
else i.file=r.name
for(var f in n.docs){var d=n.docs[f]
d.changed&&d!=r&&(a.push({type:"full",name:d.name,text:w(n,d)}),d.changed=null)}return{query:i,files:a}}var h=e.cmpPos
function g(e,t){var n=document.createElement(e)
t&&(n.className=t)
for(var o=2;o<arguments.length;++o){var r=arguments[o]
"string"==typeof r&&(r=document.createTextNode(r)),n.appendChild(r)}return n}function m(e,t,n){e.openDialog?e.openDialog(t+": <input type=text>",n):n(prompt(t,""))}function v(t,n){t.state.ternTooltip&&C(t.state.ternTooltip)
var o=t.cursorCoords(),r=t.state.ternTooltip=y(o.right+1,o.bottom,n)
function i(){var e;(t.state.ternTooltip=null,r.parentNode)&&(t.off("cursorActivity",i),t.off("blur",i),t.off("scroll",i),(e=r).style.opacity="0",setTimeout(function(){C(e)},1100))}var s=!1,a=!1
e.on(r,"mousemove",function(){s=!0}),e.on(r,"mouseout",function(t){e.contains(r,t.relatedTarget||t.toElement)||(a?i():s=!1)}),setTimeout(function(){a=!0,s||i()},1700),t.on("cursorActivity",i),t.on("blur",i),t.on("scroll",i)}function y(e,t,o){var r=g("div",n+"tooltip",o)
return r.style.left=e+"px",r.style.top=t+"px",document.body.appendChild(r),r}function C(e){var t=e&&e.parentNode
t&&t.removeChild(e)}function x(e,t,n){e.options.showError?e.options.showError(t,n):v(t,String(n))}function b(e){e.activeArgHints&&(C(e.activeArgHints),e.activeArgHints=null)}function w(e,t){var n=t.doc.getValue()
return e.options.fileFilter&&(n=e.options.fileFilter(n,t.name,t.doc)),n}})
