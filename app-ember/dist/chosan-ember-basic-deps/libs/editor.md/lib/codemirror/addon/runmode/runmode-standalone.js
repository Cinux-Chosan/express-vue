window.CodeMirror={},function(){"use strict"
function t(t){this.pos=this.start=0,this.string=t,this.lineStart=0}t.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(t){var r=this.string.charAt(this.pos)
if("string"==typeof t)var e=r==t
else e=r&&(t.test?t.test(r):t(r))
if(e)return++this.pos,r},eatWhile:function(t){for(var r=this.pos;this.eat(t););return this.pos>r},eatSpace:function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>t},skipToEnd:function(){this.pos=this.string.length},skipTo:function(t){var r=this.string.indexOf(t,this.pos)
if(r>-1)return this.pos=r,!0},backUp:function(t){this.pos-=t},column:function(){return this.start-this.lineStart},indentation:function(){return 0},match:function(t,r,e){if("string"!=typeof t){var n=this.string.slice(this.pos).match(t)
return n&&n.index>0?null:(n&&!1!==r&&(this.pos+=n[0].length),n)}var i=function(t){return e?t.toLowerCase():t}
if(i(this.string.substr(this.pos,t.length))==i(t))return!1!==r&&(this.pos+=t.length),!0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(t,r){this.lineStart+=t
try{return r()}finally{this.lineStart-=t}}},CodeMirror.StringStream=t,CodeMirror.startState=function(t,r,e){return!t.startState||t.startState(r,e)}
var r=CodeMirror.modes={},e=CodeMirror.mimeModes={}
CodeMirror.defineMode=function(t,e){arguments.length>2&&(e.dependencies=Array.prototype.slice.call(arguments,2)),r[t]=e},CodeMirror.defineMIME=function(t,r){e[t]=r},CodeMirror.resolveMode=function(t){return"string"==typeof t&&e.hasOwnProperty(t)?t=e[t]:t&&"string"==typeof t.name&&e.hasOwnProperty(t.name)&&(t=e[t.name]),"string"==typeof t?{name:t}:t||{name:"null"}},CodeMirror.getMode=function(t,e){e=CodeMirror.resolveMode(e)
var n=r[e.name]
if(!n)throw new Error("Unknown mode: "+e)
return n(t,e)},CodeMirror.registerHelper=CodeMirror.registerGlobalHelper=Math.min,CodeMirror.defineMode("null",function(){return{token:function(t){t.skipToEnd()}}}),CodeMirror.defineMIME("text/plain","null"),CodeMirror.runMode=function(t,r,e,n){var i=CodeMirror.getMode({indentUnit:2},r)
if(1==e.nodeType){var o=n&&n.tabSize||4,s=e,a=0
s.innerHTML="",e=function(t,r){if("\n"==t)return s.appendChild(document.createElement("br")),void(a=0)
for(var e="",n=0;;){var i=t.indexOf("\t",n)
if(-1==i){e+=t.slice(n),a+=t.length-n
break}a+=i-n,e+=t.slice(n,i)
var h=o-a%o
a+=h
for(var u=0;u<h;++u)e+=" "
n=i+1}if(r){var c=s.appendChild(document.createElement("span"))
c.className="cm-"+r.replace(/ +/g," cm-"),c.appendChild(document.createTextNode(e))}else s.appendChild(document.createTextNode(e))}}for(var h=function(t){return t.split(/\r?\n|\r/)}(t),u=n&&n.state||CodeMirror.startState(i),c=0,d=h.length;c<d;++c){c&&e("\n")
var f=new CodeMirror.StringStream(h[c])
for(!f.string&&i.blankLine&&i.blankLine(u);!f.eol();){var l=i.token(f,u)
e(f.current(),l,c,f.start,u),f.start=f.pos}}}}()