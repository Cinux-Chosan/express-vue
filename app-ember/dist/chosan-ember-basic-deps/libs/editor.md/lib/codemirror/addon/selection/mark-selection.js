(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
function t(e){e.operation(function(){(function(e){if(!e.somethingSelected())return f(e)
if(e.listSelections().length>1)return c(e)
var t=e.getCursor("start"),n=e.getCursor("end"),r=e.state.markedSelection
if(!r.length)return l(e,t,n)
var a=r[0].find(),s=r[r.length-1].find()
if(!a||!s||n.line-t.line<o||i(t,s.to)>=0||i(n,a.from)<=0)return c(e)
for(;i(t,a.from)>0;)r.shift().clear(),a=r[0].find()
i(t,a.from)<0&&(a.to.line-t.line<o?(r.shift().clear(),l(e,t,a.to,0)):l(e,t,a.from,0))
for(;i(n,s.to)<0;)r.pop().clear(),s=r[r.length-1].find()
i(n,s.to)>0&&(n.line-s.from.line<o?(r.pop().clear(),l(e,s.from,n)):l(e,s.to,n))})(e)})}function n(e){e.state.markedSelection.length&&e.operation(function(){f(e)})}e.defineOption("styleSelectedText",!1,function(o,r,i){var l=i&&i!=e.Init
r&&!l?(o.state.markedSelection=[],o.state.markedSelectionStyle="string"==typeof r?r:"CodeMirror-selectedtext",c(o),o.on("cursorActivity",t),o.on("change",n)):!r&&l&&(o.off("cursorActivity",t),o.off("change",n),f(o),o.state.markedSelection=o.state.markedSelectionStyle=null)})
var o=8,r=e.Pos,i=e.cmpPos
function l(e,t,n,l){if(0!=i(t,n))for(var f=e.state.markedSelection,c=e.state.markedSelectionStyle,a=t.line;;){var s=a==t.line?t:r(a,0),d=a+o,u=d>=n.line,m=u?n:r(d,0),S=e.markText(s,m,{className:c})
if(null==l?f.push(S):f.splice(l++,0,S),u)break
a=d}}function f(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear()
t.length=0}function c(e){f(e)
for(var t=e.listSelections(),n=0;n<t.length;n++)l(e,t[n].from(),t[n].to())}})
