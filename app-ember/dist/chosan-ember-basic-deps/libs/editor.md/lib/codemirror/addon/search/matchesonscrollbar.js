(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("./searchcursor"),require("../scroll/annotatescrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../scroll/annotatescrollbar"],t):t(CodeMirror)})(function(t){"use strict"
function e(t,e,i,o){this.cm=t
var a={listenForChanges:!1}
for(var n in o)a[n]=o[n]
a.className||(a.className="CodeMirror-search-match"),this.annotation=t.annotateScrollbar(a),this.query=e,this.caseFold=i,this.gap={from:t.firstLine(),to:t.lastLine()+1},this.matches=[],this.update=null,this.findMatches(),this.annotation.update(this.matches)
var r=this
t.on("change",this.changeHandler=function(t,e){r.onChange(e)})}t.defineExtension("showMatchesOnScrollbar",function(t,i,o){return"string"==typeof o&&(o={className:o}),o||(o={}),new e(this,t,i,o)})
function i(t,e,i){return t<=e?t:Math.max(e,t+i)}e.prototype.findMatches=function(){if(this.gap){for(var e=0;e<this.matches.length;e++){if((o=this.matches[e]).from.line>=this.gap.to)break
o.to.line>=this.gap.from&&this.matches.splice(e--,1)}for(var i=this.cm.getSearchCursor(this.query,t.Pos(this.gap.from,0),this.caseFold);i.findNext();){var o
if((o={from:i.from(),to:i.to()}).from.line>=this.gap.to)break
if(this.matches.splice(e++,0,o),this.matches.length>1e3)break}this.gap=null}},e.prototype.onChange=function(e){var o=e.from.line,a=t.changeEnd(e).line,n=a-e.to.line
if(this.gap?(this.gap.from=Math.min(i(this.gap.from,o,n),e.from.line),this.gap.to=Math.max(i(this.gap.to,o,n),e.from.line)):this.gap={from:e.from.line,to:a+1},n)for(var r=0;r<this.matches.length;r++){var s=this.matches[r],h=i(s.from.line,o,n)
h!=s.from.line&&(s.from=t.Pos(h,s.from.ch))
var c=i(s.to.line,o,n)
c!=s.to.line&&(s.to=t.Pos(c,s.to.ch))}clearTimeout(this.update)
var f=this
this.update=setTimeout(function(){f.updateAfterChange()},250)},e.prototype.updateAfterChange=function(){this.findMatches(),this.annotation.update(this.matches)},e.prototype.clear=function(){this.cm.off("change",this.changeHandler),this.annotation.clear()}})
