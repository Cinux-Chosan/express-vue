(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,i={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"}
function r(e,t,r,a){var c=e.getLineHandle(t.line),f=t.ch-1,l=f>=0&&i[c.text.charAt(f)]||i[c.text.charAt(++f)]
if(!l)return null
var u=">"==l.charAt(1)?1:-1
if(r&&u>0!=(f==t.ch))return null
var h=e.getTokenTypeAt(n(t.line,f+1)),s=o(e,n(t.line,f+(u>0?1:0)),u,h||null,a)
return null==s?null:{from:n(t.line,f),to:s&&s.pos,match:s&&s.ch==l.charAt(0),forward:u>0}}function o(e,t,r,o,a){for(var c=a&&a.maxScanLineLength||1e4,f=a&&a.maxScanLines||1e3,l=[],u=a&&a.bracketRegex?a.bracketRegex:/[(){}[\]]/,h=r>0?Math.min(t.line+f,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-f),s=t.line;s!=h;s+=r){var m=e.getLine(s)
if(m){var d=r>0?0:m.length-1,g=r>0?m.length:-1
if(!(m.length>c))for(s==t.line&&(d=t.ch-(r<0?1:0));d!=g;d+=r){var p=m.charAt(d)
if(u.test(p)&&(void 0===o||e.getTokenTypeAt(n(s,d+1))==o))if(">"==i[p].charAt(1)==r>0)l.push(p)
else{if(!l.length)return{pos:n(s,d),ch:p}
l.pop()}}}}return s-r!=(r>0?e.lastLine():e.firstLine())&&null}function a(e,i,o){for(var a=e.state.matchBrackets.maxHighlightLineLength||1e3,c=[],f=e.listSelections(),l=0;l<f.length;l++){var u=f[l].empty()&&r(e,f[l].head,!1,o)
if(u&&e.getLine(u.from.line).length<=a){var h=u.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket"
c.push(e.markText(u.from,n(u.from.line,u.from.ch+1),{className:h})),u.to&&e.getLine(u.to.line).length<=a&&c.push(e.markText(u.to,n(u.to.line,u.to.ch+1),{className:h}))}}if(c.length){t&&e.state.focused&&e.focus()
var s=function(){e.operation(function(){for(var e=0;e<c.length;e++)c[e].clear()})}
if(!i)return s
setTimeout(s,800)}}var c=null
function f(e){e.operation(function(){c&&(c(),c=null),c=a(e,!1,e.state.matchBrackets)})}e.defineOption("matchBrackets",!1,function(t,n,i){i&&i!=e.Init&&t.off("cursorActivity",f),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",f))}),e.defineExtension("matchBrackets",function(){a(this,!0)}),e.defineExtension("findMatchingBracket",function(e,t,n){return r(this,e,t,n)}),e.defineExtension("scanForBracket",function(e,t,n,i){return o(this,e,t,n,i)})})