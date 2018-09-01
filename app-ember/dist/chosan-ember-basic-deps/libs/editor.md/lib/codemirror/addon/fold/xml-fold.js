(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var n=e.Pos
var t="A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i=new RegExp("<(/?)(["+t+"][A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)","g")
function r(e,n,t,i){this.line=n,this.ch=t,this.cm=e,this.text=e.getLine(n),this.min=i?i.from:e.firstLine(),this.max=i?i.to-1:e.lastLine()}function u(e,t){var i=e.cm.getTokenTypeAt(n(e.line,t))
return i&&/\btag\b/.test(i)}function f(e){if(!(e.line>=e.max))return e.ch=0,e.text=e.cm.getLine(++e.line),!0}function o(e){if(!(e.line<=e.min))return e.text=e.cm.getLine(--e.line),e.ch=e.text.length,!0}function l(e){for(;;){var n=e.text.indexOf(">",e.ch)
if(-1==n){if(f(e))continue
return}if(u(e,n+1)){var t=e.text.lastIndexOf("/",n),i=t>-1&&!/\S/.test(e.text.slice(t+1,n))
return e.ch=n+1,i?"selfClose":"regular"}e.ch=n+1}}function c(e){for(;;){var n=e.ch?e.text.lastIndexOf("<",e.ch-1):-1
if(-1==n){if(o(e))continue
return}if(u(e,n+1)){i.lastIndex=n,e.ch=n
var t=i.exec(e.text)
if(t&&t.index==n)return t}else e.ch=n}}function a(e){for(;;){i.lastIndex=e.ch
var n=i.exec(e.text)
if(!n){if(f(e))continue
return}if(u(e,n.index+1))return e.ch=n.index+n[0].length,n
e.ch=n.index+1}}function s(e){for(;;){var n=e.ch?e.text.lastIndexOf(">",e.ch-1):-1
if(-1==n){if(o(e))continue
return}if(u(e,n+1)){var t=e.text.lastIndexOf("/",n),i=t>-1&&!/\S/.test(e.text.slice(t+1,n))
return e.ch=n+1,i?"selfClose":"regular"}e.ch=n}}function h(e,t){for(var i=[];;){var r,u=a(e),f=e.line,o=e.ch-(u?u[0].length:0)
if(!u||!(r=l(e)))return
if("selfClose"!=r)if(u[1]){for(var c=i.length-1;c>=0;--c)if(i[c]==u[2]){i.length=c
break}if(c<0&&(!t||t==u[2]))return{tag:u[2],from:n(f,o),to:n(e.line,e.ch)}}else i.push(u[2])}}function F(e,t){for(var i=[];;){var r=s(e)
if(!r)return
if("selfClose"!=r){var u=e.line,f=e.ch,o=c(e)
if(!o)return
if(o[1])i.push(o[2])
else{for(var l=i.length-1;l>=0;--l)if(i[l]==o[2]){i.length=l
break}if(l<0&&(!t||t==o[2]))return{tag:o[2],from:n(e.line,e.ch),to:n(u,f)}}}else c(e)}}e.registerHelper("fold","xml",function(e,t){for(var i=new r(e,t.line,0);;){var u,f=a(i)
if(!f||i.line!=t.line||!(u=l(i)))return
if(!f[1]&&"selfClose"!=u){t=n(i.line,i.ch)
var o=h(i,f[2])
return o&&{from:t,to:o.from}}}}),e.findMatchingTag=function(e,t,i){var u=new r(e,t.line,t.ch,i)
if(-1!=u.text.indexOf(">")||-1!=u.text.indexOf("<")){var f=l(u),o=f&&n(u.line,u.ch),a=f&&c(u)
if(f&&a&&(x=t,!(((s=u).line-x.line||s.ch-x.ch)>0))){var s,x,g={from:n(u.line,u.ch),to:o,tag:a[2]}
return"selfClose"==f?{open:g,close:null,at:"open"}:a[1]?{open:F(u,a[2]),close:g,at:"close"}:{open:g,close:h(u=new r(e,o.line,o.ch,i),a[2]),at:"open"}}}},e.findEnclosingTag=function(e,n,t){for(var i=new r(e,n.line,n.ch,t);;){var u=F(i)
if(!u)break
var f=h(new r(e,n.line,n.ch,t),u.tag)
if(f)return{open:u,close:f}}},e.scanForClosingTag=function(e,n,t,i){return h(new r(e,n.line,n.ch,i?{from:0,to:i}:null),t)}})
