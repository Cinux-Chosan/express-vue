(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var n={},t=/[^\s\u00a0]/,i=e.Pos
function l(e){var n=e.search(t)
return-1==n?0:n}e.commands.toggleComment=function(e){for(var n=1/0,t=e.listSelections(),l=null,o=t.length-1;o>=0;o--){var a=t[o].from(),r=t[o].to()
a.line>=n||(r.line>=n&&(r=i(n,0)),n=a.line,null==l?e.uncomment(a,r)?l="un":(e.lineComment(a,r),l="line"):"un"==l?e.uncomment(a,r):e.lineComment(a,r))}},e.defineExtension("lineComment",function(e,o,a){a||(a=n)
var r=this,m=r.getModeAt(e),c=a.lineComment||m.lineComment
if(c){var f=r.getLine(e.line)
if(null!=f){var g=Math.min(0!=o.ch||o.line==e.line?o.line+1:o.line,r.lastLine()+1),s=null==a.padding?" ":a.padding,d=a.commentBlankLines||e.line==o.line
r.operation(function(){if(a.indent)for(var n=f.slice(0,l(f)),o=e.line;o<g;++o){var m=r.getLine(o),u=n.length;(d||t.test(m))&&(m.slice(0,u)!=n&&(u=l(m)),r.replaceRange(n+c+s,i(o,0),i(o,u)))}else for(o=e.line;o<g;++o)(d||t.test(r.getLine(o)))&&r.replaceRange(c+s,i(o,0))})}}else(a.blockCommentStart||m.blockCommentStart)&&(a.fullLines=!0,r.blockComment(e,o,a))}),e.defineExtension("blockComment",function(e,l,o){o||(o=n)
var a=this,r=a.getModeAt(e),m=o.blockCommentStart||r.blockCommentStart,c=o.blockCommentEnd||r.blockCommentEnd
if(m&&c){var f=Math.min(l.line,a.lastLine())
f!=e.line&&0==l.ch&&t.test(a.getLine(f))&&--f
var g=null==o.padding?" ":o.padding
e.line>f||a.operation(function(){if(0!=o.fullLines){var n=t.test(a.getLine(f))
a.replaceRange(g+c,i(f)),a.replaceRange(m+g,i(e.line,0))
var s=o.blockCommentLead||r.blockCommentLead
if(null!=s)for(var d=e.line+1;d<=f;++d)(d!=f||n)&&a.replaceRange(s+g,i(d,0))}else a.replaceRange(c,l),a.replaceRange(m,e)})}else(o.lineComment||r.lineComment)&&0!=o.fullLines&&a.lineComment(e,l,o)}),e.defineExtension("uncomment",function(e,l,o){o||(o=n)
var a,r=this,m=r.getModeAt(e),c=Math.min(0!=l.ch||l.line==e.line?l.line:l.line-1,r.lastLine()),f=Math.min(e.line,c),g=o.lineComment||m.lineComment,s=[],d=null==o.padding?" ":o.padding
e:if(g){for(var u=f;u<=c;++u){var h=r.getLine(u),p=h.indexOf(g)
if(p>-1&&!/comment/.test(r.getTokenTypeAt(i(u,p+1)))&&(p=-1),-1==p&&(u!=c||u==f)&&t.test(h))break e
if(p>-1&&t.test(h.slice(0,p)))break e
s.push(h)}if(r.operation(function(){for(var e=f;e<=c;++e){var n=s[e-f],t=n.indexOf(g),l=t+g.length
t<0||(n.slice(l,l+d.length)==d&&(l+=d.length),a=!0,r.replaceRange("",i(e,t),i(e,l)))}}),a)return!0}var v=o.blockCommentStart||m.blockCommentStart,C=o.blockCommentEnd||m.blockCommentEnd
if(!v||!C)return!1
var b=o.blockCommentLead||m.blockCommentLead,k=r.getLine(f),L=c==f?k:r.getLine(c),x=k.indexOf(v),R=L.lastIndexOf(C)
if(-1==R&&f!=c&&(L=r.getLine(--c),R=L.lastIndexOf(C)),-1==x||-1==R||!/comment/.test(r.getTokenTypeAt(i(f,x+1)))||!/comment/.test(r.getTokenTypeAt(i(c,R+1))))return!1
var O=k.lastIndexOf(v,e.ch),M=-1==O?-1:k.slice(0,e.ch).indexOf(C,O+v.length)
if(-1!=O&&-1!=M&&M+C.length!=e.ch)return!1
M=L.indexOf(C,l.ch)
var E=L.slice(l.ch).lastIndexOf(v,M-l.ch)
return O=-1==M||-1==E?-1:l.ch+E,(-1==M||-1==O||O==l.ch)&&(r.operation(function(){r.replaceRange("",i(c,R-(d&&L.slice(R-d.length,R)==d?d.length:0)),i(c,R+C.length))
var e=x+v.length
if(d&&k.slice(e,e+d.length)==d&&(e+=d.length),r.replaceRange("",i(f,x),i(f,e)),b)for(var n=f+1;n<=c;++n){var l=r.getLine(n),o=l.indexOf(b)
if(-1!=o&&!t.test(l.slice(0,o))){var a=o+b.length
d&&l.slice(a,a+d.length)==d&&(a+=d.length),r.replaceRange("",i(n,o),i(n,a))}}}),!0)})})
