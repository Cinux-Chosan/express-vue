(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],t):t(CodeMirror)})(function(t){"use strict"
var r,e,n,o={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},i=t.Pos
function s(t){return"string"==typeof t?t:t.text}function a(t,r){if(!t.slice)return t[r]
for(var e=t.length-1;e>=0;e--)if(s(t[e])==r)return t[e]}function u(t){var r={}
for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])
return r}function f(t,r){var e=t.length,n=s(r).substr(0,e)
return t.toUpperCase()===n.toUpperCase()}function c(t,r,e,n){for(var o in e)e.hasOwnProperty(o)&&(Array.isArray(e)&&(o=e[o]),f(r,o)&&t.push(n(o)))}function l(t){for(var r=s(t).split("."),e=0;e<r.length;e++)r[e]="`"+r[e]+"`"
var n=r.join(".")
return"string"==typeof t?n:((t=u(t)).text=n,t)}function p(t,n,s,f){for(var p,v=!1,A=[],y=n.start,m=!0;m;)m="."==n.string.charAt(0),v=v||"`"==n.string.charAt(0),y=n.start,A.unshift(("."==(p=n.string).charAt(0)&&(p=p.substr(1)),p.replace(/`/g,""))),"."==(n=f.getTokenAt(i(t.line,n.start))).string&&(m=!0,n=f.getTokenAt(i(t.line,n.start)))
var x=A.join(".")
c(s,x,r,function(t){return v?l(t):t}),c(s,x,e,function(t){return v?l(t):t}),x=A.pop()
var b=A.join(".")
a(r,b)||(b=function(t,e){var n=e.doc,s=n.getValue(),u=t.toUpperCase(),f="",c="",l=[],p={start:i(0,0),end:i(e.lastLine(),e.getLineHandle(e.lastLine()).length)},v=s.indexOf(o.QUERY_DIV)
for(;-1!=v;)l.push(n.posFromIndex(v)),v=s.indexOf(o.QUERY_DIV,v+1)
l.unshift(i(0,0)),l.push(i(e.lastLine(),e.getLineHandle(e.lastLine()).text.length))
for(var A=0,y=h(e.getCursor()),m=0;m<l.length;m++){var x=h(l[m])
if(y>A&&y<=x){p={start:d(A),end:d(x)}
break}A=x}for(var b=n.getRange(p.start,p.end,!1),m=0;m<b.length;m++){var q=b[m]
if(g(q,function(t){var e=t.toUpperCase()
e===u&&a(r,f)&&(c=f),e!==o.ALIAS_KEYWORD&&(f=t)}),c)break}return c}(b,f))
var q=a(r,b)
return q&&Array.isArray(r)&&q.columns&&(q=q.columns),q&&c(s,x,q,function(t){return"string"==typeof t?t=b+"."+t:(t=u(t)).text=b+"."+t.text,v?l(t):t}),y}function g(t,r){if(t)for(var e=/[,;]/g,n=t.split(" "),o=0;o<n.length;o++)r(n[o]?n[o].replace(e,""):"")}function h(t){return t.line+t.ch/Math.pow(10,6)}function d(t){return i(Math.floor(t),+t.toString().split(".").pop())}t.registerHelper("hint","sql",function(o,s){r=s&&s.tables||{}
var u=s&&s.defaultTable
e=u&&a(r,u)||[],n=n||function(r){var e=r.doc.modeOption
return"sql"===e&&(e="text/x-sql"),t.resolveMode(e).keywords}(o)
var f,l,g,h=o.getCursor(),d=[],v=o.getTokenAt(h)
return v.end>h.ch&&(v.end=h.ch,v.string=v.string.slice(0,h.ch-v.start)),v.string.match(/^[.`\w@]\w*$/)?(g=v.string,f=v.start,l=v.end):(f=l=h.ch,g=""),"."==g.charAt(0)||"`"==g.charAt(0)?f=p(h,v,d,o):(c(d,g,r,function(t){return t}),c(d,g,e,function(t){return t}),c(d,g,n,function(t){return t.toUpperCase()})),{list:d,from:i(h.line,f),to:i(h.line,l)}})})
