(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){var n=/\s/,t=e.Pos
function r(e,n){var r=e.getRange(t(n.line,n.ch-1),t(n.line,n.ch+1))
return 2==r.length?r:null}function i(n,t,r){var i=n.getLine(t.line),o=n.getTokenAt(t)
if(/\bstring2?\b/.test(o.type))return!1
var a=new e.StringStream(i.slice(0,t.ch)+r+i.slice(t.ch),4)
for(a.pos=a.start=o.start;;){var l=n.getMode().token(a,o.state)
if(a.pos>=t.ch+1)return/\bstring2?\b/.test(l)
a.start=a.pos}}e.defineOption("autoCloseBrackets",!1,function(o,a,l){if(l!=e.Init&&l&&o.removeKeyMap("autoCloseBrackets"),a){var s="()[]{}''\"\"",c="'\"",f="[]{}"
"string"==typeof a?s=a:"object"==typeof a&&(null!=a.pairs&&(s=a.pairs),null!=a.triples&&(c=a.triples),null!=a.explode&&(f=a.explode))
var u=function(o,a){for(var l={name:"autoCloseBrackets",Backspace:function(n){if(n.getOption("disableInput"))return e.Pass
for(var i=n.listSelections(),a=0;a<i.length;a++){if(!i[a].empty())return e.Pass
var l=r(n,i[a].head)
if(!l||o.indexOf(l)%2!=0)return e.Pass}for(var a=i.length-1;a>=0;a--){var s=i[a].head
n.replaceRange("",t(s.line,s.ch-1),t(s.line,s.ch+1))}}},s="",c=0;c<o.length;c+=2)(function(r,o){s+=o,l["'"+r+"'"]=function(l){if(l.getOption("disableInput"))return e.Pass
for(var c,f=l.listSelections(),u=0;u<f.length;u++){var h,d=f[u],g=d.head,p=l.getRange(g,t(g.line,g.ch+1))
if(d.empty())if(r==o&&p==o)h=l.getRange(g,t(g.line,g.ch+3))==r+r+r?"skipThree":"skip"
else if(r==o&&g.ch>1&&a.indexOf(r)>=0&&l.getRange(t(g.line,g.ch-2),g)==r+r&&(g.ch<=2||l.getRange(t(g.line,g.ch-3),t(g.line,g.ch-2))!=r))h="addFour"
else if('"'==r||"'"==r){if(e.isWordChar(p)||!i(l,g,r))return e.Pass
h="both"}else{if(!(l.getLine(g.line).length==g.ch||s.indexOf(p)>=0||n.test(p)))return e.Pass
h="both"}else h="surround"
if(c){if(c!=h)return e.Pass}else c=h}l.operation(function(){if("skip"==c)l.execCommand("goCharRight")
else if("skipThree"==c)for(var e=0;e<3;e++)l.execCommand("goCharRight")
else if("surround"==c){for(var n=l.getSelections(),e=0;e<n.length;e++)n[e]=r+n[e]+o
l.replaceSelections(n,"around")}else"both"==c?(l.replaceSelection(r+o,null),l.execCommand("goCharLeft")):"addFour"==c&&(l.replaceSelection(r+r+r+r,"before"),l.execCommand("goCharRight"))})},r!=o&&(l["'"+o+"'"]=function(n){for(var r=n.listSelections(),i=0;i<r.length;i++){var a=r[i]
if(!a.empty()||n.getRange(a.head,t(a.head.line,a.head.ch+1))!=o)return e.Pass}n.execCommand("goCharRight")})})(o.charAt(c),o.charAt(c+1))
return l}(s,c)
f&&(u.Enter=function(n){return function(t){if(t.getOption("disableInput"))return e.Pass
for(var i=t.listSelections(),o=0;o<i.length;o++){if(!i[o].empty())return e.Pass
var a=r(t,i[o].head)
if(!a||n.indexOf(a)%2!=0)return e.Pass}t.operation(function(){t.replaceSelection("\n\n",null),t.execCommand("goCharLeft"),i=t.listSelections()
for(var e=0;e<i.length;e++){var n=i[e].head.line
t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}})}}(f)),o.addKeyMap(u)}})})