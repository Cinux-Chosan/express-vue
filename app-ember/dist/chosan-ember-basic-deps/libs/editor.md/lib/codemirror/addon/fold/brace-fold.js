(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerHelper("fold","brace",function(r,n){var t,i=n.line,o=r.getLine(i)
function l(l){for(var f=n.ch,s=0;;){var u=f<=0?-1:o.lastIndexOf(l,f-1)
if(-1!=u){if(1==s&&u<n.ch)break
if(t=r.getTokenTypeAt(e.Pos(i,u+1)),!/^(comment|string)/.test(t))return u+1
f=u-1}else{if(1==s)break
s=1,f=o.length}}}var f,s="{",u="}"
if(null==(f=l("{"))&&(s="[",u="]",f=l("[")),null!=f){var a,d,c=1,g=r.lastLine()
e:for(var v=i;v<=g;++v)for(var p=r.getLine(v),m=v==i?f:0;;){var P=p.indexOf(s,m),k=p.indexOf(u,m)
if(P<0&&(P=p.length),k<0&&(k=p.length),(m=Math.min(P,k))==p.length)break
if(r.getTokenTypeAt(e.Pos(v,m+1))==t)if(m==P)++c
else if(!--c){a=v,d=m
break e}++m}if(null!=a&&(i!=a||d!=f))return{from:e.Pos(i,f),to:e.Pos(a,d)}}}),e.registerHelper("fold","import",function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null
var t=r.getTokenAt(e.Pos(n,1))
if(/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null
for(var i=n,o=Math.min(r.lastLine(),n+10);i<=o;++i){var l=r.getLine(i).indexOf(";")
if(-1!=l)return{startCh:t.end,end:e.Pos(i,l)}}}var i,o=t(n=n.line)
if(!o||t(n-1)||(i=t(n-2))&&i.end.line==n-1)return null
for(var l=o.end;;){var f=t(l.line+1)
if(null==f)break
l=f.end}return{from:r.clipPos(e.Pos(n,o.startCh+1)),to:l}}),e.registerHelper("fold","include",function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null
var t=r.getTokenAt(e.Pos(n,1))
return/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}var i=t(n=n.line)
if(null==i||null!=t(n-1))return null
for(var o=n;;){if(null==t(o+1))break;++o}return{from:e.Pos(n,i+1),to:r.clipPos(e.Pos(o))}})})