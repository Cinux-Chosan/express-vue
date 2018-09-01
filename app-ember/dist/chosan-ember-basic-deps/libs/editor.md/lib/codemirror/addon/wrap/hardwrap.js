(function(r){"object"==typeof exports&&"object"==typeof module?r(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],r):r(CodeMirror)})(function(r){"use strict"
var t=r.Pos
function e(r,t,e){for(var n=e.paragraphStart||r.getHelper(t,"paragraphStart"),o=t.line,a=r.firstLine();o>a;--o){var i=r.getLine(o)
if(n&&n.test(i))break
if(!/\S/.test(i)){++o
break}}for(var f=e.paragraphEnd||r.getHelper(t,"paragraphEnd"),l=t.line+1,s=r.lastLine();l<=s;++l){i=r.getLine(l)
if(f&&f.test(i)){++l
break}if(!/\S/.test(i))break}return{from:o,to:l}}function n(r,t,e,n){for(var o=t;o>0&&!e.test(r.slice(o-1,o+1));--o);0==o&&(o=t)
var a=o
if(n)for(;" "==r.charAt(a-1);)--a
return{from:a,to:o}}function o(e,o,a,i){o=e.clipPos(o),a=e.clipPos(a)
var f=i.column||80,l=i.wrapOn||/\s\S|-[^\.\d]/,s=!1!==i.killTrailingSpace,h=[],c="",g=o.line,p=e.getRange(o,a,!1)
if(!p.length)return null
for(var u=p[0].match(/^[ \t]*/)[0],m=0;m<p.length;++m){var v=p[m],d=c.length,b=0
c&&v&&!l.test(c.charAt(c.length-1)+v.charAt(0))&&(c+=" ",b=1)
var x=""
if(m&&(x=v.match(/^\s*/)[0],v=v.slice(x.length)),c+=v,m){var S=c.length>f&&u==x&&n(c,f,l,s)
S&&S.from==d&&S.to==d+b?(c=u+v,++g):h.push({text:[b?" ":""],from:t(g,d),to:t(g+1,x.length)})}for(;c.length>f;){var E=n(c,f,l,s)
h.push({text:["",u],from:t(g,E.from),to:t(g,E.to)}),c=u+c.slice(E.to),++g}}return h.length&&e.operation(function(){for(var r=0;r<h.length;++r){var t=h[r]
e.replaceRange(t.text,t.from,t.to)}}),h.length?{from:h[0].from,to:r.changeEnd(h[h.length-1])}:null}r.defineExtension("wrapParagraph",function(r,n){n=n||{},r||(r=this.getCursor())
var a=e(this,r,n)
return o(this,t(a.from,0),t(a.to-1),n)}),r.commands.wrapLines=function(r){r.operation(function(){for(var n=r.listSelections(),a=r.lastLine()+1,i=n.length-1;i>=0;i--){var f,l=n[i]
if(l.empty()){var s=e(r,l.head,{})
f={from:t(s.from,0),to:t(s.to-1)}}else f={from:l.from(),to:l.to()}
f.to.line>=a||(a=f.from.line,o(r,f.from,f.to,{}))}})},r.defineExtension("wrapRange",function(r,t,e){return o(this,r,t,e||{})}),r.defineExtension("wrapParagraphsInRange",function(r,n,a){a=a||{}
for(var i=this,f=[],l=r.line;l<=n.line;){var s=e(i,t(l,0),a)
f.push(s),l=s.to}var h=!1
return f.length&&i.operation(function(){for(var r=f.length-1;r>=0;--r)h=h||o(i,t(f[r].from,0),t(f[r].to-1),a)}),h})})
