(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.multiplexingMode=function(n){var t=Array.prototype.slice.call(arguments,1),i=t.length
function r(e,n,t){if("string"==typeof n)return e.indexOf(n,t)
var i=n.exec(t?e.slice(t):e)
return i?i.index+t:-1}return{startState:function(){return{outer:e.startState(n),innerActive:null,inner:null}},copyState:function(t){return{outer:e.copyState(n,t.outer),innerActive:t.innerActive,inner:t.innerActive&&e.copyState(t.innerActive.mode,t.inner)}},token:function(o,c){if(c.innerActive){var l=c.innerActive
a=o.string
if(!l.close&&o.sol())return c.innerActive=c.inner=null,this.token(o,c)
if((d=l.close?r(a,l.close,o.pos):-1)==o.pos)return o.match(l.close),c.innerActive=c.inner=null,l.delimStyle
d>-1&&(o.string=a.slice(0,d))
var u=l.mode.token(o,c.inner)
return d>-1&&(o.string=a),l.innerStyle&&(u=u?u+" "+l.innerStyle:l.innerStyle),u}for(var s=1/0,a=o.string,v=0;v<i;++v){var d,f=t[v]
if((d=r(a,f.open,o.pos))==o.pos)return o.match(f.open),c.innerActive=f,c.inner=e.startState(f.mode,n.indent?n.indent(c.outer,""):0),f.delimStyle;-1!=d&&d<s&&(s=d)}s!=1/0&&(o.string=a.slice(0,s))
var A=n.token(o,c.outer)
return s!=1/0&&(o.string=a),A},indent:function(t,i){var r=t.innerActive?t.innerActive.mode:n
return r.indent?r.indent(t.innerActive?t.inner:t.outer,i):e.Pass},blankLine:function(r){var o=r.innerActive?r.innerActive.mode:n
if(o.blankLine&&o.blankLine(r.innerActive?r.inner:r.outer),r.innerActive)"\n"===r.innerActive.close&&(r.innerActive=r.inner=null)
else for(var c=0;c<i;++c){var l=t[c]
"\n"===l.open&&(r.innerActive=l,r.inner=e.startState(l.mode,o.indent?o.indent(r.outer,""):0))}},electricChars:n.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:n}}}}})
