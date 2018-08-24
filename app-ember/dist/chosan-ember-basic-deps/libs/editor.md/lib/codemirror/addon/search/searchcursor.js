(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var t=e.Pos
function n(e,n,r,o){if(this.atOccurrence=!1,this.doc=e,null==o&&"string"==typeof n&&(o=!1),r=r?e.clipPos(r):t(0,0),this.pos={from:r,to:r},"string"!=typeof n)n.global||(n=new RegExp(n.source,n.ignoreCase?"ig":"g")),this.matches=function(i,r){if(i){n.lastIndex=0
for(var o=e.getLine(r.line).slice(0,r.ch),s=0;;){n.lastIndex=s
var l=n.exec(o)
if(!l)break
if(h=(f=l).index,(s=f.index+(f[0].length||1))==o.length)break}(c=f&&f[0].length||0)||(0==h&&0==o.length?f=void 0:h!=e.getLine(r.line).length&&c++)}else{n.lastIndex=r.ch
o=e.getLine(r.line)
var f,h,c=(f=n.exec(o))&&f[0].length||0;(h=f&&f.index)+c==o.length||c||(c=1)}if(f&&c)return{from:t(r.line,h),to:t(r.line,h+c),match:f}}
else{var s=n
o&&(n=n.toLowerCase())
var l=o?function(e){return e.toLowerCase()}:function(e){return e},f=n.split("\n")
if(1==f.length)n.length?this.matches=function(r,o){if(r){var f=e.getLine(o.line).slice(0,o.ch)
if((c=(h=l(f)).lastIndexOf(n))>-1)return c=i(f,h,c),{from:t(o.line,c),to:t(o.line,c+s.length)}}else{var h,c
f=e.getLine(o.line).slice(o.ch)
if((c=(h=l(f)).indexOf(n))>-1)return c=i(f,h,c)+o.ch,{from:t(o.line,c),to:t(o.line,c+s.length)}}}:this.matches=function(){}
else{var h=s.split("\n")
this.matches=function(n,i){var r=f.length-1
if(n){if(i.line-(f.length-1)<e.firstLine())return
if(l(e.getLine(i.line).slice(0,h[r].length))!=f[f.length-1])return
for(var o=t(i.line,h[r].length),s=i.line-1,c=r-1;c>=1;--c,--s)if(f[c]!=l(e.getLine(s)))return
var u=(g=e.getLine(s)).length-h[0].length
if(l(g.slice(u))!=f[0])return
return{from:t(s,u),to:o}}if(!(i.line+(f.length-1)>e.lastLine())){var g
u=(g=e.getLine(i.line)).length-h[0].length
if(l(g.slice(u))==f[0]){var a=t(i.line,u)
for(s=i.line+1,c=1;c<r;++c,++s)if(f[c]!=l(e.getLine(s)))return
if(l(e.getLine(s).slice(0,h[r].length))==f[r])return{from:a,to:t(s,h[r].length)}}}}}}}function i(e,t,n){if(e.length==t.length)return n
for(var i=Math.min(n,e.length);;){var r=e.slice(0,i).toLowerCase().length
if(r<n)++i
else{if(!(r>n))return i;--i}}}n.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){var n=this,i=this.doc.clipPos(e?this.pos.from:this.pos.to)
function r(e){var i=t(e,0)
return n.pos={from:i,to:i},n.atOccurrence=!1,!1}for(;;){if(this.pos=this.matches(e,i))return this.atOccurrence=!0,this.pos.match||!0
if(e){if(!i.line)return r(0)
i=t(i.line-1,this.doc.getLine(i.line-1).length)}else{var o=this.doc.lineCount()
if(i.line==o-1)return r(o)
i=t(i.line+1,0)}}},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(n){if(this.atOccurrence){var i=e.splitLines(n)
this.doc.replaceRange(i,this.pos.from,this.pos.to),this.pos.to=t(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",function(e,t,i){return new n(this.doc,e,t,i)}),e.defineDocExtension("getSearchCursor",function(e,t,i){return new n(this,e,t,i)}),e.defineExtension("selectMatches",function(t,n){for(var i=[],r=this.getSearchCursor(t,this.getCursor("from"),n);r.findNext()&&!(e.cmpPos(r.to(),this.getCursor("to"))>0);)i.push({anchor:r.from(),head:r.to()})
i.length&&this.setSelections(i,0)})})
